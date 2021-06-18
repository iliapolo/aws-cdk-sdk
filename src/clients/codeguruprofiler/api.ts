import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CodeGuruProfilerClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addNotificationChannels(input: shapes.CodeGuruProfilerAddNotificationChannelsRequest): CodeGuruProfilerAddNotificationChannels {
    return new CodeGuruProfilerAddNotificationChannels(this, 'AddNotificationChannels', this.__resources, input);
  }

  public batchGetFrameMetricData(input: shapes.CodeGuruProfilerBatchGetFrameMetricDataRequest): CodeGuruProfilerBatchGetFrameMetricData {
    return new CodeGuruProfilerBatchGetFrameMetricData(this, 'BatchGetFrameMetricData', this.__resources, input);
  }

  public configureAgent(input: shapes.CodeGuruProfilerConfigureAgentRequest): CodeGuruProfilerConfigureAgent {
    return new CodeGuruProfilerConfigureAgent(this, 'ConfigureAgent', this.__resources, input);
  }

  public createProfilingGroup(input: shapes.CodeGuruProfilerCreateProfilingGroupRequest): CodeGuruProfilerCreateProfilingGroup {
    return new CodeGuruProfilerCreateProfilingGroup(this, 'CreateProfilingGroup', this.__resources, input);
  }

  public deleteProfilingGroup(input: shapes.CodeGuruProfilerDeleteProfilingGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.DeleteProfilingGroup'),
        parameters: {
          profilingGroupName: input.profilingGroupName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteProfilingGroup', props);
  }

  public describeProfilingGroup(input: shapes.CodeGuruProfilerDescribeProfilingGroupRequest): CodeGuruProfilerDescribeProfilingGroup {
    return new CodeGuruProfilerDescribeProfilingGroup(this, 'DescribeProfilingGroup', this.__resources, input);
  }

  public fetchFindingsReportAccountSummary(input: shapes.CodeGuruProfilerGetFindingsReportAccountSummaryRequest): CodeGuruProfilerFetchFindingsReportAccountSummary {
    return new CodeGuruProfilerFetchFindingsReportAccountSummary(this, 'FetchFindingsReportAccountSummary', this.__resources, input);
  }

  public fetchNotificationConfiguration(input: shapes.CodeGuruProfilerGetNotificationConfigurationRequest): CodeGuruProfilerFetchNotificationConfiguration {
    return new CodeGuruProfilerFetchNotificationConfiguration(this, 'FetchNotificationConfiguration', this.__resources, input);
  }

  public fetchPolicy(input: shapes.CodeGuruProfilerGetPolicyRequest): CodeGuruProfilerFetchPolicy {
    return new CodeGuruProfilerFetchPolicy(this, 'FetchPolicy', this.__resources, input);
  }

  public fetchProfile(input: shapes.CodeGuruProfilerGetProfileRequest): CodeGuruProfilerFetchProfile {
    return new CodeGuruProfilerFetchProfile(this, 'FetchProfile', this.__resources, input);
  }

  public fetchRecommendations(input: shapes.CodeGuruProfilerGetRecommendationsRequest): CodeGuruProfilerFetchRecommendations {
    return new CodeGuruProfilerFetchRecommendations(this, 'FetchRecommendations', this.__resources, input);
  }

  public listFindingsReports(input: shapes.CodeGuruProfilerListFindingsReportsRequest): CodeGuruProfilerListFindingsReports {
    return new CodeGuruProfilerListFindingsReports(this, 'ListFindingsReports', this.__resources, input);
  }

  public listProfileTimes(input: shapes.CodeGuruProfilerListProfileTimesRequest): CodeGuruProfilerListProfileTimes {
    return new CodeGuruProfilerListProfileTimes(this, 'ListProfileTimes', this.__resources, input);
  }

  public listProfilingGroups(input: shapes.CodeGuruProfilerListProfilingGroupsRequest): CodeGuruProfilerListProfilingGroups {
    return new CodeGuruProfilerListProfilingGroups(this, 'ListProfilingGroups', this.__resources, input);
  }

  public listTagsForResource(input: shapes.CodeGuruProfilerListTagsForResourceRequest): CodeGuruProfilerListTagsForResource {
    return new CodeGuruProfilerListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public postAgentProfile(input: shapes.CodeGuruProfilerPostAgentProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postAgentProfile',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.PostAgentProfile'),
        parameters: {
          agentProfile: {
          },
          contentType: input.contentType,
          profileToken: input.profileToken,
          profilingGroupName: input.profilingGroupName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PostAgentProfile', props);
  }

  public putPermission(input: shapes.CodeGuruProfilerPutPermissionRequest): CodeGuruProfilerPutPermission {
    return new CodeGuruProfilerPutPermission(this, 'PutPermission', this.__resources, input);
  }

  public removeNotificationChannel(input: shapes.CodeGuruProfilerRemoveNotificationChannelRequest): CodeGuruProfilerRemoveNotificationChannel {
    return new CodeGuruProfilerRemoveNotificationChannel(this, 'RemoveNotificationChannel', this.__resources, input);
  }

  public removePermission(input: shapes.CodeGuruProfilerRemovePermissionRequest): CodeGuruProfilerRemovePermission {
    return new CodeGuruProfilerRemovePermission(this, 'RemovePermission', this.__resources, input);
  }

  public submitFeedback(input: shapes.CodeGuruProfilerSubmitFeedbackRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'submitFeedback',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.SubmitFeedback'),
        parameters: {
          anomalyInstanceId: input.anomalyInstanceId,
          comment: input.comment,
          profilingGroupName: input.profilingGroupName,
          type: input.type,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SubmitFeedback', props);
  }

  public tagResource(input: shapes.CodeGuruProfilerTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.CodeGuruProfilerUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateProfilingGroup(input: shapes.CodeGuruProfilerUpdateProfilingGroupRequest): CodeGuruProfilerUpdateProfilingGroup {
    return new CodeGuruProfilerUpdateProfilingGroup(this, 'UpdateProfilingGroup', this.__resources, input);
  }

}

export class CodeGuruProfilerAddNotificationChannels extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerAddNotificationChannelsRequest) {
    super(scope, id);
  }

  public get notificationConfiguration(): CodeGuruProfilerAddNotificationChannelsNotificationConfiguration {
    return new CodeGuruProfilerAddNotificationChannelsNotificationConfiguration(this, 'NotificationConfiguration', this.__resources, this.input);
  }

}

export class CodeGuruProfilerAddNotificationChannelsNotificationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerAddNotificationChannelsRequest) {
    super(scope, id);
  }

  public get channels(): shapes.CodeGuruProfilerChannel[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addNotificationChannels',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.AddNotificationChannels.notificationConfiguration.channels'),
        outputPath: 'notificationConfiguration.channels',
        parameters: {
          channels: this.input.channels,
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddNotificationChannels.notificationConfiguration.channels', props);
    return resource.getResponseField('notificationConfiguration.channels') as unknown as shapes.CodeGuruProfilerChannel[];
  }

}

