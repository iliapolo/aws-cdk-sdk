import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class XRayClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchGetTraces(input: shapes.XRayBatchGetTracesRequest): XRayResponsesBatchGetTraces {
    return new XRayResponsesBatchGetTraces(this, this.__resources, input);
  }

  public createGroup(input: shapes.XRayCreateGroupRequest): XRayResponsesCreateGroup {
    return new XRayResponsesCreateGroup(this, this.__resources, input);
  }

  public createSamplingRule(input: shapes.XRayCreateSamplingRuleRequest): XRayResponsesCreateSamplingRule {
    return new XRayResponsesCreateSamplingRule(this, this.__resources, input);
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

  public deleteSamplingRule(input: shapes.XRayDeleteSamplingRuleRequest): XRayResponsesDeleteSamplingRule {
    return new XRayResponsesDeleteSamplingRule(this, this.__resources, input);
  }

  public fetchEncryptionConfig(): XRayResponsesFetchEncryptionConfig {
    return new XRayResponsesFetchEncryptionConfig(this, this.__resources);
  }

  public fetchGroup(input: shapes.XRayGetGroupRequest): XRayResponsesFetchGroup {
    return new XRayResponsesFetchGroup(this, this.__resources, input);
  }

  public fetchGroups(input: shapes.XRayGetGroupsRequest): XRayResponsesFetchGroups {
    return new XRayResponsesFetchGroups(this, this.__resources, input);
  }

  public fetchInsight(input: shapes.XRayGetInsightRequest): XRayResponsesFetchInsight {
    return new XRayResponsesFetchInsight(this, this.__resources, input);
  }

  public fetchInsightEvents(input: shapes.XRayGetInsightEventsRequest): XRayResponsesFetchInsightEvents {
    return new XRayResponsesFetchInsightEvents(this, this.__resources, input);
  }

  public fetchInsightImpactGraph(input: shapes.XRayGetInsightImpactGraphRequest): XRayResponsesFetchInsightImpactGraph {
    return new XRayResponsesFetchInsightImpactGraph(this, this.__resources, input);
  }

  public fetchInsightSummaries(input: shapes.XRayGetInsightSummariesRequest): XRayResponsesFetchInsightSummaries {
    return new XRayResponsesFetchInsightSummaries(this, this.__resources, input);
  }

  public fetchSamplingRules(input: shapes.XRayGetSamplingRulesRequest): XRayResponsesFetchSamplingRules {
    return new XRayResponsesFetchSamplingRules(this, this.__resources, input);
  }

  public fetchSamplingStatisticSummaries(input: shapes.XRayGetSamplingStatisticSummariesRequest): XRayResponsesFetchSamplingStatisticSummaries {
    return new XRayResponsesFetchSamplingStatisticSummaries(this, this.__resources, input);
  }

  public fetchSamplingTargets(input: shapes.XRayGetSamplingTargetsRequest): XRayResponsesFetchSamplingTargets {
    return new XRayResponsesFetchSamplingTargets(this, this.__resources, input);
  }

  public fetchServiceGraph(input: shapes.XRayGetServiceGraphRequest): XRayResponsesFetchServiceGraph {
    return new XRayResponsesFetchServiceGraph(this, this.__resources, input);
  }

  public fetchTimeSeriesServiceStatistics(input: shapes.XRayGetTimeSeriesServiceStatisticsRequest): XRayResponsesFetchTimeSeriesServiceStatistics {
    return new XRayResponsesFetchTimeSeriesServiceStatistics(this, this.__resources, input);
  }

  public fetchTraceGraph(input: shapes.XRayGetTraceGraphRequest): XRayResponsesFetchTraceGraph {
    return new XRayResponsesFetchTraceGraph(this, this.__resources, input);
  }

  public fetchTraceSummaries(input: shapes.XRayGetTraceSummariesRequest): XRayResponsesFetchTraceSummaries {
    return new XRayResponsesFetchTraceSummaries(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.XRayListTagsForResourceRequest): XRayResponsesListTagsForResource {
    return new XRayResponsesListTagsForResource(this, this.__resources, input);
  }

  public putEncryptionConfig(input: shapes.XRayPutEncryptionConfigRequest): XRayResponsesPutEncryptionConfig {
    return new XRayResponsesPutEncryptionConfig(this, this.__resources, input);
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

  public putTraceSegments(input: shapes.XRayPutTraceSegmentsRequest): XRayResponsesPutTraceSegments {
    return new XRayResponsesPutTraceSegments(this, this.__resources, input);
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

  public updateGroup(input: shapes.XRayUpdateGroupRequest): XRayResponsesUpdateGroup {
    return new XRayResponsesUpdateGroup(this, this.__resources, input);
  }

  public updateSamplingRule(input: shapes.XRayUpdateSamplingRuleRequest): XRayResponsesUpdateSamplingRule {
    return new XRayResponsesUpdateSamplingRule(this, this.__resources, input);
  }

}

export class XRayResponsesBatchGetTraces {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayBatchGetTracesRequest) {
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
          TraceIds: this.__input.traceIds,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetTraces.Traces', props);
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
          TraceIds: this.__input.traceIds,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetTraces.UnprocessedTraceIds', props);
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
          TraceIds: this.__input.traceIds,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetTraces.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class XRayResponsesCreateGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayCreateGroupRequest) {
  }

  public get group(): XRayResponsesCreateGroupGroup {
    return new XRayResponsesCreateGroupGroup(this.__scope, this.__resources, this.__input);
  }

}

export class XRayResponsesCreateGroupGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayCreateGroupRequest) {
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
          GroupName: this.__input.groupName,
          FilterExpression: this.__input.filterExpression,
          InsightsConfiguration: {
            InsightsEnabled: this.__input.insightsConfiguration?.insightsEnabled,
            NotificationsEnabled: this.__input.insightsConfiguration?.notificationsEnabled,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.Group.GroupName', props);
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
          GroupName: this.__input.groupName,
          FilterExpression: this.__input.filterExpression,
          InsightsConfiguration: {
            InsightsEnabled: this.__input.insightsConfiguration?.insightsEnabled,
            NotificationsEnabled: this.__input.insightsConfiguration?.notificationsEnabled,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.Group.GroupARN', props);
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
          GroupName: this.__input.groupName,
          FilterExpression: this.__input.filterExpression,
          InsightsConfiguration: {
            InsightsEnabled: this.__input.insightsConfiguration?.insightsEnabled,
            NotificationsEnabled: this.__input.insightsConfiguration?.notificationsEnabled,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.Group.FilterExpression', props);
    return resource.getResponseField('Group.FilterExpression') as unknown as string;
  }

  public get insightsConfiguration(): XRayResponsesCreateGroupGroupInsightsConfiguration {
    return new XRayResponsesCreateGroupGroupInsightsConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class XRayResponsesCreateGroupGroupInsightsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayCreateGroupRequest) {
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
          GroupName: this.__input.groupName,
          FilterExpression: this.__input.filterExpression,
          InsightsConfiguration: {
            InsightsEnabled: this.__input.insightsConfiguration?.insightsEnabled,
            NotificationsEnabled: this.__input.insightsConfiguration?.notificationsEnabled,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.Group.InsightsConfiguration.InsightsEnabled', props);
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
          GroupName: this.__input.groupName,
          FilterExpression: this.__input.filterExpression,
          InsightsConfiguration: {
            InsightsEnabled: this.__input.insightsConfiguration?.insightsEnabled,
            NotificationsEnabled: this.__input.insightsConfiguration?.notificationsEnabled,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.Group.InsightsConfiguration.NotificationsEnabled', props);
    return resource.getResponseField('Group.InsightsConfiguration.NotificationsEnabled') as unknown as boolean;
  }

}

export class XRayResponsesCreateSamplingRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayCreateSamplingRuleRequest) {
  }

  public get samplingRuleRecord(): XRayResponsesCreateSamplingRuleSamplingRuleRecord {
    return new XRayResponsesCreateSamplingRuleSamplingRuleRecord(this.__scope, this.__resources, this.__input);
  }

}

export class XRayResponsesCreateSamplingRuleSamplingRuleRecord {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayCreateSamplingRuleRequest) {
  }

  public get samplingRule(): XRayResponsesCreateSamplingRuleSamplingRuleRecordSamplingRule {
    return new XRayResponsesCreateSamplingRuleSamplingRuleRecordSamplingRule(this.__scope, this.__resources, this.__input);
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
            RuleName: this.__input.samplingRule.ruleName,
            RuleARN: this.__input.samplingRule.ruleArn,
            ResourceARN: this.__input.samplingRule.resourceArn,
            Priority: this.__input.samplingRule.priority,
            FixedRate: this.__input.samplingRule.fixedRate,
            ReservoirSize: this.__input.samplingRule.reservoirSize,
            ServiceName: this.__input.samplingRule.serviceName,
            ServiceType: this.__input.samplingRule.serviceType,
            Host: this.__input.samplingRule.host,
            HTTPMethod: this.__input.samplingRule.httpMethod,
            URLPath: this.__input.samplingRule.urlPath,
            Version: this.__input.samplingRule.version,
            Attributes: this.__input.samplingRule.attributes,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSamplingRule.SamplingRuleRecord.CreatedAt', props);
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
            RuleName: this.__input.samplingRule.ruleName,
            RuleARN: this.__input.samplingRule.ruleArn,
            ResourceARN: this.__input.samplingRule.resourceArn,
            Priority: this.__input.samplingRule.priority,
            FixedRate: this.__input.samplingRule.fixedRate,
            ReservoirSize: this.__input.samplingRule.reservoirSize,
            ServiceName: this.__input.samplingRule.serviceName,
            ServiceType: this.__input.samplingRule.serviceType,
            Host: this.__input.samplingRule.host,
            HTTPMethod: this.__input.samplingRule.httpMethod,
            URLPath: this.__input.samplingRule.urlPath,
            Version: this.__input.samplingRule.version,
            Attributes: this.__input.samplingRule.attributes,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSamplingRule.SamplingRuleRecord.ModifiedAt', props);
    return resource.getResponseField('SamplingRuleRecord.ModifiedAt') as unknown as string;
  }

}

export class XRayResponsesCreateSamplingRuleSamplingRuleRecordSamplingRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayCreateSamplingRuleRequest) {
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
            RuleName: this.__input.samplingRule.ruleName,
            RuleARN: this.__input.samplingRule.ruleArn,
            ResourceARN: this.__input.samplingRule.resourceArn,
            Priority: this.__input.samplingRule.priority,
            FixedRate: this.__input.samplingRule.fixedRate,
            ReservoirSize: this.__input.samplingRule.reservoirSize,
            ServiceName: this.__input.samplingRule.serviceName,
            ServiceType: this.__input.samplingRule.serviceType,
            Host: this.__input.samplingRule.host,
            HTTPMethod: this.__input.samplingRule.httpMethod,
            URLPath: this.__input.samplingRule.urlPath,
            Version: this.__input.samplingRule.version,
            Attributes: this.__input.samplingRule.attributes,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.RuleName', props);
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
            RuleName: this.__input.samplingRule.ruleName,
            RuleARN: this.__input.samplingRule.ruleArn,
            ResourceARN: this.__input.samplingRule.resourceArn,
            Priority: this.__input.samplingRule.priority,
            FixedRate: this.__input.samplingRule.fixedRate,
            ReservoirSize: this.__input.samplingRule.reservoirSize,
            ServiceName: this.__input.samplingRule.serviceName,
            ServiceType: this.__input.samplingRule.serviceType,
            Host: this.__input.samplingRule.host,
            HTTPMethod: this.__input.samplingRule.httpMethod,
            URLPath: this.__input.samplingRule.urlPath,
            Version: this.__input.samplingRule.version,
            Attributes: this.__input.samplingRule.attributes,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.RuleARN', props);
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
            RuleName: this.__input.samplingRule.ruleName,
            RuleARN: this.__input.samplingRule.ruleArn,
            ResourceARN: this.__input.samplingRule.resourceArn,
            Priority: this.__input.samplingRule.priority,
            FixedRate: this.__input.samplingRule.fixedRate,
            ReservoirSize: this.__input.samplingRule.reservoirSize,
            ServiceName: this.__input.samplingRule.serviceName,
            ServiceType: this.__input.samplingRule.serviceType,
            Host: this.__input.samplingRule.host,
            HTTPMethod: this.__input.samplingRule.httpMethod,
            URLPath: this.__input.samplingRule.urlPath,
            Version: this.__input.samplingRule.version,
            Attributes: this.__input.samplingRule.attributes,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.ResourceARN', props);
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
            RuleName: this.__input.samplingRule.ruleName,
            RuleARN: this.__input.samplingRule.ruleArn,
            ResourceARN: this.__input.samplingRule.resourceArn,
            Priority: this.__input.samplingRule.priority,
            FixedRate: this.__input.samplingRule.fixedRate,
            ReservoirSize: this.__input.samplingRule.reservoirSize,
            ServiceName: this.__input.samplingRule.serviceName,
            ServiceType: this.__input.samplingRule.serviceType,
            Host: this.__input.samplingRule.host,
            HTTPMethod: this.__input.samplingRule.httpMethod,
            URLPath: this.__input.samplingRule.urlPath,
            Version: this.__input.samplingRule.version,
            Attributes: this.__input.samplingRule.attributes,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.Priority', props);
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
            RuleName: this.__input.samplingRule.ruleName,
            RuleARN: this.__input.samplingRule.ruleArn,
            ResourceARN: this.__input.samplingRule.resourceArn,
            Priority: this.__input.samplingRule.priority,
            FixedRate: this.__input.samplingRule.fixedRate,
            ReservoirSize: this.__input.samplingRule.reservoirSize,
            ServiceName: this.__input.samplingRule.serviceName,
            ServiceType: this.__input.samplingRule.serviceType,
            Host: this.__input.samplingRule.host,
            HTTPMethod: this.__input.samplingRule.httpMethod,
            URLPath: this.__input.samplingRule.urlPath,
            Version: this.__input.samplingRule.version,
            Attributes: this.__input.samplingRule.attributes,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.FixedRate', props);
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
            RuleName: this.__input.samplingRule.ruleName,
            RuleARN: this.__input.samplingRule.ruleArn,
            ResourceARN: this.__input.samplingRule.resourceArn,
            Priority: this.__input.samplingRule.priority,
            FixedRate: this.__input.samplingRule.fixedRate,
            ReservoirSize: this.__input.samplingRule.reservoirSize,
            ServiceName: this.__input.samplingRule.serviceName,
            ServiceType: this.__input.samplingRule.serviceType,
            Host: this.__input.samplingRule.host,
            HTTPMethod: this.__input.samplingRule.httpMethod,
            URLPath: this.__input.samplingRule.urlPath,
            Version: this.__input.samplingRule.version,
            Attributes: this.__input.samplingRule.attributes,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.ReservoirSize', props);
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
            RuleName: this.__input.samplingRule.ruleName,
            RuleARN: this.__input.samplingRule.ruleArn,
            ResourceARN: this.__input.samplingRule.resourceArn,
            Priority: this.__input.samplingRule.priority,
            FixedRate: this.__input.samplingRule.fixedRate,
            ReservoirSize: this.__input.samplingRule.reservoirSize,
            ServiceName: this.__input.samplingRule.serviceName,
            ServiceType: this.__input.samplingRule.serviceType,
            Host: this.__input.samplingRule.host,
            HTTPMethod: this.__input.samplingRule.httpMethod,
            URLPath: this.__input.samplingRule.urlPath,
            Version: this.__input.samplingRule.version,
            Attributes: this.__input.samplingRule.attributes,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.ServiceName', props);
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
            RuleName: this.__input.samplingRule.ruleName,
            RuleARN: this.__input.samplingRule.ruleArn,
            ResourceARN: this.__input.samplingRule.resourceArn,
            Priority: this.__input.samplingRule.priority,
            FixedRate: this.__input.samplingRule.fixedRate,
            ReservoirSize: this.__input.samplingRule.reservoirSize,
            ServiceName: this.__input.samplingRule.serviceName,
            ServiceType: this.__input.samplingRule.serviceType,
            Host: this.__input.samplingRule.host,
            HTTPMethod: this.__input.samplingRule.httpMethod,
            URLPath: this.__input.samplingRule.urlPath,
            Version: this.__input.samplingRule.version,
            Attributes: this.__input.samplingRule.attributes,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.ServiceType', props);
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
            RuleName: this.__input.samplingRule.ruleName,
            RuleARN: this.__input.samplingRule.ruleArn,
            ResourceARN: this.__input.samplingRule.resourceArn,
            Priority: this.__input.samplingRule.priority,
            FixedRate: this.__input.samplingRule.fixedRate,
            ReservoirSize: this.__input.samplingRule.reservoirSize,
            ServiceName: this.__input.samplingRule.serviceName,
            ServiceType: this.__input.samplingRule.serviceType,
            Host: this.__input.samplingRule.host,
            HTTPMethod: this.__input.samplingRule.httpMethod,
            URLPath: this.__input.samplingRule.urlPath,
            Version: this.__input.samplingRule.version,
            Attributes: this.__input.samplingRule.attributes,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.Host', props);
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
            RuleName: this.__input.samplingRule.ruleName,
            RuleARN: this.__input.samplingRule.ruleArn,
            ResourceARN: this.__input.samplingRule.resourceArn,
            Priority: this.__input.samplingRule.priority,
            FixedRate: this.__input.samplingRule.fixedRate,
            ReservoirSize: this.__input.samplingRule.reservoirSize,
            ServiceName: this.__input.samplingRule.serviceName,
            ServiceType: this.__input.samplingRule.serviceType,
            Host: this.__input.samplingRule.host,
            HTTPMethod: this.__input.samplingRule.httpMethod,
            URLPath: this.__input.samplingRule.urlPath,
            Version: this.__input.samplingRule.version,
            Attributes: this.__input.samplingRule.attributes,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.HTTPMethod', props);
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
            RuleName: this.__input.samplingRule.ruleName,
            RuleARN: this.__input.samplingRule.ruleArn,
            ResourceARN: this.__input.samplingRule.resourceArn,
            Priority: this.__input.samplingRule.priority,
            FixedRate: this.__input.samplingRule.fixedRate,
            ReservoirSize: this.__input.samplingRule.reservoirSize,
            ServiceName: this.__input.samplingRule.serviceName,
            ServiceType: this.__input.samplingRule.serviceType,
            Host: this.__input.samplingRule.host,
            HTTPMethod: this.__input.samplingRule.httpMethod,
            URLPath: this.__input.samplingRule.urlPath,
            Version: this.__input.samplingRule.version,
            Attributes: this.__input.samplingRule.attributes,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.URLPath', props);
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
            RuleName: this.__input.samplingRule.ruleName,
            RuleARN: this.__input.samplingRule.ruleArn,
            ResourceARN: this.__input.samplingRule.resourceArn,
            Priority: this.__input.samplingRule.priority,
            FixedRate: this.__input.samplingRule.fixedRate,
            ReservoirSize: this.__input.samplingRule.reservoirSize,
            ServiceName: this.__input.samplingRule.serviceName,
            ServiceType: this.__input.samplingRule.serviceType,
            Host: this.__input.samplingRule.host,
            HTTPMethod: this.__input.samplingRule.httpMethod,
            URLPath: this.__input.samplingRule.urlPath,
            Version: this.__input.samplingRule.version,
            Attributes: this.__input.samplingRule.attributes,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.Version', props);
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
            RuleName: this.__input.samplingRule.ruleName,
            RuleARN: this.__input.samplingRule.ruleArn,
            ResourceARN: this.__input.samplingRule.resourceArn,
            Priority: this.__input.samplingRule.priority,
            FixedRate: this.__input.samplingRule.fixedRate,
            ReservoirSize: this.__input.samplingRule.reservoirSize,
            ServiceName: this.__input.samplingRule.serviceName,
            ServiceType: this.__input.samplingRule.serviceType,
            Host: this.__input.samplingRule.host,
            HTTPMethod: this.__input.samplingRule.httpMethod,
            URLPath: this.__input.samplingRule.urlPath,
            Version: this.__input.samplingRule.version,
            Attributes: this.__input.samplingRule.attributes,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.Attributes', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.Attributes') as unknown as Record<string, string>;
  }

}

export class XRayResponsesDeleteSamplingRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayDeleteSamplingRuleRequest) {
  }

  public get samplingRuleRecord(): XRayResponsesDeleteSamplingRuleSamplingRuleRecord {
    return new XRayResponsesDeleteSamplingRuleSamplingRuleRecord(this.__scope, this.__resources, this.__input);
  }

}

export class XRayResponsesDeleteSamplingRuleSamplingRuleRecord {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayDeleteSamplingRuleRequest) {
  }

  public get samplingRule(): XRayResponsesDeleteSamplingRuleSamplingRuleRecordSamplingRule {
    return new XRayResponsesDeleteSamplingRuleSamplingRuleRecordSamplingRule(this.__scope, this.__resources, this.__input);
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
          RuleName: this.__input.ruleName,
          RuleARN: this.__input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSamplingRule.SamplingRuleRecord.CreatedAt', props);
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
          RuleName: this.__input.ruleName,
          RuleARN: this.__input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSamplingRule.SamplingRuleRecord.ModifiedAt', props);
    return resource.getResponseField('SamplingRuleRecord.ModifiedAt') as unknown as string;
  }

}

export class XRayResponsesDeleteSamplingRuleSamplingRuleRecordSamplingRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayDeleteSamplingRuleRequest) {
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
          RuleName: this.__input.ruleName,
          RuleARN: this.__input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.RuleName', props);
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
          RuleName: this.__input.ruleName,
          RuleARN: this.__input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.RuleARN', props);
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
          RuleName: this.__input.ruleName,
          RuleARN: this.__input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.ResourceARN', props);
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
          RuleName: this.__input.ruleName,
          RuleARN: this.__input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.Priority', props);
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
          RuleName: this.__input.ruleName,
          RuleARN: this.__input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.FixedRate', props);
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
          RuleName: this.__input.ruleName,
          RuleARN: this.__input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.ReservoirSize', props);
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
          RuleName: this.__input.ruleName,
          RuleARN: this.__input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.ServiceName', props);
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
          RuleName: this.__input.ruleName,
          RuleARN: this.__input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.ServiceType', props);
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
          RuleName: this.__input.ruleName,
          RuleARN: this.__input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.Host', props);
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
          RuleName: this.__input.ruleName,
          RuleARN: this.__input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.HTTPMethod', props);
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
          RuleName: this.__input.ruleName,
          RuleARN: this.__input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.URLPath', props);
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
          RuleName: this.__input.ruleName,
          RuleARN: this.__input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.Version', props);
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
          RuleName: this.__input.ruleName,
          RuleARN: this.__input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.Attributes', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.Attributes') as unknown as Record<string, string>;
  }

}

export class XRayResponsesFetchEncryptionConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get encryptionConfig(): XRayResponsesFetchEncryptionConfigEncryptionConfig {
    return new XRayResponsesFetchEncryptionConfigEncryptionConfig(this.__scope, this.__resources);
  }

}

export class XRayResponsesFetchEncryptionConfigEncryptionConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEncryptionConfig.EncryptionConfig.KeyId', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEncryptionConfig.EncryptionConfig.Status', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEncryptionConfig.EncryptionConfig.Type', props);
    return resource.getResponseField('EncryptionConfig.Type') as unknown as string;
  }

}

export class XRayResponsesFetchGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayGetGroupRequest) {
  }

  public get group(): XRayResponsesFetchGroupGroup {
    return new XRayResponsesFetchGroupGroup(this.__scope, this.__resources, this.__input);
  }

}

export class XRayResponsesFetchGroupGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayGetGroupRequest) {
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
          GroupName: this.__input.groupName,
          GroupARN: this.__input.groupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroup.Group.GroupName', props);
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
          GroupName: this.__input.groupName,
          GroupARN: this.__input.groupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroup.Group.GroupARN', props);
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
          GroupName: this.__input.groupName,
          GroupARN: this.__input.groupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroup.Group.FilterExpression', props);
    return resource.getResponseField('Group.FilterExpression') as unknown as string;
  }

  public get insightsConfiguration(): XRayResponsesFetchGroupGroupInsightsConfiguration {
    return new XRayResponsesFetchGroupGroupInsightsConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class XRayResponsesFetchGroupGroupInsightsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayGetGroupRequest) {
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
          GroupName: this.__input.groupName,
          GroupARN: this.__input.groupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroup.Group.InsightsConfiguration.InsightsEnabled', props);
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
          GroupName: this.__input.groupName,
          GroupARN: this.__input.groupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroup.Group.InsightsConfiguration.NotificationsEnabled', props);
    return resource.getResponseField('Group.InsightsConfiguration.NotificationsEnabled') as unknown as boolean;
  }

}

