import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class S3ControlClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createAccessPoint(input: shapes.S3ControlCreateAccessPointRequest): S3ControlCreateAccessPoint {
    return new S3ControlCreateAccessPoint(this, 'CreateAccessPoint', this.__resources, input);
  }

  public createBucket(input: shapes.S3ControlCreateBucketRequest): S3ControlCreateBucket {
    return new S3ControlCreateBucket(this, 'CreateBucket', this.__resources, input);
  }

  public createJob(input: shapes.S3ControlCreateJobRequest): S3ControlCreateJob {
    return new S3ControlCreateJob(this, 'CreateJob', this.__resources, input);
  }

  public deleteAccessPoint(input: shapes.S3ControlDeleteAccessPointRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccessPoint',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DeleteAccessPoint'),
        parameters: {
          AccountId: input.accountId,
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAccessPoint', props);
  }

  public deleteAccessPointPolicy(input: shapes.S3ControlDeleteAccessPointPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccessPointPolicy',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DeleteAccessPointPolicy'),
        parameters: {
          AccountId: input.accountId,
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAccessPointPolicy', props);
  }

  public deleteBucket(input: shapes.S3ControlDeleteBucketRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBucket',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DeleteBucket'),
        parameters: {
          AccountId: input.accountId,
          Bucket: input.bucket,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteBucket', props);
  }

  public deleteBucketLifecycleConfiguration(input: shapes.S3ControlDeleteBucketLifecycleConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBucketLifecycleConfiguration',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DeleteBucketLifecycleConfiguration'),
        parameters: {
          AccountId: input.accountId,
          Bucket: input.bucket,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteBucketLifecycleConfiguration', props);
  }

  public deleteBucketPolicy(input: shapes.S3ControlDeleteBucketPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBucketPolicy',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DeleteBucketPolicy'),
        parameters: {
          AccountId: input.accountId,
          Bucket: input.bucket,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteBucketPolicy', props);
  }

  public deleteBucketTagging(input: shapes.S3ControlDeleteBucketTaggingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBucketTagging',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DeleteBucketTagging'),
        parameters: {
          AccountId: input.accountId,
          Bucket: input.bucket,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteBucketTagging', props);
  }

  public deleteJobTagging(input: shapes.S3ControlDeleteJobTaggingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteJobTagging',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DeleteJobTagging'),
        parameters: {
          AccountId: input.accountId,
          JobId: input.jobId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteJobTagging', props);
  }

  public deletePublicAccessBlock(input: shapes.S3ControlDeletePublicAccessBlockRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePublicAccessBlock',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DeletePublicAccessBlock'),
        parameters: {
          AccountId: input.accountId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePublicAccessBlock', props);
  }

  public deleteStorageLensConfiguration(input: shapes.S3ControlDeleteStorageLensConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStorageLensConfiguration',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DeleteStorageLensConfiguration'),
        parameters: {
          ConfigId: input.configId,
          AccountId: input.accountId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteStorageLensConfiguration', props);
  }

  public deleteStorageLensConfigurationTagging(input: shapes.S3ControlDeleteStorageLensConfigurationTaggingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStorageLensConfigurationTagging',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DeleteStorageLensConfigurationTagging'),
        parameters: {
          ConfigId: input.configId,
          AccountId: input.accountId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteStorageLensConfigurationTagging', props);
  }

  public describeJob(input: shapes.S3ControlDescribeJobRequest): S3ControlDescribeJob {
    return new S3ControlDescribeJob(this, 'DescribeJob', this.__resources, input);
  }

  public fetchAccessPoint(input: shapes.S3ControlGetAccessPointRequest): S3ControlFetchAccessPoint {
    return new S3ControlFetchAccessPoint(this, 'FetchAccessPoint', this.__resources, input);
  }

  public fetchAccessPointPolicy(input: shapes.S3ControlGetAccessPointPolicyRequest): S3ControlFetchAccessPointPolicy {
    return new S3ControlFetchAccessPointPolicy(this, 'FetchAccessPointPolicy', this.__resources, input);
  }

  public fetchAccessPointPolicyStatus(input: shapes.S3ControlGetAccessPointPolicyStatusRequest): S3ControlFetchAccessPointPolicyStatus {
    return new S3ControlFetchAccessPointPolicyStatus(this, 'FetchAccessPointPolicyStatus', this.__resources, input);
  }

  public fetchBucket(input: shapes.S3ControlGetBucketRequest): S3ControlFetchBucket {
    return new S3ControlFetchBucket(this, 'FetchBucket', this.__resources, input);
  }

  public fetchBucketLifecycleConfiguration(input: shapes.S3ControlGetBucketLifecycleConfigurationRequest): S3ControlFetchBucketLifecycleConfiguration {
    return new S3ControlFetchBucketLifecycleConfiguration(this, 'FetchBucketLifecycleConfiguration', this.__resources, input);
  }

  public fetchBucketPolicy(input: shapes.S3ControlGetBucketPolicyRequest): S3ControlFetchBucketPolicy {
    return new S3ControlFetchBucketPolicy(this, 'FetchBucketPolicy', this.__resources, input);
  }

  public fetchBucketTagging(input: shapes.S3ControlGetBucketTaggingRequest): S3ControlFetchBucketTagging {
    return new S3ControlFetchBucketTagging(this, 'FetchBucketTagging', this.__resources, input);
  }

  public fetchJobTagging(input: shapes.S3ControlGetJobTaggingRequest): S3ControlFetchJobTagging {
    return new S3ControlFetchJobTagging(this, 'FetchJobTagging', this.__resources, input);
  }

  public fetchPublicAccessBlock(input: shapes.S3ControlGetPublicAccessBlockRequest): S3ControlFetchPublicAccessBlock {
    return new S3ControlFetchPublicAccessBlock(this, 'FetchPublicAccessBlock', this.__resources, input);
  }

  public fetchStorageLensConfiguration(input: shapes.S3ControlGetStorageLensConfigurationRequest): S3ControlFetchStorageLensConfiguration {
    return new S3ControlFetchStorageLensConfiguration(this, 'FetchStorageLensConfiguration', this.__resources, input);
  }

  public fetchStorageLensConfigurationTagging(input: shapes.S3ControlGetStorageLensConfigurationTaggingRequest): S3ControlFetchStorageLensConfigurationTagging {
    return new S3ControlFetchStorageLensConfigurationTagging(this, 'FetchStorageLensConfigurationTagging', this.__resources, input);
  }

  public listAccessPoints(input: shapes.S3ControlListAccessPointsRequest): S3ControlListAccessPoints {
    return new S3ControlListAccessPoints(this, 'ListAccessPoints', this.__resources, input);
  }

  public listJobs(input: shapes.S3ControlListJobsRequest): S3ControlListJobs {
    return new S3ControlListJobs(this, 'ListJobs', this.__resources, input);
  }

  public listRegionalBuckets(input: shapes.S3ControlListRegionalBucketsRequest): S3ControlListRegionalBuckets {
    return new S3ControlListRegionalBuckets(this, 'ListRegionalBuckets', this.__resources, input);
  }

  public listStorageLensConfigurations(input: shapes.S3ControlListStorageLensConfigurationsRequest): S3ControlListStorageLensConfigurations {
    return new S3ControlListStorageLensConfigurations(this, 'ListStorageLensConfigurations', this.__resources, input);
  }

  public putAccessPointPolicy(input: shapes.S3ControlPutAccessPointPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAccessPointPolicy',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.PutAccessPointPolicy'),
        parameters: {
          AccountId: input.accountId,
          Name: input.name,
          Policy: input.policy,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutAccessPointPolicy', props);
  }

  public putBucketLifecycleConfiguration(input: shapes.S3ControlPutBucketLifecycleConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putBucketLifecycleConfiguration',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.PutBucketLifecycleConfiguration'),
        parameters: {
          AccountId: input.accountId,
          Bucket: input.bucket,
          LifecycleConfiguration: {
            Rules: input.lifecycleConfiguration?.rules,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutBucketLifecycleConfiguration', props);
  }

  public putBucketPolicy(input: shapes.S3ControlPutBucketPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putBucketPolicy',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.PutBucketPolicy'),
        parameters: {
          AccountId: input.accountId,
          Bucket: input.bucket,
          ConfirmRemoveSelfBucketAccess: input.confirmRemoveSelfBucketAccess,
          Policy: input.policy,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutBucketPolicy', props);
  }

  public putBucketTagging(input: shapes.S3ControlPutBucketTaggingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putBucketTagging',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.PutBucketTagging'),
        parameters: {
          AccountId: input.accountId,
          Bucket: input.bucket,
          Tagging: {
            TagSet: input.tagging.tagSet,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutBucketTagging', props);
  }

  public putJobTagging(input: shapes.S3ControlPutJobTaggingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putJobTagging',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.PutJobTagging'),
        parameters: {
          AccountId: input.accountId,
          JobId: input.jobId,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutJobTagging', props);
  }

  public putPublicAccessBlock(input: shapes.S3ControlPutPublicAccessBlockRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPublicAccessBlock',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.PutPublicAccessBlock'),
        parameters: {
          PublicAccessBlockConfiguration: {
            BlockPublicAcls: input.publicAccessBlockConfiguration.blockPublicAcls,
            IgnorePublicAcls: input.publicAccessBlockConfiguration.ignorePublicAcls,
            BlockPublicPolicy: input.publicAccessBlockConfiguration.blockPublicPolicy,
            RestrictPublicBuckets: input.publicAccessBlockConfiguration.restrictPublicBuckets,
          },
          AccountId: input.accountId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutPublicAccessBlock', props);
  }

  public putStorageLensConfiguration(input: shapes.S3ControlPutStorageLensConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putStorageLensConfiguration',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.PutStorageLensConfiguration'),
        parameters: {
          ConfigId: input.configId,
          AccountId: input.accountId,
          StorageLensConfiguration: {
            Id: input.storageLensConfiguration.id,
            AccountLevel: {
              ActivityMetrics: {
                IsEnabled: input.storageLensConfiguration.accountLevel.activityMetrics?.isEnabled,
              },
              BucketLevel: {
                ActivityMetrics: {
                  IsEnabled: input.storageLensConfiguration.accountLevel.bucketLevel.activityMetrics?.isEnabled,
                },
                PrefixLevel: {
                  StorageMetrics: {
                    IsEnabled: input.storageLensConfiguration.accountLevel.bucketLevel.prefixLevel?.storageMetrics.isEnabled,
                    SelectionCriteria: {
                      Delimiter: input.storageLensConfiguration.accountLevel.bucketLevel.prefixLevel?.storageMetrics.selectionCriteria?.delimiter,
                      MaxDepth: input.storageLensConfiguration.accountLevel.bucketLevel.prefixLevel?.storageMetrics.selectionCriteria?.maxDepth,
                      MinStorageBytesPercentage: input.storageLensConfiguration.accountLevel.bucketLevel.prefixLevel?.storageMetrics.selectionCriteria?.minStorageBytesPercentage,
                    },
                  },
                },
              },
            },
            Include: {
              Buckets: input.storageLensConfiguration.include?.buckets,
              Regions: input.storageLensConfiguration.include?.regions,
            },
            Exclude: {
              Buckets: input.storageLensConfiguration.exclude?.buckets,
              Regions: input.storageLensConfiguration.exclude?.regions,
            },
            DataExport: {
              S3BucketDestination: {
                Format: input.storageLensConfiguration.dataExport?.s3BucketDestination.format,
                OutputSchemaVersion: input.storageLensConfiguration.dataExport?.s3BucketDestination.outputSchemaVersion,
                AccountId: input.storageLensConfiguration.dataExport?.s3BucketDestination.accountId,
                Arn: input.storageLensConfiguration.dataExport?.s3BucketDestination.arn,
                Prefix: input.storageLensConfiguration.dataExport?.s3BucketDestination.prefix,
                Encryption: {
                  SSES3: {
                  },
                  SSEKMS: {
                    KeyId: input.storageLensConfiguration.dataExport?.s3BucketDestination.encryption?.ssekms?.keyId,
                  },
                },
              },
            },
            IsEnabled: input.storageLensConfiguration.isEnabled,
            AwsOrg: {
              Arn: input.storageLensConfiguration.awsOrg?.arn,
            },
            StorageLensArn: input.storageLensConfiguration.storageLensArn,
          },
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutStorageLensConfiguration', props);
  }

  public putStorageLensConfigurationTagging(input: shapes.S3ControlPutStorageLensConfigurationTaggingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putStorageLensConfigurationTagging',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.PutStorageLensConfigurationTagging'),
        parameters: {
          ConfigId: input.configId,
          AccountId: input.accountId,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutStorageLensConfigurationTagging', props);
  }

  public updateJobPriority(input: shapes.S3ControlUpdateJobPriorityRequest): S3ControlUpdateJobPriority {
    return new S3ControlUpdateJobPriority(this, 'UpdateJobPriority', this.__resources, input);
  }

  public updateJobStatus(input: shapes.S3ControlUpdateJobStatusRequest): S3ControlUpdateJobStatus {
    return new S3ControlUpdateJobStatus(this, 'UpdateJobStatus', this.__resources, input);
  }

}

export class S3ControlCreateAccessPoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlCreateAccessPointRequest) {
    super(scope, id);
  }

  public get accessPointArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccessPoint',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.CreateAccessPoint.AccessPointArn'),
        outputPath: 'AccessPointArn',
        parameters: {
          AccountId: this.input.accountId,
          Name: this.input.name,
          Bucket: this.input.bucket,
          VpcConfiguration: {
            VpcId: this.input.vpcConfiguration?.vpcId,
          },
          PublicAccessBlockConfiguration: {
            BlockPublicAcls: this.input.publicAccessBlockConfiguration?.blockPublicAcls,
            IgnorePublicAcls: this.input.publicAccessBlockConfiguration?.ignorePublicAcls,
            BlockPublicPolicy: this.input.publicAccessBlockConfiguration?.blockPublicPolicy,
            RestrictPublicBuckets: this.input.publicAccessBlockConfiguration?.restrictPublicBuckets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccessPoint.AccessPointArn', props);
    return resource.getResponseField('AccessPointArn') as unknown as string;
  }

}

