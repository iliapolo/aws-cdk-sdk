import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SwfClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public countClosedWorkflowExecutions(input: shapes.SwfCountClosedWorkflowExecutionsInput): SWFCountClosedWorkflowExecutions {
    return new SWFCountClosedWorkflowExecutions(this, 'CountClosedWorkflowExecutions', this.__resources, input);
  }

  public countOpenWorkflowExecutions(input: shapes.SwfCountOpenWorkflowExecutionsInput): SWFCountOpenWorkflowExecutions {
    return new SWFCountOpenWorkflowExecutions(this, 'CountOpenWorkflowExecutions', this.__resources, input);
  }

  public countPendingActivityTasks(input: shapes.SwfCountPendingActivityTasksInput): SWFCountPendingActivityTasks {
    return new SWFCountPendingActivityTasks(this, 'CountPendingActivityTasks', this.__resources, input);
  }

  public countPendingDecisionTasks(input: shapes.SwfCountPendingDecisionTasksInput): SWFCountPendingDecisionTasks {
    return new SWFCountPendingDecisionTasks(this, 'CountPendingDecisionTasks', this.__resources, input);
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

  public describeActivityType(input: shapes.SwfDescribeActivityTypeInput): SWFDescribeActivityType {
    return new SWFDescribeActivityType(this, 'DescribeActivityType', this.__resources, input);
  }

  public describeDomain(input: shapes.SwfDescribeDomainInput): SWFDescribeDomain {
    return new SWFDescribeDomain(this, 'DescribeDomain', this.__resources, input);
  }

  public describeWorkflowExecution(input: shapes.SwfDescribeWorkflowExecutionInput): SWFDescribeWorkflowExecution {
    return new SWFDescribeWorkflowExecution(this, 'DescribeWorkflowExecution', this.__resources, input);
  }

  public describeWorkflowType(input: shapes.SwfDescribeWorkflowTypeInput): SWFDescribeWorkflowType {
    return new SWFDescribeWorkflowType(this, 'DescribeWorkflowType', this.__resources, input);
  }

  public fetchWorkflowExecutionHistory(input: shapes.SwfGetWorkflowExecutionHistoryInput): SWFFetchWorkflowExecutionHistory {
    return new SWFFetchWorkflowExecutionHistory(this, 'FetchWorkflowExecutionHistory', this.__resources, input);
  }

  public listActivityTypes(input: shapes.SwfListActivityTypesInput): SWFListActivityTypes {
    return new SWFListActivityTypes(this, 'ListActivityTypes', this.__resources, input);
  }

  public listClosedWorkflowExecutions(input: shapes.SwfListClosedWorkflowExecutionsInput): SWFListClosedWorkflowExecutions {
    return new SWFListClosedWorkflowExecutions(this, 'ListClosedWorkflowExecutions', this.__resources, input);
  }

  public listDomains(input: shapes.SwfListDomainsInput): SWFListDomains {
    return new SWFListDomains(this, 'ListDomains', this.__resources, input);
  }

  public listOpenWorkflowExecutions(input: shapes.SwfListOpenWorkflowExecutionsInput): SWFListOpenWorkflowExecutions {
    return new SWFListOpenWorkflowExecutions(this, 'ListOpenWorkflowExecutions', this.__resources, input);
  }

  public listTagsForResource(input: shapes.SwfListTagsForResourceInput): SWFListTagsForResource {
    return new SWFListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listWorkflowTypes(input: shapes.SwfListWorkflowTypesInput): SWFListWorkflowTypes {
    return new SWFListWorkflowTypes(this, 'ListWorkflowTypes', this.__resources, input);
  }

  public pollForActivityTask(input: shapes.SwfPollForActivityTaskInput): SWFPollForActivityTask {
    return new SWFPollForActivityTask(this, 'PollForActivityTask', this.__resources, input);
  }

  public pollForDecisionTask(input: shapes.SwfPollForDecisionTaskInput): SWFPollForDecisionTask {
    return new SWFPollForDecisionTask(this, 'PollForDecisionTask', this.__resources, input);
  }

  public recordActivityTaskHeartbeat(input: shapes.SwfRecordActivityTaskHeartbeatInput): SWFRecordActivityTaskHeartbeat {
    return new SWFRecordActivityTaskHeartbeat(this, 'RecordActivityTaskHeartbeat', this.__resources, input);
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

  public startWorkflowExecution(input: shapes.SwfStartWorkflowExecutionInput): SWFStartWorkflowExecution {
    return new SWFStartWorkflowExecution(this, 'StartWorkflowExecution', this.__resources, input);
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

export class SWFCountClosedWorkflowExecutions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfCountClosedWorkflowExecutionsInput) {
    super(scope, id);
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
          domain: this.input.domain,
          startTimeFilter: {
            oldestDate: this.input.startTimeFilter?.oldestDate,
            latestDate: this.input.startTimeFilter?.latestDate,
          },
          closeTimeFilter: {
            oldestDate: this.input.closeTimeFilter?.oldestDate,
            latestDate: this.input.closeTimeFilter?.latestDate,
          },
          executionFilter: {
            workflowId: this.input.executionFilter?.workflowId,
          },
          typeFilter: {
            name: this.input.typeFilter?.name,
            version: this.input.typeFilter?.version,
          },
          tagFilter: {
            tag: this.input.tagFilter?.tag,
          },
          closeStatusFilter: {
            status: this.input.closeStatusFilter?.status,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CountClosedWorkflowExecutions.count', props);
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
          domain: this.input.domain,
          startTimeFilter: {
            oldestDate: this.input.startTimeFilter?.oldestDate,
            latestDate: this.input.startTimeFilter?.latestDate,
          },
          closeTimeFilter: {
            oldestDate: this.input.closeTimeFilter?.oldestDate,
            latestDate: this.input.closeTimeFilter?.latestDate,
          },
          executionFilter: {
            workflowId: this.input.executionFilter?.workflowId,
          },
          typeFilter: {
            name: this.input.typeFilter?.name,
            version: this.input.typeFilter?.version,
          },
          tagFilter: {
            tag: this.input.tagFilter?.tag,
          },
          closeStatusFilter: {
            status: this.input.closeStatusFilter?.status,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CountClosedWorkflowExecutions.truncated', props);
    return resource.getResponseField('truncated') as unknown as boolean;
  }

}

export class SWFCountOpenWorkflowExecutions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfCountOpenWorkflowExecutionsInput) {
    super(scope, id);
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
          domain: this.input.domain,
          startTimeFilter: {
            oldestDate: this.input.startTimeFilter.oldestDate,
            latestDate: this.input.startTimeFilter.latestDate,
          },
          typeFilter: {
            name: this.input.typeFilter?.name,
            version: this.input.typeFilter?.version,
          },
          tagFilter: {
            tag: this.input.tagFilter?.tag,
          },
          executionFilter: {
            workflowId: this.input.executionFilter?.workflowId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CountOpenWorkflowExecutions.count', props);
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
          domain: this.input.domain,
          startTimeFilter: {
            oldestDate: this.input.startTimeFilter.oldestDate,
            latestDate: this.input.startTimeFilter.latestDate,
          },
          typeFilter: {
            name: this.input.typeFilter?.name,
            version: this.input.typeFilter?.version,
          },
          tagFilter: {
            tag: this.input.tagFilter?.tag,
          },
          executionFilter: {
            workflowId: this.input.executionFilter?.workflowId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CountOpenWorkflowExecutions.truncated', props);
    return resource.getResponseField('truncated') as unknown as boolean;
  }

}

export class SWFCountPendingActivityTasks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfCountPendingActivityTasksInput) {
    super(scope, id);
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
          domain: this.input.domain,
          taskList: {
            name: this.input.taskList.name,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CountPendingActivityTasks.count', props);
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
          domain: this.input.domain,
          taskList: {
            name: this.input.taskList.name,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CountPendingActivityTasks.truncated', props);
    return resource.getResponseField('truncated') as unknown as boolean;
  }

}

export class SWFCountPendingDecisionTasks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfCountPendingDecisionTasksInput) {
    super(scope, id);
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
          domain: this.input.domain,
          taskList: {
            name: this.input.taskList.name,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CountPendingDecisionTasks.count', props);
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
          domain: this.input.domain,
          taskList: {
            name: this.input.taskList.name,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CountPendingDecisionTasks.truncated', props);
    return resource.getResponseField('truncated') as unknown as boolean;
  }

}

export class SWFDescribeActivityType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfDescribeActivityTypeInput) {
    super(scope, id);
  }

  public get typeInfo(): SWFDescribeActivityTypeTypeInfo {
    return new SWFDescribeActivityTypeTypeInfo(this, 'TypeInfo', this.__resources, this.input);
  }

  public get configuration(): SWFDescribeActivityTypeConfiguration {
    return new SWFDescribeActivityTypeConfiguration(this, 'Configuration', this.__resources, this.input);
  }

}

export class SWFDescribeActivityTypeTypeInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfDescribeActivityTypeInput) {
    super(scope, id);
  }

  public get activityType(): SWFDescribeActivityTypeTypeInfoActivityType {
    return new SWFDescribeActivityTypeTypeInfoActivityType(this, 'ActivityType', this.__resources, this.input);
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
          domain: this.input.domain,
          activityType: {
            name: this.input.activityType.name,
            version: this.input.activityType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeActivityType.typeInfo.status', props);
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
          domain: this.input.domain,
          activityType: {
            name: this.input.activityType.name,
            version: this.input.activityType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeActivityType.typeInfo.description', props);
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
          domain: this.input.domain,
          activityType: {
            name: this.input.activityType.name,
            version: this.input.activityType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeActivityType.typeInfo.creationDate', props);
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
          domain: this.input.domain,
          activityType: {
            name: this.input.activityType.name,
            version: this.input.activityType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeActivityType.typeInfo.deprecationDate', props);
    return resource.getResponseField('typeInfo.deprecationDate') as unknown as string;
  }

}

export class SWFDescribeActivityTypeTypeInfoActivityType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfDescribeActivityTypeInput) {
    super(scope, id);
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
          domain: this.input.domain,
          activityType: {
            name: this.input.activityType.name,
            version: this.input.activityType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeActivityType.typeInfo.activityType.name', props);
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
          domain: this.input.domain,
          activityType: {
            name: this.input.activityType.name,
            version: this.input.activityType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeActivityType.typeInfo.activityType.version', props);
    return resource.getResponseField('typeInfo.activityType.version') as unknown as string;
  }

}

export class SWFDescribeActivityTypeConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfDescribeActivityTypeInput) {
    super(scope, id);
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
          domain: this.input.domain,
          activityType: {
            name: this.input.activityType.name,
            version: this.input.activityType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeActivityType.configuration.defaultTaskStartToCloseTimeout', props);
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
          domain: this.input.domain,
          activityType: {
            name: this.input.activityType.name,
            version: this.input.activityType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeActivityType.configuration.defaultTaskHeartbeatTimeout', props);
    return resource.getResponseField('configuration.defaultTaskHeartbeatTimeout') as unknown as string;
  }

  public get defaultTaskList(): SWFDescribeActivityTypeConfigurationDefaultTaskList {
    return new SWFDescribeActivityTypeConfigurationDefaultTaskList(this, 'DefaultTaskList', this.__resources, this.input);
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
          domain: this.input.domain,
          activityType: {
            name: this.input.activityType.name,
            version: this.input.activityType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeActivityType.configuration.defaultTaskPriority', props);
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
          domain: this.input.domain,
          activityType: {
            name: this.input.activityType.name,
            version: this.input.activityType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeActivityType.configuration.defaultTaskScheduleToStartTimeout', props);
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
          domain: this.input.domain,
          activityType: {
            name: this.input.activityType.name,
            version: this.input.activityType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeActivityType.configuration.defaultTaskScheduleToCloseTimeout', props);
    return resource.getResponseField('configuration.defaultTaskScheduleToCloseTimeout') as unknown as string;
  }

}

export class SWFDescribeActivityTypeConfigurationDefaultTaskList extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfDescribeActivityTypeInput) {
    super(scope, id);
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
          domain: this.input.domain,
          activityType: {
            name: this.input.activityType.name,
            version: this.input.activityType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeActivityType.configuration.defaultTaskList.name', props);
    return resource.getResponseField('configuration.defaultTaskList.name') as unknown as string;
  }

}

export class SWFDescribeDomain extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfDescribeDomainInput) {
    super(scope, id);
  }

  public get domainInfo(): SWFDescribeDomainDomainInfo {
    return new SWFDescribeDomainDomainInfo(this, 'DomainInfo', this.__resources, this.input);
  }

  public get configuration(): SWFDescribeDomainConfiguration {
    return new SWFDescribeDomainConfiguration(this, 'Configuration', this.__resources, this.input);
  }

}

export class SWFDescribeDomainDomainInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfDescribeDomainInput) {
    super(scope, id);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.domainInfo.name', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.domainInfo.status', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.domainInfo.description', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.domainInfo.arn', props);
    return resource.getResponseField('domainInfo.arn') as unknown as string;
  }

}

export class SWFDescribeDomainConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfDescribeDomainInput) {
    super(scope, id);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.configuration.workflowExecutionRetentionPeriodInDays', props);
    return resource.getResponseField('configuration.workflowExecutionRetentionPeriodInDays') as unknown as string;
  }

}

