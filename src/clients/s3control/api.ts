import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class S3ControlClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createAccessPoint(input: shapes.S3ControlCreateAccessPointRequest): S3ControlResponsesCreateAccessPoint {
    return new S3ControlResponsesCreateAccessPoint(this, this.__resources, input);
  }

  public createAccessPointForObjectLambda(input: shapes.S3ControlCreateAccessPointForObjectLambdaRequest): S3ControlResponsesCreateAccessPointForObjectLambda {
    return new S3ControlResponsesCreateAccessPointForObjectLambda(this, this.__resources, input);
  }

  public createBucket(input: shapes.S3ControlCreateBucketRequest): S3ControlResponsesCreateBucket {
    return new S3ControlResponsesCreateBucket(this, this.__resources, input);
  }

  public createJob(input: shapes.S3ControlCreateJobRequest): S3ControlResponsesCreateJob {
    return new S3ControlResponsesCreateJob(this, this.__resources, input);
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

  public deleteAccessPointForObjectLambda(input: shapes.S3ControlDeleteAccessPointForObjectLambdaRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccessPointForObjectLambda',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DeleteAccessPointForObjectLambda'),
        parameters: {
          AccountId: input.accountId,
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAccessPointForObjectLambda', props);
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

  public deleteAccessPointPolicyForObjectLambda(input: shapes.S3ControlDeleteAccessPointPolicyForObjectLambdaRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccessPointPolicyForObjectLambda',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DeleteAccessPointPolicyForObjectLambda'),
        parameters: {
          AccountId: input.accountId,
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAccessPointPolicyForObjectLambda', props);
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

  public describeJob(input: shapes.S3ControlDescribeJobRequest): S3ControlResponsesDescribeJob {
    return new S3ControlResponsesDescribeJob(this, this.__resources, input);
  }

  public fetchAccessPoint(input: shapes.S3ControlGetAccessPointRequest): S3ControlResponsesFetchAccessPoint {
    return new S3ControlResponsesFetchAccessPoint(this, this.__resources, input);
  }

  public fetchAccessPointConfigurationForObjectLambda(input: shapes.S3ControlGetAccessPointConfigurationForObjectLambdaRequest): S3ControlResponsesFetchAccessPointConfigurationForObjectLambda {
    return new S3ControlResponsesFetchAccessPointConfigurationForObjectLambda(this, this.__resources, input);
  }

  public fetchAccessPointForObjectLambda(input: shapes.S3ControlGetAccessPointForObjectLambdaRequest): S3ControlResponsesFetchAccessPointForObjectLambda {
    return new S3ControlResponsesFetchAccessPointForObjectLambda(this, this.__resources, input);
  }

  public fetchAccessPointPolicy(input: shapes.S3ControlGetAccessPointPolicyRequest): S3ControlResponsesFetchAccessPointPolicy {
    return new S3ControlResponsesFetchAccessPointPolicy(this, this.__resources, input);
  }

  public fetchAccessPointPolicyForObjectLambda(input: shapes.S3ControlGetAccessPointPolicyForObjectLambdaRequest): S3ControlResponsesFetchAccessPointPolicyForObjectLambda {
    return new S3ControlResponsesFetchAccessPointPolicyForObjectLambda(this, this.__resources, input);
  }

  public fetchAccessPointPolicyStatus(input: shapes.S3ControlGetAccessPointPolicyStatusRequest): S3ControlResponsesFetchAccessPointPolicyStatus {
    return new S3ControlResponsesFetchAccessPointPolicyStatus(this, this.__resources, input);
  }

  public fetchAccessPointPolicyStatusForObjectLambda(input: shapes.S3ControlGetAccessPointPolicyStatusForObjectLambdaRequest): S3ControlResponsesFetchAccessPointPolicyStatusForObjectLambda {
    return new S3ControlResponsesFetchAccessPointPolicyStatusForObjectLambda(this, this.__resources, input);
  }

  public fetchBucket(input: shapes.S3ControlGetBucketRequest): S3ControlResponsesFetchBucket {
    return new S3ControlResponsesFetchBucket(this, this.__resources, input);
  }

  public fetchBucketLifecycleConfiguration(input: shapes.S3ControlGetBucketLifecycleConfigurationRequest): S3ControlResponsesFetchBucketLifecycleConfiguration {
    return new S3ControlResponsesFetchBucketLifecycleConfiguration(this, this.__resources, input);
  }

  public fetchBucketPolicy(input: shapes.S3ControlGetBucketPolicyRequest): S3ControlResponsesFetchBucketPolicy {
    return new S3ControlResponsesFetchBucketPolicy(this, this.__resources, input);
  }

  public fetchBucketTagging(input: shapes.S3ControlGetBucketTaggingRequest): S3ControlResponsesFetchBucketTagging {
    return new S3ControlResponsesFetchBucketTagging(this, this.__resources, input);
  }

  public fetchJobTagging(input: shapes.S3ControlGetJobTaggingRequest): S3ControlResponsesFetchJobTagging {
    return new S3ControlResponsesFetchJobTagging(this, this.__resources, input);
  }

  public fetchPublicAccessBlock(input: shapes.S3ControlGetPublicAccessBlockRequest): S3ControlResponsesFetchPublicAccessBlock {
    return new S3ControlResponsesFetchPublicAccessBlock(this, this.__resources, input);
  }

  public fetchStorageLensConfiguration(input: shapes.S3ControlGetStorageLensConfigurationRequest): S3ControlResponsesFetchStorageLensConfiguration {
    return new S3ControlResponsesFetchStorageLensConfiguration(this, this.__resources, input);
  }

  public fetchStorageLensConfigurationTagging(input: shapes.S3ControlGetStorageLensConfigurationTaggingRequest): S3ControlResponsesFetchStorageLensConfigurationTagging {
    return new S3ControlResponsesFetchStorageLensConfigurationTagging(this, this.__resources, input);
  }

  public listAccessPoints(input: shapes.S3ControlListAccessPointsRequest): S3ControlResponsesListAccessPoints {
    return new S3ControlResponsesListAccessPoints(this, this.__resources, input);
  }

  public listAccessPointsForObjectLambda(input: shapes.S3ControlListAccessPointsForObjectLambdaRequest): S3ControlResponsesListAccessPointsForObjectLambda {
    return new S3ControlResponsesListAccessPointsForObjectLambda(this, this.__resources, input);
  }

  public listJobs(input: shapes.S3ControlListJobsRequest): S3ControlResponsesListJobs {
    return new S3ControlResponsesListJobs(this, this.__resources, input);
  }

  public listRegionalBuckets(input: shapes.S3ControlListRegionalBucketsRequest): S3ControlResponsesListRegionalBuckets {
    return new S3ControlResponsesListRegionalBuckets(this, this.__resources, input);
  }

  public listStorageLensConfigurations(input: shapes.S3ControlListStorageLensConfigurationsRequest): S3ControlResponsesListStorageLensConfigurations {
    return new S3ControlResponsesListStorageLensConfigurations(this, this.__resources, input);
  }

  public putAccessPointConfigurationForObjectLambda(input: shapes.S3ControlPutAccessPointConfigurationForObjectLambdaRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAccessPointConfigurationForObjectLambda',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.PutAccessPointConfigurationForObjectLambda'),
        parameters: {
          AccountId: input.accountId,
          Name: input.name,
          Configuration: {
            SupportingAccessPoint: input.configuration.supportingAccessPoint,
            CloudWatchMetricsEnabled: input.configuration.cloudWatchMetricsEnabled,
            AllowedFeatures: input.configuration.allowedFeatures,
            TransformationConfigurations: input.configuration.transformationConfigurations,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutAccessPointConfigurationForObjectLambda', props);
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

  public putAccessPointPolicyForObjectLambda(input: shapes.S3ControlPutAccessPointPolicyForObjectLambdaRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAccessPointPolicyForObjectLambda',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.PutAccessPointPolicyForObjectLambda'),
        parameters: {
          AccountId: input.accountId,
          Name: input.name,
          Policy: input.policy,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutAccessPointPolicyForObjectLambda', props);
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

  public updateJobPriority(input: shapes.S3ControlUpdateJobPriorityRequest): S3ControlResponsesUpdateJobPriority {
    return new S3ControlResponsesUpdateJobPriority(this, this.__resources, input);
  }

  public updateJobStatus(input: shapes.S3ControlUpdateJobStatusRequest): S3ControlResponsesUpdateJobStatus {
    return new S3ControlResponsesUpdateJobStatus(this, this.__resources, input);
  }

}

export class S3ControlResponsesCreateAccessPoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlCreateAccessPointRequest) {
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
          AccountId: this.__input.accountId,
          Name: this.__input.name,
          Bucket: this.__input.bucket,
          VpcConfiguration: {
            VpcId: this.__input.vpcConfiguration?.vpcId,
          },
          PublicAccessBlockConfiguration: {
            BlockPublicAcls: this.__input.publicAccessBlockConfiguration?.blockPublicAcls,
            IgnorePublicAcls: this.__input.publicAccessBlockConfiguration?.ignorePublicAcls,
            BlockPublicPolicy: this.__input.publicAccessBlockConfiguration?.blockPublicPolicy,
            RestrictPublicBuckets: this.__input.publicAccessBlockConfiguration?.restrictPublicBuckets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccessPoint.AccessPointArn', props);
    return resource.getResponseField('AccessPointArn') as unknown as string;
  }

  public get alias(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccessPoint',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.CreateAccessPoint.Alias'),
        outputPath: 'Alias',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
          Bucket: this.__input.bucket,
          VpcConfiguration: {
            VpcId: this.__input.vpcConfiguration?.vpcId,
          },
          PublicAccessBlockConfiguration: {
            BlockPublicAcls: this.__input.publicAccessBlockConfiguration?.blockPublicAcls,
            IgnorePublicAcls: this.__input.publicAccessBlockConfiguration?.ignorePublicAcls,
            BlockPublicPolicy: this.__input.publicAccessBlockConfiguration?.blockPublicPolicy,
            RestrictPublicBuckets: this.__input.publicAccessBlockConfiguration?.restrictPublicBuckets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccessPoint.Alias', props);
    return resource.getResponseField('Alias') as unknown as string;
  }

}

export class S3ControlResponsesCreateAccessPointForObjectLambda {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlCreateAccessPointForObjectLambdaRequest) {
  }

  public get objectLambdaAccessPointArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccessPointForObjectLambda',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.CreateAccessPointForObjectLambda.ObjectLambdaAccessPointArn'),
        outputPath: 'ObjectLambdaAccessPointArn',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
          Configuration: {
            SupportingAccessPoint: this.__input.configuration.supportingAccessPoint,
            CloudWatchMetricsEnabled: this.__input.configuration.cloudWatchMetricsEnabled,
            AllowedFeatures: this.__input.configuration.allowedFeatures,
            TransformationConfigurations: this.__input.configuration.transformationConfigurations,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccessPointForObjectLambda.ObjectLambdaAccessPointArn', props);
    return resource.getResponseField('ObjectLambdaAccessPointArn') as unknown as string;
  }

}

export class S3ControlResponsesCreateBucket {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlCreateBucketRequest) {
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
          OutpostId: this.__input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucket.Location', props);
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
          OutpostId: this.__input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucket.BucketArn', props);
    return resource.getResponseField('BucketArn') as unknown as string;
  }

}

export class S3ControlResponsesCreateJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlCreateJobRequest) {
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
          AccountId: this.__input.accountId,
          ConfirmationRequired: this.__input.confirmationRequired,
          Operation: {
            LambdaInvoke: {
              FunctionArn: this.__input.operation.lambdaInvoke?.functionArn,
            },
            S3PutObjectCopy: {
              TargetResource: this.__input.operation.s3PutObjectCopy?.targetResource,
              CannedAccessControlList: this.__input.operation.s3PutObjectCopy?.cannedAccessControlList,
              AccessControlGrants: this.__input.operation.s3PutObjectCopy?.accessControlGrants,
              MetadataDirective: this.__input.operation.s3PutObjectCopy?.metadataDirective,
              ModifiedSinceConstraint: this.__input.operation.s3PutObjectCopy?.modifiedSinceConstraint,
              NewObjectMetadata: {
                CacheControl: this.__input.operation.s3PutObjectCopy?.newObjectMetadata?.cacheControl,
                ContentDisposition: this.__input.operation.s3PutObjectCopy?.newObjectMetadata?.contentDisposition,
                ContentEncoding: this.__input.operation.s3PutObjectCopy?.newObjectMetadata?.contentEncoding,
                ContentLanguage: this.__input.operation.s3PutObjectCopy?.newObjectMetadata?.contentLanguage,
                UserMetadata: this.__input.operation.s3PutObjectCopy?.newObjectMetadata?.userMetadata,
                ContentLength: this.__input.operation.s3PutObjectCopy?.newObjectMetadata?.contentLength,
                ContentMD5: this.__input.operation.s3PutObjectCopy?.newObjectMetadata?.contentMd5,
                ContentType: this.__input.operation.s3PutObjectCopy?.newObjectMetadata?.contentType,
                HttpExpiresDate: this.__input.operation.s3PutObjectCopy?.newObjectMetadata?.httpExpiresDate,
                RequesterCharged: this.__input.operation.s3PutObjectCopy?.newObjectMetadata?.requesterCharged,
                SSEAlgorithm: this.__input.operation.s3PutObjectCopy?.newObjectMetadata?.sseAlgorithm,
              },
              NewObjectTagging: this.__input.operation.s3PutObjectCopy?.newObjectTagging,
              RedirectLocation: this.__input.operation.s3PutObjectCopy?.redirectLocation,
              RequesterPays: this.__input.operation.s3PutObjectCopy?.requesterPays,
              StorageClass: this.__input.operation.s3PutObjectCopy?.storageClass,
              UnModifiedSinceConstraint: this.__input.operation.s3PutObjectCopy?.unModifiedSinceConstraint,
              SSEAwsKmsKeyId: this.__input.operation.s3PutObjectCopy?.sseAwsKmsKeyId,
              TargetKeyPrefix: this.__input.operation.s3PutObjectCopy?.targetKeyPrefix,
              ObjectLockLegalHoldStatus: this.__input.operation.s3PutObjectCopy?.objectLockLegalHoldStatus,
              ObjectLockMode: this.__input.operation.s3PutObjectCopy?.objectLockMode,
              ObjectLockRetainUntilDate: this.__input.operation.s3PutObjectCopy?.objectLockRetainUntilDate,
              BucketKeyEnabled: this.__input.operation.s3PutObjectCopy?.bucketKeyEnabled,
            },
            S3PutObjectAcl: {
              AccessControlPolicy: {
                AccessControlList: {
                  Owner: {
                    ID: this.__input.operation.s3PutObjectAcl?.accessControlPolicy?.accessControlList?.owner.id,
                    DisplayName: this.__input.operation.s3PutObjectAcl?.accessControlPolicy?.accessControlList?.owner.displayName,
                  },
                  Grants: this.__input.operation.s3PutObjectAcl?.accessControlPolicy?.accessControlList?.grants,
                },
                CannedAccessControlList: this.__input.operation.s3PutObjectAcl?.accessControlPolicy?.cannedAccessControlList,
              },
            },
            S3PutObjectTagging: {
              TagSet: this.__input.operation.s3PutObjectTagging?.tagSet,
            },
            S3DeleteObjectTagging: {
            },
            S3InitiateRestoreObject: {
              ExpirationInDays: this.__input.operation.s3InitiateRestoreObject?.expirationInDays,
              GlacierJobTier: this.__input.operation.s3InitiateRestoreObject?.glacierJobTier,
            },
            S3PutObjectLegalHold: {
              LegalHold: {
                Status: this.__input.operation.s3PutObjectLegalHold?.legalHold.status,
              },
            },
            S3PutObjectRetention: {
              BypassGovernanceRetention: this.__input.operation.s3PutObjectRetention?.bypassGovernanceRetention,
              Retention: {
                RetainUntilDate: this.__input.operation.s3PutObjectRetention?.retention.retainUntilDate,
                Mode: this.__input.operation.s3PutObjectRetention?.retention.mode,
              },
            },
          },
          Report: {
            Bucket: this.__input.report.bucket,
            Format: this.__input.report.format,
            Enabled: this.__input.report.enabled,
            Prefix: this.__input.report.prefix,
            ReportScope: this.__input.report.reportScope,
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Manifest: {
            Spec: {
              Format: this.__input.manifest.spec.format,
              Fields: this.__input.manifest.spec.fields,
            },
            Location: {
              ObjectArn: this.__input.manifest.location.objectArn,
              ObjectVersionId: this.__input.manifest.location.objectVersionId,
              ETag: this.__input.manifest.location.eTag,
            },
          },
          Description: this.__input.description,
          Priority: this.__input.priority,
          RoleArn: this.__input.roleArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class S3ControlResponsesDescribeJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlDescribeJobRequest) {
  }