export class CodeGuruProfilerBatchGetFrameMetricData extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerBatchGetFrameMetricDataRequest) {
    super(scope, id);
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetFrameMetricData',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.BatchGetFrameMetricData.endTime'),
        outputPath: 'endTime',
        parameters: {
          endTime: this.input.endTime,
          frameMetrics: this.input.frameMetrics,
          period: this.input.period,
          profilingGroupName: this.input.profilingGroupName,
          startTime: this.input.startTime,
          targetResolution: this.input.targetResolution,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetFrameMetricData.endTime', props);
    return resource.getResponseField('endTime') as unknown as string;
  }

  public get endTimes(): shapes.CodeGuruProfilerTimestampStructure[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetFrameMetricData',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.BatchGetFrameMetricData.endTimes'),
        outputPath: 'endTimes',
        parameters: {
          endTime: this.input.endTime,
          frameMetrics: this.input.frameMetrics,
          period: this.input.period,
          profilingGroupName: this.input.profilingGroupName,
          startTime: this.input.startTime,
          targetResolution: this.input.targetResolution,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetFrameMetricData.endTimes', props);
    return resource.getResponseField('endTimes') as unknown as shapes.CodeGuruProfilerTimestampStructure[];
  }

  public get frameMetricData(): shapes.CodeGuruProfilerFrameMetricDatum[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetFrameMetricData',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.BatchGetFrameMetricData.frameMetricData'),
        outputPath: 'frameMetricData',
        parameters: {
          endTime: this.input.endTime,
          frameMetrics: this.input.frameMetrics,
          period: this.input.period,
          profilingGroupName: this.input.profilingGroupName,
          startTime: this.input.startTime,
          targetResolution: this.input.targetResolution,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetFrameMetricData.frameMetricData', props);
    return resource.getResponseField('frameMetricData') as unknown as shapes.CodeGuruProfilerFrameMetricDatum[];
  }

  public get resolution(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetFrameMetricData',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.BatchGetFrameMetricData.resolution'),
        outputPath: 'resolution',
        parameters: {
          endTime: this.input.endTime,
          frameMetrics: this.input.frameMetrics,
          period: this.input.period,
          profilingGroupName: this.input.profilingGroupName,
          startTime: this.input.startTime,
          targetResolution: this.input.targetResolution,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetFrameMetricData.resolution', props);
    return resource.getResponseField('resolution') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetFrameMetricData',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.BatchGetFrameMetricData.startTime'),
        outputPath: 'startTime',
        parameters: {
          endTime: this.input.endTime,
          frameMetrics: this.input.frameMetrics,
          period: this.input.period,
          profilingGroupName: this.input.profilingGroupName,
          startTime: this.input.startTime,
          targetResolution: this.input.targetResolution,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetFrameMetricData.startTime', props);
    return resource.getResponseField('startTime') as unknown as string;
  }

  public get unprocessedEndTimes(): Record<string, shapes.CodeGuruProfilerTimestampStructure[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetFrameMetricData',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.BatchGetFrameMetricData.unprocessedEndTimes'),
        outputPath: 'unprocessedEndTimes',
        parameters: {
          endTime: this.input.endTime,
          frameMetrics: this.input.frameMetrics,
          period: this.input.period,
          profilingGroupName: this.input.profilingGroupName,
          startTime: this.input.startTime,
          targetResolution: this.input.targetResolution,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetFrameMetricData.unprocessedEndTimes', props);
    return resource.getResponseField('unprocessedEndTimes') as unknown as Record<string, shapes.CodeGuruProfilerTimestampStructure[]>;
  }

}

export class CodeGuruProfilerConfigureAgent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerConfigureAgentRequest) {
    super(scope, id);
  }

  public get configuration(): CodeGuruProfilerConfigureAgentConfiguration {
    return new CodeGuruProfilerConfigureAgentConfiguration(this, 'Configuration', this.__resources, this.input);
  }

}

export class CodeGuruProfilerConfigureAgentConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerConfigureAgentRequest) {
    super(scope, id);
  }

  public get agentParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'configureAgent',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.ConfigureAgent.configuration.agentParameters'),
        outputPath: 'configuration.agentParameters',
        parameters: {
          fleetInstanceId: this.input.fleetInstanceId,
          metadata: this.input.metadata,
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ConfigureAgent.configuration.agentParameters', props);
    return resource.getResponseField('configuration.agentParameters') as unknown as Record<string, string>;
  }

  public get periodInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'configureAgent',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.ConfigureAgent.configuration.periodInSeconds'),
        outputPath: 'configuration.periodInSeconds',
        parameters: {
          fleetInstanceId: this.input.fleetInstanceId,
          metadata: this.input.metadata,
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ConfigureAgent.configuration.periodInSeconds', props);
    return resource.getResponseField('configuration.periodInSeconds') as unknown as number;
  }

  public get shouldProfile(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'configureAgent',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.ConfigureAgent.configuration.shouldProfile'),
        outputPath: 'configuration.shouldProfile',
        parameters: {
          fleetInstanceId: this.input.fleetInstanceId,
          metadata: this.input.metadata,
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ConfigureAgent.configuration.shouldProfile', props);
    return resource.getResponseField('configuration.shouldProfile') as unknown as boolean;
  }

}

export class CodeGuruProfilerCreateProfilingGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerCreateProfilingGroupRequest) {
    super(scope, id);
  }

  public get profilingGroup(): CodeGuruProfilerCreateProfilingGroupProfilingGroup {
    return new CodeGuruProfilerCreateProfilingGroupProfilingGroup(this, 'ProfilingGroup', this.__resources, this.input);
  }

}

