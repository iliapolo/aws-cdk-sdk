import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class LookoutMetricsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public activateAnomalyDetector(input: shapes.LookoutMetricsActivateAnomalyDetectorRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'activateAnomalyDetector',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.ActivateAnomalyDetector'),
        parameters: {
          AnomalyDetectorArn: input.anomalyDetectorArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ActivateAnomalyDetector', props);
  }

  public backTestAnomalyDetector(input: shapes.LookoutMetricsBackTestAnomalyDetectorRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'backTestAnomalyDetector',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.BackTestAnomalyDetector'),
        parameters: {
          AnomalyDetectorArn: input.anomalyDetectorArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'BackTestAnomalyDetector', props);
  }

  public createAlert(input: shapes.LookoutMetricsCreateAlertRequest): LookoutMetricsResponsesCreateAlert {
    return new LookoutMetricsResponsesCreateAlert(this, this.__resources, input);
  }

  public createAnomalyDetector(input: shapes.LookoutMetricsCreateAnomalyDetectorRequest): LookoutMetricsResponsesCreateAnomalyDetector {
    return new LookoutMetricsResponsesCreateAnomalyDetector(this, this.__resources, input);
  }

  public createMetricSet(input: shapes.LookoutMetricsCreateMetricSetRequest): LookoutMetricsResponsesCreateMetricSet {
    return new LookoutMetricsResponsesCreateMetricSet(this, this.__resources, input);
  }

  public deleteAlert(input: shapes.LookoutMetricsDeleteAlertRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAlert',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DeleteAlert'),
        parameters: {
          AlertArn: input.alertArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAlert', props);
  }

  public deleteAnomalyDetector(input: shapes.LookoutMetricsDeleteAnomalyDetectorRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAnomalyDetector',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DeleteAnomalyDetector'),
        parameters: {
          AnomalyDetectorArn: input.anomalyDetectorArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAnomalyDetector', props);
  }

  public describeAlert(input: shapes.LookoutMetricsDescribeAlertRequest): LookoutMetricsResponsesDescribeAlert {
    return new LookoutMetricsResponsesDescribeAlert(this, this.__resources, input);
  }

  public describeAnomalyDetectionExecutions(input: shapes.LookoutMetricsDescribeAnomalyDetectionExecutionsRequest): LookoutMetricsResponsesDescribeAnomalyDetectionExecutions {
    return new LookoutMetricsResponsesDescribeAnomalyDetectionExecutions(this, this.__resources, input);
  }

  public describeAnomalyDetector(input: shapes.LookoutMetricsDescribeAnomalyDetectorRequest): LookoutMetricsResponsesDescribeAnomalyDetector {
    return new LookoutMetricsResponsesDescribeAnomalyDetector(this, this.__resources, input);
  }

  public describeMetricSet(input: shapes.LookoutMetricsDescribeMetricSetRequest): LookoutMetricsResponsesDescribeMetricSet {
    return new LookoutMetricsResponsesDescribeMetricSet(this, this.__resources, input);
  }

  public fetchAnomalyGroup(input: shapes.LookoutMetricsGetAnomalyGroupRequest): LookoutMetricsResponsesFetchAnomalyGroup {
    return new LookoutMetricsResponsesFetchAnomalyGroup(this, this.__resources, input);
  }

  public fetchFeedback(input: shapes.LookoutMetricsGetFeedbackRequest): LookoutMetricsResponsesFetchFeedback {
    return new LookoutMetricsResponsesFetchFeedback(this, this.__resources, input);
  }

  public fetchSampleData(input: shapes.LookoutMetricsGetSampleDataRequest): LookoutMetricsResponsesFetchSampleData {
    return new LookoutMetricsResponsesFetchSampleData(this, this.__resources, input);
  }

  public listAlerts(input: shapes.LookoutMetricsListAlertsRequest): LookoutMetricsResponsesListAlerts {
    return new LookoutMetricsResponsesListAlerts(this, this.__resources, input);
  }

  public listAnomalyDetectors(input: shapes.LookoutMetricsListAnomalyDetectorsRequest): LookoutMetricsResponsesListAnomalyDetectors {
    return new LookoutMetricsResponsesListAnomalyDetectors(this, this.__resources, input);
  }

  public listAnomalyGroupSummaries(input: shapes.LookoutMetricsListAnomalyGroupSummariesRequest): LookoutMetricsResponsesListAnomalyGroupSummaries {
    return new LookoutMetricsResponsesListAnomalyGroupSummaries(this, this.__resources, input);
  }

  public listAnomalyGroupTimeSeries(input: shapes.LookoutMetricsListAnomalyGroupTimeSeriesRequest): LookoutMetricsResponsesListAnomalyGroupTimeSeries {
    return new LookoutMetricsResponsesListAnomalyGroupTimeSeries(this, this.__resources, input);
  }

  public listMetricSets(input: shapes.LookoutMetricsListMetricSetsRequest): LookoutMetricsResponsesListMetricSets {
    return new LookoutMetricsResponsesListMetricSets(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.LookoutMetricsListTagsForResourceRequest): LookoutMetricsResponsesListTagsForResource {
    return new LookoutMetricsResponsesListTagsForResource(this, this.__resources, input);
  }

  public putFeedback(input: shapes.LookoutMetricsPutFeedbackRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putFeedback',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.PutFeedback'),
        parameters: {
          AnomalyDetectorArn: input.anomalyDetectorArn,
          AnomalyGroupTimeSeriesFeedback: {
            AnomalyGroupId: input.anomalyGroupTimeSeriesFeedback.anomalyGroupId,
            TimeSeriesId: input.anomalyGroupTimeSeriesFeedback.timeSeriesId,
            IsAnomaly: input.anomalyGroupTimeSeriesFeedback.isAnomaly,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutFeedback', props);
  }

  public tagResource(input: shapes.LookoutMetricsTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.LookoutMetricsUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateAnomalyDetector(input: shapes.LookoutMetricsUpdateAnomalyDetectorRequest): LookoutMetricsResponsesUpdateAnomalyDetector {
    return new LookoutMetricsResponsesUpdateAnomalyDetector(this, this.__resources, input);
  }

  public updateMetricSet(input: shapes.LookoutMetricsUpdateMetricSetRequest): LookoutMetricsResponsesUpdateMetricSet {
    return new LookoutMetricsResponsesUpdateMetricSet(this, this.__resources, input);
  }

}

export class LookoutMetricsResponsesCreateAlert {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsCreateAlertRequest) {
  }

  public get alertArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAlert',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.CreateAlert.AlertArn'),
        outputPath: 'AlertArn',
        parameters: {
          AlertName: this.__input.alertName,
          AlertSensitivityThreshold: this.__input.alertSensitivityThreshold,
          AlertDescription: this.__input.alertDescription,
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
          Action: {
            SNSConfiguration: {
              RoleArn: this.__input.action.snsConfiguration?.roleArn,
              SnsTopicArn: this.__input.action.snsConfiguration?.snsTopicArn,
            },
            LambdaConfiguration: {
              RoleArn: this.__input.action.lambdaConfiguration?.roleArn,
              LambdaArn: this.__input.action.lambdaConfiguration?.lambdaArn,
            },
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAlert.AlertArn', props);
    return resource.getResponseField('AlertArn') as unknown as string;
  }

}

export class LookoutMetricsResponsesCreateAnomalyDetector {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsCreateAnomalyDetectorRequest) {
  }

  public get anomalyDetectorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAnomalyDetector',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.CreateAnomalyDetector.AnomalyDetectorArn'),
        outputPath: 'AnomalyDetectorArn',
        parameters: {
          AnomalyDetectorName: this.__input.anomalyDetectorName,
          AnomalyDetectorDescription: this.__input.anomalyDetectorDescription,
          AnomalyDetectorConfig: {
            AnomalyDetectorFrequency: this.__input.anomalyDetectorConfig.anomalyDetectorFrequency,
          },
          KmsKeyArn: this.__input.kmsKeyArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAnomalyDetector.AnomalyDetectorArn', props);
    return resource.getResponseField('AnomalyDetectorArn') as unknown as string;
  }

}

export class LookoutMetricsResponsesCreateMetricSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsCreateMetricSetRequest) {
  }

  public get metricSetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.CreateMetricSet.MetricSetArn'),
        outputPath: 'MetricSetArn',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
          MetricSetName: this.__input.metricSetName,
          MetricSetDescription: this.__input.metricSetDescription,
          MetricList: this.__input.metricList,
          Offset: this.__input.offset,
          TimestampColumn: {
            ColumnName: this.__input.timestampColumn?.columnName,
            ColumnFormat: this.__input.timestampColumn?.columnFormat,
          },
          DimensionList: this.__input.dimensionList,
          MetricSetFrequency: this.__input.metricSetFrequency,
          MetricSource: {
            S3SourceConfig: {
              RoleArn: this.__input.metricSource.s3SourceConfig?.roleArn,
              TemplatedPathList: this.__input.metricSource.s3SourceConfig?.templatedPathList,
              HistoricalDataPathList: this.__input.metricSource.s3SourceConfig?.historicalDataPathList,
              FileFormatDescriptor: {
                CsvFormatDescriptor: {
                  FileCompression: this.__input.metricSource.s3SourceConfig?.fileFormatDescriptor?.csvFormatDescriptor?.fileCompression,
                  Charset: this.__input.metricSource.s3SourceConfig?.fileFormatDescriptor?.csvFormatDescriptor?.charset,
                  ContainsHeader: this.__input.metricSource.s3SourceConfig?.fileFormatDescriptor?.csvFormatDescriptor?.containsHeader,
                  Delimiter: this.__input.metricSource.s3SourceConfig?.fileFormatDescriptor?.csvFormatDescriptor?.delimiter,
                  HeaderList: this.__input.metricSource.s3SourceConfig?.fileFormatDescriptor?.csvFormatDescriptor?.headerList,
                  QuoteSymbol: this.__input.metricSource.s3SourceConfig?.fileFormatDescriptor?.csvFormatDescriptor?.quoteSymbol,
                },
                JsonFormatDescriptor: {
                  FileCompression: this.__input.metricSource.s3SourceConfig?.fileFormatDescriptor?.jsonFormatDescriptor?.fileCompression,
                  Charset: this.__input.metricSource.s3SourceConfig?.fileFormatDescriptor?.jsonFormatDescriptor?.charset,
                },
              },
            },
            AppFlowConfig: {
              RoleArn: this.__input.metricSource.appFlowConfig?.roleArn,
              FlowName: this.__input.metricSource.appFlowConfig?.flowName,
            },
            CloudWatchConfig: {
              RoleArn: this.__input.metricSource.cloudWatchConfig?.roleArn,
            },
            RDSSourceConfig: {
              DBInstanceIdentifier: this.__input.metricSource.rdsSourceConfig?.dbInstanceIdentifier,
              DatabaseHost: this.__input.metricSource.rdsSourceConfig?.databaseHost,
              DatabasePort: this.__input.metricSource.rdsSourceConfig?.databasePort,
              SecretManagerArn: this.__input.metricSource.rdsSourceConfig?.secretManagerArn,
              DatabaseName: this.__input.metricSource.rdsSourceConfig?.databaseName,
              TableName: this.__input.metricSource.rdsSourceConfig?.tableName,
              RoleArn: this.__input.metricSource.rdsSourceConfig?.roleArn,
              VpcConfiguration: {
                SubnetIdList: this.__input.metricSource.rdsSourceConfig?.vpcConfiguration.subnetIdList,
                SecurityGroupIdList: this.__input.metricSource.rdsSourceConfig?.vpcConfiguration.securityGroupIdList,
              },
            },
            RedshiftSourceConfig: {
              ClusterIdentifier: this.__input.metricSource.redshiftSourceConfig?.clusterIdentifier,
              DatabaseHost: this.__input.metricSource.redshiftSourceConfig?.databaseHost,
              DatabasePort: this.__input.metricSource.redshiftSourceConfig?.databasePort,
              SecretManagerArn: this.__input.metricSource.redshiftSourceConfig?.secretManagerArn,
              DatabaseName: this.__input.metricSource.redshiftSourceConfig?.databaseName,
              TableName: this.__input.metricSource.redshiftSourceConfig?.tableName,
              RoleArn: this.__input.metricSource.redshiftSourceConfig?.roleArn,
              VpcConfiguration: {
                SubnetIdList: this.__input.metricSource.redshiftSourceConfig?.vpcConfiguration.subnetIdList,
                SecurityGroupIdList: this.__input.metricSource.redshiftSourceConfig?.vpcConfiguration.securityGroupIdList,
              },
            },
          },
          Timezone: this.__input.timezone,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMetricSet.MetricSetArn', props);
    return resource.getResponseField('MetricSetArn') as unknown as string;
  }

}

export class LookoutMetricsResponsesDescribeAlert {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsDescribeAlertRequest) {
  }

  public get alert(): LookoutMetricsResponsesDescribeAlertAlert {
    return new LookoutMetricsResponsesDescribeAlertAlert(this.__scope, this.__resources, this.__input);
  }

}

export class LookoutMetricsResponsesDescribeAlertAlert {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsDescribeAlertRequest) {
  }

  public get action(): LookoutMetricsResponsesDescribeAlertAlertAction {
    return new LookoutMetricsResponsesDescribeAlertAlertAction(this.__scope, this.__resources, this.__input);
  }

  public get alertDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlert',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeAlert.Alert.AlertDescription'),
        outputPath: 'Alert.AlertDescription',
        parameters: {
          AlertArn: this.__input.alertArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlert.Alert.AlertDescription', props);
    return resource.getResponseField('Alert.AlertDescription') as unknown as string;
  }

  public get alertArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlert',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeAlert.Alert.AlertArn'),
        outputPath: 'Alert.AlertArn',
        parameters: {
          AlertArn: this.__input.alertArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlert.Alert.AlertArn', props);
    return resource.getResponseField('Alert.AlertArn') as unknown as string;
  }

  public get anomalyDetectorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlert',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeAlert.Alert.AnomalyDetectorArn'),
        outputPath: 'Alert.AnomalyDetectorArn',
        parameters: {
          AlertArn: this.__input.alertArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlert.Alert.AnomalyDetectorArn', props);
    return resource.getResponseField('Alert.AnomalyDetectorArn') as unknown as string;
  }

  public get alertName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlert',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeAlert.Alert.AlertName'),
        outputPath: 'Alert.AlertName',
        parameters: {
          AlertArn: this.__input.alertArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlert.Alert.AlertName', props);
    return resource.getResponseField('Alert.AlertName') as unknown as string;
  }

  public get alertSensitivityThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlert',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeAlert.Alert.AlertSensitivityThreshold'),
        outputPath: 'Alert.AlertSensitivityThreshold',
        parameters: {
          AlertArn: this.__input.alertArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlert.Alert.AlertSensitivityThreshold', props);
    return resource.getResponseField('Alert.AlertSensitivityThreshold') as unknown as number;
  }

  public get alertType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlert',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeAlert.Alert.AlertType'),
        outputPath: 'Alert.AlertType',
        parameters: {
          AlertArn: this.__input.alertArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlert.Alert.AlertType', props);
    return resource.getResponseField('Alert.AlertType') as unknown as string;
  }

  public get alertStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlert',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeAlert.Alert.AlertStatus'),
        outputPath: 'Alert.AlertStatus',
        parameters: {
          AlertArn: this.__input.alertArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlert.Alert.AlertStatus', props);
    return resource.getResponseField('Alert.AlertStatus') as unknown as string;
  }

  public get lastModificationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlert',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeAlert.Alert.LastModificationTime'),
        outputPath: 'Alert.LastModificationTime',
        parameters: {
          AlertArn: this.__input.alertArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlert.Alert.LastModificationTime', props);
    return resource.getResponseField('Alert.LastModificationTime') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlert',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeAlert.Alert.CreationTime'),
        outputPath: 'Alert.CreationTime',
        parameters: {
          AlertArn: this.__input.alertArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlert.Alert.CreationTime', props);
    return resource.getResponseField('Alert.CreationTime') as unknown as string;
  }

}

