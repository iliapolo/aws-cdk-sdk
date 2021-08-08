import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class DevOpsGuruClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addNotificationChannel(input: shapes.DevOpsGuruAddNotificationChannelRequest): DevOpsGuruResponsesAddNotificationChannel {
    return new DevOpsGuruResponsesAddNotificationChannel(this, this.__resources, input);
  }

  public describeAccountHealth(): DevOpsGuruResponsesDescribeAccountHealth {
    return new DevOpsGuruResponsesDescribeAccountHealth(this, this.__resources);
  }

  public describeAccountOverview(input: shapes.DevOpsGuruDescribeAccountOverviewRequest): DevOpsGuruResponsesDescribeAccountOverview {
    return new DevOpsGuruResponsesDescribeAccountOverview(this, this.__resources, input);
  }

  public describeAnomaly(input: shapes.DevOpsGuruDescribeAnomalyRequest): DevOpsGuruResponsesDescribeAnomaly {
    return new DevOpsGuruResponsesDescribeAnomaly(this, this.__resources, input);
  }

  public describeFeedback(input: shapes.DevOpsGuruDescribeFeedbackRequest): DevOpsGuruResponsesDescribeFeedback {
    return new DevOpsGuruResponsesDescribeFeedback(this, this.__resources, input);
  }

  public describeInsight(input: shapes.DevOpsGuruDescribeInsightRequest): DevOpsGuruResponsesDescribeInsight {
    return new DevOpsGuruResponsesDescribeInsight(this, this.__resources, input);
  }

  public describeResourceCollectionHealth(input: shapes.DevOpsGuruDescribeResourceCollectionHealthRequest): DevOpsGuruResponsesDescribeResourceCollectionHealth {
    return new DevOpsGuruResponsesDescribeResourceCollectionHealth(this, this.__resources, input);
  }

  public describeServiceIntegration(): DevOpsGuruResponsesDescribeServiceIntegration {
    return new DevOpsGuruResponsesDescribeServiceIntegration(this, this.__resources);
  }

  public fetchCostEstimation(input: shapes.DevOpsGuruGetCostEstimationRequest): DevOpsGuruResponsesFetchCostEstimation {
    return new DevOpsGuruResponsesFetchCostEstimation(this, this.__resources, input);
  }

  public fetchResourceCollection(input: shapes.DevOpsGuruGetResourceCollectionRequest): DevOpsGuruResponsesFetchResourceCollection {
    return new DevOpsGuruResponsesFetchResourceCollection(this, this.__resources, input);
  }

  public listAnomaliesForInsight(input: shapes.DevOpsGuruListAnomaliesForInsightRequest): DevOpsGuruResponsesListAnomaliesForInsight {
    return new DevOpsGuruResponsesListAnomaliesForInsight(this, this.__resources, input);
  }

  public listEvents(input: shapes.DevOpsGuruListEventsRequest): DevOpsGuruResponsesListEvents {
    return new DevOpsGuruResponsesListEvents(this, this.__resources, input);
  }

  public listInsights(input: shapes.DevOpsGuruListInsightsRequest): DevOpsGuruResponsesListInsights {
    return new DevOpsGuruResponsesListInsights(this, this.__resources, input);
  }

  public listNotificationChannels(input: shapes.DevOpsGuruListNotificationChannelsRequest): DevOpsGuruResponsesListNotificationChannels {
    return new DevOpsGuruResponsesListNotificationChannels(this, this.__resources, input);
  }

  public listRecommendations(input: shapes.DevOpsGuruListRecommendationsRequest): DevOpsGuruResponsesListRecommendations {
    return new DevOpsGuruResponsesListRecommendations(this, this.__resources, input);
  }

  public putFeedback(input: shapes.DevOpsGuruPutFeedbackRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putFeedback',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.PutFeedback'),
        parameters: {
          InsightFeedback: {
            Id: input.insightFeedback?.id,
            Feedback: input.insightFeedback?.feedback,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutFeedback', props);
  }

  public removeNotificationChannel(input: shapes.DevOpsGuruRemoveNotificationChannelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeNotificationChannel',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.RemoveNotificationChannel'),
        parameters: {
          Id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RemoveNotificationChannel', props);
  }

  public searchInsights(input: shapes.DevOpsGuruSearchInsightsRequest): DevOpsGuruResponsesSearchInsights {
    return new DevOpsGuruResponsesSearchInsights(this, this.__resources, input);
  }

  public startCostEstimation(input: shapes.DevOpsGuruStartCostEstimationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startCostEstimation',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.StartCostEstimation'),
        parameters: {
          ResourceCollection: {
            CloudFormation: {
              StackNames: input.resourceCollection.cloudFormation?.stackNames,
            },
          },
          ClientToken: input.clientToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartCostEstimation', props);
  }

  public updateResourceCollection(input: shapes.DevOpsGuruUpdateResourceCollectionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResourceCollection',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.UpdateResourceCollection'),
        parameters: {
          Action: input.action,
          ResourceCollection: {
            CloudFormation: {
              StackNames: input.resourceCollection.cloudFormation?.stackNames,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateResourceCollection', props);
  }

  public updateServiceIntegration(input: shapes.DevOpsGuruUpdateServiceIntegrationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceIntegration',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.UpdateServiceIntegration'),
        parameters: {
          ServiceIntegration: {
            OpsCenter: {
              OptInStatus: input.serviceIntegration.opsCenter?.optInStatus,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateServiceIntegration', props);
  }

}

export class DevOpsGuruResponsesAddNotificationChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruAddNotificationChannelRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addNotificationChannel',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.AddNotificationChannel.Id'),
        outputPath: 'Id',
        parameters: {
          Config: {
            Sns: {
              TopicArn: this.__input.config.sns.topicArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddNotificationChannel.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

}

export class DevOpsGuruResponsesDescribeAccountHealth {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get openReactiveInsights(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountHealth',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAccountHealth.OpenReactiveInsights'),
        outputPath: 'OpenReactiveInsights',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountHealth.OpenReactiveInsights', props);
    return resource.getResponseField('OpenReactiveInsights') as unknown as number;
  }

  public get openProactiveInsights(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountHealth',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAccountHealth.OpenProactiveInsights'),
        outputPath: 'OpenProactiveInsights',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountHealth.OpenProactiveInsights', props);
    return resource.getResponseField('OpenProactiveInsights') as unknown as number;
  }

  public get metricsAnalyzed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountHealth',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAccountHealth.MetricsAnalyzed'),
        outputPath: 'MetricsAnalyzed',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountHealth.MetricsAnalyzed', props);
    return resource.getResponseField('MetricsAnalyzed') as unknown as number;
  }

  public get resourceHours(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountHealth',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAccountHealth.ResourceHours'),
        outputPath: 'ResourceHours',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountHealth.ResourceHours', props);
    return resource.getResponseField('ResourceHours') as unknown as number;
  }

}

