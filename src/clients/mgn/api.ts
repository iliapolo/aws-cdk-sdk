import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class MgnClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public changeServerLifeCycleState(input: shapes.MgnChangeServerLifeCycleStateRequest): MgnResponsesChangeServerLifeCycleState {
    return new MgnResponsesChangeServerLifeCycleState(this, this.__resources, input);
  }

  public createReplicationConfigurationTemplate(input: shapes.MgnCreateReplicationConfigurationTemplateRequest): MgnResponsesCreateReplicationConfigurationTemplate {
    return new MgnResponsesCreateReplicationConfigurationTemplate(this, this.__resources, input);
  }

  public deleteJob(input: shapes.MgnDeleteJobRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteJob',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DeleteJob'),
        parameters: {
          jobID: input.jobID,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteJob', props);
  }

  public deleteReplicationConfigurationTemplate(input: shapes.MgnDeleteReplicationConfigurationTemplateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DeleteReplicationConfigurationTemplate'),
        parameters: {
          replicationConfigurationTemplateID: input.replicationConfigurationTemplateID,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteReplicationConfigurationTemplate', props);
  }

  public deleteSourceServer(input: shapes.MgnDeleteSourceServerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSourceServer',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DeleteSourceServer'),
        parameters: {
          sourceServerID: input.sourceServerID,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSourceServer', props);
  }

  public describeJobLogItems(input: shapes.MgnDescribeJobLogItemsRequest): MgnResponsesDescribeJobLogItems {
    return new MgnResponsesDescribeJobLogItems(this, this.__resources, input);
  }

  public describeJobs(input: shapes.MgnDescribeJobsRequest): MgnResponsesDescribeJobs {
    return new MgnResponsesDescribeJobs(this, this.__resources, input);
  }

  public describeReplicationConfigurationTemplates(input: shapes.MgnDescribeReplicationConfigurationTemplatesRequest): MgnResponsesDescribeReplicationConfigurationTemplates {
    return new MgnResponsesDescribeReplicationConfigurationTemplates(this, this.__resources, input);
  }

  public describeSourceServers(input: shapes.MgnDescribeSourceServersRequest): MgnResponsesDescribeSourceServers {
    return new MgnResponsesDescribeSourceServers(this, this.__resources, input);
  }

  public disconnectFromService(input: shapes.MgnDisconnectFromServiceRequest): MgnResponsesDisconnectFromService {
    return new MgnResponsesDisconnectFromService(this, this.__resources, input);
  }

  public finalizeCutover(input: shapes.MgnFinalizeCutoverRequest): MgnResponsesFinalizeCutover {
    return new MgnResponsesFinalizeCutover(this, this.__resources, input);
  }

  public fetchLaunchConfiguration(input: shapes.MgnGetLaunchConfigurationRequest): MgnResponsesFetchLaunchConfiguration {
    return new MgnResponsesFetchLaunchConfiguration(this, this.__resources, input);
  }

  public fetchReplicationConfiguration(input: shapes.MgnGetReplicationConfigurationRequest): MgnResponsesFetchReplicationConfiguration {
    return new MgnResponsesFetchReplicationConfiguration(this, this.__resources, input);
  }

  public initializeService(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initializeService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.InitializeService'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'InitializeService', props);
  }

  public listTagsForResource(input: shapes.MgnListTagsForResourceRequest): MgnResponsesListTagsForResource {
    return new MgnResponsesListTagsForResource(this, this.__resources, input);
  }

  public markAsArchived(input: shapes.MgnMarkAsArchivedRequest): MgnResponsesMarkAsArchived {
    return new MgnResponsesMarkAsArchived(this, this.__resources, input);
  }

  public retryDataReplication(input: shapes.MgnRetryDataReplicationRequest): MgnResponsesRetryDataReplication {
    return new MgnResponsesRetryDataReplication(this, this.__resources, input);
  }

  public startCutover(input: shapes.MgnStartCutoverRequest): MgnResponsesStartCutover {
    return new MgnResponsesStartCutover(this, this.__resources, input);
  }

  public startTest(input: shapes.MgnStartTestRequest): MgnResponsesStartTest {
    return new MgnResponsesStartTest(this, this.__resources, input);
  }

  public tagResource(input: shapes.MgnTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public terminateTargetInstances(input: shapes.MgnTerminateTargetInstancesRequest): MgnResponsesTerminateTargetInstances {
    return new MgnResponsesTerminateTargetInstances(this, this.__resources, input);
  }

  public untagResource(input: shapes.MgnUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateLaunchConfiguration(input: shapes.MgnUpdateLaunchConfigurationRequest): MgnResponsesUpdateLaunchConfiguration {
    return new MgnResponsesUpdateLaunchConfiguration(this, this.__resources, input);
  }

  public updateReplicationConfiguration(input: shapes.MgnUpdateReplicationConfigurationRequest): MgnResponsesUpdateReplicationConfiguration {
    return new MgnResponsesUpdateReplicationConfiguration(this, this.__resources, input);
  }

  public updateReplicationConfigurationTemplate(input: shapes.MgnUpdateReplicationConfigurationTemplateRequest): MgnResponsesUpdateReplicationConfigurationTemplate {
    return new MgnResponsesUpdateReplicationConfigurationTemplate(this, this.__resources, input);
  }

}

export class MgnResponsesChangeServerLifeCycleState {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnChangeServerLifeCycleStateRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.arn'),
        outputPath: 'arn',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get dataReplicationInfo(): MgnResponsesChangeServerLifeCycleStateDataReplicationInfo {
    return new MgnResponsesChangeServerLifeCycleStateDataReplicationInfo(this.__scope, this.__resources, this.__input);
  }

  public get isArchived(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.isArchived'),
        outputPath: 'isArchived',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.isArchived', props);
    return resource.getResponseField('isArchived') as unknown as boolean;
  }

  public get launchedInstance(): MgnResponsesChangeServerLifeCycleStateLaunchedInstance {
    return new MgnResponsesChangeServerLifeCycleStateLaunchedInstance(this.__scope, this.__resources, this.__input);
  }

  public get lifeCycle(): MgnResponsesChangeServerLifeCycleStateLifeCycle {
    return new MgnResponsesChangeServerLifeCycleStateLifeCycle(this.__scope, this.__resources, this.__input);
  }

  public get sourceProperties(): MgnResponsesChangeServerLifeCycleStateSourceProperties {
    return new MgnResponsesChangeServerLifeCycleStateSourceProperties(this.__scope, this.__resources, this.__input);
  }

  public get sourceServerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.sourceServerID'),
        outputPath: 'sourceServerID',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.sourceServerID', props);
    return resource.getResponseField('sourceServerID') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.tags'),
        outputPath: 'tags',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class MgnResponsesChangeServerLifeCycleStateDataReplicationInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnChangeServerLifeCycleStateRequest) {
  }

  public get dataReplicationError(): MgnResponsesChangeServerLifeCycleStateDataReplicationInfoDataReplicationError {
    return new MgnResponsesChangeServerLifeCycleStateDataReplicationInfoDataReplicationError(this.__scope, this.__resources, this.__input);
  }

  public get dataReplicationInitiation(): MgnResponsesChangeServerLifeCycleStateDataReplicationInfoDataReplicationInitiation {
    return new MgnResponsesChangeServerLifeCycleStateDataReplicationInfoDataReplicationInitiation(this.__scope, this.__resources, this.__input);
  }

  public get dataReplicationState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.dataReplicationInfo.dataReplicationState'),
        outputPath: 'dataReplicationInfo.dataReplicationState',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.dataReplicationInfo.dataReplicationState', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationState') as unknown as string;
  }

  public get etaDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.dataReplicationInfo.etaDateTime'),
        outputPath: 'dataReplicationInfo.etaDateTime',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.dataReplicationInfo.etaDateTime', props);
    return resource.getResponseField('dataReplicationInfo.etaDateTime') as unknown as string;
  }

  public get lagDuration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.dataReplicationInfo.lagDuration'),
        outputPath: 'dataReplicationInfo.lagDuration',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.dataReplicationInfo.lagDuration', props);
    return resource.getResponseField('dataReplicationInfo.lagDuration') as unknown as string;
  }

  public get replicatedDisks(): shapes.MgnDataReplicationInfoReplicatedDisk[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.dataReplicationInfo.replicatedDisks'),
        outputPath: 'dataReplicationInfo.replicatedDisks',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.dataReplicationInfo.replicatedDisks', props);
    return resource.getResponseField('dataReplicationInfo.replicatedDisks') as unknown as shapes.MgnDataReplicationInfoReplicatedDisk[];
  }

}

export class MgnResponsesChangeServerLifeCycleStateDataReplicationInfoDataReplicationError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnChangeServerLifeCycleStateRequest) {
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.dataReplicationInfo.dataReplicationError.error'),
        outputPath: 'dataReplicationInfo.dataReplicationError.error',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.dataReplicationInfo.dataReplicationError.error', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationError.error') as unknown as string;
  }

  public get rawError(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.dataReplicationInfo.dataReplicationError.rawError'),
        outputPath: 'dataReplicationInfo.dataReplicationError.rawError',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.dataReplicationInfo.dataReplicationError.rawError', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationError.rawError') as unknown as string;
  }

}

export class MgnResponsesChangeServerLifeCycleStateDataReplicationInfoDataReplicationInitiation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnChangeServerLifeCycleStateRequest) {
  }

  public get nextAttemptDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.dataReplicationInfo.dataReplicationInitiation.nextAttemptDateTime'),
        outputPath: 'dataReplicationInfo.dataReplicationInitiation.nextAttemptDateTime',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.dataReplicationInfo.dataReplicationInitiation.nextAttemptDateTime', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationInitiation.nextAttemptDateTime') as unknown as string;
  }

  public get startDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.dataReplicationInfo.dataReplicationInitiation.startDateTime'),
        outputPath: 'dataReplicationInfo.dataReplicationInitiation.startDateTime',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.dataReplicationInfo.dataReplicationInitiation.startDateTime', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationInitiation.startDateTime') as unknown as string;
  }

  public get steps(): shapes.MgnDataReplicationInitiationStep[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.dataReplicationInfo.dataReplicationInitiation.steps'),
        outputPath: 'dataReplicationInfo.dataReplicationInitiation.steps',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.dataReplicationInfo.dataReplicationInitiation.steps', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationInitiation.steps') as unknown as shapes.MgnDataReplicationInitiationStep[];
  }

}

export class MgnResponsesChangeServerLifeCycleStateLaunchedInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnChangeServerLifeCycleStateRequest) {
  }

  public get ec2InstanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.launchedInstance.ec2InstanceID'),
        outputPath: 'launchedInstance.ec2InstanceID',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.launchedInstance.ec2InstanceID', props);
    return resource.getResponseField('launchedInstance.ec2InstanceID') as unknown as string;
  }

  public get firstBoot(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.launchedInstance.firstBoot'),
        outputPath: 'launchedInstance.firstBoot',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.launchedInstance.firstBoot', props);
    return resource.getResponseField('launchedInstance.firstBoot') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.launchedInstance.jobID'),
        outputPath: 'launchedInstance.jobID',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.launchedInstance.jobID', props);
    return resource.getResponseField('launchedInstance.jobID') as unknown as string;
  }

}

export class MgnResponsesChangeServerLifeCycleStateLifeCycle {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnChangeServerLifeCycleStateRequest) {
  }

  public get addedToServiceDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.lifeCycle.addedToServiceDateTime'),
        outputPath: 'lifeCycle.addedToServiceDateTime',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.lifeCycle.addedToServiceDateTime', props);
    return resource.getResponseField('lifeCycle.addedToServiceDateTime') as unknown as string;
  }

  public get elapsedReplicationDuration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.lifeCycle.elapsedReplicationDuration'),
        outputPath: 'lifeCycle.elapsedReplicationDuration',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.lifeCycle.elapsedReplicationDuration', props);
    return resource.getResponseField('lifeCycle.elapsedReplicationDuration') as unknown as string;
  }

  public get firstByteDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.lifeCycle.firstByteDateTime'),
        outputPath: 'lifeCycle.firstByteDateTime',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.lifeCycle.firstByteDateTime', props);
    return resource.getResponseField('lifeCycle.firstByteDateTime') as unknown as string;
  }

  public get lastCutover(): MgnResponsesChangeServerLifeCycleStateLifeCycleLastCutover {
    return new MgnResponsesChangeServerLifeCycleStateLifeCycleLastCutover(this.__scope, this.__resources, this.__input);
  }

  public get lastSeenByServiceDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.lifeCycle.lastSeenByServiceDateTime'),
        outputPath: 'lifeCycle.lastSeenByServiceDateTime',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.lifeCycle.lastSeenByServiceDateTime', props);
    return resource.getResponseField('lifeCycle.lastSeenByServiceDateTime') as unknown as string;
  }

  public get lastTest(): MgnResponsesChangeServerLifeCycleStateLifeCycleLastTest {
    return new MgnResponsesChangeServerLifeCycleStateLifeCycleLastTest(this.__scope, this.__resources, this.__input);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.lifeCycle.state'),
        outputPath: 'lifeCycle.state',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.lifeCycle.state', props);
    return resource.getResponseField('lifeCycle.state') as unknown as string;
  }

}

export class MgnResponsesChangeServerLifeCycleStateLifeCycleLastCutover {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnChangeServerLifeCycleStateRequest) {
  }

  public get finalized(): MgnResponsesChangeServerLifeCycleStateLifeCycleLastCutoverFinalized {
    return new MgnResponsesChangeServerLifeCycleStateLifeCycleLastCutoverFinalized(this.__scope, this.__resources, this.__input);
  }

  public get initiated(): MgnResponsesChangeServerLifeCycleStateLifeCycleLastCutoverInitiated {
    return new MgnResponsesChangeServerLifeCycleStateLifeCycleLastCutoverInitiated(this.__scope, this.__resources, this.__input);
  }

  public get reverted(): MgnResponsesChangeServerLifeCycleStateLifeCycleLastCutoverReverted {
    return new MgnResponsesChangeServerLifeCycleStateLifeCycleLastCutoverReverted(this.__scope, this.__resources, this.__input);
  }

}

export class MgnResponsesChangeServerLifeCycleStateLifeCycleLastCutoverFinalized {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnChangeServerLifeCycleStateRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.lifeCycle.lastCutover.finalized.apiCallDateTime'),
        outputPath: 'lifeCycle.lastCutover.finalized.apiCallDateTime',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.lifeCycle.lastCutover.finalized.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastCutover.finalized.apiCallDateTime') as unknown as string;
  }

}

export class MgnResponsesChangeServerLifeCycleStateLifeCycleLastCutoverInitiated {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnChangeServerLifeCycleStateRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.lifeCycle.lastCutover.initiated.apiCallDateTime'),
        outputPath: 'lifeCycle.lastCutover.initiated.apiCallDateTime',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.lifeCycle.lastCutover.initiated.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastCutover.initiated.apiCallDateTime') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.lifeCycle.lastCutover.initiated.jobID'),
        outputPath: 'lifeCycle.lastCutover.initiated.jobID',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.lifeCycle.lastCutover.initiated.jobID', props);
    return resource.getResponseField('lifeCycle.lastCutover.initiated.jobID') as unknown as string;
  }

}

export class MgnResponsesChangeServerLifeCycleStateLifeCycleLastCutoverReverted {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnChangeServerLifeCycleStateRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.lifeCycle.lastCutover.reverted.apiCallDateTime'),
        outputPath: 'lifeCycle.lastCutover.reverted.apiCallDateTime',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.lifeCycle.lastCutover.reverted.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastCutover.reverted.apiCallDateTime') as unknown as string;
  }

}

export class MgnResponsesChangeServerLifeCycleStateLifeCycleLastTest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnChangeServerLifeCycleStateRequest) {
  }

  public get finalized(): MgnResponsesChangeServerLifeCycleStateLifeCycleLastTestFinalized {
    return new MgnResponsesChangeServerLifeCycleStateLifeCycleLastTestFinalized(this.__scope, this.__resources, this.__input);
  }

  public get initiated(): MgnResponsesChangeServerLifeCycleStateLifeCycleLastTestInitiated {
    return new MgnResponsesChangeServerLifeCycleStateLifeCycleLastTestInitiated(this.__scope, this.__resources, this.__input);
  }

  public get reverted(): MgnResponsesChangeServerLifeCycleStateLifeCycleLastTestReverted {
    return new MgnResponsesChangeServerLifeCycleStateLifeCycleLastTestReverted(this.__scope, this.__resources, this.__input);
  }

}

