import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CodeGuruProfilerClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addNotificationChannels(input: shapes.CodeGuruProfilerAddNotificationChannelsRequest): CodeGuruProfilerResponsesAddNotificationChannels {
    return new CodeGuruProfilerResponsesAddNotificationChannels(this, this.__resources, input);
  }

  public batchGetFrameMetricData(input: shapes.CodeGuruProfilerBatchGetFrameMetricDataRequest): CodeGuruProfilerResponsesBatchGetFrameMetricData {
    return new CodeGuruProfilerResponsesBatchGetFrameMetricData(this, this.__resources, input);
  }

  public configureAgent(input: shapes.CodeGuruProfilerConfigureAgentRequest): CodeGuruProfilerResponsesConfigureAgent {
    return new CodeGuruProfilerResponsesConfigureAgent(this, this.__resources, input);
  }

  public createProfilingGroup(input: shapes.CodeGuruProfilerCreateProfilingGroupRequest): CodeGuruProfilerResponsesCreateProfilingGroup {
    return new CodeGuruProfilerResponsesCreateProfilingGroup(this, this.__resources, input);
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

  public describeProfilingGroup(input: shapes.CodeGuruProfilerDescribeProfilingGroupRequest): CodeGuruProfilerResponsesDescribeProfilingGroup {
    return new CodeGuruProfilerResponsesDescribeProfilingGroup(this, this.__resources, input);
  }

  public fetchFindingsReportAccountSummary(input: shapes.CodeGuruProfilerGetFindingsReportAccountSummaryRequest): CodeGuruProfilerResponsesFetchFindingsReportAccountSummary {
    return new CodeGuruProfilerResponsesFetchFindingsReportAccountSummary(this, this.__resources, input);
  }

  public fetchNotificationConfiguration(input: shapes.CodeGuruProfilerGetNotificationConfigurationRequest): CodeGuruProfilerResponsesFetchNotificationConfiguration {
    return new CodeGuruProfilerResponsesFetchNotificationConfiguration(this, this.__resources, input);
  }

  public fetchPolicy(input: shapes.CodeGuruProfilerGetPolicyRequest): CodeGuruProfilerResponsesFetchPolicy {
    return new CodeGuruProfilerResponsesFetchPolicy(this, this.__resources, input);
  }

  public fetchProfile(input: shapes.CodeGuruProfilerGetProfileRequest): CodeGuruProfilerResponsesFetchProfile {
    return new CodeGuruProfilerResponsesFetchProfile(this, this.__resources, input);
  }

  public fetchRecommendations(input: shapes.CodeGuruProfilerGetRecommendationsRequest): CodeGuruProfilerResponsesFetchRecommendations {
    return new CodeGuruProfilerResponsesFetchRecommendations(this, this.__resources, input);
  }

  public listFindingsReports(input: shapes.CodeGuruProfilerListFindingsReportsRequest): CodeGuruProfilerResponsesListFindingsReports {
    return new CodeGuruProfilerResponsesListFindingsReports(this, this.__resources, input);
  }

  public listProfileTimes(input: shapes.CodeGuruProfilerListProfileTimesRequest): CodeGuruProfilerResponsesListProfileTimes {
    return new CodeGuruProfilerResponsesListProfileTimes(this, this.__resources, input);
  }

  public listProfilingGroups(input: shapes.CodeGuruProfilerListProfilingGroupsRequest): CodeGuruProfilerResponsesListProfilingGroups {
    return new CodeGuruProfilerResponsesListProfilingGroups(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.CodeGuruProfilerListTagsForResourceRequest): CodeGuruProfilerResponsesListTagsForResource {
    return new CodeGuruProfilerResponsesListTagsForResource(this, this.__resources, input);
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

  public putPermission(input: shapes.CodeGuruProfilerPutPermissionRequest): CodeGuruProfilerResponsesPutPermission {
    return new CodeGuruProfilerResponsesPutPermission(this, this.__resources, input);
  }

  public removeNotificationChannel(input: shapes.CodeGuruProfilerRemoveNotificationChannelRequest): CodeGuruProfilerResponsesRemoveNotificationChannel {
    return new CodeGuruProfilerResponsesRemoveNotificationChannel(this, this.__resources, input);
  }

  public removePermission(input: shapes.CodeGuruProfilerRemovePermissionRequest): CodeGuruProfilerResponsesRemovePermission {
    return new CodeGuruProfilerResponsesRemovePermission(this, this.__resources, input);
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

  public updateProfilingGroup(input: shapes.CodeGuruProfilerUpdateProfilingGroupRequest): CodeGuruProfilerResponsesUpdateProfilingGroup {
    return new CodeGuruProfilerResponsesUpdateProfilingGroup(this, this.__resources, input);
  }

}

export class CodeGuruProfilerResponsesAddNotificationChannels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerAddNotificationChannelsRequest) {
  }

  public get notificationConfiguration(): CodeGuruProfilerResponsesAddNotificationChannelsNotificationConfiguration {
    return new CodeGuruProfilerResponsesAddNotificationChannelsNotificationConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class CodeGuruProfilerResponsesAddNotificationChannelsNotificationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerAddNotificationChannelsRequest) {
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
          channels: this.__input.channels,
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddNotificationChannels.notificationConfiguration.channels', props);
    return resource.getResponseField('notificationConfiguration.channels') as unknown as shapes.CodeGuruProfilerChannel[];
  }

}

export class CodeGuruProfilerResponsesBatchGetFrameMetricData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerBatchGetFrameMetricDataRequest) {
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
          endTime: this.__input.endTime,
          frameMetrics: this.__input.frameMetrics,
          period: this.__input.period,
          profilingGroupName: this.__input.profilingGroupName,
          startTime: this.__input.startTime,
          targetResolution: this.__input.targetResolution,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetFrameMetricData.endTime', props);
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
          endTime: this.__input.endTime,
          frameMetrics: this.__input.frameMetrics,
          period: this.__input.period,
          profilingGroupName: this.__input.profilingGroupName,
          startTime: this.__input.startTime,
          targetResolution: this.__input.targetResolution,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetFrameMetricData.endTimes', props);
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
          endTime: this.__input.endTime,
          frameMetrics: this.__input.frameMetrics,
          period: this.__input.period,
          profilingGroupName: this.__input.profilingGroupName,
          startTime: this.__input.startTime,
          targetResolution: this.__input.targetResolution,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetFrameMetricData.frameMetricData', props);
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
          endTime: this.__input.endTime,
          frameMetrics: this.__input.frameMetrics,
          period: this.__input.period,
          profilingGroupName: this.__input.profilingGroupName,
          startTime: this.__input.startTime,
          targetResolution: this.__input.targetResolution,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetFrameMetricData.resolution', props);
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
          endTime: this.__input.endTime,
          frameMetrics: this.__input.frameMetrics,
          period: this.__input.period,
          profilingGroupName: this.__input.profilingGroupName,
          startTime: this.__input.startTime,
          targetResolution: this.__input.targetResolution,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetFrameMetricData.startTime', props);
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
          endTime: this.__input.endTime,
          frameMetrics: this.__input.frameMetrics,
          period: this.__input.period,
          profilingGroupName: this.__input.profilingGroupName,
          startTime: this.__input.startTime,
          targetResolution: this.__input.targetResolution,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetFrameMetricData.unprocessedEndTimes', props);
    return resource.getResponseField('unprocessedEndTimes') as unknown as Record<string, shapes.CodeGuruProfilerTimestampStructure[]>;
  }

}

