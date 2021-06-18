import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class S3Client extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public abortMultipartUpload(input: shapes.S3AbortMultipartUploadRequest): S3AbortMultipartUpload {
    return new S3AbortMultipartUpload(this, 'AbortMultipartUpload', this.__resources, input);
  }

  public completeMultipartUpload(input: shapes.S3CompleteMultipartUploadRequest): S3CompleteMultipartUpload {
    return new S3CompleteMultipartUpload(this, 'CompleteMultipartUpload', this.__resources, input);
  }

  public copyObject(input: shapes.S3CopyObjectRequest): S3CopyObject {
    return new S3CopyObject(this, 'CopyObject', this.__resources, input);
  }

  public createBucket(input: shapes.S3CreateBucketRequest): S3CreateBucket {
    return new S3CreateBucket(this, 'CreateBucket', this.__resources, input);
  }

  public createMultipartUpload(input: shapes.S3CreateMultipartUploadRequest): S3CreateMultipartUpload {
    return new S3CreateMultipartUpload(this, 'CreateMultipartUpload', this.__resources, input);
  }

  public deleteBucket(input: shapes.S3DeleteBucketRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBucket',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.DeleteBucket'),
        parameters: {
          Bucket: input.bucket,
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteBucket', props);
  }

  public deleteBucketAnalyticsConfiguration(input: shapes.S3DeleteBucketAnalyticsConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBucketAnalyticsConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.DeleteBucketAnalyticsConfiguration'),
        parameters: {
          Bucket: input.bucket,
          Id: input.id,
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteBucketAnalyticsConfiguration', props);
  }

  public deleteBucketCors(input: shapes.S3DeleteBucketCorsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBucketCors',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.DeleteBucketCors'),
        parameters: {
          Bucket: input.bucket,
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteBucketCors', props);
  }

  public deleteBucketEncryption(input: shapes.S3DeleteBucketEncryptionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBucketEncryption',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.DeleteBucketEncryption'),
        parameters: {
          Bucket: input.bucket,
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteBucketEncryption', props);
  }

  public deleteBucketIntelligentTieringConfiguration(input: shapes.S3DeleteBucketIntelligentTieringConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBucketIntelligentTieringConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.DeleteBucketIntelligentTieringConfiguration'),
        parameters: {
          Bucket: input.bucket,
          Id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteBucketIntelligentTieringConfiguration', props);
  }

  public deleteBucketInventoryConfiguration(input: shapes.S3DeleteBucketInventoryConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBucketInventoryConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.DeleteBucketInventoryConfiguration'),
        parameters: {
          Bucket: input.bucket,
          Id: input.id,
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteBucketInventoryConfiguration', props);
  }

  public deleteBucketLifecycle(input: shapes.S3DeleteBucketLifecycleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBucketLifecycle',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.DeleteBucketLifecycle'),
        parameters: {
          Bucket: input.bucket,
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteBucketLifecycle', props);
  }

  public deleteBucketMetricsConfiguration(input: shapes.S3DeleteBucketMetricsConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBucketMetricsConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.DeleteBucketMetricsConfiguration'),
        parameters: {
          Bucket: input.bucket,
          Id: input.id,
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteBucketMetricsConfiguration', props);
  }

  public deleteBucketOwnershipControls(input: shapes.S3DeleteBucketOwnershipControlsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBucketOwnershipControls',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.DeleteBucketOwnershipControls'),
        parameters: {
          Bucket: input.bucket,
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteBucketOwnershipControls', props);
  }

  public deleteBucketPolicy(input: shapes.S3DeleteBucketPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBucketPolicy',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.DeleteBucketPolicy'),
        parameters: {
          Bucket: input.bucket,
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteBucketPolicy', props);
  }

  public deleteBucketReplication(input: shapes.S3DeleteBucketReplicationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBucketReplication',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.DeleteBucketReplication'),
        parameters: {
          Bucket: input.bucket,
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteBucketReplication', props);
  }

  public deleteBucketTagging(input: shapes.S3DeleteBucketTaggingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBucketTagging',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.DeleteBucketTagging'),
        parameters: {
          Bucket: input.bucket,
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteBucketTagging', props);
  }

  public deleteBucketWebsite(input: shapes.S3DeleteBucketWebsiteRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBucketWebsite',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.DeleteBucketWebsite'),
        parameters: {
          Bucket: input.bucket,
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteBucketWebsite', props);
  }

  public deleteObject(input: shapes.S3DeleteObjectRequest): S3DeleteObject {
    return new S3DeleteObject(this, 'DeleteObject', this.__resources, input);
  }

  public deleteObjectTagging(input: shapes.S3DeleteObjectTaggingRequest): S3DeleteObjectTagging {
    return new S3DeleteObjectTagging(this, 'DeleteObjectTagging', this.__resources, input);
  }

  public deleteObjects(input: shapes.S3DeleteObjectsRequest): S3DeleteObjects {
    return new S3DeleteObjects(this, 'DeleteObjects', this.__resources, input);
  }

  public deletePublicAccessBlock(input: shapes.S3DeletePublicAccessBlockRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePublicAccessBlock',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.DeletePublicAccessBlock'),
        parameters: {
          Bucket: input.bucket,
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePublicAccessBlock', props);
  }

  public fetchBucketAccelerateConfiguration(input: shapes.S3GetBucketAccelerateConfigurationRequest): S3FetchBucketAccelerateConfiguration {
    return new S3FetchBucketAccelerateConfiguration(this, 'FetchBucketAccelerateConfiguration', this.__resources, input);
  }

  public fetchBucketAcl(input: shapes.S3GetBucketAclRequest): S3FetchBucketAcl {
    return new S3FetchBucketAcl(this, 'FetchBucketAcl', this.__resources, input);
  }

  public fetchBucketAnalyticsConfiguration(input: shapes.S3GetBucketAnalyticsConfigurationRequest): S3FetchBucketAnalyticsConfiguration {
    return new S3FetchBucketAnalyticsConfiguration(this, 'FetchBucketAnalyticsConfiguration', this.__resources, input);
  }

  public fetchBucketCors(input: shapes.S3GetBucketCorsRequest): S3FetchBucketCors {
    return new S3FetchBucketCors(this, 'FetchBucketCors', this.__resources, input);
  }

  public fetchBucketEncryption(input: shapes.S3GetBucketEncryptionRequest): S3FetchBucketEncryption {
    return new S3FetchBucketEncryption(this, 'FetchBucketEncryption', this.__resources, input);
  }

  public fetchBucketIntelligentTieringConfiguration(input: shapes.S3GetBucketIntelligentTieringConfigurationRequest): S3FetchBucketIntelligentTieringConfiguration {
    return new S3FetchBucketIntelligentTieringConfiguration(this, 'FetchBucketIntelligentTieringConfiguration', this.__resources, input);
  }

  public fetchBucketInventoryConfiguration(input: shapes.S3GetBucketInventoryConfigurationRequest): S3FetchBucketInventoryConfiguration {
    return new S3FetchBucketInventoryConfiguration(this, 'FetchBucketInventoryConfiguration', this.__resources, input);
  }

  public fetchBucketLifecycle(input: shapes.S3GetBucketLifecycleRequest): S3FetchBucketLifecycle {
    return new S3FetchBucketLifecycle(this, 'FetchBucketLifecycle', this.__resources, input);
  }

  public fetchBucketLifecycleConfiguration(input: shapes.S3GetBucketLifecycleConfigurationRequest): S3FetchBucketLifecycleConfiguration {
    return new S3FetchBucketLifecycleConfiguration(this, 'FetchBucketLifecycleConfiguration', this.__resources, input);
  }

  public fetchBucketLocation(input: shapes.S3GetBucketLocationRequest): S3FetchBucketLocation {
    return new S3FetchBucketLocation(this, 'FetchBucketLocation', this.__resources, input);
  }

  public fetchBucketLogging(input: shapes.S3GetBucketLoggingRequest): S3FetchBucketLogging {
    return new S3FetchBucketLogging(this, 'FetchBucketLogging', this.__resources, input);
  }

  public fetchBucketMetricsConfiguration(input: shapes.S3GetBucketMetricsConfigurationRequest): S3FetchBucketMetricsConfiguration {
    return new S3FetchBucketMetricsConfiguration(this, 'FetchBucketMetricsConfiguration', this.__resources, input);
  }

  public fetchBucketNotification(input: shapes.S3GetBucketNotificationConfigurationRequest): S3FetchBucketNotification {
    return new S3FetchBucketNotification(this, 'FetchBucketNotification', this.__resources, input);
  }

  public fetchBucketNotificationConfiguration(input: shapes.S3GetBucketNotificationConfigurationRequest): S3FetchBucketNotificationConfiguration {
    return new S3FetchBucketNotificationConfiguration(this, 'FetchBucketNotificationConfiguration', this.__resources, input);
  }

  public fetchBucketOwnershipControls(input: shapes.S3GetBucketOwnershipControlsRequest): S3FetchBucketOwnershipControls {
    return new S3FetchBucketOwnershipControls(this, 'FetchBucketOwnershipControls', this.__resources, input);
  }

  public fetchBucketPolicy(input: shapes.S3GetBucketPolicyRequest): S3FetchBucketPolicy {
    return new S3FetchBucketPolicy(this, 'FetchBucketPolicy', this.__resources, input);
  }

  public fetchBucketPolicyStatus(input: shapes.S3GetBucketPolicyStatusRequest): S3FetchBucketPolicyStatus {
    return new S3FetchBucketPolicyStatus(this, 'FetchBucketPolicyStatus', this.__resources, input);
  }

  public fetchBucketReplication(input: shapes.S3GetBucketReplicationRequest): S3FetchBucketReplication {
    return new S3FetchBucketReplication(this, 'FetchBucketReplication', this.__resources, input);
  }

  public fetchBucketRequestPayment(input: shapes.S3GetBucketRequestPaymentRequest): S3FetchBucketRequestPayment {
    return new S3FetchBucketRequestPayment(this, 'FetchBucketRequestPayment', this.__resources, input);
  }

  public fetchBucketTagging(input: shapes.S3GetBucketTaggingRequest): S3FetchBucketTagging {
    return new S3FetchBucketTagging(this, 'FetchBucketTagging', this.__resources, input);
  }

  public fetchBucketVersioning(input: shapes.S3GetBucketVersioningRequest): S3FetchBucketVersioning {
    return new S3FetchBucketVersioning(this, 'FetchBucketVersioning', this.__resources, input);
  }

  public fetchBucketWebsite(input: shapes.S3GetBucketWebsiteRequest): S3FetchBucketWebsite {
    return new S3FetchBucketWebsite(this, 'FetchBucketWebsite', this.__resources, input);
  }

  public fetchObject(input: shapes.S3GetObjectRequest): S3FetchObject {
    return new S3FetchObject(this, 'FetchObject', this.__resources, input);
  }

  public fetchObjectAcl(input: shapes.S3GetObjectAclRequest): S3FetchObjectAcl {
    return new S3FetchObjectAcl(this, 'FetchObjectAcl', this.__resources, input);
  }

  public fetchObjectLegalHold(input: shapes.S3GetObjectLegalHoldRequest): S3FetchObjectLegalHold {
    return new S3FetchObjectLegalHold(this, 'FetchObjectLegalHold', this.__resources, input);
  }

  public fetchObjectLockConfiguration(input: shapes.S3GetObjectLockConfigurationRequest): S3FetchObjectLockConfiguration {
    return new S3FetchObjectLockConfiguration(this, 'FetchObjectLockConfiguration', this.__resources, input);
  }

  public fetchObjectRetention(input: shapes.S3GetObjectRetentionRequest): S3FetchObjectRetention {
    return new S3FetchObjectRetention(this, 'FetchObjectRetention', this.__resources, input);
  }

  public fetchObjectTagging(input: shapes.S3GetObjectTaggingRequest): S3FetchObjectTagging {
    return new S3FetchObjectTagging(this, 'FetchObjectTagging', this.__resources, input);
  }

  public fetchObjectTorrent(input: shapes.S3GetObjectTorrentRequest): S3FetchObjectTorrent {
    return new S3FetchObjectTorrent(this, 'FetchObjectTorrent', this.__resources, input);
  }

  public fetchPublicAccessBlock(input: shapes.S3GetPublicAccessBlockRequest): S3FetchPublicAccessBlock {
    return new S3FetchPublicAccessBlock(this, 'FetchPublicAccessBlock', this.__resources, input);
  }

  public headBucket(input: shapes.S3HeadBucketRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headBucket',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadBucket'),
        parameters: {
          Bucket: input.bucket,
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'HeadBucket', props);
  }

  public headObject(input: shapes.S3HeadObjectRequest): S3HeadObject {
    return new S3HeadObject(this, 'HeadObject', this.__resources, input);
  }

  public listBucketAnalyticsConfigurations(input: shapes.S3ListBucketAnalyticsConfigurationsRequest): S3ListBucketAnalyticsConfigurations {
    return new S3ListBucketAnalyticsConfigurations(this, 'ListBucketAnalyticsConfigurations', this.__resources, input);
  }

  public listBucketIntelligentTieringConfigurations(input: shapes.S3ListBucketIntelligentTieringConfigurationsRequest): S3ListBucketIntelligentTieringConfigurations {
    return new S3ListBucketIntelligentTieringConfigurations(this, 'ListBucketIntelligentTieringConfigurations', this.__resources, input);
  }

  public listBucketInventoryConfigurations(input: shapes.S3ListBucketInventoryConfigurationsRequest): S3ListBucketInventoryConfigurations {
    return new S3ListBucketInventoryConfigurations(this, 'ListBucketInventoryConfigurations', this.__resources, input);
  }

  public listBucketMetricsConfigurations(input: shapes.S3ListBucketMetricsConfigurationsRequest): S3ListBucketMetricsConfigurations {
    return new S3ListBucketMetricsConfigurations(this, 'ListBucketMetricsConfigurations', this.__resources, input);
  }

  public listBuckets(): S3ListBuckets {
    return new S3ListBuckets(this, 'ListBuckets', this.__resources);
  }

  public listMultipartUploads(input: shapes.S3ListMultipartUploadsRequest): S3ListMultipartUploads {
    return new S3ListMultipartUploads(this, 'ListMultipartUploads', this.__resources, input);
  }

  public listObjectVersions(input: shapes.S3ListObjectVersionsRequest): S3ListObjectVersions {
    return new S3ListObjectVersions(this, 'ListObjectVersions', this.__resources, input);
  }

  public listObjects(input: shapes.S3ListObjectsRequest): S3ListObjects {
    return new S3ListObjects(this, 'ListObjects', this.__resources, input);
  }

  public listObjectsV2(input: shapes.S3ListObjectsV2Request): S3ListObjectsV2 {
    return new S3ListObjectsV2(this, 'ListObjectsV2', this.__resources, input);
  }

  public listParts(input: shapes.S3ListPartsRequest): S3ListParts {
    return new S3ListParts(this, 'ListParts', this.__resources, input);
  }

  public putBucketAccelerateConfiguration(input: shapes.S3PutBucketAccelerateConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putBucketAccelerateConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutBucketAccelerateConfiguration'),
        parameters: {
          Bucket: input.bucket,
          AccelerateConfiguration: {
            Status: input.accelerateConfiguration.status,
          },
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutBucketAccelerateConfiguration', props);
  }

  public putBucketAcl(input: shapes.S3PutBucketAclRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putBucketAcl',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutBucketAcl'),
        parameters: {
          ACL: input.acl,
          AccessControlPolicy: {
            Grants: input.accessControlPolicy?.grants,
            Owner: {
              DisplayName: input.accessControlPolicy?.owner?.displayName,
              ID: input.accessControlPolicy?.owner?.id,
            },
          },
          Bucket: input.bucket,
          ContentMD5: input.contentMd5,
          GrantFullControl: input.grantFullControl,
          GrantRead: input.grantRead,
          GrantReadACP: input.grantReadAcp,
          GrantWrite: input.grantWrite,
          GrantWriteACP: input.grantWriteAcp,
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutBucketAcl', props);
  }

  public putBucketAnalyticsConfiguration(input: shapes.S3PutBucketAnalyticsConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putBucketAnalyticsConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutBucketAnalyticsConfiguration'),
        parameters: {
          Bucket: input.bucket,
          Id: input.id,
          AnalyticsConfiguration: {
            Id: input.analyticsConfiguration.id,
            Filter: {
              Prefix: input.analyticsConfiguration.filter?.prefix,
              Tag: {
                Key: input.analyticsConfiguration.filter?.tag?.key,
                Value: input.analyticsConfiguration.filter?.tag?.value,
              },
              And: {
                Prefix: input.analyticsConfiguration.filter?.and?.prefix,
                Tags: input.analyticsConfiguration.filter?.and?.tags,
              },
            },
            StorageClassAnalysis: {
              DataExport: {
                OutputSchemaVersion: input.analyticsConfiguration.storageClassAnalysis.dataExport?.outputSchemaVersion,
                Destination: {
                  S3BucketDestination: {
                    Format: input.analyticsConfiguration.storageClassAnalysis.dataExport?.destination.s3BucketDestination.format,
                    BucketAccountId: input.analyticsConfiguration.storageClassAnalysis.dataExport?.destination.s3BucketDestination.bucketAccountId,
                    Bucket: input.analyticsConfiguration.storageClassAnalysis.dataExport?.destination.s3BucketDestination.bucket,
                    Prefix: input.analyticsConfiguration.storageClassAnalysis.dataExport?.destination.s3BucketDestination.prefix,
                  },
                },
              },
            },
          },
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutBucketAnalyticsConfiguration', props);
  }

  public putBucketCors(input: shapes.S3PutBucketCorsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putBucketCors',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutBucketCors'),
        parameters: {
          Bucket: input.bucket,
          CORSConfiguration: {
            CORSRules: input.corsConfiguration.corsRules,
          },
          ContentMD5: input.contentMd5,
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutBucketCors', props);
  }

  public putBucketEncryption(input: shapes.S3PutBucketEncryptionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putBucketEncryption',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutBucketEncryption'),
        parameters: {
          Bucket: input.bucket,
          ContentMD5: input.contentMd5,
          ServerSideEncryptionConfiguration: {
            Rules: input.serverSideEncryptionConfiguration.rules,
          },
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutBucketEncryption', props);
  }

  public putBucketIntelligentTieringConfiguration(input: shapes.S3PutBucketIntelligentTieringConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putBucketIntelligentTieringConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutBucketIntelligentTieringConfiguration'),
        parameters: {
          Bucket: input.bucket,
          Id: input.id,
          IntelligentTieringConfiguration: {
            Id: input.intelligentTieringConfiguration.id,
            Filter: {
              Prefix: input.intelligentTieringConfiguration.filter?.prefix,
              Tag: {
                Key: input.intelligentTieringConfiguration.filter?.tag?.key,
                Value: input.intelligentTieringConfiguration.filter?.tag?.value,
              },
              And: {
                Prefix: input.intelligentTieringConfiguration.filter?.and?.prefix,
                Tags: input.intelligentTieringConfiguration.filter?.and?.tags,
              },
            },
            Status: input.intelligentTieringConfiguration.status,
            Tierings: input.intelligentTieringConfiguration.tierings,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutBucketIntelligentTieringConfiguration', props);
  }

  public putBucketInventoryConfiguration(input: shapes.S3PutBucketInventoryConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putBucketInventoryConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutBucketInventoryConfiguration'),
        parameters: {
          Bucket: input.bucket,
          Id: input.id,
          InventoryConfiguration: {
            Destination: {
              S3BucketDestination: {
                AccountId: input.inventoryConfiguration.destination.s3BucketDestination.accountId,
                Bucket: input.inventoryConfiguration.destination.s3BucketDestination.bucket,
                Format: input.inventoryConfiguration.destination.s3BucketDestination.format,
                Prefix: input.inventoryConfiguration.destination.s3BucketDestination.prefix,
                Encryption: {
                  SSES3: {
                  },
                  SSEKMS: {
                    KeyId: input.inventoryConfiguration.destination.s3BucketDestination.encryption?.ssekms?.keyId,
                  },
                },
              },
            },
            IsEnabled: input.inventoryConfiguration.isEnabled,
            Filter: {
              Prefix: input.inventoryConfiguration.filter?.prefix,
            },
            Id: input.inventoryConfiguration.id,
            IncludedObjectVersions: input.inventoryConfiguration.includedObjectVersions,
            OptionalFields: input.inventoryConfiguration.optionalFields,
            Schedule: {
              Frequency: input.inventoryConfiguration.schedule.frequency,
            },
          },
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutBucketInventoryConfiguration', props);
  }

  public putBucketLifecycle(input: shapes.S3PutBucketLifecycleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putBucketLifecycle',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutBucketLifecycle'),
        parameters: {
          Bucket: input.bucket,
          ContentMD5: input.contentMd5,
          LifecycleConfiguration: {
            Rules: input.lifecycleConfiguration?.rules,
          },
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutBucketLifecycle', props);
  }

  public putBucketLifecycleConfiguration(input: shapes.S3PutBucketLifecycleConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putBucketLifecycleConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutBucketLifecycleConfiguration'),
        parameters: {
          Bucket: input.bucket,
          LifecycleConfiguration: {
            Rules: input.lifecycleConfiguration?.rules,
          },
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutBucketLifecycleConfiguration', props);
  }

  public putBucketLogging(input: shapes.S3PutBucketLoggingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putBucketLogging',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutBucketLogging'),
        parameters: {
          Bucket: input.bucket,
          BucketLoggingStatus: {
            LoggingEnabled: {
              TargetBucket: input.bucketLoggingStatus.loggingEnabled?.targetBucket,
              TargetGrants: input.bucketLoggingStatus.loggingEnabled?.targetGrants,
              TargetPrefix: input.bucketLoggingStatus.loggingEnabled?.targetPrefix,
            },
          },
          ContentMD5: input.contentMd5,
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutBucketLogging', props);
  }

  public putBucketMetricsConfiguration(input: shapes.S3PutBucketMetricsConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putBucketMetricsConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutBucketMetricsConfiguration'),
        parameters: {
          Bucket: input.bucket,
          Id: input.id,
          MetricsConfiguration: {
            Id: input.metricsConfiguration.id,
            Filter: {
              Prefix: input.metricsConfiguration.filter?.prefix,
              Tag: {
                Key: input.metricsConfiguration.filter?.tag?.key,
                Value: input.metricsConfiguration.filter?.tag?.value,
              },
              And: {
                Prefix: input.metricsConfiguration.filter?.and?.prefix,
                Tags: input.metricsConfiguration.filter?.and?.tags,
              },
            },
          },
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutBucketMetricsConfiguration', props);
  }

  public putBucketNotification(input: shapes.S3PutBucketNotificationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putBucketNotification',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutBucketNotification'),
        parameters: {
          Bucket: input.bucket,
          ContentMD5: input.contentMd5,
          NotificationConfiguration: {
            TopicConfiguration: {
              Id: input.notificationConfiguration.topicConfiguration?.id,
              Events: input.notificationConfiguration.topicConfiguration?.events,
              Event: input.notificationConfiguration.topicConfiguration?.event,
              Topic: input.notificationConfiguration.topicConfiguration?.topic,
            },
            QueueConfiguration: {
              Id: input.notificationConfiguration.queueConfiguration?.id,
              Event: input.notificationConfiguration.queueConfiguration?.event,
              Events: input.notificationConfiguration.queueConfiguration?.events,
              Queue: input.notificationConfiguration.queueConfiguration?.queue,
            },
            CloudFunctionConfiguration: {
              Id: input.notificationConfiguration.cloudFunctionConfiguration?.id,
              Event: input.notificationConfiguration.cloudFunctionConfiguration?.event,
              Events: input.notificationConfiguration.cloudFunctionConfiguration?.events,
              CloudFunction: input.notificationConfiguration.cloudFunctionConfiguration?.cloudFunction,
              InvocationRole: input.notificationConfiguration.cloudFunctionConfiguration?.invocationRole,
            },
          },
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutBucketNotification', props);
  }

  public putBucketNotificationConfiguration(input: shapes.S3PutBucketNotificationConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putBucketNotificationConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutBucketNotificationConfiguration'),
        parameters: {
          Bucket: input.bucket,
          NotificationConfiguration: {
            TopicConfigurations: input.notificationConfiguration.topicConfigurations,
            QueueConfigurations: input.notificationConfiguration.queueConfigurations,
            LambdaFunctionConfigurations: input.notificationConfiguration.lambdaFunctionConfigurations,
          },
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutBucketNotificationConfiguration', props);
  }

  public putBucketOwnershipControls(input: shapes.S3PutBucketOwnershipControlsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putBucketOwnershipControls',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutBucketOwnershipControls'),
        parameters: {
          Bucket: input.bucket,
          ContentMD5: input.contentMd5,
          ExpectedBucketOwner: input.expectedBucketOwner,
          OwnershipControls: {
            Rules: input.ownershipControls.rules,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutBucketOwnershipControls', props);
  }

  public putBucketPolicy(input: shapes.S3PutBucketPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putBucketPolicy',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutBucketPolicy'),
        parameters: {
          Bucket: input.bucket,
          ContentMD5: input.contentMd5,
          ConfirmRemoveSelfBucketAccess: input.confirmRemoveSelfBucketAccess,
          Policy: input.policy,
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutBucketPolicy', props);
  }

  public putBucketReplication(input: shapes.S3PutBucketReplicationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putBucketReplication',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutBucketReplication'),
        parameters: {
          Bucket: input.bucket,
          ContentMD5: input.contentMd5,
          ReplicationConfiguration: {
            Role: input.replicationConfiguration.role,
            Rules: input.replicationConfiguration.rules,
          },
          Token: input.token,
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutBucketReplication', props);
  }

  public putBucketRequestPayment(input: shapes.S3PutBucketRequestPaymentRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putBucketRequestPayment',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutBucketRequestPayment'),
        parameters: {
          Bucket: input.bucket,
          ContentMD5: input.contentMd5,
          RequestPaymentConfiguration: {
            Payer: input.requestPaymentConfiguration.payer,
          },
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutBucketRequestPayment', props);
  }

  public putBucketTagging(input: shapes.S3PutBucketTaggingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putBucketTagging',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutBucketTagging'),
        parameters: {
          Bucket: input.bucket,
          ContentMD5: input.contentMd5,
          Tagging: {
            TagSet: input.tagging.tagSet,
          },
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutBucketTagging', props);
  }

  public putBucketVersioning(input: shapes.S3PutBucketVersioningRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putBucketVersioning',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutBucketVersioning'),
        parameters: {
          Bucket: input.bucket,
          ContentMD5: input.contentMd5,
          MFA: input.mfa,
          VersioningConfiguration: {
            MFADelete: input.versioningConfiguration.mfaDelete,
            Status: input.versioningConfiguration.status,
          },
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutBucketVersioning', props);
  }

  public putBucketWebsite(input: shapes.S3PutBucketWebsiteRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putBucketWebsite',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutBucketWebsite'),
        parameters: {
          Bucket: input.bucket,
          ContentMD5: input.contentMd5,
          WebsiteConfiguration: {
            ErrorDocument: {
              Key: input.websiteConfiguration.errorDocument?.key,
            },
            IndexDocument: {
              Suffix: input.websiteConfiguration.indexDocument?.suffix,
            },
            RedirectAllRequestsTo: {
              HostName: input.websiteConfiguration.redirectAllRequestsTo?.hostName,
              Protocol: input.websiteConfiguration.redirectAllRequestsTo?.protocol,
            },
            RoutingRules: input.websiteConfiguration.routingRules,
          },
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutBucketWebsite', props);
  }

  public putObject(input: shapes.S3PutObjectRequest): S3PutObject {
    return new S3PutObject(this, 'PutObject', this.__resources, input);
  }

  public putObjectAcl(input: shapes.S3PutObjectAclRequest): S3PutObjectAcl {
    return new S3PutObjectAcl(this, 'PutObjectAcl', this.__resources, input);
  }

  public putObjectLegalHold(input: shapes.S3PutObjectLegalHoldRequest): S3PutObjectLegalHold {
    return new S3PutObjectLegalHold(this, 'PutObjectLegalHold', this.__resources, input);
  }

  public putObjectLockConfiguration(input: shapes.S3PutObjectLockConfigurationRequest): S3PutObjectLockConfiguration {
    return new S3PutObjectLockConfiguration(this, 'PutObjectLockConfiguration', this.__resources, input);
  }

  public putObjectRetention(input: shapes.S3PutObjectRetentionRequest): S3PutObjectRetention {
    return new S3PutObjectRetention(this, 'PutObjectRetention', this.__resources, input);
  }

  public putObjectTagging(input: shapes.S3PutObjectTaggingRequest): S3PutObjectTagging {
    return new S3PutObjectTagging(this, 'PutObjectTagging', this.__resources, input);
  }

  public putPublicAccessBlock(input: shapes.S3PutPublicAccessBlockRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPublicAccessBlock',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutPublicAccessBlock'),
        parameters: {
          Bucket: input.bucket,
          ContentMD5: input.contentMd5,
          PublicAccessBlockConfiguration: {
            BlockPublicAcls: input.publicAccessBlockConfiguration.blockPublicAcls,
            IgnorePublicAcls: input.publicAccessBlockConfiguration.ignorePublicAcls,
            BlockPublicPolicy: input.publicAccessBlockConfiguration.blockPublicPolicy,
            RestrictPublicBuckets: input.publicAccessBlockConfiguration.restrictPublicBuckets,
          },
          ExpectedBucketOwner: input.expectedBucketOwner,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutPublicAccessBlock', props);
  }

  public restoreObject(input: shapes.S3RestoreObjectRequest): S3RestoreObject {
    return new S3RestoreObject(this, 'RestoreObject', this.__resources, input);
  }

  public selectObjectContent(input: shapes.S3SelectObjectContentRequest): S3SelectObjectContent {
    return new S3SelectObjectContent(this, 'SelectObjectContent', this.__resources, input);
  }

  public uploadPart(input: shapes.S3UploadPartRequest): S3UploadPart {
    return new S3UploadPart(this, 'UploadPart', this.__resources, input);
  }

  public uploadPartCopy(input: shapes.S3UploadPartCopyRequest): S3UploadPartCopy {
    return new S3UploadPartCopy(this, 'UploadPartCopy', this.__resources, input);
  }

}

export class S3AbortMultipartUpload extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3AbortMultipartUploadRequest) {
    super(scope, id);
  }

  public get requestCharged(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'abortMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.AbortMultipartUpload.RequestCharged'),
        outputPath: 'RequestCharged',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          UploadId: this.input.uploadId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AbortMultipartUpload.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3CompleteMultipartUpload extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3CompleteMultipartUploadRequest) {
    super(scope, id);
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CompleteMultipartUpload.Location'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMultipartUpload.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CompleteMultipartUpload.Bucket'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMultipartUpload.Bucket', props);
    return resource.getResponseField('Bucket') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CompleteMultipartUpload.Key'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMultipartUpload.Key', props);
    return resource.getResponseField('Key') as unknown as string;
  }

  public get expiration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CompleteMultipartUpload.Expiration'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMultipartUpload.Expiration', props);
    return resource.getResponseField('Expiration') as unknown as string;
  }

  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CompleteMultipartUpload.ETag'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMultipartUpload.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }

  public get serverSideEncryption(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CompleteMultipartUpload.ServerSideEncryption'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMultipartUpload.ServerSideEncryption', props);
    return resource.getResponseField('ServerSideEncryption') as unknown as string;
  }

  public get versionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CompleteMultipartUpload.VersionId'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMultipartUpload.VersionId', props);
    return resource.getResponseField('VersionId') as unknown as string;
  }

  public get ssekmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CompleteMultipartUpload.SSEKMSKeyId'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMultipartUpload.SSEKMSKeyId', props);
    return resource.getResponseField('SSEKMSKeyId') as unknown as string;
  }

  public get requestCharged(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CompleteMultipartUpload.RequestCharged'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMultipartUpload.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3CopyObject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3CopyObjectRequest) {
    super(scope, id);
  }

  public get copyObjectResult(): S3CopyObjectCopyObjectResult {
    return new S3CopyObjectCopyObjectResult(this, 'CopyObjectResult', this.__resources, this.input);
  }

  public get expiration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CopyObject.Expiration'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'CopyObject.Expiration', props);
    return resource.getResponseField('Expiration') as unknown as string;
  }

  public get copySourceVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CopyObject.CopySourceVersionId'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'CopyObject.CopySourceVersionId', props);
    return resource.getResponseField('CopySourceVersionId') as unknown as string;
  }

  public get versionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CopyObject.VersionId'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'CopyObject.VersionId', props);
    return resource.getResponseField('VersionId') as unknown as string;
  }

  public get serverSideEncryption(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CopyObject.ServerSideEncryption'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'CopyObject.ServerSideEncryption', props);
    return resource.getResponseField('ServerSideEncryption') as unknown as string;
  }

  public get sseCustomerAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CopyObject.SSECustomerAlgorithm'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'CopyObject.SSECustomerAlgorithm', props);
    return resource.getResponseField('SSECustomerAlgorithm') as unknown as string;
  }

  public get sseCustomerKeyMd5(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CopyObject.SSECustomerKeyMD5'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'CopyObject.SSECustomerKeyMD5', props);
    return resource.getResponseField('SSECustomerKeyMD5') as unknown as string;
  }

  public get ssekmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CopyObject.SSEKMSKeyId'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'CopyObject.SSEKMSKeyId', props);
    return resource.getResponseField('SSEKMSKeyId') as unknown as string;
  }

  public get ssekmsEncryptionContext(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CopyObject.SSEKMSEncryptionContext'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'CopyObject.SSEKMSEncryptionContext', props);
    return resource.getResponseField('SSEKMSEncryptionContext') as unknown as string;
  }

  public get requestCharged(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CopyObject.RequestCharged'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'CopyObject.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3CopyObjectCopyObjectResult extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3CopyObjectRequest) {
    super(scope, id);
  }

  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CopyObject.CopyObjectResult.ETag'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'CopyObject.CopyObjectResult.ETag', props);
    return resource.getResponseField('CopyObjectResult.ETag') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CopyObject.CopyObjectResult.LastModified'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'CopyObject.CopyObjectResult.LastModified', props);
    return resource.getResponseField('CopyObjectResult.LastModified') as unknown as string;
  }

}

