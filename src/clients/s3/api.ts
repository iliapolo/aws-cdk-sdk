import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class S3Client extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public abortMultipartUpload(input: shapes.S3AbortMultipartUploadRequest): S3ResponsesAbortMultipartUpload {
    return new S3ResponsesAbortMultipartUpload(this, this.__resources, input);
  }

  public completeMultipartUpload(input: shapes.S3CompleteMultipartUploadRequest): S3ResponsesCompleteMultipartUpload {
    return new S3ResponsesCompleteMultipartUpload(this, this.__resources, input);
  }

  public copyObject(input: shapes.S3CopyObjectRequest): S3ResponsesCopyObject {
    return new S3ResponsesCopyObject(this, this.__resources, input);
  }

  public createBucket(input: shapes.S3CreateBucketRequest): S3ResponsesCreateBucket {
    return new S3ResponsesCreateBucket(this, this.__resources, input);
  }

  public createMultipartUpload(input: shapes.S3CreateMultipartUploadRequest): S3ResponsesCreateMultipartUpload {
    return new S3ResponsesCreateMultipartUpload(this, this.__resources, input);
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

  public deleteObject(input: shapes.S3DeleteObjectRequest): S3ResponsesDeleteObject {
    return new S3ResponsesDeleteObject(this, this.__resources, input);
  }

  public deleteObjectTagging(input: shapes.S3DeleteObjectTaggingRequest): S3ResponsesDeleteObjectTagging {
    return new S3ResponsesDeleteObjectTagging(this, this.__resources, input);
  }

  public deleteObjects(input: shapes.S3DeleteObjectsRequest): S3ResponsesDeleteObjects {
    return new S3ResponsesDeleteObjects(this, this.__resources, input);
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

  public fetchBucketAccelerateConfiguration(input: shapes.S3GetBucketAccelerateConfigurationRequest): S3ResponsesFetchBucketAccelerateConfiguration {
    return new S3ResponsesFetchBucketAccelerateConfiguration(this, this.__resources, input);
  }

  public fetchBucketAcl(input: shapes.S3GetBucketAclRequest): S3ResponsesFetchBucketAcl {
    return new S3ResponsesFetchBucketAcl(this, this.__resources, input);
  }

  public fetchBucketAnalyticsConfiguration(input: shapes.S3GetBucketAnalyticsConfigurationRequest): S3ResponsesFetchBucketAnalyticsConfiguration {
    return new S3ResponsesFetchBucketAnalyticsConfiguration(this, this.__resources, input);
  }

  public fetchBucketCors(input: shapes.S3GetBucketCorsRequest): S3ResponsesFetchBucketCors {
    return new S3ResponsesFetchBucketCors(this, this.__resources, input);
  }

  public fetchBucketEncryption(input: shapes.S3GetBucketEncryptionRequest): S3ResponsesFetchBucketEncryption {
    return new S3ResponsesFetchBucketEncryption(this, this.__resources, input);
  }

  public fetchBucketIntelligentTieringConfiguration(input: shapes.S3GetBucketIntelligentTieringConfigurationRequest): S3ResponsesFetchBucketIntelligentTieringConfiguration {
    return new S3ResponsesFetchBucketIntelligentTieringConfiguration(this, this.__resources, input);
  }

  public fetchBucketInventoryConfiguration(input: shapes.S3GetBucketInventoryConfigurationRequest): S3ResponsesFetchBucketInventoryConfiguration {
    return new S3ResponsesFetchBucketInventoryConfiguration(this, this.__resources, input);
  }

  public fetchBucketLifecycle(input: shapes.S3GetBucketLifecycleRequest): S3ResponsesFetchBucketLifecycle {
    return new S3ResponsesFetchBucketLifecycle(this, this.__resources, input);
  }

  public fetchBucketLifecycleConfiguration(input: shapes.S3GetBucketLifecycleConfigurationRequest): S3ResponsesFetchBucketLifecycleConfiguration {
    return new S3ResponsesFetchBucketLifecycleConfiguration(this, this.__resources, input);
  }

  public fetchBucketLocation(input: shapes.S3GetBucketLocationRequest): S3ResponsesFetchBucketLocation {
    return new S3ResponsesFetchBucketLocation(this, this.__resources, input);
  }

  public fetchBucketLogging(input: shapes.S3GetBucketLoggingRequest): S3ResponsesFetchBucketLogging {
    return new S3ResponsesFetchBucketLogging(this, this.__resources, input);
  }

  public fetchBucketMetricsConfiguration(input: shapes.S3GetBucketMetricsConfigurationRequest): S3ResponsesFetchBucketMetricsConfiguration {
    return new S3ResponsesFetchBucketMetricsConfiguration(this, this.__resources, input);
  }

  public fetchBucketNotification(input: shapes.S3GetBucketNotificationConfigurationRequest): S3ResponsesFetchBucketNotification {
    return new S3ResponsesFetchBucketNotification(this, this.__resources, input);
  }

  public fetchBucketNotificationConfiguration(input: shapes.S3GetBucketNotificationConfigurationRequest): S3ResponsesFetchBucketNotificationConfiguration {
    return new S3ResponsesFetchBucketNotificationConfiguration(this, this.__resources, input);
  }

  public fetchBucketOwnershipControls(input: shapes.S3GetBucketOwnershipControlsRequest): S3ResponsesFetchBucketOwnershipControls {
    return new S3ResponsesFetchBucketOwnershipControls(this, this.__resources, input);
  }

  public fetchBucketPolicy(input: shapes.S3GetBucketPolicyRequest): S3ResponsesFetchBucketPolicy {
    return new S3ResponsesFetchBucketPolicy(this, this.__resources, input);
  }

  public fetchBucketPolicyStatus(input: shapes.S3GetBucketPolicyStatusRequest): S3ResponsesFetchBucketPolicyStatus {
    return new S3ResponsesFetchBucketPolicyStatus(this, this.__resources, input);
  }

  public fetchBucketReplication(input: shapes.S3GetBucketReplicationRequest): S3ResponsesFetchBucketReplication {
    return new S3ResponsesFetchBucketReplication(this, this.__resources, input);
  }

  public fetchBucketRequestPayment(input: shapes.S3GetBucketRequestPaymentRequest): S3ResponsesFetchBucketRequestPayment {
    return new S3ResponsesFetchBucketRequestPayment(this, this.__resources, input);
  }

  public fetchBucketTagging(input: shapes.S3GetBucketTaggingRequest): S3ResponsesFetchBucketTagging {
    return new S3ResponsesFetchBucketTagging(this, this.__resources, input);
  }

  public fetchBucketVersioning(input: shapes.S3GetBucketVersioningRequest): S3ResponsesFetchBucketVersioning {
    return new S3ResponsesFetchBucketVersioning(this, this.__resources, input);
  }

  public fetchBucketWebsite(input: shapes.S3GetBucketWebsiteRequest): S3ResponsesFetchBucketWebsite {
    return new S3ResponsesFetchBucketWebsite(this, this.__resources, input);
  }

  public fetchObject(input: shapes.S3GetObjectRequest): S3ResponsesFetchObject {
    return new S3ResponsesFetchObject(this, this.__resources, input);
  }

  public fetchObjectAcl(input: shapes.S3GetObjectAclRequest): S3ResponsesFetchObjectAcl {
    return new S3ResponsesFetchObjectAcl(this, this.__resources, input);
  }

  public fetchObjectLegalHold(input: shapes.S3GetObjectLegalHoldRequest): S3ResponsesFetchObjectLegalHold {
    return new S3ResponsesFetchObjectLegalHold(this, this.__resources, input);
  }

  public fetchObjectLockConfiguration(input: shapes.S3GetObjectLockConfigurationRequest): S3ResponsesFetchObjectLockConfiguration {
    return new S3ResponsesFetchObjectLockConfiguration(this, this.__resources, input);
  }

  public fetchObjectRetention(input: shapes.S3GetObjectRetentionRequest): S3ResponsesFetchObjectRetention {
    return new S3ResponsesFetchObjectRetention(this, this.__resources, input);
  }

  public fetchObjectTagging(input: shapes.S3GetObjectTaggingRequest): S3ResponsesFetchObjectTagging {
    return new S3ResponsesFetchObjectTagging(this, this.__resources, input);
  }

  public fetchObjectTorrent(input: shapes.S3GetObjectTorrentRequest): S3ResponsesFetchObjectTorrent {
    return new S3ResponsesFetchObjectTorrent(this, this.__resources, input);
  }

  public fetchPublicAccessBlock(input: shapes.S3GetPublicAccessBlockRequest): S3ResponsesFetchPublicAccessBlock {
    return new S3ResponsesFetchPublicAccessBlock(this, this.__resources, input);
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

  public headObject(input: shapes.S3HeadObjectRequest): S3ResponsesHeadObject {
    return new S3ResponsesHeadObject(this, this.__resources, input);
  }

  public listBucketAnalyticsConfigurations(input: shapes.S3ListBucketAnalyticsConfigurationsRequest): S3ResponsesListBucketAnalyticsConfigurations {
    return new S3ResponsesListBucketAnalyticsConfigurations(this, this.__resources, input);
  }

  public listBucketIntelligentTieringConfigurations(input: shapes.S3ListBucketIntelligentTieringConfigurationsRequest): S3ResponsesListBucketIntelligentTieringConfigurations {
    return new S3ResponsesListBucketIntelligentTieringConfigurations(this, this.__resources, input);
  }

  public listBucketInventoryConfigurations(input: shapes.S3ListBucketInventoryConfigurationsRequest): S3ResponsesListBucketInventoryConfigurations {
    return new S3ResponsesListBucketInventoryConfigurations(this, this.__resources, input);
  }

  public listBucketMetricsConfigurations(input: shapes.S3ListBucketMetricsConfigurationsRequest): S3ResponsesListBucketMetricsConfigurations {
    return new S3ResponsesListBucketMetricsConfigurations(this, this.__resources, input);
  }

  public listBuckets(): S3ResponsesListBuckets {
    return new S3ResponsesListBuckets(this, this.__resources);
  }

  public listMultipartUploads(input: shapes.S3ListMultipartUploadsRequest): S3ResponsesListMultipartUploads {
    return new S3ResponsesListMultipartUploads(this, this.__resources, input);
  }

  public listObjectVersions(input: shapes.S3ListObjectVersionsRequest): S3ResponsesListObjectVersions {
    return new S3ResponsesListObjectVersions(this, this.__resources, input);
  }

  public listObjects(input: shapes.S3ListObjectsRequest): S3ResponsesListObjects {
    return new S3ResponsesListObjects(this, this.__resources, input);
  }

  public listObjectsV2(input: shapes.S3ListObjectsV2Request): S3ResponsesListObjectsV2 {
    return new S3ResponsesListObjectsV2(this, this.__resources, input);
  }

  public listParts(input: shapes.S3ListPartsRequest): S3ResponsesListParts {
    return new S3ResponsesListParts(this, this.__resources, input);
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

  public putObject(input: shapes.S3PutObjectRequest): S3ResponsesPutObject {
    return new S3ResponsesPutObject(this, this.__resources, input);
  }

  public putObjectAcl(input: shapes.S3PutObjectAclRequest): S3ResponsesPutObjectAcl {
    return new S3ResponsesPutObjectAcl(this, this.__resources, input);
  }

  public putObjectLegalHold(input: shapes.S3PutObjectLegalHoldRequest): S3ResponsesPutObjectLegalHold {
    return new S3ResponsesPutObjectLegalHold(this, this.__resources, input);
  }

  public putObjectLockConfiguration(input: shapes.S3PutObjectLockConfigurationRequest): S3ResponsesPutObjectLockConfiguration {
    return new S3ResponsesPutObjectLockConfiguration(this, this.__resources, input);
  }

  public putObjectRetention(input: shapes.S3PutObjectRetentionRequest): S3ResponsesPutObjectRetention {
    return new S3ResponsesPutObjectRetention(this, this.__resources, input);
  }

  public putObjectTagging(input: shapes.S3PutObjectTaggingRequest): S3ResponsesPutObjectTagging {
    return new S3ResponsesPutObjectTagging(this, this.__resources, input);
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

  public restoreObject(input: shapes.S3RestoreObjectRequest): S3ResponsesRestoreObject {
    return new S3ResponsesRestoreObject(this, this.__resources, input);
  }

  public selectObjectContent(input: shapes.S3SelectObjectContentRequest): S3ResponsesSelectObjectContent {
    return new S3ResponsesSelectObjectContent(this, this.__resources, input);
  }

  public uploadPart(input: shapes.S3UploadPartRequest): S3ResponsesUploadPart {
    return new S3ResponsesUploadPart(this, this.__resources, input);
  }

  public uploadPartCopy(input: shapes.S3UploadPartCopyRequest): S3ResponsesUploadPartCopy {
    return new S3ResponsesUploadPartCopy(this, this.__resources, input);
  }

}

export class S3ResponsesAbortMultipartUpload {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3AbortMultipartUploadRequest) {
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          UploadId: this.__input.uploadId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AbortMultipartUpload.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3ResponsesCompleteMultipartUpload {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3CompleteMultipartUploadRequest) {
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MultipartUpload: {
            Parts: this.__input.multipartUpload?.parts,
          },
          UploadId: this.__input.uploadId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMultipartUpload.Location', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MultipartUpload: {
            Parts: this.__input.multipartUpload?.parts,
          },
          UploadId: this.__input.uploadId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMultipartUpload.Bucket', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MultipartUpload: {
            Parts: this.__input.multipartUpload?.parts,
          },
          UploadId: this.__input.uploadId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMultipartUpload.Key', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MultipartUpload: {
            Parts: this.__input.multipartUpload?.parts,
          },
          UploadId: this.__input.uploadId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMultipartUpload.Expiration', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MultipartUpload: {
            Parts: this.__input.multipartUpload?.parts,
          },
          UploadId: this.__input.uploadId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMultipartUpload.ETag', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MultipartUpload: {
            Parts: this.__input.multipartUpload?.parts,
          },
          UploadId: this.__input.uploadId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMultipartUpload.ServerSideEncryption', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MultipartUpload: {
            Parts: this.__input.multipartUpload?.parts,
          },
          UploadId: this.__input.uploadId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMultipartUpload.VersionId', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MultipartUpload: {
            Parts: this.__input.multipartUpload?.parts,
          },
          UploadId: this.__input.uploadId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMultipartUpload.SSEKMSKeyId', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MultipartUpload: {
            Parts: this.__input.multipartUpload?.parts,
          },
          UploadId: this.__input.uploadId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMultipartUpload.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3ResponsesCopyObject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3CopyObjectRequest) {
  }

  public get copyObjectResult(): S3ResponsesCopyObjectCopyObjectResult {
    return new S3ResponsesCopyObjectCopyObjectResult(this.__scope, this.__resources, this.__input);
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
          ACL: this.__input.acl,
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentType: this.__input.contentType,
          CopySource: this.__input.copySource,
          CopySourceIfMatch: this.__input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.__input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.__input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.__input.copySourceIfUnmodifiedSince,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          MetadataDirective: this.__input.metadataDirective,
          TaggingDirective: this.__input.taggingDirective,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.__input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
          CopySourceSSECustomerKeyMD5: this.__input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.__input.expectedSourceBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyObject.Expiration', props);
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
          ACL: this.__input.acl,
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentType: this.__input.contentType,
          CopySource: this.__input.copySource,
          CopySourceIfMatch: this.__input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.__input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.__input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.__input.copySourceIfUnmodifiedSince,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          MetadataDirective: this.__input.metadataDirective,
          TaggingDirective: this.__input.taggingDirective,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.__input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
          CopySourceSSECustomerKeyMD5: this.__input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.__input.expectedSourceBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyObject.CopySourceVersionId', props);
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
          ACL: this.__input.acl,
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentType: this.__input.contentType,
          CopySource: this.__input.copySource,
          CopySourceIfMatch: this.__input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.__input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.__input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.__input.copySourceIfUnmodifiedSince,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          MetadataDirective: this.__input.metadataDirective,
          TaggingDirective: this.__input.taggingDirective,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.__input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
          CopySourceSSECustomerKeyMD5: this.__input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.__input.expectedSourceBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyObject.VersionId', props);
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
          ACL: this.__input.acl,
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentType: this.__input.contentType,
          CopySource: this.__input.copySource,
          CopySourceIfMatch: this.__input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.__input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.__input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.__input.copySourceIfUnmodifiedSince,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          MetadataDirective: this.__input.metadataDirective,
          TaggingDirective: this.__input.taggingDirective,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.__input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
          CopySourceSSECustomerKeyMD5: this.__input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.__input.expectedSourceBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyObject.ServerSideEncryption', props);
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
          ACL: this.__input.acl,
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentType: this.__input.contentType,
          CopySource: this.__input.copySource,
          CopySourceIfMatch: this.__input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.__input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.__input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.__input.copySourceIfUnmodifiedSince,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          MetadataDirective: this.__input.metadataDirective,
          TaggingDirective: this.__input.taggingDirective,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.__input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
          CopySourceSSECustomerKeyMD5: this.__input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.__input.expectedSourceBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyObject.SSECustomerAlgorithm', props);
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
          ACL: this.__input.acl,
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentType: this.__input.contentType,
          CopySource: this.__input.copySource,
          CopySourceIfMatch: this.__input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.__input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.__input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.__input.copySourceIfUnmodifiedSince,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          MetadataDirective: this.__input.metadataDirective,
          TaggingDirective: this.__input.taggingDirective,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.__input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
          CopySourceSSECustomerKeyMD5: this.__input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.__input.expectedSourceBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyObject.SSECustomerKeyMD5', props);
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
          ACL: this.__input.acl,
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentType: this.__input.contentType,
          CopySource: this.__input.copySource,
          CopySourceIfMatch: this.__input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.__input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.__input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.__input.copySourceIfUnmodifiedSince,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          MetadataDirective: this.__input.metadataDirective,
          TaggingDirective: this.__input.taggingDirective,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.__input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
          CopySourceSSECustomerKeyMD5: this.__input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.__input.expectedSourceBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyObject.SSEKMSKeyId', props);
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
          ACL: this.__input.acl,
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentType: this.__input.contentType,
          CopySource: this.__input.copySource,
          CopySourceIfMatch: this.__input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.__input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.__input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.__input.copySourceIfUnmodifiedSince,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          MetadataDirective: this.__input.metadataDirective,
          TaggingDirective: this.__input.taggingDirective,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.__input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
          CopySourceSSECustomerKeyMD5: this.__input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.__input.expectedSourceBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyObject.SSEKMSEncryptionContext', props);
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
          ACL: this.__input.acl,
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentType: this.__input.contentType,
          CopySource: this.__input.copySource,
          CopySourceIfMatch: this.__input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.__input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.__input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.__input.copySourceIfUnmodifiedSince,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          MetadataDirective: this.__input.metadataDirective,
          TaggingDirective: this.__input.taggingDirective,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.__input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
          CopySourceSSECustomerKeyMD5: this.__input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.__input.expectedSourceBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyObject.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3ResponsesCopyObjectCopyObjectResult {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3CopyObjectRequest) {
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
          ACL: this.__input.acl,
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentType: this.__input.contentType,
          CopySource: this.__input.copySource,
          CopySourceIfMatch: this.__input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.__input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.__input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.__input.copySourceIfUnmodifiedSince,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          MetadataDirective: this.__input.metadataDirective,
          TaggingDirective: this.__input.taggingDirective,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.__input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
          CopySourceSSECustomerKeyMD5: this.__input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.__input.expectedSourceBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyObject.CopyObjectResult.ETag', props);
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
          ACL: this.__input.acl,
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentType: this.__input.contentType,
          CopySource: this.__input.copySource,
          CopySourceIfMatch: this.__input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.__input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.__input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.__input.copySourceIfUnmodifiedSince,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          MetadataDirective: this.__input.metadataDirective,
          TaggingDirective: this.__input.taggingDirective,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.__input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
          CopySourceSSECustomerKeyMD5: this.__input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.__input.expectedSourceBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyObject.CopyObjectResult.LastModified', props);
    return resource.getResponseField('CopyObjectResult.LastModified') as unknown as string;
  }

}