export class CodeGuruProfilerResponsesConfigureAgent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerConfigureAgentRequest) {
  }

  public get configuration(): CodeGuruProfilerResponsesConfigureAgentConfiguration {
    return new CodeGuruProfilerResponsesConfigureAgentConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class CodeGuruProfilerResponsesConfigureAgentConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerConfigureAgentRequest) {
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
          fleetInstanceId: this.__input.fleetInstanceId,
          metadata: this.__input.metadata,
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ConfigureAgent.configuration.agentParameters', props);
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
          fleetInstanceId: this.__input.fleetInstanceId,
          metadata: this.__input.metadata,
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ConfigureAgent.configuration.periodInSeconds', props);
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
          fleetInstanceId: this.__input.fleetInstanceId,
          metadata: this.__input.metadata,
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ConfigureAgent.configuration.shouldProfile', props);
    return resource.getResponseField('configuration.shouldProfile') as unknown as boolean;
  }

}

export class CodeGuruProfilerResponsesCreateProfilingGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerCreateProfilingGroupRequest) {
  }

  public get profilingGroup(): CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroup {
    return new CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroup(this.__scope, this.__resources, this.__input);
  }

}

export class CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerCreateProfilingGroupRequest) {
  }

  public get agentOrchestrationConfig(): CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupAgentOrchestrationConfig {
    return new CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupAgentOrchestrationConfig(this.__scope, this.__resources, this.__input);
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
            profilingEnabled: this.__input.agentOrchestrationConfig?.profilingEnabled,
          },
          clientToken: this.__input.clientToken,
          computePlatform: this.__input.computePlatform,
          profilingGroupName: this.__input.profilingGroupName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProfilingGroup.profilingGroup.arn', props);
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
            profilingEnabled: this.__input.agentOrchestrationConfig?.profilingEnabled,
          },
          clientToken: this.__input.clientToken,
          computePlatform: this.__input.computePlatform,
          profilingGroupName: this.__input.profilingGroupName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProfilingGroup.profilingGroup.computePlatform', props);
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
            profilingEnabled: this.__input.agentOrchestrationConfig?.profilingEnabled,
          },
          clientToken: this.__input.clientToken,
          computePlatform: this.__input.computePlatform,
          profilingGroupName: this.__input.profilingGroupName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProfilingGroup.profilingGroup.createdAt', props);
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
            profilingEnabled: this.__input.agentOrchestrationConfig?.profilingEnabled,
          },
          clientToken: this.__input.clientToken,
          computePlatform: this.__input.computePlatform,
          profilingGroupName: this.__input.profilingGroupName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProfilingGroup.profilingGroup.name', props);
    return resource.getResponseField('profilingGroup.name') as unknown as string;
  }

  public get profilingStatus(): CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatus {
    return new CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatus(this.__scope, this.__resources, this.__input);
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
            profilingEnabled: this.__input.agentOrchestrationConfig?.profilingEnabled,
          },
          clientToken: this.__input.clientToken,
          computePlatform: this.__input.computePlatform,
          profilingGroupName: this.__input.profilingGroupName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProfilingGroup.profilingGroup.tags', props);
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
            profilingEnabled: this.__input.agentOrchestrationConfig?.profilingEnabled,
          },
          clientToken: this.__input.clientToken,
          computePlatform: this.__input.computePlatform,
          profilingGroupName: this.__input.profilingGroupName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProfilingGroup.profilingGroup.updatedAt', props);
    return resource.getResponseField('profilingGroup.updatedAt') as unknown as string;
  }

}

