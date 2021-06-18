import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class PiClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public describeDimensionKeys(input: shapes.PiDescribeDimensionKeysRequest): PIDescribeDimensionKeys {
    return new PIDescribeDimensionKeys(this, 'DescribeDimensionKeys', this.__resources, input);
  }

  public fetchResourceMetrics(input: shapes.PiGetResourceMetricsRequest): PIFetchResourceMetrics {
    return new PIFetchResourceMetrics(this, 'FetchResourceMetrics', this.__resources, input);
  }

}

export class PIDescribeDimensionKeys extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PiDescribeDimensionKeysRequest) {
    super(scope, id);
  }

  public get alignedStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDimensionKeys',
        service: 'PI',
        physicalResourceId: cr.PhysicalResourceId.of('PI.DescribeDimensionKeys.AlignedStartTime'),
        outputPath: 'AlignedStartTime',
        parameters: {
          ServiceType: this.input.serviceType,
          Identifier: this.input.identifier,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          Metric: this.input.metric,
          PeriodInSeconds: this.input.periodInSeconds,
          GroupBy: {
            Group: this.input.groupBy.group,
            Dimensions: this.input.groupBy.dimensions,
            Limit: this.input.groupBy.limit,
          },
          PartitionBy: {
            Group: this.input.partitionBy?.group,
            Dimensions: this.input.partitionBy?.dimensions,
            Limit: this.input.partitionBy?.limit,
          },
          Filter: this.input.filter,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDimensionKeys.AlignedStartTime', props);
    return resource.getResponseField('AlignedStartTime') as unknown as string;
  }

  public get alignedEndTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDimensionKeys',
        service: 'PI',
        physicalResourceId: cr.PhysicalResourceId.of('PI.DescribeDimensionKeys.AlignedEndTime'),
        outputPath: 'AlignedEndTime',
        parameters: {
          ServiceType: this.input.serviceType,
          Identifier: this.input.identifier,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          Metric: this.input.metric,
          PeriodInSeconds: this.input.periodInSeconds,
          GroupBy: {
            Group: this.input.groupBy.group,
            Dimensions: this.input.groupBy.dimensions,
            Limit: this.input.groupBy.limit,
          },
          PartitionBy: {
            Group: this.input.partitionBy?.group,
            Dimensions: this.input.partitionBy?.dimensions,
            Limit: this.input.partitionBy?.limit,
          },
          Filter: this.input.filter,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDimensionKeys.AlignedEndTime', props);
    return resource.getResponseField('AlignedEndTime') as unknown as string;
  }

  public get partitionKeys(): shapes.PiResponsePartitionKey[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDimensionKeys',
        service: 'PI',
        physicalResourceId: cr.PhysicalResourceId.of('PI.DescribeDimensionKeys.PartitionKeys'),
        outputPath: 'PartitionKeys',
        parameters: {
          ServiceType: this.input.serviceType,
          Identifier: this.input.identifier,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          Metric: this.input.metric,
          PeriodInSeconds: this.input.periodInSeconds,
          GroupBy: {
            Group: this.input.groupBy.group,
            Dimensions: this.input.groupBy.dimensions,
            Limit: this.input.groupBy.limit,
          },
          PartitionBy: {
            Group: this.input.partitionBy?.group,
            Dimensions: this.input.partitionBy?.dimensions,
            Limit: this.input.partitionBy?.limit,
          },
          Filter: this.input.filter,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDimensionKeys.PartitionKeys', props);
    return resource.getResponseField('PartitionKeys') as unknown as shapes.PiResponsePartitionKey[];
  }

  public get keys(): shapes.PiDimensionKeyDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDimensionKeys',
        service: 'PI',
        physicalResourceId: cr.PhysicalResourceId.of('PI.DescribeDimensionKeys.Keys'),
        outputPath: 'Keys',
        parameters: {
          ServiceType: this.input.serviceType,
          Identifier: this.input.identifier,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          Metric: this.input.metric,
          PeriodInSeconds: this.input.periodInSeconds,
          GroupBy: {
            Group: this.input.groupBy.group,
            Dimensions: this.input.groupBy.dimensions,
            Limit: this.input.groupBy.limit,
          },
          PartitionBy: {
            Group: this.input.partitionBy?.group,
            Dimensions: this.input.partitionBy?.dimensions,
            Limit: this.input.partitionBy?.limit,
          },
          Filter: this.input.filter,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDimensionKeys.Keys', props);
    return resource.getResponseField('Keys') as unknown as shapes.PiDimensionKeyDescription[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDimensionKeys',
        service: 'PI',
        physicalResourceId: cr.PhysicalResourceId.of('PI.DescribeDimensionKeys.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ServiceType: this.input.serviceType,
          Identifier: this.input.identifier,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          Metric: this.input.metric,
          PeriodInSeconds: this.input.periodInSeconds,
          GroupBy: {
            Group: this.input.groupBy.group,
            Dimensions: this.input.groupBy.dimensions,
            Limit: this.input.groupBy.limit,
          },
          PartitionBy: {
            Group: this.input.partitionBy?.group,
            Dimensions: this.input.partitionBy?.dimensions,
            Limit: this.input.partitionBy?.limit,
          },
          Filter: this.input.filter,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDimensionKeys.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class PIFetchResourceMetrics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PiGetResourceMetricsRequest) {
    super(scope, id);
  }

  public get alignedStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceMetrics',
        service: 'PI',
        physicalResourceId: cr.PhysicalResourceId.of('PI.GetResourceMetrics.AlignedStartTime'),
        outputPath: 'AlignedStartTime',
        parameters: {
          ServiceType: this.input.serviceType,
          Identifier: this.input.identifier,
          MetricQueries: this.input.metricQueries,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          PeriodInSeconds: this.input.periodInSeconds,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourceMetrics.AlignedStartTime', props);
    return resource.getResponseField('AlignedStartTime') as unknown as string;
  }

  public get alignedEndTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceMetrics',
        service: 'PI',
        physicalResourceId: cr.PhysicalResourceId.of('PI.GetResourceMetrics.AlignedEndTime'),
        outputPath: 'AlignedEndTime',
        parameters: {
          ServiceType: this.input.serviceType,
          Identifier: this.input.identifier,
          MetricQueries: this.input.metricQueries,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          PeriodInSeconds: this.input.periodInSeconds,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourceMetrics.AlignedEndTime', props);
    return resource.getResponseField('AlignedEndTime') as unknown as string;
  }

  public get identifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceMetrics',
        service: 'PI',
        physicalResourceId: cr.PhysicalResourceId.of('PI.GetResourceMetrics.Identifier'),
        outputPath: 'Identifier',
        parameters: {
          ServiceType: this.input.serviceType,
          Identifier: this.input.identifier,
          MetricQueries: this.input.metricQueries,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          PeriodInSeconds: this.input.periodInSeconds,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourceMetrics.Identifier', props);
    return resource.getResponseField('Identifier') as unknown as string;
  }

  public get metricList(): shapes.PiMetricKeyDataPoints[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceMetrics',
        service: 'PI',
        physicalResourceId: cr.PhysicalResourceId.of('PI.GetResourceMetrics.MetricList'),
        outputPath: 'MetricList',
        parameters: {
          ServiceType: this.input.serviceType,
          Identifier: this.input.identifier,
          MetricQueries: this.input.metricQueries,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          PeriodInSeconds: this.input.periodInSeconds,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourceMetrics.MetricList', props);
    return resource.getResponseField('MetricList') as unknown as shapes.PiMetricKeyDataPoints[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceMetrics',
        service: 'PI',
        physicalResourceId: cr.PhysicalResourceId.of('PI.GetResourceMetrics.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ServiceType: this.input.serviceType,
          Identifier: this.input.identifier,
          MetricQueries: this.input.metricQueries,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          PeriodInSeconds: this.input.periodInSeconds,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourceMetrics.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

