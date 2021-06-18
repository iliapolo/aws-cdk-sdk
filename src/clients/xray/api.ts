import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class XRayClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchGetTraces(input: shapes.XRayBatchGetTracesRequest): XRayBatchGetTraces {
    return new XRayBatchGetTraces(this, 'BatchGetTraces', this.__resources, input);
  }

  public createGroup(input: shapes.XRayCreateGroupRequest): XRayCreateGroup {
    return new XRayCreateGroup(this, 'CreateGroup', this.__resources, input);
  }

  public createSamplingRule(input: shapes.XRayCreateSamplingRuleRequest): XRayCreateSamplingRule {
    return new XRayCreateSamplingRule(this, 'CreateSamplingRule', this.__resources, input);
  }

  public deleteGroup(input: shapes.XRayDeleteGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteGroup'),
        parameters: {
          GroupName: input.groupName,
          GroupARN: input.groupArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteGroup', props);
  }

  public deleteSamplingRule(input: shapes.XRayDeleteSamplingRuleRequest): XRayDeleteSamplingRule {
    return new XRayDeleteSamplingRule(this, 'DeleteSamplingRule', this.__resources, input);
  }

  public fetchEncryptionConfig(): XRayFetchEncryptionConfig {
    return new XRayFetchEncryptionConfig(this, 'FetchEncryptionConfig', this.__resources);
  }

  public fetchGroup(input: shapes.XRayGetGroupRequest): XRayFetchGroup {
    return new XRayFetchGroup(this, 'FetchGroup', this.__resources, input);
  }

  public fetchGroups(input: shapes.XRayGetGroupsRequest): XRayFetchGroups {
    return new XRayFetchGroups(this, 'FetchGroups', this.__resources, input);
  }

  public fetchInsight(input: shapes.XRayGetInsightRequest): XRayFetchInsight {
    return new XRayFetchInsight(this, 'FetchInsight', this.__resources, input);
  }

  public fetchInsightEvents(input: shapes.XRayGetInsightEventsRequest): XRayFetchInsightEvents {
    return new XRayFetchInsightEvents(this, 'FetchInsightEvents', this.__resources, input);
  }

  public fetchInsightImpactGraph(input: shapes.XRayGetInsightImpactGraphRequest): XRayFetchInsightImpactGraph {
    return new XRayFetchInsightImpactGraph(this, 'FetchInsightImpactGraph', this.__resources, input);
  }

  public fetchInsightSummaries(input: shapes.XRayGetInsightSummariesRequest): XRayFetchInsightSummaries {
    return new XRayFetchInsightSummaries(this, 'FetchInsightSummaries', this.__resources, input);
  }

  public fetchSamplingRules(input: shapes.XRayGetSamplingRulesRequest): XRayFetchSamplingRules {
    return new XRayFetchSamplingRules(this, 'FetchSamplingRules', this.__resources, input);
  }

  public fetchSamplingStatisticSummaries(input: shapes.XRayGetSamplingStatisticSummariesRequest): XRayFetchSamplingStatisticSummaries {
    return new XRayFetchSamplingStatisticSummaries(this, 'FetchSamplingStatisticSummaries', this.__resources, input);
  }

  public fetchSamplingTargets(input: shapes.XRayGetSamplingTargetsRequest): XRayFetchSamplingTargets {
    return new XRayFetchSamplingTargets(this, 'FetchSamplingTargets', this.__resources, input);
  }

  public fetchServiceGraph(input: shapes.XRayGetServiceGraphRequest): XRayFetchServiceGraph {
    return new XRayFetchServiceGraph(this, 'FetchServiceGraph', this.__resources, input);
  }

  public fetchTimeSeriesServiceStatistics(input: shapes.XRayGetTimeSeriesServiceStatisticsRequest): XRayFetchTimeSeriesServiceStatistics {
    return new XRayFetchTimeSeriesServiceStatistics(this, 'FetchTimeSeriesServiceStatistics', this.__resources, input);
  }

  public fetchTraceGraph(input: shapes.XRayGetTraceGraphRequest): XRayFetchTraceGraph {
    return new XRayFetchTraceGraph(this, 'FetchTraceGraph', this.__resources, input);
  }

  public fetchTraceSummaries(input: shapes.XRayGetTraceSummariesRequest): XRayFetchTraceSummaries {
    return new XRayFetchTraceSummaries(this, 'FetchTraceSummaries', this.__resources, input);
  }

  public listTagsForResource(input: shapes.XRayListTagsForResourceRequest): XRayListTagsForResource {
    return new XRayListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public putEncryptionConfig(input: shapes.XRayPutEncryptionConfigRequest): XRayPutEncryptionConfig {
    return new XRayPutEncryptionConfig(this, 'PutEncryptionConfig', this.__resources, input);
  }

  public putTelemetryRecords(input: shapes.XRayPutTelemetryRecordsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putTelemetryRecords',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.PutTelemetryRecords'),
        parameters: {
          TelemetryRecords: input.telemetryRecords,
          EC2InstanceId: input.ec2InstanceId,
          Hostname: input.hostname,
          ResourceARN: input.resourceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutTelemetryRecords', props);
  }

  public putTraceSegments(input: shapes.XRayPutTraceSegmentsRequest): XRayPutTraceSegments {
    return new XRayPutTraceSegments(this, 'PutTraceSegments', this.__resources, input);
  }

  public tagResource(input: shapes.XRayTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.TagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.XRayUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UntagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateGroup(input: shapes.XRayUpdateGroupRequest): XRayUpdateGroup {
    return new XRayUpdateGroup(this, 'UpdateGroup', this.__resources, input);
  }

  public updateSamplingRule(input: shapes.XRayUpdateSamplingRuleRequest): XRayUpdateSamplingRule {
    return new XRayUpdateSamplingRule(this, 'UpdateSamplingRule', this.__resources, input);
  }

}

export class XRayBatchGetTraces extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayBatchGetTracesRequest) {
    super(scope, id);
  }

  public get traces(): shapes.XRayTrace[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetTraces',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.BatchGetTraces.Traces'),
        outputPath: 'Traces',
        parameters: {
          TraceIds: this.input.traceIds,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetTraces.Traces', props);
    return resource.getResponseField('Traces') as unknown as shapes.XRayTrace[];
  }

  public get unprocessedTraceIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetTraces',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.BatchGetTraces.UnprocessedTraceIds'),
        outputPath: 'UnprocessedTraceIds',
        parameters: {
          TraceIds: this.input.traceIds,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetTraces.UnprocessedTraceIds', props);
    return resource.getResponseField('UnprocessedTraceIds') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetTraces',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.BatchGetTraces.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          TraceIds: this.input.traceIds,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetTraces.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class XRayCreateGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayCreateGroupRequest) {
    super(scope, id);
  }

  public get group(): XRayCreateGroupGroup {
    return new XRayCreateGroupGroup(this, 'Group', this.__resources, this.input);
  }

}

export class XRayCreateGroupGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayCreateGroupRequest) {
    super(scope, id);
  }

  public get groupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateGroup.Group.GroupName'),
        outputPath: 'Group.GroupName',
        parameters: {
          GroupName: this.input.groupName,
          FilterExpression: this.input.filterExpression,
          InsightsConfiguration: {
            InsightsEnabled: this.input.insightsConfiguration?.insightsEnabled,
            NotificationsEnabled: this.input.insightsConfiguration?.notificationsEnabled,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.Group.GroupName', props);
    return resource.getResponseField('Group.GroupName') as unknown as string;
  }

  public get groupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateGroup.Group.GroupARN'),
        outputPath: 'Group.GroupARN',
        parameters: {
          GroupName: this.input.groupName,
          FilterExpression: this.input.filterExpression,
          InsightsConfiguration: {
            InsightsEnabled: this.input.insightsConfiguration?.insightsEnabled,
            NotificationsEnabled: this.input.insightsConfiguration?.notificationsEnabled,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.Group.GroupARN', props);
    return resource.getResponseField('Group.GroupARN') as unknown as string;
  }

  public get filterExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateGroup.Group.FilterExpression'),
        outputPath: 'Group.FilterExpression',
        parameters: {
          GroupName: this.input.groupName,
          FilterExpression: this.input.filterExpression,
          InsightsConfiguration: {
            InsightsEnabled: this.input.insightsConfiguration?.insightsEnabled,
            NotificationsEnabled: this.input.insightsConfiguration?.notificationsEnabled,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.Group.FilterExpression', props);
    return resource.getResponseField('Group.FilterExpression') as unknown as string;
  }

  public get insightsConfiguration(): XRayCreateGroupGroupInsightsConfiguration {
    return new XRayCreateGroupGroupInsightsConfiguration(this, 'InsightsConfiguration', this.__resources, this.input);
  }

}

export class XRayCreateGroupGroupInsightsConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayCreateGroupRequest) {
    super(scope, id);
  }

  public get insightsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateGroup.Group.InsightsConfiguration.InsightsEnabled'),
        outputPath: 'Group.InsightsConfiguration.InsightsEnabled',
        parameters: {
          GroupName: this.input.groupName,
          FilterExpression: this.input.filterExpression,
          InsightsConfiguration: {
            InsightsEnabled: this.input.insightsConfiguration?.insightsEnabled,
            NotificationsEnabled: this.input.insightsConfiguration?.notificationsEnabled,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.Group.InsightsConfiguration.InsightsEnabled', props);
    return resource.getResponseField('Group.InsightsConfiguration.InsightsEnabled') as unknown as boolean;
  }

  public get notificationsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateGroup.Group.InsightsConfiguration.NotificationsEnabled'),
        outputPath: 'Group.InsightsConfiguration.NotificationsEnabled',
        parameters: {
          GroupName: this.input.groupName,
          FilterExpression: this.input.filterExpression,
          InsightsConfiguration: {
            InsightsEnabled: this.input.insightsConfiguration?.insightsEnabled,
            NotificationsEnabled: this.input.insightsConfiguration?.notificationsEnabled,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.Group.InsightsConfiguration.NotificationsEnabled', props);
    return resource.getResponseField('Group.InsightsConfiguration.NotificationsEnabled') as unknown as boolean;
  }

}

export class XRayCreateSamplingRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayCreateSamplingRuleRequest) {
    super(scope, id);
  }

  public get samplingRuleRecord(): XRayCreateSamplingRuleSamplingRuleRecord {
    return new XRayCreateSamplingRuleSamplingRuleRecord(this, 'SamplingRuleRecord', this.__resources, this.input);
  }

}