export class CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupAgentOrchestrationConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerCreateProfilingGroupRequest) {
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
            profilingEnabled: this.__input.agentOrchestrationConfig?.profilingEnabled,
          },
          clientToken: this.__input.clientToken,
          computePlatform: this.__input.computePlatform,
          profilingGroupName: this.__input.profilingGroupName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProfilingGroup.profilingGroup.agentOrchestrationConfig.profilingEnabled', props);
    return resource.getResponseField('profilingGroup.agentOrchestrationConfig.profilingEnabled') as unknown as boolean;
  }

}

export class CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerCreateProfilingGroupRequest) {
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
            profilingEnabled: this.__input.agentOrchestrationConfig?.profilingEnabled,
          },
          clientToken: this.__input.clientToken,
          computePlatform: this.__input.computePlatform,
          profilingGroupName: this.__input.profilingGroupName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProfilingGroup.profilingGroup.profilingStatus.latestAgentOrchestratedAt', props);
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
            profilingEnabled: this.__input.agentOrchestrationConfig?.profilingEnabled,
          },
          clientToken: this.__input.clientToken,
          computePlatform: this.__input.computePlatform,
          profilingGroupName: this.__input.profilingGroupName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProfilingGroup.profilingGroup.profilingStatus.latestAgentProfileReportedAt', props);
    return resource.getResponseField('profilingGroup.profilingStatus.latestAgentProfileReportedAt') as unknown as string;
  }

  public get latestAggregatedProfile(): CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile {
    return new CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile(this.__scope, this.__resources, this.__input);
  }

}

export class CodeGuruProfilerResponsesCreateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerCreateProfilingGroupRequest) {
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
            profilingEnabled: this.__input.agentOrchestrationConfig?.profilingEnabled,
          },
          clientToken: this.__input.clientToken,
          computePlatform: this.__input.computePlatform,
          profilingGroupName: this.__input.profilingGroupName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProfilingGroup.profilingGroup.profilingStatus.latestAggregatedProfile.period', props);
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
            profilingEnabled: this.__input.agentOrchestrationConfig?.profilingEnabled,
          },
          clientToken: this.__input.clientToken,
          computePlatform: this.__input.computePlatform,
          profilingGroupName: this.__input.profilingGroupName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProfilingGroup.profilingGroup.profilingStatus.latestAggregatedProfile.start', props);
    return resource.getResponseField('profilingGroup.profilingStatus.latestAggregatedProfile.start') as unknown as string;
  }

}

