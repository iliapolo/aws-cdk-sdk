import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ComputeOptimizerClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public describeRecommendationExportJobs(input: shapes.ComputeOptimizerDescribeRecommendationExportJobsRequest): ComputeOptimizerDescribeRecommendationExportJobs {
    return new ComputeOptimizerDescribeRecommendationExportJobs(this, 'DescribeRecommendationExportJobs', this.__resources, input);
  }

  public exportAutoScalingGroupRecommendations(input: shapes.ComputeOptimizerExportAutoScalingGroupRecommendationsRequest): ComputeOptimizerExportAutoScalingGroupRecommendations {
    return new ComputeOptimizerExportAutoScalingGroupRecommendations(this, 'ExportAutoScalingGroupRecommendations', this.__resources, input);
  }

  public exportEc2InstanceRecommendations(input: shapes.ComputeOptimizerExportEc2InstanceRecommendationsRequest): ComputeOptimizerExportEc2InstanceRecommendations {
    return new ComputeOptimizerExportEc2InstanceRecommendations(this, 'ExportEc2InstanceRecommendations', this.__resources, input);
  }

  public fetchAutoScalingGroupRecommendations(input: shapes.ComputeOptimizerGetAutoScalingGroupRecommendationsRequest): ComputeOptimizerFetchAutoScalingGroupRecommendations {
    return new ComputeOptimizerFetchAutoScalingGroupRecommendations(this, 'FetchAutoScalingGroupRecommendations', this.__resources, input);
  }

  public fetchEc2InstanceRecommendations(input: shapes.ComputeOptimizerGetEc2InstanceRecommendationsRequest): ComputeOptimizerFetchEc2InstanceRecommendations {
    return new ComputeOptimizerFetchEc2InstanceRecommendations(this, 'FetchEc2InstanceRecommendations', this.__resources, input);
  }

  public fetchEc2RecommendationProjectedMetrics(input: shapes.ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest): ComputeOptimizerFetchEc2RecommendationProjectedMetrics {
    return new ComputeOptimizerFetchEc2RecommendationProjectedMetrics(this, 'FetchEc2RecommendationProjectedMetrics', this.__resources, input);
  }

  public fetchEnrollmentStatus(): ComputeOptimizerFetchEnrollmentStatus {
    return new ComputeOptimizerFetchEnrollmentStatus(this, 'FetchEnrollmentStatus', this.__resources);
  }

  public fetchRecommendationSummaries(input: shapes.ComputeOptimizerGetRecommendationSummariesRequest): ComputeOptimizerFetchRecommendationSummaries {
    return new ComputeOptimizerFetchRecommendationSummaries(this, 'FetchRecommendationSummaries', this.__resources, input);
  }

  public updateEnrollmentStatus(input: shapes.ComputeOptimizerUpdateEnrollmentStatusRequest): ComputeOptimizerUpdateEnrollmentStatus {
    return new ComputeOptimizerUpdateEnrollmentStatus(this, 'UpdateEnrollmentStatus', this.__resources, input);
  }

}