  public get job(): S3ControlResponsesDescribeJobJob {
    return new S3ControlResponsesDescribeJobJob(this.__scope, this.__resources, this.__input);
  }

}

export class S3ControlResponsesDescribeJobJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlDescribeJobRequest) {
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.JobId', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.ConfirmationRequired', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Description', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.JobArn', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Status', props);
    return resource.getResponseField('Job.Status') as unknown as string;
  }

  public get manifest(): S3ControlResponsesDescribeJobJobManifest {
    return new S3ControlResponsesDescribeJobJobManifest(this.__scope, this.__resources, this.__input);
  }

  public get operation(): S3ControlResponsesDescribeJobJobOperation {
    return new S3ControlResponsesDescribeJobJobOperation(this.__scope, this.__resources, this.__input);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Priority', props);
    return resource.getResponseField('Job.Priority') as unknown as number;
  }

  public get progressSummary(): S3ControlResponsesDescribeJobJobProgressSummary {
    return new S3ControlResponsesDescribeJobJobProgressSummary(this.__scope, this.__resources, this.__input);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.StatusUpdateReason', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.FailureReasons', props);
    return resource.getResponseField('Job.FailureReasons') as unknown as shapes.S3ControlJobFailure[];
  }

  public get report(): S3ControlResponsesDescribeJobJobReport {
    return new S3ControlResponsesDescribeJobJobReport(this.__scope, this.__resources, this.__input);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.CreationTime', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.TerminationDate', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.RoleArn', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.SuspendedDate', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.SuspendedCause', props);
    return resource.getResponseField('Job.SuspendedCause') as unknown as string;
  }

}

