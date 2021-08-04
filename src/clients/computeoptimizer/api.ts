import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ComputeOptimizerClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public describeRecommendationExportJobs(input: shapes.ComputeOptimizerDescribeRecommendationExportJobsRequest): ComputeOptimizerResponsesDescribeRecommendationExportJobs {
    return new ComputeOptimizerResponsesDescribeRecommendationExportJobs(this, this.__resources, input);
  }

  public exportAutoScalingGroupRecommendations(input: shapes.ComputeOptimizerExportAutoScalingGroupRecommendationsRequest): ComputeOptimizerResponsesExportAutoScalingGroupRecommendations {
    return new ComputeOptimizerResponsesExportAutoScalingGroupRecommendations(this, this.__resources, input);
  }

  public exportEc2InstanceRecommendations(input: shapes.ComputeOptimizerExportEc2InstanceRecommendationsRequest): ComputeOptimizerResponsesExportEc2InstanceRecommendations {
    return new ComputeOptimizerResponsesExportEc2InstanceRecommendations(this, this.__resources, input);
  }

  public fetchAutoScalingGroupRecommendations(input: shapes.ComputeOptimizerGetAutoScalingGroupRecommendationsRequest): ComputeOptimizerResponsesFetchAutoScalingGroupRecommendations {
    return new ComputeOptimizerResponsesFetchAutoScalingGroupRecommendations(this, this.__resources, input);
  }

  public fetchEc2InstanceRecommendations(input: shapes.ComputeOptimizerGetEc2InstanceRecommendationsRequest): ComputeOptimizerResponsesFetchEc2InstanceRecommendations {
    return new ComputeOptimizerResponsesFetchEc2InstanceRecommendations(this, this.__resources, input);
  }

  public fetchEc2RecommendationProjectedMetrics(input: shapes.ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest): ComputeOptimizerResponsesFetchEc2RecommendationProjectedMetrics {
    return new ComputeOptimizerResponsesFetchEc2RecommendationProjectedMetrics(this, this.__resources, input);
  }

  public fetchEnrollmentStatus(): ComputeOptimizerResponsesFetchEnrollmentStatus {
    return new ComputeOptimizerResponsesFetchEnrollmentStatus(this, this.__resources);
  }

  public fetchRecommendationSummaries(input: shapes.ComputeOptimizerGetRecommendationSummariesRequest): ComputeOptimizerResponsesFetchRecommendationSummaries {
    return new ComputeOptimizerResponsesFetchRecommendationSummaries(this, this.__resources, input);
  }

  public updateEnrollmentStatus(input: shapes.ComputeOptimizerUpdateEnrollmentStatusRequest): ComputeOptimizerResponsesUpdateEnrollmentStatus {
    return new ComputeOptimizerResponsesUpdateEnrollmentStatus(this, this.__resources, input);
  }

}

export class ComputeOptimizerResponsesDescribeRecommendationExportJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComputeOptimizerDescribeRecommendationExportJobsRequest) {
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
          jobIds: this.__input.jobIds,
          filters: this.__input.filters,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecommendationExportJobs.recommendationExportJobs', props);
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
          jobIds: this.__input.jobIds,
          filters: this.__input.filters,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecommendationExportJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ComputeOptimizerResponsesExportAutoScalingGroupRecommendations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComputeOptimizerExportAutoScalingGroupRecommendationsRequest) {
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
          accountIds: this.__input.accountIds,
          filters: this.__input.filters,
          fieldsToExport: this.__input.fieldsToExport,
          s3DestinationConfig: {
            bucket: this.__input.s3DestinationConfig.bucket,
            keyPrefix: this.__input.s3DestinationConfig.keyPrefix,
          },
          fileFormat: this.__input.fileFormat,
          includeMemberAccounts: this.__input.includeMemberAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportAutoScalingGroupRecommendations.jobId', props);
    return resource.getResponseField('jobId') as unknown as string;
  }

  public get s3Destination(): ComputeOptimizerResponsesExportAutoScalingGroupRecommendationsS3Destination {
    return new ComputeOptimizerResponsesExportAutoScalingGroupRecommendationsS3Destination(this.__scope, this.__resources, this.__input);
  }

}

