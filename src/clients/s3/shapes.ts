/**
 * <p>Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config"> Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Policy</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface AbortIncompleteMultipartUpload {
  /**
   * Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload.
   */
  readonly daysAfterInitiation?: DaysAfterInitiation;
}

/**
 * undefined
 */
export interface AbortMultipartUploadRequest {
  /**
   * The bucket name to which the upload was taking place.  When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide. When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon Simple Storage Service Developer Guide.
   */
  readonly bucket: BucketName;
  /**
   * Key of the object for which the multipart upload was initiated.
   */
  readonly key: ObjectKey;
  /**
   * Upload ID that identifies the multipart upload.
   */
  readonly uploadId: MultipartUploadId;
  /**
   * Upload ID that identifies the multipart upload.
   */
  readonly requestPayer?: RequestPayer;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * <p>Configures the transfer acceleration state for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html">Amazon S3 Transfer Acceleration</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface AccelerateConfiguration {
  /**
   * Specifies the transfer acceleration status of the bucket.
   */
  readonly status?: BucketAccelerateStatus;
}

/**
 * <p>Contains the elements that set the ACL permissions for an object per grantee.</p>
 */
export interface AccessControlPolicy {
  /**
   * A list of grants.
   */
  readonly grants?: Grants;
  /**
   * Container for the bucket owner's display name and ID.
   */
  readonly owner?: Owner;
}

/**
 * <p>A container for information about access control for replicas.</p>
 */
export interface AccessControlTranslation {
  /**
   * Specifies the replica ownership. For default and valid values, see PUT bucket replication in the Amazon Simple Storage Service API Reference.
   */
  readonly owner: OwnerOverride;
}

/**
 * <p>A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The operator must have at least two predicates in any combination, and an object must match all of the predicates for the filter to apply.</p>
 */
export interface AnalyticsAndOperator {
  /**
   * The prefix to use when evaluating an AND predicate: The prefix that an object must have to be included in the metrics results.
   */
  readonly prefix?: Prefix;
  /**
   * The list of tags to use when evaluating an AND predicate.
   */
  readonly tags?: TagSet;
}

/**
 * <p> Specifies the configuration and any analyses for the analytics filter of an Amazon S3 bucket.</p>
 */
export interface AnalyticsConfiguration {
  /**
   * The ID that identifies the analytics configuration.
   */
  readonly id: AnalyticsId;
  /**
   * The filter used to describe a set of objects for analyses. A filter must have exactly one prefix, one tag, or one conjunction (AnalyticsAndOperator). If no filter is provided, all objects will be considered in any analysis.
   */
  readonly filter?: AnalyticsFilter;
  /**
   * Contains data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes.
   */
  readonly storageClassAnalysis: StorageClassAnalysis;
}

/**
 * <p>Where to publish the analytics results.</p>
 */
export interface AnalyticsExportDestination {
  /**
   * A destination signifying output to an S3 bucket.
   */
  readonly s3BucketDestination: AnalyticsS3BucketDestination;
}

/**
 * <p>The filter used to describe a set of objects for analyses. A filter must have exactly one prefix, one tag, or one conjunction (AnalyticsAndOperator). If no filter is provided, all objects will be considered in any analysis.</p>
 */
export interface AnalyticsFilter {
  /**
   * The prefix to use when evaluating an analytics filter.
   */
  readonly prefix?: Prefix;
  /**
   * The tag to use when evaluating an analytics filter.
   */
  readonly tag?: Tag;
  /**
   * A conjunction (logical AND) of predicates, which is used in evaluating an analytics filter. The operator must have at least two predicates.
   */
  readonly and?: AnalyticsAndOperator;
}

/**
 * <p>Contains information about where to publish the analytics results.</p>
 */
export interface AnalyticsS3BucketDestination {
  /**
   * Specifies the file format used when exporting data to Amazon S3.
   */
  readonly format: AnalyticsS3ExportFileFormat;
  /**
   * The account ID that owns the destination S3 bucket. If no account ID is provided, the owner is not validated before exporting data.   Although this value is optional, we strongly recommend that you set it to help prevent problems if the destination bucket ownership changes.
   */
  readonly bucketAccountId?: AccountId;
  /**
   * The Amazon Resource Name (ARN) of the bucket to which data is exported.
   */
  readonly bucket: BucketName;
  /**
   * The prefix to use when exporting data. The prefix is prepended to all results.
   */
  readonly prefix?: Prefix;
}

/**
 * <p> In terms of implementation, a Bucket is a resource. An Amazon S3 bucket name is globally unique, and the namespace is shared by all AWS accounts. </p>
 */
export interface Bucket {
  /**
   * The name of the bucket.
   */
  readonly name?: BucketName;
  /**
   * Date the bucket was created.
   */
  readonly creationDate?: CreationDate;
}

/**
 * <p>Specifies the lifecycle configuration for objects in an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html">Object Lifecycle Management</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface BucketLifecycleConfiguration {
  /**
   * A lifecycle rule for individual objects in an Amazon S3 bucket.
   */
  readonly rules: LifecycleRules;
}

/**
 * <p>Container for logging status information.</p>
 */
export interface BucketLoggingStatus {
  /**
   * A lifecycle rule for individual objects in an Amazon S3 bucket.
   */
  readonly loggingEnabled?: LoggingEnabled;
}

/**
 * <p>Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html">Enabling Cross-Origin Resource Sharing</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface CORSConfiguration {
  /**
   * A set of origins and methods (cross-origin access that you want to allow). You can add up to 100 rules to the configuration.
   */
  readonly corsRules: CORSRules;
}

/**
 * <p>Specifies a cross-origin access rule for an Amazon S3 bucket.</p>
 */
export interface CORSRule {
  /**
   * Headers that are specified in the Access-Control-Request-Headers header. These headers are allowed in a preflight OPTIONS request. In response to any preflight OPTIONS request, Amazon S3 returns any requested headers that are allowed.
   */
  readonly allowedHeaders?: AllowedHeaders;
  /**
   * An HTTP method that you allow the origin to execute. Valid values are GET, PUT, HEAD, POST, and DELETE.
   */
  readonly allowedMethods: AllowedMethods;
  /**
   * One or more origins you want customers to be able to access the bucket from.
   */
  readonly allowedOrigins: AllowedOrigins;
  /**
   * One or more headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript XMLHttpRequest object).
   */
  readonly exposeHeaders?: ExposeHeaders;
  /**
   * The time in seconds that your browser is to cache the preflight response for the specified resource.
   */
  readonly maxAgeSeconds?: MaxAgeSeconds;
}

/**
 * <p>Describes how an uncompressed comma-separated values (CSV)-formatted input object is formatted.</p>
 */
export interface CSVInput {
  /**
   * Describes the first line of input. Valid values are:    NONE: First line is not a header.    IGNORE: First line is a header, but you can't use the header values to indicate the column in an expression. You can use column position (such as _1, _2, …) to indicate the column (SELECT s._1 FROM OBJECT s).    Use: First line is a header, and you can use the header value to identify a column in an expression (SELECT "name" FROM OBJECT).
   */
  readonly fileHeaderInfo?: FileHeaderInfo;
  /**
   * A single character used to indicate that a row should be ignored when the character is present at the start of that row. You can specify any character to indicate a comment line.
   */
  readonly comments?: Comments;
  /**
   * A single character used for escaping the quotation mark character inside an already escaped value. For example, the value """ a , b """ is parsed as " a , b ".
   */
  readonly quoteEscapeCharacter?: QuoteEscapeCharacter;
  /**
   * A single character used to separate individual records in the input. Instead of the default value, you can specify an arbitrary delimiter.
   */
  readonly recordDelimiter?: RecordDelimiter;
  /**
   * A single character used to separate individual fields in a record. You can specify an arbitrary delimiter.
   */
  readonly fieldDelimiter?: FieldDelimiter;
  /**
   * A single character used for escaping when the field delimiter is part of the value. For example, if the value is a, b, Amazon S3 wraps this field value in quotation marks, as follows: " a , b ". Type: String Default: "  Ancestors: CSV
   */
  readonly quoteCharacter?: QuoteCharacter;
  /**
   * Specifies that CSV field values may contain quoted record delimiters and such records should be allowed. Default value is FALSE. Setting this value to TRUE may lower performance.
   */
  readonly allowQuotedRecordDelimiter?: AllowQuotedRecordDelimiter;
}

/**
 * <p>Describes how uncompressed comma-separated values (CSV)-formatted results are formatted.</p>
 */
export interface CSVOutput {
  /**
   * Indicates whether to use quotation marks around output fields.     ALWAYS: Always use quotation marks for output fields.    ASNEEDED: Use quotation marks for output fields when needed.
   */
  readonly quoteFields?: QuoteFields;
  /**
   * The single character used for escaping the quote character inside an already escaped value.
   */
  readonly quoteEscapeCharacter?: QuoteEscapeCharacter;
  /**
   * A single character used to separate individual records in the output. Instead of the default value, you can specify an arbitrary delimiter.
   */
  readonly recordDelimiter?: RecordDelimiter;
  /**
   * The value used to separate individual fields in a record. You can specify an arbitrary delimiter.
   */
  readonly fieldDelimiter?: FieldDelimiter;
  /**
   * A single character used for escaping when the field delimiter is part of the value. For example, if the value is a, b, Amazon S3 wraps this field value in quotation marks, as follows: " a , b ".
   */
  readonly quoteCharacter?: QuoteCharacter;
}

/**
 * <p>Container for specifying the AWS Lambda notification configuration.</p>
 */
export interface CloudFunctionConfiguration {
  /**
   * A single character used for escaping when the field delimiter is part of the value. For example, if the value is a, b, Amazon S3 wraps this field value in quotation marks, as follows: " a , b ".
   */
  readonly id?: NotificationId;
  /**
   * A single character used for escaping when the field delimiter is part of the value. For example, if the value is a, b, Amazon S3 wraps this field value in quotation marks, as follows: " a , b ".
   */
  readonly event?: Event;
  /**
   * Bucket events for which to send notifications.
   */
  readonly events?: EventList;
  /**
   * Lambda cloud function ARN that Amazon S3 can invoke when it detects events of the specified type.
   */
  readonly cloudFunction?: CloudFunction;
  /**
   * The role supporting the invocation of the Lambda function
   */
  readonly invocationRole?: CloudFunctionInvocationRole;
}

/**
 * <p>Container for all (if there are any) keys between Prefix and the next occurrence of the string specified by a delimiter. CommonPrefixes lists keys that act like subdirectories in the directory specified by Prefix. For example, if the prefix is notes/ and the delimiter is a slash (/) as in notes/summer/july, the common prefix is notes/summer/. </p>
 */
export interface CommonPrefix {
  /**
   * Container for the specified common prefix.
   */
  readonly prefix?: Prefix;
}

/**
 * undefined
 */