export class MgnResponsesChangeServerLifeCycleStateLifeCycleLastTestFinalized {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnChangeServerLifeCycleStateRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.lifeCycle.lastTest.finalized.apiCallDateTime'),
        outputPath: 'lifeCycle.lastTest.finalized.apiCallDateTime',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.lifeCycle.lastTest.finalized.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastTest.finalized.apiCallDateTime') as unknown as string;
  }

}

export class MgnResponsesChangeServerLifeCycleStateLifeCycleLastTestInitiated {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnChangeServerLifeCycleStateRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.lifeCycle.lastTest.initiated.apiCallDateTime'),
        outputPath: 'lifeCycle.lastTest.initiated.apiCallDateTime',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.lifeCycle.lastTest.initiated.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastTest.initiated.apiCallDateTime') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.lifeCycle.lastTest.initiated.jobID'),
        outputPath: 'lifeCycle.lastTest.initiated.jobID',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.lifeCycle.lastTest.initiated.jobID', props);
    return resource.getResponseField('lifeCycle.lastTest.initiated.jobID') as unknown as string;
  }

}

export class MgnResponsesChangeServerLifeCycleStateLifeCycleLastTestReverted {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnChangeServerLifeCycleStateRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.lifeCycle.lastTest.reverted.apiCallDateTime'),
        outputPath: 'lifeCycle.lastTest.reverted.apiCallDateTime',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.lifeCycle.lastTest.reverted.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastTest.reverted.apiCallDateTime') as unknown as string;
  }

}

export class MgnResponsesChangeServerLifeCycleStateSourceProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnChangeServerLifeCycleStateRequest) {
  }

  public get cpus(): shapes.MgnCpu[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.sourceProperties.cpus'),
        outputPath: 'sourceProperties.cpus',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.sourceProperties.cpus', props);
    return resource.getResponseField('sourceProperties.cpus') as unknown as shapes.MgnCpu[];
  }

  public get disks(): shapes.MgnDisk[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.sourceProperties.disks'),
        outputPath: 'sourceProperties.disks',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.sourceProperties.disks', props);
    return resource.getResponseField('sourceProperties.disks') as unknown as shapes.MgnDisk[];
  }

  public get identificationHints(): MgnResponsesChangeServerLifeCycleStateSourcePropertiesIdentificationHints {
    return new MgnResponsesChangeServerLifeCycleStateSourcePropertiesIdentificationHints(this.__scope, this.__resources, this.__input);
  }

  public get lastUpdatedDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.sourceProperties.lastUpdatedDateTime'),
        outputPath: 'sourceProperties.lastUpdatedDateTime',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.sourceProperties.lastUpdatedDateTime', props);
    return resource.getResponseField('sourceProperties.lastUpdatedDateTime') as unknown as string;
  }

  public get networkInterfaces(): shapes.MgnNetworkInterface[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.sourceProperties.networkInterfaces'),
        outputPath: 'sourceProperties.networkInterfaces',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.sourceProperties.networkInterfaces', props);
    return resource.getResponseField('sourceProperties.networkInterfaces') as unknown as shapes.MgnNetworkInterface[];
  }

  public get os(): MgnResponsesChangeServerLifeCycleStateSourcePropertiesOs {
    return new MgnResponsesChangeServerLifeCycleStateSourcePropertiesOs(this.__scope, this.__resources, this.__input);
  }

  public get ramBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.sourceProperties.ramBytes'),
        outputPath: 'sourceProperties.ramBytes',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.sourceProperties.ramBytes', props);
    return resource.getResponseField('sourceProperties.ramBytes') as unknown as number;
  }

  public get recommendedInstanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.sourceProperties.recommendedInstanceType'),
        outputPath: 'sourceProperties.recommendedInstanceType',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.sourceProperties.recommendedInstanceType', props);
    return resource.getResponseField('sourceProperties.recommendedInstanceType') as unknown as string;
  }

}

export class MgnResponsesChangeServerLifeCycleStateSourcePropertiesIdentificationHints {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnChangeServerLifeCycleStateRequest) {
  }

  public get awsInstanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.sourceProperties.identificationHints.awsInstanceID'),
        outputPath: 'sourceProperties.identificationHints.awsInstanceID',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.sourceProperties.identificationHints.awsInstanceID', props);
    return resource.getResponseField('sourceProperties.identificationHints.awsInstanceID') as unknown as string;
  }

  public get fqdn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.sourceProperties.identificationHints.fqdn'),
        outputPath: 'sourceProperties.identificationHints.fqdn',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.sourceProperties.identificationHints.fqdn', props);
    return resource.getResponseField('sourceProperties.identificationHints.fqdn') as unknown as string;
  }

  public get hostname(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.sourceProperties.identificationHints.hostname'),
        outputPath: 'sourceProperties.identificationHints.hostname',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.sourceProperties.identificationHints.hostname', props);
    return resource.getResponseField('sourceProperties.identificationHints.hostname') as unknown as string;
  }

  public get vmWareUuid(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.sourceProperties.identificationHints.vmWareUuid'),
        outputPath: 'sourceProperties.identificationHints.vmWareUuid',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.sourceProperties.identificationHints.vmWareUuid', props);
    return resource.getResponseField('sourceProperties.identificationHints.vmWareUuid') as unknown as string;
  }

}

export class MgnResponsesChangeServerLifeCycleStateSourcePropertiesOs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnChangeServerLifeCycleStateRequest) {
  }

  public get fullString(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeServerLifeCycleState',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ChangeServerLifeCycleState.sourceProperties.os.fullString'),
        outputPath: 'sourceProperties.os.fullString',
        parameters: {
          lifeCycle: {
            state: this.__input.lifeCycle.state,
          },
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeServerLifeCycleState.sourceProperties.os.fullString', props);
    return resource.getResponseField('sourceProperties.os.fullString') as unknown as string;
  }

}

export class MgnResponsesCreateReplicationConfigurationTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnCreateReplicationConfigurationTemplateRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.CreateReplicationConfigurationTemplate.arn'),
        outputPath: 'arn',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          tags: this.__input.tags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationConfigurationTemplate.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get associateDefaultSecurityGroup(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.CreateReplicationConfigurationTemplate.associateDefaultSecurityGroup'),
        outputPath: 'associateDefaultSecurityGroup',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          tags: this.__input.tags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationConfigurationTemplate.associateDefaultSecurityGroup', props);
    return resource.getResponseField('associateDefaultSecurityGroup') as unknown as boolean;
  }

  public get bandwidthThrottling(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.CreateReplicationConfigurationTemplate.bandwidthThrottling'),
        outputPath: 'bandwidthThrottling',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          tags: this.__input.tags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationConfigurationTemplate.bandwidthThrottling', props);
    return resource.getResponseField('bandwidthThrottling') as unknown as number;
  }

  public get createPublicIp(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.CreateReplicationConfigurationTemplate.createPublicIP'),
        outputPath: 'createPublicIP',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          tags: this.__input.tags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationConfigurationTemplate.createPublicIP', props);
    return resource.getResponseField('createPublicIP') as unknown as boolean;
  }

  public get dataPlaneRouting(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.CreateReplicationConfigurationTemplate.dataPlaneRouting'),
        outputPath: 'dataPlaneRouting',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          tags: this.__input.tags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationConfigurationTemplate.dataPlaneRouting', props);
    return resource.getResponseField('dataPlaneRouting') as unknown as string;
  }

  public get defaultLargeStagingDiskType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.CreateReplicationConfigurationTemplate.defaultLargeStagingDiskType'),
        outputPath: 'defaultLargeStagingDiskType',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          tags: this.__input.tags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationConfigurationTemplate.defaultLargeStagingDiskType', props);
    return resource.getResponseField('defaultLargeStagingDiskType') as unknown as string;
  }

  public get ebsEncryption(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.CreateReplicationConfigurationTemplate.ebsEncryption'),
        outputPath: 'ebsEncryption',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          tags: this.__input.tags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationConfigurationTemplate.ebsEncryption', props);
    return resource.getResponseField('ebsEncryption') as unknown as string;
  }

  public get ebsEncryptionKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.CreateReplicationConfigurationTemplate.ebsEncryptionKeyArn'),
        outputPath: 'ebsEncryptionKeyArn',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          tags: this.__input.tags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationConfigurationTemplate.ebsEncryptionKeyArn', props);
    return resource.getResponseField('ebsEncryptionKeyArn') as unknown as string;
  }

  public get replicationConfigurationTemplateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.CreateReplicationConfigurationTemplate.replicationConfigurationTemplateID'),
        outputPath: 'replicationConfigurationTemplateID',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          tags: this.__input.tags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationConfigurationTemplate.replicationConfigurationTemplateID', props);
    return resource.getResponseField('replicationConfigurationTemplateID') as unknown as string;
  }

  public get replicationServerInstanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.CreateReplicationConfigurationTemplate.replicationServerInstanceType'),
        outputPath: 'replicationServerInstanceType',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          tags: this.__input.tags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationConfigurationTemplate.replicationServerInstanceType', props);
    return resource.getResponseField('replicationServerInstanceType') as unknown as string;
  }

  public get replicationServersSecurityGroupsIDs(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.CreateReplicationConfigurationTemplate.replicationServersSecurityGroupsIDs'),
        outputPath: 'replicationServersSecurityGroupsIDs',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          tags: this.__input.tags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationConfigurationTemplate.replicationServersSecurityGroupsIDs', props);
    return resource.getResponseField('replicationServersSecurityGroupsIDs') as unknown as string[];
  }

  public get stagingAreaSubnetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.CreateReplicationConfigurationTemplate.stagingAreaSubnetId'),
        outputPath: 'stagingAreaSubnetId',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          tags: this.__input.tags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationConfigurationTemplate.stagingAreaSubnetId', props);
    return resource.getResponseField('stagingAreaSubnetId') as unknown as string;
  }

  public get stagingAreaTags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.CreateReplicationConfigurationTemplate.stagingAreaTags'),
        outputPath: 'stagingAreaTags',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          tags: this.__input.tags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationConfigurationTemplate.stagingAreaTags', props);
    return resource.getResponseField('stagingAreaTags') as unknown as Record<string, string>;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.CreateReplicationConfigurationTemplate.tags'),
        outputPath: 'tags',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          tags: this.__input.tags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationConfigurationTemplate.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get useDedicatedReplicationServer(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.CreateReplicationConfigurationTemplate.useDedicatedReplicationServer'),
        outputPath: 'useDedicatedReplicationServer',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          tags: this.__input.tags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationConfigurationTemplate.useDedicatedReplicationServer', props);
    return resource.getResponseField('useDedicatedReplicationServer') as unknown as boolean;
  }

}

export class MgnResponsesDescribeJobLogItems {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnDescribeJobLogItemsRequest) {
  }

  public get items(): shapes.MgnJobLog[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobLogItems',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DescribeJobLogItems.items'),
        outputPath: 'items',
        parameters: {
          jobID: this.__input.jobID,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobLogItems.items', props);
    return resource.getResponseField('items') as unknown as shapes.MgnJobLog[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobLogItems',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DescribeJobLogItems.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          jobID: this.__input.jobID,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobLogItems.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class MgnResponsesDescribeJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnDescribeJobsRequest) {
  }

  public get items(): shapes.MgnJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobs',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DescribeJobs.items'),
        outputPath: 'items',
        parameters: {
          filters: {
            fromDate: this.__input.filters.fromDate,
            jobIDs: this.__input.filters.jobIDs,
            toDate: this.__input.filters.toDate,
          },
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobs.items', props);
    return resource.getResponseField('items') as unknown as shapes.MgnJob[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobs',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DescribeJobs.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          filters: {
            fromDate: this.__input.filters.fromDate,
            jobIDs: this.__input.filters.jobIDs,
            toDate: this.__input.filters.toDate,
          },
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class MgnResponsesDescribeReplicationConfigurationTemplates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnDescribeReplicationConfigurationTemplatesRequest) {
  }

  public get items(): shapes.MgnReplicationConfigurationTemplate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReplicationConfigurationTemplates',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DescribeReplicationConfigurationTemplates.items'),
        outputPath: 'items',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          replicationConfigurationTemplateIDs: this.__input.replicationConfigurationTemplateIDs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReplicationConfigurationTemplates.items', props);
    return resource.getResponseField('items') as unknown as shapes.MgnReplicationConfigurationTemplate[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReplicationConfigurationTemplates',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DescribeReplicationConfigurationTemplates.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          replicationConfigurationTemplateIDs: this.__input.replicationConfigurationTemplateIDs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReplicationConfigurationTemplates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class MgnResponsesDescribeSourceServers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnDescribeSourceServersRequest) {
  }

  public get items(): shapes.MgnSourceServer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSourceServers',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DescribeSourceServers.items'),
        outputPath: 'items',
        parameters: {
          filters: {
            isArchived: this.__input.filters.isArchived,
            sourceServerIDs: this.__input.filters.sourceServerIDs,
          },
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSourceServers.items', props);
    return resource.getResponseField('items') as unknown as shapes.MgnSourceServer[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSourceServers',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DescribeSourceServers.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          filters: {
            isArchived: this.__input.filters.isArchived,
            sourceServerIDs: this.__input.filters.sourceServerIDs,
          },
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSourceServers.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class MgnResponsesDisconnectFromService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnDisconnectFromServiceRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.arn'),
        outputPath: 'arn',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get dataReplicationInfo(): MgnResponsesDisconnectFromServiceDataReplicationInfo {
    return new MgnResponsesDisconnectFromServiceDataReplicationInfo(this.__scope, this.__resources, this.__input);
  }

  public get isArchived(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.isArchived'),
        outputPath: 'isArchived',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.isArchived', props);
    return resource.getResponseField('isArchived') as unknown as boolean;
  }

  public get launchedInstance(): MgnResponsesDisconnectFromServiceLaunchedInstance {
    return new MgnResponsesDisconnectFromServiceLaunchedInstance(this.__scope, this.__resources, this.__input);
  }

  public get lifeCycle(): MgnResponsesDisconnectFromServiceLifeCycle {
    return new MgnResponsesDisconnectFromServiceLifeCycle(this.__scope, this.__resources, this.__input);
  }

  public get sourceProperties(): MgnResponsesDisconnectFromServiceSourceProperties {
    return new MgnResponsesDisconnectFromServiceSourceProperties(this.__scope, this.__resources, this.__input);
  }

  public get sourceServerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.sourceServerID'),
        outputPath: 'sourceServerID',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.sourceServerID', props);
    return resource.getResponseField('sourceServerID') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.tags'),
        outputPath: 'tags',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class MgnResponsesDisconnectFromServiceDataReplicationInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnDisconnectFromServiceRequest) {
  }

  public get dataReplicationError(): MgnResponsesDisconnectFromServiceDataReplicationInfoDataReplicationError {
    return new MgnResponsesDisconnectFromServiceDataReplicationInfoDataReplicationError(this.__scope, this.__resources, this.__input);
  }

  public get dataReplicationInitiation(): MgnResponsesDisconnectFromServiceDataReplicationInfoDataReplicationInitiation {
    return new MgnResponsesDisconnectFromServiceDataReplicationInfoDataReplicationInitiation(this.__scope, this.__resources, this.__input);
  }

  public get dataReplicationState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.dataReplicationInfo.dataReplicationState'),
        outputPath: 'dataReplicationInfo.dataReplicationState',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.dataReplicationInfo.dataReplicationState', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationState') as unknown as string;
  }

  public get etaDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.dataReplicationInfo.etaDateTime'),
        outputPath: 'dataReplicationInfo.etaDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.dataReplicationInfo.etaDateTime', props);
    return resource.getResponseField('dataReplicationInfo.etaDateTime') as unknown as string;
  }

  public get lagDuration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.dataReplicationInfo.lagDuration'),
        outputPath: 'dataReplicationInfo.lagDuration',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.dataReplicationInfo.lagDuration', props);
    return resource.getResponseField('dataReplicationInfo.lagDuration') as unknown as string;
  }

  public get replicatedDisks(): shapes.MgnDataReplicationInfoReplicatedDisk[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.dataReplicationInfo.replicatedDisks'),
        outputPath: 'dataReplicationInfo.replicatedDisks',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.dataReplicationInfo.replicatedDisks', props);
    return resource.getResponseField('dataReplicationInfo.replicatedDisks') as unknown as shapes.MgnDataReplicationInfoReplicatedDisk[];
  }

}