export class DevOpsGuruResponsesDescribeAccountOverview {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeAccountOverviewRequest) {
  }

  public get reactiveInsights(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountOverview',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAccountOverview.ReactiveInsights'),
        outputPath: 'ReactiveInsights',
        parameters: {
          FromTime: this.__input.fromTime,
          ToTime: this.__input.toTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountOverview.ReactiveInsights', props);
    return resource.getResponseField('ReactiveInsights') as unknown as number;
  }

  public get proactiveInsights(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountOverview',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAccountOverview.ProactiveInsights'),
        outputPath: 'ProactiveInsights',
        parameters: {
          FromTime: this.__input.fromTime,
          ToTime: this.__input.toTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountOverview.ProactiveInsights', props);
    return resource.getResponseField('ProactiveInsights') as unknown as number;
  }

  public get meanTimeToRecoverInMilliseconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountOverview',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAccountOverview.MeanTimeToRecoverInMilliseconds'),
        outputPath: 'MeanTimeToRecoverInMilliseconds',
        parameters: {
          FromTime: this.__input.fromTime,
          ToTime: this.__input.toTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountOverview.MeanTimeToRecoverInMilliseconds', props);
    return resource.getResponseField('MeanTimeToRecoverInMilliseconds') as unknown as number;
  }

}

export class DevOpsGuruResponsesDescribeAnomaly {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeAnomalyRequest) {
  }

  public get proactiveAnomaly(): DevOpsGuruResponsesDescribeAnomalyProactiveAnomaly {
    return new DevOpsGuruResponsesDescribeAnomalyProactiveAnomaly(this.__scope, this.__resources, this.__input);
  }

  public get reactiveAnomaly(): DevOpsGuruResponsesDescribeAnomalyReactiveAnomaly {
    return new DevOpsGuruResponsesDescribeAnomalyReactiveAnomaly(this.__scope, this.__resources, this.__input);
  }

}

export class DevOpsGuruResponsesDescribeAnomalyProactiveAnomaly {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeAnomalyRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomaly',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAnomaly.ProactiveAnomaly.Id'),
        outputPath: 'ProactiveAnomaly.Id',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomaly.ProactiveAnomaly.Id', props);
    return resource.getResponseField('ProactiveAnomaly.Id') as unknown as string;
  }

  public get severity(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomaly',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAnomaly.ProactiveAnomaly.Severity'),
        outputPath: 'ProactiveAnomaly.Severity',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomaly.ProactiveAnomaly.Severity', props);
    return resource.getResponseField('ProactiveAnomaly.Severity') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomaly',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAnomaly.ProactiveAnomaly.Status'),
        outputPath: 'ProactiveAnomaly.Status',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomaly.ProactiveAnomaly.Status', props);
    return resource.getResponseField('ProactiveAnomaly.Status') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomaly',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAnomaly.ProactiveAnomaly.UpdateTime'),
        outputPath: 'ProactiveAnomaly.UpdateTime',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomaly.ProactiveAnomaly.UpdateTime', props);
    return resource.getResponseField('ProactiveAnomaly.UpdateTime') as unknown as string;
  }

  public get anomalyTimeRange(): DevOpsGuruResponsesDescribeAnomalyProactiveAnomalyAnomalyTimeRange {
    return new DevOpsGuruResponsesDescribeAnomalyProactiveAnomalyAnomalyTimeRange(this.__scope, this.__resources, this.__input);
  }

  public get anomalyReportedTimeRange(): DevOpsGuruResponsesDescribeAnomalyProactiveAnomalyAnomalyReportedTimeRange {
    return new DevOpsGuruResponsesDescribeAnomalyProactiveAnomalyAnomalyReportedTimeRange(this.__scope, this.__resources, this.__input);
  }

  public get predictionTimeRange(): DevOpsGuruResponsesDescribeAnomalyProactiveAnomalyPredictionTimeRange {
    return new DevOpsGuruResponsesDescribeAnomalyProactiveAnomalyPredictionTimeRange(this.__scope, this.__resources, this.__input);
  }

  public get sourceDetails(): DevOpsGuruResponsesDescribeAnomalyProactiveAnomalySourceDetails {
    return new DevOpsGuruResponsesDescribeAnomalyProactiveAnomalySourceDetails(this.__scope, this.__resources, this.__input);
  }

  public get associatedInsightId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomaly',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAnomaly.ProactiveAnomaly.AssociatedInsightId'),
        outputPath: 'ProactiveAnomaly.AssociatedInsightId',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomaly.ProactiveAnomaly.AssociatedInsightId', props);
    return resource.getResponseField('ProactiveAnomaly.AssociatedInsightId') as unknown as string;
  }

  public get resourceCollection(): DevOpsGuruResponsesDescribeAnomalyProactiveAnomalyResourceCollection {
    return new DevOpsGuruResponsesDescribeAnomalyProactiveAnomalyResourceCollection(this.__scope, this.__resources, this.__input);
  }

  public get limit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomaly',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAnomaly.ProactiveAnomaly.Limit'),
        outputPath: 'ProactiveAnomaly.Limit',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomaly.ProactiveAnomaly.Limit', props);
    return resource.getResponseField('ProactiveAnomaly.Limit') as unknown as number;
  }

}