export class S3ControlResponsesDescribeJobJobManifest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlDescribeJobRequest) {
  }

  public get spec(): S3ControlResponsesDescribeJobJobManifestSpec {
    return new S3ControlResponsesDescribeJobJobManifestSpec(this.__scope, this.__resources, this.__input);
  }

  public get location(): S3ControlResponsesDescribeJobJobManifestLocation {
    return new S3ControlResponsesDescribeJobJobManifestLocation(this.__scope, this.__resources, this.__input);
  }

}

export class S3ControlResponsesDescribeJobJobManifestSpec {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlDescribeJobRequest) {
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Manifest.Spec.Format', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Manifest.Spec.Fields', props);
    return resource.getResponseField('Job.Manifest.Spec.Fields') as unknown as string[];
  }

}

export class S3ControlResponsesDescribeJobJobManifestLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlDescribeJobRequest) {
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Manifest.Location.ObjectArn', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Manifest.Location.ObjectVersionId', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Manifest.Location.ETag', props);
    return resource.getResponseField('Job.Manifest.Location.ETag') as unknown as string;
  }

}

export class S3ControlResponsesDescribeJobJobOperation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlDescribeJobRequest) {
  }

  public get lambdaInvoke(): S3ControlResponsesDescribeJobJobOperationLambdaInvoke {
    return new S3ControlResponsesDescribeJobJobOperationLambdaInvoke(this.__scope, this.__resources, this.__input);
  }

  public get s3PutObjectCopy(): S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy {
    return new S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy(this.__scope, this.__resources, this.__input);
  }

  public get s3PutObjectAcl(): S3ControlResponsesDescribeJobJobOperationS3PutObjectAcl {
    return new S3ControlResponsesDescribeJobJobOperationS3PutObjectAcl(this.__scope, this.__resources, this.__input);
  }

  public get s3PutObjectTagging(): S3ControlResponsesDescribeJobJobOperationS3PutObjectTagging {
    return new S3ControlResponsesDescribeJobJobOperationS3PutObjectTagging(this.__scope, this.__resources, this.__input);
  }

  public get s3DeleteObjectTagging(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3DeleteObjectTagging'),
        outputPath: 'Job.Operation.S3DeleteObjectTagging',
        parameters: {
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3DeleteObjectTagging', props);
    return resource.getResponseField('Job.Operation.S3DeleteObjectTagging') as unknown as any;
  }

  public get s3InitiateRestoreObject(): S3ControlResponsesDescribeJobJobOperationS3InitiateRestoreObject {
    return new S3ControlResponsesDescribeJobJobOperationS3InitiateRestoreObject(this.__scope, this.__resources, this.__input);
  }

  public get s3PutObjectLegalHold(): S3ControlResponsesDescribeJobJobOperationS3PutObjectLegalHold {
    return new S3ControlResponsesDescribeJobJobOperationS3PutObjectLegalHold(this.__scope, this.__resources, this.__input);
  }

  public get s3PutObjectRetention(): S3ControlResponsesDescribeJobJobOperationS3PutObjectRetention {
    return new S3ControlResponsesDescribeJobJobOperationS3PutObjectRetention(this.__scope, this.__resources, this.__input);
  }

}