export class S3CreateBucket extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3CreateBucketRequest) {
    super(scope, id);
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucket',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CreateBucket.Location'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBucket.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }

}

export class S3CreateMultipartUpload extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3CreateMultipartUploadRequest) {
    super(scope, id);
  }

  public get abortDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CreateMultipartUpload.AbortDate'),
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
          SSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMultipartUpload.AbortDate', props);
    return resource.getResponseField('AbortDate') as unknown as string;
  }

  public get abortRuleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CreateMultipartUpload.AbortRuleId'),
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
          SSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMultipartUpload.AbortRuleId', props);
    return resource.getResponseField('AbortRuleId') as unknown as string;
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CreateMultipartUpload.Bucket'),
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
          SSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMultipartUpload.Bucket', props);
    return resource.getResponseField('Bucket') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CreateMultipartUpload.Key'),
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
          SSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMultipartUpload.Key', props);
    return resource.getResponseField('Key') as unknown as string;
  }

  public get uploadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CreateMultipartUpload.UploadId'),
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
          SSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMultipartUpload.UploadId', props);
    return resource.getResponseField('UploadId') as unknown as string;
  }

  public get serverSideEncryption(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CreateMultipartUpload.ServerSideEncryption'),
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
          SSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMultipartUpload.ServerSideEncryption', props);
    return resource.getResponseField('ServerSideEncryption') as unknown as string;
  }

  public get sseCustomerAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CreateMultipartUpload.SSECustomerAlgorithm'),
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
          SSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMultipartUpload.SSECustomerAlgorithm', props);
    return resource.getResponseField('SSECustomerAlgorithm') as unknown as string;
  }

  public get sseCustomerKeyMd5(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CreateMultipartUpload.SSECustomerKeyMD5'),
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
          SSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMultipartUpload.SSECustomerKeyMD5', props);
    return resource.getResponseField('SSECustomerKeyMD5') as unknown as string;
  }

  public get ssekmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CreateMultipartUpload.SSEKMSKeyId'),
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
          SSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMultipartUpload.SSEKMSKeyId', props);
    return resource.getResponseField('SSEKMSKeyId') as unknown as string;
  }

  public get ssekmsEncryptionContext(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CreateMultipartUpload.SSEKMSEncryptionContext'),
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
          SSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMultipartUpload.SSEKMSEncryptionContext', props);
    return resource.getResponseField('SSEKMSEncryptionContext') as unknown as string;
  }

  public get requestCharged(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.CreateMultipartUpload.RequestCharged'),
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
          SSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMultipartUpload.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3DeleteObject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3DeleteObjectRequest) {
    super(scope, id);
  }

  public get deleteMarker(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.DeleteObject.DeleteMarker'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteObject.DeleteMarker', props);
    return resource.getResponseField('DeleteMarker') as unknown as boolean;
  }

  public get versionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.DeleteObject.VersionId'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteObject.VersionId', props);
    return resource.getResponseField('VersionId') as unknown as string;
  }

  public get requestCharged(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.DeleteObject.RequestCharged'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteObject.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3DeleteObjectTagging extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3DeleteObjectTaggingRequest) {
    super(scope, id);
  }

  public get versionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteObjectTagging',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.DeleteObjectTagging.VersionId'),
        outputPath: 'VersionId',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          VersionId: this.input.versionId,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteObjectTagging.VersionId', props);
    return resource.getResponseField('VersionId') as unknown as string;
  }

}

