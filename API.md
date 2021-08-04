# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### S3Client <a name="aws-cdk-sdk.S3Client"></a>

#### Initializer <a name="aws-cdk-sdk.S3Client.Initializer"></a>

```typescript
import { S3Client } from 'aws-cdk-sdk'

new S3Client(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `abortMultipartUpload` <a name="aws-cdk-sdk.S3Client.abortMultipartUpload"></a>

```typescript
public abortMultipartUpload(input: S3AbortMultipartUploadRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3AbortMultipartUploadRequest`](#aws-cdk-sdk.S3AbortMultipartUploadRequest)

---

##### `completeMultipartUpload` <a name="aws-cdk-sdk.S3Client.completeMultipartUpload"></a>

```typescript
public completeMultipartUpload(input: S3CompleteMultipartUploadRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3CompleteMultipartUploadRequest`](#aws-cdk-sdk.S3CompleteMultipartUploadRequest)

---

##### `copyObject` <a name="aws-cdk-sdk.S3Client.copyObject"></a>

```typescript
public copyObject(input: S3CopyObjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3CopyObjectRequest`](#aws-cdk-sdk.S3CopyObjectRequest)

---

##### `createBucket` <a name="aws-cdk-sdk.S3Client.createBucket"></a>

```typescript
public createBucket(input: S3CreateBucketRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3CreateBucketRequest`](#aws-cdk-sdk.S3CreateBucketRequest)

---

##### `createMultipartUpload` <a name="aws-cdk-sdk.S3Client.createMultipartUpload"></a>

```typescript
public createMultipartUpload(input: S3CreateMultipartUploadRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3CreateMultipartUploadRequest`](#aws-cdk-sdk.S3CreateMultipartUploadRequest)

---

##### `deleteBucket` <a name="aws-cdk-sdk.S3Client.deleteBucket"></a>

```typescript
public deleteBucket(input: S3DeleteBucketRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3DeleteBucketRequest`](#aws-cdk-sdk.S3DeleteBucketRequest)

---

##### `deleteBucketAnalyticsConfiguration` <a name="aws-cdk-sdk.S3Client.deleteBucketAnalyticsConfiguration"></a>

```typescript
public deleteBucketAnalyticsConfiguration(input: S3DeleteBucketAnalyticsConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3DeleteBucketAnalyticsConfigurationRequest`](#aws-cdk-sdk.S3DeleteBucketAnalyticsConfigurationRequest)

---

##### `deleteBucketCors` <a name="aws-cdk-sdk.S3Client.deleteBucketCors"></a>

```typescript
public deleteBucketCors(input: S3DeleteBucketCorsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3DeleteBucketCorsRequest`](#aws-cdk-sdk.S3DeleteBucketCorsRequest)

---

##### `deleteBucketEncryption` <a name="aws-cdk-sdk.S3Client.deleteBucketEncryption"></a>

```typescript
public deleteBucketEncryption(input: S3DeleteBucketEncryptionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3DeleteBucketEncryptionRequest`](#aws-cdk-sdk.S3DeleteBucketEncryptionRequest)

---

##### `deleteBucketIntelligentTieringConfiguration` <a name="aws-cdk-sdk.S3Client.deleteBucketIntelligentTieringConfiguration"></a>

```typescript
public deleteBucketIntelligentTieringConfiguration(input: S3DeleteBucketIntelligentTieringConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3DeleteBucketIntelligentTieringConfigurationRequest`](#aws-cdk-sdk.S3DeleteBucketIntelligentTieringConfigurationRequest)

---

##### `deleteBucketInventoryConfiguration` <a name="aws-cdk-sdk.S3Client.deleteBucketInventoryConfiguration"></a>

```typescript
public deleteBucketInventoryConfiguration(input: S3DeleteBucketInventoryConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3DeleteBucketInventoryConfigurationRequest`](#aws-cdk-sdk.S3DeleteBucketInventoryConfigurationRequest)

---

##### `deleteBucketLifecycle` <a name="aws-cdk-sdk.S3Client.deleteBucketLifecycle"></a>

```typescript
public deleteBucketLifecycle(input: S3DeleteBucketLifecycleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3DeleteBucketLifecycleRequest`](#aws-cdk-sdk.S3DeleteBucketLifecycleRequest)

---

##### `deleteBucketMetricsConfiguration` <a name="aws-cdk-sdk.S3Client.deleteBucketMetricsConfiguration"></a>

```typescript
public deleteBucketMetricsConfiguration(input: S3DeleteBucketMetricsConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3DeleteBucketMetricsConfigurationRequest`](#aws-cdk-sdk.S3DeleteBucketMetricsConfigurationRequest)

---

##### `deleteBucketOwnershipControls` <a name="aws-cdk-sdk.S3Client.deleteBucketOwnershipControls"></a>

```typescript
public deleteBucketOwnershipControls(input: S3DeleteBucketOwnershipControlsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3DeleteBucketOwnershipControlsRequest`](#aws-cdk-sdk.S3DeleteBucketOwnershipControlsRequest)

---

##### `deleteBucketPolicy` <a name="aws-cdk-sdk.S3Client.deleteBucketPolicy"></a>

```typescript
public deleteBucketPolicy(input: S3DeleteBucketPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3DeleteBucketPolicyRequest`](#aws-cdk-sdk.S3DeleteBucketPolicyRequest)

---

##### `deleteBucketReplication` <a name="aws-cdk-sdk.S3Client.deleteBucketReplication"></a>

```typescript
public deleteBucketReplication(input: S3DeleteBucketReplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3DeleteBucketReplicationRequest`](#aws-cdk-sdk.S3DeleteBucketReplicationRequest)

---

##### `deleteBucketTagging` <a name="aws-cdk-sdk.S3Client.deleteBucketTagging"></a>

```typescript
public deleteBucketTagging(input: S3DeleteBucketTaggingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3DeleteBucketTaggingRequest`](#aws-cdk-sdk.S3DeleteBucketTaggingRequest)

---

##### `deleteBucketWebsite` <a name="aws-cdk-sdk.S3Client.deleteBucketWebsite"></a>

```typescript
public deleteBucketWebsite(input: S3DeleteBucketWebsiteRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3DeleteBucketWebsiteRequest`](#aws-cdk-sdk.S3DeleteBucketWebsiteRequest)

---

##### `deleteObject` <a name="aws-cdk-sdk.S3Client.deleteObject"></a>

```typescript
public deleteObject(input: S3DeleteObjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3DeleteObjectRequest`](#aws-cdk-sdk.S3DeleteObjectRequest)

---

##### `deleteObjects` <a name="aws-cdk-sdk.S3Client.deleteObjects"></a>

```typescript
public deleteObjects(input: S3DeleteObjectsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3DeleteObjectsRequest`](#aws-cdk-sdk.S3DeleteObjectsRequest)

---

##### `deleteObjectTagging` <a name="aws-cdk-sdk.S3Client.deleteObjectTagging"></a>

```typescript
public deleteObjectTagging(input: S3DeleteObjectTaggingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3DeleteObjectTaggingRequest`](#aws-cdk-sdk.S3DeleteObjectTaggingRequest)

---

##### `deletePublicAccessBlock` <a name="aws-cdk-sdk.S3Client.deletePublicAccessBlock"></a>

```typescript
public deletePublicAccessBlock(input: S3DeletePublicAccessBlockRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3DeletePublicAccessBlockRequest`](#aws-cdk-sdk.S3DeletePublicAccessBlockRequest)

---

##### `fetchBucketAccelerateConfiguration` <a name="aws-cdk-sdk.S3Client.fetchBucketAccelerateConfiguration"></a>

```typescript
public fetchBucketAccelerateConfiguration(input: S3GetBucketAccelerateConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketAccelerateConfigurationRequest`](#aws-cdk-sdk.S3GetBucketAccelerateConfigurationRequest)

---

##### `fetchBucketAcl` <a name="aws-cdk-sdk.S3Client.fetchBucketAcl"></a>

```typescript
public fetchBucketAcl(input: S3GetBucketAclRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketAclRequest`](#aws-cdk-sdk.S3GetBucketAclRequest)

---

##### `fetchBucketAnalyticsConfiguration` <a name="aws-cdk-sdk.S3Client.fetchBucketAnalyticsConfiguration"></a>

```typescript
public fetchBucketAnalyticsConfiguration(input: S3GetBucketAnalyticsConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketAnalyticsConfigurationRequest`](#aws-cdk-sdk.S3GetBucketAnalyticsConfigurationRequest)

---

##### `fetchBucketCors` <a name="aws-cdk-sdk.S3Client.fetchBucketCors"></a>

```typescript
public fetchBucketCors(input: S3GetBucketCorsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketCorsRequest`](#aws-cdk-sdk.S3GetBucketCorsRequest)

---

##### `fetchBucketEncryption` <a name="aws-cdk-sdk.S3Client.fetchBucketEncryption"></a>

```typescript
public fetchBucketEncryption(input: S3GetBucketEncryptionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketEncryptionRequest`](#aws-cdk-sdk.S3GetBucketEncryptionRequest)

---

##### `fetchBucketIntelligentTieringConfiguration` <a name="aws-cdk-sdk.S3Client.fetchBucketIntelligentTieringConfiguration"></a>

```typescript
public fetchBucketIntelligentTieringConfiguration(input: S3GetBucketIntelligentTieringConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketIntelligentTieringConfigurationRequest`](#aws-cdk-sdk.S3GetBucketIntelligentTieringConfigurationRequest)

---

##### `fetchBucketInventoryConfiguration` <a name="aws-cdk-sdk.S3Client.fetchBucketInventoryConfiguration"></a>

```typescript
public fetchBucketInventoryConfiguration(input: S3GetBucketInventoryConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketInventoryConfigurationRequest`](#aws-cdk-sdk.S3GetBucketInventoryConfigurationRequest)

---

##### `fetchBucketLifecycle` <a name="aws-cdk-sdk.S3Client.fetchBucketLifecycle"></a>

```typescript
public fetchBucketLifecycle(input: S3GetBucketLifecycleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketLifecycleRequest`](#aws-cdk-sdk.S3GetBucketLifecycleRequest)

---

##### `fetchBucketLifecycleConfiguration` <a name="aws-cdk-sdk.S3Client.fetchBucketLifecycleConfiguration"></a>

```typescript
public fetchBucketLifecycleConfiguration(input: S3GetBucketLifecycleConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketLifecycleConfigurationRequest`](#aws-cdk-sdk.S3GetBucketLifecycleConfigurationRequest)

---

##### `fetchBucketLocation` <a name="aws-cdk-sdk.S3Client.fetchBucketLocation"></a>

```typescript
public fetchBucketLocation(input: S3GetBucketLocationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketLocationRequest`](#aws-cdk-sdk.S3GetBucketLocationRequest)

---

##### `fetchBucketLogging` <a name="aws-cdk-sdk.S3Client.fetchBucketLogging"></a>

```typescript
public fetchBucketLogging(input: S3GetBucketLoggingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketLoggingRequest`](#aws-cdk-sdk.S3GetBucketLoggingRequest)

---

##### `fetchBucketMetricsConfiguration` <a name="aws-cdk-sdk.S3Client.fetchBucketMetricsConfiguration"></a>

```typescript
public fetchBucketMetricsConfiguration(input: S3GetBucketMetricsConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketMetricsConfigurationRequest`](#aws-cdk-sdk.S3GetBucketMetricsConfigurationRequest)

---

##### `fetchBucketNotification` <a name="aws-cdk-sdk.S3Client.fetchBucketNotification"></a>

```typescript
public fetchBucketNotification(input: S3GetBucketNotificationConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketNotificationConfigurationRequest`](#aws-cdk-sdk.S3GetBucketNotificationConfigurationRequest)

---

##### `fetchBucketNotificationConfiguration` <a name="aws-cdk-sdk.S3Client.fetchBucketNotificationConfiguration"></a>

```typescript
public fetchBucketNotificationConfiguration(input: S3GetBucketNotificationConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketNotificationConfigurationRequest`](#aws-cdk-sdk.S3GetBucketNotificationConfigurationRequest)

---

##### `fetchBucketOwnershipControls` <a name="aws-cdk-sdk.S3Client.fetchBucketOwnershipControls"></a>

```typescript
public fetchBucketOwnershipControls(input: S3GetBucketOwnershipControlsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketOwnershipControlsRequest`](#aws-cdk-sdk.S3GetBucketOwnershipControlsRequest)

---

##### `fetchBucketPolicy` <a name="aws-cdk-sdk.S3Client.fetchBucketPolicy"></a>

```typescript
public fetchBucketPolicy(input: S3GetBucketPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketPolicyRequest`](#aws-cdk-sdk.S3GetBucketPolicyRequest)

---

##### `fetchBucketPolicyStatus` <a name="aws-cdk-sdk.S3Client.fetchBucketPolicyStatus"></a>

```typescript
public fetchBucketPolicyStatus(input: S3GetBucketPolicyStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketPolicyStatusRequest`](#aws-cdk-sdk.S3GetBucketPolicyStatusRequest)

---

##### `fetchBucketReplication` <a name="aws-cdk-sdk.S3Client.fetchBucketReplication"></a>

```typescript
public fetchBucketReplication(input: S3GetBucketReplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketReplicationRequest`](#aws-cdk-sdk.S3GetBucketReplicationRequest)

---

##### `fetchBucketRequestPayment` <a name="aws-cdk-sdk.S3Client.fetchBucketRequestPayment"></a>

```typescript
public fetchBucketRequestPayment(input: S3GetBucketRequestPaymentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketRequestPaymentRequest`](#aws-cdk-sdk.S3GetBucketRequestPaymentRequest)

---

##### `fetchBucketTagging` <a name="aws-cdk-sdk.S3Client.fetchBucketTagging"></a>

```typescript
public fetchBucketTagging(input: S3GetBucketTaggingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketTaggingRequest`](#aws-cdk-sdk.S3GetBucketTaggingRequest)

---

##### `fetchBucketVersioning` <a name="aws-cdk-sdk.S3Client.fetchBucketVersioning"></a>

```typescript
public fetchBucketVersioning(input: S3GetBucketVersioningRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketVersioningRequest`](#aws-cdk-sdk.S3GetBucketVersioningRequest)

---

##### `fetchBucketWebsite` <a name="aws-cdk-sdk.S3Client.fetchBucketWebsite"></a>

```typescript
public fetchBucketWebsite(input: S3GetBucketWebsiteRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketWebsiteRequest`](#aws-cdk-sdk.S3GetBucketWebsiteRequest)

---

##### `fetchObject` <a name="aws-cdk-sdk.S3Client.fetchObject"></a>

```typescript
public fetchObject(input: S3GetObjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetObjectRequest`](#aws-cdk-sdk.S3GetObjectRequest)

---

##### `fetchObjectAcl` <a name="aws-cdk-sdk.S3Client.fetchObjectAcl"></a>

```typescript
public fetchObjectAcl(input: S3GetObjectAclRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetObjectAclRequest`](#aws-cdk-sdk.S3GetObjectAclRequest)

---

##### `fetchObjectLegalHold` <a name="aws-cdk-sdk.S3Client.fetchObjectLegalHold"></a>

```typescript
public fetchObjectLegalHold(input: S3GetObjectLegalHoldRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetObjectLegalHoldRequest`](#aws-cdk-sdk.S3GetObjectLegalHoldRequest)

---

##### `fetchObjectLockConfiguration` <a name="aws-cdk-sdk.S3Client.fetchObjectLockConfiguration"></a>

```typescript
public fetchObjectLockConfiguration(input: S3GetObjectLockConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetObjectLockConfigurationRequest`](#aws-cdk-sdk.S3GetObjectLockConfigurationRequest)

---

##### `fetchObjectRetention` <a name="aws-cdk-sdk.S3Client.fetchObjectRetention"></a>

```typescript
public fetchObjectRetention(input: S3GetObjectRetentionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetObjectRetentionRequest`](#aws-cdk-sdk.S3GetObjectRetentionRequest)

---

##### `fetchObjectTagging` <a name="aws-cdk-sdk.S3Client.fetchObjectTagging"></a>

```typescript
public fetchObjectTagging(input: S3GetObjectTaggingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetObjectTaggingRequest`](#aws-cdk-sdk.S3GetObjectTaggingRequest)

---

##### `fetchObjectTorrent` <a name="aws-cdk-sdk.S3Client.fetchObjectTorrent"></a>

```typescript
public fetchObjectTorrent(input: S3GetObjectTorrentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetObjectTorrentRequest`](#aws-cdk-sdk.S3GetObjectTorrentRequest)

---

##### `fetchPublicAccessBlock` <a name="aws-cdk-sdk.S3Client.fetchPublicAccessBlock"></a>

```typescript
public fetchPublicAccessBlock(input: S3GetPublicAccessBlockRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3GetPublicAccessBlockRequest`](#aws-cdk-sdk.S3GetPublicAccessBlockRequest)

---

##### `headBucket` <a name="aws-cdk-sdk.S3Client.headBucket"></a>

```typescript
public headBucket(input: S3HeadBucketRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3HeadBucketRequest`](#aws-cdk-sdk.S3HeadBucketRequest)

---

##### `headObject` <a name="aws-cdk-sdk.S3Client.headObject"></a>

```typescript
public headObject(input: S3HeadObjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3HeadObjectRequest`](#aws-cdk-sdk.S3HeadObjectRequest)

---

##### `listBucketAnalyticsConfigurations` <a name="aws-cdk-sdk.S3Client.listBucketAnalyticsConfigurations"></a>

```typescript
public listBucketAnalyticsConfigurations(input: S3ListBucketAnalyticsConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3ListBucketAnalyticsConfigurationsRequest`](#aws-cdk-sdk.S3ListBucketAnalyticsConfigurationsRequest)

---

##### `listBucketIntelligentTieringConfigurations` <a name="aws-cdk-sdk.S3Client.listBucketIntelligentTieringConfigurations"></a>

```typescript
public listBucketIntelligentTieringConfigurations(input: S3ListBucketIntelligentTieringConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3ListBucketIntelligentTieringConfigurationsRequest`](#aws-cdk-sdk.S3ListBucketIntelligentTieringConfigurationsRequest)

---

##### `listBucketInventoryConfigurations` <a name="aws-cdk-sdk.S3Client.listBucketInventoryConfigurations"></a>

```typescript
public listBucketInventoryConfigurations(input: S3ListBucketInventoryConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3ListBucketInventoryConfigurationsRequest`](#aws-cdk-sdk.S3ListBucketInventoryConfigurationsRequest)

---

##### `listBucketMetricsConfigurations` <a name="aws-cdk-sdk.S3Client.listBucketMetricsConfigurations"></a>

```typescript
public listBucketMetricsConfigurations(input: S3ListBucketMetricsConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3ListBucketMetricsConfigurationsRequest`](#aws-cdk-sdk.S3ListBucketMetricsConfigurationsRequest)

---

##### `listBuckets` <a name="aws-cdk-sdk.S3Client.listBuckets"></a>

```typescript
public listBuckets()
```

##### `listMultipartUploads` <a name="aws-cdk-sdk.S3Client.listMultipartUploads"></a>

```typescript
public listMultipartUploads(input: S3ListMultipartUploadsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3ListMultipartUploadsRequest`](#aws-cdk-sdk.S3ListMultipartUploadsRequest)

---

##### `listObjects` <a name="aws-cdk-sdk.S3Client.listObjects"></a>

```typescript
public listObjects(input: S3ListObjectsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3ListObjectsRequest`](#aws-cdk-sdk.S3ListObjectsRequest)

---

##### `listObjectsV2` <a name="aws-cdk-sdk.S3Client.listObjectsV2"></a>

```typescript
public listObjectsV2(input: S3ListObjectsV2Request)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3ListObjectsV2Request`](#aws-cdk-sdk.S3ListObjectsV2Request)

---

##### `listObjectVersions` <a name="aws-cdk-sdk.S3Client.listObjectVersions"></a>

```typescript
public listObjectVersions(input: S3ListObjectVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3ListObjectVersionsRequest`](#aws-cdk-sdk.S3ListObjectVersionsRequest)

---

##### `listParts` <a name="aws-cdk-sdk.S3Client.listParts"></a>

```typescript
public listParts(input: S3ListPartsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3ListPartsRequest`](#aws-cdk-sdk.S3ListPartsRequest)

---

##### `putBucketAccelerateConfiguration` <a name="aws-cdk-sdk.S3Client.putBucketAccelerateConfiguration"></a>

```typescript
public putBucketAccelerateConfiguration(input: S3PutBucketAccelerateConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3PutBucketAccelerateConfigurationRequest`](#aws-cdk-sdk.S3PutBucketAccelerateConfigurationRequest)

---

##### `putBucketAcl` <a name="aws-cdk-sdk.S3Client.putBucketAcl"></a>

```typescript
public putBucketAcl(input: S3PutBucketAclRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3PutBucketAclRequest`](#aws-cdk-sdk.S3PutBucketAclRequest)

---

##### `putBucketAnalyticsConfiguration` <a name="aws-cdk-sdk.S3Client.putBucketAnalyticsConfiguration"></a>

```typescript
public putBucketAnalyticsConfiguration(input: S3PutBucketAnalyticsConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3PutBucketAnalyticsConfigurationRequest`](#aws-cdk-sdk.S3PutBucketAnalyticsConfigurationRequest)

---

##### `putBucketCors` <a name="aws-cdk-sdk.S3Client.putBucketCors"></a>

```typescript
public putBucketCors(input: S3PutBucketCorsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3PutBucketCorsRequest`](#aws-cdk-sdk.S3PutBucketCorsRequest)

---

##### `putBucketEncryption` <a name="aws-cdk-sdk.S3Client.putBucketEncryption"></a>

```typescript
public putBucketEncryption(input: S3PutBucketEncryptionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3PutBucketEncryptionRequest`](#aws-cdk-sdk.S3PutBucketEncryptionRequest)

---

##### `putBucketIntelligentTieringConfiguration` <a name="aws-cdk-sdk.S3Client.putBucketIntelligentTieringConfiguration"></a>

```typescript
public putBucketIntelligentTieringConfiguration(input: S3PutBucketIntelligentTieringConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3PutBucketIntelligentTieringConfigurationRequest`](#aws-cdk-sdk.S3PutBucketIntelligentTieringConfigurationRequest)

---

##### `putBucketInventoryConfiguration` <a name="aws-cdk-sdk.S3Client.putBucketInventoryConfiguration"></a>

```typescript
public putBucketInventoryConfiguration(input: S3PutBucketInventoryConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3PutBucketInventoryConfigurationRequest`](#aws-cdk-sdk.S3PutBucketInventoryConfigurationRequest)

---

##### `putBucketLifecycle` <a name="aws-cdk-sdk.S3Client.putBucketLifecycle"></a>

```typescript
public putBucketLifecycle(input: S3PutBucketLifecycleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3PutBucketLifecycleRequest`](#aws-cdk-sdk.S3PutBucketLifecycleRequest)

---

##### `putBucketLifecycleConfiguration` <a name="aws-cdk-sdk.S3Client.putBucketLifecycleConfiguration"></a>

```typescript
public putBucketLifecycleConfiguration(input: S3PutBucketLifecycleConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3PutBucketLifecycleConfigurationRequest`](#aws-cdk-sdk.S3PutBucketLifecycleConfigurationRequest)

---

##### `putBucketLogging` <a name="aws-cdk-sdk.S3Client.putBucketLogging"></a>

```typescript
public putBucketLogging(input: S3PutBucketLoggingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3PutBucketLoggingRequest`](#aws-cdk-sdk.S3PutBucketLoggingRequest)

---

##### `putBucketMetricsConfiguration` <a name="aws-cdk-sdk.S3Client.putBucketMetricsConfiguration"></a>

```typescript
public putBucketMetricsConfiguration(input: S3PutBucketMetricsConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3PutBucketMetricsConfigurationRequest`](#aws-cdk-sdk.S3PutBucketMetricsConfigurationRequest)

---

##### `putBucketNotification` <a name="aws-cdk-sdk.S3Client.putBucketNotification"></a>

```typescript
public putBucketNotification(input: S3PutBucketNotificationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3PutBucketNotificationRequest`](#aws-cdk-sdk.S3PutBucketNotificationRequest)

---

##### `putBucketNotificationConfiguration` <a name="aws-cdk-sdk.S3Client.putBucketNotificationConfiguration"></a>

```typescript
public putBucketNotificationConfiguration(input: S3PutBucketNotificationConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3PutBucketNotificationConfigurationRequest`](#aws-cdk-sdk.S3PutBucketNotificationConfigurationRequest)

---

##### `putBucketOwnershipControls` <a name="aws-cdk-sdk.S3Client.putBucketOwnershipControls"></a>

```typescript
public putBucketOwnershipControls(input: S3PutBucketOwnershipControlsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3PutBucketOwnershipControlsRequest`](#aws-cdk-sdk.S3PutBucketOwnershipControlsRequest)

---

##### `putBucketPolicy` <a name="aws-cdk-sdk.S3Client.putBucketPolicy"></a>

```typescript
public putBucketPolicy(input: S3PutBucketPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3PutBucketPolicyRequest`](#aws-cdk-sdk.S3PutBucketPolicyRequest)

---

##### `putBucketReplication` <a name="aws-cdk-sdk.S3Client.putBucketReplication"></a>

```typescript
public putBucketReplication(input: S3PutBucketReplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3PutBucketReplicationRequest`](#aws-cdk-sdk.S3PutBucketReplicationRequest)

---

##### `putBucketRequestPayment` <a name="aws-cdk-sdk.S3Client.putBucketRequestPayment"></a>

```typescript
public putBucketRequestPayment(input: S3PutBucketRequestPaymentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3PutBucketRequestPaymentRequest`](#aws-cdk-sdk.S3PutBucketRequestPaymentRequest)

---

##### `putBucketTagging` <a name="aws-cdk-sdk.S3Client.putBucketTagging"></a>

```typescript
public putBucketTagging(input: S3PutBucketTaggingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3PutBucketTaggingRequest`](#aws-cdk-sdk.S3PutBucketTaggingRequest)

---

##### `putBucketVersioning` <a name="aws-cdk-sdk.S3Client.putBucketVersioning"></a>

```typescript
public putBucketVersioning(input: S3PutBucketVersioningRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3PutBucketVersioningRequest`](#aws-cdk-sdk.S3PutBucketVersioningRequest)

---

##### `putBucketWebsite` <a name="aws-cdk-sdk.S3Client.putBucketWebsite"></a>

```typescript
public putBucketWebsite(input: S3PutBucketWebsiteRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3PutBucketWebsiteRequest`](#aws-cdk-sdk.S3PutBucketWebsiteRequest)

---

##### `putObject` <a name="aws-cdk-sdk.S3Client.putObject"></a>

```typescript
public putObject(input: S3PutObjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3PutObjectRequest`](#aws-cdk-sdk.S3PutObjectRequest)

---

##### `putObjectAcl` <a name="aws-cdk-sdk.S3Client.putObjectAcl"></a>

```typescript
public putObjectAcl(input: S3PutObjectAclRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3PutObjectAclRequest`](#aws-cdk-sdk.S3PutObjectAclRequest)

---

##### `putObjectLegalHold` <a name="aws-cdk-sdk.S3Client.putObjectLegalHold"></a>

```typescript
public putObjectLegalHold(input: S3PutObjectLegalHoldRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3PutObjectLegalHoldRequest`](#aws-cdk-sdk.S3PutObjectLegalHoldRequest)

---

##### `putObjectLockConfiguration` <a name="aws-cdk-sdk.S3Client.putObjectLockConfiguration"></a>

```typescript
public putObjectLockConfiguration(input: S3PutObjectLockConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3PutObjectLockConfigurationRequest`](#aws-cdk-sdk.S3PutObjectLockConfigurationRequest)

---

##### `putObjectRetention` <a name="aws-cdk-sdk.S3Client.putObjectRetention"></a>

```typescript
public putObjectRetention(input: S3PutObjectRetentionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3PutObjectRetentionRequest`](#aws-cdk-sdk.S3PutObjectRetentionRequest)

---

##### `putObjectTagging` <a name="aws-cdk-sdk.S3Client.putObjectTagging"></a>

```typescript
public putObjectTagging(input: S3PutObjectTaggingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3PutObjectTaggingRequest`](#aws-cdk-sdk.S3PutObjectTaggingRequest)

---

##### `putPublicAccessBlock` <a name="aws-cdk-sdk.S3Client.putPublicAccessBlock"></a>

```typescript
public putPublicAccessBlock(input: S3PutPublicAccessBlockRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3PutPublicAccessBlockRequest`](#aws-cdk-sdk.S3PutPublicAccessBlockRequest)

---

##### `restoreObject` <a name="aws-cdk-sdk.S3Client.restoreObject"></a>

```typescript
public restoreObject(input: S3RestoreObjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3RestoreObjectRequest`](#aws-cdk-sdk.S3RestoreObjectRequest)

---

##### `selectObjectContent` <a name="aws-cdk-sdk.S3Client.selectObjectContent"></a>

```typescript
public selectObjectContent(input: S3SelectObjectContentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3SelectObjectContentRequest`](#aws-cdk-sdk.S3SelectObjectContentRequest)

---

##### `uploadPart` <a name="aws-cdk-sdk.S3Client.uploadPart"></a>

```typescript
public uploadPart(input: S3UploadPartRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3UploadPartRequest`](#aws-cdk-sdk.S3UploadPartRequest)

---

##### `uploadPartCopy` <a name="aws-cdk-sdk.S3Client.uploadPartCopy"></a>

```typescript
public uploadPartCopy(input: S3UploadPartCopyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.S3Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.S3UploadPartCopyRequest`](#aws-cdk-sdk.S3UploadPartCopyRequest)

---




## Structs <a name="Structs"></a>

### S3AbortIncompleteMultipartUpload <a name="aws-cdk-sdk.S3AbortIncompleteMultipartUpload"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3AbortIncompleteMultipartUpload } from 'aws-cdk-sdk'

const s3AbortIncompleteMultipartUpload: S3AbortIncompleteMultipartUpload = { ... }
```

##### `daysAfterInitiation`<sup>Optional</sup> <a name="aws-cdk-sdk.S3AbortIncompleteMultipartUpload.property.daysAfterInitiation"></a>

- *Type:* `number`

---

### S3AbortMultipartUploadOutput <a name="aws-cdk-sdk.S3AbortMultipartUploadOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3AbortMultipartUploadOutput } from 'aws-cdk-sdk'

const s3AbortMultipartUploadOutput: S3AbortMultipartUploadOutput = { ... }
```

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.S3AbortMultipartUploadOutput.property.requestCharged"></a>

- *Type:* `string`

---

### S3AbortMultipartUploadRequest <a name="aws-cdk-sdk.S3AbortMultipartUploadRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3AbortMultipartUploadRequest } from 'aws-cdk-sdk'

const s3AbortMultipartUploadRequest: S3AbortMultipartUploadRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3AbortMultipartUploadRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3AbortMultipartUploadRequest.property.key"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.S3AbortMultipartUploadRequest.property.uploadId"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3AbortMultipartUploadRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.S3AbortMultipartUploadRequest.property.requestPayer"></a>

- *Type:* `string`

---

### S3AccelerateConfiguration <a name="aws-cdk-sdk.S3AccelerateConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3AccelerateConfiguration } from 'aws-cdk-sdk'

const s3AccelerateConfiguration: S3AccelerateConfiguration = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.S3AccelerateConfiguration.property.status"></a>

- *Type:* `string`

---

### S3AccessControlPolicy <a name="aws-cdk-sdk.S3AccessControlPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3AccessControlPolicy } from 'aws-cdk-sdk'

const s3AccessControlPolicy: S3AccessControlPolicy = { ... }
```

##### `grants`<sup>Optional</sup> <a name="aws-cdk-sdk.S3AccessControlPolicy.property.grants"></a>

- *Type:* [`aws-cdk-sdk.S3Grant`](#aws-cdk-sdk.S3Grant)[]

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3AccessControlPolicy.property.owner"></a>

- *Type:* [`aws-cdk-sdk.S3Owner`](#aws-cdk-sdk.S3Owner)

---

### S3AccessControlTranslation <a name="aws-cdk-sdk.S3AccessControlTranslation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3AccessControlTranslation } from 'aws-cdk-sdk'

const s3AccessControlTranslation: S3AccessControlTranslation = { ... }
```

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.S3AccessControlTranslation.property.owner"></a>

- *Type:* `string`

---

### S3AnalyticsAndOperator <a name="aws-cdk-sdk.S3AnalyticsAndOperator"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3AnalyticsAndOperator } from 'aws-cdk-sdk'

const s3AnalyticsAndOperator: S3AnalyticsAndOperator = { ... }
```

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.S3AnalyticsAndOperator.property.prefix"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.S3AnalyticsAndOperator.property.tags"></a>

- *Type:* [`aws-cdk-sdk.S3Tag`](#aws-cdk-sdk.S3Tag)[]

---

### S3AnalyticsConfiguration <a name="aws-cdk-sdk.S3AnalyticsConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3AnalyticsConfiguration } from 'aws-cdk-sdk'

const s3AnalyticsConfiguration: S3AnalyticsConfiguration = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3AnalyticsConfiguration.property.id"></a>

- *Type:* `string`

---

##### `storageClassAnalysis`<sup>Required</sup> <a name="aws-cdk-sdk.S3AnalyticsConfiguration.property.storageClassAnalysis"></a>

- *Type:* [`aws-cdk-sdk.S3StorageClassAnalysis`](#aws-cdk-sdk.S3StorageClassAnalysis)

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3AnalyticsConfiguration.property.filter"></a>

- *Type:* [`aws-cdk-sdk.S3AnalyticsFilter`](#aws-cdk-sdk.S3AnalyticsFilter)

---

### S3AnalyticsExportDestination <a name="aws-cdk-sdk.S3AnalyticsExportDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3AnalyticsExportDestination } from 'aws-cdk-sdk'

const s3AnalyticsExportDestination: S3AnalyticsExportDestination = { ... }
```

##### `s3BucketDestination`<sup>Required</sup> <a name="aws-cdk-sdk.S3AnalyticsExportDestination.property.s3BucketDestination"></a>

- *Type:* [`aws-cdk-sdk.S3AnalyticsS3BucketDestination`](#aws-cdk-sdk.S3AnalyticsS3BucketDestination)

---

### S3AnalyticsFilter <a name="aws-cdk-sdk.S3AnalyticsFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3AnalyticsFilter } from 'aws-cdk-sdk'

const s3AnalyticsFilter: S3AnalyticsFilter = { ... }
```

##### `and`<sup>Optional</sup> <a name="aws-cdk-sdk.S3AnalyticsFilter.property.and"></a>

- *Type:* [`aws-cdk-sdk.S3AnalyticsAndOperator`](#aws-cdk-sdk.S3AnalyticsAndOperator)

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.S3AnalyticsFilter.property.prefix"></a>

- *Type:* `string`

---

##### `tag`<sup>Optional</sup> <a name="aws-cdk-sdk.S3AnalyticsFilter.property.tag"></a>

- *Type:* [`aws-cdk-sdk.S3Tag`](#aws-cdk-sdk.S3Tag)

---

### S3AnalyticsS3BucketDestination <a name="aws-cdk-sdk.S3AnalyticsS3BucketDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3AnalyticsS3BucketDestination } from 'aws-cdk-sdk'

const s3AnalyticsS3BucketDestination: S3AnalyticsS3BucketDestination = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3AnalyticsS3BucketDestination.property.bucket"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.S3AnalyticsS3BucketDestination.property.format"></a>

- *Type:* `string`

---

##### `bucketAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3AnalyticsS3BucketDestination.property.bucketAccountId"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.S3AnalyticsS3BucketDestination.property.prefix"></a>

- *Type:* `string`

---

### S3Bucket <a name="aws-cdk-sdk.S3Bucket"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3Bucket } from 'aws-cdk-sdk'

const s3Bucket: S3Bucket = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Bucket.property.creationDate"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Bucket.property.name"></a>

- *Type:* `string`

---

### S3BucketLifecycleConfiguration <a name="aws-cdk-sdk.S3BucketLifecycleConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3BucketLifecycleConfiguration } from 'aws-cdk-sdk'

const s3BucketLifecycleConfiguration: S3BucketLifecycleConfiguration = { ... }
```

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.S3BucketLifecycleConfiguration.property.rules"></a>

- *Type:* [`aws-cdk-sdk.S3LifecycleRule`](#aws-cdk-sdk.S3LifecycleRule)[]

---

### S3BucketLoggingStatus <a name="aws-cdk-sdk.S3BucketLoggingStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3BucketLoggingStatus } from 'aws-cdk-sdk'

const s3BucketLoggingStatus: S3BucketLoggingStatus = { ... }
```

##### `loggingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.S3BucketLoggingStatus.property.loggingEnabled"></a>

- *Type:* [`aws-cdk-sdk.S3LoggingEnabled`](#aws-cdk-sdk.S3LoggingEnabled)

---

### S3CloudFunctionConfiguration <a name="aws-cdk-sdk.S3CloudFunctionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3CloudFunctionConfiguration } from 'aws-cdk-sdk'

const s3CloudFunctionConfiguration: S3CloudFunctionConfiguration = { ... }
```

##### `cloudFunction`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CloudFunctionConfiguration.property.cloudFunction"></a>

- *Type:* `string`

---

##### `event`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CloudFunctionConfiguration.property.event"></a>

- *Type:* `string`

---

##### `events`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CloudFunctionConfiguration.property.events"></a>

- *Type:* `string`[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CloudFunctionConfiguration.property.id"></a>

- *Type:* `string`

---

##### `invocationRole`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CloudFunctionConfiguration.property.invocationRole"></a>

- *Type:* `string`

---

### S3CommonPrefix <a name="aws-cdk-sdk.S3CommonPrefix"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3CommonPrefix } from 'aws-cdk-sdk'

const s3CommonPrefix: S3CommonPrefix = { ... }
```

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CommonPrefix.property.prefix"></a>

- *Type:* `string`

---

### S3CompletedMultipartUpload <a name="aws-cdk-sdk.S3CompletedMultipartUpload"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3CompletedMultipartUpload } from 'aws-cdk-sdk'

const s3CompletedMultipartUpload: S3CompletedMultipartUpload = { ... }
```

##### `parts`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CompletedMultipartUpload.property.parts"></a>

- *Type:* [`aws-cdk-sdk.S3CompletedPart`](#aws-cdk-sdk.S3CompletedPart)[]

---

### S3CompletedPart <a name="aws-cdk-sdk.S3CompletedPart"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3CompletedPart } from 'aws-cdk-sdk'

const s3CompletedPart: S3CompletedPart = { ... }
```

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CompletedPart.property.eTag"></a>

- *Type:* `string`

---

##### `partNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CompletedPart.property.partNumber"></a>

- *Type:* `number`

---

### S3CompleteMultipartUploadOutput <a name="aws-cdk-sdk.S3CompleteMultipartUploadOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3CompleteMultipartUploadOutput } from 'aws-cdk-sdk'

const s3CompleteMultipartUploadOutput: S3CompleteMultipartUploadOutput = { ... }
```

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CompleteMultipartUploadOutput.property.bucket"></a>

- *Type:* `string`

---

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CompleteMultipartUploadOutput.property.eTag"></a>

- *Type:* `string`

---

##### `expiration`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CompleteMultipartUploadOutput.property.expiration"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CompleteMultipartUploadOutput.property.key"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CompleteMultipartUploadOutput.property.location"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CompleteMultipartUploadOutput.property.requestCharged"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CompleteMultipartUploadOutput.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CompleteMultipartUploadOutput.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CompleteMultipartUploadOutput.property.versionId"></a>

- *Type:* `string`

---

### S3CompleteMultipartUploadRequest <a name="aws-cdk-sdk.S3CompleteMultipartUploadRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3CompleteMultipartUploadRequest } from 'aws-cdk-sdk'

const s3CompleteMultipartUploadRequest: S3CompleteMultipartUploadRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3CompleteMultipartUploadRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3CompleteMultipartUploadRequest.property.key"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.S3CompleteMultipartUploadRequest.property.uploadId"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CompleteMultipartUploadRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `multipartUpload`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CompleteMultipartUploadRequest.property.multipartUpload"></a>

- *Type:* [`aws-cdk-sdk.S3CompletedMultipartUpload`](#aws-cdk-sdk.S3CompletedMultipartUpload)

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CompleteMultipartUploadRequest.property.requestPayer"></a>

- *Type:* `string`

---

### S3Condition <a name="aws-cdk-sdk.S3Condition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3Condition } from 'aws-cdk-sdk'

const s3Condition: S3Condition = { ... }
```

##### `httpErrorCodeReturnedEquals`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Condition.property.httpErrorCodeReturnedEquals"></a>

- *Type:* `string`

---

##### `keyPrefixEquals`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Condition.property.keyPrefixEquals"></a>

- *Type:* `string`

---

### S3ContinuationEvent <a name="aws-cdk-sdk.S3ContinuationEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ContinuationEvent } from 'aws-cdk-sdk'

const s3ContinuationEvent: S3ContinuationEvent = { ... }
```

### S3CopyObjectOutput <a name="aws-cdk-sdk.S3CopyObjectOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3CopyObjectOutput } from 'aws-cdk-sdk'

const s3CopyObjectOutput: S3CopyObjectOutput = { ... }
```

##### `copyObjectResult`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectOutput.property.copyObjectResult"></a>

- *Type:* [`aws-cdk-sdk.S3CopyObjectResult`](#aws-cdk-sdk.S3CopyObjectResult)

---

##### `copySourceVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectOutput.property.copySourceVersionId"></a>

- *Type:* `string`

---

##### `expiration`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectOutput.property.expiration"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectOutput.property.requestCharged"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectOutput.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectOutput.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectOutput.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsEncryptionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectOutput.property.ssekmsEncryptionContext"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectOutput.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectOutput.property.versionId"></a>

- *Type:* `string`

---

### S3CopyObjectRequest <a name="aws-cdk-sdk.S3CopyObjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3CopyObjectRequest } from 'aws-cdk-sdk'

const s3CopyObjectRequest: S3CopyObjectRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.bucket"></a>

- *Type:* `string`

---

##### `copySource`<sup>Required</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.copySource"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.key"></a>

- *Type:* `string`

---

##### `acl`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.acl"></a>

- *Type:* `string`

---

##### `cacheControl`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.cacheControl"></a>

- *Type:* `string`

---

##### `contentDisposition`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.contentDisposition"></a>

- *Type:* `string`

---

##### `contentEncoding`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.contentEncoding"></a>

- *Type:* `string`

---

##### `contentLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.contentLanguage"></a>

- *Type:* `string`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.contentType"></a>

- *Type:* `string`

---

##### `copySourceIfMatch`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.copySourceIfMatch"></a>

- *Type:* `string`

---

##### `copySourceIfModifiedSince`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.copySourceIfModifiedSince"></a>

- *Type:* `string`

---

##### `copySourceIfNoneMatch`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.copySourceIfNoneMatch"></a>

- *Type:* `string`

---

##### `copySourceIfUnmodifiedSince`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.copySourceIfUnmodifiedSince"></a>

- *Type:* `string`

---

##### `copySourceSseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.copySourceSseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `copySourceSseCustomerKey`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.copySourceSseCustomerKey"></a>

- *Type:* `any`

---

##### `copySourceSseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.copySourceSseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `expectedSourceBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.expectedSourceBucketOwner"></a>

- *Type:* `string`

---

##### `expires`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.expires"></a>

- *Type:* `string`

---

##### `grantFullControl`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.grantFullControl"></a>

- *Type:* `string`

---

##### `grantRead`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.grantRead"></a>

- *Type:* `string`

---

##### `grantReadAcp`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.grantReadAcp"></a>

- *Type:* `string`

---

##### `grantWriteAcp`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.grantWriteAcp"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.metadata"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `metadataDirective`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.metadataDirective"></a>

- *Type:* `string`

---

##### `objectLockLegalHoldStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.objectLockLegalHoldStatus"></a>

- *Type:* `string`

---

##### `objectLockMode`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.objectLockMode"></a>

- *Type:* `string`

---

##### `objectLockRetainUntilDate`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.objectLockRetainUntilDate"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKey`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.sseCustomerKey"></a>

- *Type:* `any`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsEncryptionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.ssekmsEncryptionContext"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.storageClass"></a>

- *Type:* `string`

---

##### `tagging`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.tagging"></a>

- *Type:* `string`

---

##### `taggingDirective`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.taggingDirective"></a>

- *Type:* `string`

---

##### `websiteRedirectLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectRequest.property.websiteRedirectLocation"></a>

- *Type:* `string`

---

### S3CopyObjectResult <a name="aws-cdk-sdk.S3CopyObjectResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3CopyObjectResult } from 'aws-cdk-sdk'

const s3CopyObjectResult: S3CopyObjectResult = { ... }
```

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectResult.property.eTag"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyObjectResult.property.lastModified"></a>

- *Type:* `string`

---

### S3CopyPartResult <a name="aws-cdk-sdk.S3CopyPartResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3CopyPartResult } from 'aws-cdk-sdk'

const s3CopyPartResult: S3CopyPartResult = { ... }
```

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyPartResult.property.eTag"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CopyPartResult.property.lastModified"></a>

- *Type:* `string`

---

### S3CorsConfiguration <a name="aws-cdk-sdk.S3CorsConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3CorsConfiguration } from 'aws-cdk-sdk'

const s3CorsConfiguration: S3CorsConfiguration = { ... }
```

##### `corsRules`<sup>Required</sup> <a name="aws-cdk-sdk.S3CorsConfiguration.property.corsRules"></a>

- *Type:* [`aws-cdk-sdk.S3CorsRule`](#aws-cdk-sdk.S3CorsRule)[]

---

### S3CorsRule <a name="aws-cdk-sdk.S3CorsRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3CorsRule } from 'aws-cdk-sdk'

const s3CorsRule: S3CorsRule = { ... }
```

##### `allowedMethods`<sup>Required</sup> <a name="aws-cdk-sdk.S3CorsRule.property.allowedMethods"></a>

- *Type:* `string`[]

---

##### `allowedOrigins`<sup>Required</sup> <a name="aws-cdk-sdk.S3CorsRule.property.allowedOrigins"></a>

- *Type:* `string`[]

---

##### `allowedHeaders`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CorsRule.property.allowedHeaders"></a>

- *Type:* `string`[]

---

##### `exposeHeaders`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CorsRule.property.exposeHeaders"></a>

- *Type:* `string`[]

---

##### `maxAgeSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CorsRule.property.maxAgeSeconds"></a>

- *Type:* `number`

---

### S3CreateBucketConfiguration <a name="aws-cdk-sdk.S3CreateBucketConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3CreateBucketConfiguration } from 'aws-cdk-sdk'

const s3CreateBucketConfiguration: S3CreateBucketConfiguration = { ... }
```

##### `locationConstraint`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateBucketConfiguration.property.locationConstraint"></a>

- *Type:* `string`

---

### S3CreateBucketOutput <a name="aws-cdk-sdk.S3CreateBucketOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3CreateBucketOutput } from 'aws-cdk-sdk'

const s3CreateBucketOutput: S3CreateBucketOutput = { ... }
```

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateBucketOutput.property.location"></a>

- *Type:* `string`

---

### S3CreateBucketRequest <a name="aws-cdk-sdk.S3CreateBucketRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3CreateBucketRequest } from 'aws-cdk-sdk'

const s3CreateBucketRequest: S3CreateBucketRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3CreateBucketRequest.property.bucket"></a>

- *Type:* `string`

---

##### `acl`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateBucketRequest.property.acl"></a>

- *Type:* `string`

---

##### `createBucketConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateBucketRequest.property.createBucketConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3CreateBucketConfiguration`](#aws-cdk-sdk.S3CreateBucketConfiguration)

---

##### `grantFullControl`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateBucketRequest.property.grantFullControl"></a>

- *Type:* `string`

---

##### `grantRead`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateBucketRequest.property.grantRead"></a>

- *Type:* `string`

---

##### `grantReadAcp`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateBucketRequest.property.grantReadAcp"></a>

- *Type:* `string`

---

##### `grantWrite`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateBucketRequest.property.grantWrite"></a>

- *Type:* `string`

---

##### `grantWriteAcp`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateBucketRequest.property.grantWriteAcp"></a>

- *Type:* `string`

---

##### `objectLockEnabledForBucket`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateBucketRequest.property.objectLockEnabledForBucket"></a>

- *Type:* `boolean`

---

### S3CreateMultipartUploadOutput <a name="aws-cdk-sdk.S3CreateMultipartUploadOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3CreateMultipartUploadOutput } from 'aws-cdk-sdk'

const s3CreateMultipartUploadOutput: S3CreateMultipartUploadOutput = { ... }
```

##### `abortDate`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadOutput.property.abortDate"></a>

- *Type:* `string`

---

##### `abortRuleId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadOutput.property.abortRuleId"></a>

- *Type:* `string`

---

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadOutput.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadOutput.property.key"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadOutput.property.requestCharged"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadOutput.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadOutput.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadOutput.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsEncryptionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadOutput.property.ssekmsEncryptionContext"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadOutput.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadOutput.property.uploadId"></a>

- *Type:* `string`

---

### S3CreateMultipartUploadRequest <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3CreateMultipartUploadRequest } from 'aws-cdk-sdk'

const s3CreateMultipartUploadRequest: S3CreateMultipartUploadRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.key"></a>

- *Type:* `string`

---

##### `acl`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.acl"></a>

- *Type:* `string`

---

##### `cacheControl`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.cacheControl"></a>

- *Type:* `string`

---

##### `contentDisposition`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.contentDisposition"></a>

- *Type:* `string`

---

##### `contentEncoding`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.contentEncoding"></a>

- *Type:* `string`

---

##### `contentLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.contentLanguage"></a>

- *Type:* `string`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.contentType"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `expires`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.expires"></a>

- *Type:* `string`

---

##### `grantFullControl`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.grantFullControl"></a>

- *Type:* `string`

---

##### `grantRead`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.grantRead"></a>

- *Type:* `string`

---

##### `grantReadAcp`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.grantReadAcp"></a>

- *Type:* `string`

---

##### `grantWriteAcp`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.grantWriteAcp"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.metadata"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `objectLockLegalHoldStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.objectLockLegalHoldStatus"></a>

- *Type:* `string`

---

##### `objectLockMode`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.objectLockMode"></a>

- *Type:* `string`

---

##### `objectLockRetainUntilDate`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.objectLockRetainUntilDate"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKey`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.sseCustomerKey"></a>

- *Type:* `any`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsEncryptionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.ssekmsEncryptionContext"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.storageClass"></a>

- *Type:* `string`

---

##### `tagging`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.tagging"></a>

- *Type:* `string`

---

##### `websiteRedirectLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CreateMultipartUploadRequest.property.websiteRedirectLocation"></a>

- *Type:* `string`

---

### S3CsvInput <a name="aws-cdk-sdk.S3CsvInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3CsvInput } from 'aws-cdk-sdk'

const s3CsvInput: S3CsvInput = { ... }
```

##### `allowQuotedRecordDelimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CsvInput.property.allowQuotedRecordDelimiter"></a>

- *Type:* `boolean`

---

##### `comments`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CsvInput.property.comments"></a>

- *Type:* `string`

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CsvInput.property.fieldDelimiter"></a>

- *Type:* `string`

---

##### `fileHeaderInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CsvInput.property.fileHeaderInfo"></a>

- *Type:* `string`

---

##### `quoteCharacter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CsvInput.property.quoteCharacter"></a>

- *Type:* `string`

---

##### `quoteEscapeCharacter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CsvInput.property.quoteEscapeCharacter"></a>

- *Type:* `string`

---

##### `recordDelimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CsvInput.property.recordDelimiter"></a>

- *Type:* `string`

---

### S3CsvOutput <a name="aws-cdk-sdk.S3CsvOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3CsvOutput } from 'aws-cdk-sdk'

const s3CsvOutput: S3CsvOutput = { ... }
```

##### `fieldDelimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CsvOutput.property.fieldDelimiter"></a>

- *Type:* `string`

---

##### `quoteCharacter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CsvOutput.property.quoteCharacter"></a>

- *Type:* `string`

---

##### `quoteEscapeCharacter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CsvOutput.property.quoteEscapeCharacter"></a>

- *Type:* `string`

---

##### `quoteFields`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CsvOutput.property.quoteFields"></a>

- *Type:* `string`

---

##### `recordDelimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3CsvOutput.property.recordDelimiter"></a>

- *Type:* `string`

---

### S3DefaultRetention <a name="aws-cdk-sdk.S3DefaultRetention"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3DefaultRetention } from 'aws-cdk-sdk'

const s3DefaultRetention: S3DefaultRetention = { ... }
```

##### `days`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DefaultRetention.property.days"></a>

- *Type:* `number`

---

##### `mode`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DefaultRetention.property.mode"></a>

- *Type:* `string`

---

##### `years`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DefaultRetention.property.years"></a>

- *Type:* `number`

---

### S3Delete <a name="aws-cdk-sdk.S3Delete"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3Delete } from 'aws-cdk-sdk'

const s3Delete: S3Delete = { ... }
```

##### `objects`<sup>Required</sup> <a name="aws-cdk-sdk.S3Delete.property.objects"></a>

- *Type:* [`aws-cdk-sdk.S3ObjectIdentifier`](#aws-cdk-sdk.S3ObjectIdentifier)[]

---

##### `quiet`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Delete.property.quiet"></a>

- *Type:* `boolean`

---

### S3DeleteBucketAnalyticsConfigurationRequest <a name="aws-cdk-sdk.S3DeleteBucketAnalyticsConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3DeleteBucketAnalyticsConfigurationRequest } from 'aws-cdk-sdk'

const s3DeleteBucketAnalyticsConfigurationRequest: S3DeleteBucketAnalyticsConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3DeleteBucketAnalyticsConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3DeleteBucketAnalyticsConfigurationRequest.property.id"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteBucketAnalyticsConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3DeleteBucketCorsRequest <a name="aws-cdk-sdk.S3DeleteBucketCorsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3DeleteBucketCorsRequest } from 'aws-cdk-sdk'

const s3DeleteBucketCorsRequest: S3DeleteBucketCorsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3DeleteBucketCorsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteBucketCorsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3DeleteBucketEncryptionRequest <a name="aws-cdk-sdk.S3DeleteBucketEncryptionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3DeleteBucketEncryptionRequest } from 'aws-cdk-sdk'

const s3DeleteBucketEncryptionRequest: S3DeleteBucketEncryptionRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3DeleteBucketEncryptionRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteBucketEncryptionRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3DeleteBucketIntelligentTieringConfigurationRequest <a name="aws-cdk-sdk.S3DeleteBucketIntelligentTieringConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3DeleteBucketIntelligentTieringConfigurationRequest } from 'aws-cdk-sdk'

const s3DeleteBucketIntelligentTieringConfigurationRequest: S3DeleteBucketIntelligentTieringConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3DeleteBucketIntelligentTieringConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3DeleteBucketIntelligentTieringConfigurationRequest.property.id"></a>

- *Type:* `string`

---

### S3DeleteBucketInventoryConfigurationRequest <a name="aws-cdk-sdk.S3DeleteBucketInventoryConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3DeleteBucketInventoryConfigurationRequest } from 'aws-cdk-sdk'

const s3DeleteBucketInventoryConfigurationRequest: S3DeleteBucketInventoryConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3DeleteBucketInventoryConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3DeleteBucketInventoryConfigurationRequest.property.id"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteBucketInventoryConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3DeleteBucketLifecycleRequest <a name="aws-cdk-sdk.S3DeleteBucketLifecycleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3DeleteBucketLifecycleRequest } from 'aws-cdk-sdk'

const s3DeleteBucketLifecycleRequest: S3DeleteBucketLifecycleRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3DeleteBucketLifecycleRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteBucketLifecycleRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3DeleteBucketMetricsConfigurationRequest <a name="aws-cdk-sdk.S3DeleteBucketMetricsConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3DeleteBucketMetricsConfigurationRequest } from 'aws-cdk-sdk'

const s3DeleteBucketMetricsConfigurationRequest: S3DeleteBucketMetricsConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3DeleteBucketMetricsConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3DeleteBucketMetricsConfigurationRequest.property.id"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteBucketMetricsConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3DeleteBucketOwnershipControlsRequest <a name="aws-cdk-sdk.S3DeleteBucketOwnershipControlsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3DeleteBucketOwnershipControlsRequest } from 'aws-cdk-sdk'

const s3DeleteBucketOwnershipControlsRequest: S3DeleteBucketOwnershipControlsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3DeleteBucketOwnershipControlsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteBucketOwnershipControlsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3DeleteBucketPolicyRequest <a name="aws-cdk-sdk.S3DeleteBucketPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3DeleteBucketPolicyRequest } from 'aws-cdk-sdk'

const s3DeleteBucketPolicyRequest: S3DeleteBucketPolicyRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3DeleteBucketPolicyRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteBucketPolicyRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3DeleteBucketReplicationRequest <a name="aws-cdk-sdk.S3DeleteBucketReplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3DeleteBucketReplicationRequest } from 'aws-cdk-sdk'

const s3DeleteBucketReplicationRequest: S3DeleteBucketReplicationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3DeleteBucketReplicationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteBucketReplicationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3DeleteBucketRequest <a name="aws-cdk-sdk.S3DeleteBucketRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3DeleteBucketRequest } from 'aws-cdk-sdk'

const s3DeleteBucketRequest: S3DeleteBucketRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3DeleteBucketRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteBucketRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3DeleteBucketTaggingRequest <a name="aws-cdk-sdk.S3DeleteBucketTaggingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3DeleteBucketTaggingRequest } from 'aws-cdk-sdk'

const s3DeleteBucketTaggingRequest: S3DeleteBucketTaggingRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3DeleteBucketTaggingRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteBucketTaggingRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3DeleteBucketWebsiteRequest <a name="aws-cdk-sdk.S3DeleteBucketWebsiteRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3DeleteBucketWebsiteRequest } from 'aws-cdk-sdk'

const s3DeleteBucketWebsiteRequest: S3DeleteBucketWebsiteRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3DeleteBucketWebsiteRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteBucketWebsiteRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3DeletedObject <a name="aws-cdk-sdk.S3DeletedObject"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3DeletedObject } from 'aws-cdk-sdk'

const s3DeletedObject: S3DeletedObject = { ... }
```

##### `deleteMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeletedObject.property.deleteMarker"></a>

- *Type:* `boolean`

---

##### `deleteMarkerVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeletedObject.property.deleteMarkerVersionId"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeletedObject.property.key"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeletedObject.property.versionId"></a>

- *Type:* `string`

---

### S3DeleteMarkerEntry <a name="aws-cdk-sdk.S3DeleteMarkerEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3DeleteMarkerEntry } from 'aws-cdk-sdk'

const s3DeleteMarkerEntry: S3DeleteMarkerEntry = { ... }
```

##### `isLatest`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteMarkerEntry.property.isLatest"></a>

- *Type:* `boolean`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteMarkerEntry.property.key"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteMarkerEntry.property.lastModified"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteMarkerEntry.property.owner"></a>

- *Type:* [`aws-cdk-sdk.S3Owner`](#aws-cdk-sdk.S3Owner)

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteMarkerEntry.property.versionId"></a>

- *Type:* `string`

---

### S3DeleteMarkerReplication <a name="aws-cdk-sdk.S3DeleteMarkerReplication"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3DeleteMarkerReplication } from 'aws-cdk-sdk'

const s3DeleteMarkerReplication: S3DeleteMarkerReplication = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteMarkerReplication.property.status"></a>

- *Type:* `string`

---

### S3DeleteObjectOutput <a name="aws-cdk-sdk.S3DeleteObjectOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3DeleteObjectOutput } from 'aws-cdk-sdk'

const s3DeleteObjectOutput: S3DeleteObjectOutput = { ... }
```

##### `deleteMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteObjectOutput.property.deleteMarker"></a>

- *Type:* `boolean`

---

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteObjectOutput.property.requestCharged"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteObjectOutput.property.versionId"></a>

- *Type:* `string`

---

### S3DeleteObjectRequest <a name="aws-cdk-sdk.S3DeleteObjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3DeleteObjectRequest } from 'aws-cdk-sdk'

const s3DeleteObjectRequest: S3DeleteObjectRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3DeleteObjectRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3DeleteObjectRequest.property.key"></a>

- *Type:* `string`

---

##### `bypassGovernanceRetention`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteObjectRequest.property.bypassGovernanceRetention"></a>

- *Type:* `boolean`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteObjectRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `mfa`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteObjectRequest.property.mfa"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteObjectRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteObjectRequest.property.versionId"></a>

- *Type:* `string`

---

### S3DeleteObjectsOutput <a name="aws-cdk-sdk.S3DeleteObjectsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3DeleteObjectsOutput } from 'aws-cdk-sdk'

const s3DeleteObjectsOutput: S3DeleteObjectsOutput = { ... }
```

##### `deleted`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteObjectsOutput.property.deleted"></a>

- *Type:* [`aws-cdk-sdk.S3DeletedObject`](#aws-cdk-sdk.S3DeletedObject)[]

---

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteObjectsOutput.property.errors"></a>

- *Type:* [`aws-cdk-sdk.S3Error`](#aws-cdk-sdk.S3Error)[]

---

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteObjectsOutput.property.requestCharged"></a>

- *Type:* `string`

---

### S3DeleteObjectsRequest <a name="aws-cdk-sdk.S3DeleteObjectsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3DeleteObjectsRequest } from 'aws-cdk-sdk'

const s3DeleteObjectsRequest: S3DeleteObjectsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3DeleteObjectsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `delete`<sup>Required</sup> <a name="aws-cdk-sdk.S3DeleteObjectsRequest.property.delete"></a>

- *Type:* [`aws-cdk-sdk.S3Delete`](#aws-cdk-sdk.S3Delete)

---

##### `bypassGovernanceRetention`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteObjectsRequest.property.bypassGovernanceRetention"></a>

- *Type:* `boolean`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteObjectsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `mfa`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteObjectsRequest.property.mfa"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteObjectsRequest.property.requestPayer"></a>

- *Type:* `string`

---

### S3DeleteObjectTaggingOutput <a name="aws-cdk-sdk.S3DeleteObjectTaggingOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3DeleteObjectTaggingOutput } from 'aws-cdk-sdk'

const s3DeleteObjectTaggingOutput: S3DeleteObjectTaggingOutput = { ... }
```

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteObjectTaggingOutput.property.versionId"></a>

- *Type:* `string`

---

### S3DeleteObjectTaggingRequest <a name="aws-cdk-sdk.S3DeleteObjectTaggingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3DeleteObjectTaggingRequest } from 'aws-cdk-sdk'

const s3DeleteObjectTaggingRequest: S3DeleteObjectTaggingRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3DeleteObjectTaggingRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3DeleteObjectTaggingRequest.property.key"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteObjectTaggingRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeleteObjectTaggingRequest.property.versionId"></a>

- *Type:* `string`

---

### S3DeletePublicAccessBlockRequest <a name="aws-cdk-sdk.S3DeletePublicAccessBlockRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3DeletePublicAccessBlockRequest } from 'aws-cdk-sdk'

const s3DeletePublicAccessBlockRequest: S3DeletePublicAccessBlockRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3DeletePublicAccessBlockRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3DeletePublicAccessBlockRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3Destination <a name="aws-cdk-sdk.S3Destination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3Destination } from 'aws-cdk-sdk'

const s3Destination: S3Destination = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3Destination.property.bucket"></a>

- *Type:* `string`

---

##### `accessControlTranslation`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Destination.property.accessControlTranslation"></a>

- *Type:* [`aws-cdk-sdk.S3AccessControlTranslation`](#aws-cdk-sdk.S3AccessControlTranslation)

---

##### `account`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Destination.property.account"></a>

- *Type:* `string`

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Destination.property.encryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3EncryptionConfiguration`](#aws-cdk-sdk.S3EncryptionConfiguration)

---

##### `metrics`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Destination.property.metrics"></a>

- *Type:* [`aws-cdk-sdk.S3Metrics`](#aws-cdk-sdk.S3Metrics)

---

##### `replicationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Destination.property.replicationTime"></a>

- *Type:* [`aws-cdk-sdk.S3ReplicationTime`](#aws-cdk-sdk.S3ReplicationTime)

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Destination.property.storageClass"></a>

- *Type:* `string`

---

### S3Encryption <a name="aws-cdk-sdk.S3Encryption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3Encryption } from 'aws-cdk-sdk'

const s3Encryption: S3Encryption = { ... }
```

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.S3Encryption.property.encryptionType"></a>

- *Type:* `string`

---

##### `kmsContext`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Encryption.property.kmsContext"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Encryption.property.kmsKeyId"></a>

- *Type:* `string`

---

### S3EncryptionConfiguration <a name="aws-cdk-sdk.S3EncryptionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3EncryptionConfiguration } from 'aws-cdk-sdk'

const s3EncryptionConfiguration: S3EncryptionConfiguration = { ... }
```

##### `replicaKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3EncryptionConfiguration.property.replicaKmsKeyId"></a>

- *Type:* `string`

---

### S3EndEvent <a name="aws-cdk-sdk.S3EndEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3EndEvent } from 'aws-cdk-sdk'

const s3EndEvent: S3EndEvent = { ... }
```

### S3Error <a name="aws-cdk-sdk.S3Error"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3Error } from 'aws-cdk-sdk'

const s3Error: S3Error = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Error.property.code"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Error.property.key"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Error.property.message"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Error.property.versionId"></a>

- *Type:* `string`

---

### S3ErrorDocument <a name="aws-cdk-sdk.S3ErrorDocument"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ErrorDocument } from 'aws-cdk-sdk'

const s3ErrorDocument: S3ErrorDocument = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3ErrorDocument.property.key"></a>

- *Type:* `string`

---

### S3ExistingObjectReplication <a name="aws-cdk-sdk.S3ExistingObjectReplication"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ExistingObjectReplication } from 'aws-cdk-sdk'

const s3ExistingObjectReplication: S3ExistingObjectReplication = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.S3ExistingObjectReplication.property.status"></a>

- *Type:* `string`

---

### S3FilterRule <a name="aws-cdk-sdk.S3FilterRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3FilterRule } from 'aws-cdk-sdk'

const s3FilterRule: S3FilterRule = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.S3FilterRule.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.S3FilterRule.property.value"></a>

- *Type:* `string`

---

### S3GetBucketAccelerateConfigurationOutput <a name="aws-cdk-sdk.S3GetBucketAccelerateConfigurationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketAccelerateConfigurationOutput } from 'aws-cdk-sdk'

const s3GetBucketAccelerateConfigurationOutput: S3GetBucketAccelerateConfigurationOutput = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketAccelerateConfigurationOutput.property.status"></a>

- *Type:* `string`

---

### S3GetBucketAccelerateConfigurationRequest <a name="aws-cdk-sdk.S3GetBucketAccelerateConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketAccelerateConfigurationRequest } from 'aws-cdk-sdk'

const s3GetBucketAccelerateConfigurationRequest: S3GetBucketAccelerateConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetBucketAccelerateConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketAccelerateConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketAclOutput <a name="aws-cdk-sdk.S3GetBucketAclOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketAclOutput } from 'aws-cdk-sdk'

const s3GetBucketAclOutput: S3GetBucketAclOutput = { ... }
```

##### `grants`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketAclOutput.property.grants"></a>

- *Type:* [`aws-cdk-sdk.S3Grant`](#aws-cdk-sdk.S3Grant)[]

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketAclOutput.property.owner"></a>

- *Type:* [`aws-cdk-sdk.S3Owner`](#aws-cdk-sdk.S3Owner)

---

### S3GetBucketAclRequest <a name="aws-cdk-sdk.S3GetBucketAclRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketAclRequest } from 'aws-cdk-sdk'

const s3GetBucketAclRequest: S3GetBucketAclRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetBucketAclRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketAclRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketAnalyticsConfigurationOutput <a name="aws-cdk-sdk.S3GetBucketAnalyticsConfigurationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketAnalyticsConfigurationOutput } from 'aws-cdk-sdk'

const s3GetBucketAnalyticsConfigurationOutput: S3GetBucketAnalyticsConfigurationOutput = { ... }
```

##### `analyticsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketAnalyticsConfigurationOutput.property.analyticsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3AnalyticsConfiguration`](#aws-cdk-sdk.S3AnalyticsConfiguration)

---

### S3GetBucketAnalyticsConfigurationRequest <a name="aws-cdk-sdk.S3GetBucketAnalyticsConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketAnalyticsConfigurationRequest } from 'aws-cdk-sdk'

const s3GetBucketAnalyticsConfigurationRequest: S3GetBucketAnalyticsConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetBucketAnalyticsConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetBucketAnalyticsConfigurationRequest.property.id"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketAnalyticsConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketCorsOutput <a name="aws-cdk-sdk.S3GetBucketCorsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketCorsOutput } from 'aws-cdk-sdk'

const s3GetBucketCorsOutput: S3GetBucketCorsOutput = { ... }
```

##### `corsRules`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketCorsOutput.property.corsRules"></a>

- *Type:* [`aws-cdk-sdk.S3CorsRule`](#aws-cdk-sdk.S3CorsRule)[]

---

### S3GetBucketCorsRequest <a name="aws-cdk-sdk.S3GetBucketCorsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketCorsRequest } from 'aws-cdk-sdk'

const s3GetBucketCorsRequest: S3GetBucketCorsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetBucketCorsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketCorsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketEncryptionOutput <a name="aws-cdk-sdk.S3GetBucketEncryptionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketEncryptionOutput } from 'aws-cdk-sdk'

const s3GetBucketEncryptionOutput: S3GetBucketEncryptionOutput = { ... }
```

##### `serverSideEncryptionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketEncryptionOutput.property.serverSideEncryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3ServerSideEncryptionConfiguration`](#aws-cdk-sdk.S3ServerSideEncryptionConfiguration)

---

### S3GetBucketEncryptionRequest <a name="aws-cdk-sdk.S3GetBucketEncryptionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketEncryptionRequest } from 'aws-cdk-sdk'

const s3GetBucketEncryptionRequest: S3GetBucketEncryptionRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetBucketEncryptionRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketEncryptionRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketIntelligentTieringConfigurationOutput <a name="aws-cdk-sdk.S3GetBucketIntelligentTieringConfigurationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketIntelligentTieringConfigurationOutput } from 'aws-cdk-sdk'

const s3GetBucketIntelligentTieringConfigurationOutput: S3GetBucketIntelligentTieringConfigurationOutput = { ... }
```

##### `intelligentTieringConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketIntelligentTieringConfigurationOutput.property.intelligentTieringConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3IntelligentTieringConfiguration`](#aws-cdk-sdk.S3IntelligentTieringConfiguration)

---

### S3GetBucketIntelligentTieringConfigurationRequest <a name="aws-cdk-sdk.S3GetBucketIntelligentTieringConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketIntelligentTieringConfigurationRequest } from 'aws-cdk-sdk'

const s3GetBucketIntelligentTieringConfigurationRequest: S3GetBucketIntelligentTieringConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetBucketIntelligentTieringConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetBucketIntelligentTieringConfigurationRequest.property.id"></a>

- *Type:* `string`

---

### S3GetBucketInventoryConfigurationOutput <a name="aws-cdk-sdk.S3GetBucketInventoryConfigurationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketInventoryConfigurationOutput } from 'aws-cdk-sdk'

const s3GetBucketInventoryConfigurationOutput: S3GetBucketInventoryConfigurationOutput = { ... }
```

##### `inventoryConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketInventoryConfigurationOutput.property.inventoryConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3InventoryConfiguration`](#aws-cdk-sdk.S3InventoryConfiguration)

---

### S3GetBucketInventoryConfigurationRequest <a name="aws-cdk-sdk.S3GetBucketInventoryConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketInventoryConfigurationRequest } from 'aws-cdk-sdk'

const s3GetBucketInventoryConfigurationRequest: S3GetBucketInventoryConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetBucketInventoryConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetBucketInventoryConfigurationRequest.property.id"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketInventoryConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketLifecycleConfigurationOutput <a name="aws-cdk-sdk.S3GetBucketLifecycleConfigurationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketLifecycleConfigurationOutput } from 'aws-cdk-sdk'

const s3GetBucketLifecycleConfigurationOutput: S3GetBucketLifecycleConfigurationOutput = { ... }
```

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketLifecycleConfigurationOutput.property.rules"></a>

- *Type:* [`aws-cdk-sdk.S3LifecycleRule`](#aws-cdk-sdk.S3LifecycleRule)[]

---

### S3GetBucketLifecycleConfigurationRequest <a name="aws-cdk-sdk.S3GetBucketLifecycleConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketLifecycleConfigurationRequest } from 'aws-cdk-sdk'

const s3GetBucketLifecycleConfigurationRequest: S3GetBucketLifecycleConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetBucketLifecycleConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketLifecycleConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketLifecycleOutput <a name="aws-cdk-sdk.S3GetBucketLifecycleOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketLifecycleOutput } from 'aws-cdk-sdk'

const s3GetBucketLifecycleOutput: S3GetBucketLifecycleOutput = { ... }
```

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketLifecycleOutput.property.rules"></a>

- *Type:* [`aws-cdk-sdk.S3Rule`](#aws-cdk-sdk.S3Rule)[]

---

### S3GetBucketLifecycleRequest <a name="aws-cdk-sdk.S3GetBucketLifecycleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketLifecycleRequest } from 'aws-cdk-sdk'

const s3GetBucketLifecycleRequest: S3GetBucketLifecycleRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetBucketLifecycleRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketLifecycleRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketLocationOutput <a name="aws-cdk-sdk.S3GetBucketLocationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketLocationOutput } from 'aws-cdk-sdk'

const s3GetBucketLocationOutput: S3GetBucketLocationOutput = { ... }
```

##### `locationConstraint`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketLocationOutput.property.locationConstraint"></a>

- *Type:* `string`

---

### S3GetBucketLocationRequest <a name="aws-cdk-sdk.S3GetBucketLocationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketLocationRequest } from 'aws-cdk-sdk'

const s3GetBucketLocationRequest: S3GetBucketLocationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetBucketLocationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketLocationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketLoggingOutput <a name="aws-cdk-sdk.S3GetBucketLoggingOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketLoggingOutput } from 'aws-cdk-sdk'

const s3GetBucketLoggingOutput: S3GetBucketLoggingOutput = { ... }
```

##### `loggingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketLoggingOutput.property.loggingEnabled"></a>

- *Type:* [`aws-cdk-sdk.S3LoggingEnabled`](#aws-cdk-sdk.S3LoggingEnabled)

---

### S3GetBucketLoggingRequest <a name="aws-cdk-sdk.S3GetBucketLoggingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketLoggingRequest } from 'aws-cdk-sdk'

const s3GetBucketLoggingRequest: S3GetBucketLoggingRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetBucketLoggingRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketLoggingRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketMetricsConfigurationOutput <a name="aws-cdk-sdk.S3GetBucketMetricsConfigurationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketMetricsConfigurationOutput } from 'aws-cdk-sdk'

const s3GetBucketMetricsConfigurationOutput: S3GetBucketMetricsConfigurationOutput = { ... }
```

##### `metricsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketMetricsConfigurationOutput.property.metricsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3MetricsConfiguration`](#aws-cdk-sdk.S3MetricsConfiguration)

---

### S3GetBucketMetricsConfigurationRequest <a name="aws-cdk-sdk.S3GetBucketMetricsConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketMetricsConfigurationRequest } from 'aws-cdk-sdk'

const s3GetBucketMetricsConfigurationRequest: S3GetBucketMetricsConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetBucketMetricsConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetBucketMetricsConfigurationRequest.property.id"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketMetricsConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketNotificationConfigurationRequest <a name="aws-cdk-sdk.S3GetBucketNotificationConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketNotificationConfigurationRequest } from 'aws-cdk-sdk'

const s3GetBucketNotificationConfigurationRequest: S3GetBucketNotificationConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetBucketNotificationConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketNotificationConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketOwnershipControlsOutput <a name="aws-cdk-sdk.S3GetBucketOwnershipControlsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketOwnershipControlsOutput } from 'aws-cdk-sdk'

const s3GetBucketOwnershipControlsOutput: S3GetBucketOwnershipControlsOutput = { ... }
```

##### `ownershipControls`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketOwnershipControlsOutput.property.ownershipControls"></a>

- *Type:* [`aws-cdk-sdk.S3OwnershipControls`](#aws-cdk-sdk.S3OwnershipControls)

---

### S3GetBucketOwnershipControlsRequest <a name="aws-cdk-sdk.S3GetBucketOwnershipControlsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketOwnershipControlsRequest } from 'aws-cdk-sdk'

const s3GetBucketOwnershipControlsRequest: S3GetBucketOwnershipControlsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetBucketOwnershipControlsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketOwnershipControlsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketPolicyOutput <a name="aws-cdk-sdk.S3GetBucketPolicyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketPolicyOutput } from 'aws-cdk-sdk'

const s3GetBucketPolicyOutput: S3GetBucketPolicyOutput = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketPolicyOutput.property.policy"></a>

- *Type:* `string`

---

### S3GetBucketPolicyRequest <a name="aws-cdk-sdk.S3GetBucketPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketPolicyRequest } from 'aws-cdk-sdk'

const s3GetBucketPolicyRequest: S3GetBucketPolicyRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetBucketPolicyRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketPolicyRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketPolicyStatusOutput <a name="aws-cdk-sdk.S3GetBucketPolicyStatusOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketPolicyStatusOutput } from 'aws-cdk-sdk'

const s3GetBucketPolicyStatusOutput: S3GetBucketPolicyStatusOutput = { ... }
```

##### `policyStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketPolicyStatusOutput.property.policyStatus"></a>

- *Type:* [`aws-cdk-sdk.S3PolicyStatus`](#aws-cdk-sdk.S3PolicyStatus)

---

### S3GetBucketPolicyStatusRequest <a name="aws-cdk-sdk.S3GetBucketPolicyStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketPolicyStatusRequest } from 'aws-cdk-sdk'

const s3GetBucketPolicyStatusRequest: S3GetBucketPolicyStatusRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetBucketPolicyStatusRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketPolicyStatusRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketReplicationOutput <a name="aws-cdk-sdk.S3GetBucketReplicationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketReplicationOutput } from 'aws-cdk-sdk'

const s3GetBucketReplicationOutput: S3GetBucketReplicationOutput = { ... }
```

##### `replicationConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketReplicationOutput.property.replicationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3ReplicationConfiguration`](#aws-cdk-sdk.S3ReplicationConfiguration)

---

### S3GetBucketReplicationRequest <a name="aws-cdk-sdk.S3GetBucketReplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketReplicationRequest } from 'aws-cdk-sdk'

const s3GetBucketReplicationRequest: S3GetBucketReplicationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetBucketReplicationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketReplicationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketRequestPaymentOutput <a name="aws-cdk-sdk.S3GetBucketRequestPaymentOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketRequestPaymentOutput } from 'aws-cdk-sdk'

const s3GetBucketRequestPaymentOutput: S3GetBucketRequestPaymentOutput = { ... }
```

##### `payer`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketRequestPaymentOutput.property.payer"></a>

- *Type:* `string`

---

### S3GetBucketRequestPaymentRequest <a name="aws-cdk-sdk.S3GetBucketRequestPaymentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketRequestPaymentRequest } from 'aws-cdk-sdk'

const s3GetBucketRequestPaymentRequest: S3GetBucketRequestPaymentRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetBucketRequestPaymentRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketRequestPaymentRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketTaggingOutput <a name="aws-cdk-sdk.S3GetBucketTaggingOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketTaggingOutput } from 'aws-cdk-sdk'

const s3GetBucketTaggingOutput: S3GetBucketTaggingOutput = { ... }
```

##### `tagSet`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetBucketTaggingOutput.property.tagSet"></a>

- *Type:* [`aws-cdk-sdk.S3Tag`](#aws-cdk-sdk.S3Tag)[]

---

### S3GetBucketTaggingRequest <a name="aws-cdk-sdk.S3GetBucketTaggingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketTaggingRequest } from 'aws-cdk-sdk'

const s3GetBucketTaggingRequest: S3GetBucketTaggingRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetBucketTaggingRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketTaggingRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketVersioningOutput <a name="aws-cdk-sdk.S3GetBucketVersioningOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketVersioningOutput } from 'aws-cdk-sdk'

const s3GetBucketVersioningOutput: S3GetBucketVersioningOutput = { ... }
```

##### `mfaDelete`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketVersioningOutput.property.mfaDelete"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketVersioningOutput.property.status"></a>

- *Type:* `string`

---

### S3GetBucketVersioningRequest <a name="aws-cdk-sdk.S3GetBucketVersioningRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketVersioningRequest } from 'aws-cdk-sdk'

const s3GetBucketVersioningRequest: S3GetBucketVersioningRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetBucketVersioningRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketVersioningRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetBucketWebsiteOutput <a name="aws-cdk-sdk.S3GetBucketWebsiteOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketWebsiteOutput } from 'aws-cdk-sdk'

const s3GetBucketWebsiteOutput: S3GetBucketWebsiteOutput = { ... }
```

##### `errorDocument`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketWebsiteOutput.property.errorDocument"></a>

- *Type:* [`aws-cdk-sdk.S3ErrorDocument`](#aws-cdk-sdk.S3ErrorDocument)

---

##### `indexDocument`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketWebsiteOutput.property.indexDocument"></a>

- *Type:* [`aws-cdk-sdk.S3IndexDocument`](#aws-cdk-sdk.S3IndexDocument)

---

##### `redirectAllRequestsTo`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketWebsiteOutput.property.redirectAllRequestsTo"></a>

- *Type:* [`aws-cdk-sdk.S3RedirectAllRequestsTo`](#aws-cdk-sdk.S3RedirectAllRequestsTo)

---

##### `routingRules`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketWebsiteOutput.property.routingRules"></a>

- *Type:* [`aws-cdk-sdk.S3RoutingRule`](#aws-cdk-sdk.S3RoutingRule)[]

---

### S3GetBucketWebsiteRequest <a name="aws-cdk-sdk.S3GetBucketWebsiteRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetBucketWebsiteRequest } from 'aws-cdk-sdk'

const s3GetBucketWebsiteRequest: S3GetBucketWebsiteRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetBucketWebsiteRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetBucketWebsiteRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetObjectAclOutput <a name="aws-cdk-sdk.S3GetObjectAclOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetObjectAclOutput } from 'aws-cdk-sdk'

const s3GetObjectAclOutput: S3GetObjectAclOutput = { ... }
```

##### `grants`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectAclOutput.property.grants"></a>

- *Type:* [`aws-cdk-sdk.S3Grant`](#aws-cdk-sdk.S3Grant)[]

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectAclOutput.property.owner"></a>

- *Type:* [`aws-cdk-sdk.S3Owner`](#aws-cdk-sdk.S3Owner)

---

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectAclOutput.property.requestCharged"></a>

- *Type:* `string`

---

### S3GetObjectAclRequest <a name="aws-cdk-sdk.S3GetObjectAclRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetObjectAclRequest } from 'aws-cdk-sdk'

const s3GetObjectAclRequest: S3GetObjectAclRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetObjectAclRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetObjectAclRequest.property.key"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectAclRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectAclRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectAclRequest.property.versionId"></a>

- *Type:* `string`

---

### S3GetObjectLegalHoldOutput <a name="aws-cdk-sdk.S3GetObjectLegalHoldOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetObjectLegalHoldOutput } from 'aws-cdk-sdk'

const s3GetObjectLegalHoldOutput: S3GetObjectLegalHoldOutput = { ... }
```

##### `legalHold`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectLegalHoldOutput.property.legalHold"></a>

- *Type:* [`aws-cdk-sdk.S3ObjectLockLegalHold`](#aws-cdk-sdk.S3ObjectLockLegalHold)

---

### S3GetObjectLegalHoldRequest <a name="aws-cdk-sdk.S3GetObjectLegalHoldRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetObjectLegalHoldRequest } from 'aws-cdk-sdk'

const s3GetObjectLegalHoldRequest: S3GetObjectLegalHoldRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetObjectLegalHoldRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetObjectLegalHoldRequest.property.key"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectLegalHoldRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectLegalHoldRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectLegalHoldRequest.property.versionId"></a>

- *Type:* `string`

---

### S3GetObjectLockConfigurationOutput <a name="aws-cdk-sdk.S3GetObjectLockConfigurationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetObjectLockConfigurationOutput } from 'aws-cdk-sdk'

const s3GetObjectLockConfigurationOutput: S3GetObjectLockConfigurationOutput = { ... }
```

##### `objectLockConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectLockConfigurationOutput.property.objectLockConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3ObjectLockConfiguration`](#aws-cdk-sdk.S3ObjectLockConfiguration)

---

### S3GetObjectLockConfigurationRequest <a name="aws-cdk-sdk.S3GetObjectLockConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetObjectLockConfigurationRequest } from 'aws-cdk-sdk'

const s3GetObjectLockConfigurationRequest: S3GetObjectLockConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetObjectLockConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectLockConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GetObjectOutput <a name="aws-cdk-sdk.S3GetObjectOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetObjectOutput } from 'aws-cdk-sdk'

const s3GetObjectOutput: S3GetObjectOutput = { ... }
```

##### `acceptRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.acceptRanges"></a>

- *Type:* `string`

---

##### `body`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.body"></a>

- *Type:* `any`

---

##### `cacheControl`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.cacheControl"></a>

- *Type:* `string`

---

##### `contentDisposition`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.contentDisposition"></a>

- *Type:* `string`

---

##### `contentEncoding`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.contentEncoding"></a>

- *Type:* `string`

---

##### `contentLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.contentLanguage"></a>

- *Type:* `string`

---

##### `contentLength`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.contentLength"></a>

- *Type:* `number`

---

##### `contentRange`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.contentRange"></a>

- *Type:* `string`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.contentType"></a>

- *Type:* `string`

---

##### `deleteMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.deleteMarker"></a>

- *Type:* `boolean`

---

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.eTag"></a>

- *Type:* `string`

---

##### `expiration`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.expiration"></a>

- *Type:* `string`

---

##### `expires`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.expires"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.lastModified"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.metadata"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `missingMeta`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.missingMeta"></a>

- *Type:* `number`

---

##### `objectLockLegalHoldStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.objectLockLegalHoldStatus"></a>

- *Type:* `string`

---

##### `objectLockMode`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.objectLockMode"></a>

- *Type:* `string`

---

##### `objectLockRetainUntilDate`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.objectLockRetainUntilDate"></a>

- *Type:* `string`

---

##### `partsCount`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.partsCount"></a>

- *Type:* `number`

---

##### `replicationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.replicationStatus"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.requestCharged"></a>

- *Type:* `string`

---

##### `restore`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.restore"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.storageClass"></a>

- *Type:* `string`

---

##### `tagCount`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.tagCount"></a>

- *Type:* `number`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.versionId"></a>

- *Type:* `string`

---

##### `websiteRedirectLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectOutput.property.websiteRedirectLocation"></a>

- *Type:* `string`

---

### S3GetObjectRequest <a name="aws-cdk-sdk.S3GetObjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetObjectRequest } from 'aws-cdk-sdk'

const s3GetObjectRequest: S3GetObjectRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetObjectRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetObjectRequest.property.key"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `ifMatch`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectRequest.property.ifMatch"></a>

- *Type:* `string`

---

##### `ifModifiedSince`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectRequest.property.ifModifiedSince"></a>

- *Type:* `string`

---

##### `ifNoneMatch`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectRequest.property.ifNoneMatch"></a>

- *Type:* `string`

---

##### `ifUnmodifiedSince`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectRequest.property.ifUnmodifiedSince"></a>

- *Type:* `string`

---

##### `partNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectRequest.property.partNumber"></a>

- *Type:* `number`

---

##### `range`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectRequest.property.range"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `responseCacheControl`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectRequest.property.responseCacheControl"></a>

- *Type:* `string`

---

##### `responseContentDisposition`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectRequest.property.responseContentDisposition"></a>

- *Type:* `string`

---

##### `responseContentEncoding`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectRequest.property.responseContentEncoding"></a>

- *Type:* `string`

---

##### `responseContentLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectRequest.property.responseContentLanguage"></a>

- *Type:* `string`

---

##### `responseContentType`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectRequest.property.responseContentType"></a>

- *Type:* `string`

---

##### `responseExpires`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectRequest.property.responseExpires"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectRequest.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKey`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectRequest.property.sseCustomerKey"></a>

- *Type:* `any`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectRequest.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectRequest.property.versionId"></a>

- *Type:* `string`

---

### S3GetObjectRetentionOutput <a name="aws-cdk-sdk.S3GetObjectRetentionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetObjectRetentionOutput } from 'aws-cdk-sdk'

const s3GetObjectRetentionOutput: S3GetObjectRetentionOutput = { ... }
```

##### `retention`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectRetentionOutput.property.retention"></a>

- *Type:* [`aws-cdk-sdk.S3ObjectLockRetention`](#aws-cdk-sdk.S3ObjectLockRetention)

---

### S3GetObjectRetentionRequest <a name="aws-cdk-sdk.S3GetObjectRetentionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetObjectRetentionRequest } from 'aws-cdk-sdk'

const s3GetObjectRetentionRequest: S3GetObjectRetentionRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetObjectRetentionRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetObjectRetentionRequest.property.key"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectRetentionRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectRetentionRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectRetentionRequest.property.versionId"></a>

- *Type:* `string`

---

### S3GetObjectTaggingOutput <a name="aws-cdk-sdk.S3GetObjectTaggingOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetObjectTaggingOutput } from 'aws-cdk-sdk'

const s3GetObjectTaggingOutput: S3GetObjectTaggingOutput = { ... }
```

##### `tagSet`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetObjectTaggingOutput.property.tagSet"></a>

- *Type:* [`aws-cdk-sdk.S3Tag`](#aws-cdk-sdk.S3Tag)[]

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectTaggingOutput.property.versionId"></a>

- *Type:* `string`

---

### S3GetObjectTaggingRequest <a name="aws-cdk-sdk.S3GetObjectTaggingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetObjectTaggingRequest } from 'aws-cdk-sdk'

const s3GetObjectTaggingRequest: S3GetObjectTaggingRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetObjectTaggingRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetObjectTaggingRequest.property.key"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectTaggingRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectTaggingRequest.property.versionId"></a>

- *Type:* `string`

---

### S3GetObjectTorrentOutput <a name="aws-cdk-sdk.S3GetObjectTorrentOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetObjectTorrentOutput } from 'aws-cdk-sdk'

const s3GetObjectTorrentOutput: S3GetObjectTorrentOutput = { ... }
```

##### `body`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectTorrentOutput.property.body"></a>

- *Type:* `any`

---

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectTorrentOutput.property.requestCharged"></a>

- *Type:* `string`

---

### S3GetObjectTorrentRequest <a name="aws-cdk-sdk.S3GetObjectTorrentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetObjectTorrentRequest } from 'aws-cdk-sdk'

const s3GetObjectTorrentRequest: S3GetObjectTorrentRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetObjectTorrentRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetObjectTorrentRequest.property.key"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectTorrentRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetObjectTorrentRequest.property.requestPayer"></a>

- *Type:* `string`

---

### S3GetPublicAccessBlockOutput <a name="aws-cdk-sdk.S3GetPublicAccessBlockOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetPublicAccessBlockOutput } from 'aws-cdk-sdk'

const s3GetPublicAccessBlockOutput: S3GetPublicAccessBlockOutput = { ... }
```

##### `publicAccessBlockConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetPublicAccessBlockOutput.property.publicAccessBlockConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3PublicAccessBlockConfiguration`](#aws-cdk-sdk.S3PublicAccessBlockConfiguration)

---

### S3GetPublicAccessBlockRequest <a name="aws-cdk-sdk.S3GetPublicAccessBlockRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GetPublicAccessBlockRequest } from 'aws-cdk-sdk'

const s3GetPublicAccessBlockRequest: S3GetPublicAccessBlockRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3GetPublicAccessBlockRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3GetPublicAccessBlockRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3GlacierJobParameters <a name="aws-cdk-sdk.S3GlacierJobParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3GlacierJobParameters } from 'aws-cdk-sdk'

const s3GlacierJobParameters: S3GlacierJobParameters = { ... }
```

##### `tier`<sup>Required</sup> <a name="aws-cdk-sdk.S3GlacierJobParameters.property.tier"></a>

- *Type:* `string`

---

### S3Grant <a name="aws-cdk-sdk.S3Grant"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3Grant } from 'aws-cdk-sdk'

const s3Grant: S3Grant = { ... }
```

##### `grantee`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Grant.property.grantee"></a>

- *Type:* [`aws-cdk-sdk.S3Grantee`](#aws-cdk-sdk.S3Grantee)

---

##### `permission`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Grant.property.permission"></a>

- *Type:* `string`

---

### S3Grantee <a name="aws-cdk-sdk.S3Grantee"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3Grantee } from 'aws-cdk-sdk'

const s3Grantee: S3Grantee = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.S3Grantee.property.type"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Grantee.property.displayName"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Grantee.property.emailAddress"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Grantee.property.id"></a>

- *Type:* `string`

---

##### `uri`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Grantee.property.uri"></a>

- *Type:* `string`

---

### S3HeadBucketRequest <a name="aws-cdk-sdk.S3HeadBucketRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3HeadBucketRequest } from 'aws-cdk-sdk'

const s3HeadBucketRequest: S3HeadBucketRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3HeadBucketRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadBucketRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3HeadObjectOutput <a name="aws-cdk-sdk.S3HeadObjectOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3HeadObjectOutput } from 'aws-cdk-sdk'

const s3HeadObjectOutput: S3HeadObjectOutput = { ... }
```

##### `acceptRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.acceptRanges"></a>

- *Type:* `string`

---

##### `archiveStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.archiveStatus"></a>

- *Type:* `string`

---

##### `cacheControl`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.cacheControl"></a>

- *Type:* `string`

---

##### `contentDisposition`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.contentDisposition"></a>

- *Type:* `string`

---

##### `contentEncoding`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.contentEncoding"></a>

- *Type:* `string`

---

##### `contentLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.contentLanguage"></a>

- *Type:* `string`

---

##### `contentLength`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.contentLength"></a>

- *Type:* `number`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.contentType"></a>

- *Type:* `string`

---

##### `deleteMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.deleteMarker"></a>

- *Type:* `boolean`

---

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.eTag"></a>

- *Type:* `string`

---

##### `expiration`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.expiration"></a>

- *Type:* `string`

---

##### `expires`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.expires"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.lastModified"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.metadata"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `missingMeta`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.missingMeta"></a>

- *Type:* `number`

---

##### `objectLockLegalHoldStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.objectLockLegalHoldStatus"></a>

- *Type:* `string`

---

##### `objectLockMode`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.objectLockMode"></a>

- *Type:* `string`

---

##### `objectLockRetainUntilDate`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.objectLockRetainUntilDate"></a>

- *Type:* `string`

---

##### `partsCount`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.partsCount"></a>

- *Type:* `number`

---

##### `replicationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.replicationStatus"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.requestCharged"></a>

- *Type:* `string`

---

##### `restore`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.restore"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.storageClass"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.versionId"></a>

- *Type:* `string`

---

##### `websiteRedirectLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectOutput.property.websiteRedirectLocation"></a>

- *Type:* `string`

---

### S3HeadObjectRequest <a name="aws-cdk-sdk.S3HeadObjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3HeadObjectRequest } from 'aws-cdk-sdk'

const s3HeadObjectRequest: S3HeadObjectRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3HeadObjectRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3HeadObjectRequest.property.key"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `ifMatch`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectRequest.property.ifMatch"></a>

- *Type:* `string`

---

##### `ifModifiedSince`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectRequest.property.ifModifiedSince"></a>

- *Type:* `string`

---

##### `ifNoneMatch`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectRequest.property.ifNoneMatch"></a>

- *Type:* `string`

---

##### `ifUnmodifiedSince`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectRequest.property.ifUnmodifiedSince"></a>

- *Type:* `string`

---

##### `partNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectRequest.property.partNumber"></a>

- *Type:* `number`

---

##### `range`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectRequest.property.range"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectRequest.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKey`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectRequest.property.sseCustomerKey"></a>

- *Type:* `any`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectRequest.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3HeadObjectRequest.property.versionId"></a>

- *Type:* `string`

---

### S3IndexDocument <a name="aws-cdk-sdk.S3IndexDocument"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3IndexDocument } from 'aws-cdk-sdk'

const s3IndexDocument: S3IndexDocument = { ... }
```

##### `suffix`<sup>Required</sup> <a name="aws-cdk-sdk.S3IndexDocument.property.suffix"></a>

- *Type:* `string`

---

### S3Initiator <a name="aws-cdk-sdk.S3Initiator"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3Initiator } from 'aws-cdk-sdk'

const s3Initiator: S3Initiator = { ... }
```

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Initiator.property.displayName"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Initiator.property.id"></a>

- *Type:* `string`

---

### S3InputSerialization <a name="aws-cdk-sdk.S3InputSerialization"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3InputSerialization } from 'aws-cdk-sdk'

const s3InputSerialization: S3InputSerialization = { ... }
```

##### `compressionType`<sup>Optional</sup> <a name="aws-cdk-sdk.S3InputSerialization.property.compressionType"></a>

- *Type:* `string`

---

##### `csv`<sup>Optional</sup> <a name="aws-cdk-sdk.S3InputSerialization.property.csv"></a>

- *Type:* [`aws-cdk-sdk.S3CsvInput`](#aws-cdk-sdk.S3CsvInput)

---

##### `json`<sup>Optional</sup> <a name="aws-cdk-sdk.S3InputSerialization.property.json"></a>

- *Type:* [`aws-cdk-sdk.S3JsonInput`](#aws-cdk-sdk.S3JsonInput)

---

##### `parquet`<sup>Optional</sup> <a name="aws-cdk-sdk.S3InputSerialization.property.parquet"></a>

- *Type:* [`aws-cdk-sdk.S3ParquetInput`](#aws-cdk-sdk.S3ParquetInput)

---

### S3IntelligentTieringAndOperator <a name="aws-cdk-sdk.S3IntelligentTieringAndOperator"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3IntelligentTieringAndOperator } from 'aws-cdk-sdk'

const s3IntelligentTieringAndOperator: S3IntelligentTieringAndOperator = { ... }
```

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.S3IntelligentTieringAndOperator.property.prefix"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.S3IntelligentTieringAndOperator.property.tags"></a>

- *Type:* [`aws-cdk-sdk.S3Tag`](#aws-cdk-sdk.S3Tag)[]

---

### S3IntelligentTieringConfiguration <a name="aws-cdk-sdk.S3IntelligentTieringConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3IntelligentTieringConfiguration } from 'aws-cdk-sdk'

const s3IntelligentTieringConfiguration: S3IntelligentTieringConfiguration = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3IntelligentTieringConfiguration.property.id"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.S3IntelligentTieringConfiguration.property.status"></a>

- *Type:* `string`

---

##### `tierings`<sup>Required</sup> <a name="aws-cdk-sdk.S3IntelligentTieringConfiguration.property.tierings"></a>

- *Type:* [`aws-cdk-sdk.S3Tiering`](#aws-cdk-sdk.S3Tiering)[]

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3IntelligentTieringConfiguration.property.filter"></a>

- *Type:* [`aws-cdk-sdk.S3IntelligentTieringFilter`](#aws-cdk-sdk.S3IntelligentTieringFilter)

---

### S3IntelligentTieringFilter <a name="aws-cdk-sdk.S3IntelligentTieringFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3IntelligentTieringFilter } from 'aws-cdk-sdk'

const s3IntelligentTieringFilter: S3IntelligentTieringFilter = { ... }
```

##### `and`<sup>Optional</sup> <a name="aws-cdk-sdk.S3IntelligentTieringFilter.property.and"></a>

- *Type:* [`aws-cdk-sdk.S3IntelligentTieringAndOperator`](#aws-cdk-sdk.S3IntelligentTieringAndOperator)

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.S3IntelligentTieringFilter.property.prefix"></a>

- *Type:* `string`

---

##### `tag`<sup>Optional</sup> <a name="aws-cdk-sdk.S3IntelligentTieringFilter.property.tag"></a>

- *Type:* [`aws-cdk-sdk.S3Tag`](#aws-cdk-sdk.S3Tag)

---

### S3InventoryConfiguration <a name="aws-cdk-sdk.S3InventoryConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3InventoryConfiguration } from 'aws-cdk-sdk'

const s3InventoryConfiguration: S3InventoryConfiguration = { ... }
```

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.S3InventoryConfiguration.property.destination"></a>

- *Type:* [`aws-cdk-sdk.S3InventoryDestination`](#aws-cdk-sdk.S3InventoryDestination)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3InventoryConfiguration.property.id"></a>

- *Type:* `string`

---

##### `includedObjectVersions`<sup>Required</sup> <a name="aws-cdk-sdk.S3InventoryConfiguration.property.includedObjectVersions"></a>

- *Type:* `string`

---

##### `isEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.S3InventoryConfiguration.property.isEnabled"></a>

- *Type:* `boolean`

---

##### `schedule`<sup>Required</sup> <a name="aws-cdk-sdk.S3InventoryConfiguration.property.schedule"></a>

- *Type:* [`aws-cdk-sdk.S3InventorySchedule`](#aws-cdk-sdk.S3InventorySchedule)

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3InventoryConfiguration.property.filter"></a>

- *Type:* [`aws-cdk-sdk.S3InventoryFilter`](#aws-cdk-sdk.S3InventoryFilter)

---

##### `optionalFields`<sup>Optional</sup> <a name="aws-cdk-sdk.S3InventoryConfiguration.property.optionalFields"></a>

- *Type:* `string`[]

---

### S3InventoryDestination <a name="aws-cdk-sdk.S3InventoryDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3InventoryDestination } from 'aws-cdk-sdk'

const s3InventoryDestination: S3InventoryDestination = { ... }
```

##### `s3BucketDestination`<sup>Required</sup> <a name="aws-cdk-sdk.S3InventoryDestination.property.s3BucketDestination"></a>

- *Type:* [`aws-cdk-sdk.S3InventoryS3BucketDestination`](#aws-cdk-sdk.S3InventoryS3BucketDestination)

---

### S3InventoryEncryption <a name="aws-cdk-sdk.S3InventoryEncryption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3InventoryEncryption } from 'aws-cdk-sdk'

const s3InventoryEncryption: S3InventoryEncryption = { ... }
```

##### `ssekms`<sup>Optional</sup> <a name="aws-cdk-sdk.S3InventoryEncryption.property.ssekms"></a>

- *Type:* [`aws-cdk-sdk.S3Ssekms`](#aws-cdk-sdk.S3Ssekms)

---

##### `sses3`<sup>Optional</sup> <a name="aws-cdk-sdk.S3InventoryEncryption.property.sses3"></a>

- *Type:* [`aws-cdk-sdk.S3Sses3`](#aws-cdk-sdk.S3Sses3)

---

### S3InventoryFilter <a name="aws-cdk-sdk.S3InventoryFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3InventoryFilter } from 'aws-cdk-sdk'

const s3InventoryFilter: S3InventoryFilter = { ... }
```

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.S3InventoryFilter.property.prefix"></a>

- *Type:* `string`

---

### S3InventoryS3BucketDestination <a name="aws-cdk-sdk.S3InventoryS3BucketDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3InventoryS3BucketDestination } from 'aws-cdk-sdk'

const s3InventoryS3BucketDestination: S3InventoryS3BucketDestination = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3InventoryS3BucketDestination.property.bucket"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.S3InventoryS3BucketDestination.property.format"></a>

- *Type:* `string`

---

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3InventoryS3BucketDestination.property.accountId"></a>

- *Type:* `string`

---

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.S3InventoryS3BucketDestination.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.S3InventoryEncryption`](#aws-cdk-sdk.S3InventoryEncryption)

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.S3InventoryS3BucketDestination.property.prefix"></a>

- *Type:* `string`

---

### S3InventorySchedule <a name="aws-cdk-sdk.S3InventorySchedule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3InventorySchedule } from 'aws-cdk-sdk'

const s3InventorySchedule: S3InventorySchedule = { ... }
```

##### `frequency`<sup>Required</sup> <a name="aws-cdk-sdk.S3InventorySchedule.property.frequency"></a>

- *Type:* `string`

---

### S3JsonInput <a name="aws-cdk-sdk.S3JsonInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3JsonInput } from 'aws-cdk-sdk'

const s3JsonInput: S3JsonInput = { ... }
```

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.S3JsonInput.property.type"></a>

- *Type:* `string`

---

### S3JsonOutput <a name="aws-cdk-sdk.S3JsonOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3JsonOutput } from 'aws-cdk-sdk'

const s3JsonOutput: S3JsonOutput = { ... }
```

##### `recordDelimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3JsonOutput.property.recordDelimiter"></a>

- *Type:* `string`

---

### S3LambdaFunctionConfiguration <a name="aws-cdk-sdk.S3LambdaFunctionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3LambdaFunctionConfiguration } from 'aws-cdk-sdk'

const s3LambdaFunctionConfiguration: S3LambdaFunctionConfiguration = { ... }
```

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.S3LambdaFunctionConfiguration.property.events"></a>

- *Type:* `string`[]

---

##### `lambdaFunctionArn`<sup>Required</sup> <a name="aws-cdk-sdk.S3LambdaFunctionConfiguration.property.lambdaFunctionArn"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3LambdaFunctionConfiguration.property.filter"></a>

- *Type:* [`aws-cdk-sdk.S3NotificationConfigurationFilter`](#aws-cdk-sdk.S3NotificationConfigurationFilter)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.S3LambdaFunctionConfiguration.property.id"></a>

- *Type:* `string`

---

### S3LifecycleConfiguration <a name="aws-cdk-sdk.S3LifecycleConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3LifecycleConfiguration } from 'aws-cdk-sdk'

const s3LifecycleConfiguration: S3LifecycleConfiguration = { ... }
```

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.S3LifecycleConfiguration.property.rules"></a>

- *Type:* [`aws-cdk-sdk.S3Rule`](#aws-cdk-sdk.S3Rule)[]

---

### S3LifecycleExpiration <a name="aws-cdk-sdk.S3LifecycleExpiration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3LifecycleExpiration } from 'aws-cdk-sdk'

const s3LifecycleExpiration: S3LifecycleExpiration = { ... }
```

##### `date`<sup>Optional</sup> <a name="aws-cdk-sdk.S3LifecycleExpiration.property.date"></a>

- *Type:* `string`

---

##### `days`<sup>Optional</sup> <a name="aws-cdk-sdk.S3LifecycleExpiration.property.days"></a>

- *Type:* `number`

---

##### `expiredObjectDeleteMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.S3LifecycleExpiration.property.expiredObjectDeleteMarker"></a>

- *Type:* `boolean`

---

### S3LifecycleRule <a name="aws-cdk-sdk.S3LifecycleRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3LifecycleRule } from 'aws-cdk-sdk'

const s3LifecycleRule: S3LifecycleRule = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.S3LifecycleRule.property.status"></a>

- *Type:* `string`

---

##### `abortIncompleteMultipartUpload`<sup>Optional</sup> <a name="aws-cdk-sdk.S3LifecycleRule.property.abortIncompleteMultipartUpload"></a>

- *Type:* [`aws-cdk-sdk.S3AbortIncompleteMultipartUpload`](#aws-cdk-sdk.S3AbortIncompleteMultipartUpload)

---

##### `expiration`<sup>Optional</sup> <a name="aws-cdk-sdk.S3LifecycleRule.property.expiration"></a>

- *Type:* [`aws-cdk-sdk.S3LifecycleExpiration`](#aws-cdk-sdk.S3LifecycleExpiration)

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3LifecycleRule.property.filter"></a>

- *Type:* [`aws-cdk-sdk.S3LifecycleRuleFilter`](#aws-cdk-sdk.S3LifecycleRuleFilter)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.S3LifecycleRule.property.id"></a>

- *Type:* `string`

---

##### `noncurrentVersionExpiration`<sup>Optional</sup> <a name="aws-cdk-sdk.S3LifecycleRule.property.noncurrentVersionExpiration"></a>

- *Type:* [`aws-cdk-sdk.S3NoncurrentVersionExpiration`](#aws-cdk-sdk.S3NoncurrentVersionExpiration)

---

##### `noncurrentVersionTransitions`<sup>Optional</sup> <a name="aws-cdk-sdk.S3LifecycleRule.property.noncurrentVersionTransitions"></a>

- *Type:* [`aws-cdk-sdk.S3NoncurrentVersionTransition`](#aws-cdk-sdk.S3NoncurrentVersionTransition)[]

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.S3LifecycleRule.property.prefix"></a>

- *Type:* `string`

---

##### `transitions`<sup>Optional</sup> <a name="aws-cdk-sdk.S3LifecycleRule.property.transitions"></a>

- *Type:* [`aws-cdk-sdk.S3Transition`](#aws-cdk-sdk.S3Transition)[]

---

### S3LifecycleRuleAndOperator <a name="aws-cdk-sdk.S3LifecycleRuleAndOperator"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3LifecycleRuleAndOperator } from 'aws-cdk-sdk'

const s3LifecycleRuleAndOperator: S3LifecycleRuleAndOperator = { ... }
```

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.S3LifecycleRuleAndOperator.property.prefix"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.S3LifecycleRuleAndOperator.property.tags"></a>

- *Type:* [`aws-cdk-sdk.S3Tag`](#aws-cdk-sdk.S3Tag)[]

---

### S3LifecycleRuleFilter <a name="aws-cdk-sdk.S3LifecycleRuleFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3LifecycleRuleFilter } from 'aws-cdk-sdk'

const s3LifecycleRuleFilter: S3LifecycleRuleFilter = { ... }
```

##### `and`<sup>Optional</sup> <a name="aws-cdk-sdk.S3LifecycleRuleFilter.property.and"></a>

- *Type:* [`aws-cdk-sdk.S3LifecycleRuleAndOperator`](#aws-cdk-sdk.S3LifecycleRuleAndOperator)

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.S3LifecycleRuleFilter.property.prefix"></a>

- *Type:* `string`

---

##### `tag`<sup>Optional</sup> <a name="aws-cdk-sdk.S3LifecycleRuleFilter.property.tag"></a>

- *Type:* [`aws-cdk-sdk.S3Tag`](#aws-cdk-sdk.S3Tag)

---

### S3ListBucketAnalyticsConfigurationsOutput <a name="aws-cdk-sdk.S3ListBucketAnalyticsConfigurationsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ListBucketAnalyticsConfigurationsOutput } from 'aws-cdk-sdk'

const s3ListBucketAnalyticsConfigurationsOutput: S3ListBucketAnalyticsConfigurationsOutput = { ... }
```

##### `analyticsConfigurationList`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListBucketAnalyticsConfigurationsOutput.property.analyticsConfigurationList"></a>

- *Type:* [`aws-cdk-sdk.S3AnalyticsConfiguration`](#aws-cdk-sdk.S3AnalyticsConfiguration)[]

---

##### `continuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListBucketAnalyticsConfigurationsOutput.property.continuationToken"></a>

- *Type:* `string`

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListBucketAnalyticsConfigurationsOutput.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `nextContinuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListBucketAnalyticsConfigurationsOutput.property.nextContinuationToken"></a>

- *Type:* `string`

---

### S3ListBucketAnalyticsConfigurationsRequest <a name="aws-cdk-sdk.S3ListBucketAnalyticsConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ListBucketAnalyticsConfigurationsRequest } from 'aws-cdk-sdk'

const s3ListBucketAnalyticsConfigurationsRequest: S3ListBucketAnalyticsConfigurationsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3ListBucketAnalyticsConfigurationsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `continuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListBucketAnalyticsConfigurationsRequest.property.continuationToken"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListBucketAnalyticsConfigurationsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3ListBucketIntelligentTieringConfigurationsOutput <a name="aws-cdk-sdk.S3ListBucketIntelligentTieringConfigurationsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ListBucketIntelligentTieringConfigurationsOutput } from 'aws-cdk-sdk'

const s3ListBucketIntelligentTieringConfigurationsOutput: S3ListBucketIntelligentTieringConfigurationsOutput = { ... }
```

##### `continuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListBucketIntelligentTieringConfigurationsOutput.property.continuationToken"></a>

- *Type:* `string`

---

##### `intelligentTieringConfigurationList`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListBucketIntelligentTieringConfigurationsOutput.property.intelligentTieringConfigurationList"></a>

- *Type:* [`aws-cdk-sdk.S3IntelligentTieringConfiguration`](#aws-cdk-sdk.S3IntelligentTieringConfiguration)[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListBucketIntelligentTieringConfigurationsOutput.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `nextContinuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListBucketIntelligentTieringConfigurationsOutput.property.nextContinuationToken"></a>

- *Type:* `string`

---

### S3ListBucketIntelligentTieringConfigurationsRequest <a name="aws-cdk-sdk.S3ListBucketIntelligentTieringConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ListBucketIntelligentTieringConfigurationsRequest } from 'aws-cdk-sdk'

const s3ListBucketIntelligentTieringConfigurationsRequest: S3ListBucketIntelligentTieringConfigurationsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3ListBucketIntelligentTieringConfigurationsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `continuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListBucketIntelligentTieringConfigurationsRequest.property.continuationToken"></a>

- *Type:* `string`

---

### S3ListBucketInventoryConfigurationsOutput <a name="aws-cdk-sdk.S3ListBucketInventoryConfigurationsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ListBucketInventoryConfigurationsOutput } from 'aws-cdk-sdk'

const s3ListBucketInventoryConfigurationsOutput: S3ListBucketInventoryConfigurationsOutput = { ... }
```

##### `continuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListBucketInventoryConfigurationsOutput.property.continuationToken"></a>

- *Type:* `string`

---

##### `inventoryConfigurationList`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListBucketInventoryConfigurationsOutput.property.inventoryConfigurationList"></a>

- *Type:* [`aws-cdk-sdk.S3InventoryConfiguration`](#aws-cdk-sdk.S3InventoryConfiguration)[]

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListBucketInventoryConfigurationsOutput.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `nextContinuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListBucketInventoryConfigurationsOutput.property.nextContinuationToken"></a>

- *Type:* `string`

---

### S3ListBucketInventoryConfigurationsRequest <a name="aws-cdk-sdk.S3ListBucketInventoryConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ListBucketInventoryConfigurationsRequest } from 'aws-cdk-sdk'

const s3ListBucketInventoryConfigurationsRequest: S3ListBucketInventoryConfigurationsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3ListBucketInventoryConfigurationsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `continuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListBucketInventoryConfigurationsRequest.property.continuationToken"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListBucketInventoryConfigurationsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3ListBucketMetricsConfigurationsOutput <a name="aws-cdk-sdk.S3ListBucketMetricsConfigurationsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ListBucketMetricsConfigurationsOutput } from 'aws-cdk-sdk'

const s3ListBucketMetricsConfigurationsOutput: S3ListBucketMetricsConfigurationsOutput = { ... }
```

##### `continuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListBucketMetricsConfigurationsOutput.property.continuationToken"></a>

- *Type:* `string`

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListBucketMetricsConfigurationsOutput.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `metricsConfigurationList`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListBucketMetricsConfigurationsOutput.property.metricsConfigurationList"></a>

- *Type:* [`aws-cdk-sdk.S3MetricsConfiguration`](#aws-cdk-sdk.S3MetricsConfiguration)[]

---

##### `nextContinuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListBucketMetricsConfigurationsOutput.property.nextContinuationToken"></a>

- *Type:* `string`

---

### S3ListBucketMetricsConfigurationsRequest <a name="aws-cdk-sdk.S3ListBucketMetricsConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ListBucketMetricsConfigurationsRequest } from 'aws-cdk-sdk'

const s3ListBucketMetricsConfigurationsRequest: S3ListBucketMetricsConfigurationsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3ListBucketMetricsConfigurationsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `continuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListBucketMetricsConfigurationsRequest.property.continuationToken"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListBucketMetricsConfigurationsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3ListBucketsOutput <a name="aws-cdk-sdk.S3ListBucketsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ListBucketsOutput } from 'aws-cdk-sdk'

const s3ListBucketsOutput: S3ListBucketsOutput = { ... }
```

##### `buckets`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListBucketsOutput.property.buckets"></a>

- *Type:* [`aws-cdk-sdk.S3Bucket`](#aws-cdk-sdk.S3Bucket)[]

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListBucketsOutput.property.owner"></a>

- *Type:* [`aws-cdk-sdk.S3Owner`](#aws-cdk-sdk.S3Owner)

---

### S3ListMultipartUploadsOutput <a name="aws-cdk-sdk.S3ListMultipartUploadsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ListMultipartUploadsOutput } from 'aws-cdk-sdk'

const s3ListMultipartUploadsOutput: S3ListMultipartUploadsOutput = { ... }
```

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListMultipartUploadsOutput.property.bucket"></a>

- *Type:* `string`

---

##### `commonPrefixes`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListMultipartUploadsOutput.property.commonPrefixes"></a>

- *Type:* [`aws-cdk-sdk.S3CommonPrefix`](#aws-cdk-sdk.S3CommonPrefix)[]

---

##### `delimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListMultipartUploadsOutput.property.delimiter"></a>

- *Type:* `string`

---

##### `encodingType`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListMultipartUploadsOutput.property.encodingType"></a>

- *Type:* `string`

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListMultipartUploadsOutput.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `keyMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListMultipartUploadsOutput.property.keyMarker"></a>

- *Type:* `string`

---

##### `maxUploads`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListMultipartUploadsOutput.property.maxUploads"></a>

- *Type:* `number`

---

##### `nextKeyMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListMultipartUploadsOutput.property.nextKeyMarker"></a>

- *Type:* `string`

---

##### `nextUploadIdMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListMultipartUploadsOutput.property.nextUploadIdMarker"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListMultipartUploadsOutput.property.prefix"></a>

- *Type:* `string`

---

##### `uploadIdMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListMultipartUploadsOutput.property.uploadIdMarker"></a>

- *Type:* `string`

---

##### `uploads`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListMultipartUploadsOutput.property.uploads"></a>

- *Type:* [`aws-cdk-sdk.S3MultipartUpload`](#aws-cdk-sdk.S3MultipartUpload)[]

---

### S3ListMultipartUploadsRequest <a name="aws-cdk-sdk.S3ListMultipartUploadsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ListMultipartUploadsRequest } from 'aws-cdk-sdk'

const s3ListMultipartUploadsRequest: S3ListMultipartUploadsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3ListMultipartUploadsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `delimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListMultipartUploadsRequest.property.delimiter"></a>

- *Type:* `string`

---

##### `encodingType`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListMultipartUploadsRequest.property.encodingType"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListMultipartUploadsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `keyMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListMultipartUploadsRequest.property.keyMarker"></a>

- *Type:* `string`

---

##### `maxUploads`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListMultipartUploadsRequest.property.maxUploads"></a>

- *Type:* `number`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListMultipartUploadsRequest.property.prefix"></a>

- *Type:* `string`

---

##### `uploadIdMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListMultipartUploadsRequest.property.uploadIdMarker"></a>

- *Type:* `string`

---

### S3ListObjectsOutput <a name="aws-cdk-sdk.S3ListObjectsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ListObjectsOutput } from 'aws-cdk-sdk'

const s3ListObjectsOutput: S3ListObjectsOutput = { ... }
```

##### `commonPrefixes`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsOutput.property.commonPrefixes"></a>

- *Type:* [`aws-cdk-sdk.S3CommonPrefix`](#aws-cdk-sdk.S3CommonPrefix)[]

---

##### `contents`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsOutput.property.contents"></a>

- *Type:* [`aws-cdk-sdk.S3Object`](#aws-cdk-sdk.S3Object)[]

---

##### `delimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsOutput.property.delimiter"></a>

- *Type:* `string`

---

##### `encodingType`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsOutput.property.encodingType"></a>

- *Type:* `string`

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsOutput.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsOutput.property.marker"></a>

- *Type:* `string`

---

##### `maxKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsOutput.property.maxKeys"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsOutput.property.name"></a>

- *Type:* `string`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsOutput.property.nextMarker"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsOutput.property.prefix"></a>

- *Type:* `string`

---

### S3ListObjectsRequest <a name="aws-cdk-sdk.S3ListObjectsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ListObjectsRequest } from 'aws-cdk-sdk'

const s3ListObjectsRequest: S3ListObjectsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3ListObjectsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `delimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsRequest.property.delimiter"></a>

- *Type:* `string`

---

##### `encodingType`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsRequest.property.encodingType"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsRequest.property.maxKeys"></a>

- *Type:* `number`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsRequest.property.prefix"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsRequest.property.requestPayer"></a>

- *Type:* `string`

---

### S3ListObjectsV2Output <a name="aws-cdk-sdk.S3ListObjectsV2Output"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ListObjectsV2Output } from 'aws-cdk-sdk'

const s3ListObjectsV2Output: S3ListObjectsV2Output = { ... }
```

##### `commonPrefixes`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsV2Output.property.commonPrefixes"></a>

- *Type:* [`aws-cdk-sdk.S3CommonPrefix`](#aws-cdk-sdk.S3CommonPrefix)[]

---

##### `contents`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsV2Output.property.contents"></a>

- *Type:* [`aws-cdk-sdk.S3Object`](#aws-cdk-sdk.S3Object)[]

---

##### `continuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsV2Output.property.continuationToken"></a>

- *Type:* `string`

---

##### `delimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsV2Output.property.delimiter"></a>

- *Type:* `string`

---

##### `encodingType`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsV2Output.property.encodingType"></a>

- *Type:* `string`

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsV2Output.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `keyCount`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsV2Output.property.keyCount"></a>

- *Type:* `number`

---

##### `maxKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsV2Output.property.maxKeys"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsV2Output.property.name"></a>

- *Type:* `string`

---

##### `nextContinuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsV2Output.property.nextContinuationToken"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsV2Output.property.prefix"></a>

- *Type:* `string`

---

##### `startAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsV2Output.property.startAfter"></a>

- *Type:* `string`

---

### S3ListObjectsV2Request <a name="aws-cdk-sdk.S3ListObjectsV2Request"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ListObjectsV2Request } from 'aws-cdk-sdk'

const s3ListObjectsV2Request: S3ListObjectsV2Request = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3ListObjectsV2Request.property.bucket"></a>

- *Type:* `string`

---

##### `continuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsV2Request.property.continuationToken"></a>

- *Type:* `string`

---

##### `delimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsV2Request.property.delimiter"></a>

- *Type:* `string`

---

##### `encodingType`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsV2Request.property.encodingType"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsV2Request.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `fetchOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsV2Request.property.fetchOwner"></a>

- *Type:* `boolean`

---

##### `maxKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsV2Request.property.maxKeys"></a>

- *Type:* `number`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsV2Request.property.prefix"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsV2Request.property.requestPayer"></a>

- *Type:* `string`

---

##### `startAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectsV2Request.property.startAfter"></a>

- *Type:* `string`

---

### S3ListObjectVersionsOutput <a name="aws-cdk-sdk.S3ListObjectVersionsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ListObjectVersionsOutput } from 'aws-cdk-sdk'

const s3ListObjectVersionsOutput: S3ListObjectVersionsOutput = { ... }
```

##### `commonPrefixes`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectVersionsOutput.property.commonPrefixes"></a>

- *Type:* [`aws-cdk-sdk.S3CommonPrefix`](#aws-cdk-sdk.S3CommonPrefix)[]

---

##### `deleteMarkers`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectVersionsOutput.property.deleteMarkers"></a>

- *Type:* [`aws-cdk-sdk.S3DeleteMarkerEntry`](#aws-cdk-sdk.S3DeleteMarkerEntry)[]

---

##### `delimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectVersionsOutput.property.delimiter"></a>

- *Type:* `string`

---

##### `encodingType`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectVersionsOutput.property.encodingType"></a>

- *Type:* `string`

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectVersionsOutput.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `keyMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectVersionsOutput.property.keyMarker"></a>

- *Type:* `string`

---

##### `maxKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectVersionsOutput.property.maxKeys"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectVersionsOutput.property.name"></a>

- *Type:* `string`

---

##### `nextKeyMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectVersionsOutput.property.nextKeyMarker"></a>

- *Type:* `string`

---

##### `nextVersionIdMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectVersionsOutput.property.nextVersionIdMarker"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectVersionsOutput.property.prefix"></a>

- *Type:* `string`

---

##### `versionIdMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectVersionsOutput.property.versionIdMarker"></a>

- *Type:* `string`

---

##### `versions`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectVersionsOutput.property.versions"></a>

- *Type:* [`aws-cdk-sdk.S3ObjectVersion`](#aws-cdk-sdk.S3ObjectVersion)[]

---

### S3ListObjectVersionsRequest <a name="aws-cdk-sdk.S3ListObjectVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ListObjectVersionsRequest } from 'aws-cdk-sdk'

const s3ListObjectVersionsRequest: S3ListObjectVersionsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3ListObjectVersionsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `delimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectVersionsRequest.property.delimiter"></a>

- *Type:* `string`

---

##### `encodingType`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectVersionsRequest.property.encodingType"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectVersionsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `keyMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectVersionsRequest.property.keyMarker"></a>

- *Type:* `string`

---

##### `maxKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectVersionsRequest.property.maxKeys"></a>

- *Type:* `number`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectVersionsRequest.property.prefix"></a>

- *Type:* `string`

---

##### `versionIdMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListObjectVersionsRequest.property.versionIdMarker"></a>

- *Type:* `string`

---

### S3ListPartsOutput <a name="aws-cdk-sdk.S3ListPartsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ListPartsOutput } from 'aws-cdk-sdk'

const s3ListPartsOutput: S3ListPartsOutput = { ... }
```

##### `abortDate`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListPartsOutput.property.abortDate"></a>

- *Type:* `string`

---

##### `abortRuleId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListPartsOutput.property.abortRuleId"></a>

- *Type:* `string`

---

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListPartsOutput.property.bucket"></a>

- *Type:* `string`

---

##### `initiator`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListPartsOutput.property.initiator"></a>

- *Type:* [`aws-cdk-sdk.S3Initiator`](#aws-cdk-sdk.S3Initiator)

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListPartsOutput.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListPartsOutput.property.key"></a>

- *Type:* `string`

---

##### `maxParts`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListPartsOutput.property.maxParts"></a>

- *Type:* `number`

---

##### `nextPartNumberMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListPartsOutput.property.nextPartNumberMarker"></a>

- *Type:* `number`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListPartsOutput.property.owner"></a>

- *Type:* [`aws-cdk-sdk.S3Owner`](#aws-cdk-sdk.S3Owner)

---

##### `partNumberMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListPartsOutput.property.partNumberMarker"></a>

- *Type:* `number`

---

##### `parts`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListPartsOutput.property.parts"></a>

- *Type:* [`aws-cdk-sdk.S3Part`](#aws-cdk-sdk.S3Part)[]

---

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListPartsOutput.property.requestCharged"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListPartsOutput.property.storageClass"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListPartsOutput.property.uploadId"></a>

- *Type:* `string`

---

### S3ListPartsRequest <a name="aws-cdk-sdk.S3ListPartsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ListPartsRequest } from 'aws-cdk-sdk'

const s3ListPartsRequest: S3ListPartsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3ListPartsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3ListPartsRequest.property.key"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.S3ListPartsRequest.property.uploadId"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListPartsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `maxParts`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListPartsRequest.property.maxParts"></a>

- *Type:* `number`

---

##### `partNumberMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListPartsRequest.property.partNumberMarker"></a>

- *Type:* `number`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ListPartsRequest.property.requestPayer"></a>

- *Type:* `string`

---

### S3LoggingEnabled <a name="aws-cdk-sdk.S3LoggingEnabled"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3LoggingEnabled } from 'aws-cdk-sdk'

const s3LoggingEnabled: S3LoggingEnabled = { ... }
```

##### `targetBucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3LoggingEnabled.property.targetBucket"></a>

- *Type:* `string`

---

##### `targetPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.S3LoggingEnabled.property.targetPrefix"></a>

- *Type:* `string`

---

##### `targetGrants`<sup>Optional</sup> <a name="aws-cdk-sdk.S3LoggingEnabled.property.targetGrants"></a>

- *Type:* [`aws-cdk-sdk.S3TargetGrant`](#aws-cdk-sdk.S3TargetGrant)[]

---

### S3MetadataEntry <a name="aws-cdk-sdk.S3MetadataEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3MetadataEntry } from 'aws-cdk-sdk'

const s3MetadataEntry: S3MetadataEntry = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.S3MetadataEntry.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.S3MetadataEntry.property.value"></a>

- *Type:* `string`

---

### S3Metrics <a name="aws-cdk-sdk.S3Metrics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3Metrics } from 'aws-cdk-sdk'

const s3Metrics: S3Metrics = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.S3Metrics.property.status"></a>

- *Type:* `string`

---

##### `eventThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Metrics.property.eventThreshold"></a>

- *Type:* [`aws-cdk-sdk.S3ReplicationTimeValue`](#aws-cdk-sdk.S3ReplicationTimeValue)

---

### S3MetricsAndOperator <a name="aws-cdk-sdk.S3MetricsAndOperator"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3MetricsAndOperator } from 'aws-cdk-sdk'

const s3MetricsAndOperator: S3MetricsAndOperator = { ... }
```

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.S3MetricsAndOperator.property.prefix"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.S3MetricsAndOperator.property.tags"></a>

- *Type:* [`aws-cdk-sdk.S3Tag`](#aws-cdk-sdk.S3Tag)[]

---

### S3MetricsConfiguration <a name="aws-cdk-sdk.S3MetricsConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3MetricsConfiguration } from 'aws-cdk-sdk'

const s3MetricsConfiguration: S3MetricsConfiguration = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3MetricsConfiguration.property.id"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3MetricsConfiguration.property.filter"></a>

- *Type:* [`aws-cdk-sdk.S3MetricsFilter`](#aws-cdk-sdk.S3MetricsFilter)

---

### S3MetricsFilter <a name="aws-cdk-sdk.S3MetricsFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3MetricsFilter } from 'aws-cdk-sdk'

const s3MetricsFilter: S3MetricsFilter = { ... }
```

##### `and`<sup>Optional</sup> <a name="aws-cdk-sdk.S3MetricsFilter.property.and"></a>

- *Type:* [`aws-cdk-sdk.S3MetricsAndOperator`](#aws-cdk-sdk.S3MetricsAndOperator)

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.S3MetricsFilter.property.prefix"></a>

- *Type:* `string`

---

##### `tag`<sup>Optional</sup> <a name="aws-cdk-sdk.S3MetricsFilter.property.tag"></a>

- *Type:* [`aws-cdk-sdk.S3Tag`](#aws-cdk-sdk.S3Tag)

---

### S3MultipartUpload <a name="aws-cdk-sdk.S3MultipartUpload"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3MultipartUpload } from 'aws-cdk-sdk'

const s3MultipartUpload: S3MultipartUpload = { ... }
```

##### `initiated`<sup>Optional</sup> <a name="aws-cdk-sdk.S3MultipartUpload.property.initiated"></a>

- *Type:* `string`

---

##### `initiator`<sup>Optional</sup> <a name="aws-cdk-sdk.S3MultipartUpload.property.initiator"></a>

- *Type:* [`aws-cdk-sdk.S3Initiator`](#aws-cdk-sdk.S3Initiator)

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.S3MultipartUpload.property.key"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3MultipartUpload.property.owner"></a>

- *Type:* [`aws-cdk-sdk.S3Owner`](#aws-cdk-sdk.S3Owner)

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.S3MultipartUpload.property.storageClass"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3MultipartUpload.property.uploadId"></a>

- *Type:* `string`

---

### S3NoncurrentVersionExpiration <a name="aws-cdk-sdk.S3NoncurrentVersionExpiration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3NoncurrentVersionExpiration } from 'aws-cdk-sdk'

const s3NoncurrentVersionExpiration: S3NoncurrentVersionExpiration = { ... }
```

##### `noncurrentDays`<sup>Optional</sup> <a name="aws-cdk-sdk.S3NoncurrentVersionExpiration.property.noncurrentDays"></a>

- *Type:* `number`

---

### S3NoncurrentVersionTransition <a name="aws-cdk-sdk.S3NoncurrentVersionTransition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3NoncurrentVersionTransition } from 'aws-cdk-sdk'

const s3NoncurrentVersionTransition: S3NoncurrentVersionTransition = { ... }
```

##### `noncurrentDays`<sup>Optional</sup> <a name="aws-cdk-sdk.S3NoncurrentVersionTransition.property.noncurrentDays"></a>

- *Type:* `number`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.S3NoncurrentVersionTransition.property.storageClass"></a>

- *Type:* `string`

---

### S3NotificationConfiguration <a name="aws-cdk-sdk.S3NotificationConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3NotificationConfiguration } from 'aws-cdk-sdk'

const s3NotificationConfiguration: S3NotificationConfiguration = { ... }
```

##### `lambdaFunctionConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.S3NotificationConfiguration.property.lambdaFunctionConfigurations"></a>

- *Type:* [`aws-cdk-sdk.S3LambdaFunctionConfiguration`](#aws-cdk-sdk.S3LambdaFunctionConfiguration)[]

---

##### `queueConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.S3NotificationConfiguration.property.queueConfigurations"></a>

- *Type:* [`aws-cdk-sdk.S3QueueConfiguration`](#aws-cdk-sdk.S3QueueConfiguration)[]

---

##### `topicConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.S3NotificationConfiguration.property.topicConfigurations"></a>

- *Type:* [`aws-cdk-sdk.S3TopicConfiguration`](#aws-cdk-sdk.S3TopicConfiguration)[]

---

### S3NotificationConfigurationDeprecated <a name="aws-cdk-sdk.S3NotificationConfigurationDeprecated"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3NotificationConfigurationDeprecated } from 'aws-cdk-sdk'

const s3NotificationConfigurationDeprecated: S3NotificationConfigurationDeprecated = { ... }
```

##### `cloudFunctionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.S3NotificationConfigurationDeprecated.property.cloudFunctionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3CloudFunctionConfiguration`](#aws-cdk-sdk.S3CloudFunctionConfiguration)

---

##### `queueConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.S3NotificationConfigurationDeprecated.property.queueConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3QueueConfigurationDeprecated`](#aws-cdk-sdk.S3QueueConfigurationDeprecated)

---

##### `topicConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.S3NotificationConfigurationDeprecated.property.topicConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3TopicConfigurationDeprecated`](#aws-cdk-sdk.S3TopicConfigurationDeprecated)

---

### S3NotificationConfigurationFilter <a name="aws-cdk-sdk.S3NotificationConfigurationFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3NotificationConfigurationFilter } from 'aws-cdk-sdk'

const s3NotificationConfigurationFilter: S3NotificationConfigurationFilter = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.S3NotificationConfigurationFilter.property.key"></a>

- *Type:* [`aws-cdk-sdk.S3S3KeyFilter`](#aws-cdk-sdk.S3S3KeyFilter)

---

### S3Object <a name="aws-cdk-sdk.S3Object"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3Object } from 'aws-cdk-sdk'

const s3Object: S3Object = { ... }
```

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Object.property.eTag"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Object.property.key"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Object.property.lastModified"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Object.property.owner"></a>

- *Type:* [`aws-cdk-sdk.S3Owner`](#aws-cdk-sdk.S3Owner)

---

##### `size`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Object.property.size"></a>

- *Type:* `number`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Object.property.storageClass"></a>

- *Type:* `string`

---

### S3ObjectIdentifier <a name="aws-cdk-sdk.S3ObjectIdentifier"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ObjectIdentifier } from 'aws-cdk-sdk'

const s3ObjectIdentifier: S3ObjectIdentifier = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3ObjectIdentifier.property.key"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ObjectIdentifier.property.versionId"></a>

- *Type:* `string`

---

### S3ObjectLockConfiguration <a name="aws-cdk-sdk.S3ObjectLockConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ObjectLockConfiguration } from 'aws-cdk-sdk'

const s3ObjectLockConfiguration: S3ObjectLockConfiguration = { ... }
```

##### `objectLockEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ObjectLockConfiguration.property.objectLockEnabled"></a>

- *Type:* `string`

---

##### `rule`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ObjectLockConfiguration.property.rule"></a>

- *Type:* [`aws-cdk-sdk.S3ObjectLockRule`](#aws-cdk-sdk.S3ObjectLockRule)

---

### S3ObjectLockLegalHold <a name="aws-cdk-sdk.S3ObjectLockLegalHold"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ObjectLockLegalHold } from 'aws-cdk-sdk'

const s3ObjectLockLegalHold: S3ObjectLockLegalHold = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ObjectLockLegalHold.property.status"></a>

- *Type:* `string`

---

### S3ObjectLockRetention <a name="aws-cdk-sdk.S3ObjectLockRetention"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ObjectLockRetention } from 'aws-cdk-sdk'

const s3ObjectLockRetention: S3ObjectLockRetention = { ... }
```

##### `mode`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ObjectLockRetention.property.mode"></a>

- *Type:* `string`

---

##### `retainUntilDate`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ObjectLockRetention.property.retainUntilDate"></a>

- *Type:* `string`

---

### S3ObjectLockRule <a name="aws-cdk-sdk.S3ObjectLockRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ObjectLockRule } from 'aws-cdk-sdk'

const s3ObjectLockRule: S3ObjectLockRule = { ... }
```

##### `defaultRetention`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ObjectLockRule.property.defaultRetention"></a>

- *Type:* [`aws-cdk-sdk.S3DefaultRetention`](#aws-cdk-sdk.S3DefaultRetention)

---

### S3ObjectVersion <a name="aws-cdk-sdk.S3ObjectVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ObjectVersion } from 'aws-cdk-sdk'

const s3ObjectVersion: S3ObjectVersion = { ... }
```

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ObjectVersion.property.eTag"></a>

- *Type:* `string`

---

##### `isLatest`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ObjectVersion.property.isLatest"></a>

- *Type:* `boolean`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ObjectVersion.property.key"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ObjectVersion.property.lastModified"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ObjectVersion.property.owner"></a>

- *Type:* [`aws-cdk-sdk.S3Owner`](#aws-cdk-sdk.S3Owner)

---

##### `size`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ObjectVersion.property.size"></a>

- *Type:* `number`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ObjectVersion.property.storageClass"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ObjectVersion.property.versionId"></a>

- *Type:* `string`

---

### S3OutputLocation <a name="aws-cdk-sdk.S3OutputLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3OutputLocation } from 'aws-cdk-sdk'

const s3OutputLocation: S3OutputLocation = { ... }
```

##### `s3`<sup>Optional</sup> <a name="aws-cdk-sdk.S3OutputLocation.property.s3"></a>

- *Type:* [`aws-cdk-sdk.S3S3Location`](#aws-cdk-sdk.S3S3Location)

---

### S3OutputSerialization <a name="aws-cdk-sdk.S3OutputSerialization"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3OutputSerialization } from 'aws-cdk-sdk'

const s3OutputSerialization: S3OutputSerialization = { ... }
```

##### `csv`<sup>Optional</sup> <a name="aws-cdk-sdk.S3OutputSerialization.property.csv"></a>

- *Type:* [`aws-cdk-sdk.S3CsvOutput`](#aws-cdk-sdk.S3CsvOutput)

---

##### `json`<sup>Optional</sup> <a name="aws-cdk-sdk.S3OutputSerialization.property.json"></a>

- *Type:* [`aws-cdk-sdk.S3JsonOutput`](#aws-cdk-sdk.S3JsonOutput)

---

### S3Owner <a name="aws-cdk-sdk.S3Owner"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3Owner } from 'aws-cdk-sdk'

const s3Owner: S3Owner = { ... }
```

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Owner.property.displayName"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Owner.property.id"></a>

- *Type:* `string`

---

### S3OwnershipControls <a name="aws-cdk-sdk.S3OwnershipControls"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3OwnershipControls } from 'aws-cdk-sdk'

const s3OwnershipControls: S3OwnershipControls = { ... }
```

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.S3OwnershipControls.property.rules"></a>

- *Type:* [`aws-cdk-sdk.S3OwnershipControlsRule`](#aws-cdk-sdk.S3OwnershipControlsRule)[]

---

### S3OwnershipControlsRule <a name="aws-cdk-sdk.S3OwnershipControlsRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3OwnershipControlsRule } from 'aws-cdk-sdk'

const s3OwnershipControlsRule: S3OwnershipControlsRule = { ... }
```

##### `objectOwnership`<sup>Required</sup> <a name="aws-cdk-sdk.S3OwnershipControlsRule.property.objectOwnership"></a>

- *Type:* `string`

---

### S3ParquetInput <a name="aws-cdk-sdk.S3ParquetInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ParquetInput } from 'aws-cdk-sdk'

const s3ParquetInput: S3ParquetInput = { ... }
```

### S3Part <a name="aws-cdk-sdk.S3Part"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3Part } from 'aws-cdk-sdk'

const s3Part: S3Part = { ... }
```

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Part.property.eTag"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Part.property.lastModified"></a>

- *Type:* `string`

---

##### `partNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Part.property.partNumber"></a>

- *Type:* `number`

---

##### `size`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Part.property.size"></a>

- *Type:* `number`

---

### S3PolicyStatus <a name="aws-cdk-sdk.S3PolicyStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PolicyStatus } from 'aws-cdk-sdk'

const s3PolicyStatus: S3PolicyStatus = { ... }
```

##### `isPublic`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PolicyStatus.property.isPublic"></a>

- *Type:* `boolean`

---

### S3Progress <a name="aws-cdk-sdk.S3Progress"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3Progress } from 'aws-cdk-sdk'

const s3Progress: S3Progress = { ... }
```

##### `bytesProcessed`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Progress.property.bytesProcessed"></a>

- *Type:* `number`

---

##### `bytesReturned`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Progress.property.bytesReturned"></a>

- *Type:* `number`

---

##### `bytesScanned`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Progress.property.bytesScanned"></a>

- *Type:* `number`

---

### S3ProgressEvent <a name="aws-cdk-sdk.S3ProgressEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ProgressEvent } from 'aws-cdk-sdk'

const s3ProgressEvent: S3ProgressEvent = { ... }
```

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ProgressEvent.property.details"></a>

- *Type:* [`aws-cdk-sdk.S3Progress`](#aws-cdk-sdk.S3Progress)

---

### S3PublicAccessBlockConfiguration <a name="aws-cdk-sdk.S3PublicAccessBlockConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PublicAccessBlockConfiguration } from 'aws-cdk-sdk'

const s3PublicAccessBlockConfiguration: S3PublicAccessBlockConfiguration = { ... }
```

##### `blockPublicAcls`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PublicAccessBlockConfiguration.property.blockPublicAcls"></a>

- *Type:* `boolean`

---

##### `blockPublicPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PublicAccessBlockConfiguration.property.blockPublicPolicy"></a>

- *Type:* `boolean`

---

##### `ignorePublicAcls`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PublicAccessBlockConfiguration.property.ignorePublicAcls"></a>

- *Type:* `boolean`

---

##### `restrictPublicBuckets`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PublicAccessBlockConfiguration.property.restrictPublicBuckets"></a>

- *Type:* `boolean`

---

### S3PutBucketAccelerateConfigurationRequest <a name="aws-cdk-sdk.S3PutBucketAccelerateConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutBucketAccelerateConfigurationRequest } from 'aws-cdk-sdk'

const s3PutBucketAccelerateConfigurationRequest: S3PutBucketAccelerateConfigurationRequest = { ... }
```

##### `accelerateConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketAccelerateConfigurationRequest.property.accelerateConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3AccelerateConfiguration`](#aws-cdk-sdk.S3AccelerateConfiguration)

---

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketAccelerateConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketAccelerateConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutBucketAclRequest <a name="aws-cdk-sdk.S3PutBucketAclRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutBucketAclRequest } from 'aws-cdk-sdk'

const s3PutBucketAclRequest: S3PutBucketAclRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketAclRequest.property.bucket"></a>

- *Type:* `string`

---

##### `accessControlPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketAclRequest.property.accessControlPolicy"></a>

- *Type:* [`aws-cdk-sdk.S3AccessControlPolicy`](#aws-cdk-sdk.S3AccessControlPolicy)

---

##### `acl`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketAclRequest.property.acl"></a>

- *Type:* `string`

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketAclRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketAclRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `grantFullControl`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketAclRequest.property.grantFullControl"></a>

- *Type:* `string`

---

##### `grantRead`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketAclRequest.property.grantRead"></a>

- *Type:* `string`

---

##### `grantReadAcp`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketAclRequest.property.grantReadAcp"></a>

- *Type:* `string`

---

##### `grantWrite`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketAclRequest.property.grantWrite"></a>

- *Type:* `string`

---

##### `grantWriteAcp`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketAclRequest.property.grantWriteAcp"></a>

- *Type:* `string`

---

### S3PutBucketAnalyticsConfigurationRequest <a name="aws-cdk-sdk.S3PutBucketAnalyticsConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutBucketAnalyticsConfigurationRequest } from 'aws-cdk-sdk'

const s3PutBucketAnalyticsConfigurationRequest: S3PutBucketAnalyticsConfigurationRequest = { ... }
```

##### `analyticsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketAnalyticsConfigurationRequest.property.analyticsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3AnalyticsConfiguration`](#aws-cdk-sdk.S3AnalyticsConfiguration)

---

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketAnalyticsConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketAnalyticsConfigurationRequest.property.id"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketAnalyticsConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutBucketCorsRequest <a name="aws-cdk-sdk.S3PutBucketCorsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutBucketCorsRequest } from 'aws-cdk-sdk'

const s3PutBucketCorsRequest: S3PutBucketCorsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketCorsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `corsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketCorsRequest.property.corsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3CorsConfiguration`](#aws-cdk-sdk.S3CorsConfiguration)

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketCorsRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketCorsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutBucketEncryptionRequest <a name="aws-cdk-sdk.S3PutBucketEncryptionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutBucketEncryptionRequest } from 'aws-cdk-sdk'

const s3PutBucketEncryptionRequest: S3PutBucketEncryptionRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketEncryptionRequest.property.bucket"></a>

- *Type:* `string`

---

##### `serverSideEncryptionConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketEncryptionRequest.property.serverSideEncryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3ServerSideEncryptionConfiguration`](#aws-cdk-sdk.S3ServerSideEncryptionConfiguration)

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketEncryptionRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketEncryptionRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutBucketIntelligentTieringConfigurationRequest <a name="aws-cdk-sdk.S3PutBucketIntelligentTieringConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutBucketIntelligentTieringConfigurationRequest } from 'aws-cdk-sdk'

const s3PutBucketIntelligentTieringConfigurationRequest: S3PutBucketIntelligentTieringConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketIntelligentTieringConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketIntelligentTieringConfigurationRequest.property.id"></a>

- *Type:* `string`

---

##### `intelligentTieringConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketIntelligentTieringConfigurationRequest.property.intelligentTieringConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3IntelligentTieringConfiguration`](#aws-cdk-sdk.S3IntelligentTieringConfiguration)

---

### S3PutBucketInventoryConfigurationRequest <a name="aws-cdk-sdk.S3PutBucketInventoryConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutBucketInventoryConfigurationRequest } from 'aws-cdk-sdk'

const s3PutBucketInventoryConfigurationRequest: S3PutBucketInventoryConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketInventoryConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketInventoryConfigurationRequest.property.id"></a>

- *Type:* `string`

---

##### `inventoryConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketInventoryConfigurationRequest.property.inventoryConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3InventoryConfiguration`](#aws-cdk-sdk.S3InventoryConfiguration)

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketInventoryConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutBucketLifecycleConfigurationRequest <a name="aws-cdk-sdk.S3PutBucketLifecycleConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutBucketLifecycleConfigurationRequest } from 'aws-cdk-sdk'

const s3PutBucketLifecycleConfigurationRequest: S3PutBucketLifecycleConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketLifecycleConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketLifecycleConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `lifecycleConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketLifecycleConfigurationRequest.property.lifecycleConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3BucketLifecycleConfiguration`](#aws-cdk-sdk.S3BucketLifecycleConfiguration)

---

### S3PutBucketLifecycleRequest <a name="aws-cdk-sdk.S3PutBucketLifecycleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutBucketLifecycleRequest } from 'aws-cdk-sdk'

const s3PutBucketLifecycleRequest: S3PutBucketLifecycleRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketLifecycleRequest.property.bucket"></a>

- *Type:* `string`

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketLifecycleRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketLifecycleRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `lifecycleConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketLifecycleRequest.property.lifecycleConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3LifecycleConfiguration`](#aws-cdk-sdk.S3LifecycleConfiguration)

---

### S3PutBucketLoggingRequest <a name="aws-cdk-sdk.S3PutBucketLoggingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutBucketLoggingRequest } from 'aws-cdk-sdk'

const s3PutBucketLoggingRequest: S3PutBucketLoggingRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketLoggingRequest.property.bucket"></a>

- *Type:* `string`

---

##### `bucketLoggingStatus`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketLoggingRequest.property.bucketLoggingStatus"></a>

- *Type:* [`aws-cdk-sdk.S3BucketLoggingStatus`](#aws-cdk-sdk.S3BucketLoggingStatus)

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketLoggingRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketLoggingRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutBucketMetricsConfigurationRequest <a name="aws-cdk-sdk.S3PutBucketMetricsConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutBucketMetricsConfigurationRequest } from 'aws-cdk-sdk'

const s3PutBucketMetricsConfigurationRequest: S3PutBucketMetricsConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketMetricsConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketMetricsConfigurationRequest.property.id"></a>

- *Type:* `string`

---

##### `metricsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketMetricsConfigurationRequest.property.metricsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3MetricsConfiguration`](#aws-cdk-sdk.S3MetricsConfiguration)

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketMetricsConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutBucketNotificationConfigurationRequest <a name="aws-cdk-sdk.S3PutBucketNotificationConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutBucketNotificationConfigurationRequest } from 'aws-cdk-sdk'

const s3PutBucketNotificationConfigurationRequest: S3PutBucketNotificationConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketNotificationConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `notificationConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketNotificationConfigurationRequest.property.notificationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3NotificationConfiguration`](#aws-cdk-sdk.S3NotificationConfiguration)

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketNotificationConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutBucketNotificationRequest <a name="aws-cdk-sdk.S3PutBucketNotificationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutBucketNotificationRequest } from 'aws-cdk-sdk'

const s3PutBucketNotificationRequest: S3PutBucketNotificationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketNotificationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `notificationConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketNotificationRequest.property.notificationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3NotificationConfigurationDeprecated`](#aws-cdk-sdk.S3NotificationConfigurationDeprecated)

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketNotificationRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketNotificationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutBucketOwnershipControlsRequest <a name="aws-cdk-sdk.S3PutBucketOwnershipControlsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutBucketOwnershipControlsRequest } from 'aws-cdk-sdk'

const s3PutBucketOwnershipControlsRequest: S3PutBucketOwnershipControlsRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketOwnershipControlsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `ownershipControls`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketOwnershipControlsRequest.property.ownershipControls"></a>

- *Type:* [`aws-cdk-sdk.S3OwnershipControls`](#aws-cdk-sdk.S3OwnershipControls)

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketOwnershipControlsRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketOwnershipControlsRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutBucketPolicyRequest <a name="aws-cdk-sdk.S3PutBucketPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutBucketPolicyRequest } from 'aws-cdk-sdk'

const s3PutBucketPolicyRequest: S3PutBucketPolicyRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketPolicyRequest.property.bucket"></a>

- *Type:* `string`

---

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketPolicyRequest.property.policy"></a>

- *Type:* `string`

---

##### `confirmRemoveSelfBucketAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketPolicyRequest.property.confirmRemoveSelfBucketAccess"></a>

- *Type:* `boolean`

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketPolicyRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketPolicyRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutBucketReplicationRequest <a name="aws-cdk-sdk.S3PutBucketReplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutBucketReplicationRequest } from 'aws-cdk-sdk'

const s3PutBucketReplicationRequest: S3PutBucketReplicationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketReplicationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `replicationConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketReplicationRequest.property.replicationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3ReplicationConfiguration`](#aws-cdk-sdk.S3ReplicationConfiguration)

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketReplicationRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketReplicationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `token`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketReplicationRequest.property.token"></a>

- *Type:* `string`

---

### S3PutBucketRequestPaymentRequest <a name="aws-cdk-sdk.S3PutBucketRequestPaymentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutBucketRequestPaymentRequest } from 'aws-cdk-sdk'

const s3PutBucketRequestPaymentRequest: S3PutBucketRequestPaymentRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketRequestPaymentRequest.property.bucket"></a>

- *Type:* `string`

---

##### `requestPaymentConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketRequestPaymentRequest.property.requestPaymentConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3RequestPaymentConfiguration`](#aws-cdk-sdk.S3RequestPaymentConfiguration)

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketRequestPaymentRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketRequestPaymentRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutBucketTaggingRequest <a name="aws-cdk-sdk.S3PutBucketTaggingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutBucketTaggingRequest } from 'aws-cdk-sdk'

const s3PutBucketTaggingRequest: S3PutBucketTaggingRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketTaggingRequest.property.bucket"></a>

- *Type:* `string`

---

##### `tagging`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketTaggingRequest.property.tagging"></a>

- *Type:* [`aws-cdk-sdk.S3Tagging`](#aws-cdk-sdk.S3Tagging)

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketTaggingRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketTaggingRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutBucketVersioningRequest <a name="aws-cdk-sdk.S3PutBucketVersioningRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutBucketVersioningRequest } from 'aws-cdk-sdk'

const s3PutBucketVersioningRequest: S3PutBucketVersioningRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketVersioningRequest.property.bucket"></a>

- *Type:* `string`

---

##### `versioningConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketVersioningRequest.property.versioningConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3VersioningConfiguration`](#aws-cdk-sdk.S3VersioningConfiguration)

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketVersioningRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketVersioningRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `mfa`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketVersioningRequest.property.mfa"></a>

- *Type:* `string`

---

### S3PutBucketWebsiteRequest <a name="aws-cdk-sdk.S3PutBucketWebsiteRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutBucketWebsiteRequest } from 'aws-cdk-sdk'

const s3PutBucketWebsiteRequest: S3PutBucketWebsiteRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketWebsiteRequest.property.bucket"></a>

- *Type:* `string`

---

##### `websiteConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutBucketWebsiteRequest.property.websiteConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3WebsiteConfiguration`](#aws-cdk-sdk.S3WebsiteConfiguration)

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketWebsiteRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutBucketWebsiteRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3PutObjectAclOutput <a name="aws-cdk-sdk.S3PutObjectAclOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutObjectAclOutput } from 'aws-cdk-sdk'

const s3PutObjectAclOutput: S3PutObjectAclOutput = { ... }
```

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectAclOutput.property.requestCharged"></a>

- *Type:* `string`

---

### S3PutObjectAclRequest <a name="aws-cdk-sdk.S3PutObjectAclRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutObjectAclRequest } from 'aws-cdk-sdk'

const s3PutObjectAclRequest: S3PutObjectAclRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutObjectAclRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutObjectAclRequest.property.key"></a>

- *Type:* `string`

---

##### `accessControlPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectAclRequest.property.accessControlPolicy"></a>

- *Type:* [`aws-cdk-sdk.S3AccessControlPolicy`](#aws-cdk-sdk.S3AccessControlPolicy)

---

##### `acl`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectAclRequest.property.acl"></a>

- *Type:* `string`

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectAclRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectAclRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `grantFullControl`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectAclRequest.property.grantFullControl"></a>

- *Type:* `string`

---

##### `grantRead`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectAclRequest.property.grantRead"></a>

- *Type:* `string`

---

##### `grantReadAcp`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectAclRequest.property.grantReadAcp"></a>

- *Type:* `string`

---

##### `grantWrite`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectAclRequest.property.grantWrite"></a>

- *Type:* `string`

---

##### `grantWriteAcp`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectAclRequest.property.grantWriteAcp"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectAclRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectAclRequest.property.versionId"></a>

- *Type:* `string`

---

### S3PutObjectLegalHoldOutput <a name="aws-cdk-sdk.S3PutObjectLegalHoldOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutObjectLegalHoldOutput } from 'aws-cdk-sdk'

const s3PutObjectLegalHoldOutput: S3PutObjectLegalHoldOutput = { ... }
```

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectLegalHoldOutput.property.requestCharged"></a>

- *Type:* `string`

---

### S3PutObjectLegalHoldRequest <a name="aws-cdk-sdk.S3PutObjectLegalHoldRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutObjectLegalHoldRequest } from 'aws-cdk-sdk'

const s3PutObjectLegalHoldRequest: S3PutObjectLegalHoldRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutObjectLegalHoldRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutObjectLegalHoldRequest.property.key"></a>

- *Type:* `string`

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectLegalHoldRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectLegalHoldRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `legalHold`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectLegalHoldRequest.property.legalHold"></a>

- *Type:* [`aws-cdk-sdk.S3ObjectLockLegalHold`](#aws-cdk-sdk.S3ObjectLockLegalHold)

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectLegalHoldRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectLegalHoldRequest.property.versionId"></a>

- *Type:* `string`

---

### S3PutObjectLockConfigurationOutput <a name="aws-cdk-sdk.S3PutObjectLockConfigurationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutObjectLockConfigurationOutput } from 'aws-cdk-sdk'

const s3PutObjectLockConfigurationOutput: S3PutObjectLockConfigurationOutput = { ... }
```

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectLockConfigurationOutput.property.requestCharged"></a>

- *Type:* `string`

---

### S3PutObjectLockConfigurationRequest <a name="aws-cdk-sdk.S3PutObjectLockConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutObjectLockConfigurationRequest } from 'aws-cdk-sdk'

const s3PutObjectLockConfigurationRequest: S3PutObjectLockConfigurationRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutObjectLockConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectLockConfigurationRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectLockConfigurationRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `objectLockConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectLockConfigurationRequest.property.objectLockConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3ObjectLockConfiguration`](#aws-cdk-sdk.S3ObjectLockConfiguration)

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectLockConfigurationRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `token`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectLockConfigurationRequest.property.token"></a>

- *Type:* `string`

---

### S3PutObjectOutput <a name="aws-cdk-sdk.S3PutObjectOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutObjectOutput } from 'aws-cdk-sdk'

const s3PutObjectOutput: S3PutObjectOutput = { ... }
```

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectOutput.property.eTag"></a>

- *Type:* `string`

---

##### `expiration`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectOutput.property.expiration"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectOutput.property.requestCharged"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectOutput.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectOutput.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectOutput.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsEncryptionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectOutput.property.ssekmsEncryptionContext"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectOutput.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectOutput.property.versionId"></a>

- *Type:* `string`

---

### S3PutObjectRequest <a name="aws-cdk-sdk.S3PutObjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutObjectRequest } from 'aws-cdk-sdk'

const s3PutObjectRequest: S3PutObjectRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.key"></a>

- *Type:* `string`

---

##### `acl`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.acl"></a>

- *Type:* `string`

---

##### `body`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.body"></a>

- *Type:* `any`

---

##### `cacheControl`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.cacheControl"></a>

- *Type:* `string`

---

##### `contentDisposition`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.contentDisposition"></a>

- *Type:* `string`

---

##### `contentEncoding`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.contentEncoding"></a>

- *Type:* `string`

---

##### `contentLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.contentLanguage"></a>

- *Type:* `string`

---

##### `contentLength`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.contentLength"></a>

- *Type:* `number`

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.contentType"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `expires`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.expires"></a>

- *Type:* `string`

---

##### `grantFullControl`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.grantFullControl"></a>

- *Type:* `string`

---

##### `grantRead`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.grantRead"></a>

- *Type:* `string`

---

##### `grantReadAcp`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.grantReadAcp"></a>

- *Type:* `string`

---

##### `grantWriteAcp`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.grantWriteAcp"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.metadata"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `objectLockLegalHoldStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.objectLockLegalHoldStatus"></a>

- *Type:* `string`

---

##### `objectLockMode`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.objectLockMode"></a>

- *Type:* `string`

---

##### `objectLockRetainUntilDate`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.objectLockRetainUntilDate"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKey`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.sseCustomerKey"></a>

- *Type:* `any`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsEncryptionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.ssekmsEncryptionContext"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.storageClass"></a>

- *Type:* `string`

---

##### `tagging`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.tagging"></a>

- *Type:* `string`

---

##### `websiteRedirectLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRequest.property.websiteRedirectLocation"></a>

- *Type:* `string`

---

### S3PutObjectRetentionOutput <a name="aws-cdk-sdk.S3PutObjectRetentionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutObjectRetentionOutput } from 'aws-cdk-sdk'

const s3PutObjectRetentionOutput: S3PutObjectRetentionOutput = { ... }
```

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRetentionOutput.property.requestCharged"></a>

- *Type:* `string`

---

### S3PutObjectRetentionRequest <a name="aws-cdk-sdk.S3PutObjectRetentionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutObjectRetentionRequest } from 'aws-cdk-sdk'

const s3PutObjectRetentionRequest: S3PutObjectRetentionRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutObjectRetentionRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutObjectRetentionRequest.property.key"></a>

- *Type:* `string`

---

##### `bypassGovernanceRetention`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRetentionRequest.property.bypassGovernanceRetention"></a>

- *Type:* `boolean`

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRetentionRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRetentionRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRetentionRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `retention`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRetentionRequest.property.retention"></a>

- *Type:* [`aws-cdk-sdk.S3ObjectLockRetention`](#aws-cdk-sdk.S3ObjectLockRetention)

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectRetentionRequest.property.versionId"></a>

- *Type:* `string`

---

### S3PutObjectTaggingOutput <a name="aws-cdk-sdk.S3PutObjectTaggingOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutObjectTaggingOutput } from 'aws-cdk-sdk'

const s3PutObjectTaggingOutput: S3PutObjectTaggingOutput = { ... }
```

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectTaggingOutput.property.versionId"></a>

- *Type:* `string`

---

### S3PutObjectTaggingRequest <a name="aws-cdk-sdk.S3PutObjectTaggingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutObjectTaggingRequest } from 'aws-cdk-sdk'

const s3PutObjectTaggingRequest: S3PutObjectTaggingRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutObjectTaggingRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutObjectTaggingRequest.property.key"></a>

- *Type:* `string`

---

##### `tagging`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutObjectTaggingRequest.property.tagging"></a>

- *Type:* [`aws-cdk-sdk.S3Tagging`](#aws-cdk-sdk.S3Tagging)

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectTaggingRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectTaggingRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutObjectTaggingRequest.property.versionId"></a>

- *Type:* `string`

---

### S3PutPublicAccessBlockRequest <a name="aws-cdk-sdk.S3PutPublicAccessBlockRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3PutPublicAccessBlockRequest } from 'aws-cdk-sdk'

const s3PutPublicAccessBlockRequest: S3PutPublicAccessBlockRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutPublicAccessBlockRequest.property.bucket"></a>

- *Type:* `string`

---

##### `publicAccessBlockConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.S3PutPublicAccessBlockRequest.property.publicAccessBlockConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3PublicAccessBlockConfiguration`](#aws-cdk-sdk.S3PublicAccessBlockConfiguration)

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutPublicAccessBlockRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3PutPublicAccessBlockRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

### S3QueueConfiguration <a name="aws-cdk-sdk.S3QueueConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3QueueConfiguration } from 'aws-cdk-sdk'

const s3QueueConfiguration: S3QueueConfiguration = { ... }
```

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.S3QueueConfiguration.property.events"></a>

- *Type:* `string`[]

---

##### `queueArn`<sup>Required</sup> <a name="aws-cdk-sdk.S3QueueConfiguration.property.queueArn"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3QueueConfiguration.property.filter"></a>

- *Type:* [`aws-cdk-sdk.S3NotificationConfigurationFilter`](#aws-cdk-sdk.S3NotificationConfigurationFilter)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.S3QueueConfiguration.property.id"></a>

- *Type:* `string`

---

### S3QueueConfigurationDeprecated <a name="aws-cdk-sdk.S3QueueConfigurationDeprecated"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3QueueConfigurationDeprecated } from 'aws-cdk-sdk'

const s3QueueConfigurationDeprecated: S3QueueConfigurationDeprecated = { ... }
```

##### `event`<sup>Optional</sup> <a name="aws-cdk-sdk.S3QueueConfigurationDeprecated.property.event"></a>

- *Type:* `string`

---

##### `events`<sup>Optional</sup> <a name="aws-cdk-sdk.S3QueueConfigurationDeprecated.property.events"></a>

- *Type:* `string`[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.S3QueueConfigurationDeprecated.property.id"></a>

- *Type:* `string`

---

##### `queue`<sup>Optional</sup> <a name="aws-cdk-sdk.S3QueueConfigurationDeprecated.property.queue"></a>

- *Type:* `string`

---

### S3RecordsEvent <a name="aws-cdk-sdk.S3RecordsEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3RecordsEvent } from 'aws-cdk-sdk'

const s3RecordsEvent: S3RecordsEvent = { ... }
```

##### `payload`<sup>Optional</sup> <a name="aws-cdk-sdk.S3RecordsEvent.property.payload"></a>

- *Type:* `any`

---

### S3Redirect <a name="aws-cdk-sdk.S3Redirect"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3Redirect } from 'aws-cdk-sdk'

const s3Redirect: S3Redirect = { ... }
```

##### `hostName`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Redirect.property.hostName"></a>

- *Type:* `string`

---

##### `httpRedirectCode`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Redirect.property.httpRedirectCode"></a>

- *Type:* `string`

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Redirect.property.protocol"></a>

- *Type:* `string`

---

##### `replaceKeyPrefixWith`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Redirect.property.replaceKeyPrefixWith"></a>

- *Type:* `string`

---

##### `replaceKeyWith`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Redirect.property.replaceKeyWith"></a>

- *Type:* `string`

---

### S3RedirectAllRequestsTo <a name="aws-cdk-sdk.S3RedirectAllRequestsTo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3RedirectAllRequestsTo } from 'aws-cdk-sdk'

const s3RedirectAllRequestsTo: S3RedirectAllRequestsTo = { ... }
```

##### `hostName`<sup>Required</sup> <a name="aws-cdk-sdk.S3RedirectAllRequestsTo.property.hostName"></a>

- *Type:* `string`

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.S3RedirectAllRequestsTo.property.protocol"></a>

- *Type:* `string`

---

### S3ReplicationConfiguration <a name="aws-cdk-sdk.S3ReplicationConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ReplicationConfiguration } from 'aws-cdk-sdk'

const s3ReplicationConfiguration: S3ReplicationConfiguration = { ... }
```

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.S3ReplicationConfiguration.property.role"></a>

- *Type:* `string`

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.S3ReplicationConfiguration.property.rules"></a>

- *Type:* [`aws-cdk-sdk.S3ReplicationRule`](#aws-cdk-sdk.S3ReplicationRule)[]

---

### S3ReplicationRule <a name="aws-cdk-sdk.S3ReplicationRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ReplicationRule } from 'aws-cdk-sdk'

const s3ReplicationRule: S3ReplicationRule = { ... }
```

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.S3ReplicationRule.property.destination"></a>

- *Type:* [`aws-cdk-sdk.S3Destination`](#aws-cdk-sdk.S3Destination)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.S3ReplicationRule.property.status"></a>

- *Type:* `string`

---

##### `deleteMarkerReplication`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ReplicationRule.property.deleteMarkerReplication"></a>

- *Type:* [`aws-cdk-sdk.S3DeleteMarkerReplication`](#aws-cdk-sdk.S3DeleteMarkerReplication)

---

##### `existingObjectReplication`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ReplicationRule.property.existingObjectReplication"></a>

- *Type:* [`aws-cdk-sdk.S3ExistingObjectReplication`](#aws-cdk-sdk.S3ExistingObjectReplication)

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ReplicationRule.property.filter"></a>

- *Type:* [`aws-cdk-sdk.S3ReplicationRuleFilter`](#aws-cdk-sdk.S3ReplicationRuleFilter)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ReplicationRule.property.id"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ReplicationRule.property.prefix"></a>

- *Type:* `string`

---

##### `priority`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ReplicationRule.property.priority"></a>

- *Type:* `number`

---

##### `sourceSelectionCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ReplicationRule.property.sourceSelectionCriteria"></a>

- *Type:* [`aws-cdk-sdk.S3SourceSelectionCriteria`](#aws-cdk-sdk.S3SourceSelectionCriteria)

---

### S3ReplicationRuleAndOperator <a name="aws-cdk-sdk.S3ReplicationRuleAndOperator"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ReplicationRuleAndOperator } from 'aws-cdk-sdk'

const s3ReplicationRuleAndOperator: S3ReplicationRuleAndOperator = { ... }
```

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ReplicationRuleAndOperator.property.prefix"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ReplicationRuleAndOperator.property.tags"></a>

- *Type:* [`aws-cdk-sdk.S3Tag`](#aws-cdk-sdk.S3Tag)[]

---

### S3ReplicationRuleFilter <a name="aws-cdk-sdk.S3ReplicationRuleFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ReplicationRuleFilter } from 'aws-cdk-sdk'

const s3ReplicationRuleFilter: S3ReplicationRuleFilter = { ... }
```

##### `and`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ReplicationRuleFilter.property.and"></a>

- *Type:* [`aws-cdk-sdk.S3ReplicationRuleAndOperator`](#aws-cdk-sdk.S3ReplicationRuleAndOperator)

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ReplicationRuleFilter.property.prefix"></a>

- *Type:* `string`

---

##### `tag`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ReplicationRuleFilter.property.tag"></a>

- *Type:* [`aws-cdk-sdk.S3Tag`](#aws-cdk-sdk.S3Tag)

---

### S3ReplicationTime <a name="aws-cdk-sdk.S3ReplicationTime"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ReplicationTime } from 'aws-cdk-sdk'

const s3ReplicationTime: S3ReplicationTime = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.S3ReplicationTime.property.status"></a>

- *Type:* `string`

---

##### `time`<sup>Required</sup> <a name="aws-cdk-sdk.S3ReplicationTime.property.time"></a>

- *Type:* [`aws-cdk-sdk.S3ReplicationTimeValue`](#aws-cdk-sdk.S3ReplicationTimeValue)

---

### S3ReplicationTimeValue <a name="aws-cdk-sdk.S3ReplicationTimeValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ReplicationTimeValue } from 'aws-cdk-sdk'

const s3ReplicationTimeValue: S3ReplicationTimeValue = { ... }
```

##### `minutes`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ReplicationTimeValue.property.minutes"></a>

- *Type:* `number`

---

### S3RequestPaymentConfiguration <a name="aws-cdk-sdk.S3RequestPaymentConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3RequestPaymentConfiguration } from 'aws-cdk-sdk'

const s3RequestPaymentConfiguration: S3RequestPaymentConfiguration = { ... }
```

##### `payer`<sup>Required</sup> <a name="aws-cdk-sdk.S3RequestPaymentConfiguration.property.payer"></a>

- *Type:* `string`

---

### S3RequestProgress <a name="aws-cdk-sdk.S3RequestProgress"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3RequestProgress } from 'aws-cdk-sdk'

const s3RequestProgress: S3RequestProgress = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.S3RequestProgress.property.enabled"></a>

- *Type:* `boolean`

---

### S3RestoreObjectOutput <a name="aws-cdk-sdk.S3RestoreObjectOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3RestoreObjectOutput } from 'aws-cdk-sdk'

const s3RestoreObjectOutput: S3RestoreObjectOutput = { ... }
```

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.S3RestoreObjectOutput.property.requestCharged"></a>

- *Type:* `string`

---

##### `restoreOutputPath`<sup>Optional</sup> <a name="aws-cdk-sdk.S3RestoreObjectOutput.property.restoreOutputPath"></a>

- *Type:* `string`

---

### S3RestoreObjectRequest <a name="aws-cdk-sdk.S3RestoreObjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3RestoreObjectRequest } from 'aws-cdk-sdk'

const s3RestoreObjectRequest: S3RestoreObjectRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3RestoreObjectRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3RestoreObjectRequest.property.key"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3RestoreObjectRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.S3RestoreObjectRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `restoreRequest`<sup>Optional</sup> <a name="aws-cdk-sdk.S3RestoreObjectRequest.property.restoreRequest"></a>

- *Type:* [`aws-cdk-sdk.S3RestoreRequest`](#aws-cdk-sdk.S3RestoreRequest)

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3RestoreObjectRequest.property.versionId"></a>

- *Type:* `string`

---

### S3RestoreRequest <a name="aws-cdk-sdk.S3RestoreRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3RestoreRequest } from 'aws-cdk-sdk'

const s3RestoreRequest: S3RestoreRequest = { ... }
```

##### `days`<sup>Optional</sup> <a name="aws-cdk-sdk.S3RestoreRequest.property.days"></a>

- *Type:* `number`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.S3RestoreRequest.property.description"></a>

- *Type:* `string`

---

##### `glacierJobParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.S3RestoreRequest.property.glacierJobParameters"></a>

- *Type:* [`aws-cdk-sdk.S3GlacierJobParameters`](#aws-cdk-sdk.S3GlacierJobParameters)

---

##### `outputLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.S3RestoreRequest.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.S3OutputLocation`](#aws-cdk-sdk.S3OutputLocation)

---

##### `selectParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.S3RestoreRequest.property.selectParameters"></a>

- *Type:* [`aws-cdk-sdk.S3SelectParameters`](#aws-cdk-sdk.S3SelectParameters)

---

##### `tier`<sup>Optional</sup> <a name="aws-cdk-sdk.S3RestoreRequest.property.tier"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.S3RestoreRequest.property.type"></a>

- *Type:* `string`

---

### S3RoutingRule <a name="aws-cdk-sdk.S3RoutingRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3RoutingRule } from 'aws-cdk-sdk'

const s3RoutingRule: S3RoutingRule = { ... }
```

##### `redirect`<sup>Required</sup> <a name="aws-cdk-sdk.S3RoutingRule.property.redirect"></a>

- *Type:* [`aws-cdk-sdk.S3Redirect`](#aws-cdk-sdk.S3Redirect)

---

##### `condition`<sup>Optional</sup> <a name="aws-cdk-sdk.S3RoutingRule.property.condition"></a>

- *Type:* [`aws-cdk-sdk.S3Condition`](#aws-cdk-sdk.S3Condition)

---

### S3Rule <a name="aws-cdk-sdk.S3Rule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3Rule } from 'aws-cdk-sdk'

const s3Rule: S3Rule = { ... }
```

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.S3Rule.property.prefix"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.S3Rule.property.status"></a>

- *Type:* `string`

---

##### `abortIncompleteMultipartUpload`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Rule.property.abortIncompleteMultipartUpload"></a>

- *Type:* [`aws-cdk-sdk.S3AbortIncompleteMultipartUpload`](#aws-cdk-sdk.S3AbortIncompleteMultipartUpload)

---

##### `expiration`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Rule.property.expiration"></a>

- *Type:* [`aws-cdk-sdk.S3LifecycleExpiration`](#aws-cdk-sdk.S3LifecycleExpiration)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Rule.property.id"></a>

- *Type:* `string`

---

##### `noncurrentVersionExpiration`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Rule.property.noncurrentVersionExpiration"></a>

- *Type:* [`aws-cdk-sdk.S3NoncurrentVersionExpiration`](#aws-cdk-sdk.S3NoncurrentVersionExpiration)

---

##### `noncurrentVersionTransition`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Rule.property.noncurrentVersionTransition"></a>

- *Type:* [`aws-cdk-sdk.S3NoncurrentVersionTransition`](#aws-cdk-sdk.S3NoncurrentVersionTransition)

---

##### `transition`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Rule.property.transition"></a>

- *Type:* [`aws-cdk-sdk.S3Transition`](#aws-cdk-sdk.S3Transition)

---

### S3S3KeyFilter <a name="aws-cdk-sdk.S3S3KeyFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3S3KeyFilter } from 'aws-cdk-sdk'

const s3S3KeyFilter: S3S3KeyFilter = { ... }
```

##### `filterRules`<sup>Optional</sup> <a name="aws-cdk-sdk.S3S3KeyFilter.property.filterRules"></a>

- *Type:* [`aws-cdk-sdk.S3FilterRule`](#aws-cdk-sdk.S3FilterRule)[]

---

### S3S3Location <a name="aws-cdk-sdk.S3S3Location"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3S3Location } from 'aws-cdk-sdk'

const s3S3Location: S3S3Location = { ... }
```

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.S3S3Location.property.bucketName"></a>

- *Type:* `string`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.S3S3Location.property.prefix"></a>

- *Type:* `string`

---

##### `accessControlList`<sup>Optional</sup> <a name="aws-cdk-sdk.S3S3Location.property.accessControlList"></a>

- *Type:* [`aws-cdk-sdk.S3Grant`](#aws-cdk-sdk.S3Grant)[]

---

##### `cannedAcl`<sup>Optional</sup> <a name="aws-cdk-sdk.S3S3Location.property.cannedAcl"></a>

- *Type:* `string`

---

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.S3S3Location.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.S3Encryption`](#aws-cdk-sdk.S3Encryption)

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.S3S3Location.property.storageClass"></a>

- *Type:* `string`

---

##### `tagging`<sup>Optional</sup> <a name="aws-cdk-sdk.S3S3Location.property.tagging"></a>

- *Type:* [`aws-cdk-sdk.S3Tagging`](#aws-cdk-sdk.S3Tagging)

---

##### `userMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.S3S3Location.property.userMetadata"></a>

- *Type:* [`aws-cdk-sdk.S3MetadataEntry`](#aws-cdk-sdk.S3MetadataEntry)[]

---

### S3ScanRange <a name="aws-cdk-sdk.S3ScanRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ScanRange } from 'aws-cdk-sdk'

const s3ScanRange: S3ScanRange = { ... }
```

##### `end`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ScanRange.property.end"></a>

- *Type:* `number`

---

##### `start`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ScanRange.property.start"></a>

- *Type:* `number`

---

### S3SelectObjectContentEventStream <a name="aws-cdk-sdk.S3SelectObjectContentEventStream"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3SelectObjectContentEventStream } from 'aws-cdk-sdk'

const s3SelectObjectContentEventStream: S3SelectObjectContentEventStream = { ... }
```

##### `cont`<sup>Optional</sup> <a name="aws-cdk-sdk.S3SelectObjectContentEventStream.property.cont"></a>

- *Type:* [`aws-cdk-sdk.S3ContinuationEvent`](#aws-cdk-sdk.S3ContinuationEvent)

---

##### `end`<sup>Optional</sup> <a name="aws-cdk-sdk.S3SelectObjectContentEventStream.property.end"></a>

- *Type:* [`aws-cdk-sdk.S3EndEvent`](#aws-cdk-sdk.S3EndEvent)

---

##### `progress`<sup>Optional</sup> <a name="aws-cdk-sdk.S3SelectObjectContentEventStream.property.progress"></a>

- *Type:* [`aws-cdk-sdk.S3ProgressEvent`](#aws-cdk-sdk.S3ProgressEvent)

---

##### `records`<sup>Optional</sup> <a name="aws-cdk-sdk.S3SelectObjectContentEventStream.property.records"></a>

- *Type:* [`aws-cdk-sdk.S3RecordsEvent`](#aws-cdk-sdk.S3RecordsEvent)

---

##### `stats`<sup>Optional</sup> <a name="aws-cdk-sdk.S3SelectObjectContentEventStream.property.stats"></a>

- *Type:* [`aws-cdk-sdk.S3StatsEvent`](#aws-cdk-sdk.S3StatsEvent)

---

### S3SelectObjectContentOutput <a name="aws-cdk-sdk.S3SelectObjectContentOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3SelectObjectContentOutput } from 'aws-cdk-sdk'

const s3SelectObjectContentOutput: S3SelectObjectContentOutput = { ... }
```

##### `payload`<sup>Optional</sup> <a name="aws-cdk-sdk.S3SelectObjectContentOutput.property.payload"></a>

- *Type:* [`aws-cdk-sdk.S3SelectObjectContentEventStream`](#aws-cdk-sdk.S3SelectObjectContentEventStream)

---

### S3SelectObjectContentRequest <a name="aws-cdk-sdk.S3SelectObjectContentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3SelectObjectContentRequest } from 'aws-cdk-sdk'

const s3SelectObjectContentRequest: S3SelectObjectContentRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3SelectObjectContentRequest.property.bucket"></a>

- *Type:* `string`

---

##### `expression`<sup>Required</sup> <a name="aws-cdk-sdk.S3SelectObjectContentRequest.property.expression"></a>

- *Type:* `string`

---

##### `expressionType`<sup>Required</sup> <a name="aws-cdk-sdk.S3SelectObjectContentRequest.property.expressionType"></a>

- *Type:* `string`

---

##### `inputSerialization`<sup>Required</sup> <a name="aws-cdk-sdk.S3SelectObjectContentRequest.property.inputSerialization"></a>

- *Type:* [`aws-cdk-sdk.S3InputSerialization`](#aws-cdk-sdk.S3InputSerialization)

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3SelectObjectContentRequest.property.key"></a>

- *Type:* `string`

---

##### `outputSerialization`<sup>Required</sup> <a name="aws-cdk-sdk.S3SelectObjectContentRequest.property.outputSerialization"></a>

- *Type:* [`aws-cdk-sdk.S3OutputSerialization`](#aws-cdk-sdk.S3OutputSerialization)

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3SelectObjectContentRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `requestProgress`<sup>Optional</sup> <a name="aws-cdk-sdk.S3SelectObjectContentRequest.property.requestProgress"></a>

- *Type:* [`aws-cdk-sdk.S3RequestProgress`](#aws-cdk-sdk.S3RequestProgress)

---

##### `scanRange`<sup>Optional</sup> <a name="aws-cdk-sdk.S3SelectObjectContentRequest.property.scanRange"></a>

- *Type:* [`aws-cdk-sdk.S3ScanRange`](#aws-cdk-sdk.S3ScanRange)

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.S3SelectObjectContentRequest.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKey`<sup>Optional</sup> <a name="aws-cdk-sdk.S3SelectObjectContentRequest.property.sseCustomerKey"></a>

- *Type:* `any`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3SelectObjectContentRequest.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

### S3SelectParameters <a name="aws-cdk-sdk.S3SelectParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3SelectParameters } from 'aws-cdk-sdk'

const s3SelectParameters: S3SelectParameters = { ... }
```

##### `expression`<sup>Required</sup> <a name="aws-cdk-sdk.S3SelectParameters.property.expression"></a>

- *Type:* `string`

---

##### `expressionType`<sup>Required</sup> <a name="aws-cdk-sdk.S3SelectParameters.property.expressionType"></a>

- *Type:* `string`

---

##### `inputSerialization`<sup>Required</sup> <a name="aws-cdk-sdk.S3SelectParameters.property.inputSerialization"></a>

- *Type:* [`aws-cdk-sdk.S3InputSerialization`](#aws-cdk-sdk.S3InputSerialization)

---

##### `outputSerialization`<sup>Required</sup> <a name="aws-cdk-sdk.S3SelectParameters.property.outputSerialization"></a>

- *Type:* [`aws-cdk-sdk.S3OutputSerialization`](#aws-cdk-sdk.S3OutputSerialization)

---

### S3ServerSideEncryptionByDefault <a name="aws-cdk-sdk.S3ServerSideEncryptionByDefault"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ServerSideEncryptionByDefault } from 'aws-cdk-sdk'

const s3ServerSideEncryptionByDefault: S3ServerSideEncryptionByDefault = { ... }
```

##### `sseAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.S3ServerSideEncryptionByDefault.property.sseAlgorithm"></a>

- *Type:* `string`

---

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ServerSideEncryptionByDefault.property.kmsMasterKeyId"></a>

- *Type:* `string`

---

### S3ServerSideEncryptionConfiguration <a name="aws-cdk-sdk.S3ServerSideEncryptionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ServerSideEncryptionConfiguration } from 'aws-cdk-sdk'

const s3ServerSideEncryptionConfiguration: S3ServerSideEncryptionConfiguration = { ... }
```

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.S3ServerSideEncryptionConfiguration.property.rules"></a>

- *Type:* [`aws-cdk-sdk.S3ServerSideEncryptionRule`](#aws-cdk-sdk.S3ServerSideEncryptionRule)[]

---

### S3ServerSideEncryptionRule <a name="aws-cdk-sdk.S3ServerSideEncryptionRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ServerSideEncryptionRule } from 'aws-cdk-sdk'

const s3ServerSideEncryptionRule: S3ServerSideEncryptionRule = { ... }
```

##### `applyServerSideEncryptionByDefault`<sup>Optional</sup> <a name="aws-cdk-sdk.S3ServerSideEncryptionRule.property.applyServerSideEncryptionByDefault"></a>

- *Type:* [`aws-cdk-sdk.S3ServerSideEncryptionByDefault`](#aws-cdk-sdk.S3ServerSideEncryptionByDefault)

---

### S3SourceSelectionCriteria <a name="aws-cdk-sdk.S3SourceSelectionCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3SourceSelectionCriteria } from 'aws-cdk-sdk'

const s3SourceSelectionCriteria: S3SourceSelectionCriteria = { ... }
```

##### `sseKmsEncryptedObjects`<sup>Optional</sup> <a name="aws-cdk-sdk.S3SourceSelectionCriteria.property.sseKmsEncryptedObjects"></a>

- *Type:* [`aws-cdk-sdk.S3SseKmsEncryptedObjects`](#aws-cdk-sdk.S3SseKmsEncryptedObjects)

---

### S3Ssekms <a name="aws-cdk-sdk.S3Ssekms"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3Ssekms } from 'aws-cdk-sdk'

const s3Ssekms: S3Ssekms = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.S3Ssekms.property.keyId"></a>

- *Type:* `string`

---

### S3SseKmsEncryptedObjects <a name="aws-cdk-sdk.S3SseKmsEncryptedObjects"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3SseKmsEncryptedObjects } from 'aws-cdk-sdk'

const s3SseKmsEncryptedObjects: S3SseKmsEncryptedObjects = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.S3SseKmsEncryptedObjects.property.status"></a>

- *Type:* `string`

---

### S3Sses3 <a name="aws-cdk-sdk.S3Sses3"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3Sses3 } from 'aws-cdk-sdk'

const s3Sses3: S3Sses3 = { ... }
```

### S3Stats <a name="aws-cdk-sdk.S3Stats"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3Stats } from 'aws-cdk-sdk'

const s3Stats: S3Stats = { ... }
```

##### `bytesProcessed`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Stats.property.bytesProcessed"></a>

- *Type:* `number`

---

##### `bytesReturned`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Stats.property.bytesReturned"></a>

- *Type:* `number`

---

##### `bytesScanned`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Stats.property.bytesScanned"></a>

- *Type:* `number`

---

### S3StatsEvent <a name="aws-cdk-sdk.S3StatsEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3StatsEvent } from 'aws-cdk-sdk'

const s3StatsEvent: S3StatsEvent = { ... }
```

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.S3StatsEvent.property.details"></a>

- *Type:* [`aws-cdk-sdk.S3Stats`](#aws-cdk-sdk.S3Stats)

---

### S3StorageClassAnalysis <a name="aws-cdk-sdk.S3StorageClassAnalysis"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3StorageClassAnalysis } from 'aws-cdk-sdk'

const s3StorageClassAnalysis: S3StorageClassAnalysis = { ... }
```

##### `dataExport`<sup>Optional</sup> <a name="aws-cdk-sdk.S3StorageClassAnalysis.property.dataExport"></a>

- *Type:* [`aws-cdk-sdk.S3StorageClassAnalysisDataExport`](#aws-cdk-sdk.S3StorageClassAnalysisDataExport)

---

### S3StorageClassAnalysisDataExport <a name="aws-cdk-sdk.S3StorageClassAnalysisDataExport"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3StorageClassAnalysisDataExport } from 'aws-cdk-sdk'

const s3StorageClassAnalysisDataExport: S3StorageClassAnalysisDataExport = { ... }
```

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.S3StorageClassAnalysisDataExport.property.destination"></a>

- *Type:* [`aws-cdk-sdk.S3AnalyticsExportDestination`](#aws-cdk-sdk.S3AnalyticsExportDestination)

---

##### `outputSchemaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.S3StorageClassAnalysisDataExport.property.outputSchemaVersion"></a>

- *Type:* `string`

---

### S3Tag <a name="aws-cdk-sdk.S3Tag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3Tag } from 'aws-cdk-sdk'

const s3Tag: S3Tag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3Tag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.S3Tag.property.value"></a>

- *Type:* `string`

---

### S3Tagging <a name="aws-cdk-sdk.S3Tagging"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3Tagging } from 'aws-cdk-sdk'

const s3Tagging: S3Tagging = { ... }
```

##### `tagSet`<sup>Required</sup> <a name="aws-cdk-sdk.S3Tagging.property.tagSet"></a>

- *Type:* [`aws-cdk-sdk.S3Tag`](#aws-cdk-sdk.S3Tag)[]

---

### S3TargetGrant <a name="aws-cdk-sdk.S3TargetGrant"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3TargetGrant } from 'aws-cdk-sdk'

const s3TargetGrant: S3TargetGrant = { ... }
```

##### `grantee`<sup>Optional</sup> <a name="aws-cdk-sdk.S3TargetGrant.property.grantee"></a>

- *Type:* [`aws-cdk-sdk.S3Grantee`](#aws-cdk-sdk.S3Grantee)

---

##### `permission`<sup>Optional</sup> <a name="aws-cdk-sdk.S3TargetGrant.property.permission"></a>

- *Type:* `string`

---

### S3Tiering <a name="aws-cdk-sdk.S3Tiering"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3Tiering } from 'aws-cdk-sdk'

const s3Tiering: S3Tiering = { ... }
```

##### `accessTier`<sup>Required</sup> <a name="aws-cdk-sdk.S3Tiering.property.accessTier"></a>

- *Type:* `string`

---

##### `days`<sup>Required</sup> <a name="aws-cdk-sdk.S3Tiering.property.days"></a>

- *Type:* `number`

---

### S3TopicConfiguration <a name="aws-cdk-sdk.S3TopicConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3TopicConfiguration } from 'aws-cdk-sdk'

const s3TopicConfiguration: S3TopicConfiguration = { ... }
```

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.S3TopicConfiguration.property.events"></a>

- *Type:* `string`[]

---

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.S3TopicConfiguration.property.topicArn"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.S3TopicConfiguration.property.filter"></a>

- *Type:* [`aws-cdk-sdk.S3NotificationConfigurationFilter`](#aws-cdk-sdk.S3NotificationConfigurationFilter)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.S3TopicConfiguration.property.id"></a>

- *Type:* `string`

---

### S3TopicConfigurationDeprecated <a name="aws-cdk-sdk.S3TopicConfigurationDeprecated"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3TopicConfigurationDeprecated } from 'aws-cdk-sdk'

const s3TopicConfigurationDeprecated: S3TopicConfigurationDeprecated = { ... }
```

##### `event`<sup>Optional</sup> <a name="aws-cdk-sdk.S3TopicConfigurationDeprecated.property.event"></a>

- *Type:* `string`

---

##### `events`<sup>Optional</sup> <a name="aws-cdk-sdk.S3TopicConfigurationDeprecated.property.events"></a>

- *Type:* `string`[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.S3TopicConfigurationDeprecated.property.id"></a>

- *Type:* `string`

---

##### `topic`<sup>Optional</sup> <a name="aws-cdk-sdk.S3TopicConfigurationDeprecated.property.topic"></a>

- *Type:* `string`

---

### S3Transition <a name="aws-cdk-sdk.S3Transition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3Transition } from 'aws-cdk-sdk'

const s3Transition: S3Transition = { ... }
```

##### `date`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Transition.property.date"></a>

- *Type:* `string`

---

##### `days`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Transition.property.days"></a>

- *Type:* `number`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.S3Transition.property.storageClass"></a>

- *Type:* `string`

---

### S3UploadPartCopyOutput <a name="aws-cdk-sdk.S3UploadPartCopyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3UploadPartCopyOutput } from 'aws-cdk-sdk'

const s3UploadPartCopyOutput: S3UploadPartCopyOutput = { ... }
```

##### `copyPartResult`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartCopyOutput.property.copyPartResult"></a>

- *Type:* [`aws-cdk-sdk.S3CopyPartResult`](#aws-cdk-sdk.S3CopyPartResult)

---

##### `copySourceVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartCopyOutput.property.copySourceVersionId"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartCopyOutput.property.requestCharged"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartCopyOutput.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartCopyOutput.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartCopyOutput.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartCopyOutput.property.ssekmsKeyId"></a>

- *Type:* `string`

---

### S3UploadPartCopyRequest <a name="aws-cdk-sdk.S3UploadPartCopyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3UploadPartCopyRequest } from 'aws-cdk-sdk'

const s3UploadPartCopyRequest: S3UploadPartCopyRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3UploadPartCopyRequest.property.bucket"></a>

- *Type:* `string`

---

##### `copySource`<sup>Required</sup> <a name="aws-cdk-sdk.S3UploadPartCopyRequest.property.copySource"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3UploadPartCopyRequest.property.key"></a>

- *Type:* `string`

---

##### `partNumber`<sup>Required</sup> <a name="aws-cdk-sdk.S3UploadPartCopyRequest.property.partNumber"></a>

- *Type:* `number`

---

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.S3UploadPartCopyRequest.property.uploadId"></a>

- *Type:* `string`

---

##### `copySourceIfMatch`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartCopyRequest.property.copySourceIfMatch"></a>

- *Type:* `string`

---

##### `copySourceIfModifiedSince`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartCopyRequest.property.copySourceIfModifiedSince"></a>

- *Type:* `string`

---

##### `copySourceIfNoneMatch`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartCopyRequest.property.copySourceIfNoneMatch"></a>

- *Type:* `string`

---

##### `copySourceIfUnmodifiedSince`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartCopyRequest.property.copySourceIfUnmodifiedSince"></a>

- *Type:* `string`

---

##### `copySourceRange`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartCopyRequest.property.copySourceRange"></a>

- *Type:* `string`

---

##### `copySourceSseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartCopyRequest.property.copySourceSseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `copySourceSseCustomerKey`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartCopyRequest.property.copySourceSseCustomerKey"></a>

- *Type:* `any`

---

##### `copySourceSseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartCopyRequest.property.copySourceSseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartCopyRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `expectedSourceBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartCopyRequest.property.expectedSourceBucketOwner"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartCopyRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartCopyRequest.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKey`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartCopyRequest.property.sseCustomerKey"></a>

- *Type:* `any`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartCopyRequest.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

### S3UploadPartOutput <a name="aws-cdk-sdk.S3UploadPartOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3UploadPartOutput } from 'aws-cdk-sdk'

const s3UploadPartOutput: S3UploadPartOutput = { ... }
```

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartOutput.property.eTag"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartOutput.property.requestCharged"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartOutput.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartOutput.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartOutput.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartOutput.property.ssekmsKeyId"></a>

- *Type:* `string`

---

### S3UploadPartRequest <a name="aws-cdk-sdk.S3UploadPartRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3UploadPartRequest } from 'aws-cdk-sdk'

const s3UploadPartRequest: S3UploadPartRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3UploadPartRequest.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3UploadPartRequest.property.key"></a>

- *Type:* `string`

---

##### `partNumber`<sup>Required</sup> <a name="aws-cdk-sdk.S3UploadPartRequest.property.partNumber"></a>

- *Type:* `number`

---

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.S3UploadPartRequest.property.uploadId"></a>

- *Type:* `string`

---

##### `body`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartRequest.property.body"></a>

- *Type:* `any`

---

##### `contentLength`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartRequest.property.contentLength"></a>

- *Type:* `number`

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartRequest.property.contentMd5"></a>

- *Type:* `string`

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartRequest.property.expectedBucketOwner"></a>

- *Type:* `string`

---

##### `requestPayer`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartRequest.property.requestPayer"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartRequest.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKey`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartRequest.property.sseCustomerKey"></a>

- *Type:* `any`

---

##### `sseCustomerKeyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.S3UploadPartRequest.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

### S3VersioningConfiguration <a name="aws-cdk-sdk.S3VersioningConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3VersioningConfiguration } from 'aws-cdk-sdk'

const s3VersioningConfiguration: S3VersioningConfiguration = { ... }
```

##### `mfaDelete`<sup>Optional</sup> <a name="aws-cdk-sdk.S3VersioningConfiguration.property.mfaDelete"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.S3VersioningConfiguration.property.status"></a>

- *Type:* `string`

---

### S3WebsiteConfiguration <a name="aws-cdk-sdk.S3WebsiteConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3WebsiteConfiguration } from 'aws-cdk-sdk'

const s3WebsiteConfiguration: S3WebsiteConfiguration = { ... }
```

##### `errorDocument`<sup>Optional</sup> <a name="aws-cdk-sdk.S3WebsiteConfiguration.property.errorDocument"></a>

- *Type:* [`aws-cdk-sdk.S3ErrorDocument`](#aws-cdk-sdk.S3ErrorDocument)

---

##### `indexDocument`<sup>Optional</sup> <a name="aws-cdk-sdk.S3WebsiteConfiguration.property.indexDocument"></a>

- *Type:* [`aws-cdk-sdk.S3IndexDocument`](#aws-cdk-sdk.S3IndexDocument)

---

##### `redirectAllRequestsTo`<sup>Optional</sup> <a name="aws-cdk-sdk.S3WebsiteConfiguration.property.redirectAllRequestsTo"></a>

- *Type:* [`aws-cdk-sdk.S3RedirectAllRequestsTo`](#aws-cdk-sdk.S3RedirectAllRequestsTo)

---

##### `routingRules`<sup>Optional</sup> <a name="aws-cdk-sdk.S3WebsiteConfiguration.property.routingRules"></a>

- *Type:* [`aws-cdk-sdk.S3RoutingRule`](#aws-cdk-sdk.S3RoutingRule)[]

---

## Classes <a name="Classes"></a>

### S3ResponsesAbortMultipartUpload <a name="aws-cdk-sdk.S3ResponsesAbortMultipartUpload"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesAbortMultipartUpload.Initializer"></a>

```typescript
import { S3ResponsesAbortMultipartUpload } from 'aws-cdk-sdk'

new S3ResponsesAbortMultipartUpload(__scope: Construct, __resources: string[], __input: S3AbortMultipartUploadRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesAbortMultipartUpload.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesAbortMultipartUpload.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesAbortMultipartUpload.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3AbortMultipartUploadRequest`](#aws-cdk-sdk.S3AbortMultipartUploadRequest)

---



#### Properties <a name="Properties"></a>

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesAbortMultipartUpload.property.requestCharged"></a>

- *Type:* `string`

---


### S3ResponsesCompleteMultipartUpload <a name="aws-cdk-sdk.S3ResponsesCompleteMultipartUpload"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesCompleteMultipartUpload.Initializer"></a>

```typescript
import { S3ResponsesCompleteMultipartUpload } from 'aws-cdk-sdk'

new S3ResponsesCompleteMultipartUpload(__scope: Construct, __resources: string[], __input: S3CompleteMultipartUploadRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCompleteMultipartUpload.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCompleteMultipartUpload.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCompleteMultipartUpload.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3CompleteMultipartUploadRequest`](#aws-cdk-sdk.S3CompleteMultipartUploadRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCompleteMultipartUpload.property.bucket"></a>

- *Type:* `string`

---

##### `eTag`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCompleteMultipartUpload.property.eTag"></a>

- *Type:* `string`

---

##### `expiration`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCompleteMultipartUpload.property.expiration"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCompleteMultipartUpload.property.key"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCompleteMultipartUpload.property.location"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCompleteMultipartUpload.property.requestCharged"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCompleteMultipartUpload.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCompleteMultipartUpload.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCompleteMultipartUpload.property.versionId"></a>

- *Type:* `string`

---


### S3ResponsesCopyObject <a name="aws-cdk-sdk.S3ResponsesCopyObject"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesCopyObject.Initializer"></a>

```typescript
import { S3ResponsesCopyObject } from 'aws-cdk-sdk'

new S3ResponsesCopyObject(__scope: Construct, __resources: string[], __input: S3CopyObjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCopyObject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCopyObject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCopyObject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3CopyObjectRequest`](#aws-cdk-sdk.S3CopyObjectRequest)

---



#### Properties <a name="Properties"></a>

##### `copyObjectResult`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCopyObject.property.copyObjectResult"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesCopyObjectCopyObjectResult`](#aws-cdk-sdk.S3ResponsesCopyObjectCopyObjectResult)

---

##### `copySourceVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCopyObject.property.copySourceVersionId"></a>

- *Type:* `string`

---

##### `expiration`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCopyObject.property.expiration"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCopyObject.property.requestCharged"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCopyObject.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCopyObject.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCopyObject.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsEncryptionContext`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCopyObject.property.ssekmsEncryptionContext"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCopyObject.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCopyObject.property.versionId"></a>

- *Type:* `string`

---


### S3ResponsesCopyObjectCopyObjectResult <a name="aws-cdk-sdk.S3ResponsesCopyObjectCopyObjectResult"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesCopyObjectCopyObjectResult.Initializer"></a>

```typescript
import { S3ResponsesCopyObjectCopyObjectResult } from 'aws-cdk-sdk'

new S3ResponsesCopyObjectCopyObjectResult(__scope: Construct, __resources: string[], __input: S3CopyObjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCopyObjectCopyObjectResult.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCopyObjectCopyObjectResult.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCopyObjectCopyObjectResult.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3CopyObjectRequest`](#aws-cdk-sdk.S3CopyObjectRequest)

---



#### Properties <a name="Properties"></a>

##### `eTag`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCopyObjectCopyObjectResult.property.eTag"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCopyObjectCopyObjectResult.property.lastModified"></a>

- *Type:* `string`

---


### S3ResponsesCreateBucket <a name="aws-cdk-sdk.S3ResponsesCreateBucket"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesCreateBucket.Initializer"></a>

```typescript
import { S3ResponsesCreateBucket } from 'aws-cdk-sdk'

new S3ResponsesCreateBucket(__scope: Construct, __resources: string[], __input: S3CreateBucketRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCreateBucket.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCreateBucket.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCreateBucket.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3CreateBucketRequest`](#aws-cdk-sdk.S3CreateBucketRequest)

---



#### Properties <a name="Properties"></a>

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCreateBucket.property.location"></a>

- *Type:* `string`

---


### S3ResponsesCreateMultipartUpload <a name="aws-cdk-sdk.S3ResponsesCreateMultipartUpload"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesCreateMultipartUpload.Initializer"></a>

```typescript
import { S3ResponsesCreateMultipartUpload } from 'aws-cdk-sdk'

new S3ResponsesCreateMultipartUpload(__scope: Construct, __resources: string[], __input: S3CreateMultipartUploadRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCreateMultipartUpload.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCreateMultipartUpload.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCreateMultipartUpload.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3CreateMultipartUploadRequest`](#aws-cdk-sdk.S3CreateMultipartUploadRequest)

---



#### Properties <a name="Properties"></a>

##### `abortDate`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCreateMultipartUpload.property.abortDate"></a>

- *Type:* `string`

---

##### `abortRuleId`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCreateMultipartUpload.property.abortRuleId"></a>

- *Type:* `string`

---

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCreateMultipartUpload.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCreateMultipartUpload.property.key"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCreateMultipartUpload.property.requestCharged"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCreateMultipartUpload.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCreateMultipartUpload.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCreateMultipartUpload.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsEncryptionContext`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCreateMultipartUpload.property.ssekmsEncryptionContext"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCreateMultipartUpload.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesCreateMultipartUpload.property.uploadId"></a>

- *Type:* `string`

---


### S3ResponsesDeleteObject <a name="aws-cdk-sdk.S3ResponsesDeleteObject"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesDeleteObject.Initializer"></a>

```typescript
import { S3ResponsesDeleteObject } from 'aws-cdk-sdk'

new S3ResponsesDeleteObject(__scope: Construct, __resources: string[], __input: S3DeleteObjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesDeleteObject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesDeleteObject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesDeleteObject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3DeleteObjectRequest`](#aws-cdk-sdk.S3DeleteObjectRequest)

---



#### Properties <a name="Properties"></a>

##### `deleteMarker`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesDeleteObject.property.deleteMarker"></a>

- *Type:* `boolean`

---

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesDeleteObject.property.requestCharged"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesDeleteObject.property.versionId"></a>

- *Type:* `string`

---


### S3ResponsesDeleteObjects <a name="aws-cdk-sdk.S3ResponsesDeleteObjects"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesDeleteObjects.Initializer"></a>

```typescript
import { S3ResponsesDeleteObjects } from 'aws-cdk-sdk'

new S3ResponsesDeleteObjects(__scope: Construct, __resources: string[], __input: S3DeleteObjectsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesDeleteObjects.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesDeleteObjects.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesDeleteObjects.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3DeleteObjectsRequest`](#aws-cdk-sdk.S3DeleteObjectsRequest)

---



#### Properties <a name="Properties"></a>

##### `deleted`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesDeleteObjects.property.deleted"></a>

- *Type:* [`aws-cdk-sdk.S3DeletedObject`](#aws-cdk-sdk.S3DeletedObject)[]

---

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesDeleteObjects.property.errors"></a>

- *Type:* [`aws-cdk-sdk.S3Error`](#aws-cdk-sdk.S3Error)[]

---

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesDeleteObjects.property.requestCharged"></a>

- *Type:* `string`

---


### S3ResponsesDeleteObjectTagging <a name="aws-cdk-sdk.S3ResponsesDeleteObjectTagging"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesDeleteObjectTagging.Initializer"></a>

```typescript
import { S3ResponsesDeleteObjectTagging } from 'aws-cdk-sdk'

new S3ResponsesDeleteObjectTagging(__scope: Construct, __resources: string[], __input: S3DeleteObjectTaggingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesDeleteObjectTagging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesDeleteObjectTagging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesDeleteObjectTagging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3DeleteObjectTaggingRequest`](#aws-cdk-sdk.S3DeleteObjectTaggingRequest)

---



#### Properties <a name="Properties"></a>

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesDeleteObjectTagging.property.versionId"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketAccelerateConfiguration <a name="aws-cdk-sdk.S3ResponsesFetchBucketAccelerateConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketAccelerateConfiguration.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketAccelerateConfiguration } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketAccelerateConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketAccelerateConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAccelerateConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAccelerateConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAccelerateConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketAccelerateConfigurationRequest`](#aws-cdk-sdk.S3GetBucketAccelerateConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAccelerateConfiguration.property.status"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketAcl <a name="aws-cdk-sdk.S3ResponsesFetchBucketAcl"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketAcl.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketAcl } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketAcl(__scope: Construct, __resources: string[], __input: S3GetBucketAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAcl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAcl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAcl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketAclRequest`](#aws-cdk-sdk.S3GetBucketAclRequest)

---



#### Properties <a name="Properties"></a>

##### `grants`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAcl.property.grants"></a>

- *Type:* [`aws-cdk-sdk.S3Grant`](#aws-cdk-sdk.S3Grant)[]

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAcl.property.owner"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketAclOwner`](#aws-cdk-sdk.S3ResponsesFetchBucketAclOwner)

---


### S3ResponsesFetchBucketAclOwner <a name="aws-cdk-sdk.S3ResponsesFetchBucketAclOwner"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketAclOwner.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketAclOwner } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketAclOwner(__scope: Construct, __resources: string[], __input: S3GetBucketAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAclOwner.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAclOwner.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAclOwner.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketAclRequest`](#aws-cdk-sdk.S3GetBucketAclRequest)

---



#### Properties <a name="Properties"></a>

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAclOwner.property.displayName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAclOwner.property.id"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketAnalyticsConfiguration <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfiguration.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketAnalyticsConfiguration } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketAnalyticsConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketAnalyticsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketAnalyticsConfigurationRequest`](#aws-cdk-sdk.S3GetBucketAnalyticsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `analyticsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfiguration.property.analyticsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration`](#aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration)

---


### S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketAnalyticsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketAnalyticsConfigurationRequest`](#aws-cdk-sdk.S3GetBucketAnalyticsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `filter`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration.property.filter"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter`](#aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration.property.id"></a>

- *Type:* `string`

---

##### `storageClassAnalysis`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration.property.storageClassAnalysis"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysis`](#aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysis)

---


### S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter(__scope: Construct, __resources: string[], __input: S3GetBucketAnalyticsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketAnalyticsConfigurationRequest`](#aws-cdk-sdk.S3GetBucketAnalyticsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `and`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter.property.and"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd`](#aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd)

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter.property.prefix"></a>

- *Type:* `string`

---

##### `tag`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter.property.tag"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag`](#aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag)

---


### S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd(__scope: Construct, __resources: string[], __input: S3GetBucketAnalyticsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketAnalyticsConfigurationRequest`](#aws-cdk-sdk.S3GetBucketAnalyticsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd.property.prefix"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd.property.tags"></a>

- *Type:* [`aws-cdk-sdk.S3Tag`](#aws-cdk-sdk.S3Tag)[]

---


### S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag(__scope: Construct, __resources: string[], __input: S3GetBucketAnalyticsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketAnalyticsConfigurationRequest`](#aws-cdk-sdk.S3GetBucketAnalyticsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag.property.value"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysis <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysis"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysis.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysis } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysis(__scope: Construct, __resources: string[], __input: S3GetBucketAnalyticsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysis.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysis.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysis.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketAnalyticsConfigurationRequest`](#aws-cdk-sdk.S3GetBucketAnalyticsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `dataExport`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysis.property.dataExport"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport`](#aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport)

---


### S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport(__scope: Construct, __resources: string[], __input: S3GetBucketAnalyticsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketAnalyticsConfigurationRequest`](#aws-cdk-sdk.S3GetBucketAnalyticsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport.property.destination"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestination`](#aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestination)

---

##### `outputSchemaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport.property.outputSchemaVersion"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestination <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestination"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestination.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestination } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestination(__scope: Construct, __resources: string[], __input: S3GetBucketAnalyticsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketAnalyticsConfigurationRequest`](#aws-cdk-sdk.S3GetBucketAnalyticsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `s3BucketDestination`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestination.property.s3BucketDestination"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination`](#aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination)

---


### S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination(__scope: Construct, __resources: string[], __input: S3GetBucketAnalyticsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketAnalyticsConfigurationRequest`](#aws-cdk-sdk.S3GetBucketAnalyticsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination.property.bucket"></a>

- *Type:* `string`

---

##### `bucketAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination.property.bucketAccountId"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination.property.format"></a>

- *Type:* `string`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination.property.prefix"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketCors <a name="aws-cdk-sdk.S3ResponsesFetchBucketCors"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketCors.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketCors } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketCors(__scope: Construct, __resources: string[], __input: S3GetBucketCorsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketCors.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketCors.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketCors.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketCorsRequest`](#aws-cdk-sdk.S3GetBucketCorsRequest)

---



#### Properties <a name="Properties"></a>

##### `corsRules`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketCors.property.corsRules"></a>

- *Type:* [`aws-cdk-sdk.S3CorsRule`](#aws-cdk-sdk.S3CorsRule)[]

---


### S3ResponsesFetchBucketEncryption <a name="aws-cdk-sdk.S3ResponsesFetchBucketEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketEncryption.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketEncryption } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketEncryption(__scope: Construct, __resources: string[], __input: S3GetBucketEncryptionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketEncryptionRequest`](#aws-cdk-sdk.S3GetBucketEncryptionRequest)

---



#### Properties <a name="Properties"></a>

##### `serverSideEncryptionConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketEncryption.property.serverSideEncryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketEncryptionServerSideEncryptionConfiguration`](#aws-cdk-sdk.S3ResponsesFetchBucketEncryptionServerSideEncryptionConfiguration)

---


### S3ResponsesFetchBucketEncryptionServerSideEncryptionConfiguration <a name="aws-cdk-sdk.S3ResponsesFetchBucketEncryptionServerSideEncryptionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketEncryptionServerSideEncryptionConfiguration.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketEncryptionServerSideEncryptionConfiguration } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketEncryptionServerSideEncryptionConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketEncryptionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketEncryptionServerSideEncryptionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketEncryptionServerSideEncryptionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketEncryptionServerSideEncryptionConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketEncryptionRequest`](#aws-cdk-sdk.S3GetBucketEncryptionRequest)

---



#### Properties <a name="Properties"></a>

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketEncryptionServerSideEncryptionConfiguration.property.rules"></a>

- *Type:* [`aws-cdk-sdk.S3ServerSideEncryptionRule`](#aws-cdk-sdk.S3ServerSideEncryptionRule)[]

---


### S3ResponsesFetchBucketIntelligentTieringConfiguration <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfiguration.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketIntelligentTieringConfiguration } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketIntelligentTieringConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketIntelligentTieringConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketIntelligentTieringConfigurationRequest`](#aws-cdk-sdk.S3GetBucketIntelligentTieringConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `intelligentTieringConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfiguration.property.intelligentTieringConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration`](#aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration)

---


### S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketIntelligentTieringConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketIntelligentTieringConfigurationRequest`](#aws-cdk-sdk.S3GetBucketIntelligentTieringConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `filter`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration.property.filter"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter`](#aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration.property.id"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration.property.status"></a>

- *Type:* `string`

---

##### `tierings`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration.property.tierings"></a>

- *Type:* [`aws-cdk-sdk.S3Tiering`](#aws-cdk-sdk.S3Tiering)[]

---


### S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter(__scope: Construct, __resources: string[], __input: S3GetBucketIntelligentTieringConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketIntelligentTieringConfigurationRequest`](#aws-cdk-sdk.S3GetBucketIntelligentTieringConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `and`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter.property.and"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd`](#aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd)

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter.property.prefix"></a>

- *Type:* `string`

---

##### `tag`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter.property.tag"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag`](#aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag)

---


### S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd(__scope: Construct, __resources: string[], __input: S3GetBucketIntelligentTieringConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketIntelligentTieringConfigurationRequest`](#aws-cdk-sdk.S3GetBucketIntelligentTieringConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd.property.prefix"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd.property.tags"></a>

- *Type:* [`aws-cdk-sdk.S3Tag`](#aws-cdk-sdk.S3Tag)[]

---


### S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag(__scope: Construct, __resources: string[], __input: S3GetBucketIntelligentTieringConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketIntelligentTieringConfigurationRequest`](#aws-cdk-sdk.S3GetBucketIntelligentTieringConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag.property.value"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketInventoryConfiguration <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfiguration.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketInventoryConfiguration } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketInventoryConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketInventoryConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketInventoryConfigurationRequest`](#aws-cdk-sdk.S3GetBucketInventoryConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `inventoryConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfiguration.property.inventoryConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration`](#aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration)

---


### S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketInventoryConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketInventoryConfigurationRequest`](#aws-cdk-sdk.S3GetBucketInventoryConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration.property.destination"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestination`](#aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestination)

---

##### `filter`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration.property.filter"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationFilter`](#aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationFilter)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration.property.id"></a>

- *Type:* `string`

---

##### `includedObjectVersions`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration.property.includedObjectVersions"></a>

- *Type:* `string`

---

##### `isEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration.property.isEnabled"></a>

- *Type:* `boolean`

---

##### `optionalFields`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration.property.optionalFields"></a>

- *Type:* `string`[]

---

##### `schedule`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration.property.schedule"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationSchedule`](#aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationSchedule)

---


### S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestination <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestination"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestination.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestination } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestination(__scope: Construct, __resources: string[], __input: S3GetBucketInventoryConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketInventoryConfigurationRequest`](#aws-cdk-sdk.S3GetBucketInventoryConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `s3BucketDestination`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestination.property.s3BucketDestination"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination`](#aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination)

---


### S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination(__scope: Construct, __resources: string[], __input: S3GetBucketInventoryConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketInventoryConfigurationRequest`](#aws-cdk-sdk.S3GetBucketInventoryConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination.property.accountId"></a>

- *Type:* `string`

---

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination.property.bucket"></a>

- *Type:* `string`

---

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption`](#aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption)

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination.property.format"></a>

- *Type:* `string`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination.property.prefix"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption(__scope: Construct, __resources: string[], __input: S3GetBucketInventoryConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketInventoryConfigurationRequest`](#aws-cdk-sdk.S3GetBucketInventoryConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `ssekms`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption.property.ssekms"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSsekms`](#aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSsekms)

---

##### `sses3`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption.property.sses3"></a>

- *Type:* `any`

---


### S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSsekms <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSsekms"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSsekms.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSsekms } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSsekms(__scope: Construct, __resources: string[], __input: S3GetBucketInventoryConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSsekms.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSsekms.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSsekms.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketInventoryConfigurationRequest`](#aws-cdk-sdk.S3GetBucketInventoryConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSsekms.property.keyId"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationFilter <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationFilter"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationFilter.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationFilter } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationFilter(__scope: Construct, __resources: string[], __input: S3GetBucketInventoryConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationFilter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationFilter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationFilter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketInventoryConfigurationRequest`](#aws-cdk-sdk.S3GetBucketInventoryConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationFilter.property.prefix"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationSchedule <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationSchedule"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationSchedule.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationSchedule } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationSchedule(__scope: Construct, __resources: string[], __input: S3GetBucketInventoryConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationSchedule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationSchedule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationSchedule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketInventoryConfigurationRequest`](#aws-cdk-sdk.S3GetBucketInventoryConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `frequency`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationSchedule.property.frequency"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketLifecycle <a name="aws-cdk-sdk.S3ResponsesFetchBucketLifecycle"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketLifecycle.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketLifecycle } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketLifecycle(__scope: Construct, __resources: string[], __input: S3GetBucketLifecycleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketLifecycle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketLifecycle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketLifecycle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketLifecycleRequest`](#aws-cdk-sdk.S3GetBucketLifecycleRequest)

---



#### Properties <a name="Properties"></a>

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketLifecycle.property.rules"></a>

- *Type:* [`aws-cdk-sdk.S3Rule`](#aws-cdk-sdk.S3Rule)[]

---


### S3ResponsesFetchBucketLifecycleConfiguration <a name="aws-cdk-sdk.S3ResponsesFetchBucketLifecycleConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketLifecycleConfiguration.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketLifecycleConfiguration } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketLifecycleConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketLifecycleConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketLifecycleConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketLifecycleConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketLifecycleConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketLifecycleConfigurationRequest`](#aws-cdk-sdk.S3GetBucketLifecycleConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketLifecycleConfiguration.property.rules"></a>

- *Type:* [`aws-cdk-sdk.S3LifecycleRule`](#aws-cdk-sdk.S3LifecycleRule)[]

---


### S3ResponsesFetchBucketLocation <a name="aws-cdk-sdk.S3ResponsesFetchBucketLocation"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketLocation.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketLocation } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketLocation(__scope: Construct, __resources: string[], __input: S3GetBucketLocationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketLocationRequest`](#aws-cdk-sdk.S3GetBucketLocationRequest)

---



#### Properties <a name="Properties"></a>

##### `locationConstraint`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketLocation.property.locationConstraint"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketLogging <a name="aws-cdk-sdk.S3ResponsesFetchBucketLogging"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketLogging.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketLogging } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketLogging(__scope: Construct, __resources: string[], __input: S3GetBucketLoggingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketLogging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketLogging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketLogging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketLoggingRequest`](#aws-cdk-sdk.S3GetBucketLoggingRequest)

---



#### Properties <a name="Properties"></a>

##### `loggingEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketLogging.property.loggingEnabled"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketLoggingLoggingEnabled`](#aws-cdk-sdk.S3ResponsesFetchBucketLoggingLoggingEnabled)

---


### S3ResponsesFetchBucketLoggingLoggingEnabled <a name="aws-cdk-sdk.S3ResponsesFetchBucketLoggingLoggingEnabled"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketLoggingLoggingEnabled.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketLoggingLoggingEnabled } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketLoggingLoggingEnabled(__scope: Construct, __resources: string[], __input: S3GetBucketLoggingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketLoggingLoggingEnabled.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketLoggingLoggingEnabled.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketLoggingLoggingEnabled.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketLoggingRequest`](#aws-cdk-sdk.S3GetBucketLoggingRequest)

---



#### Properties <a name="Properties"></a>

##### `targetBucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketLoggingLoggingEnabled.property.targetBucket"></a>

- *Type:* `string`

---

##### `targetGrants`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketLoggingLoggingEnabled.property.targetGrants"></a>

- *Type:* [`aws-cdk-sdk.S3TargetGrant`](#aws-cdk-sdk.S3TargetGrant)[]

---

##### `targetPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketLoggingLoggingEnabled.property.targetPrefix"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketMetricsConfiguration <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfiguration.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketMetricsConfiguration } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketMetricsConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketMetricsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketMetricsConfigurationRequest`](#aws-cdk-sdk.S3GetBucketMetricsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `metricsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfiguration.property.metricsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfiguration`](#aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfiguration)

---


### S3ResponsesFetchBucketMetricsConfigurationMetricsConfiguration <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfiguration.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketMetricsConfigurationMetricsConfiguration } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketMetricsConfigurationMetricsConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketMetricsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketMetricsConfigurationRequest`](#aws-cdk-sdk.S3GetBucketMetricsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `filter`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfiguration.property.filter"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter`](#aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfiguration.property.id"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter(__scope: Construct, __resources: string[], __input: S3GetBucketMetricsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketMetricsConfigurationRequest`](#aws-cdk-sdk.S3GetBucketMetricsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `and`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter.property.and"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterAnd`](#aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterAnd)

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter.property.prefix"></a>

- *Type:* `string`

---

##### `tag`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter.property.tag"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterTag`](#aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterTag)

---


### S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterAnd <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterAnd"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterAnd.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterAnd } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterAnd(__scope: Construct, __resources: string[], __input: S3GetBucketMetricsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterAnd.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterAnd.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterAnd.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketMetricsConfigurationRequest`](#aws-cdk-sdk.S3GetBucketMetricsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterAnd.property.prefix"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterAnd.property.tags"></a>

- *Type:* [`aws-cdk-sdk.S3Tag`](#aws-cdk-sdk.S3Tag)[]

---


### S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterTag <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterTag"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterTag.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterTag } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterTag(__scope: Construct, __resources: string[], __input: S3GetBucketMetricsConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterTag.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterTag.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterTag.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketMetricsConfigurationRequest`](#aws-cdk-sdk.S3GetBucketMetricsConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterTag.property.value"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketNotification <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotification"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotification.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketNotification } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketNotification(__scope: Construct, __resources: string[], __input: S3GetBucketNotificationConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketNotificationConfigurationRequest`](#aws-cdk-sdk.S3GetBucketNotificationConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudFunctionConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotification.property.cloudFunctionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketNotificationCloudFunctionConfiguration`](#aws-cdk-sdk.S3ResponsesFetchBucketNotificationCloudFunctionConfiguration)

---

##### `queueConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotification.property.queueConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketNotificationQueueConfiguration`](#aws-cdk-sdk.S3ResponsesFetchBucketNotificationQueueConfiguration)

---

##### `topicConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotification.property.topicConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketNotificationTopicConfiguration`](#aws-cdk-sdk.S3ResponsesFetchBucketNotificationTopicConfiguration)

---


### S3ResponsesFetchBucketNotificationCloudFunctionConfiguration <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationCloudFunctionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationCloudFunctionConfiguration.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketNotificationCloudFunctionConfiguration } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketNotificationCloudFunctionConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketNotificationConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationCloudFunctionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationCloudFunctionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationCloudFunctionConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketNotificationConfigurationRequest`](#aws-cdk-sdk.S3GetBucketNotificationConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudFunction`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationCloudFunctionConfiguration.property.cloudFunction"></a>

- *Type:* `string`

---

##### `event`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationCloudFunctionConfiguration.property.event"></a>

- *Type:* `string`

---

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationCloudFunctionConfiguration.property.events"></a>

- *Type:* `string`[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationCloudFunctionConfiguration.property.id"></a>

- *Type:* `string`

---

##### `invocationRole`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationCloudFunctionConfiguration.property.invocationRole"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketNotificationConfiguration <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationConfiguration.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketNotificationConfiguration } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketNotificationConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketNotificationConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketNotificationConfigurationRequest`](#aws-cdk-sdk.S3GetBucketNotificationConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `lambdaFunctionConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationConfiguration.property.lambdaFunctionConfigurations"></a>

- *Type:* [`aws-cdk-sdk.S3LambdaFunctionConfiguration`](#aws-cdk-sdk.S3LambdaFunctionConfiguration)[]

---

##### `queueConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationConfiguration.property.queueConfigurations"></a>

- *Type:* [`aws-cdk-sdk.S3QueueConfiguration`](#aws-cdk-sdk.S3QueueConfiguration)[]

---

##### `topicConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationConfiguration.property.topicConfigurations"></a>

- *Type:* [`aws-cdk-sdk.S3TopicConfiguration`](#aws-cdk-sdk.S3TopicConfiguration)[]

---


### S3ResponsesFetchBucketNotificationQueueConfiguration <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationQueueConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationQueueConfiguration.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketNotificationQueueConfiguration } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketNotificationQueueConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketNotificationConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationQueueConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationQueueConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationQueueConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketNotificationConfigurationRequest`](#aws-cdk-sdk.S3GetBucketNotificationConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `event`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationQueueConfiguration.property.event"></a>

- *Type:* `string`

---

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationQueueConfiguration.property.events"></a>

- *Type:* `string`[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationQueueConfiguration.property.id"></a>

- *Type:* `string`

---

##### `queue`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationQueueConfiguration.property.queue"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketNotificationTopicConfiguration <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationTopicConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationTopicConfiguration.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketNotificationTopicConfiguration } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketNotificationTopicConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketNotificationConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationTopicConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationTopicConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationTopicConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketNotificationConfigurationRequest`](#aws-cdk-sdk.S3GetBucketNotificationConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `event`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationTopicConfiguration.property.event"></a>

- *Type:* `string`

---

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationTopicConfiguration.property.events"></a>

- *Type:* `string`[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationTopicConfiguration.property.id"></a>

- *Type:* `string`

---

##### `topic`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketNotificationTopicConfiguration.property.topic"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketOwnershipControls <a name="aws-cdk-sdk.S3ResponsesFetchBucketOwnershipControls"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketOwnershipControls.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketOwnershipControls } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketOwnershipControls(__scope: Construct, __resources: string[], __input: S3GetBucketOwnershipControlsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketOwnershipControls.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketOwnershipControls.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketOwnershipControls.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketOwnershipControlsRequest`](#aws-cdk-sdk.S3GetBucketOwnershipControlsRequest)

---



#### Properties <a name="Properties"></a>

##### `ownershipControls`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketOwnershipControls.property.ownershipControls"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketOwnershipControlsOwnershipControls`](#aws-cdk-sdk.S3ResponsesFetchBucketOwnershipControlsOwnershipControls)

---


### S3ResponsesFetchBucketOwnershipControlsOwnershipControls <a name="aws-cdk-sdk.S3ResponsesFetchBucketOwnershipControlsOwnershipControls"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketOwnershipControlsOwnershipControls.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketOwnershipControlsOwnershipControls } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketOwnershipControlsOwnershipControls(__scope: Construct, __resources: string[], __input: S3GetBucketOwnershipControlsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketOwnershipControlsOwnershipControls.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketOwnershipControlsOwnershipControls.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketOwnershipControlsOwnershipControls.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketOwnershipControlsRequest`](#aws-cdk-sdk.S3GetBucketOwnershipControlsRequest)

---



#### Properties <a name="Properties"></a>

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketOwnershipControlsOwnershipControls.property.rules"></a>

- *Type:* [`aws-cdk-sdk.S3OwnershipControlsRule`](#aws-cdk-sdk.S3OwnershipControlsRule)[]

---


### S3ResponsesFetchBucketPolicy <a name="aws-cdk-sdk.S3ResponsesFetchBucketPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketPolicy.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketPolicy } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketPolicy(__scope: Construct, __resources: string[], __input: S3GetBucketPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketPolicyRequest`](#aws-cdk-sdk.S3GetBucketPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketPolicy.property.policy"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketPolicyStatus <a name="aws-cdk-sdk.S3ResponsesFetchBucketPolicyStatus"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketPolicyStatus.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketPolicyStatus } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketPolicyStatus(__scope: Construct, __resources: string[], __input: S3GetBucketPolicyStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketPolicyStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketPolicyStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketPolicyStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketPolicyStatusRequest`](#aws-cdk-sdk.S3GetBucketPolicyStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `policyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketPolicyStatus.property.policyStatus"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketPolicyStatusPolicyStatus`](#aws-cdk-sdk.S3ResponsesFetchBucketPolicyStatusPolicyStatus)

---


### S3ResponsesFetchBucketPolicyStatusPolicyStatus <a name="aws-cdk-sdk.S3ResponsesFetchBucketPolicyStatusPolicyStatus"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketPolicyStatusPolicyStatus.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketPolicyStatusPolicyStatus } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketPolicyStatusPolicyStatus(__scope: Construct, __resources: string[], __input: S3GetBucketPolicyStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketPolicyStatusPolicyStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketPolicyStatusPolicyStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketPolicyStatusPolicyStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketPolicyStatusRequest`](#aws-cdk-sdk.S3GetBucketPolicyStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `isPublic`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketPolicyStatusPolicyStatus.property.isPublic"></a>

- *Type:* `boolean`

---


### S3ResponsesFetchBucketReplication <a name="aws-cdk-sdk.S3ResponsesFetchBucketReplication"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketReplication.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketReplication } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketReplication(__scope: Construct, __resources: string[], __input: S3GetBucketReplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketReplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketReplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketReplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketReplicationRequest`](#aws-cdk-sdk.S3GetBucketReplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `replicationConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketReplication.property.replicationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketReplicationReplicationConfiguration`](#aws-cdk-sdk.S3ResponsesFetchBucketReplicationReplicationConfiguration)

---


### S3ResponsesFetchBucketReplicationReplicationConfiguration <a name="aws-cdk-sdk.S3ResponsesFetchBucketReplicationReplicationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketReplicationReplicationConfiguration.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketReplicationReplicationConfiguration } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketReplicationReplicationConfiguration(__scope: Construct, __resources: string[], __input: S3GetBucketReplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketReplicationReplicationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketReplicationReplicationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketReplicationReplicationConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketReplicationRequest`](#aws-cdk-sdk.S3GetBucketReplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketReplicationReplicationConfiguration.property.role"></a>

- *Type:* `string`

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketReplicationReplicationConfiguration.property.rules"></a>

- *Type:* [`aws-cdk-sdk.S3ReplicationRule`](#aws-cdk-sdk.S3ReplicationRule)[]

---


### S3ResponsesFetchBucketRequestPayment <a name="aws-cdk-sdk.S3ResponsesFetchBucketRequestPayment"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketRequestPayment.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketRequestPayment } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketRequestPayment(__scope: Construct, __resources: string[], __input: S3GetBucketRequestPaymentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketRequestPayment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketRequestPayment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketRequestPayment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketRequestPaymentRequest`](#aws-cdk-sdk.S3GetBucketRequestPaymentRequest)

---



#### Properties <a name="Properties"></a>

##### `payer`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketRequestPayment.property.payer"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketTagging <a name="aws-cdk-sdk.S3ResponsesFetchBucketTagging"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketTagging.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketTagging } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketTagging(__scope: Construct, __resources: string[], __input: S3GetBucketTaggingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketTagging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketTagging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketTagging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketTaggingRequest`](#aws-cdk-sdk.S3GetBucketTaggingRequest)

---



#### Properties <a name="Properties"></a>

##### `tagSet`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketTagging.property.tagSet"></a>

- *Type:* [`aws-cdk-sdk.S3Tag`](#aws-cdk-sdk.S3Tag)[]

---


### S3ResponsesFetchBucketVersioning <a name="aws-cdk-sdk.S3ResponsesFetchBucketVersioning"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketVersioning.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketVersioning } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketVersioning(__scope: Construct, __resources: string[], __input: S3GetBucketVersioningRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketVersioning.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketVersioning.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketVersioning.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketVersioningRequest`](#aws-cdk-sdk.S3GetBucketVersioningRequest)

---



#### Properties <a name="Properties"></a>

##### `mfaDelete`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketVersioning.property.mfaDelete"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketVersioning.property.status"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketWebsite <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsite"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsite.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketWebsite } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketWebsite(__scope: Construct, __resources: string[], __input: S3GetBucketWebsiteRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsite.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsite.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsite.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketWebsiteRequest`](#aws-cdk-sdk.S3GetBucketWebsiteRequest)

---



#### Properties <a name="Properties"></a>

##### `errorDocument`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsite.property.errorDocument"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketWebsiteErrorDocument`](#aws-cdk-sdk.S3ResponsesFetchBucketWebsiteErrorDocument)

---

##### `indexDocument`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsite.property.indexDocument"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketWebsiteIndexDocument`](#aws-cdk-sdk.S3ResponsesFetchBucketWebsiteIndexDocument)

---

##### `redirectAllRequestsTo`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsite.property.redirectAllRequestsTo"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchBucketWebsiteRedirectAllRequestsTo`](#aws-cdk-sdk.S3ResponsesFetchBucketWebsiteRedirectAllRequestsTo)

---

##### `routingRules`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsite.property.routingRules"></a>

- *Type:* [`aws-cdk-sdk.S3RoutingRule`](#aws-cdk-sdk.S3RoutingRule)[]

---


### S3ResponsesFetchBucketWebsiteErrorDocument <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsiteErrorDocument"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsiteErrorDocument.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketWebsiteErrorDocument } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketWebsiteErrorDocument(__scope: Construct, __resources: string[], __input: S3GetBucketWebsiteRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsiteErrorDocument.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsiteErrorDocument.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsiteErrorDocument.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketWebsiteRequest`](#aws-cdk-sdk.S3GetBucketWebsiteRequest)

---



#### Properties <a name="Properties"></a>

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsiteErrorDocument.property.key"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketWebsiteIndexDocument <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsiteIndexDocument"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsiteIndexDocument.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketWebsiteIndexDocument } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketWebsiteIndexDocument(__scope: Construct, __resources: string[], __input: S3GetBucketWebsiteRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsiteIndexDocument.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsiteIndexDocument.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsiteIndexDocument.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketWebsiteRequest`](#aws-cdk-sdk.S3GetBucketWebsiteRequest)

---



#### Properties <a name="Properties"></a>

##### `suffix`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsiteIndexDocument.property.suffix"></a>

- *Type:* `string`

---


### S3ResponsesFetchBucketWebsiteRedirectAllRequestsTo <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsiteRedirectAllRequestsTo"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsiteRedirectAllRequestsTo.Initializer"></a>

```typescript
import { S3ResponsesFetchBucketWebsiteRedirectAllRequestsTo } from 'aws-cdk-sdk'

new S3ResponsesFetchBucketWebsiteRedirectAllRequestsTo(__scope: Construct, __resources: string[], __input: S3GetBucketWebsiteRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsiteRedirectAllRequestsTo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsiteRedirectAllRequestsTo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsiteRedirectAllRequestsTo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetBucketWebsiteRequest`](#aws-cdk-sdk.S3GetBucketWebsiteRequest)

---



#### Properties <a name="Properties"></a>

##### `hostName`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsiteRedirectAllRequestsTo.property.hostName"></a>

- *Type:* `string`

---

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchBucketWebsiteRedirectAllRequestsTo.property.protocol"></a>

- *Type:* `string`

---


### S3ResponsesFetchObject <a name="aws-cdk-sdk.S3ResponsesFetchObject"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchObject.Initializer"></a>

```typescript
import { S3ResponsesFetchObject } from 'aws-cdk-sdk'

new S3ResponsesFetchObject(__scope: Construct, __resources: string[], __input: S3GetObjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetObjectRequest`](#aws-cdk-sdk.S3GetObjectRequest)

---



#### Properties <a name="Properties"></a>

##### `acceptRanges`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.acceptRanges"></a>

- *Type:* `string`

---

##### `body`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.body"></a>

- *Type:* `any`

---

##### `cacheControl`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.cacheControl"></a>

- *Type:* `string`

---

##### `contentDisposition`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.contentDisposition"></a>

- *Type:* `string`

---

##### `contentEncoding`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.contentEncoding"></a>

- *Type:* `string`

---

##### `contentLanguage`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.contentLanguage"></a>

- *Type:* `string`

---

##### `contentLength`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.contentLength"></a>

- *Type:* `number`

---

##### `contentRange`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.contentRange"></a>

- *Type:* `string`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.contentType"></a>

- *Type:* `string`

---

##### `deleteMarker`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.deleteMarker"></a>

- *Type:* `boolean`

---

##### `eTag`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.eTag"></a>

- *Type:* `string`

---

##### `expiration`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.expiration"></a>

- *Type:* `string`

---

##### `expires`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.expires"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.lastModified"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.metadata"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `missingMeta`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.missingMeta"></a>

- *Type:* `number`

---

##### `objectLockLegalHoldStatus`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.objectLockLegalHoldStatus"></a>

- *Type:* `string`

---

##### `objectLockMode`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.objectLockMode"></a>

- *Type:* `string`

---

##### `objectLockRetainUntilDate`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.objectLockRetainUntilDate"></a>

- *Type:* `string`

---

##### `partsCount`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.partsCount"></a>

- *Type:* `number`

---

##### `replicationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.replicationStatus"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.requestCharged"></a>

- *Type:* `string`

---

##### `restore`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.restore"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.storageClass"></a>

- *Type:* `string`

---

##### `tagCount`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.tagCount"></a>

- *Type:* `number`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.versionId"></a>

- *Type:* `string`

---

##### `websiteRedirectLocation`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObject.property.websiteRedirectLocation"></a>

- *Type:* `string`

---


### S3ResponsesFetchObjectAcl <a name="aws-cdk-sdk.S3ResponsesFetchObjectAcl"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchObjectAcl.Initializer"></a>

```typescript
import { S3ResponsesFetchObjectAcl } from 'aws-cdk-sdk'

new S3ResponsesFetchObjectAcl(__scope: Construct, __resources: string[], __input: S3GetObjectAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectAcl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectAcl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectAcl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetObjectAclRequest`](#aws-cdk-sdk.S3GetObjectAclRequest)

---



#### Properties <a name="Properties"></a>

##### `grants`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectAcl.property.grants"></a>

- *Type:* [`aws-cdk-sdk.S3Grant`](#aws-cdk-sdk.S3Grant)[]

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectAcl.property.owner"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchObjectAclOwner`](#aws-cdk-sdk.S3ResponsesFetchObjectAclOwner)

---

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectAcl.property.requestCharged"></a>

- *Type:* `string`

---


### S3ResponsesFetchObjectAclOwner <a name="aws-cdk-sdk.S3ResponsesFetchObjectAclOwner"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchObjectAclOwner.Initializer"></a>

```typescript
import { S3ResponsesFetchObjectAclOwner } from 'aws-cdk-sdk'

new S3ResponsesFetchObjectAclOwner(__scope: Construct, __resources: string[], __input: S3GetObjectAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectAclOwner.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectAclOwner.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectAclOwner.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetObjectAclRequest`](#aws-cdk-sdk.S3GetObjectAclRequest)

---



#### Properties <a name="Properties"></a>

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectAclOwner.property.displayName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectAclOwner.property.id"></a>

- *Type:* `string`

---


### S3ResponsesFetchObjectLegalHold <a name="aws-cdk-sdk.S3ResponsesFetchObjectLegalHold"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchObjectLegalHold.Initializer"></a>

```typescript
import { S3ResponsesFetchObjectLegalHold } from 'aws-cdk-sdk'

new S3ResponsesFetchObjectLegalHold(__scope: Construct, __resources: string[], __input: S3GetObjectLegalHoldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectLegalHold.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectLegalHold.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectLegalHold.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetObjectLegalHoldRequest`](#aws-cdk-sdk.S3GetObjectLegalHoldRequest)

---



#### Properties <a name="Properties"></a>

##### `legalHold`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectLegalHold.property.legalHold"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchObjectLegalHoldLegalHold`](#aws-cdk-sdk.S3ResponsesFetchObjectLegalHoldLegalHold)

---


### S3ResponsesFetchObjectLegalHoldLegalHold <a name="aws-cdk-sdk.S3ResponsesFetchObjectLegalHoldLegalHold"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchObjectLegalHoldLegalHold.Initializer"></a>

```typescript
import { S3ResponsesFetchObjectLegalHoldLegalHold } from 'aws-cdk-sdk'

new S3ResponsesFetchObjectLegalHoldLegalHold(__scope: Construct, __resources: string[], __input: S3GetObjectLegalHoldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectLegalHoldLegalHold.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectLegalHoldLegalHold.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectLegalHoldLegalHold.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetObjectLegalHoldRequest`](#aws-cdk-sdk.S3GetObjectLegalHoldRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectLegalHoldLegalHold.property.status"></a>

- *Type:* `string`

---


### S3ResponsesFetchObjectLockConfiguration <a name="aws-cdk-sdk.S3ResponsesFetchObjectLockConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchObjectLockConfiguration.Initializer"></a>

```typescript
import { S3ResponsesFetchObjectLockConfiguration } from 'aws-cdk-sdk'

new S3ResponsesFetchObjectLockConfiguration(__scope: Construct, __resources: string[], __input: S3GetObjectLockConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectLockConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectLockConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectLockConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetObjectLockConfigurationRequest`](#aws-cdk-sdk.S3GetObjectLockConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `objectLockConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectLockConfiguration.property.objectLockConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchObjectLockConfigurationObjectLockConfiguration`](#aws-cdk-sdk.S3ResponsesFetchObjectLockConfigurationObjectLockConfiguration)

---


### S3ResponsesFetchObjectLockConfigurationObjectLockConfiguration <a name="aws-cdk-sdk.S3ResponsesFetchObjectLockConfigurationObjectLockConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchObjectLockConfigurationObjectLockConfiguration.Initializer"></a>

```typescript
import { S3ResponsesFetchObjectLockConfigurationObjectLockConfiguration } from 'aws-cdk-sdk'

new S3ResponsesFetchObjectLockConfigurationObjectLockConfiguration(__scope: Construct, __resources: string[], __input: S3GetObjectLockConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectLockConfigurationObjectLockConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectLockConfigurationObjectLockConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectLockConfigurationObjectLockConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetObjectLockConfigurationRequest`](#aws-cdk-sdk.S3GetObjectLockConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `objectLockEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectLockConfigurationObjectLockConfiguration.property.objectLockEnabled"></a>

- *Type:* `string`

---

##### `rule`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectLockConfigurationObjectLockConfiguration.property.rule"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRule`](#aws-cdk-sdk.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRule)

---


### S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRule <a name="aws-cdk-sdk.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRule"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRule.Initializer"></a>

```typescript
import { S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRule } from 'aws-cdk-sdk'

new S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRule(__scope: Construct, __resources: string[], __input: S3GetObjectLockConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetObjectLockConfigurationRequest`](#aws-cdk-sdk.S3GetObjectLockConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultRetention`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRule.property.defaultRetention"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention`](#aws-cdk-sdk.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention)

---


### S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention <a name="aws-cdk-sdk.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention.Initializer"></a>

```typescript
import { S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention } from 'aws-cdk-sdk'

new S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention(__scope: Construct, __resources: string[], __input: S3GetObjectLockConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetObjectLockConfigurationRequest`](#aws-cdk-sdk.S3GetObjectLockConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `days`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention.property.days"></a>

- *Type:* `number`

---

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention.property.mode"></a>

- *Type:* `string`

---

##### `years`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention.property.years"></a>

- *Type:* `number`

---


### S3ResponsesFetchObjectRetention <a name="aws-cdk-sdk.S3ResponsesFetchObjectRetention"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchObjectRetention.Initializer"></a>

```typescript
import { S3ResponsesFetchObjectRetention } from 'aws-cdk-sdk'

new S3ResponsesFetchObjectRetention(__scope: Construct, __resources: string[], __input: S3GetObjectRetentionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectRetention.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectRetention.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectRetention.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetObjectRetentionRequest`](#aws-cdk-sdk.S3GetObjectRetentionRequest)

---



#### Properties <a name="Properties"></a>

##### `retention`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectRetention.property.retention"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchObjectRetentionRetention`](#aws-cdk-sdk.S3ResponsesFetchObjectRetentionRetention)

---


### S3ResponsesFetchObjectRetentionRetention <a name="aws-cdk-sdk.S3ResponsesFetchObjectRetentionRetention"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchObjectRetentionRetention.Initializer"></a>

```typescript
import { S3ResponsesFetchObjectRetentionRetention } from 'aws-cdk-sdk'

new S3ResponsesFetchObjectRetentionRetention(__scope: Construct, __resources: string[], __input: S3GetObjectRetentionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectRetentionRetention.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectRetentionRetention.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectRetentionRetention.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetObjectRetentionRequest`](#aws-cdk-sdk.S3GetObjectRetentionRequest)

---



#### Properties <a name="Properties"></a>

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectRetentionRetention.property.mode"></a>

- *Type:* `string`

---

##### `retainUntilDate`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectRetentionRetention.property.retainUntilDate"></a>

- *Type:* `string`

---


### S3ResponsesFetchObjectTagging <a name="aws-cdk-sdk.S3ResponsesFetchObjectTagging"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchObjectTagging.Initializer"></a>

```typescript
import { S3ResponsesFetchObjectTagging } from 'aws-cdk-sdk'

new S3ResponsesFetchObjectTagging(__scope: Construct, __resources: string[], __input: S3GetObjectTaggingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectTagging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectTagging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectTagging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetObjectTaggingRequest`](#aws-cdk-sdk.S3GetObjectTaggingRequest)

---



#### Properties <a name="Properties"></a>

##### `tagSet`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectTagging.property.tagSet"></a>

- *Type:* [`aws-cdk-sdk.S3Tag`](#aws-cdk-sdk.S3Tag)[]

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectTagging.property.versionId"></a>

- *Type:* `string`

---


### S3ResponsesFetchObjectTorrent <a name="aws-cdk-sdk.S3ResponsesFetchObjectTorrent"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchObjectTorrent.Initializer"></a>

```typescript
import { S3ResponsesFetchObjectTorrent } from 'aws-cdk-sdk'

new S3ResponsesFetchObjectTorrent(__scope: Construct, __resources: string[], __input: S3GetObjectTorrentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectTorrent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectTorrent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectTorrent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetObjectTorrentRequest`](#aws-cdk-sdk.S3GetObjectTorrentRequest)

---



#### Properties <a name="Properties"></a>

##### `body`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectTorrent.property.body"></a>

- *Type:* `any`

---

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchObjectTorrent.property.requestCharged"></a>

- *Type:* `string`

---


### S3ResponsesFetchPublicAccessBlock <a name="aws-cdk-sdk.S3ResponsesFetchPublicAccessBlock"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchPublicAccessBlock.Initializer"></a>

```typescript
import { S3ResponsesFetchPublicAccessBlock } from 'aws-cdk-sdk'

new S3ResponsesFetchPublicAccessBlock(__scope: Construct, __resources: string[], __input: S3GetPublicAccessBlockRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchPublicAccessBlock.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchPublicAccessBlock.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchPublicAccessBlock.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetPublicAccessBlockRequest`](#aws-cdk-sdk.S3GetPublicAccessBlockRequest)

---



#### Properties <a name="Properties"></a>

##### `publicAccessBlockConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchPublicAccessBlock.property.publicAccessBlockConfiguration"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration`](#aws-cdk-sdk.S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration)

---


### S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration <a name="aws-cdk-sdk.S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration.Initializer"></a>

```typescript
import { S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration } from 'aws-cdk-sdk'

new S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration(__scope: Construct, __resources: string[], __input: S3GetPublicAccessBlockRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3GetPublicAccessBlockRequest`](#aws-cdk-sdk.S3GetPublicAccessBlockRequest)

---



#### Properties <a name="Properties"></a>

##### `blockPublicAcls`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration.property.blockPublicAcls"></a>

- *Type:* `boolean`

---

##### `blockPublicPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration.property.blockPublicPolicy"></a>

- *Type:* `boolean`

---

##### `ignorePublicAcls`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration.property.ignorePublicAcls"></a>

- *Type:* `boolean`

---

##### `restrictPublicBuckets`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration.property.restrictPublicBuckets"></a>

- *Type:* `boolean`

---


### S3ResponsesHeadObject <a name="aws-cdk-sdk.S3ResponsesHeadObject"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesHeadObject.Initializer"></a>

```typescript
import { S3ResponsesHeadObject } from 'aws-cdk-sdk'

new S3ResponsesHeadObject(__scope: Construct, __resources: string[], __input: S3HeadObjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3HeadObjectRequest`](#aws-cdk-sdk.S3HeadObjectRequest)

---



#### Properties <a name="Properties"></a>

##### `acceptRanges`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.acceptRanges"></a>

- *Type:* `string`

---

##### `archiveStatus`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.archiveStatus"></a>

- *Type:* `string`

---

##### `cacheControl`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.cacheControl"></a>

- *Type:* `string`

---

##### `contentDisposition`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.contentDisposition"></a>

- *Type:* `string`

---

##### `contentEncoding`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.contentEncoding"></a>

- *Type:* `string`

---

##### `contentLanguage`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.contentLanguage"></a>

- *Type:* `string`

---

##### `contentLength`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.contentLength"></a>

- *Type:* `number`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.contentType"></a>

- *Type:* `string`

---

##### `deleteMarker`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.deleteMarker"></a>

- *Type:* `boolean`

---

##### `eTag`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.eTag"></a>

- *Type:* `string`

---

##### `expiration`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.expiration"></a>

- *Type:* `string`

---

##### `expires`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.expires"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.lastModified"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.metadata"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `missingMeta`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.missingMeta"></a>

- *Type:* `number`

---

##### `objectLockLegalHoldStatus`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.objectLockLegalHoldStatus"></a>

- *Type:* `string`

---

##### `objectLockMode`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.objectLockMode"></a>

- *Type:* `string`

---

##### `objectLockRetainUntilDate`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.objectLockRetainUntilDate"></a>

- *Type:* `string`

---

##### `partsCount`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.partsCount"></a>

- *Type:* `number`

---

##### `replicationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.replicationStatus"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.requestCharged"></a>

- *Type:* `string`

---

##### `restore`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.restore"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.storageClass"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.versionId"></a>

- *Type:* `string`

---

##### `websiteRedirectLocation`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesHeadObject.property.websiteRedirectLocation"></a>

- *Type:* `string`

---


### S3ResponsesListBucketAnalyticsConfigurations <a name="aws-cdk-sdk.S3ResponsesListBucketAnalyticsConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesListBucketAnalyticsConfigurations.Initializer"></a>

```typescript
import { S3ResponsesListBucketAnalyticsConfigurations } from 'aws-cdk-sdk'

new S3ResponsesListBucketAnalyticsConfigurations(__scope: Construct, __resources: string[], __input: S3ListBucketAnalyticsConfigurationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketAnalyticsConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketAnalyticsConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketAnalyticsConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3ListBucketAnalyticsConfigurationsRequest`](#aws-cdk-sdk.S3ListBucketAnalyticsConfigurationsRequest)

---



#### Properties <a name="Properties"></a>

##### `analyticsConfigurationList`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketAnalyticsConfigurations.property.analyticsConfigurationList"></a>

- *Type:* [`aws-cdk-sdk.S3AnalyticsConfiguration`](#aws-cdk-sdk.S3AnalyticsConfiguration)[]

---

##### `continuationToken`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketAnalyticsConfigurations.property.continuationToken"></a>

- *Type:* `string`

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketAnalyticsConfigurations.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `nextContinuationToken`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketAnalyticsConfigurations.property.nextContinuationToken"></a>

- *Type:* `string`

---


### S3ResponsesListBucketIntelligentTieringConfigurations <a name="aws-cdk-sdk.S3ResponsesListBucketIntelligentTieringConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesListBucketIntelligentTieringConfigurations.Initializer"></a>

```typescript
import { S3ResponsesListBucketIntelligentTieringConfigurations } from 'aws-cdk-sdk'

new S3ResponsesListBucketIntelligentTieringConfigurations(__scope: Construct, __resources: string[], __input: S3ListBucketIntelligentTieringConfigurationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketIntelligentTieringConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketIntelligentTieringConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketIntelligentTieringConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3ListBucketIntelligentTieringConfigurationsRequest`](#aws-cdk-sdk.S3ListBucketIntelligentTieringConfigurationsRequest)

---



#### Properties <a name="Properties"></a>

##### `continuationToken`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketIntelligentTieringConfigurations.property.continuationToken"></a>

- *Type:* `string`

---

##### `intelligentTieringConfigurationList`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketIntelligentTieringConfigurations.property.intelligentTieringConfigurationList"></a>

- *Type:* [`aws-cdk-sdk.S3IntelligentTieringConfiguration`](#aws-cdk-sdk.S3IntelligentTieringConfiguration)[]

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketIntelligentTieringConfigurations.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `nextContinuationToken`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketIntelligentTieringConfigurations.property.nextContinuationToken"></a>

- *Type:* `string`

---


### S3ResponsesListBucketInventoryConfigurations <a name="aws-cdk-sdk.S3ResponsesListBucketInventoryConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesListBucketInventoryConfigurations.Initializer"></a>

```typescript
import { S3ResponsesListBucketInventoryConfigurations } from 'aws-cdk-sdk'

new S3ResponsesListBucketInventoryConfigurations(__scope: Construct, __resources: string[], __input: S3ListBucketInventoryConfigurationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketInventoryConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketInventoryConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketInventoryConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3ListBucketInventoryConfigurationsRequest`](#aws-cdk-sdk.S3ListBucketInventoryConfigurationsRequest)

---



#### Properties <a name="Properties"></a>

##### `continuationToken`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketInventoryConfigurations.property.continuationToken"></a>

- *Type:* `string`

---

##### `inventoryConfigurationList`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketInventoryConfigurations.property.inventoryConfigurationList"></a>

- *Type:* [`aws-cdk-sdk.S3InventoryConfiguration`](#aws-cdk-sdk.S3InventoryConfiguration)[]

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketInventoryConfigurations.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `nextContinuationToken`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketInventoryConfigurations.property.nextContinuationToken"></a>

- *Type:* `string`

---


### S3ResponsesListBucketMetricsConfigurations <a name="aws-cdk-sdk.S3ResponsesListBucketMetricsConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesListBucketMetricsConfigurations.Initializer"></a>

```typescript
import { S3ResponsesListBucketMetricsConfigurations } from 'aws-cdk-sdk'

new S3ResponsesListBucketMetricsConfigurations(__scope: Construct, __resources: string[], __input: S3ListBucketMetricsConfigurationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketMetricsConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketMetricsConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketMetricsConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3ListBucketMetricsConfigurationsRequest`](#aws-cdk-sdk.S3ListBucketMetricsConfigurationsRequest)

---



#### Properties <a name="Properties"></a>

##### `continuationToken`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketMetricsConfigurations.property.continuationToken"></a>

- *Type:* `string`

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketMetricsConfigurations.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `metricsConfigurationList`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketMetricsConfigurations.property.metricsConfigurationList"></a>

- *Type:* [`aws-cdk-sdk.S3MetricsConfiguration`](#aws-cdk-sdk.S3MetricsConfiguration)[]

---

##### `nextContinuationToken`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketMetricsConfigurations.property.nextContinuationToken"></a>

- *Type:* `string`

---


### S3ResponsesListBuckets <a name="aws-cdk-sdk.S3ResponsesListBuckets"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesListBuckets.Initializer"></a>

```typescript
import { S3ResponsesListBuckets } from 'aws-cdk-sdk'

new S3ResponsesListBuckets(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBuckets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBuckets.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `buckets`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBuckets.property.buckets"></a>

- *Type:* [`aws-cdk-sdk.S3Bucket`](#aws-cdk-sdk.S3Bucket)[]

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBuckets.property.owner"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesListBucketsOwner`](#aws-cdk-sdk.S3ResponsesListBucketsOwner)

---


### S3ResponsesListBucketsOwner <a name="aws-cdk-sdk.S3ResponsesListBucketsOwner"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesListBucketsOwner.Initializer"></a>

```typescript
import { S3ResponsesListBucketsOwner } from 'aws-cdk-sdk'

new S3ResponsesListBucketsOwner(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketsOwner.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketsOwner.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketsOwner.property.displayName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListBucketsOwner.property.id"></a>

- *Type:* `string`

---


### S3ResponsesListMultipartUploads <a name="aws-cdk-sdk.S3ResponsesListMultipartUploads"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesListMultipartUploads.Initializer"></a>

```typescript
import { S3ResponsesListMultipartUploads } from 'aws-cdk-sdk'

new S3ResponsesListMultipartUploads(__scope: Construct, __resources: string[], __input: S3ListMultipartUploadsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListMultipartUploads.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListMultipartUploads.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListMultipartUploads.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3ListMultipartUploadsRequest`](#aws-cdk-sdk.S3ListMultipartUploadsRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListMultipartUploads.property.bucket"></a>

- *Type:* `string`

---

##### `commonPrefixes`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListMultipartUploads.property.commonPrefixes"></a>

- *Type:* [`aws-cdk-sdk.S3CommonPrefix`](#aws-cdk-sdk.S3CommonPrefix)[]

---

##### `delimiter`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListMultipartUploads.property.delimiter"></a>

- *Type:* `string`

---

##### `encodingType`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListMultipartUploads.property.encodingType"></a>

- *Type:* `string`

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListMultipartUploads.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `keyMarker`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListMultipartUploads.property.keyMarker"></a>

- *Type:* `string`

---

##### `maxUploads`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListMultipartUploads.property.maxUploads"></a>

- *Type:* `number`

---

##### `nextKeyMarker`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListMultipartUploads.property.nextKeyMarker"></a>

- *Type:* `string`

---

##### `nextUploadIdMarker`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListMultipartUploads.property.nextUploadIdMarker"></a>

- *Type:* `string`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListMultipartUploads.property.prefix"></a>

- *Type:* `string`

---

##### `uploadIdMarker`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListMultipartUploads.property.uploadIdMarker"></a>

- *Type:* `string`

---

##### `uploads`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListMultipartUploads.property.uploads"></a>

- *Type:* [`aws-cdk-sdk.S3MultipartUpload`](#aws-cdk-sdk.S3MultipartUpload)[]

---


### S3ResponsesListObjects <a name="aws-cdk-sdk.S3ResponsesListObjects"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesListObjects.Initializer"></a>

```typescript
import { S3ResponsesListObjects } from 'aws-cdk-sdk'

new S3ResponsesListObjects(__scope: Construct, __resources: string[], __input: S3ListObjectsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjects.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjects.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjects.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3ListObjectsRequest`](#aws-cdk-sdk.S3ListObjectsRequest)

---



#### Properties <a name="Properties"></a>

##### `commonPrefixes`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjects.property.commonPrefixes"></a>

- *Type:* [`aws-cdk-sdk.S3CommonPrefix`](#aws-cdk-sdk.S3CommonPrefix)[]

---

##### `contents`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjects.property.contents"></a>

- *Type:* [`aws-cdk-sdk.S3Object`](#aws-cdk-sdk.S3Object)[]

---

##### `delimiter`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjects.property.delimiter"></a>

- *Type:* `string`

---

##### `encodingType`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjects.property.encodingType"></a>

- *Type:* `string`

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjects.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjects.property.marker"></a>

- *Type:* `string`

---

##### `maxKeys`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjects.property.maxKeys"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjects.property.name"></a>

- *Type:* `string`

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjects.property.nextMarker"></a>

- *Type:* `string`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjects.property.prefix"></a>

- *Type:* `string`

---


### S3ResponsesListObjectsV2 <a name="aws-cdk-sdk.S3ResponsesListObjectsV2"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesListObjectsV2.Initializer"></a>

```typescript
import { S3ResponsesListObjectsV2 } from 'aws-cdk-sdk'

new S3ResponsesListObjectsV2(__scope: Construct, __resources: string[], __input: S3ListObjectsV2Request)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectsV2.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectsV2.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectsV2.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3ListObjectsV2Request`](#aws-cdk-sdk.S3ListObjectsV2Request)

---



#### Properties <a name="Properties"></a>

##### `commonPrefixes`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectsV2.property.commonPrefixes"></a>

- *Type:* [`aws-cdk-sdk.S3CommonPrefix`](#aws-cdk-sdk.S3CommonPrefix)[]

---

##### `contents`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectsV2.property.contents"></a>

- *Type:* [`aws-cdk-sdk.S3Object`](#aws-cdk-sdk.S3Object)[]

---

##### `continuationToken`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectsV2.property.continuationToken"></a>

- *Type:* `string`

---

##### `delimiter`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectsV2.property.delimiter"></a>

- *Type:* `string`

---

##### `encodingType`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectsV2.property.encodingType"></a>

- *Type:* `string`

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectsV2.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `keyCount`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectsV2.property.keyCount"></a>

- *Type:* `number`

---

##### `maxKeys`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectsV2.property.maxKeys"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectsV2.property.name"></a>

- *Type:* `string`

---

##### `nextContinuationToken`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectsV2.property.nextContinuationToken"></a>

- *Type:* `string`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectsV2.property.prefix"></a>

- *Type:* `string`

---

##### `startAfter`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectsV2.property.startAfter"></a>

- *Type:* `string`

---


### S3ResponsesListObjectVersions <a name="aws-cdk-sdk.S3ResponsesListObjectVersions"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesListObjectVersions.Initializer"></a>

```typescript
import { S3ResponsesListObjectVersions } from 'aws-cdk-sdk'

new S3ResponsesListObjectVersions(__scope: Construct, __resources: string[], __input: S3ListObjectVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3ListObjectVersionsRequest`](#aws-cdk-sdk.S3ListObjectVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `commonPrefixes`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectVersions.property.commonPrefixes"></a>

- *Type:* [`aws-cdk-sdk.S3CommonPrefix`](#aws-cdk-sdk.S3CommonPrefix)[]

---

##### `deleteMarkers`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectVersions.property.deleteMarkers"></a>

- *Type:* [`aws-cdk-sdk.S3DeleteMarkerEntry`](#aws-cdk-sdk.S3DeleteMarkerEntry)[]

---

##### `delimiter`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectVersions.property.delimiter"></a>

- *Type:* `string`

---

##### `encodingType`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectVersions.property.encodingType"></a>

- *Type:* `string`

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectVersions.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `keyMarker`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectVersions.property.keyMarker"></a>

- *Type:* `string`

---

##### `maxKeys`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectVersions.property.maxKeys"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectVersions.property.name"></a>

- *Type:* `string`

---

##### `nextKeyMarker`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectVersions.property.nextKeyMarker"></a>

- *Type:* `string`

---

##### `nextVersionIdMarker`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectVersions.property.nextVersionIdMarker"></a>

- *Type:* `string`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectVersions.property.prefix"></a>

- *Type:* `string`

---

##### `versionIdMarker`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectVersions.property.versionIdMarker"></a>

- *Type:* `string`

---

##### `versions`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListObjectVersions.property.versions"></a>

- *Type:* [`aws-cdk-sdk.S3ObjectVersion`](#aws-cdk-sdk.S3ObjectVersion)[]

---


### S3ResponsesListParts <a name="aws-cdk-sdk.S3ResponsesListParts"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesListParts.Initializer"></a>

```typescript
import { S3ResponsesListParts } from 'aws-cdk-sdk'

new S3ResponsesListParts(__scope: Construct, __resources: string[], __input: S3ListPartsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListParts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListParts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListParts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3ListPartsRequest`](#aws-cdk-sdk.S3ListPartsRequest)

---



#### Properties <a name="Properties"></a>

##### `abortDate`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListParts.property.abortDate"></a>

- *Type:* `string`

---

##### `abortRuleId`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListParts.property.abortRuleId"></a>

- *Type:* `string`

---

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListParts.property.bucket"></a>

- *Type:* `string`

---

##### `initiator`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListParts.property.initiator"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesListPartsInitiator`](#aws-cdk-sdk.S3ResponsesListPartsInitiator)

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListParts.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListParts.property.key"></a>

- *Type:* `string`

---

##### `maxParts`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListParts.property.maxParts"></a>

- *Type:* `number`

---

##### `nextPartNumberMarker`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListParts.property.nextPartNumberMarker"></a>

- *Type:* `number`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListParts.property.owner"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesListPartsOwner`](#aws-cdk-sdk.S3ResponsesListPartsOwner)

---

##### `partNumberMarker`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListParts.property.partNumberMarker"></a>

- *Type:* `number`

---

##### `parts`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListParts.property.parts"></a>

- *Type:* [`aws-cdk-sdk.S3Part`](#aws-cdk-sdk.S3Part)[]

---

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListParts.property.requestCharged"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListParts.property.storageClass"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListParts.property.uploadId"></a>

- *Type:* `string`

---


### S3ResponsesListPartsInitiator <a name="aws-cdk-sdk.S3ResponsesListPartsInitiator"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesListPartsInitiator.Initializer"></a>

```typescript
import { S3ResponsesListPartsInitiator } from 'aws-cdk-sdk'

new S3ResponsesListPartsInitiator(__scope: Construct, __resources: string[], __input: S3ListPartsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListPartsInitiator.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListPartsInitiator.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListPartsInitiator.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3ListPartsRequest`](#aws-cdk-sdk.S3ListPartsRequest)

---



#### Properties <a name="Properties"></a>

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListPartsInitiator.property.displayName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListPartsInitiator.property.id"></a>

- *Type:* `string`

---


### S3ResponsesListPartsOwner <a name="aws-cdk-sdk.S3ResponsesListPartsOwner"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesListPartsOwner.Initializer"></a>

```typescript
import { S3ResponsesListPartsOwner } from 'aws-cdk-sdk'

new S3ResponsesListPartsOwner(__scope: Construct, __resources: string[], __input: S3ListPartsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListPartsOwner.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListPartsOwner.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListPartsOwner.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3ListPartsRequest`](#aws-cdk-sdk.S3ListPartsRequest)

---



#### Properties <a name="Properties"></a>

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListPartsOwner.property.displayName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesListPartsOwner.property.id"></a>

- *Type:* `string`

---


### S3ResponsesPutObject <a name="aws-cdk-sdk.S3ResponsesPutObject"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesPutObject.Initializer"></a>

```typescript
import { S3ResponsesPutObject } from 'aws-cdk-sdk'

new S3ResponsesPutObject(__scope: Construct, __resources: string[], __input: S3PutObjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3PutObjectRequest`](#aws-cdk-sdk.S3PutObjectRequest)

---



#### Properties <a name="Properties"></a>

##### `eTag`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObject.property.eTag"></a>

- *Type:* `string`

---

##### `expiration`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObject.property.expiration"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObject.property.requestCharged"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObject.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObject.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObject.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsEncryptionContext`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObject.property.ssekmsEncryptionContext"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObject.property.ssekmsKeyId"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObject.property.versionId"></a>

- *Type:* `string`

---


### S3ResponsesPutObjectAcl <a name="aws-cdk-sdk.S3ResponsesPutObjectAcl"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesPutObjectAcl.Initializer"></a>

```typescript
import { S3ResponsesPutObjectAcl } from 'aws-cdk-sdk'

new S3ResponsesPutObjectAcl(__scope: Construct, __resources: string[], __input: S3PutObjectAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObjectAcl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObjectAcl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObjectAcl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3PutObjectAclRequest`](#aws-cdk-sdk.S3PutObjectAclRequest)

---



#### Properties <a name="Properties"></a>

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObjectAcl.property.requestCharged"></a>

- *Type:* `string`

---


### S3ResponsesPutObjectLegalHold <a name="aws-cdk-sdk.S3ResponsesPutObjectLegalHold"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesPutObjectLegalHold.Initializer"></a>

```typescript
import { S3ResponsesPutObjectLegalHold } from 'aws-cdk-sdk'

new S3ResponsesPutObjectLegalHold(__scope: Construct, __resources: string[], __input: S3PutObjectLegalHoldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObjectLegalHold.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObjectLegalHold.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObjectLegalHold.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3PutObjectLegalHoldRequest`](#aws-cdk-sdk.S3PutObjectLegalHoldRequest)

---



#### Properties <a name="Properties"></a>

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObjectLegalHold.property.requestCharged"></a>

- *Type:* `string`

---


### S3ResponsesPutObjectLockConfiguration <a name="aws-cdk-sdk.S3ResponsesPutObjectLockConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesPutObjectLockConfiguration.Initializer"></a>

```typescript
import { S3ResponsesPutObjectLockConfiguration } from 'aws-cdk-sdk'

new S3ResponsesPutObjectLockConfiguration(__scope: Construct, __resources: string[], __input: S3PutObjectLockConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObjectLockConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObjectLockConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObjectLockConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3PutObjectLockConfigurationRequest`](#aws-cdk-sdk.S3PutObjectLockConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObjectLockConfiguration.property.requestCharged"></a>

- *Type:* `string`

---


### S3ResponsesPutObjectRetention <a name="aws-cdk-sdk.S3ResponsesPutObjectRetention"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesPutObjectRetention.Initializer"></a>

```typescript
import { S3ResponsesPutObjectRetention } from 'aws-cdk-sdk'

new S3ResponsesPutObjectRetention(__scope: Construct, __resources: string[], __input: S3PutObjectRetentionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObjectRetention.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObjectRetention.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObjectRetention.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3PutObjectRetentionRequest`](#aws-cdk-sdk.S3PutObjectRetentionRequest)

---



#### Properties <a name="Properties"></a>

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObjectRetention.property.requestCharged"></a>

- *Type:* `string`

---


### S3ResponsesPutObjectTagging <a name="aws-cdk-sdk.S3ResponsesPutObjectTagging"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesPutObjectTagging.Initializer"></a>

```typescript
import { S3ResponsesPutObjectTagging } from 'aws-cdk-sdk'

new S3ResponsesPutObjectTagging(__scope: Construct, __resources: string[], __input: S3PutObjectTaggingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObjectTagging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObjectTagging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObjectTagging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3PutObjectTaggingRequest`](#aws-cdk-sdk.S3PutObjectTaggingRequest)

---



#### Properties <a name="Properties"></a>

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesPutObjectTagging.property.versionId"></a>

- *Type:* `string`

---


### S3ResponsesRestoreObject <a name="aws-cdk-sdk.S3ResponsesRestoreObject"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesRestoreObject.Initializer"></a>

```typescript
import { S3ResponsesRestoreObject } from 'aws-cdk-sdk'

new S3ResponsesRestoreObject(__scope: Construct, __resources: string[], __input: S3RestoreObjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesRestoreObject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesRestoreObject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesRestoreObject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3RestoreObjectRequest`](#aws-cdk-sdk.S3RestoreObjectRequest)

---



#### Properties <a name="Properties"></a>

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesRestoreObject.property.requestCharged"></a>

- *Type:* `string`

---

##### `restoreOutputPath`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesRestoreObject.property.restoreOutputPath"></a>

- *Type:* `string`

---


### S3ResponsesSelectObjectContent <a name="aws-cdk-sdk.S3ResponsesSelectObjectContent"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesSelectObjectContent.Initializer"></a>

```typescript
import { S3ResponsesSelectObjectContent } from 'aws-cdk-sdk'

new S3ResponsesSelectObjectContent(__scope: Construct, __resources: string[], __input: S3SelectObjectContentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3SelectObjectContentRequest`](#aws-cdk-sdk.S3SelectObjectContentRequest)

---



#### Properties <a name="Properties"></a>

##### `payload`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContent.property.payload"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesSelectObjectContentPayload`](#aws-cdk-sdk.S3ResponsesSelectObjectContentPayload)

---


### S3ResponsesSelectObjectContentPayload <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayload"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayload.Initializer"></a>

```typescript
import { S3ResponsesSelectObjectContentPayload } from 'aws-cdk-sdk'

new S3ResponsesSelectObjectContentPayload(__scope: Construct, __resources: string[], __input: S3SelectObjectContentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayload.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayload.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayload.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3SelectObjectContentRequest`](#aws-cdk-sdk.S3SelectObjectContentRequest)

---



#### Properties <a name="Properties"></a>

##### `cont`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayload.property.cont"></a>

- *Type:* `any`

---

##### `end`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayload.property.end"></a>

- *Type:* `any`

---

##### `progress`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayload.property.progress"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadProgress`](#aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadProgress)

---

##### `records`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayload.property.records"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadRecords`](#aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadRecords)

---

##### `stats`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayload.property.stats"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadStats`](#aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadStats)

---


### S3ResponsesSelectObjectContentPayloadProgress <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadProgress"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadProgress.Initializer"></a>

```typescript
import { S3ResponsesSelectObjectContentPayloadProgress } from 'aws-cdk-sdk'

new S3ResponsesSelectObjectContentPayloadProgress(__scope: Construct, __resources: string[], __input: S3SelectObjectContentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadProgress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadProgress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadProgress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3SelectObjectContentRequest`](#aws-cdk-sdk.S3SelectObjectContentRequest)

---



#### Properties <a name="Properties"></a>

##### `details`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadProgress.property.details"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadProgressDetails`](#aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadProgressDetails)

---


### S3ResponsesSelectObjectContentPayloadProgressDetails <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadProgressDetails"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadProgressDetails.Initializer"></a>

```typescript
import { S3ResponsesSelectObjectContentPayloadProgressDetails } from 'aws-cdk-sdk'

new S3ResponsesSelectObjectContentPayloadProgressDetails(__scope: Construct, __resources: string[], __input: S3SelectObjectContentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadProgressDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadProgressDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadProgressDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3SelectObjectContentRequest`](#aws-cdk-sdk.S3SelectObjectContentRequest)

---



#### Properties <a name="Properties"></a>

##### `bytesProcessed`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadProgressDetails.property.bytesProcessed"></a>

- *Type:* `number`

---

##### `bytesReturned`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadProgressDetails.property.bytesReturned"></a>

- *Type:* `number`

---

##### `bytesScanned`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadProgressDetails.property.bytesScanned"></a>

- *Type:* `number`

---


### S3ResponsesSelectObjectContentPayloadRecords <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadRecords"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadRecords.Initializer"></a>

```typescript
import { S3ResponsesSelectObjectContentPayloadRecords } from 'aws-cdk-sdk'

new S3ResponsesSelectObjectContentPayloadRecords(__scope: Construct, __resources: string[], __input: S3SelectObjectContentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadRecords.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadRecords.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadRecords.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3SelectObjectContentRequest`](#aws-cdk-sdk.S3SelectObjectContentRequest)

---



#### Properties <a name="Properties"></a>

##### `payload`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadRecords.property.payload"></a>

- *Type:* `any`

---


### S3ResponsesSelectObjectContentPayloadStats <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadStats"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadStats.Initializer"></a>

```typescript
import { S3ResponsesSelectObjectContentPayloadStats } from 'aws-cdk-sdk'

new S3ResponsesSelectObjectContentPayloadStats(__scope: Construct, __resources: string[], __input: S3SelectObjectContentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadStats.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadStats.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadStats.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3SelectObjectContentRequest`](#aws-cdk-sdk.S3SelectObjectContentRequest)

---



#### Properties <a name="Properties"></a>

##### `details`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadStats.property.details"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadStatsDetails`](#aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadStatsDetails)

---


### S3ResponsesSelectObjectContentPayloadStatsDetails <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadStatsDetails"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadStatsDetails.Initializer"></a>

```typescript
import { S3ResponsesSelectObjectContentPayloadStatsDetails } from 'aws-cdk-sdk'

new S3ResponsesSelectObjectContentPayloadStatsDetails(__scope: Construct, __resources: string[], __input: S3SelectObjectContentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadStatsDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadStatsDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadStatsDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3SelectObjectContentRequest`](#aws-cdk-sdk.S3SelectObjectContentRequest)

---



#### Properties <a name="Properties"></a>

##### `bytesProcessed`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadStatsDetails.property.bytesProcessed"></a>

- *Type:* `number`

---

##### `bytesReturned`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadStatsDetails.property.bytesReturned"></a>

- *Type:* `number`

---

##### `bytesScanned`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesSelectObjectContentPayloadStatsDetails.property.bytesScanned"></a>

- *Type:* `number`

---


### S3ResponsesUploadPart <a name="aws-cdk-sdk.S3ResponsesUploadPart"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesUploadPart.Initializer"></a>

```typescript
import { S3ResponsesUploadPart } from 'aws-cdk-sdk'

new S3ResponsesUploadPart(__scope: Construct, __resources: string[], __input: S3UploadPartRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesUploadPart.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesUploadPart.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesUploadPart.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3UploadPartRequest`](#aws-cdk-sdk.S3UploadPartRequest)

---



#### Properties <a name="Properties"></a>

##### `eTag`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesUploadPart.property.eTag"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesUploadPart.property.requestCharged"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesUploadPart.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesUploadPart.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesUploadPart.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesUploadPart.property.ssekmsKeyId"></a>

- *Type:* `string`

---


### S3ResponsesUploadPartCopy <a name="aws-cdk-sdk.S3ResponsesUploadPartCopy"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesUploadPartCopy.Initializer"></a>

```typescript
import { S3ResponsesUploadPartCopy } from 'aws-cdk-sdk'

new S3ResponsesUploadPartCopy(__scope: Construct, __resources: string[], __input: S3UploadPartCopyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesUploadPartCopy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesUploadPartCopy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesUploadPartCopy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3UploadPartCopyRequest`](#aws-cdk-sdk.S3UploadPartCopyRequest)

---



#### Properties <a name="Properties"></a>

##### `copyPartResult`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesUploadPartCopy.property.copyPartResult"></a>

- *Type:* [`aws-cdk-sdk.S3ResponsesUploadPartCopyCopyPartResult`](#aws-cdk-sdk.S3ResponsesUploadPartCopyCopyPartResult)

---

##### `copySourceVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesUploadPartCopy.property.copySourceVersionId"></a>

- *Type:* `string`

---

##### `requestCharged`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesUploadPartCopy.property.requestCharged"></a>

- *Type:* `string`

---

##### `serverSideEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesUploadPartCopy.property.serverSideEncryption"></a>

- *Type:* `string`

---

##### `sseCustomerAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesUploadPartCopy.property.sseCustomerAlgorithm"></a>

- *Type:* `string`

---

##### `sseCustomerKeyMd5`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesUploadPartCopy.property.sseCustomerKeyMd5"></a>

- *Type:* `string`

---

##### `ssekmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesUploadPartCopy.property.ssekmsKeyId"></a>

- *Type:* `string`

---


### S3ResponsesUploadPartCopyCopyPartResult <a name="aws-cdk-sdk.S3ResponsesUploadPartCopyCopyPartResult"></a>

#### Initializer <a name="aws-cdk-sdk.S3ResponsesUploadPartCopyCopyPartResult.Initializer"></a>

```typescript
import { S3ResponsesUploadPartCopyCopyPartResult } from 'aws-cdk-sdk'

new S3ResponsesUploadPartCopyCopyPartResult(__scope: Construct, __resources: string[], __input: S3UploadPartCopyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesUploadPartCopyCopyPartResult.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesUploadPartCopyCopyPartResult.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesUploadPartCopyCopyPartResult.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.S3UploadPartCopyRequest`](#aws-cdk-sdk.S3UploadPartCopyRequest)

---



#### Properties <a name="Properties"></a>

##### `eTag`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesUploadPartCopyCopyPartResult.property.eTag"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.S3ResponsesUploadPartCopyCopyPartResult.property.lastModified"></a>

- *Type:* `string`

---