export class S3ControlResponsesDescribeJobJobOperationLambdaInvoke {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlDescribeJobRequest) {
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.LambdaInvoke.FunctionArn', props);
    return resource.getResponseField('Job.Operation.LambdaInvoke.FunctionArn') as unknown as string;
  }

}

export class S3ControlResponsesDescribeJobJobOperationS3PutObjectCopy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlDescribeJobRequest) {
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectCopy.TargetResource', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectCopy.CannedAccessControlList', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectCopy.AccessControlGrants', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectCopy.MetadataDirective', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectCopy.ModifiedSinceConstraint', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.ModifiedSinceConstraint') as unknown as string;
  }

  public get newObjectMetadata(): S3ControlResponsesDescribeJobJobOperationS3PutObjectCopyNewObjectMetadata {
    return new S3ControlResponsesDescribeJobJobOperationS3PutObjectCopyNewObjectMetadata(this.__scope, this.__resources, this.__input);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectTagging', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectCopy.RedirectLocation', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectCopy.RequesterPays', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectCopy.StorageClass', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectCopy.UnModifiedSinceConstraint', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectCopy.SSEAwsKmsKeyId', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectCopy.TargetKeyPrefix', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectCopy.ObjectLockLegalHoldStatus', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectCopy.ObjectLockMode', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectCopy.ObjectLockRetainUntilDate', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.ObjectLockRetainUntilDate') as unknown as string;
  }

  public get bucketKeyEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.DescribeJob.Job.Operation.S3PutObjectCopy.BucketKeyEnabled'),
        outputPath: 'Job.Operation.S3PutObjectCopy.BucketKeyEnabled',
        parameters: {
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectCopy.BucketKeyEnabled', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.BucketKeyEnabled') as unknown as boolean;
  }

}

export class S3ControlResponsesDescribeJobJobOperationS3PutObjectCopyNewObjectMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlDescribeJobRequest) {
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.CacheControl', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentDisposition', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentEncoding', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentLanguage', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.UserMetadata', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentLength', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentMD5', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.ContentType', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.HttpExpiresDate', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.RequesterCharged', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectCopy.NewObjectMetadata.SSEAlgorithm', props);
    return resource.getResponseField('Job.Operation.S3PutObjectCopy.NewObjectMetadata.SSEAlgorithm') as unknown as string;
  }

}

export class S3ControlResponsesDescribeJobJobOperationS3PutObjectAcl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlDescribeJobRequest) {
  }

  public get accessControlPolicy(): S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicy {
    return new S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicy(this.__scope, this.__resources, this.__input);
  }

}

export class S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlDescribeJobRequest) {
  }

  public get accessControlList(): S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlList {
    return new S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlList(this.__scope, this.__resources, this.__input);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectAcl.AccessControlPolicy.CannedAccessControlList', props);
    return resource.getResponseField('Job.Operation.S3PutObjectAcl.AccessControlPolicy.CannedAccessControlList') as unknown as string;
  }

}

export class S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlList {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlDescribeJobRequest) {
  }

  public get owner(): S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlListOwner {
    return new S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlListOwner(this.__scope, this.__resources, this.__input);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectAcl.AccessControlPolicy.AccessControlList.Grants', props);
    return resource.getResponseField('Job.Operation.S3PutObjectAcl.AccessControlPolicy.AccessControlList.Grants') as unknown as shapes.S3ControlS3Grant[];
  }

}

export class S3ControlResponsesDescribeJobJobOperationS3PutObjectAclAccessControlPolicyAccessControlListOwner {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlDescribeJobRequest) {
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectAcl.AccessControlPolicy.AccessControlList.Owner.ID', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectAcl.AccessControlPolicy.AccessControlList.Owner.DisplayName', props);
    return resource.getResponseField('Job.Operation.S3PutObjectAcl.AccessControlPolicy.AccessControlList.Owner.DisplayName') as unknown as string;
  }

}

export class S3ControlResponsesDescribeJobJobOperationS3PutObjectTagging {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlDescribeJobRequest) {
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectTagging.TagSet', props);
    return resource.getResponseField('Job.Operation.S3PutObjectTagging.TagSet') as unknown as shapes.S3ControlS3Tag[];
  }

}

export class S3ControlResponsesDescribeJobJobOperationS3InitiateRestoreObject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlDescribeJobRequest) {
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3InitiateRestoreObject.ExpirationInDays', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3InitiateRestoreObject.GlacierJobTier', props);
    return resource.getResponseField('Job.Operation.S3InitiateRestoreObject.GlacierJobTier') as unknown as string;
  }

}

