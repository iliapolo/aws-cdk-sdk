import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SyntheticsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createCanary(input: shapes.SyntheticsCreateCanaryRequest): SyntheticsResponsesCreateCanary {
    return new SyntheticsResponsesCreateCanary(this, this.__resources, input);
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

  public describeCanaries(input: shapes.SyntheticsDescribeCanariesRequest): SyntheticsResponsesDescribeCanaries {
    return new SyntheticsResponsesDescribeCanaries(this, this.__resources, input);
  }

  public describeCanariesLastRun(input: shapes.SyntheticsDescribeCanariesLastRunRequest): SyntheticsResponsesDescribeCanariesLastRun {
    return new SyntheticsResponsesDescribeCanariesLastRun(this, this.__resources, input);
  }

  public describeRuntimeVersions(input: shapes.SyntheticsDescribeRuntimeVersionsRequest): SyntheticsResponsesDescribeRuntimeVersions {
    return new SyntheticsResponsesDescribeRuntimeVersions(this, this.__resources, input);
  }

  public fetchCanary(input: shapes.SyntheticsGetCanaryRequest): SyntheticsResponsesFetchCanary {
    return new SyntheticsResponsesFetchCanary(this, this.__resources, input);
  }

  public fetchCanaryRuns(input: shapes.SyntheticsGetCanaryRunsRequest): SyntheticsResponsesFetchCanaryRuns {
    return new SyntheticsResponsesFetchCanaryRuns(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.SyntheticsListTagsForResourceRequest): SyntheticsResponsesListTagsForResource {
    return new SyntheticsResponsesListTagsForResource(this, this.__resources, input);
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
          VisualReference: {
            BaseScreenshots: input.visualReference?.baseScreenshots,
            BaseCanaryRunId: input.visualReference?.baseCanaryRunId,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateCanary', props);
  }

}

export class SyntheticsResponsesCreateCanary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SyntheticsCreateCanaryRequest) {
  }

  public get canary(): SyntheticsResponsesCreateCanaryCanary {
    return new SyntheticsResponsesCreateCanaryCanary(this.__scope, this.__resources, this.__input);
  }

}

export class SyntheticsResponsesCreateCanaryCanary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SyntheticsCreateCanaryRequest) {
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
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.Id', props);
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
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.Name', props);
    return resource.getResponseField('Canary.Name') as unknown as string;
  }

  public get code(): SyntheticsResponsesCreateCanaryCanaryCode {
    return new SyntheticsResponsesCreateCanaryCanaryCode(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.ExecutionRoleArn', props);
    return resource.getResponseField('Canary.ExecutionRoleArn') as unknown as string;
  }

  public get schedule(): SyntheticsResponsesCreateCanaryCanarySchedule {
    return new SyntheticsResponsesCreateCanaryCanarySchedule(this.__scope, this.__resources, this.__input);
  }

  public get runConfig(): SyntheticsResponsesCreateCanaryCanaryRunConfig {
    return new SyntheticsResponsesCreateCanaryCanaryRunConfig(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.SuccessRetentionPeriodInDays', props);
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
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.FailureRetentionPeriodInDays', props);
    return resource.getResponseField('Canary.FailureRetentionPeriodInDays') as unknown as number;
  }

  public get status(): SyntheticsResponsesCreateCanaryCanaryStatus {
    return new SyntheticsResponsesCreateCanaryCanaryStatus(this.__scope, this.__resources, this.__input);
  }

  public get timeline(): SyntheticsResponsesCreateCanaryCanaryTimeline {
    return new SyntheticsResponsesCreateCanaryCanaryTimeline(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.ArtifactS3Location', props);
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
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.EngineArn', props);
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
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.RuntimeVersion', props);
    return resource.getResponseField('Canary.RuntimeVersion') as unknown as string;
  }

  public get vpcConfig(): SyntheticsResponsesCreateCanaryCanaryVpcConfig {
    return new SyntheticsResponsesCreateCanaryCanaryVpcConfig(this.__scope, this.__resources, this.__input);
  }

  public get visualReference(): SyntheticsResponsesCreateCanaryCanaryVisualReference {
    return new SyntheticsResponsesCreateCanaryCanaryVisualReference(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.Tags', props);
    return resource.getResponseField('Canary.Tags') as unknown as Record<string, string>;
  }

}

export class SyntheticsResponsesCreateCanaryCanaryCode {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SyntheticsCreateCanaryRequest) {
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
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.Code.SourceLocationArn', props);
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
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.Code.Handler', props);
    return resource.getResponseField('Canary.Code.Handler') as unknown as string;
  }

}

export class SyntheticsResponsesCreateCanaryCanarySchedule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SyntheticsCreateCanaryRequest) {
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
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.Schedule.Expression', props);
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
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.Schedule.DurationInSeconds', props);
    return resource.getResponseField('Canary.Schedule.DurationInSeconds') as unknown as number;
  }

}