export class S3ResponsesCreateBucket {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3CreateBucketRequest) {
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
          ACL: this.__input.acl,
          Bucket: this.__input.bucket,
          CreateBucketConfiguration: {
            LocationConstraint: this.__input.createBucketConfiguration?.locationConstraint,
          },
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWrite: this.__input.grantWrite,
          GrantWriteACP: this.__input.grantWriteAcp,
          ObjectLockEnabledForBucket: this.__input.objectLockEnabledForBucket,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucket.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }

}

export class S3ResponsesCreateMultipartUpload {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3CreateMultipartUploadRequest) {
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
          ACL: this.__input.acl,
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentType: this.__input.contentType,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMultipartUpload.AbortDate', props);
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
          ACL: this.__input.acl,
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentType: this.__input.contentType,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMultipartUpload.AbortRuleId', props);
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
          ACL: this.__input.acl,
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentType: this.__input.contentType,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMultipartUpload.Bucket', props);
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
          ACL: this.__input.acl,
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentType: this.__input.contentType,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMultipartUpload.Key', props);
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
          ACL: this.__input.acl,
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentType: this.__input.contentType,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMultipartUpload.UploadId', props);
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
          ACL: this.__input.acl,
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentType: this.__input.contentType,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMultipartUpload.ServerSideEncryption', props);
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
          ACL: this.__input.acl,
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentType: this.__input.contentType,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMultipartUpload.SSECustomerAlgorithm', props);
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
          ACL: this.__input.acl,
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentType: this.__input.contentType,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMultipartUpload.SSECustomerKeyMD5', props);
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
          ACL: this.__input.acl,
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentType: this.__input.contentType,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMultipartUpload.SSEKMSKeyId', props);
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
          ACL: this.__input.acl,
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentType: this.__input.contentType,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMultipartUpload.SSEKMSEncryptionContext', props);
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
          ACL: this.__input.acl,
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentType: this.__input.contentType,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMultipartUpload.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3ResponsesDeleteObject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3DeleteObjectRequest) {
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MFA: this.__input.mfa,
          VersionId: this.__input.versionId,
          RequestPayer: this.__input.requestPayer,
          BypassGovernanceRetention: this.__input.bypassGovernanceRetention,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteObject.DeleteMarker', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MFA: this.__input.mfa,
          VersionId: this.__input.versionId,
          RequestPayer: this.__input.requestPayer,
          BypassGovernanceRetention: this.__input.bypassGovernanceRetention,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteObject.VersionId', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MFA: this.__input.mfa,
          VersionId: this.__input.versionId,
          RequestPayer: this.__input.requestPayer,
          BypassGovernanceRetention: this.__input.bypassGovernanceRetention,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteObject.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3ResponsesDeleteObjectTagging {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3DeleteObjectTaggingRequest) {
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          VersionId: this.__input.versionId,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteObjectTagging.VersionId', props);
    return resource.getResponseField('VersionId') as unknown as string;
  }

}

export class S3ResponsesDeleteObjects {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3DeleteObjectsRequest) {
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
          Bucket: this.__input.bucket,
          Delete: {
            Objects: this.__input.delete.objects,
            Quiet: this.__input.delete.quiet,
          },
          MFA: this.__input.mfa,
          RequestPayer: this.__input.requestPayer,
          BypassGovernanceRetention: this.__input.bypassGovernanceRetention,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteObjects.Deleted', props);
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
          Bucket: this.__input.bucket,
          Delete: {
            Objects: this.__input.delete.objects,
            Quiet: this.__input.delete.quiet,
          },
          MFA: this.__input.mfa,
          RequestPayer: this.__input.requestPayer,
          BypassGovernanceRetention: this.__input.bypassGovernanceRetention,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteObjects.RequestCharged', props);
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
          Bucket: this.__input.bucket,
          Delete: {
            Objects: this.__input.delete.objects,
            Quiet: this.__input.delete.quiet,
          },
          MFA: this.__input.mfa,
          RequestPayer: this.__input.requestPayer,
          BypassGovernanceRetention: this.__input.bypassGovernanceRetention,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteObjects.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.S3Error[];
  }

}

export class S3ResponsesFetchBucketAccelerateConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketAccelerateConfigurationRequest) {
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketAccelerateConfiguration.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class S3ResponsesFetchBucketAcl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketAclRequest) {
  }

  public get owner(): S3ResponsesFetchBucketAclOwner {
    return new S3ResponsesFetchBucketAclOwner(this.__scope, this.__resources, this.__input);
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketAcl.Grants', props);
    return resource.getResponseField('Grants') as unknown as shapes.S3Grant[];
  }

}

export class S3ResponsesFetchBucketAclOwner {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketAclRequest) {
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketAcl.Owner.DisplayName', props);
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketAcl.Owner.ID', props);
    return resource.getResponseField('Owner.ID') as unknown as string;
  }

}

export class S3ResponsesFetchBucketAnalyticsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketAnalyticsConfigurationRequest) {
  }

  public get analyticsConfiguration(): S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration {
    return new S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketAnalyticsConfigurationRequest) {
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Id', props);
    return resource.getResponseField('AnalyticsConfiguration.Id') as unknown as string;
  }

  public get filter(): S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter {
    return new S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter(this.__scope, this.__resources, this.__input);
  }

  public get storageClassAnalysis(): S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysis {
    return new S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysis(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketAnalyticsConfigurationRequest) {
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Filter.Prefix', props);
    return resource.getResponseField('AnalyticsConfiguration.Filter.Prefix') as unknown as string;
  }

  public get tag(): S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag {
    return new S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag(this.__scope, this.__resources, this.__input);
  }

  public get and(): S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd {
    return new S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterTag {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketAnalyticsConfigurationRequest) {
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Filter.Tag.Key', props);
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Filter.Tag.Value', props);
    return resource.getResponseField('AnalyticsConfiguration.Filter.Tag.Value') as unknown as string;
  }

}

export class S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationFilterAnd {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketAnalyticsConfigurationRequest) {
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Filter.And.Prefix', props);
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Filter.And.Tags', props);
    return resource.getResponseField('AnalyticsConfiguration.Filter.And.Tags') as unknown as shapes.S3Tag[];
  }

}