export class LookoutMetricsResponsesDescribeAlertAlertAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsDescribeAlertRequest) {
  }

  public get snsConfiguration(): LookoutMetricsResponsesDescribeAlertAlertActionSnsConfiguration {
    return new LookoutMetricsResponsesDescribeAlertAlertActionSnsConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get lambdaConfiguration(): LookoutMetricsResponsesDescribeAlertAlertActionLambdaConfiguration {
    return new LookoutMetricsResponsesDescribeAlertAlertActionLambdaConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class LookoutMetricsResponsesDescribeAlertAlertActionSnsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsDescribeAlertRequest) {
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlert',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeAlert.Alert.Action.SNSConfiguration.RoleArn'),
        outputPath: 'Alert.Action.SNSConfiguration.RoleArn',
        parameters: {
          AlertArn: this.__input.alertArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlert.Alert.Action.SNSConfiguration.RoleArn', props);
    return resource.getResponseField('Alert.Action.SNSConfiguration.RoleArn') as unknown as string;
  }

  public get snsTopicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlert',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeAlert.Alert.Action.SNSConfiguration.SnsTopicArn'),
        outputPath: 'Alert.Action.SNSConfiguration.SnsTopicArn',
        parameters: {
          AlertArn: this.__input.alertArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlert.Alert.Action.SNSConfiguration.SnsTopicArn', props);
    return resource.getResponseField('Alert.Action.SNSConfiguration.SnsTopicArn') as unknown as string;
  }

}

export class LookoutMetricsResponsesDescribeAlertAlertActionLambdaConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsDescribeAlertRequest) {
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlert',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeAlert.Alert.Action.LambdaConfiguration.RoleArn'),
        outputPath: 'Alert.Action.LambdaConfiguration.RoleArn',
        parameters: {
          AlertArn: this.__input.alertArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlert.Alert.Action.LambdaConfiguration.RoleArn', props);
    return resource.getResponseField('Alert.Action.LambdaConfiguration.RoleArn') as unknown as string;
  }

  public get lambdaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlert',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeAlert.Alert.Action.LambdaConfiguration.LambdaArn'),
        outputPath: 'Alert.Action.LambdaConfiguration.LambdaArn',
        parameters: {
          AlertArn: this.__input.alertArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlert.Alert.Action.LambdaConfiguration.LambdaArn', props);
    return resource.getResponseField('Alert.Action.LambdaConfiguration.LambdaArn') as unknown as string;
  }

}

export class LookoutMetricsResponsesDescribeAnomalyDetectionExecutions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsDescribeAnomalyDetectionExecutionsRequest) {
  }

  public get executionList(): shapes.LookoutMetricsExecutionStatus[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomalyDetectionExecutions',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeAnomalyDetectionExecutions.ExecutionList'),
        outputPath: 'ExecutionList',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
          Timestamp: this.__input.timestamp,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomalyDetectionExecutions.ExecutionList', props);
    return resource.getResponseField('ExecutionList') as unknown as shapes.LookoutMetricsExecutionStatus[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomalyDetectionExecutions',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeAnomalyDetectionExecutions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
          Timestamp: this.__input.timestamp,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomalyDetectionExecutions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LookoutMetricsResponsesDescribeAnomalyDetector {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsDescribeAnomalyDetectorRequest) {
  }

  public get anomalyDetectorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomalyDetector',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeAnomalyDetector.AnomalyDetectorArn'),
        outputPath: 'AnomalyDetectorArn',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomalyDetector.AnomalyDetectorArn', props);
    return resource.getResponseField('AnomalyDetectorArn') as unknown as string;
  }

  public get anomalyDetectorName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomalyDetector',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeAnomalyDetector.AnomalyDetectorName'),
        outputPath: 'AnomalyDetectorName',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomalyDetector.AnomalyDetectorName', props);
    return resource.getResponseField('AnomalyDetectorName') as unknown as string;
  }

  public get anomalyDetectorDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomalyDetector',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeAnomalyDetector.AnomalyDetectorDescription'),
        outputPath: 'AnomalyDetectorDescription',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomalyDetector.AnomalyDetectorDescription', props);
    return resource.getResponseField('AnomalyDetectorDescription') as unknown as string;
  }

  public get anomalyDetectorConfig(): LookoutMetricsResponsesDescribeAnomalyDetectorAnomalyDetectorConfig {
    return new LookoutMetricsResponsesDescribeAnomalyDetectorAnomalyDetectorConfig(this.__scope, this.__resources, this.__input);
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomalyDetector',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeAnomalyDetector.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomalyDetector.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get lastModificationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomalyDetector',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeAnomalyDetector.LastModificationTime'),
        outputPath: 'LastModificationTime',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomalyDetector.LastModificationTime', props);
    return resource.getResponseField('LastModificationTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomalyDetector',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeAnomalyDetector.Status'),
        outputPath: 'Status',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomalyDetector.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomalyDetector',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeAnomalyDetector.FailureReason'),
        outputPath: 'FailureReason',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomalyDetector.FailureReason', props);
    return resource.getResponseField('FailureReason') as unknown as string;
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomalyDetector',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeAnomalyDetector.KmsKeyArn'),
        outputPath: 'KmsKeyArn',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomalyDetector.KmsKeyArn', props);
    return resource.getResponseField('KmsKeyArn') as unknown as string;
  }

}

export class LookoutMetricsResponsesDescribeAnomalyDetectorAnomalyDetectorConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsDescribeAnomalyDetectorRequest) {
  }

  public get anomalyDetectorFrequency(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnomalyDetector',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeAnomalyDetector.AnomalyDetectorConfig.AnomalyDetectorFrequency'),
        outputPath: 'AnomalyDetectorConfig.AnomalyDetectorFrequency',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnomalyDetector.AnomalyDetectorConfig.AnomalyDetectorFrequency', props);
    return resource.getResponseField('AnomalyDetectorConfig.AnomalyDetectorFrequency') as unknown as string;
  }

}

export class LookoutMetricsResponsesDescribeMetricSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsDescribeMetricSetRequest) {
  }

  public get metricSetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSetArn'),
        outputPath: 'MetricSetArn',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSetArn', props);
    return resource.getResponseField('MetricSetArn') as unknown as string;
  }

  public get anomalyDetectorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.AnomalyDetectorArn'),
        outputPath: 'AnomalyDetectorArn',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.AnomalyDetectorArn', props);
    return resource.getResponseField('AnomalyDetectorArn') as unknown as string;
  }

  public get metricSetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSetName'),
        outputPath: 'MetricSetName',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSetName', props);
    return resource.getResponseField('MetricSetName') as unknown as string;
  }

  public get metricSetDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSetDescription'),
        outputPath: 'MetricSetDescription',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSetDescription', props);
    return resource.getResponseField('MetricSetDescription') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get lastModificationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.LastModificationTime'),
        outputPath: 'LastModificationTime',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.LastModificationTime', props);
    return resource.getResponseField('LastModificationTime') as unknown as string;
  }

  public get offset(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.Offset'),
        outputPath: 'Offset',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.Offset', props);
    return resource.getResponseField('Offset') as unknown as number;
  }

  public get metricList(): shapes.LookoutMetricsMetric[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricList'),
        outputPath: 'MetricList',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricList', props);
    return resource.getResponseField('MetricList') as unknown as shapes.LookoutMetricsMetric[];
  }

  public get timestampColumn(): LookoutMetricsResponsesDescribeMetricSetTimestampColumn {
    return new LookoutMetricsResponsesDescribeMetricSetTimestampColumn(this.__scope, this.__resources, this.__input);
  }

  public get dimensionList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.DimensionList'),
        outputPath: 'DimensionList',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.DimensionList', props);
    return resource.getResponseField('DimensionList') as unknown as string[];
  }

  public get metricSetFrequency(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSetFrequency'),
        outputPath: 'MetricSetFrequency',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSetFrequency', props);
    return resource.getResponseField('MetricSetFrequency') as unknown as string;
  }

  public get timezone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.Timezone'),
        outputPath: 'Timezone',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.Timezone', props);
    return resource.getResponseField('Timezone') as unknown as string;
  }

  public get metricSource(): LookoutMetricsResponsesDescribeMetricSetMetricSource {
    return new LookoutMetricsResponsesDescribeMetricSetMetricSource(this.__scope, this.__resources, this.__input);
  }

}

export class LookoutMetricsResponsesDescribeMetricSetTimestampColumn {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsDescribeMetricSetRequest) {
  }

  public get columnName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.TimestampColumn.ColumnName'),
        outputPath: 'TimestampColumn.ColumnName',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.TimestampColumn.ColumnName', props);
    return resource.getResponseField('TimestampColumn.ColumnName') as unknown as string;
  }

  public get columnFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.TimestampColumn.ColumnFormat'),
        outputPath: 'TimestampColumn.ColumnFormat',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.TimestampColumn.ColumnFormat', props);
    return resource.getResponseField('TimestampColumn.ColumnFormat') as unknown as string;
  }

}

export class LookoutMetricsResponsesDescribeMetricSetMetricSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsDescribeMetricSetRequest) {
  }

  public get s3SourceConfig(): LookoutMetricsResponsesDescribeMetricSetMetricSourceS3SourceConfig {
    return new LookoutMetricsResponsesDescribeMetricSetMetricSourceS3SourceConfig(this.__scope, this.__resources, this.__input);
  }

  public get appFlowConfig(): LookoutMetricsResponsesDescribeMetricSetMetricSourceAppFlowConfig {
    return new LookoutMetricsResponsesDescribeMetricSetMetricSourceAppFlowConfig(this.__scope, this.__resources, this.__input);
  }

  public get cloudWatchConfig(): LookoutMetricsResponsesDescribeMetricSetMetricSourceCloudWatchConfig {
    return new LookoutMetricsResponsesDescribeMetricSetMetricSourceCloudWatchConfig(this.__scope, this.__resources, this.__input);
  }

  public get rdsSourceConfig(): LookoutMetricsResponsesDescribeMetricSetMetricSourceRdsSourceConfig {
    return new LookoutMetricsResponsesDescribeMetricSetMetricSourceRdsSourceConfig(this.__scope, this.__resources, this.__input);
  }

  public get redshiftSourceConfig(): LookoutMetricsResponsesDescribeMetricSetMetricSourceRedshiftSourceConfig {
    return new LookoutMetricsResponsesDescribeMetricSetMetricSourceRedshiftSourceConfig(this.__scope, this.__resources, this.__input);
  }

}

export class LookoutMetricsResponsesDescribeMetricSetMetricSourceS3SourceConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsDescribeMetricSetRequest) {
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.S3SourceConfig.RoleArn'),
        outputPath: 'MetricSource.S3SourceConfig.RoleArn',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.S3SourceConfig.RoleArn', props);
    return resource.getResponseField('MetricSource.S3SourceConfig.RoleArn') as unknown as string;
  }

  public get templatedPathList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.S3SourceConfig.TemplatedPathList'),
        outputPath: 'MetricSource.S3SourceConfig.TemplatedPathList',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.S3SourceConfig.TemplatedPathList', props);
    return resource.getResponseField('MetricSource.S3SourceConfig.TemplatedPathList') as unknown as string[];
  }

  public get historicalDataPathList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.S3SourceConfig.HistoricalDataPathList'),
        outputPath: 'MetricSource.S3SourceConfig.HistoricalDataPathList',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.S3SourceConfig.HistoricalDataPathList', props);
    return resource.getResponseField('MetricSource.S3SourceConfig.HistoricalDataPathList') as unknown as string[];
  }

  public get fileFormatDescriptor(): LookoutMetricsResponsesDescribeMetricSetMetricSourceS3SourceConfigFileFormatDescriptor {
    return new LookoutMetricsResponsesDescribeMetricSetMetricSourceS3SourceConfigFileFormatDescriptor(this.__scope, this.__resources, this.__input);
  }

}

export class LookoutMetricsResponsesDescribeMetricSetMetricSourceS3SourceConfigFileFormatDescriptor {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsDescribeMetricSetRequest) {
  }

  public get csvFormatDescriptor(): LookoutMetricsResponsesDescribeMetricSetMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor {
    return new LookoutMetricsResponsesDescribeMetricSetMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor(this.__scope, this.__resources, this.__input);
  }

  public get jsonFormatDescriptor(): LookoutMetricsResponsesDescribeMetricSetMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor {
    return new LookoutMetricsResponsesDescribeMetricSetMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor(this.__scope, this.__resources, this.__input);
  }

}

export class LookoutMetricsResponsesDescribeMetricSetMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsDescribeMetricSetRequest) {
  }

  public get fileCompression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.S3SourceConfig.FileFormatDescriptor.CsvFormatDescriptor.FileCompression'),
        outputPath: 'MetricSource.S3SourceConfig.FileFormatDescriptor.CsvFormatDescriptor.FileCompression',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.S3SourceConfig.FileFormatDescriptor.CsvFormatDescriptor.FileCompression', props);
    return resource.getResponseField('MetricSource.S3SourceConfig.FileFormatDescriptor.CsvFormatDescriptor.FileCompression') as unknown as string;
  }

  public get charset(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.S3SourceConfig.FileFormatDescriptor.CsvFormatDescriptor.Charset'),
        outputPath: 'MetricSource.S3SourceConfig.FileFormatDescriptor.CsvFormatDescriptor.Charset',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.S3SourceConfig.FileFormatDescriptor.CsvFormatDescriptor.Charset', props);
    return resource.getResponseField('MetricSource.S3SourceConfig.FileFormatDescriptor.CsvFormatDescriptor.Charset') as unknown as string;
  }

  public get containsHeader(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.S3SourceConfig.FileFormatDescriptor.CsvFormatDescriptor.ContainsHeader'),
        outputPath: 'MetricSource.S3SourceConfig.FileFormatDescriptor.CsvFormatDescriptor.ContainsHeader',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.S3SourceConfig.FileFormatDescriptor.CsvFormatDescriptor.ContainsHeader', props);
    return resource.getResponseField('MetricSource.S3SourceConfig.FileFormatDescriptor.CsvFormatDescriptor.ContainsHeader') as unknown as boolean;
  }

  public get delimiter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.S3SourceConfig.FileFormatDescriptor.CsvFormatDescriptor.Delimiter'),
        outputPath: 'MetricSource.S3SourceConfig.FileFormatDescriptor.CsvFormatDescriptor.Delimiter',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.S3SourceConfig.FileFormatDescriptor.CsvFormatDescriptor.Delimiter', props);
    return resource.getResponseField('MetricSource.S3SourceConfig.FileFormatDescriptor.CsvFormatDescriptor.Delimiter') as unknown as string;
  }

  public get headerList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.S3SourceConfig.FileFormatDescriptor.CsvFormatDescriptor.HeaderList'),
        outputPath: 'MetricSource.S3SourceConfig.FileFormatDescriptor.CsvFormatDescriptor.HeaderList',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.S3SourceConfig.FileFormatDescriptor.CsvFormatDescriptor.HeaderList', props);
    return resource.getResponseField('MetricSource.S3SourceConfig.FileFormatDescriptor.CsvFormatDescriptor.HeaderList') as unknown as string[];
  }

  public get quoteSymbol(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.S3SourceConfig.FileFormatDescriptor.CsvFormatDescriptor.QuoteSymbol'),
        outputPath: 'MetricSource.S3SourceConfig.FileFormatDescriptor.CsvFormatDescriptor.QuoteSymbol',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.S3SourceConfig.FileFormatDescriptor.CsvFormatDescriptor.QuoteSymbol', props);
    return resource.getResponseField('MetricSource.S3SourceConfig.FileFormatDescriptor.CsvFormatDescriptor.QuoteSymbol') as unknown as string;
  }

}