export class DevOpsGuruResponsesDescribeAnomalyProactiveAnomalyAnomalyTimeRange {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeAnomalyRequest) {
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomaly',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAnomaly.ProactiveAnomaly.AnomalyTimeRange.StartTime'),
        outputPath: 'ProactiveAnomaly.AnomalyTimeRange.StartTime',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomaly.ProactiveAnomaly.AnomalyTimeRange.StartTime', props);
    return resource.getResponseField('ProactiveAnomaly.AnomalyTimeRange.StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomaly',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAnomaly.ProactiveAnomaly.AnomalyTimeRange.EndTime'),
        outputPath: 'ProactiveAnomaly.AnomalyTimeRange.EndTime',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomaly.ProactiveAnomaly.AnomalyTimeRange.EndTime', props);
    return resource.getResponseField('ProactiveAnomaly.AnomalyTimeRange.EndTime') as unknown as string;
  }

}

export class DevOpsGuruResponsesDescribeAnomalyProactiveAnomalyAnomalyReportedTimeRange {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeAnomalyRequest) {
  }

  public get openTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomaly',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAnomaly.ProactiveAnomaly.AnomalyReportedTimeRange.OpenTime'),
        outputPath: 'ProactiveAnomaly.AnomalyReportedTimeRange.OpenTime',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomaly.ProactiveAnomaly.AnomalyReportedTimeRange.OpenTime', props);
    return resource.getResponseField('ProactiveAnomaly.AnomalyReportedTimeRange.OpenTime') as unknown as string;
  }

  public get closeTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomaly',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAnomaly.ProactiveAnomaly.AnomalyReportedTimeRange.CloseTime'),
        outputPath: 'ProactiveAnomaly.AnomalyReportedTimeRange.CloseTime',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomaly.ProactiveAnomaly.AnomalyReportedTimeRange.CloseTime', props);
    return resource.getResponseField('ProactiveAnomaly.AnomalyReportedTimeRange.CloseTime') as unknown as string;
  }

}

export class DevOpsGuruResponsesDescribeAnomalyProactiveAnomalyPredictionTimeRange {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeAnomalyRequest) {
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomaly',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAnomaly.ProactiveAnomaly.PredictionTimeRange.StartTime'),
        outputPath: 'ProactiveAnomaly.PredictionTimeRange.StartTime',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomaly.ProactiveAnomaly.PredictionTimeRange.StartTime', props);
    return resource.getResponseField('ProactiveAnomaly.PredictionTimeRange.StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomaly',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAnomaly.ProactiveAnomaly.PredictionTimeRange.EndTime'),
        outputPath: 'ProactiveAnomaly.PredictionTimeRange.EndTime',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomaly.ProactiveAnomaly.PredictionTimeRange.EndTime', props);
    return resource.getResponseField('ProactiveAnomaly.PredictionTimeRange.EndTime') as unknown as string;
  }

}

export class DevOpsGuruResponsesDescribeAnomalyProactiveAnomalySourceDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeAnomalyRequest) {
  }

  public get cloudWatchMetrics(): shapes.DevOpsGuruCloudWatchMetricsDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomaly',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAnomaly.ProactiveAnomaly.SourceDetails.CloudWatchMetrics'),
        outputPath: 'ProactiveAnomaly.SourceDetails.CloudWatchMetrics',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomaly.ProactiveAnomaly.SourceDetails.CloudWatchMetrics', props);
    return resource.getResponseField('ProactiveAnomaly.SourceDetails.CloudWatchMetrics') as unknown as shapes.DevOpsGuruCloudWatchMetricsDetail[];
  }

}

export class DevOpsGuruResponsesDescribeAnomalyProactiveAnomalyResourceCollection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeAnomalyRequest) {
  }

  public get cloudFormation(): DevOpsGuruResponsesDescribeAnomalyProactiveAnomalyResourceCollectionCloudFormation {
    return new DevOpsGuruResponsesDescribeAnomalyProactiveAnomalyResourceCollectionCloudFormation(this.__scope, this.__resources, this.__input);
  }

}

export class DevOpsGuruResponsesDescribeAnomalyProactiveAnomalyResourceCollectionCloudFormation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeAnomalyRequest) {
  }

  public get stackNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomaly',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAnomaly.ProactiveAnomaly.ResourceCollection.CloudFormation.StackNames'),
        outputPath: 'ProactiveAnomaly.ResourceCollection.CloudFormation.StackNames',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomaly.ProactiveAnomaly.ResourceCollection.CloudFormation.StackNames', props);
    return resource.getResponseField('ProactiveAnomaly.ResourceCollection.CloudFormation.StackNames') as unknown as string[];
  }

}

export class DevOpsGuruResponsesDescribeAnomalyReactiveAnomaly {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeAnomalyRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomaly',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAnomaly.ReactiveAnomaly.Id'),
        outputPath: 'ReactiveAnomaly.Id',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomaly.ReactiveAnomaly.Id', props);
    return resource.getResponseField('ReactiveAnomaly.Id') as unknown as string;
  }

  public get severity(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomaly',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAnomaly.ReactiveAnomaly.Severity'),
        outputPath: 'ReactiveAnomaly.Severity',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomaly.ReactiveAnomaly.Severity', props);
    return resource.getResponseField('ReactiveAnomaly.Severity') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomaly',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAnomaly.ReactiveAnomaly.Status'),
        outputPath: 'ReactiveAnomaly.Status',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomaly.ReactiveAnomaly.Status', props);
    return resource.getResponseField('ReactiveAnomaly.Status') as unknown as string;
  }

  public get anomalyTimeRange(): DevOpsGuruResponsesDescribeAnomalyReactiveAnomalyAnomalyTimeRange {
    return new DevOpsGuruResponsesDescribeAnomalyReactiveAnomalyAnomalyTimeRange(this.__scope, this.__resources, this.__input);
  }

  public get anomalyReportedTimeRange(): DevOpsGuruResponsesDescribeAnomalyReactiveAnomalyAnomalyReportedTimeRange {
    return new DevOpsGuruResponsesDescribeAnomalyReactiveAnomalyAnomalyReportedTimeRange(this.__scope, this.__resources, this.__input);
  }

  public get sourceDetails(): DevOpsGuruResponsesDescribeAnomalyReactiveAnomalySourceDetails {
    return new DevOpsGuruResponsesDescribeAnomalyReactiveAnomalySourceDetails(this.__scope, this.__resources, this.__input);
  }

  public get associatedInsightId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomaly',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAnomaly.ReactiveAnomaly.AssociatedInsightId'),
        outputPath: 'ReactiveAnomaly.AssociatedInsightId',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomaly.ReactiveAnomaly.AssociatedInsightId', props);
    return resource.getResponseField('ReactiveAnomaly.AssociatedInsightId') as unknown as string;
  }

  public get resourceCollection(): DevOpsGuruResponsesDescribeAnomalyReactiveAnomalyResourceCollection {
    return new DevOpsGuruResponsesDescribeAnomalyReactiveAnomalyResourceCollection(this.__scope, this.__resources, this.__input);
  }

}