export class S3ControlCreateBucket extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlCreateBucketRequest) {
    super(scope, id);
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucket',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.CreateBucket.Location'),
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
          OutpostId: this.input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBucket.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }

  public get bucketArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucket',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.CreateBucket.BucketArn'),
        outputPath: 'BucketArn',
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
          OutpostId: this.input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBucket.BucketArn', props);
    return resource.getResponseField('BucketArn') as unknown as string;
  }

}

export class S3ControlCreateJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlCreateJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.CreateJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          AccountId: this.input.accountId,
          ConfirmationRequired: this.input.confirmationRequired,
          Operation: {
            LambdaInvoke: {
              FunctionArn: this.input.operation.lambdaInvoke?.functionArn,
            },
            S3PutObjectCopy: {
              TargetResource: this.input.operation.s3PutObjectCopy?.targetResource,
              CannedAccessControlList: this.input.operation.s3PutObjectCopy?.cannedAccessControlList,
              AccessControlGrants: this.input.operation.s3PutObjectCopy?.accessControlGrants,
              MetadataDirective: this.input.operation.s3PutObjectCopy?.metadataDirective,
              ModifiedSinceConstraint: this.input.operation.s3PutObjectCopy?.modifiedSinceConstraint,
              NewObjectMetadata: {
                CacheControl: this.input.operation.s3PutObjectCopy?.newObjectMetadata?.cacheControl,
                ContentDisposition: this.input.operation.s3PutObjectCopy?.newObjectMetadata?.contentDisposition,
                ContentEncoding: this.input.operation.s3PutObjectCopy?.newObjectMetadata?.contentEncoding,
                ContentLanguage: this.input.operation.s3PutObjectCopy?.newObjectMetadata?.contentLanguage,
                UserMetadata: this.input.operation.s3PutObjectCopy?.newObjectMetadata?.userMetadata,
                ContentLength: this.input.operation.s3PutObjectCopy?.newObjectMetadata?.contentLength,
                ContentMD5: this.input.operation.s3PutObjectCopy?.newObjectMetadata?.contentMd5,
                ContentType: this.input.operation.s3PutObjectCopy?.newObjectMetadata?.contentType,
                HttpExpiresDate: this.input.operation.s3PutObjectCopy?.newObjectMetadata?.httpExpiresDate,
                RequesterCharged: this.input.operation.s3PutObjectCopy?.newObjectMetadata?.requesterCharged,
                SSEAlgorithm: this.input.operation.s3PutObjectCopy?.newObjectMetadata?.sseAlgorithm,
              },
              NewObjectTagging: this.input.operation.s3PutObjectCopy?.newObjectTagging,
              RedirectLocation: this.input.operation.s3PutObjectCopy?.redirectLocation,
              RequesterPays: this.input.operation.s3PutObjectCopy?.requesterPays,
              StorageClass: this.input.operation.s3PutObjectCopy?.storageClass,
              UnModifiedSinceConstraint: this.input.operation.s3PutObjectCopy?.unModifiedSinceConstraint,
              SSEAwsKmsKeyId: this.input.operation.s3PutObjectCopy?.sseAwsKmsKeyId,
              TargetKeyPrefix: this.input.operation.s3PutObjectCopy?.targetKeyPrefix,
              ObjectLockLegalHoldStatus: this.input.operation.s3PutObjectCopy?.objectLockLegalHoldStatus,
              ObjectLockMode: this.input.operation.s3PutObjectCopy?.objectLockMode,
              ObjectLockRetainUntilDate: this.input.operation.s3PutObjectCopy?.objectLockRetainUntilDate,
            },
            S3PutObjectAcl: {
              AccessControlPolicy: {
                AccessControlList: {
                  Owner: {
                    ID: this.input.operation.s3PutObjectAcl?.accessControlPolicy?.accessControlList?.owner.id,
                    DisplayName: this.input.operation.s3PutObjectAcl?.accessControlPolicy?.accessControlList?.owner.displayName,
                  },
                  Grants: this.input.operation.s3PutObjectAcl?.accessControlPolicy?.accessControlList?.grants,
                },
                CannedAccessControlList: this.input.operation.s3PutObjectAcl?.accessControlPolicy?.cannedAccessControlList,
              },
            },
            S3PutObjectTagging: {
              TagSet: this.input.operation.s3PutObjectTagging?.tagSet,
            },
            S3InitiateRestoreObject: {
              ExpirationInDays: this.input.operation.s3InitiateRestoreObject?.expirationInDays,
              GlacierJobTier: this.input.operation.s3InitiateRestoreObject?.glacierJobTier,
            },
            S3PutObjectLegalHold: {
              LegalHold: {
                Status: this.input.operation.s3PutObjectLegalHold?.legalHold.status,
              },
            },
            S3PutObjectRetention: {
              BypassGovernanceRetention: this.input.operation.s3PutObjectRetention?.bypassGovernanceRetention,
              Retention: {
                RetainUntilDate: this.input.operation.s3PutObjectRetention?.retention.retainUntilDate,
                Mode: this.input.operation.s3PutObjectRetention?.retention.mode,
              },
            },
          },
          Report: {
            Bucket: this.input.report.bucket,
            Format: this.input.report.format,
            Enabled: this.input.report.enabled,
            Prefix: this.input.report.prefix,
            ReportScope: this.input.report.reportScope,
          },
          ClientRequestToken: this.input.clientRequestToken,
          Manifest: {
            Spec: {
              Format: this.input.manifest.spec.format,
              Fields: this.input.manifest.spec.fields,
            },
            Location: {
              ObjectArn: this.input.manifest.location.objectArn,
              ObjectVersionId: this.input.manifest.location.objectVersionId,
              ETag: this.input.manifest.location.eTag,
            },
          },
          Description: this.input.description,
          Priority: this.input.priority,
          RoleArn: this.input.roleArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class S3ControlDescribeJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlDescribeJobRequest) {
    super(scope, id);
  }

  public get job(): S3ControlDescribeJobJob {
    return new S3ControlDescribeJobJob(this, 'Job', this.__resources, this.input);
  }

}