export class XRayResponsesFetchGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayGetGroupsRequest) {
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
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroups.Groups', props);
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
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class XRayResponsesFetchInsight {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayGetInsightRequest) {
  }

  public get insight(): XRayResponsesFetchInsightInsight {
    return new XRayResponsesFetchInsightInsight(this.__scope, this.__resources, this.__input);
  }

}

export class XRayResponsesFetchInsightInsight {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayGetInsightRequest) {
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
          InsightId: this.__input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsight.Insight.InsightId', props);
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
          InsightId: this.__input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsight.Insight.GroupARN', props);
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
          InsightId: this.__input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsight.Insight.GroupName', props);
    return resource.getResponseField('Insight.GroupName') as unknown as string;
  }

  public get rootCauseServiceId(): XRayResponsesFetchInsightInsightRootCauseServiceId {
    return new XRayResponsesFetchInsightInsightRootCauseServiceId(this.__scope, this.__resources, this.__input);
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
          InsightId: this.__input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsight.Insight.Categories', props);
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
          InsightId: this.__input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsight.Insight.State', props);
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
          InsightId: this.__input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsight.Insight.StartTime', props);
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
          InsightId: this.__input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsight.Insight.EndTime', props);
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
          InsightId: this.__input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsight.Insight.Summary', props);
    return resource.getResponseField('Insight.Summary') as unknown as string;
  }

  public get clientRequestImpactStatistics(): XRayResponsesFetchInsightInsightClientRequestImpactStatistics {
    return new XRayResponsesFetchInsightInsightClientRequestImpactStatistics(this.__scope, this.__resources, this.__input);
  }

  public get rootCauseServiceRequestImpactStatistics(): XRayResponsesFetchInsightInsightRootCauseServiceRequestImpactStatistics {
    return new XRayResponsesFetchInsightInsightRootCauseServiceRequestImpactStatistics(this.__scope, this.__resources, this.__input);
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
          InsightId: this.__input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsight.Insight.TopAnomalousServices', props);
    return resource.getResponseField('Insight.TopAnomalousServices') as unknown as shapes.XRayAnomalousService[];
  }

}