export class S3DeleteObjects extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3DeleteObjectsRequest) {
    super(scope, id);
  }

  public get deleted(): shapes.S3DeletedObject[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteObjects',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.DeleteObjects.Deleted'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteObjects.Deleted', props);
    return resource.getResponseField('Deleted') as unknown as shapes.S3DeletedObject[];
  }

  public get requestCharged(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteObjects',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.DeleteObjects.RequestCharged'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteObjects.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

  public get errors(): shapes.S3Error[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteObjects',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.DeleteObjects.Errors'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteObjects.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.S3Error[];
  }

}

export class S3FetchBucketAccelerateConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketAccelerateConfigurationRequest) {
    super(scope, id);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketAccelerateConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketAccelerateConfiguration.Status'),
        outputPath: 'Status',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketAccelerateConfiguration.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class S3FetchBucketAcl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketAclRequest) {
    super(scope, id);
  }

  public get owner(): S3FetchBucketAclOwner {
    return new S3FetchBucketAclOwner(this, 'Owner', this.__resources, this.input);
  }

  public get grants(): shapes.S3Grant[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketAcl',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketAcl.Grants'),
        outputPath: 'Grants',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketAcl.Grants', props);
    return resource.getResponseField('Grants') as unknown as shapes.S3Grant[];
  }

}

export class S3FetchBucketAclOwner extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketAclRequest) {
    super(scope, id);
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketAcl',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketAcl.Owner.DisplayName'),
        outputPath: 'Owner.DisplayName',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketAcl.Owner.DisplayName', props);
    return resource.getResponseField('Owner.DisplayName') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketAcl',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketAcl.Owner.ID'),
        outputPath: 'Owner.ID',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketAcl.Owner.ID', props);
    return resource.getResponseField('Owner.ID') as unknown as string;
  }

}

export class S3FetchBucketAnalyticsConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketAnalyticsConfigurationRequest) {
    super(scope, id);
  }

  public get analyticsConfiguration(): S3FetchBucketAnalyticsConfigurationAnalyticsConfiguration {
    return new S3FetchBucketAnalyticsConfigurationAnalyticsConfiguration(this, 'AnalyticsConfiguration', this.__resources, this.input);
  }

}

export class S3FetchBucketAnalyticsConfigurationAnalyticsConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketAnalyticsConfigurationRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketAnalyticsConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Id'),
        outputPath: 'AnalyticsConfiguration.Id',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Id', props);
    return resource.getResponseField('AnalyticsConfiguration.Id') as unknown as string;
  }

  public get filter(): S3FetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter {
    return new S3FetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter(this, 'Filter', this.__resources, this.input);
  }

  public get storageClassAnalysis(): S3FetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysis {
    return new S3FetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysis(this, 'StorageClassAnalysis', this.__resources, this.input);
  }

}

export class S3FetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketAnalyticsConfigurationRequest) {
    super(scope, id);
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketAnalyticsConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Filter.Prefix'),
        outputPath: 'AnalyticsConfiguration.Filter.Prefix',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Filter.Prefix', props);
    return resource.getResponseField('AnalyticsConfiguration.Filter.Prefix') as unknown as string;
  }

  public get tag(): S3FetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag {
    return new S3FetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag(this, 'Tag', this.__resources, this.input);
  }

  public get and(): S3FetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd {
    return new S3FetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd(this, 'And', this.__resources, this.input);
  }

}

export class S3FetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketAnalyticsConfigurationRequest) {
    super(scope, id);
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketAnalyticsConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Filter.Tag.Key'),
        outputPath: 'AnalyticsConfiguration.Filter.Tag.Key',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Filter.Tag.Key', props);
    return resource.getResponseField('AnalyticsConfiguration.Filter.Tag.Key') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketAnalyticsConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Filter.Tag.Value'),
        outputPath: 'AnalyticsConfiguration.Filter.Tag.Value',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Filter.Tag.Value', props);
    return resource.getResponseField('AnalyticsConfiguration.Filter.Tag.Value') as unknown as string;
  }

}

export class S3FetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketAnalyticsConfigurationRequest) {
    super(scope, id);
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketAnalyticsConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Filter.And.Prefix'),
        outputPath: 'AnalyticsConfiguration.Filter.And.Prefix',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Filter.And.Prefix', props);
    return resource.getResponseField('AnalyticsConfiguration.Filter.And.Prefix') as unknown as string;
  }

  public get tags(): shapes.S3Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketAnalyticsConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Filter.And.Tags'),
        outputPath: 'AnalyticsConfiguration.Filter.And.Tags',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Filter.And.Tags', props);
    return resource.getResponseField('AnalyticsConfiguration.Filter.And.Tags') as unknown as shapes.S3Tag[];
  }

}

export class S3FetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysis extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketAnalyticsConfigurationRequest) {
    super(scope, id);
  }

  public get dataExport(): S3FetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport {
    return new S3FetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport(this, 'DataExport', this.__resources, this.input);
  }

}

export class S3FetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketAnalyticsConfigurationRequest) {
    super(scope, id);
  }

  public get outputSchemaVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketAnalyticsConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketAnalyticsConfiguration.AnalyticsConfiguration.StorageClassAnalysis.DataExport.OutputSchemaVersion'),
        outputPath: 'AnalyticsConfiguration.StorageClassAnalysis.DataExport.OutputSchemaVersion',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.StorageClassAnalysis.DataExport.OutputSchemaVersion', props);
    return resource.getResponseField('AnalyticsConfiguration.StorageClassAnalysis.DataExport.OutputSchemaVersion') as unknown as string;
  }

  public get destination(): S3FetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestination {
    return new S3FetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestination(this, 'Destination', this.__resources, this.input);
  }

}

export class S3FetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketAnalyticsConfigurationRequest) {
    super(scope, id);
  }

  public get s3BucketDestination(): S3FetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination {
    return new S3FetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination(this, 'S3BucketDestination', this.__resources, this.input);
  }

}

export class S3FetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketAnalyticsConfigurationRequest) {
    super(scope, id);
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketAnalyticsConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketAnalyticsConfiguration.AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Format'),
        outputPath: 'AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Format',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Format', props);
    return resource.getResponseField('AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Format') as unknown as string;
  }

  public get bucketAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketAnalyticsConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketAnalyticsConfiguration.AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.BucketAccountId'),
        outputPath: 'AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.BucketAccountId',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.BucketAccountId', props);
    return resource.getResponseField('AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.BucketAccountId') as unknown as string;
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketAnalyticsConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketAnalyticsConfiguration.AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Bucket'),
        outputPath: 'AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Bucket',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Bucket', props);
    return resource.getResponseField('AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Bucket') as unknown as string;
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketAnalyticsConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketAnalyticsConfiguration.AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Prefix'),
        outputPath: 'AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Prefix',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Prefix', props);
    return resource.getResponseField('AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Prefix') as unknown as string;
  }

}

export class S3FetchBucketCors extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketCorsRequest) {
    super(scope, id);
  }

  public get corsRules(): shapes.S3CorsRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketCors',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketCors.CORSRules'),
        outputPath: 'CORSRules',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketCors.CORSRules', props);
    return resource.getResponseField('CORSRules') as unknown as shapes.S3CorsRule[];
  }

}

export class S3FetchBucketEncryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketEncryptionRequest) {
    super(scope, id);
  }

  public get serverSideEncryptionConfiguration(): S3FetchBucketEncryptionServerSideEncryptionConfiguration {
    return new S3FetchBucketEncryptionServerSideEncryptionConfiguration(this, 'ServerSideEncryptionConfiguration', this.__resources, this.input);
  }

}

export class S3FetchBucketEncryptionServerSideEncryptionConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketEncryptionRequest) {
    super(scope, id);
  }

  public get rules(): shapes.S3ServerSideEncryptionRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketEncryption',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketEncryption.ServerSideEncryptionConfiguration.Rules'),
        outputPath: 'ServerSideEncryptionConfiguration.Rules',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketEncryption.ServerSideEncryptionConfiguration.Rules', props);
    return resource.getResponseField('ServerSideEncryptionConfiguration.Rules') as unknown as shapes.S3ServerSideEncryptionRule[];
  }

}

export class S3FetchBucketIntelligentTieringConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketIntelligentTieringConfigurationRequest) {
    super(scope, id);
  }

  public get intelligentTieringConfiguration(): S3FetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration {
    return new S3FetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration(this, 'IntelligentTieringConfiguration', this.__resources, this.input);
  }

}

export class S3FetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketIntelligentTieringConfigurationRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketIntelligentTieringConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Id'),
        outputPath: 'IntelligentTieringConfiguration.Id',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Id', props);
    return resource.getResponseField('IntelligentTieringConfiguration.Id') as unknown as string;
  }

  public get filter(): S3FetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter {
    return new S3FetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter(this, 'Filter', this.__resources, this.input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketIntelligentTieringConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Status'),
        outputPath: 'IntelligentTieringConfiguration.Status',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Status', props);
    return resource.getResponseField('IntelligentTieringConfiguration.Status') as unknown as string;
  }

  public get tierings(): shapes.S3Tiering[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketIntelligentTieringConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Tierings'),
        outputPath: 'IntelligentTieringConfiguration.Tierings',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Tierings', props);
    return resource.getResponseField('IntelligentTieringConfiguration.Tierings') as unknown as shapes.S3Tiering[];
  }

}