export class SWFDescribeWorkflowExecution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfDescribeWorkflowExecutionInput) {
    super(scope, id);
  }

  public get executionInfo(): SWFDescribeWorkflowExecutionExecutionInfo {
    return new SWFDescribeWorkflowExecutionExecutionInfo(this, 'ExecutionInfo', this.__resources, this.input);
  }

  public get executionConfiguration(): SWFDescribeWorkflowExecutionExecutionConfiguration {
    return new SWFDescribeWorkflowExecutionExecutionConfiguration(this, 'ExecutionConfiguration', this.__resources, this.input);
  }

  public get openCounts(): SWFDescribeWorkflowExecutionOpenCounts {
    return new SWFDescribeWorkflowExecutionOpenCounts(this, 'OpenCounts', this.__resources, this.input);
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
          domain: this.input.domain,
          execution: {
            workflowId: this.input.execution.workflowId,
            runId: this.input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowExecution.latestActivityTaskTimestamp', props);
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
          domain: this.input.domain,
          execution: {
            workflowId: this.input.execution.workflowId,
            runId: this.input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowExecution.latestExecutionContext', props);
    return resource.getResponseField('latestExecutionContext') as unknown as string;
  }

}

export class SWFDescribeWorkflowExecutionExecutionInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfDescribeWorkflowExecutionInput) {
    super(scope, id);
  }

  public get execution(): SWFDescribeWorkflowExecutionExecutionInfoExecution {
    return new SWFDescribeWorkflowExecutionExecutionInfoExecution(this, 'Execution', this.__resources, this.input);
  }

  public get workflowType(): SWFDescribeWorkflowExecutionExecutionInfoWorkflowType {
    return new SWFDescribeWorkflowExecutionExecutionInfoWorkflowType(this, 'WorkflowType', this.__resources, this.input);
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
          domain: this.input.domain,
          execution: {
            workflowId: this.input.execution.workflowId,
            runId: this.input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowExecution.executionInfo.startTimestamp', props);
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
          domain: this.input.domain,
          execution: {
            workflowId: this.input.execution.workflowId,
            runId: this.input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowExecution.executionInfo.closeTimestamp', props);
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
          domain: this.input.domain,
          execution: {
            workflowId: this.input.execution.workflowId,
            runId: this.input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowExecution.executionInfo.executionStatus', props);
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
          domain: this.input.domain,
          execution: {
            workflowId: this.input.execution.workflowId,
            runId: this.input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowExecution.executionInfo.closeStatus', props);
    return resource.getResponseField('executionInfo.closeStatus') as unknown as string;
  }

  public get parent(): SWFDescribeWorkflowExecutionExecutionInfoParent {
    return new SWFDescribeWorkflowExecutionExecutionInfoParent(this, 'Parent', this.__resources, this.input);
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
          domain: this.input.domain,
          execution: {
            workflowId: this.input.execution.workflowId,
            runId: this.input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowExecution.executionInfo.tagList', props);
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
          domain: this.input.domain,
          execution: {
            workflowId: this.input.execution.workflowId,
            runId: this.input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowExecution.executionInfo.cancelRequested', props);
    return resource.getResponseField('executionInfo.cancelRequested') as unknown as boolean;
  }

}

export class SWFDescribeWorkflowExecutionExecutionInfoExecution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfDescribeWorkflowExecutionInput) {
    super(scope, id);
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
          domain: this.input.domain,
          execution: {
            workflowId: this.input.execution.workflowId,
            runId: this.input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowExecution.executionInfo.execution.workflowId', props);
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
          domain: this.input.domain,
          execution: {
            workflowId: this.input.execution.workflowId,
            runId: this.input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowExecution.executionInfo.execution.runId', props);
    return resource.getResponseField('executionInfo.execution.runId') as unknown as string;
  }

}

export class SWFDescribeWorkflowExecutionExecutionInfoWorkflowType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfDescribeWorkflowExecutionInput) {
    super(scope, id);
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
          domain: this.input.domain,
          execution: {
            workflowId: this.input.execution.workflowId,
            runId: this.input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowExecution.executionInfo.workflowType.name', props);
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
          domain: this.input.domain,
          execution: {
            workflowId: this.input.execution.workflowId,
            runId: this.input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowExecution.executionInfo.workflowType.version', props);
    return resource.getResponseField('executionInfo.workflowType.version') as unknown as string;
  }

}

export class SWFDescribeWorkflowExecutionExecutionInfoParent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfDescribeWorkflowExecutionInput) {
    super(scope, id);
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
          domain: this.input.domain,
          execution: {
            workflowId: this.input.execution.workflowId,
            runId: this.input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowExecution.executionInfo.parent.workflowId', props);
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
          domain: this.input.domain,
          execution: {
            workflowId: this.input.execution.workflowId,
            runId: this.input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowExecution.executionInfo.parent.runId', props);
    return resource.getResponseField('executionInfo.parent.runId') as unknown as string;
  }

}

export class SWFDescribeWorkflowExecutionExecutionConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfDescribeWorkflowExecutionInput) {
    super(scope, id);
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
          domain: this.input.domain,
          execution: {
            workflowId: this.input.execution.workflowId,
            runId: this.input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowExecution.executionConfiguration.taskStartToCloseTimeout', props);
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
          domain: this.input.domain,
          execution: {
            workflowId: this.input.execution.workflowId,
            runId: this.input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowExecution.executionConfiguration.executionStartToCloseTimeout', props);
    return resource.getResponseField('executionConfiguration.executionStartToCloseTimeout') as unknown as string;
  }

  public get taskList(): SWFDescribeWorkflowExecutionExecutionConfigurationTaskList {
    return new SWFDescribeWorkflowExecutionExecutionConfigurationTaskList(this, 'TaskList', this.__resources, this.input);
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
          domain: this.input.domain,
          execution: {
            workflowId: this.input.execution.workflowId,
            runId: this.input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowExecution.executionConfiguration.taskPriority', props);
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
          domain: this.input.domain,
          execution: {
            workflowId: this.input.execution.workflowId,
            runId: this.input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowExecution.executionConfiguration.childPolicy', props);
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
          domain: this.input.domain,
          execution: {
            workflowId: this.input.execution.workflowId,
            runId: this.input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowExecution.executionConfiguration.lambdaRole', props);
    return resource.getResponseField('executionConfiguration.lambdaRole') as unknown as string;
  }

}

export class SWFDescribeWorkflowExecutionExecutionConfigurationTaskList extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfDescribeWorkflowExecutionInput) {
    super(scope, id);
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
          domain: this.input.domain,
          execution: {
            workflowId: this.input.execution.workflowId,
            runId: this.input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowExecution.executionConfiguration.taskList.name', props);
    return resource.getResponseField('executionConfiguration.taskList.name') as unknown as string;
  }

}

export class SWFDescribeWorkflowExecutionOpenCounts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfDescribeWorkflowExecutionInput) {
    super(scope, id);
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
          domain: this.input.domain,
          execution: {
            workflowId: this.input.execution.workflowId,
            runId: this.input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowExecution.openCounts.openActivityTasks', props);
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
          domain: this.input.domain,
          execution: {
            workflowId: this.input.execution.workflowId,
            runId: this.input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowExecution.openCounts.openDecisionTasks', props);
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
          domain: this.input.domain,
          execution: {
            workflowId: this.input.execution.workflowId,
            runId: this.input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowExecution.openCounts.openTimers', props);
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
          domain: this.input.domain,
          execution: {
            workflowId: this.input.execution.workflowId,
            runId: this.input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowExecution.openCounts.openChildWorkflowExecutions', props);
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
          domain: this.input.domain,
          execution: {
            workflowId: this.input.execution.workflowId,
            runId: this.input.execution.runId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowExecution.openCounts.openLambdaFunctions', props);
    return resource.getResponseField('openCounts.openLambdaFunctions') as unknown as number;
  }

}

export class SWFDescribeWorkflowType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfDescribeWorkflowTypeInput) {
    super(scope, id);
  }

  public get typeInfo(): SWFDescribeWorkflowTypeTypeInfo {
    return new SWFDescribeWorkflowTypeTypeInfo(this, 'TypeInfo', this.__resources, this.input);
  }

  public get configuration(): SWFDescribeWorkflowTypeConfiguration {
    return new SWFDescribeWorkflowTypeConfiguration(this, 'Configuration', this.__resources, this.input);
  }

}

export class SWFDescribeWorkflowTypeTypeInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfDescribeWorkflowTypeInput) {
    super(scope, id);
  }

  public get workflowType(): SWFDescribeWorkflowTypeTypeInfoWorkflowType {
    return new SWFDescribeWorkflowTypeTypeInfoWorkflowType(this, 'WorkflowType', this.__resources, this.input);
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
          domain: this.input.domain,
          workflowType: {
            name: this.input.workflowType.name,
            version: this.input.workflowType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowType.typeInfo.status', props);
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
          domain: this.input.domain,
          workflowType: {
            name: this.input.workflowType.name,
            version: this.input.workflowType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowType.typeInfo.description', props);
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
          domain: this.input.domain,
          workflowType: {
            name: this.input.workflowType.name,
            version: this.input.workflowType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowType.typeInfo.creationDate', props);
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
          domain: this.input.domain,
          workflowType: {
            name: this.input.workflowType.name,
            version: this.input.workflowType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowType.typeInfo.deprecationDate', props);
    return resource.getResponseField('typeInfo.deprecationDate') as unknown as string;
  }

}

export class SWFDescribeWorkflowTypeTypeInfoWorkflowType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfDescribeWorkflowTypeInput) {
    super(scope, id);
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
          domain: this.input.domain,
          workflowType: {
            name: this.input.workflowType.name,
            version: this.input.workflowType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowType.typeInfo.workflowType.name', props);
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
          domain: this.input.domain,
          workflowType: {
            name: this.input.workflowType.name,
            version: this.input.workflowType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowType.typeInfo.workflowType.version', props);
    return resource.getResponseField('typeInfo.workflowType.version') as unknown as string;
  }

}

export class SWFDescribeWorkflowTypeConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfDescribeWorkflowTypeInput) {
    super(scope, id);
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
          domain: this.input.domain,
          workflowType: {
            name: this.input.workflowType.name,
            version: this.input.workflowType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowType.configuration.defaultTaskStartToCloseTimeout', props);
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
          domain: this.input.domain,
          workflowType: {
            name: this.input.workflowType.name,
            version: this.input.workflowType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowType.configuration.defaultExecutionStartToCloseTimeout', props);
    return resource.getResponseField('configuration.defaultExecutionStartToCloseTimeout') as unknown as string;
  }

  public get defaultTaskList(): SWFDescribeWorkflowTypeConfigurationDefaultTaskList {
    return new SWFDescribeWorkflowTypeConfigurationDefaultTaskList(this, 'DefaultTaskList', this.__resources, this.input);
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
          domain: this.input.domain,
          workflowType: {
            name: this.input.workflowType.name,
            version: this.input.workflowType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowType.configuration.defaultTaskPriority', props);
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
          domain: this.input.domain,
          workflowType: {
            name: this.input.workflowType.name,
            version: this.input.workflowType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowType.configuration.defaultChildPolicy', props);
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
          domain: this.input.domain,
          workflowType: {
            name: this.input.workflowType.name,
            version: this.input.workflowType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowType.configuration.defaultLambdaRole', props);
    return resource.getResponseField('configuration.defaultLambdaRole') as unknown as string;
  }

}

export class SWFDescribeWorkflowTypeConfigurationDefaultTaskList extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfDescribeWorkflowTypeInput) {
    super(scope, id);
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
          domain: this.input.domain,
          workflowType: {
            name: this.input.workflowType.name,
            version: this.input.workflowType.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkflowType.configuration.defaultTaskList.name', props);
    return resource.getResponseField('configuration.defaultTaskList.name') as unknown as string;
  }

}

export class SWFFetchWorkflowExecutionHistory extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfGetWorkflowExecutionHistoryInput) {
    super(scope, id);
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
          domain: this.input.domain,
          execution: {
            workflowId: this.input.execution.workflowId,
            runId: this.input.execution.runId,
          },
          nextPageToken: this.input.nextPageToken,
          maximumPageSize: this.input.maximumPageSize,
          reverseOrder: this.input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflowExecutionHistory.events', props);
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
          domain: this.input.domain,
          execution: {
            workflowId: this.input.execution.workflowId,
            runId: this.input.execution.runId,
          },
          nextPageToken: this.input.nextPageToken,
          maximumPageSize: this.input.maximumPageSize,
          reverseOrder: this.input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflowExecutionHistory.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class SWFListActivityTypes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfListActivityTypesInput) {
    super(scope, id);
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
          domain: this.input.domain,
          name: this.input.name,
          registrationStatus: this.input.registrationStatus,
          nextPageToken: this.input.nextPageToken,
          maximumPageSize: this.input.maximumPageSize,
          reverseOrder: this.input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListActivityTypes.typeInfos', props);
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
          domain: this.input.domain,
          name: this.input.name,
          registrationStatus: this.input.registrationStatus,
          nextPageToken: this.input.nextPageToken,
          maximumPageSize: this.input.maximumPageSize,
          reverseOrder: this.input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListActivityTypes.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class SWFListClosedWorkflowExecutions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfListClosedWorkflowExecutionsInput) {
    super(scope, id);
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
          domain: this.input.domain,
          startTimeFilter: {
            oldestDate: this.input.startTimeFilter?.oldestDate,
            latestDate: this.input.startTimeFilter?.latestDate,
          },
          closeTimeFilter: {
            oldestDate: this.input.closeTimeFilter?.oldestDate,
            latestDate: this.input.closeTimeFilter?.latestDate,
          },
          executionFilter: {
            workflowId: this.input.executionFilter?.workflowId,
          },
          closeStatusFilter: {
            status: this.input.closeStatusFilter?.status,
          },
          typeFilter: {
            name: this.input.typeFilter?.name,
            version: this.input.typeFilter?.version,
          },
          tagFilter: {
            tag: this.input.tagFilter?.tag,
          },
          nextPageToken: this.input.nextPageToken,
          maximumPageSize: this.input.maximumPageSize,
          reverseOrder: this.input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListClosedWorkflowExecutions.executionInfos', props);
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
          domain: this.input.domain,
          startTimeFilter: {
            oldestDate: this.input.startTimeFilter?.oldestDate,
            latestDate: this.input.startTimeFilter?.latestDate,
          },
          closeTimeFilter: {
            oldestDate: this.input.closeTimeFilter?.oldestDate,
            latestDate: this.input.closeTimeFilter?.latestDate,
          },
          executionFilter: {
            workflowId: this.input.executionFilter?.workflowId,
          },
          closeStatusFilter: {
            status: this.input.closeStatusFilter?.status,
          },
          typeFilter: {
            name: this.input.typeFilter?.name,
            version: this.input.typeFilter?.version,
          },
          tagFilter: {
            tag: this.input.tagFilter?.tag,
          },
          nextPageToken: this.input.nextPageToken,
          maximumPageSize: this.input.maximumPageSize,
          reverseOrder: this.input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListClosedWorkflowExecutions.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class SWFListDomains extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfListDomainsInput) {
    super(scope, id);
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
          nextPageToken: this.input.nextPageToken,
          registrationStatus: this.input.registrationStatus,
          maximumPageSize: this.input.maximumPageSize,
          reverseOrder: this.input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDomains.domainInfos', props);
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
          nextPageToken: this.input.nextPageToken,
          registrationStatus: this.input.registrationStatus,
          maximumPageSize: this.input.maximumPageSize,
          reverseOrder: this.input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDomains.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class SWFListOpenWorkflowExecutions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfListOpenWorkflowExecutionsInput) {
    super(scope, id);
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
          domain: this.input.domain,
          startTimeFilter: {
            oldestDate: this.input.startTimeFilter.oldestDate,
            latestDate: this.input.startTimeFilter.latestDate,
          },
          typeFilter: {
            name: this.input.typeFilter?.name,
            version: this.input.typeFilter?.version,
          },
          tagFilter: {
            tag: this.input.tagFilter?.tag,
          },
          nextPageToken: this.input.nextPageToken,
          maximumPageSize: this.input.maximumPageSize,
          reverseOrder: this.input.reverseOrder,
          executionFilter: {
            workflowId: this.input.executionFilter?.workflowId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOpenWorkflowExecutions.executionInfos', props);
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
          domain: this.input.domain,
          startTimeFilter: {
            oldestDate: this.input.startTimeFilter.oldestDate,
            latestDate: this.input.startTimeFilter.latestDate,
          },
          typeFilter: {
            name: this.input.typeFilter?.name,
            version: this.input.typeFilter?.version,
          },
          tagFilter: {
            tag: this.input.tagFilter?.tag,
          },
          nextPageToken: this.input.nextPageToken,
          maximumPageSize: this.input.maximumPageSize,
          reverseOrder: this.input.reverseOrder,
          executionFilter: {
            workflowId: this.input.executionFilter?.workflowId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOpenWorkflowExecutions.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class SWFListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfListTagsForResourceInput) {
    super(scope, id);
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
          resourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.SwfResourceTag[];
  }

}

export class SWFListWorkflowTypes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfListWorkflowTypesInput) {
    super(scope, id);
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
          domain: this.input.domain,
          name: this.input.name,
          registrationStatus: this.input.registrationStatus,
          nextPageToken: this.input.nextPageToken,
          maximumPageSize: this.input.maximumPageSize,
          reverseOrder: this.input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWorkflowTypes.typeInfos', props);
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
          domain: this.input.domain,
          name: this.input.name,
          registrationStatus: this.input.registrationStatus,
          nextPageToken: this.input.nextPageToken,
          maximumPageSize: this.input.maximumPageSize,
          reverseOrder: this.input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWorkflowTypes.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class SWFPollForActivityTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfPollForActivityTaskInput) {
    super(scope, id);
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
          domain: this.input.domain,
          taskList: {
            name: this.input.taskList.name,
          },
          identity: this.input.identity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PollForActivityTask.taskToken', props);
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
          domain: this.input.domain,
          taskList: {
            name: this.input.taskList.name,
          },
          identity: this.input.identity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PollForActivityTask.activityId', props);
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
          domain: this.input.domain,
          taskList: {
            name: this.input.taskList.name,
          },
          identity: this.input.identity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PollForActivityTask.startedEventId', props);
    return resource.getResponseField('startedEventId') as unknown as number;
  }

  public get workflowExecution(): SWFPollForActivityTaskWorkflowExecution {
    return new SWFPollForActivityTaskWorkflowExecution(this, 'WorkflowExecution', this.__resources, this.input);
  }

  public get activityType(): SWFPollForActivityTaskActivityType {
    return new SWFPollForActivityTaskActivityType(this, 'ActivityType', this.__resources, this.input);
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
          domain: this.input.domain,
          taskList: {
            name: this.input.taskList.name,
          },
          identity: this.input.identity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PollForActivityTask.input', props);
    return resource.getResponseField('input') as unknown as string;
  }

}

export class SWFPollForActivityTaskWorkflowExecution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfPollForActivityTaskInput) {
    super(scope, id);
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
          domain: this.input.domain,
          taskList: {
            name: this.input.taskList.name,
          },
          identity: this.input.identity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PollForActivityTask.workflowExecution.workflowId', props);
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
          domain: this.input.domain,
          taskList: {
            name: this.input.taskList.name,
          },
          identity: this.input.identity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PollForActivityTask.workflowExecution.runId', props);
    return resource.getResponseField('workflowExecution.runId') as unknown as string;
  }

}

export class SWFPollForActivityTaskActivityType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfPollForActivityTaskInput) {
    super(scope, id);
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
          domain: this.input.domain,
          taskList: {
            name: this.input.taskList.name,
          },
          identity: this.input.identity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PollForActivityTask.activityType.name', props);
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
          domain: this.input.domain,
          taskList: {
            name: this.input.taskList.name,
          },
          identity: this.input.identity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PollForActivityTask.activityType.version', props);
    return resource.getResponseField('activityType.version') as unknown as string;
  }

}

export class SWFPollForDecisionTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfPollForDecisionTaskInput) {
    super(scope, id);
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
          domain: this.input.domain,
          taskList: {
            name: this.input.taskList.name,
          },
          identity: this.input.identity,
          nextPageToken: this.input.nextPageToken,
          maximumPageSize: this.input.maximumPageSize,
          reverseOrder: this.input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PollForDecisionTask.taskToken', props);
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
          domain: this.input.domain,
          taskList: {
            name: this.input.taskList.name,
          },
          identity: this.input.identity,
          nextPageToken: this.input.nextPageToken,
          maximumPageSize: this.input.maximumPageSize,
          reverseOrder: this.input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PollForDecisionTask.startedEventId', props);
    return resource.getResponseField('startedEventId') as unknown as number;
  }

  public get workflowExecution(): SWFPollForDecisionTaskWorkflowExecution {
    return new SWFPollForDecisionTaskWorkflowExecution(this, 'WorkflowExecution', this.__resources, this.input);
  }

  public get workflowType(): SWFPollForDecisionTaskWorkflowType {
    return new SWFPollForDecisionTaskWorkflowType(this, 'WorkflowType', this.__resources, this.input);
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
          domain: this.input.domain,
          taskList: {
            name: this.input.taskList.name,
          },
          identity: this.input.identity,
          nextPageToken: this.input.nextPageToken,
          maximumPageSize: this.input.maximumPageSize,
          reverseOrder: this.input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PollForDecisionTask.events', props);
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
          domain: this.input.domain,
          taskList: {
            name: this.input.taskList.name,
          },
          identity: this.input.identity,
          nextPageToken: this.input.nextPageToken,
          maximumPageSize: this.input.maximumPageSize,
          reverseOrder: this.input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PollForDecisionTask.nextPageToken', props);
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
          domain: this.input.domain,
          taskList: {
            name: this.input.taskList.name,
          },
          identity: this.input.identity,
          nextPageToken: this.input.nextPageToken,
          maximumPageSize: this.input.maximumPageSize,
          reverseOrder: this.input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PollForDecisionTask.previousStartedEventId', props);
    return resource.getResponseField('previousStartedEventId') as unknown as number;
  }

}

export class SWFPollForDecisionTaskWorkflowExecution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfPollForDecisionTaskInput) {
    super(scope, id);
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
          domain: this.input.domain,
          taskList: {
            name: this.input.taskList.name,
          },
          identity: this.input.identity,
          nextPageToken: this.input.nextPageToken,
          maximumPageSize: this.input.maximumPageSize,
          reverseOrder: this.input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PollForDecisionTask.workflowExecution.workflowId', props);
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
          domain: this.input.domain,
          taskList: {
            name: this.input.taskList.name,
          },
          identity: this.input.identity,
          nextPageToken: this.input.nextPageToken,
          maximumPageSize: this.input.maximumPageSize,
          reverseOrder: this.input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PollForDecisionTask.workflowExecution.runId', props);
    return resource.getResponseField('workflowExecution.runId') as unknown as string;
  }

}

export class SWFPollForDecisionTaskWorkflowType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfPollForDecisionTaskInput) {
    super(scope, id);
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
          domain: this.input.domain,
          taskList: {
            name: this.input.taskList.name,
          },
          identity: this.input.identity,
          nextPageToken: this.input.nextPageToken,
          maximumPageSize: this.input.maximumPageSize,
          reverseOrder: this.input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PollForDecisionTask.workflowType.name', props);
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
          domain: this.input.domain,
          taskList: {
            name: this.input.taskList.name,
          },
          identity: this.input.identity,
          nextPageToken: this.input.nextPageToken,
          maximumPageSize: this.input.maximumPageSize,
          reverseOrder: this.input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PollForDecisionTask.workflowType.version', props);
    return resource.getResponseField('workflowType.version') as unknown as string;
  }

}

export class SWFRecordActivityTaskHeartbeat extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfRecordActivityTaskHeartbeatInput) {
    super(scope, id);
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
          taskToken: this.input.taskToken,
          details: this.input.details,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RecordActivityTaskHeartbeat.cancelRequested', props);
    return resource.getResponseField('cancelRequested') as unknown as boolean;
  }

}

export class SWFStartWorkflowExecution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SwfStartWorkflowExecutionInput) {
    super(scope, id);
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
          domain: this.input.domain,
          workflowId: this.input.workflowId,
          workflowType: {
            name: this.input.workflowType.name,
            version: this.input.workflowType.version,
          },
          taskList: {
            name: this.input.taskList?.name,
          },
          taskPriority: this.input.taskPriority,
          input: this.input.input,
          executionStartToCloseTimeout: this.input.executionStartToCloseTimeout,
          tagList: this.input.tagList,
          taskStartToCloseTimeout: this.input.taskStartToCloseTimeout,
          childPolicy: this.input.childPolicy,
          lambdaRole: this.input.lambdaRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartWorkflowExecution.runId', props);
    return resource.getResponseField('runId') as unknown as string;
  }

}