export class MgnResponsesDisconnectFromServiceDataReplicationInfoDataReplicationError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnDisconnectFromServiceRequest) {
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.dataReplicationInfo.dataReplicationError.error'),
        outputPath: 'dataReplicationInfo.dataReplicationError.error',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.dataReplicationInfo.dataReplicationError.error', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationError.error') as unknown as string;
  }

  public get rawError(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.dataReplicationInfo.dataReplicationError.rawError'),
        outputPath: 'dataReplicationInfo.dataReplicationError.rawError',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.dataReplicationInfo.dataReplicationError.rawError', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationError.rawError') as unknown as string;
  }

}

export class MgnResponsesDisconnectFromServiceDataReplicationInfoDataReplicationInitiation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnDisconnectFromServiceRequest) {
  }

  public get nextAttemptDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.dataReplicationInfo.dataReplicationInitiation.nextAttemptDateTime'),
        outputPath: 'dataReplicationInfo.dataReplicationInitiation.nextAttemptDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.dataReplicationInfo.dataReplicationInitiation.nextAttemptDateTime', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationInitiation.nextAttemptDateTime') as unknown as string;
  }

  public get startDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.dataReplicationInfo.dataReplicationInitiation.startDateTime'),
        outputPath: 'dataReplicationInfo.dataReplicationInitiation.startDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.dataReplicationInfo.dataReplicationInitiation.startDateTime', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationInitiation.startDateTime') as unknown as string;
  }

  public get steps(): shapes.MgnDataReplicationInitiationStep[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.dataReplicationInfo.dataReplicationInitiation.steps'),
        outputPath: 'dataReplicationInfo.dataReplicationInitiation.steps',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.dataReplicationInfo.dataReplicationInitiation.steps', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationInitiation.steps') as unknown as shapes.MgnDataReplicationInitiationStep[];
  }

}

export class MgnResponsesDisconnectFromServiceLaunchedInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnDisconnectFromServiceRequest) {
  }

  public get ec2InstanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.launchedInstance.ec2InstanceID'),
        outputPath: 'launchedInstance.ec2InstanceID',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.launchedInstance.ec2InstanceID', props);
    return resource.getResponseField('launchedInstance.ec2InstanceID') as unknown as string;
  }

  public get firstBoot(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.launchedInstance.firstBoot'),
        outputPath: 'launchedInstance.firstBoot',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.launchedInstance.firstBoot', props);
    return resource.getResponseField('launchedInstance.firstBoot') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.launchedInstance.jobID'),
        outputPath: 'launchedInstance.jobID',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.launchedInstance.jobID', props);
    return resource.getResponseField('launchedInstance.jobID') as unknown as string;
  }

}

export class MgnResponsesDisconnectFromServiceLifeCycle {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnDisconnectFromServiceRequest) {
  }

  public get addedToServiceDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.lifeCycle.addedToServiceDateTime'),
        outputPath: 'lifeCycle.addedToServiceDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.lifeCycle.addedToServiceDateTime', props);
    return resource.getResponseField('lifeCycle.addedToServiceDateTime') as unknown as string;
  }

  public get elapsedReplicationDuration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.lifeCycle.elapsedReplicationDuration'),
        outputPath: 'lifeCycle.elapsedReplicationDuration',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.lifeCycle.elapsedReplicationDuration', props);
    return resource.getResponseField('lifeCycle.elapsedReplicationDuration') as unknown as string;
  }

  public get firstByteDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.lifeCycle.firstByteDateTime'),
        outputPath: 'lifeCycle.firstByteDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.lifeCycle.firstByteDateTime', props);
    return resource.getResponseField('lifeCycle.firstByteDateTime') as unknown as string;
  }

  public get lastCutover(): MgnResponsesDisconnectFromServiceLifeCycleLastCutover {
    return new MgnResponsesDisconnectFromServiceLifeCycleLastCutover(this.__scope, this.__resources, this.__input);
  }

  public get lastSeenByServiceDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.lifeCycle.lastSeenByServiceDateTime'),
        outputPath: 'lifeCycle.lastSeenByServiceDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.lifeCycle.lastSeenByServiceDateTime', props);
    return resource.getResponseField('lifeCycle.lastSeenByServiceDateTime') as unknown as string;
  }

  public get lastTest(): MgnResponsesDisconnectFromServiceLifeCycleLastTest {
    return new MgnResponsesDisconnectFromServiceLifeCycleLastTest(this.__scope, this.__resources, this.__input);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.lifeCycle.state'),
        outputPath: 'lifeCycle.state',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.lifeCycle.state', props);
    return resource.getResponseField('lifeCycle.state') as unknown as string;
  }

}

export class MgnResponsesDisconnectFromServiceLifeCycleLastCutover {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnDisconnectFromServiceRequest) {
  }

  public get finalized(): MgnResponsesDisconnectFromServiceLifeCycleLastCutoverFinalized {
    return new MgnResponsesDisconnectFromServiceLifeCycleLastCutoverFinalized(this.__scope, this.__resources, this.__input);
  }

  public get initiated(): MgnResponsesDisconnectFromServiceLifeCycleLastCutoverInitiated {
    return new MgnResponsesDisconnectFromServiceLifeCycleLastCutoverInitiated(this.__scope, this.__resources, this.__input);
  }

  public get reverted(): MgnResponsesDisconnectFromServiceLifeCycleLastCutoverReverted {
    return new MgnResponsesDisconnectFromServiceLifeCycleLastCutoverReverted(this.__scope, this.__resources, this.__input);
  }

}

export class MgnResponsesDisconnectFromServiceLifeCycleLastCutoverFinalized {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnDisconnectFromServiceRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.lifeCycle.lastCutover.finalized.apiCallDateTime'),
        outputPath: 'lifeCycle.lastCutover.finalized.apiCallDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.lifeCycle.lastCutover.finalized.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastCutover.finalized.apiCallDateTime') as unknown as string;
  }

}

export class MgnResponsesDisconnectFromServiceLifeCycleLastCutoverInitiated {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnDisconnectFromServiceRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.lifeCycle.lastCutover.initiated.apiCallDateTime'),
        outputPath: 'lifeCycle.lastCutover.initiated.apiCallDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.lifeCycle.lastCutover.initiated.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastCutover.initiated.apiCallDateTime') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.lifeCycle.lastCutover.initiated.jobID'),
        outputPath: 'lifeCycle.lastCutover.initiated.jobID',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.lifeCycle.lastCutover.initiated.jobID', props);
    return resource.getResponseField('lifeCycle.lastCutover.initiated.jobID') as unknown as string;
  }

}

export class MgnResponsesDisconnectFromServiceLifeCycleLastCutoverReverted {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnDisconnectFromServiceRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.lifeCycle.lastCutover.reverted.apiCallDateTime'),
        outputPath: 'lifeCycle.lastCutover.reverted.apiCallDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.lifeCycle.lastCutover.reverted.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastCutover.reverted.apiCallDateTime') as unknown as string;
  }

}

export class MgnResponsesDisconnectFromServiceLifeCycleLastTest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnDisconnectFromServiceRequest) {
  }

  public get finalized(): MgnResponsesDisconnectFromServiceLifeCycleLastTestFinalized {
    return new MgnResponsesDisconnectFromServiceLifeCycleLastTestFinalized(this.__scope, this.__resources, this.__input);
  }

  public get initiated(): MgnResponsesDisconnectFromServiceLifeCycleLastTestInitiated {
    return new MgnResponsesDisconnectFromServiceLifeCycleLastTestInitiated(this.__scope, this.__resources, this.__input);
  }

  public get reverted(): MgnResponsesDisconnectFromServiceLifeCycleLastTestReverted {
    return new MgnResponsesDisconnectFromServiceLifeCycleLastTestReverted(this.__scope, this.__resources, this.__input);
  }

}

export class MgnResponsesDisconnectFromServiceLifeCycleLastTestFinalized {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnDisconnectFromServiceRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.lifeCycle.lastTest.finalized.apiCallDateTime'),
        outputPath: 'lifeCycle.lastTest.finalized.apiCallDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.lifeCycle.lastTest.finalized.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastTest.finalized.apiCallDateTime') as unknown as string;
  }

}

export class MgnResponsesDisconnectFromServiceLifeCycleLastTestInitiated {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnDisconnectFromServiceRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.lifeCycle.lastTest.initiated.apiCallDateTime'),
        outputPath: 'lifeCycle.lastTest.initiated.apiCallDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.lifeCycle.lastTest.initiated.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastTest.initiated.apiCallDateTime') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.lifeCycle.lastTest.initiated.jobID'),
        outputPath: 'lifeCycle.lastTest.initiated.jobID',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.lifeCycle.lastTest.initiated.jobID', props);
    return resource.getResponseField('lifeCycle.lastTest.initiated.jobID') as unknown as string;
  }

}

export class MgnResponsesDisconnectFromServiceLifeCycleLastTestReverted {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnDisconnectFromServiceRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.lifeCycle.lastTest.reverted.apiCallDateTime'),
        outputPath: 'lifeCycle.lastTest.reverted.apiCallDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.lifeCycle.lastTest.reverted.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastTest.reverted.apiCallDateTime') as unknown as string;
  }

}

export class MgnResponsesDisconnectFromServiceSourceProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnDisconnectFromServiceRequest) {
  }

  public get cpus(): shapes.MgnCpu[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.sourceProperties.cpus'),
        outputPath: 'sourceProperties.cpus',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.sourceProperties.cpus', props);
    return resource.getResponseField('sourceProperties.cpus') as unknown as shapes.MgnCpu[];
  }

  public get disks(): shapes.MgnDisk[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.sourceProperties.disks'),
        outputPath: 'sourceProperties.disks',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.sourceProperties.disks', props);
    return resource.getResponseField('sourceProperties.disks') as unknown as shapes.MgnDisk[];
  }

  public get identificationHints(): MgnResponsesDisconnectFromServiceSourcePropertiesIdentificationHints {
    return new MgnResponsesDisconnectFromServiceSourcePropertiesIdentificationHints(this.__scope, this.__resources, this.__input);
  }

  public get lastUpdatedDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.sourceProperties.lastUpdatedDateTime'),
        outputPath: 'sourceProperties.lastUpdatedDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.sourceProperties.lastUpdatedDateTime', props);
    return resource.getResponseField('sourceProperties.lastUpdatedDateTime') as unknown as string;
  }

  public get networkInterfaces(): shapes.MgnNetworkInterface[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.sourceProperties.networkInterfaces'),
        outputPath: 'sourceProperties.networkInterfaces',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.sourceProperties.networkInterfaces', props);
    return resource.getResponseField('sourceProperties.networkInterfaces') as unknown as shapes.MgnNetworkInterface[];
  }

  public get os(): MgnResponsesDisconnectFromServiceSourcePropertiesOs {
    return new MgnResponsesDisconnectFromServiceSourcePropertiesOs(this.__scope, this.__resources, this.__input);
  }

  public get ramBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.sourceProperties.ramBytes'),
        outputPath: 'sourceProperties.ramBytes',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.sourceProperties.ramBytes', props);
    return resource.getResponseField('sourceProperties.ramBytes') as unknown as number;
  }

  public get recommendedInstanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.sourceProperties.recommendedInstanceType'),
        outputPath: 'sourceProperties.recommendedInstanceType',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.sourceProperties.recommendedInstanceType', props);
    return resource.getResponseField('sourceProperties.recommendedInstanceType') as unknown as string;
  }

}

export class MgnResponsesDisconnectFromServiceSourcePropertiesIdentificationHints {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnDisconnectFromServiceRequest) {
  }

  public get awsInstanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.sourceProperties.identificationHints.awsInstanceID'),
        outputPath: 'sourceProperties.identificationHints.awsInstanceID',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.sourceProperties.identificationHints.awsInstanceID', props);
    return resource.getResponseField('sourceProperties.identificationHints.awsInstanceID') as unknown as string;
  }

  public get fqdn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.sourceProperties.identificationHints.fqdn'),
        outputPath: 'sourceProperties.identificationHints.fqdn',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.sourceProperties.identificationHints.fqdn', props);
    return resource.getResponseField('sourceProperties.identificationHints.fqdn') as unknown as string;
  }

  public get hostname(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.sourceProperties.identificationHints.hostname'),
        outputPath: 'sourceProperties.identificationHints.hostname',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.sourceProperties.identificationHints.hostname', props);
    return resource.getResponseField('sourceProperties.identificationHints.hostname') as unknown as string;
  }

  public get vmWareUuid(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.sourceProperties.identificationHints.vmWareUuid'),
        outputPath: 'sourceProperties.identificationHints.vmWareUuid',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.sourceProperties.identificationHints.vmWareUuid', props);
    return resource.getResponseField('sourceProperties.identificationHints.vmWareUuid') as unknown as string;
  }

}

export class MgnResponsesDisconnectFromServiceSourcePropertiesOs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnDisconnectFromServiceRequest) {
  }

  public get fullString(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectFromService',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.DisconnectFromService.sourceProperties.os.fullString'),
        outputPath: 'sourceProperties.os.fullString',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisconnectFromService.sourceProperties.os.fullString', props);
    return resource.getResponseField('sourceProperties.os.fullString') as unknown as string;
  }

}

export class MgnResponsesFinalizeCutover {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnFinalizeCutoverRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.arn'),
        outputPath: 'arn',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get dataReplicationInfo(): MgnResponsesFinalizeCutoverDataReplicationInfo {
    return new MgnResponsesFinalizeCutoverDataReplicationInfo(this.__scope, this.__resources, this.__input);
  }

  public get isArchived(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.isArchived'),
        outputPath: 'isArchived',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.isArchived', props);
    return resource.getResponseField('isArchived') as unknown as boolean;
  }

  public get launchedInstance(): MgnResponsesFinalizeCutoverLaunchedInstance {
    return new MgnResponsesFinalizeCutoverLaunchedInstance(this.__scope, this.__resources, this.__input);
  }

  public get lifeCycle(): MgnResponsesFinalizeCutoverLifeCycle {
    return new MgnResponsesFinalizeCutoverLifeCycle(this.__scope, this.__resources, this.__input);
  }

  public get sourceProperties(): MgnResponsesFinalizeCutoverSourceProperties {
    return new MgnResponsesFinalizeCutoverSourceProperties(this.__scope, this.__resources, this.__input);
  }

  public get sourceServerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.sourceServerID'),
        outputPath: 'sourceServerID',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.sourceServerID', props);
    return resource.getResponseField('sourceServerID') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.tags'),
        outputPath: 'tags',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class MgnResponsesFinalizeCutoverDataReplicationInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnFinalizeCutoverRequest) {
  }

  public get dataReplicationError(): MgnResponsesFinalizeCutoverDataReplicationInfoDataReplicationError {
    return new MgnResponsesFinalizeCutoverDataReplicationInfoDataReplicationError(this.__scope, this.__resources, this.__input);
  }

  public get dataReplicationInitiation(): MgnResponsesFinalizeCutoverDataReplicationInfoDataReplicationInitiation {
    return new MgnResponsesFinalizeCutoverDataReplicationInfoDataReplicationInitiation(this.__scope, this.__resources, this.__input);
  }

  public get dataReplicationState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.dataReplicationInfo.dataReplicationState'),
        outputPath: 'dataReplicationInfo.dataReplicationState',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.dataReplicationInfo.dataReplicationState', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationState') as unknown as string;
  }

  public get etaDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.dataReplicationInfo.etaDateTime'),
        outputPath: 'dataReplicationInfo.etaDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.dataReplicationInfo.etaDateTime', props);
    return resource.getResponseField('dataReplicationInfo.etaDateTime') as unknown as string;
  }

  public get lagDuration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.dataReplicationInfo.lagDuration'),
        outputPath: 'dataReplicationInfo.lagDuration',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.dataReplicationInfo.lagDuration', props);
    return resource.getResponseField('dataReplicationInfo.lagDuration') as unknown as string;
  }

  public get replicatedDisks(): shapes.MgnDataReplicationInfoReplicatedDisk[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.dataReplicationInfo.replicatedDisks'),
        outputPath: 'dataReplicationInfo.replicatedDisks',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.dataReplicationInfo.replicatedDisks', props);
    return resource.getResponseField('dataReplicationInfo.replicatedDisks') as unknown as shapes.MgnDataReplicationInfoReplicatedDisk[];
  }

}