export class S3ControlDescribeJobJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlDescribeJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.JobId'),
        outputPath: 'Job.JobId',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.JobId', props);
    return resource.getResponseField('Job.JobId') as unknown as string;
  }

  public get confirmationRequired(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.ConfirmationRequired'),
        outputPath: 'Job.ConfirmationRequired',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.ConfirmationRequired', props);
    return resource.getResponseField('Job.ConfirmationRequired') as unknown as boolean;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Description'),
        outputPath: 'Job.Description',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Description', props);
    return resource.getResponseField('Job.Description') as unknown as string;
  }

  public get jobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.JobArn'),
        outputPath: 'Job.JobArn',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.JobArn', props);
    return resource.getResponseField('Job.JobArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Status'),
        outputPath: 'Job.Status',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Status', props);
    return resource.getResponseField('Job.Status') as unknown as string;
  }

  public get manifest(): S3ControlDescribeJobJobManifest {
    return new S3ControlDescribeJobJobManifest(this, 'Manifest', this.__resources, this.input);
  }

  public get operation(): S3ControlDescribeJobJobOperation {
    return new S3ControlDescribeJobJobOperation(this, 'Operation', this.__resources, this.input);
  }

  public get priority(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Priority'),
        outputPath: 'Job.Priority',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Priority', props);
    return resource.getResponseField('Job.Priority') as unknown as number;
  }

  public get progressSummary(): S3ControlDescribeJobJobProgressSummary {
    return new S3ControlDescribeJobJobProgressSummary(this, 'ProgressSummary', this.__resources, this.input);
  }

  public get statusUpdateReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.StatusUpdateReason'),
        outputPath: 'Job.StatusUpdateReason',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.StatusUpdateReason', props);
    return resource.getResponseField('Job.StatusUpdateReason') as unknown as string;
  }

  public get failureReasons(): shapes.S3ControlJobFailure[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.FailureReasons'),
        outputPath: 'Job.FailureReasons',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.FailureReasons', props);
    return resource.getResponseField('Job.FailureReasons') as unknown as shapes.S3ControlJobFailure[];
  }

  public get report(): S3ControlDescribeJobJobReport {
    return new S3ControlDescribeJobJobReport(this, 'Report', this.__resources, this.input);
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.CreationTime'),
        outputPath: 'Job.CreationTime',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.CreationTime', props);
    return resource.getResponseField('Job.CreationTime') as unknown as string;
  }

  public get terminationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.TerminationDate'),
        outputPath: 'Job.TerminationDate',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.TerminationDate', props);
    return resource.getResponseField('Job.TerminationDate') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.RoleArn'),
        outputPath: 'Job.RoleArn',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.RoleArn', props);
    return resource.getResponseField('Job.RoleArn') as unknown as string;
  }

  public get suspendedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.SuspendedDate'),
        outputPath: 'Job.SuspendedDate',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.SuspendedDate', props);
    return resource.getResponseField('Job.SuspendedDate') as unknown as string;
  }

  public get suspendedCause(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.SuspendedCause'),
        outputPath: 'Job.SuspendedCause',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.SuspendedCause', props);
    return resource.getResponseField('Job.SuspendedCause') as unknown as string;
  }

}

export class S3ControlDescribeJobJobManifest extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlDescribeJobRequest) {
    super(scope, id);
  }

  public get spec(): S3ControlDescribeJobJobManifestSpec {
    return new S3ControlDescribeJobJobManifestSpec(this, 'Spec', this.__resources, this.input);
  }

  public get location(): S3ControlDescribeJobJobManifestLocation {
    return new S3ControlDescribeJobJobManifestLocation(this, 'Location', this.__resources, this.input);
  }

}

export class S3ControlDescribeJobJobManifestSpec extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlDescribeJobRequest) {
    super(scope, id);
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Manifest.Spec.Format'),
        outputPath: 'Job.Manifest.Spec.Format',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Manifest.Spec.Format', props);
    return resource.getResponseField('Job.Manifest.Spec.Format') as unknown as string;
  }

  public get fields(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Manifest.Spec.Fields'),
        outputPath: 'Job.Manifest.Spec.Fields',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Manifest.Spec.Fields', props);
    return resource.getResponseField('Job.Manifest.Spec.Fields') as unknown as string[];
  }

}

export class S3ControlDescribeJobJobManifestLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlDescribeJobRequest) {
    super(scope, id);
  }

  public get objectArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Manifest.Location.ObjectArn'),
        outputPath: 'Job.Manifest.Location.ObjectArn',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Manifest.Location.ObjectArn', props);
    return resource.getResponseField('Job.Manifest.Location.ObjectArn') as unknown as string;
  }

  public get objectVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Manifest.Location.ObjectVersionId'),
        outputPath: 'Job.Manifest.Location.ObjectVersionId',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Manifest.Location.ObjectVersionId', props);
    return resource.getResponseField('Job.Manifest.Location.ObjectVersionId') as unknown as string;
  }

  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Manifest.Location.ETag'),
        outputPath: 'Job.Manifest.Location.ETag',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Manifest.Location.ETag', props);
    return resource.getResponseField('Job.Manifest.Location.ETag') as unknown as string;
  }

}

export class S3ControlDescribeJobJobOperation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlDescribeJobRequest) {
    super(scope, id);
  }

  public get lambdaInvoke(): S3ControlDescribeJobJobOperationLambdaInvoke {
    return new S3ControlDescribeJobJobOperationLambdaInvoke(this, 'LambdaInvoke', this.__resources, this.input);
  }

  public get s3PutObjectCopy(): S3ControlDescribeJobJobOperationS3PutObjectCopy {
    return new S3ControlDescribeJobJobOperationS3PutObjectCopy(this, 'S3PutObjectCopy', this.__resources, this.input);
  }

  public get s3PutObjectAcl(): S3ControlDescribeJobJobOperationS3PutObjectAcl {
    return new S3ControlDescribeJobJobOperationS3PutObjectAcl(this, 'S3PutObjectAcl', this.__resources, this.input);
  }

  public get s3PutObjectTagging(): S3ControlDescribeJobJobOperationS3PutObjectTagging {
    return new S3ControlDescribeJobJobOperationS3PutObjectTagging(this, 'S3PutObjectTagging', this.__resources, this.input);
  }

  public get s3InitiateRestoreObject(): S3ControlDescribeJobJobOperationS3InitiateRestoreObject {
    return new S3ControlDescribeJobJobOperationS3InitiateRestoreObject(this, 'S3InitiateRestoreObject', this.__resources, this.input);
  }

  public get s3PutObjectLegalHold(): S3ControlDescribeJobJobOperationS3PutObjectLegalHold {
    return new S3ControlDescribeJobJobOperationS3PutObjectLegalHold(this, 'S3PutObjectLegalHold', this.__resources, this.input);
  }

  public get s3PutObjectRetention(): S3ControlDescribeJobJobOperationS3PutObjectRetention {
    return new S3ControlDescribeJobJobOperationS3PutObjectRetention(this, 'S3PutObjectRetention', this.__resources, this.input);
  }

}

export class S3ControlDescribeJobJobOperationLambdaInvoke extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlDescribeJobRequest) {
    super(scope, id);
  }

  public get functionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.LambdaInvoke.FunctionArn'),
        outputPath: 'Job.Operation.LambdaInvoke.FunctionArn',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.LambdaInvoke.FunctionArn', props);
    return resource.getResponseField('Job.Operation.LambdaInvoke.FunctionArn') as unknown as string;
  }

}

