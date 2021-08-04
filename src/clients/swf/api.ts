import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SwfClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public countClosedWorkflowExecutions(input: shapes.SwfCountClosedWorkflowExecutionsInput): SWFResponsesCountClosedWorkflowExecutions {
    return new SWFResponsesCountClosedWorkflowExecutions(this, this.__resources, input);
  }

  public countOpenWorkflowExecutions(input: shapes.SwfCountOpenWorkflowExecutionsInput): SWFResponsesCountOpenWorkflowExecutions {
    return new SWFResponsesCountOpenWorkflowExecutions(this, this.__resources, input);
  }

  public countPendingActivityTasks(input: shapes.SwfCountPendingActivityTasksInput): SWFResponsesCountPendingActivityTasks {
    return new SWFResponsesCountPendingActivityTasks(this, this.__resources, input);
  }

  public countPendingDecisionTasks(input: shapes.SwfCountPendingDecisionTasksInput): SWFResponsesCountPendingDecisionTasks {
    return new SWFResponsesCountPendingDecisionTasks(this, this.__resources, input);
  }

  public deprecateActivityType(input: shapes.SwfDeprecateActivityTypeInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deprecateActivityType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DeprecateActivityType'),
        parameters: {
          domain: input.domain,
          activityType: {
            name: input.activityType.name,
            version: input.activityType.version,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeprecateActivityType', props);
  }

  public deprecateDomain(input: shapes.SwfDeprecateDomainInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deprecateDomain',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DeprecateDomain'),
        parameters: {
          name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeprecateDomain', props);
  }

  public deprecateWorkflowType(input: shapes.SwfDeprecateWorkflowTypeInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deprecateWorkflowType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DeprecateWorkflowType'),
        parameters: {
          domain: input.domain,
          workflowType: {
            name: input.workflowType.name,
            version: input.workflowType.version,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeprecateWorkflowType', props);
  }

  public describeActivityType(input: shapes.SwfDescribeActivityTypeInput): SWFResponsesDescribeActivityType {
    return new SWFResponsesDescribeActivityType(this, this.__resources, input);
  }

  public describeDomain(input: shapes.SwfDescribeDomainInput): SWFResponsesDescribeDomain {
    return new SWFResponsesDescribeDomain(this, this.__resources, input);
  }

  public describeWorkflowExecution(input: shapes.SwfDescribeWorkflowExecutionInput): SWFResponsesDescribeWorkflowExecution {
    return new SWFResponsesDescribeWorkflowExecution(this, this.__resources, input);
  }

  public describeWorkflowType(input: shapes.SwfDescribeWorkflowTypeInput): SWFResponsesDescribeWorkflowType {
    return new SWFResponsesDescribeWorkflowType(this, this.__resources, input);
  }

  public fetchWorkflowExecutionHistory(input: shapes.SwfGetWorkflowExecutionHistoryInput): SWFResponsesFetchWorkflowExecutionHistory {
    return new SWFResponsesFetchWorkflowExecutionHistory(this, this.__resources, input);
  }

  public listActivityTypes(input: shapes.SwfListActivityTypesInput): SWFResponsesListActivityTypes {
    return new SWFResponsesListActivityTypes(this, this.__resources, input);
  }

  public listClosedWorkflowExecutions(input: shapes.SwfListClosedWorkflowExecutionsInput): SWFResponsesListClosedWorkflowExecutions {
    return new SWFResponsesListClosedWorkflowExecutions(this, this.__resources, input);
  }

  public listDomains(input: shapes.SwfListDomainsInput): SWFResponsesListDomains {
    return new SWFResponsesListDomains(this, this.__resources, input);
  }

  public listOpenWorkflowExecutions(input: shapes.SwfListOpenWorkflowExecutionsInput): SWFResponsesListOpenWorkflowExecutions {
    return new SWFResponsesListOpenWorkflowExecutions(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.SwfListTagsForResourceInput): SWFResponsesListTagsForResource {
    return new SWFResponsesListTagsForResource(this, this.__resources, input);
  }

  public listWorkflowTypes(input: shapes.SwfListWorkflowTypesInput): SWFResponsesListWorkflowTypes {
    return new SWFResponsesListWorkflowTypes(this, this.__resources, input);
  }

  public pollForActivityTask(input: shapes.SwfPollForActivityTaskInput): SWFResponsesPollForActivityTask {
    return new SWFResponsesPollForActivityTask(this, this.__resources, input);
  }

  public pollForDecisionTask(input: shapes.SwfPollForDecisionTaskInput): SWFResponsesPollForDecisionTask {
    return new SWFResponsesPollForDecisionTask(this, this.__resources, input);
  }

  public recordActivityTaskHeartbeat(input: shapes.SwfRecordActivityTaskHeartbeatInput): SWFResponsesRecordActivityTaskHeartbeat {
    return new SWFResponsesRecordActivityTaskHeartbeat(this, this.__resources, input);
  }

  public registerActivityType(input: shapes.SwfRegisterActivityTypeInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerActivityType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.RegisterActivityType'),
        parameters: {
          domain: input.domain,
          name: input.name,
          version: input.version,
          description: input.description,
          defaultTaskStartToCloseTimeout: input.defaultTaskStartToCloseTimeout,
          defaultTaskHeartbeatTimeout: input.defaultTaskHeartbeatTimeout,
          defaultTaskList: {
            name: input.defaultTaskList?.name,
          },
          defaultTaskPriority: input.defaultTaskPriority,
          defaultTaskScheduleToStartTimeout: input.defaultTaskScheduleToStartTimeout,
          defaultTaskScheduleToCloseTimeout: input.defaultTaskScheduleToCloseTimeout,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RegisterActivityType', props);
  }

  public registerDomain(input: shapes.SwfRegisterDomainInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerDomain',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.RegisterDomain'),
        parameters: {
          name: input.name,
          description: input.description,
          workflowExecutionRetentionPeriodInDays: input.workflowExecutionRetentionPeriodInDays,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RegisterDomain', props);
  }

  public registerWorkflowType(input: shapes.SwfRegisterWorkflowTypeInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerWorkflowType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.RegisterWorkflowType'),
        parameters: {
          domain: input.domain,
          name: input.name,
          version: input.version,
          description: input.description,
          defaultTaskStartToCloseTimeout: input.defaultTaskStartToCloseTimeout,
          defaultExecutionStartToCloseTimeout: input.defaultExecutionStartToCloseTimeout,
          defaultTaskList: {
            name: input.defaultTaskList?.name,
          },
          defaultTaskPriority: input.defaultTaskPriority,
          defaultChildPolicy: input.defaultChildPolicy,
          defaultLambdaRole: input.defaultLambdaRole,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RegisterWorkflowType', props);
  }

  public requestCancelWorkflowExecution(input: shapes.SwfRequestCancelWorkflowExecutionInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'requestCancelWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.RequestCancelWorkflowExecution'),
        parameters: {
          domain: input.domain,
          workflowId: input.workflowId,
          runId: input.runId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RequestCancelWorkflowExecution', props);
  }

  public respondActivityTaskCanceled(input: shapes.SwfRespondActivityTaskCanceledInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'respondActivityTaskCanceled',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.RespondActivityTaskCanceled'),
        parameters: {
          taskToken: input.taskToken,
          details: input.details,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RespondActivityTaskCanceled', props);
  }

  public respondActivityTaskCompleted(input: shapes.SwfRespondActivityTaskCompletedInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'respondActivityTaskCompleted',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.RespondActivityTaskCompleted'),
        parameters: {
          taskToken: input.taskToken,
          result: input.result,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RespondActivityTaskCompleted', props);
  }

  public respondActivityTaskFailed(input: shapes.SwfRespondActivityTaskFailedInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'respondActivityTaskFailed',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.RespondActivityTaskFailed'),
        parameters: {
          taskToken: input.taskToken,
          reason: input.reason,
          details: input.details,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RespondActivityTaskFailed', props);
  }

  public respondDecisionTaskCompleted(input: shapes.SwfRespondDecisionTaskCompletedInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'respondDecisionTaskCompleted',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.RespondDecisionTaskCompleted'),
        parameters: {
          taskToken: input.taskToken,
          decisions: input.decisions,
          executionContext: input.executionContext,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RespondDecisionTaskCompleted', props);
  }

  public signalWorkflowExecution(input: shapes.SwfSignalWorkflowExecutionInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'signalWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.SignalWorkflowExecution'),
        parameters: {
          domain: input.domain,
          workflowId: input.workflowId,
          runId: input.runId,
          signalName: input.signalName,
          input: input.input,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SignalWorkflowExecution', props);
  }

  public startWorkflowExecution(input: shapes.SwfStartWorkflowExecutionInput): SWFResponsesStartWorkflowExecution {
    return new SWFResponsesStartWorkflowExecution(this, this.__resources, input);
  }

  public tagResource(input: shapes.SwfTagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public terminateWorkflowExecution(input: shapes.SwfTerminateWorkflowExecutionInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.TerminateWorkflowExecution'),
        parameters: {
          domain: input.domain,
          workflowId: input.workflowId,
          runId: input.runId,
          reason: input.reason,
          details: input.details,
          childPolicy: input.childPolicy,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TerminateWorkflowExecution', props);
  }

  public undeprecateActivityType(input: shapes.SwfUndeprecateActivityTypeInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'undeprecateActivityType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.UndeprecateActivityType'),
        parameters: {
          domain: input.domain,
          activityType: {
            name: input.activityType.name,
            version: input.activityType.version,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UndeprecateActivityType', props);
  }

  public undeprecateDomain(input: shapes.SwfUndeprecateDomainInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'undeprecateDomain',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.UndeprecateDomain'),
        parameters: {
          name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UndeprecateDomain', props);
  }

  public undeprecateWorkflowType(input: shapes.SwfUndeprecateWorkflowTypeInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'undeprecateWorkflowType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.UndeprecateWorkflowType'),
        parameters: {
          domain: input.domain,
          workflowType: {
            name: input.workflowType.name,
            version: input.workflowType.version,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UndeprecateWorkflowType', props);
  }

  public untagResource(input: shapes.SwfUntagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

}

export class SWFResponsesCountClosedWorkflowExecutions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfCountClosedWorkflowExecutionsInput) {
  }

  public get count(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'countClosedWorkflowExecutions',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.CountClosedWorkflowExecutions.count'),
        outputPath: 'count',
        parameters: {
          domain: this.__input.domain,
          startTimeFilter: {
            oldestDate: this.__input.startTimeFilter?.oldestDate,
            latestDate: this.__input.startTimeFilter?.latestDate,
          },
          closeTimeFilter: {
            oldestDate: this.__input.closeTimeFilter?.oldestDate,
            latestDate: this.__input.closeTimeFilter?.latestDate,
          },
          executionFilter: {
            workflowId: this.__input.executionFilter?.workflowId,
          },
          typeFilter: {
            name: this.__input.typeFilter?.name,
            version: this.__input.typeFilter?.version,
          },
          tagFilter: {
            tag: this.__input.tagFilter?.tag,
          },
          closeStatusFilter: {
            status: this.__input.closeStatusFilter?.status,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CountClosedWorkflowExecutions.count', props);
    return resource.getResponseField('count') as unknown as number;
  }

  public get truncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'countClosedWorkflowExecutions',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.CountClosedWorkflowExecutions.truncated'),
        outputPath: 'truncated',
        parameters: {
          domain: this.__input.domain,
          startTimeFilter: {
            oldestDate: this.__input.startTimeFilter?.oldestDate,
            latestDate: this.__input.startTimeFilter?.latestDate,
          },
          closeTimeFilter: {
            oldestDate: this.__input.closeTimeFilter?.oldestDate,
            latestDate: this.__input.closeTimeFilter?.latestDate,
          },
          executionFilter: {
            workflowId: this.__input.executionFilter?.workflowId,
          },
          typeFilter: {
            name: this.__input.typeFilter?.name,
            version: this.__input.typeFilter?.version,
          },
          tagFilter: {
            tag: this.__input.tagFilter?.tag,
          },
          closeStatusFilter: {
            status: this.__input.closeStatusFilter?.status,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CountClosedWorkflowExecutions.truncated', props);
    return resource.getResponseField('truncated') as unknown as boolean;
  }

}

export class SWFResponsesCountOpenWorkflowExecutions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfCountOpenWorkflowExecutionsInput) {
  }

  public get count(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'countOpenWorkflowExecutions',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.CountOpenWorkflowExecutions.count'),
        outputPath: 'count',
        parameters: {
          domain: this.__input.domain,
          startTimeFilter: {
            oldestDate: this.__input.startTimeFilter.oldestDate,
            latestDate: this.__input.startTimeFilter.latestDate,
          },
          typeFilter: {
            name: this.__input.typeFilter?.name,
            version: this.__input.typeFilter?.version,
          },
          tagFilter: {
            tag: this.__input.tagFilter?.tag,
          },
          executionFilter: {
            workflowId: this.__input.executionFilter?.workflowId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CountOpenWorkflowExecutions.count', props);
    return resource.getResponseField('count') as unknown as number;
  }

  public get truncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'countOpenWorkflowExecutions',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.CountOpenWorkflowExecutions.truncated'),
        outputPath: 'truncated',
        parameters: {
          domain: this.__input.domain,
          startTimeFilter: {
            oldestDate: this.__input.startTimeFilter.oldestDate,
            latestDate: this.__input.startTimeFilter.latestDate,
          },
          typeFilter: {
            name: this.__input.typeFilter?.name,
            version: this.__input.typeFilter?.version,
          },
          tagFilter: {
            tag: this.__input.tagFilter?.tag,
          },
          executionFilter: {
            workflowId: this.__input.executionFilter?.workflowId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CountOpenWorkflowExecutions.truncated', props);
    return resource.getResponseField('truncated') as unknown as boolean;
  }

}

export class SWFResponsesCountPendingActivityTasks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfCountPendingActivityTasksInput) {
  }

  public get count(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'countPendingActivityTasks',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.CountPendingActivityTasks.count'),
        outputPath: 'count',
        parameters: {
          domain: this.__input.domain,
          taskList: {
            name: this.__input.taskList.name,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CountPendingActivityTasks.count', props);
    return resource.getResponseField('count') as unknown as number;
  }

  public get truncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'countPendingActivityTasks',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.CountPendingActivityTasks.truncated'),
        outputPath: 'truncated',
        parameters: {
          domain: this.__input.domain,
          taskList: {
            name: this.__input.taskList.name,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CountPendingActivityTasks.truncated', props);
    return resource.getResponseField('truncated') as unknown as boolean;
  }

}

export class SWFResponsesCountPendingDecisionTasks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfCountPendingDecisionTasksInput) {
  }

  public get count(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'countPendingDecisionTasks',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.CountPendingDecisionTasks.count'),
        outputPath: 'count',
        parameters: {
          domain: this.__input.domain,
          taskList: {
            name: this.__input.taskList.name,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CountPendingDecisionTasks.count', props);
    return resource.getResponseField('count') as unknown as number;
  }

  public get truncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'countPendingDecisionTasks',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.CountPendingDecisionTasks.truncated'),
        outputPath: 'truncated',
        parameters: {
          domain: this.__input.domain,
          taskList: {
            name: this.__input.taskList.name,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CountPendingDecisionTasks.truncated', props);
    return resource.getResponseField('truncated') as unknown as boolean;
  }

}

export class SWFResponsesDescribeActivityType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfDescribeActivityTypeInput) {
  }

  public get typeInfo(): SWFResponsesDescribeActivityTypeTypeInfo {
    return new SWFResponsesDescribeActivityTypeTypeInfo(this.__scope, this.__resources, this.__input);
  }

  public get configuration(): SWFResponsesDescribeActivityTypeConfiguration {
    return new SWFResponsesDescribeActivityTypeConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class SWFResponsesDescribeActivityTypeTypeInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfDescribeActivityTypeInput) {
  }

  public get activityType(): SWFResponsesDescribeActivityTypeTypeInfoActivityType {
    return new SWFResponsesDescribeActivityTypeTypeInfoActivityType(this.__scope, this.__resources, this.__input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeActivityType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeActivityType.typeInfo.status'),
        outputPath: 'typeInfo.status',
        parameters: {
          domain: this.__input.domain,
          activityType: {
            name: this.__input.activityType.name,
            version: this.__input.activityType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeActivityType.typeInfo.status', props);
    return resource.getResponseField('typeInfo.status') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeActivityType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeActivityType.typeInfo.description'),
        outputPath: 'typeInfo.description',
        parameters: {
          domain: this.__input.domain,
          activityType: {
            name: this.__input.activityType.name,
            version: this.__input.activityType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeActivityType.typeInfo.description', props);
    return resource.getResponseField('typeInfo.description') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeActivityType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeActivityType.typeInfo.creationDate'),
        outputPath: 'typeInfo.creationDate',
        parameters: {
          domain: this.__input.domain,
          activityType: {
            name: this.__input.activityType.name,
            version: this.__input.activityType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeActivityType.typeInfo.creationDate', props);
    return resource.getResponseField('typeInfo.creationDate') as unknown as string;
  }

  public get deprecationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeActivityType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeActivityType.typeInfo.deprecationDate'),
        outputPath: 'typeInfo.deprecationDate',
        parameters: {
          domain: this.__input.domain,
          activityType: {
            name: this.__input.activityType.name,
            version: this.__input.activityType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeActivityType.typeInfo.deprecationDate', props);
    return resource.getResponseField('typeInfo.deprecationDate') as unknown as string;
  }

}

export class SWFResponsesDescribeActivityTypeTypeInfoActivityType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfDescribeActivityTypeInput) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeActivityType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeActivityType.typeInfo.activityType.name'),
        outputPath: 'typeInfo.activityType.name',
        parameters: {
          domain: this.__input.domain,
          activityType: {
            name: this.__input.activityType.name,
            version: this.__input.activityType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeActivityType.typeInfo.activityType.name', props);
    return resource.getResponseField('typeInfo.activityType.name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeActivityType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeActivityType.typeInfo.activityType.version'),
        outputPath: 'typeInfo.activityType.version',
        parameters: {
          domain: this.__input.domain,
          activityType: {
            name: this.__input.activityType.name,
            version: this.__input.activityType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeActivityType.typeInfo.activityType.version', props);
    return resource.getResponseField('typeInfo.activityType.version') as unknown as string;
  }

}

export class SWFResponsesDescribeActivityTypeConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfDescribeActivityTypeInput) {
  }

  public get defaultTaskStartToCloseTimeout(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeActivityType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeActivityType.configuration.defaultTaskStartToCloseTimeout'),
        outputPath: 'configuration.defaultTaskStartToCloseTimeout',
        parameters: {
          domain: this.__input.domain,
          activityType: {
            name: this.__input.activityType.name,
            version: this.__input.activityType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeActivityType.configuration.defaultTaskStartToCloseTimeout', props);
    return resource.getResponseField('configuration.defaultTaskStartToCloseTimeout') as unknown as string;
  }

  public get defaultTaskHeartbeatTimeout(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeActivityType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeActivityType.configuration.defaultTaskHeartbeatTimeout'),
        outputPath: 'configuration.defaultTaskHeartbeatTimeout',
        parameters: {
          domain: this.__input.domain,
          activityType: {
            name: this.__input.activityType.name,
            version: this.__input.activityType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeActivityType.configuration.defaultTaskHeartbeatTimeout', props);
    return resource.getResponseField('configuration.defaultTaskHeartbeatTimeout') as unknown as string;
  }

  public get defaultTaskList(): SWFResponsesDescribeActivityTypeConfigurationDefaultTaskList {
    return new SWFResponsesDescribeActivityTypeConfigurationDefaultTaskList(this.__scope, this.__resources, this.__input);
  }

  public get defaultTaskPriority(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeActivityType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeActivityType.configuration.defaultTaskPriority'),
        outputPath: 'configuration.defaultTaskPriority',
        parameters: {
          domain: this.__input.domain,
          activityType: {
            name: this.__input.activityType.name,
            version: this.__input.activityType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeActivityType.configuration.defaultTaskPriority', props);
    return resource.getResponseField('configuration.defaultTaskPriority') as unknown as string;
  }

  public get defaultTaskScheduleToStartTimeout(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeActivityType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeActivityType.configuration.defaultTaskScheduleToStartTimeout'),
        outputPath: 'configuration.defaultTaskScheduleToStartTimeout',
        parameters: {
          domain: this.__input.domain,
          activityType: {
            name: this.__input.activityType.name,
            version: this.__input.activityType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeActivityType.configuration.defaultTaskScheduleToStartTimeout', props);
    return resource.getResponseField('configuration.defaultTaskScheduleToStartTimeout') as unknown as string;
  }

  public get defaultTaskScheduleToCloseTimeout(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeActivityType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeActivityType.configuration.defaultTaskScheduleToCloseTimeout'),
        outputPath: 'configuration.defaultTaskScheduleToCloseTimeout',
        parameters: {
          domain: this.__input.domain,
          activityType: {
            name: this.__input.activityType.name,
            version: this.__input.activityType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeActivityType.configuration.defaultTaskScheduleToCloseTimeout', props);
    return resource.getResponseField('configuration.defaultTaskScheduleToCloseTimeout') as unknown as string;
  }

}

export class SWFResponsesDescribeActivityTypeConfigurationDefaultTaskList {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfDescribeActivityTypeInput) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeActivityType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeActivityType.configuration.defaultTaskList.name'),
        outputPath: 'configuration.defaultTaskList.name',
        parameters: {
          domain: this.__input.domain,
          activityType: {
            name: this.__input.activityType.name,
            version: this.__input.activityType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeActivityType.configuration.defaultTaskList.name', props);
    return resource.getResponseField('configuration.defaultTaskList.name') as unknown as string;
  }

}

export class SWFResponsesDescribeDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfDescribeDomainInput) {
  }

  public get domainInfo(): SWFResponsesDescribeDomainDomainInfo {
    return new SWFResponsesDescribeDomainDomainInfo(this.__scope, this.__resources, this.__input);
  }

  public get configuration(): SWFResponsesDescribeDomainConfiguration {
    return new SWFResponsesDescribeDomainConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class SWFResponsesDescribeDomainDomainInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfDescribeDomainInput) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeDomain.domainInfo.name'),
        outputPath: 'domainInfo.name',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.domainInfo.name', props);
    return resource.getResponseField('domainInfo.name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeDomain.domainInfo.status'),
        outputPath: 'domainInfo.status',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.domainInfo.status', props);
    return resource.getResponseField('domainInfo.status') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeDomain.domainInfo.description'),
        outputPath: 'domainInfo.description',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.domainInfo.description', props);
    return resource.getResponseField('domainInfo.description') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeDomain.domainInfo.arn'),
        outputPath: 'domainInfo.arn',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.domainInfo.arn', props);
    return resource.getResponseField('domainInfo.arn') as unknown as string;
  }

}

export class SWFResponsesDescribeDomainConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfDescribeDomainInput) {
  }

  public get workflowExecutionRetentionPeriodInDays(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeDomain.configuration.workflowExecutionRetentionPeriodInDays'),
        outputPath: 'configuration.workflowExecutionRetentionPeriodInDays',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.configuration.workflowExecutionRetentionPeriodInDays', props);
    return resource.getResponseField('configuration.workflowExecutionRetentionPeriodInDays') as unknown as string;
  }

}

export class SWFResponsesDescribeWorkflowExecution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfDescribeWorkflowExecutionInput) {
  }

  public get executionInfo(): SWFResponsesDescribeWorkflowExecutionExecutionInfo {
    return new SWFResponsesDescribeWorkflowExecutionExecutionInfo(this.__scope, this.__resources, this.__input);
  }

  public get executionConfiguration(): SWFResponsesDescribeWorkflowExecutionExecutionConfiguration {
    return new SWFResponsesDescribeWorkflowExecutionExecutionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get openCounts(): SWFResponsesDescribeWorkflowExecutionOpenCounts {
    return new SWFResponsesDescribeWorkflowExecutionOpenCounts(this.__scope, this.__resources, this.__input);
  }

  public get latestActivityTaskTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowExecution.latestActivityTaskTimestamp'),
        outputPath: 'latestActivityTaskTimestamp',
        parameters: {
          domain: this.__input.domain,
          execution: {
            workflowId: this.__input.execution.workflowId,
            runId: this.__input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowExecution.latestActivityTaskTimestamp', props);
    return resource.getResponseField('latestActivityTaskTimestamp') as unknown as string;
  }

  public get latestExecutionContext(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowExecution.latestExecutionContext'),
        outputPath: 'latestExecutionContext',
        parameters: {
          domain: this.__input.domain,
          execution: {
            workflowId: this.__input.execution.workflowId,
            runId: this.__input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowExecution.latestExecutionContext', props);
    return resource.getResponseField('latestExecutionContext') as unknown as string;
  }

}

export class SWFResponsesDescribeWorkflowExecutionExecutionInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfDescribeWorkflowExecutionInput) {
  }

  public get execution(): SWFResponsesDescribeWorkflowExecutionExecutionInfoExecution {
    return new SWFResponsesDescribeWorkflowExecutionExecutionInfoExecution(this.__scope, this.__resources, this.__input);
  }

  public get workflowType(): SWFResponsesDescribeWorkflowExecutionExecutionInfoWorkflowType {
    return new SWFResponsesDescribeWorkflowExecutionExecutionInfoWorkflowType(this.__scope, this.__resources, this.__input);
  }

  public get startTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowExecution.executionInfo.startTimestamp'),
        outputPath: 'executionInfo.startTimestamp',
        parameters: {
          domain: this.__input.domain,
          execution: {
            workflowId: this.__input.execution.workflowId,
            runId: this.__input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowExecution.executionInfo.startTimestamp', props);
    return resource.getResponseField('executionInfo.startTimestamp') as unknown as string;
  }

  public get closeTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowExecution.executionInfo.closeTimestamp'),
        outputPath: 'executionInfo.closeTimestamp',
        parameters: {
          domain: this.__input.domain,
          execution: {
            workflowId: this.__input.execution.workflowId,
            runId: this.__input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowExecution.executionInfo.closeTimestamp', props);
    return resource.getResponseField('executionInfo.closeTimestamp') as unknown as string;
  }

  public get executionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowExecution.executionInfo.executionStatus'),
        outputPath: 'executionInfo.executionStatus',
        parameters: {
          domain: this.__input.domain,
          execution: {
            workflowId: this.__input.execution.workflowId,
            runId: this.__input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowExecution.executionInfo.executionStatus', props);
    return resource.getResponseField('executionInfo.executionStatus') as unknown as string;
  }

  public get closeStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowExecution.executionInfo.closeStatus'),
        outputPath: 'executionInfo.closeStatus',
        parameters: {
          domain: this.__input.domain,
          execution: {
            workflowId: this.__input.execution.workflowId,
            runId: this.__input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowExecution.executionInfo.closeStatus', props);
    return resource.getResponseField('executionInfo.closeStatus') as unknown as string;
  }

  public get parent(): SWFResponsesDescribeWorkflowExecutionExecutionInfoParent {
    return new SWFResponsesDescribeWorkflowExecutionExecutionInfoParent(this.__scope, this.__resources, this.__input);
  }

  public get tagList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowExecution.executionInfo.tagList'),
        outputPath: 'executionInfo.tagList',
        parameters: {
          domain: this.__input.domain,
          execution: {
            workflowId: this.__input.execution.workflowId,
            runId: this.__input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowExecution.executionInfo.tagList', props);
    return resource.getResponseField('executionInfo.tagList') as unknown as string[];
  }

  public get cancelRequested(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowExecution.executionInfo.cancelRequested'),
        outputPath: 'executionInfo.cancelRequested',
        parameters: {
          domain: this.__input.domain,
          execution: {
            workflowId: this.__input.execution.workflowId,
            runId: this.__input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowExecution.executionInfo.cancelRequested', props);
    return resource.getResponseField('executionInfo.cancelRequested') as unknown as boolean;
  }

}

export class SWFResponsesDescribeWorkflowExecutionExecutionInfoExecution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfDescribeWorkflowExecutionInput) {
  }

  public get workflowId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowExecution.executionInfo.execution.workflowId'),
        outputPath: 'executionInfo.execution.workflowId',
        parameters: {
          domain: this.__input.domain,
          execution: {
            workflowId: this.__input.execution.workflowId,
            runId: this.__input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowExecution.executionInfo.execution.workflowId', props);
    return resource.getResponseField('executionInfo.execution.workflowId') as unknown as string;
  }

  public get runId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowExecution.executionInfo.execution.runId'),
        outputPath: 'executionInfo.execution.runId',
        parameters: {
          domain: this.__input.domain,
          execution: {
            workflowId: this.__input.execution.workflowId,
            runId: this.__input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowExecution.executionInfo.execution.runId', props);
    return resource.getResponseField('executionInfo.execution.runId') as unknown as string;
  }

}

export class SWFResponsesDescribeWorkflowExecutionExecutionInfoWorkflowType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfDescribeWorkflowExecutionInput) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowExecution.executionInfo.workflowType.name'),
        outputPath: 'executionInfo.workflowType.name',
        parameters: {
          domain: this.__input.domain,
          execution: {
            workflowId: this.__input.execution.workflowId,
            runId: this.__input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowExecution.executionInfo.workflowType.name', props);
    return resource.getResponseField('executionInfo.workflowType.name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowExecution.executionInfo.workflowType.version'),
        outputPath: 'executionInfo.workflowType.version',
        parameters: {
          domain: this.__input.domain,
          execution: {
            workflowId: this.__input.execution.workflowId,
            runId: this.__input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowExecution.executionInfo.workflowType.version', props);
    return resource.getResponseField('executionInfo.workflowType.version') as unknown as string;
  }

}

export class SWFResponsesDescribeWorkflowExecutionExecutionInfoParent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfDescribeWorkflowExecutionInput) {
  }

  public get workflowId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowExecution.executionInfo.parent.workflowId'),
        outputPath: 'executionInfo.parent.workflowId',
        parameters: {
          domain: this.__input.domain,
          execution: {
            workflowId: this.__input.execution.workflowId,
            runId: this.__input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowExecution.executionInfo.parent.workflowId', props);
    return resource.getResponseField('executionInfo.parent.workflowId') as unknown as string;
  }

  public get runId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowExecution.executionInfo.parent.runId'),
        outputPath: 'executionInfo.parent.runId',
        parameters: {
          domain: this.__input.domain,
          execution: {
            workflowId: this.__input.execution.workflowId,
            runId: this.__input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowExecution.executionInfo.parent.runId', props);
    return resource.getResponseField('executionInfo.parent.runId') as unknown as string;
  }

}

export class SWFResponsesDescribeWorkflowExecutionExecutionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfDescribeWorkflowExecutionInput) {
  }

  public get taskStartToCloseTimeout(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowExecution.executionConfiguration.taskStartToCloseTimeout'),
        outputPath: 'executionConfiguration.taskStartToCloseTimeout',
        parameters: {
          domain: this.__input.domain,
          execution: {
            workflowId: this.__input.execution.workflowId,
            runId: this.__input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowExecution.executionConfiguration.taskStartToCloseTimeout', props);
    return resource.getResponseField('executionConfiguration.taskStartToCloseTimeout') as unknown as string;
  }

  public get executionStartToCloseTimeout(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowExecution.executionConfiguration.executionStartToCloseTimeout'),
        outputPath: 'executionConfiguration.executionStartToCloseTimeout',
        parameters: {
          domain: this.__input.domain,
          execution: {
            workflowId: this.__input.execution.workflowId,
            runId: this.__input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowExecution.executionConfiguration.executionStartToCloseTimeout', props);
    return resource.getResponseField('executionConfiguration.executionStartToCloseTimeout') as unknown as string;
  }

  public get taskList(): SWFResponsesDescribeWorkflowExecutionExecutionConfigurationTaskList {
    return new SWFResponsesDescribeWorkflowExecutionExecutionConfigurationTaskList(this.__scope, this.__resources, this.__input);
  }

  public get taskPriority(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowExecution.executionConfiguration.taskPriority'),
        outputPath: 'executionConfiguration.taskPriority',
        parameters: {
          domain: this.__input.domain,
          execution: {
            workflowId: this.__input.execution.workflowId,
            runId: this.__input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowExecution.executionConfiguration.taskPriority', props);
    return resource.getResponseField('executionConfiguration.taskPriority') as unknown as string;
  }

  public get childPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowExecution.executionConfiguration.childPolicy'),
        outputPath: 'executionConfiguration.childPolicy',
        parameters: {
          domain: this.__input.domain,
          execution: {
            workflowId: this.__input.execution.workflowId,
            runId: this.__input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowExecution.executionConfiguration.childPolicy', props);
    return resource.getResponseField('executionConfiguration.childPolicy') as unknown as string;
  }

  public get lambdaRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowExecution.executionConfiguration.lambdaRole'),
        outputPath: 'executionConfiguration.lambdaRole',
        parameters: {
          domain: this.__input.domain,
          execution: {
            workflowId: this.__input.execution.workflowId,
            runId: this.__input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowExecution.executionConfiguration.lambdaRole', props);
    return resource.getResponseField('executionConfiguration.lambdaRole') as unknown as string;
  }

}

export class SWFResponsesDescribeWorkflowExecutionExecutionConfigurationTaskList {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfDescribeWorkflowExecutionInput) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowExecution.executionConfiguration.taskList.name'),
        outputPath: 'executionConfiguration.taskList.name',
        parameters: {
          domain: this.__input.domain,
          execution: {
            workflowId: this.__input.execution.workflowId,
            runId: this.__input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowExecution.executionConfiguration.taskList.name', props);
    return resource.getResponseField('executionConfiguration.taskList.name') as unknown as string;
  }

}

export class SWFResponsesDescribeWorkflowExecutionOpenCounts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfDescribeWorkflowExecutionInput) {
  }

  public get openActivityTasks(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowExecution.openCounts.openActivityTasks'),
        outputPath: 'openCounts.openActivityTasks',
        parameters: {
          domain: this.__input.domain,
          execution: {
            workflowId: this.__input.execution.workflowId,
            runId: this.__input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowExecution.openCounts.openActivityTasks', props);
    return resource.getResponseField('openCounts.openActivityTasks') as unknown as number;
  }

  public get openDecisionTasks(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowExecution.openCounts.openDecisionTasks'),
        outputPath: 'openCounts.openDecisionTasks',
        parameters: {
          domain: this.__input.domain,
          execution: {
            workflowId: this.__input.execution.workflowId,
            runId: this.__input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowExecution.openCounts.openDecisionTasks', props);
    return resource.getResponseField('openCounts.openDecisionTasks') as unknown as number;
  }

  public get openTimers(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowExecution.openCounts.openTimers'),
        outputPath: 'openCounts.openTimers',
        parameters: {
          domain: this.__input.domain,
          execution: {
            workflowId: this.__input.execution.workflowId,
            runId: this.__input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowExecution.openCounts.openTimers', props);
    return resource.getResponseField('openCounts.openTimers') as unknown as number;
  }

  public get openChildWorkflowExecutions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowExecution.openCounts.openChildWorkflowExecutions'),
        outputPath: 'openCounts.openChildWorkflowExecutions',
        parameters: {
          domain: this.__input.domain,
          execution: {
            workflowId: this.__input.execution.workflowId,
            runId: this.__input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowExecution.openCounts.openChildWorkflowExecutions', props);
    return resource.getResponseField('openCounts.openChildWorkflowExecutions') as unknown as number;
  }

  public get openLambdaFunctions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowExecution.openCounts.openLambdaFunctions'),
        outputPath: 'openCounts.openLambdaFunctions',
        parameters: {
          domain: this.__input.domain,
          execution: {
            workflowId: this.__input.execution.workflowId,
            runId: this.__input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowExecution.openCounts.openLambdaFunctions', props);
    return resource.getResponseField('openCounts.openLambdaFunctions') as unknown as number;
  }

}

export class SWFResponsesDescribeWorkflowType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfDescribeWorkflowTypeInput) {
  }

  public get typeInfo(): SWFResponsesDescribeWorkflowTypeTypeInfo {
    return new SWFResponsesDescribeWorkflowTypeTypeInfo(this.__scope, this.__resources, this.__input);
  }

  public get configuration(): SWFResponsesDescribeWorkflowTypeConfiguration {
    return new SWFResponsesDescribeWorkflowTypeConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class SWFResponsesDescribeWorkflowTypeTypeInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfDescribeWorkflowTypeInput) {
  }

  public get workflowType(): SWFResponsesDescribeWorkflowTypeTypeInfoWorkflowType {
    return new SWFResponsesDescribeWorkflowTypeTypeInfoWorkflowType(this.__scope, this.__resources, this.__input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowType.typeInfo.status'),
        outputPath: 'typeInfo.status',
        parameters: {
          domain: this.__input.domain,
          workflowType: {
            name: this.__input.workflowType.name,
            version: this.__input.workflowType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowType.typeInfo.status', props);
    return resource.getResponseField('typeInfo.status') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowType.typeInfo.description'),
        outputPath: 'typeInfo.description',
        parameters: {
          domain: this.__input.domain,
          workflowType: {
            name: this.__input.workflowType.name,
            version: this.__input.workflowType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowType.typeInfo.description', props);
    return resource.getResponseField('typeInfo.description') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowType.typeInfo.creationDate'),
        outputPath: 'typeInfo.creationDate',
        parameters: {
          domain: this.__input.domain,
          workflowType: {
            name: this.__input.workflowType.name,
            version: this.__input.workflowType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowType.typeInfo.creationDate', props);
    return resource.getResponseField('typeInfo.creationDate') as unknown as string;
  }

  public get deprecationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowType.typeInfo.deprecationDate'),
        outputPath: 'typeInfo.deprecationDate',
        parameters: {
          domain: this.__input.domain,
          workflowType: {
            name: this.__input.workflowType.name,
            version: this.__input.workflowType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowType.typeInfo.deprecationDate', props);
    return resource.getResponseField('typeInfo.deprecationDate') as unknown as string;
  }

}

export class SWFResponsesDescribeWorkflowTypeTypeInfoWorkflowType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfDescribeWorkflowTypeInput) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowType.typeInfo.workflowType.name'),
        outputPath: 'typeInfo.workflowType.name',
        parameters: {
          domain: this.__input.domain,
          workflowType: {
            name: this.__input.workflowType.name,
            version: this.__input.workflowType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowType.typeInfo.workflowType.name', props);
    return resource.getResponseField('typeInfo.workflowType.name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowType.typeInfo.workflowType.version'),
        outputPath: 'typeInfo.workflowType.version',
        parameters: {
          domain: this.__input.domain,
          workflowType: {
            name: this.__input.workflowType.name,
            version: this.__input.workflowType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowType.typeInfo.workflowType.version', props);
    return resource.getResponseField('typeInfo.workflowType.version') as unknown as string;
  }

}

export class SWFResponsesDescribeWorkflowTypeConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfDescribeWorkflowTypeInput) {
  }

  public get defaultTaskStartToCloseTimeout(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowType.configuration.defaultTaskStartToCloseTimeout'),
        outputPath: 'configuration.defaultTaskStartToCloseTimeout',
        parameters: {
          domain: this.__input.domain,
          workflowType: {
            name: this.__input.workflowType.name,
            version: this.__input.workflowType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowType.configuration.defaultTaskStartToCloseTimeout', props);
    return resource.getResponseField('configuration.defaultTaskStartToCloseTimeout') as unknown as string;
  }

  public get defaultExecutionStartToCloseTimeout(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowType.configuration.defaultExecutionStartToCloseTimeout'),
        outputPath: 'configuration.defaultExecutionStartToCloseTimeout',
        parameters: {
          domain: this.__input.domain,
          workflowType: {
            name: this.__input.workflowType.name,
            version: this.__input.workflowType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowType.configuration.defaultExecutionStartToCloseTimeout', props);
    return resource.getResponseField('configuration.defaultExecutionStartToCloseTimeout') as unknown as string;
  }

  public get defaultTaskList(): SWFResponsesDescribeWorkflowTypeConfigurationDefaultTaskList {
    return new SWFResponsesDescribeWorkflowTypeConfigurationDefaultTaskList(this.__scope, this.__resources, this.__input);
  }

  public get defaultTaskPriority(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowType.configuration.defaultTaskPriority'),
        outputPath: 'configuration.defaultTaskPriority',
        parameters: {
          domain: this.__input.domain,
          workflowType: {
            name: this.__input.workflowType.name,
            version: this.__input.workflowType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowType.configuration.defaultTaskPriority', props);
    return resource.getResponseField('configuration.defaultTaskPriority') as unknown as string;
  }

  public get defaultChildPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowType.configuration.defaultChildPolicy'),
        outputPath: 'configuration.defaultChildPolicy',
        parameters: {
          domain: this.__input.domain,
          workflowType: {
            name: this.__input.workflowType.name,
            version: this.__input.workflowType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowType.configuration.defaultChildPolicy', props);
    return resource.getResponseField('configuration.defaultChildPolicy') as unknown as string;
  }

  public get defaultLambdaRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowType.configuration.defaultLambdaRole'),
        outputPath: 'configuration.defaultLambdaRole',
        parameters: {
          domain: this.__input.domain,
          workflowType: {
            name: this.__input.workflowType.name,
            version: this.__input.workflowType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowType.configuration.defaultLambdaRole', props);
    return resource.getResponseField('configuration.defaultLambdaRole') as unknown as string;
  }

}

export class SWFResponsesDescribeWorkflowTypeConfigurationDefaultTaskList {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfDescribeWorkflowTypeInput) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkflowType',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.DescribeWorkflowType.configuration.defaultTaskList.name'),
        outputPath: 'configuration.defaultTaskList.name',
        parameters: {
          domain: this.__input.domain,
          workflowType: {
            name: this.__input.workflowType.name,
            version: this.__input.workflowType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkflowType.configuration.defaultTaskList.name', props);
    return resource.getResponseField('configuration.defaultTaskList.name') as unknown as string;
  }

}

export class SWFResponsesFetchWorkflowExecutionHistory {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfGetWorkflowExecutionHistoryInput) {
  }

  public get events(): shapes.SwfHistoryEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowExecutionHistory',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.GetWorkflowExecutionHistory.events'),
        outputPath: 'events',
        parameters: {
          domain: this.__input.domain,
          execution: {
            workflowId: this.__input.execution.workflowId,
            runId: this.__input.execution.runId,
          },
          nextPageToken: this.__input.nextPageToken,
          maximumPageSize: this.__input.maximumPageSize,
          reverseOrder: this.__input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflowExecutionHistory.events', props);
    return resource.getResponseField('events') as unknown as shapes.SwfHistoryEvent[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowExecutionHistory',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.GetWorkflowExecutionHistory.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          domain: this.__input.domain,
          execution: {
            workflowId: this.__input.execution.workflowId,
            runId: this.__input.execution.runId,
          },
          nextPageToken: this.__input.nextPageToken,
          maximumPageSize: this.__input.maximumPageSize,
          reverseOrder: this.__input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflowExecutionHistory.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class SWFResponsesListActivityTypes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfListActivityTypesInput) {
  }

  public get typeInfos(): shapes.SwfActivityTypeInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listActivityTypes',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.ListActivityTypes.typeInfos'),
        outputPath: 'typeInfos',
        parameters: {
          domain: this.__input.domain,
          name: this.__input.name,
          registrationStatus: this.__input.registrationStatus,
          nextPageToken: this.__input.nextPageToken,
          maximumPageSize: this.__input.maximumPageSize,
          reverseOrder: this.__input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListActivityTypes.typeInfos', props);
    return resource.getResponseField('typeInfos') as unknown as shapes.SwfActivityTypeInfo[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listActivityTypes',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.ListActivityTypes.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          domain: this.__input.domain,
          name: this.__input.name,
          registrationStatus: this.__input.registrationStatus,
          nextPageToken: this.__input.nextPageToken,
          maximumPageSize: this.__input.maximumPageSize,
          reverseOrder: this.__input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListActivityTypes.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class SWFResponsesListClosedWorkflowExecutions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfListClosedWorkflowExecutionsInput) {
  }

  public get executionInfos(): shapes.SwfWorkflowExecutionInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listClosedWorkflowExecutions',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.ListClosedWorkflowExecutions.executionInfos'),
        outputPath: 'executionInfos',
        parameters: {
          domain: this.__input.domain,
          startTimeFilter: {
            oldestDate: this.__input.startTimeFilter?.oldestDate,
            latestDate: this.__input.startTimeFilter?.latestDate,
          },
          closeTimeFilter: {
            oldestDate: this.__input.closeTimeFilter?.oldestDate,
            latestDate: this.__input.closeTimeFilter?.latestDate,
          },
          executionFilter: {
            workflowId: this.__input.executionFilter?.workflowId,
          },
          closeStatusFilter: {
            status: this.__input.closeStatusFilter?.status,
          },
          typeFilter: {
            name: this.__input.typeFilter?.name,
            version: this.__input.typeFilter?.version,
          },
          tagFilter: {
            tag: this.__input.tagFilter?.tag,
          },
          nextPageToken: this.__input.nextPageToken,
          maximumPageSize: this.__input.maximumPageSize,
          reverseOrder: this.__input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListClosedWorkflowExecutions.executionInfos', props);
    return resource.getResponseField('executionInfos') as unknown as shapes.SwfWorkflowExecutionInfo[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listClosedWorkflowExecutions',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.ListClosedWorkflowExecutions.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          domain: this.__input.domain,
          startTimeFilter: {
            oldestDate: this.__input.startTimeFilter?.oldestDate,
            latestDate: this.__input.startTimeFilter?.latestDate,
          },
          closeTimeFilter: {
            oldestDate: this.__input.closeTimeFilter?.oldestDate,
            latestDate: this.__input.closeTimeFilter?.latestDate,
          },
          executionFilter: {
            workflowId: this.__input.executionFilter?.workflowId,
          },
          closeStatusFilter: {
            status: this.__input.closeStatusFilter?.status,
          },
          typeFilter: {
            name: this.__input.typeFilter?.name,
            version: this.__input.typeFilter?.version,
          },
          tagFilter: {
            tag: this.__input.tagFilter?.tag,
          },
          nextPageToken: this.__input.nextPageToken,
          maximumPageSize: this.__input.maximumPageSize,
          reverseOrder: this.__input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListClosedWorkflowExecutions.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class SWFResponsesListDomains {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfListDomainsInput) {
  }

  public get domainInfos(): shapes.SwfDomainInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDomains',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.ListDomains.domainInfos'),
        outputPath: 'domainInfos',
        parameters: {
          nextPageToken: this.__input.nextPageToken,
          registrationStatus: this.__input.registrationStatus,
          maximumPageSize: this.__input.maximumPageSize,
          reverseOrder: this.__input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDomains.domainInfos', props);
    return resource.getResponseField('domainInfos') as unknown as shapes.SwfDomainInfo[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDomains',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.ListDomains.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          nextPageToken: this.__input.nextPageToken,
          registrationStatus: this.__input.registrationStatus,
          maximumPageSize: this.__input.maximumPageSize,
          reverseOrder: this.__input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDomains.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class SWFResponsesListOpenWorkflowExecutions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfListOpenWorkflowExecutionsInput) {
  }

  public get executionInfos(): shapes.SwfWorkflowExecutionInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOpenWorkflowExecutions',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.ListOpenWorkflowExecutions.executionInfos'),
        outputPath: 'executionInfos',
        parameters: {
          domain: this.__input.domain,
          startTimeFilter: {
            oldestDate: this.__input.startTimeFilter.oldestDate,
            latestDate: this.__input.startTimeFilter.latestDate,
          },
          typeFilter: {
            name: this.__input.typeFilter?.name,
            version: this.__input.typeFilter?.version,
          },
          tagFilter: {
            tag: this.__input.tagFilter?.tag,
          },
          nextPageToken: this.__input.nextPageToken,
          maximumPageSize: this.__input.maximumPageSize,
          reverseOrder: this.__input.reverseOrder,
          executionFilter: {
            workflowId: this.__input.executionFilter?.workflowId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOpenWorkflowExecutions.executionInfos', props);
    return resource.getResponseField('executionInfos') as unknown as shapes.SwfWorkflowExecutionInfo[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOpenWorkflowExecutions',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.ListOpenWorkflowExecutions.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          domain: this.__input.domain,
          startTimeFilter: {
            oldestDate: this.__input.startTimeFilter.oldestDate,
            latestDate: this.__input.startTimeFilter.latestDate,
          },
          typeFilter: {
            name: this.__input.typeFilter?.name,
            version: this.__input.typeFilter?.version,
          },
          tagFilter: {
            tag: this.__input.tagFilter?.tag,
          },
          nextPageToken: this.__input.nextPageToken,
          maximumPageSize: this.__input.maximumPageSize,
          reverseOrder: this.__input.reverseOrder,
          executionFilter: {
            workflowId: this.__input.executionFilter?.workflowId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOpenWorkflowExecutions.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class SWFResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfListTagsForResourceInput) {
  }

  public get tags(): shapes.SwfResourceTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.SwfResourceTag[];
  }

}

export class SWFResponsesListWorkflowTypes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfListWorkflowTypesInput) {
  }

  public get typeInfos(): shapes.SwfWorkflowTypeInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWorkflowTypes',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.ListWorkflowTypes.typeInfos'),
        outputPath: 'typeInfos',
        parameters: {
          domain: this.__input.domain,
          name: this.__input.name,
          registrationStatus: this.__input.registrationStatus,
          nextPageToken: this.__input.nextPageToken,
          maximumPageSize: this.__input.maximumPageSize,
          reverseOrder: this.__input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWorkflowTypes.typeInfos', props);
    return resource.getResponseField('typeInfos') as unknown as shapes.SwfWorkflowTypeInfo[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWorkflowTypes',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.ListWorkflowTypes.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          domain: this.__input.domain,
          name: this.__input.name,
          registrationStatus: this.__input.registrationStatus,
          nextPageToken: this.__input.nextPageToken,
          maximumPageSize: this.__input.maximumPageSize,
          reverseOrder: this.__input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWorkflowTypes.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class SWFResponsesPollForActivityTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfPollForActivityTaskInput) {
  }

  public get taskToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pollForActivityTask',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.PollForActivityTask.taskToken'),
        outputPath: 'taskToken',
        parameters: {
          domain: this.__input.domain,
          taskList: {
            name: this.__input.taskList.name,
          },
          identity: this.__input.identity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PollForActivityTask.taskToken', props);
    return resource.getResponseField('taskToken') as unknown as string;
  }

  public get activityId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pollForActivityTask',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.PollForActivityTask.activityId'),
        outputPath: 'activityId',
        parameters: {
          domain: this.__input.domain,
          taskList: {
            name: this.__input.taskList.name,
          },
          identity: this.__input.identity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PollForActivityTask.activityId', props);
    return resource.getResponseField('activityId') as unknown as string;
  }

  public get startedEventId(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pollForActivityTask',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.PollForActivityTask.startedEventId'),
        outputPath: 'startedEventId',
        parameters: {
          domain: this.__input.domain,
          taskList: {
            name: this.__input.taskList.name,
          },
          identity: this.__input.identity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PollForActivityTask.startedEventId', props);
    return resource.getResponseField('startedEventId') as unknown as number;
  }

  public get workflowExecution(): SWFResponsesPollForActivityTaskWorkflowExecution {
    return new SWFResponsesPollForActivityTaskWorkflowExecution(this.__scope, this.__resources, this.__input);
  }

  public get activityType(): SWFResponsesPollForActivityTaskActivityType {
    return new SWFResponsesPollForActivityTaskActivityType(this.__scope, this.__resources, this.__input);
  }

  public get input(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pollForActivityTask',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.PollForActivityTask.input'),
        outputPath: 'input',
        parameters: {
          domain: this.__input.domain,
          taskList: {
            name: this.__input.taskList.name,
          },
          identity: this.__input.identity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PollForActivityTask.input', props);
    return resource.getResponseField('input') as unknown as string;
  }

}

export class SWFResponsesPollForActivityTaskWorkflowExecution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfPollForActivityTaskInput) {
  }

  public get workflowId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pollForActivityTask',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.PollForActivityTask.workflowExecution.workflowId'),
        outputPath: 'workflowExecution.workflowId',
        parameters: {
          domain: this.__input.domain,
          taskList: {
            name: this.__input.taskList.name,
          },
          identity: this.__input.identity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PollForActivityTask.workflowExecution.workflowId', props);
    return resource.getResponseField('workflowExecution.workflowId') as unknown as string;
  }

  public get runId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pollForActivityTask',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.PollForActivityTask.workflowExecution.runId'),
        outputPath: 'workflowExecution.runId',
        parameters: {
          domain: this.__input.domain,
          taskList: {
            name: this.__input.taskList.name,
          },
          identity: this.__input.identity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PollForActivityTask.workflowExecution.runId', props);
    return resource.getResponseField('workflowExecution.runId') as unknown as string;
  }

}

export class SWFResponsesPollForActivityTaskActivityType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfPollForActivityTaskInput) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pollForActivityTask',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.PollForActivityTask.activityType.name'),
        outputPath: 'activityType.name',
        parameters: {
          domain: this.__input.domain,
          taskList: {
            name: this.__input.taskList.name,
          },
          identity: this.__input.identity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PollForActivityTask.activityType.name', props);
    return resource.getResponseField('activityType.name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pollForActivityTask',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.PollForActivityTask.activityType.version'),
        outputPath: 'activityType.version',
        parameters: {
          domain: this.__input.domain,
          taskList: {
            name: this.__input.taskList.name,
          },
          identity: this.__input.identity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PollForActivityTask.activityType.version', props);
    return resource.getResponseField('activityType.version') as unknown as string;
  }

}

export class SWFResponsesPollForDecisionTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfPollForDecisionTaskInput) {
  }

  public get taskToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pollForDecisionTask',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.PollForDecisionTask.taskToken'),
        outputPath: 'taskToken',
        parameters: {
          domain: this.__input.domain,
          taskList: {
            name: this.__input.taskList.name,
          },
          identity: this.__input.identity,
          nextPageToken: this.__input.nextPageToken,
          maximumPageSize: this.__input.maximumPageSize,
          reverseOrder: this.__input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PollForDecisionTask.taskToken', props);
    return resource.getResponseField('taskToken') as unknown as string;
  }

  public get startedEventId(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pollForDecisionTask',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.PollForDecisionTask.startedEventId'),
        outputPath: 'startedEventId',
        parameters: {
          domain: this.__input.domain,
          taskList: {
            name: this.__input.taskList.name,
          },
          identity: this.__input.identity,
          nextPageToken: this.__input.nextPageToken,
          maximumPageSize: this.__input.maximumPageSize,
          reverseOrder: this.__input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PollForDecisionTask.startedEventId', props);
    return resource.getResponseField('startedEventId') as unknown as number;
  }

  public get workflowExecution(): SWFResponsesPollForDecisionTaskWorkflowExecution {
    return new SWFResponsesPollForDecisionTaskWorkflowExecution(this.__scope, this.__resources, this.__input);
  }

  public get workflowType(): SWFResponsesPollForDecisionTaskWorkflowType {
    return new SWFResponsesPollForDecisionTaskWorkflowType(this.__scope, this.__resources, this.__input);
  }

  public get events(): shapes.SwfHistoryEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pollForDecisionTask',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.PollForDecisionTask.events'),
        outputPath: 'events',
        parameters: {
          domain: this.__input.domain,
          taskList: {
            name: this.__input.taskList.name,
          },
          identity: this.__input.identity,
          nextPageToken: this.__input.nextPageToken,
          maximumPageSize: this.__input.maximumPageSize,
          reverseOrder: this.__input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PollForDecisionTask.events', props);
    return resource.getResponseField('events') as unknown as shapes.SwfHistoryEvent[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pollForDecisionTask',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.PollForDecisionTask.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          domain: this.__input.domain,
          taskList: {
            name: this.__input.taskList.name,
          },
          identity: this.__input.identity,
          nextPageToken: this.__input.nextPageToken,
          maximumPageSize: this.__input.maximumPageSize,
          reverseOrder: this.__input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PollForDecisionTask.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

  public get previousStartedEventId(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pollForDecisionTask',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.PollForDecisionTask.previousStartedEventId'),
        outputPath: 'previousStartedEventId',
        parameters: {
          domain: this.__input.domain,
          taskList: {
            name: this.__input.taskList.name,
          },
          identity: this.__input.identity,
          nextPageToken: this.__input.nextPageToken,
          maximumPageSize: this.__input.maximumPageSize,
          reverseOrder: this.__input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PollForDecisionTask.previousStartedEventId', props);
    return resource.getResponseField('previousStartedEventId') as unknown as number;
  }

}

export class SWFResponsesPollForDecisionTaskWorkflowExecution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfPollForDecisionTaskInput) {
  }

  public get workflowId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pollForDecisionTask',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.PollForDecisionTask.workflowExecution.workflowId'),
        outputPath: 'workflowExecution.workflowId',
        parameters: {
          domain: this.__input.domain,
          taskList: {
            name: this.__input.taskList.name,
          },
          identity: this.__input.identity,
          nextPageToken: this.__input.nextPageToken,
          maximumPageSize: this.__input.maximumPageSize,
          reverseOrder: this.__input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PollForDecisionTask.workflowExecution.workflowId', props);
    return resource.getResponseField('workflowExecution.workflowId') as unknown as string;
  }

  public get runId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pollForDecisionTask',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.PollForDecisionTask.workflowExecution.runId'),
        outputPath: 'workflowExecution.runId',
        parameters: {
          domain: this.__input.domain,
          taskList: {
            name: this.__input.taskList.name,
          },
          identity: this.__input.identity,
          nextPageToken: this.__input.nextPageToken,
          maximumPageSize: this.__input.maximumPageSize,
          reverseOrder: this.__input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PollForDecisionTask.workflowExecution.runId', props);
    return resource.getResponseField('workflowExecution.runId') as unknown as string;
  }

}

export class SWFResponsesPollForDecisionTaskWorkflowType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfPollForDecisionTaskInput) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pollForDecisionTask',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.PollForDecisionTask.workflowType.name'),
        outputPath: 'workflowType.name',
        parameters: {
          domain: this.__input.domain,
          taskList: {
            name: this.__input.taskList.name,
          },
          identity: this.__input.identity,
          nextPageToken: this.__input.nextPageToken,
          maximumPageSize: this.__input.maximumPageSize,
          reverseOrder: this.__input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PollForDecisionTask.workflowType.name', props);
    return resource.getResponseField('workflowType.name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pollForDecisionTask',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.PollForDecisionTask.workflowType.version'),
        outputPath: 'workflowType.version',
        parameters: {
          domain: this.__input.domain,
          taskList: {
            name: this.__input.taskList.name,
          },
          identity: this.__input.identity,
          nextPageToken: this.__input.nextPageToken,
          maximumPageSize: this.__input.maximumPageSize,
          reverseOrder: this.__input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PollForDecisionTask.workflowType.version', props);
    return resource.getResponseField('workflowType.version') as unknown as string;
  }

}

export class SWFResponsesRecordActivityTaskHeartbeat {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfRecordActivityTaskHeartbeatInput) {
  }

  public get cancelRequested(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'recordActivityTaskHeartbeat',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.RecordActivityTaskHeartbeat.cancelRequested'),
        outputPath: 'cancelRequested',
        parameters: {
          taskToken: this.__input.taskToken,
          details: this.__input.details,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RecordActivityTaskHeartbeat.cancelRequested', props);
    return resource.getResponseField('cancelRequested') as unknown as boolean;
  }

}

export class SWFResponsesStartWorkflowExecution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SwfStartWorkflowExecutionInput) {
  }

  public get runId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startWorkflowExecution',
        service: 'SWF',
        physicalResourceId: cr.PhysicalResourceId.of('SWF.StartWorkflowExecution.runId'),
        outputPath: 'runId',
        parameters: {
          domain: this.__input.domain,
          workflowId: this.__input.workflowId,
          workflowType: {
            name: this.__input.workflowType.name,
            version: this.__input.workflowType.version,
          },
          taskList: {
            name: this.__input.taskList?.name,
          },
          taskPriority: this.__input.taskPriority,
          input: this.__input.input,
          executionStartToCloseTimeout: this.__input.executionStartToCloseTimeout,
          tagList: this.__input.tagList,
          taskStartToCloseTimeout: this.__input.taskStartToCloseTimeout,
          childPolicy: this.__input.childPolicy,
          lambdaRole: this.__input.lambdaRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartWorkflowExecution.runId', props);
    return resource.getResponseField('runId') as unknown as string;
  }

}

