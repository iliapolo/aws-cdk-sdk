import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class XRay extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public batchGetTraces(input: shapes.BatchGetTracesRequest): XRay_BatchGetTracesResult {
    return new XRay_BatchGetTracesResult(this, 'BatchGetTracesResult', this.resources, input);
  }
  public createGroup(input: shapes.CreateGroupRequest): XRay_CreateGroupResult {
    return new XRay_CreateGroupResult(this, 'CreateGroupResult', this.resources, input);
  }
  public createSamplingRule(input: shapes.CreateSamplingRuleRequest): XRay_CreateSamplingRuleResult {
    return new XRay_CreateSamplingRuleResult(this, 'CreateSamplingRuleResult', this.resources, input);
  }
  public deleteGroup(input: shapes.DeleteGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteGroup.'),
        parameters: {
          groupName: input.groupName,
          groupArn: input.groupArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteGroup', props);
  }
  public deleteSamplingRule(input: shapes.DeleteSamplingRuleRequest): XRay_DeleteSamplingRuleResult {
    return new XRay_DeleteSamplingRuleResult(this, 'DeleteSamplingRuleResult', this.resources, input);
  }
  public getEncryptionConfig(): XRay_GetEncryptionConfigResult {
    return new XRay_GetEncryptionConfigResult(this, 'GetEncryptionConfigResult', this.resources);
  }
  public getGroup(input: shapes.GetGroupRequest): XRay_GetGroupResult {
    return new XRay_GetGroupResult(this, 'GetGroupResult', this.resources, input);
  }
  public getGroups(input: shapes.GetGroupsRequest): XRay_GetGroupsResult {
    return new XRay_GetGroupsResult(this, 'GetGroupsResult', this.resources, input);
  }
  public getInsight(input: shapes.GetInsightRequest): XRay_GetInsightResult {
    return new XRay_GetInsightResult(this, 'GetInsightResult', this.resources, input);
  }
  public getInsightEvents(input: shapes.GetInsightEventsRequest): XRay_GetInsightEventsResult {
    return new XRay_GetInsightEventsResult(this, 'GetInsightEventsResult', this.resources, input);
  }
  public getInsightImpactGraph(input: shapes.GetInsightImpactGraphRequest): XRay_GetInsightImpactGraphResult {
    return new XRay_GetInsightImpactGraphResult(this, 'GetInsightImpactGraphResult', this.resources, input);
  }
  public getInsightSummaries(input: shapes.GetInsightSummariesRequest): XRay_GetInsightSummariesResult {
    return new XRay_GetInsightSummariesResult(this, 'GetInsightSummariesResult', this.resources, input);
  }
  public getSamplingRules(input: shapes.GetSamplingRulesRequest): XRay_GetSamplingRulesResult {
    return new XRay_GetSamplingRulesResult(this, 'GetSamplingRulesResult', this.resources, input);
  }
  public getSamplingStatisticSummaries(input: shapes.GetSamplingStatisticSummariesRequest): XRay_GetSamplingStatisticSummariesResult {
    return new XRay_GetSamplingStatisticSummariesResult(this, 'GetSamplingStatisticSummariesResult', this.resources, input);
  }
  public getSamplingTargets(input: shapes.GetSamplingTargetsRequest): XRay_GetSamplingTargetsResult {
    return new XRay_GetSamplingTargetsResult(this, 'GetSamplingTargetsResult', this.resources, input);
  }
  public getServiceGraph(input: shapes.GetServiceGraphRequest): XRay_GetServiceGraphResult {
    return new XRay_GetServiceGraphResult(this, 'GetServiceGraphResult', this.resources, input);
  }
  public getTimeSeriesServiceStatistics(input: shapes.GetTimeSeriesServiceStatisticsRequest): XRay_GetTimeSeriesServiceStatisticsResult {
    return new XRay_GetTimeSeriesServiceStatisticsResult(this, 'GetTimeSeriesServiceStatisticsResult', this.resources, input);
  }
  public getTraceGraph(input: shapes.GetTraceGraphRequest): XRay_GetTraceGraphResult {
    return new XRay_GetTraceGraphResult(this, 'GetTraceGraphResult', this.resources, input);
  }
  public getTraceSummaries(input: shapes.GetTraceSummariesRequest): XRay_GetTraceSummariesResult {
    return new XRay_GetTraceSummariesResult(this, 'GetTraceSummariesResult', this.resources, input);
  }
  public listTagsForResource(input: shapes.ListTagsForResourceRequest): XRay_ListTagsForResourceResponse {
    return new XRay_ListTagsForResourceResponse(this, 'ListTagsForResourceResponse', this.resources, input);
  }
  public putEncryptionConfig(input: shapes.PutEncryptionConfigRequest): XRay_PutEncryptionConfigResult {
    return new XRay_PutEncryptionConfigResult(this, 'PutEncryptionConfigResult', this.resources, input);
  }
  public putTelemetryRecords(input: shapes.PutTelemetryRecordsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'putTelemetryRecords',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.PutTelemetryRecords.'),
        parameters: {
          telemetryRecords: input.telemetryRecords,
          ec2InstanceId: input.ec2InstanceId,
          hostname: input.hostname,
          resourceArn: input.resourceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutTelemetryRecords', props);
  }
  public putTraceSegments(input: shapes.PutTraceSegmentsRequest): XRay_PutTraceSegmentsResult {
    return new XRay_PutTraceSegmentsResult(this, 'PutTraceSegmentsResult', this.resources, input);
  }
  public tagResource(input: shapes.TagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.TagResource.'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }
  public untagResource(input: shapes.UntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UntagResource.'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }
  public updateGroup(input: shapes.UpdateGroupRequest): XRay_UpdateGroupResult {
    return new XRay_UpdateGroupResult(this, 'UpdateGroupResult', this.resources, input);
  }
  public updateSamplingRule(input: shapes.UpdateSamplingRuleRequest): XRay_UpdateSamplingRuleResult {
    return new XRay_UpdateSamplingRuleResult(this, 'UpdateSamplingRuleResult', this.resources, input);
  }
}
export class XRay_BatchGetTracesResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.BatchGetTracesRequest) {
    super(scope, id);
  }
  public get traces(): shapes.Trace[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'batchGetTraces',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.BatchGetTraces.'),
        outputPath: '',
        parameters: {
          traceIds: this.input.traceIds,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetTraces.', props);
    return resource.getResponseField('') as unknown as shapes.Trace[];
  }
  public get unprocessedTraceIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'batchGetTraces',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.BatchGetTraces.'),
        outputPath: '',
        parameters: {
          traceIds: this.input.traceIds,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetTraces.', props);
    return resource.getResponseField('') as unknown as string[];
  }
  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'batchGetTraces',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.BatchGetTraces.'),
        outputPath: '',
        parameters: {
          traceIds: this.input.traceIds,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetTraces.', props);
    return resource.getResponseField('') as unknown as string;
  }
}
export class XRay_CreateGroupResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.CreateGroupRequest) {
    super(scope, id);
  }
  public get group(): XRay_CreateGroupResult_Group_Group {
    return new XRay_CreateGroupResult_Group_Group(this, 'Group', this.resources, this.input);
  }
}
export class XRay_CreateGroupResult_Group_Group extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.CreateGroupRequest) {
    super(scope, id);
  }
  public get groupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateGroup.Group.GroupName'),
        outputPath: 'Group.GroupName',
        parameters: {
          groupName: this.input.groupName,
          filterExpression: this.input.filterExpression,
          insightsConfiguration: {
            insightsEnabled: this.input.insightsConfiguration?.insightsEnabled,
            notificationsEnabled: this.input.insightsConfiguration?.notificationsEnabled,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.Group.GroupName', props);
    return resource.getResponseField('Group.GroupName') as unknown as string;
  }
  public get groupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateGroup.Group.GroupARN'),
        outputPath: 'Group.GroupARN',
        parameters: {
          groupName: this.input.groupName,
          filterExpression: this.input.filterExpression,
          insightsConfiguration: {
            insightsEnabled: this.input.insightsConfiguration?.insightsEnabled,
            notificationsEnabled: this.input.insightsConfiguration?.notificationsEnabled,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.Group.GroupARN', props);
    return resource.getResponseField('Group.GroupARN') as unknown as string;
  }
  public get filterExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateGroup.Group.FilterExpression'),
        outputPath: 'Group.FilterExpression',
        parameters: {
          groupName: this.input.groupName,
          filterExpression: this.input.filterExpression,
          insightsConfiguration: {
            insightsEnabled: this.input.insightsConfiguration?.insightsEnabled,
            notificationsEnabled: this.input.insightsConfiguration?.notificationsEnabled,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.Group.FilterExpression', props);
    return resource.getResponseField('Group.FilterExpression') as unknown as string;
  }
  public get insightsConfiguration(): XRay_CreateGroupResult_Group_Group_InsightsConfiguration_InsightsConfiguration {
    return new XRay_CreateGroupResult_Group_Group_InsightsConfiguration_InsightsConfiguration(this, 'InsightsConfiguration', this.resources, this.input);
  }
}
export class XRay_CreateGroupResult_Group_Group_InsightsConfiguration_InsightsConfiguration extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.CreateGroupRequest) {
    super(scope, id);
  }
  public get insightsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateGroup.Group.InsightsConfiguration.InsightsConfiguration.InsightsEnabled'),
        outputPath: 'Group.InsightsConfiguration.InsightsConfiguration.InsightsEnabled',
        parameters: {
          groupName: this.input.groupName,
          filterExpression: this.input.filterExpression,
          insightsConfiguration: {
            insightsEnabled: this.input.insightsConfiguration?.insightsEnabled,
            notificationsEnabled: this.input.insightsConfiguration?.notificationsEnabled,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.Group.InsightsConfiguration.InsightsConfiguration.InsightsEnabled', props);
    return resource.getResponseField('Group.InsightsConfiguration.InsightsConfiguration.InsightsEnabled') as unknown as boolean;
  }
  public get notificationsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateGroup.Group.InsightsConfiguration.InsightsConfiguration.NotificationsEnabled'),
        outputPath: 'Group.InsightsConfiguration.InsightsConfiguration.NotificationsEnabled',
        parameters: {
          groupName: this.input.groupName,
          filterExpression: this.input.filterExpression,
          insightsConfiguration: {
            insightsEnabled: this.input.insightsConfiguration?.insightsEnabled,
            notificationsEnabled: this.input.insightsConfiguration?.notificationsEnabled,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.Group.InsightsConfiguration.InsightsConfiguration.NotificationsEnabled', props);
    return resource.getResponseField('Group.InsightsConfiguration.InsightsConfiguration.NotificationsEnabled') as unknown as boolean;
  }
}
export class XRay_CreateSamplingRuleResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.CreateSamplingRuleRequest) {
    super(scope, id);
  }
  public get samplingRuleRecord(): XRay_CreateSamplingRuleResult_SamplingRuleRecord_SamplingRuleRecord {
    return new XRay_CreateSamplingRuleResult_SamplingRuleRecord_SamplingRuleRecord(this, 'SamplingRuleRecord', this.resources, this.input);
  }
}
export class XRay_CreateSamplingRuleResult_SamplingRuleRecord_SamplingRuleRecord extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.CreateSamplingRuleRequest) {
    super(scope, id);
  }
  public get samplingRule(): XRay_CreateSamplingRuleResult_SamplingRuleRecord_SamplingRuleRecord_SamplingRule_SamplingRule {
    return new XRay_CreateSamplingRuleResult_SamplingRuleRecord_SamplingRuleRecord_SamplingRule_SamplingRule(this, 'SamplingRule', this.resources, this.input);
  }
  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.CreatedAt'),
        outputPath: 'SamplingRuleRecord.CreatedAt',
        parameters: {
          samplingRule: {
            ruleName: this.input.samplingRule.ruleName,
            ruleArn: this.input.samplingRule.ruleArn,
            resourceArn: this.input.samplingRule.resourceArn,
            priority: this.input.samplingRule.priority,
            fixedRate: this.input.samplingRule.fixedRate,
            reservoirSize: this.input.samplingRule.reservoirSize,
            serviceName: this.input.samplingRule.serviceName,
            serviceType: this.input.samplingRule.serviceType,
            host: this.input.samplingRule.host,
            httpMethod: this.input.samplingRule.httpMethod,
            urlPath: this.input.samplingRule.urlPath,
            version: this.input.samplingRule.version,
            attributes: this.input.samplingRule.attributes,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.CreatedAt', props);
    return resource.getResponseField('SamplingRuleRecord.CreatedAt') as unknown as string;
  }
  public get modifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.ModifiedAt'),
        outputPath: 'SamplingRuleRecord.ModifiedAt',
        parameters: {
          samplingRule: {
            ruleName: this.input.samplingRule.ruleName,
            ruleArn: this.input.samplingRule.ruleArn,
            resourceArn: this.input.samplingRule.resourceArn,
            priority: this.input.samplingRule.priority,
            fixedRate: this.input.samplingRule.fixedRate,
            reservoirSize: this.input.samplingRule.reservoirSize,
            serviceName: this.input.samplingRule.serviceName,
            serviceType: this.input.samplingRule.serviceType,
            host: this.input.samplingRule.host,
            httpMethod: this.input.samplingRule.httpMethod,
            urlPath: this.input.samplingRule.urlPath,
            version: this.input.samplingRule.version,
            attributes: this.input.samplingRule.attributes,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.ModifiedAt', props);
    return resource.getResponseField('SamplingRuleRecord.ModifiedAt') as unknown as string;
  }
}
export class XRay_CreateSamplingRuleResult_SamplingRuleRecord_SamplingRuleRecord_SamplingRule_SamplingRule extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.CreateSamplingRuleRequest) {
    super(scope, id);
  }
  public get ruleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.RuleName'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.RuleName',
        parameters: {
          samplingRule: {
            ruleName: this.input.samplingRule.ruleName,
            ruleArn: this.input.samplingRule.ruleArn,
            resourceArn: this.input.samplingRule.resourceArn,
            priority: this.input.samplingRule.priority,
            fixedRate: this.input.samplingRule.fixedRate,
            reservoirSize: this.input.samplingRule.reservoirSize,
            serviceName: this.input.samplingRule.serviceName,
            serviceType: this.input.samplingRule.serviceType,
            host: this.input.samplingRule.host,
            httpMethod: this.input.samplingRule.httpMethod,
            urlPath: this.input.samplingRule.urlPath,
            version: this.input.samplingRule.version,
            attributes: this.input.samplingRule.attributes,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.RuleName', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.RuleName') as unknown as string;
  }
  public get ruleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.RuleARN'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.RuleARN',
        parameters: {
          samplingRule: {
            ruleName: this.input.samplingRule.ruleName,
            ruleArn: this.input.samplingRule.ruleArn,
            resourceArn: this.input.samplingRule.resourceArn,
            priority: this.input.samplingRule.priority,
            fixedRate: this.input.samplingRule.fixedRate,
            reservoirSize: this.input.samplingRule.reservoirSize,
            serviceName: this.input.samplingRule.serviceName,
            serviceType: this.input.samplingRule.serviceType,
            host: this.input.samplingRule.host,
            httpMethod: this.input.samplingRule.httpMethod,
            urlPath: this.input.samplingRule.urlPath,
            version: this.input.samplingRule.version,
            attributes: this.input.samplingRule.attributes,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.RuleARN', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.RuleARN') as unknown as string;
  }
  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ResourceARN'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.ResourceARN',
        parameters: {
          samplingRule: {
            ruleName: this.input.samplingRule.ruleName,
            ruleArn: this.input.samplingRule.ruleArn,
            resourceArn: this.input.samplingRule.resourceArn,
            priority: this.input.samplingRule.priority,
            fixedRate: this.input.samplingRule.fixedRate,
            reservoirSize: this.input.samplingRule.reservoirSize,
            serviceName: this.input.samplingRule.serviceName,
            serviceType: this.input.samplingRule.serviceType,
            host: this.input.samplingRule.host,
            httpMethod: this.input.samplingRule.httpMethod,
            urlPath: this.input.samplingRule.urlPath,
            version: this.input.samplingRule.version,
            attributes: this.input.samplingRule.attributes,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ResourceARN', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.ResourceARN') as unknown as string;
  }
  public get priority(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Priority'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.Priority',
        parameters: {
          samplingRule: {
            ruleName: this.input.samplingRule.ruleName,
            ruleArn: this.input.samplingRule.ruleArn,
            resourceArn: this.input.samplingRule.resourceArn,
            priority: this.input.samplingRule.priority,
            fixedRate: this.input.samplingRule.fixedRate,
            reservoirSize: this.input.samplingRule.reservoirSize,
            serviceName: this.input.samplingRule.serviceName,
            serviceType: this.input.samplingRule.serviceType,
            host: this.input.samplingRule.host,
            httpMethod: this.input.samplingRule.httpMethod,
            urlPath: this.input.samplingRule.urlPath,
            version: this.input.samplingRule.version,
            attributes: this.input.samplingRule.attributes,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Priority', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.Priority') as unknown as number;
  }
  public get fixedRate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.FixedRate'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.FixedRate',
        parameters: {
          samplingRule: {
            ruleName: this.input.samplingRule.ruleName,
            ruleArn: this.input.samplingRule.ruleArn,
            resourceArn: this.input.samplingRule.resourceArn,
            priority: this.input.samplingRule.priority,
            fixedRate: this.input.samplingRule.fixedRate,
            reservoirSize: this.input.samplingRule.reservoirSize,
            serviceName: this.input.samplingRule.serviceName,
            serviceType: this.input.samplingRule.serviceType,
            host: this.input.samplingRule.host,
            httpMethod: this.input.samplingRule.httpMethod,
            urlPath: this.input.samplingRule.urlPath,
            version: this.input.samplingRule.version,
            attributes: this.input.samplingRule.attributes,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.FixedRate', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.FixedRate') as unknown as number;
  }
  public get reservoirSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ReservoirSize'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.ReservoirSize',
        parameters: {
          samplingRule: {
            ruleName: this.input.samplingRule.ruleName,
            ruleArn: this.input.samplingRule.ruleArn,
            resourceArn: this.input.samplingRule.resourceArn,
            priority: this.input.samplingRule.priority,
            fixedRate: this.input.samplingRule.fixedRate,
            reservoirSize: this.input.samplingRule.reservoirSize,
            serviceName: this.input.samplingRule.serviceName,
            serviceType: this.input.samplingRule.serviceType,
            host: this.input.samplingRule.host,
            httpMethod: this.input.samplingRule.httpMethod,
            urlPath: this.input.samplingRule.urlPath,
            version: this.input.samplingRule.version,
            attributes: this.input.samplingRule.attributes,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ReservoirSize', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.ReservoirSize') as unknown as number;
  }
  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ServiceName'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.ServiceName',
        parameters: {
          samplingRule: {
            ruleName: this.input.samplingRule.ruleName,
            ruleArn: this.input.samplingRule.ruleArn,
            resourceArn: this.input.samplingRule.resourceArn,
            priority: this.input.samplingRule.priority,
            fixedRate: this.input.samplingRule.fixedRate,
            reservoirSize: this.input.samplingRule.reservoirSize,
            serviceName: this.input.samplingRule.serviceName,
            serviceType: this.input.samplingRule.serviceType,
            host: this.input.samplingRule.host,
            httpMethod: this.input.samplingRule.httpMethod,
            urlPath: this.input.samplingRule.urlPath,
            version: this.input.samplingRule.version,
            attributes: this.input.samplingRule.attributes,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ServiceName', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.ServiceName') as unknown as string;
  }
  public get serviceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ServiceType'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.ServiceType',
        parameters: {
          samplingRule: {
            ruleName: this.input.samplingRule.ruleName,
            ruleArn: this.input.samplingRule.ruleArn,
            resourceArn: this.input.samplingRule.resourceArn,
            priority: this.input.samplingRule.priority,
            fixedRate: this.input.samplingRule.fixedRate,
            reservoirSize: this.input.samplingRule.reservoirSize,
            serviceName: this.input.samplingRule.serviceName,
            serviceType: this.input.samplingRule.serviceType,
            host: this.input.samplingRule.host,
            httpMethod: this.input.samplingRule.httpMethod,
            urlPath: this.input.samplingRule.urlPath,
            version: this.input.samplingRule.version,
            attributes: this.input.samplingRule.attributes,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ServiceType', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.ServiceType') as unknown as string;
  }
  public get host(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Host'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.Host',
        parameters: {
          samplingRule: {
            ruleName: this.input.samplingRule.ruleName,
            ruleArn: this.input.samplingRule.ruleArn,
            resourceArn: this.input.samplingRule.resourceArn,
            priority: this.input.samplingRule.priority,
            fixedRate: this.input.samplingRule.fixedRate,
            reservoirSize: this.input.samplingRule.reservoirSize,
            serviceName: this.input.samplingRule.serviceName,
            serviceType: this.input.samplingRule.serviceType,
            host: this.input.samplingRule.host,
            httpMethod: this.input.samplingRule.httpMethod,
            urlPath: this.input.samplingRule.urlPath,
            version: this.input.samplingRule.version,
            attributes: this.input.samplingRule.attributes,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Host', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.Host') as unknown as string;
  }
  public get httpMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.HTTPMethod'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.HTTPMethod',
        parameters: {
          samplingRule: {
            ruleName: this.input.samplingRule.ruleName,
            ruleArn: this.input.samplingRule.ruleArn,
            resourceArn: this.input.samplingRule.resourceArn,
            priority: this.input.samplingRule.priority,
            fixedRate: this.input.samplingRule.fixedRate,
            reservoirSize: this.input.samplingRule.reservoirSize,
            serviceName: this.input.samplingRule.serviceName,
            serviceType: this.input.samplingRule.serviceType,
            host: this.input.samplingRule.host,
            httpMethod: this.input.samplingRule.httpMethod,
            urlPath: this.input.samplingRule.urlPath,
            version: this.input.samplingRule.version,
            attributes: this.input.samplingRule.attributes,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.HTTPMethod', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.HTTPMethod') as unknown as string;
  }
  public get urlPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.URLPath'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.URLPath',
        parameters: {
          samplingRule: {
            ruleName: this.input.samplingRule.ruleName,
            ruleArn: this.input.samplingRule.ruleArn,
            resourceArn: this.input.samplingRule.resourceArn,
            priority: this.input.samplingRule.priority,
            fixedRate: this.input.samplingRule.fixedRate,
            reservoirSize: this.input.samplingRule.reservoirSize,
            serviceName: this.input.samplingRule.serviceName,
            serviceType: this.input.samplingRule.serviceType,
            host: this.input.samplingRule.host,
            httpMethod: this.input.samplingRule.httpMethod,
            urlPath: this.input.samplingRule.urlPath,
            version: this.input.samplingRule.version,
            attributes: this.input.samplingRule.attributes,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.URLPath', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.URLPath') as unknown as string;
  }
  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Version'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.Version',
        parameters: {
          samplingRule: {
            ruleName: this.input.samplingRule.ruleName,
            ruleArn: this.input.samplingRule.ruleArn,
            resourceArn: this.input.samplingRule.resourceArn,
            priority: this.input.samplingRule.priority,
            fixedRate: this.input.samplingRule.fixedRate,
            reservoirSize: this.input.samplingRule.reservoirSize,
            serviceName: this.input.samplingRule.serviceName,
            serviceType: this.input.samplingRule.serviceType,
            host: this.input.samplingRule.host,
            httpMethod: this.input.samplingRule.httpMethod,
            urlPath: this.input.samplingRule.urlPath,
            version: this.input.samplingRule.version,
            attributes: this.input.samplingRule.attributes,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Version', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.Version') as unknown as number;
  }
  public get attributes(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Attributes'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.Attributes',
        parameters: {
          samplingRule: {
            ruleName: this.input.samplingRule.ruleName,
            ruleArn: this.input.samplingRule.ruleArn,
            resourceArn: this.input.samplingRule.resourceArn,
            priority: this.input.samplingRule.priority,
            fixedRate: this.input.samplingRule.fixedRate,
            reservoirSize: this.input.samplingRule.reservoirSize,
            serviceName: this.input.samplingRule.serviceName,
            serviceType: this.input.samplingRule.serviceType,
            host: this.input.samplingRule.host,
            httpMethod: this.input.samplingRule.httpMethod,
            urlPath: this.input.samplingRule.urlPath,
            version: this.input.samplingRule.version,
            attributes: this.input.samplingRule.attributes,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Attributes', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.Attributes') as unknown as Record<string, string>;
  }
}
export class XRay_DeleteSamplingRuleResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.DeleteSamplingRuleRequest) {
    super(scope, id);
  }
  public get samplingRuleRecord(): XRay_DeleteSamplingRuleResult_SamplingRuleRecord_SamplingRuleRecord {
    return new XRay_DeleteSamplingRuleResult_SamplingRuleRecord_SamplingRuleRecord(this, 'SamplingRuleRecord', this.resources, this.input);
  }
}
export class XRay_DeleteSamplingRuleResult_SamplingRuleRecord_SamplingRuleRecord extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.DeleteSamplingRuleRequest) {
    super(scope, id);
  }
  public get samplingRule(): XRay_DeleteSamplingRuleResult_SamplingRuleRecord_SamplingRuleRecord_SamplingRule_SamplingRule {
    return new XRay_DeleteSamplingRuleResult_SamplingRuleRecord_SamplingRuleRecord_SamplingRule_SamplingRule(this, 'SamplingRule', this.resources, this.input);
  }
  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.CreatedAt'),
        outputPath: 'SamplingRuleRecord.CreatedAt',
        parameters: {
          ruleName: this.input.ruleName,
          ruleArn: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.CreatedAt', props);
    return resource.getResponseField('SamplingRuleRecord.CreatedAt') as unknown as string;
  }
  public get modifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.ModifiedAt'),
        outputPath: 'SamplingRuleRecord.ModifiedAt',
        parameters: {
          ruleName: this.input.ruleName,
          ruleArn: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.ModifiedAt', props);
    return resource.getResponseField('SamplingRuleRecord.ModifiedAt') as unknown as string;
  }
}
export class XRay_DeleteSamplingRuleResult_SamplingRuleRecord_SamplingRuleRecord_SamplingRule_SamplingRule extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.DeleteSamplingRuleRequest) {
    super(scope, id);
  }
  public get ruleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.RuleName'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.RuleName',
        parameters: {
          ruleName: this.input.ruleName,
          ruleArn: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.RuleName', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.RuleName') as unknown as string;
  }
  public get ruleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.RuleARN'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.RuleARN',
        parameters: {
          ruleName: this.input.ruleName,
          ruleArn: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.RuleARN', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.RuleARN') as unknown as string;
  }
  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ResourceARN'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.ResourceARN',
        parameters: {
          ruleName: this.input.ruleName,
          ruleArn: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ResourceARN', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.ResourceARN') as unknown as string;
  }
  public get priority(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Priority'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.Priority',
        parameters: {
          ruleName: this.input.ruleName,
          ruleArn: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Priority', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.Priority') as unknown as number;
  }
  public get fixedRate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.FixedRate'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.FixedRate',
        parameters: {
          ruleName: this.input.ruleName,
          ruleArn: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.FixedRate', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.FixedRate') as unknown as number;
  }
  public get reservoirSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ReservoirSize'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.ReservoirSize',
        parameters: {
          ruleName: this.input.ruleName,
          ruleArn: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ReservoirSize', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.ReservoirSize') as unknown as number;
  }
  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ServiceName'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.ServiceName',
        parameters: {
          ruleName: this.input.ruleName,
          ruleArn: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ServiceName', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.ServiceName') as unknown as string;
  }
  public get serviceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ServiceType'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.ServiceType',
        parameters: {
          ruleName: this.input.ruleName,
          ruleArn: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ServiceType', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.ServiceType') as unknown as string;
  }
  public get host(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Host'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.Host',
        parameters: {
          ruleName: this.input.ruleName,
          ruleArn: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Host', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.Host') as unknown as string;
  }
  public get httpMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.HTTPMethod'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.HTTPMethod',
        parameters: {
          ruleName: this.input.ruleName,
          ruleArn: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.HTTPMethod', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.HTTPMethod') as unknown as string;
  }
  public get urlPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.URLPath'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.URLPath',
        parameters: {
          ruleName: this.input.ruleName,
          ruleArn: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.URLPath', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.URLPath') as unknown as string;
  }
  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Version'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.Version',
        parameters: {
          ruleName: this.input.ruleName,
          ruleArn: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Version', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.Version') as unknown as number;
  }
  public get attributes(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Attributes'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.Attributes',
        parameters: {
          ruleName: this.input.ruleName,
          ruleArn: this.input.ruleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Attributes', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.Attributes') as unknown as Record<string, string>;
  }
}
export class XRay_GetEncryptionConfigResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get encryptionConfig(): XRay_GetEncryptionConfigResult_EncryptionConfig_EncryptionConfig {
    return new XRay_GetEncryptionConfigResult_EncryptionConfig_EncryptionConfig(this, 'EncryptionConfig', this.resources);
  }
}
export class XRay_GetEncryptionConfigResult_EncryptionConfig_EncryptionConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
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
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
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
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
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
export class XRay_GetGroupResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetGroupRequest) {
    super(scope, id);
  }
  public get group(): XRay_GetGroupResult_Group_Group {
    return new XRay_GetGroupResult_Group_Group(this, 'Group', this.resources, this.input);
  }
}
export class XRay_GetGroupResult_Group_Group extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetGroupRequest) {
    super(scope, id);
  }
  public get groupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetGroup.Group.GroupName'),
        outputPath: 'Group.GroupName',
        parameters: {
          groupName: this.input.groupName,
          groupArn: this.input.groupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.Group.GroupName', props);
    return resource.getResponseField('Group.GroupName') as unknown as string;
  }
  public get groupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetGroup.Group.GroupARN'),
        outputPath: 'Group.GroupARN',
        parameters: {
          groupName: this.input.groupName,
          groupArn: this.input.groupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.Group.GroupARN', props);
    return resource.getResponseField('Group.GroupARN') as unknown as string;
  }
  public get filterExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetGroup.Group.FilterExpression'),
        outputPath: 'Group.FilterExpression',
        parameters: {
          groupName: this.input.groupName,
          groupArn: this.input.groupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.Group.FilterExpression', props);
    return resource.getResponseField('Group.FilterExpression') as unknown as string;
  }
  public get insightsConfiguration(): XRay_GetGroupResult_Group_Group_InsightsConfiguration_InsightsConfiguration {
    return new XRay_GetGroupResult_Group_Group_InsightsConfiguration_InsightsConfiguration(this, 'InsightsConfiguration', this.resources, this.input);
  }
}
export class XRay_GetGroupResult_Group_Group_InsightsConfiguration_InsightsConfiguration extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetGroupRequest) {
    super(scope, id);
  }
  public get insightsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetGroup.Group.InsightsConfiguration.InsightsConfiguration.InsightsEnabled'),
        outputPath: 'Group.InsightsConfiguration.InsightsConfiguration.InsightsEnabled',
        parameters: {
          groupName: this.input.groupName,
          groupArn: this.input.groupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.Group.InsightsConfiguration.InsightsConfiguration.InsightsEnabled', props);
    return resource.getResponseField('Group.InsightsConfiguration.InsightsConfiguration.InsightsEnabled') as unknown as boolean;
  }
  public get notificationsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetGroup.Group.InsightsConfiguration.InsightsConfiguration.NotificationsEnabled'),
        outputPath: 'Group.InsightsConfiguration.InsightsConfiguration.NotificationsEnabled',
        parameters: {
          groupName: this.input.groupName,
          groupArn: this.input.groupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.Group.InsightsConfiguration.InsightsConfiguration.NotificationsEnabled', props);
    return resource.getResponseField('Group.InsightsConfiguration.InsightsConfiguration.NotificationsEnabled') as unknown as boolean;
  }
}
export class XRay_GetGroupsResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetGroupsRequest) {
    super(scope, id);
  }
  public get groups(): shapes.GroupSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getGroups',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetGroups.'),
        outputPath: '',
        parameters: {
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroups.', props);
    return resource.getResponseField('') as unknown as shapes.GroupSummary[];
  }
  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getGroups',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetGroups.'),
        outputPath: '',
        parameters: {
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroups.', props);
    return resource.getResponseField('') as unknown as string;
  }
}
export class XRay_GetInsightResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetInsightRequest) {
    super(scope, id);
  }
  public get insight(): XRay_GetInsightResult_Insight_Insight {
    return new XRay_GetInsightResult_Insight_Insight(this, 'Insight', this.resources, this.input);
  }
}
export class XRay_GetInsightResult_Insight_Insight extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetInsightRequest) {
    super(scope, id);
  }
  public get insightId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.InsightId'),
        outputPath: 'Insight.InsightId',
        parameters: {
          insightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.InsightId', props);
    return resource.getResponseField('Insight.InsightId') as unknown as string;
  }
  public get groupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.GroupARN'),
        outputPath: 'Insight.GroupARN',
        parameters: {
          insightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.GroupARN', props);
    return resource.getResponseField('Insight.GroupARN') as unknown as string;
  }
  public get groupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.GroupName'),
        outputPath: 'Insight.GroupName',
        parameters: {
          insightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.GroupName', props);
    return resource.getResponseField('Insight.GroupName') as unknown as string;
  }
  public get rootCauseServiceId(): XRay_GetInsightResult_Insight_Insight_ServiceId_RootCauseServiceId {
    return new XRay_GetInsightResult_Insight_Insight_ServiceId_RootCauseServiceId(this, 'ServiceId', this.resources, this.input);
  }
  public get categories(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.Categories'),
        outputPath: 'Insight.Categories',
        parameters: {
          insightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.Categories', props);
    return resource.getResponseField('Insight.Categories') as unknown as string[];
  }
  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.State'),
        outputPath: 'Insight.State',
        parameters: {
          insightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.State', props);
    return resource.getResponseField('Insight.State') as unknown as string;
  }
  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.StartTime'),
        outputPath: 'Insight.StartTime',
        parameters: {
          insightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.StartTime', props);
    return resource.getResponseField('Insight.StartTime') as unknown as string;
  }
  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.EndTime'),
        outputPath: 'Insight.EndTime',
        parameters: {
          insightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.EndTime', props);
    return resource.getResponseField('Insight.EndTime') as unknown as string;
  }
  public get summary(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.Summary'),
        outputPath: 'Insight.Summary',
        parameters: {
          insightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.Summary', props);
    return resource.getResponseField('Insight.Summary') as unknown as string;
  }
  public get clientRequestImpactStatistics(): XRay_GetInsightResult_Insight_Insight_RequestImpactStatistics_ClientRequestImpactStatistics {
    return new XRay_GetInsightResult_Insight_Insight_RequestImpactStatistics_ClientRequestImpactStatistics(this, 'RequestImpactStatistics', this.resources, this.input);
  }
  public get rootCauseServiceRequestImpactStatistics(): XRay_GetInsightResult_Insight_Insight_RequestImpactStatistics_RootCauseServiceRequestImpactStatistics {
    return new XRay_GetInsightResult_Insight_Insight_RequestImpactStatistics_RootCauseServiceRequestImpactStatistics(this, 'RequestImpactStatistics', this.resources, this.input);
  }
  public get topAnomalousServices(): shapes.AnomalousService[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.TopAnomalousServices'),
        outputPath: 'Insight.TopAnomalousServices',
        parameters: {
          insightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.TopAnomalousServices', props);
    return resource.getResponseField('Insight.TopAnomalousServices') as unknown as shapes.AnomalousService[];
  }
}
export class XRay_GetInsightResult_Insight_Insight_ServiceId_RootCauseServiceId extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetInsightRequest) {
    super(scope, id);
  }
  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.RootCauseServiceId.RootCauseServiceId.Name'),
        outputPath: 'Insight.RootCauseServiceId.RootCauseServiceId.Name',
        parameters: {
          insightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.RootCauseServiceId.RootCauseServiceId.Name', props);
    return resource.getResponseField('Insight.RootCauseServiceId.RootCauseServiceId.Name') as unknown as string;
  }
  public get names(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.RootCauseServiceId.RootCauseServiceId.Names'),
        outputPath: 'Insight.RootCauseServiceId.RootCauseServiceId.Names',
        parameters: {
          insightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.RootCauseServiceId.RootCauseServiceId.Names', props);
    return resource.getResponseField('Insight.RootCauseServiceId.RootCauseServiceId.Names') as unknown as string[];
  }
  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.RootCauseServiceId.RootCauseServiceId.AccountId'),
        outputPath: 'Insight.RootCauseServiceId.RootCauseServiceId.AccountId',
        parameters: {
          insightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.RootCauseServiceId.RootCauseServiceId.AccountId', props);
    return resource.getResponseField('Insight.RootCauseServiceId.RootCauseServiceId.AccountId') as unknown as string;
  }
  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.RootCauseServiceId.RootCauseServiceId.Type'),
        outputPath: 'Insight.RootCauseServiceId.RootCauseServiceId.Type',
        parameters: {
          insightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.RootCauseServiceId.RootCauseServiceId.Type', props);
    return resource.getResponseField('Insight.RootCauseServiceId.RootCauseServiceId.Type') as unknown as string;
  }
}
export class XRay_GetInsightResult_Insight_Insight_RequestImpactStatistics_ClientRequestImpactStatistics extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetInsightRequest) {
    super(scope, id);
  }
  public get faultCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.ClientRequestImpactStatistics.ClientRequestImpactStatistics.FaultCount'),
        outputPath: 'Insight.ClientRequestImpactStatistics.ClientRequestImpactStatistics.FaultCount',
        parameters: {
          insightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.ClientRequestImpactStatistics.ClientRequestImpactStatistics.FaultCount', props);
    return resource.getResponseField('Insight.ClientRequestImpactStatistics.ClientRequestImpactStatistics.FaultCount') as unknown as number;
  }
  public get okCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.ClientRequestImpactStatistics.ClientRequestImpactStatistics.OkCount'),
        outputPath: 'Insight.ClientRequestImpactStatistics.ClientRequestImpactStatistics.OkCount',
        parameters: {
          insightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.ClientRequestImpactStatistics.ClientRequestImpactStatistics.OkCount', props);
    return resource.getResponseField('Insight.ClientRequestImpactStatistics.ClientRequestImpactStatistics.OkCount') as unknown as number;
  }
  public get totalCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.ClientRequestImpactStatistics.ClientRequestImpactStatistics.TotalCount'),
        outputPath: 'Insight.ClientRequestImpactStatistics.ClientRequestImpactStatistics.TotalCount',
        parameters: {
          insightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.ClientRequestImpactStatistics.ClientRequestImpactStatistics.TotalCount', props);
    return resource.getResponseField('Insight.ClientRequestImpactStatistics.ClientRequestImpactStatistics.TotalCount') as unknown as number;
  }
}
export class XRay_GetInsightResult_Insight_Insight_RequestImpactStatistics_RootCauseServiceRequestImpactStatistics extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetInsightRequest) {
    super(scope, id);
  }
  public get faultCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.RootCauseServiceRequestImpactStatistics.RootCauseServiceRequestImpactStatistics.FaultCount'),
        outputPath: 'Insight.RootCauseServiceRequestImpactStatistics.RootCauseServiceRequestImpactStatistics.FaultCount',
        parameters: {
          insightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.RootCauseServiceRequestImpactStatistics.RootCauseServiceRequestImpactStatistics.FaultCount', props);
    return resource.getResponseField('Insight.RootCauseServiceRequestImpactStatistics.RootCauseServiceRequestImpactStatistics.FaultCount') as unknown as number;
  }
  public get okCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.RootCauseServiceRequestImpactStatistics.RootCauseServiceRequestImpactStatistics.OkCount'),
        outputPath: 'Insight.RootCauseServiceRequestImpactStatistics.RootCauseServiceRequestImpactStatistics.OkCount',
        parameters: {
          insightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.RootCauseServiceRequestImpactStatistics.RootCauseServiceRequestImpactStatistics.OkCount', props);
    return resource.getResponseField('Insight.RootCauseServiceRequestImpactStatistics.RootCauseServiceRequestImpactStatistics.OkCount') as unknown as number;
  }
  public get totalCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsight.Insight.RootCauseServiceRequestImpactStatistics.RootCauseServiceRequestImpactStatistics.TotalCount'),
        outputPath: 'Insight.RootCauseServiceRequestImpactStatistics.RootCauseServiceRequestImpactStatistics.TotalCount',
        parameters: {
          insightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.RootCauseServiceRequestImpactStatistics.RootCauseServiceRequestImpactStatistics.TotalCount', props);
    return resource.getResponseField('Insight.RootCauseServiceRequestImpactStatistics.RootCauseServiceRequestImpactStatistics.TotalCount') as unknown as number;
  }
}
export class XRay_GetInsightEventsResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetInsightEventsRequest) {
    super(scope, id);
  }
  public get insightEvents(): shapes.InsightEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsightEvents',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsightEvents.'),
        outputPath: '',
        parameters: {
          insightId: this.input.insightId,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsightEvents.', props);
    return resource.getResponseField('') as unknown as shapes.InsightEvent[];
  }
  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsightEvents',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsightEvents.'),
        outputPath: '',
        parameters: {
          insightId: this.input.insightId,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsightEvents.', props);
    return resource.getResponseField('') as unknown as string;
  }
}
export class XRay_GetInsightImpactGraphResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetInsightImpactGraphRequest) {
    super(scope, id);
  }
  public get insightId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsightImpactGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsightImpactGraph.'),
        outputPath: '',
        parameters: {
          insightId: this.input.insightId,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsightImpactGraph.', props);
    return resource.getResponseField('') as unknown as string;
  }
  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsightImpactGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsightImpactGraph.'),
        outputPath: '',
        parameters: {
          insightId: this.input.insightId,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsightImpactGraph.', props);
    return resource.getResponseField('') as unknown as string;
  }
  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsightImpactGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsightImpactGraph.'),
        outputPath: '',
        parameters: {
          insightId: this.input.insightId,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsightImpactGraph.', props);
    return resource.getResponseField('') as unknown as string;
  }
  public get serviceGraphStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsightImpactGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsightImpactGraph.'),
        outputPath: '',
        parameters: {
          insightId: this.input.insightId,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsightImpactGraph.', props);
    return resource.getResponseField('') as unknown as string;
  }
  public get serviceGraphEndTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsightImpactGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsightImpactGraph.'),
        outputPath: '',
        parameters: {
          insightId: this.input.insightId,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsightImpactGraph.', props);
    return resource.getResponseField('') as unknown as string;
  }
  public get services(): shapes.InsightImpactGraphService[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsightImpactGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsightImpactGraph.'),
        outputPath: '',
        parameters: {
          insightId: this.input.insightId,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsightImpactGraph.', props);
    return resource.getResponseField('') as unknown as shapes.InsightImpactGraphService[];
  }
  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsightImpactGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsightImpactGraph.'),
        outputPath: '',
        parameters: {
          insightId: this.input.insightId,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsightImpactGraph.', props);
    return resource.getResponseField('') as unknown as string;
  }
}
export class XRay_GetInsightSummariesResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetInsightSummariesRequest) {
    super(scope, id);
  }
  public get insightSummaries(): shapes.InsightSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsightSummaries',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsightSummaries.'),
        outputPath: '',
        parameters: {
          states: this.input.states,
          groupArn: this.input.groupArn,
          groupName: this.input.groupName,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsightSummaries.', props);
    return resource.getResponseField('') as unknown as shapes.InsightSummary[];
  }
  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsightSummaries',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetInsightSummaries.'),
        outputPath: '',
        parameters: {
          states: this.input.states,
          groupArn: this.input.groupArn,
          groupName: this.input.groupName,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsightSummaries.', props);
    return resource.getResponseField('') as unknown as string;
  }
}
export class XRay_GetSamplingRulesResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetSamplingRulesRequest) {
    super(scope, id);
  }
  public get samplingRuleRecords(): shapes.SamplingRuleRecord[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getSamplingRules',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetSamplingRules.'),
        outputPath: '',
        parameters: {
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSamplingRules.', props);
    return resource.getResponseField('') as unknown as shapes.SamplingRuleRecord[];
  }
  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getSamplingRules',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetSamplingRules.'),
        outputPath: '',
        parameters: {
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSamplingRules.', props);
    return resource.getResponseField('') as unknown as string;
  }
}
export class XRay_GetSamplingStatisticSummariesResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetSamplingStatisticSummariesRequest) {
    super(scope, id);
  }
  public get samplingStatisticSummaries(): shapes.SamplingStatisticSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getSamplingStatisticSummaries',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetSamplingStatisticSummaries.'),
        outputPath: '',
        parameters: {
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSamplingStatisticSummaries.', props);
    return resource.getResponseField('') as unknown as shapes.SamplingStatisticSummary[];
  }
  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getSamplingStatisticSummaries',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetSamplingStatisticSummaries.'),
        outputPath: '',
        parameters: {
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSamplingStatisticSummaries.', props);
    return resource.getResponseField('') as unknown as string;
  }
}
export class XRay_GetSamplingTargetsResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetSamplingTargetsRequest) {
    super(scope, id);
  }
  public get samplingTargetDocuments(): shapes.SamplingTargetDocument[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getSamplingTargets',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetSamplingTargets.'),
        outputPath: '',
        parameters: {
          samplingStatisticsDocuments: this.input.samplingStatisticsDocuments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSamplingTargets.', props);
    return resource.getResponseField('') as unknown as shapes.SamplingTargetDocument[];
  }
  public get lastRuleModification(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getSamplingTargets',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetSamplingTargets.'),
        outputPath: '',
        parameters: {
          samplingStatisticsDocuments: this.input.samplingStatisticsDocuments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSamplingTargets.', props);
    return resource.getResponseField('') as unknown as string;
  }
  public get unprocessedStatistics(): shapes.UnprocessedStatistics[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getSamplingTargets',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetSamplingTargets.'),
        outputPath: '',
        parameters: {
          samplingStatisticsDocuments: this.input.samplingStatisticsDocuments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSamplingTargets.', props);
    return resource.getResponseField('') as unknown as shapes.UnprocessedStatistics[];
  }
}
export class XRay_GetServiceGraphResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetServiceGraphRequest) {
    super(scope, id);
  }
  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getServiceGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetServiceGraph.'),
        outputPath: '',
        parameters: {
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          groupName: this.input.groupName,
          groupArn: this.input.groupArn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceGraph.', props);
    return resource.getResponseField('') as unknown as string;
  }
  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getServiceGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetServiceGraph.'),
        outputPath: '',
        parameters: {
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          groupName: this.input.groupName,
          groupArn: this.input.groupArn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceGraph.', props);
    return resource.getResponseField('') as unknown as string;
  }
  public get services(): shapes.Service[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getServiceGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetServiceGraph.'),
        outputPath: '',
        parameters: {
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          groupName: this.input.groupName,
          groupArn: this.input.groupArn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceGraph.', props);
    return resource.getResponseField('') as unknown as shapes.Service[];
  }
  public get containsOldGroupVersions(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getServiceGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetServiceGraph.'),
        outputPath: '',
        parameters: {
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          groupName: this.input.groupName,
          groupArn: this.input.groupArn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceGraph.', props);
    return resource.getResponseField('') as unknown as boolean;
  }
  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getServiceGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetServiceGraph.'),
        outputPath: '',
        parameters: {
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          groupName: this.input.groupName,
          groupArn: this.input.groupArn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceGraph.', props);
    return resource.getResponseField('') as unknown as string;
  }
}
export class XRay_GetTimeSeriesServiceStatisticsResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetTimeSeriesServiceStatisticsRequest) {
    super(scope, id);
  }
  public get timeSeriesServiceStatistics(): shapes.TimeSeriesServiceStatistics[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getTimeSeriesServiceStatistics',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetTimeSeriesServiceStatistics.'),
        outputPath: '',
        parameters: {
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          groupName: this.input.groupName,
          groupArn: this.input.groupArn,
          entitySelectorExpression: this.input.entitySelectorExpression,
          period: this.input.period,
          forecastStatistics: this.input.forecastStatistics,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTimeSeriesServiceStatistics.', props);
    return resource.getResponseField('') as unknown as shapes.TimeSeriesServiceStatistics[];
  }
  public get containsOldGroupVersions(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getTimeSeriesServiceStatistics',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetTimeSeriesServiceStatistics.'),
        outputPath: '',
        parameters: {
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          groupName: this.input.groupName,
          groupArn: this.input.groupArn,
          entitySelectorExpression: this.input.entitySelectorExpression,
          period: this.input.period,
          forecastStatistics: this.input.forecastStatistics,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTimeSeriesServiceStatistics.', props);
    return resource.getResponseField('') as unknown as boolean;
  }
  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getTimeSeriesServiceStatistics',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetTimeSeriesServiceStatistics.'),
        outputPath: '',
        parameters: {
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          groupName: this.input.groupName,
          groupArn: this.input.groupArn,
          entitySelectorExpression: this.input.entitySelectorExpression,
          period: this.input.period,
          forecastStatistics: this.input.forecastStatistics,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTimeSeriesServiceStatistics.', props);
    return resource.getResponseField('') as unknown as string;
  }
}
export class XRay_GetTraceGraphResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetTraceGraphRequest) {
    super(scope, id);
  }
  public get services(): shapes.Service[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getTraceGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetTraceGraph.'),
        outputPath: '',
        parameters: {
          traceIds: this.input.traceIds,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTraceGraph.', props);
    return resource.getResponseField('') as unknown as shapes.Service[];
  }
  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getTraceGraph',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetTraceGraph.'),
        outputPath: '',
        parameters: {
          traceIds: this.input.traceIds,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTraceGraph.', props);
    return resource.getResponseField('') as unknown as string;
  }
}
export class XRay_GetTraceSummariesResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetTraceSummariesRequest) {
    super(scope, id);
  }
  public get traceSummaries(): shapes.TraceSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getTraceSummaries',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetTraceSummaries.'),
        outputPath: '',
        parameters: {
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          timeRangeType: this.input.timeRangeType,
          sampling: this.input.sampling,
          samplingStrategy: {
            name: this.input.samplingStrategy?.name,
            value: this.input.samplingStrategy?.value,
          },
          filterExpression: this.input.filterExpression,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTraceSummaries.', props);
    return resource.getResponseField('') as unknown as shapes.TraceSummary[];
  }
  public get approximateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getTraceSummaries',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetTraceSummaries.'),
        outputPath: '',
        parameters: {
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          timeRangeType: this.input.timeRangeType,
          sampling: this.input.sampling,
          samplingStrategy: {
            name: this.input.samplingStrategy?.name,
            value: this.input.samplingStrategy?.value,
          },
          filterExpression: this.input.filterExpression,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTraceSummaries.', props);
    return resource.getResponseField('') as unknown as string;
  }
  public get tracesProcessedCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getTraceSummaries',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetTraceSummaries.'),
        outputPath: '',
        parameters: {
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          timeRangeType: this.input.timeRangeType,
          sampling: this.input.sampling,
          samplingStrategy: {
            name: this.input.samplingStrategy?.name,
            value: this.input.samplingStrategy?.value,
          },
          filterExpression: this.input.filterExpression,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTraceSummaries.', props);
    return resource.getResponseField('') as unknown as number;
  }
  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getTraceSummaries',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.GetTraceSummaries.'),
        outputPath: '',
        parameters: {
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          timeRangeType: this.input.timeRangeType,
          sampling: this.input.sampling,
          samplingStrategy: {
            name: this.input.samplingStrategy?.name,
            value: this.input.samplingStrategy?.value,
          },
          filterExpression: this.input.filterExpression,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTraceSummaries.', props);
    return resource.getResponseField('') as unknown as string;
  }
}
export class XRay_ListTagsForResourceResponse extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.ListTagsForResourceRequest) {
    super(scope, id);
  }
  public get tags(): shapes.Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.ListTagsForResource.'),
        outputPath: '',
        parameters: {
          resourceArn: this.input.resourceArn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.', props);
    return resource.getResponseField('') as unknown as shapes.Tag[];
  }
  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.ListTagsForResource.'),
        outputPath: '',
        parameters: {
          resourceArn: this.input.resourceArn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.', props);
    return resource.getResponseField('') as unknown as string;
  }
}
export class XRay_PutEncryptionConfigResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.PutEncryptionConfigRequest) {
    super(scope, id);
  }
  public get encryptionConfig(): XRay_PutEncryptionConfigResult_EncryptionConfig_EncryptionConfig {
    return new XRay_PutEncryptionConfigResult_EncryptionConfig_EncryptionConfig(this, 'EncryptionConfig', this.resources, this.input);
  }
}
export class XRay_PutEncryptionConfigResult_EncryptionConfig_EncryptionConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.PutEncryptionConfigRequest) {
    super(scope, id);
  }
  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'putEncryptionConfig',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.PutEncryptionConfig.EncryptionConfig.KeyId'),
        outputPath: 'EncryptionConfig.KeyId',
        parameters: {
          keyId: this.input.keyId,
          type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutEncryptionConfig.EncryptionConfig.KeyId', props);
    return resource.getResponseField('EncryptionConfig.KeyId') as unknown as string;
  }
  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'putEncryptionConfig',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.PutEncryptionConfig.EncryptionConfig.Status'),
        outputPath: 'EncryptionConfig.Status',
        parameters: {
          keyId: this.input.keyId,
          type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutEncryptionConfig.EncryptionConfig.Status', props);
    return resource.getResponseField('EncryptionConfig.Status') as unknown as string;
  }
  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'putEncryptionConfig',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.PutEncryptionConfig.EncryptionConfig.Type'),
        outputPath: 'EncryptionConfig.Type',
        parameters: {
          keyId: this.input.keyId,
          type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutEncryptionConfig.EncryptionConfig.Type', props);
    return resource.getResponseField('EncryptionConfig.Type') as unknown as string;
  }
}
export class XRay_PutTraceSegmentsResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.PutTraceSegmentsRequest) {
    super(scope, id);
  }
  public get unprocessedTraceSegments(): shapes.UnprocessedTraceSegment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'putTraceSegments',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.PutTraceSegments.'),
        outputPath: '',
        parameters: {
          traceSegmentDocuments: this.input.traceSegmentDocuments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutTraceSegments.', props);
    return resource.getResponseField('') as unknown as shapes.UnprocessedTraceSegment[];
  }
}
export class XRay_UpdateGroupResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.UpdateGroupRequest) {
    super(scope, id);
  }
  public get group(): XRay_UpdateGroupResult_Group_Group {
    return new XRay_UpdateGroupResult_Group_Group(this, 'Group', this.resources, this.input);
  }
}
export class XRay_UpdateGroupResult_Group_Group extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.UpdateGroupRequest) {
    super(scope, id);
  }
  public get groupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateGroup.Group.GroupName'),
        outputPath: 'Group.GroupName',
        parameters: {
          groupName: this.input.groupName,
          groupArn: this.input.groupArn,
          filterExpression: this.input.filterExpression,
          insightsConfiguration: {
            insightsEnabled: this.input.insightsConfiguration?.insightsEnabled,
            notificationsEnabled: this.input.insightsConfiguration?.notificationsEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGroup.Group.GroupName', props);
    return resource.getResponseField('Group.GroupName') as unknown as string;
  }
  public get groupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateGroup.Group.GroupARN'),
        outputPath: 'Group.GroupARN',
        parameters: {
          groupName: this.input.groupName,
          groupArn: this.input.groupArn,
          filterExpression: this.input.filterExpression,
          insightsConfiguration: {
            insightsEnabled: this.input.insightsConfiguration?.insightsEnabled,
            notificationsEnabled: this.input.insightsConfiguration?.notificationsEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGroup.Group.GroupARN', props);
    return resource.getResponseField('Group.GroupARN') as unknown as string;
  }
  public get filterExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateGroup.Group.FilterExpression'),
        outputPath: 'Group.FilterExpression',
        parameters: {
          groupName: this.input.groupName,
          groupArn: this.input.groupArn,
          filterExpression: this.input.filterExpression,
          insightsConfiguration: {
            insightsEnabled: this.input.insightsConfiguration?.insightsEnabled,
            notificationsEnabled: this.input.insightsConfiguration?.notificationsEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGroup.Group.FilterExpression', props);
    return resource.getResponseField('Group.FilterExpression') as unknown as string;
  }
  public get insightsConfiguration(): XRay_UpdateGroupResult_Group_Group_InsightsConfiguration_InsightsConfiguration {
    return new XRay_UpdateGroupResult_Group_Group_InsightsConfiguration_InsightsConfiguration(this, 'InsightsConfiguration', this.resources, this.input);
  }
}
export class XRay_UpdateGroupResult_Group_Group_InsightsConfiguration_InsightsConfiguration extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.UpdateGroupRequest) {
    super(scope, id);
  }
  public get insightsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateGroup.Group.InsightsConfiguration.InsightsConfiguration.InsightsEnabled'),
        outputPath: 'Group.InsightsConfiguration.InsightsConfiguration.InsightsEnabled',
        parameters: {
          groupName: this.input.groupName,
          groupArn: this.input.groupArn,
          filterExpression: this.input.filterExpression,
          insightsConfiguration: {
            insightsEnabled: this.input.insightsConfiguration?.insightsEnabled,
            notificationsEnabled: this.input.insightsConfiguration?.notificationsEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGroup.Group.InsightsConfiguration.InsightsConfiguration.InsightsEnabled', props);
    return resource.getResponseField('Group.InsightsConfiguration.InsightsConfiguration.InsightsEnabled') as unknown as boolean;
  }
  public get notificationsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateGroup',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateGroup.Group.InsightsConfiguration.InsightsConfiguration.NotificationsEnabled'),
        outputPath: 'Group.InsightsConfiguration.InsightsConfiguration.NotificationsEnabled',
        parameters: {
          groupName: this.input.groupName,
          groupArn: this.input.groupArn,
          filterExpression: this.input.filterExpression,
          insightsConfiguration: {
            insightsEnabled: this.input.insightsConfiguration?.insightsEnabled,
            notificationsEnabled: this.input.insightsConfiguration?.notificationsEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGroup.Group.InsightsConfiguration.InsightsConfiguration.NotificationsEnabled', props);
    return resource.getResponseField('Group.InsightsConfiguration.InsightsConfiguration.NotificationsEnabled') as unknown as boolean;
  }
}
export class XRay_UpdateSamplingRuleResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.UpdateSamplingRuleRequest) {
    super(scope, id);
  }
  public get samplingRuleRecord(): XRay_UpdateSamplingRuleResult_SamplingRuleRecord_SamplingRuleRecord {
    return new XRay_UpdateSamplingRuleResult_SamplingRuleRecord_SamplingRuleRecord(this, 'SamplingRuleRecord', this.resources, this.input);
  }
}
export class XRay_UpdateSamplingRuleResult_SamplingRuleRecord_SamplingRuleRecord extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.UpdateSamplingRuleRequest) {
    super(scope, id);
  }
  public get samplingRule(): XRay_UpdateSamplingRuleResult_SamplingRuleRecord_SamplingRuleRecord_SamplingRule_SamplingRule {
    return new XRay_UpdateSamplingRuleResult_SamplingRuleRecord_SamplingRuleRecord_SamplingRule_SamplingRule(this, 'SamplingRule', this.resources, this.input);
  }
  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.CreatedAt'),
        outputPath: 'SamplingRuleRecord.CreatedAt',
        parameters: {
          samplingRuleUpdate: {
            ruleName: this.input.samplingRuleUpdate.ruleName,
            ruleArn: this.input.samplingRuleUpdate.ruleArn,
            resourceArn: this.input.samplingRuleUpdate.resourceArn,
            priority: this.input.samplingRuleUpdate.priority,
            fixedRate: this.input.samplingRuleUpdate.fixedRate,
            reservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            host: this.input.samplingRuleUpdate.host,
            serviceName: this.input.samplingRuleUpdate.serviceName,
            serviceType: this.input.samplingRuleUpdate.serviceType,
            httpMethod: this.input.samplingRuleUpdate.httpMethod,
            urlPath: this.input.samplingRuleUpdate.urlPath,
            attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.CreatedAt', props);
    return resource.getResponseField('SamplingRuleRecord.CreatedAt') as unknown as string;
  }
  public get modifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.ModifiedAt'),
        outputPath: 'SamplingRuleRecord.ModifiedAt',
        parameters: {
          samplingRuleUpdate: {
            ruleName: this.input.samplingRuleUpdate.ruleName,
            ruleArn: this.input.samplingRuleUpdate.ruleArn,
            resourceArn: this.input.samplingRuleUpdate.resourceArn,
            priority: this.input.samplingRuleUpdate.priority,
            fixedRate: this.input.samplingRuleUpdate.fixedRate,
            reservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            host: this.input.samplingRuleUpdate.host,
            serviceName: this.input.samplingRuleUpdate.serviceName,
            serviceType: this.input.samplingRuleUpdate.serviceType,
            httpMethod: this.input.samplingRuleUpdate.httpMethod,
            urlPath: this.input.samplingRuleUpdate.urlPath,
            attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.ModifiedAt', props);
    return resource.getResponseField('SamplingRuleRecord.ModifiedAt') as unknown as string;
  }
}
export class XRay_UpdateSamplingRuleResult_SamplingRuleRecord_SamplingRuleRecord_SamplingRule_SamplingRule extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.UpdateSamplingRuleRequest) {
    super(scope, id);
  }
  public get ruleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.RuleName'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.RuleName',
        parameters: {
          samplingRuleUpdate: {
            ruleName: this.input.samplingRuleUpdate.ruleName,
            ruleArn: this.input.samplingRuleUpdate.ruleArn,
            resourceArn: this.input.samplingRuleUpdate.resourceArn,
            priority: this.input.samplingRuleUpdate.priority,
            fixedRate: this.input.samplingRuleUpdate.fixedRate,
            reservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            host: this.input.samplingRuleUpdate.host,
            serviceName: this.input.samplingRuleUpdate.serviceName,
            serviceType: this.input.samplingRuleUpdate.serviceType,
            httpMethod: this.input.samplingRuleUpdate.httpMethod,
            urlPath: this.input.samplingRuleUpdate.urlPath,
            attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.RuleName', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.RuleName') as unknown as string;
  }
  public get ruleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.RuleARN'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.RuleARN',
        parameters: {
          samplingRuleUpdate: {
            ruleName: this.input.samplingRuleUpdate.ruleName,
            ruleArn: this.input.samplingRuleUpdate.ruleArn,
            resourceArn: this.input.samplingRuleUpdate.resourceArn,
            priority: this.input.samplingRuleUpdate.priority,
            fixedRate: this.input.samplingRuleUpdate.fixedRate,
            reservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            host: this.input.samplingRuleUpdate.host,
            serviceName: this.input.samplingRuleUpdate.serviceName,
            serviceType: this.input.samplingRuleUpdate.serviceType,
            httpMethod: this.input.samplingRuleUpdate.httpMethod,
            urlPath: this.input.samplingRuleUpdate.urlPath,
            attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.RuleARN', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.RuleARN') as unknown as string;
  }
  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ResourceARN'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.ResourceARN',
        parameters: {
          samplingRuleUpdate: {
            ruleName: this.input.samplingRuleUpdate.ruleName,
            ruleArn: this.input.samplingRuleUpdate.ruleArn,
            resourceArn: this.input.samplingRuleUpdate.resourceArn,
            priority: this.input.samplingRuleUpdate.priority,
            fixedRate: this.input.samplingRuleUpdate.fixedRate,
            reservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            host: this.input.samplingRuleUpdate.host,
            serviceName: this.input.samplingRuleUpdate.serviceName,
            serviceType: this.input.samplingRuleUpdate.serviceType,
            httpMethod: this.input.samplingRuleUpdate.httpMethod,
            urlPath: this.input.samplingRuleUpdate.urlPath,
            attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ResourceARN', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.ResourceARN') as unknown as string;
  }
  public get priority(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Priority'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.Priority',
        parameters: {
          samplingRuleUpdate: {
            ruleName: this.input.samplingRuleUpdate.ruleName,
            ruleArn: this.input.samplingRuleUpdate.ruleArn,
            resourceArn: this.input.samplingRuleUpdate.resourceArn,
            priority: this.input.samplingRuleUpdate.priority,
            fixedRate: this.input.samplingRuleUpdate.fixedRate,
            reservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            host: this.input.samplingRuleUpdate.host,
            serviceName: this.input.samplingRuleUpdate.serviceName,
            serviceType: this.input.samplingRuleUpdate.serviceType,
            httpMethod: this.input.samplingRuleUpdate.httpMethod,
            urlPath: this.input.samplingRuleUpdate.urlPath,
            attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Priority', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.Priority') as unknown as number;
  }
  public get fixedRate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.FixedRate'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.FixedRate',
        parameters: {
          samplingRuleUpdate: {
            ruleName: this.input.samplingRuleUpdate.ruleName,
            ruleArn: this.input.samplingRuleUpdate.ruleArn,
            resourceArn: this.input.samplingRuleUpdate.resourceArn,
            priority: this.input.samplingRuleUpdate.priority,
            fixedRate: this.input.samplingRuleUpdate.fixedRate,
            reservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            host: this.input.samplingRuleUpdate.host,
            serviceName: this.input.samplingRuleUpdate.serviceName,
            serviceType: this.input.samplingRuleUpdate.serviceType,
            httpMethod: this.input.samplingRuleUpdate.httpMethod,
            urlPath: this.input.samplingRuleUpdate.urlPath,
            attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.FixedRate', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.FixedRate') as unknown as number;
  }
  public get reservoirSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ReservoirSize'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.ReservoirSize',
        parameters: {
          samplingRuleUpdate: {
            ruleName: this.input.samplingRuleUpdate.ruleName,
            ruleArn: this.input.samplingRuleUpdate.ruleArn,
            resourceArn: this.input.samplingRuleUpdate.resourceArn,
            priority: this.input.samplingRuleUpdate.priority,
            fixedRate: this.input.samplingRuleUpdate.fixedRate,
            reservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            host: this.input.samplingRuleUpdate.host,
            serviceName: this.input.samplingRuleUpdate.serviceName,
            serviceType: this.input.samplingRuleUpdate.serviceType,
            httpMethod: this.input.samplingRuleUpdate.httpMethod,
            urlPath: this.input.samplingRuleUpdate.urlPath,
            attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ReservoirSize', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.ReservoirSize') as unknown as number;
  }
  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ServiceName'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.ServiceName',
        parameters: {
          samplingRuleUpdate: {
            ruleName: this.input.samplingRuleUpdate.ruleName,
            ruleArn: this.input.samplingRuleUpdate.ruleArn,
            resourceArn: this.input.samplingRuleUpdate.resourceArn,
            priority: this.input.samplingRuleUpdate.priority,
            fixedRate: this.input.samplingRuleUpdate.fixedRate,
            reservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            host: this.input.samplingRuleUpdate.host,
            serviceName: this.input.samplingRuleUpdate.serviceName,
            serviceType: this.input.samplingRuleUpdate.serviceType,
            httpMethod: this.input.samplingRuleUpdate.httpMethod,
            urlPath: this.input.samplingRuleUpdate.urlPath,
            attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ServiceName', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.ServiceName') as unknown as string;
  }
  public get serviceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ServiceType'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.ServiceType',
        parameters: {
          samplingRuleUpdate: {
            ruleName: this.input.samplingRuleUpdate.ruleName,
            ruleArn: this.input.samplingRuleUpdate.ruleArn,
            resourceArn: this.input.samplingRuleUpdate.resourceArn,
            priority: this.input.samplingRuleUpdate.priority,
            fixedRate: this.input.samplingRuleUpdate.fixedRate,
            reservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            host: this.input.samplingRuleUpdate.host,
            serviceName: this.input.samplingRuleUpdate.serviceName,
            serviceType: this.input.samplingRuleUpdate.serviceType,
            httpMethod: this.input.samplingRuleUpdate.httpMethod,
            urlPath: this.input.samplingRuleUpdate.urlPath,
            attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ServiceType', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.ServiceType') as unknown as string;
  }
  public get host(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Host'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.Host',
        parameters: {
          samplingRuleUpdate: {
            ruleName: this.input.samplingRuleUpdate.ruleName,
            ruleArn: this.input.samplingRuleUpdate.ruleArn,
            resourceArn: this.input.samplingRuleUpdate.resourceArn,
            priority: this.input.samplingRuleUpdate.priority,
            fixedRate: this.input.samplingRuleUpdate.fixedRate,
            reservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            host: this.input.samplingRuleUpdate.host,
            serviceName: this.input.samplingRuleUpdate.serviceName,
            serviceType: this.input.samplingRuleUpdate.serviceType,
            httpMethod: this.input.samplingRuleUpdate.httpMethod,
            urlPath: this.input.samplingRuleUpdate.urlPath,
            attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Host', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.Host') as unknown as string;
  }
  public get httpMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.HTTPMethod'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.HTTPMethod',
        parameters: {
          samplingRuleUpdate: {
            ruleName: this.input.samplingRuleUpdate.ruleName,
            ruleArn: this.input.samplingRuleUpdate.ruleArn,
            resourceArn: this.input.samplingRuleUpdate.resourceArn,
            priority: this.input.samplingRuleUpdate.priority,
            fixedRate: this.input.samplingRuleUpdate.fixedRate,
            reservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            host: this.input.samplingRuleUpdate.host,
            serviceName: this.input.samplingRuleUpdate.serviceName,
            serviceType: this.input.samplingRuleUpdate.serviceType,
            httpMethod: this.input.samplingRuleUpdate.httpMethod,
            urlPath: this.input.samplingRuleUpdate.urlPath,
            attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.HTTPMethod', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.HTTPMethod') as unknown as string;
  }
  public get urlPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.URLPath'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.URLPath',
        parameters: {
          samplingRuleUpdate: {
            ruleName: this.input.samplingRuleUpdate.ruleName,
            ruleArn: this.input.samplingRuleUpdate.ruleArn,
            resourceArn: this.input.samplingRuleUpdate.resourceArn,
            priority: this.input.samplingRuleUpdate.priority,
            fixedRate: this.input.samplingRuleUpdate.fixedRate,
            reservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            host: this.input.samplingRuleUpdate.host,
            serviceName: this.input.samplingRuleUpdate.serviceName,
            serviceType: this.input.samplingRuleUpdate.serviceType,
            httpMethod: this.input.samplingRuleUpdate.httpMethod,
            urlPath: this.input.samplingRuleUpdate.urlPath,
            attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.URLPath', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.URLPath') as unknown as string;
  }
  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Version'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.Version',
        parameters: {
          samplingRuleUpdate: {
            ruleName: this.input.samplingRuleUpdate.ruleName,
            ruleArn: this.input.samplingRuleUpdate.ruleArn,
            resourceArn: this.input.samplingRuleUpdate.resourceArn,
            priority: this.input.samplingRuleUpdate.priority,
            fixedRate: this.input.samplingRuleUpdate.fixedRate,
            reservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            host: this.input.samplingRuleUpdate.host,
            serviceName: this.input.samplingRuleUpdate.serviceName,
            serviceType: this.input.samplingRuleUpdate.serviceType,
            httpMethod: this.input.samplingRuleUpdate.httpMethod,
            urlPath: this.input.samplingRuleUpdate.urlPath,
            attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Version', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.Version') as unknown as number;
  }
  public get attributes(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'XRay',
        physicalResourceId: cr.PhysicalResourceId.of('XRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Attributes'),
        outputPath: 'SamplingRuleRecord.SamplingRule.SamplingRule.Attributes',
        parameters: {
          samplingRuleUpdate: {
            ruleName: this.input.samplingRuleUpdate.ruleName,
            ruleArn: this.input.samplingRuleUpdate.ruleArn,
            resourceArn: this.input.samplingRuleUpdate.resourceArn,
            priority: this.input.samplingRuleUpdate.priority,
            fixedRate: this.input.samplingRuleUpdate.fixedRate,
            reservoirSize: this.input.samplingRuleUpdate.reservoirSize,
            host: this.input.samplingRuleUpdate.host,
            serviceName: this.input.samplingRuleUpdate.serviceName,
            serviceType: this.input.samplingRuleUpdate.serviceType,
            httpMethod: this.input.samplingRuleUpdate.httpMethod,
            urlPath: this.input.samplingRuleUpdate.urlPath,
            attributes: this.input.samplingRuleUpdate.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Attributes', props);
    return resource.getResponseField('SamplingRuleRecord.SamplingRule.SamplingRule.Attributes') as unknown as Record<string, string>;
  }
}