export class ComputeOptimizerDescribeRecommendationExportJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComputeOptimizerDescribeRecommendationExportJobsRequest) {
    super(scope, id);
  }

  public get recommendationExportJobs(): shapes.ComputeOptimizerRecommendationExportJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecommendationExportJobs',
        service: 'ComputeOptimizer',
        physicalResourceId: cr.PhysicalResourceId.of('ComputeOptimizer.DescribeRecommendationExportJobs.recommendationExportJobs'),
        outputPath: 'recommendationExportJobs',
        parameters: {
          jobIds: this.input.jobIds,
          filters: this.input.filters,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecommendationExportJobs.recommendationExportJobs', props);
    return resource.getResponseField('recommendationExportJobs') as unknown as shapes.ComputeOptimizerRecommendationExportJob[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecommendationExportJobs',
        service: 'ComputeOptimizer',
        physicalResourceId: cr.PhysicalResourceId.of('ComputeOptimizer.DescribeRecommendationExportJobs.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          jobIds: this.input.jobIds,
          filters: this.input.filters,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecommendationExportJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ComputeOptimizerExportAutoScalingGroupRecommendations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComputeOptimizerExportAutoScalingGroupRecommendationsRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportAutoScalingGroupRecommendations',
        service: 'ComputeOptimizer',
        physicalResourceId: cr.PhysicalResourceId.of('ComputeOptimizer.ExportAutoScalingGroupRecommendations.jobId'),
        outputPath: 'jobId',
        parameters: {
          accountIds: this.input.accountIds,
          filters: this.input.filters,
          fieldsToExport: this.input.fieldsToExport,
          s3DestinationConfig: {
            bucket: this.input.s3DestinationConfig.bucket,
            keyPrefix: this.input.s3DestinationConfig.keyPrefix,
          },
          fileFormat: this.input.fileFormat,
          includeMemberAccounts: this.input.includeMemberAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportAutoScalingGroupRecommendations.jobId', props);
    return resource.getResponseField('jobId') as unknown as string;
  }

  public get s3Destination(): ComputeOptimizerExportAutoScalingGroupRecommendationsS3Destination {
    return new ComputeOptimizerExportAutoScalingGroupRecommendationsS3Destination(this, 'S3Destination', this.__resources, this.input);
  }

}

export class ComputeOptimizerExportAutoScalingGroupRecommendationsS3Destination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComputeOptimizerExportAutoScalingGroupRecommendationsRequest) {
    super(scope, id);
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportAutoScalingGroupRecommendations',
        service: 'ComputeOptimizer',
        physicalResourceId: cr.PhysicalResourceId.of('ComputeOptimizer.ExportAutoScalingGroupRecommendations.s3Destination.bucket'),
        outputPath: 's3Destination.bucket',
        parameters: {
          accountIds: this.input.accountIds,
          filters: this.input.filters,
          fieldsToExport: this.input.fieldsToExport,
          s3DestinationConfig: {
            bucket: this.input.s3DestinationConfig.bucket,
            keyPrefix: this.input.s3DestinationConfig.keyPrefix,
          },
          fileFormat: this.input.fileFormat,
          includeMemberAccounts: this.input.includeMemberAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportAutoScalingGroupRecommendations.s3Destination.bucket', props);
    return resource.getResponseField('s3Destination.bucket') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportAutoScalingGroupRecommendations',
        service: 'ComputeOptimizer',
        physicalResourceId: cr.PhysicalResourceId.of('ComputeOptimizer.ExportAutoScalingGroupRecommendations.s3Destination.key'),
        outputPath: 's3Destination.key',
        parameters: {
          accountIds: this.input.accountIds,
          filters: this.input.filters,
          fieldsToExport: this.input.fieldsToExport,
          s3DestinationConfig: {
            bucket: this.input.s3DestinationConfig.bucket,
            keyPrefix: this.input.s3DestinationConfig.keyPrefix,
          },
          fileFormat: this.input.fileFormat,
          includeMemberAccounts: this.input.includeMemberAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportAutoScalingGroupRecommendations.s3Destination.key', props);
    return resource.getResponseField('s3Destination.key') as unknown as string;
  }

  public get metadataKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportAutoScalingGroupRecommendations',
        service: 'ComputeOptimizer',
        physicalResourceId: cr.PhysicalResourceId.of('ComputeOptimizer.ExportAutoScalingGroupRecommendations.s3Destination.metadataKey'),
        outputPath: 's3Destination.metadataKey',
        parameters: {
          accountIds: this.input.accountIds,
          filters: this.input.filters,
          fieldsToExport: this.input.fieldsToExport,
          s3DestinationConfig: {
            bucket: this.input.s3DestinationConfig.bucket,
            keyPrefix: this.input.s3DestinationConfig.keyPrefix,
          },
          fileFormat: this.input.fileFormat,
          includeMemberAccounts: this.input.includeMemberAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportAutoScalingGroupRecommendations.s3Destination.metadataKey', props);
    return resource.getResponseField('s3Destination.metadataKey') as unknown as string;
  }

}

export class ComputeOptimizerExportEc2InstanceRecommendations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComputeOptimizerExportEc2InstanceRecommendationsRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportEc2InstanceRecommendations',
        service: 'ComputeOptimizer',
        physicalResourceId: cr.PhysicalResourceId.of('ComputeOptimizer.ExportEC2InstanceRecommendations.jobId'),
        outputPath: 'jobId',
        parameters: {
          accountIds: this.input.accountIds,
          filters: this.input.filters,
          fieldsToExport: this.input.fieldsToExport,
          s3DestinationConfig: {
            bucket: this.input.s3DestinationConfig.bucket,
            keyPrefix: this.input.s3DestinationConfig.keyPrefix,
          },
          fileFormat: this.input.fileFormat,
          includeMemberAccounts: this.input.includeMemberAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportEC2InstanceRecommendations.jobId', props);
    return resource.getResponseField('jobId') as unknown as string;
  }

  public get s3Destination(): ComputeOptimizerExportEc2InstanceRecommendationsS3Destination {
    return new ComputeOptimizerExportEc2InstanceRecommendationsS3Destination(this, 'S3Destination', this.__resources, this.input);
  }

}

export class ComputeOptimizerExportEc2InstanceRecommendationsS3Destination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComputeOptimizerExportEc2InstanceRecommendationsRequest) {
    super(scope, id);
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportEc2InstanceRecommendations',
        service: 'ComputeOptimizer',
        physicalResourceId: cr.PhysicalResourceId.of('ComputeOptimizer.ExportEC2InstanceRecommendations.s3Destination.bucket'),
        outputPath: 's3Destination.bucket',
        parameters: {
          accountIds: this.input.accountIds,
          filters: this.input.filters,
          fieldsToExport: this.input.fieldsToExport,
          s3DestinationConfig: {
            bucket: this.input.s3DestinationConfig.bucket,
            keyPrefix: this.input.s3DestinationConfig.keyPrefix,
          },
          fileFormat: this.input.fileFormat,
          includeMemberAccounts: this.input.includeMemberAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportEC2InstanceRecommendations.s3Destination.bucket', props);
    return resource.getResponseField('s3Destination.bucket') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportEc2InstanceRecommendations',
        service: 'ComputeOptimizer',
        physicalResourceId: cr.PhysicalResourceId.of('ComputeOptimizer.ExportEC2InstanceRecommendations.s3Destination.key'),
        outputPath: 's3Destination.key',
        parameters: {
          accountIds: this.input.accountIds,
          filters: this.input.filters,
          fieldsToExport: this.input.fieldsToExport,
          s3DestinationConfig: {
            bucket: this.input.s3DestinationConfig.bucket,
            keyPrefix: this.input.s3DestinationConfig.keyPrefix,
          },
          fileFormat: this.input.fileFormat,
          includeMemberAccounts: this.input.includeMemberAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportEC2InstanceRecommendations.s3Destination.key', props);
    return resource.getResponseField('s3Destination.key') as unknown as string;
  }

  public get metadataKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportEc2InstanceRecommendations',
        service: 'ComputeOptimizer',
        physicalResourceId: cr.PhysicalResourceId.of('ComputeOptimizer.ExportEC2InstanceRecommendations.s3Destination.metadataKey'),
        outputPath: 's3Destination.metadataKey',
        parameters: {
          accountIds: this.input.accountIds,
          filters: this.input.filters,
          fieldsToExport: this.input.fieldsToExport,
          s3DestinationConfig: {
            bucket: this.input.s3DestinationConfig.bucket,
            keyPrefix: this.input.s3DestinationConfig.keyPrefix,
          },
          fileFormat: this.input.fileFormat,
          includeMemberAccounts: this.input.includeMemberAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportEC2InstanceRecommendations.s3Destination.metadataKey', props);
    return resource.getResponseField('s3Destination.metadataKey') as unknown as string;
  }

}

export class ComputeOptimizerFetchAutoScalingGroupRecommendations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComputeOptimizerGetAutoScalingGroupRecommendationsRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutoScalingGroupRecommendations',
        service: 'ComputeOptimizer',
        physicalResourceId: cr.PhysicalResourceId.of('ComputeOptimizer.GetAutoScalingGroupRecommendations.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          accountIds: this.input.accountIds,
          autoScalingGroupArns: this.input.autoScalingGroupArns,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutoScalingGroupRecommendations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get autoScalingGroupRecommendations(): shapes.ComputeOptimizerAutoScalingGroupRecommendation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutoScalingGroupRecommendations',
        service: 'ComputeOptimizer',
        physicalResourceId: cr.PhysicalResourceId.of('ComputeOptimizer.GetAutoScalingGroupRecommendations.autoScalingGroupRecommendations'),
        outputPath: 'autoScalingGroupRecommendations',
        parameters: {
          accountIds: this.input.accountIds,
          autoScalingGroupArns: this.input.autoScalingGroupArns,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutoScalingGroupRecommendations.autoScalingGroupRecommendations', props);
    return resource.getResponseField('autoScalingGroupRecommendations') as unknown as shapes.ComputeOptimizerAutoScalingGroupRecommendation[];
  }

  public get errors(): shapes.ComputeOptimizerGetRecommendationError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutoScalingGroupRecommendations',
        service: 'ComputeOptimizer',
        physicalResourceId: cr.PhysicalResourceId.of('ComputeOptimizer.GetAutoScalingGroupRecommendations.errors'),
        outputPath: 'errors',
        parameters: {
          accountIds: this.input.accountIds,
          autoScalingGroupArns: this.input.autoScalingGroupArns,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutoScalingGroupRecommendations.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.ComputeOptimizerGetRecommendationError[];
  }

}

export class ComputeOptimizerFetchEc2InstanceRecommendations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComputeOptimizerGetEc2InstanceRecommendationsRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEc2InstanceRecommendations',
        service: 'ComputeOptimizer',
        physicalResourceId: cr.PhysicalResourceId.of('ComputeOptimizer.GetEC2InstanceRecommendations.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          instanceArns: this.input.instanceArns,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filters: this.input.filters,
          accountIds: this.input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEC2InstanceRecommendations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get instanceRecommendations(): shapes.ComputeOptimizerInstanceRecommendation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEc2InstanceRecommendations',
        service: 'ComputeOptimizer',
        physicalResourceId: cr.PhysicalResourceId.of('ComputeOptimizer.GetEC2InstanceRecommendations.instanceRecommendations'),
        outputPath: 'instanceRecommendations',
        parameters: {
          instanceArns: this.input.instanceArns,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filters: this.input.filters,
          accountIds: this.input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEC2InstanceRecommendations.instanceRecommendations', props);
    return resource.getResponseField('instanceRecommendations') as unknown as shapes.ComputeOptimizerInstanceRecommendation[];
  }

  public get errors(): shapes.ComputeOptimizerGetRecommendationError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEc2InstanceRecommendations',
        service: 'ComputeOptimizer',
        physicalResourceId: cr.PhysicalResourceId.of('ComputeOptimizer.GetEC2InstanceRecommendations.errors'),
        outputPath: 'errors',
        parameters: {
          instanceArns: this.input.instanceArns,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filters: this.input.filters,
          accountIds: this.input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEC2InstanceRecommendations.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.ComputeOptimizerGetRecommendationError[];
  }

}

export class ComputeOptimizerFetchEc2RecommendationProjectedMetrics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest) {
    super(scope, id);
  }

  public get recommendedOptionProjectedMetrics(): shapes.ComputeOptimizerRecommendedOptionProjectedMetric[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEc2RecommendationProjectedMetrics',
        service: 'ComputeOptimizer',
        physicalResourceId: cr.PhysicalResourceId.of('ComputeOptimizer.GetEC2RecommendationProjectedMetrics.recommendedOptionProjectedMetrics'),
        outputPath: 'recommendedOptionProjectedMetrics',
        parameters: {
          instanceArn: this.input.instanceArn,
          stat: this.input.stat,
          period: this.input.period,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEC2RecommendationProjectedMetrics.recommendedOptionProjectedMetrics', props);
    return resource.getResponseField('recommendedOptionProjectedMetrics') as unknown as shapes.ComputeOptimizerRecommendedOptionProjectedMetric[];
  }

}

export class ComputeOptimizerFetchEnrollmentStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnrollmentStatus',
        service: 'ComputeOptimizer',
        physicalResourceId: cr.PhysicalResourceId.of('ComputeOptimizer.GetEnrollmentStatus.status'),
        outputPath: 'status',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnrollmentStatus.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnrollmentStatus',
        service: 'ComputeOptimizer',
        physicalResourceId: cr.PhysicalResourceId.of('ComputeOptimizer.GetEnrollmentStatus.statusReason'),
        outputPath: 'statusReason',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnrollmentStatus.statusReason', props);
    return resource.getResponseField('statusReason') as unknown as string;
  }

  public get memberAccountsEnrolled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnrollmentStatus',
        service: 'ComputeOptimizer',
        physicalResourceId: cr.PhysicalResourceId.of('ComputeOptimizer.GetEnrollmentStatus.memberAccountsEnrolled'),
        outputPath: 'memberAccountsEnrolled',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnrollmentStatus.memberAccountsEnrolled', props);
    return resource.getResponseField('memberAccountsEnrolled') as unknown as boolean;
  }

}

export class ComputeOptimizerFetchRecommendationSummaries extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComputeOptimizerGetRecommendationSummariesRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRecommendationSummaries',
        service: 'ComputeOptimizer',
        physicalResourceId: cr.PhysicalResourceId.of('ComputeOptimizer.GetRecommendationSummaries.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          accountIds: this.input.accountIds,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRecommendationSummaries.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get recommendationSummaries(): shapes.ComputeOptimizerRecommendationSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRecommendationSummaries',
        service: 'ComputeOptimizer',
        physicalResourceId: cr.PhysicalResourceId.of('ComputeOptimizer.GetRecommendationSummaries.recommendationSummaries'),
        outputPath: 'recommendationSummaries',
        parameters: {
          accountIds: this.input.accountIds,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRecommendationSummaries.recommendationSummaries', props);
    return resource.getResponseField('recommendationSummaries') as unknown as shapes.ComputeOptimizerRecommendationSummary[];
  }

}

export class ComputeOptimizerUpdateEnrollmentStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComputeOptimizerUpdateEnrollmentStatusRequest) {
    super(scope, id);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnrollmentStatus',
        service: 'ComputeOptimizer',
        physicalResourceId: cr.PhysicalResourceId.of('ComputeOptimizer.UpdateEnrollmentStatus.status'),
        outputPath: 'status',
        parameters: {
          status: this.input.status,
          includeMemberAccounts: this.input.includeMemberAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnrollmentStatus.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnrollmentStatus',
        service: 'ComputeOptimizer',
        physicalResourceId: cr.PhysicalResourceId.of('ComputeOptimizer.UpdateEnrollmentStatus.statusReason'),
        outputPath: 'statusReason',
        parameters: {
          status: this.input.status,
          includeMemberAccounts: this.input.includeMemberAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnrollmentStatus.statusReason', props);
    return resource.getResponseField('statusReason') as unknown as string;
  }

}

