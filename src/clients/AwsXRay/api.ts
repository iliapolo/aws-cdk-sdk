import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class AwsXRay extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public batchGetTraces(input: shapes.BatchGetTracesRequest): AwsXRayBatchGetTracesResult {
    return new AwsXRayBatchGetTracesResult(this, 'BatchGetTracesResult', this.resources, input);
  }
  public createGroup(input: shapes.CreateGroupRequest): AwsXRayCreateGroupResult {
    return new AwsXRayCreateGroupResult(this, 'CreateGroupResult', this.resources, input);
  }
  public createSamplingRule(input: shapes.CreateSamplingRuleRequest): AwsXRayCreateSamplingRuleResult {
    return new AwsXRayCreateSamplingRuleResult(this, 'CreateSamplingRuleResult', this.resources, input);
  }
  public deleteGroup(input: shapes.DeleteGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteGroup',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.DeleteGroup.'),
        parameters: {
          groupName: input.groupName,
          groupArn: input.groupArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteGroup', props);
  }
  public deleteSamplingRule(input: shapes.DeleteSamplingRuleRequest): AwsXRayDeleteSamplingRuleResult {
    return new AwsXRayDeleteSamplingRuleResult(this, 'DeleteSamplingRuleResult', this.resources, input);
  }
  public fetchEncryptionConfig(): AwsXRayGetEncryptionConfigResult {
    return new AwsXRayGetEncryptionConfigResult(this, 'GetEncryptionConfigResult', this.resources);
  }
  public fetchGroup(input: shapes.GetGroupRequest): AwsXRayGetGroupResult {
    return new AwsXRayGetGroupResult(this, 'GetGroupResult', this.resources, input);
  }
  public fetchGroups(input: shapes.GetGroupsRequest): AwsXRayGetGroupsResult {
    return new AwsXRayGetGroupsResult(this, 'GetGroupsResult', this.resources, input);
  }
  public fetchInsight(input: shapes.GetInsightRequest): AwsXRayGetInsightResult {
    return new AwsXRayGetInsightResult(this, 'GetInsightResult', this.resources, input);
  }
  public fetchInsightEvents(input: shapes.GetInsightEventsRequest): AwsXRayGetInsightEventsResult {
    return new AwsXRayGetInsightEventsResult(this, 'GetInsightEventsResult', this.resources, input);
  }
  public fetchInsightImpactGraph(input: shapes.GetInsightImpactGraphRequest): AwsXRayGetInsightImpactGraphResult {
    return new AwsXRayGetInsightImpactGraphResult(this, 'GetInsightImpactGraphResult', this.resources, input);
  }
  public fetchInsightSummaries(input: shapes.GetInsightSummariesRequest): AwsXRayGetInsightSummariesResult {
    return new AwsXRayGetInsightSummariesResult(this, 'GetInsightSummariesResult', this.resources, input);
  }
  public fetchSamplingRules(input: shapes.GetSamplingRulesRequest): AwsXRayGetSamplingRulesResult {
    return new AwsXRayGetSamplingRulesResult(this, 'GetSamplingRulesResult', this.resources, input);
  }
  public fetchSamplingStatisticSummaries(input: shapes.GetSamplingStatisticSummariesRequest): AwsXRayGetSamplingStatisticSummariesResult {
    return new AwsXRayGetSamplingStatisticSummariesResult(this, 'GetSamplingStatisticSummariesResult', this.resources, input);
  }
  public fetchSamplingTargets(input: shapes.GetSamplingTargetsRequest): AwsXRayGetSamplingTargetsResult {
    return new AwsXRayGetSamplingTargetsResult(this, 'GetSamplingTargetsResult', this.resources, input);
  }
  public fetchServiceGraph(input: shapes.GetServiceGraphRequest): AwsXRayGetServiceGraphResult {
    return new AwsXRayGetServiceGraphResult(this, 'GetServiceGraphResult', this.resources, input);
  }
  public fetchTimeSeriesServiceStatistics(input: shapes.GetTimeSeriesServiceStatisticsRequest): AwsXRayGetTimeSeriesServiceStatisticsResult {
    return new AwsXRayGetTimeSeriesServiceStatisticsResult(this, 'GetTimeSeriesServiceStatisticsResult', this.resources, input);
  }
  public fetchTraceGraph(input: shapes.GetTraceGraphRequest): AwsXRayGetTraceGraphResult {
    return new AwsXRayGetTraceGraphResult(this, 'GetTraceGraphResult', this.resources, input);
  }
  public fetchTraceSummaries(input: shapes.GetTraceSummariesRequest): AwsXRayGetTraceSummariesResult {
    return new AwsXRayGetTraceSummariesResult(this, 'GetTraceSummariesResult', this.resources, input);
  }
  public listTagsForResource(input: shapes.ListTagsForResourceRequest): AwsXRayListTagsForResourceResponse {
    return new AwsXRayListTagsForResourceResponse(this, 'ListTagsForResourceResponse', this.resources, input);
  }
  public putEncryptionConfig(input: shapes.PutEncryptionConfigRequest): AwsXRayPutEncryptionConfigResult {
    return new AwsXRayPutEncryptionConfigResult(this, 'PutEncryptionConfigResult', this.resources, input);
  }
  public putTelemetryRecords(input: shapes.PutTelemetryRecordsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'putTelemetryRecords',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.PutTelemetryRecords.'),
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
  public putTraceSegments(input: shapes.PutTraceSegmentsRequest): AwsXRayPutTraceSegmentsResult {
    return new AwsXRayPutTraceSegmentsResult(this, 'PutTraceSegmentsResult', this.resources, input);
  }
  public tagResource(input: shapes.TagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.TagResource.'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.UntagResource.'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }
  public updateGroup(input: shapes.UpdateGroupRequest): AwsXRayUpdateGroupResult {
    return new AwsXRayUpdateGroupResult(this, 'UpdateGroupResult', this.resources, input);
  }
  public updateSamplingRule(input: shapes.UpdateSamplingRuleRequest): AwsXRayUpdateSamplingRuleResult {
    return new AwsXRayUpdateSamplingRuleResult(this, 'UpdateSamplingRuleResult', this.resources, input);
  }
}
export class AwsXRayBatchGetTracesResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.BatchGetTracesRequest) {
    super(scope, id);
  }
  public get traces(): shapes.Trace[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'batchGetTraces',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.BatchGetTraces.'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.BatchGetTraces.'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.BatchGetTraces.'),
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
export class AwsXRayCreateGroupResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.CreateGroupRequest) {
    super(scope, id);
  }
  public get group(): AwsXRayCreateGroupResultGroup {
    return new AwsXRayCreateGroupResultGroup(this, 'Group', this.resources, this.input);
  }
}
export class AwsXRayCreateGroupResultGroup extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.CreateGroupRequest) {
    super(scope, id);
  }
  public get groupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.CreateGroup.Group.GroupName'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.CreateGroup.Group.GroupARN'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.CreateGroup.Group.FilterExpression'),
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
  public get insightsConfiguration(): AwsXRayCreateGroupResultGroupInsightsConfiguration {
    return new AwsXRayCreateGroupResultGroupInsightsConfiguration(this, 'InsightsConfiguration', this.resources, this.input);
  }
}
export class AwsXRayCreateGroupResultGroupInsightsConfiguration extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.CreateGroupRequest) {
    super(scope, id);
  }
  public get insightsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.CreateGroup.Group.InsightsConfiguration.InsightsConfiguration.InsightsEnabled'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.CreateGroup.Group.InsightsConfiguration.InsightsConfiguration.NotificationsEnabled'),
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
export class AwsXRayCreateSamplingRuleResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.CreateSamplingRuleRequest) {
    super(scope, id);
  }
  public get samplingRuleRecord(): AwsXRayCreateSamplingRuleResultSamplingRuleRecord {
    return new AwsXRayCreateSamplingRuleResultSamplingRuleRecord(this, 'SamplingRuleRecord', this.resources, this.input);
  }
}
export class AwsXRayCreateSamplingRuleResultSamplingRuleRecord extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.CreateSamplingRuleRequest) {
    super(scope, id);
  }
  public get samplingRule(): AwsXRayCreateSamplingRuleResultSamplingRuleRecordSamplingRule {
    return new AwsXRayCreateSamplingRuleResultSamplingRuleRecordSamplingRule(this, 'SamplingRule', this.resources, this.input);
  }
  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.CreateSamplingRule.SamplingRuleRecord.CreatedAt'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.CreateSamplingRule.SamplingRuleRecord.ModifiedAt'),
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
export class AwsXRayCreateSamplingRuleResultSamplingRuleRecordSamplingRule extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.CreateSamplingRuleRequest) {
    super(scope, id);
  }
  public get ruleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'createSamplingRule',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.RuleName'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.RuleARN'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ResourceARN'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Priority'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.FixedRate'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ReservoirSize'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ServiceName'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ServiceType'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Host'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.HTTPMethod'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.URLPath'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Version'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.CreateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Attributes'),
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
export class AwsXRayDeleteSamplingRuleResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.DeleteSamplingRuleRequest) {
    super(scope, id);
  }
  public get samplingRuleRecord(): AwsXRayDeleteSamplingRuleResultSamplingRuleRecord {
    return new AwsXRayDeleteSamplingRuleResultSamplingRuleRecord(this, 'SamplingRuleRecord', this.resources, this.input);
  }
}
export class AwsXRayDeleteSamplingRuleResultSamplingRuleRecord extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.DeleteSamplingRuleRequest) {
    super(scope, id);
  }
  public get samplingRule(): AwsXRayDeleteSamplingRuleResultSamplingRuleRecordSamplingRule {
    return new AwsXRayDeleteSamplingRuleResultSamplingRuleRecordSamplingRule(this, 'SamplingRule', this.resources, this.input);
  }
  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.DeleteSamplingRule.SamplingRuleRecord.CreatedAt'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.DeleteSamplingRule.SamplingRuleRecord.ModifiedAt'),
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
export class AwsXRayDeleteSamplingRuleResultSamplingRuleRecordSamplingRule extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.DeleteSamplingRuleRequest) {
    super(scope, id);
  }
  public get ruleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'deleteSamplingRule',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.RuleName'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.RuleARN'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ResourceARN'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Priority'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.FixedRate'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ReservoirSize'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ServiceName'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ServiceType'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Host'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.HTTPMethod'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.URLPath'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Version'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.DeleteSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Attributes'),
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
export class AwsXRayGetEncryptionConfigResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get encryptionConfig(): AwsXRayGetEncryptionConfigResultEncryptionConfig {
    return new AwsXRayGetEncryptionConfigResultEncryptionConfig(this, 'EncryptionConfig', this.resources);
  }
}
export class AwsXRayGetEncryptionConfigResultEncryptionConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[]) {
    super(scope, id);
  }
  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getEncryptionConfig',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetEncryptionConfig.EncryptionConfig.KeyId'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetEncryptionConfig.EncryptionConfig.Status'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetEncryptionConfig.EncryptionConfig.Type'),
        outputPath: 'EncryptionConfig.Type',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEncryptionConfig.EncryptionConfig.Type', props);
    return resource.getResponseField('EncryptionConfig.Type') as unknown as string;
  }
}
export class AwsXRayGetGroupResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetGroupRequest) {
    super(scope, id);
  }
  public get group(): AwsXRayGetGroupResultGroup {
    return new AwsXRayGetGroupResultGroup(this, 'Group', this.resources, this.input);
  }
}
export class AwsXRayGetGroupResultGroup extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetGroupRequest) {
    super(scope, id);
  }
  public get groupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetGroup.Group.GroupName'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetGroup.Group.GroupARN'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetGroup.Group.FilterExpression'),
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
  public get insightsConfiguration(): AwsXRayGetGroupResultGroupInsightsConfiguration {
    return new AwsXRayGetGroupResultGroupInsightsConfiguration(this, 'InsightsConfiguration', this.resources, this.input);
  }
}
export class AwsXRayGetGroupResultGroupInsightsConfiguration extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetGroupRequest) {
    super(scope, id);
  }
  public get insightsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetGroup.Group.InsightsConfiguration.InsightsConfiguration.InsightsEnabled'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetGroup.Group.InsightsConfiguration.InsightsConfiguration.NotificationsEnabled'),
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
export class AwsXRayGetGroupsResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetGroupsRequest) {
    super(scope, id);
  }
  public get groups(): shapes.GroupSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getGroups',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetGroups.'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetGroups.'),
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
export class AwsXRayGetInsightResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetInsightRequest) {
    super(scope, id);
  }
  public get insight(): AwsXRayGetInsightResultInsight {
    return new AwsXRayGetInsightResultInsight(this, 'Insight', this.resources, this.input);
  }
}
export class AwsXRayGetInsightResultInsight extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetInsightRequest) {
    super(scope, id);
  }
  public get insightId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetInsight.Insight.InsightId'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetInsight.Insight.GroupARN'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetInsight.Insight.GroupName'),
        outputPath: 'Insight.GroupName',
        parameters: {
          insightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.GroupName', props);
    return resource.getResponseField('Insight.GroupName') as unknown as string;
  }
  public get rootCauseServiceId(): AwsXRayGetInsightResultInsightServiceId {
    return new AwsXRayGetInsightResultInsightServiceId(this, 'ServiceId', this.resources, this.input);
  }
  public get categories(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetInsight.Insight.Categories'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetInsight.Insight.State'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetInsight.Insight.StartTime'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetInsight.Insight.EndTime'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetInsight.Insight.Summary'),
        outputPath: 'Insight.Summary',
        parameters: {
          insightId: this.input.insightId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsight.Insight.Summary', props);
    return resource.getResponseField('Insight.Summary') as unknown as string;
  }
  public get clientRequestImpactStatistics(): AwsXRayGetInsightResultInsightRequestImpactStatistics {
    return new AwsXRayGetInsightResultInsightRequestImpactStatistics(this, 'RequestImpactStatistics', this.resources, this.input);
  }
  public get rootCauseServiceRequestImpactStatistics(): AwsXRayGetInsightResultInsightRequestImpactStatistics {
    return new AwsXRayGetInsightResultInsightRequestImpactStatistics(this, 'RequestImpactStatistics', this.resources, this.input);
  }
  public get topAnomalousServices(): shapes.AnomalousService[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetInsight.Insight.TopAnomalousServices'),
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
export class AwsXRayGetInsightResultInsightServiceId extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetInsightRequest) {
    super(scope, id);
  }
  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetInsight.Insight.RootCauseServiceId.RootCauseServiceId.Name'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetInsight.Insight.RootCauseServiceId.RootCauseServiceId.Names'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetInsight.Insight.RootCauseServiceId.RootCauseServiceId.AccountId'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetInsight.Insight.RootCauseServiceId.RootCauseServiceId.Type'),
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
export class AwsXRayGetInsightResultInsightRequestImpactStatistics extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetInsightRequest) {
    super(scope, id);
  }
  public get faultCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsight',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetInsight.Insight.ClientRequestImpactStatistics.ClientRequestImpactStatistics.FaultCount'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetInsight.Insight.ClientRequestImpactStatistics.ClientRequestImpactStatistics.OkCount'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetInsight.Insight.ClientRequestImpactStatistics.ClientRequestImpactStatistics.TotalCount'),
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
export class AwsXRayGetInsightEventsResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetInsightEventsRequest) {
    super(scope, id);
  }
  public get insightEvents(): shapes.InsightEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsightEvents',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetInsightEvents.'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetInsightEvents.'),
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
export class AwsXRayGetInsightImpactGraphResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetInsightImpactGraphRequest) {
    super(scope, id);
  }
  public get insightId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsightImpactGraph',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetInsightImpactGraph.'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetInsightImpactGraph.'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetInsightImpactGraph.'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetInsightImpactGraph.'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetInsightImpactGraph.'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetInsightImpactGraph.'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetInsightImpactGraph.'),
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
export class AwsXRayGetInsightSummariesResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetInsightSummariesRequest) {
    super(scope, id);
  }
  public get insightSummaries(): shapes.InsightSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getInsightSummaries',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetInsightSummaries.'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetInsightSummaries.'),
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
export class AwsXRayGetSamplingRulesResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetSamplingRulesRequest) {
    super(scope, id);
  }
  public get samplingRuleRecords(): shapes.SamplingRuleRecord[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getSamplingRules',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetSamplingRules.'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetSamplingRules.'),
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
export class AwsXRayGetSamplingStatisticSummariesResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetSamplingStatisticSummariesRequest) {
    super(scope, id);
  }
  public get samplingStatisticSummaries(): shapes.SamplingStatisticSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getSamplingStatisticSummaries',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetSamplingStatisticSummaries.'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetSamplingStatisticSummaries.'),
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
export class AwsXRayGetSamplingTargetsResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetSamplingTargetsRequest) {
    super(scope, id);
  }
  public get samplingTargetDocuments(): shapes.SamplingTargetDocument[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getSamplingTargets',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetSamplingTargets.'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetSamplingTargets.'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetSamplingTargets.'),
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
export class AwsXRayGetServiceGraphResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetServiceGraphRequest) {
    super(scope, id);
  }
  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getServiceGraph',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetServiceGraph.'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetServiceGraph.'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetServiceGraph.'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetServiceGraph.'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetServiceGraph.'),
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
export class AwsXRayGetTimeSeriesServiceStatisticsResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetTimeSeriesServiceStatisticsRequest) {
    super(scope, id);
  }
  public get timeSeriesServiceStatistics(): shapes.TimeSeriesServiceStatistics[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getTimeSeriesServiceStatistics',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetTimeSeriesServiceStatistics.'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetTimeSeriesServiceStatistics.'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetTimeSeriesServiceStatistics.'),
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
export class AwsXRayGetTraceGraphResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetTraceGraphRequest) {
    super(scope, id);
  }
  public get services(): shapes.Service[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getTraceGraph',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetTraceGraph.'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetTraceGraph.'),
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
export class AwsXRayGetTraceSummariesResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.GetTraceSummariesRequest) {
    super(scope, id);
  }
  public get traceSummaries(): shapes.TraceSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'getTraceSummaries',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetTraceSummaries.'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetTraceSummaries.'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetTraceSummaries.'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.GetTraceSummaries.'),
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
export class AwsXRayListTagsForResourceResponse extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.ListTagsForResourceRequest) {
    super(scope, id);
  }
  public get tags(): shapes.Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.ListTagsForResource.'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.ListTagsForResource.'),
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
export class AwsXRayPutEncryptionConfigResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.PutEncryptionConfigRequest) {
    super(scope, id);
  }
  public get encryptionConfig(): AwsXRayPutEncryptionConfigResultEncryptionConfig {
    return new AwsXRayPutEncryptionConfigResultEncryptionConfig(this, 'EncryptionConfig', this.resources, this.input);
  }
}
export class AwsXRayPutEncryptionConfigResultEncryptionConfig extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.PutEncryptionConfigRequest) {
    super(scope, id);
  }
  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'putEncryptionConfig',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.PutEncryptionConfig.EncryptionConfig.KeyId'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.PutEncryptionConfig.EncryptionConfig.Status'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.PutEncryptionConfig.EncryptionConfig.Type'),
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
export class AwsXRayPutTraceSegmentsResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.PutTraceSegmentsRequest) {
    super(scope, id);
  }
  public get unprocessedTraceSegments(): shapes.UnprocessedTraceSegment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'putTraceSegments',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.PutTraceSegments.'),
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
export class AwsXRayUpdateGroupResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.UpdateGroupRequest) {
    super(scope, id);
  }
  public get group(): AwsXRayUpdateGroupResultGroup {
    return new AwsXRayUpdateGroupResultGroup(this, 'Group', this.resources, this.input);
  }
}
export class AwsXRayUpdateGroupResultGroup extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.UpdateGroupRequest) {
    super(scope, id);
  }
  public get groupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateGroup',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.UpdateGroup.Group.GroupName'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.UpdateGroup.Group.GroupARN'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.UpdateGroup.Group.FilterExpression'),
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
  public get insightsConfiguration(): AwsXRayUpdateGroupResultGroupInsightsConfiguration {
    return new AwsXRayUpdateGroupResultGroupInsightsConfiguration(this, 'InsightsConfiguration', this.resources, this.input);
  }
}
export class AwsXRayUpdateGroupResultGroupInsightsConfiguration extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.UpdateGroupRequest) {
    super(scope, id);
  }
  public get insightsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateGroup',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.UpdateGroup.Group.InsightsConfiguration.InsightsConfiguration.InsightsEnabled'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.UpdateGroup.Group.InsightsConfiguration.InsightsConfiguration.NotificationsEnabled'),
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
export class AwsXRayUpdateSamplingRuleResult extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.UpdateSamplingRuleRequest) {
    super(scope, id);
  }
  public get samplingRuleRecord(): AwsXRayUpdateSamplingRuleResultSamplingRuleRecord {
    return new AwsXRayUpdateSamplingRuleResultSamplingRuleRecord(this, 'SamplingRuleRecord', this.resources, this.input);
  }
}
export class AwsXRayUpdateSamplingRuleResultSamplingRuleRecord extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.UpdateSamplingRuleRequest) {
    super(scope, id);
  }
  public get samplingRule(): AwsXRayUpdateSamplingRuleResultSamplingRuleRecordSamplingRule {
    return new AwsXRayUpdateSamplingRuleResultSamplingRuleRecordSamplingRule(this, 'SamplingRule', this.resources, this.input);
  }
  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.UpdateSamplingRule.SamplingRuleRecord.CreatedAt'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.UpdateSamplingRule.SamplingRuleRecord.ModifiedAt'),
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
export class AwsXRayUpdateSamplingRuleResultSamplingRuleRecordSamplingRule extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, private readonly resources: string[], private readonly input: shapes.UpdateSamplingRuleRequest) {
    super(scope, id);
  }
  public get ruleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      onUpdate: {
        action: 'updateSamplingRule',
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.RuleName'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.RuleARN'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ResourceARN'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Priority'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.FixedRate'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ReservoirSize'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ServiceName'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.ServiceType'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Host'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.HTTPMethod'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.URLPath'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Version'),
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
        service: 'AwsXRay',
        physicalResourceId: cr.PhysicalResourceId.of('AwsXRay.UpdateSamplingRule.SamplingRuleRecord.SamplingRule.SamplingRule.Attributes'),
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