export class S3ControlDescribeJobJobOperationS3PutObjectCopy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlDescribeJobRequest) {
    super(scope, id);
  }

  public get targetResource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectCopy.TargetResource'),
        outputPath: 'Job.Operation.S3PutObjectCopy.TargetResource',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectCopy.TargetResource', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.TargetResource') as unknown as string;
  }

  public get cannedAccessControlList(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectCopy.CannedAccessControlList'),
        outputPath: 'Job.Operation.S3PutObjectCopy.CannedAccessControlList',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectCopy.CannedAccessControlList', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.CannedAccessControlList') as unknown as string;
  }

  public get accessControlGrants(): shapes.S3ControlS3Grant[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectCopy.AccessControlGrants'),
        outputPath: 'Job.Operation.S3PutObjectCopy.AccessControlGrants',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectCopy.AccessControlGrants', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.AccessControlGrants') as unknown as shapes.S3ControlS3Grant[];
  }

  public get metadataDirective(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectCopy.MetadataDirective'),
        outputPath: 'Job.Operation.S3PutObjectCopy.MetadataDirective',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectCopy.MetadataDirective', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.MetadataDirective') as unknown as string;
  }

  public get modifiedSinceConstraint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectCopy.ModifiedSinceConstraint'),
        outputPath: 'Job.Operation.S3PutObjectCopy.ModifiedSinceConstraint',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectCopy.ModifiedSinceConstraint', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.ModifiedSinceConstraint') as unknown as string;
  }

  public get newObjectMetadata(): S3ControlDescribeJobJobOperationS3PutObjectCopyNewObjectMetadata {
    return new S3ControlDescribeJobJobOperationS3PutObjectCopyNewObjectMetadata(this, 'NewObjectMetadata', this.__resources, this.input);
  }

  public get newObjectTagging(): shapes.S3ControlS3Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectTagging'),
        outputPath: 'Job.Operation.S3PutObjectCopy.NewObjectTagging',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectTagging', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.NewObjectTagging') as unknown as shapes.S3ControlS3Tag[];
  }

  public get redirectLocation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectCopy.RedirectLocation'),
        outputPath: 'Job.Operation.S3PutObjectCopy.RedirectLocation',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectCopy.RedirectLocation', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.RedirectLocation') as unknown as string;
  }

  public get requesterPays(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectCopy.RequesterPays'),
        outputPath: 'Job.Operation.S3PutObjectCopy.RequesterPays',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectCopy.RequesterPays', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.RequesterPays') as unknown as boolean;
  }

  public get storageClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectCopy.StorageClass'),
        outputPath: 'Job.Operation.S3PutObjectCopy.StorageClass',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectCopy.StorageClass', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.StorageClass') as unknown as string;
  }

  public get unModifiedSinceConstraint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectCopy.UnModifiedSinceConstraint'),
        outputPath: 'Job.Operation.S3PutObjectCopy.UnModifiedSinceConstraint',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectCopy.UnModifiedSinceConstraint', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.UnModifiedSinceConstraint') as unknown as string;
  }

  public get sseAwsKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectCopy.SSEAwsKmsKeyId'),
        outputPath: 'Job.Operation.S3PutObjectCopy.SSEAwsKmsKeyId',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectCopy.SSEAwsKmsKeyId', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.SSEAwsKmsKeyId') as unknown as string;
  }

  public get targetKeyPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectCopy.TargetKeyPrefix'),
        outputPath: 'Job.Operation.S3PutObjectCopy.TargetKeyPrefix',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectCopy.TargetKeyPrefix', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.TargetKeyPrefix') as unknown as string;
  }

  public get objectLockLegalHoldStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectCopy.ObjectLockLegalHoldStatus'),
        outputPath: 'Job.Operation.S3PutObjectCopy.ObjectLockLegalHoldStatus',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectCopy.ObjectLockLegalHoldStatus', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.ObjectLockLegalHoldStatus') as unknown as string;
  }

  public get objectLockMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectCopy.ObjectLockMode'),
        outputPath: 'Job.Operation.S3PutObjectCopy.ObjectLockMode',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectCopy.ObjectLockMode', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.ObjectLockMode') as unknown as string;
  }

  public get objectLockRetainUntilDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectCopy.ObjectLockRetainUntilDate'),
        outputPath: 'Job.Operation.S3PutObjectCopy.ObjectLockRetainUntilDate',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectCopy.ObjectLockRetainUntilDate', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.ObjectLockRetainUntilDate') as unknown as string;
  }

}

export class S3ControlDescribeJobJobOperationS3PutObjectCopyNewObjectMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlDescribeJobRequest) {
    super(scope, id);
  }

  public get cacheControl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.CacheControl'),
        outputPath: 'Job.Operation.S3PutObjectCopy.NewObjectMetadata.CacheControl',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.CacheControl', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.NewObjectMetadata.CacheControl') as unknown as string;
  }

  public get contentDisposition(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentDisposition'),
        outputPath: 'Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentDisposition',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentDisposition', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentDisposition') as unknown as string;
  }

  public get contentEncoding(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentEncoding'),
        outputPath: 'Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentEncoding',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentEncoding', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentEncoding') as unknown as string;
  }

  public get contentLanguage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentLanguage'),
        outputPath: 'Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentLanguage',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentLanguage', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentLanguage') as unknown as string;
  }

  public get userMetadata(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.UserMetadata'),
        outputPath: 'Job.Operation.S3PutObjectCopy.NewObjectMetadata.UserMetadata',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.UserMetadata', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.NewObjectMetadata.UserMetadata') as unknown as Record<string, string>;
  }

  public get contentLength(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentLength'),
        outputPath: 'Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentLength',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentLength', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentLength') as unknown as number;
  }

  public get contentMd5(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentMD5'),
        outputPath: 'Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentMD5',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentMD5', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentMD5') as unknown as string;
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentType'),
        outputPath: 'Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentType',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentType', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentType') as unknown as string;
  }

  public get httpExpiresDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.HttpExpiresDate'),
        outputPath: 'Job.Operation.S3PutObjectCopy.NewObjectMetadata.HttpExpiresDate',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.HttpExpiresDate', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.NewObjectMetadata.HttpExpiresDate') as unknown as string;
  }

  public get requesterCharged(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.RequesterCharged'),
        outputPath: 'Job.Operation.S3PutObjectCopy.NewObjectMetadata.RequesterCharged',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.RequesterCharged', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.NewObjectMetadata.RequesterCharged') as unknown as boolean;
  }

  public get sseAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.SSEAlgorithm'),
        outputPath: 'Job.Operation.S3PutObjectCopy.NewObjectMetadata.SSEAlgorithm',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.SSEAlgorithm', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.NewObjectMetadata.SSEAlgorithm') as unknown as string;
  }

}

export class S3ControlDescribeJobJobOperationS3PutObjectAcl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlDescribeJobRequest) {
    super(scope, id);
  }

  public get accessControlPolicy(): S3ControlDescribeJobJobOperationS3PutObjectAclAccessControlPolicy {
    return new S3ControlDescribeJobJobOperationS3PutObjectAclAccessControlPolicy(this, 'AccessControlPolicy', this.__resources, this.input);
  }

}

export class S3ControlDescribeJobJobOperationS3PutObjectAclAccessControlPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlDescribeJobRequest) {
    super(scope, id);
  }

  public get accessControlList(): S3ControlDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlList {
    return new S3ControlDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlList(this, 'AccessControlList', this.__resources, this.input);
  }

  public get cannedAccessControlList(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectAcl.AccessControlPolicy.CannedAccessControlList'),
        outputPath: 'Job.Operation.S3PutObjectAcl.AccessControlPolicy.CannedAccessControlList',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectAcl.AccessControlPolicy.CannedAccessControlList', props);
    return resource.getResponseField('Job.Operation.S3PutObjectAcl.AccessControlPolicy.CannedAccessControlList') as unknown as string;
  }

}

export class S3ControlDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlList extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlDescribeJobRequest) {
    super(scope, id);
  }

  public get owner(): S3ControlDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlListOwner {
    return new S3ControlDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlListOwner(this, 'Owner', this.__resources, this.input);
  }

  public get grants(): shapes.S3ControlS3Grant[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectAcl.AccessControlPolicy.AccessControlList.Grants'),
        outputPath: 'Job.Operation.S3PutObjectAcl.AccessControlPolicy.AccessControlList.Grants',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectAcl.AccessControlPolicy.AccessControlList.Grants', props);
    return resource.getResponseField('Job.Operation.S3PutObjectAcl.AccessControlPolicy.AccessControlList.Grants') as unknown as shapes.S3ControlS3Grant[];
  }

}