export class S3ControlResponsesDescribeJobJobOperationS3PutObjectLegalHold {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlDescribeJobRequest) {
  }

  public get legalHold(): S3ControlResponsesDescribeJobJobOperationS3PutObjectLegalHoldLegalHold {
    return new S3ControlResponsesDescribeJobJobOperationS3PutObjectLegalHoldLegalHold(this.__scope, this.__resources, this.__input);
  }

}

export class S3ControlResponsesDescribeJobJobOperationS3PutObjectLegalHoldLegalHold {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlDescribeJobRequest) {
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectLegalHold.LegalHold.Status', props);
    return resource.getResponseField('Job.Operation.S3PutObjectLegalHold.LegalHold.Status') as unknown as string;
  }

}

export class S3ControlResponsesDescribeJobJobOperationS3PutObjectRetention {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlDescribeJobRequest) {
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectRetention.BypassGovernanceRetention', props);
    return resource.getResponseField('Job.Operation.S3PutObjectRetention.BypassGovernanceRetention') as unknown as boolean;
  }

  public get retention(): S3ControlResponsesDescribeJobJobOperationS3PutObjectRetentionRetention {
    return new S3ControlResponsesDescribeJobJobOperationS3PutObjectRetentionRetention(this.__scope, this.__resources, this.__input);
  }

}

export class S3ControlResponsesDescribeJobJobOperationS3PutObjectRetentionRetention {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlDescribeJobRequest) {
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectRetention.Retention.RetainUntilDate', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Operation.S3PutObjectRetention.Retention.Mode', props);
    return resource.getResponseField('Job.Operation.S3PutObjectRetention.Retention.Mode') as unknown as string;
  }

}

export class S3ControlResponsesDescribeJobJobProgressSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlDescribeJobRequest) {
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.ProgressSummary.TotalNumberOfTasks', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.ProgressSummary.NumberOfTasksSucceeded', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.ProgressSummary.NumberOfTasksFailed', props);
    return resource.getResponseField('Job.ProgressSummary.NumberOfTasksFailed') as unknown as number;
  }

}

export class S3ControlResponsesDescribeJobJobReport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlDescribeJobRequest) {
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Report.Bucket', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Report.Format', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Report.Enabled', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Report.Prefix', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Job.Report.ReportScope', props);
    return resource.getResponseField('Job.Report.ReportScope') as unknown as string;
  }

}

export class S3ControlResponsesFetchAccessPoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetAccessPointRequest) {
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
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPoint.Name', props);
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
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPoint.Bucket', props);
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
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPoint.NetworkOrigin', props);
    return resource.getResponseField('NetworkOrigin') as unknown as string;
  }

  public get vpcConfiguration(): S3ControlResponsesFetchAccessPointVpcConfiguration {
    return new S3ControlResponsesFetchAccessPointVpcConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get publicAccessBlockConfiguration(): S3ControlResponsesFetchAccessPointPublicAccessBlockConfiguration {
    return new S3ControlResponsesFetchAccessPointPublicAccessBlockConfiguration(this.__scope, this.__resources, this.__input);
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
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPoint.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

  public get alias(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPoint',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetAccessPoint.Alias'),
        outputPath: 'Alias',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPoint.Alias', props);
    return resource.getResponseField('Alias') as unknown as string;
  }

  public get accessPointArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPoint',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetAccessPoint.AccessPointArn'),
        outputPath: 'AccessPointArn',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPoint.AccessPointArn', props);
    return resource.getResponseField('AccessPointArn') as unknown as string;
  }

  public get endpoints(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPoint',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetAccessPoint.Endpoints'),
        outputPath: 'Endpoints',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPoint.Endpoints', props);
    return resource.getResponseField('Endpoints') as unknown as Record<string, string>;
  }

}

export class S3ControlResponsesFetchAccessPointVpcConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetAccessPointRequest) {
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
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPoint.VpcConfiguration.VpcId', props);
    return resource.getResponseField('VpcConfiguration.VpcId') as unknown as string;
  }

}

export class S3ControlResponsesFetchAccessPointPublicAccessBlockConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetAccessPointRequest) {
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
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPoint.PublicAccessBlockConfiguration.BlockPublicAcls', props);
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
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPoint.PublicAccessBlockConfiguration.IgnorePublicAcls', props);
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
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPoint.PublicAccessBlockConfiguration.BlockPublicPolicy', props);
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
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPoint.PublicAccessBlockConfiguration.RestrictPublicBuckets', props);
    return resource.getResponseField('PublicAccessBlockConfiguration.RestrictPublicBuckets') as unknown as boolean;
  }

}

export class S3ControlResponsesFetchAccessPointConfigurationForObjectLambda {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetAccessPointConfigurationForObjectLambdaRequest) {
  }

  public get configuration(): S3ControlResponsesFetchAccessPointConfigurationForObjectLambdaConfiguration {
    return new S3ControlResponsesFetchAccessPointConfigurationForObjectLambdaConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class S3ControlResponsesFetchAccessPointConfigurationForObjectLambdaConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetAccessPointConfigurationForObjectLambdaRequest) {
  }

  public get supportingAccessPoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPointConfigurationForObjectLambda',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetAccessPointConfigurationForObjectLambda.Configuration.SupportingAccessPoint'),
        outputPath: 'Configuration.SupportingAccessPoint',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPointConfigurationForObjectLambda.Configuration.SupportingAccessPoint', props);
    return resource.getResponseField('Configuration.SupportingAccessPoint') as unknown as string;
  }

  public get cloudWatchMetricsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPointConfigurationForObjectLambda',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetAccessPointConfigurationForObjectLambda.Configuration.CloudWatchMetricsEnabled'),
        outputPath: 'Configuration.CloudWatchMetricsEnabled',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPointConfigurationForObjectLambda.Configuration.CloudWatchMetricsEnabled', props);
    return resource.getResponseField('Configuration.CloudWatchMetricsEnabled') as unknown as boolean;
  }

  public get allowedFeatures(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPointConfigurationForObjectLambda',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetAccessPointConfigurationForObjectLambda.Configuration.AllowedFeatures'),
        outputPath: 'Configuration.AllowedFeatures',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPointConfigurationForObjectLambda.Configuration.AllowedFeatures', props);
    return resource.getResponseField('Configuration.AllowedFeatures') as unknown as string[];
  }

  public get transformationConfigurations(): shapes.S3ControlObjectLambdaTransformationConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPointConfigurationForObjectLambda',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetAccessPointConfigurationForObjectLambda.Configuration.TransformationConfigurations'),
        outputPath: 'Configuration.TransformationConfigurations',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPointConfigurationForObjectLambda.Configuration.TransformationConfigurations', props);
    return resource.getResponseField('Configuration.TransformationConfigurations') as unknown as shapes.S3ControlObjectLambdaTransformationConfiguration[];
  }

}