export class S3FetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketIntelligentTieringConfigurationRequest) {
    super(scope, id);
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketIntelligentTieringConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Filter.Prefix'),
        outputPath: 'IntelligentTieringConfiguration.Filter.Prefix',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Filter.Prefix', props);
    return resource.getResponseField('IntelligentTieringConfiguration.Filter.Prefix') as unknown as string;
  }

  public get tag(): S3FetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag {
    return new S3FetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag(this, 'Tag', this.__resources, this.input);
  }

  public get and(): S3FetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd {
    return new S3FetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd(this, 'And', this.__resources, this.input);
  }

}

export class S3FetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketIntelligentTieringConfigurationRequest) {
    super(scope, id);
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketIntelligentTieringConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Filter.Tag.Key'),
        outputPath: 'IntelligentTieringConfiguration.Filter.Tag.Key',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Filter.Tag.Key', props);
    return resource.getResponseField('IntelligentTieringConfiguration.Filter.Tag.Key') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketIntelligentTieringConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Filter.Tag.Value'),
        outputPath: 'IntelligentTieringConfiguration.Filter.Tag.Value',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Filter.Tag.Value', props);
    return resource.getResponseField('IntelligentTieringConfiguration.Filter.Tag.Value') as unknown as string;
  }

}

export class S3FetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketIntelligentTieringConfigurationRequest) {
    super(scope, id);
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketIntelligentTieringConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Filter.And.Prefix'),
        outputPath: 'IntelligentTieringConfiguration.Filter.And.Prefix',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Filter.And.Prefix', props);
    return resource.getResponseField('IntelligentTieringConfiguration.Filter.And.Prefix') as unknown as string;
  }

  public get tags(): shapes.S3Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketIntelligentTieringConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Filter.And.Tags'),
        outputPath: 'IntelligentTieringConfiguration.Filter.And.Tags',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Filter.And.Tags', props);
    return resource.getResponseField('IntelligentTieringConfiguration.Filter.And.Tags') as unknown as shapes.S3Tag[];
  }

}

export class S3FetchBucketInventoryConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketInventoryConfigurationRequest) {
    super(scope, id);
  }

  public get inventoryConfiguration(): S3FetchBucketInventoryConfigurationInventoryConfiguration {
    return new S3FetchBucketInventoryConfigurationInventoryConfiguration(this, 'InventoryConfiguration', this.__resources, this.input);
  }

}

export class S3FetchBucketInventoryConfigurationInventoryConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketInventoryConfigurationRequest) {
    super(scope, id);
  }

  public get destination(): S3FetchBucketInventoryConfigurationInventoryConfigurationDestination {
    return new S3FetchBucketInventoryConfigurationInventoryConfigurationDestination(this, 'Destination', this.__resources, this.input);
  }

  public get isEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketInventoryConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketInventoryConfiguration.InventoryConfiguration.IsEnabled'),
        outputPath: 'InventoryConfiguration.IsEnabled',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketInventoryConfiguration.InventoryConfiguration.IsEnabled', props);
    return resource.getResponseField('InventoryConfiguration.IsEnabled') as unknown as boolean;
  }

  public get filter(): S3FetchBucketInventoryConfigurationInventoryConfigurationFilter {
    return new S3FetchBucketInventoryConfigurationInventoryConfigurationFilter(this, 'Filter', this.__resources, this.input);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketInventoryConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketInventoryConfiguration.InventoryConfiguration.Id'),
        outputPath: 'InventoryConfiguration.Id',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketInventoryConfiguration.InventoryConfiguration.Id', props);
    return resource.getResponseField('InventoryConfiguration.Id') as unknown as string;
  }

  public get includedObjectVersions(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketInventoryConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketInventoryConfiguration.InventoryConfiguration.IncludedObjectVersions'),
        outputPath: 'InventoryConfiguration.IncludedObjectVersions',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketInventoryConfiguration.InventoryConfiguration.IncludedObjectVersions', props);
    return resource.getResponseField('InventoryConfiguration.IncludedObjectVersions') as unknown as string;
  }

  public get optionalFields(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketInventoryConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketInventoryConfiguration.InventoryConfiguration.OptionalFields'),
        outputPath: 'InventoryConfiguration.OptionalFields',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketInventoryConfiguration.InventoryConfiguration.OptionalFields', props);
    return resource.getResponseField('InventoryConfiguration.OptionalFields') as unknown as string[];
  }

  public get schedule(): S3FetchBucketInventoryConfigurationInventoryConfigurationSchedule {
    return new S3FetchBucketInventoryConfigurationInventoryConfigurationSchedule(this, 'Schedule', this.__resources, this.input);
  }

}

export class S3FetchBucketInventoryConfigurationInventoryConfigurationDestination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketInventoryConfigurationRequest) {
    super(scope, id);
  }

  public get s3BucketDestination(): S3FetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination {
    return new S3FetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination(this, 'S3BucketDestination', this.__resources, this.input);
  }

}

export class S3FetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketInventoryConfigurationRequest) {
    super(scope, id);
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketInventoryConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketInventoryConfiguration.InventoryConfiguration.Destination.S3BucketDestination.AccountId'),
        outputPath: 'InventoryConfiguration.Destination.S3BucketDestination.AccountId',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketInventoryConfiguration.InventoryConfiguration.Destination.S3BucketDestination.AccountId', props);
    return resource.getResponseField('InventoryConfiguration.Destination.S3BucketDestination.AccountId') as unknown as string;
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketInventoryConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketInventoryConfiguration.InventoryConfiguration.Destination.S3BucketDestination.Bucket'),
        outputPath: 'InventoryConfiguration.Destination.S3BucketDestination.Bucket',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketInventoryConfiguration.InventoryConfiguration.Destination.S3BucketDestination.Bucket', props);
    return resource.getResponseField('InventoryConfiguration.Destination.S3BucketDestination.Bucket') as unknown as string;
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketInventoryConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketInventoryConfiguration.InventoryConfiguration.Destination.S3BucketDestination.Format'),
        outputPath: 'InventoryConfiguration.Destination.S3BucketDestination.Format',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketInventoryConfiguration.InventoryConfiguration.Destination.S3BucketDestination.Format', props);
    return resource.getResponseField('InventoryConfiguration.Destination.S3BucketDestination.Format') as unknown as string;
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketInventoryConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketInventoryConfiguration.InventoryConfiguration.Destination.S3BucketDestination.Prefix'),
        outputPath: 'InventoryConfiguration.Destination.S3BucketDestination.Prefix',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketInventoryConfiguration.InventoryConfiguration.Destination.S3BucketDestination.Prefix', props);
    return resource.getResponseField('InventoryConfiguration.Destination.S3BucketDestination.Prefix') as unknown as string;
  }

  public get encryption(): S3FetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption {
    return new S3FetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption(this, 'Encryption', this.__resources, this.input);
  }

}

export class S3FetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketInventoryConfigurationRequest) {
    super(scope, id);
  }

  public get sses3(): S3FetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSses3 {
    return new S3FetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSses3(this, 'Sses3');
  }

  public get ssekms(): S3FetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSsekms {
    return new S3FetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSsekms(this, 'Ssekms', this.__resources, this.input);
  }

}

export class S3FetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSses3 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);
  }

}

export class S3FetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSsekms extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketInventoryConfigurationRequest) {
    super(scope, id);
  }

  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketInventoryConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketInventoryConfiguration.InventoryConfiguration.Destination.S3BucketDestination.Encryption.SSEKMS.KeyId'),
        outputPath: 'InventoryConfiguration.Destination.S3BucketDestination.Encryption.SSEKMS.KeyId',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketInventoryConfiguration.InventoryConfiguration.Destination.S3BucketDestination.Encryption.SSEKMS.KeyId', props);
    return resource.getResponseField('InventoryConfiguration.Destination.S3BucketDestination.Encryption.SSEKMS.KeyId') as unknown as string;
  }

}

export class S3FetchBucketInventoryConfigurationInventoryConfigurationFilter extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketInventoryConfigurationRequest) {
    super(scope, id);
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketInventoryConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketInventoryConfiguration.InventoryConfiguration.Filter.Prefix'),
        outputPath: 'InventoryConfiguration.Filter.Prefix',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketInventoryConfiguration.InventoryConfiguration.Filter.Prefix', props);
    return resource.getResponseField('InventoryConfiguration.Filter.Prefix') as unknown as string;
  }

}

export class S3FetchBucketInventoryConfigurationInventoryConfigurationSchedule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketInventoryConfigurationRequest) {
    super(scope, id);
  }

  public get frequency(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketInventoryConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketInventoryConfiguration.InventoryConfiguration.Schedule.Frequency'),
        outputPath: 'InventoryConfiguration.Schedule.Frequency',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketInventoryConfiguration.InventoryConfiguration.Schedule.Frequency', props);
    return resource.getResponseField('InventoryConfiguration.Schedule.Frequency') as unknown as string;
  }

}

export class S3FetchBucketLifecycle extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketLifecycleRequest) {
    super(scope, id);
  }

  public get rules(): shapes.S3Rule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketLifecycle',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketLifecycle.Rules'),
        outputPath: 'Rules',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketLifecycle.Rules', props);
    return resource.getResponseField('Rules') as unknown as shapes.S3Rule[];
  }

}

export class S3FetchBucketLifecycleConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketLifecycleConfigurationRequest) {
    super(scope, id);
  }

  public get rules(): shapes.S3LifecycleRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketLifecycleConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketLifecycleConfiguration.Rules'),
        outputPath: 'Rules',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketLifecycleConfiguration.Rules', props);
    return resource.getResponseField('Rules') as unknown as shapes.S3LifecycleRule[];
  }

}

export class S3FetchBucketLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketLocationRequest) {
    super(scope, id);
  }

  public get locationConstraint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketLocation',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketLocation.LocationConstraint'),
        outputPath: 'LocationConstraint',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketLocation.LocationConstraint', props);
    return resource.getResponseField('LocationConstraint') as unknown as string;
  }

}

export class S3FetchBucketLogging extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketLoggingRequest) {
    super(scope, id);
  }

  public get loggingEnabled(): S3FetchBucketLoggingLoggingEnabled {
    return new S3FetchBucketLoggingLoggingEnabled(this, 'LoggingEnabled', this.__resources, this.input);
  }

}

export class S3FetchBucketLoggingLoggingEnabled extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketLoggingRequest) {
    super(scope, id);
  }

  public get targetBucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketLogging',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketLogging.LoggingEnabled.TargetBucket'),
        outputPath: 'LoggingEnabled.TargetBucket',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketLogging.LoggingEnabled.TargetBucket', props);
    return resource.getResponseField('LoggingEnabled.TargetBucket') as unknown as string;
  }

  public get targetGrants(): shapes.S3TargetGrant[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketLogging',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketLogging.LoggingEnabled.TargetGrants'),
        outputPath: 'LoggingEnabled.TargetGrants',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketLogging.LoggingEnabled.TargetGrants', props);
    return resource.getResponseField('LoggingEnabled.TargetGrants') as unknown as shapes.S3TargetGrant[];
  }

  public get targetPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketLogging',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketLogging.LoggingEnabled.TargetPrefix'),
        outputPath: 'LoggingEnabled.TargetPrefix',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketLogging.LoggingEnabled.TargetPrefix', props);
    return resource.getResponseField('LoggingEnabled.TargetPrefix') as unknown as string;
  }

}

export class S3FetchBucketMetricsConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketMetricsConfigurationRequest) {
    super(scope, id);
  }

  public get metricsConfiguration(): S3FetchBucketMetricsConfigurationMetricsConfiguration {
    return new S3FetchBucketMetricsConfigurationMetricsConfiguration(this, 'MetricsConfiguration', this.__resources, this.input);
  }

}

export class S3FetchBucketMetricsConfigurationMetricsConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketMetricsConfigurationRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketMetricsConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketMetricsConfiguration.MetricsConfiguration.Id'),
        outputPath: 'MetricsConfiguration.Id',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketMetricsConfiguration.MetricsConfiguration.Id', props);
    return resource.getResponseField('MetricsConfiguration.Id') as unknown as string;
  }

  public get filter(): S3FetchBucketMetricsConfigurationMetricsConfigurationFilter {
    return new S3FetchBucketMetricsConfigurationMetricsConfigurationFilter(this, 'Filter', this.__resources, this.input);
  }

}

export class S3FetchBucketMetricsConfigurationMetricsConfigurationFilter extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketMetricsConfigurationRequest) {
    super(scope, id);
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketMetricsConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketMetricsConfiguration.MetricsConfiguration.Filter.Prefix'),
        outputPath: 'MetricsConfiguration.Filter.Prefix',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketMetricsConfiguration.MetricsConfiguration.Filter.Prefix', props);
    return resource.getResponseField('MetricsConfiguration.Filter.Prefix') as unknown as string;
  }

  public get tag(): S3FetchBucketMetricsConfigurationMetricsConfigurationFilterTag {
    return new S3FetchBucketMetricsConfigurationMetricsConfigurationFilterTag(this, 'Tag', this.__resources, this.input);
  }

  public get and(): S3FetchBucketMetricsConfigurationMetricsConfigurationFilterAnd {
    return new S3FetchBucketMetricsConfigurationMetricsConfigurationFilterAnd(this, 'And', this.__resources, this.input);
  }

}

export class S3FetchBucketMetricsConfigurationMetricsConfigurationFilterTag extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketMetricsConfigurationRequest) {
    super(scope, id);
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketMetricsConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketMetricsConfiguration.MetricsConfiguration.Filter.Tag.Key'),
        outputPath: 'MetricsConfiguration.Filter.Tag.Key',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketMetricsConfiguration.MetricsConfiguration.Filter.Tag.Key', props);
    return resource.getResponseField('MetricsConfiguration.Filter.Tag.Key') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketMetricsConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketMetricsConfiguration.MetricsConfiguration.Filter.Tag.Value'),
        outputPath: 'MetricsConfiguration.Filter.Tag.Value',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketMetricsConfiguration.MetricsConfiguration.Filter.Tag.Value', props);
    return resource.getResponseField('MetricsConfiguration.Filter.Tag.Value') as unknown as string;
  }

}

export class S3FetchBucketMetricsConfigurationMetricsConfigurationFilterAnd extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketMetricsConfigurationRequest) {
    super(scope, id);
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketMetricsConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketMetricsConfiguration.MetricsConfiguration.Filter.And.Prefix'),
        outputPath: 'MetricsConfiguration.Filter.And.Prefix',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketMetricsConfiguration.MetricsConfiguration.Filter.And.Prefix', props);
    return resource.getResponseField('MetricsConfiguration.Filter.And.Prefix') as unknown as string;
  }

  public get tags(): shapes.S3Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketMetricsConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketMetricsConfiguration.MetricsConfiguration.Filter.And.Tags'),
        outputPath: 'MetricsConfiguration.Filter.And.Tags',
        parameters: {
          Bucket: this.input.bucket,
          Id: this.input.id,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketMetricsConfiguration.MetricsConfiguration.Filter.And.Tags', props);
    return resource.getResponseField('MetricsConfiguration.Filter.And.Tags') as unknown as shapes.S3Tag[];
  }

}