export class LookoutMetricsResponsesDescribeMetricSetMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsDescribeMetricSetRequest) {
  }

  public get fileCompression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.S3SourceConfig.FileFormatDescriptor.JsonFormatDescriptor.FileCompression'),
        outputPath: 'MetricSource.S3SourceConfig.FileFormatDescriptor.JsonFormatDescriptor.FileCompression',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.S3SourceConfig.FileFormatDescriptor.JsonFormatDescriptor.FileCompression', props);
    return resource.getResponseField('MetricSource.S3SourceConfig.FileFormatDescriptor.JsonFormatDescriptor.FileCompression') as unknown as string;
  }

  public get charset(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.S3SourceConfig.FileFormatDescriptor.JsonFormatDescriptor.Charset'),
        outputPath: 'MetricSource.S3SourceConfig.FileFormatDescriptor.JsonFormatDescriptor.Charset',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.S3SourceConfig.FileFormatDescriptor.JsonFormatDescriptor.Charset', props);
    return resource.getResponseField('MetricSource.S3SourceConfig.FileFormatDescriptor.JsonFormatDescriptor.Charset') as unknown as string;
  }

}

export class LookoutMetricsResponsesDescribeMetricSetMetricSourceAppFlowConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsDescribeMetricSetRequest) {
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.AppFlowConfig.RoleArn'),
        outputPath: 'MetricSource.AppFlowConfig.RoleArn',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.AppFlowConfig.RoleArn', props);
    return resource.getResponseField('MetricSource.AppFlowConfig.RoleArn') as unknown as string;
  }

  public get flowName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.AppFlowConfig.FlowName'),
        outputPath: 'MetricSource.AppFlowConfig.FlowName',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.AppFlowConfig.FlowName', props);
    return resource.getResponseField('MetricSource.AppFlowConfig.FlowName') as unknown as string;
  }

}

export class LookoutMetricsResponsesDescribeMetricSetMetricSourceCloudWatchConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsDescribeMetricSetRequest) {
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.CloudWatchConfig.RoleArn'),
        outputPath: 'MetricSource.CloudWatchConfig.RoleArn',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.CloudWatchConfig.RoleArn', props);
    return resource.getResponseField('MetricSource.CloudWatchConfig.RoleArn') as unknown as string;
  }

}

export class LookoutMetricsResponsesDescribeMetricSetMetricSourceRdsSourceConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsDescribeMetricSetRequest) {
  }

  public get dbInstanceIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.RDSSourceConfig.DBInstanceIdentifier'),
        outputPath: 'MetricSource.RDSSourceConfig.DBInstanceIdentifier',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.RDSSourceConfig.DBInstanceIdentifier', props);
    return resource.getResponseField('MetricSource.RDSSourceConfig.DBInstanceIdentifier') as unknown as string;
  }

  public get databaseHost(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.RDSSourceConfig.DatabaseHost'),
        outputPath: 'MetricSource.RDSSourceConfig.DatabaseHost',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.RDSSourceConfig.DatabaseHost', props);
    return resource.getResponseField('MetricSource.RDSSourceConfig.DatabaseHost') as unknown as string;
  }

  public get databasePort(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.RDSSourceConfig.DatabasePort'),
        outputPath: 'MetricSource.RDSSourceConfig.DatabasePort',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.RDSSourceConfig.DatabasePort', props);
    return resource.getResponseField('MetricSource.RDSSourceConfig.DatabasePort') as unknown as number;
  }

  public get secretManagerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.RDSSourceConfig.SecretManagerArn'),
        outputPath: 'MetricSource.RDSSourceConfig.SecretManagerArn',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.RDSSourceConfig.SecretManagerArn', props);
    return resource.getResponseField('MetricSource.RDSSourceConfig.SecretManagerArn') as unknown as string;
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.RDSSourceConfig.DatabaseName'),
        outputPath: 'MetricSource.RDSSourceConfig.DatabaseName',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.RDSSourceConfig.DatabaseName', props);
    return resource.getResponseField('MetricSource.RDSSourceConfig.DatabaseName') as unknown as string;
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.RDSSourceConfig.TableName'),
        outputPath: 'MetricSource.RDSSourceConfig.TableName',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.RDSSourceConfig.TableName', props);
    return resource.getResponseField('MetricSource.RDSSourceConfig.TableName') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.RDSSourceConfig.RoleArn'),
        outputPath: 'MetricSource.RDSSourceConfig.RoleArn',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.RDSSourceConfig.RoleArn', props);
    return resource.getResponseField('MetricSource.RDSSourceConfig.RoleArn') as unknown as string;
  }

  public get vpcConfiguration(): LookoutMetricsResponsesDescribeMetricSetMetricSourceRdsSourceConfigVpcConfiguration {
    return new LookoutMetricsResponsesDescribeMetricSetMetricSourceRdsSourceConfigVpcConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class LookoutMetricsResponsesDescribeMetricSetMetricSourceRdsSourceConfigVpcConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsDescribeMetricSetRequest) {
  }

  public get subnetIdList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.RDSSourceConfig.VpcConfiguration.SubnetIdList'),
        outputPath: 'MetricSource.RDSSourceConfig.VpcConfiguration.SubnetIdList',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.RDSSourceConfig.VpcConfiguration.SubnetIdList', props);
    return resource.getResponseField('MetricSource.RDSSourceConfig.VpcConfiguration.SubnetIdList') as unknown as string[];
  }

  public get securityGroupIdList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.RDSSourceConfig.VpcConfiguration.SecurityGroupIdList'),
        outputPath: 'MetricSource.RDSSourceConfig.VpcConfiguration.SecurityGroupIdList',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.RDSSourceConfig.VpcConfiguration.SecurityGroupIdList', props);
    return resource.getResponseField('MetricSource.RDSSourceConfig.VpcConfiguration.SecurityGroupIdList') as unknown as string[];
  }

}

