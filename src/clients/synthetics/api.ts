import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SyntheticsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createCanary(input: shapes.SyntheticsCreateCanaryRequest): SyntheticsCreateCanary {
    return new SyntheticsCreateCanary(this, 'CreateCanary', this.__resources, input);
  }

  public deleteCanary(input: shapes.SyntheticsDeleteCanaryRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.DeleteCanary'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCanary', props);
  }

  public describeCanaries(input: shapes.SyntheticsDescribeCanariesRequest): SyntheticsDescribeCanaries {
    return new SyntheticsDescribeCanaries(this, 'DescribeCanaries', this.__resources, input);
  }

  public describeCanariesLastRun(input: shapes.SyntheticsDescribeCanariesLastRunRequest): SyntheticsDescribeCanariesLastRun {
    return new SyntheticsDescribeCanariesLastRun(this, 'DescribeCanariesLastRun', this.__resources, input);
  }

  public describeRuntimeVersions(input: shapes.SyntheticsDescribeRuntimeVersionsRequest): SyntheticsDescribeRuntimeVersions {
    return new SyntheticsDescribeRuntimeVersions(this, 'DescribeRuntimeVersions', this.__resources, input);
  }

  public fetchCanary(input: shapes.SyntheticsGetCanaryRequest): SyntheticsFetchCanary {
    return new SyntheticsFetchCanary(this, 'FetchCanary', this.__resources, input);
  }

  public fetchCanaryRuns(input: shapes.SyntheticsGetCanaryRunsRequest): SyntheticsFetchCanaryRuns {
    return new SyntheticsFetchCanaryRuns(this, 'FetchCanaryRuns', this.__resources, input);
  }

  public listTagsForResource(input: shapes.SyntheticsListTagsForResourceRequest): SyntheticsListTagsForResource {
    return new SyntheticsListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public startCanary(input: shapes.SyntheticsStartCanaryRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.StartCanary'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartCanary', props);
  }

  public stopCanary(input: shapes.SyntheticsStopCanaryRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.StopCanary'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopCanary', props);
  }

  public tagResource(input: shapes.SyntheticsTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.SyntheticsUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateCanary(input: shapes.SyntheticsUpdateCanaryRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.UpdateCanary'),
        parameters: {
          Name: input.name,
          Code: {
            S3Bucket: input.code?.s3Bucket,
            S3Key: input.code?.s3Key,
            S3Version: input.code?.s3Version,
            ZipFile: {
            },
            Handler: input.code?.handler,
          },
          ExecutionRoleArn: input.executionRoleArn,
          RuntimeVersion: input.runtimeVersion,
          Schedule: {
            Expression: input.schedule?.expression,
            DurationInSeconds: input.schedule?.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: input.runConfig?.timeoutInSeconds,
            MemoryInMB: input.runConfig?.memoryInMb,
            ActiveTracing: input.runConfig?.activeTracing,
            EnvironmentVariables: input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: input.failureRetentionPeriodInDays,
          VpcConfig: {
            SubnetIds: input.vpcConfig?.subnetIds,
            SecurityGroupIds: input.vpcConfig?.securityGroupIds,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateCanary', props);
  }

}

export class SyntheticsCreateCanary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SyntheticsCreateCanaryRequest) {
    super(scope, id);
  }

  public get canary(): SyntheticsCreateCanaryCanary {
    return new SyntheticsCreateCanaryCanary(this, 'Canary', this.__resources, this.input);
  }

}

export class SyntheticsCreateCanaryCanary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SyntheticsCreateCanaryRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.Id'),
        outputPath: 'Canary.Id',
        parameters: {
          Name: this.input.name,
          Code: {
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3Version: this.input.code.s3Version,
            ZipFile: {
            },
            Handler: this.input.code.handler,
          },
          ArtifactS3Location: this.input.artifactS3Location,
          ExecutionRoleArn: this.input.executionRoleArn,
          Schedule: {
            Expression: this.input.schedule.expression,
            DurationInSeconds: this.input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.input.runConfig?.memoryInMb,
            ActiveTracing: this.input.runConfig?.activeTracing,
            EnvironmentVariables: this.input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.input.failureRetentionPeriodInDays,
          RuntimeVersion: this.input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCanary.Canary.Id', props);
    return resource.getResponseField('Canary.Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.Name'),
        outputPath: 'Canary.Name',
        parameters: {
          Name: this.input.name,
          Code: {
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3Version: this.input.code.s3Version,
            ZipFile: {
            },
            Handler: this.input.code.handler,
          },
          ArtifactS3Location: this.input.artifactS3Location,
          ExecutionRoleArn: this.input.executionRoleArn,
          Schedule: {
            Expression: this.input.schedule.expression,
            DurationInSeconds: this.input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.input.runConfig?.memoryInMb,
            ActiveTracing: this.input.runConfig?.activeTracing,
            EnvironmentVariables: this.input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.input.failureRetentionPeriodInDays,
          RuntimeVersion: this.input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCanary.Canary.Name', props);
    return resource.getResponseField('Canary.Name') as unknown as string;
  }

  public get code(): SyntheticsCreateCanaryCanaryCode {
    return new SyntheticsCreateCanaryCanaryCode(this, 'Code', this.__resources, this.input);
  }

  public get executionRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.ExecutionRoleArn'),
        outputPath: 'Canary.ExecutionRoleArn',
        parameters: {
          Name: this.input.name,
          Code: {
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3Version: this.input.code.s3Version,
            ZipFile: {
            },
            Handler: this.input.code.handler,
          },
          ArtifactS3Location: this.input.artifactS3Location,
          ExecutionRoleArn: this.input.executionRoleArn,
          Schedule: {
            Expression: this.input.schedule.expression,
            DurationInSeconds: this.input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.input.runConfig?.memoryInMb,
            ActiveTracing: this.input.runConfig?.activeTracing,
            EnvironmentVariables: this.input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.input.failureRetentionPeriodInDays,
          RuntimeVersion: this.input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCanary.Canary.ExecutionRoleArn', props);
    return resource.getResponseField('Canary.ExecutionRoleArn') as unknown as string;
  }

  public get schedule(): SyntheticsCreateCanaryCanarySchedule {
    return new SyntheticsCreateCanaryCanarySchedule(this, 'Schedule', this.__resources, this.input);
  }

  public get runConfig(): SyntheticsCreateCanaryCanaryRunConfig {
    return new SyntheticsCreateCanaryCanaryRunConfig(this, 'RunConfig', this.__resources, this.input);
  }

  public get successRetentionPeriodInDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.SuccessRetentionPeriodInDays'),
        outputPath: 'Canary.SuccessRetentionPeriodInDays',
        parameters: {
          Name: this.input.name,
          Code: {
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3Version: this.input.code.s3Version,
            ZipFile: {
            },
            Handler: this.input.code.handler,
          },
          ArtifactS3Location: this.input.artifactS3Location,
          ExecutionRoleArn: this.input.executionRoleArn,
          Schedule: {
            Expression: this.input.schedule.expression,
            DurationInSeconds: this.input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.input.runConfig?.memoryInMb,
            ActiveTracing: this.input.runConfig?.activeTracing,
            EnvironmentVariables: this.input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.input.failureRetentionPeriodInDays,
          RuntimeVersion: this.input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCanary.Canary.SuccessRetentionPeriodInDays', props);
    return resource.getResponseField('Canary.SuccessRetentionPeriodInDays') as unknown as number;
  }

  public get failureRetentionPeriodInDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.FailureRetentionPeriodInDays'),
        outputPath: 'Canary.FailureRetentionPeriodInDays',
        parameters: {
          Name: this.input.name,
          Code: {
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3Version: this.input.code.s3Version,
            ZipFile: {
            },
            Handler: this.input.code.handler,
          },
          ArtifactS3Location: this.input.artifactS3Location,
          ExecutionRoleArn: this.input.executionRoleArn,
          Schedule: {
            Expression: this.input.schedule.expression,
            DurationInSeconds: this.input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.input.runConfig?.memoryInMb,
            ActiveTracing: this.input.runConfig?.activeTracing,
            EnvironmentVariables: this.input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.input.failureRetentionPeriodInDays,
          RuntimeVersion: this.input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCanary.Canary.FailureRetentionPeriodInDays', props);
    return resource.getResponseField('Canary.FailureRetentionPeriodInDays') as unknown as number;
  }

  public get status(): SyntheticsCreateCanaryCanaryStatus {
    return new SyntheticsCreateCanaryCanaryStatus(this, 'Status', this.__resources, this.input);
  }

  public get timeline(): SyntheticsCreateCanaryCanaryTimeline {
    return new SyntheticsCreateCanaryCanaryTimeline(this, 'Timeline', this.__resources, this.input);
  }

  public get artifactS3Location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.ArtifactS3Location'),
        outputPath: 'Canary.ArtifactS3Location',
        parameters: {
          Name: this.input.name,
          Code: {
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3Version: this.input.code.s3Version,
            ZipFile: {
            },
            Handler: this.input.code.handler,
          },
          ArtifactS3Location: this.input.artifactS3Location,
          ExecutionRoleArn: this.input.executionRoleArn,
          Schedule: {
            Expression: this.input.schedule.expression,
            DurationInSeconds: this.input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.input.runConfig?.memoryInMb,
            ActiveTracing: this.input.runConfig?.activeTracing,
            EnvironmentVariables: this.input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.input.failureRetentionPeriodInDays,
          RuntimeVersion: this.input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCanary.Canary.ArtifactS3Location', props);
    return resource.getResponseField('Canary.ArtifactS3Location') as unknown as string;
  }

  public get engineArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.EngineArn'),
        outputPath: 'Canary.EngineArn',
        parameters: {
          Name: this.input.name,
          Code: {
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3Version: this.input.code.s3Version,
            ZipFile: {
            },
            Handler: this.input.code.handler,
          },
          ArtifactS3Location: this.input.artifactS3Location,
          ExecutionRoleArn: this.input.executionRoleArn,
          Schedule: {
            Expression: this.input.schedule.expression,
            DurationInSeconds: this.input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.input.runConfig?.memoryInMb,
            ActiveTracing: this.input.runConfig?.activeTracing,
            EnvironmentVariables: this.input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.input.failureRetentionPeriodInDays,
          RuntimeVersion: this.input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCanary.Canary.EngineArn', props);
    return resource.getResponseField('Canary.EngineArn') as unknown as string;
  }

  public get runtimeVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.RuntimeVersion'),
        outputPath: 'Canary.RuntimeVersion',
        parameters: {
          Name: this.input.name,
          Code: {
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3Version: this.input.code.s3Version,
            ZipFile: {
            },
            Handler: this.input.code.handler,
          },
          ArtifactS3Location: this.input.artifactS3Location,
          ExecutionRoleArn: this.input.executionRoleArn,
          Schedule: {
            Expression: this.input.schedule.expression,
            DurationInSeconds: this.input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.input.runConfig?.memoryInMb,
            ActiveTracing: this.input.runConfig?.activeTracing,
            EnvironmentVariables: this.input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.input.failureRetentionPeriodInDays,
          RuntimeVersion: this.input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCanary.Canary.RuntimeVersion', props);
    return resource.getResponseField('Canary.RuntimeVersion') as unknown as string;
  }

  public get vpcConfig(): SyntheticsCreateCanaryCanaryVpcConfig {
    return new SyntheticsCreateCanaryCanaryVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.Tags'),
        outputPath: 'Canary.Tags',
        parameters: {
          Name: this.input.name,
          Code: {
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3Version: this.input.code.s3Version,
            ZipFile: {
            },
            Handler: this.input.code.handler,
          },
          ArtifactS3Location: this.input.artifactS3Location,
          ExecutionRoleArn: this.input.executionRoleArn,
          Schedule: {
            Expression: this.input.schedule.expression,
            DurationInSeconds: this.input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.input.runConfig?.memoryInMb,
            ActiveTracing: this.input.runConfig?.activeTracing,
            EnvironmentVariables: this.input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.input.failureRetentionPeriodInDays,
          RuntimeVersion: this.input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCanary.Canary.Tags', props);
    return resource.getResponseField('Canary.Tags') as unknown as Record<string, string>;
  }

}

export class SyntheticsCreateCanaryCanaryCode extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SyntheticsCreateCanaryRequest) {
    super(scope, id);
  }

  public get sourceLocationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.Code.SourceLocationArn'),
        outputPath: 'Canary.Code.SourceLocationArn',
        parameters: {
          Name: this.input.name,
          Code: {
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3Version: this.input.code.s3Version,
            ZipFile: {
            },
            Handler: this.input.code.handler,
          },
          ArtifactS3Location: this.input.artifactS3Location,
          ExecutionRoleArn: this.input.executionRoleArn,
          Schedule: {
            Expression: this.input.schedule.expression,
            DurationInSeconds: this.input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.input.runConfig?.memoryInMb,
            ActiveTracing: this.input.runConfig?.activeTracing,
            EnvironmentVariables: this.input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.input.failureRetentionPeriodInDays,
          RuntimeVersion: this.input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCanary.Canary.Code.SourceLocationArn', props);
    return resource.getResponseField('Canary.Code.SourceLocationArn') as unknown as string;
  }

  public get handler(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.Code.Handler'),
        outputPath: 'Canary.Code.Handler',
        parameters: {
          Name: this.input.name,
          Code: {
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3Version: this.input.code.s3Version,
            ZipFile: {
            },
            Handler: this.input.code.handler,
          },
          ArtifactS3Location: this.input.artifactS3Location,
          ExecutionRoleArn: this.input.executionRoleArn,
          Schedule: {
            Expression: this.input.schedule.expression,
            DurationInSeconds: this.input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.input.runConfig?.memoryInMb,
            ActiveTracing: this.input.runConfig?.activeTracing,
            EnvironmentVariables: this.input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.input.failureRetentionPeriodInDays,
          RuntimeVersion: this.input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCanary.Canary.Code.Handler', props);
    return resource.getResponseField('Canary.Code.Handler') as unknown as string;
  }

}

export class SyntheticsCreateCanaryCanarySchedule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SyntheticsCreateCanaryRequest) {
    super(scope, id);
  }

  public get expression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.Schedule.Expression'),
        outputPath: 'Canary.Schedule.Expression',
        parameters: {
          Name: this.input.name,
          Code: {
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3Version: this.input.code.s3Version,
            ZipFile: {
            },
            Handler: this.input.code.handler,
          },
          ArtifactS3Location: this.input.artifactS3Location,
          ExecutionRoleArn: this.input.executionRoleArn,
          Schedule: {
            Expression: this.input.schedule.expression,
            DurationInSeconds: this.input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.input.runConfig?.memoryInMb,
            ActiveTracing: this.input.runConfig?.activeTracing,
            EnvironmentVariables: this.input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.input.failureRetentionPeriodInDays,
          RuntimeVersion: this.input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCanary.Canary.Schedule.Expression', props);
    return resource.getResponseField('Canary.Schedule.Expression') as unknown as string;
  }

  public get durationInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.Schedule.DurationInSeconds'),
        outputPath: 'Canary.Schedule.DurationInSeconds',
        parameters: {
          Name: this.input.name,
          Code: {
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3Version: this.input.code.s3Version,
            ZipFile: {
            },
            Handler: this.input.code.handler,
          },
          ArtifactS3Location: this.input.artifactS3Location,
          ExecutionRoleArn: this.input.executionRoleArn,
          Schedule: {
            Expression: this.input.schedule.expression,
            DurationInSeconds: this.input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.input.runConfig?.memoryInMb,
            ActiveTracing: this.input.runConfig?.activeTracing,
            EnvironmentVariables: this.input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.input.failureRetentionPeriodInDays,
          RuntimeVersion: this.input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCanary.Canary.Schedule.DurationInSeconds', props);
    return resource.getResponseField('Canary.Schedule.DurationInSeconds') as unknown as number;
  }

}

export class SyntheticsCreateCanaryCanaryRunConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SyntheticsCreateCanaryRequest) {
    super(scope, id);
  }

  public get timeoutInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.RunConfig.TimeoutInSeconds'),
        outputPath: 'Canary.RunConfig.TimeoutInSeconds',
        parameters: {
          Name: this.input.name,
          Code: {
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3Version: this.input.code.s3Version,
            ZipFile: {
            },
            Handler: this.input.code.handler,
          },
          ArtifactS3Location: this.input.artifactS3Location,
          ExecutionRoleArn: this.input.executionRoleArn,
          Schedule: {
            Expression: this.input.schedule.expression,
            DurationInSeconds: this.input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.input.runConfig?.memoryInMb,
            ActiveTracing: this.input.runConfig?.activeTracing,
            EnvironmentVariables: this.input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.input.failureRetentionPeriodInDays,
          RuntimeVersion: this.input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCanary.Canary.RunConfig.TimeoutInSeconds', props);
    return resource.getResponseField('Canary.RunConfig.TimeoutInSeconds') as unknown as number;
  }

  public get memoryInMb(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.RunConfig.MemoryInMB'),
        outputPath: 'Canary.RunConfig.MemoryInMB',
        parameters: {
          Name: this.input.name,
          Code: {
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3Version: this.input.code.s3Version,
            ZipFile: {
            },
            Handler: this.input.code.handler,
          },
          ArtifactS3Location: this.input.artifactS3Location,
          ExecutionRoleArn: this.input.executionRoleArn,
          Schedule: {
            Expression: this.input.schedule.expression,
            DurationInSeconds: this.input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.input.runConfig?.memoryInMb,
            ActiveTracing: this.input.runConfig?.activeTracing,
            EnvironmentVariables: this.input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.input.failureRetentionPeriodInDays,
          RuntimeVersion: this.input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCanary.Canary.RunConfig.MemoryInMB', props);
    return resource.getResponseField('Canary.RunConfig.MemoryInMB') as unknown as number;
  }

  public get activeTracing(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.RunConfig.ActiveTracing'),
        outputPath: 'Canary.RunConfig.ActiveTracing',
        parameters: {
          Name: this.input.name,
          Code: {
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3Version: this.input.code.s3Version,
            ZipFile: {
            },
            Handler: this.input.code.handler,
          },
          ArtifactS3Location: this.input.artifactS3Location,
          ExecutionRoleArn: this.input.executionRoleArn,
          Schedule: {
            Expression: this.input.schedule.expression,
            DurationInSeconds: this.input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.input.runConfig?.memoryInMb,
            ActiveTracing: this.input.runConfig?.activeTracing,
            EnvironmentVariables: this.input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.input.failureRetentionPeriodInDays,
          RuntimeVersion: this.input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCanary.Canary.RunConfig.ActiveTracing', props);
    return resource.getResponseField('Canary.RunConfig.ActiveTracing') as unknown as boolean;
  }

}

export class SyntheticsCreateCanaryCanaryStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SyntheticsCreateCanaryRequest) {
    super(scope, id);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.Status.State'),
        outputPath: 'Canary.Status.State',
        parameters: {
          Name: this.input.name,
          Code: {
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3Version: this.input.code.s3Version,
            ZipFile: {
            },
            Handler: this.input.code.handler,
          },
          ArtifactS3Location: this.input.artifactS3Location,
          ExecutionRoleArn: this.input.executionRoleArn,
          Schedule: {
            Expression: this.input.schedule.expression,
            DurationInSeconds: this.input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.input.runConfig?.memoryInMb,
            ActiveTracing: this.input.runConfig?.activeTracing,
            EnvironmentVariables: this.input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.input.failureRetentionPeriodInDays,
          RuntimeVersion: this.input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCanary.Canary.Status.State', props);
    return resource.getResponseField('Canary.Status.State') as unknown as string;
  }

  public get stateReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.Status.StateReason'),
        outputPath: 'Canary.Status.StateReason',
        parameters: {
          Name: this.input.name,
          Code: {
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3Version: this.input.code.s3Version,
            ZipFile: {
            },
            Handler: this.input.code.handler,
          },
          ArtifactS3Location: this.input.artifactS3Location,
          ExecutionRoleArn: this.input.executionRoleArn,
          Schedule: {
            Expression: this.input.schedule.expression,
            DurationInSeconds: this.input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.input.runConfig?.memoryInMb,
            ActiveTracing: this.input.runConfig?.activeTracing,
            EnvironmentVariables: this.input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.input.failureRetentionPeriodInDays,
          RuntimeVersion: this.input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCanary.Canary.Status.StateReason', props);
    return resource.getResponseField('Canary.Status.StateReason') as unknown as string;
  }

  public get stateReasonCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.Status.StateReasonCode'),
        outputPath: 'Canary.Status.StateReasonCode',
        parameters: {
          Name: this.input.name,
          Code: {
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3Version: this.input.code.s3Version,
            ZipFile: {
            },
            Handler: this.input.code.handler,
          },
          ArtifactS3Location: this.input.artifactS3Location,
          ExecutionRoleArn: this.input.executionRoleArn,
          Schedule: {
            Expression: this.input.schedule.expression,
            DurationInSeconds: this.input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.input.runConfig?.memoryInMb,
            ActiveTracing: this.input.runConfig?.activeTracing,
            EnvironmentVariables: this.input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.input.failureRetentionPeriodInDays,
          RuntimeVersion: this.input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCanary.Canary.Status.StateReasonCode', props);
    return resource.getResponseField('Canary.Status.StateReasonCode') as unknown as string;
  }

}

export class SyntheticsCreateCanaryCanaryTimeline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SyntheticsCreateCanaryRequest) {
    super(scope, id);
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.Timeline.Created'),
        outputPath: 'Canary.Timeline.Created',
        parameters: {
          Name: this.input.name,
          Code: {
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3Version: this.input.code.s3Version,
            ZipFile: {
            },
            Handler: this.input.code.handler,
          },
          ArtifactS3Location: this.input.artifactS3Location,
          ExecutionRoleArn: this.input.executionRoleArn,
          Schedule: {
            Expression: this.input.schedule.expression,
            DurationInSeconds: this.input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.input.runConfig?.memoryInMb,
            ActiveTracing: this.input.runConfig?.activeTracing,
            EnvironmentVariables: this.input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.input.failureRetentionPeriodInDays,
          RuntimeVersion: this.input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCanary.Canary.Timeline.Created', props);
    return resource.getResponseField('Canary.Timeline.Created') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.Timeline.LastModified'),
        outputPath: 'Canary.Timeline.LastModified',
        parameters: {
          Name: this.input.name,
          Code: {
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3Version: this.input.code.s3Version,
            ZipFile: {
            },
            Handler: this.input.code.handler,
          },
          ArtifactS3Location: this.input.artifactS3Location,
          ExecutionRoleArn: this.input.executionRoleArn,
          Schedule: {
            Expression: this.input.schedule.expression,
            DurationInSeconds: this.input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.input.runConfig?.memoryInMb,
            ActiveTracing: this.input.runConfig?.activeTracing,
            EnvironmentVariables: this.input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.input.failureRetentionPeriodInDays,
          RuntimeVersion: this.input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCanary.Canary.Timeline.LastModified', props);
    return resource.getResponseField('Canary.Timeline.LastModified') as unknown as string;
  }

  public get lastStarted(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.Timeline.LastStarted'),
        outputPath: 'Canary.Timeline.LastStarted',
        parameters: {
          Name: this.input.name,
          Code: {
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3Version: this.input.code.s3Version,
            ZipFile: {
            },
            Handler: this.input.code.handler,
          },
          ArtifactS3Location: this.input.artifactS3Location,
          ExecutionRoleArn: this.input.executionRoleArn,
          Schedule: {
            Expression: this.input.schedule.expression,
            DurationInSeconds: this.input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.input.runConfig?.memoryInMb,
            ActiveTracing: this.input.runConfig?.activeTracing,
            EnvironmentVariables: this.input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.input.failureRetentionPeriodInDays,
          RuntimeVersion: this.input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCanary.Canary.Timeline.LastStarted', props);
    return resource.getResponseField('Canary.Timeline.LastStarted') as unknown as string;
  }

  public get lastStopped(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.Timeline.LastStopped'),
        outputPath: 'Canary.Timeline.LastStopped',
        parameters: {
          Name: this.input.name,
          Code: {
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3Version: this.input.code.s3Version,
            ZipFile: {
            },
            Handler: this.input.code.handler,
          },
          ArtifactS3Location: this.input.artifactS3Location,
          ExecutionRoleArn: this.input.executionRoleArn,
          Schedule: {
            Expression: this.input.schedule.expression,
            DurationInSeconds: this.input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.input.runConfig?.memoryInMb,
            ActiveTracing: this.input.runConfig?.activeTracing,
            EnvironmentVariables: this.input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.input.failureRetentionPeriodInDays,
          RuntimeVersion: this.input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCanary.Canary.Timeline.LastStopped', props);
    return resource.getResponseField('Canary.Timeline.LastStopped') as unknown as string;
  }

}

export class SyntheticsCreateCanaryCanaryVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SyntheticsCreateCanaryRequest) {
    super(scope, id);
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.VpcConfig.VpcId'),
        outputPath: 'Canary.VpcConfig.VpcId',
        parameters: {
          Name: this.input.name,
          Code: {
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3Version: this.input.code.s3Version,
            ZipFile: {
            },
            Handler: this.input.code.handler,
          },
          ArtifactS3Location: this.input.artifactS3Location,
          ExecutionRoleArn: this.input.executionRoleArn,
          Schedule: {
            Expression: this.input.schedule.expression,
            DurationInSeconds: this.input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.input.runConfig?.memoryInMb,
            ActiveTracing: this.input.runConfig?.activeTracing,
            EnvironmentVariables: this.input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.input.failureRetentionPeriodInDays,
          RuntimeVersion: this.input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCanary.Canary.VpcConfig.VpcId', props);
    return resource.getResponseField('Canary.VpcConfig.VpcId') as unknown as string;
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.VpcConfig.SubnetIds'),
        outputPath: 'Canary.VpcConfig.SubnetIds',
        parameters: {
          Name: this.input.name,
          Code: {
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3Version: this.input.code.s3Version,
            ZipFile: {
            },
            Handler: this.input.code.handler,
          },
          ArtifactS3Location: this.input.artifactS3Location,
          ExecutionRoleArn: this.input.executionRoleArn,
          Schedule: {
            Expression: this.input.schedule.expression,
            DurationInSeconds: this.input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.input.runConfig?.memoryInMb,
            ActiveTracing: this.input.runConfig?.activeTracing,
            EnvironmentVariables: this.input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.input.failureRetentionPeriodInDays,
          RuntimeVersion: this.input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCanary.Canary.VpcConfig.SubnetIds', props);
    return resource.getResponseField('Canary.VpcConfig.SubnetIds') as unknown as string[];
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.VpcConfig.SecurityGroupIds'),
        outputPath: 'Canary.VpcConfig.SecurityGroupIds',
        parameters: {
          Name: this.input.name,
          Code: {
            S3Bucket: this.input.code.s3Bucket,
            S3Key: this.input.code.s3Key,
            S3Version: this.input.code.s3Version,
            ZipFile: {
            },
            Handler: this.input.code.handler,
          },
          ArtifactS3Location: this.input.artifactS3Location,
          ExecutionRoleArn: this.input.executionRoleArn,
          Schedule: {
            Expression: this.input.schedule.expression,
            DurationInSeconds: this.input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.input.runConfig?.memoryInMb,
            ActiveTracing: this.input.runConfig?.activeTracing,
            EnvironmentVariables: this.input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.input.failureRetentionPeriodInDays,
          RuntimeVersion: this.input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCanary.Canary.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('Canary.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

}

export class SyntheticsDescribeCanaries extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SyntheticsDescribeCanariesRequest) {
    super(scope, id);
  }

  public get canaries(): shapes.SyntheticsCanary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCanaries',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.DescribeCanaries.Canaries'),
        outputPath: 'Canaries',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCanaries.Canaries', props);
    return resource.getResponseField('Canaries') as unknown as shapes.SyntheticsCanary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCanaries',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.DescribeCanaries.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCanaries.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SyntheticsDescribeCanariesLastRun extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SyntheticsDescribeCanariesLastRunRequest) {
    super(scope, id);
  }

  public get canariesLastRun(): shapes.SyntheticsCanaryLastRun[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCanariesLastRun',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.DescribeCanariesLastRun.CanariesLastRun'),
        outputPath: 'CanariesLastRun',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCanariesLastRun.CanariesLastRun', props);
    return resource.getResponseField('CanariesLastRun') as unknown as shapes.SyntheticsCanaryLastRun[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCanariesLastRun',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.DescribeCanariesLastRun.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCanariesLastRun.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SyntheticsDescribeRuntimeVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SyntheticsDescribeRuntimeVersionsRequest) {
    super(scope, id);
  }

  public get runtimeVersions(): shapes.SyntheticsRuntimeVersion[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRuntimeVersions',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.DescribeRuntimeVersions.RuntimeVersions'),
        outputPath: 'RuntimeVersions',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRuntimeVersions.RuntimeVersions', props);
    return resource.getResponseField('RuntimeVersions') as unknown as shapes.SyntheticsRuntimeVersion[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRuntimeVersions',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.DescribeRuntimeVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRuntimeVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SyntheticsFetchCanary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SyntheticsGetCanaryRequest) {
    super(scope, id);
  }

  public get canary(): SyntheticsFetchCanaryCanary {
    return new SyntheticsFetchCanaryCanary(this, 'Canary', this.__resources, this.input);
  }

}

export class SyntheticsFetchCanaryCanary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SyntheticsGetCanaryRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.Id'),
        outputPath: 'Canary.Id',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanary.Canary.Id', props);
    return resource.getResponseField('Canary.Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.Name'),
        outputPath: 'Canary.Name',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanary.Canary.Name', props);
    return resource.getResponseField('Canary.Name') as unknown as string;
  }

  public get code(): SyntheticsFetchCanaryCanaryCode {
    return new SyntheticsFetchCanaryCanaryCode(this, 'Code', this.__resources, this.input);
  }

  public get executionRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.ExecutionRoleArn'),
        outputPath: 'Canary.ExecutionRoleArn',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanary.Canary.ExecutionRoleArn', props);
    return resource.getResponseField('Canary.ExecutionRoleArn') as unknown as string;
  }

  public get schedule(): SyntheticsFetchCanaryCanarySchedule {
    return new SyntheticsFetchCanaryCanarySchedule(this, 'Schedule', this.__resources, this.input);
  }

  public get runConfig(): SyntheticsFetchCanaryCanaryRunConfig {
    return new SyntheticsFetchCanaryCanaryRunConfig(this, 'RunConfig', this.__resources, this.input);
  }

  public get successRetentionPeriodInDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.SuccessRetentionPeriodInDays'),
        outputPath: 'Canary.SuccessRetentionPeriodInDays',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanary.Canary.SuccessRetentionPeriodInDays', props);
    return resource.getResponseField('Canary.SuccessRetentionPeriodInDays') as unknown as number;
  }

  public get failureRetentionPeriodInDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.FailureRetentionPeriodInDays'),
        outputPath: 'Canary.FailureRetentionPeriodInDays',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanary.Canary.FailureRetentionPeriodInDays', props);
    return resource.getResponseField('Canary.FailureRetentionPeriodInDays') as unknown as number;
  }

  public get status(): SyntheticsFetchCanaryCanaryStatus {
    return new SyntheticsFetchCanaryCanaryStatus(this, 'Status', this.__resources, this.input);
  }

  public get timeline(): SyntheticsFetchCanaryCanaryTimeline {
    return new SyntheticsFetchCanaryCanaryTimeline(this, 'Timeline', this.__resources, this.input);
  }

  public get artifactS3Location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.ArtifactS3Location'),
        outputPath: 'Canary.ArtifactS3Location',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanary.Canary.ArtifactS3Location', props);
    return resource.getResponseField('Canary.ArtifactS3Location') as unknown as string;
  }

  public get engineArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.EngineArn'),
        outputPath: 'Canary.EngineArn',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanary.Canary.EngineArn', props);
    return resource.getResponseField('Canary.EngineArn') as unknown as string;
  }

  public get runtimeVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.RuntimeVersion'),
        outputPath: 'Canary.RuntimeVersion',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanary.Canary.RuntimeVersion', props);
    return resource.getResponseField('Canary.RuntimeVersion') as unknown as string;
  }

  public get vpcConfig(): SyntheticsFetchCanaryCanaryVpcConfig {
    return new SyntheticsFetchCanaryCanaryVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.Tags'),
        outputPath: 'Canary.Tags',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanary.Canary.Tags', props);
    return resource.getResponseField('Canary.Tags') as unknown as Record<string, string>;
  }

}

export class SyntheticsFetchCanaryCanaryCode extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SyntheticsGetCanaryRequest) {
    super(scope, id);
  }

  public get sourceLocationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.Code.SourceLocationArn'),
        outputPath: 'Canary.Code.SourceLocationArn',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanary.Canary.Code.SourceLocationArn', props);
    return resource.getResponseField('Canary.Code.SourceLocationArn') as unknown as string;
  }

  public get handler(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.Code.Handler'),
        outputPath: 'Canary.Code.Handler',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanary.Canary.Code.Handler', props);
    return resource.getResponseField('Canary.Code.Handler') as unknown as string;
  }

}

export class SyntheticsFetchCanaryCanarySchedule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SyntheticsGetCanaryRequest) {
    super(scope, id);
  }

  public get expression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.Schedule.Expression'),
        outputPath: 'Canary.Schedule.Expression',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanary.Canary.Schedule.Expression', props);
    return resource.getResponseField('Canary.Schedule.Expression') as unknown as string;
  }

  public get durationInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.Schedule.DurationInSeconds'),
        outputPath: 'Canary.Schedule.DurationInSeconds',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanary.Canary.Schedule.DurationInSeconds', props);
    return resource.getResponseField('Canary.Schedule.DurationInSeconds') as unknown as number;
  }

}

export class SyntheticsFetchCanaryCanaryRunConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SyntheticsGetCanaryRequest) {
    super(scope, id);
  }

  public get timeoutInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.RunConfig.TimeoutInSeconds'),
        outputPath: 'Canary.RunConfig.TimeoutInSeconds',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanary.Canary.RunConfig.TimeoutInSeconds', props);
    return resource.getResponseField('Canary.RunConfig.TimeoutInSeconds') as unknown as number;
  }

  public get memoryInMb(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.RunConfig.MemoryInMB'),
        outputPath: 'Canary.RunConfig.MemoryInMB',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanary.Canary.RunConfig.MemoryInMB', props);
    return resource.getResponseField('Canary.RunConfig.MemoryInMB') as unknown as number;
  }

  public get activeTracing(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.RunConfig.ActiveTracing'),
        outputPath: 'Canary.RunConfig.ActiveTracing',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanary.Canary.RunConfig.ActiveTracing', props);
    return resource.getResponseField('Canary.RunConfig.ActiveTracing') as unknown as boolean;
  }

}

export class SyntheticsFetchCanaryCanaryStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SyntheticsGetCanaryRequest) {
    super(scope, id);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.Status.State'),
        outputPath: 'Canary.Status.State',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanary.Canary.Status.State', props);
    return resource.getResponseField('Canary.Status.State') as unknown as string;
  }

  public get stateReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.Status.StateReason'),
        outputPath: 'Canary.Status.StateReason',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanary.Canary.Status.StateReason', props);
    return resource.getResponseField('Canary.Status.StateReason') as unknown as string;
  }

  public get stateReasonCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.Status.StateReasonCode'),
        outputPath: 'Canary.Status.StateReasonCode',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanary.Canary.Status.StateReasonCode', props);
    return resource.getResponseField('Canary.Status.StateReasonCode') as unknown as string;
  }

}

export class SyntheticsFetchCanaryCanaryTimeline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SyntheticsGetCanaryRequest) {
    super(scope, id);
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.Timeline.Created'),
        outputPath: 'Canary.Timeline.Created',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanary.Canary.Timeline.Created', props);
    return resource.getResponseField('Canary.Timeline.Created') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.Timeline.LastModified'),
        outputPath: 'Canary.Timeline.LastModified',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanary.Canary.Timeline.LastModified', props);
    return resource.getResponseField('Canary.Timeline.LastModified') as unknown as string;
  }

  public get lastStarted(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.Timeline.LastStarted'),
        outputPath: 'Canary.Timeline.LastStarted',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanary.Canary.Timeline.LastStarted', props);
    return resource.getResponseField('Canary.Timeline.LastStarted') as unknown as string;
  }

  public get lastStopped(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.Timeline.LastStopped'),
        outputPath: 'Canary.Timeline.LastStopped',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanary.Canary.Timeline.LastStopped', props);
    return resource.getResponseField('Canary.Timeline.LastStopped') as unknown as string;
  }

}

export class SyntheticsFetchCanaryCanaryVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SyntheticsGetCanaryRequest) {
    super(scope, id);
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.VpcConfig.VpcId'),
        outputPath: 'Canary.VpcConfig.VpcId',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanary.Canary.VpcConfig.VpcId', props);
    return resource.getResponseField('Canary.VpcConfig.VpcId') as unknown as string;
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.VpcConfig.SubnetIds'),
        outputPath: 'Canary.VpcConfig.SubnetIds',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanary.Canary.VpcConfig.SubnetIds', props);
    return resource.getResponseField('Canary.VpcConfig.SubnetIds') as unknown as string[];
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.VpcConfig.SecurityGroupIds'),
        outputPath: 'Canary.VpcConfig.SecurityGroupIds',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanary.Canary.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('Canary.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

}

export class SyntheticsFetchCanaryRuns extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SyntheticsGetCanaryRunsRequest) {
    super(scope, id);
  }

  public get canaryRuns(): shapes.SyntheticsCanaryRun[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanaryRuns',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanaryRuns.CanaryRuns'),
        outputPath: 'CanaryRuns',
        parameters: {
          Name: this.input.name,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanaryRuns.CanaryRuns', props);
    return resource.getResponseField('CanaryRuns') as unknown as shapes.SyntheticsCanaryRun[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanaryRuns',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanaryRuns.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Name: this.input.name,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCanaryRuns.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SyntheticsListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SyntheticsListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