export class S3FetchBucketNotification extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketNotificationConfigurationRequest) {
    super(scope, id);
  }

  public get topicConfiguration(): S3FetchBucketNotificationTopicConfiguration {
    return new S3FetchBucketNotificationTopicConfiguration(this, 'TopicConfiguration', this.__resources, this.input);
  }

  public get queueConfiguration(): S3FetchBucketNotificationQueueConfiguration {
    return new S3FetchBucketNotificationQueueConfiguration(this, 'QueueConfiguration', this.__resources, this.input);
  }

  public get cloudFunctionConfiguration(): S3FetchBucketNotificationCloudFunctionConfiguration {
    return new S3FetchBucketNotificationCloudFunctionConfiguration(this, 'CloudFunctionConfiguration', this.__resources, this.input);
  }

}

export class S3FetchBucketNotificationTopicConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketNotificationConfigurationRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketNotification',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketNotification.TopicConfiguration.Id'),
        outputPath: 'TopicConfiguration.Id',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketNotification.TopicConfiguration.Id', props);
    return resource.getResponseField('TopicConfiguration.Id') as unknown as string;
  }

  public get events(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketNotification',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketNotification.TopicConfiguration.Events'),
        outputPath: 'TopicConfiguration.Events',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketNotification.TopicConfiguration.Events', props);
    return resource.getResponseField('TopicConfiguration.Events') as unknown as string[];
  }

  public get event(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketNotification',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketNotification.TopicConfiguration.Event'),
        outputPath: 'TopicConfiguration.Event',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketNotification.TopicConfiguration.Event', props);
    return resource.getResponseField('TopicConfiguration.Event') as unknown as string;
  }

  public get topic(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketNotification',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketNotification.TopicConfiguration.Topic'),
        outputPath: 'TopicConfiguration.Topic',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketNotification.TopicConfiguration.Topic', props);
    return resource.getResponseField('TopicConfiguration.Topic') as unknown as string;
  }

}

export class S3FetchBucketNotificationQueueConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketNotificationConfigurationRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketNotification',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketNotification.QueueConfiguration.Id'),
        outputPath: 'QueueConfiguration.Id',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketNotification.QueueConfiguration.Id', props);
    return resource.getResponseField('QueueConfiguration.Id') as unknown as string;
  }

  public get event(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketNotification',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketNotification.QueueConfiguration.Event'),
        outputPath: 'QueueConfiguration.Event',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketNotification.QueueConfiguration.Event', props);
    return resource.getResponseField('QueueConfiguration.Event') as unknown as string;
  }

  public get events(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketNotification',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketNotification.QueueConfiguration.Events'),
        outputPath: 'QueueConfiguration.Events',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketNotification.QueueConfiguration.Events', props);
    return resource.getResponseField('QueueConfiguration.Events') as unknown as string[];
  }

  public get queue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketNotification',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketNotification.QueueConfiguration.Queue'),
        outputPath: 'QueueConfiguration.Queue',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketNotification.QueueConfiguration.Queue', props);
    return resource.getResponseField('QueueConfiguration.Queue') as unknown as string;
  }

}

export class S3FetchBucketNotificationCloudFunctionConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketNotificationConfigurationRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketNotification',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketNotification.CloudFunctionConfiguration.Id'),
        outputPath: 'CloudFunctionConfiguration.Id',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketNotification.CloudFunctionConfiguration.Id', props);
    return resource.getResponseField('CloudFunctionConfiguration.Id') as unknown as string;
  }

  public get event(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketNotification',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketNotification.CloudFunctionConfiguration.Event'),
        outputPath: 'CloudFunctionConfiguration.Event',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketNotification.CloudFunctionConfiguration.Event', props);
    return resource.getResponseField('CloudFunctionConfiguration.Event') as unknown as string;
  }

  public get events(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketNotification',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketNotification.CloudFunctionConfiguration.Events'),
        outputPath: 'CloudFunctionConfiguration.Events',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketNotification.CloudFunctionConfiguration.Events', props);
    return resource.getResponseField('CloudFunctionConfiguration.Events') as unknown as string[];
  }

  public get cloudFunction(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketNotification',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketNotification.CloudFunctionConfiguration.CloudFunction'),
        outputPath: 'CloudFunctionConfiguration.CloudFunction',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketNotification.CloudFunctionConfiguration.CloudFunction', props);
    return resource.getResponseField('CloudFunctionConfiguration.CloudFunction') as unknown as string;
  }

  public get invocationRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketNotification',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketNotification.CloudFunctionConfiguration.InvocationRole'),
        outputPath: 'CloudFunctionConfiguration.InvocationRole',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketNotification.CloudFunctionConfiguration.InvocationRole', props);
    return resource.getResponseField('CloudFunctionConfiguration.InvocationRole') as unknown as string;
  }

}

export class S3FetchBucketNotificationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketNotificationConfigurationRequest) {
    super(scope, id);
  }

  public get topicConfigurations(): shapes.S3TopicConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketNotificationConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketNotificationConfiguration.TopicConfigurations'),
        outputPath: 'TopicConfigurations',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketNotificationConfiguration.TopicConfigurations', props);
    return resource.getResponseField('TopicConfigurations') as unknown as shapes.S3TopicConfiguration[];
  }

  public get queueConfigurations(): shapes.S3QueueConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketNotificationConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketNotificationConfiguration.QueueConfigurations'),
        outputPath: 'QueueConfigurations',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketNotificationConfiguration.QueueConfigurations', props);
    return resource.getResponseField('QueueConfigurations') as unknown as shapes.S3QueueConfiguration[];
  }

  public get lambdaFunctionConfigurations(): shapes.S3LambdaFunctionConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketNotificationConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketNotificationConfiguration.LambdaFunctionConfigurations'),
        outputPath: 'LambdaFunctionConfigurations',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketNotificationConfiguration.LambdaFunctionConfigurations', props);
    return resource.getResponseField('LambdaFunctionConfigurations') as unknown as shapes.S3LambdaFunctionConfiguration[];
  }

}

export class S3FetchBucketOwnershipControls extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketOwnershipControlsRequest) {
    super(scope, id);
  }

  public get ownershipControls(): S3FetchBucketOwnershipControlsOwnershipControls {
    return new S3FetchBucketOwnershipControlsOwnershipControls(this, 'OwnershipControls', this.__resources, this.input);
  }

}

export class S3FetchBucketOwnershipControlsOwnershipControls extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketOwnershipControlsRequest) {
    super(scope, id);
  }

  public get rules(): shapes.S3OwnershipControlsRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketOwnershipControls',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketOwnershipControls.OwnershipControls.Rules'),
        outputPath: 'OwnershipControls.Rules',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketOwnershipControls.OwnershipControls.Rules', props);
    return resource.getResponseField('OwnershipControls.Rules') as unknown as shapes.S3OwnershipControlsRule[];
  }

}

export class S3FetchBucketPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketPolicyRequest) {
    super(scope, id);
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketPolicy',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketPolicy.Policy'),
        outputPath: 'Policy',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketPolicy.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

}

export class S3FetchBucketPolicyStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketPolicyStatusRequest) {
    super(scope, id);
  }

  public get policyStatus(): S3FetchBucketPolicyStatusPolicyStatus {
    return new S3FetchBucketPolicyStatusPolicyStatus(this, 'PolicyStatus', this.__resources, this.input);
  }

}

export class S3FetchBucketPolicyStatusPolicyStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketPolicyStatusRequest) {
    super(scope, id);
  }

  public get isPublic(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketPolicyStatus',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketPolicyStatus.PolicyStatus.IsPublic'),
        outputPath: 'PolicyStatus.IsPublic',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketPolicyStatus.PolicyStatus.IsPublic', props);
    return resource.getResponseField('PolicyStatus.IsPublic') as unknown as boolean;
  }

}

export class S3FetchBucketReplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketReplicationRequest) {
    super(scope, id);
  }

  public get replicationConfiguration(): S3FetchBucketReplicationReplicationConfiguration {
    return new S3FetchBucketReplicationReplicationConfiguration(this, 'ReplicationConfiguration', this.__resources, this.input);
  }

}

export class S3FetchBucketReplicationReplicationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketReplicationRequest) {
    super(scope, id);
  }

  public get role(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketReplication',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketReplication.ReplicationConfiguration.Role'),
        outputPath: 'ReplicationConfiguration.Role',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketReplication.ReplicationConfiguration.Role', props);
    return resource.getResponseField('ReplicationConfiguration.Role') as unknown as string;
  }

  public get rules(): shapes.S3ReplicationRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketReplication',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketReplication.ReplicationConfiguration.Rules'),
        outputPath: 'ReplicationConfiguration.Rules',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketReplication.ReplicationConfiguration.Rules', props);
    return resource.getResponseField('ReplicationConfiguration.Rules') as unknown as shapes.S3ReplicationRule[];
  }

}

export class S3FetchBucketRequestPayment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketRequestPaymentRequest) {
    super(scope, id);
  }

  public get payer(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketRequestPayment',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketRequestPayment.Payer'),
        outputPath: 'Payer',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketRequestPayment.Payer', props);
    return resource.getResponseField('Payer') as unknown as string;
  }

}

export class S3FetchBucketTagging extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketTaggingRequest) {
    super(scope, id);
  }

  public get tagSet(): shapes.S3Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketTagging',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketTagging.TagSet'),
        outputPath: 'TagSet',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketTagging.TagSet', props);
    return resource.getResponseField('TagSet') as unknown as shapes.S3Tag[];
  }

}

export class S3FetchBucketVersioning extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketVersioningRequest) {
    super(scope, id);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketVersioning',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketVersioning.Status'),
        outputPath: 'Status',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketVersioning.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get mfaDelete(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketVersioning',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketVersioning.MFADelete'),
        outputPath: 'MFADelete',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketVersioning.MFADelete', props);
    return resource.getResponseField('MFADelete') as unknown as string;
  }

}

export class S3FetchBucketWebsite extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketWebsiteRequest) {
    super(scope, id);
  }

  public get redirectAllRequestsTo(): S3FetchBucketWebsiteRedirectAllRequestsTo {
    return new S3FetchBucketWebsiteRedirectAllRequestsTo(this, 'RedirectAllRequestsTo', this.__resources, this.input);
  }

  public get indexDocument(): S3FetchBucketWebsiteIndexDocument {
    return new S3FetchBucketWebsiteIndexDocument(this, 'IndexDocument', this.__resources, this.input);
  }

  public get errorDocument(): S3FetchBucketWebsiteErrorDocument {
    return new S3FetchBucketWebsiteErrorDocument(this, 'ErrorDocument', this.__resources, this.input);
  }

  public get routingRules(): shapes.S3RoutingRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketWebsite',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketWebsite.RoutingRules'),
        outputPath: 'RoutingRules',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketWebsite.RoutingRules', props);
    return resource.getResponseField('RoutingRules') as unknown as shapes.S3RoutingRule[];
  }

}

export class S3FetchBucketWebsiteRedirectAllRequestsTo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketWebsiteRequest) {
    super(scope, id);
  }

  public get hostName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketWebsite',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketWebsite.RedirectAllRequestsTo.HostName'),
        outputPath: 'RedirectAllRequestsTo.HostName',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketWebsite.RedirectAllRequestsTo.HostName', props);
    return resource.getResponseField('RedirectAllRequestsTo.HostName') as unknown as string;
  }

  public get protocol(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketWebsite',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketWebsite.RedirectAllRequestsTo.Protocol'),
        outputPath: 'RedirectAllRequestsTo.Protocol',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketWebsite.RedirectAllRequestsTo.Protocol', props);
    return resource.getResponseField('RedirectAllRequestsTo.Protocol') as unknown as string;
  }

}

export class S3FetchBucketWebsiteIndexDocument extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketWebsiteRequest) {
    super(scope, id);
  }

  public get suffix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketWebsite',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketWebsite.IndexDocument.Suffix'),
        outputPath: 'IndexDocument.Suffix',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketWebsite.IndexDocument.Suffix', props);
    return resource.getResponseField('IndexDocument.Suffix') as unknown as string;
  }

}

export class S3FetchBucketWebsiteErrorDocument extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetBucketWebsiteRequest) {
    super(scope, id);
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketWebsite',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketWebsite.ErrorDocument.Key'),
        outputPath: 'ErrorDocument.Key',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketWebsite.ErrorDocument.Key', props);
    return resource.getResponseField('ErrorDocument.Key') as unknown as string;
  }

}

export class S3FetchObject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetObjectRequest) {
    super(scope, id);
  }

  public get body(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.Body'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.Body', props);
    return resource.getResponseField('Body') as unknown as any;
  }

  public get deleteMarker(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.DeleteMarker'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.DeleteMarker', props);
    return resource.getResponseField('DeleteMarker') as unknown as boolean;
  }

  public get acceptRanges(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.AcceptRanges'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.AcceptRanges', props);
    return resource.getResponseField('AcceptRanges') as unknown as string;
  }

  public get expiration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.Expiration'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.Expiration', props);
    return resource.getResponseField('Expiration') as unknown as string;
  }

  public get restore(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.Restore'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.Restore', props);
    return resource.getResponseField('Restore') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.LastModified'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

  public get contentLength(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.ContentLength'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.ContentLength', props);
    return resource.getResponseField('ContentLength') as unknown as number;
  }

  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.ETag'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }

  public get missingMeta(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.MissingMeta'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.MissingMeta', props);
    return resource.getResponseField('MissingMeta') as unknown as number;
  }

  public get versionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.VersionId'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.VersionId', props);
    return resource.getResponseField('VersionId') as unknown as string;
  }

  public get cacheControl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.CacheControl'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.CacheControl', props);
    return resource.getResponseField('CacheControl') as unknown as string;
  }

  public get contentDisposition(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.ContentDisposition'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.ContentDisposition', props);
    return resource.getResponseField('ContentDisposition') as unknown as string;
  }

  public get contentEncoding(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.ContentEncoding'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.ContentEncoding', props);
    return resource.getResponseField('ContentEncoding') as unknown as string;
  }

  public get contentLanguage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.ContentLanguage'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.ContentLanguage', props);
    return resource.getResponseField('ContentLanguage') as unknown as string;
  }

  public get contentRange(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.ContentRange'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.ContentRange', props);
    return resource.getResponseField('ContentRange') as unknown as string;
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.ContentType'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.ContentType', props);
    return resource.getResponseField('ContentType') as unknown as string;
  }

  public get expires(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.Expires'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.Expires', props);
    return resource.getResponseField('Expires') as unknown as string;
  }

  public get websiteRedirectLocation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.WebsiteRedirectLocation'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.WebsiteRedirectLocation', props);
    return resource.getResponseField('WebsiteRedirectLocation') as unknown as string;
  }

  public get serverSideEncryption(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.ServerSideEncryption'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.ServerSideEncryption', props);
    return resource.getResponseField('ServerSideEncryption') as unknown as string;
  }

  public get metadata(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.Metadata'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.Metadata', props);
    return resource.getResponseField('Metadata') as unknown as Record<string, string>;
  }

  public get sseCustomerAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.SSECustomerAlgorithm'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.SSECustomerAlgorithm', props);
    return resource.getResponseField('SSECustomerAlgorithm') as unknown as string;
  }

  public get sseCustomerKeyMd5(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.SSECustomerKeyMD5'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.SSECustomerKeyMD5', props);
    return resource.getResponseField('SSECustomerKeyMD5') as unknown as string;
  }

  public get ssekmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.SSEKMSKeyId'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.SSEKMSKeyId', props);
    return resource.getResponseField('SSEKMSKeyId') as unknown as string;
  }

  public get storageClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.StorageClass'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.StorageClass', props);
    return resource.getResponseField('StorageClass') as unknown as string;
  }

  public get requestCharged(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.RequestCharged'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

  public get replicationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.ReplicationStatus'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.ReplicationStatus', props);
    return resource.getResponseField('ReplicationStatus') as unknown as string;
  }

  public get partsCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.PartsCount'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.PartsCount', props);
    return resource.getResponseField('PartsCount') as unknown as number;
  }

  public get tagCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.TagCount'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.TagCount', props);
    return resource.getResponseField('TagCount') as unknown as number;
  }

  public get objectLockMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.ObjectLockMode'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.ObjectLockMode', props);
    return resource.getResponseField('ObjectLockMode') as unknown as string;
  }

  public get objectLockRetainUntilDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.ObjectLockRetainUntilDate'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.ObjectLockRetainUntilDate', props);
    return resource.getResponseField('ObjectLockRetainUntilDate') as unknown as string;
  }

  public get objectLockLegalHoldStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObject.ObjectLockLegalHoldStatus'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.ObjectLockLegalHoldStatus', props);
    return resource.getResponseField('ObjectLockLegalHoldStatus') as unknown as string;
  }

}