export class DevOpsGuruResponsesDescribeAnomalyReactiveAnomalyAnomalyTimeRange {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeAnomalyRequest) {
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomaly',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAnomaly.ReactiveAnomaly.AnomalyTimeRange.StartTime'),
        outputPath: 'ReactiveAnomaly.AnomalyTimeRange.StartTime',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomaly.ReactiveAnomaly.AnomalyTimeRange.StartTime', props);
    return resource.getResponseField('ReactiveAnomaly.AnomalyTimeRange.StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomaly',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAnomaly.ReactiveAnomaly.AnomalyTimeRange.EndTime'),
        outputPath: 'ReactiveAnomaly.AnomalyTimeRange.EndTime',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomaly.ReactiveAnomaly.AnomalyTimeRange.EndTime', props);
    return resource.getResponseField('ReactiveAnomaly.AnomalyTimeRange.EndTime') as unknown as string;
  }

}

export class DevOpsGuruResponsesDescribeAnomalyReactiveAnomalyAnomalyReportedTimeRange {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeAnomalyRequest) {
  }

  public get openTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomaly',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAnomaly.ReactiveAnomaly.AnomalyReportedTimeRange.OpenTime'),
        outputPath: 'ReactiveAnomaly.AnomalyReportedTimeRange.OpenTime',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomaly.ReactiveAnomaly.AnomalyReportedTimeRange.OpenTime', props);
    return resource.getResponseField('ReactiveAnomaly.AnomalyReportedTimeRange.OpenTime') as unknown as string;
  }

  public get closeTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomaly',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAnomaly.ReactiveAnomaly.AnomalyReportedTimeRange.CloseTime'),
        outputPath: 'ReactiveAnomaly.AnomalyReportedTimeRange.CloseTime',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomaly.ReactiveAnomaly.AnomalyReportedTimeRange.CloseTime', props);
    return resource.getResponseField('ReactiveAnomaly.AnomalyReportedTimeRange.CloseTime') as unknown as string;
  }

}

export class DevOpsGuruResponsesDescribeAnomalyReactiveAnomalySourceDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeAnomalyRequest) {
  }

  public get cloudWatchMetrics(): shapes.DevOpsGuruCloudWatchMetricsDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomaly',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAnomaly.ReactiveAnomaly.SourceDetails.CloudWatchMetrics'),
        outputPath: 'ReactiveAnomaly.SourceDetails.CloudWatchMetrics',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomaly.ReactiveAnomaly.SourceDetails.CloudWatchMetrics', props);
    return resource.getResponseField('ReactiveAnomaly.SourceDetails.CloudWatchMetrics') as unknown as shapes.DevOpsGuruCloudWatchMetricsDetail[];
  }

}

export class DevOpsGuruResponsesDescribeAnomalyReactiveAnomalyResourceCollection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeAnomalyRequest) {
  }

  public get cloudFormation(): DevOpsGuruResponsesDescribeAnomalyReactiveAnomalyResourceCollectionCloudFormation {
    return new DevOpsGuruResponsesDescribeAnomalyReactiveAnomalyResourceCollectionCloudFormation(this.__scope, this.__resources, this.__input);
  }

}

export class DevOpsGuruResponsesDescribeAnomalyReactiveAnomalyResourceCollectionCloudFormation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeAnomalyRequest) {
  }

  public get stackNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomaly',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeAnomaly.ReactiveAnomaly.ResourceCollection.CloudFormation.StackNames'),
        outputPath: 'ReactiveAnomaly.ResourceCollection.CloudFormation.StackNames',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomaly.ReactiveAnomaly.ResourceCollection.CloudFormation.StackNames', props);
    return resource.getResponseField('ReactiveAnomaly.ResourceCollection.CloudFormation.StackNames') as unknown as string[];
  }

}

export class DevOpsGuruResponsesDescribeFeedback {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeFeedbackRequest) {
  }

  public get insightFeedback(): DevOpsGuruResponsesDescribeFeedbackInsightFeedback {
    return new DevOpsGuruResponsesDescribeFeedbackInsightFeedback(this.__scope, this.__resources, this.__input);
  }

}

export class DevOpsGuruResponsesDescribeFeedbackInsightFeedback {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeFeedbackRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFeedback',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeFeedback.InsightFeedback.Id'),
        outputPath: 'InsightFeedback.Id',
        parameters: {
          InsightId: this.__input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFeedback.InsightFeedback.Id', props);
    return resource.getResponseField('InsightFeedback.Id') as unknown as string;
  }

  public get feedback(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFeedback',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeFeedback.InsightFeedback.Feedback'),
        outputPath: 'InsightFeedback.Feedback',
        parameters: {
          InsightId: this.__input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFeedback.InsightFeedback.Feedback', props);
    return resource.getResponseField('InsightFeedback.Feedback') as unknown as string;
  }

}

export class DevOpsGuruResponsesDescribeInsight {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeInsightRequest) {
  }

  public get proactiveInsight(): DevOpsGuruResponsesDescribeInsightProactiveInsight {
    return new DevOpsGuruResponsesDescribeInsightProactiveInsight(this.__scope, this.__resources, this.__input);
  }

  public get reactiveInsight(): DevOpsGuruResponsesDescribeInsightReactiveInsight {
    return new DevOpsGuruResponsesDescribeInsightReactiveInsight(this.__scope, this.__resources, this.__input);
  }

}