export class CodeGuruProfilerCreateProfilingGroupProfilingGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerCreateProfilingGroupRequest) {
    super(scope, id);
  }

  public get agentOrchestrationConfig(): CodeGuruProfilerCreateProfilingGroupProfilingGroupAgentOrchestrationConfig {
    return new CodeGuruProfilerCreateProfilingGroupProfilingGroupAgentOrchestrationConfig(this, 'AgentOrchestrationConfig', this.__resources, this.input);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.CreateProfilingGroup.profilingGroup.arn'),
        outputPath: 'profilingGroup.arn',
        parameters: {
          agentOrchestrationConfig: {
            profilingEnabled: this.input.agentOrchestrationConfig?.profilingEnabled,
          },
          clientToken: this.input.clientToken,
          computePlatform: this.input.computePlatform,
          profilingGroupName: this.input.profilingGroupName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProfilingGroup.profilingGroup.arn', props);
    return resource.getResponseField('profilingGroup.arn') as unknown as string;
  }

  public get computePlatform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.CreateProfilingGroup.profilingGroup.computePlatform'),
        outputPath: 'profilingGroup.computePlatform',
        parameters: {
          agentOrchestrationConfig: {
            profilingEnabled: this.input.agentOrchestrationConfig?.profilingEnabled,
          },
          clientToken: this.input.clientToken,
          computePlatform: this.input.computePlatform,
          profilingGroupName: this.input.profilingGroupName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProfilingGroup.profilingGroup.computePlatform', props);
    return resource.getResponseField('profilingGroup.computePlatform') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.CreateProfilingGroup.profilingGroup.createdAt'),
        outputPath: 'profilingGroup.createdAt',
        parameters: {
          agentOrchestrationConfig: {
            profilingEnabled: this.input.agentOrchestrationConfig?.profilingEnabled,
          },
          clientToken: this.input.clientToken,
          computePlatform: this.input.computePlatform,
          profilingGroupName: this.input.profilingGroupName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProfilingGroup.profilingGroup.createdAt', props);
    return resource.getResponseField('profilingGroup.createdAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.CreateProfilingGroup.profilingGroup.name'),
        outputPath: 'profilingGroup.name',
        parameters: {
          agentOrchestrationConfig: {
            profilingEnabled: this.input.agentOrchestrationConfig?.profilingEnabled,
          },
          clientToken: this.input.clientToken,
          computePlatform: this.input.computePlatform,
          profilingGroupName: this.input.profilingGroupName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProfilingGroup.profilingGroup.name', props);
    return resource.getResponseField('profilingGroup.name') as unknown as string;
  }

  public get profilingStatus(): CodeGuruProfilerCreateProfilingGroupProfilingGroupProfilingStatus {
    return new CodeGuruProfilerCreateProfilingGroupProfilingGroupProfilingStatus(this, 'ProfilingStatus', this.__resources, this.input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.CreateProfilingGroup.profilingGroup.tags'),
        outputPath: 'profilingGroup.tags',
        parameters: {
          agentOrchestrationConfig: {
            profilingEnabled: this.input.agentOrchestrationConfig?.profilingEnabled,
          },
          clientToken: this.input.clientToken,
          computePlatform: this.input.computePlatform,
          profilingGroupName: this.input.profilingGroupName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProfilingGroup.profilingGroup.tags', props);
    return resource.getResponseField('profilingGroup.tags') as unknown as Record<string, string>;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.CreateProfilingGroup.profilingGroup.updatedAt'),
        outputPath: 'profilingGroup.updatedAt',
        parameters: {
          agentOrchestrationConfig: {
            profilingEnabled: this.input.agentOrchestrationConfig?.profilingEnabled,
          },
          clientToken: this.input.clientToken,
          computePlatform: this.input.computePlatform,
          profilingGroupName: this.input.profilingGroupName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProfilingGroup.profilingGroup.updatedAt', props);
    return resource.getResponseField('profilingGroup.updatedAt') as unknown as string;
  }

}

export class CodeGuruProfilerCreateProfilingGroupProfilingGroupAgentOrchestrationConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerCreateProfilingGroupRequest) {
    super(scope, id);
  }

  public get profilingEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.CreateProfilingGroup.profilingGroup.agentOrchestrationConfig.profilingEnabled'),
        outputPath: 'profilingGroup.agentOrchestrationConfig.profilingEnabled',
        parameters: {
          agentOrchestrationConfig: {
            profilingEnabled: this.input.agentOrchestrationConfig?.profilingEnabled,
          },
          clientToken: this.input.clientToken,
          computePlatform: this.input.computePlatform,
          profilingGroupName: this.input.profilingGroupName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProfilingGroup.profilingGroup.agentOrchestrationConfig.profilingEnabled', props);
    return resource.getResponseField('profilingGroup.agentOrchestrationConfig.profilingEnabled') as unknown as boolean;
  }

}

export class CodeGuruProfilerCreateProfilingGroupProfilingGroupProfilingStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerCreateProfilingGroupRequest) {
    super(scope, id);
  }

  public get latestAgentOrchestratedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.CreateProfilingGroup.profilingGroup.profilingStatus.latestAgentOrchestratedAt'),
        outputPath: 'profilingGroup.profilingStatus.latestAgentOrchestratedAt',
        parameters: {
          agentOrchestrationConfig: {
            profilingEnabled: this.input.agentOrchestrationConfig?.profilingEnabled,
          },
          clientToken: this.input.clientToken,
          computePlatform: this.input.computePlatform,
          profilingGroupName: this.input.profilingGroupName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProfilingGroup.profilingGroup.profilingStatus.latestAgentOrchestratedAt', props);
    return resource.getResponseField('profilingGroup.profilingStatus.latestAgentOrchestratedAt') as unknown as string;
  }

  public get latestAgentProfileReportedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.CreateProfilingGroup.profilingGroup.profilingStatus.latestAgentProfileReportedAt'),
        outputPath: 'profilingGroup.profilingStatus.latestAgentProfileReportedAt',
        parameters: {
          agentOrchestrationConfig: {
            profilingEnabled: this.input.agentOrchestrationConfig?.profilingEnabled,
          },
          clientToken: this.input.clientToken,
          computePlatform: this.input.computePlatform,
          profilingGroupName: this.input.profilingGroupName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProfilingGroup.profilingGroup.profilingStatus.latestAgentProfileReportedAt', props);
    return resource.getResponseField('profilingGroup.profilingStatus.latestAgentProfileReportedAt') as unknown as string;
  }

  public get latestAggregatedProfile(): CodeGuruProfilerCreateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile {
    return new CodeGuruProfilerCreateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile(this, 'LatestAggregatedProfile', this.__resources, this.input);
  }

}

export class CodeGuruProfilerCreateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerCreateProfilingGroupRequest) {
    super(scope, id);
  }

  public get period(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.CreateProfilingGroup.profilingGroup.profilingStatus.latestAggregatedProfile.period'),
        outputPath: 'profilingGroup.profilingStatus.latestAggregatedProfile.period',
        parameters: {
          agentOrchestrationConfig: {
            profilingEnabled: this.input.agentOrchestrationConfig?.profilingEnabled,
          },
          clientToken: this.input.clientToken,
          computePlatform: this.input.computePlatform,
          profilingGroupName: this.input.profilingGroupName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProfilingGroup.profilingGroup.profilingStatus.latestAggregatedProfile.period', props);
    return resource.getResponseField('profilingGroup.profilingStatus.latestAggregatedProfile.period') as unknown as string;
  }

  public get start(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.CreateProfilingGroup.profilingGroup.profilingStatus.latestAggregatedProfile.start'),
        outputPath: 'profilingGroup.profilingStatus.latestAggregatedProfile.start',
        parameters: {
          agentOrchestrationConfig: {
            profilingEnabled: this.input.agentOrchestrationConfig?.profilingEnabled,
          },
          clientToken: this.input.clientToken,
          computePlatform: this.input.computePlatform,
          profilingGroupName: this.input.profilingGroupName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProfilingGroup.profilingGroup.profilingStatus.latestAggregatedProfile.start', props);
    return resource.getResponseField('profilingGroup.profilingStatus.latestAggregatedProfile.start') as unknown as string;
  }

}

export class CodeGuruProfilerDescribeProfilingGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerDescribeProfilingGroupRequest) {
    super(scope, id);
  }

  public get profilingGroup(): CodeGuruProfilerDescribeProfilingGroupProfilingGroup {
    return new CodeGuruProfilerDescribeProfilingGroupProfilingGroup(this, 'ProfilingGroup', this.__resources, this.input);
  }

}