export class S3FetchObjectAcl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetObjectAclRequest) {
    super(scope, id);
  }

  public get owner(): S3FetchObjectAclOwner {
    return new S3FetchObjectAclOwner(this, 'Owner', this.__resources, this.input);
  }

  public get grants(): shapes.S3Grant[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObjectAcl',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObjectAcl.Grants'),
        outputPath: 'Grants',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          VersionId: this.input.versionId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObjectAcl.Grants', props);
    return resource.getResponseField('Grants') as unknown as shapes.S3Grant[];
  }

  public get requestCharged(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObjectAcl',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObjectAcl.RequestCharged'),
        outputPath: 'RequestCharged',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          VersionId: this.input.versionId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObjectAcl.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3FetchObjectAclOwner extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetObjectAclRequest) {
    super(scope, id);
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObjectAcl',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObjectAcl.Owner.DisplayName'),
        outputPath: 'Owner.DisplayName',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          VersionId: this.input.versionId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObjectAcl.Owner.DisplayName', props);
    return resource.getResponseField('Owner.DisplayName') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObjectAcl',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObjectAcl.Owner.ID'),
        outputPath: 'Owner.ID',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          VersionId: this.input.versionId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObjectAcl.Owner.ID', props);
    return resource.getResponseField('Owner.ID') as unknown as string;
  }

}

export class S3FetchObjectLegalHold extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetObjectLegalHoldRequest) {
    super(scope, id);
  }

  public get legalHold(): S3FetchObjectLegalHoldLegalHold {
    return new S3FetchObjectLegalHoldLegalHold(this, 'LegalHold', this.__resources, this.input);
  }

}

export class S3FetchObjectLegalHoldLegalHold extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetObjectLegalHoldRequest) {
    super(scope, id);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObjectLegalHold',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObjectLegalHold.LegalHold.Status'),
        outputPath: 'LegalHold.Status',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          VersionId: this.input.versionId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObjectLegalHold.LegalHold.Status', props);
    return resource.getResponseField('LegalHold.Status') as unknown as string;
  }

}

export class S3FetchObjectLockConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetObjectLockConfigurationRequest) {
    super(scope, id);
  }

  public get objectLockConfiguration(): S3FetchObjectLockConfigurationObjectLockConfiguration {
    return new S3FetchObjectLockConfigurationObjectLockConfiguration(this, 'ObjectLockConfiguration', this.__resources, this.input);
  }

}

export class S3FetchObjectLockConfigurationObjectLockConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetObjectLockConfigurationRequest) {
    super(scope, id);
  }

  public get objectLockEnabled(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObjectLockConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObjectLockConfiguration.ObjectLockConfiguration.ObjectLockEnabled'),
        outputPath: 'ObjectLockConfiguration.ObjectLockEnabled',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObjectLockConfiguration.ObjectLockConfiguration.ObjectLockEnabled', props);
    return resource.getResponseField('ObjectLockConfiguration.ObjectLockEnabled') as unknown as string;
  }

  public get rule(): S3FetchObjectLockConfigurationObjectLockConfigurationRule {
    return new S3FetchObjectLockConfigurationObjectLockConfigurationRule(this, 'Rule', this.__resources, this.input);
  }

}

export class S3FetchObjectLockConfigurationObjectLockConfigurationRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetObjectLockConfigurationRequest) {
    super(scope, id);
  }

  public get defaultRetention(): S3FetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention {
    return new S3FetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention(this, 'DefaultRetention', this.__resources, this.input);
  }

}

export class S3FetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetObjectLockConfigurationRequest) {
    super(scope, id);
  }

  public get mode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObjectLockConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObjectLockConfiguration.ObjectLockConfiguration.Rule.DefaultRetention.Mode'),
        outputPath: 'ObjectLockConfiguration.Rule.DefaultRetention.Mode',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObjectLockConfiguration.ObjectLockConfiguration.Rule.DefaultRetention.Mode', props);
    return resource.getResponseField('ObjectLockConfiguration.Rule.DefaultRetention.Mode') as unknown as string;
  }

  public get days(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObjectLockConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObjectLockConfiguration.ObjectLockConfiguration.Rule.DefaultRetention.Days'),
        outputPath: 'ObjectLockConfiguration.Rule.DefaultRetention.Days',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObjectLockConfiguration.ObjectLockConfiguration.Rule.DefaultRetention.Days', props);
    return resource.getResponseField('ObjectLockConfiguration.Rule.DefaultRetention.Days') as unknown as number;
  }

  public get years(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObjectLockConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObjectLockConfiguration.ObjectLockConfiguration.Rule.DefaultRetention.Years'),
        outputPath: 'ObjectLockConfiguration.Rule.DefaultRetention.Years',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObjectLockConfiguration.ObjectLockConfiguration.Rule.DefaultRetention.Years', props);
    return resource.getResponseField('ObjectLockConfiguration.Rule.DefaultRetention.Years') as unknown as number;
  }

}

export class S3FetchObjectRetention extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetObjectRetentionRequest) {
    super(scope, id);
  }

  public get retention(): S3FetchObjectRetentionRetention {
    return new S3FetchObjectRetentionRetention(this, 'Retention', this.__resources, this.input);
  }

}

export class S3FetchObjectRetentionRetention extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetObjectRetentionRequest) {
    super(scope, id);
  }

  public get mode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObjectRetention',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObjectRetention.Retention.Mode'),
        outputPath: 'Retention.Mode',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          VersionId: this.input.versionId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObjectRetention.Retention.Mode', props);
    return resource.getResponseField('Retention.Mode') as unknown as string;
  }

  public get retainUntilDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObjectRetention',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObjectRetention.Retention.RetainUntilDate'),
        outputPath: 'Retention.RetainUntilDate',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          VersionId: this.input.versionId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObjectRetention.Retention.RetainUntilDate', props);
    return resource.getResponseField('Retention.RetainUntilDate') as unknown as string;
  }

}

export class S3FetchObjectTagging extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetObjectTaggingRequest) {
    super(scope, id);
  }

  public get versionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObjectTagging',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObjectTagging.VersionId'),
        outputPath: 'VersionId',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          VersionId: this.input.versionId,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObjectTagging.VersionId', props);
    return resource.getResponseField('VersionId') as unknown as string;
  }

  public get tagSet(): shapes.S3Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObjectTagging',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObjectTagging.TagSet'),
        outputPath: 'TagSet',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          VersionId: this.input.versionId,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObjectTagging.TagSet', props);
    return resource.getResponseField('TagSet') as unknown as shapes.S3Tag[];
  }

}

export class S3FetchObjectTorrent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetObjectTorrentRequest) {
    super(scope, id);
  }

  public get body(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObjectTorrent',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObjectTorrent.Body'),
        outputPath: 'Body',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObjectTorrent.Body', props);
    return resource.getResponseField('Body') as unknown as any;
  }

  public get requestCharged(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObjectTorrent',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetObjectTorrent.RequestCharged'),
        outputPath: 'RequestCharged',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObjectTorrent.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3FetchPublicAccessBlock extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetPublicAccessBlockRequest) {
    super(scope, id);
  }

  public get publicAccessBlockConfiguration(): S3FetchPublicAccessBlockPublicAccessBlockConfiguration {
    return new S3FetchPublicAccessBlockPublicAccessBlockConfiguration(this, 'PublicAccessBlockConfiguration', this.__resources, this.input);
  }

}

export class S3FetchPublicAccessBlockPublicAccessBlockConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3GetPublicAccessBlockRequest) {
    super(scope, id);
  }

  public get blockPublicAcls(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPublicAccessBlock',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetPublicAccessBlock.PublicAccessBlockConfiguration.BlockPublicAcls'),
        outputPath: 'PublicAccessBlockConfiguration.BlockPublicAcls',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPublicAccessBlock.PublicAccessBlockConfiguration.BlockPublicAcls', props);
    return resource.getResponseField('PublicAccessBlockConfiguration.BlockPublicAcls') as unknown as boolean;
  }

  public get ignorePublicAcls(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPublicAccessBlock',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetPublicAccessBlock.PublicAccessBlockConfiguration.IgnorePublicAcls'),
        outputPath: 'PublicAccessBlockConfiguration.IgnorePublicAcls',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPublicAccessBlock.PublicAccessBlockConfiguration.IgnorePublicAcls', props);
    return resource.getResponseField('PublicAccessBlockConfiguration.IgnorePublicAcls') as unknown as boolean;
  }

  public get blockPublicPolicy(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPublicAccessBlock',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetPublicAccessBlock.PublicAccessBlockConfiguration.BlockPublicPolicy'),
        outputPath: 'PublicAccessBlockConfiguration.BlockPublicPolicy',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPublicAccessBlock.PublicAccessBlockConfiguration.BlockPublicPolicy', props);
    return resource.getResponseField('PublicAccessBlockConfiguration.BlockPublicPolicy') as unknown as boolean;
  }

  public get restrictPublicBuckets(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPublicAccessBlock',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetPublicAccessBlock.PublicAccessBlockConfiguration.RestrictPublicBuckets'),
        outputPath: 'PublicAccessBlockConfiguration.RestrictPublicBuckets',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPublicAccessBlock.PublicAccessBlockConfiguration.RestrictPublicBuckets', props);
    return resource.getResponseField('PublicAccessBlockConfiguration.RestrictPublicBuckets') as unknown as boolean;
  }

}

export class S3HeadObject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3HeadObjectRequest) {
    super(scope, id);
  }

  public get deleteMarker(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.DeleteMarker'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.DeleteMarker', props);
    return resource.getResponseField('DeleteMarker') as unknown as boolean;
  }

  public get acceptRanges(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.AcceptRanges'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.AcceptRanges', props);
    return resource.getResponseField('AcceptRanges') as unknown as string;
  }

  public get expiration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.Expiration'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.Expiration', props);
    return resource.getResponseField('Expiration') as unknown as string;
  }

  public get restore(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.Restore'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.Restore', props);
    return resource.getResponseField('Restore') as unknown as string;
  }

  public get archiveStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.ArchiveStatus'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.ArchiveStatus', props);
    return resource.getResponseField('ArchiveStatus') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.LastModified'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

  public get contentLength(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.ContentLength'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.ContentLength', props);
    return resource.getResponseField('ContentLength') as unknown as number;
  }

  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.ETag'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }

  public get missingMeta(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.MissingMeta'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.MissingMeta', props);
    return resource.getResponseField('MissingMeta') as unknown as number;
  }

  public get versionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.VersionId'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.VersionId', props);
    return resource.getResponseField('VersionId') as unknown as string;
  }

  public get cacheControl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.CacheControl'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.CacheControl', props);
    return resource.getResponseField('CacheControl') as unknown as string;
  }

  public get contentDisposition(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.ContentDisposition'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.ContentDisposition', props);
    return resource.getResponseField('ContentDisposition') as unknown as string;
  }

  public get contentEncoding(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.ContentEncoding'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.ContentEncoding', props);
    return resource.getResponseField('ContentEncoding') as unknown as string;
  }

  public get contentLanguage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.ContentLanguage'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.ContentLanguage', props);
    return resource.getResponseField('ContentLanguage') as unknown as string;
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.ContentType'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.ContentType', props);
    return resource.getResponseField('ContentType') as unknown as string;
  }

  public get expires(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.Expires'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.Expires', props);
    return resource.getResponseField('Expires') as unknown as string;
  }

  public get websiteRedirectLocation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.WebsiteRedirectLocation'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.WebsiteRedirectLocation', props);
    return resource.getResponseField('WebsiteRedirectLocation') as unknown as string;
  }

  public get serverSideEncryption(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.ServerSideEncryption'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.ServerSideEncryption', props);
    return resource.getResponseField('ServerSideEncryption') as unknown as string;
  }

  public get metadata(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.Metadata'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.Metadata', props);
    return resource.getResponseField('Metadata') as unknown as Record<string, string>;
  }

  public get sseCustomerAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.SSECustomerAlgorithm'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.SSECustomerAlgorithm', props);
    return resource.getResponseField('SSECustomerAlgorithm') as unknown as string;
  }

  public get sseCustomerKeyMd5(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.SSECustomerKeyMD5'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.SSECustomerKeyMD5', props);
    return resource.getResponseField('SSECustomerKeyMD5') as unknown as string;
  }

  public get ssekmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.SSEKMSKeyId'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.SSEKMSKeyId', props);
    return resource.getResponseField('SSEKMSKeyId') as unknown as string;
  }

  public get storageClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.StorageClass'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.StorageClass', props);
    return resource.getResponseField('StorageClass') as unknown as string;
  }

  public get requestCharged(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.RequestCharged'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

  public get replicationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.ReplicationStatus'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.ReplicationStatus', props);
    return resource.getResponseField('ReplicationStatus') as unknown as string;
  }

  public get partsCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.PartsCount'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.PartsCount', props);
    return resource.getResponseField('PartsCount') as unknown as number;
  }

  public get objectLockMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.ObjectLockMode'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.ObjectLockMode', props);
    return resource.getResponseField('ObjectLockMode') as unknown as string;
  }

  public get objectLockRetainUntilDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.ObjectLockRetainUntilDate'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.ObjectLockRetainUntilDate', props);
    return resource.getResponseField('ObjectLockRetainUntilDate') as unknown as string;
  }

  public get objectLockLegalHoldStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.HeadObject.ObjectLockLegalHoldStatus'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'HeadObject.ObjectLockLegalHoldStatus', props);
    return resource.getResponseField('ObjectLockLegalHoldStatus') as unknown as string;
  }

}