export class MgnResponsesFinalizeCutoverDataReplicationInfoDataReplicationError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnFinalizeCutoverRequest) {
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.dataReplicationInfo.dataReplicationError.error'),
        outputPath: 'dataReplicationInfo.dataReplicationError.error',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.dataReplicationInfo.dataReplicationError.error', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationError.error') as unknown as string;
  }

  public get rawError(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.dataReplicationInfo.dataReplicationError.rawError'),
        outputPath: 'dataReplicationInfo.dataReplicationError.rawError',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.dataReplicationInfo.dataReplicationError.rawError', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationError.rawError') as unknown as string;
  }

}

export class MgnResponsesFinalizeCutoverDataReplicationInfoDataReplicationInitiation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnFinalizeCutoverRequest) {
  }

  public get nextAttemptDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.dataReplicationInfo.dataReplicationInitiation.nextAttemptDateTime'),
        outputPath: 'dataReplicationInfo.dataReplicationInitiation.nextAttemptDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.dataReplicationInfo.dataReplicationInitiation.nextAttemptDateTime', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationInitiation.nextAttemptDateTime') as unknown as string;
  }

  public get startDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.dataReplicationInfo.dataReplicationInitiation.startDateTime'),
        outputPath: 'dataReplicationInfo.dataReplicationInitiation.startDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.dataReplicationInfo.dataReplicationInitiation.startDateTime', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationInitiation.startDateTime') as unknown as string;
  }

  public get steps(): shapes.MgnDataReplicationInitiationStep[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.dataReplicationInfo.dataReplicationInitiation.steps'),
        outputPath: 'dataReplicationInfo.dataReplicationInitiation.steps',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.dataReplicationInfo.dataReplicationInitiation.steps', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationInitiation.steps') as unknown as shapes.MgnDataReplicationInitiationStep[];
  }

}

export class MgnResponsesFinalizeCutoverLaunchedInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnFinalizeCutoverRequest) {
  }

  public get ec2InstanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.launchedInstance.ec2InstanceID'),
        outputPath: 'launchedInstance.ec2InstanceID',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.launchedInstance.ec2InstanceID', props);
    return resource.getResponseField('launchedInstance.ec2InstanceID') as unknown as string;
  }

  public get firstBoot(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.launchedInstance.firstBoot'),
        outputPath: 'launchedInstance.firstBoot',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.launchedInstance.firstBoot', props);
    return resource.getResponseField('launchedInstance.firstBoot') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.launchedInstance.jobID'),
        outputPath: 'launchedInstance.jobID',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.launchedInstance.jobID', props);
    return resource.getResponseField('launchedInstance.jobID') as unknown as string;
  }

}

export class MgnResponsesFinalizeCutoverLifeCycle {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnFinalizeCutoverRequest) {
  }

  public get addedToServiceDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.lifeCycle.addedToServiceDateTime'),
        outputPath: 'lifeCycle.addedToServiceDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.lifeCycle.addedToServiceDateTime', props);
    return resource.getResponseField('lifeCycle.addedToServiceDateTime') as unknown as string;
  }

  public get elapsedReplicationDuration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.lifeCycle.elapsedReplicationDuration'),
        outputPath: 'lifeCycle.elapsedReplicationDuration',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.lifeCycle.elapsedReplicationDuration', props);
    return resource.getResponseField('lifeCycle.elapsedReplicationDuration') as unknown as string;
  }

  public get firstByteDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.lifeCycle.firstByteDateTime'),
        outputPath: 'lifeCycle.firstByteDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.lifeCycle.firstByteDateTime', props);
    return resource.getResponseField('lifeCycle.firstByteDateTime') as unknown as string;
  }

  public get lastCutover(): MgnResponsesFinalizeCutoverLifeCycleLastCutover {
    return new MgnResponsesFinalizeCutoverLifeCycleLastCutover(this.__scope, this.__resources, this.__input);
  }

  public get lastSeenByServiceDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.lifeCycle.lastSeenByServiceDateTime'),
        outputPath: 'lifeCycle.lastSeenByServiceDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.lifeCycle.lastSeenByServiceDateTime', props);
    return resource.getResponseField('lifeCycle.lastSeenByServiceDateTime') as unknown as string;
  }

  public get lastTest(): MgnResponsesFinalizeCutoverLifeCycleLastTest {
    return new MgnResponsesFinalizeCutoverLifeCycleLastTest(this.__scope, this.__resources, this.__input);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.lifeCycle.state'),
        outputPath: 'lifeCycle.state',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.lifeCycle.state', props);
    return resource.getResponseField('lifeCycle.state') as unknown as string;
  }

}

export class MgnResponsesFinalizeCutoverLifeCycleLastCutover {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnFinalizeCutoverRequest) {
  }

  public get finalized(): MgnResponsesFinalizeCutoverLifeCycleLastCutoverFinalized {
    return new MgnResponsesFinalizeCutoverLifeCycleLastCutoverFinalized(this.__scope, this.__resources, this.__input);
  }

  public get initiated(): MgnResponsesFinalizeCutoverLifeCycleLastCutoverInitiated {
    return new MgnResponsesFinalizeCutoverLifeCycleLastCutoverInitiated(this.__scope, this.__resources, this.__input);
  }

  public get reverted(): MgnResponsesFinalizeCutoverLifeCycleLastCutoverReverted {
    return new MgnResponsesFinalizeCutoverLifeCycleLastCutoverReverted(this.__scope, this.__resources, this.__input);
  }

}

export class MgnResponsesFinalizeCutoverLifeCycleLastCutoverFinalized {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnFinalizeCutoverRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.lifeCycle.lastCutover.finalized.apiCallDateTime'),
        outputPath: 'lifeCycle.lastCutover.finalized.apiCallDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.lifeCycle.lastCutover.finalized.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastCutover.finalized.apiCallDateTime') as unknown as string;
  }

}

export class MgnResponsesFinalizeCutoverLifeCycleLastCutoverInitiated {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnFinalizeCutoverRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.lifeCycle.lastCutover.initiated.apiCallDateTime'),
        outputPath: 'lifeCycle.lastCutover.initiated.apiCallDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.lifeCycle.lastCutover.initiated.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastCutover.initiated.apiCallDateTime') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.lifeCycle.lastCutover.initiated.jobID'),
        outputPath: 'lifeCycle.lastCutover.initiated.jobID',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.lifeCycle.lastCutover.initiated.jobID', props);
    return resource.getResponseField('lifeCycle.lastCutover.initiated.jobID') as unknown as string;
  }

}

export class MgnResponsesFinalizeCutoverLifeCycleLastCutoverReverted {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnFinalizeCutoverRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.lifeCycle.lastCutover.reverted.apiCallDateTime'),
        outputPath: 'lifeCycle.lastCutover.reverted.apiCallDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.lifeCycle.lastCutover.reverted.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastCutover.reverted.apiCallDateTime') as unknown as string;
  }

}

export class MgnResponsesFinalizeCutoverLifeCycleLastTest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnFinalizeCutoverRequest) {
  }

  public get finalized(): MgnResponsesFinalizeCutoverLifeCycleLastTestFinalized {
    return new MgnResponsesFinalizeCutoverLifeCycleLastTestFinalized(this.__scope, this.__resources, this.__input);
  }

  public get initiated(): MgnResponsesFinalizeCutoverLifeCycleLastTestInitiated {
    return new MgnResponsesFinalizeCutoverLifeCycleLastTestInitiated(this.__scope, this.__resources, this.__input);
  }

  public get reverted(): MgnResponsesFinalizeCutoverLifeCycleLastTestReverted {
    return new MgnResponsesFinalizeCutoverLifeCycleLastTestReverted(this.__scope, this.__resources, this.__input);
  }

}

export class MgnResponsesFinalizeCutoverLifeCycleLastTestFinalized {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnFinalizeCutoverRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.lifeCycle.lastTest.finalized.apiCallDateTime'),
        outputPath: 'lifeCycle.lastTest.finalized.apiCallDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.lifeCycle.lastTest.finalized.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastTest.finalized.apiCallDateTime') as unknown as string;
  }

}

export class MgnResponsesFinalizeCutoverLifeCycleLastTestInitiated {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnFinalizeCutoverRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.lifeCycle.lastTest.initiated.apiCallDateTime'),
        outputPath: 'lifeCycle.lastTest.initiated.apiCallDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.lifeCycle.lastTest.initiated.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastTest.initiated.apiCallDateTime') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.lifeCycle.lastTest.initiated.jobID'),
        outputPath: 'lifeCycle.lastTest.initiated.jobID',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.lifeCycle.lastTest.initiated.jobID', props);
    return resource.getResponseField('lifeCycle.lastTest.initiated.jobID') as unknown as string;
  }

}

export class MgnResponsesFinalizeCutoverLifeCycleLastTestReverted {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnFinalizeCutoverRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.lifeCycle.lastTest.reverted.apiCallDateTime'),
        outputPath: 'lifeCycle.lastTest.reverted.apiCallDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.lifeCycle.lastTest.reverted.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastTest.reverted.apiCallDateTime') as unknown as string;
  }

}

export class MgnResponsesFinalizeCutoverSourceProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnFinalizeCutoverRequest) {
  }

  public get cpus(): shapes.MgnCpu[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.sourceProperties.cpus'),
        outputPath: 'sourceProperties.cpus',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.sourceProperties.cpus', props);
    return resource.getResponseField('sourceProperties.cpus') as unknown as shapes.MgnCpu[];
  }

  public get disks(): shapes.MgnDisk[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.sourceProperties.disks'),
        outputPath: 'sourceProperties.disks',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.sourceProperties.disks', props);
    return resource.getResponseField('sourceProperties.disks') as unknown as shapes.MgnDisk[];
  }

  public get identificationHints(): MgnResponsesFinalizeCutoverSourcePropertiesIdentificationHints {
    return new MgnResponsesFinalizeCutoverSourcePropertiesIdentificationHints(this.__scope, this.__resources, this.__input);
  }

  public get lastUpdatedDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.sourceProperties.lastUpdatedDateTime'),
        outputPath: 'sourceProperties.lastUpdatedDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.sourceProperties.lastUpdatedDateTime', props);
    return resource.getResponseField('sourceProperties.lastUpdatedDateTime') as unknown as string;
  }

  public get networkInterfaces(): shapes.MgnNetworkInterface[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.sourceProperties.networkInterfaces'),
        outputPath: 'sourceProperties.networkInterfaces',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.sourceProperties.networkInterfaces', props);
    return resource.getResponseField('sourceProperties.networkInterfaces') as unknown as shapes.MgnNetworkInterface[];
  }

  public get os(): MgnResponsesFinalizeCutoverSourcePropertiesOs {
    return new MgnResponsesFinalizeCutoverSourcePropertiesOs(this.__scope, this.__resources, this.__input);
  }

  public get ramBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.sourceProperties.ramBytes'),
        outputPath: 'sourceProperties.ramBytes',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.sourceProperties.ramBytes', props);
    return resource.getResponseField('sourceProperties.ramBytes') as unknown as number;
  }

  public get recommendedInstanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.sourceProperties.recommendedInstanceType'),
        outputPath: 'sourceProperties.recommendedInstanceType',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.sourceProperties.recommendedInstanceType', props);
    return resource.getResponseField('sourceProperties.recommendedInstanceType') as unknown as string;
  }

}

export class MgnResponsesFinalizeCutoverSourcePropertiesIdentificationHints {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnFinalizeCutoverRequest) {
  }

  public get awsInstanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.sourceProperties.identificationHints.awsInstanceID'),
        outputPath: 'sourceProperties.identificationHints.awsInstanceID',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.sourceProperties.identificationHints.awsInstanceID', props);
    return resource.getResponseField('sourceProperties.identificationHints.awsInstanceID') as unknown as string;
  }

  public get fqdn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.sourceProperties.identificationHints.fqdn'),
        outputPath: 'sourceProperties.identificationHints.fqdn',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.sourceProperties.identificationHints.fqdn', props);
    return resource.getResponseField('sourceProperties.identificationHints.fqdn') as unknown as string;
  }

  public get hostname(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.sourceProperties.identificationHints.hostname'),
        outputPath: 'sourceProperties.identificationHints.hostname',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.sourceProperties.identificationHints.hostname', props);
    return resource.getResponseField('sourceProperties.identificationHints.hostname') as unknown as string;
  }

  public get vmWareUuid(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.sourceProperties.identificationHints.vmWareUuid'),
        outputPath: 'sourceProperties.identificationHints.vmWareUuid',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.sourceProperties.identificationHints.vmWareUuid', props);
    return resource.getResponseField('sourceProperties.identificationHints.vmWareUuid') as unknown as string;
  }

}

export class MgnResponsesFinalizeCutoverSourcePropertiesOs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnFinalizeCutoverRequest) {
  }

  public get fullString(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'finalizeCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.FinalizeCutover.sourceProperties.os.fullString'),
        outputPath: 'sourceProperties.os.fullString',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FinalizeCutover.sourceProperties.os.fullString', props);
    return resource.getResponseField('sourceProperties.os.fullString') as unknown as string;
  }

}

export class MgnResponsesFetchLaunchConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnGetLaunchConfigurationRequest) {
  }

  public get copyPrivateIp(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.GetLaunchConfiguration.copyPrivateIp'),
        outputPath: 'copyPrivateIp',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchConfiguration.copyPrivateIp', props);
    return resource.getResponseField('copyPrivateIp') as unknown as boolean;
  }

  public get copyTags(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.GetLaunchConfiguration.copyTags'),
        outputPath: 'copyTags',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchConfiguration.copyTags', props);
    return resource.getResponseField('copyTags') as unknown as boolean;
  }

  public get ec2LaunchTemplateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.GetLaunchConfiguration.ec2LaunchTemplateID'),
        outputPath: 'ec2LaunchTemplateID',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchConfiguration.ec2LaunchTemplateID', props);
    return resource.getResponseField('ec2LaunchTemplateID') as unknown as string;
  }

  public get launchDisposition(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.GetLaunchConfiguration.launchDisposition'),
        outputPath: 'launchDisposition',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchConfiguration.launchDisposition', props);
    return resource.getResponseField('launchDisposition') as unknown as string;
  }

  public get licensing(): MgnResponsesFetchLaunchConfigurationLicensing {
    return new MgnResponsesFetchLaunchConfigurationLicensing(this.__scope, this.__resources, this.__input);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.GetLaunchConfiguration.name'),
        outputPath: 'name',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchConfiguration.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get sourceServerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.GetLaunchConfiguration.sourceServerID'),
        outputPath: 'sourceServerID',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchConfiguration.sourceServerID', props);
    return resource.getResponseField('sourceServerID') as unknown as string;
  }

  public get targetInstanceTypeRightSizingMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.GetLaunchConfiguration.targetInstanceTypeRightSizingMethod'),
        outputPath: 'targetInstanceTypeRightSizingMethod',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchConfiguration.targetInstanceTypeRightSizingMethod', props);
    return resource.getResponseField('targetInstanceTypeRightSizingMethod') as unknown as string;
  }

}