export class SyntheticsResponsesCreateCanaryCanaryRunConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SyntheticsCreateCanaryRequest) {
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
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.RunConfig.TimeoutInSeconds', props);
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
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.RunConfig.MemoryInMB', props);
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
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.RunConfig.ActiveTracing', props);
    return resource.getResponseField('Canary.RunConfig.ActiveTracing') as unknown as boolean;
  }

}

export class SyntheticsResponsesCreateCanaryCanaryStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SyntheticsCreateCanaryRequest) {
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
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.Status.State', props);
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
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.Status.StateReason', props);
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
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.Status.StateReasonCode', props);
    return resource.getResponseField('Canary.Status.StateReasonCode') as unknown as string;
  }

}

export class SyntheticsResponsesCreateCanaryCanaryTimeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SyntheticsCreateCanaryRequest) {
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
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.Timeline.Created', props);
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
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.Timeline.LastModified', props);
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
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.Timeline.LastStarted', props);
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
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.Timeline.LastStopped', props);
    return resource.getResponseField('Canary.Timeline.LastStopped') as unknown as string;
  }

}

export class SyntheticsResponsesCreateCanaryCanaryVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SyntheticsCreateCanaryRequest) {
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
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.VpcConfig.VpcId', props);
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
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.VpcConfig.SubnetIds', props);
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
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('Canary.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

}

export class SyntheticsResponsesCreateCanaryCanaryVisualReference {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SyntheticsCreateCanaryRequest) {
  }

  public get baseScreenshots(): shapes.SyntheticsBaseScreenshot[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.VisualReference.BaseScreenshots'),
        outputPath: 'Canary.VisualReference.BaseScreenshots',
        parameters: {
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.VisualReference.BaseScreenshots', props);
    return resource.getResponseField('Canary.VisualReference.BaseScreenshots') as unknown as shapes.SyntheticsBaseScreenshot[];
  }

  public get baseCanaryRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.CreateCanary.Canary.VisualReference.BaseCanaryRunId'),
        outputPath: 'Canary.VisualReference.BaseCanaryRunId',
        parameters: {
          Name: this.__input.name,
          Code: {
            S3Bucket: this.__input.code.s3Bucket,
            S3Key: this.__input.code.s3Key,
            S3Version: this.__input.code.s3Version,
            ZipFile: {
            },
            Handler: this.__input.code.handler,
          },
          ArtifactS3Location: this.__input.artifactS3Location,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Schedule: {
            Expression: this.__input.schedule.expression,
            DurationInSeconds: this.__input.schedule.durationInSeconds,
          },
          RunConfig: {
            TimeoutInSeconds: this.__input.runConfig?.timeoutInSeconds,
            MemoryInMB: this.__input.runConfig?.memoryInMb,
            ActiveTracing: this.__input.runConfig?.activeTracing,
            EnvironmentVariables: this.__input.runConfig?.environmentVariables,
          },
          SuccessRetentionPeriodInDays: this.__input.successRetentionPeriodInDays,
          FailureRetentionPeriodInDays: this.__input.failureRetentionPeriodInDays,
          RuntimeVersion: this.__input.runtimeVersion,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCanary.Canary.VisualReference.BaseCanaryRunId', props);
    return resource.getResponseField('Canary.VisualReference.BaseCanaryRunId') as unknown as string;
  }

}

export class SyntheticsResponsesDescribeCanaries {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SyntheticsDescribeCanariesRequest) {
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCanaries.Canaries', props);
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCanaries.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SyntheticsResponsesDescribeCanariesLastRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SyntheticsDescribeCanariesLastRunRequest) {
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCanariesLastRun.CanariesLastRun', props);
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCanariesLastRun.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SyntheticsResponsesDescribeRuntimeVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SyntheticsDescribeRuntimeVersionsRequest) {
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRuntimeVersions.RuntimeVersions', props);
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRuntimeVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SyntheticsResponsesFetchCanary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SyntheticsGetCanaryRequest) {
  }

  public get canary(): SyntheticsResponsesFetchCanaryCanary {
    return new SyntheticsResponsesFetchCanaryCanary(this.__scope, this.__resources, this.__input);
  }

}