export class XRayCreateSamplingRuleSamplingRuleRecord extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayCreateSamplingRuleRequest) {
    super(scope, id);
  }

  public get samplingRule(): XRayCreateSamplingRuleSamplingRuleRecordSamplingRule {
    return new XRayCreateSamplingRuleSamplingRuleRecordSamplingRule(this, 'SamplingRule', this.__resources, this.input);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.CreatedAt'),
        outputPath: 'SamplingRuleRecord.CreatedAt',
        parameters: {
          SamplingRule: {
            RuleName: this.input.samplingRule.ruleName,
            RuleARN: this.input.samplingRule.ruleArn,
            ResourceARN: this.input.samplingRule.resourceArn,
            Priority: this.input.samplingRule.priority,
            FixedRate: this.input.samplingRule.fixedRate,
            ReservoirSize: this.input.samplingRule.reservoirSize,
            ServiceName: this.input.samplingRule.serviceName,
            ServiceType: this.input.samplingRule.serviceType,
            Host: this.input.samplingRule.host,
            HTTPMethod: this.input.samplingRule.httpMethod,
            URLPath: this.input.samplingRule.urlPath,
            Version: this.input.samplingRule.version,
            Attributes: this.input.samplingRule.attributes,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.CreatedAt', props);
    return resource.getResponseField('SamplingRuleRecord.CreatedAt') as unknown as string;
  }

  public get modifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.ModifiedAt'),
        outputPath: 'SamplingRuleRecord.ModifiedAt',
        parameters: {
          SamplingRule: {
            RuleName: this.input.samplingRule.ruleName,
            RuleARN: this.input.samplingRule.ruleArn,
            ResourceARN: this.input.samplingRule.resourceArn,
            Priority: this.input.samplingRule.priority,
            FixedRate: this.input.samplingRule.fixedRate,
            ReservoirSize: this.input.samplingRule.reservoirSize,
            ServiceName: this.input.samplingRule.serviceName,
            ServiceType: this.input.samplingRule.serviceType,
            Host: this.input.samplingRule.host,
            HTTPMethod: this.input.samplingRule.httpMethod,
            URLPath: this.input.samplingRule.urlPath,
            Version: this.input.samplingRule.version,
            Attributes: this.input.samplingRule.attributes,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.ModifiedAt', props);
    return resource.getResponseField('SamplingRuleRecord.ModifiedAt') as unknown as string;
  }

}

export class XRayCreateSamplingRuleSamplingRuleRecordSamplingRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayCreateSamplingRuleRequest) {
    super(scope, id);
  }

  public get ruleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.RuleName'),
        outputPath: 'SamplingRuleRecord.SamplingRule.RuleName',
        parameters: {
          SamplingRule: {
            RuleName: this.input.samplingRule.ruleName,
            RuleARN: this.input.samplingRule.ruleArn,
            ResourceARN: this.input.samplingRule.resourceArn,
            Priority: this.input.samplingRule.priority,
            FixedRate: this.input.samplingRule.fixedRate,
            ReservoirSize: this.input.samplingRule.reservoirSize,
            ServiceName: this.input.samplingRule.serviceName,
            ServiceType: this.input.samplingRule.serviceType,
            Host: this.input.samplingRule.host,
            HTTPMethod: this.input.samplingRule.httpMethod,
            URLPath: this.input.samplingRule.urlPath,
            Version: this.input.samplingRule.version,
            Attributes: this.input.samplingRule.attributes,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.RuleName', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.RuleName') as unknown as string;
  }

  public get ruleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.RuleARN'),
        outputPath: 'SamplingRuleRecord.SamplingRule.RuleARN',
        parameters: {
          SamplingRule: {
            RuleName: this.input.samplingRule.ruleName,
            RuleARN: this.input.samplingRule.ruleArn,
            ResourceARN: this.input.samplingRule.resourceArn,
            Priority: this.input.samplingRule.priority,
            FixedRate: this.input.samplingRule.fixedRate,
            ReservoirSize: this.input.samplingRule.reservoirSize,
            ServiceName: this.input.samplingRule.serviceName,
            ServiceType: this.input.samplingRule.serviceType,
            Host: this.input.samplingRule.host,
            HTTPMethod: this.input.samplingRule.httpMethod,
            URLPath: this.input.samplingRule.urlPath,
            Version: this.input.samplingRule.version,
            Attributes: this.input.samplingRule.attributes,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.RuleARN', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.RuleARN') as unknown as string;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.ResourceARN'),
        outputPath: 'SamplingRuleRecord.SamplingRule.ResourceARN',
        parameters: {
          SamplingRule: {
            RuleName: this.input.samplingRule.ruleName,
            RuleARN: this.input.samplingRule.ruleArn,
            ResourceARN: this.input.samplingRule.resourceArn,
            Priority: this.input.samplingRule.priority,
            FixedRate: this.input.samplingRule.fixedRate,
            ReservoirSize: this.input.samplingRule.reservoirSize,
            ServiceName: this.input.samplingRule.serviceName,
            ServiceType: this.input.samplingRule.serviceType,
            Host: this.input.samplingRule.host,
            HTTPMethod: this.input.samplingRule.httpMethod,
            URLPath: this.input.samplingRule.urlPath,
            Version: this.input.samplingRule.version,
            Attributes: this.input.samplingRule.attributes,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.ResourceARN', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.ResourceARN') as unknown as string;
  }

  public get priority(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.Priority'),
        outputPath: 'SamplingRuleRecord.SamplingRule.Priority',
        parameters: {
          SamplingRule: {
            RuleName: this.input.samplingRule.ruleName,
            RuleARN: this.input.samplingRule.ruleArn,
            ResourceARN: this.input.samplingRule.resourceArn,
            Priority: this.input.samplingRule.priority,
            FixedRate: this.input.samplingRule.fixedRate,
            ReservoirSize: this.input.samplingRule.reservoirSize,
            ServiceName: this.input.samplingRule.serviceName,
            ServiceType: this.input.samplingRule.serviceType,
            Host: this.input.samplingRule.host,
            HTTPMethod: this.input.samplingRule.httpMethod,
            URLPath: this.input.samplingRule.urlPath,
            Version: this.input.samplingRule.version,
            Attributes: this.input.samplingRule.attributes,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.Priority', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.Priority') as unknown as number;
  }

  public get fixedRate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.FixedRate'),
        outputPath: 'SamplingRuleRecord.SamplingRule.FixedRate',
        parameters: {
          SamplingRule: {
            RuleName: this.input.samplingRule.ruleName,
            RuleARN: this.input.samplingRule.ruleArn,
            ResourceARN: this.input.samplingRule.resourceArn,
            Priority: this.input.samplingRule.priority,
            FixedRate: this.input.samplingRule.fixedRate,
            ReservoirSize: this.input.samplingRule.reservoirSize,
            ServiceName: this.input.samplingRule.serviceName,
            ServiceType: this.input.samplingRule.serviceType,
            Host: this.input.samplingRule.host,
            HTTPMethod: this.input.samplingRule.httpMethod,
            URLPath: this.input.samplingRule.urlPath,
            Version: this.input.samplingRule.version,
            Attributes: this.input.samplingRule.attributes,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.FixedRate', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.FixedRate') as unknown as number;
  }

  public get reservoirSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.ReservoirSize'),
        outputPath: 'SamplingRuleRecord.SamplingRule.ReservoirSize',
        parameters: {
          SamplingRule: {
            RuleName: this.input.samplingRule.ruleName,
            RuleARN: this.input.samplingRule.ruleArn,
            ResourceARN: this.input.samplingRule.resourceArn,
            Priority: this.input.samplingRule.priority,
            FixedRate: this.input.samplingRule.fixedRate,
            ReservoirSize: this.input.samplingRule.reservoirSize,
            ServiceName: this.input.samplingRule.serviceName,
            ServiceType: this.input.samplingRule.serviceType,
            Host: this.input.samplingRule.host,
            HTTPMethod: this.input.samplingRule.httpMethod,
            URLPath: this.input.samplingRule.urlPath,
            Version: this.input.samplingRule.version,
            Attributes: this.input.samplingRule.attributes,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.ReservoirSize', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.ReservoirSize') as unknown as number;
  }

  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.ServiceName'),
        outputPath: 'SamplingRuleRecord.SamplingRule.ServiceName',
        parameters: {
          SamplingRule: {
            RuleName: this.input.samplingRule.ruleName,
            RuleARN: this.input.samplingRule.ruleArn,
            ResourceARN: this.input.samplingRule.resourceArn,
            Priority: this.input.samplingRule.priority,
            FixedRate: this.input.samplingRule.fixedRate,
            ReservoirSize: this.input.samplingRule.reservoirSize,
            ServiceName: this.input.samplingRule.serviceName,
            ServiceType: this.input.samplingRule.serviceType,
            Host: this.input.samplingRule.host,
            HTTPMethod: this.input.samplingRule.httpMethod,
            URLPath: this.input.samplingRule.urlPath,
            Version: this.input.samplingRule.version,
            Attributes: this.input.samplingRule.attributes,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.ServiceName', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.ServiceName') as unknown as string;
  }

  public get serviceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.ServiceType'),
        outputPath: 'SamplingRuleRecord.SamplingRule.ServiceType',
        parameters: {
          SamplingRule: {
            RuleName: this.input.samplingRule.ruleName,
            RuleARN: this.input.samplingRule.ruleArn,
            ResourceARN: this.input.samplingRule.resourceArn,
            Priority: this.input.samplingRule.priority,
            FixedRate: this.input.samplingRule.fixedRate,
            ReservoirSize: this.input.samplingRule.reservoirSize,
            ServiceName: this.input.samplingRule.serviceName,
            ServiceType: this.input.samplingRule.serviceType,
            Host: this.input.samplingRule.host,
            HTTPMethod: this.input.samplingRule.httpMethod,
            URLPath: this.input.samplingRule.urlPath,
            Version: this.input.samplingRule.version,
            Attributes: this.input.samplingRule.attributes,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.ServiceType', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.ServiceType') as unknown as string;
  }

  public get host(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.Host'),
        outputPath: 'SamplingRuleRecord.SamplingRule.Host',
        parameters: {
          SamplingRule: {
            RuleName: this.input.samplingRule.ruleName,
            RuleARN: this.input.samplingRule.ruleArn,
            ResourceARN: this.input.samplingRule.resourceArn,
            Priority: this.input.samplingRule.priority,
            FixedRate: this.input.samplingRule.fixedRate,
            ReservoirSize: this.input.samplingRule.reservoirSize,
            ServiceName: this.input.samplingRule.serviceName,
            ServiceType: this.input.samplingRule.serviceType,
            Host: this.input.samplingRule.host,
            HTTPMethod: this.input.samplingRule.httpMethod,
            URLPath: this.input.samplingRule.urlPath,
            Version: this.input.samplingRule.version,
            Attributes: this.input.samplingRule.attributes,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.Host', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.Host') as unknown as string;
  }

  public get httpMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.HTTPMethod'),
        outputPath: 'SamplingRuleRecord.SamplingRule.HTTPMethod',
        parameters: {
          SamplingRule: {
            RuleName: this.input.samplingRule.ruleName,
            RuleARN: this.input.samplingRule.ruleArn,
            ResourceARN: this.input.samplingRule.resourceArn,
            Priority: this.input.samplingRule.priority,
            FixedRate: this.input.samplingRule.fixedRate,
            ReservoirSize: this.input.samplingRule.reservoirSize,
            ServiceName: this.input.samplingRule.serviceName,
            ServiceType: this.input.samplingRule.serviceType,
            Host: this.input.samplingRule.host,
            HTTPMethod: this.input.samplingRule.httpMethod,
            URLPath: this.input.samplingRule.urlPath,
            Version: this.input.samplingRule.version,
            Attributes: this.input.samplingRule.attributes,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.HTTPMethod', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.HTTPMethod') as unknown as string;
  }

  public get urlPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.URLPath'),
        outputPath: 'SamplingRuleRecord.SamplingRule.URLPath',
        parameters: {
          SamplingRule: {
            RuleName: this.input.samplingRule.ruleName,
            RuleARN: this.input.samplingRule.ruleArn,
            ResourceARN: this.input.samplingRule.resourceArn,
            Priority: this.input.samplingRule.priority,
            FixedRate: this.input.samplingRule.fixedRate,
            ReservoirSize: this.input.samplingRule.reservoirSize,
            ServiceName: this.input.samplingRule.serviceName,
            ServiceType: this.input.samplingRule.serviceType,
            Host: this.input.samplingRule.host,
            HTTPMethod: this.input.samplingRule.httpMethod,
            URLPath: this.input.samplingRule.urlPath,
            Version: this.input.samplingRule.version,
            Attributes: this.input.samplingRule.attributes,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.URLPath', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.URLPath') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.Version'),
        outputPath: 'SamplingRuleRecord.SamplingRule.Version',
        parameters: {
          SamplingRule: {
            RuleName: this.input.samplingRule.ruleName,
            RuleARN: this.input.samplingRule.ruleArn,
            ResourceARN: this.input.samplingRule.resourceArn,
            Priority: this.input.samplingRule.priority,
            FixedRate: this.input.samplingRule.fixedRate,
            ReservoirSize: this.input.samplingRule.reservoirSize,
            ServiceName: this.input.samplingRule.serviceName,
            ServiceType: this.input.samplingRule.serviceType,
            Host: this.input.samplingRule.host,
            HTTPMethod: this.input.samplingRule.httpMethod,
            URLPath: this.input.samplingRule.urlPath,
            Version: this.input.samplingRule.version,
            Attributes: this.input.samplingRule.attributes,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.Version', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.Version') as unknown as number;
  }

  public get attributes(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.Attributes'),
        outputPath: 'SamplingRuleRecord.SamplingRule.Attributes',
        parameters: {
          SamplingRule: {
            RuleName: this.input.samplingRule.ruleName,
            RuleARN: this.input.samplingRule.ruleArn,
            ResourceARN: this.input.samplingRule.resourceArn,
            Priority: this.input.samplingRule.priority,
            FixedRate: this.input.samplingRule.fixedRate,
            ReservoirSize: this.input.samplingRule.reservoirSize,
            ServiceName: this.input.samplingRule.serviceName,
            ServiceType: this.input.samplingRule.serviceType,
            Host: this.input.samplingRule.host,
            HTTPMethod: this.input.samplingRule.httpMethod,
            URLPath: this.input.samplingRule.urlPath,
            Version: this.input.samplingRule.version,
            Attributes: this.input.samplingRule.attributes,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.Attributes', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.Attributes') as unknown as Record<string, string>;
  }

}

export class XRayDeleteSamplingRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayDeleteSamplingRuleRequest) {
    super(scope, id);
  }

  public get samplingRuleRecord(): XRayDeleteSamplingRuleSamplingRuleRecord {
    return new XRayDeleteSamplingRuleSamplingRuleRecord(this, 'SamplingRuleRecord', this.__resources, this.input);
  }

}

export class XRayDeleteSamplingRuleSamplingRuleRecord extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayDeleteSamplingRuleRequest) {
    super(scope, id);
  }

  public get samplingRule(): XRayDeleteSamplingRuleSamplingRuleRecordSamplingRule {
    return new XRayDeleteSamplingRuleSamplingRuleRecordSamplingRule(this, 'SamplingRule', this.__resources, this.input);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.CreatedAt'),
        outputPath: 'SamplingRuleRecord.CreatedAt',
        parameters: {
          RuleName: this.input.ruleName,
          RuleARN: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.CreatedAt', props);
    return resource.getResponseField('SamplingRuleRecord.CreatedAt') as unknown as string;
  }

  public get modifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.ModifiedAt'),
        outputPath: 'SamplingRuleRecord.ModifiedAt',
        parameters: {
          RuleName: this.input.ruleName,
          RuleARN: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.ModifiedAt', props);
    return resource.getResponseField('SamplingRuleRecord.ModifiedAt') as unknown as string;
  }

}

export class XRayDeleteSamplingRuleSamplingRuleRecordSamplingRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayDeleteSamplingRuleRequest) {
    super(scope, id);
  }

  public get ruleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.RuleName'),
        outputPath: 'SamplingRuleRecord.SamplingRule.RuleName',
        parameters: {
          RuleName: this.input.ruleName,
          RuleARN: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.RuleName', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.RuleName') as unknown as string;
  }

  public get ruleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.RuleARN'),
        outputPath: 'SamplingRuleRecord.SamplingRule.RuleARN',
        parameters: {
          RuleName: this.input.ruleName,
          RuleARN: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.RuleARN', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.RuleARN') as unknown as string;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.ResourceARN'),
        outputPath: 'SamplingRuleRecord.SamplingRule.ResourceARN',
        parameters: {
          RuleName: this.input.ruleName,
          RuleARN: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.ResourceARN', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.ResourceARN') as unknown as string;
  }

  public get priority(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.Priority'),
        outputPath: 'SamplingRuleRecord.SamplingRule.Priority',
        parameters: {
          RuleName: this.input.ruleName,
          RuleARN: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.Priority', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.Priority') as unknown as number;
  }

  public get fixedRate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.FixedRate'),
        outputPath: 'SamplingRuleRecord.SamplingRule.FixedRate',
        parameters: {
          RuleName: this.input.ruleName,
          RuleARN: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.FixedRate', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.FixedRate') as unknown as number;
  }

  public get reservoirSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.ReservoirSize'),
        outputPath: 'SamplingRuleRecord.SamplingRule.ReservoirSize',
        parameters: {
          RuleName: this.input.ruleName,
          RuleARN: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.ReservoirSize', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.ReservoirSize') as unknown as number;
  }

  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.ServiceName'),
        outputPath: 'SamplingRuleRecord.SamplingRule.ServiceName',
        parameters: {
          RuleName: this.input.ruleName,
          RuleARN: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.ServiceName', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.ServiceName') as unknown as string;
  }

  public get serviceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.ServiceType'),
        outputPath: 'SamplingRuleRecord.SamplingRule.ServiceType',
        parameters: {
          RuleName: this.input.ruleName,
          RuleARN: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.ServiceType', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.ServiceType') as unknown as string;
  }

  public get host(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.Host'),
        outputPath: 'SamplingRuleRecord.SamplingRule.Host',
        parameters: {
          RuleName: this.input.ruleName,
          RuleARN: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.Host', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.Host') as unknown as string;
  }

  public get httpMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.HTTPMethod'),
        outputPath: 'SamplingRuleRecord.SamplingRule.HTTPMethod',
        parameters: {
          RuleName: this.input.ruleName,
          RuleARN: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.HTTPMethod', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.HTTPMethod') as unknown as string;
  }

  public get urlPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.URLPath'),
        outputPath: 'SamplingRuleRecord.SamplingRule.URLPath',
        parameters: {
          RuleName: this.input.ruleName,
          RuleARN: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.URLPath', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.URLPath') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.Version'),
        outputPath: 'SamplingRuleRecord.SamplingRule.Version',
        parameters: {
          RuleName: this.input.ruleName,
          RuleARN: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.Version', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.Version') as unknown as number;
  }

  public get attributes(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.Attributes'),
        outputPath: 'SamplingRuleRecord.SamplingRule.Attributes',
        parameters: {
          RuleName: this.input.ruleName,
          RuleARN: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.Attributes', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.Attributes') as unknown as Record<string, string>;
  }

}