export class S3ListBucketAnalyticsConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ListBucketAnalyticsConfigurationsRequest) {
    super(scope, id);
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBucketAnalyticsConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListBucketAnalyticsConfigurations.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBucketAnalyticsConfigurations.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get continuationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBucketAnalyticsConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListBucketAnalyticsConfigurations.ContinuationToken'),
        outputPath: 'ContinuationToken',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBucketAnalyticsConfigurations.ContinuationToken', props);
    return resource.getResponseField('ContinuationToken') as unknown as string;
  }

  public get nextContinuationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBucketAnalyticsConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListBucketAnalyticsConfigurations.NextContinuationToken'),
        outputPath: 'NextContinuationToken',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBucketAnalyticsConfigurations.NextContinuationToken', props);
    return resource.getResponseField('NextContinuationToken') as unknown as string;
  }

  public get analyticsConfigurationList(): shapes.S3AnalyticsConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBucketAnalyticsConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListBucketAnalyticsConfigurations.AnalyticsConfigurationList'),
        outputPath: 'AnalyticsConfigurationList',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBucketAnalyticsConfigurations.AnalyticsConfigurationList', props);
    return resource.getResponseField('AnalyticsConfigurationList') as unknown as shapes.S3AnalyticsConfiguration[];
  }

}

export class S3ListBucketIntelligentTieringConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ListBucketIntelligentTieringConfigurationsRequest) {
    super(scope, id);
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBucketIntelligentTieringConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListBucketIntelligentTieringConfigurations.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBucketIntelligentTieringConfigurations.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get continuationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBucketIntelligentTieringConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListBucketIntelligentTieringConfigurations.ContinuationToken'),
        outputPath: 'ContinuationToken',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBucketIntelligentTieringConfigurations.ContinuationToken', props);
    return resource.getResponseField('ContinuationToken') as unknown as string;
  }

  public get nextContinuationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBucketIntelligentTieringConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListBucketIntelligentTieringConfigurations.NextContinuationToken'),
        outputPath: 'NextContinuationToken',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBucketIntelligentTieringConfigurations.NextContinuationToken', props);
    return resource.getResponseField('NextContinuationToken') as unknown as string;
  }

  public get intelligentTieringConfigurationList(): shapes.S3IntelligentTieringConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBucketIntelligentTieringConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListBucketIntelligentTieringConfigurations.IntelligentTieringConfigurationList'),
        outputPath: 'IntelligentTieringConfigurationList',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBucketIntelligentTieringConfigurations.IntelligentTieringConfigurationList', props);
    return resource.getResponseField('IntelligentTieringConfigurationList') as unknown as shapes.S3IntelligentTieringConfiguration[];
  }

}

export class S3ListBucketInventoryConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ListBucketInventoryConfigurationsRequest) {
    super(scope, id);
  }

  public get continuationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBucketInventoryConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListBucketInventoryConfigurations.ContinuationToken'),
        outputPath: 'ContinuationToken',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBucketInventoryConfigurations.ContinuationToken', props);
    return resource.getResponseField('ContinuationToken') as unknown as string;
  }

  public get inventoryConfigurationList(): shapes.S3InventoryConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBucketInventoryConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListBucketInventoryConfigurations.InventoryConfigurationList'),
        outputPath: 'InventoryConfigurationList',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBucketInventoryConfigurations.InventoryConfigurationList', props);
    return resource.getResponseField('InventoryConfigurationList') as unknown as shapes.S3InventoryConfiguration[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBucketInventoryConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListBucketInventoryConfigurations.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBucketInventoryConfigurations.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get nextContinuationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBucketInventoryConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListBucketInventoryConfigurations.NextContinuationToken'),
        outputPath: 'NextContinuationToken',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBucketInventoryConfigurations.NextContinuationToken', props);
    return resource.getResponseField('NextContinuationToken') as unknown as string;
  }

}

export class S3ListBucketMetricsConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ListBucketMetricsConfigurationsRequest) {
    super(scope, id);
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBucketMetricsConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListBucketMetricsConfigurations.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBucketMetricsConfigurations.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get continuationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBucketMetricsConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListBucketMetricsConfigurations.ContinuationToken'),
        outputPath: 'ContinuationToken',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBucketMetricsConfigurations.ContinuationToken', props);
    return resource.getResponseField('ContinuationToken') as unknown as string;
  }

  public get nextContinuationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBucketMetricsConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListBucketMetricsConfigurations.NextContinuationToken'),
        outputPath: 'NextContinuationToken',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBucketMetricsConfigurations.NextContinuationToken', props);
    return resource.getResponseField('NextContinuationToken') as unknown as string;
  }

  public get metricsConfigurationList(): shapes.S3MetricsConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBucketMetricsConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListBucketMetricsConfigurations.MetricsConfigurationList'),
        outputPath: 'MetricsConfigurationList',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBucketMetricsConfigurations.MetricsConfigurationList', props);
    return resource.getResponseField('MetricsConfigurationList') as unknown as shapes.S3MetricsConfiguration[];
  }

}

export class S3ListBuckets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get buckets(): shapes.S3Bucket[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBuckets',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListBuckets.Buckets'),
        outputPath: 'Buckets',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBuckets.Buckets', props);
    return resource.getResponseField('Buckets') as unknown as shapes.S3Bucket[];
  }

  public get owner(): S3ListBucketsOwner {
    return new S3ListBucketsOwner(this, 'Owner', this.__resources);
  }

}

export class S3ListBucketsOwner extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBuckets',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListBuckets.Owner.DisplayName'),
        outputPath: 'Owner.DisplayName',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBuckets.Owner.DisplayName', props);
    return resource.getResponseField('Owner.DisplayName') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBuckets',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListBuckets.Owner.ID'),
        outputPath: 'Owner.ID',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBuckets.Owner.ID', props);
    return resource.getResponseField('Owner.ID') as unknown as string;
  }

}

export class S3ListMultipartUploads extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ListMultipartUploadsRequest) {
    super(scope, id);
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMultipartUploads',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListMultipartUploads.Bucket'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListMultipartUploads.Bucket', props);
    return resource.getResponseField('Bucket') as unknown as string;
  }

  public get keyMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMultipartUploads',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListMultipartUploads.KeyMarker'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListMultipartUploads.KeyMarker', props);
    return resource.getResponseField('KeyMarker') as unknown as string;
  }

  public get uploadIdMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMultipartUploads',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListMultipartUploads.UploadIdMarker'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListMultipartUploads.UploadIdMarker', props);
    return resource.getResponseField('UploadIdMarker') as unknown as string;
  }

  public get nextKeyMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMultipartUploads',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListMultipartUploads.NextKeyMarker'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListMultipartUploads.NextKeyMarker', props);
    return resource.getResponseField('NextKeyMarker') as unknown as string;
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMultipartUploads',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListMultipartUploads.Prefix'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListMultipartUploads.Prefix', props);
    return resource.getResponseField('Prefix') as unknown as string;
  }

  public get delimiter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMultipartUploads',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListMultipartUploads.Delimiter'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListMultipartUploads.Delimiter', props);
    return resource.getResponseField('Delimiter') as unknown as string;
  }

  public get nextUploadIdMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMultipartUploads',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListMultipartUploads.NextUploadIdMarker'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListMultipartUploads.NextUploadIdMarker', props);
    return resource.getResponseField('NextUploadIdMarker') as unknown as string;
  }

  public get maxUploads(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMultipartUploads',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListMultipartUploads.MaxUploads'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListMultipartUploads.MaxUploads', props);
    return resource.getResponseField('MaxUploads') as unknown as number;
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMultipartUploads',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListMultipartUploads.IsTruncated'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListMultipartUploads.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get uploads(): shapes.S3MultipartUpload[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMultipartUploads',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListMultipartUploads.Uploads'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListMultipartUploads.Uploads', props);
    return resource.getResponseField('Uploads') as unknown as shapes.S3MultipartUpload[];
  }

  public get commonPrefixes(): shapes.S3CommonPrefix[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMultipartUploads',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListMultipartUploads.CommonPrefixes'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListMultipartUploads.CommonPrefixes', props);
    return resource.getResponseField('CommonPrefixes') as unknown as shapes.S3CommonPrefix[];
  }

  public get encodingType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMultipartUploads',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListMultipartUploads.EncodingType'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListMultipartUploads.EncodingType', props);
    return resource.getResponseField('EncodingType') as unknown as string;
  }

}

export class S3ListObjectVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ListObjectVersionsRequest) {
    super(scope, id);
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectVersions',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjectVersions.IsTruncated'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectVersions.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get keyMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectVersions',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjectVersions.KeyMarker'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectVersions.KeyMarker', props);
    return resource.getResponseField('KeyMarker') as unknown as string;
  }

  public get versionIdMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectVersions',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjectVersions.VersionIdMarker'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectVersions.VersionIdMarker', props);
    return resource.getResponseField('VersionIdMarker') as unknown as string;
  }

  public get nextKeyMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectVersions',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjectVersions.NextKeyMarker'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectVersions.NextKeyMarker', props);
    return resource.getResponseField('NextKeyMarker') as unknown as string;
  }

  public get nextVersionIdMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectVersions',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjectVersions.NextVersionIdMarker'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectVersions.NextVersionIdMarker', props);
    return resource.getResponseField('NextVersionIdMarker') as unknown as string;
  }

  public get versions(): shapes.S3ObjectVersion[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectVersions',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjectVersions.Versions'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectVersions.Versions', props);
    return resource.getResponseField('Versions') as unknown as shapes.S3ObjectVersion[];
  }

  public get deleteMarkers(): shapes.S3DeleteMarkerEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectVersions',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjectVersions.DeleteMarkers'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectVersions.DeleteMarkers', props);
    return resource.getResponseField('DeleteMarkers') as unknown as shapes.S3DeleteMarkerEntry[];
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectVersions',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjectVersions.Name'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectVersions.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectVersions',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjectVersions.Prefix'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectVersions.Prefix', props);
    return resource.getResponseField('Prefix') as unknown as string;
  }

  public get delimiter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectVersions',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjectVersions.Delimiter'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectVersions.Delimiter', props);
    return resource.getResponseField('Delimiter') as unknown as string;
  }

  public get maxKeys(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectVersions',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjectVersions.MaxKeys'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectVersions.MaxKeys', props);
    return resource.getResponseField('MaxKeys') as unknown as number;
  }

  public get commonPrefixes(): shapes.S3CommonPrefix[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectVersions',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjectVersions.CommonPrefixes'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectVersions.CommonPrefixes', props);
    return resource.getResponseField('CommonPrefixes') as unknown as shapes.S3CommonPrefix[];
  }

  public get encodingType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectVersions',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjectVersions.EncodingType'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectVersions.EncodingType', props);
    return resource.getResponseField('EncodingType') as unknown as string;
  }

}

export class S3ListObjects extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ListObjectsRequest) {
    super(scope, id);
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjects',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjects.IsTruncated'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjects.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjects',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjects.Marker'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjects.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjects',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjects.NextMarker'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjects.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get contents(): shapes.S3Object[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjects',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjects.Contents'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjects.Contents', props);
    return resource.getResponseField('Contents') as unknown as shapes.S3Object[];
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjects',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjects.Name'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjects.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjects',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjects.Prefix'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjects.Prefix', props);
    return resource.getResponseField('Prefix') as unknown as string;
  }

  public get delimiter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjects',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjects.Delimiter'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjects.Delimiter', props);
    return resource.getResponseField('Delimiter') as unknown as string;
  }

  public get maxKeys(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjects',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjects.MaxKeys'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjects.MaxKeys', props);
    return resource.getResponseField('MaxKeys') as unknown as number;
  }

  public get commonPrefixes(): shapes.S3CommonPrefix[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjects',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjects.CommonPrefixes'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjects.CommonPrefixes', props);
    return resource.getResponseField('CommonPrefixes') as unknown as shapes.S3CommonPrefix[];
  }

  public get encodingType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjects',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjects.EncodingType'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjects.EncodingType', props);
    return resource.getResponseField('EncodingType') as unknown as string;
  }

}

export class S3ListObjectsV2 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ListObjectsV2Request) {
    super(scope, id);
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectsV2',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjectsV2.IsTruncated'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectsV2.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get contents(): shapes.S3Object[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectsV2',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjectsV2.Contents'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectsV2.Contents', props);
    return resource.getResponseField('Contents') as unknown as shapes.S3Object[];
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectsV2',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjectsV2.Name'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectsV2.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectsV2',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjectsV2.Prefix'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectsV2.Prefix', props);
    return resource.getResponseField('Prefix') as unknown as string;
  }

  public get delimiter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectsV2',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjectsV2.Delimiter'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectsV2.Delimiter', props);
    return resource.getResponseField('Delimiter') as unknown as string;
  }

  public get maxKeys(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectsV2',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjectsV2.MaxKeys'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectsV2.MaxKeys', props);
    return resource.getResponseField('MaxKeys') as unknown as number;
  }

  public get commonPrefixes(): shapes.S3CommonPrefix[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectsV2',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjectsV2.CommonPrefixes'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectsV2.CommonPrefixes', props);
    return resource.getResponseField('CommonPrefixes') as unknown as shapes.S3CommonPrefix[];
  }

  public get encodingType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectsV2',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjectsV2.EncodingType'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectsV2.EncodingType', props);
    return resource.getResponseField('EncodingType') as unknown as string;
  }

  public get keyCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectsV2',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjectsV2.KeyCount'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectsV2.KeyCount', props);
    return resource.getResponseField('KeyCount') as unknown as number;
  }

  public get continuationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectsV2',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjectsV2.ContinuationToken'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectsV2.ContinuationToken', props);
    return resource.getResponseField('ContinuationToken') as unknown as string;
  }

  public get nextContinuationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectsV2',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjectsV2.NextContinuationToken'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectsV2.NextContinuationToken', props);
    return resource.getResponseField('NextContinuationToken') as unknown as string;
  }

  public get startAfter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectsV2',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListObjectsV2.StartAfter'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectsV2.StartAfter', props);
    return resource.getResponseField('StartAfter') as unknown as string;
  }

}

export class S3ListParts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ListPartsRequest) {
    super(scope, id);
  }

  public get abortDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListParts.AbortDate'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListParts.AbortDate', props);
    return resource.getResponseField('AbortDate') as unknown as string;
  }

  public get abortRuleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListParts.AbortRuleId'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListParts.AbortRuleId', props);
    return resource.getResponseField('AbortRuleId') as unknown as string;
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListParts.Bucket'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListParts.Bucket', props);
    return resource.getResponseField('Bucket') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListParts.Key'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListParts.Key', props);
    return resource.getResponseField('Key') as unknown as string;
  }

  public get uploadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListParts.UploadId'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListParts.UploadId', props);
    return resource.getResponseField('UploadId') as unknown as string;
  }

  public get partNumberMarker(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListParts.PartNumberMarker'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListParts.PartNumberMarker', props);
    return resource.getResponseField('PartNumberMarker') as unknown as number;
  }

  public get nextPartNumberMarker(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListParts.NextPartNumberMarker'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListParts.NextPartNumberMarker', props);
    return resource.getResponseField('NextPartNumberMarker') as unknown as number;
  }

  public get maxParts(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListParts.MaxParts'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListParts.MaxParts', props);
    return resource.getResponseField('MaxParts') as unknown as number;
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListParts.IsTruncated'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListParts.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get parts(): shapes.S3Part[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListParts.Parts'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListParts.Parts', props);
    return resource.getResponseField('Parts') as unknown as shapes.S3Part[];
  }

  public get initiator(): S3ListPartsInitiator {
    return new S3ListPartsInitiator(this, 'Initiator', this.__resources, this.input);
  }

  public get owner(): S3ListPartsOwner {
    return new S3ListPartsOwner(this, 'Owner', this.__resources, this.input);
  }

  public get storageClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListParts.StorageClass'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListParts.StorageClass', props);
    return resource.getResponseField('StorageClass') as unknown as string;
  }

  public get requestCharged(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListParts.RequestCharged'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListParts.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3ListPartsInitiator extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ListPartsRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListParts.Initiator.ID'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListParts.Initiator.ID', props);
    return resource.getResponseField('Initiator.ID') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListParts.Initiator.DisplayName'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListParts.Initiator.DisplayName', props);
    return resource.getResponseField('Initiator.DisplayName') as unknown as string;
  }

}