export class DevOpsGuruResponsesDescribeInsightProactiveInsight {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeInsightRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInsight',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeInsight.ProactiveInsight.Id'),
        outputPath: 'ProactiveInsight.Id',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInsight.ProactiveInsight.Id', props);
    return resource.getResponseField('ProactiveInsight.Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInsight',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeInsight.ProactiveInsight.Name'),
        outputPath: 'ProactiveInsight.Name',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInsight.ProactiveInsight.Name', props);
    return resource.getResponseField('ProactiveInsight.Name') as unknown as string;
  }

  public get severity(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInsight',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeInsight.ProactiveInsight.Severity'),
        outputPath: 'ProactiveInsight.Severity',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInsight.ProactiveInsight.Severity', props);
    return resource.getResponseField('ProactiveInsight.Severity') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInsight',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeInsight.ProactiveInsight.Status'),
        outputPath: 'ProactiveInsight.Status',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInsight.ProactiveInsight.Status', props);
    return resource.getResponseField('ProactiveInsight.Status') as unknown as string;
  }

  public get insightTimeRange(): DevOpsGuruResponsesDescribeInsightProactiveInsightInsightTimeRange {
    return new DevOpsGuruResponsesDescribeInsightProactiveInsightInsightTimeRange(this.__scope, this.__resources, this.__input);
  }

  public get predictionTimeRange(): DevOpsGuruResponsesDescribeInsightProactiveInsightPredictionTimeRange {
    return new DevOpsGuruResponsesDescribeInsightProactiveInsightPredictionTimeRange(this.__scope, this.__resources, this.__input);
  }

  public get resourceCollection(): DevOpsGuruResponsesDescribeInsightProactiveInsightResourceCollection {
    return new DevOpsGuruResponsesDescribeInsightProactiveInsightResourceCollection(this.__scope, this.__resources, this.__input);
  }

  public get ssmOpsItemId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInsight',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeInsight.ProactiveInsight.SsmOpsItemId'),
        outputPath: 'ProactiveInsight.SsmOpsItemId',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInsight.ProactiveInsight.SsmOpsItemId', props);
    return resource.getResponseField('ProactiveInsight.SsmOpsItemId') as unknown as string;
  }

}

export class DevOpsGuruResponsesDescribeInsightProactiveInsightInsightTimeRange {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeInsightRequest) {
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInsight',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeInsight.ProactiveInsight.InsightTimeRange.StartTime'),
        outputPath: 'ProactiveInsight.InsightTimeRange.StartTime',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInsight.ProactiveInsight.InsightTimeRange.StartTime', props);
    return resource.getResponseField('ProactiveInsight.InsightTimeRange.StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInsight',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeInsight.ProactiveInsight.InsightTimeRange.EndTime'),
        outputPath: 'ProactiveInsight.InsightTimeRange.EndTime',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInsight.ProactiveInsight.InsightTimeRange.EndTime', props);
    return resource.getResponseField('ProactiveInsight.InsightTimeRange.EndTime') as unknown as string;
  }

}

export class DevOpsGuruResponsesDescribeInsightProactiveInsightPredictionTimeRange {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeInsightRequest) {
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInsight',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeInsight.ProactiveInsight.PredictionTimeRange.StartTime'),
        outputPath: 'ProactiveInsight.PredictionTimeRange.StartTime',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInsight.ProactiveInsight.PredictionTimeRange.StartTime', props);
    return resource.getResponseField('ProactiveInsight.PredictionTimeRange.StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInsight',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeInsight.ProactiveInsight.PredictionTimeRange.EndTime'),
        outputPath: 'ProactiveInsight.PredictionTimeRange.EndTime',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInsight.ProactiveInsight.PredictionTimeRange.EndTime', props);
    return resource.getResponseField('ProactiveInsight.PredictionTimeRange.EndTime') as unknown as string;
  }

}

export class DevOpsGuruResponsesDescribeInsightProactiveInsightResourceCollection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeInsightRequest) {
  }

  public get cloudFormation(): DevOpsGuruResponsesDescribeInsightProactiveInsightResourceCollectionCloudFormation {
    return new DevOpsGuruResponsesDescribeInsightProactiveInsightResourceCollectionCloudFormation(this.__scope, this.__resources, this.__input);
  }

}

export class DevOpsGuruResponsesDescribeInsightProactiveInsightResourceCollectionCloudFormation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeInsightRequest) {
  }

  public get stackNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInsight',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeInsight.ProactiveInsight.ResourceCollection.CloudFormation.StackNames'),
        outputPath: 'ProactiveInsight.ResourceCollection.CloudFormation.StackNames',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInsight.ProactiveInsight.ResourceCollection.CloudFormation.StackNames', props);
    return resource.getResponseField('ProactiveInsight.ResourceCollection.CloudFormation.StackNames') as unknown as string[];
  }

}

export class DevOpsGuruResponsesDescribeInsightReactiveInsight {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeInsightRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInsight',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeInsight.ReactiveInsight.Id'),
        outputPath: 'ReactiveInsight.Id',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInsight.ReactiveInsight.Id', props);
    return resource.getResponseField('ReactiveInsight.Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInsight',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeInsight.ReactiveInsight.Name'),
        outputPath: 'ReactiveInsight.Name',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInsight.ReactiveInsight.Name', props);
    return resource.getResponseField('ReactiveInsight.Name') as unknown as string;
  }

  public get severity(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInsight',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeInsight.ReactiveInsight.Severity'),
        outputPath: 'ReactiveInsight.Severity',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInsight.ReactiveInsight.Severity', props);
    return resource.getResponseField('ReactiveInsight.Severity') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInsight',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeInsight.ReactiveInsight.Status'),
        outputPath: 'ReactiveInsight.Status',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInsight.ReactiveInsight.Status', props);
    return resource.getResponseField('ReactiveInsight.Status') as unknown as string;
  }

  public get insightTimeRange(): DevOpsGuruResponsesDescribeInsightReactiveInsightInsightTimeRange {
    return new DevOpsGuruResponsesDescribeInsightReactiveInsightInsightTimeRange(this.__scope, this.__resources, this.__input);
  }

  public get resourceCollection(): DevOpsGuruResponsesDescribeInsightReactiveInsightResourceCollection {
    return new DevOpsGuruResponsesDescribeInsightReactiveInsightResourceCollection(this.__scope, this.__resources, this.__input);
  }

  public get ssmOpsItemId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInsight',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeInsight.ReactiveInsight.SsmOpsItemId'),
        outputPath: 'ReactiveInsight.SsmOpsItemId',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInsight.ReactiveInsight.SsmOpsItemId', props);
    return resource.getResponseField('ReactiveInsight.SsmOpsItemId') as unknown as string;
  }

}