export class S3ControlResponsesFetchAccessPointForObjectLambda {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetAccessPointForObjectLambdaRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPointForObjectLambda',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetAccessPointForObjectLambda.Name'),
        outputPath: 'Name',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPointForObjectLambda.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get publicAccessBlockConfiguration(): S3ControlResponsesFetchAccessPointForObjectLambdaPublicAccessBlockConfiguration {
    return new S3ControlResponsesFetchAccessPointForObjectLambdaPublicAccessBlockConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPointForObjectLambda',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetAccessPointForObjectLambda.CreationDate'),
        outputPath: 'CreationDate',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPointForObjectLambda.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

}

export class S3ControlResponsesFetchAccessPointForObjectLambdaPublicAccessBlockConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetAccessPointForObjectLambdaRequest) {
  }

  public get blockPublicAcls(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPointForObjectLambda',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetAccessPointForObjectLambda.PublicAccessBlockConfiguration.BlockPublicAcls'),
        outputPath: 'PublicAccessBlockConfiguration.BlockPublicAcls',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPointForObjectLambda.PublicAccessBlockConfiguration.BlockPublicAcls', props);
    return resource.getResponseField('PublicAccessBlockConfiguration.BlockPublicAcls') as unknown as boolean;
  }

  public get ignorePublicAcls(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPointForObjectLambda',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetAccessPointForObjectLambda.PublicAccessBlockConfiguration.IgnorePublicAcls'),
        outputPath: 'PublicAccessBlockConfiguration.IgnorePublicAcls',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPointForObjectLambda.PublicAccessBlockConfiguration.IgnorePublicAcls', props);
    return resource.getResponseField('PublicAccessBlockConfiguration.IgnorePublicAcls') as unknown as boolean;
  }

  public get blockPublicPolicy(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPointForObjectLambda',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetAccessPointForObjectLambda.PublicAccessBlockConfiguration.BlockPublicPolicy'),
        outputPath: 'PublicAccessBlockConfiguration.BlockPublicPolicy',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPointForObjectLambda.PublicAccessBlockConfiguration.BlockPublicPolicy', props);
    return resource.getResponseField('PublicAccessBlockConfiguration.BlockPublicPolicy') as unknown as boolean;
  }

  public get restrictPublicBuckets(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPointForObjectLambda',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetAccessPointForObjectLambda.PublicAccessBlockConfiguration.RestrictPublicBuckets'),
        outputPath: 'PublicAccessBlockConfiguration.RestrictPublicBuckets',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPointForObjectLambda.PublicAccessBlockConfiguration.RestrictPublicBuckets', props);
    return resource.getResponseField('PublicAccessBlockConfiguration.RestrictPublicBuckets') as unknown as boolean;
  }

}

export class S3ControlResponsesFetchAccessPointPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetAccessPointPolicyRequest) {
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
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPointPolicy.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

}

export class S3ControlResponsesFetchAccessPointPolicyForObjectLambda {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetAccessPointPolicyForObjectLambdaRequest) {
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPointPolicyForObjectLambda',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetAccessPointPolicyForObjectLambda.Policy'),
        outputPath: 'Policy',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPointPolicyForObjectLambda.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

}

export class S3ControlResponsesFetchAccessPointPolicyStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetAccessPointPolicyStatusRequest) {
  }

  public get policyStatus(): S3ControlResponsesFetchAccessPointPolicyStatusPolicyStatus {
    return new S3ControlResponsesFetchAccessPointPolicyStatusPolicyStatus(this.__scope, this.__resources, this.__input);
  }

}

export class S3ControlResponsesFetchAccessPointPolicyStatusPolicyStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetAccessPointPolicyStatusRequest) {
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
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPointPolicyStatus.PolicyStatus.IsPublic', props);
    return resource.getResponseField('PolicyStatus.IsPublic') as unknown as boolean;
  }

}

export class S3ControlResponsesFetchAccessPointPolicyStatusForObjectLambda {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetAccessPointPolicyStatusForObjectLambdaRequest) {
  }

  public get policyStatus(): S3ControlResponsesFetchAccessPointPolicyStatusForObjectLambdaPolicyStatus {
    return new S3ControlResponsesFetchAccessPointPolicyStatusForObjectLambdaPolicyStatus(this.__scope, this.__resources, this.__input);
  }

}

export class S3ControlResponsesFetchAccessPointPolicyStatusForObjectLambdaPolicyStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetAccessPointPolicyStatusForObjectLambdaRequest) {
  }

  public get isPublic(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPointPolicyStatusForObjectLambda',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetAccessPointPolicyStatusForObjectLambda.PolicyStatus.IsPublic'),
        outputPath: 'PolicyStatus.IsPublic',
        parameters: {
          AccountId: this.__input.accountId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPointPolicyStatusForObjectLambda.PolicyStatus.IsPublic', props);
    return resource.getResponseField('PolicyStatus.IsPublic') as unknown as boolean;
  }

}

export class S3ControlResponsesFetchBucket {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetBucketRequest) {
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
          AccountId: this.__input.accountId,
          Bucket: this.__input.bucket,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucket.Bucket', props);
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
          AccountId: this.__input.accountId,
          Bucket: this.__input.bucket,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucket.PublicAccessBlockEnabled', props);
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
          AccountId: this.__input.accountId,
          Bucket: this.__input.bucket,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucket.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

}

export class S3ControlResponsesFetchBucketLifecycleConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetBucketLifecycleConfigurationRequest) {
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
          AccountId: this.__input.accountId,
          Bucket: this.__input.bucket,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketLifecycleConfiguration.Rules', props);
    return resource.getResponseField('Rules') as unknown as shapes.S3ControlLifecycleRule[];
  }

}

export class S3ControlResponsesFetchBucketPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetBucketPolicyRequest) {
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
          AccountId: this.__input.accountId,
          Bucket: this.__input.bucket,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketPolicy.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

}

export class S3ControlResponsesFetchBucketTagging {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetBucketTaggingRequest) {
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
          AccountId: this.__input.accountId,
          Bucket: this.__input.bucket,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketTagging.TagSet', props);
    return resource.getResponseField('TagSet') as unknown as shapes.S3ControlS3Tag[];
  }

}

export class S3ControlResponsesFetchJobTagging {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetJobTaggingRequest) {
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobTagging.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.S3ControlS3Tag[];
  }

}