export class S3ControlDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlListOwner extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlDescribeJobRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectAcl.AccessControlPolicy.AccessControlList.Owner.ID'),
        outputPath: 'Job.Operation.S3PutObjectAcl.AccessControlPolicy.AccessControlList.Owner.ID',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectAcl.AccessControlPolicy.AccessControlList.Owner.ID', props);
    return resource.getResponseField('Job.Operation.S3PutObjectAcl.AccessControlPolicy.AccessControlList.Owner.ID') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectAcl.AccessControlPolicy.AccessControlList.Owner.DisplayName'),
        outputPath: 'Job.Operation.S3PutObjectAcl.AccessControlPolicy.AccessControlList.Owner.DisplayName',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectAcl.AccessControlPolicy.AccessControlList.Owner.DisplayName', props);
    return resource.getResponseField('Job.Operation.S3PutObjectAcl.AccessControlPolicy.AccessControlList.Owner.DisplayName') as unknown as string;
  }

}

export class S3ControlDescribeJobJobOperationS3PutObjectTagging extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlDescribeJobRequest) {
    super(scope, id);
  }

  public get tagSet(): shapes.S3ControlS3Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectTagging.TagSet'),
        outputPath: 'Job.Operation.S3PutObjectTagging.TagSet',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectTagging.TagSet', props);
    return resource.getResponseField('Job.Operation.S3PutObjectTagging.TagSet') as unknown as shapes.S3ControlS3Tag[];
  }

}

export class S3ControlDescribeJobJobOperationS3InitiateRestoreObject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlDescribeJobRequest) {
    super(scope, id);
  }

  public get expirationInDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3InitiateRestoreObject.ExpirationInDays'),
        outputPath: 'Job.Operation.S3InitiateRestoreObject.ExpirationInDays',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3InitiateRestoreObject.ExpirationInDays', props);
    return resource.getResponseField('Job.Operation.S3InitiateRestoreObject.ExpirationInDays') as unknown as number;
  }

  public get glacierJobTier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3InitiateRestoreObject.GlacierJobTier'),
        outputPath: 'Job.Operation.S3InitiateRestoreObject.GlacierJobTier',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3InitiateRestoreObject.GlacierJobTier', props);
    return resource.getResponseField('Job.Operation.S3InitiateRestoreObject.GlacierJobTier') as unknown as string;
  }

}

export class S3ControlDescribeJobJobOperationS3PutObjectLegalHold extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlDescribeJobRequest) {
    super(scope, id);
  }

  public get legalHold(): S3ControlDescribeJobJobOperationS3PutObjectLegalHoldLegalHold {
    return new S3ControlDescribeJobJobOperationS3PutObjectLegalHoldLegalHold(this, 'LegalHold', this.__resources, this.input);
  }

}

export class S3ControlDescribeJobJobOperationS3PutObjectLegalHoldLegalHold extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlDescribeJobRequest) {
    super(scope, id);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectLegalHold.LegalHold.Status'),
        outputPath: 'Job.Operation.S3PutObjectLegalHold.LegalHold.Status',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectLegalHold.LegalHold.Status', props);
    return resource.getResponseField('Job.Operation.S3PutObjectLegalHold.LegalHold.Status') as unknown as string;
  }

}

export class S3ControlDescribeJobJobOperationS3PutObjectRetention extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlDescribeJobRequest) {
    super(scope, id);
  }

  public get bypassGovernanceRetention(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectRetention.BypassGovernanceRetention'),
        outputPath: 'Job.Operation.S3PutObjectRetention.BypassGovernanceRetention',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectRetention.BypassGovernanceRetention', props);
    return resource.getResponseField('Job.Operation.S3PutObjectRetention.BypassGovernanceRetention') as unknown as boolean;
  }

  public get retention(): S3ControlDescribeJobJobOperationS3PutObjectRetentionRetention {
    return new S3ControlDescribeJobJobOperationS3PutObjectRetentionRetention(this, 'Retention', this.__resources, this.input);
  }

}

export class S3ControlDescribeJobJobOperationS3PutObjectRetentionRetention extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlDescribeJobRequest) {
    super(scope, id);
  }

  public get retainUntilDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectRetention.Retention.RetainUntilDate'),
        outputPath: 'Job.Operation.S3PutObjectRetention.Retention.RetainUntilDate',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectRetention.Retention.RetainUntilDate', props);
    return resource.getResponseField('Job.Operation.S3PutObjectRetention.Retention.RetainUntilDate') as unknown as string;
  }

  public get mode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectRetention.Retention.Mode'),
        outputPath: 'Job.Operation.S3PutObjectRetention.Retention.Mode',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Operation.S3PutObjectRetention.Retention.Mode', props);
    return resource.getResponseField('Job.Operation.S3PutObjectRetention.Retention.Mode') as unknown as string;
  }

}

export class S3ControlDescribeJobJobProgressSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlDescribeJobRequest) {
    super(scope, id);
  }

  public get totalNumberOfTasks(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.ProgressSummary.TotalNumberOfTasks'),
        outputPath: 'Job.ProgressSummary.TotalNumberOfTasks',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.ProgressSummary.TotalNumberOfTasks', props);
    return resource.getResponseField('Job.ProgressSummary.TotalNumberOfTasks') as unknown as number;
  }

  public get numberOfTasksSucceeded(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.ProgressSummary.NumberOfTasksSucceeded'),
        outputPath: 'Job.ProgressSummary.NumberOfTasksSucceeded',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.ProgressSummary.NumberOfTasksSucceeded', props);
    return resource.getResponseField('Job.ProgressSummary.NumberOfTasksSucceeded') as unknown as number;
  }

  public get numberOfTasksFailed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.ProgressSummary.NumberOfTasksFailed'),
        outputPath: 'Job.ProgressSummary.NumberOfTasksFailed',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.ProgressSummary.NumberOfTasksFailed', props);
    return resource.getResponseField('Job.ProgressSummary.NumberOfTasksFailed') as unknown as number;
  }

}

export class S3ControlDescribeJobJobReport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlDescribeJobRequest) {
    super(scope, id);
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Report.Bucket'),
        outputPath: 'Job.Report.Bucket',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Report.Bucket', props);
    return resource.getResponseField('Job.Report.Bucket') as unknown as string;
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Report.Format'),
        outputPath: 'Job.Report.Format',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Report.Format', props);
    return resource.getResponseField('Job.Report.Format') as unknown as string;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Report.Enabled'),
        outputPath: 'Job.Report.Enabled',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Report.Enabled', props);
    return resource.getResponseField('Job.Report.Enabled') as unknown as boolean;
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Report.Prefix'),
        outputPath: 'Job.Report.Prefix',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Report.Prefix', props);
    return resource.getResponseField('Job.Report.Prefix') as unknown as string;
  }

  public get reportScope(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Report.ReportScope'),
        outputPath: 'Job.Report.ReportScope',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Job.Report.ReportScope', props);
    return resource.getResponseField('Job.Report.ReportScope') as unknown as string;
  }

}

export class S3ControlFetchAccessPoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetAccessPointRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPoint',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetAccessPoint.Name'),
        outputPath: 'Name',
        parameters: {
          AccountId: this.input.accountId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccessPoint.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPoint',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetAccessPoint.Bucket'),
        outputPath: 'Bucket',
        parameters: {
          AccountId: this.input.accountId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccessPoint.Bucket', props);
    return resource.getResponseField('Bucket') as unknown as string;
  }

  public get networkOrigin(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPoint',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetAccessPoint.NetworkOrigin'),
        outputPath: 'NetworkOrigin',
        parameters: {
          AccountId: this.input.accountId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccessPoint.NetworkOrigin', props);
    return resource.getResponseField('NetworkOrigin') as unknown as string;
  }

  public get vpcConfiguration(): S3ControlFetchAccessPointVpcConfiguration {
    return new S3ControlFetchAccessPointVpcConfiguration(this, 'VpcConfiguration', this.__resources, this.input);
  }

  public get publicAccessBlockConfiguration(): S3ControlFetchAccessPointPublicAccessBlockConfiguration {
    return new S3ControlFetchAccessPointPublicAccessBlockConfiguration(this, 'PublicAccessBlockConfiguration', this.__resources, this.input);
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPoint',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetAccessPoint.CreationDate'),
        outputPath: 'CreationDate',
        parameters: {
          AccountId: this.input.accountId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccessPoint.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

}

export class S3ControlFetchAccessPointVpcConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetAccessPointRequest) {
    super(scope, id);
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPoint',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetAccessPoint.VpcConfiguration.VpcId'),
        outputPath: 'VpcConfiguration.VpcId',
        parameters: {
          AccountId: this.input.accountId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccessPoint.VpcConfiguration.VpcId', props);
    return resource.getResponseField('VpcConfiguration.VpcId') as unknown as string;
  }

}