export class DevOpsGuruResponsesDescribeInsightReactiveInsightInsightTimeRange {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeInsightRequest) {
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInsight',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeInsight.ReactiveInsight.InsightTimeRange.StartTime'),
        outputPath: 'ReactiveInsight.InsightTimeRange.StartTime',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInsight.ReactiveInsight.InsightTimeRange.StartTime', props);
    return resource.getResponseField('ReactiveInsight.InsightTimeRange.StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInsight',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeInsight.ReactiveInsight.InsightTimeRange.EndTime'),
        outputPath: 'ReactiveInsight.InsightTimeRange.EndTime',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInsight.ReactiveInsight.InsightTimeRange.EndTime', props);
    return resource.getResponseField('ReactiveInsight.InsightTimeRange.EndTime') as unknown as string;
  }

}

export class DevOpsGuruResponsesDescribeInsightReactiveInsightResourceCollection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeInsightRequest) {
  }

  public get cloudFormation(): DevOpsGuruResponsesDescribeInsightReactiveInsightResourceCollectionCloudFormation {
    return new DevOpsGuruResponsesDescribeInsightReactiveInsightResourceCollectionCloudFormation(this.__scope, this.__resources, this.__input);
  }

}

export class DevOpsGuruResponsesDescribeInsightReactiveInsightResourceCollectionCloudFormation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeInsightRequest) {
  }

  public get stackNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInsight',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeInsight.ReactiveInsight.ResourceCollection.CloudFormation.StackNames'),
        outputPath: 'ReactiveInsight.ResourceCollection.CloudFormation.StackNames',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInsight.ReactiveInsight.ResourceCollection.CloudFormation.StackNames', props);
    return resource.getResponseField('ReactiveInsight.ResourceCollection.CloudFormation.StackNames') as unknown as string[];
  }

}

export class DevOpsGuruResponsesDescribeResourceCollectionHealth {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruDescribeResourceCollectionHealthRequest) {
  }

  public get cloudFormation(): shapes.DevOpsGuruCloudFormationHealth[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeResourceCollectionHealth',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeResourceCollectionHealth.CloudFormation'),
        outputPath: 'CloudFormation',
        parameters: {
          ResourceCollectionType: this.__input.resourceCollectionType,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeResourceCollectionHealth.CloudFormation', props);
    return resource.getResponseField('CloudFormation') as unknown as shapes.DevOpsGuruCloudFormationHealth[];
  }

  public get service(): shapes.DevOpsGuruServiceHealth[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeResourceCollectionHealth',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeResourceCollectionHealth.Service'),
        outputPath: 'Service',
        parameters: {
          ResourceCollectionType: this.__input.resourceCollectionType,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeResourceCollectionHealth.Service', props);
    return resource.getResponseField('Service') as unknown as shapes.DevOpsGuruServiceHealth[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeResourceCollectionHealth',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeResourceCollectionHealth.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceCollectionType: this.__input.resourceCollectionType,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeResourceCollectionHealth.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DevOpsGuruResponsesDescribeServiceIntegration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get serviceIntegration(): DevOpsGuruResponsesDescribeServiceIntegrationServiceIntegration {
    return new DevOpsGuruResponsesDescribeServiceIntegrationServiceIntegration(this.__scope, this.__resources);
  }

}

export class DevOpsGuruResponsesDescribeServiceIntegrationServiceIntegration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get opsCenter(): DevOpsGuruResponsesDescribeServiceIntegrationServiceIntegrationOpsCenter {
    return new DevOpsGuruResponsesDescribeServiceIntegrationServiceIntegrationOpsCenter(this.__scope, this.__resources);
  }

}

export class DevOpsGuruResponsesDescribeServiceIntegrationServiceIntegrationOpsCenter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get optInStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServiceIntegration',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.DescribeServiceIntegration.ServiceIntegration.OpsCenter.OptInStatus'),
        outputPath: 'ServiceIntegration.OpsCenter.OptInStatus',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServiceIntegration.ServiceIntegration.OpsCenter.OptInStatus', props);
    return resource.getResponseField('ServiceIntegration.OpsCenter.OptInStatus') as unknown as string;
  }

}

export class DevOpsGuruResponsesFetchCostEstimation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruGetCostEstimationRequest) {
  }

  public get resourceCollection(): DevOpsGuruResponsesFetchCostEstimationResourceCollection {
    return new DevOpsGuruResponsesFetchCostEstimationResourceCollection(this.__scope, this.__resources, this.__input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCostEstimation',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.GetCostEstimation.Status'),
        outputPath: 'Status',
        parameters: {
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCostEstimation.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get costs(): shapes.DevOpsGuruServiceResourceCost[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCostEstimation',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.GetCostEstimation.Costs'),
        outputPath: 'Costs',
        parameters: {
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCostEstimation.Costs', props);
    return resource.getResponseField('Costs') as unknown as shapes.DevOpsGuruServiceResourceCost[];
  }

  public get timeRange(): DevOpsGuruResponsesFetchCostEstimationTimeRange {
    return new DevOpsGuruResponsesFetchCostEstimationTimeRange(this.__scope, this.__resources, this.__input);
  }

  public get totalCost(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCostEstimation',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.GetCostEstimation.TotalCost'),
        outputPath: 'TotalCost',
        parameters: {
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCostEstimation.TotalCost', props);
    return resource.getResponseField('TotalCost') as unknown as number;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCostEstimation',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.GetCostEstimation.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCostEstimation.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DevOpsGuruResponsesFetchCostEstimationResourceCollection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruGetCostEstimationRequest) {
  }

  public get cloudFormation(): DevOpsGuruResponsesFetchCostEstimationResourceCollectionCloudFormation {
    return new DevOpsGuruResponsesFetchCostEstimationResourceCollectionCloudFormation(this.__scope, this.__resources, this.__input);
  }

}

export class DevOpsGuruResponsesFetchCostEstimationResourceCollectionCloudFormation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruGetCostEstimationRequest) {
  }

  public get stackNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCostEstimation',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.GetCostEstimation.ResourceCollection.CloudFormation.StackNames'),
        outputPath: 'ResourceCollection.CloudFormation.StackNames',
        parameters: {
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCostEstimation.ResourceCollection.CloudFormation.StackNames', props);
    return resource.getResponseField('ResourceCollection.CloudFormation.StackNames') as unknown as string[];
  }

}