export class S3ControlResponsesFetchPublicAccessBlock {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetPublicAccessBlockRequest) {
  }

  public get publicAccessBlockConfiguration(): S3ControlResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration {
    return new S3ControlResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class S3ControlResponsesFetchPublicAccessBlockPublicAccessBlockConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetPublicAccessBlockRequest) {
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
          AccountId: this.__input.accountId,
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
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetPublicAccessBlock.PublicAccessBlockConfiguration.IgnorePublicAcls'),
        outputPath: 'PublicAccessBlockConfiguration.IgnorePublicAcls',
        parameters: {
          AccountId: this.__input.accountId,
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
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetPublicAccessBlock.PublicAccessBlockConfiguration.BlockPublicPolicy'),
        outputPath: 'PublicAccessBlockConfiguration.BlockPublicPolicy',
        parameters: {
          AccountId: this.__input.accountId,
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
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetPublicAccessBlock.PublicAccessBlockConfiguration.RestrictPublicBuckets'),
        outputPath: 'PublicAccessBlockConfiguration.RestrictPublicBuckets',
        parameters: {
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPublicAccessBlock.PublicAccessBlockConfiguration.RestrictPublicBuckets', props);
    return resource.getResponseField('PublicAccessBlockConfiguration.RestrictPublicBuckets') as unknown as boolean;
  }

}

export class S3ControlResponsesFetchStorageLensConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetStorageLensConfigurationRequest) {
  }

  public get storageLensConfiguration(): S3ControlResponsesFetchStorageLensConfigurationStorageLensConfiguration {
    return new S3ControlResponsesFetchStorageLensConfigurationStorageLensConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class S3ControlResponsesFetchStorageLensConfigurationStorageLensConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetStorageLensConfigurationRequest) {
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
          ConfigId: this.__input.configId,
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStorageLensConfiguration.StorageLensConfiguration.Id', props);
    return resource.getResponseField('StorageLensConfiguration.Id') as unknown as string;
  }

  public get accountLevel(): S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevel {
    return new S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevel(this.__scope, this.__resources, this.__input);
  }

  public get include(): S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationInclude {
    return new S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationInclude(this.__scope, this.__resources, this.__input);
  }

  public get exclude(): S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationExclude {
    return new S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationExclude(this.__scope, this.__resources, this.__input);
  }

  public get dataExport(): S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExport {
    return new S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExport(this.__scope, this.__resources, this.__input);
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
          ConfigId: this.__input.configId,
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStorageLensConfiguration.StorageLensConfiguration.IsEnabled', props);
    return resource.getResponseField('StorageLensConfiguration.IsEnabled') as unknown as boolean;
  }

  public get awsOrg(): S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAwsOrg {
    return new S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAwsOrg(this.__scope, this.__resources, this.__input);
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
          ConfigId: this.__input.configId,
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStorageLensConfiguration.StorageLensConfiguration.StorageLensArn', props);
    return resource.getResponseField('StorageLensConfiguration.StorageLensArn') as unknown as string;
  }

}

export class S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetStorageLensConfigurationRequest) {
  }

  public get activityMetrics(): S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics {
    return new S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics(this.__scope, this.__resources, this.__input);
  }

  public get bucketLevel(): S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel {
    return new S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel(this.__scope, this.__resources, this.__input);
  }

}

export class S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetStorageLensConfigurationRequest) {
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
          ConfigId: this.__input.configId,
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStorageLensConfiguration.StorageLensConfiguration.AccountLevel.ActivityMetrics.IsEnabled', props);
    return resource.getResponseField('StorageLensConfiguration.AccountLevel.ActivityMetrics.IsEnabled') as unknown as boolean;
  }

}

export class S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetStorageLensConfigurationRequest) {
  }

  public get activityMetrics(): S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics {
    return new S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics(this.__scope, this.__resources, this.__input);
  }

  public get prefixLevel(): S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel {
    return new S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel(this.__scope, this.__resources, this.__input);
  }

}

export class S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetStorageLensConfigurationRequest) {
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
          ConfigId: this.__input.configId,
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStorageLensConfiguration.StorageLensConfiguration.AccountLevel.BucketLevel.ActivityMetrics.IsEnabled', props);
    return resource.getResponseField('StorageLensConfiguration.AccountLevel.BucketLevel.ActivityMetrics.IsEnabled') as unknown as boolean;
  }

}

export class S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetStorageLensConfigurationRequest) {
  }

  public get storageMetrics(): S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics {
    return new S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics(this.__scope, this.__resources, this.__input);
  }

}

export class S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetStorageLensConfigurationRequest) {
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
          ConfigId: this.__input.configId,
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStorageLensConfiguration.StorageLensConfiguration.AccountLevel.BucketLevel.PrefixLevel.StorageMetrics.IsEnabled', props);
    return resource.getResponseField('StorageLensConfiguration.AccountLevel.BucketLevel.PrefixLevel.StorageMetrics.IsEnabled') as unknown as boolean;
  }

  public get selectionCriteria(): S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria {
    return new S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria(this.__scope, this.__resources, this.__input);
  }

}

export class S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetStorageLensConfigurationRequest) {
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
          ConfigId: this.__input.configId,
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStorageLensConfiguration.StorageLensConfiguration.AccountLevel.BucketLevel.PrefixLevel.StorageMetrics.SelectionCriteria.Delimiter', props);
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
          ConfigId: this.__input.configId,
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStorageLensConfiguration.StorageLensConfiguration.AccountLevel.BucketLevel.PrefixLevel.StorageMetrics.SelectionCriteria.MaxDepth', props);
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
          ConfigId: this.__input.configId,
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStorageLensConfiguration.StorageLensConfiguration.AccountLevel.BucketLevel.PrefixLevel.StorageMetrics.SelectionCriteria.MinStorageBytesPercentage', props);
    return resource.getResponseField('StorageLensConfiguration.AccountLevel.BucketLevel.PrefixLevel.StorageMetrics.SelectionCriteria.MinStorageBytesPercentage') as unknown as number;
  }

}

export class S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationInclude {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetStorageLensConfigurationRequest) {
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
          ConfigId: this.__input.configId,
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStorageLensConfiguration.StorageLensConfiguration.Include.Buckets', props);
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
          ConfigId: this.__input.configId,
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStorageLensConfiguration.StorageLensConfiguration.Include.Regions', props);
    return resource.getResponseField('StorageLensConfiguration.Include.Regions') as unknown as string[];
  }

}

export class S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationExclude {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetStorageLensConfigurationRequest) {
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
          ConfigId: this.__input.configId,
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStorageLensConfiguration.StorageLensConfiguration.Exclude.Buckets', props);
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
          ConfigId: this.__input.configId,
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStorageLensConfiguration.StorageLensConfiguration.Exclude.Regions', props);
    return resource.getResponseField('StorageLensConfiguration.Exclude.Regions') as unknown as string[];
  }

}

