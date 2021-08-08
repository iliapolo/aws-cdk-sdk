import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class PiClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public describeDimensionKeys(input: shapes.PiDescribeDimensionKeysRequest): PIResponsesDescribeDimensionKeys {
    return new PIResponsesDescribeDimensionKeys(this, this.__resources, input);
  }

  public fetchDimensionKeyDetails(input: shapes.PiGetDimensionKeyDetailsRequest): PIResponsesFetchDimensionKeyDetails {
    return new PIResponsesFetchDimensionKeyDetails(this, this.__resources, input);
  }

  public fetchResourceMetrics(input: shapes.PiGetResourceMetricsRequest): PIResponsesFetchResourceMetrics {
    return new PIResponsesFetchResourceMetrics(this, this.__resources, input);
  }

}

export class PIResponsesDescribeDimensionKeys {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PiDescribeDimensionKeysRequest) {
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
          ServiceType: this.__input.serviceType,
          Identifier: this.__input.identifier,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          Metric: this.__input.metric,
          PeriodInSeconds: this.__input.periodInSeconds,
          GroupBy: {
            Group: this.__input.groupBy.group,
            Dimensions: this.__input.groupBy.dimensions,
            Limit: this.__input.groupBy.limit,
          },
          PartitionBy: {
            Group: this.__input.partitionBy?.group,
            Dimensions: this.__input.partitionBy?.dimensions,
            Limit: this.__input.partitionBy?.limit,
          },
          Filter: this.__input.filter,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDimensionKeys.AlignedStartTime', props);
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
          ServiceType: this.__input.serviceType,
          Identifier: this.__input.identifier,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          Metric: this.__input.metric,
          PeriodInSeconds: this.__input.periodInSeconds,
          GroupBy: {
            Group: this.__input.groupBy.group,
            Dimensions: this.__input.groupBy.dimensions,
            Limit: this.__input.groupBy.limit,
          },
          PartitionBy: {
            Group: this.__input.partitionBy?.group,
            Dimensions: this.__input.partitionBy?.dimensions,
            Limit: this.__input.partitionBy?.limit,
          },
          Filter: this.__input.filter,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDimensionKeys.AlignedEndTime', props);
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
          ServiceType: this.__input.serviceType,
          Identifier: this.__input.identifier,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          Metric: this.__input.metric,
          PeriodInSeconds: this.__input.periodInSeconds,
          GroupBy: {
            Group: this.__input.groupBy.group,
            Dimensions: this.__input.groupBy.dimensions,
            Limit: this.__input.groupBy.limit,
          },
          PartitionBy: {
            Group: this.__input.partitionBy?.group,
            Dimensions: this.__input.partitionBy?.dimensions,
            Limit: this.__input.partitionBy?.limit,
          },
          Filter: this.__input.filter,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDimensionKeys.PartitionKeys', props);
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
          ServiceType: this.__input.serviceType,
          Identifier: this.__input.identifier,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          Metric: this.__input.metric,
          PeriodInSeconds: this.__input.periodInSeconds,
          GroupBy: {
            Group: this.__input.groupBy.group,
            Dimensions: this.__input.groupBy.dimensions,
            Limit: this.__input.groupBy.limit,
          },
          PartitionBy: {
            Group: this.__input.partitionBy?.group,
            Dimensions: this.__input.partitionBy?.dimensions,
            Limit: this.__input.partitionBy?.limit,
          },
          Filter: this.__input.filter,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDimensionKeys.Keys', props);
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
          ServiceType: this.__input.serviceType,
          Identifier: this.__input.identifier,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          Metric: this.__input.metric,
          PeriodInSeconds: this.__input.periodInSeconds,
          GroupBy: {
            Group: this.__input.groupBy.group,
            Dimensions: this.__input.groupBy.dimensions,
            Limit: this.__input.groupBy.limit,
          },
          PartitionBy: {
            Group: this.__input.partitionBy?.group,
            Dimensions: this.__input.partitionBy?.dimensions,
            Limit: this.__input.partitionBy?.limit,
          },
          Filter: this.__input.filter,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDimensionKeys.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class PIResponsesFetchDimensionKeyDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PiGetDimensionKeyDetailsRequest) {
  }

  public get dimensions(): shapes.PiDimensionKeyDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDimensionKeyDetails',
        service: 'PI',
        physicalResourceId: cr.PhysicalResourceId.of('PI.GetDimensionKeyDetails.Dimensions'),
        outputPath: 'Dimensions',
        parameters: {
          ServiceType: this.__input.serviceType,
          Identifier: this.__input.identifier,
          Group: this.__input.group,
          GroupIdentifier: this.__input.groupIdentifier,
          RequestedDimensions: this.__input.requestedDimensions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDimensionKeyDetails.Dimensions', props);
    return resource.getResponseField('Dimensions') as unknown as shapes.PiDimensionKeyDetail[];
  }

}

export class PIResponsesFetchResourceMetrics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PiGetResourceMetricsRequest) {
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
          ServiceType: this.__input.serviceType,
          Identifier: this.__input.identifier,
          MetricQueries: this.__input.metricQueries,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          PeriodInSeconds: this.__input.periodInSeconds,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceMetrics.AlignedStartTime', props);
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
          ServiceType: this.__input.serviceType,
          Identifier: this.__input.identifier,
          MetricQueries: this.__input.metricQueries,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          PeriodInSeconds: this.__input.periodInSeconds,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceMetrics.AlignedEndTime', props);
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
          ServiceType: this.__input.serviceType,
          Identifier: this.__input.identifier,
          MetricQueries: this.__input.metricQueries,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          PeriodInSeconds: this.__input.periodInSeconds,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceMetrics.Identifier', props);
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
          ServiceType: this.__input.serviceType,
          Identifier: this.__input.identifier,
          MetricQueries: this.__input.metricQueries,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          PeriodInSeconds: this.__input.periodInSeconds,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceMetrics.MetricList', props);
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
          ServiceType: this.__input.serviceType,
          Identifier: this.__input.identifier,
          MetricQueries: this.__input.metricQueries,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          PeriodInSeconds: this.__input.periodInSeconds,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceMetrics.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