export class DevOpsGuruResponsesFetchCostEstimationTimeRange {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruGetCostEstimationRequest) {
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCostEstimation',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.GetCostEstimation.TimeRange.StartTime'),
        outputPath: 'TimeRange.StartTime',
        parameters: {
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCostEstimation.TimeRange.StartTime', props);
    return resource.getResponseField('TimeRange.StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCostEstimation',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.GetCostEstimation.TimeRange.EndTime'),
        outputPath: 'TimeRange.EndTime',
        parameters: {
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCostEstimation.TimeRange.EndTime', props);
    return resource.getResponseField('TimeRange.EndTime') as unknown as string;
  }

}

export class DevOpsGuruResponsesFetchResourceCollection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruGetResourceCollectionRequest) {
  }

  public get resourceCollection(): DevOpsGuruResponsesFetchResourceCollectionResourceCollection {
    return new DevOpsGuruResponsesFetchResourceCollectionResourceCollection(this.__scope, this.__resources, this.__input);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceCollection',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.GetResourceCollection.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceCollectionType: this.__input.resourceCollectionType,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceCollection.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DevOpsGuruResponsesFetchResourceCollectionResourceCollection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruGetResourceCollectionRequest) {
  }

  public get cloudFormation(): DevOpsGuruResponsesFetchResourceCollectionResourceCollectionCloudFormation {
    return new DevOpsGuruResponsesFetchResourceCollectionResourceCollectionCloudFormation(this.__scope, this.__resources, this.__input);
  }

}

export class DevOpsGuruResponsesFetchResourceCollectionResourceCollectionCloudFormation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruGetResourceCollectionRequest) {
  }

  public get stackNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceCollection',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.GetResourceCollection.ResourceCollection.CloudFormation.StackNames'),
        outputPath: 'ResourceCollection.CloudFormation.StackNames',
        parameters: {
          ResourceCollectionType: this.__input.resourceCollectionType,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceCollection.ResourceCollection.CloudFormation.StackNames', props);
    return resource.getResponseField('ResourceCollection.CloudFormation.StackNames') as unknown as string[];
  }

}