export class XRayResponsesFetchInsightInsightRootCauseServiceId {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayGetInsightRequest) {
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
          InsightId: this.__input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsight.Insight.RootCauseServiceId.Name', props);
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
          InsightId: this.__input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsight.Insight.RootCauseServiceId.Names', props);
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
          InsightId: this.__input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsight.Insight.RootCauseServiceId.AccountId', props);
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
          InsightId: this.__input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsight.Insight.RootCauseServiceId.Type', props);
    return resource.getResponseField('Insight.RootCauseServiceId.Type') as unknown as string;
  }

}

export class XRayResponsesFetchInsightInsightClientRequestImpactStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayGetInsightRequest) {
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
          InsightId: this.__input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsight.Insight.ClientRequestImpactStatistics.FaultCount', props);
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
          InsightId: this.__input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsight.Insight.ClientRequestImpactStatistics.OkCount', props);
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
          InsightId: this.__input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsight.Insight.ClientRequestImpactStatistics.TotalCount', props);
    return resource.getResponseField('Insight.ClientRequestImpactStatistics.TotalCount') as unknown as number;
  }

}

export class XRayResponsesFetchInsightInsightRootCauseServiceRequestImpactStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayGetInsightRequest) {
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
          InsightId: this.__input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsight.Insight.RootCauseServiceRequestImpactStatistics.FaultCount', props);
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
          InsightId: this.__input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsight.Insight.RootCauseServiceRequestImpactStatistics.OkCount', props);
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
          InsightId: this.__input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsight.Insight.RootCauseServiceRequestImpactStatistics.TotalCount', props);
    return resource.getResponseField('Insight.RootCauseServiceRequestImpactStatistics.TotalCount') as unknown as number;
  }

}