export class S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysis {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketAnalyticsConfigurationRequest) {
  }

  public get dataExport(): S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport {
    return new S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketAnalyticsConfigurationRequest) {
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.StorageClassAnalysis.DataExport.OutputSchemaVersion', props);
    return resource.getResponseField('AnalyticsConfiguration.StorageClassAnalysis.DataExport.OutputSchemaVersion') as unknown as string;
  }

  public get destination(): S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestination {
    return new S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestination(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketAnalyticsConfigurationRequest) {
  }

  public get s3BucketDestination(): S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination {
    return new S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchBucketAnalyticsConfigurationAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketAnalyticsConfigurationRequest) {
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Format', props);
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.BucketAccountId', props);
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Bucket', props);
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Prefix', props);
    return resource.getResponseField('AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Prefix') as unknown as string;
  }

}

export class S3ResponsesFetchBucketCors {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketCorsRequest) {
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketCors.CORSRules', props);
    return resource.getResponseField('CORSRules') as unknown as shapes.S3CorsRule[];
  }

}

export class S3ResponsesFetchBucketEncryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketEncryptionRequest) {
  }

  public get serverSideEncryptionConfiguration(): S3ResponsesFetchBucketEncryptionServerSideEncryptionConfiguration {
    return new S3ResponsesFetchBucketEncryptionServerSideEncryptionConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchBucketEncryptionServerSideEncryptionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketEncryptionRequest) {
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketEncryption.ServerSideEncryptionConfiguration.Rules', props);
    return resource.getResponseField('ServerSideEncryptionConfiguration.Rules') as unknown as shapes.S3ServerSideEncryptionRule[];
  }

}

export class S3ResponsesFetchBucketIntelligentTieringConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketIntelligentTieringConfigurationRequest) {
  }

  public get intelligentTieringConfiguration(): S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration {
    return new S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketIntelligentTieringConfigurationRequest) {
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Id', props);
    return resource.getResponseField('IntelligentTieringConfiguration.Id') as unknown as string;
  }

  public get filter(): S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter {
    return new S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter(this.__scope, this.__resources, this.__input);
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Status', props);
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Tierings', props);
    return resource.getResponseField('IntelligentTieringConfiguration.Tierings') as unknown as shapes.S3Tiering[];
  }

}

export class S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketIntelligentTieringConfigurationRequest) {
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Filter.Prefix', props);
    return resource.getResponseField('IntelligentTieringConfiguration.Filter.Prefix') as unknown as string;
  }

  public get tag(): S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag {
    return new S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag(this.__scope, this.__resources, this.__input);
  }

  public get and(): S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd {
    return new S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterTag {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketIntelligentTieringConfigurationRequest) {
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Filter.Tag.Key', props);
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Filter.Tag.Value', props);
    return resource.getResponseField('IntelligentTieringConfiguration.Filter.Tag.Value') as unknown as string;
  }

}

export class S3ResponsesFetchBucketIntelligentTieringConfigurationIntelligentTieringConfigurationFilterAnd {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketIntelligentTieringConfigurationRequest) {
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Filter.And.Prefix', props);
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Filter.And.Tags', props);
    return resource.getResponseField('IntelligentTieringConfiguration.Filter.And.Tags') as unknown as shapes.S3Tag[];
  }

}

export class S3ResponsesFetchBucketInventoryConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketInventoryConfigurationRequest) {
  }

  public get inventoryConfiguration(): S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration {
    return new S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchBucketInventoryConfigurationInventoryConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketInventoryConfigurationRequest) {
  }

  public get destination(): S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestination {
    return new S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestination(this.__scope, this.__resources, this.__input);
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketInventoryConfiguration.InventoryConfiguration.IsEnabled', props);
    return resource.getResponseField('InventoryConfiguration.IsEnabled') as unknown as boolean;
  }

  public get filter(): S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationFilter {
    return new S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationFilter(this.__scope, this.__resources, this.__input);
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketInventoryConfiguration.InventoryConfiguration.Id', props);
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketInventoryConfiguration.InventoryConfiguration.IncludedObjectVersions', props);
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketInventoryConfiguration.InventoryConfiguration.OptionalFields', props);
    return resource.getResponseField('InventoryConfiguration.OptionalFields') as unknown as string[];
  }

  public get schedule(): S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationSchedule {
    return new S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationSchedule(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketInventoryConfigurationRequest) {
  }

  public get s3BucketDestination(): S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination {
    return new S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketInventoryConfigurationRequest) {
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketInventoryConfiguration.InventoryConfiguration.Destination.S3BucketDestination.AccountId', props);
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketInventoryConfiguration.InventoryConfiguration.Destination.S3BucketDestination.Bucket', props);
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketInventoryConfiguration.InventoryConfiguration.Destination.S3BucketDestination.Format', props);
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketInventoryConfiguration.InventoryConfiguration.Destination.S3BucketDestination.Prefix', props);
    return resource.getResponseField('InventoryConfiguration.Destination.S3BucketDestination.Prefix') as unknown as string;
  }

  public get encryption(): S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption {
    return new S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketInventoryConfigurationRequest) {
  }

  public get sses3(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketInventoryConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.GetBucketInventoryConfiguration.InventoryConfiguration.Destination.S3BucketDestination.Encryption.SSES3'),
        outputPath: 'InventoryConfiguration.Destination.S3BucketDestination.Encryption.SSES3',
        parameters: {
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketInventoryConfiguration.InventoryConfiguration.Destination.S3BucketDestination.Encryption.SSES3', props);
    return resource.getResponseField('InventoryConfiguration.Destination.S3BucketDestination.Encryption.SSES3') as unknown as any;
  }

  public get ssekms(): S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSsekms {
    return new S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSsekms(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationDestinationS3BucketDestinationEncryptionSsekms {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketInventoryConfigurationRequest) {
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketInventoryConfiguration.InventoryConfiguration.Destination.S3BucketDestination.Encryption.SSEKMS.KeyId', props);
    return resource.getResponseField('InventoryConfiguration.Destination.S3BucketDestination.Encryption.SSEKMS.KeyId') as unknown as string;
  }

}

export class S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationFilter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketInventoryConfigurationRequest) {
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketInventoryConfiguration.InventoryConfiguration.Filter.Prefix', props);
    return resource.getResponseField('InventoryConfiguration.Filter.Prefix') as unknown as string;
  }

}

export class S3ResponsesFetchBucketInventoryConfigurationInventoryConfigurationSchedule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketInventoryConfigurationRequest) {
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketInventoryConfiguration.InventoryConfiguration.Schedule.Frequency', props);
    return resource.getResponseField('InventoryConfiguration.Schedule.Frequency') as unknown as string;
  }

}

export class S3ResponsesFetchBucketLifecycle {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketLifecycleRequest) {
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketLifecycle.Rules', props);
    return resource.getResponseField('Rules') as unknown as shapes.S3Rule[];
  }

}

export class S3ResponsesFetchBucketLifecycleConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketLifecycleConfigurationRequest) {
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketLifecycleConfiguration.Rules', props);
    return resource.getResponseField('Rules') as unknown as shapes.S3LifecycleRule[];
  }

}

export class S3ResponsesFetchBucketLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketLocationRequest) {
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketLocation.LocationConstraint', props);
    return resource.getResponseField('LocationConstraint') as unknown as string;
  }

}

export class S3ResponsesFetchBucketLogging {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketLoggingRequest) {
  }

  public get loggingEnabled(): S3ResponsesFetchBucketLoggingLoggingEnabled {
    return new S3ResponsesFetchBucketLoggingLoggingEnabled(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchBucketLoggingLoggingEnabled {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketLoggingRequest) {
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketLogging.LoggingEnabled.TargetBucket', props);
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketLogging.LoggingEnabled.TargetGrants', props);
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketLogging.LoggingEnabled.TargetPrefix', props);
    return resource.getResponseField('LoggingEnabled.TargetPrefix') as unknown as string;
  }

}

export class S3ResponsesFetchBucketMetricsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketMetricsConfigurationRequest) {
  }

  public get metricsConfiguration(): S3ResponsesFetchBucketMetricsConfigurationMetricsConfiguration {
    return new S3ResponsesFetchBucketMetricsConfigurationMetricsConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchBucketMetricsConfigurationMetricsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketMetricsConfigurationRequest) {
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketMetricsConfiguration.MetricsConfiguration.Id', props);
    return resource.getResponseField('MetricsConfiguration.Id') as unknown as string;
  }

  public get filter(): S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter {
    return new S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketMetricsConfigurationRequest) {
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketMetricsConfiguration.MetricsConfiguration.Filter.Prefix', props);
    return resource.getResponseField('MetricsConfiguration.Filter.Prefix') as unknown as string;
  }

  public get tag(): S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterTag {
    return new S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterTag(this.__scope, this.__resources, this.__input);
  }

  public get and(): S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterAnd {
    return new S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterAnd(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterTag {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketMetricsConfigurationRequest) {
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketMetricsConfiguration.MetricsConfiguration.Filter.Tag.Key', props);
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketMetricsConfiguration.MetricsConfiguration.Filter.Tag.Value', props);
    return resource.getResponseField('MetricsConfiguration.Filter.Tag.Value') as unknown as string;
  }

}

export class S3ResponsesFetchBucketMetricsConfigurationMetricsConfigurationFilterAnd {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketMetricsConfigurationRequest) {
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketMetricsConfiguration.MetricsConfiguration.Filter.And.Prefix', props);
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
          Bucket: this.__input.bucket,
          Id: this.__input.id,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketMetricsConfiguration.MetricsConfiguration.Filter.And.Tags', props);
    return resource.getResponseField('MetricsConfiguration.Filter.And.Tags') as unknown as shapes.S3Tag[];
  }

}

export class S3ResponsesFetchBucketNotification {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketNotificationConfigurationRequest) {
  }

  public get topicConfiguration(): S3ResponsesFetchBucketNotificationTopicConfiguration {
    return new S3ResponsesFetchBucketNotificationTopicConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get queueConfiguration(): S3ResponsesFetchBucketNotificationQueueConfiguration {
    return new S3ResponsesFetchBucketNotificationQueueConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get cloudFunctionConfiguration(): S3ResponsesFetchBucketNotificationCloudFunctionConfiguration {
    return new S3ResponsesFetchBucketNotificationCloudFunctionConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchBucketNotificationTopicConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketNotificationConfigurationRequest) {
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketNotification.TopicConfiguration.Id', props);
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketNotification.TopicConfiguration.Events', props);
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketNotification.TopicConfiguration.Event', props);
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketNotification.TopicConfiguration.Topic', props);
    return resource.getResponseField('TopicConfiguration.Topic') as unknown as string;
  }

}

export class S3ResponsesFetchBucketNotificationQueueConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketNotificationConfigurationRequest) {
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketNotification.QueueConfiguration.Id', props);
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketNotification.QueueConfiguration.Event', props);
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketNotification.QueueConfiguration.Events', props);
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketNotification.QueueConfiguration.Queue', props);
    return resource.getResponseField('QueueConfiguration.Queue') as unknown as string;
  }

}

export class S3ResponsesFetchBucketNotificationCloudFunctionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketNotificationConfigurationRequest) {
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketNotification.CloudFunctionConfiguration.Id', props);
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketNotification.CloudFunctionConfiguration.Event', props);
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketNotification.CloudFunctionConfiguration.Events', props);
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketNotification.CloudFunctionConfiguration.CloudFunction', props);
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketNotification.CloudFunctionConfiguration.InvocationRole', props);
    return resource.getResponseField('CloudFunctionConfiguration.InvocationRole') as unknown as string;
  }

}

export class S3ResponsesFetchBucketNotificationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketNotificationConfigurationRequest) {
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketNotificationConfiguration.TopicConfigurations', props);
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketNotificationConfiguration.QueueConfigurations', props);
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketNotificationConfiguration.LambdaFunctionConfigurations', props);
    return resource.getResponseField('LambdaFunctionConfigurations') as unknown as shapes.S3LambdaFunctionConfiguration[];
  }

}

export class S3ResponsesFetchBucketOwnershipControls {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketOwnershipControlsRequest) {
  }

  public get ownershipControls(): S3ResponsesFetchBucketOwnershipControlsOwnershipControls {
    return new S3ResponsesFetchBucketOwnershipControlsOwnershipControls(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchBucketOwnershipControlsOwnershipControls {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketOwnershipControlsRequest) {
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketOwnershipControls.OwnershipControls.Rules', props);
    return resource.getResponseField('OwnershipControls.Rules') as unknown as shapes.S3OwnershipControlsRule[];
  }

}

export class S3ResponsesFetchBucketPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketPolicyRequest) {
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketPolicy.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

}

export class S3ResponsesFetchBucketPolicyStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketPolicyStatusRequest) {
  }

  public get policyStatus(): S3ResponsesFetchBucketPolicyStatusPolicyStatus {
    return new S3ResponsesFetchBucketPolicyStatusPolicyStatus(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchBucketPolicyStatusPolicyStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketPolicyStatusRequest) {
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketPolicyStatus.PolicyStatus.IsPublic', props);
    return resource.getResponseField('PolicyStatus.IsPublic') as unknown as boolean;
  }

}

export class S3ResponsesFetchBucketReplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketReplicationRequest) {
  }

  public get replicationConfiguration(): S3ResponsesFetchBucketReplicationReplicationConfiguration {
    return new S3ResponsesFetchBucketReplicationReplicationConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchBucketReplicationReplicationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketReplicationRequest) {
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketReplication.ReplicationConfiguration.Role', props);
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketReplication.ReplicationConfiguration.Rules', props);
    return resource.getResponseField('ReplicationConfiguration.Rules') as unknown as shapes.S3ReplicationRule[];
  }

}

export class S3ResponsesFetchBucketRequestPayment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketRequestPaymentRequest) {
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketRequestPayment.Payer', props);
    return resource.getResponseField('Payer') as unknown as string;
  }

}

export class S3ResponsesFetchBucketTagging {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketTaggingRequest) {
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketTagging.TagSet', props);
    return resource.getResponseField('TagSet') as unknown as shapes.S3Tag[];
  }

}

export class S3ResponsesFetchBucketVersioning {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketVersioningRequest) {
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketVersioning.Status', props);
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketVersioning.MFADelete', props);
    return resource.getResponseField('MFADelete') as unknown as string;
  }

}

export class S3ResponsesFetchBucketWebsite {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketWebsiteRequest) {
  }

  public get redirectAllRequestsTo(): S3ResponsesFetchBucketWebsiteRedirectAllRequestsTo {
    return new S3ResponsesFetchBucketWebsiteRedirectAllRequestsTo(this.__scope, this.__resources, this.__input);
  }

  public get indexDocument(): S3ResponsesFetchBucketWebsiteIndexDocument {
    return new S3ResponsesFetchBucketWebsiteIndexDocument(this.__scope, this.__resources, this.__input);
  }

  public get errorDocument(): S3ResponsesFetchBucketWebsiteErrorDocument {
    return new S3ResponsesFetchBucketWebsiteErrorDocument(this.__scope, this.__resources, this.__input);
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketWebsite.RoutingRules', props);
    return resource.getResponseField('RoutingRules') as unknown as shapes.S3RoutingRule[];
  }

}

export class S3ResponsesFetchBucketWebsiteRedirectAllRequestsTo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketWebsiteRequest) {
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketWebsite.RedirectAllRequestsTo.HostName', props);
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketWebsite.RedirectAllRequestsTo.Protocol', props);
    return resource.getResponseField('RedirectAllRequestsTo.Protocol') as unknown as string;
  }

}

export class S3ResponsesFetchBucketWebsiteIndexDocument {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketWebsiteRequest) {
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketWebsite.IndexDocument.Suffix', props);
    return resource.getResponseField('IndexDocument.Suffix') as unknown as string;
  }

}

export class S3ResponsesFetchBucketWebsiteErrorDocument {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetBucketWebsiteRequest) {
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketWebsite.ErrorDocument.Key', props);
    return resource.getResponseField('ErrorDocument.Key') as unknown as string;
  }

}

export class S3ResponsesFetchObject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetObjectRequest) {
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.Body', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.DeleteMarker', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.AcceptRanges', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.Expiration', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.Restore', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.LastModified', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.ContentLength', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.ETag', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.MissingMeta', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.VersionId', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.CacheControl', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.ContentDisposition', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.ContentEncoding', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.ContentLanguage', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.ContentRange', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.ContentType', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.Expires', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.WebsiteRedirectLocation', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.ServerSideEncryption', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.Metadata', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.SSECustomerAlgorithm', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.SSECustomerKeyMD5', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.SSEKMSKeyId', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.StorageClass', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.RequestCharged', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.ReplicationStatus', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.PartsCount', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.TagCount', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.ObjectLockMode', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.ObjectLockRetainUntilDate', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          ResponseCacheControl: this.__input.responseCacheControl,
          ResponseContentDisposition: this.__input.responseContentDisposition,
          ResponseContentEncoding: this.__input.responseContentEncoding,
          ResponseContentLanguage: this.__input.responseContentLanguage,
          ResponseContentType: this.__input.responseContentType,
          ResponseExpires: this.__input.responseExpires,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.ObjectLockLegalHoldStatus', props);
    return resource.getResponseField('ObjectLockLegalHoldStatus') as unknown as string;
  }

}

export class S3ResponsesFetchObjectAcl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetObjectAclRequest) {
  }

  public get owner(): S3ResponsesFetchObjectAclOwner {
    return new S3ResponsesFetchObjectAclOwner(this.__scope, this.__resources, this.__input);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          VersionId: this.__input.versionId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObjectAcl.Grants', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          VersionId: this.__input.versionId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObjectAcl.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3ResponsesFetchObjectAclOwner {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetObjectAclRequest) {
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          VersionId: this.__input.versionId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObjectAcl.Owner.DisplayName', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          VersionId: this.__input.versionId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObjectAcl.Owner.ID', props);
    return resource.getResponseField('Owner.ID') as unknown as string;
  }

}

export class S3ResponsesFetchObjectLegalHold {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetObjectLegalHoldRequest) {
  }

  public get legalHold(): S3ResponsesFetchObjectLegalHoldLegalHold {
    return new S3ResponsesFetchObjectLegalHoldLegalHold(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchObjectLegalHoldLegalHold {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetObjectLegalHoldRequest) {
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          VersionId: this.__input.versionId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObjectLegalHold.LegalHold.Status', props);
    return resource.getResponseField('LegalHold.Status') as unknown as string;
  }

}

export class S3ResponsesFetchObjectLockConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetObjectLockConfigurationRequest) {
  }

  public get objectLockConfiguration(): S3ResponsesFetchObjectLockConfigurationObjectLockConfiguration {
    return new S3ResponsesFetchObjectLockConfigurationObjectLockConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchObjectLockConfigurationObjectLockConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetObjectLockConfigurationRequest) {
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObjectLockConfiguration.ObjectLockConfiguration.ObjectLockEnabled', props);
    return resource.getResponseField('ObjectLockConfiguration.ObjectLockEnabled') as unknown as string;
  }

  public get rule(): S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRule {
    return new S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRule(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetObjectLockConfigurationRequest) {
  }

  public get defaultRetention(): S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention {
    return new S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchObjectLockConfigurationObjectLockConfigurationRuleDefaultRetention {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetObjectLockConfigurationRequest) {
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObjectLockConfiguration.ObjectLockConfiguration.Rule.DefaultRetention.Mode', props);
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObjectLockConfiguration.ObjectLockConfiguration.Rule.DefaultRetention.Days', props);
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObjectLockConfiguration.ObjectLockConfiguration.Rule.DefaultRetention.Years', props);
    return resource.getResponseField('ObjectLockConfiguration.Rule.DefaultRetention.Years') as unknown as number;
  }

}

export class S3ResponsesFetchObjectRetention {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetObjectRetentionRequest) {
  }

  public get retention(): S3ResponsesFetchObjectRetentionRetention {
    return new S3ResponsesFetchObjectRetentionRetention(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchObjectRetentionRetention {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetObjectRetentionRequest) {
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          VersionId: this.__input.versionId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObjectRetention.Retention.Mode', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          VersionId: this.__input.versionId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObjectRetention.Retention.RetainUntilDate', props);
    return resource.getResponseField('Retention.RetainUntilDate') as unknown as string;
  }

}

export class S3ResponsesFetchObjectTagging {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetObjectTaggingRequest) {
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          VersionId: this.__input.versionId,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObjectTagging.VersionId', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          VersionId: this.__input.versionId,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObjectTagging.TagSet', props);
    return resource.getResponseField('TagSet') as unknown as shapes.S3Tag[];
  }

}

export class S3ResponsesFetchObjectTorrent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetObjectTorrentRequest) {
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObjectTorrent.Body', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObjectTorrent.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3ResponsesFetchPublicAccessBlock {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetPublicAccessBlockRequest) {
  }

  public get publicAccessBlockConfiguration(): S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration {
    return new S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3GetPublicAccessBlockRequest) {
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPublicAccessBlock.PublicAccessBlockConfiguration.BlockPublicAcls', props);
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPublicAccessBlock.PublicAccessBlockConfiguration.IgnorePublicAcls', props);
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPublicAccessBlock.PublicAccessBlockConfiguration.BlockPublicPolicy', props);
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
          Bucket: this.__input.bucket,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPublicAccessBlock.PublicAccessBlockConfiguration.RestrictPublicBuckets', props);
    return resource.getResponseField('PublicAccessBlockConfiguration.RestrictPublicBuckets') as unknown as boolean;
  }

}

export class S3ResponsesHeadObject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3HeadObjectRequest) {
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.DeleteMarker', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.AcceptRanges', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.Expiration', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.Restore', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.ArchiveStatus', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.LastModified', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.ContentLength', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.ETag', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.MissingMeta', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.VersionId', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.CacheControl', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.ContentDisposition', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.ContentEncoding', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.ContentLanguage', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.ContentType', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.Expires', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.WebsiteRedirectLocation', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.ServerSideEncryption', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.Metadata', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.SSECustomerAlgorithm', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.SSECustomerKeyMD5', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.SSEKMSKeyId', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.StorageClass', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.RequestCharged', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.ReplicationStatus', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.PartsCount', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.ObjectLockMode', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.ObjectLockRetainUntilDate', props);
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
          Bucket: this.__input.bucket,
          IfMatch: this.__input.ifMatch,
          IfModifiedSince: this.__input.ifModifiedSince,
          IfNoneMatch: this.__input.ifNoneMatch,
          IfUnmodifiedSince: this.__input.ifUnmodifiedSince,
          Key: this.__input.key,
          Range: this.__input.range,
          VersionId: this.__input.versionId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          PartNumber: this.__input.partNumber,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'HeadObject.ObjectLockLegalHoldStatus', props);
    return resource.getResponseField('ObjectLockLegalHoldStatus') as unknown as string;
  }

}

export class S3ResponsesListBucketAnalyticsConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ListBucketAnalyticsConfigurationsRequest) {
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
          Bucket: this.__input.bucket,
          ContinuationToken: this.__input.continuationToken,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBucketAnalyticsConfigurations.IsTruncated', props);
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
          Bucket: this.__input.bucket,
          ContinuationToken: this.__input.continuationToken,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBucketAnalyticsConfigurations.ContinuationToken', props);
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
          Bucket: this.__input.bucket,
          ContinuationToken: this.__input.continuationToken,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBucketAnalyticsConfigurations.NextContinuationToken', props);
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
          Bucket: this.__input.bucket,
          ContinuationToken: this.__input.continuationToken,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBucketAnalyticsConfigurations.AnalyticsConfigurationList', props);
    return resource.getResponseField('AnalyticsConfigurationList') as unknown as shapes.S3AnalyticsConfiguration[];
  }

}

export class S3ResponsesListBucketIntelligentTieringConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ListBucketIntelligentTieringConfigurationsRequest) {
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
          Bucket: this.__input.bucket,
          ContinuationToken: this.__input.continuationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBucketIntelligentTieringConfigurations.IsTruncated', props);
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
          Bucket: this.__input.bucket,
          ContinuationToken: this.__input.continuationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBucketIntelligentTieringConfigurations.ContinuationToken', props);
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
          Bucket: this.__input.bucket,
          ContinuationToken: this.__input.continuationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBucketIntelligentTieringConfigurations.NextContinuationToken', props);
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
          Bucket: this.__input.bucket,
          ContinuationToken: this.__input.continuationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBucketIntelligentTieringConfigurations.IntelligentTieringConfigurationList', props);
    return resource.getResponseField('IntelligentTieringConfigurationList') as unknown as shapes.S3IntelligentTieringConfiguration[];
  }

}

export class S3ResponsesListBucketInventoryConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ListBucketInventoryConfigurationsRequest) {
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
          Bucket: this.__input.bucket,
          ContinuationToken: this.__input.continuationToken,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBucketInventoryConfigurations.ContinuationToken', props);
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
          Bucket: this.__input.bucket,
          ContinuationToken: this.__input.continuationToken,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBucketInventoryConfigurations.InventoryConfigurationList', props);
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
          Bucket: this.__input.bucket,
          ContinuationToken: this.__input.continuationToken,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBucketInventoryConfigurations.IsTruncated', props);
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
          Bucket: this.__input.bucket,
          ContinuationToken: this.__input.continuationToken,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBucketInventoryConfigurations.NextContinuationToken', props);
    return resource.getResponseField('NextContinuationToken') as unknown as string;
  }

}

export class S3ResponsesListBucketMetricsConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ListBucketMetricsConfigurationsRequest) {
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
          Bucket: this.__input.bucket,
          ContinuationToken: this.__input.continuationToken,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBucketMetricsConfigurations.IsTruncated', props);
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
          Bucket: this.__input.bucket,
          ContinuationToken: this.__input.continuationToken,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBucketMetricsConfigurations.ContinuationToken', props);
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
          Bucket: this.__input.bucket,
          ContinuationToken: this.__input.continuationToken,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBucketMetricsConfigurations.NextContinuationToken', props);
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
          Bucket: this.__input.bucket,
          ContinuationToken: this.__input.continuationToken,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBucketMetricsConfigurations.MetricsConfigurationList', props);
    return resource.getResponseField('MetricsConfigurationList') as unknown as shapes.S3MetricsConfiguration[];
  }

}

export class S3ResponsesListBuckets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBuckets.Buckets', props);
    return resource.getResponseField('Buckets') as unknown as shapes.S3Bucket[];
  }

  public get owner(): S3ResponsesListBucketsOwner {
    return new S3ResponsesListBucketsOwner(this.__scope, this.__resources);
  }

}

export class S3ResponsesListBucketsOwner {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBuckets.Owner.DisplayName', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBuckets.Owner.ID', props);
    return resource.getResponseField('Owner.ID') as unknown as string;
  }

}

export class S3ResponsesListMultipartUploads {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ListMultipartUploadsRequest) {
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          KeyMarker: this.__input.keyMarker,
          MaxUploads: this.__input.maxUploads,
          Prefix: this.__input.prefix,
          UploadIdMarker: this.__input.uploadIdMarker,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMultipartUploads.Bucket', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          KeyMarker: this.__input.keyMarker,
          MaxUploads: this.__input.maxUploads,
          Prefix: this.__input.prefix,
          UploadIdMarker: this.__input.uploadIdMarker,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMultipartUploads.KeyMarker', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          KeyMarker: this.__input.keyMarker,
          MaxUploads: this.__input.maxUploads,
          Prefix: this.__input.prefix,
          UploadIdMarker: this.__input.uploadIdMarker,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMultipartUploads.UploadIdMarker', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          KeyMarker: this.__input.keyMarker,
          MaxUploads: this.__input.maxUploads,
          Prefix: this.__input.prefix,
          UploadIdMarker: this.__input.uploadIdMarker,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMultipartUploads.NextKeyMarker', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          KeyMarker: this.__input.keyMarker,
          MaxUploads: this.__input.maxUploads,
          Prefix: this.__input.prefix,
          UploadIdMarker: this.__input.uploadIdMarker,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMultipartUploads.Prefix', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          KeyMarker: this.__input.keyMarker,
          MaxUploads: this.__input.maxUploads,
          Prefix: this.__input.prefix,
          UploadIdMarker: this.__input.uploadIdMarker,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMultipartUploads.Delimiter', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          KeyMarker: this.__input.keyMarker,
          MaxUploads: this.__input.maxUploads,
          Prefix: this.__input.prefix,
          UploadIdMarker: this.__input.uploadIdMarker,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMultipartUploads.NextUploadIdMarker', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          KeyMarker: this.__input.keyMarker,
          MaxUploads: this.__input.maxUploads,
          Prefix: this.__input.prefix,
          UploadIdMarker: this.__input.uploadIdMarker,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMultipartUploads.MaxUploads', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          KeyMarker: this.__input.keyMarker,
          MaxUploads: this.__input.maxUploads,
          Prefix: this.__input.prefix,
          UploadIdMarker: this.__input.uploadIdMarker,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMultipartUploads.IsTruncated', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          KeyMarker: this.__input.keyMarker,
          MaxUploads: this.__input.maxUploads,
          Prefix: this.__input.prefix,
          UploadIdMarker: this.__input.uploadIdMarker,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMultipartUploads.Uploads', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          KeyMarker: this.__input.keyMarker,
          MaxUploads: this.__input.maxUploads,
          Prefix: this.__input.prefix,
          UploadIdMarker: this.__input.uploadIdMarker,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMultipartUploads.CommonPrefixes', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          KeyMarker: this.__input.keyMarker,
          MaxUploads: this.__input.maxUploads,
          Prefix: this.__input.prefix,
          UploadIdMarker: this.__input.uploadIdMarker,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMultipartUploads.EncodingType', props);
    return resource.getResponseField('EncodingType') as unknown as string;
  }

}

export class S3ResponsesListObjectVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ListObjectVersionsRequest) {
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          KeyMarker: this.__input.keyMarker,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          VersionIdMarker: this.__input.versionIdMarker,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectVersions.IsTruncated', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          KeyMarker: this.__input.keyMarker,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          VersionIdMarker: this.__input.versionIdMarker,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectVersions.KeyMarker', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          KeyMarker: this.__input.keyMarker,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          VersionIdMarker: this.__input.versionIdMarker,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectVersions.VersionIdMarker', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          KeyMarker: this.__input.keyMarker,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          VersionIdMarker: this.__input.versionIdMarker,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectVersions.NextKeyMarker', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          KeyMarker: this.__input.keyMarker,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          VersionIdMarker: this.__input.versionIdMarker,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectVersions.NextVersionIdMarker', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          KeyMarker: this.__input.keyMarker,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          VersionIdMarker: this.__input.versionIdMarker,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectVersions.Versions', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          KeyMarker: this.__input.keyMarker,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          VersionIdMarker: this.__input.versionIdMarker,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectVersions.DeleteMarkers', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          KeyMarker: this.__input.keyMarker,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          VersionIdMarker: this.__input.versionIdMarker,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectVersions.Name', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          KeyMarker: this.__input.keyMarker,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          VersionIdMarker: this.__input.versionIdMarker,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectVersions.Prefix', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          KeyMarker: this.__input.keyMarker,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          VersionIdMarker: this.__input.versionIdMarker,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectVersions.Delimiter', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          KeyMarker: this.__input.keyMarker,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          VersionIdMarker: this.__input.versionIdMarker,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectVersions.MaxKeys', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          KeyMarker: this.__input.keyMarker,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          VersionIdMarker: this.__input.versionIdMarker,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectVersions.CommonPrefixes', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          KeyMarker: this.__input.keyMarker,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          VersionIdMarker: this.__input.versionIdMarker,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectVersions.EncodingType', props);
    return resource.getResponseField('EncodingType') as unknown as string;
  }

}

export class S3ResponsesListObjects {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ListObjectsRequest) {
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          Marker: this.__input.marker,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjects.IsTruncated', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          Marker: this.__input.marker,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjects.Marker', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          Marker: this.__input.marker,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjects.NextMarker', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          Marker: this.__input.marker,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjects.Contents', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          Marker: this.__input.marker,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjects.Name', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          Marker: this.__input.marker,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjects.Prefix', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          Marker: this.__input.marker,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjects.Delimiter', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          Marker: this.__input.marker,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjects.MaxKeys', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          Marker: this.__input.marker,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjects.CommonPrefixes', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          Marker: this.__input.marker,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjects.EncodingType', props);
    return resource.getResponseField('EncodingType') as unknown as string;
  }

}

export class S3ResponsesListObjectsV2 {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ListObjectsV2Request) {
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          ContinuationToken: this.__input.continuationToken,
          FetchOwner: this.__input.fetchOwner,
          StartAfter: this.__input.startAfter,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectsV2.IsTruncated', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          ContinuationToken: this.__input.continuationToken,
          FetchOwner: this.__input.fetchOwner,
          StartAfter: this.__input.startAfter,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectsV2.Contents', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          ContinuationToken: this.__input.continuationToken,
          FetchOwner: this.__input.fetchOwner,
          StartAfter: this.__input.startAfter,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectsV2.Name', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          ContinuationToken: this.__input.continuationToken,
          FetchOwner: this.__input.fetchOwner,
          StartAfter: this.__input.startAfter,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectsV2.Prefix', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          ContinuationToken: this.__input.continuationToken,
          FetchOwner: this.__input.fetchOwner,
          StartAfter: this.__input.startAfter,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectsV2.Delimiter', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          ContinuationToken: this.__input.continuationToken,
          FetchOwner: this.__input.fetchOwner,
          StartAfter: this.__input.startAfter,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectsV2.MaxKeys', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          ContinuationToken: this.__input.continuationToken,
          FetchOwner: this.__input.fetchOwner,
          StartAfter: this.__input.startAfter,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectsV2.CommonPrefixes', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          ContinuationToken: this.__input.continuationToken,
          FetchOwner: this.__input.fetchOwner,
          StartAfter: this.__input.startAfter,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectsV2.EncodingType', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          ContinuationToken: this.__input.continuationToken,
          FetchOwner: this.__input.fetchOwner,
          StartAfter: this.__input.startAfter,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectsV2.KeyCount', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          ContinuationToken: this.__input.continuationToken,
          FetchOwner: this.__input.fetchOwner,
          StartAfter: this.__input.startAfter,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectsV2.ContinuationToken', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          ContinuationToken: this.__input.continuationToken,
          FetchOwner: this.__input.fetchOwner,
          StartAfter: this.__input.startAfter,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectsV2.NextContinuationToken', props);
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
          Bucket: this.__input.bucket,
          Delimiter: this.__input.delimiter,
          EncodingType: this.__input.encodingType,
          MaxKeys: this.__input.maxKeys,
          Prefix: this.__input.prefix,
          ContinuationToken: this.__input.continuationToken,
          FetchOwner: this.__input.fetchOwner,
          StartAfter: this.__input.startAfter,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectsV2.StartAfter', props);
    return resource.getResponseField('StartAfter') as unknown as string;
  }

}

export class S3ResponsesListParts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ListPartsRequest) {
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MaxParts: this.__input.maxParts,
          PartNumberMarker: this.__input.partNumberMarker,
          UploadId: this.__input.uploadId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListParts.AbortDate', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MaxParts: this.__input.maxParts,
          PartNumberMarker: this.__input.partNumberMarker,
          UploadId: this.__input.uploadId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListParts.AbortRuleId', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MaxParts: this.__input.maxParts,
          PartNumberMarker: this.__input.partNumberMarker,
          UploadId: this.__input.uploadId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListParts.Bucket', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MaxParts: this.__input.maxParts,
          PartNumberMarker: this.__input.partNumberMarker,
          UploadId: this.__input.uploadId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListParts.Key', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MaxParts: this.__input.maxParts,
          PartNumberMarker: this.__input.partNumberMarker,
          UploadId: this.__input.uploadId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListParts.UploadId', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MaxParts: this.__input.maxParts,
          PartNumberMarker: this.__input.partNumberMarker,
          UploadId: this.__input.uploadId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListParts.PartNumberMarker', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MaxParts: this.__input.maxParts,
          PartNumberMarker: this.__input.partNumberMarker,
          UploadId: this.__input.uploadId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListParts.NextPartNumberMarker', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MaxParts: this.__input.maxParts,
          PartNumberMarker: this.__input.partNumberMarker,
          UploadId: this.__input.uploadId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListParts.MaxParts', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MaxParts: this.__input.maxParts,
          PartNumberMarker: this.__input.partNumberMarker,
          UploadId: this.__input.uploadId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListParts.IsTruncated', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MaxParts: this.__input.maxParts,
          PartNumberMarker: this.__input.partNumberMarker,
          UploadId: this.__input.uploadId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListParts.Parts', props);
    return resource.getResponseField('Parts') as unknown as shapes.S3Part[];
  }

  public get initiator(): S3ResponsesListPartsInitiator {
    return new S3ResponsesListPartsInitiator(this.__scope, this.__resources, this.__input);
  }

  public get owner(): S3ResponsesListPartsOwner {
    return new S3ResponsesListPartsOwner(this.__scope, this.__resources, this.__input);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MaxParts: this.__input.maxParts,
          PartNumberMarker: this.__input.partNumberMarker,
          UploadId: this.__input.uploadId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListParts.StorageClass', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MaxParts: this.__input.maxParts,
          PartNumberMarker: this.__input.partNumberMarker,
          UploadId: this.__input.uploadId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListParts.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3ResponsesListPartsInitiator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ListPartsRequest) {
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MaxParts: this.__input.maxParts,
          PartNumberMarker: this.__input.partNumberMarker,
          UploadId: this.__input.uploadId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListParts.Initiator.ID', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MaxParts: this.__input.maxParts,
          PartNumberMarker: this.__input.partNumberMarker,
          UploadId: this.__input.uploadId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListParts.Initiator.DisplayName', props);
    return resource.getResponseField('Initiator.DisplayName') as unknown as string;
  }

}

export class S3ResponsesListPartsOwner {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ListPartsRequest) {
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MaxParts: this.__input.maxParts,
          PartNumberMarker: this.__input.partNumberMarker,
          UploadId: this.__input.uploadId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListParts.Owner.DisplayName', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          MaxParts: this.__input.maxParts,
          PartNumberMarker: this.__input.partNumberMarker,
          UploadId: this.__input.uploadId,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListParts.Owner.ID', props);
    return resource.getResponseField('Owner.ID') as unknown as string;
  }

}