export class ComputeOptimizerResponsesExportAutoScalingGroupRecommendationsS3Destination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComputeOptimizerExportAutoScalingGroupRecommendationsRequest) {
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
          accountIds: this.__input.accountIds,
          filters: this.__input.filters,
          fieldsToExport: this.__input.fieldsToExport,
          s3DestinationConfig: {
            bucket: this.__input.s3DestinationConfig.bucket,
            keyPrefix: this.__input.s3DestinationConfig.keyPrefix,
          },
          fileFormat: this.__input.fileFormat,
          includeMemberAccounts: this.__input.includeMemberAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportAutoScalingGroupRecommendations.s3Destination.bucket', props);
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
          accountIds: this.__input.accountIds,
          filters: this.__input.filters,
          fieldsToExport: this.__input.fieldsToExport,
          s3DestinationConfig: {
            bucket: this.__input.s3DestinationConfig.bucket,
            keyPrefix: this.__input.s3DestinationConfig.keyPrefix,
          },
          fileFormat: this.__input.fileFormat,
          includeMemberAccounts: this.__input.includeMemberAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportAutoScalingGroupRecommendations.s3Destination.key', props);
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
          accountIds: this.__input.accountIds,
          filters: this.__input.filters,
          fieldsToExport: this.__input.fieldsToExport,
          s3DestinationConfig: {
            bucket: this.__input.s3DestinationConfig.bucket,
            keyPrefix: this.__input.s3DestinationConfig.keyPrefix,
          },
          fileFormat: this.__input.fileFormat,
          includeMemberAccounts: this.__input.includeMemberAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportAutoScalingGroupRecommendations.s3Destination.metadataKey', props);
    return resource.getResponseField('s3Destination.metadataKey') as unknown as string;
  }

}

export class ComputeOptimizerResponsesExportEc2InstanceRecommendations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComputeOptimizerExportEc2InstanceRecommendationsRequest) {
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
          accountIds: this.__input.accountIds,
          filters: this.__input.filters,
          fieldsToExport: this.__input.fieldsToExport,
          s3DestinationConfig: {
            bucket: this.__input.s3DestinationConfig.bucket,
            keyPrefix: this.__input.s3DestinationConfig.keyPrefix,
          },
          fileFormat: this.__input.fileFormat,
          includeMemberAccounts: this.__input.includeMemberAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportEC2InstanceRecommendations.jobId', props);
    return resource.getResponseField('jobId') as unknown as string;
  }

  public get s3Destination(): ComputeOptimizerResponsesExportEc2InstanceRecommendationsS3Destination {
    return new ComputeOptimizerResponsesExportEc2InstanceRecommendationsS3Destination(this.__scope, this.__resources, this.__input);
  }

}

export class ComputeOptimizerResponsesExportEc2InstanceRecommendationsS3Destination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComputeOptimizerExportEc2InstanceRecommendationsRequest) {
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
          accountIds: this.__input.accountIds,
          filters: this.__input.filters,
          fieldsToExport: this.__input.fieldsToExport,
          s3DestinationConfig: {
            bucket: this.__input.s3DestinationConfig.bucket,
            keyPrefix: this.__input.s3DestinationConfig.keyPrefix,
          },
          fileFormat: this.__input.fileFormat,
          includeMemberAccounts: this.__input.includeMemberAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportEC2InstanceRecommendations.s3Destination.bucket', props);
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
          accountIds: this.__input.accountIds,
          filters: this.__input.filters,
          fieldsToExport: this.__input.fieldsToExport,
          s3DestinationConfig: {
            bucket: this.__input.s3DestinationConfig.bucket,
            keyPrefix: this.__input.s3DestinationConfig.keyPrefix,
          },
          fileFormat: this.__input.fileFormat,
          includeMemberAccounts: this.__input.includeMemberAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportEC2InstanceRecommendations.s3Destination.key', props);
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
          accountIds: this.__input.accountIds,
          filters: this.__input.filters,
          fieldsToExport: this.__input.fieldsToExport,
          s3DestinationConfig: {
            bucket: this.__input.s3DestinationConfig.bucket,
            keyPrefix: this.__input.s3DestinationConfig.keyPrefix,
          },
          fileFormat: this.__input.fileFormat,
          includeMemberAccounts: this.__input.includeMemberAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportEC2InstanceRecommendations.s3Destination.metadataKey', props);
    return resource.getResponseField('s3Destination.metadataKey') as unknown as string;
  }

}