export class MgnResponsesFetchLaunchConfigurationLicensing {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnGetLaunchConfigurationRequest) {
  }

  public get osByol(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLaunchConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.GetLaunchConfiguration.licensing.osByol'),
        outputPath: 'licensing.osByol',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLaunchConfiguration.licensing.osByol', props);
    return resource.getResponseField('licensing.osByol') as unknown as boolean;
  }

}

export class MgnResponsesFetchReplicationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnGetReplicationConfigurationRequest) {
  }

  public get associateDefaultSecurityGroup(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.GetReplicationConfiguration.associateDefaultSecurityGroup'),
        outputPath: 'associateDefaultSecurityGroup',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReplicationConfiguration.associateDefaultSecurityGroup', props);
    return resource.getResponseField('associateDefaultSecurityGroup') as unknown as boolean;
  }

  public get bandwidthThrottling(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.GetReplicationConfiguration.bandwidthThrottling'),
        outputPath: 'bandwidthThrottling',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReplicationConfiguration.bandwidthThrottling', props);
    return resource.getResponseField('bandwidthThrottling') as unknown as number;
  }

  public get createPublicIp(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.GetReplicationConfiguration.createPublicIP'),
        outputPath: 'createPublicIP',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReplicationConfiguration.createPublicIP', props);
    return resource.getResponseField('createPublicIP') as unknown as boolean;
  }

  public get dataPlaneRouting(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.GetReplicationConfiguration.dataPlaneRouting'),
        outputPath: 'dataPlaneRouting',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReplicationConfiguration.dataPlaneRouting', props);
    return resource.getResponseField('dataPlaneRouting') as unknown as string;
  }

  public get defaultLargeStagingDiskType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.GetReplicationConfiguration.defaultLargeStagingDiskType'),
        outputPath: 'defaultLargeStagingDiskType',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReplicationConfiguration.defaultLargeStagingDiskType', props);
    return resource.getResponseField('defaultLargeStagingDiskType') as unknown as string;
  }

  public get ebsEncryption(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.GetReplicationConfiguration.ebsEncryption'),
        outputPath: 'ebsEncryption',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReplicationConfiguration.ebsEncryption', props);
    return resource.getResponseField('ebsEncryption') as unknown as string;
  }

  public get ebsEncryptionKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.GetReplicationConfiguration.ebsEncryptionKeyArn'),
        outputPath: 'ebsEncryptionKeyArn',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReplicationConfiguration.ebsEncryptionKeyArn', props);
    return resource.getResponseField('ebsEncryptionKeyArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.GetReplicationConfiguration.name'),
        outputPath: 'name',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReplicationConfiguration.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get replicatedDisks(): shapes.MgnReplicationConfigurationReplicatedDisk[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.GetReplicationConfiguration.replicatedDisks'),
        outputPath: 'replicatedDisks',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReplicationConfiguration.replicatedDisks', props);
    return resource.getResponseField('replicatedDisks') as unknown as shapes.MgnReplicationConfigurationReplicatedDisk[];
  }

  public get replicationServerInstanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.GetReplicationConfiguration.replicationServerInstanceType'),
        outputPath: 'replicationServerInstanceType',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReplicationConfiguration.replicationServerInstanceType', props);
    return resource.getResponseField('replicationServerInstanceType') as unknown as string;
  }

  public get replicationServersSecurityGroupsIDs(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.GetReplicationConfiguration.replicationServersSecurityGroupsIDs'),
        outputPath: 'replicationServersSecurityGroupsIDs',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReplicationConfiguration.replicationServersSecurityGroupsIDs', props);
    return resource.getResponseField('replicationServersSecurityGroupsIDs') as unknown as string[];
  }

  public get sourceServerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.GetReplicationConfiguration.sourceServerID'),
        outputPath: 'sourceServerID',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReplicationConfiguration.sourceServerID', props);
    return resource.getResponseField('sourceServerID') as unknown as string;
  }

  public get stagingAreaSubnetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.GetReplicationConfiguration.stagingAreaSubnetId'),
        outputPath: 'stagingAreaSubnetId',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReplicationConfiguration.stagingAreaSubnetId', props);
    return resource.getResponseField('stagingAreaSubnetId') as unknown as string;
  }

  public get stagingAreaTags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.GetReplicationConfiguration.stagingAreaTags'),
        outputPath: 'stagingAreaTags',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReplicationConfiguration.stagingAreaTags', props);
    return resource.getResponseField('stagingAreaTags') as unknown as Record<string, string>;
  }

  public get useDedicatedReplicationServer(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.GetReplicationConfiguration.useDedicatedReplicationServer'),
        outputPath: 'useDedicatedReplicationServer',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReplicationConfiguration.useDedicatedReplicationServer', props);
    return resource.getResponseField('useDedicatedReplicationServer') as unknown as boolean;
  }

}

export class MgnResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.ListTagsForResource.tags'),
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

export class MgnResponsesMarkAsArchived {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnMarkAsArchivedRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.arn'),
        outputPath: 'arn',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get dataReplicationInfo(): MgnResponsesMarkAsArchivedDataReplicationInfo {
    return new MgnResponsesMarkAsArchivedDataReplicationInfo(this.__scope, this.__resources, this.__input);
  }

  public get isArchived(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.isArchived'),
        outputPath: 'isArchived',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.isArchived', props);
    return resource.getResponseField('isArchived') as unknown as boolean;
  }

  public get launchedInstance(): MgnResponsesMarkAsArchivedLaunchedInstance {
    return new MgnResponsesMarkAsArchivedLaunchedInstance(this.__scope, this.__resources, this.__input);
  }

  public get lifeCycle(): MgnResponsesMarkAsArchivedLifeCycle {
    return new MgnResponsesMarkAsArchivedLifeCycle(this.__scope, this.__resources, this.__input);
  }

  public get sourceProperties(): MgnResponsesMarkAsArchivedSourceProperties {
    return new MgnResponsesMarkAsArchivedSourceProperties(this.__scope, this.__resources, this.__input);
  }

  public get sourceServerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.sourceServerID'),
        outputPath: 'sourceServerID',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.sourceServerID', props);
    return resource.getResponseField('sourceServerID') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.tags'),
        outputPath: 'tags',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class MgnResponsesMarkAsArchivedDataReplicationInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnMarkAsArchivedRequest) {
  }

  public get dataReplicationError(): MgnResponsesMarkAsArchivedDataReplicationInfoDataReplicationError {
    return new MgnResponsesMarkAsArchivedDataReplicationInfoDataReplicationError(this.__scope, this.__resources, this.__input);
  }

  public get dataReplicationInitiation(): MgnResponsesMarkAsArchivedDataReplicationInfoDataReplicationInitiation {
    return new MgnResponsesMarkAsArchivedDataReplicationInfoDataReplicationInitiation(this.__scope, this.__resources, this.__input);
  }

  public get dataReplicationState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.dataReplicationInfo.dataReplicationState'),
        outputPath: 'dataReplicationInfo.dataReplicationState',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.dataReplicationInfo.dataReplicationState', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationState') as unknown as string;
  }

  public get etaDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.dataReplicationInfo.etaDateTime'),
        outputPath: 'dataReplicationInfo.etaDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.dataReplicationInfo.etaDateTime', props);
    return resource.getResponseField('dataReplicationInfo.etaDateTime') as unknown as string;
  }

  public get lagDuration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.dataReplicationInfo.lagDuration'),
        outputPath: 'dataReplicationInfo.lagDuration',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.dataReplicationInfo.lagDuration', props);
    return resource.getResponseField('dataReplicationInfo.lagDuration') as unknown as string;
  }

  public get replicatedDisks(): shapes.MgnDataReplicationInfoReplicatedDisk[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.dataReplicationInfo.replicatedDisks'),
        outputPath: 'dataReplicationInfo.replicatedDisks',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.dataReplicationInfo.replicatedDisks', props);
    return resource.getResponseField('dataReplicationInfo.replicatedDisks') as unknown as shapes.MgnDataReplicationInfoReplicatedDisk[];
  }

}

export class MgnResponsesMarkAsArchivedDataReplicationInfoDataReplicationError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnMarkAsArchivedRequest) {
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.dataReplicationInfo.dataReplicationError.error'),
        outputPath: 'dataReplicationInfo.dataReplicationError.error',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.dataReplicationInfo.dataReplicationError.error', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationError.error') as unknown as string;
  }

  public get rawError(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.dataReplicationInfo.dataReplicationError.rawError'),
        outputPath: 'dataReplicationInfo.dataReplicationError.rawError',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.dataReplicationInfo.dataReplicationError.rawError', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationError.rawError') as unknown as string;
  }

}

export class MgnResponsesMarkAsArchivedDataReplicationInfoDataReplicationInitiation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnMarkAsArchivedRequest) {
  }

  public get nextAttemptDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.dataReplicationInfo.dataReplicationInitiation.nextAttemptDateTime'),
        outputPath: 'dataReplicationInfo.dataReplicationInitiation.nextAttemptDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.dataReplicationInfo.dataReplicationInitiation.nextAttemptDateTime', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationInitiation.nextAttemptDateTime') as unknown as string;
  }

  public get startDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.dataReplicationInfo.dataReplicationInitiation.startDateTime'),
        outputPath: 'dataReplicationInfo.dataReplicationInitiation.startDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.dataReplicationInfo.dataReplicationInitiation.startDateTime', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationInitiation.startDateTime') as unknown as string;
  }

  public get steps(): shapes.MgnDataReplicationInitiationStep[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.dataReplicationInfo.dataReplicationInitiation.steps'),
        outputPath: 'dataReplicationInfo.dataReplicationInitiation.steps',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.dataReplicationInfo.dataReplicationInitiation.steps', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationInitiation.steps') as unknown as shapes.MgnDataReplicationInitiationStep[];
  }

}

export class MgnResponsesMarkAsArchivedLaunchedInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnMarkAsArchivedRequest) {
  }

  public get ec2InstanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.launchedInstance.ec2InstanceID'),
        outputPath: 'launchedInstance.ec2InstanceID',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.launchedInstance.ec2InstanceID', props);
    return resource.getResponseField('launchedInstance.ec2InstanceID') as unknown as string;
  }

  public get firstBoot(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.launchedInstance.firstBoot'),
        outputPath: 'launchedInstance.firstBoot',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.launchedInstance.firstBoot', props);
    return resource.getResponseField('launchedInstance.firstBoot') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.launchedInstance.jobID'),
        outputPath: 'launchedInstance.jobID',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.launchedInstance.jobID', props);
    return resource.getResponseField('launchedInstance.jobID') as unknown as string;
  }

}

export class MgnResponsesMarkAsArchivedLifeCycle {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnMarkAsArchivedRequest) {
  }

  public get addedToServiceDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.lifeCycle.addedToServiceDateTime'),
        outputPath: 'lifeCycle.addedToServiceDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.lifeCycle.addedToServiceDateTime', props);
    return resource.getResponseField('lifeCycle.addedToServiceDateTime') as unknown as string;
  }

  public get elapsedReplicationDuration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.lifeCycle.elapsedReplicationDuration'),
        outputPath: 'lifeCycle.elapsedReplicationDuration',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.lifeCycle.elapsedReplicationDuration', props);
    return resource.getResponseField('lifeCycle.elapsedReplicationDuration') as unknown as string;
  }

  public get firstByteDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.lifeCycle.firstByteDateTime'),
        outputPath: 'lifeCycle.firstByteDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.lifeCycle.firstByteDateTime', props);
    return resource.getResponseField('lifeCycle.firstByteDateTime') as unknown as string;
  }

  public get lastCutover(): MgnResponsesMarkAsArchivedLifeCycleLastCutover {
    return new MgnResponsesMarkAsArchivedLifeCycleLastCutover(this.__scope, this.__resources, this.__input);
  }

  public get lastSeenByServiceDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.lifeCycle.lastSeenByServiceDateTime'),
        outputPath: 'lifeCycle.lastSeenByServiceDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.lifeCycle.lastSeenByServiceDateTime', props);
    return resource.getResponseField('lifeCycle.lastSeenByServiceDateTime') as unknown as string;
  }

  public get lastTest(): MgnResponsesMarkAsArchivedLifeCycleLastTest {
    return new MgnResponsesMarkAsArchivedLifeCycleLastTest(this.__scope, this.__resources, this.__input);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.lifeCycle.state'),
        outputPath: 'lifeCycle.state',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.lifeCycle.state', props);
    return resource.getResponseField('lifeCycle.state') as unknown as string;
  }

}

export class MgnResponsesMarkAsArchivedLifeCycleLastCutover {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnMarkAsArchivedRequest) {
  }

  public get finalized(): MgnResponsesMarkAsArchivedLifeCycleLastCutoverFinalized {
    return new MgnResponsesMarkAsArchivedLifeCycleLastCutoverFinalized(this.__scope, this.__resources, this.__input);
  }

  public get initiated(): MgnResponsesMarkAsArchivedLifeCycleLastCutoverInitiated {
    return new MgnResponsesMarkAsArchivedLifeCycleLastCutoverInitiated(this.__scope, this.__resources, this.__input);
  }

  public get reverted(): MgnResponsesMarkAsArchivedLifeCycleLastCutoverReverted {
    return new MgnResponsesMarkAsArchivedLifeCycleLastCutoverReverted(this.__scope, this.__resources, this.__input);
  }

}

export class MgnResponsesMarkAsArchivedLifeCycleLastCutoverFinalized {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnMarkAsArchivedRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.lifeCycle.lastCutover.finalized.apiCallDateTime'),
        outputPath: 'lifeCycle.lastCutover.finalized.apiCallDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.lifeCycle.lastCutover.finalized.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastCutover.finalized.apiCallDateTime') as unknown as string;
  }

}

export class MgnResponsesMarkAsArchivedLifeCycleLastCutoverInitiated {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnMarkAsArchivedRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.lifeCycle.lastCutover.initiated.apiCallDateTime'),
        outputPath: 'lifeCycle.lastCutover.initiated.apiCallDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.lifeCycle.lastCutover.initiated.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastCutover.initiated.apiCallDateTime') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.lifeCycle.lastCutover.initiated.jobID'),
        outputPath: 'lifeCycle.lastCutover.initiated.jobID',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.lifeCycle.lastCutover.initiated.jobID', props);
    return resource.getResponseField('lifeCycle.lastCutover.initiated.jobID') as unknown as string;
  }

}

export class MgnResponsesMarkAsArchivedLifeCycleLastCutoverReverted {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnMarkAsArchivedRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.lifeCycle.lastCutover.reverted.apiCallDateTime'),
        outputPath: 'lifeCycle.lastCutover.reverted.apiCallDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.lifeCycle.lastCutover.reverted.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastCutover.reverted.apiCallDateTime') as unknown as string;
  }

}

export class MgnResponsesMarkAsArchivedLifeCycleLastTest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnMarkAsArchivedRequest) {
  }

  public get finalized(): MgnResponsesMarkAsArchivedLifeCycleLastTestFinalized {
    return new MgnResponsesMarkAsArchivedLifeCycleLastTestFinalized(this.__scope, this.__resources, this.__input);
  }

  public get initiated(): MgnResponsesMarkAsArchivedLifeCycleLastTestInitiated {
    return new MgnResponsesMarkAsArchivedLifeCycleLastTestInitiated(this.__scope, this.__resources, this.__input);
  }

  public get reverted(): MgnResponsesMarkAsArchivedLifeCycleLastTestReverted {
    return new MgnResponsesMarkAsArchivedLifeCycleLastTestReverted(this.__scope, this.__resources, this.__input);
  }

}

export class MgnResponsesMarkAsArchivedLifeCycleLastTestFinalized {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnMarkAsArchivedRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.lifeCycle.lastTest.finalized.apiCallDateTime'),
        outputPath: 'lifeCycle.lastTest.finalized.apiCallDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.lifeCycle.lastTest.finalized.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastTest.finalized.apiCallDateTime') as unknown as string;
  }

}