export class S3ResponsesPutObject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3PutObjectRequest) {
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
          ACL: this.__input.acl,
          Body: {
          },
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentLength: this.__input.contentLength,
          ContentMD5: this.__input.contentMd5,
          ContentType: this.__input.contentType,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutObject.Expiration', props);
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
          ACL: this.__input.acl,
          Body: {
          },
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentLength: this.__input.contentLength,
          ContentMD5: this.__input.contentMd5,
          ContentType: this.__input.contentType,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutObject.ETag', props);
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
          ACL: this.__input.acl,
          Body: {
          },
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentLength: this.__input.contentLength,
          ContentMD5: this.__input.contentMd5,
          ContentType: this.__input.contentType,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutObject.ServerSideEncryption', props);
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
          ACL: this.__input.acl,
          Body: {
          },
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentLength: this.__input.contentLength,
          ContentMD5: this.__input.contentMd5,
          ContentType: this.__input.contentType,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutObject.VersionId', props);
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
          ACL: this.__input.acl,
          Body: {
          },
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentLength: this.__input.contentLength,
          ContentMD5: this.__input.contentMd5,
          ContentType: this.__input.contentType,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutObject.SSECustomerAlgorithm', props);
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
          ACL: this.__input.acl,
          Body: {
          },
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentLength: this.__input.contentLength,
          ContentMD5: this.__input.contentMd5,
          ContentType: this.__input.contentType,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutObject.SSECustomerKeyMD5', props);
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
          ACL: this.__input.acl,
          Body: {
          },
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentLength: this.__input.contentLength,
          ContentMD5: this.__input.contentMd5,
          ContentType: this.__input.contentType,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutObject.SSEKMSKeyId', props);
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
          ACL: this.__input.acl,
          Body: {
          },
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentLength: this.__input.contentLength,
          ContentMD5: this.__input.contentMd5,
          ContentType: this.__input.contentType,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutObject.SSEKMSEncryptionContext', props);
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
          ACL: this.__input.acl,
          Body: {
          },
          Bucket: this.__input.bucket,
          CacheControl: this.__input.cacheControl,
          ContentDisposition: this.__input.contentDisposition,
          ContentEncoding: this.__input.contentEncoding,
          ContentLanguage: this.__input.contentLanguage,
          ContentLength: this.__input.contentLength,
          ContentMD5: this.__input.contentMd5,
          ContentType: this.__input.contentType,
          Expires: this.__input.expires,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          Metadata: this.__input.metadata,
          ServerSideEncryption: this.__input.serverSideEncryption,
          StorageClass: this.__input.storageClass,
          WebsiteRedirectLocation: this.__input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.__input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.__input.ssekmsEncryptionContext,
          RequestPayer: this.__input.requestPayer,
          Tagging: this.__input.tagging,
          ObjectLockMode: this.__input.objectLockMode,
          ObjectLockRetainUntilDate: this.__input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.__input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutObject.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3ResponsesPutObjectAcl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3PutObjectAclRequest) {
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
          ACL: this.__input.acl,
          AccessControlPolicy: {
            Grants: this.__input.accessControlPolicy?.grants,
            Owner: {
              DisplayName: this.__input.accessControlPolicy?.owner?.displayName,
              ID: this.__input.accessControlPolicy?.owner?.id,
            },
          },
          Bucket: this.__input.bucket,
          ContentMD5: this.__input.contentMd5,
          GrantFullControl: this.__input.grantFullControl,
          GrantRead: this.__input.grantRead,
          GrantReadACP: this.__input.grantReadAcp,
          GrantWrite: this.__input.grantWrite,
          GrantWriteACP: this.__input.grantWriteAcp,
          Key: this.__input.key,
          RequestPayer: this.__input.requestPayer,
          VersionId: this.__input.versionId,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutObjectAcl.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3ResponsesPutObjectLegalHold {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3PutObjectLegalHoldRequest) {
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          LegalHold: {
            Status: this.__input.legalHold?.status,
          },
          RequestPayer: this.__input.requestPayer,
          VersionId: this.__input.versionId,
          ContentMD5: this.__input.contentMd5,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutObjectLegalHold.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3ResponsesPutObjectLockConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3PutObjectLockConfigurationRequest) {
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
          Bucket: this.__input.bucket,
          ObjectLockConfiguration: {
            ObjectLockEnabled: this.__input.objectLockConfiguration?.objectLockEnabled,
            Rule: {
              DefaultRetention: {
                Mode: this.__input.objectLockConfiguration?.rule?.defaultRetention?.mode,
                Days: this.__input.objectLockConfiguration?.rule?.defaultRetention?.days,
                Years: this.__input.objectLockConfiguration?.rule?.defaultRetention?.years,
              },
            },
          },
          RequestPayer: this.__input.requestPayer,
          Token: this.__input.token,
          ContentMD5: this.__input.contentMd5,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutObjectLockConfiguration.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3ResponsesPutObjectRetention {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3PutObjectRetentionRequest) {
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          Retention: {
            Mode: this.__input.retention?.mode,
            RetainUntilDate: this.__input.retention?.retainUntilDate,
          },
          RequestPayer: this.__input.requestPayer,
          VersionId: this.__input.versionId,
          BypassGovernanceRetention: this.__input.bypassGovernanceRetention,
          ContentMD5: this.__input.contentMd5,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutObjectRetention.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3ResponsesPutObjectTagging {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3PutObjectTaggingRequest) {
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          VersionId: this.__input.versionId,
          ContentMD5: this.__input.contentMd5,
          Tagging: {
            TagSet: this.__input.tagging.tagSet,
          },
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutObjectTagging.VersionId', props);
    return resource.getResponseField('VersionId') as unknown as string;
  }

}

export class S3ResponsesRestoreObject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3RestoreObjectRequest) {
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          VersionId: this.__input.versionId,
          RestoreRequest: {
            Days: this.__input.restoreRequest?.days,
            GlacierJobParameters: {
              Tier: this.__input.restoreRequest?.glacierJobParameters?.tier,
            },
            Type: this.__input.restoreRequest?.type,
            Tier: this.__input.restoreRequest?.tier,
            Description: this.__input.restoreRequest?.description,
            SelectParameters: {
              InputSerialization: {
                CSV: {
                  FileHeaderInfo: this.__input.restoreRequest?.selectParameters?.inputSerialization.csv?.fileHeaderInfo,
                  Comments: this.__input.restoreRequest?.selectParameters?.inputSerialization.csv?.comments,
                  QuoteEscapeCharacter: this.__input.restoreRequest?.selectParameters?.inputSerialization.csv?.quoteEscapeCharacter,
                  RecordDelimiter: this.__input.restoreRequest?.selectParameters?.inputSerialization.csv?.recordDelimiter,
                  FieldDelimiter: this.__input.restoreRequest?.selectParameters?.inputSerialization.csv?.fieldDelimiter,
                  QuoteCharacter: this.__input.restoreRequest?.selectParameters?.inputSerialization.csv?.quoteCharacter,
                  AllowQuotedRecordDelimiter: this.__input.restoreRequest?.selectParameters?.inputSerialization.csv?.allowQuotedRecordDelimiter,
                },
                CompressionType: this.__input.restoreRequest?.selectParameters?.inputSerialization.compressionType,
                JSON: {
                  Type: this.__input.restoreRequest?.selectParameters?.inputSerialization.json?.type,
                },
                Parquet: {
                },
              },
              ExpressionType: this.__input.restoreRequest?.selectParameters?.expressionType,
              Expression: this.__input.restoreRequest?.selectParameters?.expression,
              OutputSerialization: {
                CSV: {
                  QuoteFields: this.__input.restoreRequest?.selectParameters?.outputSerialization.csv?.quoteFields,
                  QuoteEscapeCharacter: this.__input.restoreRequest?.selectParameters?.outputSerialization.csv?.quoteEscapeCharacter,
                  RecordDelimiter: this.__input.restoreRequest?.selectParameters?.outputSerialization.csv?.recordDelimiter,
                  FieldDelimiter: this.__input.restoreRequest?.selectParameters?.outputSerialization.csv?.fieldDelimiter,
                  QuoteCharacter: this.__input.restoreRequest?.selectParameters?.outputSerialization.csv?.quoteCharacter,
                },
                JSON: {
                  RecordDelimiter: this.__input.restoreRequest?.selectParameters?.outputSerialization.json?.recordDelimiter,
                },
              },
            },
            OutputLocation: {
              S3: {
                BucketName: this.__input.restoreRequest?.outputLocation?.s3?.bucketName,
                Prefix: this.__input.restoreRequest?.outputLocation?.s3?.prefix,
                Encryption: {
                  EncryptionType: this.__input.restoreRequest?.outputLocation?.s3?.encryption?.encryptionType,
                  KMSKeyId: this.__input.restoreRequest?.outputLocation?.s3?.encryption?.kmsKeyId,
                  KMSContext: this.__input.restoreRequest?.outputLocation?.s3?.encryption?.kmsContext,
                },
                CannedACL: this.__input.restoreRequest?.outputLocation?.s3?.cannedAcl,
                AccessControlList: this.__input.restoreRequest?.outputLocation?.s3?.accessControlList,
                Tagging: {
                  TagSet: this.__input.restoreRequest?.outputLocation?.s3?.tagging?.tagSet,
                },
                UserMetadata: this.__input.restoreRequest?.outputLocation?.s3?.userMetadata,
                StorageClass: this.__input.restoreRequest?.outputLocation?.s3?.storageClass,
              },
            },
          },
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreObject.RequestCharged', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          VersionId: this.__input.versionId,
          RestoreRequest: {
            Days: this.__input.restoreRequest?.days,
            GlacierJobParameters: {
              Tier: this.__input.restoreRequest?.glacierJobParameters?.tier,
            },
            Type: this.__input.restoreRequest?.type,
            Tier: this.__input.restoreRequest?.tier,
            Description: this.__input.restoreRequest?.description,
            SelectParameters: {
              InputSerialization: {
                CSV: {
                  FileHeaderInfo: this.__input.restoreRequest?.selectParameters?.inputSerialization.csv?.fileHeaderInfo,
                  Comments: this.__input.restoreRequest?.selectParameters?.inputSerialization.csv?.comments,
                  QuoteEscapeCharacter: this.__input.restoreRequest?.selectParameters?.inputSerialization.csv?.quoteEscapeCharacter,
                  RecordDelimiter: this.__input.restoreRequest?.selectParameters?.inputSerialization.csv?.recordDelimiter,
                  FieldDelimiter: this.__input.restoreRequest?.selectParameters?.inputSerialization.csv?.fieldDelimiter,
                  QuoteCharacter: this.__input.restoreRequest?.selectParameters?.inputSerialization.csv?.quoteCharacter,
                  AllowQuotedRecordDelimiter: this.__input.restoreRequest?.selectParameters?.inputSerialization.csv?.allowQuotedRecordDelimiter,
                },
                CompressionType: this.__input.restoreRequest?.selectParameters?.inputSerialization.compressionType,
                JSON: {
                  Type: this.__input.restoreRequest?.selectParameters?.inputSerialization.json?.type,
                },
                Parquet: {
                },
              },
              ExpressionType: this.__input.restoreRequest?.selectParameters?.expressionType,
              Expression: this.__input.restoreRequest?.selectParameters?.expression,
              OutputSerialization: {
                CSV: {
                  QuoteFields: this.__input.restoreRequest?.selectParameters?.outputSerialization.csv?.quoteFields,
                  QuoteEscapeCharacter: this.__input.restoreRequest?.selectParameters?.outputSerialization.csv?.quoteEscapeCharacter,
                  RecordDelimiter: this.__input.restoreRequest?.selectParameters?.outputSerialization.csv?.recordDelimiter,
                  FieldDelimiter: this.__input.restoreRequest?.selectParameters?.outputSerialization.csv?.fieldDelimiter,
                  QuoteCharacter: this.__input.restoreRequest?.selectParameters?.outputSerialization.csv?.quoteCharacter,
                },
                JSON: {
                  RecordDelimiter: this.__input.restoreRequest?.selectParameters?.outputSerialization.json?.recordDelimiter,
                },
              },
            },
            OutputLocation: {
              S3: {
                BucketName: this.__input.restoreRequest?.outputLocation?.s3?.bucketName,
                Prefix: this.__input.restoreRequest?.outputLocation?.s3?.prefix,
                Encryption: {
                  EncryptionType: this.__input.restoreRequest?.outputLocation?.s3?.encryption?.encryptionType,
                  KMSKeyId: this.__input.restoreRequest?.outputLocation?.s3?.encryption?.kmsKeyId,
                  KMSContext: this.__input.restoreRequest?.outputLocation?.s3?.encryption?.kmsContext,
                },
                CannedACL: this.__input.restoreRequest?.outputLocation?.s3?.cannedAcl,
                AccessControlList: this.__input.restoreRequest?.outputLocation?.s3?.accessControlList,
                Tagging: {
                  TagSet: this.__input.restoreRequest?.outputLocation?.s3?.tagging?.tagSet,
                },
                UserMetadata: this.__input.restoreRequest?.outputLocation?.s3?.userMetadata,
                StorageClass: this.__input.restoreRequest?.outputLocation?.s3?.storageClass,
              },
            },
          },
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreObject.RestoreOutputPath', props);
    return resource.getResponseField('RestoreOutputPath') as unknown as string;
  }

}

