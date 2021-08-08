# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### S3Client <a name="aws-cdk-sdk.s3.S3Client"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3Client.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3Client(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `abortMultipartUpload` <a name="aws-cdk-sdk.s3.S3Client.abortMultipartUpload"></a>

```typescript
public abortMultipartUpload(input: S3AbortMultipartUploadRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3AbortMultipartUploadRequest`](#aws-cdk-sdk.s3.S3AbortMultipartUploadRequest)

---

##### `completeMultipartUpload` <a name="aws-cdk-sdk.s3.S3Client.completeMultipartUpload"></a>

```typescript
public completeMultipartUpload(input: S3CompleteMultipartUploadRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CompleteMultipartUploadRequest`](#aws-cdk-sdk.s3.S3CompleteMultipartUploadRequest)

---

##### `copyObject` <a name="aws-cdk-sdk.s3.S3Client.copyObject"></a>

```typescript
public copyObject(input: S3CopyObjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CopyObjectRequest`](#aws-cdk-sdk.s3.S3CopyObjectRequest)

---

##### `createBucket` <a name="aws-cdk-sdk.s3.S3Client.createBucket"></a>

```typescript
public createBucket(input: S3CreateBucketRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CreateBucketRequest`](#aws-cdk-sdk.s3.S3CreateBucketRequest)

---

##### `createMultipartUpload` <a name="aws-cdk-sdk.s3.S3Client.createMultipartUpload"></a>

```typescript
public createMultipartUpload(input: S3CreateMultipartUploadRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CreateMultipartUploadRequest`](#aws-cdk-sdk.s3.S3CreateMultipartUploadRequest)

---

##### `deleteBucket` <a name="aws-cdk-sdk.s3.S3Client.deleteBucket"></a>

```typescript
public deleteBucket(input: S3DeleteBucketRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3DeleteBucketRequest`](#aws-cdk-sdk.s3.S3DeleteBucketRequest)

---

##### `deleteBucketAnalyticsConfiguration` <a name="aws-cdk-sdk.s3.S3Client.deleteBucketAnalyticsConfiguration"></a>

```typescript
public deleteBucketAnalyticsConfiguration(input: S3DeleteBucketAnalyticsConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3DeleteBucketAnalyticsConfigurationRequest`](#aws-cdk-sdk.s3.S3DeleteBucketAnalyticsConfigurationRequest)

---

##### `deleteBucketCors` <a name="aws-cdk-sdk.s3.S3Client.deleteBucketCors"></a>

```typescript
public deleteBucketCors(input: S3DeleteBucketCorsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3DeleteBucketCorsRequest`](#aws-cdk-sdk.s3.S3DeleteBucketCorsRequest)

---

##### `deleteBucketEncryption` <a name="aws-cdk-sdk.s3.S3Client.deleteBucketEncryption"></a>

```typescript
public deleteBucketEncryption(input: S3DeleteBucketEncryptionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3DeleteBucketEncryptionRequest`](#aws-cdk-sdk.s3.S3DeleteBucketEncryptionRequest)

---

##### `deleteBucketIntelligentTieringConfiguration` <a name="aws-cdk-sdk.s3.S3Client.deleteBucketIntelligentTieringConfiguration"></a>

```typescript
public deleteBucketIntelligentTieringConfiguration(input: S3DeleteBucketIntelligentTieringConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3DeleteBucketIntelligentTieringConfigurationRequest`](#aws-cdk-sdk.s3.S3DeleteBucketIntelligentTieringConfigurationRequest)

---

##### `deleteBucketInventoryConfiguration` <a name="aws-cdk-sdk.s3.S3Client.deleteBucketInventoryConfiguration"></a>

```typescript
public deleteBucketInventoryConfiguration(input: S3DeleteBucketInventoryConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3DeleteBucketInventoryConfigurationRequest`](#aws-cdk-sdk.s3.S3DeleteBucketInventoryConfigurationRequest)

---

##### `deleteBucketLifecycle` <a name="aws-cdk-sdk.s3.S3Client.deleteBucketLifecycle"></a>

```typescript
public deleteBucketLifecycle(input: S3DeleteBucketLifecycleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3DeleteBucketLifecycleRequest`](#aws-cdk-sdk.s3.S3DeleteBucketLifecycleRequest)

---

##### `deleteBucketMetricsConfiguration` <a name="aws-cdk-sdk.s3.S3Client.deleteBucketMetricsConfiguration"></a>

```typescript
public deleteBucketMetricsConfiguration(input: S3DeleteBucketMetricsConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3DeleteBucketMetricsConfigurationRequest`](#aws-cdk-sdk.s3.S3DeleteBucketMetricsConfigurationRequest)

---

##### `deleteBucketOwnershipControls` <a name="aws-cdk-sdk.s3.S3Client.deleteBucketOwnershipControls"></a>

```typescript
public deleteBucketOwnershipControls(input: S3DeleteBucketOwnershipControlsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3DeleteBucketOwnershipControlsRequest`](#aws-cdk-sdk.s3.S3DeleteBucketOwnershipControlsRequest)

---

##### `deleteBucketPolicy` <a name="aws-cdk-sdk.s3.S3Client.deleteBucketPolicy"></a>

```typescript
public deleteBucketPolicy(input: S3DeleteBucketPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3DeleteBucketPolicyRequest`](#aws-cdk-sdk.s3.S3DeleteBucketPolicyRequest)

---

##### `deleteBucketReplication` <a name="aws-cdk-sdk.s3.S3Client.deleteBucketReplication"></a>

```typescript
public deleteBucketReplication(input: S3DeleteBucketReplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3DeleteBucketReplicationRequest`](#aws-cdk-sdk.s3.S3DeleteBucketReplicationRequest)

---

##### `deleteBucketTagging` <a name="aws-cdk-sdk.s3.S3Client.deleteBucketTagging"></a>

```typescript
public deleteBucketTagging(input: S3DeleteBucketTaggingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3DeleteBucketTaggingRequest`](#aws-cdk-sdk.s3.S3DeleteBucketTaggingRequest)

---

##### `deleteBucketWebsite` <a name="aws-cdk-sdk.s3.S3Client.deleteBucketWebsite"></a>

```typescript
public deleteBucketWebsite(input: S3DeleteBucketWebsiteRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3DeleteBucketWebsiteRequest`](#aws-cdk-sdk.s3.S3DeleteBucketWebsiteRequest)

---

##### `deleteObject` <a name="aws-cdk-sdk.s3.S3Client.deleteObject"></a>

```typescript
public deleteObject(input: S3DeleteObjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3DeleteObjectRequest`](#aws-cdk-sdk.s3.S3DeleteObjectRequest)

---

##### `deleteObjects` <a name="aws-cdk-sdk.s3.S3Client.deleteObjects"></a>

```typescript
public deleteObjects(input: S3DeleteObjectsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3DeleteObjectsRequest`](#aws-cdk-sdk.s3.S3DeleteObjectsRequest)

---

##### `deleteObjectTagging` <a name="aws-cdk-sdk.s3.S3Client.deleteObjectTagging"></a>

```typescript
public deleteObjectTagging(input: S3DeleteObjectTaggingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3DeleteObjectTaggingRequest`](#aws-cdk-sdk.s3.S3DeleteObjectTaggingRequest)

---

##### `deletePublicAccessBlock` <a name="aws-cdk-sdk.s3.S3Client.deletePublicAccessBlock"></a>

```typescript
public deletePublicAccessBlock(input: S3DeletePublicAccessBlockRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3DeletePublicAccessBlockRequest`](#aws-cdk-sdk.s3.S3DeletePublicAccessBlockRequest)

---

##### `fetchBucketAccelerateConfiguration` <a name="aws-cdk-sdk.s3.S3Client.fetchBucketAccelerateConfiguration"></a>

```typescript
public fetchBucketAccelerateConfiguration(input: S3GetBucketAccelerateConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketAccelerateConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketAccelerateConfigurationRequest)

---

##### `fetchBucketAcl` <a name="aws-cdk-sdk.s3.S3Client.fetchBucketAcl"></a>

```typescript
public fetchBucketAcl(input: S3GetBucketAclRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketAclRequest`](#aws-cdk-sdk.s3.S3GetBucketAclRequest)

---

##### `fetchBucketAnalyticsConfiguration` <a name="aws-cdk-sdk.s3.S3Client.fetchBucketAnalyticsConfiguration"></a>

```typescript
public fetchBucketAnalyticsConfiguration(input: S3GetBucketAnalyticsConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketAnalyticsConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketAnalyticsConfigurationRequest)

---

##### `fetchBucketCors` <a name="aws-cdk-sdk.s3.S3Client.fetchBucketCors"></a>

```typescript
public fetchBucketCors(input: S3GetBucketCorsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketCorsRequest`](#aws-cdk-sdk.s3.S3GetBucketCorsRequest)

---

##### `fetchBucketEncryption` <a name="aws-cdk-sdk.s3.S3Client.fetchBucketEncryption"></a>

```typescript
public fetchBucketEncryption(input: S3GetBucketEncryptionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketEncryptionRequest`](#aws-cdk-sdk.s3.S3GetBucketEncryptionRequest)

---

##### `fetchBucketIntelligentTieringConfiguration` <a name="aws-cdk-sdk.s3.S3Client.fetchBucketIntelligentTieringConfiguration"></a>

```typescript
public fetchBucketIntelligentTieringConfiguration(input: S3GetBucketIntelligentTieringConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketIntelligentTieringConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketIntelligentTieringConfigurationRequest)

---

##### `fetchBucketInventoryConfiguration` <a name="aws-cdk-sdk.s3.S3Client.fetchBucketInventoryConfiguration"></a>

```typescript
public fetchBucketInventoryConfiguration(input: S3GetBucketInventoryConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketInventoryConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketInventoryConfigurationRequest)

---

##### `fetchBucketLifecycle` <a name="aws-cdk-sdk.s3.S3Client.fetchBucketLifecycle"></a>

```typescript
public fetchBucketLifecycle(input: S3GetBucketLifecycleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketLifecycleRequest`](#aws-cdk-sdk.s3.S3GetBucketLifecycleRequest)

---

##### `fetchBucketLifecycleConfiguration` <a name="aws-cdk-sdk.s3.S3Client.fetchBucketLifecycleConfiguration"></a>

```typescript
public fetchBucketLifecycleConfiguration(input: S3GetBucketLifecycleConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketLifecycleConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketLifecycleConfigurationRequest)

---

##### `fetchBucketLocation` <a name="aws-cdk-sdk.s3.S3Client.fetchBucketLocation"></a>

```typescript
public fetchBucketLocation(input: S3GetBucketLocationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketLocationRequest`](#aws-cdk-sdk.s3.S3GetBucketLocationRequest)

---

##### `fetchBucketLogging` <a name="aws-cdk-sdk.s3.S3Client.fetchBucketLogging"></a>

```typescript
public fetchBucketLogging(input: S3GetBucketLoggingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketLoggingRequest`](#aws-cdk-sdk.s3.S3GetBucketLoggingRequest)

---

##### `fetchBucketMetricsConfiguration` <a name="aws-cdk-sdk.s3.S3Client.fetchBucketMetricsConfiguration"></a>

```typescript
public fetchBucketMetricsConfiguration(input: S3GetBucketMetricsConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketMetricsConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketMetricsConfigurationRequest)

---

##### `fetchBucketNotification` <a name="aws-cdk-sdk.s3.S3Client.fetchBucketNotification"></a>

```typescript
public fetchBucketNotification(input: S3GetBucketNotificationConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketNotificationConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketNotificationConfigurationRequest)

---

##### `fetchBucketNotificationConfiguration` <a name="aws-cdk-sdk.s3.S3Client.fetchBucketNotificationConfiguration"></a>

```typescript
public fetchBucketNotificationConfiguration(input: S3GetBucketNotificationConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketNotificationConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketNotificationConfigurationRequest)

---

##### `fetchBucketOwnershipControls` <a name="aws-cdk-sdk.s3.S3Client.fetchBucketOwnershipControls"></a>

```typescript
public fetchBucketOwnershipControls(input: S3GetBucketOwnershipControlsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketOwnershipControlsRequest`](#aws-cdk-sdk.s3.S3GetBucketOwnershipControlsRequest)

---

##### `fetchBucketPolicy` <a name="aws-cdk-sdk.s3.S3Client.fetchBucketPolicy"></a>

```typescript
public fetchBucketPolicy(input: S3GetBucketPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketPolicyRequest`](#aws-cdk-sdk.s3.S3GetBucketPolicyRequest)

---

##### `fetchBucketPolicyStatus` <a name="aws-cdk-sdk.s3.S3Client.fetchBucketPolicyStatus"></a>

```typescript
public fetchBucketPolicyStatus(input: S3GetBucketPolicyStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketPolicyStatusRequest`](#aws-cdk-sdk.s3.S3GetBucketPolicyStatusRequest)

---

##### `fetchBucketReplication` <a name="aws-cdk-sdk.s3.S3Client.fetchBucketReplication"></a>

```typescript
public fetchBucketReplication(input: S3GetBucketReplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketReplicationRequest`](#aws-cdk-sdk.s3.S3GetBucketReplicationRequest)

---

##### `fetchBucketRequestPayment` <a name="aws-cdk-sdk.s3.S3Client.fetchBucketRequestPayment"></a>

```typescript
public fetchBucketRequestPayment(input: S3GetBucketRequestPaymentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketRequestPaymentRequest`](#aws-cdk-sdk.s3.S3GetBucketRequestPaymentRequest)

---

##### `fetchBucketTagging` <a name="aws-cdk-sdk.s3.S3Client.fetchBucketTagging"></a>

```typescript
public fetchBucketTagging(input: S3GetBucketTaggingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketTaggingRequest`](#aws-cdk-sdk.s3.S3GetBucketTaggingRequest)

---

##### `fetchBucketVersioning` <a name="aws-cdk-sdk.s3.S3Client.fetchBucketVersioning"></a>

```typescript
public fetchBucketVersioning(input: S3GetBucketVersioningRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketVersioningRequest`](#aws-cdk-sdk.s3.S3GetBucketVersioningRequest)

---

##### `fetchBucketWebsite` <a name="aws-cdk-sdk.s3.S3Client.fetchBucketWebsite"></a>

```typescript
public fetchBucketWebsite(input: S3GetBucketWebsiteRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketWebsiteRequest`](#aws-cdk-sdk.s3.S3GetBucketWebsiteRequest)

---

##### `fetchObject` <a name="aws-cdk-sdk.s3.S3Client.fetchObject"></a>

```typescript
public fetchObject(input: S3GetObjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetObjectRequest`](#aws-cdk-sdk.s3.S3GetObjectRequest)

---

##### `fetchObjectAcl` <a name="aws-cdk-sdk.s3.S3Client.fetchObjectAcl"></a>

```typescript
public fetchObjectAcl(input: S3GetObjectAclRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetObjectAclRequest`](#aws-cdk-sdk.s3.S3GetObjectAclRequest)

---

##### `fetchObjectLegalHold` <a name="aws-cdk-sdk.s3.S3Client.fetchObjectLegalHold"></a>

```typescript
public fetchObjectLegalHold(input: S3GetObjectLegalHoldRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetObjectLegalHoldRequest`](#aws-cdk-sdk.s3.S3GetObjectLegalHoldRequest)

---

##### `fetchObjectLockConfiguration` <a name="aws-cdk-sdk.s3.S3Client.fetchObjectLockConfiguration"></a>

```typescript
public fetchObjectLockConfiguration(input: S3GetObjectLockConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetObjectLockConfigurationRequest`](#aws-cdk-sdk.s3.S3GetObjectLockConfigurationRequest)

---

##### `fetchObjectRetention` <a name="aws-cdk-sdk.s3.S3Client.fetchObjectRetention"></a>

```typescript
public fetchObjectRetention(input: S3GetObjectRetentionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetObjectRetentionRequest`](#aws-cdk-sdk.s3.S3GetObjectRetentionRequest)

---

##### `fetchObjectTagging` <a name="aws-cdk-sdk.s3.S3Client.fetchObjectTagging"></a>

```typescript
public fetchObjectTagging(input: S3GetObjectTaggingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetObjectTaggingRequest`](#aws-cdk-sdk.s3.S3GetObjectTaggingRequest)

---

##### `fetchObjectTorrent` <a name="aws-cdk-sdk.s3.S3Client.fetchObjectTorrent"></a>

```typescript
public fetchObjectTorrent(input: S3GetObjectTorrentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetObjectTorrentRequest`](#aws-cdk-sdk.s3.S3GetObjectTorrentRequest)

---

##### `fetchPublicAccessBlock` <a name="aws-cdk-sdk.s3.S3Client.fetchPublicAccessBlock"></a>

```typescript
public fetchPublicAccessBlock(input: S3GetPublicAccessBlockRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetPublicAccessBlockRequest`](#aws-cdk-sdk.s3.S3GetPublicAccessBlockRequest)

---

##### `headBucket` <a name="aws-cdk-sdk.s3.S3Client.headBucket"></a>

```typescript
public headBucket(input: S3HeadBucketRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3HeadBucketRequest`](#aws-cdk-sdk.s3.S3HeadBucketRequest)

---

##### `headObject` <a name="aws-cdk-sdk.s3.S3Client.headObject"></a>

```typescript
public headObject(input: S3HeadObjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3HeadObjectRequest`](#aws-cdk-sdk.s3.S3HeadObjectRequest)

---

##### `listBucketAnalyticsConfigurations` <a name="aws-cdk-sdk.s3.S3Client.listBucketAnalyticsConfigurations"></a>

```typescript
public listBucketAnalyticsConfigurations(input: S3ListBucketAnalyticsConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ListBucketAnalyticsConfigurationsRequest`](#aws-cdk-sdk.s3.S3ListBucketAnalyticsConfigurationsRequest)

---

##### `listBucketIntelligentTieringConfigurations` <a name="aws-cdk-sdk.s3.S3Client.listBucketIntelligentTieringConfigurations"></a>

```typescript
public listBucketIntelligentTieringConfigurations(input: S3ListBucketIntelligentTieringConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ListBucketIntelligentTieringConfigurationsRequest`](#aws-cdk-sdk.s3.S3ListBucketIntelligentTieringConfigurationsRequest)

---

##### `listBucketInventoryConfigurations` <a name="aws-cdk-sdk.s3.S3Client.listBucketInventoryConfigurations"></a>

```typescript
public listBucketInventoryConfigurations(input: S3ListBucketInventoryConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ListBucketInventoryConfigurationsRequest`](#aws-cdk-sdk.s3.S3ListBucketInventoryConfigurationsRequest)

---

##### `listBucketMetricsConfigurations` <a name="aws-cdk-sdk.s3.S3Client.listBucketMetricsConfigurations"></a>

```typescript
public listBucketMetricsConfigurations(input: S3ListBucketMetricsConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ListBucketMetricsConfigurationsRequest`](#aws-cdk-sdk.s3.S3ListBucketMetricsConfigurationsRequest)

---

##### `listBuckets` <a name="aws-cdk-sdk.s3.S3Client.listBuckets"></a>

```typescript
public listBuckets()
```

##### `listMultipartUploads` <a name="aws-cdk-sdk.s3.S3Client.listMultipartUploads"></a>

```typescript
public listMultipartUploads(input: S3ListMultipartUploadsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ListMultipartUploadsRequest`](#aws-cdk-sdk.s3.S3ListMultipartUploadsRequest)

---

##### `listObjects` <a name="aws-cdk-sdk.s3.S3Client.listObjects"></a>

```typescript
public listObjects(input: S3ListObjectsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ListObjectsRequest`](#aws-cdk-sdk.s3.S3ListObjectsRequest)

---

##### `listObjectsV2` <a name="aws-cdk-sdk.s3.S3Client.listObjectsV2"></a>

```typescript
public listObjectsV2(input: S3ListObjectsV2Request)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ListObjectsV2Request`](#aws-cdk-sdk.s3.S3ListObjectsV2Request)

---

##### `listObjectVersions` <a name="aws-cdk-sdk.s3.S3Client.listObjectVersions"></a>

```typescript
public listObjectVersions(input: S3ListObjectVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ListObjectVersionsRequest`](#aws-cdk-sdk.s3.S3ListObjectVersionsRequest)

---

##### `listParts` <a name="aws-cdk-sdk.s3.S3Client.listParts"></a>

```typescript
public listParts(input: S3ListPartsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ListPartsRequest`](#aws-cdk-sdk.s3.S3ListPartsRequest)

---

##### `putBucketAccelerateConfiguration` <a name="aws-cdk-sdk.s3.S3Client.putBucketAccelerateConfiguration"></a>

```typescript
public putBucketAccelerateConfiguration(input: S3PutBucketAccelerateConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutBucketAccelerateConfigurationRequest`](#aws-cdk-sdk.s3.S3PutBucketAccelerateConfigurationRequest)

---

##### `putBucketAcl` <a name="aws-cdk-sdk.s3.S3Client.putBucketAcl"></a>

```typescript
public putBucketAcl(input: S3PutBucketAclRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutBucketAclRequest`](#aws-cdk-sdk.s3.S3PutBucketAclRequest)

---

##### `putBucketAnalyticsConfiguration` <a name="aws-cdk-sdk.s3.S3Client.putBucketAnalyticsConfiguration"></a>

```typescript
public putBucketAnalyticsConfiguration(input: S3PutBucketAnalyticsConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutBucketAnalyticsConfigurationRequest`](#aws-cdk-sdk.s3.S3PutBucketAnalyticsConfigurationRequest)

---

##### `putBucketCors` <a name="aws-cdk-sdk.s3.S3Client.putBucketCors"></a>

```typescript
public putBucketCors(input: S3PutBucketCorsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutBucketCorsRequest`](#aws-cdk-sdk.s3.S3PutBucketCorsRequest)

---

##### `putBucketEncryption` <a name="aws-cdk-sdk.s3.S3Client.putBucketEncryption"></a>

```typescript
public putBucketEncryption(input: S3PutBucketEncryptionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutBucketEncryptionRequest`](#aws-cdk-sdk.s3.S3PutBucketEncryptionRequest)

---

##### `putBucketIntelligentTieringConfiguration` <a name="aws-cdk-sdk.s3.S3Client.putBucketIntelligentTieringConfiguration"></a>

```typescript
public putBucketIntelligentTieringConfiguration(input: S3PutBucketIntelligentTieringConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutBucketIntelligentTieringConfigurationRequest`](#aws-cdk-sdk.s3.S3PutBucketIntelligentTieringConfigurationRequest)

---

##### `putBucketInventoryConfiguration` <a name="aws-cdk-sdk.s3.S3Client.putBucketInventoryConfiguration"></a>

```typescript
public putBucketInventoryConfiguration(input: S3PutBucketInventoryConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutBucketInventoryConfigurationRequest`](#aws-cdk-sdk.s3.S3PutBucketInventoryConfigurationRequest)

---

##### `putBucketLifecycle` <a name="aws-cdk-sdk.s3.S3Client.putBucketLifecycle"></a>

```typescript
public putBucketLifecycle(input: S3PutBucketLifecycleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutBucketLifecycleRequest`](#aws-cdk-sdk.s3.S3PutBucketLifecycleRequest)

---

##### `putBucketLifecycleConfiguration` <a name="aws-cdk-sdk.s3.S3Client.putBucketLifecycleConfiguration"></a>

```typescript
public putBucketLifecycleConfiguration(input: S3PutBucketLifecycleConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutBucketLifecycleConfigurationRequest`](#aws-cdk-sdk.s3.S3PutBucketLifecycleConfigurationRequest)

---

##### `putBucketLogging` <a name="aws-cdk-sdk.s3.S3Client.putBucketLogging"></a>

```typescript
public putBucketLogging(input: S3PutBucketLoggingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutBucketLoggingRequest`](#aws-cdk-sdk.s3.S3PutBucketLoggingRequest)

---

##### `putBucketMetricsConfiguration` <a name="aws-cdk-sdk.s3.S3Client.putBucketMetricsConfiguration"></a>

```typescript
public putBucketMetricsConfiguration(input: S3PutBucketMetricsConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutBucketMetricsConfigurationRequest`](#aws-cdk-sdk.s3.S3PutBucketMetricsConfigurationRequest)

---

##### `putBucketNotification` <a name="aws-cdk-sdk.s3.S3Client.putBucketNotification"></a>

```typescript
public putBucketNotification(input: S3PutBucketNotificationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutBucketNotificationRequest`](#aws-cdk-sdk.s3.S3PutBucketNotificationRequest)

---

##### `putBucketNotificationConfiguration` <a name="aws-cdk-sdk.s3.S3Client.putBucketNotificationConfiguration"></a>

```typescript
public putBucketNotificationConfiguration(input: S3PutBucketNotificationConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutBucketNotificationConfigurationRequest`](#aws-cdk-sdk.s3.S3PutBucketNotificationConfigurationRequest)

---

##### `putBucketOwnershipControls` <a name="aws-cdk-sdk.s3.S3Client.putBucketOwnershipControls"></a>

```typescript
public putBucketOwnershipControls(input: S3PutBucketOwnershipControlsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutBucketOwnershipControlsRequest`](#aws-cdk-sdk.s3.S3PutBucketOwnershipControlsRequest)

---

##### `putBucketPolicy` <a name="aws-cdk-sdk.s3.S3Client.putBucketPolicy"></a>

```typescript
public putBucketPolicy(input: S3PutBucketPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutBucketPolicyRequest`](#aws-cdk-sdk.s3.S3PutBucketPolicyRequest)

---

##### `putBucketReplication` <a name="aws-cdk-sdk.s3.S3Client.putBucketReplication"></a>

```typescript
public putBucketReplication(input: S3PutBucketReplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutBucketReplicationRequest`](#aws-cdk-sdk.s3.S3PutBucketReplicationRequest)

---

##### `putBucketRequestPayment` <a name="aws-cdk-sdk.s3.S3Client.putBucketRequestPayment"></a>

```typescript
public putBucketRequestPayment(input: S3PutBucketRequestPaymentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutBucketRequestPaymentRequest`](#aws-cdk-sdk.s3.S3PutBucketRequestPaymentRequest)

---

##### `putBucketTagging` <a name="aws-cdk-sdk.s3.S3Client.putBucketTagging"></a>

```typescript
public putBucketTagging(input: S3PutBucketTaggingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutBucketTaggingRequest`](#aws-cdk-sdk.s3.S3PutBucketTaggingRequest)

---

##### `putBucketVersioning` <a name="aws-cdk-sdk.s3.S3Client.putBucketVersioning"></a>

```typescript
public putBucketVersioning(input: S3PutBucketVersioningRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutBucketVersioningRequest`](#aws-cdk-sdk.s3.S3PutBucketVersioningRequest)

---

##### `putBucketWebsite` <a name="aws-cdk-sdk.s3.S3Client.putBucketWebsite"></a>

```typescript
public putBucketWebsite(input: S3PutBucketWebsiteRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutBucketWebsiteRequest`](#aws-cdk-sdk.s3.S3PutBucketWebsiteRequest)

---

##### `putObject` <a name="aws-cdk-sdk.s3.S3Client.putObject"></a>

```typescript
public putObject(input: S3PutObjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutObjectRequest`](#aws-cdk-sdk.s3.S3PutObjectRequest)

---

##### `putObjectAcl` <a name="aws-cdk-sdk.s3.S3Client.putObjectAcl"></a>

```typescript
public putObjectAcl(input: S3PutObjectAclRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutObjectAclRequest`](#aws-cdk-sdk.s3.S3PutObjectAclRequest)

---

##### `putObjectLegalHold` <a name="aws-cdk-sdk.s3.S3Client.putObjectLegalHold"></a>

```typescript
public putObjectLegalHold(input: S3PutObjectLegalHoldRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutObjectLegalHoldRequest`](#aws-cdk-sdk.s3.S3PutObjectLegalHoldRequest)

---

##### `putObjectLockConfiguration` <a name="aws-cdk-sdk.s3.S3Client.putObjectLockConfiguration"></a>

```typescript
public putObjectLockConfiguration(input: S3PutObjectLockConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutObjectLockConfigurationRequest`](#aws-cdk-sdk.s3.S3PutObjectLockConfigurationRequest)

---

##### `putObjectRetention` <a name="aws-cdk-sdk.s3.S3Client.putObjectRetention"></a>

```typescript
public putObjectRetention(input: S3PutObjectRetentionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutObjectRetentionRequest`](#aws-cdk-sdk.s3.S3PutObjectRetentionRequest)

---

##### `putObjectTagging` <a name="aws-cdk-sdk.s3.S3Client.putObjectTagging"></a>

```typescript
public putObjectTagging(input: S3PutObjectTaggingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutObjectTaggingRequest`](#aws-cdk-sdk.s3.S3PutObjectTaggingRequest)

---

##### `putPublicAccessBlock` <a name="aws-cdk-sdk.s3.S3Client.putPublicAccessBlock"></a>

```typescript
public putPublicAccessBlock(input: S3PutPublicAccessBlockRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutPublicAccessBlockRequest`](#aws-cdk-sdk.s3.S3PutPublicAccessBlockRequest)

---

##### `restoreObject` <a name="aws-cdk-sdk.s3.S3Client.restoreObject"></a>

```typescript
public restoreObject(input: S3RestoreObjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3RestoreObjectRequest`](#aws-cdk-sdk.s3.S3RestoreObjectRequest)

---

##### `selectObjectContent` <a name="aws-cdk-sdk.s3.S3Client.selectObjectContent"></a>

```typescript
public selectObjectContent(input: S3SelectObjectContentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3SelectObjectContentRequest`](#aws-cdk-sdk.s3.S3SelectObjectContentRequest)

---

##### `uploadPart` <a name="aws-cdk-sdk.s3.S3Client.uploadPart"></a>

```typescript
public uploadPart(input: S3UploadPartRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3UploadPartRequest`](#aws-cdk-sdk.s3.S3UploadPartRequest)

---

##### `uploadPartCopy` <a name="aws-cdk-sdk.s3.S3Client.uploadPartCopy"></a>

```typescript
public uploadPartCopy(input: S3UploadPartCopyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3UploadPartCopyRequest`](#aws-cdk-sdk.s3.S3UploadPartCopyRequest)

---




## Structs <a name="Structs"></a>

### S3AbortIncompleteMultipartUpload <a name="aws-cdk-sdk.s3.S3AbortIncompleteMultipartUpload"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3AbortIncompleteMultipartUpload: s3.S3AbortIncompleteMultipartUpload = { ... }
```

##### `daysAfterInitiation`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3AbortIncompleteMultipartUpload.property.daysAfterInitiation"></a>

- *Type:* `number`

---

### S3AbortMultipartUploadOutput <a name="aws-cdk-sdk.s3.S3AbortMultipartUploadOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3AbortMultipartUploadOutput: s3.S3AbortMultipartUploadOutput = { ... }
```

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3AbortMultipartUploadOutput.property.requestCharged"></a>

- *Type:* `string`

---

### S3AbortMultipartUploadRequest <a name="aws-cdk-sdk.s3.S3AbortMultipartUploadRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3AbortMultipartUploadRequest: s3.S3AbortMultipartUploadRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3AbortMultipartUploadRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3AbortMultipartUploadRequest.property.key"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3AbortMultipartUploadRequest.property.uploadId"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3AbortMultipartUploadRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3AbortMultipartUploadRequest.property.requestPayer"></a>

- *Type:* `string`

---

### S3AccelerateConfiguration <a name="aws-cdk-sdk.s3.S3AccelerateConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3AccelerateConfiguration: s3.S3AccelerateConfiguration = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3AccelerateConfiguration.property.status"></a>

- *Type:* `string`

---

### S3AccessControlPolicy <a name="aws-cdk-sdk.s3.S3AccessControlPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3AccessControlPolicy: s3.S3AccessControlPolicy = { ... }
```

##### `grants`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3AccessControlPolicy.property.grants"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Grant`](#aws-cdk-sdk.s3.S3Grant)[]

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3AccessControlPolicy.property.owner"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Owner`](#aws-cdk-sdk.s3.S3Owner)

---

### S3AccessControlTranslation <a name="aws-cdk-sdk.s3.S3AccessControlTranslation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3AccessControlTranslation: s3.S3AccessControlTranslation = { ... }
```

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3AccessControlTranslation.property.owner"></a>

- *Type:* `string`

---

### S3AnalyticsAndOperator <a name="aws-cdk-sdk.s3.S3AnalyticsAndOperator"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3AnalyticsAndOperator: s3.S3AnalyticsAndOperator = { ... }
```

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3AnalyticsAndOperator.property.prefix"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3AnalyticsAndOperator.property.tags"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Tag`](#aws-cdk-sdk.s3.S3Tag)[]

---

### S3AnalyticsConfiguration <a name="aws-cdk-sdk.s3.S3AnalyticsConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3AnalyticsConfiguration: s3.S3AnalyticsConfiguration = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3AnalyticsConfiguration.property.id"></a>

- *Type:* `string`

---

##### `storageClassAnalysis`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3AnalyticsConfiguration.property.storageClassAnalysis"></a>

- *Type:* [`aws-cdk-sdk.s3.S3StorageClassAnalysis`](#aws-cdk-sdk.s3.S3StorageClassAnalysis)

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3AnalyticsConfiguration.property.filter"></a>

- *Type:* [`aws-cdk-sdk.s3.S3AnalyticsFilter`](#aws-cdk-sdk.s3.S3AnalyticsFilter)

---

### S3AnalyticsExportDestination <a name="aws-cdk-sdk.s3.S3AnalyticsExportDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3AnalyticsExportDestination: s3.S3AnalyticsExportDestination = { ... }
```

##### `s3BucketDestination`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3AnalyticsExportDestination.property.s3BucketDestination"></a>

- *Type:* [`aws-cdk-sdk.s3.S3AnalyticsS3BucketDestination`](#aws-cdk-sdk.s3.S3AnalyticsS3BucketDestination)

---

### S3AnalyticsFilter <a name="aws-cdk-sdk.s3.S3AnalyticsFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3AnalyticsFilter: s3.S3AnalyticsFilter = { ... }
```

##### `and`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3AnalyticsFilter.property.and"></a>

- *Type:* [`aws-cdk-sdk.s3.S3AnalyticsAndOperator`](#aws-cdk-sdk.s3.S3AnalyticsAndOperator)

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3AnalyticsFilter.property.prefix"></a>

- *Type:* `string`

---

##### `tag`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3AnalyticsFilter.property.tag"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Tag`](#aws-cdk-sdk.s3.S3Tag)

---

### S3AnalyticsS3BucketDestination <a name="aws-cdk-sdk.s3.S3AnalyticsS3BucketDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3AnalyticsS3BucketDestination: s3.S3AnalyticsS3BucketDestination = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3AnalyticsS3BucketDestination.property.bucket"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3AnalyticsS3BucketDestination.property.format"></a>

- *Type:* `string`

---

##### `bucketAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3AnalyticsS3BucketDestination.property.bucketAccountId"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3AnalyticsS3BucketDestination.property.prefix"></a>

- *Type:* `string`

---

### S3Bucket <a name="aws-cdk-sdk.s3.S3Bucket"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3Bucket: s3.S3Bucket = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Bucket.property.creationDate"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Bucket.property.name"></a>

- *Type:* `string`

---

### S3BucketLifecycleConfiguration <a name="aws-cdk-sdk.s3.S3BucketLifecycleConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3BucketLifecycleConfiguration: s3.S3BucketLifecycleConfiguration = { ... }
```

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3BucketLifecycleConfiguration.property.rules"></a>

- *Type:* [`aws-cdk-sdk.s3.S3LifecycleRule`](#aws-cdk-sdk.s3.S3LifecycleRule)[]

---

### S3BucketLoggingStatus <a name="aws-cdk-sdk.s3.S3BucketLoggingStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3BucketLoggingStatus: s3.S3BucketLoggingStatus = { ... }
```

##### `loggingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3BucketLoggingStatus.property.loggingEnabled"></a>

- *Type:* [`aws-cdk-sdk.s3.S3LoggingEnabled`](#aws-cdk-sdk.s3.S3LoggingEnabled)

---

### S3CloudFunctionConfiguration <a name="aws-cdk-sdk.s3.S3CloudFunctionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3CloudFunctionConfiguration: s3.S3CloudFunctionConfiguration = { ... }
```

##### `cloudFunction`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CloudFunctionConfiguration.property.cloudFunction"></a>

- *Type:* `string`

---

##### `event`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CloudFunctionConfiguration.property.event"></a>

- *Type:* `string`

---

##### `events`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CloudFunctionConfiguration.property.events"></a>

- *Type:* `string`[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CloudFunctionConfiguration.property.id"></a>

- *Type:* `string`

---

##### `invocationRole`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CloudFunctionConfiguration.property.invocationRole"></a>

- *Type:* `string`

---

### S3CommonPrefix <a name="aws-cdk-sdk.s3.S3CommonPrefix"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3CommonPrefix: s3.S3CommonPrefix = { ... }
```

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CommonPrefix.property.prefix"></a>

- *Type:* `string`

---

### S3CompletedMultipartUpload <a name="aws-cdk-sdk.s3.S3CompletedMultipartUpload"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3CompletedMultipartUpload: s3.S3CompletedMultipartUpload = { ... }
```

##### `parts`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CompletedMultipartUpload.property.parts"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CompletedPart`](#aws-cdk-sdk.s3.S3CompletedPart)[]

---

### S3CompletedPart <a name="aws-cdk-sdk.s3.S3CompletedPart"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3CompletedPart: s3.S3CompletedPart = { ... }
```

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CompletedPart.property.eTag"></a>

- *Type:* `string`

---

##### `partNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CompletedPart.property.partNumber"></a>

- *Type:* `number`

---

### S3CompleteMultipartUploadOutput <a name="aws-cdk-sdk.s3.S3CompleteMultipartUploadOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3CompleteMultipartUploadOutput: s3.S3CompleteMultipartUploadOutput = { ... }
```

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CompleteMultipartUploadOutput.property.bucket"></a>

- *Type:* `string`

---

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CompleteMultipartUploadOutput.property.eTag"></a>

- *Type:* `string`

---

##### `expiration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CompleteMultipartUploadOutput.property.expiration"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CompleteMultipartUploadOutput.property.key"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CompleteMultipartUploadOutput.property.location"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CompleteMultipartUploadOutput.property.requestCharged"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CompleteMultipartUploadOutput.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CompleteMultipartUploadOutput.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CompleteMultipartUploadOutput.property.versionId"></a>

- *Type:* `string`

---

### S3CompleteMultipartUploadRequest <a name="aws-cdk-sdk.s3.S3CompleteMultipartUploadRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3CompleteMultipartUploadRequest: s3.S3CompleteMultipartUploadRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3CompleteMultipartUploadRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3CompleteMultipartUploadRequest.property.key"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3CompleteMultipartUploadRequest.property.uploadId"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CompleteMultipartUploadRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `multipartUpload`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CompleteMultipartUploadRequest.property.multipartUpload"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CompletedMultipartUpload`](#aws-cdk-sdk.s3.S3CompletedMultipartUpload)

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CompleteMultipartUploadRequest.property.requestPayer"></a>

- *Type:* `string`

---

### S3Condition <a name="aws-cdk-sdk.s3.S3Condition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3Condition: s3.S3Condition = { ... }
```

##### `httpErrorCodeReturnedEquals`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Condition.property.httpErrorCodeReturnedEquals"></a>

- *Type:* `string`

---

##### `keyPrefixEquals`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Condition.property.keyPrefixEquals"></a>

- *Type:* `string`

---

### S3ContinuationEvent <a name="aws-cdk-sdk.s3.S3ContinuationEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ContinuationEvent: s3.S3ContinuationEvent = { ... }
```

### S3CopyObjectOutput <a name="aws-cdk-sdk.s3.S3CopyObjectOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3CopyObjectOutput: s3.S3CopyObjectOutput = { ... }
```

##### `copyObjectResult`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectOutput.property.copyObjectResult"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CopyObjectResult`](#aws-cdk-sdk.s3.S3CopyObjectResult)

---

##### `copySourceVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectOutput.property.copySourceVersionId"></a>

- *Type:* `string`

---

##### `expiration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectOutput.property.expiration"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectOutput.property.requestCharged"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectOutput.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectOutput.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectOutput.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsEncryptionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectOutput.property.ssekmsEncryptionContext"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectOutput.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectOutput.property.versionId"></a>

- *Type:* `string`

---

### S3CopyObjectRequest <a name="aws-cdk-sdk.s3.S3CopyObjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3CopyObjectRequest: s3.S3CopyObjectRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.bucket"></a>

- *Type:* `string`

---

##### `copySource`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.copySource"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.key"></a>

- *Type:* `string`

---

##### `acl`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.acl"></a>

- *Type:* `string`

---

##### `cacheControl`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.cacheControl"></a>

- *Type:* `string`

---

##### `contentDisposition`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.contentDisposition"></a>

- *Type:* `string`

---

##### `contentEncoding`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.contentEncoding"></a>

- *Type:* `string`

---

##### `contentLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.contentLanguage"></a>

- *Type:* `string`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.contentType"></a>

- *Type:* `string`

---

##### `copySourceIfMatch`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.copySourceIfMatch"></a>

- *Type:* `string`

---

##### `copySourceIfModifiedSince`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.copySourceIfModifiedSince"></a>

- *Type:* `string`

---

##### `copySourceIfNoneMatch`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.copySourceIfNoneMatch"></a>

- *Type:* `string`

---

##### `copySourceIfUnmodifiedSince`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.copySourceIfUnmodifiedSince"></a>

- *Type:* `string`

---

##### `copySourceSseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.copySourceSseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `copySourceSseCustomerKey`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.copySourceSseCustomerKey"></a>

- *Type:* `any`

---

##### `copySourceSseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.copySourceSseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `expectedSourceBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.expectedSourceBucketOwner"></a>

- *Type:* `string`

---

##### `expires`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.expires"></a>

- *Type:* `string`

---

##### `grantFullControl`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.grantFullControl"></a>

- *Type:* `string`

---

##### `grantRead`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.grantRead"></a>

- *Type:* `string`

---

##### `grantReadAcp`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.grantReadAcp"></a>

- *Type:* `string`

---

##### `grantWriteAcp`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.grantWriteAcp"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.metadata"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `metadataDirective`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.metadataDirective"></a>

- *Type:* `string`

---

##### `objectLockLegalHoldStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.objectLockLegalHoldStatus"></a>

- *Type:* `string`

---

##### `objectLockMode`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.objectLockMode"></a>

- *Type:* `string`

---

##### `objectLockRetainUntilDate`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.objectLockRetainUntilDate"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKey`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.sseCustomerKey"></a>

- *Type:* `any`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsEncryptionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.ssekmsEncryptionContext"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.storageClass"></a>

- *Type:* `string`

---

##### `tagging`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.tagging"></a>

- *Type:* `string`

---

##### `taggingDirective`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.taggingDirective"></a>

- *Type:* `string`

---

##### `websiteRedirectLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectRequest.property.websiteRedirectLocation"></a>

- *Type:* `string`

---

### S3CopyObjectResult <a name="aws-cdk-sdk.s3.S3CopyObjectResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3CopyObjectResult: s3.S3CopyObjectResult = { ... }
```

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectResult.property.eTag"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyObjectResult.property.lastModified"></a>

- *Type:* `string`

---

### S3CopyPartResult <a name="aws-cdk-sdk.s3.S3CopyPartResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3CopyPartResult: s3.S3CopyPartResult = { ... }
```

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyPartResult.property.eTag"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CopyPartResult.property.lastModified"></a>

- *Type:* `string`

---

### S3CorsConfiguration <a name="aws-cdk-sdk.s3.S3CorsConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3CorsConfiguration: s3.S3CorsConfiguration = { ... }
```

##### `corsRules`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3CorsConfiguration.property.corsRules"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CorsRule`](#aws-cdk-sdk.s3.S3CorsRule)[]

---

### S3CorsRule <a name="aws-cdk-sdk.s3.S3CorsRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3CorsRule: s3.S3CorsRule = { ... }
```

##### `allowedMethods`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3CorsRule.property.allowedMethods"></a>

- *Type:* `string`[]

---

##### `allowedOrigins`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3CorsRule.property.allowedOrigins"></a>

- *Type:* `string`[]

---

##### `allowedHeaders`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CorsRule.property.allowedHeaders"></a>

- *Type:* `string`[]

---

##### `exposeHeaders`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CorsRule.property.exposeHeaders"></a>

- *Type:* `string`[]

---

##### `maxAgeSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CorsRule.property.maxAgeSeconds"></a>

- *Type:* `number`

---

### S3CreateBucketConfiguration <a name="aws-cdk-sdk.s3.S3CreateBucketConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3CreateBucketConfiguration: s3.S3CreateBucketConfiguration = { ... }
```

##### `locationConstraint`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateBucketConfiguration.property.locationConstraint"></a>

- *Type:* `string`

---

### S3CreateBucketOutput <a name="aws-cdk-sdk.s3.S3CreateBucketOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3CreateBucketOutput: s3.S3CreateBucketOutput = { ... }
```

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateBucketOutput.property.location"></a>

- *Type:* `string`

---

### S3CreateBucketRequest <a name="aws-cdk-sdk.s3.S3CreateBucketRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3CreateBucketRequest: s3.S3CreateBucketRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3CreateBucketRequest.property.bucket"></a>

- *Type:* `string`

---

##### `acl`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateBucketRequest.property.acl"></a>

- *Type:* `string`

---

##### `createBucketConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateBucketRequest.property.createBucketConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CreateBucketConfiguration`](#aws-cdk-sdk.s3.S3CreateBucketConfiguration)

---

##### `grantFullControl`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateBucketRequest.property.grantFullControl"></a>

- *Type:* `string`

---

##### `grantRead`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateBucketRequest.property.grantRead"></a>

- *Type:* `string`

---

##### `grantReadAcp`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateBucketRequest.property.grantReadAcp"></a>

- *Type:* `string`

---

##### `grantWrite`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateBucketRequest.property.grantWrite"></a>

- *Type:* `string`

---

##### `grantWriteAcp`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateBucketRequest.property.grantWriteAcp"></a>

- *Type:* `string`

---

##### `objectLockEnabledForBucket`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateBucketRequest.property.objectLockEnabledForBucket"></a>

- *Type:* `boolean`

---

### S3CreateMultipartUploadOutput <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3CreateMultipartUploadOutput: s3.S3CreateMultipartUploadOutput = { ... }
```

##### `abortDate`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadOutput.property.abortDate"></a>

- *Type:* `string`

---

##### `abortRuleId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadOutput.property.abortRuleId"></a>

- *Type:* `string`

---

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadOutput.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadOutput.property.key"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadOutput.property.requestCharged"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadOutput.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadOutput.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadOutput.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsEncryptionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadOutput.property.ssekmsEncryptionContext"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadOutput.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadOutput.property.uploadId"></a>

- *Type:* `string`

---

### S3CreateMultipartUploadRequest <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3CreateMultipartUploadRequest: s3.S3CreateMultipartUploadRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.key"></a>

- *Type:* `string`

---

##### `acl`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.acl"></a>

- *Type:* `string`

---

##### `cacheControl`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.cacheControl"></a>

- *Type:* `string`

---

##### `contentDisposition`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.contentDisposition"></a>

- *Type:* `string`

---

##### `contentEncoding`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.contentEncoding"></a>

- *Type:* `string`

---

##### `contentLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.contentLanguage"></a>

- *Type:* `string`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.contentType"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `expires`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.expires"></a>

- *Type:* `string`

---

##### `grantFullControl`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.grantFullControl"></a>

- *Type:* `string`

---

##### `grantRead`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.grantRead"></a>

- *Type:* `string`

---

##### `grantReadAcp`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.grantReadAcp"></a>

- *Type:* `string`

---

##### `grantWriteAcp`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.grantWriteAcp"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.metadata"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `objectLockLegalHoldStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.objectLockLegalHoldStatus"></a>

- *Type:* `string`

---

##### `objectLockMode`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.objectLockMode"></a>

- *Type:* `string`

---

##### `objectLockRetainUntilDate`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.objectLockRetainUntilDate"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKey`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.sseCustomerKey"></a>

- *Type:* `any`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsEncryptionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.ssekmsEncryptionContext"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.storageClass"></a>

- *Type:* `string`

---

##### `tagging`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.tagging"></a>

- *Type:* `string`

---

##### `websiteRedirectLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CreateMultipartUploadRequest.property.websiteRedirectLocation"></a>

- *Type:* `string`

---

### S3CsvInput <a name="aws-cdk-sdk.s3.S3CsvInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3CsvInput: s3.S3CsvInput = { ... }
```

##### `allowQuotedRecordDelimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CsvInput.property.allowQuotedRecordDelimiter"></a>

- *Type:* `boolean`

---

##### `comments`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CsvInput.property.comments"></a>

- *Type:* `string`

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CsvInput.property.fieldDelimiter"></a>

- *Type:* `string`

---

##### `fileHeaderInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CsvInput.property.fileHeaderInfo"></a>

- *Type:* `string`

---

##### `quoteCharacter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CsvInput.property.quoteCharacter"></a>

- *Type:* `string`

---

##### `quoteEscapeCharacter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CsvInput.property.quoteEscapeCharacter"></a>

- *Type:* `string`

---

##### `recordDelimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CsvInput.property.recordDelimiter"></a>

- *Type:* `string`

---

### S3CsvOutput <a name="aws-cdk-sdk.s3.S3CsvOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3CsvOutput: s3.S3CsvOutput = { ... }
```

##### `fieldDelimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CsvOutput.property.fieldDelimiter"></a>

- *Type:* `string`

---

##### `quoteCharacter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CsvOutput.property.quoteCharacter"></a>

- *Type:* `string`

---

##### `quoteEscapeCharacter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CsvOutput.property.quoteEscapeCharacter"></a>

- *Type:* `string`

---

##### `quoteFields`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CsvOutput.property.quoteFields"></a>

- *Type:* `string`

---

##### `recordDelimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3CsvOutput.property.recordDelimiter"></a>

- *Type:* `string`

---

### S3DefaultRetention <a name="aws-cdk-sdk.s3.S3DefaultRetention"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3DefaultRetention: s3.S3DefaultRetention = { ... }
```

##### `days`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DefaultRetention.property.days"></a>

- *Type:* `number`

---

##### `mode`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DefaultRetention.property.mode"></a>

- *Type:* `string`

---

##### `years`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DefaultRetention.property.years"></a>

- *Type:* `number`

---

### S3Delete <a name="aws-cdk-sdk.s3.S3Delete"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3Delete: s3.S3Delete = { ... }
```

##### `objects`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Delete.property.objects"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ObjectIdentifier`](#aws-cdk-sdk.s3.S3ObjectIdentifier)[]

---

##### `quiet`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Delete.property.quiet"></a>

- *Type:* `boolean`

---

### S3DeleteBucketAnalyticsConfigurationRequest <a name="aws-cdk-sdk.s3.S3DeleteBucketAnalyticsConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3DeleteBucketAnalyticsConfigurationRequest: s3.S3DeleteBucketAnalyticsConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketAnalyticsConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketAnalyticsConfigurationRequest.property.id"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketAnalyticsConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3DeleteBucketCorsRequest <a name="aws-cdk-sdk.s3.S3DeleteBucketCorsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3DeleteBucketCorsRequest: s3.S3DeleteBucketCorsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketCorsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketCorsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3DeleteBucketEncryptionRequest <a name="aws-cdk-sdk.s3.S3DeleteBucketEncryptionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3DeleteBucketEncryptionRequest: s3.S3DeleteBucketEncryptionRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketEncryptionRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketEncryptionRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3DeleteBucketIntelligentTieringConfigurationRequest <a name="aws-cdk-sdk.s3.S3DeleteBucketIntelligentTieringConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3DeleteBucketIntelligentTieringConfigurationRequest: s3.S3DeleteBucketIntelligentTieringConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketIntelligentTieringConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketIntelligentTieringConfigurationRequest.property.id"></a>

- *Type:* `string`

---

### S3DeleteBucketInventoryConfigurationRequest <a name="aws-cdk-sdk.s3.S3DeleteBucketInventoryConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3DeleteBucketInventoryConfigurationRequest: s3.S3DeleteBucketInventoryConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketInventoryConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketInventoryConfigurationRequest.property.id"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketInventoryConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3DeleteBucketLifecycleRequest <a name="aws-cdk-sdk.s3.S3DeleteBucketLifecycleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3DeleteBucketLifecycleRequest: s3.S3DeleteBucketLifecycleRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketLifecycleRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketLifecycleRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3DeleteBucketMetricsConfigurationRequest <a name="aws-cdk-sdk.s3.S3DeleteBucketMetricsConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3DeleteBucketMetricsConfigurationRequest: s3.S3DeleteBucketMetricsConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketMetricsConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketMetricsConfigurationRequest.property.id"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketMetricsConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3DeleteBucketOwnershipControlsRequest <a name="aws-cdk-sdk.s3.S3DeleteBucketOwnershipControlsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3DeleteBucketOwnershipControlsRequest: s3.S3DeleteBucketOwnershipControlsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketOwnershipControlsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketOwnershipControlsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3DeleteBucketPolicyRequest <a name="aws-cdk-sdk.s3.S3DeleteBucketPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3DeleteBucketPolicyRequest: s3.S3DeleteBucketPolicyRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketPolicyRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketPolicyRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3DeleteBucketReplicationRequest <a name="aws-cdk-sdk.s3.S3DeleteBucketReplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3DeleteBucketReplicationRequest: s3.S3DeleteBucketReplicationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketReplicationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketReplicationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3DeleteBucketRequest <a name="aws-cdk-sdk.s3.S3DeleteBucketRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3DeleteBucketRequest: s3.S3DeleteBucketRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3DeleteBucketTaggingRequest <a name="aws-cdk-sdk.s3.S3DeleteBucketTaggingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3DeleteBucketTaggingRequest: s3.S3DeleteBucketTaggingRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketTaggingRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketTaggingRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3DeleteBucketWebsiteRequest <a name="aws-cdk-sdk.s3.S3DeleteBucketWebsiteRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3DeleteBucketWebsiteRequest: s3.S3DeleteBucketWebsiteRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketWebsiteRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteBucketWebsiteRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3DeletedObject <a name="aws-cdk-sdk.s3.S3DeletedObject"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3DeletedObject: s3.S3DeletedObject = { ... }
```

##### `deleteMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeletedObject.property.deleteMarker"></a>

- *Type:* `boolean`

---

##### `deleteMarkerVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeletedObject.property.deleteMarkerVersionId"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeletedObject.property.key"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeletedObject.property.versionId"></a>

- *Type:* `string`

---

### S3DeleteMarkerEntry <a name="aws-cdk-sdk.s3.S3DeleteMarkerEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3DeleteMarkerEntry: s3.S3DeleteMarkerEntry = { ... }
```

##### `isLatest`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteMarkerEntry.property.isLatest"></a>

- *Type:* `boolean`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteMarkerEntry.property.key"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteMarkerEntry.property.lastModified"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteMarkerEntry.property.owner"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Owner`](#aws-cdk-sdk.s3.S3Owner)

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteMarkerEntry.property.versionId"></a>

- *Type:* `string`

---

### S3DeleteMarkerReplication <a name="aws-cdk-sdk.s3.S3DeleteMarkerReplication"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3DeleteMarkerReplication: s3.S3DeleteMarkerReplication = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteMarkerReplication.property.status"></a>

- *Type:* `string`

---

### S3DeleteObjectOutput <a name="aws-cdk-sdk.s3.S3DeleteObjectOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3DeleteObjectOutput: s3.S3DeleteObjectOutput = { ... }
```

##### `deleteMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteObjectOutput.property.deleteMarker"></a>

- *Type:* `boolean`

---

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteObjectOutput.property.requestCharged"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteObjectOutput.property.versionId"></a>

- *Type:* `string`

---

### S3DeleteObjectRequest <a name="aws-cdk-sdk.s3.S3DeleteObjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3DeleteObjectRequest: s3.S3DeleteObjectRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3DeleteObjectRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3DeleteObjectRequest.property.key"></a>

- *Type:* `string`

---

##### `bypassGovernanceRetention`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteObjectRequest.property.bypassGovernanceRetention"></a>

- *Type:* `boolean`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteObjectRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `mfa`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteObjectRequest.property.mfa"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteObjectRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteObjectRequest.property.versionId"></a>

- *Type:* `string`

---

### S3DeleteObjectsOutput <a name="aws-cdk-sdk.s3.S3DeleteObjectsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3DeleteObjectsOutput: s3.S3DeleteObjectsOutput = { ... }
```

##### `deleted`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteObjectsOutput.property.deleted"></a>

- *Type:* [`aws-cdk-sdk.s3.S3DeletedObject`](#aws-cdk-sdk.s3.S3DeletedObject)[]

---

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteObjectsOutput.property.errors"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Error`](#aws-cdk-sdk.s3.S3Error)[]

---

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteObjectsOutput.property.requestCharged"></a>

- *Type:* `string`

---

### S3DeleteObjectsRequest <a name="aws-cdk-sdk.s3.S3DeleteObjectsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3DeleteObjectsRequest: s3.S3DeleteObjectsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3DeleteObjectsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `delete`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3DeleteObjectsRequest.property.delete"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Delete`](#aws-cdk-sdk.s3.S3Delete)

---

##### `bypassGovernanceRetention`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteObjectsRequest.property.bypassGovernanceRetention"></a>

- *Type:* `boolean`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteObjectsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `mfa`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteObjectsRequest.property.mfa"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteObjectsRequest.property.requestPayer"></a>

- *Type:* `string`

---

### S3DeleteObjectTaggingOutput <a name="aws-cdk-sdk.s3.S3DeleteObjectTaggingOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3DeleteObjectTaggingOutput: s3.S3DeleteObjectTaggingOutput = { ... }
```

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteObjectTaggingOutput.property.versionId"></a>

- *Type:* `string`

---

### S3DeleteObjectTaggingRequest <a name="aws-cdk-sdk.s3.S3DeleteObjectTaggingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3DeleteObjectTaggingRequest: s3.S3DeleteObjectTaggingRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3DeleteObjectTaggingRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3DeleteObjectTaggingRequest.property.key"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteObjectTaggingRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeleteObjectTaggingRequest.property.versionId"></a>

- *Type:* `string`

---

### S3DeletePublicAccessBlockRequest <a name="aws-cdk-sdk.s3.S3DeletePublicAccessBlockRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3DeletePublicAccessBlockRequest: s3.S3DeletePublicAccessBlockRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3DeletePublicAccessBlockRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3DeletePublicAccessBlockRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3Destination <a name="aws-cdk-sdk.s3.S3Destination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3Destination: s3.S3Destination = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Destination.property.bucket"></a>

- *Type:* `string`

---

##### `accessControlTranslation`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Destination.property.accessControlTranslation"></a>

- *Type:* [`aws-cdk-sdk.s3.S3AccessControlTranslation`](#aws-cdk-sdk.s3.S3AccessControlTranslation)

---

##### `account`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Destination.property.account"></a>

- *Type:* `string`

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Destination.property.encryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3EncryptionConfiguration`](#aws-cdk-sdk.s3.S3EncryptionConfiguration)

---

##### `metrics`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Destination.property.metrics"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Metrics`](#aws-cdk-sdk.s3.S3Metrics)

---

##### `replicationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Destination.property.replicationTime"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ReplicationTime`](#aws-cdk-sdk.s3.S3ReplicationTime)

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Destination.property.storageClass"></a>

- *Type:* `string`

---

### S3Encryption <a name="aws-cdk-sdk.s3.S3Encryption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3Encryption: s3.S3Encryption = { ... }
```

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Encryption.property.encryptionType"></a>

- *Type:* `string`

---

##### `kmsContext`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Encryption.property.kmsContext"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Encryption.property.kmsKeyId"></a>

- *Type:* `string`

---

### S3EncryptionConfiguration <a name="aws-cdk-sdk.s3.S3EncryptionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3EncryptionConfiguration: s3.S3EncryptionConfiguration = { ... }
```

##### `replicaKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3EncryptionConfiguration.property.replicaKmsKeyId"></a>

- *Type:* `string`

---

### S3EndEvent <a name="aws-cdk-sdk.s3.S3EndEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3EndEvent: s3.S3EndEvent = { ... }
```

### S3Error <a name="aws-cdk-sdk.s3.S3Error"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3Error: s3.S3Error = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Error.property.code"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Error.property.key"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Error.property.message"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Error.property.versionId"></a>

- *Type:* `string`

---

### S3ErrorDocument <a name="aws-cdk-sdk.s3.S3ErrorDocument"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ErrorDocument: s3.S3ErrorDocument = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ErrorDocument.property.key"></a>

- *Type:* `string`

---

### S3ExistingObjectReplication <a name="aws-cdk-sdk.s3.S3ExistingObjectReplication"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ExistingObjectReplication: s3.S3ExistingObjectReplication = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ExistingObjectReplication.property.status"></a>

- *Type:* `string`

---

### S3FilterRule <a name="aws-cdk-sdk.s3.S3FilterRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3FilterRule: s3.S3FilterRule = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3FilterRule.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3FilterRule.property.value"></a>

- *Type:* `string`

---

### S3GetBucketAccelerateConfigurationOutput <a name="aws-cdk-sdk.s3.S3GetBucketAccelerateConfigurationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketAccelerateConfigurationOutput: s3.S3GetBucketAccelerateConfigurationOutput = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketAccelerateConfigurationOutput.property.status"></a>

- *Type:* `string`

---

### S3GetBucketAccelerateConfigurationRequest <a name="aws-cdk-sdk.s3.S3GetBucketAccelerateConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketAccelerateConfigurationRequest: s3.S3GetBucketAccelerateConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetBucketAccelerateConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketAccelerateConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketAclOutput <a name="aws-cdk-sdk.s3.S3GetBucketAclOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketAclOutput: s3.S3GetBucketAclOutput = { ... }
```

##### `grants`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketAclOutput.property.grants"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Grant`](#aws-cdk-sdk.s3.S3Grant)[]

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketAclOutput.property.owner"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Owner`](#aws-cdk-sdk.s3.S3Owner)

---

### S3GetBucketAclRequest <a name="aws-cdk-sdk.s3.S3GetBucketAclRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketAclRequest: s3.S3GetBucketAclRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetBucketAclRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketAclRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketAnalyticsConfigurationOutput <a name="aws-cdk-sdk.s3.S3GetBucketAnalyticsConfigurationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketAnalyticsConfigurationOutput: s3.S3GetBucketAnalyticsConfigurationOutput = { ... }
```

##### `analyticsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketAnalyticsConfigurationOutput.property.analyticsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3AnalyticsConfiguration`](#aws-cdk-sdk.s3.S3AnalyticsConfiguration)

---

### S3GetBucketAnalyticsConfigurationRequest <a name="aws-cdk-sdk.s3.S3GetBucketAnalyticsConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketAnalyticsConfigurationRequest: s3.S3GetBucketAnalyticsConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetBucketAnalyticsConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetBucketAnalyticsConfigurationRequest.property.id"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketAnalyticsConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketCorsOutput <a name="aws-cdk-sdk.s3.S3GetBucketCorsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketCorsOutput: s3.S3GetBucketCorsOutput = { ... }
```

##### `corsRules`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketCorsOutput.property.corsRules"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CorsRule`](#aws-cdk-sdk.s3.S3CorsRule)[]

---

### S3GetBucketCorsRequest <a name="aws-cdk-sdk.s3.S3GetBucketCorsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketCorsRequest: s3.S3GetBucketCorsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetBucketCorsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketCorsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketEncryptionOutput <a name="aws-cdk-sdk.s3.S3GetBucketEncryptionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketEncryptionOutput: s3.S3GetBucketEncryptionOutput = { ... }
```

##### `serverSideEncryptionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketEncryptionOutput.property.serverSideEncryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ServerSideEncryptionConfiguration`](#aws-cdk-sdk.s3.S3ServerSideEncryptionConfiguration)

---

### S3GetBucketEncryptionRequest <a name="aws-cdk-sdk.s3.S3GetBucketEncryptionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketEncryptionRequest: s3.S3GetBucketEncryptionRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetBucketEncryptionRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketEncryptionRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketIntelligentTieringConfigurationOutput <a name="aws-cdk-sdk.s3.S3GetBucketIntelligentTieringConfigurationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketIntelligentTieringConfigurationOutput: s3.S3GetBucketIntelligentTieringConfigurationOutput = { ... }
```

##### `intelligentTieringConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketIntelligentTieringConfigurationOutput.property.intelligentTieringConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3IntelligentTieringConfiguration`](#aws-cdk-sdk.s3.S3IntelligentTieringConfiguration)

---

### S3GetBucketIntelligentTieringConfigurationRequest <a name="aws-cdk-sdk.s3.S3GetBucketIntelligentTieringConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketIntelligentTieringConfigurationRequest: s3.S3GetBucketIntelligentTieringConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetBucketIntelligentTieringConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetBucketIntelligentTieringConfigurationRequest.property.id"></a>

- *Type:* `string`

---

### S3GetBucketInventoryConfigurationOutput <a name="aws-cdk-sdk.s3.S3GetBucketInventoryConfigurationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketInventoryConfigurationOutput: s3.S3GetBucketInventoryConfigurationOutput = { ... }
```

##### `inventoryConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketInventoryConfigurationOutput.property.inventoryConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3InventoryConfiguration`](#aws-cdk-sdk.s3.S3InventoryConfiguration)

---

### S3GetBucketInventoryConfigurationRequest <a name="aws-cdk-sdk.s3.S3GetBucketInventoryConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketInventoryConfigurationRequest: s3.S3GetBucketInventoryConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetBucketInventoryConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetBucketInventoryConfigurationRequest.property.id"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketInventoryConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketLifecycleConfigurationOutput <a name="aws-cdk-sdk.s3.S3GetBucketLifecycleConfigurationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketLifecycleConfigurationOutput: s3.S3GetBucketLifecycleConfigurationOutput = { ... }
```

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketLifecycleConfigurationOutput.property.rules"></a>

- *Type:* [`aws-cdk-sdk.s3.S3LifecycleRule`](#aws-cdk-sdk.s3.S3LifecycleRule)[]

---

### S3GetBucketLifecycleConfigurationRequest <a name="aws-cdk-sdk.s3.S3GetBucketLifecycleConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketLifecycleConfigurationRequest: s3.S3GetBucketLifecycleConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetBucketLifecycleConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketLifecycleConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketLifecycleOutput <a name="aws-cdk-sdk.s3.S3GetBucketLifecycleOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketLifecycleOutput: s3.S3GetBucketLifecycleOutput = { ... }
```

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketLifecycleOutput.property.rules"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Rule`](#aws-cdk-sdk.s3.S3Rule)[]

---

### S3GetBucketLifecycleRequest <a name="aws-cdk-sdk.s3.S3GetBucketLifecycleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketLifecycleRequest: s3.S3GetBucketLifecycleRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetBucketLifecycleRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketLifecycleRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketLocationOutput <a name="aws-cdk-sdk.s3.S3GetBucketLocationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketLocationOutput: s3.S3GetBucketLocationOutput = { ... }
```

##### `locationConstraint`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketLocationOutput.property.locationConstraint"></a>

- *Type:* `string`

---

### S3GetBucketLocationRequest <a name="aws-cdk-sdk.s3.S3GetBucketLocationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketLocationRequest: s3.S3GetBucketLocationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetBucketLocationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketLocationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketLoggingOutput <a name="aws-cdk-sdk.s3.S3GetBucketLoggingOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketLoggingOutput: s3.S3GetBucketLoggingOutput = { ... }
```

##### `loggingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketLoggingOutput.property.loggingEnabled"></a>

- *Type:* [`aws-cdk-sdk.s3.S3LoggingEnabled`](#aws-cdk-sdk.s3.S3LoggingEnabled)

---

### S3GetBucketLoggingRequest <a name="aws-cdk-sdk.s3.S3GetBucketLoggingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketLoggingRequest: s3.S3GetBucketLoggingRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetBucketLoggingRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketLoggingRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketMetricsConfigurationOutput <a name="aws-cdk-sdk.s3.S3GetBucketMetricsConfigurationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketMetricsConfigurationOutput: s3.S3GetBucketMetricsConfigurationOutput = { ... }
```

##### `metricsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketMetricsConfigurationOutput.property.metricsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3MetricsConfiguration`](#aws-cdk-sdk.s3.S3MetricsConfiguration)

---

### S3GetBucketMetricsConfigurationRequest <a name="aws-cdk-sdk.s3.S3GetBucketMetricsConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketMetricsConfigurationRequest: s3.S3GetBucketMetricsConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetBucketMetricsConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetBucketMetricsConfigurationRequest.property.id"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketMetricsConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketNotificationConfigurationRequest <a name="aws-cdk-sdk.s3.S3GetBucketNotificationConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketNotificationConfigurationRequest: s3.S3GetBucketNotificationConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetBucketNotificationConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketNotificationConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketOwnershipControlsOutput <a name="aws-cdk-sdk.s3.S3GetBucketOwnershipControlsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketOwnershipControlsOutput: s3.S3GetBucketOwnershipControlsOutput = { ... }
```

##### `ownershipControls`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketOwnershipControlsOutput.property.ownershipControls"></a>

- *Type:* [`aws-cdk-sdk.s3.S3OwnershipControls`](#aws-cdk-sdk.s3.S3OwnershipControls)

---

### S3GetBucketOwnershipControlsRequest <a name="aws-cdk-sdk.s3.S3GetBucketOwnershipControlsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketOwnershipControlsRequest: s3.S3GetBucketOwnershipControlsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetBucketOwnershipControlsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketOwnershipControlsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketPolicyOutput <a name="aws-cdk-sdk.s3.S3GetBucketPolicyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketPolicyOutput: s3.S3GetBucketPolicyOutput = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketPolicyOutput.property.policy"></a>

- *Type:* `string`

---

### S3GetBucketPolicyRequest <a name="aws-cdk-sdk.s3.S3GetBucketPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketPolicyRequest: s3.S3GetBucketPolicyRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetBucketPolicyRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketPolicyRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketPolicyStatusOutput <a name="aws-cdk-sdk.s3.S3GetBucketPolicyStatusOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketPolicyStatusOutput: s3.S3GetBucketPolicyStatusOutput = { ... }
```

##### `policyStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketPolicyStatusOutput.property.policyStatus"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PolicyStatus`](#aws-cdk-sdk.s3.S3PolicyStatus)

---

### S3GetBucketPolicyStatusRequest <a name="aws-cdk-sdk.s3.S3GetBucketPolicyStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketPolicyStatusRequest: s3.S3GetBucketPolicyStatusRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetBucketPolicyStatusRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketPolicyStatusRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketReplicationOutput <a name="aws-cdk-sdk.s3.S3GetBucketReplicationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketReplicationOutput: s3.S3GetBucketReplicationOutput = { ... }
```

##### `replicationConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketReplicationOutput.property.replicationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ReplicationConfiguration`](#aws-cdk-sdk.s3.S3ReplicationConfiguration)

---

### S3GetBucketReplicationRequest <a name="aws-cdk-sdk.s3.S3GetBucketReplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketReplicationRequest: s3.S3GetBucketReplicationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetBucketReplicationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketReplicationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketRequestPaymentOutput <a name="aws-cdk-sdk.s3.S3GetBucketRequestPaymentOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketRequestPaymentOutput: s3.S3GetBucketRequestPaymentOutput = { ... }
```

##### `payer`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketRequestPaymentOutput.property.payer"></a>

- *Type:* `string`

---

### S3GetBucketRequestPaymentRequest <a name="aws-cdk-sdk.s3.S3GetBucketRequestPaymentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketRequestPaymentRequest: s3.S3GetBucketRequestPaymentRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetBucketRequestPaymentRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketRequestPaymentRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketTaggingOutput <a name="aws-cdk-sdk.s3.S3GetBucketTaggingOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketTaggingOutput: s3.S3GetBucketTaggingOutput = { ... }
```

##### `tagSet`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetBucketTaggingOutput.property.tagSet"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Tag`](#aws-cdk-sdk.s3.S3Tag)[]

---

### S3GetBucketTaggingRequest <a name="aws-cdk-sdk.s3.S3GetBucketTaggingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketTaggingRequest: s3.S3GetBucketTaggingRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetBucketTaggingRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketTaggingRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketVersioningOutput <a name="aws-cdk-sdk.s3.S3GetBucketVersioningOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketVersioningOutput: s3.S3GetBucketVersioningOutput = { ... }
```

##### `mfaDelete`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketVersioningOutput.property.mfaDelete"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketVersioningOutput.property.status"></a>

- *Type:* `string`

---

### S3GetBucketVersioningRequest <a name="aws-cdk-sdk.s3.S3GetBucketVersioningRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketVersioningRequest: s3.S3GetBucketVersioningRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetBucketVersioningRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketVersioningRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketWebsiteOutput <a name="aws-cdk-sdk.s3.S3GetBucketWebsiteOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketWebsiteOutput: s3.S3GetBucketWebsiteOutput = { ... }
```

##### `errorDocument`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketWebsiteOutput.property.errorDocument"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ErrorDocument`](#aws-cdk-sdk.s3.S3ErrorDocument)

---

##### `indexDocument`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketWebsiteOutput.property.indexDocument"></a>

- *Type:* [`aws-cdk-sdk.s3.S3IndexDocument`](#aws-cdk-sdk.s3.S3IndexDocument)

---

##### `redirectAllRequestsTo`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketWebsiteOutput.property.redirectAllRequestsTo"></a>

- *Type:* [`aws-cdk-sdk.s3.S3RedirectAllRequestsTo`](#aws-cdk-sdk.s3.S3RedirectAllRequestsTo)

---

##### `routingRules`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketWebsiteOutput.property.routingRules"></a>

- *Type:* [`aws-cdk-sdk.s3.S3RoutingRule`](#aws-cdk-sdk.s3.S3RoutingRule)[]

---

### S3GetBucketWebsiteRequest <a name="aws-cdk-sdk.s3.S3GetBucketWebsiteRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetBucketWebsiteRequest: s3.S3GetBucketWebsiteRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetBucketWebsiteRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetBucketWebsiteRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetObjectAclOutput <a name="aws-cdk-sdk.s3.S3GetObjectAclOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetObjectAclOutput: s3.S3GetObjectAclOutput = { ... }
```

##### `grants`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectAclOutput.property.grants"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Grant`](#aws-cdk-sdk.s3.S3Grant)[]

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectAclOutput.property.owner"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Owner`](#aws-cdk-sdk.s3.S3Owner)

---

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectAclOutput.property.requestCharged"></a>

- *Type:* `string`

---

### S3GetObjectAclRequest <a name="aws-cdk-sdk.s3.S3GetObjectAclRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetObjectAclRequest: s3.S3GetObjectAclRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetObjectAclRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetObjectAclRequest.property.key"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectAclRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectAclRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectAclRequest.property.versionId"></a>

- *Type:* `string`

---

### S3GetObjectLegalHoldOutput <a name="aws-cdk-sdk.s3.S3GetObjectLegalHoldOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetObjectLegalHoldOutput: s3.S3GetObjectLegalHoldOutput = { ... }
```

##### `legalHold`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectLegalHoldOutput.property.legalHold"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ObjectLockLegalHold`](#aws-cdk-sdk.s3.S3ObjectLockLegalHold)

---

### S3GetObjectLegalHoldRequest <a name="aws-cdk-sdk.s3.S3GetObjectLegalHoldRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetObjectLegalHoldRequest: s3.S3GetObjectLegalHoldRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetObjectLegalHoldRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetObjectLegalHoldRequest.property.key"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectLegalHoldRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectLegalHoldRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectLegalHoldRequest.property.versionId"></a>

- *Type:* `string`

---

### S3GetObjectLockConfigurationOutput <a name="aws-cdk-sdk.s3.S3GetObjectLockConfigurationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetObjectLockConfigurationOutput: s3.S3GetObjectLockConfigurationOutput = { ... }
```

##### `objectLockConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectLockConfigurationOutput.property.objectLockConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ObjectLockConfiguration`](#aws-cdk-sdk.s3.S3ObjectLockConfiguration)

---

### S3GetObjectLockConfigurationRequest <a name="aws-cdk-sdk.s3.S3GetObjectLockConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetObjectLockConfigurationRequest: s3.S3GetObjectLockConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetObjectLockConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectLockConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetObjectOutput <a name="aws-cdk-sdk.s3.S3GetObjectOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetObjectOutput: s3.S3GetObjectOutput = { ... }
```

##### `acceptRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.acceptRanges"></a>

- *Type:* `string`

---

##### `body`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.body"></a>

- *Type:* `any`

---

##### `cacheControl`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.cacheControl"></a>

- *Type:* `string`

---

##### `contentDisposition`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.contentDisposition"></a>

- *Type:* `string`

---

##### `contentEncoding`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.contentEncoding"></a>

- *Type:* `string`

---

##### `contentLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.contentLanguage"></a>

- *Type:* `string`

---

##### `contentLength`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.contentLength"></a>

- *Type:* `number`

---

##### `contentRange`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.contentRange"></a>

- *Type:* `string`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.contentType"></a>

- *Type:* `string`

---

##### `deleteMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.deleteMarker"></a>

- *Type:* `boolean`

---

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.eTag"></a>

- *Type:* `string`

---

##### `expiration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.expiration"></a>

- *Type:* `string`

---

##### `expires`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.expires"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.lastModified"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.metadata"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `missingMeta`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.missingMeta"></a>

- *Type:* `number`

---

##### `objectLockLegalHoldStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.objectLockLegalHoldStatus"></a>

- *Type:* `string`

---

##### `objectLockMode`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.objectLockMode"></a>

- *Type:* `string`

---

##### `objectLockRetainUntilDate`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.objectLockRetainUntilDate"></a>

- *Type:* `string`

---

##### `partsCount`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.partsCount"></a>

- *Type:* `number`

---

##### `replicationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.replicationStatus"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.requestCharged"></a>

- *Type:* `string`

---

##### `restore`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.restore"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.storageClass"></a>

- *Type:* `string`

---

##### `tagCount`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.tagCount"></a>

- *Type:* `number`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.versionId"></a>

- *Type:* `string`

---

##### `websiteRedirectLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectOutput.property.websiteRedirectLocation"></a>

- *Type:* `string`

---

### S3GetObjectRequest <a name="aws-cdk-sdk.s3.S3GetObjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetObjectRequest: s3.S3GetObjectRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetObjectRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetObjectRequest.property.key"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `ifMatch`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectRequest.property.ifMatch"></a>

- *Type:* `string`

---

##### `ifModifiedSince`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectRequest.property.ifModifiedSince"></a>

- *Type:* `string`

---

##### `ifNoneMatch`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectRequest.property.ifNoneMatch"></a>

- *Type:* `string`

---

##### `ifUnmodifiedSince`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectRequest.property.ifUnmodifiedSince"></a>

- *Type:* `string`

---

##### `partNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectRequest.property.partNumber"></a>

- *Type:* `number`

---

##### `range`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectRequest.property.range"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `responseCacheControl`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectRequest.property.responseCacheControl"></a>

- *Type:* `string`

---

##### `responseContentDisposition`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectRequest.property.responseContentDisposition"></a>

- *Type:* `string`

---

##### `responseContentEncoding`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectRequest.property.responseContentEncoding"></a>

- *Type:* `string`

---

##### `responseContentLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectRequest.property.responseContentLanguage"></a>

- *Type:* `string`

---

##### `responseContentType`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectRequest.property.responseContentType"></a>

- *Type:* `string`

---

##### `responseExpires`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectRequest.property.responseExpires"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectRequest.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKey`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectRequest.property.sseCustomerKey"></a>

- *Type:* `any`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectRequest.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectRequest.property.versionId"></a>

- *Type:* `string`

---

### S3GetObjectRetentionOutput <a name="aws-cdk-sdk.s3.S3GetObjectRetentionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetObjectRetentionOutput: s3.S3GetObjectRetentionOutput = { ... }
```

##### `retention`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectRetentionOutput.property.retention"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ObjectLockRetention`](#aws-cdk-sdk.s3.S3ObjectLockRetention)

---

### S3GetObjectRetentionRequest <a name="aws-cdk-sdk.s3.S3GetObjectRetentionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetObjectRetentionRequest: s3.S3GetObjectRetentionRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetObjectRetentionRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetObjectRetentionRequest.property.key"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectRetentionRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectRetentionRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectRetentionRequest.property.versionId"></a>

- *Type:* `string`

---

### S3GetObjectTaggingOutput <a name="aws-cdk-sdk.s3.S3GetObjectTaggingOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetObjectTaggingOutput: s3.S3GetObjectTaggingOutput = { ... }
```

##### `tagSet`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetObjectTaggingOutput.property.tagSet"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Tag`](#aws-cdk-sdk.s3.S3Tag)[]

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectTaggingOutput.property.versionId"></a>

- *Type:* `string`

---

### S3GetObjectTaggingRequest <a name="aws-cdk-sdk.s3.S3GetObjectTaggingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetObjectTaggingRequest: s3.S3GetObjectTaggingRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetObjectTaggingRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetObjectTaggingRequest.property.key"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectTaggingRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectTaggingRequest.property.versionId"></a>

- *Type:* `string`

---

### S3GetObjectTorrentOutput <a name="aws-cdk-sdk.s3.S3GetObjectTorrentOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetObjectTorrentOutput: s3.S3GetObjectTorrentOutput = { ... }
```

##### `body`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectTorrentOutput.property.body"></a>

- *Type:* `any`

---

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectTorrentOutput.property.requestCharged"></a>

- *Type:* `string`

---

### S3GetObjectTorrentRequest <a name="aws-cdk-sdk.s3.S3GetObjectTorrentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetObjectTorrentRequest: s3.S3GetObjectTorrentRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetObjectTorrentRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetObjectTorrentRequest.property.key"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectTorrentRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetObjectTorrentRequest.property.requestPayer"></a>

- *Type:* `string`

---

### S3GetPublicAccessBlockOutput <a name="aws-cdk-sdk.s3.S3GetPublicAccessBlockOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetPublicAccessBlockOutput: s3.S3GetPublicAccessBlockOutput = { ... }
```

##### `publicAccessBlockConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetPublicAccessBlockOutput.property.publicAccessBlockConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PublicAccessBlockConfiguration`](#aws-cdk-sdk.s3.S3PublicAccessBlockConfiguration)

---

### S3GetPublicAccessBlockRequest <a name="aws-cdk-sdk.s3.S3GetPublicAccessBlockRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GetPublicAccessBlockRequest: s3.S3GetPublicAccessBlockRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GetPublicAccessBlockRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3GetPublicAccessBlockRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GlacierJobParameters <a name="aws-cdk-sdk.s3.S3GlacierJobParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3GlacierJobParameters: s3.S3GlacierJobParameters = { ... }
```

##### `tier`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3GlacierJobParameters.property.tier"></a>

- *Type:* `string`

---

### S3Grant <a name="aws-cdk-sdk.s3.S3Grant"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3Grant: s3.S3Grant = { ... }
```

##### `grantee`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Grant.property.grantee"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Grantee`](#aws-cdk-sdk.s3.S3Grantee)

---

##### `permission`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Grant.property.permission"></a>

- *Type:* `string`

---

### S3Grantee <a name="aws-cdk-sdk.s3.S3Grantee"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3Grantee: s3.S3Grantee = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Grantee.property.type"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Grantee.property.displayName"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Grantee.property.emailAddress"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Grantee.property.id"></a>

- *Type:* `string`

---

##### `uri`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Grantee.property.uri"></a>

- *Type:* `string`

---

### S3HeadBucketRequest <a name="aws-cdk-sdk.s3.S3HeadBucketRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3HeadBucketRequest: s3.S3HeadBucketRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3HeadBucketRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadBucketRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3HeadObjectOutput <a name="aws-cdk-sdk.s3.S3HeadObjectOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3HeadObjectOutput: s3.S3HeadObjectOutput = { ... }
```

##### `acceptRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.acceptRanges"></a>

- *Type:* `string`

---

##### `archiveStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.archiveStatus"></a>

- *Type:* `string`

---

##### `cacheControl`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.cacheControl"></a>

- *Type:* `string`

---

##### `contentDisposition`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.contentDisposition"></a>

- *Type:* `string`

---

##### `contentEncoding`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.contentEncoding"></a>

- *Type:* `string`

---

##### `contentLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.contentLanguage"></a>

- *Type:* `string`

---

##### `contentLength`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.contentLength"></a>

- *Type:* `number`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.contentType"></a>

- *Type:* `string`

---

##### `deleteMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.deleteMarker"></a>

- *Type:* `boolean`

---

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.eTag"></a>

- *Type:* `string`

---

##### `expiration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.expiration"></a>

- *Type:* `string`

---

##### `expires`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.expires"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.lastModified"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.metadata"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `missingMeta`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.missingMeta"></a>

- *Type:* `number`

---

##### `objectLockLegalHoldStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.objectLockLegalHoldStatus"></a>

- *Type:* `string`

---

##### `objectLockMode`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.objectLockMode"></a>

- *Type:* `string`

---

##### `objectLockRetainUntilDate`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.objectLockRetainUntilDate"></a>

- *Type:* `string`

---

##### `partsCount`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.partsCount"></a>

- *Type:* `number`

---

##### `replicationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.replicationStatus"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.requestCharged"></a>

- *Type:* `string`

---

##### `restore`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.restore"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.storageClass"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.versionId"></a>

- *Type:* `string`

---

##### `websiteRedirectLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectOutput.property.websiteRedirectLocation"></a>

- *Type:* `string`

---

### S3HeadObjectRequest <a name="aws-cdk-sdk.s3.S3HeadObjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3HeadObjectRequest: s3.S3HeadObjectRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectRequest.property.key"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `ifMatch`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectRequest.property.ifMatch"></a>

- *Type:* `string`

---

##### `ifModifiedSince`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectRequest.property.ifModifiedSince"></a>

- *Type:* `string`

---

##### `ifNoneMatch`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectRequest.property.ifNoneMatch"></a>

- *Type:* `string`

---

##### `ifUnmodifiedSince`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectRequest.property.ifUnmodifiedSince"></a>

- *Type:* `string`

---

##### `partNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectRequest.property.partNumber"></a>

- *Type:* `number`

---

##### `range`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectRequest.property.range"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectRequest.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKey`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectRequest.property.sseCustomerKey"></a>

- *Type:* `any`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectRequest.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3HeadObjectRequest.property.versionId"></a>

- *Type:* `string`

---

### S3IndexDocument <a name="aws-cdk-sdk.s3.S3IndexDocument"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3IndexDocument: s3.S3IndexDocument = { ... }
```

##### `suffix`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3IndexDocument.property.suffix"></a>

- *Type:* `string`

---

### S3Initiator <a name="aws-cdk-sdk.s3.S3Initiator"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3Initiator: s3.S3Initiator = { ... }
```

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Initiator.property.displayName"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Initiator.property.id"></a>

- *Type:* `string`

---

### S3InputSerialization <a name="aws-cdk-sdk.s3.S3InputSerialization"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3InputSerialization: s3.S3InputSerialization = { ... }
```

##### `compressionType`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3InputSerialization.property.compressionType"></a>

- *Type:* `string`

---

##### `csv`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3InputSerialization.property.csv"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CsvInput`](#aws-cdk-sdk.s3.S3CsvInput)

---

##### `json`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3InputSerialization.property.json"></a>

- *Type:* [`aws-cdk-sdk.s3.S3JsonInput`](#aws-cdk-sdk.s3.S3JsonInput)

---

##### `parquet`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3InputSerialization.property.parquet"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ParquetInput`](#aws-cdk-sdk.s3.S3ParquetInput)

---

### S3IntelligentTieringAndOperator <a name="aws-cdk-sdk.s3.S3IntelligentTieringAndOperator"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3IntelligentTieringAndOperator: s3.S3IntelligentTieringAndOperator = { ... }
```

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3IntelligentTieringAndOperator.property.prefix"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3IntelligentTieringAndOperator.property.tags"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Tag`](#aws-cdk-sdk.s3.S3Tag)[]

---

### S3IntelligentTieringConfiguration <a name="aws-cdk-sdk.s3.S3IntelligentTieringConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3IntelligentTieringConfiguration: s3.S3IntelligentTieringConfiguration = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3IntelligentTieringConfiguration.property.id"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3IntelligentTieringConfiguration.property.status"></a>

- *Type:* `string`

---

##### `tierings`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3IntelligentTieringConfiguration.property.tierings"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Tiering`](#aws-cdk-sdk.s3.S3Tiering)[]

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3IntelligentTieringConfiguration.property.filter"></a>

- *Type:* [`aws-cdk-sdk.s3.S3IntelligentTieringFilter`](#aws-cdk-sdk.s3.S3IntelligentTieringFilter)

---

### S3IntelligentTieringFilter <a name="aws-cdk-sdk.s3.S3IntelligentTieringFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3IntelligentTieringFilter: s3.S3IntelligentTieringFilter = { ... }
```

##### `and`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3IntelligentTieringFilter.property.and"></a>

- *Type:* [`aws-cdk-sdk.s3.S3IntelligentTieringAndOperator`](#aws-cdk-sdk.s3.S3IntelligentTieringAndOperator)

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3IntelligentTieringFilter.property.prefix"></a>

- *Type:* `string`

---

##### `tag`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3IntelligentTieringFilter.property.tag"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Tag`](#aws-cdk-sdk.s3.S3Tag)

---

### S3InventoryConfiguration <a name="aws-cdk-sdk.s3.S3InventoryConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3InventoryConfiguration: s3.S3InventoryConfiguration = { ... }
```

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3InventoryConfiguration.property.destination"></a>

- *Type:* [`aws-cdk-sdk.s3.S3InventoryDestination`](#aws-cdk-sdk.s3.S3InventoryDestination)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3InventoryConfiguration.property.id"></a>

- *Type:* `string`

---

##### `includedObjectVersions`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3InventoryConfiguration.property.includedObjectVersions"></a>

- *Type:* `string`

---

##### `isEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3InventoryConfiguration.property.isEnabled"></a>

- *Type:* `boolean`

---

##### `schedule`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3InventoryConfiguration.property.schedule"></a>

- *Type:* [`aws-cdk-sdk.s3.S3InventorySchedule`](#aws-cdk-sdk.s3.S3InventorySchedule)

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3InventoryConfiguration.property.filter"></a>

- *Type:* [`aws-cdk-sdk.s3.S3InventoryFilter`](#aws-cdk-sdk.s3.S3InventoryFilter)

---

##### `optionalFields`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3InventoryConfiguration.property.optionalFields"></a>

- *Type:* `string`[]

---

### S3InventoryDestination <a name="aws-cdk-sdk.s3.S3InventoryDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3InventoryDestination: s3.S3InventoryDestination = { ... }
```

##### `s3BucketDestination`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3InventoryDestination.property.s3BucketDestination"></a>

- *Type:* [`aws-cdk-sdk.s3.S3InventoryS3BucketDestination`](#aws-cdk-sdk.s3.S3InventoryS3BucketDestination)

---

### S3InventoryEncryption <a name="aws-cdk-sdk.s3.S3InventoryEncryption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3InventoryEncryption: s3.S3InventoryEncryption = { ... }
```

##### `ssekms`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3InventoryEncryption.property.ssekms"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Ssekms`](#aws-cdk-sdk.s3.S3Ssekms)

---

##### `sses3`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3InventoryEncryption.property.sses3"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Sses3`](#aws-cdk-sdk.s3.S3Sses3)

---

### S3InventoryFilter <a name="aws-cdk-sdk.s3.S3InventoryFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3InventoryFilter: s3.S3InventoryFilter = { ... }
```

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3InventoryFilter.property.prefix"></a>

- *Type:* `string`

---

### S3InventoryS3BucketDestination <a name="aws-cdk-sdk.s3.S3InventoryS3BucketDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3InventoryS3BucketDestination: s3.S3InventoryS3BucketDestination = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3InventoryS3BucketDestination.property.bucket"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3InventoryS3BucketDestination.property.format"></a>

- *Type:* `string`

---

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3InventoryS3BucketDestination.property.accountId"></a>

- *Type:* `string`

---

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3InventoryS3BucketDestination.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.s3.S3InventoryEncryption`](#aws-cdk-sdk.s3.S3InventoryEncryption)

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3InventoryS3BucketDestination.property.prefix"></a>

- *Type:* `string`

---

### S3InventorySchedule <a name="aws-cdk-sdk.s3.S3InventorySchedule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3InventorySchedule: s3.S3InventorySchedule = { ... }
```

##### `frequency`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3InventorySchedule.property.frequency"></a>

- *Type:* `string`

---

### S3JsonInput <a name="aws-cdk-sdk.s3.S3JsonInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3JsonInput: s3.S3JsonInput = { ... }
```

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3JsonInput.property.type"></a>

- *Type:* `string`

---

### S3JsonOutput <a name="aws-cdk-sdk.s3.S3JsonOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3JsonOutput: s3.S3JsonOutput = { ... }
```

##### `recordDelimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3JsonOutput.property.recordDelimiter"></a>

- *Type:* `string`

---

### S3LambdaFunctionConfiguration <a name="aws-cdk-sdk.s3.S3LambdaFunctionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3LambdaFunctionConfiguration: s3.S3LambdaFunctionConfiguration = { ... }
```

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3LambdaFunctionConfiguration.property.events"></a>

- *Type:* `string`[]

---

##### `lambdaFunctionArn`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3LambdaFunctionConfiguration.property.lambdaFunctionArn"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3LambdaFunctionConfiguration.property.filter"></a>

- *Type:* [`aws-cdk-sdk.s3.S3NotificationConfigurationFilter`](#aws-cdk-sdk.s3.S3NotificationConfigurationFilter)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3LambdaFunctionConfiguration.property.id"></a>

- *Type:* `string`

---

### S3LifecycleConfiguration <a name="aws-cdk-sdk.s3.S3LifecycleConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3LifecycleConfiguration: s3.S3LifecycleConfiguration = { ... }
```

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3LifecycleConfiguration.property.rules"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Rule`](#aws-cdk-sdk.s3.S3Rule)[]

---

### S3LifecycleExpiration <a name="aws-cdk-sdk.s3.S3LifecycleExpiration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3LifecycleExpiration: s3.S3LifecycleExpiration = { ... }
```

##### `date`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3LifecycleExpiration.property.date"></a>

- *Type:* `string`

---

##### `days`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3LifecycleExpiration.property.days"></a>

- *Type:* `number`

---

##### `expiredObjectDeleteMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3LifecycleExpiration.property.expiredObjectDeleteMarker"></a>

- *Type:* `boolean`

---

### S3LifecycleRule <a name="aws-cdk-sdk.s3.S3LifecycleRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3LifecycleRule: s3.S3LifecycleRule = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3LifecycleRule.property.status"></a>

- *Type:* `string`

---

##### `abortIncompleteMultipartUpload`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3LifecycleRule.property.abortIncompleteMultipartUpload"></a>

- *Type:* [`aws-cdk-sdk.s3.S3AbortIncompleteMultipartUpload`](#aws-cdk-sdk.s3.S3AbortIncompleteMultipartUpload)

---

##### `expiration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3LifecycleRule.property.expiration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3LifecycleExpiration`](#aws-cdk-sdk.s3.S3LifecycleExpiration)

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3LifecycleRule.property.filter"></a>

- *Type:* [`aws-cdk-sdk.s3.S3LifecycleRuleFilter`](#aws-cdk-sdk.s3.S3LifecycleRuleFilter)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3LifecycleRule.property.id"></a>

- *Type:* `string`

---

##### `noncurrentVersionExpiration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3LifecycleRule.property.noncurrentVersionExpiration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3NoncurrentVersionExpiration`](#aws-cdk-sdk.s3.S3NoncurrentVersionExpiration)

---

##### `noncurrentVersionTransitions`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3LifecycleRule.property.noncurrentVersionTransitions"></a>

- *Type:* [`aws-cdk-sdk.s3.S3NoncurrentVersionTransition`](#aws-cdk-sdk.s3.S3NoncurrentVersionTransition)[]

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3LifecycleRule.property.prefix"></a>

- *Type:* `string`

---

##### `transitions`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3LifecycleRule.property.transitions"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Transition`](#aws-cdk-sdk.s3.S3Transition)[]

---

### S3LifecycleRuleAndOperator <a name="aws-cdk-sdk.s3.S3LifecycleRuleAndOperator"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3LifecycleRuleAndOperator: s3.S3LifecycleRuleAndOperator = { ... }
```

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3LifecycleRuleAndOperator.property.prefix"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3LifecycleRuleAndOperator.property.tags"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Tag`](#aws-cdk-sdk.s3.S3Tag)[]

---

### S3LifecycleRuleFilter <a name="aws-cdk-sdk.s3.S3LifecycleRuleFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3LifecycleRuleFilter: s3.S3LifecycleRuleFilter = { ... }
```

##### `and`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3LifecycleRuleFilter.property.and"></a>

- *Type:* [`aws-cdk-sdk.s3.S3LifecycleRuleAndOperator`](#aws-cdk-sdk.s3.S3LifecycleRuleAndOperator)

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3LifecycleRuleFilter.property.prefix"></a>

- *Type:* `string`

---

##### `tag`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3LifecycleRuleFilter.property.tag"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Tag`](#aws-cdk-sdk.s3.S3Tag)

---

### S3ListBucketAnalyticsConfigurationsOutput <a name="aws-cdk-sdk.s3.S3ListBucketAnalyticsConfigurationsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ListBucketAnalyticsConfigurationsOutput: s3.S3ListBucketAnalyticsConfigurationsOutput = { ... }
```

##### `analyticsConfigurationList`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListBucketAnalyticsConfigurationsOutput.property.analyticsConfigurationList"></a>

- *Type:* [`aws-cdk-sdk.s3.S3AnalyticsConfiguration`](#aws-cdk-sdk.s3.S3AnalyticsConfiguration)[]

---

##### `continuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListBucketAnalyticsConfigurationsOutput.property.continuationToken"></a>

- *Type:* `string`

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListBucketAnalyticsConfigurationsOutput.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `nextContinuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListBucketAnalyticsConfigurationsOutput.property.nextContinuationToken"></a>

- *Type:* `string`

---

### S3ListBucketAnalyticsConfigurationsRequest <a name="aws-cdk-sdk.s3.S3ListBucketAnalyticsConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ListBucketAnalyticsConfigurationsRequest: s3.S3ListBucketAnalyticsConfigurationsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ListBucketAnalyticsConfigurationsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `continuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListBucketAnalyticsConfigurationsRequest.property.continuationToken"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListBucketAnalyticsConfigurationsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3ListBucketIntelligentTieringConfigurationsOutput <a name="aws-cdk-sdk.s3.S3ListBucketIntelligentTieringConfigurationsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ListBucketIntelligentTieringConfigurationsOutput: s3.S3ListBucketIntelligentTieringConfigurationsOutput = { ... }
```

##### `continuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListBucketIntelligentTieringConfigurationsOutput.property.continuationToken"></a>

- *Type:* `string`

---

##### `intelligentTieringConfigurationList`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListBucketIntelligentTieringConfigurationsOutput.property.intelligentTieringConfigurationList"></a>

- *Type:* [`aws-cdk-sdk.s3.S3IntelligentTieringConfiguration`](#aws-cdk-sdk.s3.S3IntelligentTieringConfiguration)[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListBucketIntelligentTieringConfigurationsOutput.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `nextContinuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListBucketIntelligentTieringConfigurationsOutput.property.nextContinuationToken"></a>

- *Type:* `string`

---

### S3ListBucketIntelligentTieringConfigurationsRequest <a name="aws-cdk-sdk.s3.S3ListBucketIntelligentTieringConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ListBucketIntelligentTieringConfigurationsRequest: s3.S3ListBucketIntelligentTieringConfigurationsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ListBucketIntelligentTieringConfigurationsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `continuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListBucketIntelligentTieringConfigurationsRequest.property.continuationToken"></a>

- *Type:* `string`

---

### S3ListBucketInventoryConfigurationsOutput <a name="aws-cdk-sdk.s3.S3ListBucketInventoryConfigurationsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ListBucketInventoryConfigurationsOutput: s3.S3ListBucketInventoryConfigurationsOutput = { ... }
```

##### `continuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListBucketInventoryConfigurationsOutput.property.continuationToken"></a>

- *Type:* `string`

---

##### `inventoryConfigurationList`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListBucketInventoryConfigurationsOutput.property.inventoryConfigurationList"></a>

- *Type:* [`aws-cdk-sdk.s3.S3InventoryConfiguration`](#aws-cdk-sdk.s3.S3InventoryConfiguration)[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListBucketInventoryConfigurationsOutput.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `nextContinuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListBucketInventoryConfigurationsOutput.property.nextContinuationToken"></a>

- *Type:* `string`

---

### S3ListBucketInventoryConfigurationsRequest <a name="aws-cdk-sdk.s3.S3ListBucketInventoryConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ListBucketInventoryConfigurationsRequest: s3.S3ListBucketInventoryConfigurationsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ListBucketInventoryConfigurationsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `continuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListBucketInventoryConfigurationsRequest.property.continuationToken"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListBucketInventoryConfigurationsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3ListBucketMetricsConfigurationsOutput <a name="aws-cdk-sdk.s3.S3ListBucketMetricsConfigurationsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ListBucketMetricsConfigurationsOutput: s3.S3ListBucketMetricsConfigurationsOutput = { ... }
```

##### `continuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListBucketMetricsConfigurationsOutput.property.continuationToken"></a>

- *Type:* `string`

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListBucketMetricsConfigurationsOutput.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `metricsConfigurationList`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListBucketMetricsConfigurationsOutput.property.metricsConfigurationList"></a>

- *Type:* [`aws-cdk-sdk.s3.S3MetricsConfiguration`](#aws-cdk-sdk.s3.S3MetricsConfiguration)[]

---

##### `nextContinuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListBucketMetricsConfigurationsOutput.property.nextContinuationToken"></a>

- *Type:* `string`

---

### S3ListBucketMetricsConfigurationsRequest <a name="aws-cdk-sdk.s3.S3ListBucketMetricsConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ListBucketMetricsConfigurationsRequest: s3.S3ListBucketMetricsConfigurationsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ListBucketMetricsConfigurationsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `continuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListBucketMetricsConfigurationsRequest.property.continuationToken"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListBucketMetricsConfigurationsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3ListBucketsOutput <a name="aws-cdk-sdk.s3.S3ListBucketsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ListBucketsOutput: s3.S3ListBucketsOutput = { ... }
```

##### `buckets`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListBucketsOutput.property.buckets"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Bucket`](#aws-cdk-sdk.s3.S3Bucket)[]

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListBucketsOutput.property.owner"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Owner`](#aws-cdk-sdk.s3.S3Owner)

---

### S3ListMultipartUploadsOutput <a name="aws-cdk-sdk.s3.S3ListMultipartUploadsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ListMultipartUploadsOutput: s3.S3ListMultipartUploadsOutput = { ... }
```

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListMultipartUploadsOutput.property.bucket"></a>

- *Type:* `string`

---

##### `commonPrefixes`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListMultipartUploadsOutput.property.commonPrefixes"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CommonPrefix`](#aws-cdk-sdk.s3.S3CommonPrefix)[]

---

##### `delimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListMultipartUploadsOutput.property.delimiter"></a>

- *Type:* `string`

---

##### `encodingType`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListMultipartUploadsOutput.property.encodingType"></a>

- *Type:* `string`

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListMultipartUploadsOutput.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `keyMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListMultipartUploadsOutput.property.keyMarker"></a>

- *Type:* `string`

---

##### `maxUploads`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListMultipartUploadsOutput.property.maxUploads"></a>

- *Type:* `number`

---

##### `nextKeyMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListMultipartUploadsOutput.property.nextKeyMarker"></a>

- *Type:* `string`

---

##### `nextUploadIdMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListMultipartUploadsOutput.property.nextUploadIdMarker"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListMultipartUploadsOutput.property.prefix"></a>

- *Type:* `string`

---

##### `uploadIdMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListMultipartUploadsOutput.property.uploadIdMarker"></a>

- *Type:* `string`

---

##### `uploads`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListMultipartUploadsOutput.property.uploads"></a>

- *Type:* [`aws-cdk-sdk.s3.S3MultipartUpload`](#aws-cdk-sdk.s3.S3MultipartUpload)[]

---

### S3ListMultipartUploadsRequest <a name="aws-cdk-sdk.s3.S3ListMultipartUploadsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ListMultipartUploadsRequest: s3.S3ListMultipartUploadsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ListMultipartUploadsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `delimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListMultipartUploadsRequest.property.delimiter"></a>

- *Type:* `string`

---

##### `encodingType`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListMultipartUploadsRequest.property.encodingType"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListMultipartUploadsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `keyMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListMultipartUploadsRequest.property.keyMarker"></a>

- *Type:* `string`

---

##### `maxUploads`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListMultipartUploadsRequest.property.maxUploads"></a>

- *Type:* `number`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListMultipartUploadsRequest.property.prefix"></a>

- *Type:* `string`

---

##### `uploadIdMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListMultipartUploadsRequest.property.uploadIdMarker"></a>

- *Type:* `string`

---

### S3ListObjectsOutput <a name="aws-cdk-sdk.s3.S3ListObjectsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ListObjectsOutput: s3.S3ListObjectsOutput = { ... }
```

##### `commonPrefixes`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsOutput.property.commonPrefixes"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CommonPrefix`](#aws-cdk-sdk.s3.S3CommonPrefix)[]

---

##### `contents`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsOutput.property.contents"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Object`](#aws-cdk-sdk.s3.S3Object)[]

---

##### `delimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsOutput.property.delimiter"></a>

- *Type:* `string`

---

##### `encodingType`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsOutput.property.encodingType"></a>

- *Type:* `string`

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsOutput.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsOutput.property.marker"></a>

- *Type:* `string`

---

##### `maxKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsOutput.property.maxKeys"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsOutput.property.name"></a>

- *Type:* `string`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsOutput.property.nextMarker"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsOutput.property.prefix"></a>

- *Type:* `string`

---

### S3ListObjectsRequest <a name="aws-cdk-sdk.s3.S3ListObjectsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ListObjectsRequest: s3.S3ListObjectsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `delimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsRequest.property.delimiter"></a>

- *Type:* `string`

---

##### `encodingType`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsRequest.property.encodingType"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsRequest.property.maxKeys"></a>

- *Type:* `number`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsRequest.property.prefix"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsRequest.property.requestPayer"></a>

- *Type:* `string`

---

### S3ListObjectsV2Output <a name="aws-cdk-sdk.s3.S3ListObjectsV2Output"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ListObjectsV2Output: s3.S3ListObjectsV2Output = { ... }
```

##### `commonPrefixes`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsV2Output.property.commonPrefixes"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CommonPrefix`](#aws-cdk-sdk.s3.S3CommonPrefix)[]

---

##### `contents`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsV2Output.property.contents"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Object`](#aws-cdk-sdk.s3.S3Object)[]

---

##### `continuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsV2Output.property.continuationToken"></a>

- *Type:* `string`

---

##### `delimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsV2Output.property.delimiter"></a>

- *Type:* `string`

---

##### `encodingType`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsV2Output.property.encodingType"></a>

- *Type:* `string`

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsV2Output.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `keyCount`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsV2Output.property.keyCount"></a>

- *Type:* `number`

---

##### `maxKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsV2Output.property.maxKeys"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsV2Output.property.name"></a>

- *Type:* `string`

---

##### `nextContinuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsV2Output.property.nextContinuationToken"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsV2Output.property.prefix"></a>

- *Type:* `string`

---

##### `startAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsV2Output.property.startAfter"></a>

- *Type:* `string`

---

### S3ListObjectsV2Request <a name="aws-cdk-sdk.s3.S3ListObjectsV2Request"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ListObjectsV2Request: s3.S3ListObjectsV2Request = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsV2Request.property.bucket"></a>

- *Type:* `string`

---

##### `continuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsV2Request.property.continuationToken"></a>

- *Type:* `string`

---

##### `delimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsV2Request.property.delimiter"></a>

- *Type:* `string`

---

##### `encodingType`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsV2Request.property.encodingType"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsV2Request.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `fetchOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsV2Request.property.fetchOwner"></a>

- *Type:* `boolean`

---

##### `maxKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsV2Request.property.maxKeys"></a>

- *Type:* `number`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsV2Request.property.prefix"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsV2Request.property.requestPayer"></a>

- *Type:* `string`

---

##### `startAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectsV2Request.property.startAfter"></a>

- *Type:* `string`

---

### S3ListObjectVersionsOutput <a name="aws-cdk-sdk.s3.S3ListObjectVersionsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ListObjectVersionsOutput: s3.S3ListObjectVersionsOutput = { ... }
```

##### `commonPrefixes`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectVersionsOutput.property.commonPrefixes"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CommonPrefix`](#aws-cdk-sdk.s3.S3CommonPrefix)[]

---

##### `deleteMarkers`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectVersionsOutput.property.deleteMarkers"></a>

- *Type:* [`aws-cdk-sdk.s3.S3DeleteMarkerEntry`](#aws-cdk-sdk.s3.S3DeleteMarkerEntry)[]

---

##### `delimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectVersionsOutput.property.delimiter"></a>

- *Type:* `string`

---

##### `encodingType`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectVersionsOutput.property.encodingType"></a>

- *Type:* `string`

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectVersionsOutput.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `keyMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectVersionsOutput.property.keyMarker"></a>

- *Type:* `string`

---

##### `maxKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectVersionsOutput.property.maxKeys"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectVersionsOutput.property.name"></a>

- *Type:* `string`

---

##### `nextKeyMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectVersionsOutput.property.nextKeyMarker"></a>

- *Type:* `string`

---

##### `nextVersionIdMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectVersionsOutput.property.nextVersionIdMarker"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectVersionsOutput.property.prefix"></a>

- *Type:* `string`

---

##### `versionIdMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectVersionsOutput.property.versionIdMarker"></a>

- *Type:* `string`

---

##### `versions`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectVersionsOutput.property.versions"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ObjectVersion`](#aws-cdk-sdk.s3.S3ObjectVersion)[]

---

### S3ListObjectVersionsRequest <a name="aws-cdk-sdk.s3.S3ListObjectVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ListObjectVersionsRequest: s3.S3ListObjectVersionsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ListObjectVersionsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `delimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectVersionsRequest.property.delimiter"></a>

- *Type:* `string`

---

##### `encodingType`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectVersionsRequest.property.encodingType"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectVersionsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `keyMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectVersionsRequest.property.keyMarker"></a>

- *Type:* `string`

---

##### `maxKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectVersionsRequest.property.maxKeys"></a>

- *Type:* `number`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectVersionsRequest.property.prefix"></a>

- *Type:* `string`

---

##### `versionIdMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListObjectVersionsRequest.property.versionIdMarker"></a>

- *Type:* `string`

---

### S3ListPartsOutput <a name="aws-cdk-sdk.s3.S3ListPartsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ListPartsOutput: s3.S3ListPartsOutput = { ... }
```

##### `abortDate`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListPartsOutput.property.abortDate"></a>

- *Type:* `string`

---

##### `abortRuleId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListPartsOutput.property.abortRuleId"></a>

- *Type:* `string`

---

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListPartsOutput.property.bucket"></a>

- *Type:* `string`

---

##### `initiator`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListPartsOutput.property.initiator"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Initiator`](#aws-cdk-sdk.s3.S3Initiator)

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListPartsOutput.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListPartsOutput.property.key"></a>

- *Type:* `string`

---

##### `maxParts`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListPartsOutput.property.maxParts"></a>

- *Type:* `number`

---

##### `nextPartNumberMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListPartsOutput.property.nextPartNumberMarker"></a>

- *Type:* `number`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListPartsOutput.property.owner"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Owner`](#aws-cdk-sdk.s3.S3Owner)

---

##### `partNumberMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListPartsOutput.property.partNumberMarker"></a>

- *Type:* `number`

---

##### `parts`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListPartsOutput.property.parts"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Part`](#aws-cdk-sdk.s3.S3Part)[]

---

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListPartsOutput.property.requestCharged"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListPartsOutput.property.storageClass"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListPartsOutput.property.uploadId"></a>

- *Type:* `string`

---

### S3ListPartsRequest <a name="aws-cdk-sdk.s3.S3ListPartsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ListPartsRequest: s3.S3ListPartsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ListPartsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ListPartsRequest.property.key"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ListPartsRequest.property.uploadId"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListPartsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `maxParts`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListPartsRequest.property.maxParts"></a>

- *Type:* `number`

---

##### `partNumberMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListPartsRequest.property.partNumberMarker"></a>

- *Type:* `number`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ListPartsRequest.property.requestPayer"></a>

- *Type:* `string`

---

### S3LoggingEnabled <a name="aws-cdk-sdk.s3.S3LoggingEnabled"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3LoggingEnabled: s3.S3LoggingEnabled = { ... }
```

##### `targetBucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3LoggingEnabled.property.targetBucket"></a>

- *Type:* `string`

---

##### `targetPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3LoggingEnabled.property.targetPrefix"></a>

- *Type:* `string`

---

##### `targetGrants`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3LoggingEnabled.property.targetGrants"></a>

- *Type:* [`aws-cdk-sdk.s3.S3TargetGrant`](#aws-cdk-sdk.s3.S3TargetGrant)[]

---

### S3MetadataEntry <a name="aws-cdk-sdk.s3.S3MetadataEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3MetadataEntry: s3.S3MetadataEntry = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3MetadataEntry.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3MetadataEntry.property.value"></a>

- *Type:* `string`

---

### S3Metrics <a name="aws-cdk-sdk.s3.S3Metrics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3Metrics: s3.S3Metrics = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Metrics.property.status"></a>

- *Type:* `string`

---

##### `eventThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Metrics.property.eventThreshold"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ReplicationTimeValue`](#aws-cdk-sdk.s3.S3ReplicationTimeValue)

---

### S3MetricsAndOperator <a name="aws-cdk-sdk.s3.S3MetricsAndOperator"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3MetricsAndOperator: s3.S3MetricsAndOperator = { ... }
```

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3MetricsAndOperator.property.prefix"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3MetricsAndOperator.property.tags"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Tag`](#aws-cdk-sdk.s3.S3Tag)[]

---

### S3MetricsConfiguration <a name="aws-cdk-sdk.s3.S3MetricsConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3MetricsConfiguration: s3.S3MetricsConfiguration = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3MetricsConfiguration.property.id"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3MetricsConfiguration.property.filter"></a>

- *Type:* [`aws-cdk-sdk.s3.S3MetricsFilter`](#aws-cdk-sdk.s3.S3MetricsFilter)

---

### S3MetricsFilter <a name="aws-cdk-sdk.s3.S3MetricsFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3MetricsFilter: s3.S3MetricsFilter = { ... }
```

##### `and`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3MetricsFilter.property.and"></a>

- *Type:* [`aws-cdk-sdk.s3.S3MetricsAndOperator`](#aws-cdk-sdk.s3.S3MetricsAndOperator)

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3MetricsFilter.property.prefix"></a>

- *Type:* `string`

---

##### `tag`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3MetricsFilter.property.tag"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Tag`](#aws-cdk-sdk.s3.S3Tag)

---

### S3MultipartUpload <a name="aws-cdk-sdk.s3.S3MultipartUpload"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3MultipartUpload: s3.S3MultipartUpload = { ... }
```

##### `initiated`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3MultipartUpload.property.initiated"></a>

- *Type:* `string`

---

##### `initiator`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3MultipartUpload.property.initiator"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Initiator`](#aws-cdk-sdk.s3.S3Initiator)

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3MultipartUpload.property.key"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3MultipartUpload.property.owner"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Owner`](#aws-cdk-sdk.s3.S3Owner)

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3MultipartUpload.property.storageClass"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3MultipartUpload.property.uploadId"></a>

- *Type:* `string`

---

### S3NoncurrentVersionExpiration <a name="aws-cdk-sdk.s3.S3NoncurrentVersionExpiration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3NoncurrentVersionExpiration: s3.S3NoncurrentVersionExpiration = { ... }
```

##### `noncurrentDays`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3NoncurrentVersionExpiration.property.noncurrentDays"></a>

- *Type:* `number`

---

### S3NoncurrentVersionTransition <a name="aws-cdk-sdk.s3.S3NoncurrentVersionTransition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3NoncurrentVersionTransition: s3.S3NoncurrentVersionTransition = { ... }
```

##### `noncurrentDays`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3NoncurrentVersionTransition.property.noncurrentDays"></a>

- *Type:* `number`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3NoncurrentVersionTransition.property.storageClass"></a>

- *Type:* `string`

---

### S3NotificationConfiguration <a name="aws-cdk-sdk.s3.S3NotificationConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3NotificationConfiguration: s3.S3NotificationConfiguration = { ... }
```

##### `lambdaFunctionConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3NotificationConfiguration.property.lambdaFunctionConfigurations"></a>

- *Type:* [`aws-cdk-sdk.s3.S3LambdaFunctionConfiguration`](#aws-cdk-sdk.s3.S3LambdaFunctionConfiguration)[]

---

##### `queueConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3NotificationConfiguration.property.queueConfigurations"></a>

- *Type:* [`aws-cdk-sdk.s3.S3QueueConfiguration`](#aws-cdk-sdk.s3.S3QueueConfiguration)[]

---

##### `topicConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3NotificationConfiguration.property.topicConfigurations"></a>

- *Type:* [`aws-cdk-sdk.s3.S3TopicConfiguration`](#aws-cdk-sdk.s3.S3TopicConfiguration)[]

---

### S3NotificationConfigurationDeprecated <a name="aws-cdk-sdk.s3.S3NotificationConfigurationDeprecated"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3NotificationConfigurationDeprecated: s3.S3NotificationConfigurationDeprecated = { ... }
```

##### `cloudFunctionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3NotificationConfigurationDeprecated.property.cloudFunctionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CloudFunctionConfiguration`](#aws-cdk-sdk.s3.S3CloudFunctionConfiguration)

---

##### `queueConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3NotificationConfigurationDeprecated.property.queueConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3QueueConfigurationDeprecated`](#aws-cdk-sdk.s3.S3QueueConfigurationDeprecated)

---

##### `topicConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3NotificationConfigurationDeprecated.property.topicConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3TopicConfigurationDeprecated`](#aws-cdk-sdk.s3.S3TopicConfigurationDeprecated)

---

### S3NotificationConfigurationFilter <a name="aws-cdk-sdk.s3.S3NotificationConfigurationFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3NotificationConfigurationFilter: s3.S3NotificationConfigurationFilter = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3NotificationConfigurationFilter.property.key"></a>

- *Type:* [`aws-cdk-sdk.s3.S3S3KeyFilter`](#aws-cdk-sdk.s3.S3S3KeyFilter)

---

### S3Object <a name="aws-cdk-sdk.s3.S3Object"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3Object: s3.S3Object = { ... }
```

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Object.property.eTag"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Object.property.key"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Object.property.lastModified"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Object.property.owner"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Owner`](#aws-cdk-sdk.s3.S3Owner)

---

##### `size`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Object.property.size"></a>

- *Type:* `number`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Object.property.storageClass"></a>

- *Type:* `string`

---

### S3ObjectIdentifier <a name="aws-cdk-sdk.s3.S3ObjectIdentifier"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ObjectIdentifier: s3.S3ObjectIdentifier = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ObjectIdentifier.property.key"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ObjectIdentifier.property.versionId"></a>

- *Type:* `string`

---

### S3ObjectLockConfiguration <a name="aws-cdk-sdk.s3.S3ObjectLockConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ObjectLockConfiguration: s3.S3ObjectLockConfiguration = { ... }
```

##### `objectLockEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ObjectLockConfiguration.property.objectLockEnabled"></a>

- *Type:* `string`

---

##### `rule`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ObjectLockConfiguration.property.rule"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ObjectLockRule`](#aws-cdk-sdk.s3.S3ObjectLockRule)

---

### S3ObjectLockLegalHold <a name="aws-cdk-sdk.s3.S3ObjectLockLegalHold"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ObjectLockLegalHold: s3.S3ObjectLockLegalHold = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ObjectLockLegalHold.property.status"></a>

- *Type:* `string`

---

### S3ObjectLockRetention <a name="aws-cdk-sdk.s3.S3ObjectLockRetention"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ObjectLockRetention: s3.S3ObjectLockRetention = { ... }
```

##### `mode`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ObjectLockRetention.property.mode"></a>

- *Type:* `string`

---

##### `retainUntilDate`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ObjectLockRetention.property.retainUntilDate"></a>

- *Type:* `string`

---

### S3ObjectLockRule <a name="aws-cdk-sdk.s3.S3ObjectLockRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ObjectLockRule: s3.S3ObjectLockRule = { ... }
```

##### `defaultRetention`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ObjectLockRule.property.defaultRetention"></a>

- *Type:* [`aws-cdk-sdk.s3.S3DefaultRetention`](#aws-cdk-sdk.s3.S3DefaultRetention)

---

### S3ObjectVersion <a name="aws-cdk-sdk.s3.S3ObjectVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ObjectVersion: s3.S3ObjectVersion = { ... }
```

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ObjectVersion.property.eTag"></a>

- *Type:* `string`

---

##### `isLatest`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ObjectVersion.property.isLatest"></a>

- *Type:* `boolean`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ObjectVersion.property.key"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ObjectVersion.property.lastModified"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ObjectVersion.property.owner"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Owner`](#aws-cdk-sdk.s3.S3Owner)

---

##### `size`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ObjectVersion.property.size"></a>

- *Type:* `number`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ObjectVersion.property.storageClass"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ObjectVersion.property.versionId"></a>

- *Type:* `string`

---

### S3OutputLocation <a name="aws-cdk-sdk.s3.S3OutputLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3OutputLocation: s3.S3OutputLocation = { ... }
```

##### `s3`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3OutputLocation.property.s3"></a>

- *Type:* [`aws-cdk-sdk.s3.S3S3Location`](#aws-cdk-sdk.s3.S3S3Location)

---

### S3OutputSerialization <a name="aws-cdk-sdk.s3.S3OutputSerialization"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3OutputSerialization: s3.S3OutputSerialization = { ... }
```

##### `csv`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3OutputSerialization.property.csv"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CsvOutput`](#aws-cdk-sdk.s3.S3CsvOutput)

---

##### `json`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3OutputSerialization.property.json"></a>

- *Type:* [`aws-cdk-sdk.s3.S3JsonOutput`](#aws-cdk-sdk.s3.S3JsonOutput)

---

### S3Owner <a name="aws-cdk-sdk.s3.S3Owner"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3Owner: s3.S3Owner = { ... }
```

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Owner.property.displayName"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Owner.property.id"></a>

- *Type:* `string`

---

### S3OwnershipControls <a name="aws-cdk-sdk.s3.S3OwnershipControls"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3OwnershipControls: s3.S3OwnershipControls = { ... }
```

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3OwnershipControls.property.rules"></a>

- *Type:* [`aws-cdk-sdk.s3.S3OwnershipControlsRule`](#aws-cdk-sdk.s3.S3OwnershipControlsRule)[]

---

### S3OwnershipControlsRule <a name="aws-cdk-sdk.s3.S3OwnershipControlsRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3OwnershipControlsRule: s3.S3OwnershipControlsRule = { ... }
```

##### `objectOwnership`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3OwnershipControlsRule.property.objectOwnership"></a>

- *Type:* `string`

---

### S3ParquetInput <a name="aws-cdk-sdk.s3.S3ParquetInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ParquetInput: s3.S3ParquetInput = { ... }
```

### S3Part <a name="aws-cdk-sdk.s3.S3Part"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3Part: s3.S3Part = { ... }
```

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Part.property.eTag"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Part.property.lastModified"></a>

- *Type:* `string`

---

##### `partNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Part.property.partNumber"></a>

- *Type:* `number`

---

##### `size`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Part.property.size"></a>

- *Type:* `number`

---

### S3PolicyStatus <a name="aws-cdk-sdk.s3.S3PolicyStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PolicyStatus: s3.S3PolicyStatus = { ... }
```

##### `isPublic`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PolicyStatus.property.isPublic"></a>

- *Type:* `boolean`

---

### S3Progress <a name="aws-cdk-sdk.s3.S3Progress"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3Progress: s3.S3Progress = { ... }
```

##### `bytesProcessed`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Progress.property.bytesProcessed"></a>

- *Type:* `number`

---

##### `bytesReturned`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Progress.property.bytesReturned"></a>

- *Type:* `number`

---

##### `bytesScanned`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Progress.property.bytesScanned"></a>

- *Type:* `number`

---

### S3ProgressEvent <a name="aws-cdk-sdk.s3.S3ProgressEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ProgressEvent: s3.S3ProgressEvent = { ... }
```

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ProgressEvent.property.details"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Progress`](#aws-cdk-sdk.s3.S3Progress)

---

### S3PublicAccessBlockConfiguration <a name="aws-cdk-sdk.s3.S3PublicAccessBlockConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PublicAccessBlockConfiguration: s3.S3PublicAccessBlockConfiguration = { ... }
```

##### `blockPublicAcls`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PublicAccessBlockConfiguration.property.blockPublicAcls"></a>

- *Type:* `boolean`

---

##### `blockPublicPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PublicAccessBlockConfiguration.property.blockPublicPolicy"></a>

- *Type:* `boolean`

---

##### `ignorePublicAcls`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PublicAccessBlockConfiguration.property.ignorePublicAcls"></a>

- *Type:* `boolean`

---

##### `restrictPublicBuckets`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PublicAccessBlockConfiguration.property.restrictPublicBuckets"></a>

- *Type:* `boolean`

---

### S3PutBucketAccelerateConfigurationRequest <a name="aws-cdk-sdk.s3.S3PutBucketAccelerateConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutBucketAccelerateConfigurationRequest: s3.S3PutBucketAccelerateConfigurationRequest = { ... }
```

##### `accelerateConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketAccelerateConfigurationRequest.property.accelerateConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3AccelerateConfiguration`](#aws-cdk-sdk.s3.S3AccelerateConfiguration)

---

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketAccelerateConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketAccelerateConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutBucketAclRequest <a name="aws-cdk-sdk.s3.S3PutBucketAclRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutBucketAclRequest: s3.S3PutBucketAclRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketAclRequest.property.bucket"></a>

- *Type:* `string`

---

##### `accessControlPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketAclRequest.property.accessControlPolicy"></a>

- *Type:* [`aws-cdk-sdk.s3.S3AccessControlPolicy`](#aws-cdk-sdk.s3.S3AccessControlPolicy)

---

##### `acl`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketAclRequest.property.acl"></a>

- *Type:* `string`

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketAclRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketAclRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `grantFullControl`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketAclRequest.property.grantFullControl"></a>

- *Type:* `string`

---

##### `grantRead`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketAclRequest.property.grantRead"></a>

- *Type:* `string`

---

##### `grantReadAcp`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketAclRequest.property.grantReadAcp"></a>

- *Type:* `string`

---

##### `grantWrite`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketAclRequest.property.grantWrite"></a>

- *Type:* `string`

---

##### `grantWriteAcp`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketAclRequest.property.grantWriteAcp"></a>

- *Type:* `string`

---

### S3PutBucketAnalyticsConfigurationRequest <a name="aws-cdk-sdk.s3.S3PutBucketAnalyticsConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutBucketAnalyticsConfigurationRequest: s3.S3PutBucketAnalyticsConfigurationRequest = { ... }
```

##### `analyticsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketAnalyticsConfigurationRequest.property.analyticsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3AnalyticsConfiguration`](#aws-cdk-sdk.s3.S3AnalyticsConfiguration)

---

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketAnalyticsConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketAnalyticsConfigurationRequest.property.id"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketAnalyticsConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutBucketCorsRequest <a name="aws-cdk-sdk.s3.S3PutBucketCorsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutBucketCorsRequest: s3.S3PutBucketCorsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketCorsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `corsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketCorsRequest.property.corsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CorsConfiguration`](#aws-cdk-sdk.s3.S3CorsConfiguration)

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketCorsRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketCorsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutBucketEncryptionRequest <a name="aws-cdk-sdk.s3.S3PutBucketEncryptionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutBucketEncryptionRequest: s3.S3PutBucketEncryptionRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketEncryptionRequest.property.bucket"></a>

- *Type:* `string`

---

##### `serverSideEncryptionConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketEncryptionRequest.property.serverSideEncryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ServerSideEncryptionConfiguration`](#aws-cdk-sdk.s3.S3ServerSideEncryptionConfiguration)

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketEncryptionRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketEncryptionRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutBucketIntelligentTieringConfigurationRequest <a name="aws-cdk-sdk.s3.S3PutBucketIntelligentTieringConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutBucketIntelligentTieringConfigurationRequest: s3.S3PutBucketIntelligentTieringConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketIntelligentTieringConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketIntelligentTieringConfigurationRequest.property.id"></a>

- *Type:* `string`

---

##### `intelligentTieringConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketIntelligentTieringConfigurationRequest.property.intelligentTieringConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3IntelligentTieringConfiguration`](#aws-cdk-sdk.s3.S3IntelligentTieringConfiguration)

---

### S3PutBucketInventoryConfigurationRequest <a name="aws-cdk-sdk.s3.S3PutBucketInventoryConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutBucketInventoryConfigurationRequest: s3.S3PutBucketInventoryConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketInventoryConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketInventoryConfigurationRequest.property.id"></a>

- *Type:* `string`

---

##### `inventoryConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketInventoryConfigurationRequest.property.inventoryConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3InventoryConfiguration`](#aws-cdk-sdk.s3.S3InventoryConfiguration)

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketInventoryConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutBucketLifecycleConfigurationRequest <a name="aws-cdk-sdk.s3.S3PutBucketLifecycleConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutBucketLifecycleConfigurationRequest: s3.S3PutBucketLifecycleConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketLifecycleConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketLifecycleConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `lifecycleConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketLifecycleConfigurationRequest.property.lifecycleConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3BucketLifecycleConfiguration`](#aws-cdk-sdk.s3.S3BucketLifecycleConfiguration)

---

### S3PutBucketLifecycleRequest <a name="aws-cdk-sdk.s3.S3PutBucketLifecycleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutBucketLifecycleRequest: s3.S3PutBucketLifecycleRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketLifecycleRequest.property.bucket"></a>

- *Type:* `string`

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketLifecycleRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketLifecycleRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `lifecycleConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketLifecycleRequest.property.lifecycleConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3LifecycleConfiguration`](#aws-cdk-sdk.s3.S3LifecycleConfiguration)

---

### S3PutBucketLoggingRequest <a name="aws-cdk-sdk.s3.S3PutBucketLoggingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutBucketLoggingRequest: s3.S3PutBucketLoggingRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketLoggingRequest.property.bucket"></a>

- *Type:* `string`

---

##### `bucketLoggingStatus`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketLoggingRequest.property.bucketLoggingStatus"></a>

- *Type:* [`aws-cdk-sdk.s3.S3BucketLoggingStatus`](#aws-cdk-sdk.s3.S3BucketLoggingStatus)

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketLoggingRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketLoggingRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutBucketMetricsConfigurationRequest <a name="aws-cdk-sdk.s3.S3PutBucketMetricsConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutBucketMetricsConfigurationRequest: s3.S3PutBucketMetricsConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketMetricsConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketMetricsConfigurationRequest.property.id"></a>

- *Type:* `string`

---

##### `metricsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketMetricsConfigurationRequest.property.metricsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3MetricsConfiguration`](#aws-cdk-sdk.s3.S3MetricsConfiguration)

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketMetricsConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutBucketNotificationConfigurationRequest <a name="aws-cdk-sdk.s3.S3PutBucketNotificationConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutBucketNotificationConfigurationRequest: s3.S3PutBucketNotificationConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketNotificationConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `notificationConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketNotificationConfigurationRequest.property.notificationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3NotificationConfiguration`](#aws-cdk-sdk.s3.S3NotificationConfiguration)

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketNotificationConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutBucketNotificationRequest <a name="aws-cdk-sdk.s3.S3PutBucketNotificationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutBucketNotificationRequest: s3.S3PutBucketNotificationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketNotificationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `notificationConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketNotificationRequest.property.notificationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3NotificationConfigurationDeprecated`](#aws-cdk-sdk.s3.S3NotificationConfigurationDeprecated)

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketNotificationRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketNotificationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutBucketOwnershipControlsRequest <a name="aws-cdk-sdk.s3.S3PutBucketOwnershipControlsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutBucketOwnershipControlsRequest: s3.S3PutBucketOwnershipControlsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketOwnershipControlsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `ownershipControls`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketOwnershipControlsRequest.property.ownershipControls"></a>

- *Type:* [`aws-cdk-sdk.s3.S3OwnershipControls`](#aws-cdk-sdk.s3.S3OwnershipControls)

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketOwnershipControlsRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketOwnershipControlsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutBucketPolicyRequest <a name="aws-cdk-sdk.s3.S3PutBucketPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutBucketPolicyRequest: s3.S3PutBucketPolicyRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketPolicyRequest.property.bucket"></a>

- *Type:* `string`

---

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketPolicyRequest.property.policy"></a>

- *Type:* `string`

---

##### `confirmRemoveSelfBucketAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketPolicyRequest.property.confirmRemoveSelfBucketAccess"></a>

- *Type:* `boolean`

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketPolicyRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketPolicyRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutBucketReplicationRequest <a name="aws-cdk-sdk.s3.S3PutBucketReplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutBucketReplicationRequest: s3.S3PutBucketReplicationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketReplicationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `replicationConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketReplicationRequest.property.replicationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ReplicationConfiguration`](#aws-cdk-sdk.s3.S3ReplicationConfiguration)

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketReplicationRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketReplicationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `token`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketReplicationRequest.property.token"></a>

- *Type:* `string`

---

### S3PutBucketRequestPaymentRequest <a name="aws-cdk-sdk.s3.S3PutBucketRequestPaymentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutBucketRequestPaymentRequest: s3.S3PutBucketRequestPaymentRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketRequestPaymentRequest.property.bucket"></a>

- *Type:* `string`

---

##### `requestPaymentConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketRequestPaymentRequest.property.requestPaymentConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3RequestPaymentConfiguration`](#aws-cdk-sdk.s3.S3RequestPaymentConfiguration)

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketRequestPaymentRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketRequestPaymentRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutBucketTaggingRequest <a name="aws-cdk-sdk.s3.S3PutBucketTaggingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutBucketTaggingRequest: s3.S3PutBucketTaggingRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketTaggingRequest.property.bucket"></a>

- *Type:* `string`

---

##### `tagging`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketTaggingRequest.property.tagging"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Tagging`](#aws-cdk-sdk.s3.S3Tagging)

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketTaggingRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketTaggingRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutBucketVersioningRequest <a name="aws-cdk-sdk.s3.S3PutBucketVersioningRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutBucketVersioningRequest: s3.S3PutBucketVersioningRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketVersioningRequest.property.bucket"></a>

- *Type:* `string`

---

##### `versioningConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketVersioningRequest.property.versioningConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3VersioningConfiguration`](#aws-cdk-sdk.s3.S3VersioningConfiguration)

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketVersioningRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketVersioningRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `mfa`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketVersioningRequest.property.mfa"></a>

- *Type:* `string`

---

### S3PutBucketWebsiteRequest <a name="aws-cdk-sdk.s3.S3PutBucketWebsiteRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutBucketWebsiteRequest: s3.S3PutBucketWebsiteRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketWebsiteRequest.property.bucket"></a>

- *Type:* `string`

---

##### `websiteConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutBucketWebsiteRequest.property.websiteConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3WebsiteConfiguration`](#aws-cdk-sdk.s3.S3WebsiteConfiguration)

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketWebsiteRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutBucketWebsiteRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutObjectAclOutput <a name="aws-cdk-sdk.s3.S3PutObjectAclOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutObjectAclOutput: s3.S3PutObjectAclOutput = { ... }
```

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectAclOutput.property.requestCharged"></a>

- *Type:* `string`

---

### S3PutObjectAclRequest <a name="aws-cdk-sdk.s3.S3PutObjectAclRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutObjectAclRequest: s3.S3PutObjectAclRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutObjectAclRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutObjectAclRequest.property.key"></a>

- *Type:* `string`

---

##### `accessControlPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectAclRequest.property.accessControlPolicy"></a>

- *Type:* [`aws-cdk-sdk.s3.S3AccessControlPolicy`](#aws-cdk-sdk.s3.S3AccessControlPolicy)

---

##### `acl`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectAclRequest.property.acl"></a>

- *Type:* `string`

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectAclRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectAclRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `grantFullControl`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectAclRequest.property.grantFullControl"></a>

- *Type:* `string`

---

##### `grantRead`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectAclRequest.property.grantRead"></a>

- *Type:* `string`

---

##### `grantReadAcp`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectAclRequest.property.grantReadAcp"></a>

- *Type:* `string`

---

##### `grantWrite`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectAclRequest.property.grantWrite"></a>

- *Type:* `string`

---

##### `grantWriteAcp`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectAclRequest.property.grantWriteAcp"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectAclRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectAclRequest.property.versionId"></a>

- *Type:* `string`

---

### S3PutObjectLegalHoldOutput <a name="aws-cdk-sdk.s3.S3PutObjectLegalHoldOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutObjectLegalHoldOutput: s3.S3PutObjectLegalHoldOutput = { ... }
```

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectLegalHoldOutput.property.requestCharged"></a>

- *Type:* `string`

---

### S3PutObjectLegalHoldRequest <a name="aws-cdk-sdk.s3.S3PutObjectLegalHoldRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutObjectLegalHoldRequest: s3.S3PutObjectLegalHoldRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutObjectLegalHoldRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutObjectLegalHoldRequest.property.key"></a>

- *Type:* `string`

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectLegalHoldRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectLegalHoldRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `legalHold`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectLegalHoldRequest.property.legalHold"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ObjectLockLegalHold`](#aws-cdk-sdk.s3.S3ObjectLockLegalHold)

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectLegalHoldRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectLegalHoldRequest.property.versionId"></a>

- *Type:* `string`

---

### S3PutObjectLockConfigurationOutput <a name="aws-cdk-sdk.s3.S3PutObjectLockConfigurationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutObjectLockConfigurationOutput: s3.S3PutObjectLockConfigurationOutput = { ... }
```

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectLockConfigurationOutput.property.requestCharged"></a>

- *Type:* `string`

---

### S3PutObjectLockConfigurationRequest <a name="aws-cdk-sdk.s3.S3PutObjectLockConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutObjectLockConfigurationRequest: s3.S3PutObjectLockConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutObjectLockConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectLockConfigurationRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectLockConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `objectLockConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectLockConfigurationRequest.property.objectLockConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ObjectLockConfiguration`](#aws-cdk-sdk.s3.S3ObjectLockConfiguration)

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectLockConfigurationRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `token`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectLockConfigurationRequest.property.token"></a>

- *Type:* `string`

---

### S3PutObjectOutput <a name="aws-cdk-sdk.s3.S3PutObjectOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutObjectOutput: s3.S3PutObjectOutput = { ... }
```

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectOutput.property.eTag"></a>

- *Type:* `string`

---

##### `expiration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectOutput.property.expiration"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectOutput.property.requestCharged"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectOutput.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectOutput.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectOutput.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsEncryptionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectOutput.property.ssekmsEncryptionContext"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectOutput.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectOutput.property.versionId"></a>

- *Type:* `string`

---

### S3PutObjectRequest <a name="aws-cdk-sdk.s3.S3PutObjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutObjectRequest: s3.S3PutObjectRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.key"></a>

- *Type:* `string`

---

##### `acl`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.acl"></a>

- *Type:* `string`

---

##### `body`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.body"></a>

- *Type:* `any`

---

##### `cacheControl`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.cacheControl"></a>

- *Type:* `string`

---

##### `contentDisposition`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.contentDisposition"></a>

- *Type:* `string`

---

##### `contentEncoding`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.contentEncoding"></a>

- *Type:* `string`

---

##### `contentLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.contentLanguage"></a>

- *Type:* `string`

---

##### `contentLength`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.contentLength"></a>

- *Type:* `number`

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.contentType"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `expires`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.expires"></a>

- *Type:* `string`

---

##### `grantFullControl`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.grantFullControl"></a>

- *Type:* `string`

---

##### `grantRead`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.grantRead"></a>

- *Type:* `string`

---

##### `grantReadAcp`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.grantReadAcp"></a>

- *Type:* `string`

---

##### `grantWriteAcp`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.grantWriteAcp"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.metadata"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `objectLockLegalHoldStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.objectLockLegalHoldStatus"></a>

- *Type:* `string`

---

##### `objectLockMode`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.objectLockMode"></a>

- *Type:* `string`

---

##### `objectLockRetainUntilDate`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.objectLockRetainUntilDate"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKey`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.sseCustomerKey"></a>

- *Type:* `any`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsEncryptionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.ssekmsEncryptionContext"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.storageClass"></a>

- *Type:* `string`

---

##### `tagging`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.tagging"></a>

- *Type:* `string`

---

##### `websiteRedirectLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRequest.property.websiteRedirectLocation"></a>

- *Type:* `string`

---

### S3PutObjectRetentionOutput <a name="aws-cdk-sdk.s3.S3PutObjectRetentionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutObjectRetentionOutput: s3.S3PutObjectRetentionOutput = { ... }
```

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRetentionOutput.property.requestCharged"></a>

- *Type:* `string`

---

### S3PutObjectRetentionRequest <a name="aws-cdk-sdk.s3.S3PutObjectRetentionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutObjectRetentionRequest: s3.S3PutObjectRetentionRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRetentionRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRetentionRequest.property.key"></a>

- *Type:* `string`

---

##### `bypassGovernanceRetention`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRetentionRequest.property.bypassGovernanceRetention"></a>

- *Type:* `boolean`

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRetentionRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRetentionRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRetentionRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `retention`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRetentionRequest.property.retention"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ObjectLockRetention`](#aws-cdk-sdk.s3.S3ObjectLockRetention)

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectRetentionRequest.property.versionId"></a>

- *Type:* `string`

---

### S3PutObjectTaggingOutput <a name="aws-cdk-sdk.s3.S3PutObjectTaggingOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutObjectTaggingOutput: s3.S3PutObjectTaggingOutput = { ... }
```

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectTaggingOutput.property.versionId"></a>

- *Type:* `string`

---

### S3PutObjectTaggingRequest <a name="aws-cdk-sdk.s3.S3PutObjectTaggingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutObjectTaggingRequest: s3.S3PutObjectTaggingRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutObjectTaggingRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutObjectTaggingRequest.property.key"></a>

- *Type:* `string`

---

##### `tagging`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutObjectTaggingRequest.property.tagging"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Tagging`](#aws-cdk-sdk.s3.S3Tagging)

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectTaggingRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectTaggingRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutObjectTaggingRequest.property.versionId"></a>

- *Type:* `string`

---

### S3PutPublicAccessBlockRequest <a name="aws-cdk-sdk.s3.S3PutPublicAccessBlockRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3PutPublicAccessBlockRequest: s3.S3PutPublicAccessBlockRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutPublicAccessBlockRequest.property.bucket"></a>

- *Type:* `string`

---

##### `publicAccessBlockConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3PutPublicAccessBlockRequest.property.publicAccessBlockConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PublicAccessBlockConfiguration`](#aws-cdk-sdk.s3.S3PublicAccessBlockConfiguration)

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutPublicAccessBlockRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3PutPublicAccessBlockRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3QueueConfiguration <a name="aws-cdk-sdk.s3.S3QueueConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3QueueConfiguration: s3.S3QueueConfiguration = { ... }
```

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3QueueConfiguration.property.events"></a>

- *Type:* `string`[]

---

##### `queueArn`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3QueueConfiguration.property.queueArn"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3QueueConfiguration.property.filter"></a>

- *Type:* [`aws-cdk-sdk.s3.S3NotificationConfigurationFilter`](#aws-cdk-sdk.s3.S3NotificationConfigurationFilter)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3QueueConfiguration.property.id"></a>

- *Type:* `string`

---

### S3QueueConfigurationDeprecated <a name="aws-cdk-sdk.s3.S3QueueConfigurationDeprecated"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3QueueConfigurationDeprecated: s3.S3QueueConfigurationDeprecated = { ... }
```

##### `event`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3QueueConfigurationDeprecated.property.event"></a>

- *Type:* `string`

---

##### `events`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3QueueConfigurationDeprecated.property.events"></a>

- *Type:* `string`[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3QueueConfigurationDeprecated.property.id"></a>

- *Type:* `string`

---

##### `queue`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3QueueConfigurationDeprecated.property.queue"></a>

- *Type:* `string`

---

### S3RecordsEvent <a name="aws-cdk-sdk.s3.S3RecordsEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3RecordsEvent: s3.S3RecordsEvent = { ... }
```

##### `payload`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3RecordsEvent.property.payload"></a>

- *Type:* `any`

---

### S3Redirect <a name="aws-cdk-sdk.s3.S3Redirect"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3Redirect: s3.S3Redirect = { ... }
```

##### `hostName`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Redirect.property.hostName"></a>

- *Type:* `string`

---

##### `httpRedirectCode`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Redirect.property.httpRedirectCode"></a>

- *Type:* `string`

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Redirect.property.protocol"></a>

- *Type:* `string`

---

##### `replaceKeyPrefixWith`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Redirect.property.replaceKeyPrefixWith"></a>

- *Type:* `string`

---

##### `replaceKeyWith`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Redirect.property.replaceKeyWith"></a>

- *Type:* `string`

---

### S3RedirectAllRequestsTo <a name="aws-cdk-sdk.s3.S3RedirectAllRequestsTo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3RedirectAllRequestsTo: s3.S3RedirectAllRequestsTo = { ... }
```

##### `hostName`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3RedirectAllRequestsTo.property.hostName"></a>

- *Type:* `string`

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3RedirectAllRequestsTo.property.protocol"></a>

- *Type:* `string`

---

### S3ReplicationConfiguration <a name="aws-cdk-sdk.s3.S3ReplicationConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ReplicationConfiguration: s3.S3ReplicationConfiguration = { ... }
```

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ReplicationConfiguration.property.role"></a>

- *Type:* `string`

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ReplicationConfiguration.property.rules"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ReplicationRule`](#aws-cdk-sdk.s3.S3ReplicationRule)[]

---

### S3ReplicationRule <a name="aws-cdk-sdk.s3.S3ReplicationRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ReplicationRule: s3.S3ReplicationRule = { ... }
```

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ReplicationRule.property.destination"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Destination`](#aws-cdk-sdk.s3.S3Destination)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ReplicationRule.property.status"></a>

- *Type:* `string`

---

##### `deleteMarkerReplication`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ReplicationRule.property.deleteMarkerReplication"></a>

- *Type:* [`aws-cdk-sdk.s3.S3DeleteMarkerReplication`](#aws-cdk-sdk.s3.S3DeleteMarkerReplication)

---

##### `existingObjectReplication`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ReplicationRule.property.existingObjectReplication"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ExistingObjectReplication`](#aws-cdk-sdk.s3.S3ExistingObjectReplication)

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ReplicationRule.property.filter"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ReplicationRuleFilter`](#aws-cdk-sdk.s3.S3ReplicationRuleFilter)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ReplicationRule.property.id"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ReplicationRule.property.prefix"></a>

- *Type:* `string`

---

##### `priority`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ReplicationRule.property.priority"></a>

- *Type:* `number`

---

##### `sourceSelectionCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ReplicationRule.property.sourceSelectionCriteria"></a>

- *Type:* [`aws-cdk-sdk.s3.S3SourceSelectionCriteria`](#aws-cdk-sdk.s3.S3SourceSelectionCriteria)

---

### S3ReplicationRuleAndOperator <a name="aws-cdk-sdk.s3.S3ReplicationRuleAndOperator"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ReplicationRuleAndOperator: s3.S3ReplicationRuleAndOperator = { ... }
```

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ReplicationRuleAndOperator.property.prefix"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ReplicationRuleAndOperator.property.tags"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Tag`](#aws-cdk-sdk.s3.S3Tag)[]

---

### S3ReplicationRuleFilter <a name="aws-cdk-sdk.s3.S3ReplicationRuleFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ReplicationRuleFilter: s3.S3ReplicationRuleFilter = { ... }
```

##### `and`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ReplicationRuleFilter.property.and"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ReplicationRuleAndOperator`](#aws-cdk-sdk.s3.S3ReplicationRuleAndOperator)

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ReplicationRuleFilter.property.prefix"></a>

- *Type:* `string`

---

##### `tag`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ReplicationRuleFilter.property.tag"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Tag`](#aws-cdk-sdk.s3.S3Tag)

---

### S3ReplicationTime <a name="aws-cdk-sdk.s3.S3ReplicationTime"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ReplicationTime: s3.S3ReplicationTime = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ReplicationTime.property.status"></a>

- *Type:* `string`

---

##### `time`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ReplicationTime.property.time"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ReplicationTimeValue`](#aws-cdk-sdk.s3.S3ReplicationTimeValue)

---

### S3ReplicationTimeValue <a name="aws-cdk-sdk.s3.S3ReplicationTimeValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ReplicationTimeValue: s3.S3ReplicationTimeValue = { ... }
```

##### `minutes`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ReplicationTimeValue.property.minutes"></a>

- *Type:* `number`

---

### S3RequestPaymentConfiguration <a name="aws-cdk-sdk.s3.S3RequestPaymentConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3RequestPaymentConfiguration: s3.S3RequestPaymentConfiguration = { ... }
```

##### `payer`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3RequestPaymentConfiguration.property.payer"></a>

- *Type:* `string`

---

### S3RequestProgress <a name="aws-cdk-sdk.s3.S3RequestProgress"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3RequestProgress: s3.S3RequestProgress = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3RequestProgress.property.enabled"></a>

- *Type:* `boolean`

---

### S3RestoreObjectOutput <a name="aws-cdk-sdk.s3.S3RestoreObjectOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3RestoreObjectOutput: s3.S3RestoreObjectOutput = { ... }
```

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3RestoreObjectOutput.property.requestCharged"></a>

- *Type:* `string`

---

##### `restoreOutputPath`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3RestoreObjectOutput.property.restoreOutputPath"></a>

- *Type:* `string`

---

### S3RestoreObjectRequest <a name="aws-cdk-sdk.s3.S3RestoreObjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3RestoreObjectRequest: s3.S3RestoreObjectRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3RestoreObjectRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3RestoreObjectRequest.property.key"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3RestoreObjectRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3RestoreObjectRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `restoreRequest`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3RestoreObjectRequest.property.restoreRequest"></a>

- *Type:* [`aws-cdk-sdk.s3.S3RestoreRequest`](#aws-cdk-sdk.s3.S3RestoreRequest)

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3RestoreObjectRequest.property.versionId"></a>

- *Type:* `string`

---

### S3RestoreRequest <a name="aws-cdk-sdk.s3.S3RestoreRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3RestoreRequest: s3.S3RestoreRequest = { ... }
```

##### `days`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3RestoreRequest.property.days"></a>

- *Type:* `number`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3RestoreRequest.property.description"></a>

- *Type:* `string`

---

##### `glacierJobParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3RestoreRequest.property.glacierJobParameters"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GlacierJobParameters`](#aws-cdk-sdk.s3.S3GlacierJobParameters)

---

##### `outputLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3RestoreRequest.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.s3.S3OutputLocation`](#aws-cdk-sdk.s3.S3OutputLocation)

---

##### `selectParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3RestoreRequest.property.selectParameters"></a>

- *Type:* [`aws-cdk-sdk.s3.S3SelectParameters`](#aws-cdk-sdk.s3.S3SelectParameters)

---

##### `tier`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3RestoreRequest.property.tier"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3RestoreRequest.property.type"></a>

- *Type:* `string`

---

### S3RoutingRule <a name="aws-cdk-sdk.s3.S3RoutingRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3RoutingRule: s3.S3RoutingRule = { ... }
```

##### `redirect`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3RoutingRule.property.redirect"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Redirect`](#aws-cdk-sdk.s3.S3Redirect)

---

##### `condition`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3RoutingRule.property.condition"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Condition`](#aws-cdk-sdk.s3.S3Condition)

---

### S3Rule <a name="aws-cdk-sdk.s3.S3Rule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3Rule: s3.S3Rule = { ... }
```

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Rule.property.prefix"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Rule.property.status"></a>

- *Type:* `string`

---

##### `abortIncompleteMultipartUpload`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Rule.property.abortIncompleteMultipartUpload"></a>

- *Type:* [`aws-cdk-sdk.s3.S3AbortIncompleteMultipartUpload`](#aws-cdk-sdk.s3.S3AbortIncompleteMultipartUpload)

---

##### `expiration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Rule.property.expiration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3LifecycleExpiration`](#aws-cdk-sdk.s3.S3LifecycleExpiration)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Rule.property.id"></a>

- *Type:* `string`

---

##### `noncurrentVersionExpiration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Rule.property.noncurrentVersionExpiration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3NoncurrentVersionExpiration`](#aws-cdk-sdk.s3.S3NoncurrentVersionExpiration)

---

##### `noncurrentVersionTransition`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Rule.property.noncurrentVersionTransition"></a>

- *Type:* [`aws-cdk-sdk.s3.S3NoncurrentVersionTransition`](#aws-cdk-sdk.s3.S3NoncurrentVersionTransition)

---

##### `transition`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Rule.property.transition"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Transition`](#aws-cdk-sdk.s3.S3Transition)

---

### S3S3KeyFilter <a name="aws-cdk-sdk.s3.S3S3KeyFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3S3KeyFilter: s3.S3S3KeyFilter = { ... }
```

##### `filterRules`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3S3KeyFilter.property.filterRules"></a>

- *Type:* [`aws-cdk-sdk.s3.S3FilterRule`](#aws-cdk-sdk.s3.S3FilterRule)[]

---

### S3S3Location <a name="aws-cdk-sdk.s3.S3S3Location"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3S3Location: s3.S3S3Location = { ... }
```

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3S3Location.property.bucketName"></a>

- *Type:* `string`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3S3Location.property.prefix"></a>

- *Type:* `string`

---

##### `accessControlList`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3S3Location.property.accessControlList"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Grant`](#aws-cdk-sdk.s3.S3Grant)[]

---

##### `cannedAcl`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3S3Location.property.cannedAcl"></a>

- *Type:* `string`

---

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3S3Location.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Encryption`](#aws-cdk-sdk.s3.S3Encryption)

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3S3Location.property.storageClass"></a>

- *Type:* `string`

---

##### `tagging`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3S3Location.property.tagging"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Tagging`](#aws-cdk-sdk.s3.S3Tagging)

---

##### `userMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3S3Location.property.userMetadata"></a>

- *Type:* [`aws-cdk-sdk.s3.S3MetadataEntry`](#aws-cdk-sdk.s3.S3MetadataEntry)[]

---

### S3ScanRange <a name="aws-cdk-sdk.s3.S3ScanRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ScanRange: s3.S3ScanRange = { ... }
```

##### `end`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ScanRange.property.end"></a>

- *Type:* `number`

---

##### `start`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ScanRange.property.start"></a>

- *Type:* `number`

---

### S3SelectObjectContentEventStream <a name="aws-cdk-sdk.s3.S3SelectObjectContentEventStream"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3SelectObjectContentEventStream: s3.S3SelectObjectContentEventStream = { ... }
```

##### `cont`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3SelectObjectContentEventStream.property.cont"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ContinuationEvent`](#aws-cdk-sdk.s3.S3ContinuationEvent)

---

##### `end`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3SelectObjectContentEventStream.property.end"></a>

- *Type:* [`aws-cdk-sdk.s3.S3EndEvent`](#aws-cdk-sdk.s3.S3EndEvent)

---

##### `progress`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3SelectObjectContentEventStream.property.progress"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ProgressEvent`](#aws-cdk-sdk.s3.S3ProgressEvent)

---

##### `records`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3SelectObjectContentEventStream.property.records"></a>

- *Type:* [`aws-cdk-sdk.s3.S3RecordsEvent`](#aws-cdk-sdk.s3.S3RecordsEvent)

---

##### `stats`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3SelectObjectContentEventStream.property.stats"></a>

- *Type:* [`aws-cdk-sdk.s3.S3StatsEvent`](#aws-cdk-sdk.s3.S3StatsEvent)

---

### S3SelectObjectContentOutput <a name="aws-cdk-sdk.s3.S3SelectObjectContentOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3SelectObjectContentOutput: s3.S3SelectObjectContentOutput = { ... }
```

##### `payload`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3SelectObjectContentOutput.property.payload"></a>

- *Type:* [`aws-cdk-sdk.s3.S3SelectObjectContentEventStream`](#aws-cdk-sdk.s3.S3SelectObjectContentEventStream)

---

### S3SelectObjectContentRequest <a name="aws-cdk-sdk.s3.S3SelectObjectContentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3SelectObjectContentRequest: s3.S3SelectObjectContentRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3SelectObjectContentRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expression`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3SelectObjectContentRequest.property.expression"></a>

- *Type:* `string`

---

##### `expressionType`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3SelectObjectContentRequest.property.expressionType"></a>

- *Type:* `string`

---

##### `inputSerialization`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3SelectObjectContentRequest.property.inputSerialization"></a>

- *Type:* [`aws-cdk-sdk.s3.S3InputSerialization`](#aws-cdk-sdk.s3.S3InputSerialization)

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3SelectObjectContentRequest.property.key"></a>

- *Type:* `string`

---

##### `outputSerialization`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3SelectObjectContentRequest.property.outputSerialization"></a>

- *Type:* [`aws-cdk-sdk.s3.S3OutputSerialization`](#aws-cdk-sdk.s3.S3OutputSerialization)

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3SelectObjectContentRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `requestProgress`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3SelectObjectContentRequest.property.requestProgress"></a>

- *Type:* [`aws-cdk-sdk.s3.S3RequestProgress`](#aws-cdk-sdk.s3.S3RequestProgress)

---

##### `scanRange`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3SelectObjectContentRequest.property.scanRange"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ScanRange`](#aws-cdk-sdk.s3.S3ScanRange)

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3SelectObjectContentRequest.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKey`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3SelectObjectContentRequest.property.sseCustomerKey"></a>

- *Type:* `any`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3SelectObjectContentRequest.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

### S3SelectParameters <a name="aws-cdk-sdk.s3.S3SelectParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3SelectParameters: s3.S3SelectParameters = { ... }
```

##### `expression`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3SelectParameters.property.expression"></a>

- *Type:* `string`

---

##### `expressionType`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3SelectParameters.property.expressionType"></a>

- *Type:* `string`

---

##### `inputSerialization`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3SelectParameters.property.inputSerialization"></a>

- *Type:* [`aws-cdk-sdk.s3.S3InputSerialization`](#aws-cdk-sdk.s3.S3InputSerialization)

---

##### `outputSerialization`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3SelectParameters.property.outputSerialization"></a>

- *Type:* [`aws-cdk-sdk.s3.S3OutputSerialization`](#aws-cdk-sdk.s3.S3OutputSerialization)

---

### S3ServerSideEncryptionByDefault <a name="aws-cdk-sdk.s3.S3ServerSideEncryptionByDefault"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ServerSideEncryptionByDefault: s3.S3ServerSideEncryptionByDefault = { ... }
```

##### `sseAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ServerSideEncryptionByDefault.property.sseAlgorithm"></a>

- *Type:* `string`

---

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ServerSideEncryptionByDefault.property.kmsMasterKeyId"></a>

- *Type:* `string`

---

### S3ServerSideEncryptionConfiguration <a name="aws-cdk-sdk.s3.S3ServerSideEncryptionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ServerSideEncryptionConfiguration: s3.S3ServerSideEncryptionConfiguration = { ... }
```

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ServerSideEncryptionConfiguration.property.rules"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ServerSideEncryptionRule`](#aws-cdk-sdk.s3.S3ServerSideEncryptionRule)[]

---

### S3ServerSideEncryptionRule <a name="aws-cdk-sdk.s3.S3ServerSideEncryptionRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3ServerSideEncryptionRule: s3.S3ServerSideEncryptionRule = { ... }
```

##### `applyServerSideEncryptionByDefault`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3ServerSideEncryptionRule.property.applyServerSideEncryptionByDefault"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ServerSideEncryptionByDefault`](#aws-cdk-sdk.s3.S3ServerSideEncryptionByDefault)

---

### S3SourceSelectionCriteria <a name="aws-cdk-sdk.s3.S3SourceSelectionCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3SourceSelectionCriteria: s3.S3SourceSelectionCriteria = { ... }
```

##### `sseKmsEncryptedObjects`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3SourceSelectionCriteria.property.sseKmsEncryptedObjects"></a>

- *Type:* [`aws-cdk-sdk.s3.S3SseKmsEncryptedObjects`](#aws-cdk-sdk.s3.S3SseKmsEncryptedObjects)

---

### S3Ssekms <a name="aws-cdk-sdk.s3.S3Ssekms"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3Ssekms: s3.S3Ssekms = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Ssekms.property.keyId"></a>

- *Type:* `string`

---

### S3SseKmsEncryptedObjects <a name="aws-cdk-sdk.s3.S3SseKmsEncryptedObjects"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3SseKmsEncryptedObjects: s3.S3SseKmsEncryptedObjects = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3SseKmsEncryptedObjects.property.status"></a>

- *Type:* `string`

---

### S3Sses3 <a name="aws-cdk-sdk.s3.S3Sses3"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3Sses3: s3.S3Sses3 = { ... }
```

### S3Stats <a name="aws-cdk-sdk.s3.S3Stats"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3Stats: s3.S3Stats = { ... }
```

##### `bytesProcessed`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Stats.property.bytesProcessed"></a>

- *Type:* `number`

---

##### `bytesReturned`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Stats.property.bytesReturned"></a>

- *Type:* `number`

---

##### `bytesScanned`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Stats.property.bytesScanned"></a>

- *Type:* `number`

---

### S3StatsEvent <a name="aws-cdk-sdk.s3.S3StatsEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3StatsEvent: s3.S3StatsEvent = { ... }
```

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3StatsEvent.property.details"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Stats`](#aws-cdk-sdk.s3.S3Stats)

---

### S3StorageClassAnalysis <a name="aws-cdk-sdk.s3.S3StorageClassAnalysis"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3StorageClassAnalysis: s3.S3StorageClassAnalysis = { ... }
```

##### `dataExport`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3StorageClassAnalysis.property.dataExport"></a>

- *Type:* [`aws-cdk-sdk.s3.S3StorageClassAnalysisDataExport`](#aws-cdk-sdk.s3.S3StorageClassAnalysisDataExport)

---

### S3StorageClassAnalysisDataExport <a name="aws-cdk-sdk.s3.S3StorageClassAnalysisDataExport"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3StorageClassAnalysisDataExport: s3.S3StorageClassAnalysisDataExport = { ... }
```

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3StorageClassAnalysisDataExport.property.destination"></a>

- *Type:* [`aws-cdk-sdk.s3.S3AnalyticsExportDestination`](#aws-cdk-sdk.s3.S3AnalyticsExportDestination)

---

##### `outputSchemaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3StorageClassAnalysisDataExport.property.outputSchemaVersion"></a>

- *Type:* `string`

---

### S3Tag <a name="aws-cdk-sdk.s3.S3Tag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3Tag: s3.S3Tag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Tag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Tag.property.value"></a>

- *Type:* `string`

---

### S3Tagging <a name="aws-cdk-sdk.s3.S3Tagging"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3Tagging: s3.S3Tagging = { ... }
```

##### `tagSet`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Tagging.property.tagSet"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Tag`](#aws-cdk-sdk.s3.S3Tag)[]

---

### S3TargetGrant <a name="aws-cdk-sdk.s3.S3TargetGrant"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3TargetGrant: s3.S3TargetGrant = { ... }
```

##### `grantee`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3TargetGrant.property.grantee"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Grantee`](#aws-cdk-sdk.s3.S3Grantee)

---

##### `permission`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3TargetGrant.property.permission"></a>

- *Type:* `string`

---

### S3Tiering <a name="aws-cdk-sdk.s3.S3Tiering"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3Tiering: s3.S3Tiering = { ... }
```

##### `accessTier`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Tiering.property.accessTier"></a>

- *Type:* `string`

---

##### `days`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3Tiering.property.days"></a>

- *Type:* `number`

---

### S3TopicConfiguration <a name="aws-cdk-sdk.s3.S3TopicConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3TopicConfiguration: s3.S3TopicConfiguration = { ... }
```

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3TopicConfiguration.property.events"></a>

- *Type:* `string`[]

---

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3TopicConfiguration.property.topicArn"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3TopicConfiguration.property.filter"></a>

- *Type:* [`aws-cdk-sdk.s3.S3NotificationConfigurationFilter`](#aws-cdk-sdk.s3.S3NotificationConfigurationFilter)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3TopicConfiguration.property.id"></a>

- *Type:* `string`

---

### S3TopicConfigurationDeprecated <a name="aws-cdk-sdk.s3.S3TopicConfigurationDeprecated"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3TopicConfigurationDeprecated: s3.S3TopicConfigurationDeprecated = { ... }
```

##### `event`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3TopicConfigurationDeprecated.property.event"></a>

- *Type:* `string`

---

##### `events`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3TopicConfigurationDeprecated.property.events"></a>

- *Type:* `string`[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3TopicConfigurationDeprecated.property.id"></a>

- *Type:* `string`

---

##### `topic`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3TopicConfigurationDeprecated.property.topic"></a>

- *Type:* `string`

---

### S3Transition <a name="aws-cdk-sdk.s3.S3Transition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3Transition: s3.S3Transition = { ... }
```

##### `date`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Transition.property.date"></a>

- *Type:* `string`

---

##### `days`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Transition.property.days"></a>

- *Type:* `number`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3Transition.property.storageClass"></a>

- *Type:* `string`

---

### S3UploadPartCopyOutput <a name="aws-cdk-sdk.s3.S3UploadPartCopyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3UploadPartCopyOutput: s3.S3UploadPartCopyOutput = { ... }
```

##### `copyPartResult`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartCopyOutput.property.copyPartResult"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CopyPartResult`](#aws-cdk-sdk.s3.S3CopyPartResult)

---

##### `copySourceVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartCopyOutput.property.copySourceVersionId"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartCopyOutput.property.requestCharged"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartCopyOutput.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartCopyOutput.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartCopyOutput.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartCopyOutput.property.ssekmsKeyId"></a>

- *Type:* `string`

---

### S3UploadPartCopyRequest <a name="aws-cdk-sdk.s3.S3UploadPartCopyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3UploadPartCopyRequest: s3.S3UploadPartCopyRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3UploadPartCopyRequest.property.bucket"></a>

- *Type:* `string`

---

##### `copySource`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3UploadPartCopyRequest.property.copySource"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3UploadPartCopyRequest.property.key"></a>

- *Type:* `string`

---

##### `partNumber`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3UploadPartCopyRequest.property.partNumber"></a>

- *Type:* `number`

---

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3UploadPartCopyRequest.property.uploadId"></a>

- *Type:* `string`

---

##### `copySourceIfMatch`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartCopyRequest.property.copySourceIfMatch"></a>

- *Type:* `string`

---

##### `copySourceIfModifiedSince`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartCopyRequest.property.copySourceIfModifiedSince"></a>

- *Type:* `string`

---

##### `copySourceIfNoneMatch`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartCopyRequest.property.copySourceIfNoneMatch"></a>

- *Type:* `string`

---

##### `copySourceIfUnmodifiedSince`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartCopyRequest.property.copySourceIfUnmodifiedSince"></a>

- *Type:* `string`

---

##### `copySourceRange`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartCopyRequest.property.copySourceRange"></a>

- *Type:* `string`

---

##### `copySourceSseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartCopyRequest.property.copySourceSseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `copySourceSseCustomerKey`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartCopyRequest.property.copySourceSseCustomerKey"></a>

- *Type:* `any`

---

##### `copySourceSseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartCopyRequest.property.copySourceSseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartCopyRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `expectedSourceBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartCopyRequest.property.expectedSourceBucketOwner"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartCopyRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartCopyRequest.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKey`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartCopyRequest.property.sseCustomerKey"></a>

- *Type:* `any`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartCopyRequest.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

### S3UploadPartOutput <a name="aws-cdk-sdk.s3.S3UploadPartOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3UploadPartOutput: s3.S3UploadPartOutput = { ... }
```

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartOutput.property.eTag"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartOutput.property.requestCharged"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartOutput.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartOutput.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartOutput.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartOutput.property.ssekmsKeyId"></a>

- *Type:* `string`

---

### S3UploadPartRequest <a name="aws-cdk-sdk.s3.S3UploadPartRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3UploadPartRequest: s3.S3UploadPartRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3UploadPartRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3UploadPartRequest.property.key"></a>

- *Type:* `string`

---

##### `partNumber`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3UploadPartRequest.property.partNumber"></a>

- *Type:* `number`

---

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3UploadPartRequest.property.uploadId"></a>

- *Type:* `string`

---

##### `body`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartRequest.property.body"></a>

- *Type:* `any`

---

##### `contentLength`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartRequest.property.contentLength"></a>

- *Type:* `number`

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartRequest.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKey`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartRequest.property.sseCustomerKey"></a>

- *Type:* `any`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3UploadPartRequest.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

### S3VersioningConfiguration <a name="aws-cdk-sdk.s3.S3VersioningConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3VersioningConfiguration: s3.S3VersioningConfiguration = { ... }
```

##### `mfaDelete`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3VersioningConfiguration.property.mfaDelete"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3VersioningConfiguration.property.status"></a>

- *Type:* `string`

---

### S3WebsiteConfiguration <a name="aws-cdk-sdk.s3.S3WebsiteConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

const s3WebsiteConfiguration: s3.S3WebsiteConfiguration = { ... }
```

##### `errorDocument`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3WebsiteConfiguration.property.errorDocument"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ErrorDocument`](#aws-cdk-sdk.s3.S3ErrorDocument)

---

##### `indexDocument`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3WebsiteConfiguration.property.indexDocument"></a>

- *Type:* [`aws-cdk-sdk.s3.S3IndexDocument`](#aws-cdk-sdk.s3.S3IndexDocument)

---

##### `redirectAllRequestsTo`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3WebsiteConfiguration.property.redirectAllRequestsTo"></a>

- *Type:* [`aws-cdk-sdk.s3.S3RedirectAllRequestsTo`](#aws-cdk-sdk.s3.S3RedirectAllRequestsTo)

---

##### `routingRules`<sup>Optional</sup> <a name="aws-cdk-sdk.s3.S3WebsiteConfiguration.property.routingRules"></a>

- *Type:* [`aws-cdk-sdk.s3.S3RoutingRule`](#aws-cdk-sdk.s3.S3RoutingRule)[]

---

## Classes <a name="Classes"></a>

### S3ResponsesAbortMultipartUpload <a name="aws-cdk-sdk.s3.S3ResponsesAbortMultipartUpload"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesAbortMultipartUpload.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesAbortMultipartUpload(__scope: Construct, __resources: string[], __input: S3AbortMultipartUploadRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesAbortMultipartUpload.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesAbortMultipartUpload.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesAbortMultipartUpload.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3AbortMultipartUploadRequest`](#aws-cdk-sdk.s3.S3AbortMultipartUploadRequest)

---



#### Properties <a name="Properties"></a>

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesAbortMultipartUpload.property.requestCharged"></a>

- *Type:* `string`

---


### S3ResponsesCompleteMultipartUpload <a name="aws-cdk-sdk.s3.S3ResponsesCompleteMultipartUpload"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesCompleteMultipartUpload.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesCompleteMultipartUpload(__scope: Construct, __resources: string[], __input: S3CompleteMultipartUploadRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCompleteMultipartUpload.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCompleteMultipartUpload.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCompleteMultipartUpload.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CompleteMultipartUploadRequest`](#aws-cdk-sdk.s3.S3CompleteMultipartUploadRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCompleteMultipartUpload.property.bucket"></a>

- *Type:* `string`

---

##### `eTag`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCompleteMultipartUpload.property.eTag"></a>

- *Type:* `string`

---

##### `expiration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCompleteMultipartUpload.property.expiration"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCompleteMultipartUpload.property.key"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCompleteMultipartUpload.property.location"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCompleteMultipartUpload.property.requestCharged"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCompleteMultipartUpload.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCompleteMultipartUpload.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCompleteMultipartUpload.property.versionId"></a>

- *Type:* `string`

---


### S3ResponsesCopyObject <a name="aws-cdk-sdk.s3.S3ResponsesCopyObject"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesCopyObject.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesCopyObject(__scope: Construct, __resources: string[], __input: S3CopyObjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCopyObject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCopyObject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCopyObject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CopyObjectRequest`](#aws-cdk-sdk.s3.S3CopyObjectRequest)

---



#### Properties <a name="Properties"></a>

##### `copyObjectResult`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCopyObject.property.copyObjectResult"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesCopyObjectCopyObjectResult`](#aws-cdk-sdk.s3.S3ResponsesCopyObjectCopyObjectResult)

---

##### `copySourceVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCopyObject.property.copySourceVersionId"></a>

- *Type:* `string`

---

##### `expiration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCopyObject.property.expiration"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCopyObject.property.requestCharged"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCopyObject.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCopyObject.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCopyObject.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsEncryptionContext`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCopyObject.property.ssekmsEncryptionContext"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCopyObject.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCopyObject.property.versionId"></a>

- *Type:* `string`

---


### S3ResponsesCopyObjectCopyObjectResult <a name="aws-cdk-sdk.s3.S3ResponsesCopyObjectCopyObjectResult"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesCopyObjectCopyObjectResult.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesCopyObjectCopyObjectResult(__scope: Construct, __resources: string[], __input: S3CopyObjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCopyObjectCopyObjectResult.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCopyObjectCopyObjectResult.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCopyObjectCopyObjectResult.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CopyObjectRequest`](#aws-cdk-sdk.s3.S3CopyObjectRequest)

---



#### Properties <a name="Properties"></a>

##### `eTag`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCopyObjectCopyObjectResult.property.eTag"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCopyObjectCopyObjectResult.property.lastModified"></a>

- *Type:* `string`

---


### S3ResponsesCreateBucket <a name="aws-cdk-sdk.s3.S3ResponsesCreateBucket"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesCreateBucket.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesCreateBucket(__scope: Construct, __resources: string[], __input: S3CreateBucketRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCreateBucket.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCreateBucket.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCreateBucket.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CreateBucketRequest`](#aws-cdk-sdk.s3.S3CreateBucketRequest)

---



#### Properties <a name="Properties"></a>

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCreateBucket.property.location"></a>

- *Type:* `string`

---


### S3ResponsesCreateMultipartUpload <a name="aws-cdk-sdk.s3.S3ResponsesCreateMultipartUpload"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesCreateMultipartUpload.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesCreateMultipartUpload(__scope: Construct, __resources: string[], __input: S3CreateMultipartUploadRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCreateMultipartUpload.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCreateMultipartUpload.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCreateMultipartUpload.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CreateMultipartUploadRequest`](#aws-cdk-sdk.s3.S3CreateMultipartUploadRequest)

---



#### Properties <a name="Properties"></a>

##### `abortDate`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCreateMultipartUpload.property.abortDate"></a>

- *Type:* `string`

---

##### `abortRuleId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCreateMultipartUpload.property.abortRuleId"></a>

- *Type:* `string`

---

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCreateMultipartUpload.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCreateMultipartUpload.property.key"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCreateMultipartUpload.property.requestCharged"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCreateMultipartUpload.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCreateMultipartUpload.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCreateMultipartUpload.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsEncryptionContext`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCreateMultipartUpload.property.ssekmsEncryptionContext"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCreateMultipartUpload.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesCreateMultipartUpload.property.uploadId"></a>

- *Type:* `string`

---


### S3ResponsesDeleteObject <a name="aws-cdk-sdk.s3.S3ResponsesDeleteObject"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesDeleteObject.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesDeleteObject(__scope: Construct, __resources: string[], __input: S3DeleteObjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesDeleteObject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesDeleteObject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesDeleteObject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3DeleteObjectRequest`](#aws-cdk-sdk.s3.S3DeleteObjectRequest)

---



#### Properties <a name="Properties"></a>

##### `deleteMarker`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesDeleteObject.property.deleteMarker"></a>

- *Type:* `boolean`

---

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesDeleteObject.property.requestCharged"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesDeleteObject.property.versionId"></a>

- *Type:* `string`

---


### S3ResponsesDeleteObjects <a name="aws-cdk-sdk.s3.S3ResponsesDeleteObjects"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesDeleteObjects.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesDeleteObjects(__scope: Construct, __resources: string[], __input: S3DeleteObjectsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesDeleteObjects.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesDeleteObjects.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesDeleteObjects.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3DeleteObjectsRequest`](#aws-cdk-sdk.s3.S3DeleteObjectsRequest)

---



#### Properties <a name="Properties"></a>

##### `deleted`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesDeleteObjects.property.deleted"></a>

- *Type:* [`aws-cdk-sdk.s3.S3DeletedObject`](#aws-cdk-sdk.s3.S3DeletedObject)[]

---

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesDeleteObjects.property.errors"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Error`](#aws-cdk-sdk.s3.S3Error)[]

---

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesDeleteObjects.property.requestCharged"></a>

- *Type:* `string`

---


### S3ResponsesDeleteObjectTagging <a name="aws-cdk-sdk.s3.S3ResponsesDeleteObjectTagging"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesDeleteObjectTagging.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesDeleteObjectTagging(__scope: Construct, __resources: string[], __input: S3DeleteObjectTaggingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesDeleteObjectTagging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesDeleteObjectTagging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesDeleteObjectTagging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3DeleteObjectTaggingRequest`](#aws-cdk-sdk.s3.S3DeleteObjectTaggingRequest)

---



#### Properties <a name="Properties"></a>

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesDeleteObjectTagging.property.versionId"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketAccelerateConfiguration <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAccelerateConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAccelerateConfiguration.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketAccelerateConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketAccelerateConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAccelerateConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAccelerateConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAccelerateConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketAccelerateConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketAccelerateConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAccelerateConfiguration.property.status"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketAcl <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAcl"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAcl.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketAcl(__scope: Construct, __resources: string[], __input: S3GetBucketAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAcl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAcl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAcl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketAclRequest`](#aws-cdk-sdk.s3.S3GetBucketAclRequest)

---



#### Properties <a name="Properties"></a>

##### `grants`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAcl.property.grants"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Grant`](#aws-cdk-sdk.s3.S3Grant)[]

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAcl.property.owner"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketAclOwner`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketAclOwner)

---


### S3ResponsesFetchBucketAclOwner <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAclOwner"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAclOwner.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketAclOwner(__scope: Construct, __resources: string[], __input: S3GetBucketAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAclOwner.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAclOwner.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAclOwner.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketAclRequest`](#aws-cdk-sdk.s3.S3GetBucketAclRequest)

---



#### Properties <a name="Properties"></a>

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAclOwner.property.displayName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAclOwner.property.id"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketAnalyticsConfiguration <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfiguration.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketAnalyticsConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketAnalyticsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketAnalyticsConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketAnalyticsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `analyticsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfiguration.property.analyticsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration)

---


### S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketAnalyticsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketAnalyticsConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketAnalyticsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `filter`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration.property.filter"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration.property.id"></a>

- *Type:* `string`

---

##### `storageClassAnalysis`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration.property.storageClassAnalysis"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysis`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysis)

---


### S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter(__scope: Construct, __resources: string[], __input: S3GetBucketAnalyticsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketAnalyticsConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketAnalyticsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `and`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter.property.and"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd)

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter.property.prefix"></a>

- *Type:* `string`

---

##### `tag`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter.property.tag"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag)

---


### S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd(__scope: Construct, __resources: string[], __input: S3GetBucketAnalyticsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketAnalyticsConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketAnalyticsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd.property.prefix"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd.property.tags"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Tag`](#aws-cdk-sdk.s3.S3Tag)[]

---


### S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag(__scope: Construct, __resources: string[], __input: S3GetBucketAnalyticsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketAnalyticsConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketAnalyticsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag.property.value"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysis <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysis"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysis.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysis(__scope: Construct, __resources: string[], __input: S3GetBucketAnalyticsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysis.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysis.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysis.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketAnalyticsConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketAnalyticsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `dataExport`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysis.property.dataExport"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport)

---


### S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport(__scope: Construct, __resources: string[], __input: S3GetBucketAnalyticsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketAnalyticsConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketAnalyticsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport.property.destination"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestination`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestination)

---

##### `outputSchemaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport.property.outputSchemaVersion"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestination <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestination"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestination.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestination(__scope: Construct, __resources: string[], __input: S3GetBucketAnalyticsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketAnalyticsConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketAnalyticsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `s3BucketDestination`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestination.property.s3BucketDestination"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination)

---


### S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination(__scope: Construct, __resources: string[], __input: S3GetBucketAnalyticsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketAnalyticsConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketAnalyticsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination.property.bucket"></a>

- *Type:* `string`

---

##### `bucketAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination.property.bucketAccountId"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination.property.format"></a>

- *Type:* `string`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination.property.prefix"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketCors <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketCors"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketCors.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketCors(__scope: Construct, __resources: string[], __input: S3GetBucketCorsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketCors.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketCors.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketCors.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketCorsRequest`](#aws-cdk-sdk.s3.S3GetBucketCorsRequest)

---



#### Properties <a name="Properties"></a>

##### `corsRules`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketCors.property.corsRules"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CorsRule`](#aws-cdk-sdk.s3.S3CorsRule)[]

---


### S3ResponsesFetchBucketEncryption <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketEncryption.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketEncryption(__scope: Construct, __resources: string[], __input: S3GetBucketEncryptionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketEncryptionRequest`](#aws-cdk-sdk.s3.S3GetBucketEncryptionRequest)

---



#### Properties <a name="Properties"></a>

##### `serverSideEncryptionConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketEncryption.property.serverSideEncryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketEncryptionServerSideEncryptionConfiguration`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketEncryptionServerSideEncryptionConfiguration)

---


### S3ResponsesFetchBucketEncryptionServerSideEncryptionConfiguration <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketEncryptionServerSideEncryptionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketEncryptionServerSideEncryptionConfiguration.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketEncryptionServerSideEncryptionConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketEncryptionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketEncryptionServerSideEncryptionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketEncryptionServerSideEncryptionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketEncryptionServerSideEncryptionConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketEncryptionRequest`](#aws-cdk-sdk.s3.S3GetBucketEncryptionRequest)

---



#### Properties <a name="Properties"></a>

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketEncryptionServerSideEncryptionConfiguration.property.rules"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ServerSideEncryptionRule`](#aws-cdk-sdk.s3.S3ServerSideEncryptionRule)[]

---


### S3ResponsesFetchBucketIntelligentTieringConfiguration <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfiguration.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketIntelligentTieringConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketIntelligentTieringConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketIntelligentTieringConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketIntelligentTieringConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `intelligentTieringConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfiguration.property.intelligentTieringConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration)

---


### S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketIntelligentTieringConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketIntelligentTieringConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketIntelligentTieringConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `filter`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration.property.filter"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration.property.id"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration.property.status"></a>

- *Type:* `string`

---

##### `tierings`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration.property.tierings"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Tiering`](#aws-cdk-sdk.s3.S3Tiering)[]

---


### S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter(__scope: Construct, __resources: string[], __input: S3GetBucketIntelligentTieringConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketIntelligentTieringConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketIntelligentTieringConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `and`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter.property.and"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd)

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter.property.prefix"></a>

- *Type:* `string`

---

##### `tag`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter.property.tag"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag)

---


### S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd(__scope: Construct, __resources: string[], __input: S3GetBucketIntelligentTieringConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketIntelligentTieringConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketIntelligentTieringConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd.property.prefix"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd.property.tags"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Tag`](#aws-cdk-sdk.s3.S3Tag)[]

---


### S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag(__scope: Construct, __resources: string[], __input: S3GetBucketIntelligentTieringConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketIntelligentTieringConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketIntelligentTieringConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag.property.value"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketInventoryConfiguration <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfiguration.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketInventoryConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketInventoryConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketInventoryConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketInventoryConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `inventoryConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfiguration.property.inventoryConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration)

---


### S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketInventoryConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketInventoryConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketInventoryConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration.property.destination"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestination`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestination)

---

##### `filter`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration.property.filter"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationFilter`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationFilter)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration.property.id"></a>

- *Type:* `string`

---

##### `includedObjectVersions`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration.property.includedObjectVersions"></a>

- *Type:* `string`

---

##### `isEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration.property.isEnabled"></a>

- *Type:* `boolean`

---

##### `optionalFields`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration.property.optionalFields"></a>

- *Type:* `string`[]

---

##### `schedule`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration.property.schedule"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationSchedule`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationSchedule)

---


### S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestination <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestination"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestination.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestination(__scope: Construct, __resources: string[], __input: S3GetBucketInventoryConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketInventoryConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketInventoryConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `s3BucketDestination`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestination.property.s3BucketDestination"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination)

---


### S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination(__scope: Construct, __resources: string[], __input: S3GetBucketInventoryConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketInventoryConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketInventoryConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination.property.accountId"></a>

- *Type:* `string`

---

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination.property.bucket"></a>

- *Type:* `string`

---

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption)

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination.property.format"></a>

- *Type:* `string`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination.property.prefix"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption(__scope: Construct, __resources: string[], __input: S3GetBucketInventoryConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketInventoryConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketInventoryConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `ssekms`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption.property.ssekms"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSsekms`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSsekms)

---

##### `sses3`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption.property.sses3"></a>

- *Type:* `any`

---


### S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSsekms <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSsekms"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSsekms.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSsekms(__scope: Construct, __resources: string[], __input: S3GetBucketInventoryConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSsekms.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSsekms.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSsekms.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketInventoryConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketInventoryConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSsekms.property.keyId"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationFilter <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationFilter"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationFilter.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationFilter(__scope: Construct, __resources: string[], __input: S3GetBucketInventoryConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationFilter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationFilter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationFilter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketInventoryConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketInventoryConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationFilter.property.prefix"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationSchedule <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationSchedule"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationSchedule.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationSchedule(__scope: Construct, __resources: string[], __input: S3GetBucketInventoryConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationSchedule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationSchedule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationSchedule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketInventoryConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketInventoryConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `frequency`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationSchedule.property.frequency"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketLifecycle <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLifecycle"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLifecycle.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketLifecycle(__scope: Construct, __resources: string[], __input: S3GetBucketLifecycleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLifecycle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLifecycle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLifecycle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketLifecycleRequest`](#aws-cdk-sdk.s3.S3GetBucketLifecycleRequest)

---



#### Properties <a name="Properties"></a>

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLifecycle.property.rules"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Rule`](#aws-cdk-sdk.s3.S3Rule)[]

---


### S3ResponsesFetchBucketLifecycleConfiguration <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLifecycleConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLifecycleConfiguration.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketLifecycleConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketLifecycleConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLifecycleConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLifecycleConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLifecycleConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketLifecycleConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketLifecycleConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLifecycleConfiguration.property.rules"></a>

- *Type:* [`aws-cdk-sdk.s3.S3LifecycleRule`](#aws-cdk-sdk.s3.S3LifecycleRule)[]

---


### S3ResponsesFetchBucketLocation <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLocation"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLocation.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketLocation(__scope: Construct, __resources: string[], __input: S3GetBucketLocationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketLocationRequest`](#aws-cdk-sdk.s3.S3GetBucketLocationRequest)

---



#### Properties <a name="Properties"></a>

##### `locationConstraint`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLocation.property.locationConstraint"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketLogging <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLogging"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLogging.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketLogging(__scope: Construct, __resources: string[], __input: S3GetBucketLoggingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLogging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLogging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLogging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketLoggingRequest`](#aws-cdk-sdk.s3.S3GetBucketLoggingRequest)

---



#### Properties <a name="Properties"></a>

##### `loggingEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLogging.property.loggingEnabled"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketLoggingLoggingEnabled`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketLoggingLoggingEnabled)

---


### S3ResponsesFetchBucketLoggingLoggingEnabled <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLoggingLoggingEnabled"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLoggingLoggingEnabled.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketLoggingLoggingEnabled(__scope: Construct, __resources: string[], __input: S3GetBucketLoggingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLoggingLoggingEnabled.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLoggingLoggingEnabled.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLoggingLoggingEnabled.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketLoggingRequest`](#aws-cdk-sdk.s3.S3GetBucketLoggingRequest)

---



#### Properties <a name="Properties"></a>

##### `targetBucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLoggingLoggingEnabled.property.targetBucket"></a>

- *Type:* `string`

---

##### `targetGrants`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLoggingLoggingEnabled.property.targetGrants"></a>

- *Type:* [`aws-cdk-sdk.s3.S3TargetGrant`](#aws-cdk-sdk.s3.S3TargetGrant)[]

---

##### `targetPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketLoggingLoggingEnabled.property.targetPrefix"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketMetricsConfiguration <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfiguration.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketMetricsConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketMetricsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketMetricsConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketMetricsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `metricsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfiguration.property.metricsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfiguration`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfiguration)

---


### S3ResponsesFetchBucketMetricsConfigurationMetricsConfiguration <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfiguration.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketMetricsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketMetricsConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketMetricsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `filter`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfiguration.property.filter"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfiguration.property.id"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter(__scope: Construct, __resources: string[], __input: S3GetBucketMetricsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketMetricsConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketMetricsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `and`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter.property.and"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterAnd`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterAnd)

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter.property.prefix"></a>

- *Type:* `string`

---

##### `tag`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter.property.tag"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterTag`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterTag)

---


### S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterAnd <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterAnd"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterAnd.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterAnd(__scope: Construct, __resources: string[], __input: S3GetBucketMetricsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterAnd.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterAnd.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterAnd.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketMetricsConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketMetricsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterAnd.property.prefix"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterAnd.property.tags"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Tag`](#aws-cdk-sdk.s3.S3Tag)[]

---


### S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterTag <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterTag"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterTag.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterTag(__scope: Construct, __resources: string[], __input: S3GetBucketMetricsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterTag.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterTag.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterTag.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketMetricsConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketMetricsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterTag.property.value"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketNotification <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotification"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotification.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketNotification(__scope: Construct, __resources: string[], __input: S3GetBucketNotificationConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketNotificationConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketNotificationConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudFunctionConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotification.property.cloudFunctionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationCloudFunctionConfiguration`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationCloudFunctionConfiguration)

---

##### `queueConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotification.property.queueConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationQueueConfiguration`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationQueueConfiguration)

---

##### `topicConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotification.property.topicConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationTopicConfiguration`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationTopicConfiguration)

---


### S3ResponsesFetchBucketNotificationCloudFunctionConfiguration <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationCloudFunctionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationCloudFunctionConfiguration.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketNotificationCloudFunctionConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketNotificationConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationCloudFunctionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationCloudFunctionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationCloudFunctionConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketNotificationConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketNotificationConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudFunction`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationCloudFunctionConfiguration.property.cloudFunction"></a>

- *Type:* `string`

---

##### `event`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationCloudFunctionConfiguration.property.event"></a>

- *Type:* `string`

---

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationCloudFunctionConfiguration.property.events"></a>

- *Type:* `string`[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationCloudFunctionConfiguration.property.id"></a>

- *Type:* `string`

---

##### `invocationRole`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationCloudFunctionConfiguration.property.invocationRole"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketNotificationConfiguration <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationConfiguration.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketNotificationConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketNotificationConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketNotificationConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketNotificationConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `lambdaFunctionConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationConfiguration.property.lambdaFunctionConfigurations"></a>

- *Type:* [`aws-cdk-sdk.s3.S3LambdaFunctionConfiguration`](#aws-cdk-sdk.s3.S3LambdaFunctionConfiguration)[]

---

##### `queueConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationConfiguration.property.queueConfigurations"></a>

- *Type:* [`aws-cdk-sdk.s3.S3QueueConfiguration`](#aws-cdk-sdk.s3.S3QueueConfiguration)[]

---

##### `topicConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationConfiguration.property.topicConfigurations"></a>

- *Type:* [`aws-cdk-sdk.s3.S3TopicConfiguration`](#aws-cdk-sdk.s3.S3TopicConfiguration)[]

---


### S3ResponsesFetchBucketNotificationQueueConfiguration <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationQueueConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationQueueConfiguration.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketNotificationQueueConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketNotificationConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationQueueConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationQueueConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationQueueConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketNotificationConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketNotificationConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `event`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationQueueConfiguration.property.event"></a>

- *Type:* `string`

---

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationQueueConfiguration.property.events"></a>

- *Type:* `string`[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationQueueConfiguration.property.id"></a>

- *Type:* `string`

---

##### `queue`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationQueueConfiguration.property.queue"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketNotificationTopicConfiguration <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationTopicConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationTopicConfiguration.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketNotificationTopicConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketNotificationConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationTopicConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationTopicConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationTopicConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketNotificationConfigurationRequest`](#aws-cdk-sdk.s3.S3GetBucketNotificationConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `event`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationTopicConfiguration.property.event"></a>

- *Type:* `string`

---

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationTopicConfiguration.property.events"></a>

- *Type:* `string`[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationTopicConfiguration.property.id"></a>

- *Type:* `string`

---

##### `topic`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketNotificationTopicConfiguration.property.topic"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketOwnershipControls <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketOwnershipControls"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketOwnershipControls.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketOwnershipControls(__scope: Construct, __resources: string[], __input: S3GetBucketOwnershipControlsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketOwnershipControls.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketOwnershipControls.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketOwnershipControls.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketOwnershipControlsRequest`](#aws-cdk-sdk.s3.S3GetBucketOwnershipControlsRequest)

---



#### Properties <a name="Properties"></a>

##### `ownershipControls`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketOwnershipControls.property.ownershipControls"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketOwnershipControlsOwnershipControls`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketOwnershipControlsOwnershipControls)

---


### S3ResponsesFetchBucketOwnershipControlsOwnershipControls <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketOwnershipControlsOwnershipControls"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketOwnershipControlsOwnershipControls.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketOwnershipControlsOwnershipControls(__scope: Construct, __resources: string[], __input: S3GetBucketOwnershipControlsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketOwnershipControlsOwnershipControls.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketOwnershipControlsOwnershipControls.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketOwnershipControlsOwnershipControls.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketOwnershipControlsRequest`](#aws-cdk-sdk.s3.S3GetBucketOwnershipControlsRequest)

---



#### Properties <a name="Properties"></a>

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketOwnershipControlsOwnershipControls.property.rules"></a>

- *Type:* [`aws-cdk-sdk.s3.S3OwnershipControlsRule`](#aws-cdk-sdk.s3.S3OwnershipControlsRule)[]

---


### S3ResponsesFetchBucketPolicy <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketPolicy.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketPolicy(__scope: Construct, __resources: string[], __input: S3GetBucketPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketPolicyRequest`](#aws-cdk-sdk.s3.S3GetBucketPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketPolicy.property.policy"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketPolicyStatus <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketPolicyStatus"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketPolicyStatus.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketPolicyStatus(__scope: Construct, __resources: string[], __input: S3GetBucketPolicyStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketPolicyStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketPolicyStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketPolicyStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketPolicyStatusRequest`](#aws-cdk-sdk.s3.S3GetBucketPolicyStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `policyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketPolicyStatus.property.policyStatus"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketPolicyStatusPolicyStatus`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketPolicyStatusPolicyStatus)

---


### S3ResponsesFetchBucketPolicyStatusPolicyStatus <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketPolicyStatusPolicyStatus"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketPolicyStatusPolicyStatus.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketPolicyStatusPolicyStatus(__scope: Construct, __resources: string[], __input: S3GetBucketPolicyStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketPolicyStatusPolicyStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketPolicyStatusPolicyStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketPolicyStatusPolicyStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketPolicyStatusRequest`](#aws-cdk-sdk.s3.S3GetBucketPolicyStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `isPublic`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketPolicyStatusPolicyStatus.property.isPublic"></a>

- *Type:* `boolean`

---


### S3ResponsesFetchBucketReplication <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketReplication"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketReplication.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketReplication(__scope: Construct, __resources: string[], __input: S3GetBucketReplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketReplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketReplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketReplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketReplicationRequest`](#aws-cdk-sdk.s3.S3GetBucketReplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `replicationConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketReplication.property.replicationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketReplicationReplicationConfiguration`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketReplicationReplicationConfiguration)

---


### S3ResponsesFetchBucketReplicationReplicationConfiguration <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketReplicationReplicationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketReplicationReplicationConfiguration.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketReplicationReplicationConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketReplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketReplicationReplicationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketReplicationReplicationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketReplicationReplicationConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketReplicationRequest`](#aws-cdk-sdk.s3.S3GetBucketReplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketReplicationReplicationConfiguration.property.role"></a>

- *Type:* `string`

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketReplicationReplicationConfiguration.property.rules"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ReplicationRule`](#aws-cdk-sdk.s3.S3ReplicationRule)[]

---


### S3ResponsesFetchBucketRequestPayment <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketRequestPayment"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketRequestPayment.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketRequestPayment(__scope: Construct, __resources: string[], __input: S3GetBucketRequestPaymentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketRequestPayment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketRequestPayment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketRequestPayment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketRequestPaymentRequest`](#aws-cdk-sdk.s3.S3GetBucketRequestPaymentRequest)

---



#### Properties <a name="Properties"></a>

##### `payer`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketRequestPayment.property.payer"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketTagging <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketTagging"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketTagging.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketTagging(__scope: Construct, __resources: string[], __input: S3GetBucketTaggingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketTagging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketTagging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketTagging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketTaggingRequest`](#aws-cdk-sdk.s3.S3GetBucketTaggingRequest)

---



#### Properties <a name="Properties"></a>

##### `tagSet`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketTagging.property.tagSet"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Tag`](#aws-cdk-sdk.s3.S3Tag)[]

---


### S3ResponsesFetchBucketVersioning <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketVersioning"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketVersioning.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketVersioning(__scope: Construct, __resources: string[], __input: S3GetBucketVersioningRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketVersioning.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketVersioning.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketVersioning.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketVersioningRequest`](#aws-cdk-sdk.s3.S3GetBucketVersioningRequest)

---



#### Properties <a name="Properties"></a>

##### `mfaDelete`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketVersioning.property.mfaDelete"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketVersioning.property.status"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketWebsite <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsite"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsite.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketWebsite(__scope: Construct, __resources: string[], __input: S3GetBucketWebsiteRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsite.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsite.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsite.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketWebsiteRequest`](#aws-cdk-sdk.s3.S3GetBucketWebsiteRequest)

---



#### Properties <a name="Properties"></a>

##### `errorDocument`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsite.property.errorDocument"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsiteErrorDocument`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsiteErrorDocument)

---

##### `indexDocument`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsite.property.indexDocument"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsiteIndexDocument`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsiteIndexDocument)

---

##### `redirectAllRequestsTo`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsite.property.redirectAllRequestsTo"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsiteRedirectAllRequestsTo`](#aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsiteRedirectAllRequestsTo)

---

##### `routingRules`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsite.property.routingRules"></a>

- *Type:* [`aws-cdk-sdk.s3.S3RoutingRule`](#aws-cdk-sdk.s3.S3RoutingRule)[]

---


### S3ResponsesFetchBucketWebsiteErrorDocument <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsiteErrorDocument"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsiteErrorDocument.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketWebsiteErrorDocument(__scope: Construct, __resources: string[], __input: S3GetBucketWebsiteRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsiteErrorDocument.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsiteErrorDocument.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsiteErrorDocument.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketWebsiteRequest`](#aws-cdk-sdk.s3.S3GetBucketWebsiteRequest)

---



#### Properties <a name="Properties"></a>

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsiteErrorDocument.property.key"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketWebsiteIndexDocument <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsiteIndexDocument"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsiteIndexDocument.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketWebsiteIndexDocument(__scope: Construct, __resources: string[], __input: S3GetBucketWebsiteRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsiteIndexDocument.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsiteIndexDocument.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsiteIndexDocument.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketWebsiteRequest`](#aws-cdk-sdk.s3.S3GetBucketWebsiteRequest)

---



#### Properties <a name="Properties"></a>

##### `suffix`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsiteIndexDocument.property.suffix"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketWebsiteRedirectAllRequestsTo <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsiteRedirectAllRequestsTo"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsiteRedirectAllRequestsTo.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchBucketWebsiteRedirectAllRequestsTo(__scope: Construct, __resources: string[], __input: S3GetBucketWebsiteRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsiteRedirectAllRequestsTo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsiteRedirectAllRequestsTo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsiteRedirectAllRequestsTo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetBucketWebsiteRequest`](#aws-cdk-sdk.s3.S3GetBucketWebsiteRequest)

---



#### Properties <a name="Properties"></a>

##### `hostName`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsiteRedirectAllRequestsTo.property.hostName"></a>

- *Type:* `string`

---

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchBucketWebsiteRedirectAllRequestsTo.property.protocol"></a>

- *Type:* `string`

---


### S3ResponsesFetchObject <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchObject(__scope: Construct, __resources: string[], __input: S3GetObjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetObjectRequest`](#aws-cdk-sdk.s3.S3GetObjectRequest)

---



#### Properties <a name="Properties"></a>

##### `acceptRanges`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.acceptRanges"></a>

- *Type:* `string`

---

##### `body`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.body"></a>

- *Type:* `any`

---

##### `cacheControl`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.cacheControl"></a>

- *Type:* `string`

---

##### `contentDisposition`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.contentDisposition"></a>

- *Type:* `string`

---

##### `contentEncoding`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.contentEncoding"></a>

- *Type:* `string`

---

##### `contentLanguage`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.contentLanguage"></a>

- *Type:* `string`

---

##### `contentLength`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.contentLength"></a>

- *Type:* `number`

---

##### `contentRange`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.contentRange"></a>

- *Type:* `string`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.contentType"></a>

- *Type:* `string`

---

##### `deleteMarker`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.deleteMarker"></a>

- *Type:* `boolean`

---

##### `eTag`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.eTag"></a>

- *Type:* `string`

---

##### `expiration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.expiration"></a>

- *Type:* `string`

---

##### `expires`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.expires"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.lastModified"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.metadata"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `missingMeta`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.missingMeta"></a>

- *Type:* `number`

---

##### `objectLockLegalHoldStatus`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.objectLockLegalHoldStatus"></a>

- *Type:* `string`

---

##### `objectLockMode`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.objectLockMode"></a>

- *Type:* `string`

---

##### `objectLockRetainUntilDate`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.objectLockRetainUntilDate"></a>

- *Type:* `string`

---

##### `partsCount`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.partsCount"></a>

- *Type:* `number`

---

##### `replicationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.replicationStatus"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.requestCharged"></a>

- *Type:* `string`

---

##### `restore`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.restore"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.storageClass"></a>

- *Type:* `string`

---

##### `tagCount`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.tagCount"></a>

- *Type:* `number`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.versionId"></a>

- *Type:* `string`

---

##### `websiteRedirectLocation`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObject.property.websiteRedirectLocation"></a>

- *Type:* `string`

---


### S3ResponsesFetchObjectAcl <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectAcl"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectAcl.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchObjectAcl(__scope: Construct, __resources: string[], __input: S3GetObjectAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectAcl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectAcl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectAcl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetObjectAclRequest`](#aws-cdk-sdk.s3.S3GetObjectAclRequest)

---



#### Properties <a name="Properties"></a>

##### `grants`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectAcl.property.grants"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Grant`](#aws-cdk-sdk.s3.S3Grant)[]

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectAcl.property.owner"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchObjectAclOwner`](#aws-cdk-sdk.s3.S3ResponsesFetchObjectAclOwner)

---

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectAcl.property.requestCharged"></a>

- *Type:* `string`

---


### S3ResponsesFetchObjectAclOwner <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectAclOwner"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectAclOwner.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchObjectAclOwner(__scope: Construct, __resources: string[], __input: S3GetObjectAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectAclOwner.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectAclOwner.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectAclOwner.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetObjectAclRequest`](#aws-cdk-sdk.s3.S3GetObjectAclRequest)

---



#### Properties <a name="Properties"></a>

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectAclOwner.property.displayName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectAclOwner.property.id"></a>

- *Type:* `string`

---


### S3ResponsesFetchObjectLegalHold <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLegalHold"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLegalHold.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchObjectLegalHold(__scope: Construct, __resources: string[], __input: S3GetObjectLegalHoldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLegalHold.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLegalHold.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLegalHold.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetObjectLegalHoldRequest`](#aws-cdk-sdk.s3.S3GetObjectLegalHoldRequest)

---



#### Properties <a name="Properties"></a>

##### `legalHold`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLegalHold.property.legalHold"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchObjectLegalHoldLegalHold`](#aws-cdk-sdk.s3.S3ResponsesFetchObjectLegalHoldLegalHold)

---


### S3ResponsesFetchObjectLegalHoldLegalHold <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLegalHoldLegalHold"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLegalHoldLegalHold.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchObjectLegalHoldLegalHold(__scope: Construct, __resources: string[], __input: S3GetObjectLegalHoldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLegalHoldLegalHold.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLegalHoldLegalHold.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLegalHoldLegalHold.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetObjectLegalHoldRequest`](#aws-cdk-sdk.s3.S3GetObjectLegalHoldRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLegalHoldLegalHold.property.status"></a>

- *Type:* `string`

---


### S3ResponsesFetchObjectLockConfiguration <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfiguration.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchObjectLockConfiguration(__scope: Construct, __resources: string[], __input: S3GetObjectLockConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetObjectLockConfigurationRequest`](#aws-cdk-sdk.s3.S3GetObjectLockConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `objectLockConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfiguration.property.objectLockConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfiguration`](#aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfiguration)

---


### S3ResponsesFetchObjectLockConfigurationObjectLockConfiguration <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfiguration.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfiguration(__scope: Construct, __resources: string[], __input: S3GetObjectLockConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetObjectLockConfigurationRequest`](#aws-cdk-sdk.s3.S3GetObjectLockConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `objectLockEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfiguration.property.objectLockEnabled"></a>

- *Type:* `string`

---

##### `rule`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfiguration.property.rule"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRule`](#aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRule)

---


### S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRule <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRule"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRule.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRule(__scope: Construct, __resources: string[], __input: S3GetObjectLockConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetObjectLockConfigurationRequest`](#aws-cdk-sdk.s3.S3GetObjectLockConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultRetention`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRule.property.defaultRetention"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention`](#aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention)

---


### S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention(__scope: Construct, __resources: string[], __input: S3GetObjectLockConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetObjectLockConfigurationRequest`](#aws-cdk-sdk.s3.S3GetObjectLockConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `days`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention.property.days"></a>

- *Type:* `number`

---

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention.property.mode"></a>

- *Type:* `string`

---

##### `years`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention.property.years"></a>

- *Type:* `number`

---


### S3ResponsesFetchObjectRetention <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectRetention"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectRetention.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchObjectRetention(__scope: Construct, __resources: string[], __input: S3GetObjectRetentionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectRetention.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectRetention.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectRetention.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetObjectRetentionRequest`](#aws-cdk-sdk.s3.S3GetObjectRetentionRequest)

---



#### Properties <a name="Properties"></a>

##### `retention`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectRetention.property.retention"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchObjectRetentionRetention`](#aws-cdk-sdk.s3.S3ResponsesFetchObjectRetentionRetention)

---


### S3ResponsesFetchObjectRetentionRetention <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectRetentionRetention"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectRetentionRetention.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchObjectRetentionRetention(__scope: Construct, __resources: string[], __input: S3GetObjectRetentionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectRetentionRetention.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectRetentionRetention.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectRetentionRetention.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetObjectRetentionRequest`](#aws-cdk-sdk.s3.S3GetObjectRetentionRequest)

---



#### Properties <a name="Properties"></a>

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectRetentionRetention.property.mode"></a>

- *Type:* `string`

---

##### `retainUntilDate`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectRetentionRetention.property.retainUntilDate"></a>

- *Type:* `string`

---


### S3ResponsesFetchObjectTagging <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectTagging"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectTagging.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchObjectTagging(__scope: Construct, __resources: string[], __input: S3GetObjectTaggingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectTagging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectTagging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectTagging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetObjectTaggingRequest`](#aws-cdk-sdk.s3.S3GetObjectTaggingRequest)

---



#### Properties <a name="Properties"></a>

##### `tagSet`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectTagging.property.tagSet"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Tag`](#aws-cdk-sdk.s3.S3Tag)[]

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectTagging.property.versionId"></a>

- *Type:* `string`

---


### S3ResponsesFetchObjectTorrent <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectTorrent"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectTorrent.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchObjectTorrent(__scope: Construct, __resources: string[], __input: S3GetObjectTorrentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectTorrent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectTorrent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectTorrent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetObjectTorrentRequest`](#aws-cdk-sdk.s3.S3GetObjectTorrentRequest)

---



#### Properties <a name="Properties"></a>

##### `body`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectTorrent.property.body"></a>

- *Type:* `any`

---

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchObjectTorrent.property.requestCharged"></a>

- *Type:* `string`

---


### S3ResponsesFetchPublicAccessBlock <a name="aws-cdk-sdk.s3.S3ResponsesFetchPublicAccessBlock"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchPublicAccessBlock.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchPublicAccessBlock(__scope: Construct, __resources: string[], __input: S3GetPublicAccessBlockRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchPublicAccessBlock.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchPublicAccessBlock.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchPublicAccessBlock.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetPublicAccessBlockRequest`](#aws-cdk-sdk.s3.S3GetPublicAccessBlockRequest)

---



#### Properties <a name="Properties"></a>

##### `publicAccessBlockConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchPublicAccessBlock.property.publicAccessBlockConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration`](#aws-cdk-sdk.s3.S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration)

---


### S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration <a name="aws-cdk-sdk.s3.S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration(__scope: Construct, __resources: string[], __input: S3GetPublicAccessBlockRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3GetPublicAccessBlockRequest`](#aws-cdk-sdk.s3.S3GetPublicAccessBlockRequest)

---



#### Properties <a name="Properties"></a>

##### `blockPublicAcls`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration.property.blockPublicAcls"></a>

- *Type:* `boolean`

---

##### `blockPublicPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration.property.blockPublicPolicy"></a>

- *Type:* `boolean`

---

##### `ignorePublicAcls`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration.property.ignorePublicAcls"></a>

- *Type:* `boolean`

---

##### `restrictPublicBuckets`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration.property.restrictPublicBuckets"></a>

- *Type:* `boolean`

---


### S3ResponsesHeadObject <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesHeadObject(__scope: Construct, __resources: string[], __input: S3HeadObjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3HeadObjectRequest`](#aws-cdk-sdk.s3.S3HeadObjectRequest)

---



#### Properties <a name="Properties"></a>

##### `acceptRanges`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.acceptRanges"></a>

- *Type:* `string`

---

##### `archiveStatus`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.archiveStatus"></a>

- *Type:* `string`

---

##### `cacheControl`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.cacheControl"></a>

- *Type:* `string`

---

##### `contentDisposition`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.contentDisposition"></a>

- *Type:* `string`

---

##### `contentEncoding`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.contentEncoding"></a>

- *Type:* `string`

---

##### `contentLanguage`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.contentLanguage"></a>

- *Type:* `string`

---

##### `contentLength`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.contentLength"></a>

- *Type:* `number`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.contentType"></a>

- *Type:* `string`

---

##### `deleteMarker`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.deleteMarker"></a>

- *Type:* `boolean`

---

##### `eTag`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.eTag"></a>

- *Type:* `string`

---

##### `expiration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.expiration"></a>

- *Type:* `string`

---

##### `expires`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.expires"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.lastModified"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.metadata"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `missingMeta`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.missingMeta"></a>

- *Type:* `number`

---

##### `objectLockLegalHoldStatus`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.objectLockLegalHoldStatus"></a>

- *Type:* `string`

---

##### `objectLockMode`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.objectLockMode"></a>

- *Type:* `string`

---

##### `objectLockRetainUntilDate`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.objectLockRetainUntilDate"></a>

- *Type:* `string`

---

##### `partsCount`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.partsCount"></a>

- *Type:* `number`

---

##### `replicationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.replicationStatus"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.requestCharged"></a>

- *Type:* `string`

---

##### `restore`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.restore"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.storageClass"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.versionId"></a>

- *Type:* `string`

---

##### `websiteRedirectLocation`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesHeadObject.property.websiteRedirectLocation"></a>

- *Type:* `string`

---


### S3ResponsesListBucketAnalyticsConfigurations <a name="aws-cdk-sdk.s3.S3ResponsesListBucketAnalyticsConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesListBucketAnalyticsConfigurations.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesListBucketAnalyticsConfigurations(__scope: Construct, __resources: string[], __input: S3ListBucketAnalyticsConfigurationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketAnalyticsConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketAnalyticsConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketAnalyticsConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ListBucketAnalyticsConfigurationsRequest`](#aws-cdk-sdk.s3.S3ListBucketAnalyticsConfigurationsRequest)

---



#### Properties <a name="Properties"></a>

##### `analyticsConfigurationList`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketAnalyticsConfigurations.property.analyticsConfigurationList"></a>

- *Type:* [`aws-cdk-sdk.s3.S3AnalyticsConfiguration`](#aws-cdk-sdk.s3.S3AnalyticsConfiguration)[]

---

##### `continuationToken`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketAnalyticsConfigurations.property.continuationToken"></a>

- *Type:* `string`

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketAnalyticsConfigurations.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `nextContinuationToken`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketAnalyticsConfigurations.property.nextContinuationToken"></a>

- *Type:* `string`

---


### S3ResponsesListBucketIntelligentTieringConfigurations <a name="aws-cdk-sdk.s3.S3ResponsesListBucketIntelligentTieringConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesListBucketIntelligentTieringConfigurations.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesListBucketIntelligentTieringConfigurations(__scope: Construct, __resources: string[], __input: S3ListBucketIntelligentTieringConfigurationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketIntelligentTieringConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketIntelligentTieringConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketIntelligentTieringConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ListBucketIntelligentTieringConfigurationsRequest`](#aws-cdk-sdk.s3.S3ListBucketIntelligentTieringConfigurationsRequest)

---



#### Properties <a name="Properties"></a>

##### `continuationToken`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketIntelligentTieringConfigurations.property.continuationToken"></a>

- *Type:* `string`

---

##### `intelligentTieringConfigurationList`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketIntelligentTieringConfigurations.property.intelligentTieringConfigurationList"></a>

- *Type:* [`aws-cdk-sdk.s3.S3IntelligentTieringConfiguration`](#aws-cdk-sdk.s3.S3IntelligentTieringConfiguration)[]

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketIntelligentTieringConfigurations.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `nextContinuationToken`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketIntelligentTieringConfigurations.property.nextContinuationToken"></a>

- *Type:* `string`

---


### S3ResponsesListBucketInventoryConfigurations <a name="aws-cdk-sdk.s3.S3ResponsesListBucketInventoryConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesListBucketInventoryConfigurations.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesListBucketInventoryConfigurations(__scope: Construct, __resources: string[], __input: S3ListBucketInventoryConfigurationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketInventoryConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketInventoryConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketInventoryConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ListBucketInventoryConfigurationsRequest`](#aws-cdk-sdk.s3.S3ListBucketInventoryConfigurationsRequest)

---



#### Properties <a name="Properties"></a>

##### `continuationToken`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketInventoryConfigurations.property.continuationToken"></a>

- *Type:* `string`

---

##### `inventoryConfigurationList`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketInventoryConfigurations.property.inventoryConfigurationList"></a>

- *Type:* [`aws-cdk-sdk.s3.S3InventoryConfiguration`](#aws-cdk-sdk.s3.S3InventoryConfiguration)[]

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketInventoryConfigurations.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `nextContinuationToken`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketInventoryConfigurations.property.nextContinuationToken"></a>

- *Type:* `string`

---


### S3ResponsesListBucketMetricsConfigurations <a name="aws-cdk-sdk.s3.S3ResponsesListBucketMetricsConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesListBucketMetricsConfigurations.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesListBucketMetricsConfigurations(__scope: Construct, __resources: string[], __input: S3ListBucketMetricsConfigurationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketMetricsConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketMetricsConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketMetricsConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ListBucketMetricsConfigurationsRequest`](#aws-cdk-sdk.s3.S3ListBucketMetricsConfigurationsRequest)

---



#### Properties <a name="Properties"></a>

##### `continuationToken`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketMetricsConfigurations.property.continuationToken"></a>

- *Type:* `string`

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketMetricsConfigurations.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `metricsConfigurationList`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketMetricsConfigurations.property.metricsConfigurationList"></a>

- *Type:* [`aws-cdk-sdk.s3.S3MetricsConfiguration`](#aws-cdk-sdk.s3.S3MetricsConfiguration)[]

---

##### `nextContinuationToken`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketMetricsConfigurations.property.nextContinuationToken"></a>

- *Type:* `string`

---


### S3ResponsesListBuckets <a name="aws-cdk-sdk.s3.S3ResponsesListBuckets"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesListBuckets.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesListBuckets(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBuckets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBuckets.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `buckets`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBuckets.property.buckets"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Bucket`](#aws-cdk-sdk.s3.S3Bucket)[]

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBuckets.property.owner"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesListBucketsOwner`](#aws-cdk-sdk.s3.S3ResponsesListBucketsOwner)

---


### S3ResponsesListBucketsOwner <a name="aws-cdk-sdk.s3.S3ResponsesListBucketsOwner"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesListBucketsOwner.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesListBucketsOwner(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketsOwner.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketsOwner.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketsOwner.property.displayName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListBucketsOwner.property.id"></a>

- *Type:* `string`

---


### S3ResponsesListMultipartUploads <a name="aws-cdk-sdk.s3.S3ResponsesListMultipartUploads"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesListMultipartUploads.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesListMultipartUploads(__scope: Construct, __resources: string[], __input: S3ListMultipartUploadsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListMultipartUploads.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListMultipartUploads.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListMultipartUploads.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ListMultipartUploadsRequest`](#aws-cdk-sdk.s3.S3ListMultipartUploadsRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListMultipartUploads.property.bucket"></a>

- *Type:* `string`

---

##### `commonPrefixes`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListMultipartUploads.property.commonPrefixes"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CommonPrefix`](#aws-cdk-sdk.s3.S3CommonPrefix)[]

---

##### `delimiter`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListMultipartUploads.property.delimiter"></a>

- *Type:* `string`

---

##### `encodingType`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListMultipartUploads.property.encodingType"></a>

- *Type:* `string`

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListMultipartUploads.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `keyMarker`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListMultipartUploads.property.keyMarker"></a>

- *Type:* `string`

---

##### `maxUploads`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListMultipartUploads.property.maxUploads"></a>

- *Type:* `number`

---

##### `nextKeyMarker`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListMultipartUploads.property.nextKeyMarker"></a>

- *Type:* `string`

---

##### `nextUploadIdMarker`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListMultipartUploads.property.nextUploadIdMarker"></a>

- *Type:* `string`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListMultipartUploads.property.prefix"></a>

- *Type:* `string`

---

##### `uploadIdMarker`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListMultipartUploads.property.uploadIdMarker"></a>

- *Type:* `string`

---

##### `uploads`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListMultipartUploads.property.uploads"></a>

- *Type:* [`aws-cdk-sdk.s3.S3MultipartUpload`](#aws-cdk-sdk.s3.S3MultipartUpload)[]

---


### S3ResponsesListObjects <a name="aws-cdk-sdk.s3.S3ResponsesListObjects"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesListObjects.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesListObjects(__scope: Construct, __resources: string[], __input: S3ListObjectsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjects.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjects.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjects.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ListObjectsRequest`](#aws-cdk-sdk.s3.S3ListObjectsRequest)

---



#### Properties <a name="Properties"></a>

##### `commonPrefixes`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjects.property.commonPrefixes"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CommonPrefix`](#aws-cdk-sdk.s3.S3CommonPrefix)[]

---

##### `contents`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjects.property.contents"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Object`](#aws-cdk-sdk.s3.S3Object)[]

---

##### `delimiter`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjects.property.delimiter"></a>

- *Type:* `string`

---

##### `encodingType`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjects.property.encodingType"></a>

- *Type:* `string`

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjects.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjects.property.marker"></a>

- *Type:* `string`

---

##### `maxKeys`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjects.property.maxKeys"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjects.property.name"></a>

- *Type:* `string`

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjects.property.nextMarker"></a>

- *Type:* `string`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjects.property.prefix"></a>

- *Type:* `string`

---


### S3ResponsesListObjectsV2 <a name="aws-cdk-sdk.s3.S3ResponsesListObjectsV2"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesListObjectsV2.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesListObjectsV2(__scope: Construct, __resources: string[], __input: S3ListObjectsV2Request)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectsV2.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectsV2.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectsV2.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ListObjectsV2Request`](#aws-cdk-sdk.s3.S3ListObjectsV2Request)

---



#### Properties <a name="Properties"></a>

##### `commonPrefixes`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectsV2.property.commonPrefixes"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CommonPrefix`](#aws-cdk-sdk.s3.S3CommonPrefix)[]

---

##### `contents`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectsV2.property.contents"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Object`](#aws-cdk-sdk.s3.S3Object)[]

---

##### `continuationToken`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectsV2.property.continuationToken"></a>

- *Type:* `string`

---

##### `delimiter`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectsV2.property.delimiter"></a>

- *Type:* `string`

---

##### `encodingType`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectsV2.property.encodingType"></a>

- *Type:* `string`

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectsV2.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `keyCount`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectsV2.property.keyCount"></a>

- *Type:* `number`

---

##### `maxKeys`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectsV2.property.maxKeys"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectsV2.property.name"></a>

- *Type:* `string`

---

##### `nextContinuationToken`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectsV2.property.nextContinuationToken"></a>

- *Type:* `string`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectsV2.property.prefix"></a>

- *Type:* `string`

---

##### `startAfter`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectsV2.property.startAfter"></a>

- *Type:* `string`

---


### S3ResponsesListObjectVersions <a name="aws-cdk-sdk.s3.S3ResponsesListObjectVersions"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesListObjectVersions.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesListObjectVersions(__scope: Construct, __resources: string[], __input: S3ListObjectVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ListObjectVersionsRequest`](#aws-cdk-sdk.s3.S3ListObjectVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `commonPrefixes`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectVersions.property.commonPrefixes"></a>

- *Type:* [`aws-cdk-sdk.s3.S3CommonPrefix`](#aws-cdk-sdk.s3.S3CommonPrefix)[]

---

##### `deleteMarkers`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectVersions.property.deleteMarkers"></a>

- *Type:* [`aws-cdk-sdk.s3.S3DeleteMarkerEntry`](#aws-cdk-sdk.s3.S3DeleteMarkerEntry)[]

---

##### `delimiter`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectVersions.property.delimiter"></a>

- *Type:* `string`

---

##### `encodingType`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectVersions.property.encodingType"></a>

- *Type:* `string`

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectVersions.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `keyMarker`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectVersions.property.keyMarker"></a>

- *Type:* `string`

---

##### `maxKeys`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectVersions.property.maxKeys"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectVersions.property.name"></a>

- *Type:* `string`

---

##### `nextKeyMarker`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectVersions.property.nextKeyMarker"></a>

- *Type:* `string`

---

##### `nextVersionIdMarker`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectVersions.property.nextVersionIdMarker"></a>

- *Type:* `string`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectVersions.property.prefix"></a>

- *Type:* `string`

---

##### `versionIdMarker`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectVersions.property.versionIdMarker"></a>

- *Type:* `string`

---

##### `versions`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListObjectVersions.property.versions"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ObjectVersion`](#aws-cdk-sdk.s3.S3ObjectVersion)[]

---


### S3ResponsesListParts <a name="aws-cdk-sdk.s3.S3ResponsesListParts"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesListParts.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesListParts(__scope: Construct, __resources: string[], __input: S3ListPartsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListParts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListParts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListParts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ListPartsRequest`](#aws-cdk-sdk.s3.S3ListPartsRequest)

---



#### Properties <a name="Properties"></a>

##### `abortDate`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListParts.property.abortDate"></a>

- *Type:* `string`

---

##### `abortRuleId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListParts.property.abortRuleId"></a>

- *Type:* `string`

---

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListParts.property.bucket"></a>

- *Type:* `string`

---

##### `initiator`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListParts.property.initiator"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesListPartsInitiator`](#aws-cdk-sdk.s3.S3ResponsesListPartsInitiator)

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListParts.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListParts.property.key"></a>

- *Type:* `string`

---

##### `maxParts`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListParts.property.maxParts"></a>

- *Type:* `number`

---

##### `nextPartNumberMarker`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListParts.property.nextPartNumberMarker"></a>

- *Type:* `number`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListParts.property.owner"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesListPartsOwner`](#aws-cdk-sdk.s3.S3ResponsesListPartsOwner)

---

##### `partNumberMarker`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListParts.property.partNumberMarker"></a>

- *Type:* `number`

---

##### `parts`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListParts.property.parts"></a>

- *Type:* [`aws-cdk-sdk.s3.S3Part`](#aws-cdk-sdk.s3.S3Part)[]

---

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListParts.property.requestCharged"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListParts.property.storageClass"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListParts.property.uploadId"></a>

- *Type:* `string`

---


### S3ResponsesListPartsInitiator <a name="aws-cdk-sdk.s3.S3ResponsesListPartsInitiator"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesListPartsInitiator.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesListPartsInitiator(__scope: Construct, __resources: string[], __input: S3ListPartsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListPartsInitiator.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListPartsInitiator.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListPartsInitiator.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ListPartsRequest`](#aws-cdk-sdk.s3.S3ListPartsRequest)

---



#### Properties <a name="Properties"></a>

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListPartsInitiator.property.displayName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListPartsInitiator.property.id"></a>

- *Type:* `string`

---


### S3ResponsesListPartsOwner <a name="aws-cdk-sdk.s3.S3ResponsesListPartsOwner"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesListPartsOwner.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesListPartsOwner(__scope: Construct, __resources: string[], __input: S3ListPartsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListPartsOwner.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListPartsOwner.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListPartsOwner.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ListPartsRequest`](#aws-cdk-sdk.s3.S3ListPartsRequest)

---



#### Properties <a name="Properties"></a>

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListPartsOwner.property.displayName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesListPartsOwner.property.id"></a>

- *Type:* `string`

---


### S3ResponsesPutObject <a name="aws-cdk-sdk.s3.S3ResponsesPutObject"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesPutObject.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesPutObject(__scope: Construct, __resources: string[], __input: S3PutObjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutObjectRequest`](#aws-cdk-sdk.s3.S3PutObjectRequest)

---



#### Properties <a name="Properties"></a>

##### `eTag`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObject.property.eTag"></a>

- *Type:* `string`

---

##### `expiration`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObject.property.expiration"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObject.property.requestCharged"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObject.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObject.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObject.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsEncryptionContext`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObject.property.ssekmsEncryptionContext"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObject.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObject.property.versionId"></a>

- *Type:* `string`

---


### S3ResponsesPutObjectAcl <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectAcl"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectAcl.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesPutObjectAcl(__scope: Construct, __resources: string[], __input: S3PutObjectAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectAcl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectAcl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectAcl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutObjectAclRequest`](#aws-cdk-sdk.s3.S3PutObjectAclRequest)

---



#### Properties <a name="Properties"></a>

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectAcl.property.requestCharged"></a>

- *Type:* `string`

---


### S3ResponsesPutObjectLegalHold <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectLegalHold"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectLegalHold.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesPutObjectLegalHold(__scope: Construct, __resources: string[], __input: S3PutObjectLegalHoldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectLegalHold.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectLegalHold.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectLegalHold.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutObjectLegalHoldRequest`](#aws-cdk-sdk.s3.S3PutObjectLegalHoldRequest)

---



#### Properties <a name="Properties"></a>

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectLegalHold.property.requestCharged"></a>

- *Type:* `string`

---


### S3ResponsesPutObjectLockConfiguration <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectLockConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectLockConfiguration.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesPutObjectLockConfiguration(__scope: Construct, __resources: string[], __input: S3PutObjectLockConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectLockConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectLockConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectLockConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutObjectLockConfigurationRequest`](#aws-cdk-sdk.s3.S3PutObjectLockConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectLockConfiguration.property.requestCharged"></a>

- *Type:* `string`

---


### S3ResponsesPutObjectRetention <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectRetention"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectRetention.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesPutObjectRetention(__scope: Construct, __resources: string[], __input: S3PutObjectRetentionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectRetention.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectRetention.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectRetention.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutObjectRetentionRequest`](#aws-cdk-sdk.s3.S3PutObjectRetentionRequest)

---



#### Properties <a name="Properties"></a>

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectRetention.property.requestCharged"></a>

- *Type:* `string`

---


### S3ResponsesPutObjectTagging <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectTagging"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectTagging.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesPutObjectTagging(__scope: Construct, __resources: string[], __input: S3PutObjectTaggingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectTagging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectTagging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectTagging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3PutObjectTaggingRequest`](#aws-cdk-sdk.s3.S3PutObjectTaggingRequest)

---



#### Properties <a name="Properties"></a>

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesPutObjectTagging.property.versionId"></a>

- *Type:* `string`

---


### S3ResponsesRestoreObject <a name="aws-cdk-sdk.s3.S3ResponsesRestoreObject"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesRestoreObject.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesRestoreObject(__scope: Construct, __resources: string[], __input: S3RestoreObjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesRestoreObject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesRestoreObject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesRestoreObject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3RestoreObjectRequest`](#aws-cdk-sdk.s3.S3RestoreObjectRequest)

---



#### Properties <a name="Properties"></a>

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesRestoreObject.property.requestCharged"></a>

- *Type:* `string`

---

##### `restoreOutputPath`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesRestoreObject.property.restoreOutputPath"></a>

- *Type:* `string`

---


### S3ResponsesSelectObjectContent <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContent"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContent.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesSelectObjectContent(__scope: Construct, __resources: string[], __input: S3SelectObjectContentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3SelectObjectContentRequest`](#aws-cdk-sdk.s3.S3SelectObjectContentRequest)

---



#### Properties <a name="Properties"></a>

##### `payload`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContent.property.payload"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayload`](#aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayload)

---


### S3ResponsesSelectObjectContentPayload <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayload"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayload.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesSelectObjectContentPayload(__scope: Construct, __resources: string[], __input: S3SelectObjectContentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayload.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayload.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayload.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3SelectObjectContentRequest`](#aws-cdk-sdk.s3.S3SelectObjectContentRequest)

---



#### Properties <a name="Properties"></a>

##### `cont`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayload.property.cont"></a>

- *Type:* `any`

---

##### `end`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayload.property.end"></a>

- *Type:* `any`

---

##### `progress`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayload.property.progress"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadProgress`](#aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadProgress)

---

##### `records`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayload.property.records"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadRecords`](#aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadRecords)

---

##### `stats`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayload.property.stats"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadStats`](#aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadStats)

---


### S3ResponsesSelectObjectContentPayloadProgress <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadProgress"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadProgress.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesSelectObjectContentPayloadProgress(__scope: Construct, __resources: string[], __input: S3SelectObjectContentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadProgress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadProgress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadProgress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3SelectObjectContentRequest`](#aws-cdk-sdk.s3.S3SelectObjectContentRequest)

---



#### Properties <a name="Properties"></a>

##### `details`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadProgress.property.details"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadProgressDetails`](#aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadProgressDetails)

---


### S3ResponsesSelectObjectContentPayloadProgressDetails <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadProgressDetails"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadProgressDetails.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesSelectObjectContentPayloadProgressDetails(__scope: Construct, __resources: string[], __input: S3SelectObjectContentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadProgressDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadProgressDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadProgressDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3SelectObjectContentRequest`](#aws-cdk-sdk.s3.S3SelectObjectContentRequest)

---



#### Properties <a name="Properties"></a>

##### `bytesProcessed`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadProgressDetails.property.bytesProcessed"></a>

- *Type:* `number`

---

##### `bytesReturned`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadProgressDetails.property.bytesReturned"></a>

- *Type:* `number`

---

##### `bytesScanned`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadProgressDetails.property.bytesScanned"></a>

- *Type:* `number`

---


### S3ResponsesSelectObjectContentPayloadRecords <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadRecords"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadRecords.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesSelectObjectContentPayloadRecords(__scope: Construct, __resources: string[], __input: S3SelectObjectContentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadRecords.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadRecords.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadRecords.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3SelectObjectContentRequest`](#aws-cdk-sdk.s3.S3SelectObjectContentRequest)

---



#### Properties <a name="Properties"></a>

##### `payload`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadRecords.property.payload"></a>

- *Type:* `any`

---


### S3ResponsesSelectObjectContentPayloadStats <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadStats"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadStats.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesSelectObjectContentPayloadStats(__scope: Construct, __resources: string[], __input: S3SelectObjectContentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadStats.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadStats.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadStats.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3SelectObjectContentRequest`](#aws-cdk-sdk.s3.S3SelectObjectContentRequest)

---



#### Properties <a name="Properties"></a>

##### `details`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadStats.property.details"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadStatsDetails`](#aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadStatsDetails)

---


### S3ResponsesSelectObjectContentPayloadStatsDetails <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadStatsDetails"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadStatsDetails.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesSelectObjectContentPayloadStatsDetails(__scope: Construct, __resources: string[], __input: S3SelectObjectContentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadStatsDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadStatsDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadStatsDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3SelectObjectContentRequest`](#aws-cdk-sdk.s3.S3SelectObjectContentRequest)

---



#### Properties <a name="Properties"></a>

##### `bytesProcessed`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadStatsDetails.property.bytesProcessed"></a>

- *Type:* `number`

---

##### `bytesReturned`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadStatsDetails.property.bytesReturned"></a>

- *Type:* `number`

---

##### `bytesScanned`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesSelectObjectContentPayloadStatsDetails.property.bytesScanned"></a>

- *Type:* `number`

---


### S3ResponsesUploadPart <a name="aws-cdk-sdk.s3.S3ResponsesUploadPart"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesUploadPart.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesUploadPart(__scope: Construct, __resources: string[], __input: S3UploadPartRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesUploadPart.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesUploadPart.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesUploadPart.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3UploadPartRequest`](#aws-cdk-sdk.s3.S3UploadPartRequest)

---



#### Properties <a name="Properties"></a>

##### `eTag`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesUploadPart.property.eTag"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesUploadPart.property.requestCharged"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesUploadPart.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesUploadPart.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesUploadPart.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesUploadPart.property.ssekmsKeyId"></a>

- *Type:* `string`

---


### S3ResponsesUploadPartCopy <a name="aws-cdk-sdk.s3.S3ResponsesUploadPartCopy"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesUploadPartCopy.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesUploadPartCopy(__scope: Construct, __resources: string[], __input: S3UploadPartCopyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesUploadPartCopy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesUploadPartCopy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesUploadPartCopy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3UploadPartCopyRequest`](#aws-cdk-sdk.s3.S3UploadPartCopyRequest)

---



#### Properties <a name="Properties"></a>

##### `copyPartResult`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesUploadPartCopy.property.copyPartResult"></a>

- *Type:* [`aws-cdk-sdk.s3.S3ResponsesUploadPartCopyCopyPartResult`](#aws-cdk-sdk.s3.S3ResponsesUploadPartCopyCopyPartResult)

---

##### `copySourceVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesUploadPartCopy.property.copySourceVersionId"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesUploadPartCopy.property.requestCharged"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesUploadPartCopy.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesUploadPartCopy.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesUploadPartCopy.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesUploadPartCopy.property.ssekmsKeyId"></a>

- *Type:* `string`

---


### S3ResponsesUploadPartCopyCopyPartResult <a name="aws-cdk-sdk.s3.S3ResponsesUploadPartCopyCopyPartResult"></a>

#### Initializer <a name="aws-cdk-sdk.s3.S3ResponsesUploadPartCopyCopyPartResult.Initializer"></a>

```typescript
import { s3 } from 'aws-cdk-sdk'

new s3.S3ResponsesUploadPartCopyCopyPartResult(__scope: Construct, __resources: string[], __input: S3UploadPartCopyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesUploadPartCopyCopyPartResult.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesUploadPartCopyCopyPartResult.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesUploadPartCopyCopyPartResult.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3.S3UploadPartCopyRequest`](#aws-cdk-sdk.s3.S3UploadPartCopyRequest)

---



#### Properties <a name="Properties"></a>

##### `eTag`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesUploadPartCopyCopyPartResult.property.eTag"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.s3.S3ResponsesUploadPartCopyCopyPartResult.property.lastModified"></a>

- *Type:* `string`

---