export interface CompleteMultipartUploadRequest {
  /**
   * Name of the bucket to which the multipart upload was initiated.
   */
  readonly bucket: BucketName;
  /**
   * Object key for which the multipart upload was initiated.
   */
  readonly key: ObjectKey;
  /**
   * The container for the multipart upload request information.
   */
  readonly multipartUpload?: CompletedMultipartUpload;
  /**
   * ID for the initiated multipart upload.
   */
  readonly uploadId: MultipartUploadId;
  /**
   * ID for the initiated multipart upload.
   */
  readonly requestPayer?: RequestPayer;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * <p>The container for the completed multipart upload details.</p>
 */
export interface CompletedMultipartUpload {
  /**
   * Array of CompletedPart data types.
   */
  readonly parts?: CompletedPartList;
}

/**
 * <p>Details of the parts that were uploaded.</p>
 */
export interface CompletedPart {
  /**
   * Entity tag returned when the part was uploaded.
   */
  readonly eTag?: ETag;
  /**
   * Part number that identifies the part. This is a positive integer between 1 and 10,000.
   */
  readonly partNumber?: PartNumber;
}

/**
 * <p>A container for describing a condition that must be met for the specified redirect to apply. For example, 1. If request is for pages in the <code>/docs</code> folder, redirect to the <code>/documents</code> folder. 2. If request results in HTTP error 4xx, redirect request to another host where you might process the error.</p>
 */
export interface Condition {
  /**
   * The HTTP error code when the redirect is applied. In the event of an error, if the error code equals this value, then the specified redirect is applied. Required when parent element Condition is specified and sibling KeyPrefixEquals is not specified. If both are specified, then both must be true for the redirect to be applied.
   */
  readonly httpErrorCodeReturnedEquals?: HttpErrorCodeReturnedEquals;
  /**
   * The object key name prefix when the redirect is applied. For example, to redirect requests for ExamplePage.html, the key prefix will be ExamplePage.html. To redirect request for all pages with the prefix docs/, the key prefix will be /docs, which identifies all objects in the docs/ folder. Required when the parent element Condition is specified and sibling HttpErrorCodeReturnedEquals is not specified. If both conditions are specified, both must be true for the redirect to be applied.
   */
  readonly keyPrefixEquals?: KeyPrefixEquals;
}

/**
 * <p/>
 */
export interface ContinuationEvent {
}

/**
 * undefined
 */
export interface CopyObjectRequest {
  /**
   * The canned ACL to apply to the object. This action is not supported by Amazon S3 on Outposts.
   */
  readonly acl?: ObjectCannedACL;
  /**
   * The name of the destination bucket. When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide. When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon Simple Storage Service Developer Guide.
   */
  readonly bucket: BucketName;
  /**
   * Specifies caching behavior along the request/reply chain.
   */
  readonly cacheControl?: CacheControl;
  /**
   * Specifies presentational information for the object.
   */
  readonly contentDisposition?: ContentDisposition;
  /**
   * Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.
   */
  readonly contentEncoding?: ContentEncoding;
  /**
   * The language the content is in.
   */
  readonly contentLanguage?: ContentLanguage;
  /**
   * A standard MIME type describing the format of the object data.
   */
  readonly contentType?: ContentType;
  /**
   * Specifies the source object for the copy operation. You specify the value in one of two formats, depending on whether you want to access the source object through an access point:   For objects not accessed through an access point, specify the name of the source bucket and the key of the source object, separated by a slash (/). For example, to copy the object reports/january.pdf from the bucket awsexamplebucket, use awsexamplebucket/reports/january.pdf. The value must be URL encoded.   For objects accessed through access points, specify the Amazon Resource Name (ARN) of the object as accessed through the access point, in the format arn:aws:s3:&lt;Region&gt;:&lt;account-id&gt;:accesspoint/&lt;access-point-name&gt;/object/&lt;key&gt;. For example, to copy the object reports/january.pdf through access point my-access-point owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3:us-west-2:123456789012:accesspoint/my-access-point/object/reports/january.pdf. The value must be URL encoded.  Amazon S3 supports copy operations using access points only when the source and destination buckets are in the same AWS Region.  Alternatively, for objects accessed through Amazon S3 on Outposts, specify the ARN of the object as accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/object/&lt;key&gt;. For example, to copy the object reports/january.pdf through outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/object/reports/january.pdf. The value must be URL encoded.    To copy a specific version of an object, append ?versionId=&lt;version-id&gt; to the value (for example, awsexamplebucket/reports/january.pdf?versionId=QUpfdndhfd8438MNFDN93jdnJFkdmqnh893). If you don't specify a version ID, Amazon S3 copies the latest version of the source object.
   */
  readonly copySource: CopySource;
  /**
   * Copies the object if its entity tag (ETag) matches the specified tag.
   */
  readonly copySourceIfMatch?: CopySourceIfMatch;
  /**
   * Copies the object if it has been modified since the specified time.
   */
  readonly copySourceIfModifiedSince?: CopySourceIfModifiedSince;
  /**
   * Copies the object if its entity tag (ETag) is different than the specified ETag.
   */
  readonly copySourceIfNoneMatch?: CopySourceIfNoneMatch;
  /**
   * Copies the object if it hasn't been modified since the specified time.
   */
  readonly copySourceIfUnmodifiedSince?: CopySourceIfUnmodifiedSince;
  /**
   * The date and time at which the object is no longer cacheable.
   */
  readonly expires?: Expires;
  /**
   * Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object. This action is not supported by Amazon S3 on Outposts.
   */
  readonly grantFullControl?: GrantFullControl;
  /**
   * Allows grantee to read the object data and its metadata. This action is not supported by Amazon S3 on Outposts.
   */
  readonly grantRead?: GrantRead;
  /**
   * Allows grantee to read the object ACL. This action is not supported by Amazon S3 on Outposts.
   */
  readonly grantReadAcp?: GrantReadACP;
  /**
   * Allows grantee to write the ACL for the applicable object. This action is not supported by Amazon S3 on Outposts.
   */
  readonly grantWriteAcp?: GrantWriteACP;
  /**
   * The key of the destination object.
   */
  readonly key: ObjectKey;
  /**
   * A map of metadata to store with the object in S3.
   */
  readonly metadata?: Metadata;
  /**
   * Specifies whether the metadata is copied from the source object or replaced with metadata provided in the request.
   */
  readonly metadataDirective?: MetadataDirective;
  /**
   * Specifies whether the object tag-set are copied from the source object or replaced with tag-set provided in the request.
   */
  readonly taggingDirective?: TaggingDirective;
  /**
   * The server-side encryption algorithm used when storing this object in Amazon S3 (for example, AES256, aws:kms).
   */
  readonly serverSideEncryption?: ServerSideEncryption;
  /**
   * By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses the OUTPOSTS Storage Class. For more information, see Storage Classes in the Amazon S3 Service Developer Guide.
   */
  readonly storageClass?: StorageClass;
  /**
   * If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata.
   */
  readonly websiteRedirectLocation?: WebsiteRedirectLocation;
  /**
   * Specifies the algorithm to use to when encrypting the object (for example, AES256).
   */
  readonly sseCustomerAlgorithm?: SSECustomerAlgorithm;
  /**
   * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header.
   */
  readonly sseCustomerKey?: SSECustomerKey;
  /**
   * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
   */
  readonly sseCustomerKeyMd5?: SSECustomerKeyMD5;
  /**
   * Specifies the AWS KMS key ID to use for object encryption. All GET and PUT requests for an object protected by AWS KMS will fail if not made via SSL or using SigV4. For information about configuring using any of the officially supported AWS SDKs and AWS CLI, see Specifying the Signature Version in Request Authentication in the Amazon S3 Developer Guide.
   */
  readonly ssekmsKeyId?: SSEKMSKeyId;
  /**
   * Specifies the AWS KMS Encryption Context to use for object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.
   */
  readonly ssekmsEncryptionContext?: SSEKMSEncryptionContext;
  /**
   * Specifies the algorithm to use when decrypting the source object (for example, AES256).
   */
  readonly copySourceSseCustomerAlgorithm?: CopySourceSSECustomerAlgorithm;
  /**
   * Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided in this header must be one that was used when the source object was created.
   */
  readonly copySourceSseCustomerKey?: CopySourceSSECustomerKey;
  /**
   * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
   */
  readonly copySourceSseCustomerKeyMd5?: CopySourceSSECustomerKeyMD5;
  /**
   * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
   */
  readonly requestPayer?: RequestPayer;
  /**
   * The tag-set for the object destination object this value must be used in conjunction with the TaggingDirective. The tag-set must be encoded as URL Query parameters.
   */
  readonly tagging?: TaggingHeader;
  /**
   * The Object Lock mode that you want to apply to the copied object.
   */
  readonly objectLockMode?: ObjectLockMode;
  /**
   * The date and time when you want the copied object's Object Lock to expire.
   */
  readonly objectLockRetainUntilDate?: ObjectLockRetainUntilDate;
  /**
   * Specifies whether you want to apply a Legal Hold to the copied object.
   */
  readonly objectLockLegalHoldStatus?: ObjectLockLegalHoldStatus;
  /**
   * The account id of the expected destination bucket owner. If the destination bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
  /**
   * The account id of the expected source bucket owner. If the source bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedSourceBucketOwner?: AccountId;
}

/**
 * <p>Container for all response elements.</p>
 */
export interface CopyObjectResult {
  /**
   * Returns the ETag of the new object. The ETag reflects only changes to the contents of an object, not its metadata. The source and destination ETag is identical for a successfully copied object.
   */
  readonly eTag?: ETag;
  /**
   * Returns the date that the object was last modified.
   */
  readonly lastModified?: LastModified;
}

/**
 * <p>Container for all response elements.</p>
 */
export interface CopyPartResult {
  /**
   * Entity tag of the object.
   */
  readonly eTag?: ETag;
  /**
   * Date and time at which the object was uploaded.
   */
  readonly lastModified?: LastModified;
}

/**
 * <p>The configuration information for the bucket.</p>
 */
export interface CreateBucketConfiguration {
  /**
   * Specifies the Region where the bucket will be created. If you don't specify a Region, the bucket is created in the US East (N. Virginia) Region (us-east-1).
   */
  readonly locationConstraint?: BucketLocationConstraint;
}

/**
 * undefined
 */
export interface CreateBucketRequest {
  /**
   * The canned ACL to apply to the bucket.
   */
  readonly acl?: BucketCannedACL;
  /**
   * The name of the bucket to create.
   */
  readonly bucket: BucketName;
  /**
   * The configuration information for the bucket.
   */
  readonly createBucketConfiguration?: CreateBucketConfiguration;
  /**
   * Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.
   */
  readonly grantFullControl?: GrantFullControl;
  /**
   * Allows grantee to list the objects in the bucket.
   */
  readonly grantRead?: GrantRead;
  /**
   * Allows grantee to read the bucket ACL.
   */
  readonly grantReadAcp?: GrantReadACP;
  /**
   * Allows grantee to create, overwrite, and delete any object in the bucket.
   */
  readonly grantWrite?: GrantWrite;
  /**
   * Allows grantee to write the ACL for the applicable bucket.
   */
  readonly grantWriteAcp?: GrantWriteACP;
  /**
   * Specifies whether you want S3 Object Lock to be enabled for the new bucket.
   */
  readonly objectLockEnabledForBucket?: ObjectLockEnabledForBucket;
}

/**
 * undefined
 */
export interface CreateMultipartUploadRequest {
  /**
   * The canned ACL to apply to the object. This action is not supported by Amazon S3 on Outposts.
   */
  readonly acl?: ObjectCannedACL;
  /**
   * The name of the bucket to which to initiate the upload When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide. When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon Simple Storage Service Developer Guide.
   */
  readonly bucket: BucketName;
  /**
   * Specifies caching behavior along the request/reply chain.
   */
  readonly cacheControl?: CacheControl;
  /**
   * Specifies presentational information for the object.
   */
  readonly contentDisposition?: ContentDisposition;
  /**
   * Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.
   */
  readonly contentEncoding?: ContentEncoding;
  /**
   * The language the content is in.
   */
  readonly contentLanguage?: ContentLanguage;
  /**
   * A standard MIME type describing the format of the object data.
   */
  readonly contentType?: ContentType;
  /**
   * The date and time at which the object is no longer cacheable.
   */
  readonly expires?: Expires;
  /**
   * Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object. This action is not supported by Amazon S3 on Outposts.
   */
  readonly grantFullControl?: GrantFullControl;
  /**
   * Allows grantee to read the object data and its metadata. This action is not supported by Amazon S3 on Outposts.
   */
  readonly grantRead?: GrantRead;
  /**
   * Allows grantee to read the object ACL. This action is not supported by Amazon S3 on Outposts.
   */
  readonly grantReadAcp?: GrantReadACP;
  /**
   * Allows grantee to write the ACL for the applicable object. This action is not supported by Amazon S3 on Outposts.
   */
  readonly grantWriteAcp?: GrantWriteACP;
  /**
   * Object key for which the multipart upload is to be initiated.
   */
  readonly key: ObjectKey;
  /**
   * A map of metadata to store with the object in S3.
   */
  readonly metadata?: Metadata;
  /**
   * The server-side encryption algorithm used when storing this object in Amazon S3 (for example, AES256, aws:kms).
   */
  readonly serverSideEncryption?: ServerSideEncryption;
  /**
   * By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses the OUTPOSTS Storage Class. For more information, see Storage Classes in the Amazon S3 Service Developer Guide.
   */
  readonly storageClass?: StorageClass;
  /**
   * If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata.
   */
  readonly websiteRedirectLocation?: WebsiteRedirectLocation;
  /**
   * Specifies the algorithm to use to when encrypting the object (for example, AES256).
   */
  readonly sseCustomerAlgorithm?: SSECustomerAlgorithm;
  /**
   * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header.
   */
  readonly sseCustomerKey?: SSECustomerKey;
  /**
   * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
   */
  readonly sseCustomerKeyMd5?: SSECustomerKeyMD5;
  /**
   * Specifies the ID of the symmetric customer managed AWS KMS CMK to use for object encryption. All GET and PUT requests for an object protected by AWS KMS will fail if not made via SSL or using SigV4. For information about configuring using any of the officially supported AWS SDKs and AWS CLI, see Specifying the Signature Version in Request Authentication in the Amazon S3 Developer Guide.
   */
  readonly ssekmsKeyId?: SSEKMSKeyId;
  /**
   * Specifies the AWS KMS Encryption Context to use for object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.
   */
  readonly ssekmsEncryptionContext?: SSEKMSEncryptionContext;
  /**
   * Specifies the AWS KMS Encryption Context to use for object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.
   */
  readonly requestPayer?: RequestPayer;
  /**
   * The tag-set for the object. The tag-set must be encoded as URL Query parameters.
   */
  readonly tagging?: TaggingHeader;
  /**
   * Specifies the Object Lock mode that you want to apply to the uploaded object.
   */
  readonly objectLockMode?: ObjectLockMode;
  /**
   * Specifies the date and time when you want the Object Lock to expire.
   */
  readonly objectLockRetainUntilDate?: ObjectLockRetainUntilDate;
  /**
   * Specifies whether you want to apply a Legal Hold to the uploaded object.
   */
  readonly objectLockLegalHoldStatus?: ObjectLockLegalHoldStatus;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * <p>The container element for specifying the default Object Lock retention settings for new objects placed in the specified bucket.</p>
 */
export interface DefaultRetention {
  /**
   * The default Object Lock retention mode you want to apply to new objects placed in the specified bucket.
   */
  readonly mode?: ObjectLockRetentionMode;
  /**
   * The number of days that you want to specify for the default retention period.
   */
  readonly days?: Days;
  /**
   * The number of years that you want to specify for the default retention period.
   */
  readonly years?: Years;
}

/**
 * <p>Container for the objects to delete.</p>
 */
export interface Delete {
  /**
   * The objects to delete.
   */
  readonly objects: ObjectIdentifierList;
  /**
   * Element to enable quiet mode for the request. When you add this element, you must set its value to true.
   */
  readonly quiet?: Quiet;
}

/**
 * undefined
 */
export interface DeleteBucketAnalyticsConfigurationRequest {
  /**
   * The name of the bucket from which an analytics configuration is deleted.
   */
  readonly bucket: BucketName;
  /**
   * The ID that identifies the analytics configuration.
   */
  readonly id: AnalyticsId;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface DeleteBucketCorsRequest {
  /**
   * Specifies the bucket whose cors configuration is being deleted.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface DeleteBucketEncryptionRequest {
  /**
   * The name of the bucket containing the server-side encryption configuration to delete.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface DeleteBucketIntelligentTieringConfigurationRequest {
  /**
   * The name of the Amazon S3 bucket whose configuration you want to modify or retrieve.
   */
  readonly bucket: BucketName;
  /**
   * The ID used to identify the S3 Intelligent-Tiering configuration.
   */
  readonly id: IntelligentTieringId;
}

/**
 * undefined
 */
export interface DeleteBucketInventoryConfigurationRequest {
  /**
   * The name of the bucket containing the inventory configuration to delete.
   */
  readonly bucket: BucketName;
  /**
   * The ID used to identify the inventory configuration.
   */
  readonly id: InventoryId;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface DeleteBucketLifecycleRequest {
  /**
   * The bucket name of the lifecycle to delete.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface DeleteBucketMetricsConfigurationRequest {
  /**
   * The name of the bucket containing the metrics configuration to delete.
   */
  readonly bucket: BucketName;
  /**
   * The ID used to identify the metrics configuration.
   */
  readonly id: MetricsId;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface DeleteBucketOwnershipControlsRequest {
  /**
   * The Amazon S3 bucket whose OwnershipControls you want to delete.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface DeleteBucketPolicyRequest {
  /**
   * The bucket name.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface DeleteBucketReplicationRequest {
  /**
   * The bucket name.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface DeleteBucketRequest {
  /**
   * Specifies the bucket being deleted.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface DeleteBucketTaggingRequest {
  /**
   * The bucket that has the tag set to be removed.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface DeleteBucketWebsiteRequest {
  /**
   * The bucket name for which you want to remove the website configuration.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * <p>Information about the delete marker.</p>
 */
export interface DeleteMarkerEntry {
  /**
   * The account that created the delete marker.&gt;
   */
  readonly owner?: Owner;
  /**
   * The object key.
   */
  readonly key?: ObjectKey;
  /**
   * Version ID of an object.
   */
  readonly versionId?: ObjectVersionId;
  /**
   * Specifies whether the object is (true) or is not (false) the latest version of an object.
   */
  readonly isLatest?: IsLatest;
  /**
   * Date and time the object was last modified.
   */
  readonly lastModified?: LastModified;
}

/**
 * <p>Specifies whether Amazon S3 replicates delete markers. If you specify a <code>Filter</code> in your replication configuration, you must also include a <code>DeleteMarkerReplication</code> element. If your <code>Filter</code> includes a <code>Tag</code> element, the <code>DeleteMarkerReplication</code> <code>Status</code> must be set to Disabled, because Amazon S3 does not support replicating delete markers for tag-based rules. For an example configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-config-min-rule-config">Basic Rule Configuration</a>. </p> <p>For more information about delete marker replication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/delete-marker-replication.html">Basic Rule Configuration</a>. </p> <note> <p>If you are using an earlier version of the replication configuration, Amazon S3 handles replication of delete markers differently. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations">Backward Compatibility</a>.</p> </note>
 */
export interface DeleteMarkerReplication {
  /**
   * Indicates whether to replicate delete markers.  Indicates whether to replicate delete markers.
   */
  readonly status?: DeleteMarkerReplicationStatus;
}

/**
 * undefined
 */
export interface DeleteObjectRequest {
  /**
   * The bucket name of the bucket containing the object.  When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide. When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon Simple Storage Service Developer Guide.
   */
  readonly bucket: BucketName;
  /**
   * Key name of the object to delete.
   */
  readonly key: ObjectKey;
  /**
   * The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device. Required to permanently delete a versioned object if versioning is configured with MFA delete enabled.
   */
  readonly mfa?: MFA;
  /**
   * VersionId used to reference a specific version of the object.
   */
  readonly versionId?: ObjectVersionId;
  /**
   * VersionId used to reference a specific version of the object.
   */
  readonly requestPayer?: RequestPayer;
  /**
   * Indicates whether S3 Object Lock should bypass Governance-mode restrictions to process this operation.
   */
  readonly bypassGovernanceRetention?: BypassGovernanceRetention;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface DeleteObjectTaggingRequest {
  /**
   * The bucket name containing the objects from which to remove the tags.  When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide. When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon Simple Storage Service Developer Guide.
   */
  readonly bucket: BucketName;
  /**
   * Name of the object key.
   */
  readonly key: ObjectKey;
  /**
   * The versionId of the object that the tag-set will be removed from.
   */
  readonly versionId?: ObjectVersionId;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface DeleteObjectsRequest {
  /**
   * The bucket name containing the objects to delete.  When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide. When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon Simple Storage Service Developer Guide.
   */
  readonly bucket: BucketName;
  /**
   * Container for the request.
   */
  readonly delete: Delete;
  /**
   * The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device. Required to permanently delete a versioned object if versioning is configured with MFA delete enabled.
   */
  readonly mfa?: MFA;
  /**
   * The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device. Required to permanently delete a versioned object if versioning is configured with MFA delete enabled.
   */
  readonly requestPayer?: RequestPayer;
  /**
   * Specifies whether you want to delete this object even if it has a Governance-type Object Lock in place. You must have sufficient permissions to perform this operation.
   */
  readonly bypassGovernanceRetention?: BypassGovernanceRetention;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface DeletePublicAccessBlockRequest {
  /**
   * The Amazon S3 bucket whose PublicAccessBlock configuration you want to delete.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * <p>Information about the deleted object.</p>
 */
export interface DeletedObject {
  /**
   * The name of the deleted object.
   */
  readonly key?: ObjectKey;
  /**
   * The version ID of the deleted object.
   */
  readonly versionId?: ObjectVersionId;
  /**
   * Specifies whether the versioned object that was permanently deleted was (true) or was not (false) a delete marker. In a simple DELETE, this header indicates whether (true) or not (false) a delete marker was created.
   */
  readonly deleteMarker?: DeleteMarker;
  /**
   * The version ID of the delete marker created as a result of the DELETE operation. If you delete a specific object version, the value returned by this header is the version ID of the object version deleted.
   */
  readonly deleteMarkerVersionId?: DeleteMarkerVersionId;
}

/**
 * <p>Specifies information about where to publish analysis or configuration results for an Amazon S3 bucket and S3 Replication Time Control (S3 RTC).</p>
 */
export interface Destination {
  /**
   * The Amazon Resource Name (ARN) of the bucket where you want Amazon S3 to store the results.
   */
  readonly bucket: BucketName;
  /**
   * Destination bucket owner account ID. In a cross-account scenario, if you direct Amazon S3 to change replica ownership to the AWS account that owns the destination bucket by specifying the AccessControlTranslation property, this is the account ID of the destination bucket owner. For more information, see Replication Additional Configuration: Changing the Replica Owner in the Amazon Simple Storage Service Developer Guide.
   */
  readonly account?: AccountId;
  /**
   * The storage class to use when replicating objects, such as S3 Standard or reduced redundancy. By default, Amazon S3 uses the storage class of the source object to create the object replica.  For valid values, see the StorageClass element of the PUT Bucket replication action in the Amazon Simple Storage Service API Reference.
   */
  readonly storageClass?: StorageClass;
  /**
   * Specify this only in a cross-account scenario (where source and destination bucket owners are not the same), and you want to change replica ownership to the AWS account that owns the destination bucket. If this is not specified in the replication configuration, the replicas are owned by same AWS account that owns the source object.
   */
  readonly accessControlTranslation?: AccessControlTranslation;
  /**
   * A container that provides information about encryption. If SourceSelectionCriteria is specified, you must specify this element.
   */
  readonly encryptionConfiguration?: EncryptionConfiguration;
  /**
   * A container specifying S3 Replication Time Control (S3 RTC), including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated. Must be specified together with a Metrics block.
   */
  readonly replicationTime?: ReplicationTime;
  /**
   * A container specifying replication metrics-related settings enabling replication metrics and events.
   */
  readonly metrics?: Metrics;
}

/**
 * <p>Contains the type of server-side encryption used.</p>
 */
export interface Encryption {
  /**
   * The server-side encryption algorithm used when storing job results in Amazon S3 (for example, AES256, aws:kms).
   */
  readonly encryptionType: ServerSideEncryption;
  /**
   * If the encryption type is aws:kms, this optional value specifies the ID of the symmetric customer managed AWS KMS CMK to use for encryption of job results. Amazon S3 only supports symmetric CMKs. For more information, see Using Symmetric and Asymmetric Keys in the AWS Key Management Service Developer Guide.
   */
  readonly kmsKeyId?: SSEKMSKeyId;
  /**
   * If the encryption type is aws:kms, this optional value can be used to specify the encryption context for the restore results.
   */
  readonly kmsContext?: KMSContext;
}

/**
 * <p>Specifies encryption-related information for an Amazon S3 bucket that is a destination for replicated objects.</p>
 */
export interface EncryptionConfiguration {
  /**
   * Specifies the ID (Key ARN or Alias ARN) of the customer managed customer master key (CMK) stored in AWS Key Management Service (KMS) for the destination bucket. Amazon S3 uses this key to encrypt replica objects. Amazon S3 only supports symmetric customer managed CMKs. For more information, see Using Symmetric and Asymmetric Keys in the AWS Key Management Service Developer Guide.
   */
  readonly replicaKmsKeyId?: ReplicaKmsKeyID;
}

/**
 * <p>A message that indicates the request is complete and no more messages will be sent. You should not assume that the request is complete until the client receives an <code>EndEvent</code>.</p>
 */
export interface EndEvent {
}

/**
 * <p>Container for all error elements.</p>
 */
export interface Error {
  /**
   * The error key.
   */
  readonly key?: ObjectKey;
  /**
   * The version ID of the error.
   */
  readonly versionId?: ObjectVersionId;
  /**
   * The error code is a string that uniquely identifies an error condition. It is meant to be read and understood by programs that detect and handle errors by type.   Amazon S3 error codes       Code: AccessDenied     Description: Access Denied    HTTP Status Code: 403 Forbidden    SOAP Fault Code Prefix: Client        Code: AccountProblem    Description: There is a problem with your AWS account that prevents the operation from completing successfully. Contact AWS Support for further assistance.    HTTP Status Code: 403 Forbidden    SOAP Fault Code Prefix: Client        Code: AllAccessDisabled    Description: All access to this Amazon S3 resource has been disabled. Contact AWS Support for further assistance.    HTTP Status Code: 403 Forbidden    SOAP Fault Code Prefix: Client        Code: AmbiguousGrantByEmailAddress    Description: The email address you provided is associated with more than one account.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: AuthorizationHeaderMalformed    Description: The authorization header you provided is invalid.    HTTP Status Code: 400 Bad Request    HTTP Status Code: N/A        Code: BadDigest    Description: The Content-MD5 you specified did not match what we received.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: BucketAlreadyExists    Description: The requested bucket name is not available. The bucket namespace is shared by all users of the system. Please select a different name and try again.    HTTP Status Code: 409 Conflict    SOAP Fault Code Prefix: Client        Code: BucketAlreadyOwnedByYou    Description: The bucket you tried to create already exists, and you own it. Amazon S3 returns this error in all AWS Regions except in the North Virginia Region. For legacy compatibility, if you re-create an existing bucket that you already own in the North Virginia Region, Amazon S3 returns 200 OK and resets the bucket access control lists (ACLs).    Code: 409 Conflict (in all Regions except the North Virginia Region)     SOAP Fault Code Prefix: Client        Code: BucketNotEmpty    Description: The bucket you tried to delete is not empty.    HTTP Status Code: 409 Conflict    SOAP Fault Code Prefix: Client        Code: CredentialsNotSupported    Description: This request does not support credentials.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: CrossLocationLoggingProhibited    Description: Cross-location logging not allowed. Buckets in one geographic location cannot log information to a bucket in another location.    HTTP Status Code: 403 Forbidden    SOAP Fault Code Prefix: Client        Code: EntityTooSmall    Description: Your proposed upload is smaller than the minimum allowed object size.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: EntityTooLarge    Description: Your proposed upload exceeds the maximum allowed object size.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: ExpiredToken    Description: The provided token has expired.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: IllegalVersioningConfigurationException     Description: Indicates that the versioning configuration specified in the request is invalid.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: IncompleteBody    Description: You did not provide the number of bytes specified by the Content-Length HTTP header    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: IncorrectNumberOfFilesInPostRequest    Description: POST requires exactly one file upload per request.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InlineDataTooLarge    Description: Inline data exceeds the maximum allowed size.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InternalError    Description: We encountered an internal error. Please try again.    HTTP Status Code: 500 Internal Server Error    SOAP Fault Code Prefix: Server        Code: InvalidAccessKeyId    Description: The AWS access key ID you provided does not exist in our records.    HTTP Status Code: 403 Forbidden    SOAP Fault Code Prefix: Client        Code: InvalidAddressingHeader    Description: You must specify the Anonymous role.    HTTP Status Code: N/A    SOAP Fault Code Prefix: Client        Code: InvalidArgument    Description: Invalid Argument    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InvalidBucketName    Description: The specified bucket is not valid.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InvalidBucketState    Description: The request is not valid with the current state of the bucket.    HTTP Status Code: 409 Conflict    SOAP Fault Code Prefix: Client        Code: InvalidDigest    Description: The Content-MD5 you specified is not valid.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InvalidEncryptionAlgorithmError    Description: The encryption request you specified is not valid. The valid value is AES256.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InvalidLocationConstraint    Description: The specified location constraint is not valid. For more information about Regions, see How to Select a Region for Your Buckets.     HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InvalidObjectState    Description: The operation is not valid for the current state of the object.    HTTP Status Code: 403 Forbidden    SOAP Fault Code Prefix: Client        Code: InvalidPart    Description: One or more of the specified parts could not be found. The part might not have been uploaded, or the specified entity tag might not have matched the part's entity tag.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InvalidPartOrder    Description: The list of parts was not in ascending order. Parts list must be specified in order by part number.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InvalidPayer    Description: All access to this object has been disabled. Please contact AWS Support for further assistance.    HTTP Status Code: 403 Forbidden    SOAP Fault Code Prefix: Client        Code: InvalidPolicyDocument    Description: The content of the form does not meet the conditions specified in the policy document.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InvalidRange    Description: The requested range cannot be satisfied.    HTTP Status Code: 416 Requested Range Not Satisfiable    SOAP Fault Code Prefix: Client        Code: InvalidRequest    Description: Please use AWS4-HMAC-SHA256.    HTTP Status Code: 400 Bad Request    Code: N/A        Code: InvalidRequest    Description: SOAP requests must be made over an HTTPS connection.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InvalidRequest    Description: Amazon S3 Transfer Acceleration is not supported for buckets with non-DNS compliant names.    HTTP Status Code: 400 Bad Request    Code: N/A        Code: InvalidRequest    Description: Amazon S3 Transfer Acceleration is not supported for buckets with periods (.) in their names.    HTTP Status Code: 400 Bad Request    Code: N/A        Code: InvalidRequest    Description: Amazon S3 Transfer Accelerate endpoint only supports virtual style requests.    HTTP Status Code: 400 Bad Request    Code: N/A        Code: InvalidRequest    Description: Amazon S3 Transfer Accelerate is not configured on this bucket.    HTTP Status Code: 400 Bad Request    Code: N/A        Code: InvalidRequest    Description: Amazon S3 Transfer Accelerate is disabled on this bucket.    HTTP Status Code: 400 Bad Request    Code: N/A        Code: InvalidRequest    Description: Amazon S3 Transfer Acceleration is not supported on this bucket. Contact AWS Support for more information.    HTTP Status Code: 400 Bad Request    Code: N/A        Code: InvalidRequest    Description: Amazon S3 Transfer Acceleration cannot be enabled on this bucket. Contact AWS Support for more information.    HTTP Status Code: 400 Bad Request    Code: N/A        Code: InvalidSecurity    Description: The provided security credentials are not valid.    HTTP Status Code: 403 Forbidden    SOAP Fault Code Prefix: Client        Code: InvalidSOAPRequest    Description: The SOAP request body is invalid.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InvalidStorageClass    Description: The storage class you specified is not valid.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InvalidTargetBucketForLogging    Description: The target bucket for logging does not exist, is not owned by you, or does not have the appropriate grants for the log-delivery group.     HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InvalidToken    Description: The provided token is malformed or otherwise invalid.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: InvalidURI    Description: Couldn't parse the specified URI.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: KeyTooLongError    Description: Your key is too long.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: MalformedACLError    Description: The XML you provided was not well-formed or did not validate against our published schema.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: MalformedPOSTRequest     Description: The body of your POST request is not well-formed multipart/form-data.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: MalformedXML    Description: This happens when the user sends malformed XML (XML that doesn't conform to the published XSD) for the configuration. The error message is, "The XML you provided was not well-formed or did not validate against our published schema."     HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: MaxMessageLengthExceeded    Description: Your request was too big.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: MaxPostPreDataLengthExceededError    Description: Your POST request fields preceding the upload file were too large.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: MetadataTooLarge    Description: Your metadata headers exceed the maximum allowed metadata size.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: MethodNotAllowed    Description: The specified method is not allowed against this resource.    HTTP Status Code: 405 Method Not Allowed    SOAP Fault Code Prefix: Client        Code: MissingAttachment    Description: A SOAP attachment was expected, but none were found.    HTTP Status Code: N/A    SOAP Fault Code Prefix: Client        Code: MissingContentLength    Description: You must provide the Content-Length HTTP header.    HTTP Status Code: 411 Length Required    SOAP Fault Code Prefix: Client        Code: MissingRequestBodyError    Description: This happens when the user sends an empty XML document as a request. The error message is, "Request body is empty."     HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: MissingSecurityElement    Description: The SOAP 1.1 request is missing a security element.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: MissingSecurityHeader    Description: Your request is missing a required header.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: NoLoggingStatusForKey    Description: There is no such thing as a logging status subresource for a key.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: NoSuchBucket    Description: The specified bucket does not exist.    HTTP Status Code: 404 Not Found    SOAP Fault Code Prefix: Client        Code: NoSuchBucketPolicy    Description: The specified bucket does not have a bucket policy.    HTTP Status Code: 404 Not Found    SOAP Fault Code Prefix: Client        Code: NoSuchKey    Description: The specified key does not exist.    HTTP Status Code: 404 Not Found    SOAP Fault Code Prefix: Client        Code: NoSuchLifecycleConfiguration    Description: The lifecycle configuration does not exist.     HTTP Status Code: 404 Not Found    SOAP Fault Code Prefix: Client        Code: NoSuchUpload    Description: The specified multipart upload does not exist. The upload ID might be invalid, or the multipart upload might have been aborted or completed.    HTTP Status Code: 404 Not Found    SOAP Fault Code Prefix: Client        Code: NoSuchVersion     Description: Indicates that the version ID specified in the request does not match an existing version.    HTTP Status Code: 404 Not Found    SOAP Fault Code Prefix: Client        Code: NotImplemented    Description: A header you provided implies functionality that is not implemented.    HTTP Status Code: 501 Not Implemented    SOAP Fault Code Prefix: Server        Code: NotSignedUp    Description: Your account is not signed up for the Amazon S3 service. You must sign up before you can use Amazon S3. You can sign up at the following URL: https://aws.amazon.com/s3    HTTP Status Code: 403 Forbidden    SOAP Fault Code Prefix: Client        Code: OperationAborted    Description: A conflicting conditional operation is currently in progress against this resource. Try again.    HTTP Status Code: 409 Conflict    SOAP Fault Code Prefix: Client        Code: PermanentRedirect    Description: The bucket you are attempting to access must be addressed using the specified endpoint. Send all future requests to this endpoint.    HTTP Status Code: 301 Moved Permanently    SOAP Fault Code Prefix: Client        Code: PreconditionFailed    Description: At least one of the preconditions you specified did not hold.    HTTP Status Code: 412 Precondition Failed    SOAP Fault Code Prefix: Client        Code: Redirect    Description: Temporary redirect.    HTTP Status Code: 307 Moved Temporarily    SOAP Fault Code Prefix: Client        Code: RestoreAlreadyInProgress    Description: Object restore is already in progress.    HTTP Status Code: 409 Conflict    SOAP Fault Code Prefix: Client        Code: RequestIsNotMultiPartContent    Description: Bucket POST must be of the enclosure-type multipart/form-data.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: RequestTimeout    Description: Your socket connection to the server was not read from or written to within the timeout period.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: RequestTimeTooSkewed    Description: The difference between the request time and the server's time is too large.    HTTP Status Code: 403 Forbidden    SOAP Fault Code Prefix: Client        Code: RequestTorrentOfBucketError    Description: Requesting the torrent file of a bucket is not permitted.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: SignatureDoesNotMatch    Description: The request signature we calculated does not match the signature you provided. Check your AWS secret access key and signing method. For more information, see REST Authentication and SOAP Authentication for details.    HTTP Status Code: 403 Forbidden    SOAP Fault Code Prefix: Client        Code: ServiceUnavailable    Description: Reduce your request rate.    HTTP Status Code: 503 Service Unavailable    SOAP Fault Code Prefix: Server        Code: SlowDown    Description: Reduce your request rate.    HTTP Status Code: 503 Slow Down    SOAP Fault Code Prefix: Server        Code: TemporaryRedirect    Description: You are being redirected to the bucket while DNS updates.    HTTP Status Code: 307 Moved Temporarily    SOAP Fault Code Prefix: Client        Code: TokenRefreshRequired    Description: The provided token must be refreshed.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: TooManyBuckets    Description: You have attempted to create more buckets than allowed.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: UnexpectedContent    Description: This request does not support content.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: UnresolvableGrantByEmailAddress    Description: The email address you provided does not match any account on record.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client        Code: UserKeyMustBeSpecified    Description: The bucket POST must contain the specified field name. If it is specified, check the order of the fields.    HTTP Status Code: 400 Bad Request    SOAP Fault Code Prefix: Client
   */
  readonly code?: Code;
  /**
   * The error message contains a generic description of the error condition in English. It is intended for a human audience. Simple programs display the message directly to the end user if they encounter an error condition they don't know how or don't care to handle. Sophisticated programs with more exhaustive error handling and proper internationalization are more likely to ignore the error message.
   */
  readonly message?: Message;
}

/**
 * <p>The error information.</p>
 */
export interface ErrorDocument {
  /**
   * The object key name to use when a 4XX class error occurs.
   */
  readonly key: ObjectKey;
}

/**
 * <p>Optional configuration to replicate existing source bucket objects. For more information, see <a href=" https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-what-is-isnot-replicated.html#existing-object-replication">Replicating Existing Objects</a> in the <i>Amazon S3 Developer Guide</i>. </p>
 */
export interface ExistingObjectReplication {
  /**
   * 
   */
  readonly status: ExistingObjectReplicationStatus;
}

/**
 * <p>Specifies the Amazon S3 object key name to filter on and whether to filter on the suffix or prefix of the key name.</p>
 */
export interface FilterRule {
  /**
   * The object key name prefix or suffix identifying one or more objects to which the filtering rule applies. The maximum length is 1,024 characters. Overlapping prefixes and suffixes are not supported. For more information, see Configuring Event Notifications in the Amazon Simple Storage Service Developer Guide.
   */
  readonly name?: FilterRuleName;
  /**
   * The value that the filter searches for in object key names.
   */
  readonly value?: FilterRuleValue;
}

/**
 * undefined
 */
export interface GetBucketAccelerateConfigurationRequest {
  /**
   * The name of the bucket for which the accelerate configuration is retrieved.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface GetBucketAclRequest {
  /**
   * Specifies the S3 bucket whose ACL is being requested.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface GetBucketAnalyticsConfigurationRequest {
  /**
   * The name of the bucket from which an analytics configuration is retrieved.
   */
  readonly bucket: BucketName;
  /**
   * The ID that identifies the analytics configuration.
   */
  readonly id: AnalyticsId;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface GetBucketCorsRequest {
  /**
   * The bucket name for which to get the cors configuration.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface GetBucketEncryptionRequest {
  /**
   * The name of the bucket from which the server-side encryption configuration is retrieved.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface GetBucketIntelligentTieringConfigurationRequest {
  /**
   * The name of the Amazon S3 bucket whose configuration you want to modify or retrieve.
   */
  readonly bucket: BucketName;
  /**
   * The ID used to identify the S3 Intelligent-Tiering configuration.
   */
  readonly id: IntelligentTieringId;
}

/**
 * undefined
 */
export interface GetBucketInventoryConfigurationRequest {
  /**
   * The name of the bucket containing the inventory configuration to retrieve.
   */
  readonly bucket: BucketName;
  /**
   * The ID used to identify the inventory configuration.
   */
  readonly id: InventoryId;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface GetBucketLifecycleConfigurationRequest {
  /**
   * The name of the bucket for which to get the lifecycle information.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface GetBucketLifecycleRequest {
  /**
   * The name of the bucket for which to get the lifecycle information.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface GetBucketLocationRequest {
  /**
   * The name of the bucket for which to get the location.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface GetBucketLoggingRequest {
  /**
   * The bucket name for which to get the logging information.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface GetBucketMetricsConfigurationRequest {
  /**
   * The name of the bucket containing the metrics configuration to retrieve.
   */
  readonly bucket: BucketName;
  /**
   * The ID used to identify the metrics configuration.
   */
  readonly id: MetricsId;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface GetBucketNotificationConfigurationRequest {
  /**
   * The name of the bucket for which to get the notification configuration.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface GetBucketOwnershipControlsRequest {
  /**
   * The name of the Amazon S3 bucket whose OwnershipControls you want to retrieve.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface GetBucketPolicyRequest {
  /**
   * The bucket name for which to get the bucket policy.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface GetBucketPolicyStatusRequest {
  /**
   * The name of the Amazon S3 bucket whose policy status you want to retrieve.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface GetBucketReplicationRequest {
  /**
   * The bucket name for which to get the replication information.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface GetBucketRequestPaymentRequest {
  /**
   * The name of the bucket for which to get the payment request configuration
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface GetBucketTaggingRequest {
  /**
   * The name of the bucket for which to get the tagging information.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface GetBucketVersioningRequest {
  /**
   * The name of the bucket for which to get the versioning information.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface GetBucketWebsiteRequest {
  /**
   * The bucket name for which to get the website configuration.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface GetObjectAclRequest {
  /**
   * The bucket name that contains the object for which to get the ACL information.  When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide.
   */
  readonly bucket: BucketName;
  /**
   * The key of the object for which to get the ACL information.
   */
  readonly key: ObjectKey;
  /**
   * VersionId used to reference a specific version of the object.
   */
  readonly versionId?: ObjectVersionId;
  /**
   * VersionId used to reference a specific version of the object.
   */
  readonly requestPayer?: RequestPayer;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface GetObjectLegalHoldRequest {
  /**
   * The bucket name containing the object whose Legal Hold status you want to retrieve.  When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide.
   */
  readonly bucket: BucketName;
  /**
   * The key name for the object whose Legal Hold status you want to retrieve.
   */
  readonly key: ObjectKey;
  /**
   * The version ID of the object whose Legal Hold status you want to retrieve.
   */
  readonly versionId?: ObjectVersionId;
  /**
   * The version ID of the object whose Legal Hold status you want to retrieve.
   */
  readonly requestPayer?: RequestPayer;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface GetObjectLockConfigurationRequest {
  /**
   * The bucket whose Object Lock configuration you want to retrieve. When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface GetObjectRequest {
  /**
   * The bucket name containing the object.  When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide. When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon Simple Storage Service Developer Guide.
   */
  readonly bucket: BucketName;
  /**
   * Return the object only if its entity tag (ETag) is the same as the one specified, otherwise return a 412 (precondition failed).
   */
  readonly ifMatch?: IfMatch;
  /**
   * Return the object only if it has been modified since the specified time, otherwise return a 304 (not modified).
   */
  readonly ifModifiedSince?: IfModifiedSince;
  /**
   * Return the object only if its entity tag (ETag) is different from the one specified, otherwise return a 304 (not modified).
   */
  readonly ifNoneMatch?: IfNoneMatch;
  /**
   * Return the object only if it has not been modified since the specified time, otherwise return a 412 (precondition failed).
   */
  readonly ifUnmodifiedSince?: IfUnmodifiedSince;
  /**
   * Key of the object to get.
   */
  readonly key: ObjectKey;
  /**
   * Downloads the specified range bytes of an object. For more information about the HTTP Range header, see https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.  Amazon S3 doesn't support retrieving multiple ranges of data per GET request.
   */
  readonly range?: Range;
  /**
   * Sets the Cache-Control header of the response.
   */
  readonly responseCacheControl?: ResponseCacheControl;
  /**
   * Sets the Content-Disposition header of the response
   */
  readonly responseContentDisposition?: ResponseContentDisposition;
  /**
   * Sets the Content-Encoding header of the response.
   */
  readonly responseContentEncoding?: ResponseContentEncoding;
  /**
   * Sets the Content-Language header of the response.
   */
  readonly responseContentLanguage?: ResponseContentLanguage;
  /**
   * Sets the Content-Type header of the response.
   */
  readonly responseContentType?: ResponseContentType;
  /**
   * Sets the Expires header of the response.
   */
  readonly responseExpires?: ResponseExpires;
  /**
   * VersionId used to reference a specific version of the object.
   */
  readonly versionId?: ObjectVersionId;
  /**
   * Specifies the algorithm to use to when encrypting the object (for example, AES256).
   */
  readonly sseCustomerAlgorithm?: SSECustomerAlgorithm;
  /**
   * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header.
   */
  readonly sseCustomerKey?: SSECustomerKey;
  /**
   * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
   */
  readonly sseCustomerKeyMd5?: SSECustomerKeyMD5;
  /**
   * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
   */
  readonly requestPayer?: RequestPayer;
  /**
   * Part number of the object being read. This is a positive integer between 1 and 10,000. Effectively performs a 'ranged' GET request for the part specified. Useful for downloading just a part of an object.
   */
  readonly partNumber?: PartNumber;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface GetObjectRetentionRequest {
  /**
   * The bucket name containing the object whose retention settings you want to retrieve.  When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide.
   */
  readonly bucket: BucketName;
  /**
   * The key name for the object whose retention settings you want to retrieve.
   */
  readonly key: ObjectKey;
  /**
   * The version ID for the object whose retention settings you want to retrieve.
   */
  readonly versionId?: ObjectVersionId;
  /**
   * The version ID for the object whose retention settings you want to retrieve.
   */
  readonly requestPayer?: RequestPayer;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface GetObjectTaggingRequest {
  /**
   * The bucket name containing the object for which to get the tagging information.  When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide. When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon Simple Storage Service Developer Guide.
   */
  readonly bucket: BucketName;
  /**
   * Object key for which to get the tagging information.
   */
  readonly key: ObjectKey;
  /**
   * The versionId of the object for which to get the tagging information.
   */
  readonly versionId?: ObjectVersionId;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface GetObjectTorrentRequest {
  /**
   * The name of the bucket containing the object for which to get the torrent files.
   */
  readonly bucket: BucketName;
  /**
   * The object key for which to get the information.
   */
  readonly key: ObjectKey;
  /**
   * The object key for which to get the information.
   */
  readonly requestPayer?: RequestPayer;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface GetPublicAccessBlockRequest {
  /**
   * The name of the Amazon S3 bucket whose PublicAccessBlock configuration you want to retrieve.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * <p>Container for S3 Glacier job parameters.</p>
 */
export interface GlacierJobParameters {
  /**
   * Retrieval tier at which the restore will be processed.
   */
  readonly tier: Tier;
}

/**
 * <p>Container for grant information.</p>
 */
export interface Grant {
  /**
   * The person being granted permissions.
   */
  readonly grantee?: Grantee;
  /**
   * Specifies the permission given to the grantee.
   */
  readonly permission?: Permission;
}

/**
 * <p>Container for the person being granted permissions.</p>
 */
export interface Grantee {
  /**
   * Screen name of the grantee.
   */
  readonly displayName?: DisplayName;
  /**
   * Email address of the grantee.  Using email addresses to specify a grantee is only supported in the following AWS Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (São Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the AWS General Reference.
   */
  readonly emailAddress?: EmailAddress;
  /**
   * The canonical user ID of the grantee.
   */
  readonly id?: ID;
  /**
   * Type of grantee
   */
  readonly type: Type;
  /**
   * URI of the grantee group.
   */
  readonly uri?: URI;
}

/**
 * undefined
 */
export interface HeadBucketRequest {
  /**
   * The bucket name. When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide. When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon Simple Storage Service Developer Guide.
   */
  readonly bucket: BucketName;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface HeadObjectRequest {
  /**
   * The name of the bucket containing the object. When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide. When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon Simple Storage Service Developer Guide.
   */
  readonly bucket: BucketName;
  /**
   * Return the object only if its entity tag (ETag) is the same as the one specified, otherwise return a 412 (precondition failed).
   */
  readonly ifMatch?: IfMatch;
  /**
   * Return the object only if it has been modified since the specified time, otherwise return a 304 (not modified).
   */
  readonly ifModifiedSince?: IfModifiedSince;
  /**
   * Return the object only if its entity tag (ETag) is different from the one specified, otherwise return a 304 (not modified).
   */
  readonly ifNoneMatch?: IfNoneMatch;
  /**
   * Return the object only if it has not been modified since the specified time, otherwise return a 412 (precondition failed).
   */
  readonly ifUnmodifiedSince?: IfUnmodifiedSince;
  /**
   * The object key.
   */
  readonly key: ObjectKey;
  /**
   * Downloads the specified range bytes of an object. For more information about the HTTP Range header, see http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.  Amazon S3 doesn't support retrieving multiple ranges of data per GET request.
   */
  readonly range?: Range;
  /**
   * VersionId used to reference a specific version of the object.
   */
  readonly versionId?: ObjectVersionId;
  /**
   * Specifies the algorithm to use to when encrypting the object (for example, AES256).
   */
  readonly sseCustomerAlgorithm?: SSECustomerAlgorithm;
  /**
   * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header.
   */
  readonly sseCustomerKey?: SSECustomerKey;
  /**
   * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
   */
  readonly sseCustomerKeyMd5?: SSECustomerKeyMD5;
  /**
   * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
   */
  readonly requestPayer?: RequestPayer;
  /**
   * Part number of the object being read. This is a positive integer between 1 and 10,000. Effectively performs a 'ranged' HEAD request for the part specified. Useful querying about the size of the part and the number of parts in this object.
   */
  readonly partNumber?: PartNumber;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * <p>Container for the <code>Suffix</code> element.</p>
 */
export interface IndexDocument {
  /**
   * A suffix that is appended to a request that is for a directory on the website endpoint (for example,if the suffix is index.html and you make a request to samplebucket/images/ the data that is returned will be for the object with the key name images/index.html) The suffix must not be empty and must not include a slash character.
   */
  readonly suffix: Suffix;
}

/**
 * <p>Container element that identifies who initiated the multipart upload. </p>
 */
export interface Initiator {
  /**
   * If the principal is an AWS account, it provides the Canonical User ID. If the principal is an IAM User, it provides a user ARN value.
   */
  readonly id?: ID;
  /**
   * Name of the Principal.
   */
  readonly displayName?: DisplayName;
}

/**
 * <p>Describes the serialization format of the object.</p>
 */
export interface InputSerialization {
  /**
   * Describes the serialization of a CSV-encoded object.
   */
  readonly csv?: CSVInput;
  /**
   * Specifies object's compression format. Valid values: NONE, GZIP, BZIP2. Default Value: NONE.
   */
  readonly compressionType?: CompressionType;
  /**
   * Specifies JSON as object's input serialization format.
   */
  readonly json?: JSONInput;
  /**
   * Specifies Parquet as object's input serialization format.
   */
  readonly parquet?: ParquetInput;
}

/**
 * <p>A container for specifying S3 Intelligent-Tiering filters. The filters determine the subset of objects to which the rule applies.</p>
 */
export interface IntelligentTieringAndOperator {
  /**
   * An object key name prefix that identifies the subset of objects to which the configuration applies.
   */
  readonly prefix?: Prefix;
  /**
   * All of these tags must exist in the object's tag set in order for the configuration to apply.
   */
  readonly tags?: TagSet;
}

/**
 * <p>Specifies the S3 Intelligent-Tiering configuration for an Amazon S3 bucket.</p> <p>For information about the S3 Intelligent-Tiering storage class, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access">Storage class for automatically optimizing frequently and infrequently accessed objects</a>.</p>
 */
export interface IntelligentTieringConfiguration {
  /**
   * The ID used to identify the S3 Intelligent-Tiering configuration.
   */
  readonly id: IntelligentTieringId;
  /**
   * Specifies a bucket filter. The configuration only includes objects that meet the filter's criteria.
   */
  readonly filter?: IntelligentTieringFilter;
  /**
   * Specifies the status of the configuration.
   */
  readonly status: IntelligentTieringStatus;
  /**
   * Specifies the S3 Intelligent-Tiering storage class tier of the configuration.
   */
  readonly tierings: TieringList;
}

/**
 * <p>The <code>Filter</code> is used to identify objects that the S3 Intelligent-Tiering configuration applies to.</p>
 */
export interface IntelligentTieringFilter {
  /**
   * An object key name prefix that identifies the subset of objects to which the rule applies.
   */
  readonly prefix?: Prefix;
  /**
   * An object key name prefix that identifies the subset of objects to which the rule applies.
   */
  readonly tag?: Tag;
  /**
   * A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The operator must have at least two predicates, and an object must match all of the predicates in order for the filter to apply.
   */
  readonly and?: IntelligentTieringAndOperator;
}

/**
 * <p>Specifies the inventory configuration for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketGETInventoryConfig.html">GET Bucket inventory</a> in the <i>Amazon Simple Storage Service API Reference</i>. </p>
 */
export interface InventoryConfiguration {
  /**
   * Contains information about where to publish the inventory results.
   */
  readonly destination: InventoryDestination;
  /**
   * Specifies whether the inventory is enabled or disabled. If set to True, an inventory list is generated. If set to False, no inventory list is generated.
   */
  readonly isEnabled: IsEnabled;
  /**
   * Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria.
   */
  readonly filter?: InventoryFilter;
  /**
   * The ID used to identify the inventory configuration.
   */
  readonly id: InventoryId;
  /**
   * Object versions to include in the inventory list. If set to All, the list includes all the object versions, which adds the version-related fields VersionId, IsLatest, and DeleteMarker to the list. If set to Current, the list does not contain these version-related fields.
   */
  readonly includedObjectVersions: InventoryIncludedObjectVersions;
  /**
   * Contains the optional fields that are included in the inventory results.
   */
  readonly optionalFields?: InventoryOptionalFields;
  /**
   * Specifies the schedule for generating inventory results.
   */
  readonly schedule: InventorySchedule;
}

/**
 * <p>Specifies the inventory configuration for an Amazon S3 bucket.</p>
 */
export interface InventoryDestination {
  /**
   * Contains the bucket name, file format, bucket owner (optional), and prefix (optional) where inventory results are published.
   */
  readonly s3BucketDestination: InventoryS3BucketDestination;
}

/**
 * <p>Contains the type of server-side encryption used to encrypt the inventory results.</p>
 */
export interface InventoryEncryption {
  /**
   * Specifies the use of SSE-S3 to encrypt delivered inventory reports.
   */
  readonly sses3?: SSES3;
  /**
   * Specifies the use of SSE-KMS to encrypt delivered inventory reports.
   */
  readonly ssekms?: SSEKMS;
}

/**
 * <p>Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria.</p>
 */
export interface InventoryFilter {
  /**
   * The prefix that an object must have to be included in the inventory results.
   */
  readonly prefix: Prefix;
}

/**
 * <p>Contains the bucket name, file format, bucket owner (optional), and prefix (optional) where inventory results are published.</p>
 */
export interface InventoryS3BucketDestination {
  /**
   * The account ID that owns the destination S3 bucket. If no account ID is provided, the owner is not validated before exporting data.    Although this value is optional, we strongly recommend that you set it to help prevent problems if the destination bucket ownership changes.
   */
  readonly accountId?: AccountId;
  /**
   * The Amazon Resource Name (ARN) of the bucket where inventory results will be published.
   */
  readonly bucket: BucketName;
  /**
   * Specifies the output format of the inventory results.
   */
  readonly format: InventoryFormat;
  /**
   * The prefix that is prepended to all inventory results.
   */
  readonly prefix?: Prefix;
  /**
   * Contains the type of server-side encryption used to encrypt the inventory results.
   */
  readonly encryption?: InventoryEncryption;
}

/**
 * <p>Specifies the schedule for generating inventory results.</p>
 */
export interface InventorySchedule {
  /**
   * Specifies how frequently inventory results are produced.
   */
  readonly frequency: InventoryFrequency;
}

/**
 * <p>Specifies JSON as object's input serialization format.</p>
 */
export interface JSONInput {
  /**
   * The type of JSON. Valid values: Document, Lines.
   */
  readonly type?: JSONType;
}

/**
 * <p>Specifies JSON as request's output serialization format.</p>
 */
export interface JSONOutput {
  /**
   * The value used to separate individual records in the output. If no value is specified, Amazon S3 uses a newline character ('\n').
   */
  readonly recordDelimiter?: RecordDelimiter;
}

/**
 * <p>A container for specifying the configuration for AWS Lambda notifications.</p>
 */
export interface LambdaFunctionConfiguration {
  /**
   * The value used to separate individual records in the output. If no value is specified, Amazon S3 uses a newline character ('\n').
   */
  readonly id?: NotificationId;
  /**
   * The Amazon Resource Name (ARN) of the AWS Lambda function that Amazon S3 invokes when the specified event type occurs.
   */
  readonly lambdaFunctionArn: LambdaFunctionArn;
  /**
   * The Amazon S3 bucket event for which to invoke the AWS Lambda function. For more information, see Supported Event Types in the Amazon Simple Storage Service Developer Guide.
   */
  readonly events: EventList;
  /**
   * The Amazon S3 bucket event for which to invoke the AWS Lambda function. For more information, see Supported Event Types in the Amazon Simple Storage Service Developer Guide.
   */
  readonly filter?: NotificationConfigurationFilter;
}

/**
 * <p>Container for lifecycle rules. You can add as many as 1000 rules.</p>
 */
export interface LifecycleConfiguration {
  /**
   * Specifies lifecycle configuration rules for an Amazon S3 bucket.
   */
  readonly rules: Rules;
}

/**
 * <p>Container for the expiration for the lifecycle of the object.</p>
 */
export interface LifecycleExpiration {
  /**
   * Indicates at what date the object is to be moved or deleted. Should be in GMT ISO 8601 Format.
   */
  readonly date?: _Date;
  /**
   * Indicates the lifetime, in days, of the objects that are subject to the rule. The value must be a non-zero positive integer.
   */
  readonly days?: Days;
  /**
   * Indicates whether Amazon S3 will remove a delete marker with no noncurrent versions. If set to true, the delete marker will be expired; if set to false the policy takes no action. This cannot be specified with Days or Date in a Lifecycle Expiration Policy.
   */
  readonly expiredObjectDeleteMarker?: ExpiredObjectDeleteMarker;
}

/**
 * <p>A lifecycle rule for individual objects in an Amazon S3 bucket.</p>
 */
export interface LifecycleRule {
  /**
   * Specifies the expiration for the lifecycle of the object in the form of date, days and, whether the object has a delete marker.
   */
  readonly expiration?: LifecycleExpiration;
  /**
   * Unique identifier for the rule. The value cannot be longer than 255 characters.
   */
  readonly id?: ID;
  /**
   * Prefix identifying one or more objects to which the rule applies. This is No longer used; use Filter instead.
   */
  readonly prefix?: Prefix;
  /**
   * Prefix identifying one or more objects to which the rule applies. This is No longer used; use Filter instead.
   */
  readonly filter?: LifecycleRuleFilter;
  /**
   * If 'Enabled', the rule is currently being applied. If 'Disabled', the rule is not currently being applied.
   */
  readonly status: ExpirationStatus;
  /**
   * Specifies when an Amazon S3 object transitions to a specified storage class.
   */
  readonly transitions?: TransitionList;
  /**
   * Specifies the transition rule for the lifecycle rule that describes when noncurrent objects transition to a specific storage class. If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that Amazon S3 transition noncurrent object versions to a specific storage class at a set period in the object's lifetime.
   */
  readonly noncurrentVersionTransitions?: NoncurrentVersionTransitionList;
  /**
   * Specifies the transition rule for the lifecycle rule that describes when noncurrent objects transition to a specific storage class. If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that Amazon S3 transition noncurrent object versions to a specific storage class at a set period in the object's lifetime.
   */
  readonly noncurrentVersionExpiration?: NoncurrentVersionExpiration;
  /**
   * Specifies the transition rule for the lifecycle rule that describes when noncurrent objects transition to a specific storage class. If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that Amazon S3 transition noncurrent object versions to a specific storage class at a set period in the object's lifetime.
   */
  readonly abortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
}

/**
 * <p>This is used in a Lifecycle Rule Filter to apply a logical AND to two or more predicates. The Lifecycle Rule will apply to any object matching all of the predicates configured inside the And operator.</p>
 */
export interface LifecycleRuleAndOperator {
  /**
   * Prefix identifying one or more objects to which the rule applies.
   */
  readonly prefix?: Prefix;
  /**
   * All of these tags must exist in the object's tag set in order for the rule to apply.
   */
  readonly tags?: TagSet;
}

/**
 * <p>The <code>Filter</code> is used to identify objects that a Lifecycle Rule applies to. A <code>Filter</code> must have exactly one of <code>Prefix</code>, <code>Tag</code>, or <code>And</code> specified.</p>
 */
export interface LifecycleRuleFilter {
  /**
   * Prefix identifying one or more objects to which the rule applies.
   */
  readonly prefix?: Prefix;
  /**
   * This tag must exist in the object's tag set in order for the rule to apply.
   */
  readonly tag?: Tag;
  /**
   * This tag must exist in the object's tag set in order for the rule to apply.
   */
  readonly and?: LifecycleRuleAndOperator;
}

/**
 * undefined
 */
export interface ListBucketAnalyticsConfigurationsRequest {
  /**
   * The name of the bucket from which analytics configurations are retrieved.
   */
  readonly bucket: BucketName;
  /**
   * The ContinuationToken that represents a placeholder from where this request should begin.
   */
  readonly continuationToken?: Token;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface ListBucketIntelligentTieringConfigurationsRequest {
  /**
   * The name of the Amazon S3 bucket whose configuration you want to modify or retrieve.
   */
  readonly bucket: BucketName;
  /**
   * The ContinuationToken that represents a placeholder from where this request should begin.
   */
  readonly continuationToken?: Token;
}

/**
 * undefined
 */
export interface ListBucketInventoryConfigurationsRequest {
  /**
   * The name of the bucket containing the inventory configurations to retrieve.
   */
  readonly bucket: BucketName;
  /**
   * The marker used to continue an inventory configuration listing that has been truncated. Use the NextContinuationToken from a previously truncated list response to continue the listing. The continuation token is an opaque value that Amazon S3 understands.
   */
  readonly continuationToken?: Token;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface ListBucketMetricsConfigurationsRequest {
  /**
   * The name of the bucket containing the metrics configurations to retrieve.
   */
  readonly bucket: BucketName;
  /**
   * The marker that is used to continue a metrics configuration listing that has been truncated. Use the NextContinuationToken from a previously truncated list response to continue the listing. The continuation token is an opaque value that Amazon S3 understands.
   */
  readonly continuationToken?: Token;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface ListMultipartUploadsRequest {
  /**
   * The name of the bucket to which the multipart upload was initiated.  When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide. When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon Simple Storage Service Developer Guide.
   */
  readonly bucket: BucketName;
  /**
   * Character you use to group keys. All keys that contain the same string between the prefix, if specified, and the first occurrence of the delimiter after the prefix are grouped under a single result element, CommonPrefixes. If you don't specify the prefix parameter, then the substring starts at the beginning of the key. The keys that are grouped under CommonPrefixes result element are not returned elsewhere in the response.
   */
  readonly delimiter?: Delimiter;
  /**
   * Character you use to group keys. All keys that contain the same string between the prefix, if specified, and the first occurrence of the delimiter after the prefix are grouped under a single result element, CommonPrefixes. If you don't specify the prefix parameter, then the substring starts at the beginning of the key. The keys that are grouped under CommonPrefixes result element are not returned elsewhere in the response.
   */
  readonly encodingType?: EncodingType;
  /**
   * Together with upload-id-marker, this parameter specifies the multipart upload after which listing should begin. If upload-id-marker is not specified, only the keys lexicographically greater than the specified key-marker will be included in the list. If upload-id-marker is specified, any multipart uploads for a key equal to the key-marker might also be included, provided those multipart uploads have upload IDs lexicographically greater than the specified upload-id-marker.
   */
  readonly keyMarker?: KeyMarker;
  /**
   * Sets the maximum number of multipart uploads, from 1 to 1,000, to return in the response body. 1,000 is the maximum number of uploads that can be returned in a response.
   */
  readonly maxUploads?: MaxUploads;
  /**
   * Lists in-progress uploads only for those keys that begin with the specified prefix. You can use prefixes to separate a bucket into different grouping of keys. (You can think of using prefix to make groups in the same way you'd use a folder in a file system.)
   */
  readonly prefix?: Prefix;
  /**
   * Together with key-marker, specifies the multipart upload after which listing should begin. If key-marker is not specified, the upload-id-marker parameter is ignored. Otherwise, any multipart uploads for a key equal to the key-marker might be included in the list only if they have an upload ID lexicographically greater than the specified upload-id-marker.
   */
  readonly uploadIdMarker?: UploadIdMarker;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface ListObjectVersionsRequest {
  /**
   * The bucket name that contains the objects.
   */
  readonly bucket: BucketName;
  /**
   * A delimiter is a character that you specify to group keys. All keys that contain the same string between the prefix and the first occurrence of the delimiter are grouped under a single result element in CommonPrefixes. These groups are counted as one result against the max-keys limitation. These keys are not returned elsewhere in the response.
   */
  readonly delimiter?: Delimiter;
  /**
   * A delimiter is a character that you specify to group keys. All keys that contain the same string between the prefix and the first occurrence of the delimiter are grouped under a single result element in CommonPrefixes. These groups are counted as one result against the max-keys limitation. These keys are not returned elsewhere in the response.
   */
  readonly encodingType?: EncodingType;
  /**
   * Specifies the key to start with when listing objects in a bucket.
   */
  readonly keyMarker?: KeyMarker;
  /**
   * Sets the maximum number of keys returned in the response. By default the API returns up to 1,000 key names. The response might contain fewer keys but will never contain more. If additional keys satisfy the search criteria, but were not returned because max-keys was exceeded, the response contains &lt;isTruncated&gt;true&lt;/isTruncated&gt;. To return the additional keys, see key-marker and version-id-marker.
   */
  readonly maxKeys?: MaxKeys;
  /**
   * Use this parameter to select only those keys that begin with the specified prefix. You can use prefixes to separate a bucket into different groupings of keys. (You can think of using prefix to make groups in the same way you'd use a folder in a file system.) You can use prefix with delimiter to roll up numerous objects into a single result under CommonPrefixes.
   */
  readonly prefix?: Prefix;
  /**
   * Specifies the object version you want to start listing from.
   */
  readonly versionIdMarker?: VersionIdMarker;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface ListObjectsRequest {
  /**
   * The name of the bucket containing the objects. When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide. When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon Simple Storage Service Developer Guide.
   */
  readonly bucket: BucketName;
  /**
   * A delimiter is a character you use to group keys.
   */
  readonly delimiter?: Delimiter;
  /**
   * A delimiter is a character you use to group keys.
   */
  readonly encodingType?: EncodingType;
  /**
   * Specifies the key to start with when listing objects in a bucket.
   */
  readonly marker?: Marker;
  /**
   * Sets the maximum number of keys returned in the response. By default the API returns up to 1,000 key names. The response might contain fewer keys but will never contain more.
   */
  readonly maxKeys?: MaxKeys;
  /**
   * Limits the response to keys that begin with the specified prefix.
   */
  readonly prefix?: Prefix;
  /**
   * Confirms that the requester knows that she or he will be charged for the list objects request. Bucket owners need not specify this parameter in their requests.
   */
  readonly requestPayer?: RequestPayer;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface ListObjectsV2Request {
  /**
   * Bucket name to list.  When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide. When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon Simple Storage Service Developer Guide.
   */
  readonly bucket: BucketName;
  /**
   * A delimiter is a character you use to group keys.
   */
  readonly delimiter?: Delimiter;
  /**
   * Encoding type used by Amazon S3 to encode object keys in the response.
   */
  readonly encodingType?: EncodingType;
  /**
   * Sets the maximum number of keys returned in the response. By default the API returns up to 1,000 key names. The response might contain fewer keys but will never contain more.
   */
  readonly maxKeys?: MaxKeys;
  /**
   * Limits the response to keys that begin with the specified prefix.
   */
  readonly prefix?: Prefix;
  /**
   * ContinuationToken indicates Amazon S3 that the list is being continued on this bucket with a token. ContinuationToken is obfuscated and is not a real key.
   */
  readonly continuationToken?: Token;
  /**
   * The owner field is not present in listV2 by default, if you want to return owner field with each key in the result then set the fetch owner field to true.
   */
  readonly fetchOwner?: FetchOwner;
  /**
   * StartAfter is where you want Amazon S3 to start listing from. Amazon S3 starts listing after this specified key. StartAfter can be any key in the bucket.
   */
  readonly startAfter?: StartAfter;
  /**
   * Confirms that the requester knows that she or he will be charged for the list objects request in V2 style. Bucket owners need not specify this parameter in their requests.
   */
  readonly requestPayer?: RequestPayer;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface ListPartsRequest {
  /**
   * The name of the bucket to which the parts are being uploaded.  When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide. When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon Simple Storage Service Developer Guide.
   */
  readonly bucket: BucketName;
  /**
   * Object key for which the multipart upload was initiated.
   */
  readonly key: ObjectKey;
  /**
   * Sets the maximum number of parts to return.
   */
  readonly maxParts?: MaxParts;
  /**
   * Specifies the part after which listing should begin. Only parts with higher part numbers will be listed.
   */
  readonly partNumberMarker?: PartNumberMarker;
  /**
   * Upload ID identifying the multipart upload whose parts are being listed.
   */
  readonly uploadId: MultipartUploadId;
  /**
   * Upload ID identifying the multipart upload whose parts are being listed.
   */
  readonly requestPayer?: RequestPayer;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * <p>Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys for a bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html">PUT Bucket logging</a> in the <i>Amazon Simple Storage Service API Reference</i>.</p>
 */
export interface LoggingEnabled {
  /**
   * Specifies the bucket where you want Amazon S3 to store server access logs. You can have your logs delivered to any bucket that you own, including the same bucket that is being logged. You can also configure multiple buckets to deliver their logs to the same target bucket. In this case, you should choose a different TargetPrefix for each source bucket so that the delivered log files can be distinguished by key.
   */
  readonly targetBucket: TargetBucket;
  /**
   * Container for granting information.
   */
  readonly targetGrants?: TargetGrants;
  /**
   * A prefix for all log object keys. If you store log files from multiple Amazon S3 buckets in a single bucket, you can use a prefix to distinguish which log files came from which bucket.
   */
  readonly targetPrefix: TargetPrefix;
}

/**
 * <p>A metadata key-value pair to store with an object.</p>
 */
export interface MetadataEntry {
  /**
   * Name of the Object.
   */
  readonly name?: MetadataKey;
  /**
   * Value of the Object.
   */
  readonly value?: MetadataValue;
}

/**
 * <p> A container specifying replication metrics-related settings enabling replication metrics and events.</p>
 */
export interface Metrics {
  /**
   * Specifies whether the replication metrics are enabled.
   */
  readonly status: MetricsStatus;
  /**
   * A container specifying the time threshold for emitting the s3:Replication:OperationMissedThreshold event.
   */
  readonly eventThreshold?: ReplicationTimeValue;
}

/**
 * <p>A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The operator must have at least two predicates, and an object must match all of the predicates in order for the filter to apply.</p>
 */
export interface MetricsAndOperator {
  /**
   * The prefix used when evaluating an AND predicate.
   */
  readonly prefix?: Prefix;
  /**
   * The list of tags used when evaluating an AND predicate.
   */
  readonly tags?: TagSet;
}

/**
 * <p>Specifies a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID) from an Amazon S3 bucket. If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration. If you don't include the elements you want to keep, they are erased. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTMetricConfiguration.html"> PUT Bucket metrics</a> in the <i>Amazon Simple Storage Service API Reference</i>.</p>
 */
export interface MetricsConfiguration {
  /**
   * The ID used to identify the metrics configuration.
   */
  readonly id: MetricsId;
  /**
   * Specifies a metrics configuration filter. The metrics configuration will only include objects that meet the filter's criteria. A filter must be a prefix, a tag, or a conjunction (MetricsAndOperator).
   */
  readonly filter?: MetricsFilter;
}

/**
 * <p>Specifies a metrics configuration filter. The metrics configuration only includes objects that meet the filter's criteria. A filter must be a prefix, a tag, or a conjunction (MetricsAndOperator).</p>
 */
export interface MetricsFilter {
  /**
   * The prefix used when evaluating a metrics filter.
   */
  readonly prefix?: Prefix;
  /**
   * The tag used when evaluating a metrics filter.
   */
  readonly tag?: Tag;
  /**
   * A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The operator must have at least two predicates, and an object must match all of the predicates in order for the filter to apply.
   */
  readonly and?: MetricsAndOperator;
}

/**
 * <p>Container for the <code>MultipartUpload</code> for the Amazon S3 object.</p>
 */
export interface MultipartUpload {
  /**
   * Upload ID that identifies the multipart upload.
   */
  readonly uploadId?: MultipartUploadId;
  /**
   * Key of the object for which the multipart upload was initiated.
   */
  readonly key?: ObjectKey;
  /**
   * Date and time at which the multipart upload was initiated.
   */
  readonly initiated?: Initiated;
  /**
   * The class of storage used to store the object.
   */
  readonly storageClass?: StorageClass;
  /**
   * Specifies the owner of the object that is part of the multipart upload.
   */
  readonly owner?: Owner;
  /**
   * Identifies who initiated the multipart upload.
   */
  readonly initiator?: Initiator;
}

/**
 * <p>Specifies when noncurrent object versions expire. Upon expiration, Amazon S3 permanently deletes the noncurrent object versions. You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent object versions at a specific period in the object's lifetime.</p>
 */
export interface NoncurrentVersionExpiration {
  /**
   * Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action. For information about the noncurrent days calculations, see How Amazon S3 Calculates When an Object Became Noncurrent in the Amazon Simple Storage Service Developer Guide.
   */
  readonly noncurrentDays?: Days;
}

/**
 * <p>Container for the transition rule that describes when noncurrent objects transition to the <code>STANDARD_IA</code>, <code>ONEZONE_IA</code>, <code>INTELLIGENT_TIERING</code>, <code>GLACIER</code>, or <code>DEEP_ARCHIVE</code> storage class. If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that Amazon S3 transition noncurrent object versions to the <code>STANDARD_IA</code>, <code>ONEZONE_IA</code>, <code>INTELLIGENT_TIERING</code>, <code>GLACIER</code>, or <code>DEEP_ARCHIVE</code> storage class at a specific period in the object's lifetime.</p>
 */
export interface NoncurrentVersionTransition {
  /**
   * Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action. For information about the noncurrent days calculations, see How Amazon S3 Calculates How Long an Object Has Been Noncurrent in the Amazon Simple Storage Service Developer Guide.
   */
  readonly noncurrentDays?: Days;
  /**
   * The class of storage used to store the object.
   */
  readonly storageClass?: TransitionStorageClass;
}

/**
 * <p>Specifies object key name filtering rules. For information about key name filtering, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Event Notifications</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface NotificationConfigurationFilter {
  /**
   * Container for specifying the AWS Lambda notification configuration.
   */
  readonly key?: S3KeyFilter;
}

/**
 * <p>An object consists of data and its descriptive metadata.</p>
 */
export interface Object {
  /**
   * The name that you assign to an object. You use the object key to retrieve the object.
   */
  readonly key?: ObjectKey;
  /**
   * The date the Object was Last Modified
   */
  readonly lastModified?: LastModified;
  /**
   * The entity tag is a hash of the object. The ETag reflects changes only to the contents of an object, not its metadata. The ETag may or may not be an MD5 digest of the object data. Whether or not it is depends on how the object was created and how it is encrypted as described below:   Objects created by the PUT Object, POST Object, or Copy operation, or through the AWS Management Console, and are encrypted by SSE-S3 or plaintext, have ETags that are an MD5 digest of their object data.   Objects created by the PUT Object, POST Object, or Copy operation, or through the AWS Management Console, and are encrypted by SSE-C or SSE-KMS, have ETags that are not an MD5 digest of their object data.   If an object is created by either the Multipart Upload or Part Copy operation, the ETag is not an MD5 digest, regardless of the method of encryption.
   */
  readonly eTag?: ETag;
  /**
   * Size in bytes of the object
   */
  readonly size?: Size;
  /**
   * The class of storage used to store the object.
   */
  readonly storageClass?: ObjectStorageClass;
  /**
   * The owner of the object
   */
  readonly owner?: Owner;
}

/**
 * <p>Object Identifier is unique value to identify objects.</p>
 */
export interface ObjectIdentifier {
  /**
   * Key name of the object to delete.
   */
  readonly key: ObjectKey;
  /**
   * VersionId for the specific version of the object to delete.
   */
  readonly versionId?: ObjectVersionId;
}

/**
 * <p>The container element for Object Lock configuration parameters.</p>
 */
export interface ObjectLockConfiguration {
  /**
   * Indicates whether this bucket has an Object Lock configuration enabled.
   */
  readonly objectLockEnabled?: ObjectLockEnabled;
  /**
   * The Object Lock rule in place for the specified object.
   */
  readonly rule?: ObjectLockRule;
}

/**
 * <p>A Legal Hold configuration for an object.</p>
 */
export interface ObjectLockLegalHold {
  /**
   * Indicates whether the specified object has a Legal Hold in place.
   */
  readonly status?: ObjectLockLegalHoldStatus;
}

/**
 * <p>A Retention configuration for an object.</p>
 */
export interface ObjectLockRetention {
  /**
   * Indicates the Retention mode for the specified object.
   */
  readonly mode?: ObjectLockRetentionMode;
  /**
   * The date on which this Object Lock Retention will expire.
   */
  readonly retainUntilDate?: _Date;
}

/**
 * <p>The container element for an Object Lock rule.</p>
 */
export interface ObjectLockRule {
  /**
   * The default retention period that you want to apply to new objects placed in the specified bucket.
   */
  readonly defaultRetention?: DefaultRetention;
}

/**
 * <p>The version of an object.</p>
 */
export interface ObjectVersion {
  /**
   * The entity tag is an MD5 hash of that version of the object.
   */
  readonly eTag?: ETag;
  /**
   * Size in bytes of the object.
   */
  readonly size?: Size;
  /**
   * The class of storage used to store the object.
   */
  readonly storageClass?: ObjectVersionStorageClass;
  /**
   * The object key.
   */
  readonly key?: ObjectKey;
  /**
   * Version ID of an object.
   */
  readonly versionId?: ObjectVersionId;
  /**
   * Specifies whether the object is (true) or is not (false) the latest version of an object.
   */
  readonly isLatest?: IsLatest;
  /**
   * Date and time the object was last modified.
   */
  readonly lastModified?: LastModified;
  /**
   * Specifies the owner of the object.
   */
  readonly owner?: Owner;
}

/**
 * <p>Describes the location where the restore job's output is stored.</p>
 */
export interface OutputLocation {
  /**
   * Describes an S3 location that will receive the results of the restore request.
   */
  readonly s3?: S3Location;
}

/**
 * <p>Describes how results of the Select job are serialized.</p>
 */
export interface OutputSerialization {
  /**
   * Describes the serialization of CSV-encoded Select results.
   */
  readonly csv?: CSVOutput;
  /**
   * Specifies JSON as request's output serialization format.
   */
  readonly json?: JSONOutput;
}

/**
 * <p>Container for the owner's display name and ID.</p>
 */
export interface Owner {
  /**
   * Container for the display name of the owner.
   */
  readonly displayName?: DisplayName;
  /**
   * Container for the ID of the owner.
   */
  readonly id?: ID;
}

/**
 * <p>The container element for a bucket's ownership controls.</p>
 */
export interface OwnershipControls {
  /**
   * The container element for an ownership control rule.
   */
  readonly rules: OwnershipControlsRules;
}

/**
 * <p>The container element for an ownership control rule.</p>
 */
export interface OwnershipControlsRule {
  /**
   * The container element for an ownership control rule.
   */
  readonly objectOwnership: ObjectOwnership;
}

/**
 * <p>Container for Parquet.</p>
 */
export interface ParquetInput {
}

/**
 * <p>Container for elements related to a part.</p>
 */
export interface Part {
  /**
   * Part number identifying the part. This is a positive integer between 1 and 10,000.
   */
  readonly partNumber?: PartNumber;
  /**
   * Date and time at which the part was uploaded.
   */
  readonly lastModified?: LastModified;
  /**
   * Entity tag returned when the part was uploaded.
   */
  readonly eTag?: ETag;
  /**
   * Size in bytes of the uploaded part data.
   */
  readonly size?: Size;
}

/**
 * <p>The container element for a bucket's policy status.</p>
 */
export interface PolicyStatus {
  /**
   * The policy status for this bucket. TRUE indicates that this bucket is public. FALSE indicates that the bucket is not public.
   */
  readonly isPublic?: IsPublic;
}

/**
 * <p>This data type contains information about progress of an operation.</p>
 */
export interface Progress {
  /**
   * The current number of object bytes scanned.
   */
  readonly bytesScanned?: BytesScanned;
  /**
   * The current number of uncompressed object bytes processed.
   */
  readonly bytesProcessed?: BytesProcessed;
  /**
   * The current number of bytes of records payload data returned.
   */
  readonly bytesReturned?: BytesReturned;
}

/**
 * <p>This data type contains information about the progress event of an operation.</p>
 */
export interface ProgressEvent {
  /**
   * The Progress event details.
   */
  readonly details?: Progress;
}

/**
 * <p>The PublicAccessBlock configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. </p>
 */
export interface PublicAccessBlockConfiguration {
  /**
   * Specifies whether Amazon S3 should block public access control lists (ACLs) for this bucket and objects in this bucket. Setting this element to TRUE causes the following behavior:   PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.   PUT Object calls fail if the request includes a public ACL.   PUT Bucket calls fail if the request includes a public ACL.   Enabling this setting doesn't affect existing policies or ACLs.
   */
  readonly blockPublicAcls?: Setting;
  /**
   * Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this bucket. Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on this bucket and objects in this bucket. Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
   */
  readonly ignorePublicAcls?: Setting;
  /**
   * Specifies whether Amazon S3 should block public bucket policies for this bucket. Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access.  Enabling this setting doesn't affect existing bucket policies.
   */
  readonly blockPublicPolicy?: Setting;
  /**
   * Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element to TRUE restricts access to this bucket to only AWS service principals and authorized users within this account if the bucket has a public policy. Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.
   */
  readonly restrictPublicBuckets?: Setting;
}

/**
 * undefined
 */
export interface PutBucketAccelerateConfigurationRequest {
  /**
   * The name of the bucket for which the accelerate configuration is set.
   */
  readonly bucket: BucketName;
  /**
   * Container for setting the transfer acceleration state.
   */
  readonly accelerateConfiguration: AccelerateConfiguration;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface PutBucketAclRequest {
  /**
   * The canned ACL to apply to the bucket.
   */
  readonly acl?: BucketCannedACL;
  /**
   * Contains the elements that set the ACL permissions for an object per grantee.
   */
  readonly accessControlPolicy?: AccessControlPolicy;
  /**
   * The bucket to which to apply the ACL.
   */
  readonly bucket: BucketName;
  /**
   * The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message integrity check to verify that the request body was not corrupted in transit. For more information, go to RFC 1864.  For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.
   */
  readonly contentMd5?: ContentMD5;
  /**
   * Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.
   */
  readonly grantFullControl?: GrantFullControl;
  /**
   * Allows grantee to list the objects in the bucket.
   */
  readonly grantRead?: GrantRead;
  /**
   * Allows grantee to read the bucket ACL.
   */
  readonly grantReadAcp?: GrantReadACP;
  /**
   * Allows grantee to create, overwrite, and delete any object in the bucket.
   */
  readonly grantWrite?: GrantWrite;
  /**
   * Allows grantee to write the ACL for the applicable bucket.
   */
  readonly grantWriteAcp?: GrantWriteACP;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface PutBucketAnalyticsConfigurationRequest {
  /**
   * The name of the bucket to which an analytics configuration is stored.
   */
  readonly bucket: BucketName;
  /**
   * The ID that identifies the analytics configuration.
   */
  readonly id: AnalyticsId;
  /**
   * The configuration and any analyses for the analytics filter.
   */
  readonly analyticsConfiguration: AnalyticsConfiguration;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface PutBucketCorsRequest {
  /**
   * Specifies the bucket impacted by the corsconfiguration.
   */
  readonly bucket: BucketName;
  /**
   * Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more information, see Enabling Cross-Origin Resource Sharing in the Amazon Simple Storage Service Developer Guide.
   */
  readonly corsConfiguration: CORSConfiguration;
  /**
   * The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message integrity check to verify that the request body was not corrupted in transit. For more information, go to RFC 1864.  For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.
   */
  readonly contentMd5?: ContentMD5;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface PutBucketEncryptionRequest {
  /**
   * Specifies default encryption for a bucket using server-side encryption with Amazon S3-managed keys (SSE-S3) or customer master keys stored in AWS KMS (SSE-KMS). For information about the Amazon S3 default encryption feature, see Amazon S3 Default Bucket Encryption in the Amazon Simple Storage Service Developer Guide.
   */
  readonly bucket: BucketName;
  /**
   * The base64-encoded 128-bit MD5 digest of the server-side encryption configuration. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.
   */
  readonly contentMd5?: ContentMD5;
  /**
   * The base64-encoded 128-bit MD5 digest of the server-side encryption configuration. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.
   */
  readonly serverSideEncryptionConfiguration: ServerSideEncryptionConfiguration;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface PutBucketIntelligentTieringConfigurationRequest {
  /**
   * The name of the Amazon S3 bucket whose configuration you want to modify or retrieve.
   */
  readonly bucket: BucketName;
  /**
   * The ID used to identify the S3 Intelligent-Tiering configuration.
   */
  readonly id: IntelligentTieringId;
  /**
   * Container for S3 Intelligent-Tiering configuration.
   */
  readonly intelligentTieringConfiguration: IntelligentTieringConfiguration;
}

/**
 * undefined
 */
export interface PutBucketInventoryConfigurationRequest {
  /**
   * The name of the bucket where the inventory configuration will be stored.
   */
  readonly bucket: BucketName;
  /**
   * The ID used to identify the inventory configuration.
   */
  readonly id: InventoryId;
  /**
   * Specifies the inventory configuration.
   */
  readonly inventoryConfiguration: InventoryConfiguration;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface PutBucketLifecycleConfigurationRequest {
  /**
   * The name of the bucket for which to set the configuration.
   */
  readonly bucket: BucketName;
  /**
   * Container for lifecycle rules. You can add as many as 1,000 rules.
   */
  readonly lifecycleConfiguration?: BucketLifecycleConfiguration;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface PutBucketLifecycleRequest {
  /**
   * 
   */
  readonly bucket: BucketName;
  /**
   * For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.
   */
  readonly contentMd5?: ContentMD5;
  /**
   * 
   */
  readonly lifecycleConfiguration?: LifecycleConfiguration;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface PutBucketLoggingRequest {
  /**
   * The name of the bucket for which to set the logging parameters.
   */
  readonly bucket: BucketName;
  /**
   * Container for logging status information.
   */
  readonly bucketLoggingStatus: BucketLoggingStatus;
  /**
   * The MD5 hash of the PutBucketLogging request body. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.
   */
  readonly contentMd5?: ContentMD5;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface PutBucketMetricsConfigurationRequest {
  /**
   * The name of the bucket for which the metrics configuration is set.
   */
  readonly bucket: BucketName;
  /**
   * The ID used to identify the metrics configuration.
   */
  readonly id: MetricsId;
  /**
   * Specifies the metrics configuration.
   */
  readonly metricsConfiguration: MetricsConfiguration;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface PutBucketNotificationConfigurationRequest {
  /**
   * The name of the bucket.
   */
  readonly bucket: BucketName;
  /**
   * The name of the bucket.
   */
  readonly notificationConfiguration: NotificationConfiguration;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface PutBucketNotificationRequest {
  /**
   * The name of the bucket.
   */
  readonly bucket: BucketName;
  /**
   * The MD5 hash of the PutPublicAccessBlock request body. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.
   */
  readonly contentMd5?: ContentMD5;
  /**
   * The container for the configuration.
   */
  readonly notificationConfiguration: NotificationConfigurationDeprecated;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface PutBucketOwnershipControlsRequest {
  /**
   * The name of the Amazon S3 bucket whose OwnershipControls you want to set.
   */
  readonly bucket: BucketName;
  /**
   * The MD5 hash of the OwnershipControls request body.  For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.
   */
  readonly contentMd5?: ContentMD5;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
  /**
   * The OwnershipControls (BucketOwnerPreferred or ObjectWriter) that you want to apply to this Amazon S3 bucket.
   */
  readonly ownershipControls: OwnershipControls;
}

/**
 * undefined
 */
export interface PutBucketPolicyRequest {
  /**
   * The name of the bucket.
   */
  readonly bucket: BucketName;
  /**
   * The MD5 hash of the request body. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.
   */
  readonly contentMd5?: ContentMD5;
  /**
   * Set this parameter to true to confirm that you want to remove your permissions to change this bucket policy in the future.
   */
  readonly confirmRemoveSelfBucketAccess?: ConfirmRemoveSelfBucketAccess;
  /**
   * The bucket policy as a JSON document.
   */
  readonly policy: Policy;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface PutBucketReplicationRequest {
  /**
   * The name of the bucket
   */
  readonly bucket: BucketName;
  /**
   * The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see RFC 1864. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.
   */
  readonly contentMd5?: ContentMD5;
  /**
   * The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see RFC 1864. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.
   */
  readonly replicationConfiguration: ReplicationConfiguration;
  /**
   * A token to allow Object Lock to be enabled for an existing bucket.
   */
  readonly token?: ObjectLockToken;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface PutBucketRequestPaymentRequest {
  /**
   * The bucket name.
   */
  readonly bucket: BucketName;
  /**
   * &gt;The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see RFC 1864. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.
   */
  readonly contentMd5?: ContentMD5;
  /**
   * Container for Payer.
   */
  readonly requestPaymentConfiguration: RequestPaymentConfiguration;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface PutBucketTaggingRequest {
  /**
   * The bucket name.
   */
  readonly bucket: BucketName;
  /**
   * The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see RFC 1864. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.
   */
  readonly contentMd5?: ContentMD5;
  /**
   * Container for the TagSet and Tag elements.
   */
  readonly tagging: Tagging;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface PutBucketVersioningRequest {
  /**
   * The bucket name.
   */
  readonly bucket: BucketName;
  /**
   * &gt;The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see RFC 1864. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.
   */
  readonly contentMd5?: ContentMD5;
  /**
   * The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device.
   */
  readonly mfa?: MFA;
  /**
   * Container for setting the versioning state.
   */
  readonly versioningConfiguration: VersioningConfiguration;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface PutBucketWebsiteRequest {
  /**
   * The bucket name.
   */
  readonly bucket: BucketName;
  /**
   * The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see RFC 1864. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.
   */
  readonly contentMd5?: ContentMD5;
  /**
   * Container for the request.
   */
  readonly websiteConfiguration: WebsiteConfiguration;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface PutObjectAclRequest {
  /**
   * The canned ACL to apply to the object. For more information, see Canned ACL.
   */
  readonly acl?: ObjectCannedACL;
  /**
   * Contains the elements that set the ACL permissions for an object per grantee.
   */
  readonly accessControlPolicy?: AccessControlPolicy;
  /**
   * The bucket name that contains the object to which you want to attach the ACL.  When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide.
   */
  readonly bucket: BucketName;
  /**
   * The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message integrity check to verify that the request body was not corrupted in transit. For more information, go to RFC 1864.&gt;  For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.
   */
  readonly contentMd5?: ContentMD5;
  /**
   * Allows grantee the read, write, read ACP, and write ACP permissions on the bucket. This action is not supported by Amazon S3 on Outposts.
   */
  readonly grantFullControl?: GrantFullControl;
  /**
   * Allows grantee to list the objects in the bucket. This action is not supported by Amazon S3 on Outposts.
   */
  readonly grantRead?: GrantRead;
  /**
   * Allows grantee to read the bucket ACL. This action is not supported by Amazon S3 on Outposts.
   */
  readonly grantReadAcp?: GrantReadACP;
  /**
   * Allows grantee to create, overwrite, and delete any object in the bucket.
   */
  readonly grantWrite?: GrantWrite;
  /**
   * Allows grantee to write the ACL for the applicable bucket. This action is not supported by Amazon S3 on Outposts.
   */
  readonly grantWriteAcp?: GrantWriteACP;
  /**
   * Key for which the PUT operation was initiated. When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide. When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon Simple Storage Service Developer Guide.
   */
  readonly key: ObjectKey;
  /**
   * Key for which the PUT operation was initiated. When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide. When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon Simple Storage Service Developer Guide.
   */
  readonly requestPayer?: RequestPayer;
  /**
   * VersionId used to reference a specific version of the object.
   */
  readonly versionId?: ObjectVersionId;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface PutObjectLegalHoldRequest {
  /**
   * The bucket name containing the object that you want to place a Legal Hold on.  When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide.
   */
  readonly bucket: BucketName;
  /**
   * The key name for the object that you want to place a Legal Hold on.
   */
  readonly key: ObjectKey;
  /**
   * Container element for the Legal Hold configuration you want to apply to the specified object.
   */
  readonly legalHold?: ObjectLockLegalHold;
  /**
   * Container element for the Legal Hold configuration you want to apply to the specified object.
   */
  readonly requestPayer?: RequestPayer;
  /**
   * The version ID of the object that you want to place a Legal Hold on.
   */
  readonly versionId?: ObjectVersionId;
  /**
   * The MD5 hash for the request body. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.
   */
  readonly contentMd5?: ContentMD5;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface PutObjectLockConfigurationRequest {
  /**
   * The bucket whose Object Lock configuration you want to create or replace.
   */
  readonly bucket: BucketName;
  /**
   * The Object Lock configuration that you want to apply to the specified bucket.
   */
  readonly objectLockConfiguration?: ObjectLockConfiguration;
  /**
   * The Object Lock configuration that you want to apply to the specified bucket.
   */
  readonly requestPayer?: RequestPayer;
  /**
   * A token to allow Object Lock to be enabled for an existing bucket.
   */
  readonly token?: ObjectLockToken;
  /**
   * The MD5 hash for the request body. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.
   */
  readonly contentMd5?: ContentMD5;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface PutObjectRequest {
  /**
   * The canned ACL to apply to the object. For more information, see Canned ACL. This action is not supported by Amazon S3 on Outposts.
   */
  readonly acl?: ObjectCannedACL;
  /**
   * Object data.
   */
  readonly body?: Body;
  /**
   * The bucket name to which the PUT operation was initiated.  When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide. When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon Simple Storage Service Developer Guide.
   */
  readonly bucket: BucketName;
  /**
   * Can be used to specify caching behavior along the request/reply chain. For more information, see http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9.
   */
  readonly cacheControl?: CacheControl;
  /**
   * Specifies presentational information for the object. For more information, see http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1.
   */
  readonly contentDisposition?: ContentDisposition;
  /**
   * Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. For more information, see http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11.
   */
  readonly contentEncoding?: ContentEncoding;
  /**
   * The language the content is in.
   */
  readonly contentLanguage?: ContentLanguage;
  /**
   * Size of the body in bytes. This parameter is useful when the size of the body cannot be determined automatically. For more information, see http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.13.
   */
  readonly contentLength?: ContentLength;
  /**
   * The base64-encoded 128-bit MD5 digest of the message (without the headers) according to RFC 1864. This header can be used as a message integrity check to verify that the data is the same data that was originally sent. Although it is optional, we recommend using the Content-MD5 mechanism as an end-to-end integrity check. For more information about REST request authentication, see REST Authentication.
   */
  readonly contentMd5?: ContentMD5;
  /**
   * A standard MIME type describing the format of the contents. For more information, see http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17.
   */
  readonly contentType?: ContentType;
  /**
   * The date and time at which the object is no longer cacheable. For more information, see http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21.
   */
  readonly expires?: Expires;
  /**
   * Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object. This action is not supported by Amazon S3 on Outposts.
   */
  readonly grantFullControl?: GrantFullControl;
  /**
   * Allows grantee to read the object data and its metadata. This action is not supported by Amazon S3 on Outposts.
   */
  readonly grantRead?: GrantRead;
  /**
   * Allows grantee to read the object ACL. This action is not supported by Amazon S3 on Outposts.
   */
  readonly grantReadAcp?: GrantReadACP;
  /**
   * Allows grantee to write the ACL for the applicable object. This action is not supported by Amazon S3 on Outposts.
   */
  readonly grantWriteAcp?: GrantWriteACP;
  /**
   * Object key for which the PUT operation was initiated.
   */
  readonly key: ObjectKey;
  /**
   * A map of metadata to store with the object in S3.
   */
  readonly metadata?: Metadata;
  /**
   * The server-side encryption algorithm used when storing this object in Amazon S3 (for example, AES256, aws:kms).
   */
  readonly serverSideEncryption?: ServerSideEncryption;
  /**
   * By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses the OUTPOSTS Storage Class. For more information, see Storage Classes in the Amazon S3 Service Developer Guide.
   */
  readonly storageClass?: StorageClass;
  /**
   * If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata. For information about object metadata, see Object Key and Metadata. In the following example, the request header sets the redirect to an object (anotherPage.html) in the same bucket:  x-amz-website-redirect-location: /anotherPage.html  In the following example, the request header sets the object redirect to another website:  x-amz-website-redirect-location: http://www.example.com/  For more information about website hosting in Amazon S3, see Hosting Websites on Amazon S3 and How to Configure Website Page Redirects.
   */
  readonly websiteRedirectLocation?: WebsiteRedirectLocation;
  /**
   * Specifies the algorithm to use to when encrypting the object (for example, AES256).
   */
  readonly sseCustomerAlgorithm?: SSECustomerAlgorithm;
  /**
   * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header.
   */
  readonly sseCustomerKey?: SSECustomerKey;
  /**
   * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
   */
  readonly sseCustomerKeyMd5?: SSECustomerKeyMD5;
  /**
   * If x-amz-server-side-encryption is present and has the value of aws:kms, this header specifies the ID of the AWS Key Management Service (AWS KMS) symmetrical customer managed customer master key (CMK) that was used for the object.  If the value of x-amz-server-side-encryption is aws:kms, this header specifies the ID of the symmetric customer managed AWS KMS CMK that will be used for the object. If you specify x-amz-server-side-encryption:aws:kms, but do not provide x-amz-server-side-encryption-aws-kms-key-id, Amazon S3 uses the AWS managed CMK in AWS to protect the data.
   */
  readonly ssekmsKeyId?: SSEKMSKeyId;
  /**
   * Specifies the AWS KMS Encryption Context to use for object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.
   */
  readonly ssekmsEncryptionContext?: SSEKMSEncryptionContext;
  /**
   * Specifies the AWS KMS Encryption Context to use for object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.
   */
  readonly requestPayer?: RequestPayer;
  /**
   * The tag-set for the object. The tag-set must be encoded as URL Query parameters. (For example, "Key1=Value1")
   */
  readonly tagging?: TaggingHeader;
  /**
   * The Object Lock mode that you want to apply to this object.
   */
  readonly objectLockMode?: ObjectLockMode;
  /**
   * The date and time when you want this object's Object Lock to expire.
   */
  readonly objectLockRetainUntilDate?: ObjectLockRetainUntilDate;
  /**
   * Specifies whether a legal hold will be applied to this object. For more information about S3 Object Lock, see Object Lock.
   */
  readonly objectLockLegalHoldStatus?: ObjectLockLegalHoldStatus;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface PutObjectRetentionRequest {
  /**
   * The bucket name that contains the object you want to apply this Object Retention configuration to.  When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide.
   */
  readonly bucket: BucketName;
  /**
   * The key name for the object that you want to apply this Object Retention configuration to.
   */
  readonly key: ObjectKey;
  /**
   * The container element for the Object Retention configuration.
   */
  readonly retention?: ObjectLockRetention;
  /**
   * The container element for the Object Retention configuration.
   */
  readonly requestPayer?: RequestPayer;
  /**
   * The version ID for the object that you want to apply this Object Retention configuration to.
   */
  readonly versionId?: ObjectVersionId;
  /**
   * Indicates whether this operation should bypass Governance-mode restrictions.
   */
  readonly bypassGovernanceRetention?: BypassGovernanceRetention;
  /**
   * The MD5 hash for the request body. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.
   */
  readonly contentMd5?: ContentMD5;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface PutObjectTaggingRequest {
  /**
   * The bucket name containing the object.  When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide. When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon Simple Storage Service Developer Guide.
   */
  readonly bucket: BucketName;
  /**
   * Name of the object key.
   */
  readonly key: ObjectKey;
  /**
   * The versionId of the object that the tag-set will be added to.
   */
  readonly versionId?: ObjectVersionId;
  /**
   * The MD5 hash for the request body. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.
   */
  readonly contentMd5?: ContentMD5;
  /**
   * Container for the TagSet and Tag elements
   */
  readonly tagging: Tagging;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface PutPublicAccessBlockRequest {
  /**
   * The name of the Amazon S3 bucket whose PublicAccessBlock configuration you want to set.
   */
  readonly bucket: BucketName;
  /**
   * The MD5 hash of the PutPublicAccessBlock request body.  For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.
   */
  readonly contentMd5?: ContentMD5;
  /**
   * The PublicAccessBlock configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see The Meaning of "Public" in the Amazon Simple Storage Service Developer Guide.
   */
  readonly publicAccessBlockConfiguration: PublicAccessBlockConfiguration;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * <p>Specifies the configuration for publishing messages to an Amazon Simple Queue Service (Amazon SQS) queue when Amazon S3 detects specified events.</p>
 */
export interface QueueConfiguration {
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly id?: NotificationId;
  /**
   * The Amazon Resource Name (ARN) of the Amazon SQS queue to which Amazon S3 publishes a message when it detects events of the specified type.
   */
  readonly queueArn: QueueArn;
  /**
   * A collection of bucket events for which to send notifications
   */
  readonly events: EventList;
  /**
   * A collection of bucket events for which to send notifications
   */
  readonly filter?: NotificationConfigurationFilter;
}

/**
 * <p>This data type is deprecated. Use <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_QueueConfiguration.html">QueueConfiguration</a> for the same purposes. This data type specifies the configuration for publishing messages to an Amazon Simple Queue Service (Amazon SQS) queue when Amazon S3 detects specified events. </p>
 */
export interface QueueConfigurationDeprecated {
  /**
   * A collection of bucket events for which to send notifications
   */
  readonly id?: NotificationId;
  /**
   * A collection of bucket events for which to send notifications
   */
  readonly event?: Event;
  /**
   * A collection of bucket events for which to send notifications
   */
  readonly events?: EventList;
  /**
   * The Amazon Resource Name (ARN) of the Amazon SQS queue to which Amazon S3 publishes a message when it detects events of the specified type.
   */
  readonly queue?: QueueArn;
}

/**
 * <p>The container for the records event.</p>
 */
export interface RecordsEvent {
  /**
   * The byte array of partial, one or more result records.
   */
  readonly payload?: Buffer;
}

/**
 * <p>Specifies how requests are redirected. In the event of an error, you can specify a different error code to return.</p>
 */
export interface Redirect {
  /**
   * The host name to use in the redirect request.
   */
  readonly hostName?: HostName;
  /**
   * The HTTP redirect code to use on the response. Not required if one of the siblings is present.
   */
  readonly httpRedirectCode?: HttpRedirectCode;
  /**
   * Protocol to use when redirecting requests. The default is the protocol that is used in the original request.
   */
  readonly protocol?: Protocol;
  /**
   * The object key prefix to use in the redirect request. For example, to redirect requests for all pages with prefix docs/ (objects in the docs/ folder) to documents/, you can set a condition block with KeyPrefixEquals set to docs/ and in the Redirect set ReplaceKeyPrefixWith to /documents. Not required if one of the siblings is present. Can be present only if ReplaceKeyWith is not provided.
   */
  readonly replaceKeyPrefixWith?: ReplaceKeyPrefixWith;
  /**
   * The specific object key to use in the redirect request. For example, redirect request to error.html. Not required if one of the siblings is present. Can be present only if ReplaceKeyPrefixWith is not provided.
   */
  readonly replaceKeyWith?: ReplaceKeyWith;
}

/**
 * <p>Specifies the redirect behavior of all requests to a website endpoint of an Amazon S3 bucket.</p>
 */
export interface RedirectAllRequestsTo {
  /**
   * Name of the host where requests are redirected.
   */
  readonly hostName: HostName;
  /**
   * Protocol to use when redirecting requests. The default is the protocol that is used in the original request.
   */
  readonly protocol?: Protocol;
}

/**
 * <p>A container for replication rules. You can add up to 1,000 rules. The maximum size of a replication configuration is 2 MB.</p>
 */
export interface ReplicationConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that Amazon S3 assumes when replicating objects. For more information, see How to Set Up Replication in the Amazon Simple Storage Service Developer Guide.
   */
  readonly role: Role;
  /**
   * A container for one or more replication rules. A replication configuration must have at least one rule and can contain a maximum of 1,000 rules.
   */
  readonly rules: ReplicationRules;
}

/**
 * <p>Specifies which Amazon S3 objects to replicate and where to store the replicas.</p>
 */
export interface ReplicationRule {
  /**
   * A unique identifier for the rule. The maximum value is 255 characters.
   */
  readonly id?: ID;
  /**
   * The priority associated with the rule. If you specify multiple rules in a replication configuration, Amazon S3 prioritizes the rules to prevent conflicts when filtering. If two or more rules identify the same object based on a specified filter, the rule with higher priority takes precedence. For example:   Same object quality prefix-based filter criteria if prefixes you specified in multiple rules overlap    Same object qualify tag-based filter criteria specified in multiple rules   For more information, see Replication in the Amazon Simple Storage Service Developer Guide.
   */
  readonly priority?: Priority;
  /**
   * An object key name prefix that identifies the object or objects to which the rule applies. The maximum prefix length is 1,024 characters. To include all objects in a bucket, specify an empty string.
   */
  readonly prefix?: Prefix;
  /**
   * An object key name prefix that identifies the object or objects to which the rule applies. The maximum prefix length is 1,024 characters. To include all objects in a bucket, specify an empty string.
   */
  readonly filter?: ReplicationRuleFilter;
  /**
   * Specifies whether the rule is enabled.
   */
  readonly status: ReplicationRuleStatus;
  /**
   * A container that describes additional filters for identifying the source objects that you want to replicate. You can choose to enable or disable the replication of these objects. Currently, Amazon S3 supports only the filter that you can specify for objects created with server-side encryption using a customer master key (CMK) stored in AWS Key Management Service (SSE-KMS).
   */
  readonly sourceSelectionCriteria?: SourceSelectionCriteria;
  /**
   * 
   */
  readonly existingObjectReplication?: ExistingObjectReplication;
  /**
   * A container for information about the replication destination and its configurations including enabling the S3 Replication Time Control (S3 RTC).
   */
  readonly destination: Destination;
  /**
   * A container for information about the replication destination and its configurations including enabling the S3 Replication Time Control (S3 RTC).
   */
  readonly deleteMarkerReplication?: DeleteMarkerReplication;
}

/**
 * <p>A container for specifying rule filters. The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter. </p> <p>For example:</p> <ul> <li> <p>If you specify both a <code>Prefix</code> and a <code>Tag</code> filter, wrap these filters in an <code>And</code> tag. </p> </li> <li> <p>If you specify a filter based on multiple tags, wrap the <code>Tag</code> elements in an <code>And</code> tag</p> </li> </ul>
 */
export interface ReplicationRuleAndOperator {
  /**
   * An object key name prefix that identifies the subset of objects to which the rule applies.
   */
  readonly prefix?: Prefix;
  /**
   * An array of tags containing key and value pairs.
   */
  readonly tags?: TagSet;
}

/**
 * <p>A filter that identifies the subset of objects to which the replication rule applies. A <code>Filter</code> must specify exactly one <code>Prefix</code>, <code>Tag</code>, or an <code>And</code> child element.</p>
 */
export interface ReplicationRuleFilter {
  /**
   * An object key name prefix that identifies the subset of objects to which the rule applies.
   */
  readonly prefix?: Prefix;
  /**
   * A container for specifying a tag key and value.  The rule applies only to objects that have the tag in their tag set.
   */
  readonly tag?: Tag;
  /**
   * A container for specifying rule filters. The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter. For example:    If you specify both a Prefix and a Tag filter, wrap these filters in an And tag.   If you specify a filter based on multiple tags, wrap the Tag elements in an And tag.
   */
  readonly and?: ReplicationRuleAndOperator;
}

/**
 * <p> A container specifying S3 Replication Time Control (S3 RTC) related information, including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated. Must be specified together with a <code>Metrics</code> block. </p>
 */
export interface ReplicationTime {
  /**
   * Specifies whether the replication time is enabled.
   */
  readonly status: ReplicationTimeStatus;
  /**
   * A container specifying the time by which replication should be complete for all objects and operations on objects.
   */
  readonly time: ReplicationTimeValue;
}

/**
 * <p> A container specifying the time value for S3 Replication Time Control (S3 RTC) and replication metrics <code>EventThreshold</code>. </p>
 */
export interface ReplicationTimeValue {
  /**
   * Contains an integer specifying time in minutes.   Valid values: 15 minutes.
   */
  readonly minutes?: Minutes;
}

/**
 * <p>Container for Payer.</p>
 */
export interface RequestPaymentConfiguration {
  /**
   * Specifies who pays for the download and request fees.
   */
  readonly payer: Payer;
}

/**
 * <p>Container for specifying if periodic <code>QueryProgress</code> messages should be sent.</p>
 */
export interface RequestProgress {
  /**
   * Specifies whether periodic QueryProgress frames should be sent. Valid values: TRUE, FALSE. Default value: FALSE.
   */
  readonly enabled?: EnableRequestProgress;
}

/**
 * undefined
 */
export interface RestoreObjectRequest {
  /**
   * The bucket name containing the object to restore.  When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide. When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon Simple Storage Service Developer Guide.
   */
  readonly bucket: BucketName;
  /**
   * Object key for which the operation was initiated.
   */
  readonly key: ObjectKey;
  /**
   * VersionId used to reference a specific version of the object.
   */
  readonly versionId?: ObjectVersionId;
  /**
   * VersionId used to reference a specific version of the object.
   */
  readonly restoreRequest?: RestoreRequest;
  /**
   * VersionId used to reference a specific version of the object.
   */
  readonly requestPayer?: RequestPayer;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * <p>Container for restore job parameters.</p>
 */
export interface RestoreRequest {
  /**
   * Lifetime of the active copy in days. Do not use with restores that specify OutputLocation. The Days element is required for regular restores, and must not be provided for select requests.
   */
  readonly days?: Days;
  /**
   * S3 Glacier related parameters pertaining to this job. Do not use with restores that specify OutputLocation.
   */
  readonly glacierJobParameters?: GlacierJobParameters;
  /**
   * Type of restore request.
   */
  readonly type?: RestoreRequestType;
  /**
   * Retrieval tier at which the restore will be processed.
   */
  readonly tier?: Tier;
  /**
   * The optional description for the job.
   */
  readonly description?: Description;
  /**
   * Describes the parameters for Select job types.
   */
  readonly selectParameters?: SelectParameters;
  /**
   * Describes the location where the restore job's output is stored.
   */
  readonly outputLocation?: OutputLocation;
}

/**
 * <p>Specifies the redirect behavior and when a redirect is applied. For more information about routing rules, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html#advanced-conditional-redirects">Configuring advanced conditional redirects</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface RoutingRule {
  /**
   * A container for describing a condition that must be met for the specified redirect to apply. For example, 1. If request is for pages in the /docs folder, redirect to the /documents folder. 2. If request results in HTTP error 4xx, redirect request to another host where you might process the error.
   */
  readonly condition?: Condition;
  /**
   * Container for redirect information. You can redirect requests to another host, to another page, or with another protocol. In the event of an error, you can specify a different error code to return.
   */
  readonly redirect: Redirect;
}

/**
 * <p>Specifies lifecycle rules for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlifecycle.html">Put Bucket Lifecycle Configuration</a> in the <i>Amazon Simple Storage Service API Reference</i>. For examples, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html#API_PutBucketLifecycleConfiguration_Examples">Put Bucket Lifecycle Configuration Examples</a> </p>
 */
export interface Rule {
  /**
   * Specifies the expiration for the lifecycle of the object.
   */
  readonly expiration?: LifecycleExpiration;
  /**
   * Unique identifier for the rule. The value can't be longer than 255 characters.
   */
  readonly id?: ID;
  /**
   * Object key prefix that identifies one or more objects to which this rule applies.
   */
  readonly prefix: Prefix;
  /**
   * If Enabled, the rule is currently being applied. If Disabled, the rule is not currently being applied.
   */
  readonly status: ExpirationStatus;
  /**
   * Specifies when an object transitions to a specified storage class. For more information about Amazon S3 lifecycle configuration rules, see Transitioning Objects Using Amazon S3 Lifecycle in the Amazon Simple Storage Service Developer Guide.
   */
  readonly transition?: Transition;
  /**
   * Specifies when an object transitions to a specified storage class. For more information about Amazon S3 lifecycle configuration rules, see Transitioning Objects Using Amazon S3 Lifecycle in the Amazon Simple Storage Service Developer Guide.
   */
  readonly noncurrentVersionTransition?: NoncurrentVersionTransition;
  /**
   * Specifies when an object transitions to a specified storage class. For more information about Amazon S3 lifecycle configuration rules, see Transitioning Objects Using Amazon S3 Lifecycle in the Amazon Simple Storage Service Developer Guide.
   */
  readonly noncurrentVersionExpiration?: NoncurrentVersionExpiration;
  /**
   * Specifies when an object transitions to a specified storage class. For more information about Amazon S3 lifecycle configuration rules, see Transitioning Objects Using Amazon S3 Lifecycle in the Amazon Simple Storage Service Developer Guide.
   */
  readonly abortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
}

/**
 * <p>A container for object key name prefix and suffix filtering rules.</p>
 */
export interface S3KeyFilter {
  /**
   * Specifies when an object transitions to a specified storage class. For more information about Amazon S3 lifecycle configuration rules, see Transitioning Objects Using Amazon S3 Lifecycle in the Amazon Simple Storage Service Developer Guide.
   */
  readonly filterRules?: FilterRuleList;
}

/**
 * <p>Describes an Amazon S3 location that will receive the results of the restore request.</p>
 */
export interface S3Location {
  /**
   * The name of the bucket where the restore results will be placed.
   */
  readonly bucketName: BucketName;
  /**
   * The prefix that is prepended to the restore results for this request.
   */
  readonly prefix: LocationPrefix;
  /**
   * The prefix that is prepended to the restore results for this request.
   */
  readonly encryption?: Encryption;
  /**
   * The canned ACL to apply to the restore results.
   */
  readonly cannedAcl?: ObjectCannedACL;
  /**
   * A list of grants that control access to the staged results.
   */
  readonly accessControlList?: Grants;
  /**
   * The tag-set that is applied to the restore results.
   */
  readonly tagging?: Tagging;
  /**
   * A list of metadata to store with the restore results in S3.
   */
  readonly userMetadata?: UserMetadata;
  /**
   * The class of storage used to store the restore results.
   */
  readonly storageClass?: StorageClass;
}

/**
 * <p>Specifies the use of SSE-KMS to encrypt delivered inventory reports.</p>
 */
export interface SSEKMS {
  /**
   * Specifies the ID of the AWS Key Management Service (AWS KMS) symmetric customer managed customer master key (CMK) to use for encrypting inventory reports.
   */
  readonly keyId: SSEKMSKeyId;
}

/**
 * <p>Specifies the use of SSE-S3 to encrypt delivered inventory reports.</p>
 */
export interface SSES3 {
}

/**
 * <p>Specifies the byte range of the object to get the records from. A record is processed when its first byte is contained by the range. This parameter is optional, but when specified, it must not be empty. See RFC 2616, Section 14.35.1 about how to specify the start and end of the range.</p>
 */
export interface ScanRange {
  /**
   * Specifies the start of the byte range. This parameter is optional. Valid values: non-negative integers. The default value is 0. If only start is supplied, it means scan from that point to the end of the file.For example; &lt;scanrange&gt;&lt;start&gt;50&lt;/start&gt;&lt;/scanrange&gt; means scan from byte 50 until the end of the file.
   */
  readonly start?: Start;
  /**
   * Specifies the end of the byte range. This parameter is optional. Valid values: non-negative integers. The default value is one less than the size of the object being queried. If only the End parameter is supplied, it is interpreted to mean scan the last N bytes of the file. For example, &lt;scanrange&gt;&lt;end&gt;50&lt;/end&gt;&lt;/scanrange&gt; means scan the last 50 bytes.
   */
  readonly end?: End;
}

/**
 * <p>Request to filter the contents of an Amazon S3 object based on a simple Structured Query Language (SQL) statement. In the request, along with the SQL expression, you must specify a data serialization format (JSON or CSV) of the object. Amazon S3 uses this to parse object data into records. It returns only records that match the specified SQL expression. You must also specify the data serialization format for the response. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectSELECTContent.html">S3Select API Documentation</a>.</p>
 */
export interface SelectObjectContentRequest {
  /**
   * The S3 bucket.
   */
  readonly bucket: BucketName;
  /**
   * The object key.
   */
  readonly key: ObjectKey;
  /**
   * The SSE Algorithm used to encrypt the object. For more information, see Server-Side Encryption (Using Customer-Provided Encryption Keys.
   */
  readonly sseCustomerAlgorithm?: SSECustomerAlgorithm;
  /**
   * The SSE Customer Key. For more information, see Server-Side Encryption (Using Customer-Provided Encryption Keys.
   */
  readonly sseCustomerKey?: SSECustomerKey;
  /**
   * The SSE Customer Key MD5. For more information, see Server-Side Encryption (Using Customer-Provided Encryption Keys.
   */
  readonly sseCustomerKeyMd5?: SSECustomerKeyMD5;
  /**
   * The expression that is used to query the object.
   */
  readonly expression: Expression;
  /**
   * The type of the provided expression (for example, SQL).
   */
  readonly expressionType: ExpressionType;
  /**
   * Specifies if periodic request progress information should be enabled.
   */
  readonly requestProgress?: RequestProgress;
  /**
   * Describes the format of the data in the object that is being queried.
   */
  readonly inputSerialization: InputSerialization;
  /**
   * Describes the format of the data that you want Amazon S3 to return in response.
   */
  readonly outputSerialization: OutputSerialization;
  /**
   * Specifies the byte range of the object to get the records from. A record is processed when its first byte is contained by the range. This parameter is optional, but when specified, it must not be empty. See RFC 2616, Section 14.35.1 about how to specify the start and end of the range.  ScanRangemay be used in the following ways:    &lt;scanrange&gt;&lt;start&gt;50&lt;/start&gt;&lt;end&gt;100&lt;/end&gt;&lt;/scanrange&gt; - process only the records starting between the bytes 50 and 100 (inclusive, counting from zero)    &lt;scanrange&gt;&lt;start&gt;50&lt;/start&gt;&lt;/scanrange&gt; - process only the records starting after the byte 50    &lt;scanrange&gt;&lt;end&gt;50&lt;/end&gt;&lt;/scanrange&gt; - process only the records within the last 50 bytes of the file.
   */
  readonly scanRange?: ScanRange;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * <p>Describes the parameters for Select job types.</p>
 */
export interface SelectParameters {
  /**
   * Describes the serialization format of the object.
   */
  readonly inputSerialization: InputSerialization;
  /**
   * The type of the provided expression (for example, SQL).
   */
  readonly expressionType: ExpressionType;
  /**
   * The expression that is used to query the object.
   */
  readonly expression: Expression;
  /**
   * Describes how the results of the Select job are serialized.
   */
  readonly outputSerialization: OutputSerialization;
}

/**
 * <p>Describes the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTencryption.html">PUT Bucket encryption</a> in the <i>Amazon Simple Storage Service API Reference</i>.</p>
 */
export interface ServerSideEncryptionByDefault {
  /**
   * Server-side encryption algorithm to use for the default encryption.
   */
  readonly sseAlgorithm: ServerSideEncryption;
  /**
   * AWS Key Management Service (KMS) customer master key ID to use for the default encryption. This parameter is allowed if and only if SSEAlgorithm is set to aws:kms. You can specify the key ID or the Amazon Resource Name (ARN) of the CMK. However, if you are using encryption with cross-account operations, you must use a fully qualified CMK ARN. For more information, see Using encryption for cross-account operations.   For example:    Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab     Amazon S3 only supports symmetric CMKs and not asymmetric CMKs. For more information, see Using Symmetric and Asymmetric Keys in the AWS Key Management Service Developer Guide.
   */
  readonly kmsMasterKeyId?: SSEKMSKeyId;
}

/**
 * <p>Specifies the default server-side-encryption configuration.</p>
 */
export interface ServerSideEncryptionConfiguration {
  /**
   * Container for information about a particular server-side encryption configuration rule.
   */
  readonly rules: ServerSideEncryptionRules;
}

/**
 * <p>Specifies the default server-side encryption configuration.</p>
 */
export interface ServerSideEncryptionRule {
  /**
   * Specifies the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied.
   */
  readonly applyServerSideEncryptionByDefault?: ServerSideEncryptionByDefault;
}

/**
 * <p>A container that describes additional filters for identifying the source objects that you want to replicate. You can choose to enable or disable the replication of these objects. Currently, Amazon S3 supports only the filter that you can specify for objects created with server-side encryption using a customer master key (CMK) stored in AWS Key Management Service (SSE-KMS).</p>
 */
export interface SourceSelectionCriteria {
  /**
   * A container for filter information for the selection of Amazon S3 objects encrypted with AWS KMS. If you include SourceSelectionCriteria in the replication configuration, this element is required.
   */
  readonly sseKmsEncryptedObjects?: SseKmsEncryptedObjects;
}

/**
 * <p>A container for filter information for the selection of S3 objects encrypted with AWS KMS.</p>
 */
export interface SseKmsEncryptedObjects {
  /**
   * Specifies whether Amazon S3 replicates objects created with server-side encryption using a customer master key (CMK) stored in AWS Key Management Service.
   */
  readonly status: SseKmsEncryptedObjectsStatus;
}

/**
 * <p>Container for the stats details.</p>
 */
export interface Stats {
  /**
   * The total number of object bytes scanned.
   */
  readonly bytesScanned?: BytesScanned;
  /**
   * The total number of uncompressed object bytes processed.
   */
  readonly bytesProcessed?: BytesProcessed;
  /**
   * The total number of bytes of records payload data returned.
   */
  readonly bytesReturned?: BytesReturned;
}

/**
 * <p>Container for the Stats Event.</p>
 */
export interface StatsEvent {
  /**
   * The Stats event details.
   */
  readonly details?: Stats;
}

/**
 * <p>Specifies data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes for an Amazon S3 bucket.</p>
 */
export interface StorageClassAnalysis {
  /**
   * Specifies how data related to the storage class analysis for an Amazon S3 bucket should be exported.
   */
  readonly dataExport?: StorageClassAnalysisDataExport;
}

/**
 * <p>Container for data related to the storage class analysis for an Amazon S3 bucket for export.</p>
 */
export interface StorageClassAnalysisDataExport {
  /**
   * The version of the output schema to use when exporting data. Must be V_1.
   */
  readonly outputSchemaVersion: StorageClassAnalysisSchemaVersion;
  /**
   * The place to store the data for an analysis.
   */
  readonly destination: AnalyticsExportDestination;
}

/**
 * <p>A container of a key value name pair.</p>
 */
export interface Tag {
  /**
   * Name of the object key.
   */
  readonly key: ObjectKey;
  /**
   * Value of the tag.
   */
  readonly value: Value;
}

/**
 * <p>Container for <code>TagSet</code> elements.</p>
 */
export interface Tagging {
  /**
   * A collection for a set of tags
   */
  readonly tagSet: TagSet;
}

/**
 * <p>Container for granting information.</p>
 */
export interface TargetGrant {
  /**
   * Container for the person being granted permissions.
   */
  readonly grantee?: Grantee;
  /**
   * Logging permissions assigned to the grantee for the bucket.
   */
  readonly permission?: BucketLogsPermission;
}

/**
 * <p>The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without additional operational overhead.</p>
 */
export interface Tiering {
  /**
   * The number of consecutive days of no access after which an object will be eligible to be transitioned to the corresponding tier. The minimum number of days specified for Archive Access tier must be at least 90 days and Deep Archive Access tier must be at least 180 days. The maximum can be up to 2 years (730 days).
   */
  readonly days: IntelligentTieringDays;
  /**
   * S3 Intelligent-Tiering access tier. See Storage class for automatically optimizing frequently and infrequently accessed objects for a list of access tiers in the S3 Intelligent-Tiering storage class.
   */
  readonly accessTier: IntelligentTieringAccessTier;
}

/**
 * <p>A container for specifying the configuration for publication of messages to an Amazon Simple Notification Service (Amazon SNS) topic when Amazon S3 detects specified events.</p>
 */
export interface TopicConfiguration {
  /**
   * S3 Intelligent-Tiering access tier. See Storage class for automatically optimizing frequently and infrequently accessed objects for a list of access tiers in the S3 Intelligent-Tiering storage class.
   */
  readonly id?: NotificationId;
  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic to which Amazon S3 publishes a message when it detects events of the specified type.
   */
  readonly topicArn: TopicArn;
  /**
   * The Amazon S3 bucket event about which to send notifications. For more information, see Supported Event Types in the Amazon Simple Storage Service Developer Guide.
   */
  readonly events: EventList;
  /**
   * The Amazon S3 bucket event about which to send notifications. For more information, see Supported Event Types in the Amazon Simple Storage Service Developer Guide.
   */
  readonly filter?: NotificationConfigurationFilter;
}

/**
 * <p>A container for specifying the configuration for publication of messages to an Amazon Simple Notification Service (Amazon SNS) topic when Amazon S3 detects specified events. This data type is deprecated. Use <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_TopicConfiguration.html">TopicConfiguration</a> instead.</p>
 */
export interface TopicConfigurationDeprecated {
  /**
   * The Amazon S3 bucket event about which to send notifications. For more information, see Supported Event Types in the Amazon Simple Storage Service Developer Guide.
   */
  readonly id?: NotificationId;
  /**
   * A collection of events related to objects
   */
  readonly events?: EventList;
  /**
   * Bucket event for which to send notifications.
   */
  readonly event?: Event;
  /**
   * Amazon SNS topic to which Amazon S3 will publish a message to report the specified events for the bucket.
   */
  readonly topic?: TopicArn;
}

/**
 * <p>Specifies when an object transitions to a specified storage class. For more information about Amazon S3 lifecycle configuration rules, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/lifecycle-transition-general-considerations.html">Transitioning Objects Using Amazon S3 Lifecycle</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface Transition {
  /**
   * Indicates when objects are transitioned to the specified storage class. The date value must be in ISO 8601 format. The time is always midnight UTC.
   */
  readonly date?: _Date;
  /**
   * Indicates the number of days after creation when objects are transitioned to the specified storage class. The value must be a positive integer.
   */
  readonly days?: Days;
  /**
   * The storage class to which you want the object to transition.
   */
  readonly storageClass?: TransitionStorageClass;
}

/**
 * undefined
 */
export interface UploadPartCopyRequest {
  /**
   * The bucket name. When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide. When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon Simple Storage Service Developer Guide.
   */
  readonly bucket: BucketName;
  /**
   * Specifies the source object for the copy operation. You specify the value in one of two formats, depending on whether you want to access the source object through an access point:   For objects not accessed through an access point, specify the name of the source bucket and key of the source object, separated by a slash (/). For example, to copy the object reports/january.pdf from the bucket awsexamplebucket, use awsexamplebucket/reports/january.pdf. The value must be URL encoded.   For objects accessed through access points, specify the Amazon Resource Name (ARN) of the object as accessed through the access point, in the format arn:aws:s3:&lt;Region&gt;:&lt;account-id&gt;:accesspoint/&lt;access-point-name&gt;/object/&lt;key&gt;. For example, to copy the object reports/january.pdf through access point my-access-point owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3:us-west-2:123456789012:accesspoint/my-access-point/object/reports/january.pdf. The value must be URL encoded.  Amazon S3 supports copy operations using access points only when the source and destination buckets are in the same AWS Region.  Alternatively, for objects accessed through Amazon S3 on Outposts, specify the ARN of the object as accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/object/&lt;key&gt;. For example, to copy the object reports/january.pdf through outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/object/reports/january.pdf. The value must be URL encoded.    To copy a specific version of an object, append ?versionId=&lt;version-id&gt; to the value (for example, awsexamplebucket/reports/january.pdf?versionId=QUpfdndhfd8438MNFDN93jdnJFkdmqnh893). If you don't specify a version ID, Amazon S3 copies the latest version of the source object.
   */
  readonly copySource: CopySource;
  /**
   * Copies the object if its entity tag (ETag) matches the specified tag.
   */
  readonly copySourceIfMatch?: CopySourceIfMatch;
  /**
   * Copies the object if it has been modified since the specified time.
   */
  readonly copySourceIfModifiedSince?: CopySourceIfModifiedSince;
  /**
   * Copies the object if its entity tag (ETag) is different than the specified ETag.
   */
  readonly copySourceIfNoneMatch?: CopySourceIfNoneMatch;
  /**
   * Copies the object if it hasn't been modified since the specified time.
   */
  readonly copySourceIfUnmodifiedSince?: CopySourceIfUnmodifiedSince;
  /**
   * The range of bytes to copy from the source object. The range value must use the form bytes=first-last, where the first and last are the zero-based byte offsets to copy. For example, bytes=0-9 indicates that you want to copy the first 10 bytes of the source. You can copy a range only if the source object is greater than 5 MB.
   */
  readonly copySourceRange?: CopySourceRange;
  /**
   * Object key for which the multipart upload was initiated.
   */
  readonly key: ObjectKey;
  /**
   * Part number of part being copied. This is a positive integer between 1 and 10,000.
   */
  readonly partNumber: PartNumber;
  /**
   * Upload ID identifying the multipart upload whose part is being copied.
   */
  readonly uploadId: MultipartUploadId;
  /**
   * Specifies the algorithm to use to when encrypting the object (for example, AES256).
   */
  readonly sseCustomerAlgorithm?: SSECustomerAlgorithm;
  /**
   * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header. This must be the same encryption key specified in the initiate multipart upload request.
   */
  readonly sseCustomerKey?: SSECustomerKey;
  /**
   * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
   */
  readonly sseCustomerKeyMd5?: SSECustomerKeyMD5;
  /**
   * Specifies the algorithm to use when decrypting the source object (for example, AES256).
   */
  readonly copySourceSseCustomerAlgorithm?: CopySourceSSECustomerAlgorithm;
  /**
   * Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided in this header must be one that was used when the source object was created.
   */
  readonly copySourceSseCustomerKey?: CopySourceSSECustomerKey;
  /**
   * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
   */
  readonly copySourceSseCustomerKeyMd5?: CopySourceSSECustomerKeyMD5;
  /**
   * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
   */
  readonly requestPayer?: RequestPayer;
  /**
   * The account id of the expected destination bucket owner. If the destination bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
  /**
   * The account id of the expected source bucket owner. If the source bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedSourceBucketOwner?: AccountId;
}

/**
 * undefined
 */
export interface UploadPartRequest {
  /**
   * Object data.
   */
  readonly body?: Body;
  /**
   * The name of the bucket to which the multipart upload was initiated. When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide. When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon Simple Storage Service Developer Guide.
   */
  readonly bucket: BucketName;
  /**
   * Size of the body in bytes. This parameter is useful when the size of the body cannot be determined automatically.
   */
  readonly contentLength?: ContentLength;
  /**
   * The base64-encoded 128-bit MD5 digest of the part data. This parameter is auto-populated when using the command from the CLI. This parameter is required if object lock parameters are specified.
   */
  readonly contentMd5?: ContentMD5;
  /**
   * Object key for which the multipart upload was initiated.
   */
  readonly key: ObjectKey;
  /**
   * Part number of part being uploaded. This is a positive integer between 1 and 10,000.
   */
  readonly partNumber: PartNumber;
  /**
   * Upload ID identifying the multipart upload whose part is being uploaded.
   */
  readonly uploadId: MultipartUploadId;
  /**
   * Specifies the algorithm to use to when encrypting the object (for example, AES256).
   */
  readonly sseCustomerAlgorithm?: SSECustomerAlgorithm;
  /**
   * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header. This must be the same encryption key specified in the initiate multipart upload request.
   */
  readonly sseCustomerKey?: SSECustomerKey;
  /**
   * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
   */
  readonly sseCustomerKeyMd5?: SSECustomerKeyMD5;
  /**
   * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
   */
  readonly requestPayer?: RequestPayer;
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  readonly expectedBucketOwner?: AccountId;
}

/**
 * <p>Describes the versioning state of an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTVersioningStatus.html">PUT Bucket versioning</a> in the <i>Amazon Simple Storage Service API Reference</i>.</p>
 */
export interface VersioningConfiguration {
  /**
   * Specifies whether MFA delete is enabled in the bucket versioning configuration. This element is only returned if the bucket has been configured with MFA delete. If the bucket has never been so configured, this element is not returned.
   */
  readonly mfaDelete?: MFADelete;
  /**
   * The versioning state of the bucket.
   */
  readonly status?: BucketVersioningStatus;
}

/**
 * <p>Specifies website configuration parameters for an Amazon S3 bucket.</p>
 */
export interface WebsiteConfiguration {
  /**
   * The name of the error document for the website.
   */
  readonly errorDocument?: ErrorDocument;
  /**
   * The name of the index document for the website.
   */
  readonly indexDocument?: IndexDocument;
  /**
   * The redirect behavior for every request to this bucket's website endpoint.  If you specify this property, you can't specify any other property.
   */
  readonly redirectAllRequestsTo?: RedirectAllRequestsTo;
  /**
   * Rules that define when a redirect is applied and the redirect behavior.
   */
  readonly routingRules?: RoutingRules;
}

export type AbortDate = Date;
export type AbortRuleId = string;
export type AcceptRanges = string;
export type AccountId = string;
export type AllowQuotedRecordDelimiter = boolean;
export type AllowedHeader = string;
export type AllowedHeaders = AllowedHeader[];
export type AllowedMethod = string;
export type AllowedMethods = AllowedMethod[];
export type AllowedOrigin = string;
export type AllowedOrigins = AllowedOrigin[];
export type AnalyticsConfigurationList = AnalyticsConfiguration[];
export type AnalyticsId = string;
export type AnalyticsS3ExportFileFormat = 'CSV'|string;
export type ArchiveStatus = 'ARCHIVE_ACCESS'|'DEEP_ARCHIVE_ACCESS'|string;
export type Body = Buffer|Uint8Array|Blob|string|Readable;
export type BucketAccelerateStatus = 'Enabled'|'Suspended'|string;
export type BucketCannedACL = 'private'|'public-read'|'public-read-write'|'authenticated-read'|string;
export type BucketLocationConstraint = 'af-south-1'|'ap-east-1'|'ap-northeast-1'|'ap-northeast-2'|'ap-northeast-3'|'ap-south-1'|'ap-southeast-1'|'ap-southeast-2'|'ca-central-1'|'cn-north-1'|'cn-northwest-1'|'EU'|'eu-central-1'|'eu-north-1'|'eu-south-1'|'eu-west-1'|'eu-west-2'|'eu-west-3'|'me-south-1'|'sa-east-1'|'us-east-2'|'us-gov-east-1'|'us-gov-west-1'|'us-west-1'|'us-west-2'|string;
export type BucketLogsPermission = 'FULL_CONTROL'|'READ'|'WRITE'|string;
export type BucketName = string;
export type BucketVersioningStatus = 'Enabled'|'Suspended'|string;
export type Buckets = Bucket[];
export type BypassGovernanceRetention = boolean;
export type BytesProcessed = number;
export type BytesReturned = number;
export type BytesScanned = number;
export type CORSRules = CORSRule[];
export type CacheControl = string;
export type CloudFunction = string;
export type CloudFunctionInvocationRole = string;
export type Code = string;
export type Comments = string;
export type CommonPrefixList = CommonPrefix[];
export type CompletedPartList = CompletedPart[];
export type CompressionType = 'NONE'|'GZIP'|'BZIP2'|string;
export type ConfirmRemoveSelfBucketAccess = boolean;
export type ContentDisposition = string;
export type ContentEncoding = string;
export type ContentLanguage = string;
export type ContentLength = number;
export type ContentMD5 = string;
export type ContentRange = string;
export type ContentType = string;
export type CopySource = string;
export type CopySourceIfMatch = string;
export type CopySourceIfModifiedSince = Date;
export type CopySourceIfNoneMatch = string;
export type CopySourceIfUnmodifiedSince = Date;
export type CopySourceRange = string;
export type CopySourceSSECustomerAlgorithm = string;
export type CopySourceSSECustomerKey = Buffer|Uint8Array|Blob|string;
export type CopySourceSSECustomerKeyMD5 = string;
export type CopySourceVersionId = string;
export type CreationDate = Date;
export type _Date = Date;
export type Days = number;
export type DaysAfterInitiation = number;
export type DeleteMarker = boolean;
export type DeleteMarkerReplicationStatus = 'Enabled'|'Disabled'|string;
export type DeleteMarkerVersionId = string;
export type DeleteMarkers = DeleteMarkerEntry[];
export type DeletedObjects = DeletedObject[];
export type Delimiter = string;
export type Description = string;
export type DisplayName = string;
export type ETag = string;
export type EmailAddress = string;
export type EnableRequestProgress = boolean;
export type EncodingType = 'url'|string;
export type End = number;
export type Errors = Error[];
export type Event = 's3:ReducedRedundancyLostObject'|'s3:ObjectCreated:*'|'s3:ObjectCreated:Put'|'s3:ObjectCreated:Post'|'s3:ObjectCreated:Copy'|'s3:ObjectCreated:CompleteMultipartUpload'|'s3:ObjectRemoved:*'|'s3:ObjectRemoved:Delete'|'s3:ObjectRemoved:DeleteMarkerCreated'|'s3:ObjectRestore:*'|'s3:ObjectRestore:Post'|'s3:ObjectRestore:Completed'|'s3:Replication:*'|'s3:Replication:OperationFailedReplication'|'s3:Replication:OperationNotTracked'|'s3:Replication:OperationMissedThreshold'|'s3:Replication:OperationReplicatedAfterThreshold'|string;
export type EventList = Event[];
export type ExistingObjectReplicationStatus = 'Enabled'|'Disabled'|string;
export type Expiration = string;
export type ExpirationStatus = 'Enabled'|'Disabled'|string;
export type ExpiredObjectDeleteMarker = boolean;
export type Expires = Date;
export type ExposeHeader = string;
export type ExposeHeaders = ExposeHeader[];
export type Expression = string;
export type ExpressionType = 'SQL'|string;
export type FetchOwner = boolean;
export type FieldDelimiter = string;
export type FileHeaderInfo = 'USE'|'IGNORE'|'NONE'|string;
export type FilterRuleList = FilterRule[];
export type FilterRuleName = 'prefix'|'suffix'|string;
export type FilterRuleValue = string;
export type GrantFullControl = string;
export type GrantRead = string;
export type GrantReadACP = string;
export type GrantWrite = string;
export type GrantWriteACP = string;
export type Grants = Grant[];
export type HostName = string;
export type HttpErrorCodeReturnedEquals = string;
export type HttpRedirectCode = string;
export type ID = string;
export type IfMatch = string;
export type IfModifiedSince = Date;
export type IfNoneMatch = string;
export type IfUnmodifiedSince = Date;
export type Initiated = Date;
export type IntelligentTieringAccessTier = 'ARCHIVE_ACCESS'|'DEEP_ARCHIVE_ACCESS'|string;
export type IntelligentTieringConfigurationList = IntelligentTieringConfiguration[];
export type IntelligentTieringDays = number;
export type IntelligentTieringId = string;
export type IntelligentTieringStatus = 'Enabled'|'Disabled'|string;
export type InventoryConfigurationList = InventoryConfiguration[];
export type InventoryFormat = 'CSV'|'ORC'|'Parquet'|string;
export type InventoryFrequency = 'Daily'|'Weekly'|string;
export type InventoryId = string;
export type InventoryIncludedObjectVersions = 'All'|'Current'|string;
export type InventoryOptionalField = 'Size'|'LastModifiedDate'|'StorageClass'|'ETag'|'IsMultipartUploaded'|'ReplicationStatus'|'EncryptionStatus'|'ObjectLockRetainUntilDate'|'ObjectLockMode'|'ObjectLockLegalHoldStatus'|'IntelligentTieringAccessTier'|string;
export type InventoryOptionalFields = InventoryOptionalField[];
export type IsEnabled = boolean;
export type IsLatest = boolean;
export type IsPublic = boolean;
export type IsTruncated = boolean;
export type JSONType = 'DOCUMENT'|'LINES'|string;
export type KMSContext = string;
export type KeyCount = number;
export type KeyMarker = string;
export type KeyPrefixEquals = string;
export type LambdaFunctionArn = string;
export type LambdaFunctionConfigurationList = LambdaFunctionConfiguration[];
export type LastModified = Date;
export type LifecycleRules = LifecycleRule[];
export type Location = string;
export type LocationPrefix = string;
export type MFA = string;
export type MFADelete = 'Enabled'|'Disabled'|string;
export type MFADeleteStatus = 'Enabled'|'Disabled'|string;
export type Marker = string;
export type MaxAgeSeconds = number;
export type MaxKeys = number;
export type MaxParts = number;
export type MaxUploads = number;
export type Message = string;
export type Metadata = {[key: string]: MetadataValue};
export type MetadataDirective = 'COPY'|'REPLACE'|string;
export type MetadataKey = string;
export type MetadataValue = string;
export type MetricsConfigurationList = MetricsConfiguration[];
export type MetricsId = string;
export type MetricsStatus = 'Enabled'|'Disabled'|string;
export type Minutes = number;
export type MissingMeta = number;
export type MultipartUploadId = string;
export type MultipartUploadList = MultipartUpload[];
export type NextKeyMarker = string;
export type NextMarker = string;
export type NextPartNumberMarker = number;
export type NextToken = string;
export type NextUploadIdMarker = string;
export type NextVersionIdMarker = string;
export type NoncurrentVersionTransitionList = NoncurrentVersionTransition[];
export type NotificationId = string;
export type ObjectCannedACL = 'private'|'public-read'|'public-read-write'|'authenticated-read'|'aws-exec-read'|'bucket-owner-read'|'bucket-owner-full-control'|string;
export type ObjectIdentifierList = ObjectIdentifier[];
export type ObjectKey = string;
export type ObjectList = Object[];
export type ObjectLockEnabled = 'Enabled'|string;
export type ObjectLockEnabledForBucket = boolean;
export type ObjectLockLegalHoldStatus = 'ON'|'OFF'|string;
export type ObjectLockMode = 'GOVERNANCE'|'COMPLIANCE'|string;
export type ObjectLockRetainUntilDate = Date;
export type ObjectLockRetentionMode = 'GOVERNANCE'|'COMPLIANCE'|string;
export type ObjectLockToken = string;
export type ObjectOwnership = 'BucketOwnerPreferred'|'ObjectWriter'|string;
export type ObjectStorageClass = 'STANDARD'|'REDUCED_REDUNDANCY'|'GLACIER'|'STANDARD_IA'|'ONEZONE_IA'|'INTELLIGENT_TIERING'|'DEEP_ARCHIVE'|'OUTPOSTS'|string;
export type ObjectVersionId = string;
export type ObjectVersionList = ObjectVersion[];
export type ObjectVersionStorageClass = 'STANDARD'|string;
export type OwnerOverride = 'Destination'|string;
export type OwnershipControlsRules = OwnershipControlsRule[];
export type PartNumber = number;
export type PartNumberMarker = number;
export type Parts = Part[];
export type PartsCount = number;
export type Payer = 'Requester'|'BucketOwner'|string;
export type Permission = 'FULL_CONTROL'|'WRITE'|'WRITE_ACP'|'READ'|'READ_ACP'|string;
export type Policy = string;
export type Prefix = string;
export type Priority = number;
export type Protocol = 'http'|'https'|string;
export type QueueArn = string;
export type QueueConfigurationList = QueueConfiguration[];
export type Quiet = boolean;
export type QuoteCharacter = string;
export type QuoteEscapeCharacter = string;
export type QuoteFields = 'ALWAYS'|'ASNEEDED'|string;
export type Range = string;
export type RecordDelimiter = string;
export type ReplaceKeyPrefixWith = string;
export type ReplaceKeyWith = string;
export type ReplicaKmsKeyID = string;
export type ReplicationRuleStatus = 'Enabled'|'Disabled'|string;
export type ReplicationRules = ReplicationRule[];
export type ReplicationStatus = 'COMPLETE'|'PENDING'|'FAILED'|'REPLICA'|string;
export type ReplicationTimeStatus = 'Enabled'|'Disabled'|string;
export type RequestCharged = 'requester'|string;
export type RequestPayer = 'requester'|string;
export type ResponseCacheControl = string;
export type ResponseContentDisposition = string;
export type ResponseContentEncoding = string;
export type ResponseContentLanguage = string;
export type ResponseContentType = string;
export type ResponseExpires = Date;
export type Restore = string;
export type RestoreOutputPath = string;
export type RestoreRequestType = 'SELECT'|string;
export type Role = string;
export type RoutingRules = RoutingRule[];
export type Rules = Rule[];
export type SSECustomerAlgorithm = string;
export type SSECustomerKey = Buffer|Uint8Array|Blob|string;
export type SSECustomerKeyMD5 = string;
export type SSEKMSEncryptionContext = string;
export type SSEKMSKeyId = string;
export type SelectObjectContentEventStream = EventStream<{Records?:RecordsEvent,Stats?:StatsEvent,Progress?:ProgressEvent,Cont?:ContinuationEvent,End?:EndEvent}>;
export type ServerSideEncryption = 'AES256'|'aws:kms'|string;
export type ServerSideEncryptionRules = ServerSideEncryptionRule[];
export type Setting = boolean;
export type Size = number;
export type SseKmsEncryptedObjectsStatus = 'Enabled'|'Disabled'|string;
export type Start = number;
export type StartAfter = string;
export type StorageClass = 'STANDARD'|'REDUCED_REDUNDANCY'|'STANDARD_IA'|'ONEZONE_IA'|'INTELLIGENT_TIERING'|'GLACIER'|'DEEP_ARCHIVE'|'OUTPOSTS'|string;
export type StorageClassAnalysisSchemaVersion = 'V_1'|string;
export type Suffix = string;
export type TagCount = number;
export type TagSet = Tag[];
export type TaggingDirective = 'COPY'|'REPLACE'|string;
export type TaggingHeader = string;
export type TargetBucket = string;
export type TargetGrants = TargetGrant[];
export type TargetPrefix = string;
export type Tier = 'Standard'|'Bulk'|'Expedited'|string;
export type TieringList = Tiering[];
export type Token = string;
export type TopicArn = string;
export type TopicConfigurationList = TopicConfiguration[];
export type TransitionList = Transition[];
export type TransitionStorageClass = 'GLACIER'|'STANDARD_IA'|'ONEZONE_IA'|'INTELLIGENT_TIERING'|'DEEP_ARCHIVE'|string;
export type Type = 'CanonicalUser'|'AmazonCustomerByEmail'|'Group'|string;
export type URI = string;
export type UploadIdMarker = string;
export type UserMetadata = MetadataEntry[];
export type Value = string;
export type VersionIdMarker = string;
export type WebsiteRedirectLocation = string;
export type Years = number;
export type apiVersion = '2006-03-01'|'latest'|string;