export class ComputeOptimizerResponsesFetchAutoScalingGroupRecommendations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComputeOptimizerGetAutoScalingGroupRecommendationsRequest) {
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
          accountIds: this.__input.accountIds,
          autoScalingGroupArns: this.__input.autoScalingGroupArns,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutoScalingGroupRecommendations.nextToken', props);
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
          accountIds: this.__input.accountIds,
          autoScalingGroupArns: this.__input.autoScalingGroupArns,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutoScalingGroupRecommendations.autoScalingGroupRecommendations', props);
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
          accountIds: this.__input.accountIds,
          autoScalingGroupArns: this.__input.autoScalingGroupArns,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutoScalingGroupRecommendations.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.ComputeOptimizerGetRecommendationError[];
  }

}

export class ComputeOptimizerResponsesFetchEc2InstanceRecommendations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComputeOptimizerGetEc2InstanceRecommendationsRequest) {
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
          instanceArns: this.__input.instanceArns,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filters: this.__input.filters,
          accountIds: this.__input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEC2InstanceRecommendations.nextToken', props);
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
          instanceArns: this.__input.instanceArns,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filters: this.__input.filters,
          accountIds: this.__input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEC2InstanceRecommendations.instanceRecommendations', props);
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
          instanceArns: this.__input.instanceArns,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filters: this.__input.filters,
          accountIds: this.__input.accountIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEC2InstanceRecommendations.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.ComputeOptimizerGetRecommendationError[];
  }

}

export class ComputeOptimizerResponsesFetchEc2RecommendationProjectedMetrics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest) {
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
          instanceArn: this.__input.instanceArn,
          stat: this.__input.stat,
          period: this.__input.period,
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEC2RecommendationProjectedMetrics.recommendedOptionProjectedMetrics', props);
    return resource.getResponseField('recommendedOptionProjectedMetrics') as unknown as shapes.ComputeOptimizerRecommendedOptionProjectedMetric[];
  }

}

export class ComputeOptimizerResponsesFetchEnrollmentStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnrollmentStatus.status', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnrollmentStatus.statusReason', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnrollmentStatus.memberAccountsEnrolled', props);
    return resource.getResponseField('memberAccountsEnrolled') as unknown as boolean;
  }

}

export class ComputeOptimizerResponsesFetchRecommendationSummaries {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComputeOptimizerGetRecommendationSummariesRequest) {
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
          accountIds: this.__input.accountIds,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRecommendationSummaries.nextToken', props);
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
          accountIds: this.__input.accountIds,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRecommendationSummaries.recommendationSummaries', props);
    return resource.getResponseField('recommendationSummaries') as unknown as shapes.ComputeOptimizerRecommendationSummary[];
  }

}

export class ComputeOptimizerResponsesUpdateEnrollmentStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComputeOptimizerUpdateEnrollmentStatusRequest) {
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
          status: this.__input.status,
          includeMemberAccounts: this.__input.includeMemberAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnrollmentStatus.status', props);
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
          status: this.__input.status,
          includeMemberAccounts: this.__input.includeMemberAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnrollmentStatus.statusReason', props);
    return resource.getResponseField('statusReason') as unknown as string;
  }

}