export class LookoutMetricsResponsesDescribeMetricSetMetricSourceRedshiftSourceConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsDescribeMetricSetRequest) {
  }

  public get clusterIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.RedshiftSourceConfig.ClusterIdentifier'),
        outputPath: 'MetricSource.RedshiftSourceConfig.ClusterIdentifier',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.RedshiftSourceConfig.ClusterIdentifier', props);
    return resource.getResponseField('MetricSource.RedshiftSourceConfig.ClusterIdentifier') as unknown as string;
  }

  public get databaseHost(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.RedshiftSourceConfig.DatabaseHost'),
        outputPath: 'MetricSource.RedshiftSourceConfig.DatabaseHost',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.RedshiftSourceConfig.DatabaseHost', props);
    return resource.getResponseField('MetricSource.RedshiftSourceConfig.DatabaseHost') as unknown as string;
  }

  public get databasePort(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.RedshiftSourceConfig.DatabasePort'),
        outputPath: 'MetricSource.RedshiftSourceConfig.DatabasePort',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.RedshiftSourceConfig.DatabasePort', props);
    return resource.getResponseField('MetricSource.RedshiftSourceConfig.DatabasePort') as unknown as number;
  }

  public get secretManagerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.RedshiftSourceConfig.SecretManagerArn'),
        outputPath: 'MetricSource.RedshiftSourceConfig.SecretManagerArn',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.RedshiftSourceConfig.SecretManagerArn', props);
    return resource.getResponseField('MetricSource.RedshiftSourceConfig.SecretManagerArn') as unknown as string;
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.RedshiftSourceConfig.DatabaseName'),
        outputPath: 'MetricSource.RedshiftSourceConfig.DatabaseName',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.RedshiftSourceConfig.DatabaseName', props);
    return resource.getResponseField('MetricSource.RedshiftSourceConfig.DatabaseName') as unknown as string;
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.RedshiftSourceConfig.TableName'),
        outputPath: 'MetricSource.RedshiftSourceConfig.TableName',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.RedshiftSourceConfig.TableName', props);
    return resource.getResponseField('MetricSource.RedshiftSourceConfig.TableName') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.RedshiftSourceConfig.RoleArn'),
        outputPath: 'MetricSource.RedshiftSourceConfig.RoleArn',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.RedshiftSourceConfig.RoleArn', props);
    return resource.getResponseField('MetricSource.RedshiftSourceConfig.RoleArn') as unknown as string;
  }

  public get vpcConfiguration(): LookoutMetricsResponsesDescribeMetricSetMetricSourceRedshiftSourceConfigVpcConfiguration {
    return new LookoutMetricsResponsesDescribeMetricSetMetricSourceRedshiftSourceConfigVpcConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class LookoutMetricsResponsesDescribeMetricSetMetricSourceRedshiftSourceConfigVpcConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsDescribeMetricSetRequest) {
  }

  public get subnetIdList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.RedshiftSourceConfig.VpcConfiguration.SubnetIdList'),
        outputPath: 'MetricSource.RedshiftSourceConfig.VpcConfiguration.SubnetIdList',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.RedshiftSourceConfig.VpcConfiguration.SubnetIdList', props);
    return resource.getResponseField('MetricSource.RedshiftSourceConfig.VpcConfiguration.SubnetIdList') as unknown as string[];
  }

  public get securityGroupIdList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.DescribeMetricSet.MetricSource.RedshiftSourceConfig.VpcConfiguration.SecurityGroupIdList'),
        outputPath: 'MetricSource.RedshiftSourceConfig.VpcConfiguration.SecurityGroupIdList',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMetricSet.MetricSource.RedshiftSourceConfig.VpcConfiguration.SecurityGroupIdList', props);
    return resource.getResponseField('MetricSource.RedshiftSourceConfig.VpcConfiguration.SecurityGroupIdList') as unknown as string[];
  }

}

export class LookoutMetricsResponsesFetchAnomalyGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsGetAnomalyGroupRequest) {
  }

  public get anomalyGroup(): LookoutMetricsResponsesFetchAnomalyGroupAnomalyGroup {
    return new LookoutMetricsResponsesFetchAnomalyGroupAnomalyGroup(this.__scope, this.__resources, this.__input);
  }

}

export class LookoutMetricsResponsesFetchAnomalyGroupAnomalyGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsGetAnomalyGroupRequest) {
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnomalyGroup',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.GetAnomalyGroup.AnomalyGroup.StartTime'),
        outputPath: 'AnomalyGroup.StartTime',
        parameters: {
          AnomalyGroupId: this.__input.anomalyGroupId,
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnomalyGroup.AnomalyGroup.StartTime', props);
    return resource.getResponseField('AnomalyGroup.StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnomalyGroup',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.GetAnomalyGroup.AnomalyGroup.EndTime'),
        outputPath: 'AnomalyGroup.EndTime',
        parameters: {
          AnomalyGroupId: this.__input.anomalyGroupId,
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnomalyGroup.AnomalyGroup.EndTime', props);
    return resource.getResponseField('AnomalyGroup.EndTime') as unknown as string;
  }

  public get anomalyGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnomalyGroup',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.GetAnomalyGroup.AnomalyGroup.AnomalyGroupId'),
        outputPath: 'AnomalyGroup.AnomalyGroupId',
        parameters: {
          AnomalyGroupId: this.__input.anomalyGroupId,
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnomalyGroup.AnomalyGroup.AnomalyGroupId', props);
    return resource.getResponseField('AnomalyGroup.AnomalyGroupId') as unknown as string;
  }

  public get anomalyGroupScore(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnomalyGroup',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.GetAnomalyGroup.AnomalyGroup.AnomalyGroupScore'),
        outputPath: 'AnomalyGroup.AnomalyGroupScore',
        parameters: {
          AnomalyGroupId: this.__input.anomalyGroupId,
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnomalyGroup.AnomalyGroup.AnomalyGroupScore', props);
    return resource.getResponseField('AnomalyGroup.AnomalyGroupScore') as unknown as number;
  }

  public get primaryMetricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnomalyGroup',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.GetAnomalyGroup.AnomalyGroup.PrimaryMetricName'),
        outputPath: 'AnomalyGroup.PrimaryMetricName',
        parameters: {
          AnomalyGroupId: this.__input.anomalyGroupId,
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnomalyGroup.AnomalyGroup.PrimaryMetricName', props);
    return resource.getResponseField('AnomalyGroup.PrimaryMetricName') as unknown as string;
  }

  public get metricLevelImpactList(): shapes.LookoutMetricsMetricLevelImpact[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnomalyGroup',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.GetAnomalyGroup.AnomalyGroup.MetricLevelImpactList'),
        outputPath: 'AnomalyGroup.MetricLevelImpactList',
        parameters: {
          AnomalyGroupId: this.__input.anomalyGroupId,
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnomalyGroup.AnomalyGroup.MetricLevelImpactList', props);
    return resource.getResponseField('AnomalyGroup.MetricLevelImpactList') as unknown as shapes.LookoutMetricsMetricLevelImpact[];
  }

}