export class S3ControlFetchAccessPointPublicAccessBlockConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetAccessPointRequest) {
    super(scope, id);
  }

  public get blockPublicAcls(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPoint',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetAccessPoint.PublicAccessBlockConfiguration.BlockPublicAcls'),
        outputPath: 'PublicAccessBlockConfiguration.BlockPublicAcls',
        parameters: {
          AccountId: this.input.accountId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccessPoint.PublicAccessBlockConfiguration.BlockPublicAcls', props);
    return resource.getResponseField('PublicAccessBlockConfiguration.BlockPublicAcls') as unknown as boolean;
  }

  public get ignorePublicAcls(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPoint',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetAccessPoint.PublicAccessBlockConfiguration.IgnorePublicAcls'),
        outputPath: 'PublicAccessBlockConfiguration.IgnorePublicAcls',
        parameters: {
          AccountId: this.input.accountId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccessPoint.PublicAccessBlockConfiguration.IgnorePublicAcls', props);
    return resource.getResponseField('PublicAccessBlockConfiguration.IgnorePublicAcls') as unknown as boolean;
  }

  public get blockPublicPolicy(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPoint',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetAccessPoint.PublicAccessBlockConfiguration.BlockPublicPolicy'),
        outputPath: 'PublicAccessBlockConfiguration.BlockPublicPolicy',
        parameters: {
          AccountId: this.input.accountId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccessPoint.PublicAccessBlockConfiguration.BlockPublicPolicy', props);
    return resource.getResponseField('PublicAccessBlockConfiguration.BlockPublicPolicy') as unknown as boolean;
  }

  public get restrictPublicBuckets(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPoint',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetAccessPoint.PublicAccessBlockConfiguration.RestrictPublicBuckets'),
        outputPath: 'PublicAccessBlockConfiguration.RestrictPublicBuckets',
        parameters: {
          AccountId: this.input.accountId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccessPoint.PublicAccessBlockConfiguration.RestrictPublicBuckets', props);
    return resource.getResponseField('PublicAccessBlockConfiguration.RestrictPublicBuckets') as unknown as boolean;
  }

}

export class S3ControlFetchAccessPointPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetAccessPointPolicyRequest) {
    super(scope, id);
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPointPolicy',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetAccessPointPolicy.Policy'),
        outputPath: 'Policy',
        parameters: {
          AccountId: this.input.accountId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccessPointPolicy.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

}

export class S3ControlFetchAccessPointPolicyStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetAccessPointPolicyStatusRequest) {
    super(scope, id);
  }

  public get policyStatus(): S3ControlFetchAccessPointPolicyStatusPolicyStatus {
    return new S3ControlFetchAccessPointPolicyStatusPolicyStatus(this, 'PolicyStatus', this.__resources, this.input);
  }

}

export class S3ControlFetchAccessPointPolicyStatusPolicyStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetAccessPointPolicyStatusRequest) {
    super(scope, id);
  }

  public get isPublic(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPointPolicyStatus',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetAccessPointPolicyStatus.PolicyStatus.IsPublic'),
        outputPath: 'PolicyStatus.IsPublic',
        parameters: {
          AccountId: this.input.accountId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccessPointPolicyStatus.PolicyStatus.IsPublic', props);
    return resource.getResponseField('PolicyStatus.IsPublic') as unknown as boolean;
  }

}

export class S3ControlFetchBucket extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetBucketRequest) {
    super(scope, id);
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucket',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetBucket.Bucket'),
        outputPath: 'Bucket',
        parameters: {
          AccountId: this.input.accountId,
          Bucket: this.input.bucket,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucket.Bucket', props);
    return resource.getResponseField('Bucket') as unknown as string;
  }

  public get publicAccessBlockEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucket',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetBucket.PublicAccessBlockEnabled'),
        outputPath: 'PublicAccessBlockEnabled',
        parameters: {
          AccountId: this.input.accountId,
          Bucket: this.input.bucket,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucket.PublicAccessBlockEnabled', props);
    return resource.getResponseField('PublicAccessBlockEnabled') as unknown as boolean;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucket',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetBucket.CreationDate'),
        outputPath: 'CreationDate',
        parameters: {
          AccountId: this.input.accountId,
          Bucket: this.input.bucket,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucket.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

}

export class S3ControlFetchBucketLifecycleConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetBucketLifecycleConfigurationRequest) {
    super(scope, id);
  }

  public get rules(): shapes.S3ControlLifecycleRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketLifecycleConfiguration',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetBucketLifecycleConfiguration.Rules'),
        outputPath: 'Rules',
        parameters: {
          AccountId: this.input.accountId,
          Bucket: this.input.bucket,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketLifecycleConfiguration.Rules', props);
    return resource.getResponseField('Rules') as unknown as shapes.S3ControlLifecycleRule[];
  }

}

export class S3ControlFetchBucketPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetBucketPolicyRequest) {
    super(scope, id);
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketPolicy',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetBucketPolicy.Policy'),
        outputPath: 'Policy',
        parameters: {
          AccountId: this.input.accountId,
          Bucket: this.input.bucket,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketPolicy.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

}

export class S3ControlFetchBucketTagging extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetBucketTaggingRequest) {
    super(scope, id);
  }

  public get tagSet(): shapes.S3ControlS3Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketTagging',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetBucketTagging.TagSet'),
        outputPath: 'TagSet',
        parameters: {
          AccountId: this.input.accountId,
          Bucket: this.input.bucket,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBucketTagging.TagSet', props);
    return resource.getResponseField('TagSet') as unknown as shapes.S3ControlS3Tag[];
  }

}

export class S3ControlFetchJobTagging extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetJobTaggingRequest) {
    super(scope, id);
  }

  public get tags(): shapes.S3ControlS3Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobTagging',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetJobTagging.Tags'),
        outputPath: 'Tags',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobTagging.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.S3ControlS3Tag[];
  }

}

export class S3ControlFetchPublicAccessBlock extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetPublicAccessBlockRequest) {
    super(scope, id);
  }

  public get publicAccessBlockConfiguration(): S3ControlFetchPublicAccessBlockPublicAccessBlockConfiguration {
    return new S3ControlFetchPublicAccessBlockPublicAccessBlockConfiguration(this, 'PublicAccessBlockConfiguration', this.__resources, this.input);
  }

}

export class S3ControlFetchPublicAccessBlockPublicAccessBlockConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetPublicAccessBlockRequest) {
    super(scope, id);
  }

  public get blockPublicAcls(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPublicAccessBlock',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetPublicAccessBlock.PublicAccessBlockConfiguration.BlockPublicAcls'),
        outputPath: 'PublicAccessBlockConfiguration.BlockPublicAcls',
        parameters: {
          AccountId: this.input.accountId,
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
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetPublicAccessBlock.PublicAccessBlockConfiguration.IgnorePublicAcls'),
        outputPath: 'PublicAccessBlockConfiguration.IgnorePublicAcls',
        parameters: {
          AccountId: this.input.accountId,
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
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetPublicAccessBlock.PublicAccessBlockConfiguration.BlockPublicPolicy'),
        outputPath: 'PublicAccessBlockConfiguration.BlockPublicPolicy',
        parameters: {
          AccountId: this.input.accountId,
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
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetPublicAccessBlock.PublicAccessBlockConfiguration.RestrictPublicBuckets'),
        outputPath: 'PublicAccessBlockConfiguration.RestrictPublicBuckets',
        parameters: {
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPublicAccessBlock.PublicAccessBlockConfiguration.RestrictPublicBuckets', props);
    return resource.getResponseField('PublicAccessBlockConfiguration.RestrictPublicBuckets') as unknown as boolean;
  }

}

export class S3ControlFetchStorageLensConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetStorageLensConfigurationRequest) {
    super(scope, id);
  }

  public get storageLensConfiguration(): S3ControlFetchStorageLensConfigurationStorageLensConfiguration {
    return new S3ControlFetchStorageLensConfigurationStorageLensConfiguration(this, 'StorageLensConfiguration', this.__resources, this.input);
  }

}

export class S3ControlFetchStorageLensConfigurationStorageLensConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetStorageLensConfigurationRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStorageLensConfiguration',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetStorageLensConfiguration.StorageLensConfiguration.Id'),
        outputPath: 'StorageLensConfiguration.Id',
        parameters: {
          ConfigId: this.input.configId,
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStorageLensConfiguration.StorageLensConfiguration.Id', props);
    return resource.getResponseField('StorageLensConfiguration.Id') as unknown as string;
  }

  public get accountLevel(): S3ControlFetchStorageLensConfigurationStorageLensConfigurationAccountLevel {
    return new S3ControlFetchStorageLensConfigurationStorageLensConfigurationAccountLevel(this, 'AccountLevel', this.__resources, this.input);
  }

  public get include(): S3ControlFetchStorageLensConfigurationStorageLensConfigurationInclude {
    return new S3ControlFetchStorageLensConfigurationStorageLensConfigurationInclude(this, 'Include', this.__resources, this.input);
  }

  public get exclude(): S3ControlFetchStorageLensConfigurationStorageLensConfigurationExclude {
    return new S3ControlFetchStorageLensConfigurationStorageLensConfigurationExclude(this, 'Exclude', this.__resources, this.input);
  }

  public get dataExport(): S3ControlFetchStorageLensConfigurationStorageLensConfigurationDataExport {
    return new S3ControlFetchStorageLensConfigurationStorageLensConfigurationDataExport(this, 'DataExport', this.__resources, this.input);
  }

  public get isEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStorageLensConfiguration',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetStorageLensConfiguration.StorageLensConfiguration.IsEnabled'),
        outputPath: 'StorageLensConfiguration.IsEnabled',
        parameters: {
          ConfigId: this.input.configId,
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStorageLensConfiguration.StorageLensConfiguration.IsEnabled', props);
    return resource.getResponseField('StorageLensConfiguration.IsEnabled') as unknown as boolean;
  }

  public get awsOrg(): S3ControlFetchStorageLensConfigurationStorageLensConfigurationAwsOrg {
    return new S3ControlFetchStorageLensConfigurationStorageLensConfigurationAwsOrg(this, 'AwsOrg', this.__resources, this.input);
  }

  public get storageLensArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStorageLensConfiguration',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetStorageLensConfiguration.StorageLensConfiguration.StorageLensArn'),
        outputPath: 'StorageLensConfiguration.StorageLensArn',
        parameters: {
          ConfigId: this.input.configId,
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStorageLensConfiguration.StorageLensConfiguration.StorageLensArn', props);
    return resource.getResponseField('StorageLensConfiguration.StorageLensArn') as unknown as string;
  }

}