export class S3ListPartsOwner extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ListPartsRequest) {
    super(scope, id);
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListParts.Owner.DisplayName'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListParts.Owner.DisplayName', props);
    return resource.getResponseField('Owner.DisplayName') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.ListParts.Owner.ID'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'ListParts.Owner.ID', props);
    return resource.getResponseField('Owner.ID') as unknown as string;
  }

}

export class S3PutObject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3PutObjectRequest) {
    super(scope, id);
  }

  public get expiration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutObject.Expiration'),
        outputPath: 'Expiration',
        parameters: {
          ACL: this.input.acl,
          Body: {
          },
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
          SSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'PutObject.Expiration', props);
    return resource.getResponseField('Expiration') as unknown as string;
  }

  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutObject.ETag'),
        outputPath: 'ETag',
        parameters: {
          ACL: this.input.acl,
          Body: {
          },
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
          SSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'PutObject.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }

  public get serverSideEncryption(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutObject.ServerSideEncryption'),
        outputPath: 'ServerSideEncryption',
        parameters: {
          ACL: this.input.acl,
          Body: {
          },
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
          SSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'PutObject.ServerSideEncryption', props);
    return resource.getResponseField('ServerSideEncryption') as unknown as string;
  }

  public get versionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutObject.VersionId'),
        outputPath: 'VersionId',
        parameters: {
          ACL: this.input.acl,
          Body: {
          },
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
          SSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'PutObject.VersionId', props);
    return resource.getResponseField('VersionId') as unknown as string;
  }

  public get sseCustomerAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutObject.SSECustomerAlgorithm'),
        outputPath: 'SSECustomerAlgorithm',
        parameters: {
          ACL: this.input.acl,
          Body: {
          },
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
          SSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'PutObject.SSECustomerAlgorithm', props);
    return resource.getResponseField('SSECustomerAlgorithm') as unknown as string;
  }

  public get sseCustomerKeyMd5(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutObject.SSECustomerKeyMD5'),
        outputPath: 'SSECustomerKeyMD5',
        parameters: {
          ACL: this.input.acl,
          Body: {
          },
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
          SSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'PutObject.SSECustomerKeyMD5', props);
    return resource.getResponseField('SSECustomerKeyMD5') as unknown as string;
  }

  public get ssekmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutObject.SSEKMSKeyId'),
        outputPath: 'SSEKMSKeyId',
        parameters: {
          ACL: this.input.acl,
          Body: {
          },
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
          SSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'PutObject.SSEKMSKeyId', props);
    return resource.getResponseField('SSEKMSKeyId') as unknown as string;
  }

  public get ssekmsEncryptionContext(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutObject.SSEKMSEncryptionContext'),
        outputPath: 'SSEKMSEncryptionContext',
        parameters: {
          ACL: this.input.acl,
          Body: {
          },
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
          SSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'PutObject.SSEKMSEncryptionContext', props);
    return resource.getResponseField('SSEKMSEncryptionContext') as unknown as string;
  }

  public get requestCharged(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutObject.RequestCharged'),
        outputPath: 'RequestCharged',
        parameters: {
          ACL: this.input.acl,
          Body: {
          },
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
          SSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'PutObject.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3PutObjectAcl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3PutObjectAclRequest) {
    super(scope, id);
  }

  public get requestCharged(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putObjectAcl',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutObjectAcl.RequestCharged'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'PutObjectAcl.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3PutObjectLegalHold extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3PutObjectLegalHoldRequest) {
    super(scope, id);
  }

  public get requestCharged(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putObjectLegalHold',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutObjectLegalHold.RequestCharged'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'PutObjectLegalHold.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3PutObjectLockConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3PutObjectLockConfigurationRequest) {
    super(scope, id);
  }

  public get requestCharged(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putObjectLockConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutObjectLockConfiguration.RequestCharged'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'PutObjectLockConfiguration.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3PutObjectRetention extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3PutObjectRetentionRequest) {
    super(scope, id);
  }

  public get requestCharged(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putObjectRetention',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutObjectRetention.RequestCharged'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'PutObjectRetention.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3PutObjectTagging extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3PutObjectTaggingRequest) {
    super(scope, id);
  }

  public get versionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putObjectTagging',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.PutObjectTagging.VersionId'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'PutObjectTagging.VersionId', props);
    return resource.getResponseField('VersionId') as unknown as string;
  }

}

export class S3RestoreObject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3RestoreObjectRequest) {
    super(scope, id);
  }

  public get requestCharged(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.RestoreObject.RequestCharged'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreObject.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

  public get restoreOutputPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.RestoreObject.RestoreOutputPath'),
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
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreObject.RestoreOutputPath', props);
    return resource.getResponseField('RestoreOutputPath') as unknown as string;
  }

}

export class S3SelectObjectContent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3SelectObjectContentRequest) {
    super(scope, id);
  }

  public get payload(): S3SelectObjectContentPayload {
    return new S3SelectObjectContentPayload(this, 'Payload', this.__resources, this.input);
  }

}

export class S3SelectObjectContentPayload extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3SelectObjectContentRequest) {
    super(scope, id);
  }

  public get records(): S3SelectObjectContentPayloadRecords {
    return new S3SelectObjectContentPayloadRecords(this, 'Records', this.__resources, this.input);
  }

  public get stats(): S3SelectObjectContentPayloadStats {
    return new S3SelectObjectContentPayloadStats(this, 'Stats', this.__resources, this.input);
  }

  public get progress(): S3SelectObjectContentPayloadProgress {
    return new S3SelectObjectContentPayloadProgress(this, 'Progress', this.__resources, this.input);
  }

  public get cont(): S3SelectObjectContentPayloadCont {
    return new S3SelectObjectContentPayloadCont(this, 'Cont');
  }

  public get end(): S3SelectObjectContentPayloadEnd {
    return new S3SelectObjectContentPayloadEnd(this, 'End');
  }

}

export class S3SelectObjectContentPayloadRecords extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3SelectObjectContentRequest) {
    super(scope, id);
  }

  public get payload(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'selectObjectContent',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.SelectObjectContent.Payload.Records.Payload'),
        outputPath: 'Payload.Records.Payload',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'SelectObjectContent.Payload.Records.Payload', props);
    return resource.getResponseField('Payload.Records.Payload') as unknown as any;
  }

}

export class S3SelectObjectContentPayloadStats extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3SelectObjectContentRequest) {
    super(scope, id);
  }

  public get details(): S3SelectObjectContentPayloadStatsDetails {
    return new S3SelectObjectContentPayloadStatsDetails(this, 'Details', this.__resources, this.input);
  }

}

export class S3SelectObjectContentPayloadStatsDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3SelectObjectContentRequest) {
    super(scope, id);
  }

  public get bytesScanned(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'selectObjectContent',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.SelectObjectContent.Payload.Stats.Details.BytesScanned'),
        outputPath: 'Payload.Stats.Details.BytesScanned',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'SelectObjectContent.Payload.Stats.Details.BytesScanned', props);
    return resource.getResponseField('Payload.Stats.Details.BytesScanned') as unknown as number;
  }

  public get bytesProcessed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'selectObjectContent',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.SelectObjectContent.Payload.Stats.Details.BytesProcessed'),
        outputPath: 'Payload.Stats.Details.BytesProcessed',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'SelectObjectContent.Payload.Stats.Details.BytesProcessed', props);
    return resource.getResponseField('Payload.Stats.Details.BytesProcessed') as unknown as number;
  }

  public get bytesReturned(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'selectObjectContent',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.SelectObjectContent.Payload.Stats.Details.BytesReturned'),
        outputPath: 'Payload.Stats.Details.BytesReturned',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'SelectObjectContent.Payload.Stats.Details.BytesReturned', props);
    return resource.getResponseField('Payload.Stats.Details.BytesReturned') as unknown as number;
  }

}

export class S3SelectObjectContentPayloadProgress extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3SelectObjectContentRequest) {
    super(scope, id);
  }

  public get details(): S3SelectObjectContentPayloadProgressDetails {
    return new S3SelectObjectContentPayloadProgressDetails(this, 'Details', this.__resources, this.input);
  }

}

export class S3SelectObjectContentPayloadProgressDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3SelectObjectContentRequest) {
    super(scope, id);
  }

  public get bytesScanned(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'selectObjectContent',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.SelectObjectContent.Payload.Progress.Details.BytesScanned'),
        outputPath: 'Payload.Progress.Details.BytesScanned',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'SelectObjectContent.Payload.Progress.Details.BytesScanned', props);
    return resource.getResponseField('Payload.Progress.Details.BytesScanned') as unknown as number;
  }

  public get bytesProcessed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'selectObjectContent',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.SelectObjectContent.Payload.Progress.Details.BytesProcessed'),
        outputPath: 'Payload.Progress.Details.BytesProcessed',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'SelectObjectContent.Payload.Progress.Details.BytesProcessed', props);
    return resource.getResponseField('Payload.Progress.Details.BytesProcessed') as unknown as number;
  }

  public get bytesReturned(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'selectObjectContent',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.SelectObjectContent.Payload.Progress.Details.BytesReturned'),
        outputPath: 'Payload.Progress.Details.BytesReturned',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
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
    };
    const resource = new cr.AwsCustomResource(this, 'SelectObjectContent.Payload.Progress.Details.BytesReturned', props);
    return resource.getResponseField('Payload.Progress.Details.BytesReturned') as unknown as number;
  }

}

export class S3SelectObjectContentPayloadCont extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);
  }

}

export class S3SelectObjectContentPayloadEnd extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);
  }

}

export class S3UploadPart extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3UploadPartRequest) {
    super(scope, id);
  }

  public get serverSideEncryption(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadPart',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.UploadPart.ServerSideEncryption'),
        outputPath: 'ServerSideEncryption',
        parameters: {
          Body: {
          },
          Bucket: this.input.bucket,
          ContentLength: this.input.contentLength,
          ContentMD5: this.input.contentMd5,
          Key: this.input.key,
          PartNumber: this.input.partNumber,
          UploadId: this.input.uploadId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadPart.ServerSideEncryption', props);
    return resource.getResponseField('ServerSideEncryption') as unknown as string;
  }

  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadPart',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.UploadPart.ETag'),
        outputPath: 'ETag',
        parameters: {
          Body: {
          },
          Bucket: this.input.bucket,
          ContentLength: this.input.contentLength,
          ContentMD5: this.input.contentMd5,
          Key: this.input.key,
          PartNumber: this.input.partNumber,
          UploadId: this.input.uploadId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadPart.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }

  public get sseCustomerAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadPart',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.UploadPart.SSECustomerAlgorithm'),
        outputPath: 'SSECustomerAlgorithm',
        parameters: {
          Body: {
          },
          Bucket: this.input.bucket,
          ContentLength: this.input.contentLength,
          ContentMD5: this.input.contentMd5,
          Key: this.input.key,
          PartNumber: this.input.partNumber,
          UploadId: this.input.uploadId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadPart.SSECustomerAlgorithm', props);
    return resource.getResponseField('SSECustomerAlgorithm') as unknown as string;
  }

  public get sseCustomerKeyMd5(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadPart',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.UploadPart.SSECustomerKeyMD5'),
        outputPath: 'SSECustomerKeyMD5',
        parameters: {
          Body: {
          },
          Bucket: this.input.bucket,
          ContentLength: this.input.contentLength,
          ContentMD5: this.input.contentMd5,
          Key: this.input.key,
          PartNumber: this.input.partNumber,
          UploadId: this.input.uploadId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadPart.SSECustomerKeyMD5', props);
    return resource.getResponseField('SSECustomerKeyMD5') as unknown as string;
  }

  public get ssekmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadPart',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.UploadPart.SSEKMSKeyId'),
        outputPath: 'SSEKMSKeyId',
        parameters: {
          Body: {
          },
          Bucket: this.input.bucket,
          ContentLength: this.input.contentLength,
          ContentMD5: this.input.contentMd5,
          Key: this.input.key,
          PartNumber: this.input.partNumber,
          UploadId: this.input.uploadId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadPart.SSEKMSKeyId', props);
    return resource.getResponseField('SSEKMSKeyId') as unknown as string;
  }

  public get requestCharged(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadPart',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.UploadPart.RequestCharged'),
        outputPath: 'RequestCharged',
        parameters: {
          Body: {
          },
          Bucket: this.input.bucket,
          ContentLength: this.input.contentLength,
          ContentMD5: this.input.contentMd5,
          Key: this.input.key,
          PartNumber: this.input.partNumber,
          UploadId: this.input.uploadId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadPart.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3UploadPartCopy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3UploadPartCopyRequest) {
    super(scope, id);
  }

  public get copySourceVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadPartCopy',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.UploadPartCopy.CopySourceVersionId'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
          CopySourceSSECustomerKeyMD5: this.input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.input.expectedSourceBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadPartCopy.CopySourceVersionId', props);
    return resource.getResponseField('CopySourceVersionId') as unknown as string;
  }

  public get copyPartResult(): S3UploadPartCopyCopyPartResult {
    return new S3UploadPartCopyCopyPartResult(this, 'CopyPartResult', this.__resources, this.input);
  }

  public get serverSideEncryption(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadPartCopy',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.UploadPartCopy.ServerSideEncryption'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
          CopySourceSSECustomerKeyMD5: this.input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.input.expectedSourceBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadPartCopy.ServerSideEncryption', props);
    return resource.getResponseField('ServerSideEncryption') as unknown as string;
  }

  public get sseCustomerAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadPartCopy',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.UploadPartCopy.SSECustomerAlgorithm'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
          CopySourceSSECustomerKeyMD5: this.input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.input.expectedSourceBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadPartCopy.SSECustomerAlgorithm', props);
    return resource.getResponseField('SSECustomerAlgorithm') as unknown as string;
  }

  public get sseCustomerKeyMd5(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadPartCopy',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.UploadPartCopy.SSECustomerKeyMD5'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
          CopySourceSSECustomerKeyMD5: this.input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.input.expectedSourceBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadPartCopy.SSECustomerKeyMD5', props);
    return resource.getResponseField('SSECustomerKeyMD5') as unknown as string;
  }

  public get ssekmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadPartCopy',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.UploadPartCopy.SSEKMSKeyId'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
          CopySourceSSECustomerKeyMD5: this.input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.input.expectedSourceBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadPartCopy.SSEKMSKeyId', props);
    return resource.getResponseField('SSEKMSKeyId') as unknown as string;
  }

  public get requestCharged(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadPartCopy',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.UploadPartCopy.RequestCharged'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
          CopySourceSSECustomerKeyMD5: this.input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.input.expectedSourceBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadPartCopy.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3UploadPartCopyCopyPartResult extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3UploadPartCopyRequest) {
    super(scope, id);
  }

  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadPartCopy',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.UploadPartCopy.CopyPartResult.ETag'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
          CopySourceSSECustomerKeyMD5: this.input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.input.expectedSourceBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadPartCopy.CopyPartResult.ETag', props);
    return resource.getResponseField('CopyPartResult.ETag') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadPartCopy',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.UploadPartCopy.CopyPartResult.LastModified'),
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
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
          CopySourceSSECustomerKeyMD5: this.input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.input.expectedSourceBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadPartCopy.CopyPartResult.LastModified', props);
    return resource.getResponseField('CopyPartResult.LastModified') as unknown as string;
  }

}