export class XRayFetchEncryptionConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get encryptionConfig(): XRayFetchEncryptionConfigEncryptionConfig {
    return new XRayFetchEncryptionConfigEncryptionConfig(this, 'EncryptionConfig', this.__resources);
  }

}

export class XRayFetchEncryptionConfigEncryptionConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEncryptionConfig',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetEncryptionConfig.EncryptionConfig.KeyId'),
        outputPath: 'EncryptionConfig.KeyId',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEncryptionConfig.EncryptionConfig.KeyId', props);
    return resource.getResponseField('EncryptionConfig.KeyId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEncryptionConfig',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetEncryptionConfig.EncryptionConfig.Status'),
        outputPath: 'EncryptionConfig.Status',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEncryptionConfig.EncryptionConfig.Status', props);
    return resource.getResponseField('EncryptionConfig.Status') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEncryptionConfig',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetEncryptionConfig.EncryptionConfig.Type'),
        outputPath: 'EncryptionConfig.Type',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEncryptionConfig.EncryptionConfig.Type', props);
    return resource.getResponseField('EncryptionConfig.Type') as unknown as string;
  }

}

export class XRayFetchGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayGetGroupRequest) {
    super(scope, id);
  }

  public get group(): XRayFetchGroupGroup {
    return new XRayFetchGroupGroup(this, 'Group', this.__resources, this.input);
  }

}