export class LookoutMetricsResponsesFetchFeedback {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsGetFeedbackRequest) {
  }

  public get anomalyGroupTimeSeriesFeedback(): shapes.LookoutMetricsTimeSeriesFeedback[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFeedback',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.GetFeedback.AnomalyGroupTimeSeriesFeedback'),
        outputPath: 'AnomalyGroupTimeSeriesFeedback',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
          AnomalyGroupTimeSeriesFeedback: {
            AnomalyGroupId: this.__input.anomalyGroupTimeSeriesFeedback.anomalyGroupId,
            TimeSeriesId: this.__input.anomalyGroupTimeSeriesFeedback.timeSeriesId,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFeedback.AnomalyGroupTimeSeriesFeedback', props);
    return resource.getResponseField('AnomalyGroupTimeSeriesFeedback') as unknown as shapes.LookoutMetricsTimeSeriesFeedback[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFeedback',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.GetFeedback.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
          AnomalyGroupTimeSeriesFeedback: {
            AnomalyGroupId: this.__input.anomalyGroupTimeSeriesFeedback.anomalyGroupId,
            TimeSeriesId: this.__input.anomalyGroupTimeSeriesFeedback.timeSeriesId,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFeedback.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LookoutMetricsResponsesFetchSampleData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsGetSampleDataRequest) {
  }

  public get headerValues(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSampleData',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.GetSampleData.HeaderValues'),
        outputPath: 'HeaderValues',
        parameters: {
          S3SourceConfig: {
            RoleArn: this.__input.s3SourceConfig?.roleArn,
            TemplatedPathList: this.__input.s3SourceConfig?.templatedPathList,
            HistoricalDataPathList: this.__input.s3SourceConfig?.historicalDataPathList,
            FileFormatDescriptor: {
              CsvFormatDescriptor: {
                FileCompression: this.__input.s3SourceConfig?.fileFormatDescriptor.csvFormatDescriptor?.fileCompression,
                Charset: this.__input.s3SourceConfig?.fileFormatDescriptor.csvFormatDescriptor?.charset,
                ContainsHeader: this.__input.s3SourceConfig?.fileFormatDescriptor.csvFormatDescriptor?.containsHeader,
                Delimiter: this.__input.s3SourceConfig?.fileFormatDescriptor.csvFormatDescriptor?.delimiter,
                HeaderList: this.__input.s3SourceConfig?.fileFormatDescriptor.csvFormatDescriptor?.headerList,
                QuoteSymbol: this.__input.s3SourceConfig?.fileFormatDescriptor.csvFormatDescriptor?.quoteSymbol,
              },
              JsonFormatDescriptor: {
                FileCompression: this.__input.s3SourceConfig?.fileFormatDescriptor.jsonFormatDescriptor?.fileCompression,
                Charset: this.__input.s3SourceConfig?.fileFormatDescriptor.jsonFormatDescriptor?.charset,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSampleData.HeaderValues', props);
    return resource.getResponseField('HeaderValues') as unknown as string[];
  }

  public get sampleRows(): string[][] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSampleData',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.GetSampleData.SampleRows'),
        outputPath: 'SampleRows',
        parameters: {
          S3SourceConfig: {
            RoleArn: this.__input.s3SourceConfig?.roleArn,
            TemplatedPathList: this.__input.s3SourceConfig?.templatedPathList,
            HistoricalDataPathList: this.__input.s3SourceConfig?.historicalDataPathList,
            FileFormatDescriptor: {
              CsvFormatDescriptor: {
                FileCompression: this.__input.s3SourceConfig?.fileFormatDescriptor.csvFormatDescriptor?.fileCompression,
                Charset: this.__input.s3SourceConfig?.fileFormatDescriptor.csvFormatDescriptor?.charset,
                ContainsHeader: this.__input.s3SourceConfig?.fileFormatDescriptor.csvFormatDescriptor?.containsHeader,
                Delimiter: this.__input.s3SourceConfig?.fileFormatDescriptor.csvFormatDescriptor?.delimiter,
                HeaderList: this.__input.s3SourceConfig?.fileFormatDescriptor.csvFormatDescriptor?.headerList,
                QuoteSymbol: this.__input.s3SourceConfig?.fileFormatDescriptor.csvFormatDescriptor?.quoteSymbol,
              },
              JsonFormatDescriptor: {
                FileCompression: this.__input.s3SourceConfig?.fileFormatDescriptor.jsonFormatDescriptor?.fileCompression,
                Charset: this.__input.s3SourceConfig?.fileFormatDescriptor.jsonFormatDescriptor?.charset,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSampleData.SampleRows', props);
    return resource.getResponseField('SampleRows') as unknown as string[][];
  }

}

export class LookoutMetricsResponsesListAlerts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsListAlertsRequest) {
  }

  public get alertSummaryList(): shapes.LookoutMetricsAlertSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAlerts',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.ListAlerts.AlertSummaryList'),
        outputPath: 'AlertSummaryList',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAlerts.AlertSummaryList', props);
    return resource.getResponseField('AlertSummaryList') as unknown as shapes.LookoutMetricsAlertSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAlerts',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.ListAlerts.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAlerts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LookoutMetricsResponsesListAnomalyDetectors {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsListAnomalyDetectorsRequest) {
  }

  public get anomalyDetectorSummaryList(): shapes.LookoutMetricsAnomalyDetectorSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnomalyDetectors',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.ListAnomalyDetectors.AnomalyDetectorSummaryList'),
        outputPath: 'AnomalyDetectorSummaryList',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnomalyDetectors.AnomalyDetectorSummaryList', props);
    return resource.getResponseField('AnomalyDetectorSummaryList') as unknown as shapes.LookoutMetricsAnomalyDetectorSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnomalyDetectors',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.ListAnomalyDetectors.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnomalyDetectors.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LookoutMetricsResponsesListAnomalyGroupSummaries {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsListAnomalyGroupSummariesRequest) {
  }

  public get anomalyGroupSummaryList(): shapes.LookoutMetricsAnomalyGroupSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnomalyGroupSummaries',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.ListAnomalyGroupSummaries.AnomalyGroupSummaryList'),
        outputPath: 'AnomalyGroupSummaryList',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
          SensitivityThreshold: this.__input.sensitivityThreshold,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnomalyGroupSummaries.AnomalyGroupSummaryList', props);
    return resource.getResponseField('AnomalyGroupSummaryList') as unknown as shapes.LookoutMetricsAnomalyGroupSummary[];
  }

  public get anomalyGroupStatistics(): LookoutMetricsResponsesListAnomalyGroupSummariesAnomalyGroupStatistics {
    return new LookoutMetricsResponsesListAnomalyGroupSummariesAnomalyGroupStatistics(this.__scope, this.__resources, this.__input);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnomalyGroupSummaries',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.ListAnomalyGroupSummaries.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
          SensitivityThreshold: this.__input.sensitivityThreshold,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnomalyGroupSummaries.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LookoutMetricsResponsesListAnomalyGroupSummariesAnomalyGroupStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsListAnomalyGroupSummariesRequest) {
  }

  public get evaluationStartDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnomalyGroupSummaries',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.ListAnomalyGroupSummaries.AnomalyGroupStatistics.EvaluationStartDate'),
        outputPath: 'AnomalyGroupStatistics.EvaluationStartDate',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
          SensitivityThreshold: this.__input.sensitivityThreshold,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnomalyGroupSummaries.AnomalyGroupStatistics.EvaluationStartDate', props);
    return resource.getResponseField('AnomalyGroupStatistics.EvaluationStartDate') as unknown as string;
  }

  public get totalCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnomalyGroupSummaries',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.ListAnomalyGroupSummaries.AnomalyGroupStatistics.TotalCount'),
        outputPath: 'AnomalyGroupStatistics.TotalCount',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
          SensitivityThreshold: this.__input.sensitivityThreshold,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnomalyGroupSummaries.AnomalyGroupStatistics.TotalCount', props);
    return resource.getResponseField('AnomalyGroupStatistics.TotalCount') as unknown as number;
  }

  public get itemizedMetricStatsList(): shapes.LookoutMetricsItemizedMetricStats[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnomalyGroupSummaries',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.ListAnomalyGroupSummaries.AnomalyGroupStatistics.ItemizedMetricStatsList'),
        outputPath: 'AnomalyGroupStatistics.ItemizedMetricStatsList',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
          SensitivityThreshold: this.__input.sensitivityThreshold,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnomalyGroupSummaries.AnomalyGroupStatistics.ItemizedMetricStatsList', props);
    return resource.getResponseField('AnomalyGroupStatistics.ItemizedMetricStatsList') as unknown as shapes.LookoutMetricsItemizedMetricStats[];
  }

}