export class CodeGuruProfilerResponsesDescribeProfilingGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerDescribeProfilingGroupRequest) {
  }

  public get profilingGroup(): CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroup {
    return new CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroup(this.__scope, this.__resources, this.__input);
  }

}

export class CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerDescribeProfilingGroupRequest) {
  }

  public get agentOrchestrationConfig(): CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupAgentOrchestrationConfig {
    return new CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupAgentOrchestrationConfig(this.__scope, this.__resources, this.__input);
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
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProfilingGroup.profilingGroup.arn', props);
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
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProfilingGroup.profilingGroup.computePlatform', props);
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
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProfilingGroup.profilingGroup.createdAt', props);
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
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProfilingGroup.profilingGroup.name', props);
    return resource.getResponseField('profilingGroup.name') as unknown as string;
  }

  public get profilingStatus(): CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatus {
    return new CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatus(this.__scope, this.__resources, this.__input);
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
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProfilingGroup.profilingGroup.tags', props);
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
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProfilingGroup.profilingGroup.updatedAt', props);
    return resource.getResponseField('profilingGroup.updatedAt') as unknown as string;
  }

}

export class CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupAgentOrchestrationConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerDescribeProfilingGroupRequest) {
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
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProfilingGroup.profilingGroup.agentOrchestrationConfig.profilingEnabled', props);
    return resource.getResponseField('profilingGroup.agentOrchestrationConfig.profilingEnabled') as unknown as boolean;
  }

}

export class CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerDescribeProfilingGroupRequest) {
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
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProfilingGroup.profilingGroup.profilingStatus.latestAgentOrchestratedAt', props);
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
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProfilingGroup.profilingGroup.profilingStatus.latestAgentProfileReportedAt', props);
    return resource.getResponseField('profilingGroup.profilingStatus.latestAgentProfileReportedAt') as unknown as string;
  }

  public get latestAggregatedProfile(): CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile {
    return new CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile(this.__scope, this.__resources, this.__input);
  }

}

export class CodeGuruProfilerResponsesDescribeProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerDescribeProfilingGroupRequest) {
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
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProfilingGroup.profilingGroup.profilingStatus.latestAggregatedProfile.period', props);
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
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProfilingGroup.profilingGroup.profilingStatus.latestAggregatedProfile.start', props);
    return resource.getResponseField('profilingGroup.profilingStatus.latestAggregatedProfile.start') as unknown as string;
  }

}

export class CodeGuruProfilerResponsesFetchFindingsReportAccountSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerGetFindingsReportAccountSummaryRequest) {
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
          dailyReportsOnly: this.__input.dailyReportsOnly,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFindingsReportAccountSummary.nextToken', props);
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
          dailyReportsOnly: this.__input.dailyReportsOnly,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFindingsReportAccountSummary.reportSummaries', props);
    return resource.getResponseField('reportSummaries') as unknown as shapes.CodeGuruProfilerFindingsReportSummary[];
  }

}

export class CodeGuruProfilerResponsesFetchNotificationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerGetNotificationConfigurationRequest) {
  }

  public get notificationConfiguration(): CodeGuruProfilerResponsesFetchNotificationConfigurationNotificationConfiguration {
    return new CodeGuruProfilerResponsesFetchNotificationConfigurationNotificationConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class CodeGuruProfilerResponsesFetchNotificationConfigurationNotificationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerGetNotificationConfigurationRequest) {
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
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNotificationConfiguration.notificationConfiguration.channels', props);
    return resource.getResponseField('notificationConfiguration.channels') as unknown as shapes.CodeGuruProfilerChannel[];
  }

}

export class CodeGuruProfilerResponsesFetchPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerGetPolicyRequest) {
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
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.policy', props);
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
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.revisionId', props);
    return resource.getResponseField('revisionId') as unknown as string;
  }

}

export class CodeGuruProfilerResponsesFetchProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerGetProfileRequest) {
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
          accept: this.__input.accept,
          endTime: this.__input.endTime,
          maxDepth: this.__input.maxDepth,
          period: this.__input.period,
          profilingGroupName: this.__input.profilingGroupName,
          startTime: this.__input.startTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfile.contentEncoding', props);
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
          accept: this.__input.accept,
          endTime: this.__input.endTime,
          maxDepth: this.__input.maxDepth,
          period: this.__input.period,
          profilingGroupName: this.__input.profilingGroupName,
          startTime: this.__input.startTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfile.contentType', props);
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
          accept: this.__input.accept,
          endTime: this.__input.endTime,
          maxDepth: this.__input.maxDepth,
          period: this.__input.period,
          profilingGroupName: this.__input.profilingGroupName,
          startTime: this.__input.startTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfile.profile', props);
    return resource.getResponseField('profile') as unknown as any;
  }

}

export class CodeGuruProfilerResponsesFetchRecommendations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerGetRecommendationsRequest) {
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
          endTime: this.__input.endTime,
          locale: this.__input.locale,
          profilingGroupName: this.__input.profilingGroupName,
          startTime: this.__input.startTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRecommendations.anomalies', props);
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
          endTime: this.__input.endTime,
          locale: this.__input.locale,
          profilingGroupName: this.__input.profilingGroupName,
          startTime: this.__input.startTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRecommendations.profileEndTime', props);
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
          endTime: this.__input.endTime,
          locale: this.__input.locale,
          profilingGroupName: this.__input.profilingGroupName,
          startTime: this.__input.startTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRecommendations.profileStartTime', props);
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
          endTime: this.__input.endTime,
          locale: this.__input.locale,
          profilingGroupName: this.__input.profilingGroupName,
          startTime: this.__input.startTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRecommendations.profilingGroupName', props);
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
          endTime: this.__input.endTime,
          locale: this.__input.locale,
          profilingGroupName: this.__input.profilingGroupName,
          startTime: this.__input.startTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRecommendations.recommendations', props);
    return resource.getResponseField('recommendations') as unknown as shapes.CodeGuruProfilerRecommendation[];
  }

}

export class CodeGuruProfilerResponsesListFindingsReports {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerListFindingsReportsRequest) {
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
          dailyReportsOnly: this.__input.dailyReportsOnly,
          endTime: this.__input.endTime,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          profilingGroupName: this.__input.profilingGroupName,
          startTime: this.__input.startTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFindingsReports.findingsReportSummaries', props);
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
          dailyReportsOnly: this.__input.dailyReportsOnly,
          endTime: this.__input.endTime,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          profilingGroupName: this.__input.profilingGroupName,
          startTime: this.__input.startTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFindingsReports.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeGuruProfilerResponsesListProfileTimes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerListProfileTimesRequest) {
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
          endTime: this.__input.endTime,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          orderBy: this.__input.orderBy,
          period: this.__input.period,
          profilingGroupName: this.__input.profilingGroupName,
          startTime: this.__input.startTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProfileTimes.nextToken', props);
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
          endTime: this.__input.endTime,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          orderBy: this.__input.orderBy,
          period: this.__input.period,
          profilingGroupName: this.__input.profilingGroupName,
          startTime: this.__input.startTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProfileTimes.profileTimes', props);
    return resource.getResponseField('profileTimes') as unknown as shapes.CodeGuruProfilerProfileTime[];
  }

}

export class CodeGuruProfilerResponsesListProfilingGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerListProfilingGroupsRequest) {
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
          includeDescription: this.__input.includeDescription,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProfilingGroups.nextToken', props);
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
          includeDescription: this.__input.includeDescription,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProfilingGroups.profilingGroupNames', props);
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
          includeDescription: this.__input.includeDescription,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProfilingGroups.profilingGroups', props);
    return resource.getResponseField('profilingGroups') as unknown as shapes.CodeGuruProfilerProfilingGroupDescription[];
  }

}

export class CodeGuruProfilerResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerListTagsForResourceRequest) {
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
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class CodeGuruProfilerResponsesPutPermission {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerPutPermissionRequest) {
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
          actionGroup: this.__input.actionGroup,
          principals: this.__input.principals,
          profilingGroupName: this.__input.profilingGroupName,
          revisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPermission.policy', props);
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
          actionGroup: this.__input.actionGroup,
          principals: this.__input.principals,
          profilingGroupName: this.__input.profilingGroupName,
          revisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutPermission.revisionId', props);
    return resource.getResponseField('revisionId') as unknown as string;
  }

}