export class CodeGuruProfilerDescribeProfilingGroupProfilingGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerDescribeProfilingGroupRequest) {
    super(scope, id);
  }

  public get agentOrchestrationConfig(): CodeGuruProfilerDescribeProfilingGroupProfilingGroupAgentOrchestrationConfig {
    return new CodeGuruProfilerDescribeProfilingGroupProfilingGroupAgentOrchestrationConfig(this, 'AgentOrchestrationConfig', this.__resources, this.input);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.DescribeProfilingGroup.profilingGroup.arn'),
        outputPath: 'profilingGroup.arn',
        parameters: {
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProfilingGroup.profilingGroup.arn', props);
    return resource.getResponseField('profilingGroup.arn') as unknown as string;
  }

  public get computePlatform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.DescribeProfilingGroup.profilingGroup.computePlatform'),
        outputPath: 'profilingGroup.computePlatform',
        parameters: {
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProfilingGroup.profilingGroup.computePlatform', props);
    return resource.getResponseField('profilingGroup.computePlatform') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.DescribeProfilingGroup.profilingGroup.createdAt'),
        outputPath: 'profilingGroup.createdAt',
        parameters: {
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProfilingGroup.profilingGroup.createdAt', props);
    return resource.getResponseField('profilingGroup.createdAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.DescribeProfilingGroup.profilingGroup.name'),
        outputPath: 'profilingGroup.name',
        parameters: {
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProfilingGroup.profilingGroup.name', props);
    return resource.getResponseField('profilingGroup.name') as unknown as string;
  }

  public get profilingStatus(): CodeGuruProfilerDescribeProfilingGroupProfilingGroupProfilingStatus {
    return new CodeGuruProfilerDescribeProfilingGroupProfilingGroupProfilingStatus(this, 'ProfilingStatus', this.__resources, this.input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.DescribeProfilingGroup.profilingGroup.tags'),
        outputPath: 'profilingGroup.tags',
        parameters: {
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProfilingGroup.profilingGroup.tags', props);
    return resource.getResponseField('profilingGroup.tags') as unknown as Record<string, string>;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.DescribeProfilingGroup.profilingGroup.updatedAt'),
        outputPath: 'profilingGroup.updatedAt',
        parameters: {
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProfilingGroup.profilingGroup.updatedAt', props);
    return resource.getResponseField('profilingGroup.updatedAt') as unknown as string;
  }

}

export class CodeGuruProfilerDescribeProfilingGroupProfilingGroupAgentOrchestrationConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerDescribeProfilingGroupRequest) {
    super(scope, id);
  }

  public get profilingEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.DescribeProfilingGroup.profilingGroup.agentOrchestrationConfig.profilingEnabled'),
        outputPath: 'profilingGroup.agentOrchestrationConfig.profilingEnabled',
        parameters: {
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProfilingGroup.profilingGroup.agentOrchestrationConfig.profilingEnabled', props);
    return resource.getResponseField('profilingGroup.agentOrchestrationConfig.profilingEnabled') as unknown as boolean;
  }

}

export class CodeGuruProfilerDescribeProfilingGroupProfilingGroupProfilingStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerDescribeProfilingGroupRequest) {
    super(scope, id);
  }

  public get latestAgentOrchestratedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.DescribeProfilingGroup.profilingGroup.profilingStatus.latestAgentOrchestratedAt'),
        outputPath: 'profilingGroup.profilingStatus.latestAgentOrchestratedAt',
        parameters: {
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProfilingGroup.profilingGroup.profilingStatus.latestAgentOrchestratedAt', props);
    return resource.getResponseField('profilingGroup.profilingStatus.latestAgentOrchestratedAt') as unknown as string;
  }

  public get latestAgentProfileReportedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.DescribeProfilingGroup.profilingGroup.profilingStatus.latestAgentProfileReportedAt'),
        outputPath: 'profilingGroup.profilingStatus.latestAgentProfileReportedAt',
        parameters: {
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProfilingGroup.profilingGroup.profilingStatus.latestAgentProfileReportedAt', props);
    return resource.getResponseField('profilingGroup.profilingStatus.latestAgentProfileReportedAt') as unknown as string;
  }

  public get latestAggregatedProfile(): CodeGuruProfilerDescribeProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile {
    return new CodeGuruProfilerDescribeProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile(this, 'LatestAggregatedProfile', this.__resources, this.input);
  }

}

export class CodeGuruProfilerDescribeProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerDescribeProfilingGroupRequest) {
    super(scope, id);
  }

  public get period(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.DescribeProfilingGroup.profilingGroup.profilingStatus.latestAggregatedProfile.period'),
        outputPath: 'profilingGroup.profilingStatus.latestAggregatedProfile.period',
        parameters: {
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProfilingGroup.profilingGroup.profilingStatus.latestAggregatedProfile.period', props);
    return resource.getResponseField('profilingGroup.profilingStatus.latestAggregatedProfile.period') as unknown as string;
  }

  public get start(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.DescribeProfilingGroup.profilingGroup.profilingStatus.latestAggregatedProfile.start'),
        outputPath: 'profilingGroup.profilingStatus.latestAggregatedProfile.start',
        parameters: {
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProfilingGroup.profilingGroup.profilingStatus.latestAggregatedProfile.start', props);
    return resource.getResponseField('profilingGroup.profilingStatus.latestAggregatedProfile.start') as unknown as string;
  }

}

export class CodeGuruProfilerFetchFindingsReportAccountSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerGetFindingsReportAccountSummaryRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFindingsReportAccountSummary',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.GetFindingsReportAccountSummary.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          dailyReportsOnly: this.input.dailyReportsOnly,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFindingsReportAccountSummary.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get reportSummaries(): shapes.CodeGuruProfilerFindingsReportSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFindingsReportAccountSummary',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.GetFindingsReportAccountSummary.reportSummaries'),
        outputPath: 'reportSummaries',
        parameters: {
          dailyReportsOnly: this.input.dailyReportsOnly,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFindingsReportAccountSummary.reportSummaries', props);
    return resource.getResponseField('reportSummaries') as unknown as shapes.CodeGuruProfilerFindingsReportSummary[];
  }

}

export class CodeGuruProfilerFetchNotificationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerGetNotificationConfigurationRequest) {
    super(scope, id);
  }

  public get notificationConfiguration(): CodeGuruProfilerFetchNotificationConfigurationNotificationConfiguration {
    return new CodeGuruProfilerFetchNotificationConfigurationNotificationConfiguration(this, 'NotificationConfiguration', this.__resources, this.input);
  }

}

export class CodeGuruProfilerFetchNotificationConfigurationNotificationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerGetNotificationConfigurationRequest) {
    super(scope, id);
  }

  public get channels(): shapes.CodeGuruProfilerChannel[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNotificationConfiguration',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.GetNotificationConfiguration.notificationConfiguration.channels'),
        outputPath: 'notificationConfiguration.channels',
        parameters: {
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNotificationConfiguration.notificationConfiguration.channels', props);
    return resource.getResponseField('notificationConfiguration.channels') as unknown as shapes.CodeGuruProfilerChannel[];
  }

}

export class CodeGuruProfilerFetchPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerGetPolicyRequest) {
    super(scope, id);
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.GetPolicy.policy'),
        outputPath: 'policy',
        parameters: {
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.policy', props);
    return resource.getResponseField('policy') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.GetPolicy.revisionId'),
        outputPath: 'revisionId',
        parameters: {
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.revisionId', props);
    return resource.getResponseField('revisionId') as unknown as string;
  }

}

export class CodeGuruProfilerFetchProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerGetProfileRequest) {
    super(scope, id);
  }

  public get contentEncoding(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfile',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.GetProfile.contentEncoding'),
        outputPath: 'contentEncoding',
        parameters: {
          accept: this.input.accept,
          endTime: this.input.endTime,
          maxDepth: this.input.maxDepth,
          period: this.input.period,
          profilingGroupName: this.input.profilingGroupName,
          startTime: this.input.startTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProfile.contentEncoding', props);
    return resource.getResponseField('contentEncoding') as unknown as string;
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfile',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.GetProfile.contentType'),
        outputPath: 'contentType',
        parameters: {
          accept: this.input.accept,
          endTime: this.input.endTime,
          maxDepth: this.input.maxDepth,
          period: this.input.period,
          profilingGroupName: this.input.profilingGroupName,
          startTime: this.input.startTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProfile.contentType', props);
    return resource.getResponseField('contentType') as unknown as string;
  }

  public get profile(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfile',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.GetProfile.profile'),
        outputPath: 'profile',
        parameters: {
          accept: this.input.accept,
          endTime: this.input.endTime,
          maxDepth: this.input.maxDepth,
          period: this.input.period,
          profilingGroupName: this.input.profilingGroupName,
          startTime: this.input.startTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProfile.profile', props);
    return resource.getResponseField('profile') as unknown as any;
  }

}

export class CodeGuruProfilerFetchRecommendations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerGetRecommendationsRequest) {
    super(scope, id);
  }

  public get anomalies(): shapes.CodeGuruProfilerAnomaly[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRecommendations',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.GetRecommendations.anomalies'),
        outputPath: 'anomalies',
        parameters: {
          endTime: this.input.endTime,
          locale: this.input.locale,
          profilingGroupName: this.input.profilingGroupName,
          startTime: this.input.startTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRecommendations.anomalies', props);
    return resource.getResponseField('anomalies') as unknown as shapes.CodeGuruProfilerAnomaly[];
  }

  public get profileEndTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRecommendations',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.GetRecommendations.profileEndTime'),
        outputPath: 'profileEndTime',
        parameters: {
          endTime: this.input.endTime,
          locale: this.input.locale,
          profilingGroupName: this.input.profilingGroupName,
          startTime: this.input.startTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRecommendations.profileEndTime', props);
    return resource.getResponseField('profileEndTime') as unknown as string;
  }

  public get profileStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRecommendations',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.GetRecommendations.profileStartTime'),
        outputPath: 'profileStartTime',
        parameters: {
          endTime: this.input.endTime,
          locale: this.input.locale,
          profilingGroupName: this.input.profilingGroupName,
          startTime: this.input.startTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRecommendations.profileStartTime', props);
    return resource.getResponseField('profileStartTime') as unknown as string;
  }

  public get profilingGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRecommendations',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.GetRecommendations.profilingGroupName'),
        outputPath: 'profilingGroupName',
        parameters: {
          endTime: this.input.endTime,
          locale: this.input.locale,
          profilingGroupName: this.input.profilingGroupName,
          startTime: this.input.startTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRecommendations.profilingGroupName', props);
    return resource.getResponseField('profilingGroupName') as unknown as string;
  }

  public get recommendations(): shapes.CodeGuruProfilerRecommendation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRecommendations',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.GetRecommendations.recommendations'),
        outputPath: 'recommendations',
        parameters: {
          endTime: this.input.endTime,
          locale: this.input.locale,
          profilingGroupName: this.input.profilingGroupName,
          startTime: this.input.startTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRecommendations.recommendations', props);
    return resource.getResponseField('recommendations') as unknown as shapes.CodeGuruProfilerRecommendation[];
  }

}

export class CodeGuruProfilerListFindingsReports extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerListFindingsReportsRequest) {
    super(scope, id);
  }

  public get findingsReportSummaries(): shapes.CodeGuruProfilerFindingsReportSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFindingsReports',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.ListFindingsReports.findingsReportSummaries'),
        outputPath: 'findingsReportSummaries',
        parameters: {
          dailyReportsOnly: this.input.dailyReportsOnly,
          endTime: this.input.endTime,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          profilingGroupName: this.input.profilingGroupName,
          startTime: this.input.startTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFindingsReports.findingsReportSummaries', props);
    return resource.getResponseField('findingsReportSummaries') as unknown as shapes.CodeGuruProfilerFindingsReportSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFindingsReports',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.ListFindingsReports.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          dailyReportsOnly: this.input.dailyReportsOnly,
          endTime: this.input.endTime,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          profilingGroupName: this.input.profilingGroupName,
          startTime: this.input.startTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFindingsReports.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeGuruProfilerListProfileTimes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerListProfileTimesRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProfileTimes',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.ListProfileTimes.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          endTime: this.input.endTime,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          orderBy: this.input.orderBy,
          period: this.input.period,
          profilingGroupName: this.input.profilingGroupName,
          startTime: this.input.startTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProfileTimes.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get profileTimes(): shapes.CodeGuruProfilerProfileTime[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProfileTimes',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.ListProfileTimes.profileTimes'),
        outputPath: 'profileTimes',
        parameters: {
          endTime: this.input.endTime,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          orderBy: this.input.orderBy,
          period: this.input.period,
          profilingGroupName: this.input.profilingGroupName,
          startTime: this.input.startTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProfileTimes.profileTimes', props);
    return resource.getResponseField('profileTimes') as unknown as shapes.CodeGuruProfilerProfileTime[];
  }

}

export class CodeGuruProfilerListProfilingGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerListProfilingGroupsRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProfilingGroups',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.ListProfilingGroups.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          includeDescription: this.input.includeDescription,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProfilingGroups.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get profilingGroupNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProfilingGroups',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.ListProfilingGroups.profilingGroupNames'),
        outputPath: 'profilingGroupNames',
        parameters: {
          includeDescription: this.input.includeDescription,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProfilingGroups.profilingGroupNames', props);
    return resource.getResponseField('profilingGroupNames') as unknown as string[];
  }

  public get profilingGroups(): shapes.CodeGuruProfilerProfilingGroupDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProfilingGroups',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.ListProfilingGroups.profilingGroups'),
        outputPath: 'profilingGroups',
        parameters: {
          includeDescription: this.input.includeDescription,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProfilingGroups.profilingGroups', props);
    return resource.getResponseField('profilingGroups') as unknown as shapes.CodeGuruProfilerProfilingGroupDescription[];
  }

}

export class CodeGuruProfilerListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class CodeGuruProfilerPutPermission extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerPutPermissionRequest) {
    super(scope, id);
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPermission',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.PutPermission.policy'),
        outputPath: 'policy',
        parameters: {
          actionGroup: this.input.actionGroup,
          principals: this.input.principals,
          profilingGroupName: this.input.profilingGroupName,
          revisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPermission.policy', props);
    return resource.getResponseField('policy') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPermission',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.PutPermission.revisionId'),
        outputPath: 'revisionId',
        parameters: {
          actionGroup: this.input.actionGroup,
          principals: this.input.principals,
          profilingGroupName: this.input.profilingGroupName,
          revisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutPermission.revisionId', props);
    return resource.getResponseField('revisionId') as unknown as string;
  }

}

export class CodeGuruProfilerRemoveNotificationChannel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerRemoveNotificationChannelRequest) {
    super(scope, id);
  }

  public get notificationConfiguration(): CodeGuruProfilerRemoveNotificationChannelNotificationConfiguration {
    return new CodeGuruProfilerRemoveNotificationChannelNotificationConfiguration(this, 'NotificationConfiguration', this.__resources, this.input);
  }

}

export class CodeGuruProfilerRemoveNotificationChannelNotificationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerRemoveNotificationChannelRequest) {
    super(scope, id);
  }

  public get channels(): shapes.CodeGuruProfilerChannel[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeNotificationChannel',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.RemoveNotificationChannel.notificationConfiguration.channels'),
        outputPath: 'notificationConfiguration.channels',
        parameters: {
          channelId: this.input.channelId,
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RemoveNotificationChannel.notificationConfiguration.channels', props);
    return resource.getResponseField('notificationConfiguration.channels') as unknown as shapes.CodeGuruProfilerChannel[];
  }

}

export class CodeGuruProfilerRemovePermission extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerRemovePermissionRequest) {
    super(scope, id);
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removePermission',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.RemovePermission.policy'),
        outputPath: 'policy',
        parameters: {
          actionGroup: this.input.actionGroup,
          profilingGroupName: this.input.profilingGroupName,
          revisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RemovePermission.policy', props);
    return resource.getResponseField('policy') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removePermission',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.RemovePermission.revisionId'),
        outputPath: 'revisionId',
        parameters: {
          actionGroup: this.input.actionGroup,
          profilingGroupName: this.input.profilingGroupName,
          revisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RemovePermission.revisionId', props);
    return resource.getResponseField('revisionId') as unknown as string;
  }

}

export class CodeGuruProfilerUpdateProfilingGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerUpdateProfilingGroupRequest) {
    super(scope, id);
  }

  public get profilingGroup(): CodeGuruProfilerUpdateProfilingGroupProfilingGroup {
    return new CodeGuruProfilerUpdateProfilingGroupProfilingGroup(this, 'ProfilingGroup', this.__resources, this.input);
  }

}