export class S3ResponsesSelectObjectContent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3SelectObjectContentRequest) {
  }

  public get payload(): S3ResponsesSelectObjectContentPayload {
    return new S3ResponsesSelectObjectContentPayload(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesSelectObjectContentPayload {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3SelectObjectContentRequest) {
  }

  public get records(): S3ResponsesSelectObjectContentPayloadRecords {
    return new S3ResponsesSelectObjectContentPayloadRecords(this.__scope, this.__resources, this.__input);
  }

  public get stats(): S3ResponsesSelectObjectContentPayloadStats {
    return new S3ResponsesSelectObjectContentPayloadStats(this.__scope, this.__resources, this.__input);
  }

  public get progress(): S3ResponsesSelectObjectContentPayloadProgress {
    return new S3ResponsesSelectObjectContentPayloadProgress(this.__scope, this.__resources, this.__input);
  }

  public get cont(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'selectObjectContent',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.SelectObjectContent.Payload.Cont'),
        outputPath: 'Payload.Cont',
        parameters: {
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          Expression: this.__input.expression,
          ExpressionType: this.__input.expressionType,
          RequestProgress: {
            Enabled: this.__input.requestProgress?.enabled,
          },
          InputSerialization: {
            CSV: {
              FileHeaderInfo: this.__input.inputSerialization.csv?.fileHeaderInfo,
              Comments: this.__input.inputSerialization.csv?.comments,
              QuoteEscapeCharacter: this.__input.inputSerialization.csv?.quoteEscapeCharacter,
              RecordDelimiter: this.__input.inputSerialization.csv?.recordDelimiter,
              FieldDelimiter: this.__input.inputSerialization.csv?.fieldDelimiter,
              QuoteCharacter: this.__input.inputSerialization.csv?.quoteCharacter,
              AllowQuotedRecordDelimiter: this.__input.inputSerialization.csv?.allowQuotedRecordDelimiter,
            },
            CompressionType: this.__input.inputSerialization.compressionType,
            JSON: {
              Type: this.__input.inputSerialization.json?.type,
            },
            Parquet: {
            },
          },
          OutputSerialization: {
            CSV: {
              QuoteFields: this.__input.outputSerialization.csv?.quoteFields,
              QuoteEscapeCharacter: this.__input.outputSerialization.csv?.quoteEscapeCharacter,
              RecordDelimiter: this.__input.outputSerialization.csv?.recordDelimiter,
              FieldDelimiter: this.__input.outputSerialization.csv?.fieldDelimiter,
              QuoteCharacter: this.__input.outputSerialization.csv?.quoteCharacter,
            },
            JSON: {
              RecordDelimiter: this.__input.outputSerialization.json?.recordDelimiter,
            },
          },
          ScanRange: {
            Start: this.__input.scanRange?.start,
            End: this.__input.scanRange?.end,
          },
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SelectObjectContent.Payload.Cont', props);
    return resource.getResponseField('Payload.Cont') as unknown as any;
  }

  public get end(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'selectObjectContent',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('S3.SelectObjectContent.Payload.End'),
        outputPath: 'Payload.End',
        parameters: {
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          Expression: this.__input.expression,
          ExpressionType: this.__input.expressionType,
          RequestProgress: {
            Enabled: this.__input.requestProgress?.enabled,
          },
          InputSerialization: {
            CSV: {
              FileHeaderInfo: this.__input.inputSerialization.csv?.fileHeaderInfo,
              Comments: this.__input.inputSerialization.csv?.comments,
              QuoteEscapeCharacter: this.__input.inputSerialization.csv?.quoteEscapeCharacter,
              RecordDelimiter: this.__input.inputSerialization.csv?.recordDelimiter,
              FieldDelimiter: this.__input.inputSerialization.csv?.fieldDelimiter,
              QuoteCharacter: this.__input.inputSerialization.csv?.quoteCharacter,
              AllowQuotedRecordDelimiter: this.__input.inputSerialization.csv?.allowQuotedRecordDelimiter,
            },
            CompressionType: this.__input.inputSerialization.compressionType,
            JSON: {
              Type: this.__input.inputSerialization.json?.type,
            },
            Parquet: {
            },
          },
          OutputSerialization: {
            CSV: {
              QuoteFields: this.__input.outputSerialization.csv?.quoteFields,
              QuoteEscapeCharacter: this.__input.outputSerialization.csv?.quoteEscapeCharacter,
              RecordDelimiter: this.__input.outputSerialization.csv?.recordDelimiter,
              FieldDelimiter: this.__input.outputSerialization.csv?.fieldDelimiter,
              QuoteCharacter: this.__input.outputSerialization.csv?.quoteCharacter,
            },
            JSON: {
              RecordDelimiter: this.__input.outputSerialization.json?.recordDelimiter,
            },
          },
          ScanRange: {
            Start: this.__input.scanRange?.start,
            End: this.__input.scanRange?.end,
          },
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SelectObjectContent.Payload.End', props);
    return resource.getResponseField('Payload.End') as unknown as any;
  }

}

export class S3ResponsesSelectObjectContentPayloadRecords {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3SelectObjectContentRequest) {
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          Expression: this.__input.expression,
          ExpressionType: this.__input.expressionType,
          RequestProgress: {
            Enabled: this.__input.requestProgress?.enabled,
          },
          InputSerialization: {
            CSV: {
              FileHeaderInfo: this.__input.inputSerialization.csv?.fileHeaderInfo,
              Comments: this.__input.inputSerialization.csv?.comments,
              QuoteEscapeCharacter: this.__input.inputSerialization.csv?.quoteEscapeCharacter,
              RecordDelimiter: this.__input.inputSerialization.csv?.recordDelimiter,
              FieldDelimiter: this.__input.inputSerialization.csv?.fieldDelimiter,
              QuoteCharacter: this.__input.inputSerialization.csv?.quoteCharacter,
              AllowQuotedRecordDelimiter: this.__input.inputSerialization.csv?.allowQuotedRecordDelimiter,
            },
            CompressionType: this.__input.inputSerialization.compressionType,
            JSON: {
              Type: this.__input.inputSerialization.json?.type,
            },
            Parquet: {
            },
          },
          OutputSerialization: {
            CSV: {
              QuoteFields: this.__input.outputSerialization.csv?.quoteFields,
              QuoteEscapeCharacter: this.__input.outputSerialization.csv?.quoteEscapeCharacter,
              RecordDelimiter: this.__input.outputSerialization.csv?.recordDelimiter,
              FieldDelimiter: this.__input.outputSerialization.csv?.fieldDelimiter,
              QuoteCharacter: this.__input.outputSerialization.csv?.quoteCharacter,
            },
            JSON: {
              RecordDelimiter: this.__input.outputSerialization.json?.recordDelimiter,
            },
          },
          ScanRange: {
            Start: this.__input.scanRange?.start,
            End: this.__input.scanRange?.end,
          },
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SelectObjectContent.Payload.Records.Payload', props);
    return resource.getResponseField('Payload.Records.Payload') as unknown as any;
  }

}

export class S3ResponsesSelectObjectContentPayloadStats {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3SelectObjectContentRequest) {
  }

  public get details(): S3ResponsesSelectObjectContentPayloadStatsDetails {
    return new S3ResponsesSelectObjectContentPayloadStatsDetails(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesSelectObjectContentPayloadStatsDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3SelectObjectContentRequest) {
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          Expression: this.__input.expression,
          ExpressionType: this.__input.expressionType,
          RequestProgress: {
            Enabled: this.__input.requestProgress?.enabled,
          },
          InputSerialization: {
            CSV: {
              FileHeaderInfo: this.__input.inputSerialization.csv?.fileHeaderInfo,
              Comments: this.__input.inputSerialization.csv?.comments,
              QuoteEscapeCharacter: this.__input.inputSerialization.csv?.quoteEscapeCharacter,
              RecordDelimiter: this.__input.inputSerialization.csv?.recordDelimiter,
              FieldDelimiter: this.__input.inputSerialization.csv?.fieldDelimiter,
              QuoteCharacter: this.__input.inputSerialization.csv?.quoteCharacter,
              AllowQuotedRecordDelimiter: this.__input.inputSerialization.csv?.allowQuotedRecordDelimiter,
            },
            CompressionType: this.__input.inputSerialization.compressionType,
            JSON: {
              Type: this.__input.inputSerialization.json?.type,
            },
            Parquet: {
            },
          },
          OutputSerialization: {
            CSV: {
              QuoteFields: this.__input.outputSerialization.csv?.quoteFields,
              QuoteEscapeCharacter: this.__input.outputSerialization.csv?.quoteEscapeCharacter,
              RecordDelimiter: this.__input.outputSerialization.csv?.recordDelimiter,
              FieldDelimiter: this.__input.outputSerialization.csv?.fieldDelimiter,
              QuoteCharacter: this.__input.outputSerialization.csv?.quoteCharacter,
            },
            JSON: {
              RecordDelimiter: this.__input.outputSerialization.json?.recordDelimiter,
            },
          },
          ScanRange: {
            Start: this.__input.scanRange?.start,
            End: this.__input.scanRange?.end,
          },
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SelectObjectContent.Payload.Stats.Details.BytesScanned', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          Expression: this.__input.expression,
          ExpressionType: this.__input.expressionType,
          RequestProgress: {
            Enabled: this.__input.requestProgress?.enabled,
          },
          InputSerialization: {
            CSV: {
              FileHeaderInfo: this.__input.inputSerialization.csv?.fileHeaderInfo,
              Comments: this.__input.inputSerialization.csv?.comments,
              QuoteEscapeCharacter: this.__input.inputSerialization.csv?.quoteEscapeCharacter,
              RecordDelimiter: this.__input.inputSerialization.csv?.recordDelimiter,
              FieldDelimiter: this.__input.inputSerialization.csv?.fieldDelimiter,
              QuoteCharacter: this.__input.inputSerialization.csv?.quoteCharacter,
              AllowQuotedRecordDelimiter: this.__input.inputSerialization.csv?.allowQuotedRecordDelimiter,
            },
            CompressionType: this.__input.inputSerialization.compressionType,
            JSON: {
              Type: this.__input.inputSerialization.json?.type,
            },
            Parquet: {
            },
          },
          OutputSerialization: {
            CSV: {
              QuoteFields: this.__input.outputSerialization.csv?.quoteFields,
              QuoteEscapeCharacter: this.__input.outputSerialization.csv?.quoteEscapeCharacter,
              RecordDelimiter: this.__input.outputSerialization.csv?.recordDelimiter,
              FieldDelimiter: this.__input.outputSerialization.csv?.fieldDelimiter,
              QuoteCharacter: this.__input.outputSerialization.csv?.quoteCharacter,
            },
            JSON: {
              RecordDelimiter: this.__input.outputSerialization.json?.recordDelimiter,
            },
          },
          ScanRange: {
            Start: this.__input.scanRange?.start,
            End: this.__input.scanRange?.end,
          },
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SelectObjectContent.Payload.Stats.Details.BytesProcessed', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          Expression: this.__input.expression,
          ExpressionType: this.__input.expressionType,
          RequestProgress: {
            Enabled: this.__input.requestProgress?.enabled,
          },
          InputSerialization: {
            CSV: {
              FileHeaderInfo: this.__input.inputSerialization.csv?.fileHeaderInfo,
              Comments: this.__input.inputSerialization.csv?.comments,
              QuoteEscapeCharacter: this.__input.inputSerialization.csv?.quoteEscapeCharacter,
              RecordDelimiter: this.__input.inputSerialization.csv?.recordDelimiter,
              FieldDelimiter: this.__input.inputSerialization.csv?.fieldDelimiter,
              QuoteCharacter: this.__input.inputSerialization.csv?.quoteCharacter,
              AllowQuotedRecordDelimiter: this.__input.inputSerialization.csv?.allowQuotedRecordDelimiter,
            },
            CompressionType: this.__input.inputSerialization.compressionType,
            JSON: {
              Type: this.__input.inputSerialization.json?.type,
            },
            Parquet: {
            },
          },
          OutputSerialization: {
            CSV: {
              QuoteFields: this.__input.outputSerialization.csv?.quoteFields,
              QuoteEscapeCharacter: this.__input.outputSerialization.csv?.quoteEscapeCharacter,
              RecordDelimiter: this.__input.outputSerialization.csv?.recordDelimiter,
              FieldDelimiter: this.__input.outputSerialization.csv?.fieldDelimiter,
              QuoteCharacter: this.__input.outputSerialization.csv?.quoteCharacter,
            },
            JSON: {
              RecordDelimiter: this.__input.outputSerialization.json?.recordDelimiter,
            },
          },
          ScanRange: {
            Start: this.__input.scanRange?.start,
            End: this.__input.scanRange?.end,
          },
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SelectObjectContent.Payload.Stats.Details.BytesReturned', props);
    return resource.getResponseField('Payload.Stats.Details.BytesReturned') as unknown as number;
  }

}

export class S3ResponsesSelectObjectContentPayloadProgress {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3SelectObjectContentRequest) {
  }

  public get details(): S3ResponsesSelectObjectContentPayloadProgressDetails {
    return new S3ResponsesSelectObjectContentPayloadProgressDetails(this.__scope, this.__resources, this.__input);
  }

}

export class S3ResponsesSelectObjectContentPayloadProgressDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3SelectObjectContentRequest) {
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          Expression: this.__input.expression,
          ExpressionType: this.__input.expressionType,
          RequestProgress: {
            Enabled: this.__input.requestProgress?.enabled,
          },
          InputSerialization: {
            CSV: {
              FileHeaderInfo: this.__input.inputSerialization.csv?.fileHeaderInfo,
              Comments: this.__input.inputSerialization.csv?.comments,
              QuoteEscapeCharacter: this.__input.inputSerialization.csv?.quoteEscapeCharacter,
              RecordDelimiter: this.__input.inputSerialization.csv?.recordDelimiter,
              FieldDelimiter: this.__input.inputSerialization.csv?.fieldDelimiter,
              QuoteCharacter: this.__input.inputSerialization.csv?.quoteCharacter,
              AllowQuotedRecordDelimiter: this.__input.inputSerialization.csv?.allowQuotedRecordDelimiter,
            },
            CompressionType: this.__input.inputSerialization.compressionType,
            JSON: {
              Type: this.__input.inputSerialization.json?.type,
            },
            Parquet: {
            },
          },
          OutputSerialization: {
            CSV: {
              QuoteFields: this.__input.outputSerialization.csv?.quoteFields,
              QuoteEscapeCharacter: this.__input.outputSerialization.csv?.quoteEscapeCharacter,
              RecordDelimiter: this.__input.outputSerialization.csv?.recordDelimiter,
              FieldDelimiter: this.__input.outputSerialization.csv?.fieldDelimiter,
              QuoteCharacter: this.__input.outputSerialization.csv?.quoteCharacter,
            },
            JSON: {
              RecordDelimiter: this.__input.outputSerialization.json?.recordDelimiter,
            },
          },
          ScanRange: {
            Start: this.__input.scanRange?.start,
            End: this.__input.scanRange?.end,
          },
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SelectObjectContent.Payload.Progress.Details.BytesScanned', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          Expression: this.__input.expression,
          ExpressionType: this.__input.expressionType,
          RequestProgress: {
            Enabled: this.__input.requestProgress?.enabled,
          },
          InputSerialization: {
            CSV: {
              FileHeaderInfo: this.__input.inputSerialization.csv?.fileHeaderInfo,
              Comments: this.__input.inputSerialization.csv?.comments,
              QuoteEscapeCharacter: this.__input.inputSerialization.csv?.quoteEscapeCharacter,
              RecordDelimiter: this.__input.inputSerialization.csv?.recordDelimiter,
              FieldDelimiter: this.__input.inputSerialization.csv?.fieldDelimiter,
              QuoteCharacter: this.__input.inputSerialization.csv?.quoteCharacter,
              AllowQuotedRecordDelimiter: this.__input.inputSerialization.csv?.allowQuotedRecordDelimiter,
            },
            CompressionType: this.__input.inputSerialization.compressionType,
            JSON: {
              Type: this.__input.inputSerialization.json?.type,
            },
            Parquet: {
            },
          },
          OutputSerialization: {
            CSV: {
              QuoteFields: this.__input.outputSerialization.csv?.quoteFields,
              QuoteEscapeCharacter: this.__input.outputSerialization.csv?.quoteEscapeCharacter,
              RecordDelimiter: this.__input.outputSerialization.csv?.recordDelimiter,
              FieldDelimiter: this.__input.outputSerialization.csv?.fieldDelimiter,
              QuoteCharacter: this.__input.outputSerialization.csv?.quoteCharacter,
            },
            JSON: {
              RecordDelimiter: this.__input.outputSerialization.json?.recordDelimiter,
            },
          },
          ScanRange: {
            Start: this.__input.scanRange?.start,
            End: this.__input.scanRange?.end,
          },
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SelectObjectContent.Payload.Progress.Details.BytesProcessed', props);
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
          Bucket: this.__input.bucket,
          Key: this.__input.key,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          Expression: this.__input.expression,
          ExpressionType: this.__input.expressionType,
          RequestProgress: {
            Enabled: this.__input.requestProgress?.enabled,
          },
          InputSerialization: {
            CSV: {
              FileHeaderInfo: this.__input.inputSerialization.csv?.fileHeaderInfo,
              Comments: this.__input.inputSerialization.csv?.comments,
              QuoteEscapeCharacter: this.__input.inputSerialization.csv?.quoteEscapeCharacter,
              RecordDelimiter: this.__input.inputSerialization.csv?.recordDelimiter,
              FieldDelimiter: this.__input.inputSerialization.csv?.fieldDelimiter,
              QuoteCharacter: this.__input.inputSerialization.csv?.quoteCharacter,
              AllowQuotedRecordDelimiter: this.__input.inputSerialization.csv?.allowQuotedRecordDelimiter,
            },
            CompressionType: this.__input.inputSerialization.compressionType,
            JSON: {
              Type: this.__input.inputSerialization.json?.type,
            },
            Parquet: {
            },
          },
          OutputSerialization: {
            CSV: {
              QuoteFields: this.__input.outputSerialization.csv?.quoteFields,
              QuoteEscapeCharacter: this.__input.outputSerialization.csv?.quoteEscapeCharacter,
              RecordDelimiter: this.__input.outputSerialization.csv?.recordDelimiter,
              FieldDelimiter: this.__input.outputSerialization.csv?.fieldDelimiter,
              QuoteCharacter: this.__input.outputSerialization.csv?.quoteCharacter,
            },
            JSON: {
              RecordDelimiter: this.__input.outputSerialization.json?.recordDelimiter,
            },
          },
          ScanRange: {
            Start: this.__input.scanRange?.start,
            End: this.__input.scanRange?.end,
          },
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SelectObjectContent.Payload.Progress.Details.BytesReturned', props);
    return resource.getResponseField('Payload.Progress.Details.BytesReturned') as unknown as number;
  }

}