export class CodeGuruProfilerResponsesRemoveNotificationChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerRemoveNotificationChannelRequest) {
  }

  public get notificationConfiguration(): CodeGuruProfilerResponsesRemoveNotificationChannelNotificationConfiguration {
    return new CodeGuruProfilerResponsesRemoveNotificationChannelNotificationConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class CodeGuruProfilerResponsesRemoveNotificationChannelNotificationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerRemoveNotificationChannelRequest) {
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
          channelId: this.__input.channelId,
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveNotificationChannel.notificationConfiguration.channels', props);
    return resource.getResponseField('notificationConfiguration.channels') as unknown as shapes.CodeGuruProfilerChannel[];
  }

}

export class CodeGuruProfilerResponsesRemovePermission {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerRemovePermissionRequest) {
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
          actionGroup: this.__input.actionGroup,
          profilingGroupName: this.__input.profilingGroupName,
          revisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemovePermission.policy', props);
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
          actionGroup: this.__input.actionGroup,
          profilingGroupName: this.__input.profilingGroupName,
          revisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemovePermission.revisionId', props);
    return resource.getResponseField('revisionId') as unknown as string;
  }

}

export class CodeGuruProfilerResponsesUpdateProfilingGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerUpdateProfilingGroupRequest) {
  }

  public get profilingGroup(): CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroup {
    return new CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroup(this.__scope, this.__resources, this.__input);
  }

}

export class CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerUpdateProfilingGroupRequest) {
  }

  public get agentOrchestrationConfig(): CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupAgentOrchestrationConfig {
    return new CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupAgentOrchestrationConfig(this.__scope, this.__resources, this.__input);
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
            profilingEnabled: this.__input.agentOrchestrationConfig.profilingEnabled,
          },
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProfilingGroup.profilingGroup.arn', props);
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
            profilingEnabled: this.__input.agentOrchestrationConfig.profilingEnabled,
          },
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProfilingGroup.profilingGroup.computePlatform', props);
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
            profilingEnabled: this.__input.agentOrchestrationConfig.profilingEnabled,
          },
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProfilingGroup.profilingGroup.createdAt', props);
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
            profilingEnabled: this.__input.agentOrchestrationConfig.profilingEnabled,
          },
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProfilingGroup.profilingGroup.name', props);
    return resource.getResponseField('profilingGroup.name') as unknown as string;
  }

  public get profilingStatus(): CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatus {
    return new CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatus(this.__scope, this.__resources, this.__input);
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
            profilingEnabled: this.__input.agentOrchestrationConfig.profilingEnabled,
          },
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProfilingGroup.profilingGroup.tags', props);
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
            profilingEnabled: this.__input.agentOrchestrationConfig.profilingEnabled,
          },
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProfilingGroup.profilingGroup.updatedAt', props);
    return resource.getResponseField('profilingGroup.updatedAt') as unknown as string;
  }

}

export class CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupAgentOrchestrationConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerUpdateProfilingGroupRequest) {
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
            profilingEnabled: this.__input.agentOrchestrationConfig.profilingEnabled,
          },
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProfilingGroup.profilingGroup.agentOrchestrationConfig.profilingEnabled', props);
    return resource.getResponseField('profilingGroup.agentOrchestrationConfig.profilingEnabled') as unknown as boolean;
  }

}

export class CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerUpdateProfilingGroupRequest) {
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
            profilingEnabled: this.__input.agentOrchestrationConfig.profilingEnabled,
          },
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProfilingGroup.profilingGroup.profilingStatus.latestAgentOrchestratedAt', props);
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
            profilingEnabled: this.__input.agentOrchestrationConfig.profilingEnabled,
          },
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProfilingGroup.profilingGroup.profilingStatus.latestAgentProfileReportedAt', props);
    return resource.getResponseField('profilingGroup.profilingStatus.latestAgentProfileReportedAt') as unknown as string;
  }

  public get latestAggregatedProfile(): CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile {
    return new CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile(this.__scope, this.__resources, this.__input);
  }

}

export class CodeGuruProfilerResponsesUpdateProfilingGroupProfilingGroupProfilingStatusLatestAggregatedProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruProfilerUpdateProfilingGroupRequest) {
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
            profilingEnabled: this.__input.agentOrchestrationConfig.profilingEnabled,
          },
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProfilingGroup.profilingGroup.profilingStatus.latestAggregatedProfile.period', props);
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
            profilingEnabled: this.__input.agentOrchestrationConfig.profilingEnabled,
          },
          profilingGroupName: this.__input.profilingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProfilingGroup.profilingGroup.profilingStatus.latestAggregatedProfile.start', props);
    return resource.getResponseField('profilingGroup.profilingStatus.latestAggregatedProfile.start') as unknown as string;
  }

}