export class XRayFetchGroupGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayGetGroupRequest) {
    super(scope, id);
  }

  public get groupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetGroup.Group.GroupName'),
        outputPath: 'Group.GroupName',
        parameters: {
          GroupName: this.input.groupName,
          GroupARN: this.input.groupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.Group.GroupName', props);
    return resource.getResponseField('Group.GroupName') as unknown as string;
  }

  public get groupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetGroup.Group.GroupARN'),
        outputPath: 'Group.GroupARN',
        parameters: {
          GroupName: this.input.groupName,
          GroupARN: this.input.groupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.Group.GroupARN', props);
    return resource.getResponseField('Group.GroupARN') as unknown as string;
  }

  public get filterExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetGroup.Group.FilterExpression'),
        outputPath: 'Group.FilterExpression',
        parameters: {
          GroupName: this.input.groupName,
          GroupARN: this.input.groupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.Group.FilterExpression', props);
    return resource.getResponseField('Group.FilterExpression') as unknown as string;
  }

  public get insightsConfiguration(): XRayFetchGroupGroupInsightsConfiguration {
    return new XRayFetchGroupGroupInsightsConfiguration(this, 'InsightsConfiguration', this.__resources, this.input);
  }

}

export class XRayFetchGroupGroupInsightsConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayGetGroupRequest) {
    super(scope, id);
  }

  public get insightsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetGroup.Group.InsightsConfiguration.InsightsEnabled'),
        outputPath: 'Group.InsightsConfiguration.InsightsEnabled',
        parameters: {
          GroupName: this.input.groupName,
          GroupARN: this.input.groupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.Group.InsightsConfiguration.InsightsEnabled', props);
    return resource.getResponseField('Group.InsightsConfiguration.InsightsEnabled') as unknown as boolean;
  }

  public get notificationsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetGroup.Group.InsightsConfiguration.NotificationsEnabled'),
        outputPath: 'Group.InsightsConfiguration.NotificationsEnabled',
        parameters: {
          GroupName: this.input.groupName,
          GroupARN: this.input.groupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.Group.InsightsConfiguration.NotificationsEnabled', props);
    return resource.getResponseField('Group.InsightsConfiguration.NotificationsEnabled') as unknown as boolean;
  }

}

export class XRayFetchGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayGetGroupsRequest) {
    super(scope, id);
  }

  public get groups(): shapes.XRayGroupSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroups',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetGroups.Groups'),
        outputPath: 'Groups',
        parameters: {
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroups.Groups', props);
    return resource.getResponseField('Groups') as unknown as shapes.XRayGroupSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroups',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetGroups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class XRayFetchInsight extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayGetInsightRequest) {
    super(scope, id);
  }

  public get insight(): XRayFetchInsightInsight {
    return new XRayFetchInsightInsight(this, 'Insight', this.__resources, this.input);
  }

}