export class SyntheticsResponsesFetchCanaryCanary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SyntheticsGetCanaryRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.Id', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.Name', props);
    return resource.getResponseField('Canary.Name') as unknown as string;
  }

  public get code(): SyntheticsResponsesFetchCanaryCanaryCode {
    return new SyntheticsResponsesFetchCanaryCanaryCode(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.ExecutionRoleArn', props);
    return resource.getResponseField('Canary.ExecutionRoleArn') as unknown as string;
  }

  public get schedule(): SyntheticsResponsesFetchCanaryCanarySchedule {
    return new SyntheticsResponsesFetchCanaryCanarySchedule(this.__scope, this.__resources, this.__input);
  }

  public get runConfig(): SyntheticsResponsesFetchCanaryCanaryRunConfig {
    return new SyntheticsResponsesFetchCanaryCanaryRunConfig(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.SuccessRetentionPeriodInDays', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.FailureRetentionPeriodInDays', props);
    return resource.getResponseField('Canary.FailureRetentionPeriodInDays') as unknown as number;
  }

  public get status(): SyntheticsResponsesFetchCanaryCanaryStatus {
    return new SyntheticsResponsesFetchCanaryCanaryStatus(this.__scope, this.__resources, this.__input);
  }

  public get timeline(): SyntheticsResponsesFetchCanaryCanaryTimeline {
    return new SyntheticsResponsesFetchCanaryCanaryTimeline(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.ArtifactS3Location', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.EngineArn', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.RuntimeVersion', props);
    return resource.getResponseField('Canary.RuntimeVersion') as unknown as string;
  }

  public get vpcConfig(): SyntheticsResponsesFetchCanaryCanaryVpcConfig {
    return new SyntheticsResponsesFetchCanaryCanaryVpcConfig(this.__scope, this.__resources, this.__input);
  }

  public get visualReference(): SyntheticsResponsesFetchCanaryCanaryVisualReference {
    return new SyntheticsResponsesFetchCanaryCanaryVisualReference(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.Tags', props);
    return resource.getResponseField('Canary.Tags') as unknown as Record<string, string>;
  }

}

export class SyntheticsResponsesFetchCanaryCanaryCode {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SyntheticsGetCanaryRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.Code.SourceLocationArn', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.Code.Handler', props);
    return resource.getResponseField('Canary.Code.Handler') as unknown as string;
  }

}

export class SyntheticsResponsesFetchCanaryCanarySchedule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SyntheticsGetCanaryRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.Schedule.Expression', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.Schedule.DurationInSeconds', props);
    return resource.getResponseField('Canary.Schedule.DurationInSeconds') as unknown as number;
  }

}

export class SyntheticsResponsesFetchCanaryCanaryRunConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SyntheticsGetCanaryRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.RunConfig.TimeoutInSeconds', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.RunConfig.MemoryInMB', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.RunConfig.ActiveTracing', props);
    return resource.getResponseField('Canary.RunConfig.ActiveTracing') as unknown as boolean;
  }

}

export class SyntheticsResponsesFetchCanaryCanaryStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SyntheticsGetCanaryRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.Status.State', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.Status.StateReason', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.Status.StateReasonCode', props);
    return resource.getResponseField('Canary.Status.StateReasonCode') as unknown as string;
  }

}

export class SyntheticsResponsesFetchCanaryCanaryTimeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SyntheticsGetCanaryRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.Timeline.Created', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.Timeline.LastModified', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.Timeline.LastStarted', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.Timeline.LastStopped', props);
    return resource.getResponseField('Canary.Timeline.LastStopped') as unknown as string;
  }

}

export class SyntheticsResponsesFetchCanaryCanaryVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SyntheticsGetCanaryRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.VpcConfig.VpcId', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.VpcConfig.SubnetIds', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('Canary.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

}

export class SyntheticsResponsesFetchCanaryCanaryVisualReference {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SyntheticsGetCanaryRequest) {
  }

  public get baseScreenshots(): shapes.SyntheticsBaseScreenshot[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.VisualReference.BaseScreenshots'),
        outputPath: 'Canary.VisualReference.BaseScreenshots',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.VisualReference.BaseScreenshots', props);
    return resource.getResponseField('Canary.VisualReference.BaseScreenshots') as unknown as shapes.SyntheticsBaseScreenshot[];
  }

  public get baseCanaryRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCanary',
        service: 'Synthetics',
        physicalResourceId: cr.PhysicalResourceId.of('Synthetics.GetCanary.Canary.VisualReference.BaseCanaryRunId'),
        outputPath: 'Canary.VisualReference.BaseCanaryRunId',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanary.Canary.VisualReference.BaseCanaryRunId', props);
    return resource.getResponseField('Canary.VisualReference.BaseCanaryRunId') as unknown as string;
  }

}

export class SyntheticsResponsesFetchCanaryRuns {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SyntheticsGetCanaryRunsRequest) {
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
          Name: this.__input.name,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanaryRuns.CanaryRuns', props);
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
          Name: this.__input.name,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCanaryRuns.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SyntheticsResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SyntheticsListTagsForResourceRequest) {
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
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