export class LookoutMetricsResponsesListAnomalyGroupTimeSeries {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsListAnomalyGroupTimeSeriesRequest) {
  }

  public get anomalyGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnomalyGroupTimeSeries',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.ListAnomalyGroupTimeSeries.AnomalyGroupId'),
        outputPath: 'AnomalyGroupId',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
          AnomalyGroupId: this.__input.anomalyGroupId,
          MetricName: this.__input.metricName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnomalyGroupTimeSeries.AnomalyGroupId', props);
    return resource.getResponseField('AnomalyGroupId') as unknown as string;
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnomalyGroupTimeSeries',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.ListAnomalyGroupTimeSeries.MetricName'),
        outputPath: 'MetricName',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
          AnomalyGroupId: this.__input.anomalyGroupId,
          MetricName: this.__input.metricName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnomalyGroupTimeSeries.MetricName', props);
    return resource.getResponseField('MetricName') as unknown as string;
  }

  public get timestampList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnomalyGroupTimeSeries',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.ListAnomalyGroupTimeSeries.TimestampList'),
        outputPath: 'TimestampList',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
          AnomalyGroupId: this.__input.anomalyGroupId,
          MetricName: this.__input.metricName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnomalyGroupTimeSeries.TimestampList', props);
    return resource.getResponseField('TimestampList') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnomalyGroupTimeSeries',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.ListAnomalyGroupTimeSeries.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
          AnomalyGroupId: this.__input.anomalyGroupId,
          MetricName: this.__input.metricName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnomalyGroupTimeSeries.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get timeSeriesList(): shapes.LookoutMetricsTimeSeries[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnomalyGroupTimeSeries',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.ListAnomalyGroupTimeSeries.TimeSeriesList'),
        outputPath: 'TimeSeriesList',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
          AnomalyGroupId: this.__input.anomalyGroupId,
          MetricName: this.__input.metricName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnomalyGroupTimeSeries.TimeSeriesList', props);
    return resource.getResponseField('TimeSeriesList') as unknown as shapes.LookoutMetricsTimeSeries[];
  }

}

export class LookoutMetricsResponsesListMetricSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsListMetricSetsRequest) {
  }

  public get metricSetSummaryList(): shapes.LookoutMetricsMetricSetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMetricSets',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.ListMetricSets.MetricSetSummaryList'),
        outputPath: 'MetricSetSummaryList',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMetricSets.MetricSetSummaryList', props);
    return resource.getResponseField('MetricSetSummaryList') as unknown as shapes.LookoutMetricsMetricSetSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMetricSets',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.ListMetricSets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMetricSets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LookoutMetricsResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.ListTagsForResource.Tags'),
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

export class LookoutMetricsResponsesUpdateAnomalyDetector {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsUpdateAnomalyDetectorRequest) {
  }

  public get anomalyDetectorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAnomalyDetector',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.UpdateAnomalyDetector.AnomalyDetectorArn'),
        outputPath: 'AnomalyDetectorArn',
        parameters: {
          AnomalyDetectorArn: this.__input.anomalyDetectorArn,
          KmsKeyArn: this.__input.kmsKeyArn,
          AnomalyDetectorDescription: this.__input.anomalyDetectorDescription,
          AnomalyDetectorConfig: {
            AnomalyDetectorFrequency: this.__input.anomalyDetectorConfig?.anomalyDetectorFrequency,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAnomalyDetector.AnomalyDetectorArn', props);
    return resource.getResponseField('AnomalyDetectorArn') as unknown as string;
  }

}

export class LookoutMetricsResponsesUpdateMetricSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutMetricsUpdateMetricSetRequest) {
  }

  public get metricSetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMetricSet',
        service: 'LookoutMetrics',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutMetrics.UpdateMetricSet.MetricSetArn'),
        outputPath: 'MetricSetArn',
        parameters: {
          MetricSetArn: this.__input.metricSetArn,
          MetricSetDescription: this.__input.metricSetDescription,
          MetricList: this.__input.metricList,
          Offset: this.__input.offset,
          TimestampColumn: {
            ColumnName: this.__input.timestampColumn?.columnName,
            ColumnFormat: this.__input.timestampColumn?.columnFormat,
          },
          DimensionList: this.__input.dimensionList,
          MetricSetFrequency: this.__input.metricSetFrequency,
          MetricSource: {
            S3SourceConfig: {
              RoleArn: this.__input.metricSource?.s3SourceConfig?.roleArn,
              TemplatedPathList: this.__input.metricSource?.s3SourceConfig?.templatedPathList,
              HistoricalDataPathList: this.__input.metricSource?.s3SourceConfig?.historicalDataPathList,
              FileFormatDescriptor: {
                CsvFormatDescriptor: {
                  FileCompression: this.__input.metricSource?.s3SourceConfig?.fileFormatDescriptor?.csvFormatDescriptor?.fileCompression,
                  Charset: this.__input.metricSource?.s3SourceConfig?.fileFormatDescriptor?.csvFormatDescriptor?.charset,
                  ContainsHeader: this.__input.metricSource?.s3SourceConfig?.fileFormatDescriptor?.csvFormatDescriptor?.containsHeader,
                  Delimiter: this.__input.metricSource?.s3SourceConfig?.fileFormatDescriptor?.csvFormatDescriptor?.delimiter,
                  HeaderList: this.__input.metricSource?.s3SourceConfig?.fileFormatDescriptor?.csvFormatDescriptor?.headerList,
                  QuoteSymbol: this.__input.metricSource?.s3SourceConfig?.fileFormatDescriptor?.csvFormatDescriptor?.quoteSymbol,
                },
                JsonFormatDescriptor: {
                  FileCompression: this.__input.metricSource?.s3SourceConfig?.fileFormatDescriptor?.jsonFormatDescriptor?.fileCompression,
                  Charset: this.__input.metricSource?.s3SourceConfig?.fileFormatDescriptor?.jsonFormatDescriptor?.charset,
                },
              },
            },
            AppFlowConfig: {
              RoleArn: this.__input.metricSource?.appFlowConfig?.roleArn,
              FlowName: this.__input.metricSource?.appFlowConfig?.flowName,
            },
            CloudWatchConfig: {
              RoleArn: this.__input.metricSource?.cloudWatchConfig?.roleArn,
            },
            RDSSourceConfig: {
              DBInstanceIdentifier: this.__input.metricSource?.rdsSourceConfig?.dbInstanceIdentifier,
              DatabaseHost: this.__input.metricSource?.rdsSourceConfig?.databaseHost,
              DatabasePort: this.__input.metricSource?.rdsSourceConfig?.databasePort,
              SecretManagerArn: this.__input.metricSource?.rdsSourceConfig?.secretManagerArn,
              DatabaseName: this.__input.metricSource?.rdsSourceConfig?.databaseName,
              TableName: this.__input.metricSource?.rdsSourceConfig?.tableName,
              RoleArn: this.__input.metricSource?.rdsSourceConfig?.roleArn,
              VpcConfiguration: {
                SubnetIdList: this.__input.metricSource?.rdsSourceConfig?.vpcConfiguration.subnetIdList,
                SecurityGroupIdList: this.__input.metricSource?.rdsSourceConfig?.vpcConfiguration.securityGroupIdList,
              },
            },
            RedshiftSourceConfig: {
              ClusterIdentifier: this.__input.metricSource?.redshiftSourceConfig?.clusterIdentifier,
              DatabaseHost: this.__input.metricSource?.redshiftSourceConfig?.databaseHost,
              DatabasePort: this.__input.metricSource?.redshiftSourceConfig?.databasePort,
              SecretManagerArn: this.__input.metricSource?.redshiftSourceConfig?.secretManagerArn,
              DatabaseName: this.__input.metricSource?.redshiftSourceConfig?.databaseName,
              TableName: this.__input.metricSource?.redshiftSourceConfig?.tableName,
              RoleArn: this.__input.metricSource?.redshiftSourceConfig?.roleArn,
              VpcConfiguration: {
                SubnetIdList: this.__input.metricSource?.redshiftSourceConfig?.vpcConfiguration.subnetIdList,
                SecurityGroupIdList: this.__input.metricSource?.redshiftSourceConfig?.vpcConfiguration.securityGroupIdList,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMetricSet.MetricSetArn', props);
    return resource.getResponseField('MetricSetArn') as unknown as string;
  }

}