export class S3ControlFetchStorageLensConfigurationStorageLensConfigurationAccountLevel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetStorageLensConfigurationRequest) {
    super(scope, id);
  }

  public get activityMetrics(): S3ControlFetchStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics {
    return new S3ControlFetchStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics(this, 'ActivityMetrics', this.__resources, this.input);
  }

  public get bucketLevel(): S3ControlFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel {
    return new S3ControlFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel(this, 'BucketLevel', this.__resources, this.input);
  }

}

export class S3ControlFetchStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetStorageLensConfigurationRequest) {
    super(scope, id);
  }

  public get isEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStorageLensConfiguration',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetStorageLensConfiguration.StorageLensConfiguration.AccountLevel.ActivityMetrics.IsEnabled'),
        outputPath: 'StorageLensConfiguration.AccountLevel.ActivityMetrics.IsEnabled',
        parameters: {
          ConfigId: this.input.configId,
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStorageLensConfiguration.StorageLensConfiguration.AccountLevel.ActivityMetrics.IsEnabled', props);
    return resource.getResponseField('StorageLensConfiguration.AccountLevel.ActivityMetrics.IsEnabled') as unknown as boolean;
  }

}

export class S3ControlFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetStorageLensConfigurationRequest) {
    super(scope, id);
  }

  public get activityMetrics(): S3ControlFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics {
    return new S3ControlFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics(this, 'ActivityMetrics', this.__resources, this.input);
  }

  public get prefixLevel(): S3ControlFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel {
    return new S3ControlFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel(this, 'PrefixLevel', this.__resources, this.input);
  }

}

export class S3ControlFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetStorageLensConfigurationRequest) {
    super(scope, id);
  }

  public get isEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStorageLensConfiguration',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetStorageLensConfiguration.StorageLensConfiguration.AccountLevel.BucketLevel.ActivityMetrics.IsEnabled'),
        outputPath: 'StorageLensConfiguration.AccountLevel.BucketLevel.ActivityMetrics.IsEnabled',
        parameters: {
          ConfigId: this.input.configId,
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStorageLensConfiguration.StorageLensConfiguration.AccountLevel.BucketLevel.ActivityMetrics.IsEnabled', props);
    return resource.getResponseField('StorageLensConfiguration.AccountLevel.BucketLevel.ActivityMetrics.IsEnabled') as unknown as boolean;
  }

}

export class S3ControlFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetStorageLensConfigurationRequest) {
    super(scope, id);
  }

  public get storageMetrics(): S3ControlFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics {
    return new S3ControlFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics(this, 'StorageMetrics', this.__resources, this.input);
  }

}

export class S3ControlFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetStorageLensConfigurationRequest) {
    super(scope, id);
  }

  public get isEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStorageLensConfiguration',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetStorageLensConfiguration.StorageLensConfiguration.AccountLevel.BucketLevel.PrefixLevel.StorageMetrics.IsEnabled'),
        outputPath: 'StorageLensConfiguration.AccountLevel.BucketLevel.PrefixLevel.StorageMetrics.IsEnabled',
        parameters: {
          ConfigId: this.input.configId,
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStorageLensConfiguration.StorageLensConfiguration.AccountLevel.BucketLevel.PrefixLevel.StorageMetrics.IsEnabled', props);
    return resource.getResponseField('StorageLensConfiguration.AccountLevel.BucketLevel.PrefixLevel.StorageMetrics.IsEnabled') as unknown as boolean;
  }

  public get selectionCriteria(): S3ControlFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria {
    return new S3ControlFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria(this, 'SelectionCriteria', this.__resources, this.input);
  }

}

export class S3ControlFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetStorageLensConfigurationRequest) {
    super(scope, id);
  }

  public get delimiter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStorageLensConfiguration',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetStorageLensConfiguration.StorageLensConfiguration.AccountLevel.BucketLevel.PrefixLevel.StorageMetrics.SelectionCriteria.Delimiter'),
        outputPath: 'StorageLensConfiguration.AccountLevel.BucketLevel.PrefixLevel.StorageMetrics.SelectionCriteria.Delimiter',
        parameters: {
          ConfigId: this.input.configId,
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStorageLensConfiguration.StorageLensConfiguration.AccountLevel.BucketLevel.PrefixLevel.StorageMetrics.SelectionCriteria.Delimiter', props);
    return resource.getResponseField('StorageLensConfiguration.AccountLevel.BucketLevel.PrefixLevel.StorageMetrics.SelectionCriteria.Delimiter') as unknown as string;
  }

  public get maxDepth(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStorageLensConfiguration',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetStorageLensConfiguration.StorageLensConfiguration.AccountLevel.BucketLevel.PrefixLevel.StorageMetrics.SelectionCriteria.MaxDepth'),
        outputPath: 'StorageLensConfiguration.AccountLevel.BucketLevel.PrefixLevel.StorageMetrics.SelectionCriteria.MaxDepth',
        parameters: {
          ConfigId: this.input.configId,
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStorageLensConfiguration.StorageLensConfiguration.AccountLevel.BucketLevel.PrefixLevel.StorageMetrics.SelectionCriteria.MaxDepth', props);
    return resource.getResponseField('StorageLensConfiguration.AccountLevel.BucketLevel.PrefixLevel.StorageMetrics.SelectionCriteria.MaxDepth') as unknown as number;
  }

  public get minStorageBytesPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStorageLensConfiguration',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetStorageLensConfiguration.StorageLensConfiguration.AccountLevel.BucketLevel.PrefixLevel.StorageMetrics.SelectionCriteria.MinStorageBytesPercentage'),
        outputPath: 'StorageLensConfiguration.AccountLevel.BucketLevel.PrefixLevel.StorageMetrics.SelectionCriteria.MinStorageBytesPercentage',
        parameters: {
          ConfigId: this.input.configId,
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStorageLensConfiguration.StorageLensConfiguration.AccountLevel.BucketLevel.PrefixLevel.StorageMetrics.SelectionCriteria.MinStorageBytesPercentage', props);
    return resource.getResponseField('StorageLensConfiguration.AccountLevel.BucketLevel.PrefixLevel.StorageMetrics.SelectionCriteria.MinStorageBytesPercentage') as unknown as number;
  }

}

export class S3ControlFetchStorageLensConfigurationStorageLensConfigurationInclude extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetStorageLensConfigurationRequest) {
    super(scope, id);
  }

  public get buckets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStorageLensConfiguration',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetStorageLensConfiguration.StorageLensConfiguration.Include.Buckets'),
        outputPath: 'StorageLensConfiguration.Include.Buckets',
        parameters: {
          ConfigId: this.input.configId,
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStorageLensConfiguration.StorageLensConfiguration.Include.Buckets', props);
    return resource.getResponseField('StorageLensConfiguration.Include.Buckets') as unknown as string[];
  }

  public get regions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStorageLensConfiguration',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetStorageLensConfiguration.StorageLensConfiguration.Include.Regions'),
        outputPath: 'StorageLensConfiguration.Include.Regions',
        parameters: {
          ConfigId: this.input.configId,
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStorageLensConfiguration.StorageLensConfiguration.Include.Regions', props);
    return resource.getResponseField('StorageLensConfiguration.Include.Regions') as unknown as string[];
  }

}

export class S3ControlFetchStorageLensConfigurationStorageLensConfigurationExclude extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetStorageLensConfigurationRequest) {
    super(scope, id);
  }

  public get buckets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStorageLensConfiguration',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetStorageLensConfiguration.StorageLensConfiguration.Exclude.Buckets'),
        outputPath: 'StorageLensConfiguration.Exclude.Buckets',
        parameters: {
          ConfigId: this.input.configId,
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStorageLensConfiguration.StorageLensConfiguration.Exclude.Buckets', props);
    return resource.getResponseField('StorageLensConfiguration.Exclude.Buckets') as unknown as string[];
  }

  public get regions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStorageLensConfiguration',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetStorageLensConfiguration.StorageLensConfiguration.Exclude.Regions'),
        outputPath: 'StorageLensConfiguration.Exclude.Regions',
        parameters: {
          ConfigId: this.input.configId,
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStorageLensConfiguration.StorageLensConfiguration.Exclude.Regions', props);
    return resource.getResponseField('StorageLensConfiguration.Exclude.Regions') as unknown as string[];
  }

}

export class S3ControlFetchStorageLensConfigurationStorageLensConfigurationDataExport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetStorageLensConfigurationRequest) {
    super(scope, id);
  }

  public get s3BucketDestination(): S3ControlFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination {
    return new S3ControlFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination(this, 'S3BucketDestination', this.__resources, this.input);
  }

}