export class CodeGuruProfilerUpdateProfilingGroupProfilingGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerUpdateProfilingGroupRequest) {
    super(scope, id);
  }

  public get agentOrchestrationConfig(): CodeGuruProfilerUpdateProfilingGroupProfilingGroupAgentOrchestrationConfig {
    return new CodeGuruProfilerUpdateProfilingGroupProfilingGroupAgentOrchestrationConfig(this, 'AgentOrchestrationConfig', this.__resources, this.input);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.UpdateProfilingGroup.profilingGroup.arn'),
        outputPath: 'profilingGroup.arn',
        parameters: {
          agentOrchestrationConfig: {
            profilingEnabled: this.input.agentOrchestrationConfig.profilingEnabled,
          },
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProfilingGroup.profilingGroup.arn', props);
    return resource.getResponseField('profilingGroup.arn') as unknown as string;
  }

  public get computePlatform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.UpdateProfilingGroup.profilingGroup.computePlatform'),
        outputPath: 'profilingGroup.computePlatform',
        parameters: {
          agentOrchestrationConfig: {
            profilingEnabled: this.input.agentOrchestrationConfig.profilingEnabled,
          },
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProfilingGroup.profilingGroup.computePlatform', props);
    return resource.getResponseField('profilingGroup.computePlatform') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.UpdateProfilingGroup.profilingGroup.createdAt'),
        outputPath: 'profilingGroup.createdAt',
        parameters: {
          agentOrchestrationConfig: {
            profilingEnabled: this.input.agentOrchestrationConfig.profilingEnabled,
          },
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProfilingGroup.profilingGroup.createdAt', props);
    return resource.getResponseField('profilingGroup.createdAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.UpdateProfilingGroup.profilingGroup.name'),
        outputPath: 'profilingGroup.name',
        parameters: {
          agentOrchestrationConfig: {
            profilingEnabled: this.input.agentOrchestrationConfig.profilingEnabled,
          },
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProfilingGroup.profilingGroup.name', props);
    return resource.getResponseField('profilingGroup.name') as unknown as string;
  }

  public get profilingStatus(): CodeGuruProfilerUpdateProfilingGroupProfilingGroupProfilingStatus {
    return new CodeGuruProfilerUpdateProfilingGroupProfilingGroupProfilingStatus(this, 'ProfilingStatus', this.__resources, this.input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.UpdateProfilingGroup.profilingGroup.tags'),
        outputPath: 'profilingGroup.tags',
        parameters: {
          agentOrchestrationConfig: {
            profilingEnabled: this.input.agentOrchestrationConfig.profilingEnabled,
          },
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProfilingGroup.profilingGroup.tags', props);
    return resource.getResponseField('profilingGroup.tags') as unknown as Record<string, string>;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.UpdateProfilingGroup.profilingGroup.updatedAt'),
        outputPath: 'profilingGroup.updatedAt',
        parameters: {
          agentOrchestrationConfig: {
            profilingEnabled: this.input.agentOrchestrationConfig.profilingEnabled,
          },
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProfilingGroup.profilingGroup.updatedAt', props);
    return resource.getResponseField('profilingGroup.updatedAt') as unknown as string;
  }

}

export class CodeGuruProfilerUpdateProfilingGroupProfilingGroupAgentOrchestrationConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerUpdateProfilingGroupRequest) {
    super(scope, id);
  }

  public get profilingEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.UpdateProfilingGroup.profilingGroup.agentOrchestrationConfig.profilingEnabled'),
        outputPath: 'profilingGroup.agentOrchestrationConfig.profilingEnabled',
        parameters: {
          agentOrchestrationConfig: {
            profilingEnabled: this.input.agentOrchestrationConfig.profilingEnabled,
          },
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProfilingGroup.profilingGroup.agentOrchestrationConfig.profilingEnabled', props);
    return resource.getResponseField('profilingGroup.agentOrchestrationConfig.profilingEnabled') as unknown as boolean;
  }

}

export class CodeGuruProfilerUpdateProfilingGroupProfilingGroupProfilingStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerUpdateProfilingGroupRequest) {
    super(scope, id);
  }

  public get latestAgentOrchestratedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.UpdateProfilingGroup.profilingGroup.profilingStatus.latestAgentOrchestratedAt'),
        outputPath: 'profilingGroup.profilingStatus.latestAgentOrchestratedAt',
        parameters: {
          agentOrchestrationConfig: {
            profilingEnabled: this.input.agentOrchestrationConfig.profilingEnabled,
          },
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProfilingGroup.profilingGroup.profilingStatus.latestAgentOrchestratedAt', props);
    return resource.getResponseField('profilingGroup.profilingStatus.latestAgentOrchestratedAt') as unknown as string;
  }

  public get latestAgentProfileReportedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.UpdateProfilingGroup.profilingGroup.profilingStatus.latestAgentProfileReportedAt'),
        outputPath: 'profilingGroup.profilingStatus.latestAgentProfileReportedAt',
        parameters: {
          agentOrchestrationConfig: {
            profilingEnabled: this.input.agentOrchestrationConfig.profilingEnabled,
          },
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProfilingGroup.profilingGroup.profilingStatus.latestAgentProfileReportedAt', props);
    return resource.getResponseField('profilingGroup.profilingStatus.latestAgentProfileReportedAt') as unknown as string;
  }

  public get latestAggregatedProfile(): CodeGuruProfilerUpdateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile {
    return new CodeGuruProfilerUpdateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile(this, 'LatestAggregatedProfile', this.__resources, this.input);
  }

}

export class CodeGuruProfilerUpdateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruProfilerUpdateProfilingGroupRequest) {
    super(scope, id);
  }

  public get period(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.UpdateProfilingGroup.profilingGroup.profilingStatus.latestAggregatedProfile.period'),
        outputPath: 'profilingGroup.profilingStatus.latestAggregatedProfile.period',
        parameters: {
          agentOrchestrationConfig: {
            profilingEnabled: this.input.agentOrchestrationConfig.profilingEnabled,
          },
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProfilingGroup.profilingGroup.profilingStatus.latestAggregatedProfile.period', props);
    return resource.getResponseField('profilingGroup.profilingStatus.latestAggregatedProfile.period') as unknown as string;
  }

  public get start(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProfilingGroup',
        service: 'CodeGuruProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruProfiler.UpdateProfilingGroup.profilingGroup.profilingStatus.latestAggregatedProfile.start'),
        outputPath: 'profilingGroup.profilingStatus.latestAggregatedProfile.start',
        parameters: {
          agentOrchestrationConfig: {
            profilingEnabled: this.input.agentOrchestrationConfig.profilingEnabled,
          },
          profilingGroupName: this.input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProfilingGroup.profilingGroup.profilingStatus.latestAggregatedProfile.start', props);
    return resource.getResponseField('profilingGroup.profilingStatus.latestAggregatedProfile.start') as unknown as string;
  }

}

