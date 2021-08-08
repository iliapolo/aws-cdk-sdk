# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### S3ControlClient <a name="aws-cdk-sdk.s3control.S3ControlClient"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlClient.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createAccessPoint` <a name="aws-cdk-sdk.s3control.S3ControlClient.createAccessPoint"></a>

```typescript
public createAccessPoint(input: S3ControlCreateAccessPointRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlCreateAccessPointRequest`](#aws-cdk-sdk.s3control.S3ControlCreateAccessPointRequest)

---

##### `createBucket` <a name="aws-cdk-sdk.s3control.S3ControlClient.createBucket"></a>

```typescript
public createBucket(input: S3ControlCreateBucketRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlCreateBucketRequest`](#aws-cdk-sdk.s3control.S3ControlCreateBucketRequest)

---

##### `createJob` <a name="aws-cdk-sdk.s3control.S3ControlClient.createJob"></a>

```typescript
public createJob(input: S3ControlCreateJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlCreateJobRequest`](#aws-cdk-sdk.s3control.S3ControlCreateJobRequest)

---

##### `deleteAccessPoint` <a name="aws-cdk-sdk.s3control.S3ControlClient.deleteAccessPoint"></a>

```typescript
public deleteAccessPoint(input: S3ControlDeleteAccessPointRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDeleteAccessPointRequest`](#aws-cdk-sdk.s3control.S3ControlDeleteAccessPointRequest)

---

##### `deleteAccessPointPolicy` <a name="aws-cdk-sdk.s3control.S3ControlClient.deleteAccessPointPolicy"></a>

```typescript
public deleteAccessPointPolicy(input: S3ControlDeleteAccessPointPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDeleteAccessPointPolicyRequest`](#aws-cdk-sdk.s3control.S3ControlDeleteAccessPointPolicyRequest)

---

##### `deleteBucket` <a name="aws-cdk-sdk.s3control.S3ControlClient.deleteBucket"></a>

```typescript
public deleteBucket(input: S3ControlDeleteBucketRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDeleteBucketRequest`](#aws-cdk-sdk.s3control.S3ControlDeleteBucketRequest)

---

##### `deleteBucketLifecycleConfiguration` <a name="aws-cdk-sdk.s3control.S3ControlClient.deleteBucketLifecycleConfiguration"></a>

```typescript
public deleteBucketLifecycleConfiguration(input: S3ControlDeleteBucketLifecycleConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDeleteBucketLifecycleConfigurationRequest`](#aws-cdk-sdk.s3control.S3ControlDeleteBucketLifecycleConfigurationRequest)

---

##### `deleteBucketPolicy` <a name="aws-cdk-sdk.s3control.S3ControlClient.deleteBucketPolicy"></a>

```typescript
public deleteBucketPolicy(input: S3ControlDeleteBucketPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDeleteBucketPolicyRequest`](#aws-cdk-sdk.s3control.S3ControlDeleteBucketPolicyRequest)

---

##### `deleteBucketTagging` <a name="aws-cdk-sdk.s3control.S3ControlClient.deleteBucketTagging"></a>

```typescript
public deleteBucketTagging(input: S3ControlDeleteBucketTaggingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDeleteBucketTaggingRequest`](#aws-cdk-sdk.s3control.S3ControlDeleteBucketTaggingRequest)

---

##### `deleteJobTagging` <a name="aws-cdk-sdk.s3control.S3ControlClient.deleteJobTagging"></a>

```typescript
public deleteJobTagging(input: S3ControlDeleteJobTaggingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDeleteJobTaggingRequest`](#aws-cdk-sdk.s3control.S3ControlDeleteJobTaggingRequest)

---

##### `deletePublicAccessBlock` <a name="aws-cdk-sdk.s3control.S3ControlClient.deletePublicAccessBlock"></a>

```typescript
public deletePublicAccessBlock(input: S3ControlDeletePublicAccessBlockRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDeletePublicAccessBlockRequest`](#aws-cdk-sdk.s3control.S3ControlDeletePublicAccessBlockRequest)

---

##### `deleteStorageLensConfiguration` <a name="aws-cdk-sdk.s3control.S3ControlClient.deleteStorageLensConfiguration"></a>

```typescript
public deleteStorageLensConfiguration(input: S3ControlDeleteStorageLensConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDeleteStorageLensConfigurationRequest`](#aws-cdk-sdk.s3control.S3ControlDeleteStorageLensConfigurationRequest)

---

##### `deleteStorageLensConfigurationTagging` <a name="aws-cdk-sdk.s3control.S3ControlClient.deleteStorageLensConfigurationTagging"></a>

```typescript
public deleteStorageLensConfigurationTagging(input: S3ControlDeleteStorageLensConfigurationTaggingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDeleteStorageLensConfigurationTaggingRequest`](#aws-cdk-sdk.s3control.S3ControlDeleteStorageLensConfigurationTaggingRequest)

---

##### `describeJob` <a name="aws-cdk-sdk.s3control.S3ControlClient.describeJob"></a>

```typescript
public describeJob(input: S3ControlDescribeJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDescribeJobRequest`](#aws-cdk-sdk.s3control.S3ControlDescribeJobRequest)

---

##### `fetchAccessPoint` <a name="aws-cdk-sdk.s3control.S3ControlClient.fetchAccessPoint"></a>

```typescript
public fetchAccessPoint(input: S3ControlGetAccessPointRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetAccessPointRequest`](#aws-cdk-sdk.s3control.S3ControlGetAccessPointRequest)

---

##### `fetchAccessPointPolicy` <a name="aws-cdk-sdk.s3control.S3ControlClient.fetchAccessPointPolicy"></a>

```typescript
public fetchAccessPointPolicy(input: S3ControlGetAccessPointPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetAccessPointPolicyRequest`](#aws-cdk-sdk.s3control.S3ControlGetAccessPointPolicyRequest)

---

##### `fetchAccessPointPolicyStatus` <a name="aws-cdk-sdk.s3control.S3ControlClient.fetchAccessPointPolicyStatus"></a>

```typescript
public fetchAccessPointPolicyStatus(input: S3ControlGetAccessPointPolicyStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetAccessPointPolicyStatusRequest`](#aws-cdk-sdk.s3control.S3ControlGetAccessPointPolicyStatusRequest)

---

##### `fetchBucket` <a name="aws-cdk-sdk.s3control.S3ControlClient.fetchBucket"></a>

```typescript
public fetchBucket(input: S3ControlGetBucketRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetBucketRequest`](#aws-cdk-sdk.s3control.S3ControlGetBucketRequest)

---

##### `fetchBucketLifecycleConfiguration` <a name="aws-cdk-sdk.s3control.S3ControlClient.fetchBucketLifecycleConfiguration"></a>

```typescript
public fetchBucketLifecycleConfiguration(input: S3ControlGetBucketLifecycleConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetBucketLifecycleConfigurationRequest`](#aws-cdk-sdk.s3control.S3ControlGetBucketLifecycleConfigurationRequest)

---

##### `fetchBucketPolicy` <a name="aws-cdk-sdk.s3control.S3ControlClient.fetchBucketPolicy"></a>

```typescript
public fetchBucketPolicy(input: S3ControlGetBucketPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetBucketPolicyRequest`](#aws-cdk-sdk.s3control.S3ControlGetBucketPolicyRequest)

---

##### `fetchBucketTagging` <a name="aws-cdk-sdk.s3control.S3ControlClient.fetchBucketTagging"></a>

```typescript
public fetchBucketTagging(input: S3ControlGetBucketTaggingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetBucketTaggingRequest`](#aws-cdk-sdk.s3control.S3ControlGetBucketTaggingRequest)

---

##### `fetchJobTagging` <a name="aws-cdk-sdk.s3control.S3ControlClient.fetchJobTagging"></a>

```typescript
public fetchJobTagging(input: S3ControlGetJobTaggingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetJobTaggingRequest`](#aws-cdk-sdk.s3control.S3ControlGetJobTaggingRequest)

---

##### `fetchPublicAccessBlock` <a name="aws-cdk-sdk.s3control.S3ControlClient.fetchPublicAccessBlock"></a>

```typescript
public fetchPublicAccessBlock(input: S3ControlGetPublicAccessBlockRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetPublicAccessBlockRequest`](#aws-cdk-sdk.s3control.S3ControlGetPublicAccessBlockRequest)

---

##### `fetchStorageLensConfiguration` <a name="aws-cdk-sdk.s3control.S3ControlClient.fetchStorageLensConfiguration"></a>

```typescript
public fetchStorageLensConfiguration(input: S3ControlGetStorageLensConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest`](#aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest)

---

##### `fetchStorageLensConfigurationTagging` <a name="aws-cdk-sdk.s3control.S3ControlClient.fetchStorageLensConfigurationTagging"></a>

```typescript
public fetchStorageLensConfigurationTagging(input: S3ControlGetStorageLensConfigurationTaggingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationTaggingRequest`](#aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationTaggingRequest)

---

##### `listAccessPoints` <a name="aws-cdk-sdk.s3control.S3ControlClient.listAccessPoints"></a>

```typescript
public listAccessPoints(input: S3ControlListAccessPointsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlListAccessPointsRequest`](#aws-cdk-sdk.s3control.S3ControlListAccessPointsRequest)

---

##### `listJobs` <a name="aws-cdk-sdk.s3control.S3ControlClient.listJobs"></a>

```typescript
public listJobs(input: S3ControlListJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlListJobsRequest`](#aws-cdk-sdk.s3control.S3ControlListJobsRequest)

---

##### `listRegionalBuckets` <a name="aws-cdk-sdk.s3control.S3ControlClient.listRegionalBuckets"></a>

```typescript
public listRegionalBuckets(input: S3ControlListRegionalBucketsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlListRegionalBucketsRequest`](#aws-cdk-sdk.s3control.S3ControlListRegionalBucketsRequest)

---

##### `listStorageLensConfigurations` <a name="aws-cdk-sdk.s3control.S3ControlClient.listStorageLensConfigurations"></a>

```typescript
public listStorageLensConfigurations(input: S3ControlListStorageLensConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlListStorageLensConfigurationsRequest`](#aws-cdk-sdk.s3control.S3ControlListStorageLensConfigurationsRequest)

---

##### `putAccessPointPolicy` <a name="aws-cdk-sdk.s3control.S3ControlClient.putAccessPointPolicy"></a>

```typescript
public putAccessPointPolicy(input: S3ControlPutAccessPointPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlPutAccessPointPolicyRequest`](#aws-cdk-sdk.s3control.S3ControlPutAccessPointPolicyRequest)

---

##### `putBucketLifecycleConfiguration` <a name="aws-cdk-sdk.s3control.S3ControlClient.putBucketLifecycleConfiguration"></a>

```typescript
public putBucketLifecycleConfiguration(input: S3ControlPutBucketLifecycleConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlPutBucketLifecycleConfigurationRequest`](#aws-cdk-sdk.s3control.S3ControlPutBucketLifecycleConfigurationRequest)

---

##### `putBucketPolicy` <a name="aws-cdk-sdk.s3control.S3ControlClient.putBucketPolicy"></a>

```typescript
public putBucketPolicy(input: S3ControlPutBucketPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlPutBucketPolicyRequest`](#aws-cdk-sdk.s3control.S3ControlPutBucketPolicyRequest)

---

##### `putBucketTagging` <a name="aws-cdk-sdk.s3control.S3ControlClient.putBucketTagging"></a>

```typescript
public putBucketTagging(input: S3ControlPutBucketTaggingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlPutBucketTaggingRequest`](#aws-cdk-sdk.s3control.S3ControlPutBucketTaggingRequest)

---

##### `putJobTagging` <a name="aws-cdk-sdk.s3control.S3ControlClient.putJobTagging"></a>

```typescript
public putJobTagging(input: S3ControlPutJobTaggingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlPutJobTaggingRequest`](#aws-cdk-sdk.s3control.S3ControlPutJobTaggingRequest)

---

##### `putPublicAccessBlock` <a name="aws-cdk-sdk.s3control.S3ControlClient.putPublicAccessBlock"></a>

```typescript
public putPublicAccessBlock(input: S3ControlPutPublicAccessBlockRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlPutPublicAccessBlockRequest`](#aws-cdk-sdk.s3control.S3ControlPutPublicAccessBlockRequest)

---

##### `putStorageLensConfiguration` <a name="aws-cdk-sdk.s3control.S3ControlClient.putStorageLensConfiguration"></a>

```typescript
public putStorageLensConfiguration(input: S3ControlPutStorageLensConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlPutStorageLensConfigurationRequest`](#aws-cdk-sdk.s3control.S3ControlPutStorageLensConfigurationRequest)

---

##### `putStorageLensConfigurationTagging` <a name="aws-cdk-sdk.s3control.S3ControlClient.putStorageLensConfigurationTagging"></a>

```typescript
public putStorageLensConfigurationTagging(input: S3ControlPutStorageLensConfigurationTaggingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlPutStorageLensConfigurationTaggingRequest`](#aws-cdk-sdk.s3control.S3ControlPutStorageLensConfigurationTaggingRequest)

---

##### `updateJobPriority` <a name="aws-cdk-sdk.s3control.S3ControlClient.updateJobPriority"></a>

```typescript
public updateJobPriority(input: S3ControlUpdateJobPriorityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlUpdateJobPriorityRequest`](#aws-cdk-sdk.s3control.S3ControlUpdateJobPriorityRequest)

---

##### `updateJobStatus` <a name="aws-cdk-sdk.s3control.S3ControlClient.updateJobStatus"></a>

```typescript
public updateJobStatus(input: S3ControlUpdateJobStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlUpdateJobStatusRequest`](#aws-cdk-sdk.s3control.S3ControlUpdateJobStatusRequest)

---




## Structs <a name="Structs"></a>

### S3ControlAbortIncompleteMultipartUpload <a name="aws-cdk-sdk.s3control.S3ControlAbortIncompleteMultipartUpload"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlAbortIncompleteMultipartUpload: s3control.S3ControlAbortIncompleteMultipartUpload = { ... }
```

##### `daysAfterInitiation`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlAbortIncompleteMultipartUpload.property.daysAfterInitiation"></a>

- *Type:* `number`

---

### S3ControlAccessPoint <a name="aws-cdk-sdk.s3control.S3ControlAccessPoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlAccessPoint: s3control.S3ControlAccessPoint = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlAccessPoint.property.bucket"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlAccessPoint.property.name"></a>

- *Type:* `string`

---

##### `networkOrigin`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlAccessPoint.property.networkOrigin"></a>

- *Type:* `string`

---

##### `accessPointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlAccessPoint.property.accessPointArn"></a>

- *Type:* `string`

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlAccessPoint.property.vpcConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlVpcConfiguration`](#aws-cdk-sdk.s3control.S3ControlVpcConfiguration)

---

### S3ControlAccountLevel <a name="aws-cdk-sdk.s3control.S3ControlAccountLevel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlAccountLevel: s3control.S3ControlAccountLevel = { ... }
```

##### `bucketLevel`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlAccountLevel.property.bucketLevel"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlBucketLevel`](#aws-cdk-sdk.s3control.S3ControlBucketLevel)

---

##### `activityMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlAccountLevel.property.activityMetrics"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlActivityMetrics`](#aws-cdk-sdk.s3control.S3ControlActivityMetrics)

---

### S3ControlActivityMetrics <a name="aws-cdk-sdk.s3control.S3ControlActivityMetrics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlActivityMetrics: s3control.S3ControlActivityMetrics = { ... }
```

##### `isEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlActivityMetrics.property.isEnabled"></a>

- *Type:* `boolean`

---

### S3ControlBucketLevel <a name="aws-cdk-sdk.s3control.S3ControlBucketLevel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlBucketLevel: s3control.S3ControlBucketLevel = { ... }
```

##### `activityMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlBucketLevel.property.activityMetrics"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlActivityMetrics`](#aws-cdk-sdk.s3control.S3ControlActivityMetrics)

---

##### `prefixLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlBucketLevel.property.prefixLevel"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlPrefixLevel`](#aws-cdk-sdk.s3control.S3ControlPrefixLevel)

---

### S3ControlCreateAccessPointRequest <a name="aws-cdk-sdk.s3control.S3ControlCreateAccessPointRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlCreateAccessPointRequest: s3control.S3ControlCreateAccessPointRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateAccessPointRequest.property.accountId"></a>

- *Type:* `string`

---

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateAccessPointRequest.property.bucket"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateAccessPointRequest.property.name"></a>

- *Type:* `string`

---

##### `publicAccessBlockConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateAccessPointRequest.property.publicAccessBlockConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlPublicAccessBlockConfiguration`](#aws-cdk-sdk.s3control.S3ControlPublicAccessBlockConfiguration)

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateAccessPointRequest.property.vpcConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlVpcConfiguration`](#aws-cdk-sdk.s3control.S3ControlVpcConfiguration)

---

### S3ControlCreateAccessPointResult <a name="aws-cdk-sdk.s3control.S3ControlCreateAccessPointResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlCreateAccessPointResult: s3control.S3ControlCreateAccessPointResult = { ... }
```

##### `accessPointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateAccessPointResult.property.accessPointArn"></a>

- *Type:* `string`

---

### S3ControlCreateBucketConfiguration <a name="aws-cdk-sdk.s3control.S3ControlCreateBucketConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlCreateBucketConfiguration: s3control.S3ControlCreateBucketConfiguration = { ... }
```

##### `locationConstraint`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateBucketConfiguration.property.locationConstraint"></a>

- *Type:* `string`

---

### S3ControlCreateBucketRequest <a name="aws-cdk-sdk.s3control.S3ControlCreateBucketRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlCreateBucketRequest: s3control.S3ControlCreateBucketRequest = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateBucketRequest.property.bucket"></a>

- *Type:* `string`

---

##### `acl`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateBucketRequest.property.acl"></a>

- *Type:* `string`

---

##### `createBucketConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateBucketRequest.property.createBucketConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlCreateBucketConfiguration`](#aws-cdk-sdk.s3control.S3ControlCreateBucketConfiguration)

---

##### `grantFullControl`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateBucketRequest.property.grantFullControl"></a>

- *Type:* `string`

---

##### `grantRead`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateBucketRequest.property.grantRead"></a>

- *Type:* `string`

---

##### `grantReadAcp`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateBucketRequest.property.grantReadAcp"></a>

- *Type:* `string`

---

##### `grantWrite`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateBucketRequest.property.grantWrite"></a>

- *Type:* `string`

---

##### `grantWriteAcp`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateBucketRequest.property.grantWriteAcp"></a>

- *Type:* `string`

---

##### `objectLockEnabledForBucket`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateBucketRequest.property.objectLockEnabledForBucket"></a>

- *Type:* `boolean`

---

##### `outpostId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateBucketRequest.property.outpostId"></a>

- *Type:* `string`

---

### S3ControlCreateBucketResult <a name="aws-cdk-sdk.s3control.S3ControlCreateBucketResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlCreateBucketResult: s3control.S3ControlCreateBucketResult = { ... }
```

##### `bucketArn`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateBucketResult.property.bucketArn"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateBucketResult.property.location"></a>

- *Type:* `string`

---

### S3ControlCreateJobRequest <a name="aws-cdk-sdk.s3control.S3ControlCreateJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlCreateJobRequest: s3control.S3ControlCreateJobRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateJobRequest.property.accountId"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateJobRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `manifest`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateJobRequest.property.manifest"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlJobManifest`](#aws-cdk-sdk.s3control.S3ControlJobManifest)

---

##### `operation`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateJobRequest.property.operation"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlJobOperation`](#aws-cdk-sdk.s3control.S3ControlJobOperation)

---

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateJobRequest.property.priority"></a>

- *Type:* `number`

---

##### `report`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateJobRequest.property.report"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlJobReport`](#aws-cdk-sdk.s3control.S3ControlJobReport)

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateJobRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `confirmationRequired`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateJobRequest.property.confirmationRequired"></a>

- *Type:* `boolean`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateJobRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateJobRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3Tag`](#aws-cdk-sdk.s3control.S3ControlS3Tag)[]

---

### S3ControlCreateJobResult <a name="aws-cdk-sdk.s3control.S3ControlCreateJobResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlCreateJobResult: s3control.S3ControlCreateJobResult = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlCreateJobResult.property.jobId"></a>

- *Type:* `string`

---

### S3ControlDeleteAccessPointPolicyRequest <a name="aws-cdk-sdk.s3control.S3ControlDeleteAccessPointPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlDeleteAccessPointPolicyRequest: s3control.S3ControlDeleteAccessPointPolicyRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlDeleteAccessPointPolicyRequest.property.accountId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlDeleteAccessPointPolicyRequest.property.name"></a>

- *Type:* `string`

---

### S3ControlDeleteAccessPointRequest <a name="aws-cdk-sdk.s3control.S3ControlDeleteAccessPointRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlDeleteAccessPointRequest: s3control.S3ControlDeleteAccessPointRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlDeleteAccessPointRequest.property.accountId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlDeleteAccessPointRequest.property.name"></a>

- *Type:* `string`

---

### S3ControlDeleteBucketLifecycleConfigurationRequest <a name="aws-cdk-sdk.s3control.S3ControlDeleteBucketLifecycleConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlDeleteBucketLifecycleConfigurationRequest: s3control.S3ControlDeleteBucketLifecycleConfigurationRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlDeleteBucketLifecycleConfigurationRequest.property.accountId"></a>

- *Type:* `string`

---

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlDeleteBucketLifecycleConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

### S3ControlDeleteBucketPolicyRequest <a name="aws-cdk-sdk.s3control.S3ControlDeleteBucketPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlDeleteBucketPolicyRequest: s3control.S3ControlDeleteBucketPolicyRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlDeleteBucketPolicyRequest.property.accountId"></a>

- *Type:* `string`

---

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlDeleteBucketPolicyRequest.property.bucket"></a>

- *Type:* `string`

---

### S3ControlDeleteBucketRequest <a name="aws-cdk-sdk.s3control.S3ControlDeleteBucketRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlDeleteBucketRequest: s3control.S3ControlDeleteBucketRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlDeleteBucketRequest.property.accountId"></a>

- *Type:* `string`

---

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlDeleteBucketRequest.property.bucket"></a>

- *Type:* `string`

---

### S3ControlDeleteBucketTaggingRequest <a name="aws-cdk-sdk.s3control.S3ControlDeleteBucketTaggingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlDeleteBucketTaggingRequest: s3control.S3ControlDeleteBucketTaggingRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlDeleteBucketTaggingRequest.property.accountId"></a>

- *Type:* `string`

---

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlDeleteBucketTaggingRequest.property.bucket"></a>

- *Type:* `string`

---

### S3ControlDeleteJobTaggingRequest <a name="aws-cdk-sdk.s3control.S3ControlDeleteJobTaggingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlDeleteJobTaggingRequest: s3control.S3ControlDeleteJobTaggingRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlDeleteJobTaggingRequest.property.accountId"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlDeleteJobTaggingRequest.property.jobId"></a>

- *Type:* `string`

---

### S3ControlDeleteJobTaggingResult <a name="aws-cdk-sdk.s3control.S3ControlDeleteJobTaggingResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlDeleteJobTaggingResult: s3control.S3ControlDeleteJobTaggingResult = { ... }
```

### S3ControlDeletePublicAccessBlockRequest <a name="aws-cdk-sdk.s3control.S3ControlDeletePublicAccessBlockRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlDeletePublicAccessBlockRequest: s3control.S3ControlDeletePublicAccessBlockRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlDeletePublicAccessBlockRequest.property.accountId"></a>

- *Type:* `string`

---

### S3ControlDeleteStorageLensConfigurationRequest <a name="aws-cdk-sdk.s3control.S3ControlDeleteStorageLensConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlDeleteStorageLensConfigurationRequest: s3control.S3ControlDeleteStorageLensConfigurationRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlDeleteStorageLensConfigurationRequest.property.accountId"></a>

- *Type:* `string`

---

##### `configId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlDeleteStorageLensConfigurationRequest.property.configId"></a>

- *Type:* `string`

---

### S3ControlDeleteStorageLensConfigurationTaggingRequest <a name="aws-cdk-sdk.s3control.S3ControlDeleteStorageLensConfigurationTaggingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlDeleteStorageLensConfigurationTaggingRequest: s3control.S3ControlDeleteStorageLensConfigurationTaggingRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlDeleteStorageLensConfigurationTaggingRequest.property.accountId"></a>

- *Type:* `string`

---

##### `configId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlDeleteStorageLensConfigurationTaggingRequest.property.configId"></a>

- *Type:* `string`

---

### S3ControlDeleteStorageLensConfigurationTaggingResult <a name="aws-cdk-sdk.s3control.S3ControlDeleteStorageLensConfigurationTaggingResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlDeleteStorageLensConfigurationTaggingResult: s3control.S3ControlDeleteStorageLensConfigurationTaggingResult = { ... }
```

### S3ControlDescribeJobRequest <a name="aws-cdk-sdk.s3control.S3ControlDescribeJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlDescribeJobRequest: s3control.S3ControlDescribeJobRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlDescribeJobRequest.property.accountId"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlDescribeJobRequest.property.jobId"></a>

- *Type:* `string`

---

### S3ControlDescribeJobResult <a name="aws-cdk-sdk.s3control.S3ControlDescribeJobResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlDescribeJobResult: s3control.S3ControlDescribeJobResult = { ... }
```

##### `job`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlDescribeJobResult.property.job"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlJobDescriptor`](#aws-cdk-sdk.s3control.S3ControlJobDescriptor)

---

### S3ControlExclude <a name="aws-cdk-sdk.s3control.S3ControlExclude"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlExclude: s3control.S3ControlExclude = { ... }
```

##### `buckets`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlExclude.property.buckets"></a>

- *Type:* `string`[]

---

##### `regions`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlExclude.property.regions"></a>

- *Type:* `string`[]

---

### S3ControlGetAccessPointPolicyRequest <a name="aws-cdk-sdk.s3control.S3ControlGetAccessPointPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlGetAccessPointPolicyRequest: s3control.S3ControlGetAccessPointPolicyRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetAccessPointPolicyRequest.property.accountId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetAccessPointPolicyRequest.property.name"></a>

- *Type:* `string`

---

### S3ControlGetAccessPointPolicyResult <a name="aws-cdk-sdk.s3control.S3ControlGetAccessPointPolicyResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlGetAccessPointPolicyResult: s3control.S3ControlGetAccessPointPolicyResult = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetAccessPointPolicyResult.property.policy"></a>

- *Type:* `string`

---

### S3ControlGetAccessPointPolicyStatusRequest <a name="aws-cdk-sdk.s3control.S3ControlGetAccessPointPolicyStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlGetAccessPointPolicyStatusRequest: s3control.S3ControlGetAccessPointPolicyStatusRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetAccessPointPolicyStatusRequest.property.accountId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetAccessPointPolicyStatusRequest.property.name"></a>

- *Type:* `string`

---

### S3ControlGetAccessPointPolicyStatusResult <a name="aws-cdk-sdk.s3control.S3ControlGetAccessPointPolicyStatusResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlGetAccessPointPolicyStatusResult: s3control.S3ControlGetAccessPointPolicyStatusResult = { ... }
```

##### `policyStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetAccessPointPolicyStatusResult.property.policyStatus"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlPolicyStatus`](#aws-cdk-sdk.s3control.S3ControlPolicyStatus)

---

### S3ControlGetAccessPointRequest <a name="aws-cdk-sdk.s3control.S3ControlGetAccessPointRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlGetAccessPointRequest: s3control.S3ControlGetAccessPointRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetAccessPointRequest.property.accountId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetAccessPointRequest.property.name"></a>

- *Type:* `string`

---

### S3ControlGetAccessPointResult <a name="aws-cdk-sdk.s3control.S3ControlGetAccessPointResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlGetAccessPointResult: s3control.S3ControlGetAccessPointResult = { ... }
```

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetAccessPointResult.property.bucket"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetAccessPointResult.property.creationDate"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetAccessPointResult.property.name"></a>

- *Type:* `string`

---

##### `networkOrigin`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetAccessPointResult.property.networkOrigin"></a>

- *Type:* `string`

---

##### `publicAccessBlockConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetAccessPointResult.property.publicAccessBlockConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlPublicAccessBlockConfiguration`](#aws-cdk-sdk.s3control.S3ControlPublicAccessBlockConfiguration)

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetAccessPointResult.property.vpcConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlVpcConfiguration`](#aws-cdk-sdk.s3control.S3ControlVpcConfiguration)

---

### S3ControlGetBucketLifecycleConfigurationRequest <a name="aws-cdk-sdk.s3control.S3ControlGetBucketLifecycleConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlGetBucketLifecycleConfigurationRequest: s3control.S3ControlGetBucketLifecycleConfigurationRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetBucketLifecycleConfigurationRequest.property.accountId"></a>

- *Type:* `string`

---

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetBucketLifecycleConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

### S3ControlGetBucketLifecycleConfigurationResult <a name="aws-cdk-sdk.s3control.S3ControlGetBucketLifecycleConfigurationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlGetBucketLifecycleConfigurationResult: s3control.S3ControlGetBucketLifecycleConfigurationResult = { ... }
```

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetBucketLifecycleConfigurationResult.property.rules"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlLifecycleRule`](#aws-cdk-sdk.s3control.S3ControlLifecycleRule)[]

---

### S3ControlGetBucketPolicyRequest <a name="aws-cdk-sdk.s3control.S3ControlGetBucketPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlGetBucketPolicyRequest: s3control.S3ControlGetBucketPolicyRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetBucketPolicyRequest.property.accountId"></a>

- *Type:* `string`

---

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetBucketPolicyRequest.property.bucket"></a>

- *Type:* `string`

---

### S3ControlGetBucketPolicyResult <a name="aws-cdk-sdk.s3control.S3ControlGetBucketPolicyResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlGetBucketPolicyResult: s3control.S3ControlGetBucketPolicyResult = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetBucketPolicyResult.property.policy"></a>

- *Type:* `string`

---

### S3ControlGetBucketRequest <a name="aws-cdk-sdk.s3control.S3ControlGetBucketRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlGetBucketRequest: s3control.S3ControlGetBucketRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetBucketRequest.property.accountId"></a>

- *Type:* `string`

---

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetBucketRequest.property.bucket"></a>

- *Type:* `string`

---

### S3ControlGetBucketResult <a name="aws-cdk-sdk.s3control.S3ControlGetBucketResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlGetBucketResult: s3control.S3ControlGetBucketResult = { ... }
```

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetBucketResult.property.bucket"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetBucketResult.property.creationDate"></a>

- *Type:* `string`

---

##### `publicAccessBlockEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetBucketResult.property.publicAccessBlockEnabled"></a>

- *Type:* `boolean`

---

### S3ControlGetBucketTaggingRequest <a name="aws-cdk-sdk.s3control.S3ControlGetBucketTaggingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlGetBucketTaggingRequest: s3control.S3ControlGetBucketTaggingRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetBucketTaggingRequest.property.accountId"></a>

- *Type:* `string`

---

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetBucketTaggingRequest.property.bucket"></a>

- *Type:* `string`

---

### S3ControlGetBucketTaggingResult <a name="aws-cdk-sdk.s3control.S3ControlGetBucketTaggingResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlGetBucketTaggingResult: s3control.S3ControlGetBucketTaggingResult = { ... }
```

##### `tagSet`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetBucketTaggingResult.property.tagSet"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3Tag`](#aws-cdk-sdk.s3control.S3ControlS3Tag)[]

---

### S3ControlGetJobTaggingRequest <a name="aws-cdk-sdk.s3control.S3ControlGetJobTaggingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlGetJobTaggingRequest: s3control.S3ControlGetJobTaggingRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetJobTaggingRequest.property.accountId"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetJobTaggingRequest.property.jobId"></a>

- *Type:* `string`

---

### S3ControlGetJobTaggingResult <a name="aws-cdk-sdk.s3control.S3ControlGetJobTaggingResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlGetJobTaggingResult: s3control.S3ControlGetJobTaggingResult = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetJobTaggingResult.property.tags"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3Tag`](#aws-cdk-sdk.s3control.S3ControlS3Tag)[]

---

### S3ControlGetPublicAccessBlockOutput <a name="aws-cdk-sdk.s3control.S3ControlGetPublicAccessBlockOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlGetPublicAccessBlockOutput: s3control.S3ControlGetPublicAccessBlockOutput = { ... }
```

##### `publicAccessBlockConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetPublicAccessBlockOutput.property.publicAccessBlockConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlPublicAccessBlockConfiguration`](#aws-cdk-sdk.s3control.S3ControlPublicAccessBlockConfiguration)

---

### S3ControlGetPublicAccessBlockRequest <a name="aws-cdk-sdk.s3control.S3ControlGetPublicAccessBlockRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlGetPublicAccessBlockRequest: s3control.S3ControlGetPublicAccessBlockRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetPublicAccessBlockRequest.property.accountId"></a>

- *Type:* `string`

---

### S3ControlGetStorageLensConfigurationRequest <a name="aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlGetStorageLensConfigurationRequest: s3control.S3ControlGetStorageLensConfigurationRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest.property.accountId"></a>

- *Type:* `string`

---

##### `configId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest.property.configId"></a>

- *Type:* `string`

---

### S3ControlGetStorageLensConfigurationResult <a name="aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlGetStorageLensConfigurationResult: s3control.S3ControlGetStorageLensConfigurationResult = { ... }
```

##### `storageLensConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationResult.property.storageLensConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlStorageLensConfiguration`](#aws-cdk-sdk.s3control.S3ControlStorageLensConfiguration)

---

### S3ControlGetStorageLensConfigurationTaggingRequest <a name="aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationTaggingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlGetStorageLensConfigurationTaggingRequest: s3control.S3ControlGetStorageLensConfigurationTaggingRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationTaggingRequest.property.accountId"></a>

- *Type:* `string`

---

##### `configId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationTaggingRequest.property.configId"></a>

- *Type:* `string`

---

### S3ControlGetStorageLensConfigurationTaggingResult <a name="aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationTaggingResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlGetStorageLensConfigurationTaggingResult: s3control.S3ControlGetStorageLensConfigurationTaggingResult = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationTaggingResult.property.tags"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlStorageLensTag`](#aws-cdk-sdk.s3control.S3ControlStorageLensTag)[]

---

### S3ControlInclude <a name="aws-cdk-sdk.s3control.S3ControlInclude"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlInclude: s3control.S3ControlInclude = { ... }
```

##### `buckets`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlInclude.property.buckets"></a>

- *Type:* `string`[]

---

##### `regions`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlInclude.property.regions"></a>

- *Type:* `string`[]

---

### S3ControlJobDescriptor <a name="aws-cdk-sdk.s3control.S3ControlJobDescriptor"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlJobDescriptor: s3control.S3ControlJobDescriptor = { ... }
```

##### `confirmationRequired`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobDescriptor.property.confirmationRequired"></a>

- *Type:* `boolean`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobDescriptor.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobDescriptor.property.description"></a>

- *Type:* `string`

---

##### `failureReasons`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobDescriptor.property.failureReasons"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlJobFailure`](#aws-cdk-sdk.s3control.S3ControlJobFailure)[]

---

##### `jobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobDescriptor.property.jobArn"></a>

- *Type:* `string`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobDescriptor.property.jobId"></a>

- *Type:* `string`

---

##### `manifest`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobDescriptor.property.manifest"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlJobManifest`](#aws-cdk-sdk.s3control.S3ControlJobManifest)

---

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobDescriptor.property.operation"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlJobOperation`](#aws-cdk-sdk.s3control.S3ControlJobOperation)

---

##### `priority`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobDescriptor.property.priority"></a>

- *Type:* `number`

---

##### `progressSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobDescriptor.property.progressSummary"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlJobProgressSummary`](#aws-cdk-sdk.s3control.S3ControlJobProgressSummary)

---

##### `report`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobDescriptor.property.report"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlJobReport`](#aws-cdk-sdk.s3control.S3ControlJobReport)

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobDescriptor.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobDescriptor.property.status"></a>

- *Type:* `string`

---

##### `statusUpdateReason`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobDescriptor.property.statusUpdateReason"></a>

- *Type:* `string`

---

##### `suspendedCause`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobDescriptor.property.suspendedCause"></a>

- *Type:* `string`

---

##### `suspendedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobDescriptor.property.suspendedDate"></a>

- *Type:* `string`

---

##### `terminationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobDescriptor.property.terminationDate"></a>

- *Type:* `string`

---

### S3ControlJobFailure <a name="aws-cdk-sdk.s3control.S3ControlJobFailure"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlJobFailure: s3control.S3ControlJobFailure = { ... }
```

##### `failureCode`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobFailure.property.failureCode"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobFailure.property.failureReason"></a>

- *Type:* `string`

---

### S3ControlJobListDescriptor <a name="aws-cdk-sdk.s3control.S3ControlJobListDescriptor"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlJobListDescriptor: s3control.S3ControlJobListDescriptor = { ... }
```

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobListDescriptor.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobListDescriptor.property.description"></a>

- *Type:* `string`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobListDescriptor.property.jobId"></a>

- *Type:* `string`

---

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobListDescriptor.property.operation"></a>

- *Type:* `string`

---

##### `priority`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobListDescriptor.property.priority"></a>

- *Type:* `number`

---

##### `progressSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobListDescriptor.property.progressSummary"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlJobProgressSummary`](#aws-cdk-sdk.s3control.S3ControlJobProgressSummary)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobListDescriptor.property.status"></a>

- *Type:* `string`

---

##### `terminationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobListDescriptor.property.terminationDate"></a>

- *Type:* `string`

---

### S3ControlJobManifest <a name="aws-cdk-sdk.s3control.S3ControlJobManifest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlJobManifest: s3control.S3ControlJobManifest = { ... }
```

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobManifest.property.location"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlJobManifestLocation`](#aws-cdk-sdk.s3control.S3ControlJobManifestLocation)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobManifest.property.spec"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlJobManifestSpec`](#aws-cdk-sdk.s3control.S3ControlJobManifestSpec)

---

### S3ControlJobManifestLocation <a name="aws-cdk-sdk.s3control.S3ControlJobManifestLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlJobManifestLocation: s3control.S3ControlJobManifestLocation = { ... }
```

##### `eTag`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobManifestLocation.property.eTag"></a>

- *Type:* `string`

---

##### `objectArn`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobManifestLocation.property.objectArn"></a>

- *Type:* `string`

---

##### `objectVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobManifestLocation.property.objectVersionId"></a>

- *Type:* `string`

---

### S3ControlJobManifestSpec <a name="aws-cdk-sdk.s3control.S3ControlJobManifestSpec"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlJobManifestSpec: s3control.S3ControlJobManifestSpec = { ... }
```

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobManifestSpec.property.format"></a>

- *Type:* `string`

---

##### `fields`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobManifestSpec.property.fields"></a>

- *Type:* `string`[]

---

### S3ControlJobOperation <a name="aws-cdk-sdk.s3control.S3ControlJobOperation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlJobOperation: s3control.S3ControlJobOperation = { ... }
```

##### `lambdaInvoke`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobOperation.property.lambdaInvoke"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlLambdaInvokeOperation`](#aws-cdk-sdk.s3control.S3ControlLambdaInvokeOperation)

---

##### `s3InitiateRestoreObject`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobOperation.property.s3InitiateRestoreObject"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3InitiateRestoreObjectOperation`](#aws-cdk-sdk.s3control.S3ControlS3InitiateRestoreObjectOperation)

---

##### `s3PutObjectAcl`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobOperation.property.s3PutObjectAcl"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3SetObjectAclOperation`](#aws-cdk-sdk.s3control.S3ControlS3SetObjectAclOperation)

---

##### `s3PutObjectCopy`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobOperation.property.s3PutObjectCopy"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3CopyObjectOperation`](#aws-cdk-sdk.s3control.S3ControlS3CopyObjectOperation)

---

##### `s3PutObjectLegalHold`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobOperation.property.s3PutObjectLegalHold"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3SetObjectLegalHoldOperation`](#aws-cdk-sdk.s3control.S3ControlS3SetObjectLegalHoldOperation)

---

##### `s3PutObjectRetention`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobOperation.property.s3PutObjectRetention"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3SetObjectRetentionOperation`](#aws-cdk-sdk.s3control.S3ControlS3SetObjectRetentionOperation)

---

##### `s3PutObjectTagging`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobOperation.property.s3PutObjectTagging"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3SetObjectTaggingOperation`](#aws-cdk-sdk.s3control.S3ControlS3SetObjectTaggingOperation)

---

### S3ControlJobProgressSummary <a name="aws-cdk-sdk.s3control.S3ControlJobProgressSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlJobProgressSummary: s3control.S3ControlJobProgressSummary = { ... }
```

##### `numberOfTasksFailed`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobProgressSummary.property.numberOfTasksFailed"></a>

- *Type:* `number`

---

##### `numberOfTasksSucceeded`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobProgressSummary.property.numberOfTasksSucceeded"></a>

- *Type:* `number`

---

##### `totalNumberOfTasks`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobProgressSummary.property.totalNumberOfTasks"></a>

- *Type:* `number`

---

### S3ControlJobReport <a name="aws-cdk-sdk.s3control.S3ControlJobReport"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlJobReport: s3control.S3ControlJobReport = { ... }
```

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobReport.property.enabled"></a>

- *Type:* `boolean`

---

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobReport.property.bucket"></a>

- *Type:* `string`

---

##### `format`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobReport.property.format"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobReport.property.prefix"></a>

- *Type:* `string`

---

##### `reportScope`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlJobReport.property.reportScope"></a>

- *Type:* `string`

---

### S3ControlLambdaInvokeOperation <a name="aws-cdk-sdk.s3control.S3ControlLambdaInvokeOperation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlLambdaInvokeOperation: s3control.S3ControlLambdaInvokeOperation = { ... }
```

##### `functionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlLambdaInvokeOperation.property.functionArn"></a>

- *Type:* `string`

---

### S3ControlLifecycleConfiguration <a name="aws-cdk-sdk.s3control.S3ControlLifecycleConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlLifecycleConfiguration: s3control.S3ControlLifecycleConfiguration = { ... }
```

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlLifecycleConfiguration.property.rules"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlLifecycleRule`](#aws-cdk-sdk.s3control.S3ControlLifecycleRule)[]

---

### S3ControlLifecycleExpiration <a name="aws-cdk-sdk.s3control.S3ControlLifecycleExpiration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlLifecycleExpiration: s3control.S3ControlLifecycleExpiration = { ... }
```

##### `date`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlLifecycleExpiration.property.date"></a>

- *Type:* `string`

---

##### `days`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlLifecycleExpiration.property.days"></a>

- *Type:* `number`

---

##### `expiredObjectDeleteMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlLifecycleExpiration.property.expiredObjectDeleteMarker"></a>

- *Type:* `boolean`

---

### S3ControlLifecycleRule <a name="aws-cdk-sdk.s3control.S3ControlLifecycleRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlLifecycleRule: s3control.S3ControlLifecycleRule = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlLifecycleRule.property.status"></a>

- *Type:* `string`

---

##### `abortIncompleteMultipartUpload`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlLifecycleRule.property.abortIncompleteMultipartUpload"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlAbortIncompleteMultipartUpload`](#aws-cdk-sdk.s3control.S3ControlAbortIncompleteMultipartUpload)

---

##### `expiration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlLifecycleRule.property.expiration"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlLifecycleExpiration`](#aws-cdk-sdk.s3control.S3ControlLifecycleExpiration)

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlLifecycleRule.property.filter"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlLifecycleRuleFilter`](#aws-cdk-sdk.s3control.S3ControlLifecycleRuleFilter)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlLifecycleRule.property.id"></a>

- *Type:* `string`

---

##### `noncurrentVersionExpiration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlLifecycleRule.property.noncurrentVersionExpiration"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlNoncurrentVersionExpiration`](#aws-cdk-sdk.s3control.S3ControlNoncurrentVersionExpiration)

---

##### `noncurrentVersionTransitions`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlLifecycleRule.property.noncurrentVersionTransitions"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlNoncurrentVersionTransition`](#aws-cdk-sdk.s3control.S3ControlNoncurrentVersionTransition)[]

---

##### `transitions`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlLifecycleRule.property.transitions"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlTransition`](#aws-cdk-sdk.s3control.S3ControlTransition)[]

---

### S3ControlLifecycleRuleAndOperator <a name="aws-cdk-sdk.s3control.S3ControlLifecycleRuleAndOperator"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlLifecycleRuleAndOperator: s3control.S3ControlLifecycleRuleAndOperator = { ... }
```

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlLifecycleRuleAndOperator.property.prefix"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlLifecycleRuleAndOperator.property.tags"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3Tag`](#aws-cdk-sdk.s3control.S3ControlS3Tag)[]

---

### S3ControlLifecycleRuleFilter <a name="aws-cdk-sdk.s3control.S3ControlLifecycleRuleFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlLifecycleRuleFilter: s3control.S3ControlLifecycleRuleFilter = { ... }
```

##### `and`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlLifecycleRuleFilter.property.and"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlLifecycleRuleAndOperator`](#aws-cdk-sdk.s3control.S3ControlLifecycleRuleAndOperator)

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlLifecycleRuleFilter.property.prefix"></a>

- *Type:* `string`

---

##### `tag`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlLifecycleRuleFilter.property.tag"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3Tag`](#aws-cdk-sdk.s3control.S3ControlS3Tag)

---

### S3ControlListAccessPointsRequest <a name="aws-cdk-sdk.s3control.S3ControlListAccessPointsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlListAccessPointsRequest: s3control.S3ControlListAccessPointsRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlListAccessPointsRequest.property.accountId"></a>

- *Type:* `string`

---

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlListAccessPointsRequest.property.bucket"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlListAccessPointsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlListAccessPointsRequest.property.nextToken"></a>

- *Type:* `string`

---

### S3ControlListAccessPointsResult <a name="aws-cdk-sdk.s3control.S3ControlListAccessPointsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlListAccessPointsResult: s3control.S3ControlListAccessPointsResult = { ... }
```

##### `accessPointList`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlListAccessPointsResult.property.accessPointList"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlAccessPoint`](#aws-cdk-sdk.s3control.S3ControlAccessPoint)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlListAccessPointsResult.property.nextToken"></a>

- *Type:* `string`

---

### S3ControlListJobsRequest <a name="aws-cdk-sdk.s3control.S3ControlListJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlListJobsRequest: s3control.S3ControlListJobsRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlListJobsRequest.property.accountId"></a>

- *Type:* `string`

---

##### `jobStatuses`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlListJobsRequest.property.jobStatuses"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlListJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlListJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### S3ControlListJobsResult <a name="aws-cdk-sdk.s3control.S3ControlListJobsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlListJobsResult: s3control.S3ControlListJobsResult = { ... }
```

##### `jobs`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlListJobsResult.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlJobListDescriptor`](#aws-cdk-sdk.s3control.S3ControlJobListDescriptor)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlListJobsResult.property.nextToken"></a>

- *Type:* `string`

---

### S3ControlListRegionalBucketsRequest <a name="aws-cdk-sdk.s3control.S3ControlListRegionalBucketsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlListRegionalBucketsRequest: s3control.S3ControlListRegionalBucketsRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlListRegionalBucketsRequest.property.accountId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlListRegionalBucketsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlListRegionalBucketsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `outpostId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlListRegionalBucketsRequest.property.outpostId"></a>

- *Type:* `string`

---

### S3ControlListRegionalBucketsResult <a name="aws-cdk-sdk.s3control.S3ControlListRegionalBucketsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlListRegionalBucketsResult: s3control.S3ControlListRegionalBucketsResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlListRegionalBucketsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `regionalBucketList`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlListRegionalBucketsResult.property.regionalBucketList"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlRegionalBucket`](#aws-cdk-sdk.s3control.S3ControlRegionalBucket)[]

---

### S3ControlListStorageLensConfigurationEntry <a name="aws-cdk-sdk.s3control.S3ControlListStorageLensConfigurationEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlListStorageLensConfigurationEntry: s3control.S3ControlListStorageLensConfigurationEntry = { ... }
```

##### `homeRegion`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlListStorageLensConfigurationEntry.property.homeRegion"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlListStorageLensConfigurationEntry.property.id"></a>

- *Type:* `string`

---

##### `storageLensArn`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlListStorageLensConfigurationEntry.property.storageLensArn"></a>

- *Type:* `string`

---

##### `isEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlListStorageLensConfigurationEntry.property.isEnabled"></a>

- *Type:* `boolean`

---

### S3ControlListStorageLensConfigurationsRequest <a name="aws-cdk-sdk.s3control.S3ControlListStorageLensConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlListStorageLensConfigurationsRequest: s3control.S3ControlListStorageLensConfigurationsRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlListStorageLensConfigurationsRequest.property.accountId"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlListStorageLensConfigurationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### S3ControlListStorageLensConfigurationsResult <a name="aws-cdk-sdk.s3control.S3ControlListStorageLensConfigurationsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlListStorageLensConfigurationsResult: s3control.S3ControlListStorageLensConfigurationsResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlListStorageLensConfigurationsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `storageLensConfigurationList`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlListStorageLensConfigurationsResult.property.storageLensConfigurationList"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlListStorageLensConfigurationEntry`](#aws-cdk-sdk.s3control.S3ControlListStorageLensConfigurationEntry)[]

---

### S3ControlNoncurrentVersionExpiration <a name="aws-cdk-sdk.s3control.S3ControlNoncurrentVersionExpiration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlNoncurrentVersionExpiration: s3control.S3ControlNoncurrentVersionExpiration = { ... }
```

##### `noncurrentDays`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlNoncurrentVersionExpiration.property.noncurrentDays"></a>

- *Type:* `number`

---

### S3ControlNoncurrentVersionTransition <a name="aws-cdk-sdk.s3control.S3ControlNoncurrentVersionTransition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlNoncurrentVersionTransition: s3control.S3ControlNoncurrentVersionTransition = { ... }
```

##### `noncurrentDays`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlNoncurrentVersionTransition.property.noncurrentDays"></a>

- *Type:* `number`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlNoncurrentVersionTransition.property.storageClass"></a>

- *Type:* `string`

---

### S3ControlPolicyStatus <a name="aws-cdk-sdk.s3control.S3ControlPolicyStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlPolicyStatus: s3control.S3ControlPolicyStatus = { ... }
```

##### `isPublic`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlPolicyStatus.property.isPublic"></a>

- *Type:* `boolean`

---

### S3ControlPrefixLevel <a name="aws-cdk-sdk.s3control.S3ControlPrefixLevel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlPrefixLevel: s3control.S3ControlPrefixLevel = { ... }
```

##### `storageMetrics`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlPrefixLevel.property.storageMetrics"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlPrefixLevelStorageMetrics`](#aws-cdk-sdk.s3control.S3ControlPrefixLevelStorageMetrics)

---

### S3ControlPrefixLevelStorageMetrics <a name="aws-cdk-sdk.s3control.S3ControlPrefixLevelStorageMetrics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlPrefixLevelStorageMetrics: s3control.S3ControlPrefixLevelStorageMetrics = { ... }
```

##### `isEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlPrefixLevelStorageMetrics.property.isEnabled"></a>

- *Type:* `boolean`

---

##### `selectionCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlPrefixLevelStorageMetrics.property.selectionCriteria"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlSelectionCriteria`](#aws-cdk-sdk.s3control.S3ControlSelectionCriteria)

---

### S3ControlPublicAccessBlockConfiguration <a name="aws-cdk-sdk.s3control.S3ControlPublicAccessBlockConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlPublicAccessBlockConfiguration: s3control.S3ControlPublicAccessBlockConfiguration = { ... }
```

##### `blockPublicAcls`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlPublicAccessBlockConfiguration.property.blockPublicAcls"></a>

- *Type:* `boolean`

---

##### `blockPublicPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlPublicAccessBlockConfiguration.property.blockPublicPolicy"></a>

- *Type:* `boolean`

---

##### `ignorePublicAcls`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlPublicAccessBlockConfiguration.property.ignorePublicAcls"></a>

- *Type:* `boolean`

---

##### `restrictPublicBuckets`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlPublicAccessBlockConfiguration.property.restrictPublicBuckets"></a>

- *Type:* `boolean`

---

### S3ControlPutAccessPointPolicyRequest <a name="aws-cdk-sdk.s3control.S3ControlPutAccessPointPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlPutAccessPointPolicyRequest: s3control.S3ControlPutAccessPointPolicyRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlPutAccessPointPolicyRequest.property.accountId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlPutAccessPointPolicyRequest.property.name"></a>

- *Type:* `string`

---

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlPutAccessPointPolicyRequest.property.policy"></a>

- *Type:* `string`

---

### S3ControlPutBucketLifecycleConfigurationRequest <a name="aws-cdk-sdk.s3control.S3ControlPutBucketLifecycleConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlPutBucketLifecycleConfigurationRequest: s3control.S3ControlPutBucketLifecycleConfigurationRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlPutBucketLifecycleConfigurationRequest.property.accountId"></a>

- *Type:* `string`

---

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlPutBucketLifecycleConfigurationRequest.property.bucket"></a>

- *Type:* `string`

---

##### `lifecycleConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlPutBucketLifecycleConfigurationRequest.property.lifecycleConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlLifecycleConfiguration`](#aws-cdk-sdk.s3control.S3ControlLifecycleConfiguration)

---

### S3ControlPutBucketPolicyRequest <a name="aws-cdk-sdk.s3control.S3ControlPutBucketPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlPutBucketPolicyRequest: s3control.S3ControlPutBucketPolicyRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlPutBucketPolicyRequest.property.accountId"></a>

- *Type:* `string`

---

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlPutBucketPolicyRequest.property.bucket"></a>

- *Type:* `string`

---

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlPutBucketPolicyRequest.property.policy"></a>

- *Type:* `string`

---

##### `confirmRemoveSelfBucketAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlPutBucketPolicyRequest.property.confirmRemoveSelfBucketAccess"></a>

- *Type:* `boolean`

---

### S3ControlPutBucketTaggingRequest <a name="aws-cdk-sdk.s3control.S3ControlPutBucketTaggingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlPutBucketTaggingRequest: s3control.S3ControlPutBucketTaggingRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlPutBucketTaggingRequest.property.accountId"></a>

- *Type:* `string`

---

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlPutBucketTaggingRequest.property.bucket"></a>

- *Type:* `string`

---

##### `tagging`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlPutBucketTaggingRequest.property.tagging"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlTagging`](#aws-cdk-sdk.s3control.S3ControlTagging)

---

### S3ControlPutJobTaggingRequest <a name="aws-cdk-sdk.s3control.S3ControlPutJobTaggingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlPutJobTaggingRequest: s3control.S3ControlPutJobTaggingRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlPutJobTaggingRequest.property.accountId"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlPutJobTaggingRequest.property.jobId"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlPutJobTaggingRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3Tag`](#aws-cdk-sdk.s3control.S3ControlS3Tag)[]

---

### S3ControlPutJobTaggingResult <a name="aws-cdk-sdk.s3control.S3ControlPutJobTaggingResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlPutJobTaggingResult: s3control.S3ControlPutJobTaggingResult = { ... }
```

### S3ControlPutPublicAccessBlockRequest <a name="aws-cdk-sdk.s3control.S3ControlPutPublicAccessBlockRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlPutPublicAccessBlockRequest: s3control.S3ControlPutPublicAccessBlockRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlPutPublicAccessBlockRequest.property.accountId"></a>

- *Type:* `string`

---

##### `publicAccessBlockConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlPutPublicAccessBlockRequest.property.publicAccessBlockConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlPublicAccessBlockConfiguration`](#aws-cdk-sdk.s3control.S3ControlPublicAccessBlockConfiguration)

---

### S3ControlPutStorageLensConfigurationRequest <a name="aws-cdk-sdk.s3control.S3ControlPutStorageLensConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlPutStorageLensConfigurationRequest: s3control.S3ControlPutStorageLensConfigurationRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlPutStorageLensConfigurationRequest.property.accountId"></a>

- *Type:* `string`

---

##### `configId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlPutStorageLensConfigurationRequest.property.configId"></a>

- *Type:* `string`

---

##### `storageLensConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlPutStorageLensConfigurationRequest.property.storageLensConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlStorageLensConfiguration`](#aws-cdk-sdk.s3control.S3ControlStorageLensConfiguration)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlPutStorageLensConfigurationRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlStorageLensTag`](#aws-cdk-sdk.s3control.S3ControlStorageLensTag)[]

---

### S3ControlPutStorageLensConfigurationTaggingRequest <a name="aws-cdk-sdk.s3control.S3ControlPutStorageLensConfigurationTaggingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlPutStorageLensConfigurationTaggingRequest: s3control.S3ControlPutStorageLensConfigurationTaggingRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlPutStorageLensConfigurationTaggingRequest.property.accountId"></a>

- *Type:* `string`

---

##### `configId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlPutStorageLensConfigurationTaggingRequest.property.configId"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlPutStorageLensConfigurationTaggingRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlStorageLensTag`](#aws-cdk-sdk.s3control.S3ControlStorageLensTag)[]

---

### S3ControlPutStorageLensConfigurationTaggingResult <a name="aws-cdk-sdk.s3control.S3ControlPutStorageLensConfigurationTaggingResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlPutStorageLensConfigurationTaggingResult: s3control.S3ControlPutStorageLensConfigurationTaggingResult = { ... }
```

### S3ControlRegionalBucket <a name="aws-cdk-sdk.s3control.S3ControlRegionalBucket"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlRegionalBucket: s3control.S3ControlRegionalBucket = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlRegionalBucket.property.bucket"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlRegionalBucket.property.creationDate"></a>

- *Type:* `string`

---

##### `publicAccessBlockEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlRegionalBucket.property.publicAccessBlockEnabled"></a>

- *Type:* `boolean`

---

##### `bucketArn`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlRegionalBucket.property.bucketArn"></a>

- *Type:* `string`

---

##### `outpostId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlRegionalBucket.property.outpostId"></a>

- *Type:* `string`

---

### S3ControlS3AccessControlList <a name="aws-cdk-sdk.s3control.S3ControlS3AccessControlList"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlS3AccessControlList: s3control.S3ControlS3AccessControlList = { ... }
```

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3AccessControlList.property.owner"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3ObjectOwner`](#aws-cdk-sdk.s3control.S3ControlS3ObjectOwner)

---

##### `grants`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3AccessControlList.property.grants"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3Grant`](#aws-cdk-sdk.s3control.S3ControlS3Grant)[]

---

### S3ControlS3AccessControlPolicy <a name="aws-cdk-sdk.s3control.S3ControlS3AccessControlPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlS3AccessControlPolicy: s3control.S3ControlS3AccessControlPolicy = { ... }
```

##### `accessControlList`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3AccessControlPolicy.property.accessControlList"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3AccessControlList`](#aws-cdk-sdk.s3control.S3ControlS3AccessControlList)

---

##### `cannedAccessControlList`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3AccessControlPolicy.property.cannedAccessControlList"></a>

- *Type:* `string`

---

### S3ControlS3BucketDestination <a name="aws-cdk-sdk.s3control.S3ControlS3BucketDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlS3BucketDestination: s3control.S3ControlS3BucketDestination = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3BucketDestination.property.accountId"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3BucketDestination.property.arn"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3BucketDestination.property.format"></a>

- *Type:* `string`

---

##### `outputSchemaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3BucketDestination.property.outputSchemaVersion"></a>

- *Type:* `string`

---

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3BucketDestination.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlStorageLensDataExportEncryption`](#aws-cdk-sdk.s3control.S3ControlStorageLensDataExportEncryption)

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3BucketDestination.property.prefix"></a>

- *Type:* `string`

---

### S3ControlS3CopyObjectOperation <a name="aws-cdk-sdk.s3control.S3ControlS3CopyObjectOperation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlS3CopyObjectOperation: s3control.S3ControlS3CopyObjectOperation = { ... }
```

##### `accessControlGrants`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3CopyObjectOperation.property.accessControlGrants"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3Grant`](#aws-cdk-sdk.s3control.S3ControlS3Grant)[]

---

##### `cannedAccessControlList`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3CopyObjectOperation.property.cannedAccessControlList"></a>

- *Type:* `string`

---

##### `metadataDirective`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3CopyObjectOperation.property.metadataDirective"></a>

- *Type:* `string`

---

##### `modifiedSinceConstraint`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3CopyObjectOperation.property.modifiedSinceConstraint"></a>

- *Type:* `string`

---

##### `newObjectMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3CopyObjectOperation.property.newObjectMetadata"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3ObjectMetadata`](#aws-cdk-sdk.s3control.S3ControlS3ObjectMetadata)

---

##### `newObjectTagging`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3CopyObjectOperation.property.newObjectTagging"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3Tag`](#aws-cdk-sdk.s3control.S3ControlS3Tag)[]

---

##### `objectLockLegalHoldStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3CopyObjectOperation.property.objectLockLegalHoldStatus"></a>

- *Type:* `string`

---

##### `objectLockMode`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3CopyObjectOperation.property.objectLockMode"></a>

- *Type:* `string`

---

##### `objectLockRetainUntilDate`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3CopyObjectOperation.property.objectLockRetainUntilDate"></a>

- *Type:* `string`

---

##### `redirectLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3CopyObjectOperation.property.redirectLocation"></a>

- *Type:* `string`

---

##### `requesterPays`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3CopyObjectOperation.property.requesterPays"></a>

- *Type:* `boolean`

---

##### `sseAwsKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3CopyObjectOperation.property.sseAwsKmsKeyId"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3CopyObjectOperation.property.storageClass"></a>

- *Type:* `string`

---

##### `targetKeyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3CopyObjectOperation.property.targetKeyPrefix"></a>

- *Type:* `string`

---

##### `targetResource`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3CopyObjectOperation.property.targetResource"></a>

- *Type:* `string`

---

##### `unModifiedSinceConstraint`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3CopyObjectOperation.property.unModifiedSinceConstraint"></a>

- *Type:* `string`

---

### S3ControlS3Grant <a name="aws-cdk-sdk.s3control.S3ControlS3Grant"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlS3Grant: s3control.S3ControlS3Grant = { ... }
```

##### `grantee`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3Grant.property.grantee"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3Grantee`](#aws-cdk-sdk.s3control.S3ControlS3Grantee)

---

##### `permission`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3Grant.property.permission"></a>

- *Type:* `string`

---

### S3ControlS3Grantee <a name="aws-cdk-sdk.s3control.S3ControlS3Grantee"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlS3Grantee: s3control.S3ControlS3Grantee = { ... }
```

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3Grantee.property.displayName"></a>

- *Type:* `string`

---

##### `identifier`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3Grantee.property.identifier"></a>

- *Type:* `string`

---

##### `typeIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3Grantee.property.typeIdentifier"></a>

- *Type:* `string`

---

### S3ControlS3InitiateRestoreObjectOperation <a name="aws-cdk-sdk.s3control.S3ControlS3InitiateRestoreObjectOperation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlS3InitiateRestoreObjectOperation: s3control.S3ControlS3InitiateRestoreObjectOperation = { ... }
```

##### `expirationInDays`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3InitiateRestoreObjectOperation.property.expirationInDays"></a>

- *Type:* `number`

---

##### `glacierJobTier`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3InitiateRestoreObjectOperation.property.glacierJobTier"></a>

- *Type:* `string`

---

### S3ControlS3ObjectLockLegalHold <a name="aws-cdk-sdk.s3control.S3ControlS3ObjectLockLegalHold"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlS3ObjectLockLegalHold: s3control.S3ControlS3ObjectLockLegalHold = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3ObjectLockLegalHold.property.status"></a>

- *Type:* `string`

---

### S3ControlS3ObjectMetadata <a name="aws-cdk-sdk.s3control.S3ControlS3ObjectMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlS3ObjectMetadata: s3control.S3ControlS3ObjectMetadata = { ... }
```

##### `cacheControl`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3ObjectMetadata.property.cacheControl"></a>

- *Type:* `string`

---

##### `contentDisposition`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3ObjectMetadata.property.contentDisposition"></a>

- *Type:* `string`

---

##### `contentEncoding`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3ObjectMetadata.property.contentEncoding"></a>

- *Type:* `string`

---

##### `contentLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3ObjectMetadata.property.contentLanguage"></a>

- *Type:* `string`

---

##### `contentLength`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3ObjectMetadata.property.contentLength"></a>

- *Type:* `number`

---

##### `contentMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3ObjectMetadata.property.contentMd5"></a>

- *Type:* `string`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3ObjectMetadata.property.contentType"></a>

- *Type:* `string`

---

##### `httpExpiresDate`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3ObjectMetadata.property.httpExpiresDate"></a>

- *Type:* `string`

---

##### `requesterCharged`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3ObjectMetadata.property.requesterCharged"></a>

- *Type:* `boolean`

---

##### `sseAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3ObjectMetadata.property.sseAlgorithm"></a>

- *Type:* `string`

---

##### `userMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3ObjectMetadata.property.userMetadata"></a>

- *Type:* {[ key: string ]: `string`}

---

### S3ControlS3ObjectOwner <a name="aws-cdk-sdk.s3control.S3ControlS3ObjectOwner"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlS3ObjectOwner: s3control.S3ControlS3ObjectOwner = { ... }
```

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3ObjectOwner.property.displayName"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3ObjectOwner.property.id"></a>

- *Type:* `string`

---

### S3ControlS3Retention <a name="aws-cdk-sdk.s3control.S3ControlS3Retention"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlS3Retention: s3control.S3ControlS3Retention = { ... }
```

##### `mode`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3Retention.property.mode"></a>

- *Type:* `string`

---

##### `retainUntilDate`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3Retention.property.retainUntilDate"></a>

- *Type:* `string`

---

### S3ControlS3SetObjectAclOperation <a name="aws-cdk-sdk.s3control.S3ControlS3SetObjectAclOperation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlS3SetObjectAclOperation: s3control.S3ControlS3SetObjectAclOperation = { ... }
```

##### `accessControlPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3SetObjectAclOperation.property.accessControlPolicy"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3AccessControlPolicy`](#aws-cdk-sdk.s3control.S3ControlS3AccessControlPolicy)

---

### S3ControlS3SetObjectLegalHoldOperation <a name="aws-cdk-sdk.s3control.S3ControlS3SetObjectLegalHoldOperation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlS3SetObjectLegalHoldOperation: s3control.S3ControlS3SetObjectLegalHoldOperation = { ... }
```

##### `legalHold`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3SetObjectLegalHoldOperation.property.legalHold"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3ObjectLockLegalHold`](#aws-cdk-sdk.s3control.S3ControlS3ObjectLockLegalHold)

---

### S3ControlS3SetObjectRetentionOperation <a name="aws-cdk-sdk.s3control.S3ControlS3SetObjectRetentionOperation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlS3SetObjectRetentionOperation: s3control.S3ControlS3SetObjectRetentionOperation = { ... }
```

##### `retention`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3SetObjectRetentionOperation.property.retention"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3Retention`](#aws-cdk-sdk.s3control.S3ControlS3Retention)

---

##### `bypassGovernanceRetention`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3SetObjectRetentionOperation.property.bypassGovernanceRetention"></a>

- *Type:* `boolean`

---

### S3ControlS3SetObjectTaggingOperation <a name="aws-cdk-sdk.s3control.S3ControlS3SetObjectTaggingOperation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlS3SetObjectTaggingOperation: s3control.S3ControlS3SetObjectTaggingOperation = { ... }
```

##### `tagSet`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3SetObjectTaggingOperation.property.tagSet"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3Tag`](#aws-cdk-sdk.s3control.S3ControlS3Tag)[]

---

### S3ControlS3Tag <a name="aws-cdk-sdk.s3control.S3ControlS3Tag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlS3Tag: s3control.S3ControlS3Tag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3Tag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlS3Tag.property.value"></a>

- *Type:* `string`

---

### S3ControlSelectionCriteria <a name="aws-cdk-sdk.s3control.S3ControlSelectionCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlSelectionCriteria: s3control.S3ControlSelectionCriteria = { ... }
```

##### `delimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlSelectionCriteria.property.delimiter"></a>

- *Type:* `string`

---

##### `maxDepth`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlSelectionCriteria.property.maxDepth"></a>

- *Type:* `number`

---

##### `minStorageBytesPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlSelectionCriteria.property.minStorageBytesPercentage"></a>

- *Type:* `number`

---

### S3ControlSsekms <a name="aws-cdk-sdk.s3control.S3ControlSsekms"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlSsekms: s3control.S3ControlSsekms = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlSsekms.property.keyId"></a>

- *Type:* `string`

---

### S3ControlSses3 <a name="aws-cdk-sdk.s3control.S3ControlSses3"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlSses3: s3control.S3ControlSses3 = { ... }
```

### S3ControlStorageLensAwsOrg <a name="aws-cdk-sdk.s3control.S3ControlStorageLensAwsOrg"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlStorageLensAwsOrg: s3control.S3ControlStorageLensAwsOrg = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlStorageLensAwsOrg.property.arn"></a>

- *Type:* `string`

---

### S3ControlStorageLensConfiguration <a name="aws-cdk-sdk.s3control.S3ControlStorageLensConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlStorageLensConfiguration: s3control.S3ControlStorageLensConfiguration = { ... }
```

##### `accountLevel`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlStorageLensConfiguration.property.accountLevel"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlAccountLevel`](#aws-cdk-sdk.s3control.S3ControlAccountLevel)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlStorageLensConfiguration.property.id"></a>

- *Type:* `string`

---

##### `isEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlStorageLensConfiguration.property.isEnabled"></a>

- *Type:* `boolean`

---

##### `awsOrg`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlStorageLensConfiguration.property.awsOrg"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlStorageLensAwsOrg`](#aws-cdk-sdk.s3control.S3ControlStorageLensAwsOrg)

---

##### `dataExport`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlStorageLensConfiguration.property.dataExport"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlStorageLensDataExport`](#aws-cdk-sdk.s3control.S3ControlStorageLensDataExport)

---

##### `exclude`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlStorageLensConfiguration.property.exclude"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlExclude`](#aws-cdk-sdk.s3control.S3ControlExclude)

---

##### `include`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlStorageLensConfiguration.property.include"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlInclude`](#aws-cdk-sdk.s3control.S3ControlInclude)

---

##### `storageLensArn`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlStorageLensConfiguration.property.storageLensArn"></a>

- *Type:* `string`

---

### S3ControlStorageLensDataExport <a name="aws-cdk-sdk.s3control.S3ControlStorageLensDataExport"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlStorageLensDataExport: s3control.S3ControlStorageLensDataExport = { ... }
```

##### `s3BucketDestination`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlStorageLensDataExport.property.s3BucketDestination"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3BucketDestination`](#aws-cdk-sdk.s3control.S3ControlS3BucketDestination)

---

### S3ControlStorageLensDataExportEncryption <a name="aws-cdk-sdk.s3control.S3ControlStorageLensDataExportEncryption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlStorageLensDataExportEncryption: s3control.S3ControlStorageLensDataExportEncryption = { ... }
```

##### `ssekms`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlStorageLensDataExportEncryption.property.ssekms"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlSsekms`](#aws-cdk-sdk.s3control.S3ControlSsekms)

---

##### `sses3`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlStorageLensDataExportEncryption.property.sses3"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlSses3`](#aws-cdk-sdk.s3control.S3ControlSses3)

---

### S3ControlStorageLensTag <a name="aws-cdk-sdk.s3control.S3ControlStorageLensTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlStorageLensTag: s3control.S3ControlStorageLensTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlStorageLensTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlStorageLensTag.property.value"></a>

- *Type:* `string`

---

### S3ControlTagging <a name="aws-cdk-sdk.s3control.S3ControlTagging"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlTagging: s3control.S3ControlTagging = { ... }
```

##### `tagSet`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlTagging.property.tagSet"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3Tag`](#aws-cdk-sdk.s3control.S3ControlS3Tag)[]

---

### S3ControlTransition <a name="aws-cdk-sdk.s3control.S3ControlTransition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlTransition: s3control.S3ControlTransition = { ... }
```

##### `date`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlTransition.property.date"></a>

- *Type:* `string`

---

##### `days`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlTransition.property.days"></a>

- *Type:* `number`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlTransition.property.storageClass"></a>

- *Type:* `string`

---

### S3ControlUpdateJobPriorityRequest <a name="aws-cdk-sdk.s3control.S3ControlUpdateJobPriorityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlUpdateJobPriorityRequest: s3control.S3ControlUpdateJobPriorityRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlUpdateJobPriorityRequest.property.accountId"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlUpdateJobPriorityRequest.property.jobId"></a>

- *Type:* `string`

---

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlUpdateJobPriorityRequest.property.priority"></a>

- *Type:* `number`

---

### S3ControlUpdateJobPriorityResult <a name="aws-cdk-sdk.s3control.S3ControlUpdateJobPriorityResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlUpdateJobPriorityResult: s3control.S3ControlUpdateJobPriorityResult = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlUpdateJobPriorityResult.property.jobId"></a>

- *Type:* `string`

---

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlUpdateJobPriorityResult.property.priority"></a>

- *Type:* `number`

---

### S3ControlUpdateJobStatusRequest <a name="aws-cdk-sdk.s3control.S3ControlUpdateJobStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlUpdateJobStatusRequest: s3control.S3ControlUpdateJobStatusRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlUpdateJobStatusRequest.property.accountId"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlUpdateJobStatusRequest.property.jobId"></a>

- *Type:* `string`

---

##### `requestedJobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlUpdateJobStatusRequest.property.requestedJobStatus"></a>

- *Type:* `string`

---

##### `statusUpdateReason`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlUpdateJobStatusRequest.property.statusUpdateReason"></a>

- *Type:* `string`

---

### S3ControlUpdateJobStatusResult <a name="aws-cdk-sdk.s3control.S3ControlUpdateJobStatusResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlUpdateJobStatusResult: s3control.S3ControlUpdateJobStatusResult = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlUpdateJobStatusResult.property.jobId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlUpdateJobStatusResult.property.status"></a>

- *Type:* `string`

---

##### `statusUpdateReason`<sup>Optional</sup> <a name="aws-cdk-sdk.s3control.S3ControlUpdateJobStatusResult.property.statusUpdateReason"></a>

- *Type:* `string`

---

### S3ControlVpcConfiguration <a name="aws-cdk-sdk.s3control.S3ControlVpcConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

const s3ControlVpcConfiguration: s3control.S3ControlVpcConfiguration = { ... }
```

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlVpcConfiguration.property.vpcId"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### S3ControlResponsesCreateAccessPoint <a name="aws-cdk-sdk.s3control.S3ControlResponsesCreateAccessPoint"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesCreateAccessPoint.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesCreateAccessPoint(__scope: Construct, __resources: string[], __input: S3ControlCreateAccessPointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesCreateAccessPoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesCreateAccessPoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesCreateAccessPoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlCreateAccessPointRequest`](#aws-cdk-sdk.s3control.S3ControlCreateAccessPointRequest)

---



#### Properties <a name="Properties"></a>

##### `accessPointArn`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesCreateAccessPoint.property.accessPointArn"></a>

- *Type:* `string`

---


### S3ControlResponsesCreateBucket <a name="aws-cdk-sdk.s3control.S3ControlResponsesCreateBucket"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesCreateBucket.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesCreateBucket(__scope: Construct, __resources: string[], __input: S3ControlCreateBucketRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesCreateBucket.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesCreateBucket.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesCreateBucket.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlCreateBucketRequest`](#aws-cdk-sdk.s3control.S3ControlCreateBucketRequest)

---



#### Properties <a name="Properties"></a>

##### `bucketArn`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesCreateBucket.property.bucketArn"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesCreateBucket.property.location"></a>

- *Type:* `string`

---


### S3ControlResponsesCreateJob <a name="aws-cdk-sdk.s3control.S3ControlResponsesCreateJob"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesCreateJob.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesCreateJob(__scope: Construct, __resources: string[], __input: S3ControlCreateJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesCreateJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesCreateJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesCreateJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlCreateJobRequest`](#aws-cdk-sdk.s3control.S3ControlCreateJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesCreateJob.property.jobId"></a>

- *Type:* `string`

---


### S3ControlResponsesDescribeJob <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJob"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJob.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesDescribeJob(__scope: Construct, __resources: string[], __input: S3ControlDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDescribeJobRequest`](#aws-cdk-sdk.s3control.S3ControlDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `job`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJob.property.job"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJob`](#aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJob)

---


### S3ControlResponsesDescribeJobJob <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJob"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJob.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesDescribeJobJob(__scope: Construct, __resources: string[], __input: S3ControlDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDescribeJobRequest`](#aws-cdk-sdk.s3control.S3ControlDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `confirmationRequired`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJob.property.confirmationRequired"></a>

- *Type:* `boolean`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJob.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJob.property.description"></a>

- *Type:* `string`

---

##### `failureReasons`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJob.property.failureReasons"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlJobFailure`](#aws-cdk-sdk.s3control.S3ControlJobFailure)[]

---

##### `jobArn`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJob.property.jobArn"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJob.property.jobId"></a>

- *Type:* `string`

---

##### `manifest`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJob.property.manifest"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifest`](#aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifest)

---

##### `operation`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJob.property.operation"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperation`](#aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperation)

---

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJob.property.priority"></a>

- *Type:* `number`

---

##### `progressSummary`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJob.property.progressSummary"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobProgressSummary`](#aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobProgressSummary)

---

##### `report`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJob.property.report"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobReport`](#aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobReport)

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJob.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJob.property.status"></a>

- *Type:* `string`

---

##### `statusUpdateReason`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJob.property.statusUpdateReason"></a>

- *Type:* `string`

---

##### `suspendedCause`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJob.property.suspendedCause"></a>

- *Type:* `string`

---

##### `suspendedDate`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJob.property.suspendedDate"></a>

- *Type:* `string`

---

##### `terminationDate`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJob.property.terminationDate"></a>

- *Type:* `string`

---


### S3ControlResponsesDescribeJobJobManifest <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifest"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifest.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesDescribeJobJobManifest(__scope: Construct, __resources: string[], __input: S3ControlDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDescribeJobRequest`](#aws-cdk-sdk.s3control.S3ControlDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifest.property.location"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifestLocation`](#aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifestLocation)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifest.property.spec"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifestSpec`](#aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifestSpec)

---


### S3ControlResponsesDescribeJobJobManifestLocation <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifestLocation"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifestLocation.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesDescribeJobJobManifestLocation(__scope: Construct, __resources: string[], __input: S3ControlDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifestLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifestLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifestLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDescribeJobRequest`](#aws-cdk-sdk.s3control.S3ControlDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `eTag`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifestLocation.property.eTag"></a>

- *Type:* `string`

---

##### `objectArn`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifestLocation.property.objectArn"></a>

- *Type:* `string`

---

##### `objectVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifestLocation.property.objectVersionId"></a>

- *Type:* `string`

---


### S3ControlResponsesDescribeJobJobManifestSpec <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifestSpec"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifestSpec.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesDescribeJobJobManifestSpec(__scope: Construct, __resources: string[], __input: S3ControlDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifestSpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifestSpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifestSpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDescribeJobRequest`](#aws-cdk-sdk.s3control.S3ControlDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `fields`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifestSpec.property.fields"></a>

- *Type:* `string`[]

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobManifestSpec.property.format"></a>

- *Type:* `string`

---


### S3ControlResponsesDescribeJobJobOperation <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperation"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperation.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesDescribeJobJobOperation(__scope: Construct, __resources: string[], __input: S3ControlDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDescribeJobRequest`](#aws-cdk-sdk.s3control.S3ControlDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `lambdaInvoke`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperation.property.lambdaInvoke"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationLambdaInvoke`](#aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationLambdaInvoke)

---

##### `s3InitiateRestoreObject`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperation.property.s3InitiateRestoreObject"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3InitiateRestoreObject`](#aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3InitiateRestoreObject)

---

##### `s3PutObjectAcl`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperation.property.s3PutObjectAcl"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAcl`](#aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAcl)

---

##### `s3PutObjectCopy`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperation.property.s3PutObjectCopy"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy`](#aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy)

---

##### `s3PutObjectLegalHold`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperation.property.s3PutObjectLegalHold"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectLegalHold`](#aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectLegalHold)

---

##### `s3PutObjectRetention`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperation.property.s3PutObjectRetention"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectRetention`](#aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectRetention)

---

##### `s3PutObjectTagging`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperation.property.s3PutObjectTagging"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectTagging`](#aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectTagging)

---


### S3ControlResponsesDescribeJobJobOperationLambdaInvoke <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationLambdaInvoke"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationLambdaInvoke.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesDescribeJobJobOperationLambdaInvoke(__scope: Construct, __resources: string[], __input: S3ControlDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationLambdaInvoke.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationLambdaInvoke.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationLambdaInvoke.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDescribeJobRequest`](#aws-cdk-sdk.s3control.S3ControlDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `functionArn`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationLambdaInvoke.property.functionArn"></a>

- *Type:* `string`

---


### S3ControlResponsesDescribeJobJobOperationS3InitiateRestoreObject <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3InitiateRestoreObject"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3InitiateRestoreObject.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesDescribeJobJobOperationS3InitiateRestoreObject(__scope: Construct, __resources: string[], __input: S3ControlDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3InitiateRestoreObject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3InitiateRestoreObject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3InitiateRestoreObject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDescribeJobRequest`](#aws-cdk-sdk.s3control.S3ControlDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `expirationInDays`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3InitiateRestoreObject.property.expirationInDays"></a>

- *Type:* `number`

---

##### `glacierJobTier`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3InitiateRestoreObject.property.glacierJobTier"></a>

- *Type:* `string`

---


### S3ControlResponsesDescribeJobJobOperationS3PutObjectAcl <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAcl"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAcl.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAcl(__scope: Construct, __resources: string[], __input: S3ControlDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAcl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAcl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAcl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDescribeJobRequest`](#aws-cdk-sdk.s3control.S3ControlDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `accessControlPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAcl.property.accessControlPolicy"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicy`](#aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicy)

---


### S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicy <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicy.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicy(__scope: Construct, __resources: string[], __input: S3ControlDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDescribeJobRequest`](#aws-cdk-sdk.s3control.S3ControlDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `accessControlList`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicy.property.accessControlList"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlList`](#aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlList)

---

##### `cannedAccessControlList`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicy.property.cannedAccessControlList"></a>

- *Type:* `string`

---


### S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlList <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlList"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlList.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlList(__scope: Construct, __resources: string[], __input: S3ControlDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlList.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlList.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlList.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDescribeJobRequest`](#aws-cdk-sdk.s3control.S3ControlDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `grants`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlList.property.grants"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3Grant`](#aws-cdk-sdk.s3control.S3ControlS3Grant)[]

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlList.property.owner"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlListOwner`](#aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlListOwner)

---


### S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlListOwner <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlListOwner"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlListOwner.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlListOwner(__scope: Construct, __resources: string[], __input: S3ControlDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlListOwner.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlListOwner.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlListOwner.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDescribeJobRequest`](#aws-cdk-sdk.s3control.S3ControlDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlListOwner.property.displayName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlListOwner.property.id"></a>

- *Type:* `string`

---


### S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy(__scope: Construct, __resources: string[], __input: S3ControlDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDescribeJobRequest`](#aws-cdk-sdk.s3control.S3ControlDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `accessControlGrants`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy.property.accessControlGrants"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3Grant`](#aws-cdk-sdk.s3control.S3ControlS3Grant)[]

---

##### `cannedAccessControlList`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy.property.cannedAccessControlList"></a>

- *Type:* `string`

---

##### `metadataDirective`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy.property.metadataDirective"></a>

- *Type:* `string`

---

##### `modifiedSinceConstraint`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy.property.modifiedSinceConstraint"></a>

- *Type:* `string`

---

##### `newObjectMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy.property.newObjectMetadata"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopyNewObjectMetadata`](#aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopyNewObjectMetadata)

---

##### `newObjectTagging`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy.property.newObjectTagging"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3Tag`](#aws-cdk-sdk.s3control.S3ControlS3Tag)[]

---

##### `objectLockLegalHoldStatus`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy.property.objectLockLegalHoldStatus"></a>

- *Type:* `string`

---

##### `objectLockMode`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy.property.objectLockMode"></a>

- *Type:* `string`

---

##### `objectLockRetainUntilDate`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy.property.objectLockRetainUntilDate"></a>

- *Type:* `string`

---

##### `redirectLocation`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy.property.redirectLocation"></a>

- *Type:* `string`

---

##### `requesterPays`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy.property.requesterPays"></a>

- *Type:* `boolean`

---

##### `sseAwsKmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy.property.sseAwsKmsKeyId"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy.property.storageClass"></a>

- *Type:* `string`

---

##### `targetKeyPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy.property.targetKeyPrefix"></a>

- *Type:* `string`

---

##### `targetResource`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy.property.targetResource"></a>

- *Type:* `string`

---

##### `unModifiedSinceConstraint`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy.property.unModifiedSinceConstraint"></a>

- *Type:* `string`

---


### S3ControlResponsesDescribeJobJobOperationS3PutObjectCopyNewObjectMetadata <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopyNewObjectMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopyNewObjectMetadata.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopyNewObjectMetadata(__scope: Construct, __resources: string[], __input: S3ControlDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopyNewObjectMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopyNewObjectMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopyNewObjectMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDescribeJobRequest`](#aws-cdk-sdk.s3control.S3ControlDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `cacheControl`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopyNewObjectMetadata.property.cacheControl"></a>

- *Type:* `string`

---

##### `contentDisposition`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopyNewObjectMetadata.property.contentDisposition"></a>

- *Type:* `string`

---

##### `contentEncoding`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopyNewObjectMetadata.property.contentEncoding"></a>

- *Type:* `string`

---

##### `contentLanguage`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopyNewObjectMetadata.property.contentLanguage"></a>

- *Type:* `string`

---

##### `contentLength`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopyNewObjectMetadata.property.contentLength"></a>

- *Type:* `number`

---

##### `contentMd5`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopyNewObjectMetadata.property.contentMd5"></a>

- *Type:* `string`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopyNewObjectMetadata.property.contentType"></a>

- *Type:* `string`

---

##### `httpExpiresDate`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopyNewObjectMetadata.property.httpExpiresDate"></a>

- *Type:* `string`

---

##### `requesterCharged`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopyNewObjectMetadata.property.requesterCharged"></a>

- *Type:* `boolean`

---

##### `sseAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopyNewObjectMetadata.property.sseAlgorithm"></a>

- *Type:* `string`

---

##### `userMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectCopyNewObjectMetadata.property.userMetadata"></a>

- *Type:* {[ key: string ]: `string`}

---


### S3ControlResponsesDescribeJobJobOperationS3PutObjectLegalHold <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectLegalHold"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectLegalHold.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectLegalHold(__scope: Construct, __resources: string[], __input: S3ControlDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectLegalHold.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectLegalHold.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectLegalHold.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDescribeJobRequest`](#aws-cdk-sdk.s3control.S3ControlDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `legalHold`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectLegalHold.property.legalHold"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectLegalHoldLegalHold`](#aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectLegalHoldLegalHold)

---


### S3ControlResponsesDescribeJobJobOperationS3PutObjectLegalHoldLegalHold <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectLegalHoldLegalHold"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectLegalHoldLegalHold.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectLegalHoldLegalHold(__scope: Construct, __resources: string[], __input: S3ControlDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectLegalHoldLegalHold.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectLegalHoldLegalHold.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectLegalHoldLegalHold.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDescribeJobRequest`](#aws-cdk-sdk.s3control.S3ControlDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectLegalHoldLegalHold.property.status"></a>

- *Type:* `string`

---


### S3ControlResponsesDescribeJobJobOperationS3PutObjectRetention <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectRetention"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectRetention.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectRetention(__scope: Construct, __resources: string[], __input: S3ControlDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectRetention.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectRetention.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectRetention.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDescribeJobRequest`](#aws-cdk-sdk.s3control.S3ControlDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `bypassGovernanceRetention`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectRetention.property.bypassGovernanceRetention"></a>

- *Type:* `boolean`

---

##### `retention`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectRetention.property.retention"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectRetentionRetention`](#aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectRetentionRetention)

---


### S3ControlResponsesDescribeJobJobOperationS3PutObjectRetentionRetention <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectRetentionRetention"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectRetentionRetention.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectRetentionRetention(__scope: Construct, __resources: string[], __input: S3ControlDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectRetentionRetention.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectRetentionRetention.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectRetentionRetention.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDescribeJobRequest`](#aws-cdk-sdk.s3control.S3ControlDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectRetentionRetention.property.mode"></a>

- *Type:* `string`

---

##### `retainUntilDate`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectRetentionRetention.property.retainUntilDate"></a>

- *Type:* `string`

---


### S3ControlResponsesDescribeJobJobOperationS3PutObjectTagging <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectTagging"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectTagging.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectTagging(__scope: Construct, __resources: string[], __input: S3ControlDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectTagging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectTagging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectTagging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDescribeJobRequest`](#aws-cdk-sdk.s3control.S3ControlDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `tagSet`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobOperationS3PutObjectTagging.property.tagSet"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3Tag`](#aws-cdk-sdk.s3control.S3ControlS3Tag)[]

---


### S3ControlResponsesDescribeJobJobProgressSummary <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobProgressSummary"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobProgressSummary.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesDescribeJobJobProgressSummary(__scope: Construct, __resources: string[], __input: S3ControlDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobProgressSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobProgressSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobProgressSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDescribeJobRequest`](#aws-cdk-sdk.s3control.S3ControlDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `numberOfTasksFailed`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobProgressSummary.property.numberOfTasksFailed"></a>

- *Type:* `number`

---

##### `numberOfTasksSucceeded`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobProgressSummary.property.numberOfTasksSucceeded"></a>

- *Type:* `number`

---

##### `totalNumberOfTasks`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobProgressSummary.property.totalNumberOfTasks"></a>

- *Type:* `number`

---


### S3ControlResponsesDescribeJobJobReport <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobReport"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobReport.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesDescribeJobJobReport(__scope: Construct, __resources: string[], __input: S3ControlDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobReport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobReport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobReport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlDescribeJobRequest`](#aws-cdk-sdk.s3control.S3ControlDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobReport.property.bucket"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobReport.property.enabled"></a>

- *Type:* `boolean`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobReport.property.format"></a>

- *Type:* `string`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobReport.property.prefix"></a>

- *Type:* `string`

---

##### `reportScope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesDescribeJobJobReport.property.reportScope"></a>

- *Type:* `string`

---


### S3ControlResponsesFetchAccessPoint <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPoint"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPoint.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchAccessPoint(__scope: Construct, __resources: string[], __input: S3ControlGetAccessPointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetAccessPointRequest`](#aws-cdk-sdk.s3control.S3ControlGetAccessPointRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPoint.property.bucket"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPoint.property.creationDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPoint.property.name"></a>

- *Type:* `string`

---

##### `networkOrigin`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPoint.property.networkOrigin"></a>

- *Type:* `string`

---

##### `publicAccessBlockConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPoint.property.publicAccessBlockConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPublicAccessBlockConfiguration`](#aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPublicAccessBlockConfiguration)

---

##### `vpcConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPoint.property.vpcConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointVpcConfiguration`](#aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointVpcConfiguration)

---


### S3ControlResponsesFetchAccessPointPolicy <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPolicy.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchAccessPointPolicy(__scope: Construct, __resources: string[], __input: S3ControlGetAccessPointPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetAccessPointPolicyRequest`](#aws-cdk-sdk.s3control.S3ControlGetAccessPointPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPolicy.property.policy"></a>

- *Type:* `string`

---


### S3ControlResponsesFetchAccessPointPolicyStatus <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPolicyStatus"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPolicyStatus.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchAccessPointPolicyStatus(__scope: Construct, __resources: string[], __input: S3ControlGetAccessPointPolicyStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPolicyStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPolicyStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPolicyStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetAccessPointPolicyStatusRequest`](#aws-cdk-sdk.s3control.S3ControlGetAccessPointPolicyStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `policyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPolicyStatus.property.policyStatus"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPolicyStatusPolicyStatus`](#aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPolicyStatusPolicyStatus)

---


### S3ControlResponsesFetchAccessPointPolicyStatusPolicyStatus <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPolicyStatusPolicyStatus"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPolicyStatusPolicyStatus.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchAccessPointPolicyStatusPolicyStatus(__scope: Construct, __resources: string[], __input: S3ControlGetAccessPointPolicyStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPolicyStatusPolicyStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPolicyStatusPolicyStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPolicyStatusPolicyStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetAccessPointPolicyStatusRequest`](#aws-cdk-sdk.s3control.S3ControlGetAccessPointPolicyStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `isPublic`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPolicyStatusPolicyStatus.property.isPublic"></a>

- *Type:* `boolean`

---


### S3ControlResponsesFetchAccessPointPublicAccessBlockConfiguration <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPublicAccessBlockConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPublicAccessBlockConfiguration.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchAccessPointPublicAccessBlockConfiguration(__scope: Construct, __resources: string[], __input: S3ControlGetAccessPointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPublicAccessBlockConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPublicAccessBlockConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPublicAccessBlockConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetAccessPointRequest`](#aws-cdk-sdk.s3control.S3ControlGetAccessPointRequest)

---



#### Properties <a name="Properties"></a>

##### `blockPublicAcls`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPublicAccessBlockConfiguration.property.blockPublicAcls"></a>

- *Type:* `boolean`

---

##### `blockPublicPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPublicAccessBlockConfiguration.property.blockPublicPolicy"></a>

- *Type:* `boolean`

---

##### `ignorePublicAcls`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPublicAccessBlockConfiguration.property.ignorePublicAcls"></a>

- *Type:* `boolean`

---

##### `restrictPublicBuckets`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointPublicAccessBlockConfiguration.property.restrictPublicBuckets"></a>

- *Type:* `boolean`

---


### S3ControlResponsesFetchAccessPointVpcConfiguration <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointVpcConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointVpcConfiguration.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchAccessPointVpcConfiguration(__scope: Construct, __resources: string[], __input: S3ControlGetAccessPointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointVpcConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointVpcConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointVpcConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetAccessPointRequest`](#aws-cdk-sdk.s3control.S3ControlGetAccessPointRequest)

---



#### Properties <a name="Properties"></a>

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchAccessPointVpcConfiguration.property.vpcId"></a>

- *Type:* `string`

---


### S3ControlResponsesFetchBucket <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchBucket"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchBucket.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchBucket(__scope: Construct, __resources: string[], __input: S3ControlGetBucketRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchBucket.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchBucket.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchBucket.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetBucketRequest`](#aws-cdk-sdk.s3control.S3ControlGetBucketRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchBucket.property.bucket"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchBucket.property.creationDate"></a>

- *Type:* `string`

---

##### `publicAccessBlockEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchBucket.property.publicAccessBlockEnabled"></a>

- *Type:* `boolean`

---


### S3ControlResponsesFetchBucketLifecycleConfiguration <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchBucketLifecycleConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchBucketLifecycleConfiguration.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchBucketLifecycleConfiguration(__scope: Construct, __resources: string[], __input: S3ControlGetBucketLifecycleConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchBucketLifecycleConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchBucketLifecycleConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchBucketLifecycleConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetBucketLifecycleConfigurationRequest`](#aws-cdk-sdk.s3control.S3ControlGetBucketLifecycleConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchBucketLifecycleConfiguration.property.rules"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlLifecycleRule`](#aws-cdk-sdk.s3control.S3ControlLifecycleRule)[]

---


### S3ControlResponsesFetchBucketPolicy <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchBucketPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchBucketPolicy.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchBucketPolicy(__scope: Construct, __resources: string[], __input: S3ControlGetBucketPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchBucketPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchBucketPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchBucketPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetBucketPolicyRequest`](#aws-cdk-sdk.s3control.S3ControlGetBucketPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchBucketPolicy.property.policy"></a>

- *Type:* `string`

---


### S3ControlResponsesFetchBucketTagging <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchBucketTagging"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchBucketTagging.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchBucketTagging(__scope: Construct, __resources: string[], __input: S3ControlGetBucketTaggingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchBucketTagging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchBucketTagging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchBucketTagging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetBucketTaggingRequest`](#aws-cdk-sdk.s3control.S3ControlGetBucketTaggingRequest)

---



#### Properties <a name="Properties"></a>

##### `tagSet`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchBucketTagging.property.tagSet"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3Tag`](#aws-cdk-sdk.s3control.S3ControlS3Tag)[]

---


### S3ControlResponsesFetchJobTagging <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchJobTagging"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchJobTagging.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchJobTagging(__scope: Construct, __resources: string[], __input: S3ControlGetJobTaggingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchJobTagging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchJobTagging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchJobTagging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetJobTaggingRequest`](#aws-cdk-sdk.s3control.S3ControlGetJobTaggingRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchJobTagging.property.tags"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlS3Tag`](#aws-cdk-sdk.s3control.S3ControlS3Tag)[]

---


### S3ControlResponsesFetchPublicAccessBlock <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchPublicAccessBlock"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchPublicAccessBlock.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchPublicAccessBlock(__scope: Construct, __resources: string[], __input: S3ControlGetPublicAccessBlockRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchPublicAccessBlock.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchPublicAccessBlock.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchPublicAccessBlock.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetPublicAccessBlockRequest`](#aws-cdk-sdk.s3control.S3ControlGetPublicAccessBlockRequest)

---



#### Properties <a name="Properties"></a>

##### `publicAccessBlockConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchPublicAccessBlock.property.publicAccessBlockConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration`](#aws-cdk-sdk.s3control.S3ControlResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration)

---


### S3ControlResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration(__scope: Construct, __resources: string[], __input: S3ControlGetPublicAccessBlockRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetPublicAccessBlockRequest`](#aws-cdk-sdk.s3control.S3ControlGetPublicAccessBlockRequest)

---



#### Properties <a name="Properties"></a>

##### `blockPublicAcls`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration.property.blockPublicAcls"></a>

- *Type:* `boolean`

---

##### `blockPublicPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration.property.blockPublicPolicy"></a>

- *Type:* `boolean`

---

##### `ignorePublicAcls`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration.property.ignorePublicAcls"></a>

- *Type:* `boolean`

---

##### `restrictPublicBuckets`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration.property.restrictPublicBuckets"></a>

- *Type:* `boolean`

---


### S3ControlResponsesFetchStorageLensConfiguration <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfiguration.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchStorageLensConfiguration(__scope: Construct, __resources: string[], __input: S3ControlGetStorageLensConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest`](#aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `storageLensConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfiguration.property.storageLensConfiguration"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfiguration`](#aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfiguration)

---


### S3ControlResponsesFetchStorageLensConfigurationStorageLensConfiguration <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfiguration.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfiguration(__scope: Construct, __resources: string[], __input: S3ControlGetStorageLensConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest`](#aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `accountLevel`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfiguration.property.accountLevel"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevel`](#aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevel)

---

##### `awsOrg`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfiguration.property.awsOrg"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAwsOrg`](#aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAwsOrg)

---

##### `dataExport`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfiguration.property.dataExport"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExport`](#aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExport)

---

##### `exclude`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfiguration.property.exclude"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationExclude`](#aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationExclude)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfiguration.property.id"></a>

- *Type:* `string`

---

##### `include`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfiguration.property.include"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationInclude`](#aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationInclude)

---

##### `isEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfiguration.property.isEnabled"></a>

- *Type:* `boolean`

---

##### `storageLensArn`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfiguration.property.storageLensArn"></a>

- *Type:* `string`

---


### S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevel <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevel"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevel.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevel(__scope: Construct, __resources: string[], __input: S3ControlGetStorageLensConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest`](#aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `activityMetrics`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevel.property.activityMetrics"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics`](#aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics)

---

##### `bucketLevel`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevel.property.bucketLevel"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel`](#aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel)

---


### S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics(__scope: Construct, __resources: string[], __input: S3ControlGetStorageLensConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest`](#aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `isEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics.property.isEnabled"></a>

- *Type:* `boolean`

---


### S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel(__scope: Construct, __resources: string[], __input: S3ControlGetStorageLensConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest`](#aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `activityMetrics`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel.property.activityMetrics"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics`](#aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics)

---

##### `prefixLevel`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel.property.prefixLevel"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel`](#aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel)

---


### S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics(__scope: Construct, __resources: string[], __input: S3ControlGetStorageLensConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest`](#aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `isEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics.property.isEnabled"></a>

- *Type:* `boolean`

---


### S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel(__scope: Construct, __resources: string[], __input: S3ControlGetStorageLensConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest`](#aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `storageMetrics`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel.property.storageMetrics"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics`](#aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics)

---


### S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics(__scope: Construct, __resources: string[], __input: S3ControlGetStorageLensConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest`](#aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `isEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics.property.isEnabled"></a>

- *Type:* `boolean`

---

##### `selectionCriteria`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics.property.selectionCriteria"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria`](#aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria)

---


### S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria(__scope: Construct, __resources: string[], __input: S3ControlGetStorageLensConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest`](#aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `delimiter`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.property.delimiter"></a>

- *Type:* `string`

---

##### `maxDepth`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.property.maxDepth"></a>

- *Type:* `number`

---

##### `minStorageBytesPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.property.minStorageBytesPercentage"></a>

- *Type:* `number`

---


### S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAwsOrg <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAwsOrg"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAwsOrg.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAwsOrg(__scope: Construct, __resources: string[], __input: S3ControlGetStorageLensConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAwsOrg.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAwsOrg.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAwsOrg.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest`](#aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAwsOrg.property.arn"></a>

- *Type:* `string`

---


### S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExport <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExport"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExport.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExport(__scope: Construct, __resources: string[], __input: S3ControlGetStorageLensConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest`](#aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `s3BucketDestination`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExport.property.s3BucketDestination"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination`](#aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination)

---


### S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination(__scope: Construct, __resources: string[], __input: S3ControlGetStorageLensConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest`](#aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination.property.accountId"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination.property.arn"></a>

- *Type:* `string`

---

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption`](#aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption)

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination.property.format"></a>

- *Type:* `string`

---

##### `outputSchemaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination.property.outputSchemaVersion"></a>

- *Type:* `string`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination.property.prefix"></a>

- *Type:* `string`

---


### S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption(__scope: Construct, __resources: string[], __input: S3ControlGetStorageLensConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest`](#aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `ssekms`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption.property.ssekms"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms`](#aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms)

---

##### `sses3`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption.property.sses3"></a>

- *Type:* `any`

---


### S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms(__scope: Construct, __resources: string[], __input: S3ControlGetStorageLensConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest`](#aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms.property.keyId"></a>

- *Type:* `string`

---


### S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationExclude <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationExclude"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationExclude.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationExclude(__scope: Construct, __resources: string[], __input: S3ControlGetStorageLensConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationExclude.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationExclude.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationExclude.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest`](#aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `buckets`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationExclude.property.buckets"></a>

- *Type:* `string`[]

---

##### `regions`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationExclude.property.regions"></a>

- *Type:* `string`[]

---


### S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationInclude <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationInclude"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationInclude.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationInclude(__scope: Construct, __resources: string[], __input: S3ControlGetStorageLensConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationInclude.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationInclude.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationInclude.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest`](#aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `buckets`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationInclude.property.buckets"></a>

- *Type:* `string`[]

---

##### `regions`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationInclude.property.regions"></a>

- *Type:* `string`[]

---


### S3ControlResponsesFetchStorageLensConfigurationTagging <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationTagging"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationTagging.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesFetchStorageLensConfigurationTagging(__scope: Construct, __resources: string[], __input: S3ControlGetStorageLensConfigurationTaggingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationTagging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationTagging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationTagging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationTaggingRequest`](#aws-cdk-sdk.s3control.S3ControlGetStorageLensConfigurationTaggingRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesFetchStorageLensConfigurationTagging.property.tags"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlStorageLensTag`](#aws-cdk-sdk.s3control.S3ControlStorageLensTag)[]

---


### S3ControlResponsesListAccessPoints <a name="aws-cdk-sdk.s3control.S3ControlResponsesListAccessPoints"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesListAccessPoints.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesListAccessPoints(__scope: Construct, __resources: string[], __input: S3ControlListAccessPointsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesListAccessPoints.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesListAccessPoints.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesListAccessPoints.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlListAccessPointsRequest`](#aws-cdk-sdk.s3control.S3ControlListAccessPointsRequest)

---



#### Properties <a name="Properties"></a>

##### `accessPointList`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesListAccessPoints.property.accessPointList"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlAccessPoint`](#aws-cdk-sdk.s3control.S3ControlAccessPoint)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesListAccessPoints.property.nextToken"></a>

- *Type:* `string`

---


### S3ControlResponsesListJobs <a name="aws-cdk-sdk.s3control.S3ControlResponsesListJobs"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesListJobs.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesListJobs(__scope: Construct, __resources: string[], __input: S3ControlListJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesListJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesListJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesListJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlListJobsRequest`](#aws-cdk-sdk.s3control.S3ControlListJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `jobs`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesListJobs.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlJobListDescriptor`](#aws-cdk-sdk.s3control.S3ControlJobListDescriptor)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesListJobs.property.nextToken"></a>

- *Type:* `string`

---


### S3ControlResponsesListRegionalBuckets <a name="aws-cdk-sdk.s3control.S3ControlResponsesListRegionalBuckets"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesListRegionalBuckets.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesListRegionalBuckets(__scope: Construct, __resources: string[], __input: S3ControlListRegionalBucketsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesListRegionalBuckets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesListRegionalBuckets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesListRegionalBuckets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlListRegionalBucketsRequest`](#aws-cdk-sdk.s3control.S3ControlListRegionalBucketsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesListRegionalBuckets.property.nextToken"></a>

- *Type:* `string`

---

##### `regionalBucketList`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesListRegionalBuckets.property.regionalBucketList"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlRegionalBucket`](#aws-cdk-sdk.s3control.S3ControlRegionalBucket)[]

---


### S3ControlResponsesListStorageLensConfigurations <a name="aws-cdk-sdk.s3control.S3ControlResponsesListStorageLensConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesListStorageLensConfigurations.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesListStorageLensConfigurations(__scope: Construct, __resources: string[], __input: S3ControlListStorageLensConfigurationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesListStorageLensConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesListStorageLensConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesListStorageLensConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlListStorageLensConfigurationsRequest`](#aws-cdk-sdk.s3control.S3ControlListStorageLensConfigurationsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesListStorageLensConfigurations.property.nextToken"></a>

- *Type:* `string`

---

##### `storageLensConfigurationList`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesListStorageLensConfigurations.property.storageLensConfigurationList"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlListStorageLensConfigurationEntry`](#aws-cdk-sdk.s3control.S3ControlListStorageLensConfigurationEntry)[]

---


### S3ControlResponsesUpdateJobPriority <a name="aws-cdk-sdk.s3control.S3ControlResponsesUpdateJobPriority"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesUpdateJobPriority.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesUpdateJobPriority(__scope: Construct, __resources: string[], __input: S3ControlUpdateJobPriorityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesUpdateJobPriority.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesUpdateJobPriority.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesUpdateJobPriority.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlUpdateJobPriorityRequest`](#aws-cdk-sdk.s3control.S3ControlUpdateJobPriorityRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesUpdateJobPriority.property.jobId"></a>

- *Type:* `string`

---

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesUpdateJobPriority.property.priority"></a>

- *Type:* `number`

---


### S3ControlResponsesUpdateJobStatus <a name="aws-cdk-sdk.s3control.S3ControlResponsesUpdateJobStatus"></a>

#### Initializer <a name="aws-cdk-sdk.s3control.S3ControlResponsesUpdateJobStatus.Initializer"></a>

```typescript
import { s3control } from 'aws-cdk-sdk'

new s3control.S3ControlResponsesUpdateJobStatus(__scope: Construct, __resources: string[], __input: S3ControlUpdateJobStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesUpdateJobStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesUpdateJobStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesUpdateJobStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3control.S3ControlUpdateJobStatusRequest`](#aws-cdk-sdk.s3control.S3ControlUpdateJobStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesUpdateJobStatus.property.jobId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesUpdateJobStatus.property.status"></a>

- *Type:* `string`

---

##### `statusUpdateReason`<sup>Required</sup> <a name="aws-cdk-sdk.s3control.S3ControlResponsesUpdateJobStatus.property.statusUpdateReason"></a>

- *Type:* `string`

---