export class XRayFetchInsightInsight extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayGetInsightRequest) {
    super(scope, id);
  }

  public get insightId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.InsightId'),
        outputPath: 'Insight.InsightId',
        parameters: {
          InsightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.InsightId', props);
    return resource.getResponseField('Insight.InsightId') as unknown as string;
  }

  public get groupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.GroupARN'),
        outputPath: 'Insight.GroupARN',
        parameters: {
          InsightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.GroupARN', props);
    return resource.getResponseField('Insight.GroupARN') as unknown as string;
  }

  public get groupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.GroupName'),
        outputPath: 'Insight.GroupName',
        parameters: {
          InsightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.GroupName', props);
    return resource.getResponseField('Insight.GroupName') as unknown as string;
  }

  public get rootCauseServiceId(): XRayFetchInsightInsightRootCauseServiceId {
    return new XRayFetchInsightInsightRootCauseServiceId(this, 'RootCauseServiceId', this.__resources, this.input);
  }

  public get categories(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.Categories'),
        outputPath: 'Insight.Categories',
        parameters: {
          InsightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.Categories', props);
    return resource.getResponseField('Insight.Categories') as unknown as string[];
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.State'),
        outputPath: 'Insight.State',
        parameters: {
          InsightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.State', props);
    return resource.getResponseField('Insight.State') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.StartTime'),
        outputPath: 'Insight.StartTime',
        parameters: {
          InsightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.StartTime', props);
    return resource.getResponseField('Insight.StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.EndTime'),
        outputPath: 'Insight.EndTime',
        parameters: {
          InsightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.EndTime', props);
    return resource.getResponseField('Insight.EndTime') as unknown as string;
  }

  public get summary(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.Summary'),
        outputPath: 'Insight.Summary',
        parameters: {
          InsightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.Summary', props);
    return resource.getResponseField('Insight.Summary') as unknown as string;
  }

  public get clientRequestImpactStatistics(): XRayFetchInsightInsightClientRequestImpactStatistics {
    return new XRayFetchInsightInsightClientRequestImpactStatistics(this, 'ClientRequestImpactStatistics', this.__resources, this.input);
  }

  public get rootCauseServiceRequestImpactStatistics(): XRayFetchInsightInsightRootCauseServiceRequestImpactStatistics {
    return new XRayFetchInsightInsightRootCauseServiceRequestImpactStatistics(this, 'RootCauseServiceRequestImpactStatistics', this.__resources, this.input);
  }

  public get topAnomalousServices(): shapes.XRayAnomalousService[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.TopAnomalousServices'),
        outputPath: 'Insight.TopAnomalousServices',
        parameters: {
          InsightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.TopAnomalousServices', props);
    return resource.getResponseField('Insight.TopAnomalousServices') as unknown as shapes.XRayAnomalousService[];
  }

}

export class XRayFetchInsightInsightRootCauseServiceId extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayGetInsightRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.RootCauseServiceId.Name'),
        outputPath: 'Insight.RootCauseServiceId.Name',
        parameters: {
          InsightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.RootCauseServiceId.Name', props);
    return resource.getResponseField('Insight.RootCauseServiceId.Name') as unknown as string;
  }

  public get names(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.RootCauseServiceId.Names'),
        outputPath: 'Insight.RootCauseServiceId.Names',
        parameters: {
          InsightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.RootCauseServiceId.Names', props);
    return resource.getResponseField('Insight.RootCauseServiceId.Names') as unknown as string[];
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.RootCauseServiceId.AccountId'),
        outputPath: 'Insight.RootCauseServiceId.AccountId',
        parameters: {
          InsightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.RootCauseServiceId.AccountId', props);
    return resource.getResponseField('Insight.RootCauseServiceId.AccountId') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.RootCauseServiceId.Type'),
        outputPath: 'Insight.RootCauseServiceId.Type',
        parameters: {
          InsightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.RootCauseServiceId.Type', props);
    return resource.getResponseField('Insight.RootCauseServiceId.Type') as unknown as string;
  }

}

export class XRayFetchInsightInsightClientRequestImpactStatistics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayGetInsightRequest) {
    super(scope, id);
  }

  public get faultCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.ClientRequestImpactStatistics.FaultCount'),
        outputPath: 'Insight.ClientRequestImpactStatistics.FaultCount',
        parameters: {
          InsightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.ClientRequestImpactStatistics.FaultCount', props);
    return resource.getResponseField('Insight.ClientRequestImpactStatistics.FaultCount') as unknown as number;
  }

  public get okCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.ClientRequestImpactStatistics.OkCount'),
        outputPath: 'Insight.ClientRequestImpactStatistics.OkCount',
        parameters: {
          InsightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.ClientRequestImpactStatistics.OkCount', props);
    return resource.getResponseField('Insight.ClientRequestImpactStatistics.OkCount') as unknown as number;
  }

  public get totalCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.ClientRequestImpactStatistics.TotalCount'),
        outputPath: 'Insight.ClientRequestImpactStatistics.TotalCount',
        parameters: {
          InsightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.ClientRequestImpactStatistics.TotalCount', props);
    return resource.getResponseField('Insight.ClientRequestImpactStatistics.TotalCount') as unknown as number;
  }

}

export class XRayFetchInsightInsightRootCauseServiceRequestImpactStatistics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayGetInsightRequest) {
    super(scope, id);
  }

  public get faultCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.RootCauseServiceRequestImpactStatistics.FaultCount'),
        outputPath: 'Insight.RootCauseServiceRequestImpactStatistics.FaultCount',
        parameters: {
          InsightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.RootCauseServiceRequestImpactStatistics.FaultCount', props);
    return resource.getResponseField('Insight.RootCauseServiceRequestImpactStatistics.FaultCount') as unknown as number;
  }

  public get okCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.RootCauseServiceRequestImpactStatistics.OkCount'),
        outputPath: 'Insight.RootCauseServiceRequestImpactStatistics.OkCount',
        parameters: {
          InsightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.RootCauseServiceRequestImpactStatistics.OkCount', props);
    return resource.getResponseField('Insight.RootCauseServiceRequestImpactStatistics.OkCount') as unknown as number;
  }

  public get totalCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.RootCauseServiceRequestImpactStatistics.TotalCount'),
        outputPath: 'Insight.RootCauseServiceRequestImpactStatistics.TotalCount',
        parameters: {
          InsightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.RootCauseServiceRequestImpactStatistics.TotalCount', props);
    return resource.getResponseField('Insight.RootCauseServiceRequestImpactStatistics.TotalCount') as unknown as number;
  }

}

export class XRayFetchInsightEvents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayGetInsightEventsRequest) {
    super(scope, id);
  }

  public get insightEvents(): shapes.XRayInsightEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsightEvents',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsightEvents.InsightEvents'),
        outputPath: 'InsightEvents',
        parameters: {
          InsightId: this.input.insightId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsightEvents.InsightEvents', props);
    return resource.getResponseField('InsightEvents') as unknown as shapes.XRayInsightEvent[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsightEvents',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsightEvents.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InsightId: this.input.insightId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsightEvents.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class XRayFetchInsightImpactGraph extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayGetInsightImpactGraphRequest) {
    super(scope, id);
  }

  public get insightId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsightImpactGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsightImpactGraph.InsightId'),
        outputPath: 'InsightId',
        parameters: {
          InsightId: this.input.insightId,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsightImpactGraph.InsightId', props);
    return resource.getResponseField('InsightId') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsightImpactGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsightImpactGraph.StartTime'),
        outputPath: 'StartTime',
        parameters: {
          InsightId: this.input.insightId,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsightImpactGraph.StartTime', props);
    return resource.getResponseField('StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsightImpactGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsightImpactGraph.EndTime'),
        outputPath: 'EndTime',
        parameters: {
          InsightId: this.input.insightId,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsightImpactGraph.EndTime', props);
    return resource.getResponseField('EndTime') as unknown as string;
  }

  public get serviceGraphStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsightImpactGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsightImpactGraph.ServiceGraphStartTime'),
        outputPath: 'ServiceGraphStartTime',
        parameters: {
          InsightId: this.input.insightId,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsightImpactGraph.ServiceGraphStartTime', props);
    return resource.getResponseField('ServiceGraphStartTime') as unknown as string;
  }

  public get serviceGraphEndTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsightImpactGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsightImpactGraph.ServiceGraphEndTime'),
        outputPath: 'ServiceGraphEndTime',
        parameters: {
          InsightId: this.input.insightId,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsightImpactGraph.ServiceGraphEndTime', props);
    return resource.getResponseField('ServiceGraphEndTime') as unknown as string;
  }

  public get services(): shapes.XRayInsightImpactGraphService[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsightImpactGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsightImpactGraph.Services'),
        outputPath: 'Services',
        parameters: {
          InsightId: this.input.insightId,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsightImpactGraph.Services', props);
    return resource.getResponseField('Services') as unknown as shapes.XRayInsightImpactGraphService[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsightImpactGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsightImpactGraph.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InsightId: this.input.insightId,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsightImpactGraph.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class XRayFetchInsightSummaries extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayGetInsightSummariesRequest) {
    super(scope, id);
  }

  public get insightSummaries(): shapes.XRayInsightSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsightSummaries',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsightSummaries.InsightSummaries'),
        outputPath: 'InsightSummaries',
        parameters: {
          States: this.input.states,
          GroupARN: this.input.groupArn,
          GroupName: this.input.groupName,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsightSummaries.InsightSummaries', props);
    return resource.getResponseField('InsightSummaries') as unknown as shapes.XRayInsightSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsightSummaries',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsightSummaries.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          States: this.input.states,
          GroupARN: this.input.groupArn,
          GroupName: this.input.groupName,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsightSummaries.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class XRayFetchSamplingRules extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayGetSamplingRulesRequest) {
    super(scope, id);
  }

  public get samplingRuleRecords(): shapes.XRaySamplingRuleRecord[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSamplingRules',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetSamplingRules.SamplingRuleRecords'),
        outputPath: 'SamplingRuleRecords',
        parameters: {
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSamplingRules.SamplingRuleRecords', props);
    return resource.getResponseField('SamplingRuleRecords') as unknown as shapes.XRaySamplingRuleRecord[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSamplingRules',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetSamplingRules.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSamplingRules.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class XRayFetchSamplingStatisticSummaries extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayGetSamplingStatisticSummariesRequest) {
    super(scope, id);
  }

  public get samplingStatisticSummaries(): shapes.XRaySamplingStatisticSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSamplingStatisticSummaries',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetSamplingStatisticSummaries.SamplingStatisticSummaries'),
        outputPath: 'SamplingStatisticSummaries',
        parameters: {
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSamplingStatisticSummaries.SamplingStatisticSummaries', props);
    return resource.getResponseField('SamplingStatisticSummaries') as unknown as shapes.XRaySamplingStatisticSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSamplingStatisticSummaries',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetSamplingStatisticSummaries.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSamplingStatisticSummaries.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class XRayFetchSamplingTargets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayGetSamplingTargetsRequest) {
    super(scope, id);
  }

  public get samplingTargetDocuments(): shapes.XRaySamplingTargetDocument[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSamplingTargets',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetSamplingTargets.SamplingTargetDocuments'),
        outputPath: 'SamplingTargetDocuments',
        parameters: {
          SamplingStatisticsDocuments: this.input.samplingStatisticsDocuments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSamplingTargets.SamplingTargetDocuments', props);
    return resource.getResponseField('SamplingTargetDocuments') as unknown as shapes.XRaySamplingTargetDocument[];
  }

  public get lastRuleModification(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSamplingTargets',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetSamplingTargets.LastRuleModification'),
        outputPath: 'LastRuleModification',
        parameters: {
          SamplingStatisticsDocuments: this.input.samplingStatisticsDocuments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSamplingTargets.LastRuleModification', props);
    return resource.getResponseField('LastRuleModification') as unknown as string;
  }

  public get unprocessedStatistics(): shapes.XRayUnprocessedStatistics[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSamplingTargets',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetSamplingTargets.UnprocessedStatistics'),
        outputPath: 'UnprocessedStatistics',
        parameters: {
          SamplingStatisticsDocuments: this.input.samplingStatisticsDocuments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSamplingTargets.UnprocessedStatistics', props);
    return resource.getResponseField('UnprocessedStatistics') as unknown as shapes.XRayUnprocessedStatistics[];
  }

}

export class XRayFetchServiceGraph extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayGetServiceGraphRequest) {
    super(scope, id);
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetServiceGraph.StartTime'),
        outputPath: 'StartTime',
        parameters: {
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          GroupName: this.input.groupName,
          GroupARN: this.input.groupArn,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceGraph.StartTime', props);
    return resource.getResponseField('StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetServiceGraph.EndTime'),
        outputPath: 'EndTime',
        parameters: {
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          GroupName: this.input.groupName,
          GroupARN: this.input.groupArn,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceGraph.EndTime', props);
    return resource.getResponseField('EndTime') as unknown as string;
  }

  public get services(): shapes.XRayService[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetServiceGraph.Services'),
        outputPath: 'Services',
        parameters: {
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          GroupName: this.input.groupName,
          GroupARN: this.input.groupArn,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceGraph.Services', props);
    return resource.getResponseField('Services') as unknown as shapes.XRayService[];
  }

  public get containsOldGroupVersions(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetServiceGraph.ContainsOldGroupVersions'),
        outputPath: 'ContainsOldGroupVersions',
        parameters: {
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          GroupName: this.input.groupName,
          GroupARN: this.input.groupArn,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceGraph.ContainsOldGroupVersions', props);
    return resource.getResponseField('ContainsOldGroupVersions') as unknown as boolean;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetServiceGraph.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          GroupName: this.input.groupName,
          GroupARN: this.input.groupArn,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceGraph.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class XRayFetchTimeSeriesServiceStatistics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayGetTimeSeriesServiceStatisticsRequest) {
    super(scope, id);
  }

  public get timeSeriesServiceStatistics(): shapes.XRayTimeSeriesServiceStatistics[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTimeSeriesServiceStatistics',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetTimeSeriesServiceStatistics.TimeSeriesServiceStatistics'),
        outputPath: 'TimeSeriesServiceStatistics',
        parameters: {
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          GroupName: this.input.groupName,
          GroupARN: this.input.groupArn,
          EntitySelectorExpression: this.input.entitySelectorExpression,
          Period: this.input.period,
          ForecastStatistics: this.input.forecastStatistics,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTimeSeriesServiceStatistics.TimeSeriesServiceStatistics', props);
    return resource.getResponseField('TimeSeriesServiceStatistics') as unknown as shapes.XRayTimeSeriesServiceStatistics[];
  }

  public get containsOldGroupVersions(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTimeSeriesServiceStatistics',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetTimeSeriesServiceStatistics.ContainsOldGroupVersions'),
        outputPath: 'ContainsOldGroupVersions',
        parameters: {
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          GroupName: this.input.groupName,
          GroupARN: this.input.groupArn,
          EntitySelectorExpression: this.input.entitySelectorExpression,
          Period: this.input.period,
          ForecastStatistics: this.input.forecastStatistics,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTimeSeriesServiceStatistics.ContainsOldGroupVersions', props);
    return resource.getResponseField('ContainsOldGroupVersions') as unknown as boolean;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTimeSeriesServiceStatistics',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetTimeSeriesServiceStatistics.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          GroupName: this.input.groupName,
          GroupARN: this.input.groupArn,
          EntitySelectorExpression: this.input.entitySelectorExpression,
          Period: this.input.period,
          ForecastStatistics: this.input.forecastStatistics,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTimeSeriesServiceStatistics.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class XRayFetchTraceGraph extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayGetTraceGraphRequest) {
    super(scope, id);
  }

  public get services(): shapes.XRayService[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTraceGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetTraceGraph.Services'),
        outputPath: 'Services',
        parameters: {
          TraceIds: this.input.traceIds,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTraceGraph.Services', props);
    return resource.getResponseField('Services') as unknown as shapes.XRayService[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTraceGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetTraceGraph.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          TraceIds: this.input.traceIds,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTraceGraph.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class XRayFetchTraceSummaries extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayGetTraceSummariesRequest) {
    super(scope, id);
  }

  public get traceSummaries(): shapes.XRayTraceSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTraceSummaries',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetTraceSummaries.TraceSummaries'),
        outputPath: 'TraceSummaries',
        parameters: {
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          TimeRangeType: this.input.timeRangeType,
          Sampling: this.input.sampling,
          SamplingStrategy: {
            Name: this.input.samplingStrategy?.name,
            Value: this.input.samplingStrategy?.value,
          },
          FilterExpression: this.input.filterExpression,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTraceSummaries.TraceSummaries', props);
    return resource.getResponseField('TraceSummaries') as unknown as shapes.XRayTraceSummary[];
  }

  public get approximateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTraceSummaries',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetTraceSummaries.ApproximateTime'),
        outputPath: 'ApproximateTime',
        parameters: {
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          TimeRangeType: this.input.timeRangeType,
          Sampling: this.input.sampling,
          SamplingStrategy: {
            Name: this.input.samplingStrategy?.name,
            Value: this.input.samplingStrategy?.value,
          },
          FilterExpression: this.input.filterExpression,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTraceSummaries.ApproximateTime', props);
    return resource.getResponseField('ApproximateTime') as unknown as string;
  }

  public get tracesProcessedCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTraceSummaries',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetTraceSummaries.TracesProcessedCount'),
        outputPath: 'TracesProcessedCount',
        parameters: {
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          TimeRangeType: this.input.timeRangeType,
          Sampling: this.input.sampling,
          SamplingStrategy: {
            Name: this.input.samplingStrategy?.name,
            Value: this.input.samplingStrategy?.value,
          },
          FilterExpression: this.input.filterExpression,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTraceSummaries.TracesProcessedCount', props);
    return resource.getResponseField('TracesProcessedCount') as unknown as number;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTraceSummaries',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetTraceSummaries.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          TimeRangeType: this.input.timeRangeType,
          Sampling: this.input.sampling,
          SamplingStrategy: {
            Name: this.input.samplingStrategy?.name,
            Value: this.input.samplingStrategy?.value,
          },
          FilterExpression: this.input.filterExpression,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTraceSummaries.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class XRayListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): shapes.XRayTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceARN: this.input.resourceArn,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.XRayTag[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.ListTagsForResource.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceARN: this.input.resourceArn,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class XRayPutEncryptionConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayPutEncryptionConfigRequest) {
    super(scope, id);
  }

  public get encryptionConfig(): XRayPutEncryptionConfigEncryptionConfig {
    return new XRayPutEncryptionConfigEncryptionConfig(this, 'EncryptionConfig', this.__resources, this.input);
  }

}

export class XRayPutEncryptionConfigEncryptionConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayPutEncryptionConfigRequest) {
    super(scope, id);
  }

  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putEncryptionConfig',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.PutEncryptionConfig.EncryptionConfig.KeyId'),
        outputPath: 'EncryptionConfig.KeyId',
        parameters: {
          KeyId: this.input.keyId,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutEncryptionConfig.EncryptionConfig.KeyId', props);
    return resource.getResponseField('EncryptionConfig.KeyId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putEncryptionConfig',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.PutEncryptionConfig.EncryptionConfig.Status'),
        outputPath: 'EncryptionConfig.Status',
        parameters: {
          KeyId: this.input.keyId,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutEncryptionConfig.EncryptionConfig.Status', props);
    return resource.getResponseField('EncryptionConfig.Status') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putEncryptionConfig',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.PutEncryptionConfig.EncryptionConfig.Type'),
        outputPath: 'EncryptionConfig.Type',
        parameters: {
          KeyId: this.input.keyId,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutEncryptionConfig.EncryptionConfig.Type', props);
    return resource.getResponseField('EncryptionConfig.Type') as unknown as string;
  }

}

export class XRayPutTraceSegments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayPutTraceSegmentsRequest) {
    super(scope, id);
  }

  public get unprocessedTraceSegments(): shapes.XRayUnprocessedTraceSegment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putTraceSegments',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.PutTraceSegments.UnprocessedTraceSegments'),
        outputPath: 'UnprocessedTraceSegments',
        parameters: {
          TraceSegmentDocuments: this.input.traceSegmentDocuments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutTraceSegments.UnprocessedTraceSegments', props);
    return resource.getResponseField('UnprocessedTraceSegments') as unknown as shapes.XRayUnprocessedTraceSegment[];
  }

}

export class XRayUpdateGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayUpdateGroupRequest) {
    super(scope, id);
  }

  public get group(): XRayUpdateGroupGroup {
    return new XRayUpdateGroupGroup(this, 'Group', this.__resources, this.input);
  }

}