export class MgnResponsesMarkAsArchivedLifeCycleLastTestInitiated {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnMarkAsArchivedRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.lifeCycle.lastTest.initiated.apiCallDateTime'),
        outputPath: 'lifeCycle.lastTest.initiated.apiCallDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.lifeCycle.lastTest.initiated.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastTest.initiated.apiCallDateTime') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.lifeCycle.lastTest.initiated.jobID'),
        outputPath: 'lifeCycle.lastTest.initiated.jobID',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.lifeCycle.lastTest.initiated.jobID', props);
    return resource.getResponseField('lifeCycle.lastTest.initiated.jobID') as unknown as string;
  }

}

export class MgnResponsesMarkAsArchivedLifeCycleLastTestReverted {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnMarkAsArchivedRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.lifeCycle.lastTest.reverted.apiCallDateTime'),
        outputPath: 'lifeCycle.lastTest.reverted.apiCallDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.lifeCycle.lastTest.reverted.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastTest.reverted.apiCallDateTime') as unknown as string;
  }

}

export class MgnResponsesMarkAsArchivedSourceProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnMarkAsArchivedRequest) {
  }

  public get cpus(): shapes.MgnCpu[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.sourceProperties.cpus'),
        outputPath: 'sourceProperties.cpus',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.sourceProperties.cpus', props);
    return resource.getResponseField('sourceProperties.cpus') as unknown as shapes.MgnCpu[];
  }

  public get disks(): shapes.MgnDisk[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.sourceProperties.disks'),
        outputPath: 'sourceProperties.disks',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.sourceProperties.disks', props);
    return resource.getResponseField('sourceProperties.disks') as unknown as shapes.MgnDisk[];
  }

  public get identificationHints(): MgnResponsesMarkAsArchivedSourcePropertiesIdentificationHints {
    return new MgnResponsesMarkAsArchivedSourcePropertiesIdentificationHints(this.__scope, this.__resources, this.__input);
  }

  public get lastUpdatedDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.sourceProperties.lastUpdatedDateTime'),
        outputPath: 'sourceProperties.lastUpdatedDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.sourceProperties.lastUpdatedDateTime', props);
    return resource.getResponseField('sourceProperties.lastUpdatedDateTime') as unknown as string;
  }

  public get networkInterfaces(): shapes.MgnNetworkInterface[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.sourceProperties.networkInterfaces'),
        outputPath: 'sourceProperties.networkInterfaces',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.sourceProperties.networkInterfaces', props);
    return resource.getResponseField('sourceProperties.networkInterfaces') as unknown as shapes.MgnNetworkInterface[];
  }

  public get os(): MgnResponsesMarkAsArchivedSourcePropertiesOs {
    return new MgnResponsesMarkAsArchivedSourcePropertiesOs(this.__scope, this.__resources, this.__input);
  }

  public get ramBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.sourceProperties.ramBytes'),
        outputPath: 'sourceProperties.ramBytes',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.sourceProperties.ramBytes', props);
    return resource.getResponseField('sourceProperties.ramBytes') as unknown as number;
  }

  public get recommendedInstanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.sourceProperties.recommendedInstanceType'),
        outputPath: 'sourceProperties.recommendedInstanceType',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.sourceProperties.recommendedInstanceType', props);
    return resource.getResponseField('sourceProperties.recommendedInstanceType') as unknown as string;
  }

}

export class MgnResponsesMarkAsArchivedSourcePropertiesIdentificationHints {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnMarkAsArchivedRequest) {
  }

  public get awsInstanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.sourceProperties.identificationHints.awsInstanceID'),
        outputPath: 'sourceProperties.identificationHints.awsInstanceID',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.sourceProperties.identificationHints.awsInstanceID', props);
    return resource.getResponseField('sourceProperties.identificationHints.awsInstanceID') as unknown as string;
  }

  public get fqdn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.sourceProperties.identificationHints.fqdn'),
        outputPath: 'sourceProperties.identificationHints.fqdn',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.sourceProperties.identificationHints.fqdn', props);
    return resource.getResponseField('sourceProperties.identificationHints.fqdn') as unknown as string;
  }

  public get hostname(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.sourceProperties.identificationHints.hostname'),
        outputPath: 'sourceProperties.identificationHints.hostname',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.sourceProperties.identificationHints.hostname', props);
    return resource.getResponseField('sourceProperties.identificationHints.hostname') as unknown as string;
  }

  public get vmWareUuid(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.sourceProperties.identificationHints.vmWareUuid'),
        outputPath: 'sourceProperties.identificationHints.vmWareUuid',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.sourceProperties.identificationHints.vmWareUuid', props);
    return resource.getResponseField('sourceProperties.identificationHints.vmWareUuid') as unknown as string;
  }

}

export class MgnResponsesMarkAsArchivedSourcePropertiesOs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnMarkAsArchivedRequest) {
  }

  public get fullString(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'markAsArchived',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.MarkAsArchived.sourceProperties.os.fullString'),
        outputPath: 'sourceProperties.os.fullString',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MarkAsArchived.sourceProperties.os.fullString', props);
    return resource.getResponseField('sourceProperties.os.fullString') as unknown as string;
  }

}

export class MgnResponsesRetryDataReplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnRetryDataReplicationRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.arn'),
        outputPath: 'arn',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get dataReplicationInfo(): MgnResponsesRetryDataReplicationDataReplicationInfo {
    return new MgnResponsesRetryDataReplicationDataReplicationInfo(this.__scope, this.__resources, this.__input);
  }

  public get isArchived(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.isArchived'),
        outputPath: 'isArchived',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.isArchived', props);
    return resource.getResponseField('isArchived') as unknown as boolean;
  }

  public get launchedInstance(): MgnResponsesRetryDataReplicationLaunchedInstance {
    return new MgnResponsesRetryDataReplicationLaunchedInstance(this.__scope, this.__resources, this.__input);
  }

  public get lifeCycle(): MgnResponsesRetryDataReplicationLifeCycle {
    return new MgnResponsesRetryDataReplicationLifeCycle(this.__scope, this.__resources, this.__input);
  }

  public get sourceProperties(): MgnResponsesRetryDataReplicationSourceProperties {
    return new MgnResponsesRetryDataReplicationSourceProperties(this.__scope, this.__resources, this.__input);
  }

  public get sourceServerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.sourceServerID'),
        outputPath: 'sourceServerID',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.sourceServerID', props);
    return resource.getResponseField('sourceServerID') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.tags'),
        outputPath: 'tags',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class MgnResponsesRetryDataReplicationDataReplicationInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnRetryDataReplicationRequest) {
  }

  public get dataReplicationError(): MgnResponsesRetryDataReplicationDataReplicationInfoDataReplicationError {
    return new MgnResponsesRetryDataReplicationDataReplicationInfoDataReplicationError(this.__scope, this.__resources, this.__input);
  }

  public get dataReplicationInitiation(): MgnResponsesRetryDataReplicationDataReplicationInfoDataReplicationInitiation {
    return new MgnResponsesRetryDataReplicationDataReplicationInfoDataReplicationInitiation(this.__scope, this.__resources, this.__input);
  }

  public get dataReplicationState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.dataReplicationInfo.dataReplicationState'),
        outputPath: 'dataReplicationInfo.dataReplicationState',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.dataReplicationInfo.dataReplicationState', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationState') as unknown as string;
  }

  public get etaDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.dataReplicationInfo.etaDateTime'),
        outputPath: 'dataReplicationInfo.etaDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.dataReplicationInfo.etaDateTime', props);
    return resource.getResponseField('dataReplicationInfo.etaDateTime') as unknown as string;
  }

  public get lagDuration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.dataReplicationInfo.lagDuration'),
        outputPath: 'dataReplicationInfo.lagDuration',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.dataReplicationInfo.lagDuration', props);
    return resource.getResponseField('dataReplicationInfo.lagDuration') as unknown as string;
  }

  public get replicatedDisks(): shapes.MgnDataReplicationInfoReplicatedDisk[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.dataReplicationInfo.replicatedDisks'),
        outputPath: 'dataReplicationInfo.replicatedDisks',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.dataReplicationInfo.replicatedDisks', props);
    return resource.getResponseField('dataReplicationInfo.replicatedDisks') as unknown as shapes.MgnDataReplicationInfoReplicatedDisk[];
  }

}

export class MgnResponsesRetryDataReplicationDataReplicationInfoDataReplicationError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnRetryDataReplicationRequest) {
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.dataReplicationInfo.dataReplicationError.error'),
        outputPath: 'dataReplicationInfo.dataReplicationError.error',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.dataReplicationInfo.dataReplicationError.error', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationError.error') as unknown as string;
  }

  public get rawError(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.dataReplicationInfo.dataReplicationError.rawError'),
        outputPath: 'dataReplicationInfo.dataReplicationError.rawError',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.dataReplicationInfo.dataReplicationError.rawError', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationError.rawError') as unknown as string;
  }

}

export class MgnResponsesRetryDataReplicationDataReplicationInfoDataReplicationInitiation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnRetryDataReplicationRequest) {
  }

  public get nextAttemptDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.dataReplicationInfo.dataReplicationInitiation.nextAttemptDateTime'),
        outputPath: 'dataReplicationInfo.dataReplicationInitiation.nextAttemptDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.dataReplicationInfo.dataReplicationInitiation.nextAttemptDateTime', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationInitiation.nextAttemptDateTime') as unknown as string;
  }

  public get startDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.dataReplicationInfo.dataReplicationInitiation.startDateTime'),
        outputPath: 'dataReplicationInfo.dataReplicationInitiation.startDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.dataReplicationInfo.dataReplicationInitiation.startDateTime', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationInitiation.startDateTime') as unknown as string;
  }

  public get steps(): shapes.MgnDataReplicationInitiationStep[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.dataReplicationInfo.dataReplicationInitiation.steps'),
        outputPath: 'dataReplicationInfo.dataReplicationInitiation.steps',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.dataReplicationInfo.dataReplicationInitiation.steps', props);
    return resource.getResponseField('dataReplicationInfo.dataReplicationInitiation.steps') as unknown as shapes.MgnDataReplicationInitiationStep[];
  }

}

export class MgnResponsesRetryDataReplicationLaunchedInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnRetryDataReplicationRequest) {
  }

  public get ec2InstanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.launchedInstance.ec2InstanceID'),
        outputPath: 'launchedInstance.ec2InstanceID',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.launchedInstance.ec2InstanceID', props);
    return resource.getResponseField('launchedInstance.ec2InstanceID') as unknown as string;
  }

  public get firstBoot(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.launchedInstance.firstBoot'),
        outputPath: 'launchedInstance.firstBoot',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.launchedInstance.firstBoot', props);
    return resource.getResponseField('launchedInstance.firstBoot') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.launchedInstance.jobID'),
        outputPath: 'launchedInstance.jobID',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.launchedInstance.jobID', props);
    return resource.getResponseField('launchedInstance.jobID') as unknown as string;
  }

}

export class MgnResponsesRetryDataReplicationLifeCycle {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnRetryDataReplicationRequest) {
  }

  public get addedToServiceDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.lifeCycle.addedToServiceDateTime'),
        outputPath: 'lifeCycle.addedToServiceDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.lifeCycle.addedToServiceDateTime', props);
    return resource.getResponseField('lifeCycle.addedToServiceDateTime') as unknown as string;
  }

  public get elapsedReplicationDuration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.lifeCycle.elapsedReplicationDuration'),
        outputPath: 'lifeCycle.elapsedReplicationDuration',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.lifeCycle.elapsedReplicationDuration', props);
    return resource.getResponseField('lifeCycle.elapsedReplicationDuration') as unknown as string;
  }

  public get firstByteDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.lifeCycle.firstByteDateTime'),
        outputPath: 'lifeCycle.firstByteDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.lifeCycle.firstByteDateTime', props);
    return resource.getResponseField('lifeCycle.firstByteDateTime') as unknown as string;
  }

  public get lastCutover(): MgnResponsesRetryDataReplicationLifeCycleLastCutover {
    return new MgnResponsesRetryDataReplicationLifeCycleLastCutover(this.__scope, this.__resources, this.__input);
  }

  public get lastSeenByServiceDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.lifeCycle.lastSeenByServiceDateTime'),
        outputPath: 'lifeCycle.lastSeenByServiceDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.lifeCycle.lastSeenByServiceDateTime', props);
    return resource.getResponseField('lifeCycle.lastSeenByServiceDateTime') as unknown as string;
  }

  public get lastTest(): MgnResponsesRetryDataReplicationLifeCycleLastTest {
    return new MgnResponsesRetryDataReplicationLifeCycleLastTest(this.__scope, this.__resources, this.__input);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.lifeCycle.state'),
        outputPath: 'lifeCycle.state',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.lifeCycle.state', props);
    return resource.getResponseField('lifeCycle.state') as unknown as string;
  }

}

export class MgnResponsesRetryDataReplicationLifeCycleLastCutover {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnRetryDataReplicationRequest) {
  }

  public get finalized(): MgnResponsesRetryDataReplicationLifeCycleLastCutoverFinalized {
    return new MgnResponsesRetryDataReplicationLifeCycleLastCutoverFinalized(this.__scope, this.__resources, this.__input);
  }

  public get initiated(): MgnResponsesRetryDataReplicationLifeCycleLastCutoverInitiated {
    return new MgnResponsesRetryDataReplicationLifeCycleLastCutoverInitiated(this.__scope, this.__resources, this.__input);
  }

  public get reverted(): MgnResponsesRetryDataReplicationLifeCycleLastCutoverReverted {
    return new MgnResponsesRetryDataReplicationLifeCycleLastCutoverReverted(this.__scope, this.__resources, this.__input);
  }

}

export class MgnResponsesRetryDataReplicationLifeCycleLastCutoverFinalized {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnRetryDataReplicationRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.lifeCycle.lastCutover.finalized.apiCallDateTime'),
        outputPath: 'lifeCycle.lastCutover.finalized.apiCallDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.lifeCycle.lastCutover.finalized.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastCutover.finalized.apiCallDateTime') as unknown as string;
  }

}

export class MgnResponsesRetryDataReplicationLifeCycleLastCutoverInitiated {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnRetryDataReplicationRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.lifeCycle.lastCutover.initiated.apiCallDateTime'),
        outputPath: 'lifeCycle.lastCutover.initiated.apiCallDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.lifeCycle.lastCutover.initiated.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastCutover.initiated.apiCallDateTime') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.lifeCycle.lastCutover.initiated.jobID'),
        outputPath: 'lifeCycle.lastCutover.initiated.jobID',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.lifeCycle.lastCutover.initiated.jobID', props);
    return resource.getResponseField('lifeCycle.lastCutover.initiated.jobID') as unknown as string;
  }

}

export class MgnResponsesRetryDataReplicationLifeCycleLastCutoverReverted {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnRetryDataReplicationRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.lifeCycle.lastCutover.reverted.apiCallDateTime'),
        outputPath: 'lifeCycle.lastCutover.reverted.apiCallDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.lifeCycle.lastCutover.reverted.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastCutover.reverted.apiCallDateTime') as unknown as string;
  }

}

export class MgnResponsesRetryDataReplicationLifeCycleLastTest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnRetryDataReplicationRequest) {
  }

  public get finalized(): MgnResponsesRetryDataReplicationLifeCycleLastTestFinalized {
    return new MgnResponsesRetryDataReplicationLifeCycleLastTestFinalized(this.__scope, this.__resources, this.__input);
  }

  public get initiated(): MgnResponsesRetryDataReplicationLifeCycleLastTestInitiated {
    return new MgnResponsesRetryDataReplicationLifeCycleLastTestInitiated(this.__scope, this.__resources, this.__input);
  }

  public get reverted(): MgnResponsesRetryDataReplicationLifeCycleLastTestReverted {
    return new MgnResponsesRetryDataReplicationLifeCycleLastTestReverted(this.__scope, this.__resources, this.__input);
  }

}

export class MgnResponsesRetryDataReplicationLifeCycleLastTestFinalized {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnRetryDataReplicationRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.lifeCycle.lastTest.finalized.apiCallDateTime'),
        outputPath: 'lifeCycle.lastTest.finalized.apiCallDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.lifeCycle.lastTest.finalized.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastTest.finalized.apiCallDateTime') as unknown as string;
  }

}