export class XRayResponsesFetchInsightEvents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayGetInsightEventsRequest) {
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
          InsightId: this.__input.insightId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsightEvents.InsightEvents', props);
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
          InsightId: this.__input.insightId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsightEvents.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class XRayResponsesFetchInsightImpactGraph {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayGetInsightImpactGraphRequest) {
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
          InsightId: this.__input.insightId,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsightImpactGraph.InsightId', props);
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
          InsightId: this.__input.insightId,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsightImpactGraph.StartTime', props);
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
          InsightId: this.__input.insightId,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsightImpactGraph.EndTime', props);
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
          InsightId: this.__input.insightId,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsightImpactGraph.ServiceGraphStartTime', props);
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
          InsightId: this.__input.insightId,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsightImpactGraph.ServiceGraphEndTime', props);
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
          InsightId: this.__input.insightId,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsightImpactGraph.Services', props);
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
          InsightId: this.__input.insightId,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsightImpactGraph.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class XRayResponsesFetchInsightSummaries {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayGetInsightSummariesRequest) {
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
          States: this.__input.states,
          GroupARN: this.__input.groupArn,
          GroupName: this.__input.groupName,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsightSummaries.InsightSummaries', props);
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
          States: this.__input.states,
          GroupARN: this.__input.groupArn,
          GroupName: this.__input.groupName,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsightSummaries.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class XRayResponsesFetchSamplingRules {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayGetSamplingRulesRequest) {
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
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSamplingRules.SamplingRuleRecords', props);
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
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSamplingRules.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class XRayResponsesFetchSamplingStatisticSummaries {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayGetSamplingStatisticSummariesRequest) {
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
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSamplingStatisticSummaries.SamplingStatisticSummaries', props);
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
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSamplingStatisticSummaries.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class XRayResponsesFetchSamplingTargets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayGetSamplingTargetsRequest) {
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
          SamplingStatisticsDocuments: this.__input.samplingStatisticsDocuments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSamplingTargets.SamplingTargetDocuments', props);
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
          SamplingStatisticsDocuments: this.__input.samplingStatisticsDocuments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSamplingTargets.LastRuleModification', props);
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
          SamplingStatisticsDocuments: this.__input.samplingStatisticsDocuments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSamplingTargets.UnprocessedStatistics', props);
    return resource.getResponseField('UnprocessedStatistics') as unknown as shapes.XRayUnprocessedStatistics[];
  }

}

export class XRayResponsesFetchServiceGraph {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayGetServiceGraphRequest) {
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
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          GroupName: this.__input.groupName,
          GroupARN: this.__input.groupArn,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceGraph.StartTime', props);
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
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          GroupName: this.__input.groupName,
          GroupARN: this.__input.groupArn,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceGraph.EndTime', props);
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
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          GroupName: this.__input.groupName,
          GroupARN: this.__input.groupArn,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceGraph.Services', props);
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
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          GroupName: this.__input.groupName,
          GroupARN: this.__input.groupArn,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceGraph.ContainsOldGroupVersions', props);
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
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          GroupName: this.__input.groupName,
          GroupARN: this.__input.groupArn,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceGraph.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class XRayResponsesFetchTimeSeriesServiceStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayGetTimeSeriesServiceStatisticsRequest) {
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
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          GroupName: this.__input.groupName,
          GroupARN: this.__input.groupArn,
          EntitySelectorExpression: this.__input.entitySelectorExpression,
          Period: this.__input.period,
          ForecastStatistics: this.__input.forecastStatistics,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTimeSeriesServiceStatistics.TimeSeriesServiceStatistics', props);
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
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          GroupName: this.__input.groupName,
          GroupARN: this.__input.groupArn,
          EntitySelectorExpression: this.__input.entitySelectorExpression,
          Period: this.__input.period,
          ForecastStatistics: this.__input.forecastStatistics,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTimeSeriesServiceStatistics.ContainsOldGroupVersions', props);
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
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          GroupName: this.__input.groupName,
          GroupARN: this.__input.groupArn,
          EntitySelectorExpression: this.__input.entitySelectorExpression,
          Period: this.__input.period,
          ForecastStatistics: this.__input.forecastStatistics,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTimeSeriesServiceStatistics.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class XRayResponsesFetchTraceGraph {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayGetTraceGraphRequest) {
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
          TraceIds: this.__input.traceIds,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTraceGraph.Services', props);
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
          TraceIds: this.__input.traceIds,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTraceGraph.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class XRayResponsesFetchTraceSummaries {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayGetTraceSummariesRequest) {
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
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          TimeRangeType: this.__input.timeRangeType,
          Sampling: this.__input.sampling,
          SamplingStrategy: {
            Name: this.__input.samplingStrategy?.name,
            Value: this.__input.samplingStrategy?.value,
          },
          FilterExpression: this.__input.filterExpression,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTraceSummaries.TraceSummaries', props);
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
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          TimeRangeType: this.__input.timeRangeType,
          Sampling: this.__input.sampling,
          SamplingStrategy: {
            Name: this.__input.samplingStrategy?.name,
            Value: this.__input.samplingStrategy?.value,
          },
          FilterExpression: this.__input.filterExpression,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTraceSummaries.ApproximateTime', props);
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
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          TimeRangeType: this.__input.timeRangeType,
          Sampling: this.__input.sampling,
          SamplingStrategy: {
            Name: this.__input.samplingStrategy?.name,
            Value: this.__input.samplingStrategy?.value,
          },
          FilterExpression: this.__input.filterExpression,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTraceSummaries.TracesProcessedCount', props);
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
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          TimeRangeType: this.__input.timeRangeType,
          Sampling: this.__input.sampling,
          SamplingStrategy: {
            Name: this.__input.samplingStrategy?.name,
            Value: this.__input.samplingStrategy?.value,
          },
          FilterExpression: this.__input.filterExpression,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTraceSummaries.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class XRayResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayListTagsForResourceRequest) {
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
          ResourceARN: this.__input.resourceArn,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
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
          ResourceARN: this.__input.resourceArn,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class XRayResponsesPutEncryptionConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayPutEncryptionConfigRequest) {
  }

  public get encryptionConfig(): XRayResponsesPutEncryptionConfigEncryptionConfig {
    return new XRayResponsesPutEncryptionConfigEncryptionConfig(this.__scope, this.__resources, this.__input);
  }

}

export class XRayResponsesPutEncryptionConfigEncryptionConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayPutEncryptionConfigRequest) {
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
          KeyId: this.__input.keyId,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutEncryptionConfig.EncryptionConfig.KeyId', props);
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
          KeyId: this.__input.keyId,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutEncryptionConfig.EncryptionConfig.Status', props);
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
          KeyId: this.__input.keyId,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutEncryptionConfig.EncryptionConfig.Type', props);
    return resource.getResponseField('EncryptionConfig.Type') as unknown as string;
  }

}

export class XRayResponsesPutTraceSegments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayPutTraceSegmentsRequest) {
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
          TraceSegmentDocuments: this.__input.traceSegmentDocuments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutTraceSegments.UnprocessedTraceSegments', props);
    return resource.getResponseField('UnprocessedTraceSegments') as unknown as shapes.XRayUnprocessedTraceSegment[];
  }

}

export class XRayResponsesUpdateGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayUpdateGroupRequest) {
  }

  public get group(): XRayResponsesUpdateGroupGroup {
    return new XRayResponsesUpdateGroupGroup(this.__scope, this.__resources, this.__input);
  }

}

export class XRayResponsesUpdateGroupGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayUpdateGroupRequest) {
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
          GroupName: this.__input.groupName,
          GroupARN: this.__input.groupArn,
          FilterExpression: this.__input.filterExpression,
          InsightsConfiguration: {
            InsightsEnabled: this.__input.insightsConfiguration?.insightsEnabled,
            NotificationsEnabled: this.__input.insightsConfiguration?.notificationsEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGroup.Group.GroupName', props);
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
          GroupName: this.__input.groupName,
          GroupARN: this.__input.groupArn,
          FilterExpression: this.__input.filterExpression,
          InsightsConfiguration: {
            InsightsEnabled: this.__input.insightsConfiguration?.insightsEnabled,
            NotificationsEnabled: this.__input.insightsConfiguration?.notificationsEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGroup.Group.GroupARN', props);
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
          GroupName: this.__input.groupName,
          GroupARN: this.__input.groupArn,
          FilterExpression: this.__input.filterExpression,
          InsightsConfiguration: {
            InsightsEnabled: this.__input.insightsConfiguration?.insightsEnabled,
            NotificationsEnabled: this.__input.insightsConfiguration?.notificationsEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGroup.Group.FilterExpression', props);
    return resource.getResponseField('Group.FilterExpression') as unknown as string;
  }

  public get insightsConfiguration(): XRayResponsesUpdateGroupGroupInsightsConfiguration {
    return new XRayResponsesUpdateGroupGroupInsightsConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class XRayResponsesUpdateGroupGroupInsightsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayUpdateGroupRequest) {
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
          GroupName: this.__input.groupName,
          GroupARN: this.__input.groupArn,
          FilterExpression: this.__input.filterExpression,
          InsightsConfiguration: {
            InsightsEnabled: this.__input.insightsConfiguration?.insightsEnabled,
            NotificationsEnabled: this.__input.insightsConfiguration?.notificationsEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGroup.Group.InsightsConfiguration.InsightsEnabled', props);
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
          GroupName: this.__input.groupName,
          GroupARN: this.__input.groupArn,
          FilterExpression: this.__input.filterExpression,
          InsightsConfiguration: {
            InsightsEnabled: this.__input.insightsConfiguration?.insightsEnabled,
            NotificationsEnabled: this.__input.insightsConfiguration?.notificationsEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGroup.Group.InsightsConfiguration.NotificationsEnabled', props);
    return resource.getResponseField('Group.InsightsConfiguration.NotificationsEnabled') as unknown as boolean;
  }

}

export class XRayResponsesUpdateSamplingRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayUpdateSamplingRuleRequest) {
  }

  public get samplingRuleRecord(): XRayResponsesUpdateSamplingRuleSamplingRuleRecord {
    return new XRayResponsesUpdateSamplingRuleSamplingRuleRecord(this.__scope, this.__resources, this.__input);
  }

}

export class XRayResponsesUpdateSamplingRuleSamplingRuleRecord {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayUpdateSamplingRuleRequest) {
  }

  public get samplingRule(): XRayResponsesUpdateSamplingRuleSamplingRuleRecordSamplingRule {
    return new XRayResponsesUpdateSamplingRuleSamplingRuleRecordSamplingRule(this.__scope, this.__resources, this.__input);
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
            RuleName: this.__input.samplingRuleUpdate.ruleName,
            RuleARN: this.__input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.__input.samplingRuleUpdate.resourceArn,
            Priority: this.__input.samplingRuleUpdate.priority,
            FixedRate: this.__input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.__input.samplingRuleUpdate.reservoirSize,
            Host: this.__input.samplingRuleUpdate.host,
            ServiceName: this.__input.samplingRuleUpdate.serviceName,
            ServiceType: this.__input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.__input.samplingRuleUpdate.httpMethod,
            URLPath: this.__input.samplingRuleUpdate.urlPath,
            Attributes: this.__input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSamplingRule.SamplingRuleRecord.CreatedAt', props);
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
            RuleName: this.__input.samplingRuleUpdate.ruleName,
            RuleARN: this.__input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.__input.samplingRuleUpdate.resourceArn,
            Priority: this.__input.samplingRuleUpdate.priority,
            FixedRate: this.__input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.__input.samplingRuleUpdate.reservoirSize,
            Host: this.__input.samplingRuleUpdate.host,
            ServiceName: this.__input.samplingRuleUpdate.serviceName,
            ServiceType: this.__input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.__input.samplingRuleUpdate.httpMethod,
            URLPath: this.__input.samplingRuleUpdate.urlPath,
            Attributes: this.__input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSamplingRule.SamplingRuleRecord.ModifiedAt', props);
    return resource.getResponseField('SamplingRuleRecord.ModifiedAt') as unknown as string;
  }

}

export class XRayResponsesUpdateSamplingRuleSamplingRuleRecordSamplingRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.XRayUpdateSamplingRuleRequest) {
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
            RuleName: this.__input.samplingRuleUpdate.ruleName,
            RuleARN: this.__input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.__input.samplingRuleUpdate.resourceArn,
            Priority: this.__input.samplingRuleUpdate.priority,
            FixedRate: this.__input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.__input.samplingRuleUpdate.reservoirSize,
            Host: this.__input.samplingRuleUpdate.host,
            ServiceName: this.__input.samplingRuleUpdate.serviceName,
            ServiceType: this.__input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.__input.samplingRuleUpdate.httpMethod,
            URLPath: this.__input.samplingRuleUpdate.urlPath,
            Attributes: this.__input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.RuleName', props);
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
            RuleName: this.__input.samplingRuleUpdate.ruleName,
            RuleARN: this.__input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.__input.samplingRuleUpdate.resourceArn,
            Priority: this.__input.samplingRuleUpdate.priority,
            FixedRate: this.__input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.__input.samplingRuleUpdate.reservoirSize,
            Host: this.__input.samplingRuleUpdate.host,
            ServiceName: this.__input.samplingRuleUpdate.serviceName,
            ServiceType: this.__input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.__input.samplingRuleUpdate.httpMethod,
            URLPath: this.__input.samplingRuleUpdate.urlPath,
            Attributes: this.__input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.RuleARN', props);
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
            RuleName: this.__input.samplingRuleUpdate.ruleName,
            RuleARN: this.__input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.__input.samplingRuleUpdate.resourceArn,
            Priority: this.__input.samplingRuleUpdate.priority,
            FixedRate: this.__input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.__input.samplingRuleUpdate.reservoirSize,
            Host: this.__input.samplingRuleUpdate.host,
            ServiceName: this.__input.samplingRuleUpdate.serviceName,
            ServiceType: this.__input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.__input.samplingRuleUpdate.httpMethod,
            URLPath: this.__input.samplingRuleUpdate.urlPath,
            Attributes: this.__input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.ResourceARN', props);
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
            RuleName: this.__input.samplingRuleUpdate.ruleName,
            RuleARN: this.__input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.__input.samplingRuleUpdate.resourceArn,
            Priority: this.__input.samplingRuleUpdate.priority,
            FixedRate: this.__input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.__input.samplingRuleUpdate.reservoirSize,
            Host: this.__input.samplingRuleUpdate.host,
            ServiceName: this.__input.samplingRuleUpdate.serviceName,
            ServiceType: this.__input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.__input.samplingRuleUpdate.httpMethod,
            URLPath: this.__input.samplingRuleUpdate.urlPath,
            Attributes: this.__input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.Priority', props);
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
            RuleName: this.__input.samplingRuleUpdate.ruleName,
            RuleARN: this.__input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.__input.samplingRuleUpdate.resourceArn,
            Priority: this.__input.samplingRuleUpdate.priority,
            FixedRate: this.__input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.__input.samplingRuleUpdate.reservoirSize,
            Host: this.__input.samplingRuleUpdate.host,
            ServiceName: this.__input.samplingRuleUpdate.serviceName,
            ServiceType: this.__input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.__input.samplingRuleUpdate.httpMethod,
            URLPath: this.__input.samplingRuleUpdate.urlPath,
            Attributes: this.__input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.FixedRate', props);
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
            RuleName: this.__input.samplingRuleUpdate.ruleName,
            RuleARN: this.__input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.__input.samplingRuleUpdate.resourceArn,
            Priority: this.__input.samplingRuleUpdate.priority,
            FixedRate: this.__input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.__input.samplingRuleUpdate.reservoirSize,
            Host: this.__input.samplingRuleUpdate.host,
            ServiceName: this.__input.samplingRuleUpdate.serviceName,
            ServiceType: this.__input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.__input.samplingRuleUpdate.httpMethod,
            URLPath: this.__input.samplingRuleUpdate.urlPath,
            Attributes: this.__input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.ReservoirSize', props);
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
            RuleName: this.__input.samplingRuleUpdate.ruleName,
            RuleARN: this.__input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.__input.samplingRuleUpdate.resourceArn,
            Priority: this.__input.samplingRuleUpdate.priority,
            FixedRate: this.__input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.__input.samplingRuleUpdate.reservoirSize,
            Host: this.__input.samplingRuleUpdate.host,
            ServiceName: this.__input.samplingRuleUpdate.serviceName,
            ServiceType: this.__input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.__input.samplingRuleUpdate.httpMethod,
            URLPath: this.__input.samplingRuleUpdate.urlPath,
            Attributes: this.__input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.ServiceName', props);
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
            RuleName: this.__input.samplingRuleUpdate.ruleName,
            RuleARN: this.__input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.__input.samplingRuleUpdate.resourceArn,
            Priority: this.__input.samplingRuleUpdate.priority,
            FixedRate: this.__input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.__input.samplingRuleUpdate.reservoirSize,
            Host: this.__input.samplingRuleUpdate.host,
            ServiceName: this.__input.samplingRuleUpdate.serviceName,
            ServiceType: this.__input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.__input.samplingRuleUpdate.httpMethod,
            URLPath: this.__input.samplingRuleUpdate.urlPath,
            Attributes: this.__input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.ServiceType', props);
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
            RuleName: this.__input.samplingRuleUpdate.ruleName,
            RuleARN: this.__input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.__input.samplingRuleUpdate.resourceArn,
            Priority: this.__input.samplingRuleUpdate.priority,
            FixedRate: this.__input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.__input.samplingRuleUpdate.reservoirSize,
            Host: this.__input.samplingRuleUpdate.host,
            ServiceName: this.__input.samplingRuleUpdate.serviceName,
            ServiceType: this.__input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.__input.samplingRuleUpdate.httpMethod,
            URLPath: this.__input.samplingRuleUpdate.urlPath,
            Attributes: this.__input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.Host', props);
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
            RuleName: this.__input.samplingRuleUpdate.ruleName,
            RuleARN: this.__input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.__input.samplingRuleUpdate.resourceArn,
            Priority: this.__input.samplingRuleUpdate.priority,
            FixedRate: this.__input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.__input.samplingRuleUpdate.reservoirSize,
            Host: this.__input.samplingRuleUpdate.host,
            ServiceName: this.__input.samplingRuleUpdate.serviceName,
            ServiceType: this.__input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.__input.samplingRuleUpdate.httpMethod,
            URLPath: this.__input.samplingRuleUpdate.urlPath,
            Attributes: this.__input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.HTTPMethod', props);
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
            RuleName: this.__input.samplingRuleUpdate.ruleName,
            RuleARN: this.__input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.__input.samplingRuleUpdate.resourceArn,
            Priority: this.__input.samplingRuleUpdate.priority,
            FixedRate: this.__input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.__input.samplingRuleUpdate.reservoirSize,
            Host: this.__input.samplingRuleUpdate.host,
            ServiceName: this.__input.samplingRuleUpdate.serviceName,
            ServiceType: this.__input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.__input.samplingRuleUpdate.httpMethod,
            URLPath: this.__input.samplingRuleUpdate.urlPath,
            Attributes: this.__input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.URLPath', props);
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
            RuleName: this.__input.samplingRuleUpdate.ruleName,
            RuleARN: this.__input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.__input.samplingRuleUpdate.resourceArn,
            Priority: this.__input.samplingRuleUpdate.priority,
            FixedRate: this.__input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.__input.samplingRuleUpdate.reservoirSize,
            Host: this.__input.samplingRuleUpdate.host,
            ServiceName: this.__input.samplingRuleUpdate.serviceName,
            ServiceType: this.__input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.__input.samplingRuleUpdate.httpMethod,
            URLPath: this.__input.samplingRuleUpdate.urlPath,
            Attributes: this.__input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.Version', props);
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
            RuleName: this.__input.samplingRuleUpdate.ruleName,
            RuleARN: this.__input.samplingRuleUpdate.ruleArn,
            ResourceARN: this.__input.samplingRuleUpdate.resourceArn,
            Priority: this.__input.samplingRuleUpdate.priority,
            FixedRate: this.__input.samplingRuleUpdate.fixedRate,
            ReservoirSize: this.__input.samplingRuleUpdate.reservoirSize,
            Host: this.__input.samplingRuleUpdate.host,
            ServiceName: this.__input.samplingRuleUpdate.serviceName,
            ServiceType: this.__input.samplingRuleUpdate.serviceType,
            HTTPMethod: this.__input.samplingRuleUpdate.httpMethod,
            URLPath: this.__input.samplingRuleUpdate.urlPath,
            Attributes: this.__input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.Attributes', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.Attributes') as unknown as Record<string, string>;
  }

}