export class XRayUpdateGroupGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayUpdateGroupRequest) {
    super(scope, id);
  }

  public get groupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateGroup.Group.GroupName'),
        outputPath: 'Group.GroupName',
        parameters: {
          GroupName: this.input.groupName,
          GroupARN: this.input.groupArn,
          FilterExpression: this.input.filterExpression,
          InsightsConfiguration: {
            InsightsEnabled: this.input.insightsConfiguration?.insightsEnabled,
            NotificationsEnabled: this.input.insightsConfiguration?.notificationsEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGroup.Group.GroupName', props);
    return resource.getResponseField('Group.GroupName') as unknown as string;
  }

  public get groupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateGroup.Group.GroupARN'),
        outputPath: 'Group.GroupARN',
        parameters: {
          GroupName: this.input.groupName,
          GroupARN: this.input.groupArn,
          FilterExpression: this.input.filterExpression,
          InsightsConfiguration: {
            InsightsEnabled: this.input.insightsConfiguration?.insightsEnabled,
            NotificationsEnabled: this.input.insightsConfiguration?.notificationsEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGroup.Group.GroupARN', props);
    return resource.getResponseField('Group.GroupARN') as unknown as string;
  }

  public get filterExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateGroup.Group.FilterExpression'),
        outputPath: 'Group.FilterExpression',
        parameters: {
          GroupName: this.input.groupName,
          GroupARN: this.input.groupArn,
          FilterExpression: this.input.filterExpression,
          InsightsConfiguration: {
            InsightsEnabled: this.input.insightsConfiguration?.insightsEnabled,
            NotificationsEnabled: this.input.insightsConfiguration?.notificationsEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGroup.Group.FilterExpression', props);
    return resource.getResponseField('Group.FilterExpression') as unknown as string;
  }

  public get insightsConfiguration(): XRayUpdateGroupGroupInsightsConfiguration {
    return new XRayUpdateGroupGroupInsightsConfiguration(this, 'InsightsConfiguration', this.__resources, this.input);
  }

}

export class XRayUpdateGroupGroupInsightsConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayUpdateGroupRequest) {
    super(scope, id);
  }

  public get insightsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateGroup.Group.InsightsConfiguration.InsightsEnabled'),
        outputPath: 'Group.InsightsConfiguration.InsightsEnabled',
        parameters: {
          GroupName: this.input.groupName,
          GroupARN: this.input.groupArn,
          FilterExpression: this.input.filterExpression,
          InsightsConfiguration: {
            InsightsEnabled: this.input.insightsConfiguration?.insightsEnabled,
            NotificationsEnabled: this.input.insightsConfiguration?.notificationsEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGroup.Group.InsightsConfiguration.InsightsEnabled', props);
    return resource.getResponseField('Group.InsightsConfiguration.InsightsEnabled') as unknown as boolean;
  }

  public get notificationsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateGroup.Group.InsightsConfiguration.NotificationsEnabled'),
        outputPath: 'Group.InsightsConfiguration.NotificationsEnabled',
        parameters: {
          GroupName: this.input.groupName,
          GroupARN: this.input.groupArn,
          FilterExpression: this.input.filterExpression,
          InsightsConfiguration: {
            InsightsEnabled: this.input.insightsConfiguration?.insightsEnabled,
            NotificationsEnabled: this.input.insightsConfiguration?.notificationsEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGroup.Group.InsightsConfiguration.NotificationsEnabled', props);
    return resource.getResponseField('Group.InsightsConfiguration.NotificationsEnabled') as unknown as boolean;
  }

}

export class XRayUpdateSamplingRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayUpdateSamplingRuleRequest) {
    super(scope, id);
  }

  public get samplingRuleRecord(): XRayUpdateSamplingRuleSamplingRuleRecord {
    return new XRayUpdateSamplingRuleSamplingRuleRecord(this, 'SamplingRuleRecord', this.__resources, this.input);
  }

}