export class DevOpsGuruResponsesListAnomaliesForInsight {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruListAnomaliesForInsightRequest) {
  }

  public get proactiveAnomalies(): shapes.DevOpsGuruProactiveAnomalySummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnomaliesForInsight',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.ListAnomaliesForInsight.ProactiveAnomalies'),
        outputPath: 'ProactiveAnomalies',
        parameters: {
          InsightId: this.__input.insightId,
          StartTimeRange: {
            FromTime: this.__input.startTimeRange?.fromTime,
            ToTime: this.__input.startTimeRange?.toTime,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnomaliesForInsight.ProactiveAnomalies', props);
    return resource.getResponseField('ProactiveAnomalies') as unknown as shapes.DevOpsGuruProactiveAnomalySummary[];
  }

  public get reactiveAnomalies(): shapes.DevOpsGuruReactiveAnomalySummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnomaliesForInsight',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.ListAnomaliesForInsight.ReactiveAnomalies'),
        outputPath: 'ReactiveAnomalies',
        parameters: {
          InsightId: this.__input.insightId,
          StartTimeRange: {
            FromTime: this.__input.startTimeRange?.fromTime,
            ToTime: this.__input.startTimeRange?.toTime,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnomaliesForInsight.ReactiveAnomalies', props);
    return resource.getResponseField('ReactiveAnomalies') as unknown as shapes.DevOpsGuruReactiveAnomalySummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnomaliesForInsight',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.ListAnomaliesForInsight.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InsightId: this.__input.insightId,
          StartTimeRange: {
            FromTime: this.__input.startTimeRange?.fromTime,
            ToTime: this.__input.startTimeRange?.toTime,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnomaliesForInsight.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DevOpsGuruResponsesListEvents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruListEventsRequest) {
  }

  public get events(): shapes.DevOpsGuruEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEvents',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.ListEvents.Events'),
        outputPath: 'Events',
        parameters: {
          Filters: {
            InsightId: this.__input.filters.insightId,
            EventTimeRange: {
              FromTime: this.__input.filters.eventTimeRange?.fromTime,
              ToTime: this.__input.filters.eventTimeRange?.toTime,
            },
            EventClass: this.__input.filters.eventClass,
            EventSource: this.__input.filters.eventSource,
            DataSource: this.__input.filters.dataSource,
            ResourceCollection: {
              CloudFormation: {
                StackNames: this.__input.filters.resourceCollection?.cloudFormation?.stackNames,
              },
            },
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEvents.Events', props);
    return resource.getResponseField('Events') as unknown as shapes.DevOpsGuruEvent[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEvents',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.ListEvents.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filters: {
            InsightId: this.__input.filters.insightId,
            EventTimeRange: {
              FromTime: this.__input.filters.eventTimeRange?.fromTime,
              ToTime: this.__input.filters.eventTimeRange?.toTime,
            },
            EventClass: this.__input.filters.eventClass,
            EventSource: this.__input.filters.eventSource,
            DataSource: this.__input.filters.dataSource,
            ResourceCollection: {
              CloudFormation: {
                StackNames: this.__input.filters.resourceCollection?.cloudFormation?.stackNames,
              },
            },
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEvents.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DevOpsGuruResponsesListInsights {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruListInsightsRequest) {
  }

  public get proactiveInsights(): shapes.DevOpsGuruProactiveInsightSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInsights',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.ListInsights.ProactiveInsights'),
        outputPath: 'ProactiveInsights',
        parameters: {
          StatusFilter: {
            Ongoing: {
              Type: this.__input.statusFilter.ongoing?.type,
            },
            Closed: {
              Type: this.__input.statusFilter.closed?.type,
              EndTimeRange: {
                FromTime: this.__input.statusFilter.closed?.endTimeRange.fromTime,
                ToTime: this.__input.statusFilter.closed?.endTimeRange.toTime,
              },
            },
            Any: {
              Type: this.__input.statusFilter.any?.type,
              StartTimeRange: {
                FromTime: this.__input.statusFilter.any?.startTimeRange.fromTime,
                ToTime: this.__input.statusFilter.any?.startTimeRange.toTime,
              },
            },
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInsights.ProactiveInsights', props);
    return resource.getResponseField('ProactiveInsights') as unknown as shapes.DevOpsGuruProactiveInsightSummary[];
  }

  public get reactiveInsights(): shapes.DevOpsGuruReactiveInsightSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInsights',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.ListInsights.ReactiveInsights'),
        outputPath: 'ReactiveInsights',
        parameters: {
          StatusFilter: {
            Ongoing: {
              Type: this.__input.statusFilter.ongoing?.type,
            },
            Closed: {
              Type: this.__input.statusFilter.closed?.type,
              EndTimeRange: {
                FromTime: this.__input.statusFilter.closed?.endTimeRange.fromTime,
                ToTime: this.__input.statusFilter.closed?.endTimeRange.toTime,
              },
            },
            Any: {
              Type: this.__input.statusFilter.any?.type,
              StartTimeRange: {
                FromTime: this.__input.statusFilter.any?.startTimeRange.fromTime,
                ToTime: this.__input.statusFilter.any?.startTimeRange.toTime,
              },
            },
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInsights.ReactiveInsights', props);
    return resource.getResponseField('ReactiveInsights') as unknown as shapes.DevOpsGuruReactiveInsightSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInsights',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.ListInsights.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          StatusFilter: {
            Ongoing: {
              Type: this.__input.statusFilter.ongoing?.type,
            },
            Closed: {
              Type: this.__input.statusFilter.closed?.type,
              EndTimeRange: {
                FromTime: this.__input.statusFilter.closed?.endTimeRange.fromTime,
                ToTime: this.__input.statusFilter.closed?.endTimeRange.toTime,
              },
            },
            Any: {
              Type: this.__input.statusFilter.any?.type,
              StartTimeRange: {
                FromTime: this.__input.statusFilter.any?.startTimeRange.fromTime,
                ToTime: this.__input.statusFilter.any?.startTimeRange.toTime,
              },
            },
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInsights.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DevOpsGuruResponsesListNotificationChannels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruListNotificationChannelsRequest) {
  }

  public get channels(): shapes.DevOpsGuruNotificationChannel[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNotificationChannels',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.ListNotificationChannels.Channels'),
        outputPath: 'Channels',
        parameters: {
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNotificationChannels.Channels', props);
    return resource.getResponseField('Channels') as unknown as shapes.DevOpsGuruNotificationChannel[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNotificationChannels',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.ListNotificationChannels.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNotificationChannels.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DevOpsGuruResponsesListRecommendations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruListRecommendationsRequest) {
  }

  public get recommendations(): shapes.DevOpsGuruRecommendation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecommendations',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.ListRecommendations.Recommendations'),
        outputPath: 'Recommendations',
        parameters: {
          InsightId: this.__input.insightId,
          NextToken: this.__input.nextToken,
          Locale: this.__input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecommendations.Recommendations', props);
    return resource.getResponseField('Recommendations') as unknown as shapes.DevOpsGuruRecommendation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecommendations',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.ListRecommendations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InsightId: this.__input.insightId,
          NextToken: this.__input.nextToken,
          Locale: this.__input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecommendations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DevOpsGuruResponsesSearchInsights {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DevOpsGuruSearchInsightsRequest) {
  }

  public get proactiveInsights(): shapes.DevOpsGuruProactiveInsightSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchInsights',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.SearchInsights.ProactiveInsights'),
        outputPath: 'ProactiveInsights',
        parameters: {
          StartTimeRange: {
            FromTime: this.__input.startTimeRange.fromTime,
            ToTime: this.__input.startTimeRange.toTime,
          },
          Filters: {
            Severities: this.__input.filters?.severities,
            Statuses: this.__input.filters?.statuses,
            ResourceCollection: {
              CloudFormation: {
                StackNames: this.__input.filters?.resourceCollection?.cloudFormation?.stackNames,
              },
            },
            ServiceCollection: {
              ServiceNames: this.__input.filters?.serviceCollection?.serviceNames,
            },
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchInsights.ProactiveInsights', props);
    return resource.getResponseField('ProactiveInsights') as unknown as shapes.DevOpsGuruProactiveInsightSummary[];
  }

  public get reactiveInsights(): shapes.DevOpsGuruReactiveInsightSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchInsights',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.SearchInsights.ReactiveInsights'),
        outputPath: 'ReactiveInsights',
        parameters: {
          StartTimeRange: {
            FromTime: this.__input.startTimeRange.fromTime,
            ToTime: this.__input.startTimeRange.toTime,
          },
          Filters: {
            Severities: this.__input.filters?.severities,
            Statuses: this.__input.filters?.statuses,
            ResourceCollection: {
              CloudFormation: {
                StackNames: this.__input.filters?.resourceCollection?.cloudFormation?.stackNames,
              },
            },
            ServiceCollection: {
              ServiceNames: this.__input.filters?.serviceCollection?.serviceNames,
            },
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchInsights.ReactiveInsights', props);
    return resource.getResponseField('ReactiveInsights') as unknown as shapes.DevOpsGuruReactiveInsightSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchInsights',
        service: 'DevOpsGuru',
        physicalResourceId: cr.PhysicalResourceId.of('DevOpsGuru.SearchInsights.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          StartTimeRange: {
            FromTime: this.__input.startTimeRange.fromTime,
            ToTime: this.__input.startTimeRange.toTime,
          },
          Filters: {
            Severities: this.__input.filters?.severities,
            Statuses: this.__input.filters?.statuses,
            ResourceCollection: {
              CloudFormation: {
                StackNames: this.__input.filters?.resourceCollection?.cloudFormation?.stackNames,
              },
            },
            ServiceCollection: {
              ServiceNames: this.__input.filters?.serviceCollection?.serviceNames,
            },
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchInsights.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