export class S3ControlFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetStorageLensConfigurationRequest) {
    super(scope, id);
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStorageLensConfiguration',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetStorageLensConfiguration.StorageLensConfiguration.DataExport.S3BucketDestination.Format'),
        outputPath: 'StorageLensConfiguration.DataExport.S3BucketDestination.Format',
        parameters: {
          ConfigId: this.input.configId,
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStorageLensConfiguration.StorageLensConfiguration.DataExport.S3BucketDestination.Format', props);
    return resource.getResponseField('StorageLensConfiguration.DataExport.S3BucketDestination.Format') as unknown as string;
  }

  public get outputSchemaVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStorageLensConfiguration',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetStorageLensConfiguration.StorageLensConfiguration.DataExport.S3BucketDestination.OutputSchemaVersion'),
        outputPath: 'StorageLensConfiguration.DataExport.S3BucketDestination.OutputSchemaVersion',
        parameters: {
          ConfigId: this.input.configId,
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStorageLensConfiguration.StorageLensConfiguration.DataExport.S3BucketDestination.OutputSchemaVersion', props);
    return resource.getResponseField('StorageLensConfiguration.DataExport.S3BucketDestination.OutputSchemaVersion') as unknown as string;
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStorageLensConfiguration',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetStorageLensConfiguration.StorageLensConfiguration.DataExport.S3BucketDestination.AccountId'),
        outputPath: 'StorageLensConfiguration.DataExport.S3BucketDestination.AccountId',
        parameters: {
          ConfigId: this.input.configId,
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStorageLensConfiguration.StorageLensConfiguration.DataExport.S3BucketDestination.AccountId', props);
    return resource.getResponseField('StorageLensConfiguration.DataExport.S3BucketDestination.AccountId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStorageLensConfiguration',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetStorageLensConfiguration.StorageLensConfiguration.DataExport.S3BucketDestination.Arn'),
        outputPath: 'StorageLensConfiguration.DataExport.S3BucketDestination.Arn',
        parameters: {
          ConfigId: this.input.configId,
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStorageLensConfiguration.StorageLensConfiguration.DataExport.S3BucketDestination.Arn', props);
    return resource.getResponseField('StorageLensConfiguration.DataExport.S3BucketDestination.Arn') as unknown as string;
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStorageLensConfiguration',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetStorageLensConfiguration.StorageLensConfiguration.DataExport.S3BucketDestination.Prefix'),
        outputPath: 'StorageLensConfiguration.DataExport.S3BucketDestination.Prefix',
        parameters: {
          ConfigId: this.input.configId,
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStorageLensConfiguration.StorageLensConfiguration.DataExport.S3BucketDestination.Prefix', props);
    return resource.getResponseField('StorageLensConfiguration.DataExport.S3BucketDestination.Prefix') as unknown as string;
  }

  public get encryption(): S3ControlFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption {
    return new S3ControlFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption(this, 'Encryption', this.__resources, this.input);
  }

}

export class S3ControlFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetStorageLensConfigurationRequest) {
    super(scope, id);
  }

  public get sses3(): S3ControlFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSses3 {
    return new S3ControlFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSses3(this, 'Sses3');
  }

  public get ssekms(): S3ControlFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms {
    return new S3ControlFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms(this, 'Ssekms', this.__resources, this.input);
  }

}

export class S3ControlFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSses3 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);
  }

}

export class S3ControlFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetStorageLensConfigurationRequest) {
    super(scope, id);
  }

  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStorageLensConfiguration',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetStorageLensConfiguration.StorageLensConfiguration.DataExport.S3BucketDestination.Encryption.SSEKMS.KeyId'),
        outputPath: 'StorageLensConfiguration.DataExport.S3BucketDestination.Encryption.SSEKMS.KeyId',
        parameters: {
          ConfigId: this.input.configId,
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStorageLensConfiguration.StorageLensConfiguration.DataExport.S3BucketDestination.Encryption.SSEKMS.KeyId', props);
    return resource.getResponseField('StorageLensConfiguration.DataExport.S3BucketDestination.Encryption.SSEKMS.KeyId') as unknown as string;
  }

}

export class S3ControlFetchStorageLensConfigurationStorageLensConfigurationAwsOrg extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetStorageLensConfigurationRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStorageLensConfiguration',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetStorageLensConfiguration.StorageLensConfiguration.AwsOrg.Arn'),
        outputPath: 'StorageLensConfiguration.AwsOrg.Arn',
        parameters: {
          ConfigId: this.input.configId,
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStorageLensConfiguration.StorageLensConfiguration.AwsOrg.Arn', props);
    return resource.getResponseField('StorageLensConfiguration.AwsOrg.Arn') as unknown as string;
  }

}

export class S3ControlFetchStorageLensConfigurationTagging extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlGetStorageLensConfigurationTaggingRequest) {
    super(scope, id);
  }

  public get tags(): shapes.S3ControlStorageLensTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStorageLensConfigurationTagging',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetStorageLensConfigurationTagging.Tags'),
        outputPath: 'Tags',
        parameters: {
          ConfigId: this.input.configId,
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStorageLensConfigurationTagging.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.S3ControlStorageLensTag[];
  }

}

export class S3ControlListAccessPoints extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlListAccessPointsRequest) {
    super(scope, id);
  }

  public get accessPointList(): shapes.S3ControlAccessPoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccessPoints',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.ListAccessPoints.AccessPointList'),
        outputPath: 'AccessPointList',
        parameters: {
          AccountId: this.input.accountId,
          Bucket: this.input.bucket,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccessPoints.AccessPointList', props);
    return resource.getResponseField('AccessPointList') as unknown as shapes.S3ControlAccessPoint[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccessPoints',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.ListAccessPoints.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AccountId: this.input.accountId,
          Bucket: this.input.bucket,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccessPoints.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class S3ControlListJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlListJobsRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobs',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.ListJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AccountId: this.input.accountId,
          JobStatuses: this.input.jobStatuses,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get jobs(): shapes.S3ControlJobListDescriptor[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobs',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.ListJobs.Jobs'),
        outputPath: 'Jobs',
        parameters: {
          AccountId: this.input.accountId,
          JobStatuses: this.input.jobStatuses,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobs.Jobs', props);
    return resource.getResponseField('Jobs') as unknown as shapes.S3ControlJobListDescriptor[];
  }

}

export class S3ControlListRegionalBuckets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlListRegionalBucketsRequest) {
    super(scope, id);
  }

  public get regionalBucketList(): shapes.S3ControlRegionalBucket[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRegionalBuckets',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.ListRegionalBuckets.RegionalBucketList'),
        outputPath: 'RegionalBucketList',
        parameters: {
          AccountId: this.input.accountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          OutpostId: this.input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRegionalBuckets.RegionalBucketList', props);
    return resource.getResponseField('RegionalBucketList') as unknown as shapes.S3ControlRegionalBucket[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRegionalBuckets',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.ListRegionalBuckets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AccountId: this.input.accountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          OutpostId: this.input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRegionalBuckets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class S3ControlListStorageLensConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlListStorageLensConfigurationsRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStorageLensConfigurations',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.ListStorageLensConfigurations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AccountId: this.input.accountId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStorageLensConfigurations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get storageLensConfigurationList(): shapes.S3ControlListStorageLensConfigurationEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStorageLensConfigurations',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.ListStorageLensConfigurations.StorageLensConfigurationList'),
        outputPath: 'StorageLensConfigurationList',
        parameters: {
          AccountId: this.input.accountId,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStorageLensConfigurations.StorageLensConfigurationList', props);
    return resource.getResponseField('StorageLensConfigurationList') as unknown as shapes.S3ControlListStorageLensConfigurationEntry[];
  }

}

export class S3ControlUpdateJobPriority extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlUpdateJobPriorityRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateJobPriority',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.UpdateJobPriority.JobId'),
        outputPath: 'JobId',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
          Priority: this.input.priority,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateJobPriority.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get priority(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateJobPriority',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.UpdateJobPriority.Priority'),
        outputPath: 'Priority',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
          Priority: this.input.priority,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateJobPriority.Priority', props);
    return resource.getResponseField('Priority') as unknown as number;
  }

}

export class S3ControlUpdateJobStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3ControlUpdateJobStatusRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateJobStatus',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.UpdateJobStatus.JobId'),
        outputPath: 'JobId',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
          RequestedJobStatus: this.input.requestedJobStatus,
          StatusUpdateReason: this.input.statusUpdateReason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateJobStatus.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateJobStatus',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.UpdateJobStatus.Status'),
        outputPath: 'Status',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
          RequestedJobStatus: this.input.requestedJobStatus,
          StatusUpdateReason: this.input.statusUpdateReason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateJobStatus.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get statusUpdateReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateJobStatus',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.UpdateJobStatus.StatusUpdateReason'),
        outputPath: 'StatusUpdateReason',
        parameters: {
          AccountId: this.input.accountId,
          JobId: this.input.jobId,
          RequestedJobStatus: this.input.requestedJobStatus,
          StatusUpdateReason: this.input.statusUpdateReason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateJobStatus.StatusUpdateReason', props);
    return resource.getResponseField('StatusUpdateReason') as unknown as string;
  }

}