export class XRayUpdateSamplingRuleSamplingRuleRecord extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayUpdateSamplingRuleRequest) {
    super(scope, id);
  }

  public get samplingRule(): XRayUpdateSamplingRuleSamplingRuleRecordSamplingRule {
    return new XRayUpdateSamplingRuleSamplingRuleRecordSamplingRule(this, 'SamplingRule', this.__resources, this.input);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.CreatedAt'),
        outputPath: 'SamplingRuleRecord.CreatedAt',
        parameters: {
          SamplingRuleUpdate: {
            RuleName: this.input.samplingRuleUpdate.ruleName,
            RuleARN: this.input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.input.samplingRuleUpdate.resourceArn,
            Priority: this.input.samplingRuleUpdate.priority,
            FixedRate: this.input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            Host: this.input.samplingRuleUpdate.host,
            ServiceName: this.input.samplingRuleUpdate.serviceName,
            ServiceType: this.input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.input.samplingRuleUpdate.httpMethod,
            URLPath: this.input.samplingRuleUpdate.urlPath,
            Attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.CreatedAt', props);
    return resource.getResponseField('SamplingRuleRecord.CreatedAt') as unknown as string;
  }

  public get modifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.ModifiedAt'),
        outputPath: 'SamplingRuleRecord.ModifiedAt',
        parameters: {
          SamplingRuleUpdate: {
            RuleName: this.input.samplingRuleUpdate.ruleName,
            RuleARN: this.input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.input.samplingRuleUpdate.resourceArn,
            Priority: this.input.samplingRuleUpdate.priority,
            FixedRate: this.input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            Host: this.input.samplingRuleUpdate.host,
            ServiceName: this.input.samplingRuleUpdate.serviceName,
            ServiceType: this.input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.input.samplingRuleUpdate.httpMethod,
            URLPath: this.input.samplingRuleUpdate.urlPath,
            Attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.ModifiedAt', props);
    return resource.getResponseField('SamplingRuleRecord.ModifiedAt') as unknown as string;
  }

}

export class XRayUpdateSamplingRuleSamplingRuleRecordSamplingRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.XRayUpdateSamplingRuleRequest) {
    super(scope, id);
  }

  public get ruleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.RuleName'),
        outputPath: 'SamplingRuleRecord.SamplingRule.RuleName',
        parameters: {
          SamplingRuleUpdate: {
            RuleName: this.input.samplingRuleUpdate.ruleName,
            RuleARN: this.input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.input.samplingRuleUpdate.resourceArn,
            Priority: this.input.samplingRuleUpdate.priority,
            FixedRate: this.input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            Host: this.input.samplingRuleUpdate.host,
            ServiceName: this.input.samplingRuleUpdate.serviceName,
            ServiceType: this.input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.input.samplingRuleUpdate.httpMethod,
            URLPath: this.input.samplingRuleUpdate.urlPath,
            Attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.RuleName', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.RuleName') as unknown as string;
  }

  public get ruleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.RuleARN'),
        outputPath: 'SamplingRuleRecord.SamplingRule.RuleARN',
        parameters: {
          SamplingRuleUpdate: {
            RuleName: this.input.samplingRuleUpdate.ruleName,
            RuleARN: this.input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.input.samplingRuleUpdate.resourceArn,
            Priority: this.input.samplingRuleUpdate.priority,
            FixedRate: this.input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            Host: this.input.samplingRuleUpdate.host,
            ServiceName: this.input.samplingRuleUpdate.serviceName,
            ServiceType: this.input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.input.samplingRuleUpdate.httpMethod,
            URLPath: this.input.samplingRuleUpdate.urlPath,
            Attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.RuleARN', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.RuleARN') as unknown as string;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.ResourceARN'),
        outputPath: 'SamplingRuleRecord.SamplingRule.ResourceARN',
        parameters: {
          SamplingRuleUpdate: {
            RuleName: this.input.samplingRuleUpdate.ruleName,
            RuleARN: this.input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.input.samplingRuleUpdate.resourceArn,
            Priority: this.input.samplingRuleUpdate.priority,
            FixedRate: this.input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            Host: this.input.samplingRuleUpdate.host,
            ServiceName: this.input.samplingRuleUpdate.serviceName,
            ServiceType: this.input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.input.samplingRuleUpdate.httpMethod,
            URLPath: this.input.samplingRuleUpdate.urlPath,
            Attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.ResourceARN', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.ResourceARN') as unknown as string;
  }

  public get priority(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.Priority'),
        outputPath: 'SamplingRuleRecord.SamplingRule.Priority',
        parameters: {
          SamplingRuleUpdate: {
            RuleName: this.input.samplingRuleUpdate.ruleName,
            RuleARN: this.input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.input.samplingRuleUpdate.resourceArn,
            Priority: this.input.samplingRuleUpdate.priority,
            FixedRate: this.input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            Host: this.input.samplingRuleUpdate.host,
            ServiceName: this.input.samplingRuleUpdate.serviceName,
            ServiceType: this.input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.input.samplingRuleUpdate.httpMethod,
            URLPath: this.input.samplingRuleUpdate.urlPath,
            Attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.Priority', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.Priority') as unknown as number;
  }

  public get fixedRate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.FixedRate'),
        outputPath: 'SamplingRuleRecord.SamplingRule.FixedRate',
        parameters: {
          SamplingRuleUpdate: {
            RuleName: this.input.samplingRuleUpdate.ruleName,
            RuleARN: this.input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.input.samplingRuleUpdate.resourceArn,
            Priority: this.input.samplingRuleUpdate.priority,
            FixedRate: this.input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            Host: this.input.samplingRuleUpdate.host,
            ServiceName: this.input.samplingRuleUpdate.serviceName,
            ServiceType: this.input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.input.samplingRuleUpdate.httpMethod,
            URLPath: this.input.samplingRuleUpdate.urlPath,
            Attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.FixedRate', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.FixedRate') as unknown as number;
  }

  public get reservoirSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.ReservoirSize'),
        outputPath: 'SamplingRuleRecord.SamplingRule.ReservoirSize',
        parameters: {
          SamplingRuleUpdate: {
            RuleName: this.input.samplingRuleUpdate.ruleName,
            RuleARN: this.input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.input.samplingRuleUpdate.resourceArn,
            Priority: this.input.samplingRuleUpdate.priority,
            FixedRate: this.input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            Host: this.input.samplingRuleUpdate.host,
            ServiceName: this.input.samplingRuleUpdate.serviceName,
            ServiceType: this.input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.input.samplingRuleUpdate.httpMethod,
            URLPath: this.input.samplingRuleUpdate.urlPath,
            Attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.ReservoirSize', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.ReservoirSize') as unknown as number;
  }

  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.ServiceName'),
        outputPath: 'SamplingRuleRecord.SamplingRule.ServiceName',
        parameters: {
          SamplingRuleUpdate: {
            RuleName: this.input.samplingRuleUpdate.ruleName,
            RuleARN: this.input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.input.samplingRuleUpdate.resourceArn,
            Priority: this.input.samplingRuleUpdate.priority,
            FixedRate: this.input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            Host: this.input.samplingRuleUpdate.host,
            ServiceName: this.input.samplingRuleUpdate.serviceName,
            ServiceType: this.input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.input.samplingRuleUpdate.httpMethod,
            URLPath: this.input.samplingRuleUpdate.urlPath,
            Attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.ServiceName', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.ServiceName') as unknown as string;
  }

  public get serviceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.ServiceType'),
        outputPath: 'SamplingRuleRecord.SamplingRule.ServiceType',
        parameters: {
          SamplingRuleUpdate: {
            RuleName: this.input.samplingRuleUpdate.ruleName,
            RuleARN: this.input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.input.samplingRuleUpdate.resourceArn,
            Priority: this.input.samplingRuleUpdate.priority,
            FixedRate: this.input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            Host: this.input.samplingRuleUpdate.host,
            ServiceName: this.input.samplingRuleUpdate.serviceName,
            ServiceType: this.input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.input.samplingRuleUpdate.httpMethod,
            URLPath: this.input.samplingRuleUpdate.urlPath,
            Attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.ServiceType', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.ServiceType') as unknown as string;
  }

  public get host(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.Host'),
        outputPath: 'SamplingRuleRecord.SamplingRule.Host',
        parameters: {
          SamplingRuleUpdate: {
            RuleName: this.input.samplingRuleUpdate.ruleName,
            RuleARN: this.input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.input.samplingRuleUpdate.resourceArn,
            Priority: this.input.samplingRuleUpdate.priority,
            FixedRate: this.input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            Host: this.input.samplingRuleUpdate.host,
            ServiceName: this.input.samplingRuleUpdate.serviceName,
            ServiceType: this.input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.input.samplingRuleUpdate.httpMethod,
            URLPath: this.input.samplingRuleUpdate.urlPath,
            Attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.Host', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.Host') as unknown as string;
  }

  public get httpMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.HTTPMethod'),
        outputPath: 'SamplingRuleRecord.SamplingRule.HTTPMethod',
        parameters: {
          SamplingRuleUpdate: {
            RuleName: this.input.samplingRuleUpdate.ruleName,
            RuleARN: this.input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.input.samplingRuleUpdate.resourceArn,
            Priority: this.input.samplingRuleUpdate.priority,
            FixedRate: this.input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            Host: this.input.samplingRuleUpdate.host,
            ServiceName: this.input.samplingRuleUpdate.serviceName,
            ServiceType: this.input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.input.samplingRuleUpdate.httpMethod,
            URLPath: this.input.samplingRuleUpdate.urlPath,
            Attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.HTTPMethod', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.HTTPMethod') as unknown as string;
  }

  public get urlPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.URLPath'),
        outputPath: 'SamplingRuleRecord.SamplingRule.URLPath',
        parameters: {
          SamplingRuleUpdate: {
            RuleName: this.input.samplingRuleUpdate.ruleName,
            RuleARN: this.input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.input.samplingRuleUpdate.resourceArn,
            Priority: this.input.samplingRuleUpdate.priority,
            FixedRate: this.input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            Host: this.input.samplingRuleUpdate.host,
            ServiceName: this.input.samplingRuleUpdate.serviceName,
            ServiceType: this.input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.input.samplingRuleUpdate.httpMethod,
            URLPath: this.input.samplingRuleUpdate.urlPath,
            Attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.URLPath', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.URLPath') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.Version'),
        outputPath: 'SamplingRuleRecord.SamplingRule.Version',
        parameters: {
          SamplingRuleUpdate: {
            RuleName: this.input.samplingRuleUpdate.ruleName,
            RuleARN: this.input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.input.samplingRuleUpdate.resourceArn,
            Priority: this.input.samplingRuleUpdate.priority,
            FixedRate: this.input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            Host: this.input.samplingRuleUpdate.host,
            ServiceName: this.input.samplingRuleUpdate.serviceName,
            ServiceType: this.input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.input.samplingRuleUpdate.httpMethod,
            URLPath: this.input.samplingRuleUpdate.urlPath,
            Attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.Version', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.Version') as unknown as number;
  }

  public get attributes(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.Attributes'),
        outputPath: 'SamplingRuleRecord.SamplingRule.Attributes',
        parameters: {
          SamplingRuleUpdate: {
            RuleName: this.input.samplingRuleUpdate.ruleName,
            RuleARN: this.input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.input.samplingRuleUpdate.resourceArn,
            Priority: this.input.samplingRuleUpdate.priority,
            FixedRate: this.input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            Host: this.input.samplingRuleUpdate.host,
            ServiceName: this.input.samplingRuleUpdate.serviceName,
            ServiceType: this.input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.input.samplingRuleUpdate.httpMethod,
            URLPath: this.input.samplingRuleUpdate.urlPath,
            Attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.Attributes', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.Attributes') as unknown as Record<string, string>;
  }

}