export class MgnResponsesRetryDataReplicationLifeCycleLastTestInitiated {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnRetryDataReplicationRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.lifeCycle.lastTest.initiated.apiCallDateTime'),
        outputPath: 'lifeCycle.lastTest.initiated.apiCallDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.lifeCycle.lastTest.initiated.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastTest.initiated.apiCallDateTime') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.lifeCycle.lastTest.initiated.jobID'),
        outputPath: 'lifeCycle.lastTest.initiated.jobID',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.lifeCycle.lastTest.initiated.jobID', props);
    return resource.getResponseField('lifeCycle.lastTest.initiated.jobID') as unknown as string;
  }

}

export class MgnResponsesRetryDataReplicationLifeCycleLastTestReverted {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnRetryDataReplicationRequest) {
  }

  public get apiCallDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.lifeCycle.lastTest.reverted.apiCallDateTime'),
        outputPath: 'lifeCycle.lastTest.reverted.apiCallDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.lifeCycle.lastTest.reverted.apiCallDateTime', props);
    return resource.getResponseField('lifeCycle.lastTest.reverted.apiCallDateTime') as unknown as string;
  }

}

export class MgnResponsesRetryDataReplicationSourceProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnRetryDataReplicationRequest) {
  }

  public get cpus(): shapes.MgnCpu[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.sourceProperties.cpus'),
        outputPath: 'sourceProperties.cpus',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.sourceProperties.cpus', props);
    return resource.getResponseField('sourceProperties.cpus') as unknown as shapes.MgnCpu[];
  }

  public get disks(): shapes.MgnDisk[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.sourceProperties.disks'),
        outputPath: 'sourceProperties.disks',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.sourceProperties.disks', props);
    return resource.getResponseField('sourceProperties.disks') as unknown as shapes.MgnDisk[];
  }

  public get identificationHints(): MgnResponsesRetryDataReplicationSourcePropertiesIdentificationHints {
    return new MgnResponsesRetryDataReplicationSourcePropertiesIdentificationHints(this.__scope, this.__resources, this.__input);
  }

  public get lastUpdatedDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.sourceProperties.lastUpdatedDateTime'),
        outputPath: 'sourceProperties.lastUpdatedDateTime',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.sourceProperties.lastUpdatedDateTime', props);
    return resource.getResponseField('sourceProperties.lastUpdatedDateTime') as unknown as string;
  }

  public get networkInterfaces(): shapes.MgnNetworkInterface[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.sourceProperties.networkInterfaces'),
        outputPath: 'sourceProperties.networkInterfaces',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.sourceProperties.networkInterfaces', props);
    return resource.getResponseField('sourceProperties.networkInterfaces') as unknown as shapes.MgnNetworkInterface[];
  }

  public get os(): MgnResponsesRetryDataReplicationSourcePropertiesOs {
    return new MgnResponsesRetryDataReplicationSourcePropertiesOs(this.__scope, this.__resources, this.__input);
  }

  public get ramBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.sourceProperties.ramBytes'),
        outputPath: 'sourceProperties.ramBytes',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.sourceProperties.ramBytes', props);
    return resource.getResponseField('sourceProperties.ramBytes') as unknown as number;
  }

  public get recommendedInstanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.sourceProperties.recommendedInstanceType'),
        outputPath: 'sourceProperties.recommendedInstanceType',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.sourceProperties.recommendedInstanceType', props);
    return resource.getResponseField('sourceProperties.recommendedInstanceType') as unknown as string;
  }

}

export class MgnResponsesRetryDataReplicationSourcePropertiesIdentificationHints {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnRetryDataReplicationRequest) {
  }

  public get awsInstanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.sourceProperties.identificationHints.awsInstanceID'),
        outputPath: 'sourceProperties.identificationHints.awsInstanceID',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.sourceProperties.identificationHints.awsInstanceID', props);
    return resource.getResponseField('sourceProperties.identificationHints.awsInstanceID') as unknown as string;
  }

  public get fqdn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.sourceProperties.identificationHints.fqdn'),
        outputPath: 'sourceProperties.identificationHints.fqdn',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.sourceProperties.identificationHints.fqdn', props);
    return resource.getResponseField('sourceProperties.identificationHints.fqdn') as unknown as string;
  }

  public get hostname(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.sourceProperties.identificationHints.hostname'),
        outputPath: 'sourceProperties.identificationHints.hostname',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.sourceProperties.identificationHints.hostname', props);
    return resource.getResponseField('sourceProperties.identificationHints.hostname') as unknown as string;
  }

  public get vmWareUuid(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.sourceProperties.identificationHints.vmWareUuid'),
        outputPath: 'sourceProperties.identificationHints.vmWareUuid',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.sourceProperties.identificationHints.vmWareUuid', props);
    return resource.getResponseField('sourceProperties.identificationHints.vmWareUuid') as unknown as string;
  }

}

export class MgnResponsesRetryDataReplicationSourcePropertiesOs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnRetryDataReplicationRequest) {
  }

  public get fullString(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retryDataReplication',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.RetryDataReplication.sourceProperties.os.fullString'),
        outputPath: 'sourceProperties.os.fullString',
        parameters: {
          sourceServerID: this.__input.sourceServerID,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetryDataReplication.sourceProperties.os.fullString', props);
    return resource.getResponseField('sourceProperties.os.fullString') as unknown as string;
  }

}

export class MgnResponsesStartCutover {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnStartCutoverRequest) {
  }

  public get job(): MgnResponsesStartCutoverJob {
    return new MgnResponsesStartCutoverJob(this.__scope, this.__resources, this.__input);
  }

}

export class MgnResponsesStartCutoverJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnStartCutoverRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.StartCutover.job.arn'),
        outputPath: 'job.arn',
        parameters: {
          sourceServerIDs: this.__input.sourceServerIDs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartCutover.job.arn', props);
    return resource.getResponseField('job.arn') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.StartCutover.job.creationDateTime'),
        outputPath: 'job.creationDateTime',
        parameters: {
          sourceServerIDs: this.__input.sourceServerIDs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartCutover.job.creationDateTime', props);
    return resource.getResponseField('job.creationDateTime') as unknown as string;
  }

  public get endDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.StartCutover.job.endDateTime'),
        outputPath: 'job.endDateTime',
        parameters: {
          sourceServerIDs: this.__input.sourceServerIDs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartCutover.job.endDateTime', props);
    return resource.getResponseField('job.endDateTime') as unknown as string;
  }

  public get initiatedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.StartCutover.job.initiatedBy'),
        outputPath: 'job.initiatedBy',
        parameters: {
          sourceServerIDs: this.__input.sourceServerIDs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartCutover.job.initiatedBy', props);
    return resource.getResponseField('job.initiatedBy') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.StartCutover.job.jobID'),
        outputPath: 'job.jobID',
        parameters: {
          sourceServerIDs: this.__input.sourceServerIDs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartCutover.job.jobID', props);
    return resource.getResponseField('job.jobID') as unknown as string;
  }

  public get participatingServers(): shapes.MgnParticipatingServer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.StartCutover.job.participatingServers'),
        outputPath: 'job.participatingServers',
        parameters: {
          sourceServerIDs: this.__input.sourceServerIDs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartCutover.job.participatingServers', props);
    return resource.getResponseField('job.participatingServers') as unknown as shapes.MgnParticipatingServer[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.StartCutover.job.status'),
        outputPath: 'job.status',
        parameters: {
          sourceServerIDs: this.__input.sourceServerIDs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartCutover.job.status', props);
    return resource.getResponseField('job.status') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.StartCutover.job.tags'),
        outputPath: 'job.tags',
        parameters: {
          sourceServerIDs: this.__input.sourceServerIDs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartCutover.job.tags', props);
    return resource.getResponseField('job.tags') as unknown as Record<string, string>;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startCutover',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.StartCutover.job.type'),
        outputPath: 'job.type',
        parameters: {
          sourceServerIDs: this.__input.sourceServerIDs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartCutover.job.type', props);
    return resource.getResponseField('job.type') as unknown as string;
  }

}

export class MgnResponsesStartTest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnStartTestRequest) {
  }

  public get job(): MgnResponsesStartTestJob {
    return new MgnResponsesStartTestJob(this.__scope, this.__resources, this.__input);
  }

}

export class MgnResponsesStartTestJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnStartTestRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startTest',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.StartTest.job.arn'),
        outputPath: 'job.arn',
        parameters: {
          sourceServerIDs: this.__input.sourceServerIDs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartTest.job.arn', props);
    return resource.getResponseField('job.arn') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startTest',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.StartTest.job.creationDateTime'),
        outputPath: 'job.creationDateTime',
        parameters: {
          sourceServerIDs: this.__input.sourceServerIDs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartTest.job.creationDateTime', props);
    return resource.getResponseField('job.creationDateTime') as unknown as string;
  }

  public get endDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startTest',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.StartTest.job.endDateTime'),
        outputPath: 'job.endDateTime',
        parameters: {
          sourceServerIDs: this.__input.sourceServerIDs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartTest.job.endDateTime', props);
    return resource.getResponseField('job.endDateTime') as unknown as string;
  }

  public get initiatedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startTest',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.StartTest.job.initiatedBy'),
        outputPath: 'job.initiatedBy',
        parameters: {
          sourceServerIDs: this.__input.sourceServerIDs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartTest.job.initiatedBy', props);
    return resource.getResponseField('job.initiatedBy') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startTest',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.StartTest.job.jobID'),
        outputPath: 'job.jobID',
        parameters: {
          sourceServerIDs: this.__input.sourceServerIDs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartTest.job.jobID', props);
    return resource.getResponseField('job.jobID') as unknown as string;
  }

  public get participatingServers(): shapes.MgnParticipatingServer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startTest',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.StartTest.job.participatingServers'),
        outputPath: 'job.participatingServers',
        parameters: {
          sourceServerIDs: this.__input.sourceServerIDs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartTest.job.participatingServers', props);
    return resource.getResponseField('job.participatingServers') as unknown as shapes.MgnParticipatingServer[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startTest',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.StartTest.job.status'),
        outputPath: 'job.status',
        parameters: {
          sourceServerIDs: this.__input.sourceServerIDs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartTest.job.status', props);
    return resource.getResponseField('job.status') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startTest',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.StartTest.job.tags'),
        outputPath: 'job.tags',
        parameters: {
          sourceServerIDs: this.__input.sourceServerIDs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartTest.job.tags', props);
    return resource.getResponseField('job.tags') as unknown as Record<string, string>;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startTest',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.StartTest.job.type'),
        outputPath: 'job.type',
        parameters: {
          sourceServerIDs: this.__input.sourceServerIDs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartTest.job.type', props);
    return resource.getResponseField('job.type') as unknown as string;
  }

}

export class MgnResponsesTerminateTargetInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnTerminateTargetInstancesRequest) {
  }

  public get job(): MgnResponsesTerminateTargetInstancesJob {
    return new MgnResponsesTerminateTargetInstancesJob(this.__scope, this.__resources, this.__input);
  }

}

export class MgnResponsesTerminateTargetInstancesJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnTerminateTargetInstancesRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateTargetInstances',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.TerminateTargetInstances.job.arn'),
        outputPath: 'job.arn',
        parameters: {
          sourceServerIDs: this.__input.sourceServerIDs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateTargetInstances.job.arn', props);
    return resource.getResponseField('job.arn') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateTargetInstances',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.TerminateTargetInstances.job.creationDateTime'),
        outputPath: 'job.creationDateTime',
        parameters: {
          sourceServerIDs: this.__input.sourceServerIDs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateTargetInstances.job.creationDateTime', props);
    return resource.getResponseField('job.creationDateTime') as unknown as string;
  }

  public get endDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateTargetInstances',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.TerminateTargetInstances.job.endDateTime'),
        outputPath: 'job.endDateTime',
        parameters: {
          sourceServerIDs: this.__input.sourceServerIDs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateTargetInstances.job.endDateTime', props);
    return resource.getResponseField('job.endDateTime') as unknown as string;
  }

  public get initiatedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateTargetInstances',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.TerminateTargetInstances.job.initiatedBy'),
        outputPath: 'job.initiatedBy',
        parameters: {
          sourceServerIDs: this.__input.sourceServerIDs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateTargetInstances.job.initiatedBy', props);
    return resource.getResponseField('job.initiatedBy') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateTargetInstances',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.TerminateTargetInstances.job.jobID'),
        outputPath: 'job.jobID',
        parameters: {
          sourceServerIDs: this.__input.sourceServerIDs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateTargetInstances.job.jobID', props);
    return resource.getResponseField('job.jobID') as unknown as string;
  }

  public get participatingServers(): shapes.MgnParticipatingServer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateTargetInstances',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.TerminateTargetInstances.job.participatingServers'),
        outputPath: 'job.participatingServers',
        parameters: {
          sourceServerIDs: this.__input.sourceServerIDs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateTargetInstances.job.participatingServers', props);
    return resource.getResponseField('job.participatingServers') as unknown as shapes.MgnParticipatingServer[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateTargetInstances',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.TerminateTargetInstances.job.status'),
        outputPath: 'job.status',
        parameters: {
          sourceServerIDs: this.__input.sourceServerIDs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateTargetInstances.job.status', props);
    return resource.getResponseField('job.status') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateTargetInstances',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.TerminateTargetInstances.job.tags'),
        outputPath: 'job.tags',
        parameters: {
          sourceServerIDs: this.__input.sourceServerIDs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateTargetInstances.job.tags', props);
    return resource.getResponseField('job.tags') as unknown as Record<string, string>;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateTargetInstances',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.TerminateTargetInstances.job.type'),
        outputPath: 'job.type',
        parameters: {
          sourceServerIDs: this.__input.sourceServerIDs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateTargetInstances.job.type', props);
    return resource.getResponseField('job.type') as unknown as string;
  }

}

export class MgnResponsesUpdateLaunchConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnUpdateLaunchConfigurationRequest) {
  }

  public get copyPrivateIp(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateLaunchConfiguration.copyPrivateIp'),
        outputPath: 'copyPrivateIp',
        parameters: {
          copyPrivateIp: this.__input.copyPrivateIp,
          copyTags: this.__input.copyTags,
          launchDisposition: this.__input.launchDisposition,
          licensing: {
            osByol: this.__input.licensing?.osByol,
          },
          name: this.__input.name,
          sourceServerID: this.__input.sourceServerID,
          targetInstanceTypeRightSizingMethod: this.__input.targetInstanceTypeRightSizingMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchConfiguration.copyPrivateIp', props);
    return resource.getResponseField('copyPrivateIp') as unknown as boolean;
  }

  public get copyTags(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateLaunchConfiguration.copyTags'),
        outputPath: 'copyTags',
        parameters: {
          copyPrivateIp: this.__input.copyPrivateIp,
          copyTags: this.__input.copyTags,
          launchDisposition: this.__input.launchDisposition,
          licensing: {
            osByol: this.__input.licensing?.osByol,
          },
          name: this.__input.name,
          sourceServerID: this.__input.sourceServerID,
          targetInstanceTypeRightSizingMethod: this.__input.targetInstanceTypeRightSizingMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchConfiguration.copyTags', props);
    return resource.getResponseField('copyTags') as unknown as boolean;
  }

  public get ec2LaunchTemplateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateLaunchConfiguration.ec2LaunchTemplateID'),
        outputPath: 'ec2LaunchTemplateID',
        parameters: {
          copyPrivateIp: this.__input.copyPrivateIp,
          copyTags: this.__input.copyTags,
          launchDisposition: this.__input.launchDisposition,
          licensing: {
            osByol: this.__input.licensing?.osByol,
          },
          name: this.__input.name,
          sourceServerID: this.__input.sourceServerID,
          targetInstanceTypeRightSizingMethod: this.__input.targetInstanceTypeRightSizingMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchConfiguration.ec2LaunchTemplateID', props);
    return resource.getResponseField('ec2LaunchTemplateID') as unknown as string;
  }

  public get launchDisposition(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateLaunchConfiguration.launchDisposition'),
        outputPath: 'launchDisposition',
        parameters: {
          copyPrivateIp: this.__input.copyPrivateIp,
          copyTags: this.__input.copyTags,
          launchDisposition: this.__input.launchDisposition,
          licensing: {
            osByol: this.__input.licensing?.osByol,
          },
          name: this.__input.name,
          sourceServerID: this.__input.sourceServerID,
          targetInstanceTypeRightSizingMethod: this.__input.targetInstanceTypeRightSizingMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchConfiguration.launchDisposition', props);
    return resource.getResponseField('launchDisposition') as unknown as string;
  }

  public get licensing(): MgnResponsesUpdateLaunchConfigurationLicensing {
    return new MgnResponsesUpdateLaunchConfigurationLicensing(this.__scope, this.__resources, this.__input);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateLaunchConfiguration.name'),
        outputPath: 'name',
        parameters: {
          copyPrivateIp: this.__input.copyPrivateIp,
          copyTags: this.__input.copyTags,
          launchDisposition: this.__input.launchDisposition,
          licensing: {
            osByol: this.__input.licensing?.osByol,
          },
          name: this.__input.name,
          sourceServerID: this.__input.sourceServerID,
          targetInstanceTypeRightSizingMethod: this.__input.targetInstanceTypeRightSizingMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchConfiguration.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get sourceServerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateLaunchConfiguration.sourceServerID'),
        outputPath: 'sourceServerID',
        parameters: {
          copyPrivateIp: this.__input.copyPrivateIp,
          copyTags: this.__input.copyTags,
          launchDisposition: this.__input.launchDisposition,
          licensing: {
            osByol: this.__input.licensing?.osByol,
          },
          name: this.__input.name,
          sourceServerID: this.__input.sourceServerID,
          targetInstanceTypeRightSizingMethod: this.__input.targetInstanceTypeRightSizingMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchConfiguration.sourceServerID', props);
    return resource.getResponseField('sourceServerID') as unknown as string;
  }

  public get targetInstanceTypeRightSizingMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateLaunchConfiguration.targetInstanceTypeRightSizingMethod'),
        outputPath: 'targetInstanceTypeRightSizingMethod',
        parameters: {
          copyPrivateIp: this.__input.copyPrivateIp,
          copyTags: this.__input.copyTags,
          launchDisposition: this.__input.launchDisposition,
          licensing: {
            osByol: this.__input.licensing?.osByol,
          },
          name: this.__input.name,
          sourceServerID: this.__input.sourceServerID,
          targetInstanceTypeRightSizingMethod: this.__input.targetInstanceTypeRightSizingMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchConfiguration.targetInstanceTypeRightSizingMethod', props);
    return resource.getResponseField('targetInstanceTypeRightSizingMethod') as unknown as string;
  }

}

export class MgnResponsesUpdateLaunchConfigurationLicensing {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnUpdateLaunchConfigurationRequest) {
  }

  public get osByol(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLaunchConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateLaunchConfiguration.licensing.osByol'),
        outputPath: 'licensing.osByol',
        parameters: {
          copyPrivateIp: this.__input.copyPrivateIp,
          copyTags: this.__input.copyTags,
          launchDisposition: this.__input.launchDisposition,
          licensing: {
            osByol: this.__input.licensing?.osByol,
          },
          name: this.__input.name,
          sourceServerID: this.__input.sourceServerID,
          targetInstanceTypeRightSizingMethod: this.__input.targetInstanceTypeRightSizingMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLaunchConfiguration.licensing.osByol', props);
    return resource.getResponseField('licensing.osByol') as unknown as boolean;
  }

}

export class MgnResponsesUpdateReplicationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnUpdateReplicationConfigurationRequest) {
  }

  public get associateDefaultSecurityGroup(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfiguration.associateDefaultSecurityGroup'),
        outputPath: 'associateDefaultSecurityGroup',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          name: this.__input.name,
          replicatedDisks: this.__input.replicatedDisks,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          sourceServerID: this.__input.sourceServerID,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfiguration.associateDefaultSecurityGroup', props);
    return resource.getResponseField('associateDefaultSecurityGroup') as unknown as boolean;
  }

  public get bandwidthThrottling(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfiguration.bandwidthThrottling'),
        outputPath: 'bandwidthThrottling',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          name: this.__input.name,
          replicatedDisks: this.__input.replicatedDisks,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          sourceServerID: this.__input.sourceServerID,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfiguration.bandwidthThrottling', props);
    return resource.getResponseField('bandwidthThrottling') as unknown as number;
  }

  public get createPublicIp(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfiguration.createPublicIP'),
        outputPath: 'createPublicIP',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          name: this.__input.name,
          replicatedDisks: this.__input.replicatedDisks,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          sourceServerID: this.__input.sourceServerID,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfiguration.createPublicIP', props);
    return resource.getResponseField('createPublicIP') as unknown as boolean;
  }

  public get dataPlaneRouting(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfiguration.dataPlaneRouting'),
        outputPath: 'dataPlaneRouting',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          name: this.__input.name,
          replicatedDisks: this.__input.replicatedDisks,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          sourceServerID: this.__input.sourceServerID,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfiguration.dataPlaneRouting', props);
    return resource.getResponseField('dataPlaneRouting') as unknown as string;
  }

  public get defaultLargeStagingDiskType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfiguration.defaultLargeStagingDiskType'),
        outputPath: 'defaultLargeStagingDiskType',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          name: this.__input.name,
          replicatedDisks: this.__input.replicatedDisks,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          sourceServerID: this.__input.sourceServerID,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfiguration.defaultLargeStagingDiskType', props);
    return resource.getResponseField('defaultLargeStagingDiskType') as unknown as string;
  }

  public get ebsEncryption(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfiguration.ebsEncryption'),
        outputPath: 'ebsEncryption',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          name: this.__input.name,
          replicatedDisks: this.__input.replicatedDisks,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          sourceServerID: this.__input.sourceServerID,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfiguration.ebsEncryption', props);
    return resource.getResponseField('ebsEncryption') as unknown as string;
  }

  public get ebsEncryptionKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfiguration.ebsEncryptionKeyArn'),
        outputPath: 'ebsEncryptionKeyArn',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          name: this.__input.name,
          replicatedDisks: this.__input.replicatedDisks,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          sourceServerID: this.__input.sourceServerID,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfiguration.ebsEncryptionKeyArn', props);
    return resource.getResponseField('ebsEncryptionKeyArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfiguration.name'),
        outputPath: 'name',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          name: this.__input.name,
          replicatedDisks: this.__input.replicatedDisks,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          sourceServerID: this.__input.sourceServerID,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfiguration.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get replicatedDisks(): shapes.MgnReplicationConfigurationReplicatedDisk[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfiguration.replicatedDisks'),
        outputPath: 'replicatedDisks',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          name: this.__input.name,
          replicatedDisks: this.__input.replicatedDisks,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          sourceServerID: this.__input.sourceServerID,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfiguration.replicatedDisks', props);
    return resource.getResponseField('replicatedDisks') as unknown as shapes.MgnReplicationConfigurationReplicatedDisk[];
  }

  public get replicationServerInstanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfiguration.replicationServerInstanceType'),
        outputPath: 'replicationServerInstanceType',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          name: this.__input.name,
          replicatedDisks: this.__input.replicatedDisks,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          sourceServerID: this.__input.sourceServerID,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfiguration.replicationServerInstanceType', props);
    return resource.getResponseField('replicationServerInstanceType') as unknown as string;
  }

  public get replicationServersSecurityGroupsIDs(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfiguration.replicationServersSecurityGroupsIDs'),
        outputPath: 'replicationServersSecurityGroupsIDs',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          name: this.__input.name,
          replicatedDisks: this.__input.replicatedDisks,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          sourceServerID: this.__input.sourceServerID,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfiguration.replicationServersSecurityGroupsIDs', props);
    return resource.getResponseField('replicationServersSecurityGroupsIDs') as unknown as string[];
  }

  public get sourceServerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfiguration.sourceServerID'),
        outputPath: 'sourceServerID',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          name: this.__input.name,
          replicatedDisks: this.__input.replicatedDisks,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          sourceServerID: this.__input.sourceServerID,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfiguration.sourceServerID', props);
    return resource.getResponseField('sourceServerID') as unknown as string;
  }

  public get stagingAreaSubnetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfiguration.stagingAreaSubnetId'),
        outputPath: 'stagingAreaSubnetId',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          name: this.__input.name,
          replicatedDisks: this.__input.replicatedDisks,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          sourceServerID: this.__input.sourceServerID,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfiguration.stagingAreaSubnetId', props);
    return resource.getResponseField('stagingAreaSubnetId') as unknown as string;
  }

  public get stagingAreaTags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfiguration.stagingAreaTags'),
        outputPath: 'stagingAreaTags',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          name: this.__input.name,
          replicatedDisks: this.__input.replicatedDisks,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          sourceServerID: this.__input.sourceServerID,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfiguration.stagingAreaTags', props);
    return resource.getResponseField('stagingAreaTags') as unknown as Record<string, string>;
  }

  public get useDedicatedReplicationServer(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfiguration',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfiguration.useDedicatedReplicationServer'),
        outputPath: 'useDedicatedReplicationServer',
        parameters: {
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          name: this.__input.name,
          replicatedDisks: this.__input.replicatedDisks,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          sourceServerID: this.__input.sourceServerID,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfiguration.useDedicatedReplicationServer', props);
    return resource.getResponseField('useDedicatedReplicationServer') as unknown as boolean;
  }

}

export class MgnResponsesUpdateReplicationConfigurationTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MgnUpdateReplicationConfigurationTemplateRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfigurationTemplate.arn'),
        outputPath: 'arn',
        parameters: {
          arn: this.__input.arn,
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationConfigurationTemplateID: this.__input.replicationConfigurationTemplateID,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfigurationTemplate.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get associateDefaultSecurityGroup(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfigurationTemplate.associateDefaultSecurityGroup'),
        outputPath: 'associateDefaultSecurityGroup',
        parameters: {
          arn: this.__input.arn,
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationConfigurationTemplateID: this.__input.replicationConfigurationTemplateID,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfigurationTemplate.associateDefaultSecurityGroup', props);
    return resource.getResponseField('associateDefaultSecurityGroup') as unknown as boolean;
  }

  public get bandwidthThrottling(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfigurationTemplate.bandwidthThrottling'),
        outputPath: 'bandwidthThrottling',
        parameters: {
          arn: this.__input.arn,
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationConfigurationTemplateID: this.__input.replicationConfigurationTemplateID,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfigurationTemplate.bandwidthThrottling', props);
    return resource.getResponseField('bandwidthThrottling') as unknown as number;
  }

  public get createPublicIp(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfigurationTemplate.createPublicIP'),
        outputPath: 'createPublicIP',
        parameters: {
          arn: this.__input.arn,
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationConfigurationTemplateID: this.__input.replicationConfigurationTemplateID,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfigurationTemplate.createPublicIP', props);
    return resource.getResponseField('createPublicIP') as unknown as boolean;
  }

  public get dataPlaneRouting(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfigurationTemplate.dataPlaneRouting'),
        outputPath: 'dataPlaneRouting',
        parameters: {
          arn: this.__input.arn,
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationConfigurationTemplateID: this.__input.replicationConfigurationTemplateID,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfigurationTemplate.dataPlaneRouting', props);
    return resource.getResponseField('dataPlaneRouting') as unknown as string;
  }

  public get defaultLargeStagingDiskType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfigurationTemplate.defaultLargeStagingDiskType'),
        outputPath: 'defaultLargeStagingDiskType',
        parameters: {
          arn: this.__input.arn,
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationConfigurationTemplateID: this.__input.replicationConfigurationTemplateID,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfigurationTemplate.defaultLargeStagingDiskType', props);
    return resource.getResponseField('defaultLargeStagingDiskType') as unknown as string;
  }

  public get ebsEncryption(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfigurationTemplate.ebsEncryption'),
        outputPath: 'ebsEncryption',
        parameters: {
          arn: this.__input.arn,
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationConfigurationTemplateID: this.__input.replicationConfigurationTemplateID,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfigurationTemplate.ebsEncryption', props);
    return resource.getResponseField('ebsEncryption') as unknown as string;
  }

  public get ebsEncryptionKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfigurationTemplate.ebsEncryptionKeyArn'),
        outputPath: 'ebsEncryptionKeyArn',
        parameters: {
          arn: this.__input.arn,
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationConfigurationTemplateID: this.__input.replicationConfigurationTemplateID,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfigurationTemplate.ebsEncryptionKeyArn', props);
    return resource.getResponseField('ebsEncryptionKeyArn') as unknown as string;
  }

  public get replicationConfigurationTemplateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfigurationTemplate.replicationConfigurationTemplateID'),
        outputPath: 'replicationConfigurationTemplateID',
        parameters: {
          arn: this.__input.arn,
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationConfigurationTemplateID: this.__input.replicationConfigurationTemplateID,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfigurationTemplate.replicationConfigurationTemplateID', props);
    return resource.getResponseField('replicationConfigurationTemplateID') as unknown as string;
  }

  public get replicationServerInstanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfigurationTemplate.replicationServerInstanceType'),
        outputPath: 'replicationServerInstanceType',
        parameters: {
          arn: this.__input.arn,
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationConfigurationTemplateID: this.__input.replicationConfigurationTemplateID,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfigurationTemplate.replicationServerInstanceType', props);
    return resource.getResponseField('replicationServerInstanceType') as unknown as string;
  }

  public get replicationServersSecurityGroupsIDs(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfigurationTemplate.replicationServersSecurityGroupsIDs'),
        outputPath: 'replicationServersSecurityGroupsIDs',
        parameters: {
          arn: this.__input.arn,
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationConfigurationTemplateID: this.__input.replicationConfigurationTemplateID,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfigurationTemplate.replicationServersSecurityGroupsIDs', props);
    return resource.getResponseField('replicationServersSecurityGroupsIDs') as unknown as string[];
  }

  public get stagingAreaSubnetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfigurationTemplate.stagingAreaSubnetId'),
        outputPath: 'stagingAreaSubnetId',
        parameters: {
          arn: this.__input.arn,
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationConfigurationTemplateID: this.__input.replicationConfigurationTemplateID,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfigurationTemplate.stagingAreaSubnetId', props);
    return resource.getResponseField('stagingAreaSubnetId') as unknown as string;
  }

  public get stagingAreaTags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfigurationTemplate.stagingAreaTags'),
        outputPath: 'stagingAreaTags',
        parameters: {
          arn: this.__input.arn,
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationConfigurationTemplateID: this.__input.replicationConfigurationTemplateID,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfigurationTemplate.stagingAreaTags', props);
    return resource.getResponseField('stagingAreaTags') as unknown as Record<string, string>;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfigurationTemplate.tags'),
        outputPath: 'tags',
        parameters: {
          arn: this.__input.arn,
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationConfigurationTemplateID: this.__input.replicationConfigurationTemplateID,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfigurationTemplate.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get useDedicatedReplicationServer(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReplicationConfigurationTemplate',
        service: 'Mgn',
        physicalResourceId: cr.PhysicalResourceId.of('Mgn.UpdateReplicationConfigurationTemplate.useDedicatedReplicationServer'),
        outputPath: 'useDedicatedReplicationServer',
        parameters: {
          arn: this.__input.arn,
          associateDefaultSecurityGroup: this.__input.associateDefaultSecurityGroup,
          bandwidthThrottling: this.__input.bandwidthThrottling,
          createPublicIP: this.__input.createPublicIP,
          dataPlaneRouting: this.__input.dataPlaneRouting,
          defaultLargeStagingDiskType: this.__input.defaultLargeStagingDiskType,
          ebsEncryption: this.__input.ebsEncryption,
          ebsEncryptionKeyArn: this.__input.ebsEncryptionKeyArn,
          replicationConfigurationTemplateID: this.__input.replicationConfigurationTemplateID,
          replicationServerInstanceType: this.__input.replicationServerInstanceType,
          replicationServersSecurityGroupsIDs: this.__input.replicationServersSecurityGroupsIDs,
          stagingAreaSubnetId: this.__input.stagingAreaSubnetId,
          stagingAreaTags: this.__input.stagingAreaTags,
          useDedicatedReplicationServer: this.__input.useDedicatedReplicationServer,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReplicationConfigurationTemplate.useDedicatedReplicationServer', props);
    return resource.getResponseField('useDedicatedReplicationServer') as unknown as boolean;
  }

}