export class S3ResponsesUploadPart {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3UploadPartRequest) {
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
          Bucket: this.__input.bucket,
          ContentLength: this.__input.contentLength,
          ContentMD5: this.__input.contentMd5,
          Key: this.__input.key,
          PartNumber: this.__input.partNumber,
          UploadId: this.__input.uploadId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadPart.ServerSideEncryption', props);
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
          Bucket: this.__input.bucket,
          ContentLength: this.__input.contentLength,
          ContentMD5: this.__input.contentMd5,
          Key: this.__input.key,
          PartNumber: this.__input.partNumber,
          UploadId: this.__input.uploadId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadPart.ETag', props);
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
          Bucket: this.__input.bucket,
          ContentLength: this.__input.contentLength,
          ContentMD5: this.__input.contentMd5,
          Key: this.__input.key,
          PartNumber: this.__input.partNumber,
          UploadId: this.__input.uploadId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadPart.SSECustomerAlgorithm', props);
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
          Bucket: this.__input.bucket,
          ContentLength: this.__input.contentLength,
          ContentMD5: this.__input.contentMd5,
          Key: this.__input.key,
          PartNumber: this.__input.partNumber,
          UploadId: this.__input.uploadId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadPart.SSECustomerKeyMD5', props);
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
          Bucket: this.__input.bucket,
          ContentLength: this.__input.contentLength,
          ContentMD5: this.__input.contentMd5,
          Key: this.__input.key,
          PartNumber: this.__input.partNumber,
          UploadId: this.__input.uploadId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadPart.SSEKMSKeyId', props);
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
          Bucket: this.__input.bucket,
          ContentLength: this.__input.contentLength,
          ContentMD5: this.__input.contentMd5,
          Key: this.__input.key,
          PartNumber: this.__input.partNumber,
          UploadId: this.__input.uploadId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadPart.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3ResponsesUploadPartCopy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3UploadPartCopyRequest) {
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
          Bucket: this.__input.bucket,
          CopySource: this.__input.copySource,
          CopySourceIfMatch: this.__input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.__input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.__input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.__input.copySourceIfUnmodifiedSince,
          CopySourceRange: this.__input.copySourceRange,
          Key: this.__input.key,
          PartNumber: this.__input.partNumber,
          UploadId: this.__input.uploadId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          CopySourceSSECustomerAlgorithm: this.__input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
          CopySourceSSECustomerKeyMD5: this.__input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.__input.expectedSourceBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadPartCopy.CopySourceVersionId', props);
    return resource.getResponseField('CopySourceVersionId') as unknown as string;
  }

  public get copyPartResult(): S3ResponsesUploadPartCopyCopyPartResult {
    return new S3ResponsesUploadPartCopyCopyPartResult(this.__scope, this.__resources, this.__input);
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
          Bucket: this.__input.bucket,
          CopySource: this.__input.copySource,
          CopySourceIfMatch: this.__input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.__input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.__input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.__input.copySourceIfUnmodifiedSince,
          CopySourceRange: this.__input.copySourceRange,
          Key: this.__input.key,
          PartNumber: this.__input.partNumber,
          UploadId: this.__input.uploadId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          CopySourceSSECustomerAlgorithm: this.__input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
          CopySourceSSECustomerKeyMD5: this.__input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.__input.expectedSourceBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadPartCopy.ServerSideEncryption', props);
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
          Bucket: this.__input.bucket,
          CopySource: this.__input.copySource,
          CopySourceIfMatch: this.__input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.__input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.__input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.__input.copySourceIfUnmodifiedSince,
          CopySourceRange: this.__input.copySourceRange,
          Key: this.__input.key,
          PartNumber: this.__input.partNumber,
          UploadId: this.__input.uploadId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          CopySourceSSECustomerAlgorithm: this.__input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
          CopySourceSSECustomerKeyMD5: this.__input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.__input.expectedSourceBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadPartCopy.SSECustomerAlgorithm', props);
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
          Bucket: this.__input.bucket,
          CopySource: this.__input.copySource,
          CopySourceIfMatch: this.__input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.__input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.__input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.__input.copySourceIfUnmodifiedSince,
          CopySourceRange: this.__input.copySourceRange,
          Key: this.__input.key,
          PartNumber: this.__input.partNumber,
          UploadId: this.__input.uploadId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          CopySourceSSECustomerAlgorithm: this.__input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
          CopySourceSSECustomerKeyMD5: this.__input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.__input.expectedSourceBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadPartCopy.SSECustomerKeyMD5', props);
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
          Bucket: this.__input.bucket,
          CopySource: this.__input.copySource,
          CopySourceIfMatch: this.__input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.__input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.__input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.__input.copySourceIfUnmodifiedSince,
          CopySourceRange: this.__input.copySourceRange,
          Key: this.__input.key,
          PartNumber: this.__input.partNumber,
          UploadId: this.__input.uploadId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          CopySourceSSECustomerAlgorithm: this.__input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
          CopySourceSSECustomerKeyMD5: this.__input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.__input.expectedSourceBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadPartCopy.SSEKMSKeyId', props);
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
          Bucket: this.__input.bucket,
          CopySource: this.__input.copySource,
          CopySourceIfMatch: this.__input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.__input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.__input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.__input.copySourceIfUnmodifiedSince,
          CopySourceRange: this.__input.copySourceRange,
          Key: this.__input.key,
          PartNumber: this.__input.partNumber,
          UploadId: this.__input.uploadId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          CopySourceSSECustomerAlgorithm: this.__input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
          CopySourceSSECustomerKeyMD5: this.__input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.__input.expectedSourceBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadPartCopy.RequestCharged', props);
    return resource.getResponseField('RequestCharged') as unknown as string;
  }

}

export class S3ResponsesUploadPartCopyCopyPartResult {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3UploadPartCopyRequest) {
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
          Bucket: this.__input.bucket,
          CopySource: this.__input.copySource,
          CopySourceIfMatch: this.__input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.__input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.__input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.__input.copySourceIfUnmodifiedSince,
          CopySourceRange: this.__input.copySourceRange,
          Key: this.__input.key,
          PartNumber: this.__input.partNumber,
          UploadId: this.__input.uploadId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          CopySourceSSECustomerAlgorithm: this.__input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
          CopySourceSSECustomerKeyMD5: this.__input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.__input.expectedSourceBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadPartCopy.CopyPartResult.ETag', props);
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
          Bucket: this.__input.bucket,
          CopySource: this.__input.copySource,
          CopySourceIfMatch: this.__input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.__input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.__input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.__input.copySourceIfUnmodifiedSince,
          CopySourceRange: this.__input.copySourceRange,
          Key: this.__input.key,
          PartNumber: this.__input.partNumber,
          UploadId: this.__input.uploadId,
          SSECustomerAlgorithm: this.__input.sseCustomerAlgorithm,
          SSECustomerKey: {
          },
          SSECustomerKeyMD5: this.__input.sseCustomerKeyMd5,
          CopySourceSSECustomerAlgorithm: this.__input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: {
          },
          CopySourceSSECustomerKeyMD5: this.__input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.__input.requestPayer,
          ExpectedBucketOwner: this.__input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.__input.expectedSourceBucketOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadPartCopy.CopyPartResult.LastModified', props);
    return resource.getResponseField('CopyPartResult.LastModified') as unknown as string;
  }

}