export class S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetStorageLensConfigurationRequest) {
  }

  public get s3BucketDestination(): S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination {
    return new S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination(this.__scope, this.__resources, this.__input);
  }

}

export class S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetStorageLensConfigurationRequest) {
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
          ConfigId: this.__input.configId,
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStorageLensConfiguration.StorageLensConfiguration.DataExport.S3BucketDestination.Format', props);
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
          ConfigId: this.__input.configId,
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStorageLensConfiguration.StorageLensConfiguration.DataExport.S3BucketDestination.OutputSchemaVersion', props);
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
          ConfigId: this.__input.configId,
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStorageLensConfiguration.StorageLensConfiguration.DataExport.S3BucketDestination.AccountId', props);
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
          ConfigId: this.__input.configId,
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStorageLensConfiguration.StorageLensConfiguration.DataExport.S3BucketDestination.Arn', props);
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
          ConfigId: this.__input.configId,
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStorageLensConfiguration.StorageLensConfiguration.DataExport.S3BucketDestination.Prefix', props);
    return resource.getResponseField('StorageLensConfiguration.DataExport.S3BucketDestination.Prefix') as unknown as string;
  }

  public get encryption(): S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption {
    return new S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption(this.__scope, this.__resources, this.__input);
  }

}

export class S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetStorageLensConfigurationRequest) {
  }

  public get sses3(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStorageLensConfiguration',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.GetStorageLensConfiguration.StorageLensConfiguration.DataExport.S3BucketDestination.Encryption.SSES3'),
        outputPath: 'StorageLensConfiguration.DataExport.S3BucketDestination.Encryption.SSES3',
        parameters: {
          ConfigId: this.__input.configId,
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStorageLensConfiguration.StorageLensConfiguration.DataExport.S3BucketDestination.Encryption.SSES3', props);
    return resource.getResponseField('StorageLensConfiguration.DataExport.S3BucketDestination.Encryption.SSES3') as unknown as any;
  }

  public get ssekms(): S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms {
    return new S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms(this.__scope, this.__resources, this.__input);
  }

}

export class S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetStorageLensConfigurationRequest) {
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
          ConfigId: this.__input.configId,
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStorageLensConfiguration.StorageLensConfiguration.DataExport.S3BucketDestination.Encryption.SSEKMS.KeyId', props);
    return resource.getResponseField('StorageLensConfiguration.DataExport.S3BucketDestination.Encryption.SSEKMS.KeyId') as unknown as string;
  }

}

export class S3ControlResponsesFetchStorageLensConfigurationStorageLensConfigurationAwsOrg {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetStorageLensConfigurationRequest) {
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
          ConfigId: this.__input.configId,
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStorageLensConfiguration.StorageLensConfiguration.AwsOrg.Arn', props);
    return resource.getResponseField('StorageLensConfiguration.AwsOrg.Arn') as unknown as string;
  }

}

export class S3ControlResponsesFetchStorageLensConfigurationTagging {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlGetStorageLensConfigurationTaggingRequest) {
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
          ConfigId: this.__input.configId,
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStorageLensConfigurationTagging.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.S3ControlStorageLensTag[];
  }

}

export class S3ControlResponsesListAccessPoints {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlListAccessPointsRequest) {
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
          AccountId: this.__input.accountId,
          Bucket: this.__input.bucket,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccessPoints.AccessPointList', props);
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
          AccountId: this.__input.accountId,
          Bucket: this.__input.bucket,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccessPoints.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class S3ControlResponsesListAccessPointsForObjectLambda {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlListAccessPointsForObjectLambdaRequest) {
  }

  public get objectLambdaAccessPointList(): shapes.S3ControlObjectLambdaAccessPoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccessPointsForObjectLambda',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.ListAccessPointsForObjectLambda.ObjectLambdaAccessPointList'),
        outputPath: 'ObjectLambdaAccessPointList',
        parameters: {
          AccountId: this.__input.accountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccessPointsForObjectLambda.ObjectLambdaAccessPointList', props);
    return resource.getResponseField('ObjectLambdaAccessPointList') as unknown as shapes.S3ControlObjectLambdaAccessPoint[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccessPointsForObjectLambda',
        service: 'S3Control',
        physicalResourceId: cr.PhysicalResourceId.of('S3Control.ListAccessPointsForObjectLambda.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AccountId: this.__input.accountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccessPointsForObjectLambda.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class S3ControlResponsesListJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlListJobsRequest) {
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
          AccountId: this.__input.accountId,
          JobStatuses: this.__input.jobStatuses,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobs.NextToken', props);
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
          AccountId: this.__input.accountId,
          JobStatuses: this.__input.jobStatuses,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobs.Jobs', props);
    return resource.getResponseField('Jobs') as unknown as shapes.S3ControlJobListDescriptor[];
  }

}

export class S3ControlResponsesListRegionalBuckets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlListRegionalBucketsRequest) {
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
          AccountId: this.__input.accountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          OutpostId: this.__input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRegionalBuckets.RegionalBucketList', props);
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
          AccountId: this.__input.accountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          OutpostId: this.__input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRegionalBuckets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class S3ControlResponsesListStorageLensConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlListStorageLensConfigurationsRequest) {
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
          AccountId: this.__input.accountId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStorageLensConfigurations.NextToken', props);
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
          AccountId: this.__input.accountId,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStorageLensConfigurations.StorageLensConfigurationList', props);
    return resource.getResponseField('StorageLensConfigurationList') as unknown as shapes.S3ControlListStorageLensConfigurationEntry[];
  }

}

export class S3ControlResponsesUpdateJobPriority {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlUpdateJobPriorityRequest) {
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
          Priority: this.__input.priority,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateJobPriority.JobId', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
          Priority: this.__input.priority,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateJobPriority.Priority', props);
    return resource.getResponseField('Priority') as unknown as number;
  }

}

export class S3ControlResponsesUpdateJobStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3ControlUpdateJobStatusRequest) {
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
          RequestedJobStatus: this.__input.requestedJobStatus,
          StatusUpdateReason: this.__input.statusUpdateReason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateJobStatus.JobId', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
          RequestedJobStatus: this.__input.requestedJobStatus,
          StatusUpdateReason: this.__input.statusUpdateReason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateJobStatus.Status', props);
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
          AccountId: this.__input.accountId,
          JobId: this.__input.jobId,
          RequestedJobStatus: this.__input.requestedJobStatus,
          StatusUpdateReason: this.__input.statusUpdateReason,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateJobStatus.StatusUpdateReason', props);
    return resource.getResponseField('StatusUpdateReason') as unknown as string;
  }

}

