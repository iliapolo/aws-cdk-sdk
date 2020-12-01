/**
 * @schema CountClosedWorkflowExecutionsInput
 */
export interface CountClosedWorkflowExecutionsInput {
  /**
   * @schema CountClosedWorkflowExecutionsInput#domain
   */
  readonly domain: string;

  /**
   * @schema CountClosedWorkflowExecutionsInput#startTimeFilter
   */
  readonly startTimeFilter?: ExecutionTimeFilter;

  /**
   * @schema CountClosedWorkflowExecutionsInput#closeTimeFilter
   */
  readonly closeTimeFilter?: ExecutionTimeFilter;

  /**
   * @schema CountClosedWorkflowExecutionsInput#executionFilter
   */
  readonly executionFilter?: WorkflowExecutionFilter;

  /**
   * @schema CountClosedWorkflowExecutionsInput#typeFilter
   */
  readonly typeFilter?: WorkflowTypeFilter;

  /**
   * @schema CountClosedWorkflowExecutionsInput#tagFilter
   */
  readonly tagFilter?: TagFilter;

  /**
   * @schema CountClosedWorkflowExecutionsInput#closeStatusFilter
   */
  readonly closeStatusFilter?: CloseStatusFilter;

}

/**
 * @schema WorkflowExecutionCount
 */
export interface WorkflowExecutionCount {
  /**
   * @schema WorkflowExecutionCount#count
   */
  readonly count: number;

  /**
   * @schema WorkflowExecutionCount#truncated
   */
  readonly truncated?: boolean;

}

/**
 * @schema CountOpenWorkflowExecutionsInput
 */
export interface CountOpenWorkflowExecutionsInput {
  /**
   * @schema CountOpenWorkflowExecutionsInput#domain
   */
  readonly domain: string;

  /**
   * @schema CountOpenWorkflowExecutionsInput#startTimeFilter
   */
  readonly startTimeFilter: ExecutionTimeFilter;

  /**
   * @schema CountOpenWorkflowExecutionsInput#typeFilter
   */
  readonly typeFilter?: WorkflowTypeFilter;

  /**
   * @schema CountOpenWorkflowExecutionsInput#tagFilter
   */
  readonly tagFilter?: TagFilter;

  /**
   * @schema CountOpenWorkflowExecutionsInput#executionFilter
   */
  readonly executionFilter?: WorkflowExecutionFilter;

}

/**
 * @schema CountPendingActivityTasksInput
 */
export interface CountPendingActivityTasksInput {
  /**
   * @schema CountPendingActivityTasksInput#domain
   */
  readonly domain: string;

  /**
   * @schema CountPendingActivityTasksInput#taskList
   */
  readonly taskList: TaskList;

}

/**
 * @schema PendingTaskCount
 */
export interface PendingTaskCount {
  /**
   * @schema PendingTaskCount#count
   */
  readonly count: number;

  /**
   * @schema PendingTaskCount#truncated
   */
  readonly truncated?: boolean;

}

/**
 * @schema CountPendingDecisionTasksInput
 */
export interface CountPendingDecisionTasksInput {
  /**
   * @schema CountPendingDecisionTasksInput#domain
   */
  readonly domain: string;

  /**
   * @schema CountPendingDecisionTasksInput#taskList
   */
  readonly taskList: TaskList;

}

/**
 * @schema DeprecateActivityTypeInput
 */
export interface DeprecateActivityTypeInput {
  /**
   * @schema DeprecateActivityTypeInput#domain
   */
  readonly domain: string;

  /**
   * @schema DeprecateActivityTypeInput#activityType
   */
  readonly activityType: ActivityType;

}

/**
 * @schema DeprecateDomainInput
 */
export interface DeprecateDomainInput {
  /**
   * @schema DeprecateDomainInput#name
   */
  readonly name: string;

}

/**
 * @schema DeprecateWorkflowTypeInput
 */
export interface DeprecateWorkflowTypeInput {
  /**
   * @schema DeprecateWorkflowTypeInput#domain
   */
  readonly domain: string;

  /**
   * @schema DeprecateWorkflowTypeInput#workflowType
   */
  readonly workflowType: WorkflowType;

}

/**
 * @schema DescribeActivityTypeInput
 */
export interface DescribeActivityTypeInput {
  /**
   * @schema DescribeActivityTypeInput#domain
   */
  readonly domain: string;

  /**
   * @schema DescribeActivityTypeInput#activityType
   */
  readonly activityType: ActivityType;

}

/**
 * @schema ActivityTypeDetail
 */
export interface ActivityTypeDetail {
  /**
   * @schema ActivityTypeDetail#typeInfo
   */
  readonly typeInfo: ActivityTypeInfo;

  /**
   * @schema ActivityTypeDetail#configuration
   */
  readonly configuration: ActivityTypeConfiguration;

}

/**
 * @schema DescribeDomainInput
 */
export interface DescribeDomainInput {
  /**
   * @schema DescribeDomainInput#name
   */
  readonly name: string;

}

/**
 * @schema DomainDetail
 */
export interface DomainDetail {
  /**
   * @schema DomainDetail#domainInfo
   */
  readonly domainInfo: DomainInfo;

  /**
   * @schema DomainDetail#configuration
   */
  readonly configuration: DomainConfiguration;

}

/**
 * @schema DescribeWorkflowExecutionInput
 */
export interface DescribeWorkflowExecutionInput {
  /**
   * @schema DescribeWorkflowExecutionInput#domain
   */
  readonly domain: string;

  /**
   * @schema DescribeWorkflowExecutionInput#execution
   */
  readonly execution: WorkflowExecution;

}

/**
 * @schema WorkflowExecutionDetail
 */
export interface WorkflowExecutionDetail {
  /**
   * @schema WorkflowExecutionDetail#executionInfo
   */
  readonly executionInfo: WorkflowExecutionInfo;

  /**
   * @schema WorkflowExecutionDetail#executionConfiguration
   */
  readonly executionConfiguration: WorkflowExecutionConfiguration;

  /**
   * @schema WorkflowExecutionDetail#openCounts
   */
  readonly openCounts: WorkflowExecutionOpenCounts;

  /**
   * @schema WorkflowExecutionDetail#latestActivityTaskTimestamp
   */
  readonly latestActivityTaskTimestamp?: string;

  /**
   * @schema WorkflowExecutionDetail#latestExecutionContext
   */
  readonly latestExecutionContext?: string;

}

/**
 * @schema DescribeWorkflowTypeInput
 */
export interface DescribeWorkflowTypeInput {
  /**
   * @schema DescribeWorkflowTypeInput#domain
   */
  readonly domain: string;

  /**
   * @schema DescribeWorkflowTypeInput#workflowType
   */
  readonly workflowType: WorkflowType;

}

/**
 * @schema WorkflowTypeDetail
 */
export interface WorkflowTypeDetail {
  /**
   * @schema WorkflowTypeDetail#typeInfo
   */
  readonly typeInfo: WorkflowTypeInfo;

  /**
   * @schema WorkflowTypeDetail#configuration
   */
  readonly configuration: WorkflowTypeConfiguration;

}

/**
 * @schema GetWorkflowExecutionHistoryInput
 */
export interface GetWorkflowExecutionHistoryInput {
  /**
   * @schema GetWorkflowExecutionHistoryInput#domain
   */
  readonly domain: string;

  /**
   * @schema GetWorkflowExecutionHistoryInput#execution
   */
  readonly execution: WorkflowExecution;

  /**
   * @schema GetWorkflowExecutionHistoryInput#nextPageToken
   */
  readonly nextPageToken?: string;

  /**
   * @schema GetWorkflowExecutionHistoryInput#maximumPageSize
   */
  readonly maximumPageSize?: number;

  /**
   * @schema GetWorkflowExecutionHistoryInput#reverseOrder
   */
  readonly reverseOrder?: boolean;

}

/**
 * @schema History
 */
export interface History {
  /**
   * @schema History#events
   */
  readonly events: HistoryEvent[];

  /**
   * @schema History#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ListActivityTypesInput
 */
export interface ListActivityTypesInput {
  /**
   * @schema ListActivityTypesInput#domain
   */
  readonly domain: string;

  /**
   * @schema ListActivityTypesInput#name
   */
  readonly name?: string;

  /**
   * @schema ListActivityTypesInput#registrationStatus
   */
  readonly registrationStatus: string;

  /**
   * @schema ListActivityTypesInput#nextPageToken
   */
  readonly nextPageToken?: string;

  /**
   * @schema ListActivityTypesInput#maximumPageSize
   */
  readonly maximumPageSize?: number;

  /**
   * @schema ListActivityTypesInput#reverseOrder
   */
  readonly reverseOrder?: boolean;

}

/**
 * @schema ActivityTypeInfos
 */
export interface ActivityTypeInfos {
  /**
   * @schema ActivityTypeInfos#typeInfos
   */
  readonly typeInfos: ActivityTypeInfo[];

  /**
   * @schema ActivityTypeInfos#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ListClosedWorkflowExecutionsInput
 */
export interface ListClosedWorkflowExecutionsInput {
  /**
   * @schema ListClosedWorkflowExecutionsInput#domain
   */
  readonly domain: string;

  /**
   * @schema ListClosedWorkflowExecutionsInput#startTimeFilter
   */
  readonly startTimeFilter?: ExecutionTimeFilter;

  /**
   * @schema ListClosedWorkflowExecutionsInput#closeTimeFilter
   */
  readonly closeTimeFilter?: ExecutionTimeFilter;

  /**
   * @schema ListClosedWorkflowExecutionsInput#executionFilter
   */
  readonly executionFilter?: WorkflowExecutionFilter;

  /**
   * @schema ListClosedWorkflowExecutionsInput#closeStatusFilter
   */
  readonly closeStatusFilter?: CloseStatusFilter;

  /**
   * @schema ListClosedWorkflowExecutionsInput#typeFilter
   */
  readonly typeFilter?: WorkflowTypeFilter;

  /**
   * @schema ListClosedWorkflowExecutionsInput#tagFilter
   */
  readonly tagFilter?: TagFilter;

  /**
   * @schema ListClosedWorkflowExecutionsInput#nextPageToken
   */
  readonly nextPageToken?: string;

  /**
   * @schema ListClosedWorkflowExecutionsInput#maximumPageSize
   */
  readonly maximumPageSize?: number;

  /**
   * @schema ListClosedWorkflowExecutionsInput#reverseOrder
   */
  readonly reverseOrder?: boolean;

}

/**
 * @schema WorkflowExecutionInfos
 */
export interface WorkflowExecutionInfos {
  /**
   * @schema WorkflowExecutionInfos#executionInfos
   */
  readonly executionInfos: WorkflowExecutionInfo[];

  /**
   * @schema WorkflowExecutionInfos#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ListDomainsInput
 */
export interface ListDomainsInput {
  /**
   * @schema ListDomainsInput#nextPageToken
   */
  readonly nextPageToken?: string;

  /**
   * @schema ListDomainsInput#registrationStatus
   */
  readonly registrationStatus: string;

  /**
   * @schema ListDomainsInput#maximumPageSize
   */
  readonly maximumPageSize?: number;

  /**
   * @schema ListDomainsInput#reverseOrder
   */
  readonly reverseOrder?: boolean;

}

/**
 * @schema DomainInfos
 */
export interface DomainInfos {
  /**
   * @schema DomainInfos#domainInfos
   */
  readonly domainInfos: DomainInfo[];

  /**
   * @schema DomainInfos#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ListOpenWorkflowExecutionsInput
 */
export interface ListOpenWorkflowExecutionsInput {
  /**
   * @schema ListOpenWorkflowExecutionsInput#domain
   */
  readonly domain: string;

  /**
   * @schema ListOpenWorkflowExecutionsInput#startTimeFilter
   */
  readonly startTimeFilter: ExecutionTimeFilter;

  /**
   * @schema ListOpenWorkflowExecutionsInput#typeFilter
   */
  readonly typeFilter?: WorkflowTypeFilter;

  /**
   * @schema ListOpenWorkflowExecutionsInput#tagFilter
   */
  readonly tagFilter?: TagFilter;

  /**
   * @schema ListOpenWorkflowExecutionsInput#nextPageToken
   */
  readonly nextPageToken?: string;

  /**
   * @schema ListOpenWorkflowExecutionsInput#maximumPageSize
   */
  readonly maximumPageSize?: number;

  /**
   * @schema ListOpenWorkflowExecutionsInput#reverseOrder
   */
  readonly reverseOrder?: boolean;

  /**
   * @schema ListOpenWorkflowExecutionsInput#executionFilter
   */
  readonly executionFilter?: WorkflowExecutionFilter;

}

/**
 * @schema ListTagsForResourceInput
 */
export interface ListTagsForResourceInput {
  /**
   * @schema ListTagsForResourceInput#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceOutput
 */
export interface ListTagsForResourceOutput {
  /**
   * @schema ListTagsForResourceOutput#tags
   */
  readonly tags?: ResourceTag[];

}

/**
 * @schema ListWorkflowTypesInput
 */
export interface ListWorkflowTypesInput {
  /**
   * @schema ListWorkflowTypesInput#domain
   */
  readonly domain: string;

  /**
   * @schema ListWorkflowTypesInput#name
   */
  readonly name?: string;

  /**
   * @schema ListWorkflowTypesInput#registrationStatus
   */
  readonly registrationStatus: string;

  /**
   * @schema ListWorkflowTypesInput#nextPageToken
   */
  readonly nextPageToken?: string;

  /**
   * @schema ListWorkflowTypesInput#maximumPageSize
   */
  readonly maximumPageSize?: number;

  /**
   * @schema ListWorkflowTypesInput#reverseOrder
   */
  readonly reverseOrder?: boolean;

}

/**
 * @schema WorkflowTypeInfos
 */
export interface WorkflowTypeInfos {
  /**
   * @schema WorkflowTypeInfos#typeInfos
   */
  readonly typeInfos: WorkflowTypeInfo[];

  /**
   * @schema WorkflowTypeInfos#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema PollForActivityTaskInput
 */
export interface PollForActivityTaskInput {
  /**
   * @schema PollForActivityTaskInput#domain
   */
  readonly domain: string;

  /**
   * @schema PollForActivityTaskInput#taskList
   */
  readonly taskList: TaskList;

  /**
   * @schema PollForActivityTaskInput#identity
   */
  readonly identity?: string;

}

/**
 * @schema ActivityTask
 */
export interface ActivityTask {
  /**
   * @schema ActivityTask#taskToken
   */
  readonly taskToken: string;

  /**
   * @schema ActivityTask#activityId
   */
  readonly activityId: string;

  /**
   * @schema ActivityTask#startedEventId
   */
  readonly startedEventId: number;

  /**
   * @schema ActivityTask#workflowExecution
   */
  readonly workflowExecution: WorkflowExecution;

  /**
   * @schema ActivityTask#activityType
   */
  readonly activityType: ActivityType;

  /**
   * @schema ActivityTask#input
   */
  readonly input?: string;

}

/**
 * @schema PollForDecisionTaskInput
 */
export interface PollForDecisionTaskInput {
  /**
   * @schema PollForDecisionTaskInput#domain
   */
  readonly domain: string;

  /**
   * @schema PollForDecisionTaskInput#taskList
   */
  readonly taskList: TaskList;

  /**
   * @schema PollForDecisionTaskInput#identity
   */
  readonly identity?: string;

  /**
   * @schema PollForDecisionTaskInput#nextPageToken
   */
  readonly nextPageToken?: string;

  /**
   * @schema PollForDecisionTaskInput#maximumPageSize
   */
  readonly maximumPageSize?: number;

  /**
   * @schema PollForDecisionTaskInput#reverseOrder
   */
  readonly reverseOrder?: boolean;

}

/**
 * @schema DecisionTask
 */
export interface DecisionTask {
  /**
   * @schema DecisionTask#taskToken
   */
  readonly taskToken: string;

  /**
   * @schema DecisionTask#startedEventId
   */
  readonly startedEventId: number;

  /**
   * @schema DecisionTask#workflowExecution
   */
  readonly workflowExecution: WorkflowExecution;

  /**
   * @schema DecisionTask#workflowType
   */
  readonly workflowType: WorkflowType;

  /**
   * @schema DecisionTask#events
   */
  readonly events: HistoryEvent[];

  /**
   * @schema DecisionTask#nextPageToken
   */
  readonly nextPageToken?: string;

  /**
   * @schema DecisionTask#previousStartedEventId
   */
  readonly previousStartedEventId?: number;

}

/**
 * @schema RecordActivityTaskHeartbeatInput
 */
export interface RecordActivityTaskHeartbeatInput {
  /**
   * @schema RecordActivityTaskHeartbeatInput#taskToken
   */
  readonly taskToken: string;

  /**
   * @schema RecordActivityTaskHeartbeatInput#details
   */
  readonly details?: string;

}

/**
 * @schema ActivityTaskStatus
 */
export interface ActivityTaskStatus {
  /**
   * @schema ActivityTaskStatus#cancelRequested
   */
  readonly cancelRequested: boolean;

}

/**
 * @schema RegisterActivityTypeInput
 */
export interface RegisterActivityTypeInput {
  /**
   * @schema RegisterActivityTypeInput#domain
   */
  readonly domain: string;

  /**
   * @schema RegisterActivityTypeInput#name
   */
  readonly name: string;

  /**
   * @schema RegisterActivityTypeInput#version
   */
  readonly version: string;

  /**
   * @schema RegisterActivityTypeInput#description
   */
  readonly description?: string;

  /**
   * @schema RegisterActivityTypeInput#defaultTaskStartToCloseTimeout
   */
  readonly defaultTaskStartToCloseTimeout?: string;

  /**
   * @schema RegisterActivityTypeInput#defaultTaskHeartbeatTimeout
   */
  readonly defaultTaskHeartbeatTimeout?: string;

  /**
   * @schema RegisterActivityTypeInput#defaultTaskList
   */
  readonly defaultTaskList?: TaskList;

  /**
   * @schema RegisterActivityTypeInput#defaultTaskPriority
   */
  readonly defaultTaskPriority?: string;

  /**
   * @schema RegisterActivityTypeInput#defaultTaskScheduleToStartTimeout
   */
  readonly defaultTaskScheduleToStartTimeout?: string;

  /**
   * @schema RegisterActivityTypeInput#defaultTaskScheduleToCloseTimeout
   */
  readonly defaultTaskScheduleToCloseTimeout?: string;

}

/**
 * @schema RegisterDomainInput
 */
export interface RegisterDomainInput {
  /**
   * @schema RegisterDomainInput#name
   */
  readonly name: string;

  /**
   * @schema RegisterDomainInput#description
   */
  readonly description?: string;

  /**
   * @schema RegisterDomainInput#workflowExecutionRetentionPeriodInDays
   */
  readonly workflowExecutionRetentionPeriodInDays: string;

  /**
   * @schema RegisterDomainInput#tags
   */
  readonly tags?: ResourceTag[];

}

/**
 * @schema RegisterWorkflowTypeInput
 */
export interface RegisterWorkflowTypeInput {
  /**
   * @schema RegisterWorkflowTypeInput#domain
   */
  readonly domain: string;

  /**
   * @schema RegisterWorkflowTypeInput#name
   */
  readonly name: string;

  /**
   * @schema RegisterWorkflowTypeInput#version
   */
  readonly version: string;

  /**
   * @schema RegisterWorkflowTypeInput#description
   */
  readonly description?: string;

  /**
   * @schema RegisterWorkflowTypeInput#defaultTaskStartToCloseTimeout
   */
  readonly defaultTaskStartToCloseTimeout?: string;

  /**
   * @schema RegisterWorkflowTypeInput#defaultExecutionStartToCloseTimeout
   */
  readonly defaultExecutionStartToCloseTimeout?: string;

  /**
   * @schema RegisterWorkflowTypeInput#defaultTaskList
   */
  readonly defaultTaskList?: TaskList;

  /**
   * @schema RegisterWorkflowTypeInput#defaultTaskPriority
   */
  readonly defaultTaskPriority?: string;

  /**
   * @schema RegisterWorkflowTypeInput#defaultChildPolicy
   */
  readonly defaultChildPolicy?: string;

  /**
   * @schema RegisterWorkflowTypeInput#defaultLambdaRole
   */
  readonly defaultLambdaRole?: string;

}

/**
 * @schema RequestCancelWorkflowExecutionInput
 */
export interface RequestCancelWorkflowExecutionInput {
  /**
   * @schema RequestCancelWorkflowExecutionInput#domain
   */
  readonly domain: string;

  /**
   * @schema RequestCancelWorkflowExecutionInput#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema RequestCancelWorkflowExecutionInput#runId
   */
  readonly runId?: string;

}

/**
 * @schema RespondActivityTaskCanceledInput
 */
export interface RespondActivityTaskCanceledInput {
  /**
   * @schema RespondActivityTaskCanceledInput#taskToken
   */
  readonly taskToken: string;

  /**
   * @schema RespondActivityTaskCanceledInput#details
   */
  readonly details?: string;

}

/**
 * @schema RespondActivityTaskCompletedInput
 */
export interface RespondActivityTaskCompletedInput {
  /**
   * @schema RespondActivityTaskCompletedInput#taskToken
   */
  readonly taskToken: string;

  /**
   * @schema RespondActivityTaskCompletedInput#result
   */
  readonly result?: string;

}

/**
 * @schema RespondActivityTaskFailedInput
 */
export interface RespondActivityTaskFailedInput {
  /**
   * @schema RespondActivityTaskFailedInput#taskToken
   */
  readonly taskToken: string;

  /**
   * @schema RespondActivityTaskFailedInput#reason
   */
  readonly reason?: string;

  /**
   * @schema RespondActivityTaskFailedInput#details
   */
  readonly details?: string;

}

/**
 * @schema RespondDecisionTaskCompletedInput
 */
export interface RespondDecisionTaskCompletedInput {
  /**
   * @schema RespondDecisionTaskCompletedInput#taskToken
   */
  readonly taskToken: string;

  /**
   * @schema RespondDecisionTaskCompletedInput#decisions
   */
  readonly decisions?: Decision[];

  /**
   * @schema RespondDecisionTaskCompletedInput#executionContext
   */
  readonly executionContext?: string;

}

/**
 * @schema SignalWorkflowExecutionInput
 */
export interface SignalWorkflowExecutionInput {
  /**
   * @schema SignalWorkflowExecutionInput#domain
   */
  readonly domain: string;

  /**
   * @schema SignalWorkflowExecutionInput#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema SignalWorkflowExecutionInput#runId
   */
  readonly runId?: string;

  /**
   * @schema SignalWorkflowExecutionInput#signalName
   */
  readonly signalName: string;

  /**
   * @schema SignalWorkflowExecutionInput#input
   */
  readonly input?: string;

}

/**
 * @schema StartWorkflowExecutionInput
 */
export interface StartWorkflowExecutionInput {
  /**
   * @schema StartWorkflowExecutionInput#domain
   */
  readonly domain: string;

  /**
   * @schema StartWorkflowExecutionInput#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema StartWorkflowExecutionInput#workflowType
   */
  readonly workflowType: WorkflowType;

  /**
   * @schema StartWorkflowExecutionInput#taskList
   */
  readonly taskList?: TaskList;

  /**
   * @schema StartWorkflowExecutionInput#taskPriority
   */
  readonly taskPriority?: string;

  /**
   * @schema StartWorkflowExecutionInput#input
   */
  readonly input?: string;

  /**
   * @schema StartWorkflowExecutionInput#executionStartToCloseTimeout
   */
  readonly executionStartToCloseTimeout?: string;

  /**
   * @schema StartWorkflowExecutionInput#tagList
   */
  readonly tagList?: string[];

  /**
   * @schema StartWorkflowExecutionInput#taskStartToCloseTimeout
   */
  readonly taskStartToCloseTimeout?: string;

  /**
   * @schema StartWorkflowExecutionInput#childPolicy
   */
  readonly childPolicy?: string;

  /**
   * @schema StartWorkflowExecutionInput#lambdaRole
   */
  readonly lambdaRole?: string;

}

/**
 * @schema Run
 */
export interface Run {
  /**
   * @schema Run#runId
   */
  readonly runId?: string;

}

/**
 * @schema TagResourceInput
 */
export interface TagResourceInput {
  /**
   * @schema TagResourceInput#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceInput#tags
   */
  readonly tags: ResourceTag[];

}

/**
 * @schema TerminateWorkflowExecutionInput
 */
export interface TerminateWorkflowExecutionInput {
  /**
   * @schema TerminateWorkflowExecutionInput#domain
   */
  readonly domain: string;

  /**
   * @schema TerminateWorkflowExecutionInput#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema TerminateWorkflowExecutionInput#runId
   */
  readonly runId?: string;

  /**
   * @schema TerminateWorkflowExecutionInput#reason
   */
  readonly reason?: string;

  /**
   * @schema TerminateWorkflowExecutionInput#details
   */
  readonly details?: string;

  /**
   * @schema TerminateWorkflowExecutionInput#childPolicy
   */
  readonly childPolicy?: string;

}

/**
 * @schema UndeprecateActivityTypeInput
 */
export interface UndeprecateActivityTypeInput {
  /**
   * @schema UndeprecateActivityTypeInput#domain
   */
  readonly domain: string;

  /**
   * @schema UndeprecateActivityTypeInput#activityType
   */
  readonly activityType: ActivityType;

}

/**
 * @schema UndeprecateDomainInput
 */
export interface UndeprecateDomainInput {
  /**
   * @schema UndeprecateDomainInput#name
   */
  readonly name: string;

}

/**
 * @schema UndeprecateWorkflowTypeInput
 */
export interface UndeprecateWorkflowTypeInput {
  /**
   * @schema UndeprecateWorkflowTypeInput#domain
   */
  readonly domain: string;

  /**
   * @schema UndeprecateWorkflowTypeInput#workflowType
   */
  readonly workflowType: WorkflowType;

}

/**
 * @schema UntagResourceInput
 */
export interface UntagResourceInput {
  /**
   * @schema UntagResourceInput#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceInput#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema ExecutionTimeFilter
 */
export interface ExecutionTimeFilter {
  /**
   * @schema ExecutionTimeFilter#oldestDate
   */
  readonly oldestDate: string;

  /**
   * @schema ExecutionTimeFilter#latestDate
   */
  readonly latestDate?: string;

}

/**
 * @schema WorkflowExecutionFilter
 */
export interface WorkflowExecutionFilter {
  /**
   * @schema WorkflowExecutionFilter#workflowId
   */
  readonly workflowId: string;

}

/**
 * @schema WorkflowTypeFilter
 */
export interface WorkflowTypeFilter {
  /**
   * @schema WorkflowTypeFilter#name
   */
  readonly name: string;

  /**
   * @schema WorkflowTypeFilter#version
   */
  readonly version?: string;

}

/**
 * @schema TagFilter
 */
export interface TagFilter {
  /**
   * @schema TagFilter#tag
   */
  readonly tag: string;

}

/**
 * @schema CloseStatusFilter
 */
export interface CloseStatusFilter {
  /**
   * @schema CloseStatusFilter#status
   */
  readonly status: string;

}

/**
 * @schema TaskList
 */
export interface TaskList {
  /**
   * @schema TaskList#name
   */
  readonly name: string;

}

/**
 * @schema ActivityType
 */
export interface ActivityType {
  /**
   * @schema ActivityType#name
   */
  readonly name: string;

  /**
   * @schema ActivityType#version
   */
  readonly version: string;

}

/**
 * @schema WorkflowType
 */
export interface WorkflowType {
  /**
   * @schema WorkflowType#name
   */
  readonly name: string;

  /**
   * @schema WorkflowType#version
   */
  readonly version: string;

}

/**
 * @schema ActivityTypeInfo
 */
export interface ActivityTypeInfo {
  /**
   * @schema ActivityTypeInfo#activityType
   */
  readonly activityType: ActivityType;

  /**
   * @schema ActivityTypeInfo#status
   */
  readonly status: string;

  /**
   * @schema ActivityTypeInfo#description
   */
  readonly description?: string;

  /**
   * @schema ActivityTypeInfo#creationDate
   */
  readonly creationDate: string;

  /**
   * @schema ActivityTypeInfo#deprecationDate
   */
  readonly deprecationDate?: string;

}

/**
 * @schema ActivityTypeConfiguration
 */
export interface ActivityTypeConfiguration {
  /**
   * @schema ActivityTypeConfiguration#defaultTaskStartToCloseTimeout
   */
  readonly defaultTaskStartToCloseTimeout?: string;

  /**
   * @schema ActivityTypeConfiguration#defaultTaskHeartbeatTimeout
   */
  readonly defaultTaskHeartbeatTimeout?: string;

  /**
   * @schema ActivityTypeConfiguration#defaultTaskList
   */
  readonly defaultTaskList?: TaskList;

  /**
   * @schema ActivityTypeConfiguration#defaultTaskPriority
   */
  readonly defaultTaskPriority?: string;

  /**
   * @schema ActivityTypeConfiguration#defaultTaskScheduleToStartTimeout
   */
  readonly defaultTaskScheduleToStartTimeout?: string;

  /**
   * @schema ActivityTypeConfiguration#defaultTaskScheduleToCloseTimeout
   */
  readonly defaultTaskScheduleToCloseTimeout?: string;

}

/**
 * @schema DomainInfo
 */
export interface DomainInfo {
  /**
   * @schema DomainInfo#name
   */
  readonly name: string;

  /**
   * @schema DomainInfo#status
   */
  readonly status: string;

  /**
   * @schema DomainInfo#description
   */
  readonly description?: string;

  /**
   * @schema DomainInfo#arn
   */
  readonly arn?: string;

}

/**
 * @schema DomainConfiguration
 */
export interface DomainConfiguration {
  /**
   * @schema DomainConfiguration#workflowExecutionRetentionPeriodInDays
   */
  readonly workflowExecutionRetentionPeriodInDays: string;

}

/**
 * @schema WorkflowExecution
 */
export interface WorkflowExecution {
  /**
   * @schema WorkflowExecution#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema WorkflowExecution#runId
   */
  readonly runId: string;

}

/**
 * @schema WorkflowExecutionInfo
 */
export interface WorkflowExecutionInfo {
  /**
   * @schema WorkflowExecutionInfo#execution
   */
  readonly execution: WorkflowExecution;

  /**
   * @schema WorkflowExecutionInfo#workflowType
   */
  readonly workflowType: WorkflowType;

  /**
   * @schema WorkflowExecutionInfo#startTimestamp
   */
  readonly startTimestamp: string;

  /**
   * @schema WorkflowExecutionInfo#closeTimestamp
   */
  readonly closeTimestamp?: string;

  /**
   * @schema WorkflowExecutionInfo#executionStatus
   */
  readonly executionStatus: string;

  /**
   * @schema WorkflowExecutionInfo#closeStatus
   */
  readonly closeStatus?: string;

  /**
   * @schema WorkflowExecutionInfo#parent
   */
  readonly parent?: WorkflowExecution;

  /**
   * @schema WorkflowExecutionInfo#tagList
   */
  readonly tagList?: string[];

  /**
   * @schema WorkflowExecutionInfo#cancelRequested
   */
  readonly cancelRequested?: boolean;

}

/**
 * @schema WorkflowExecutionConfiguration
 */
export interface WorkflowExecutionConfiguration {
  /**
   * @schema WorkflowExecutionConfiguration#taskStartToCloseTimeout
   */
  readonly taskStartToCloseTimeout: string;

  /**
   * @schema WorkflowExecutionConfiguration#executionStartToCloseTimeout
   */
  readonly executionStartToCloseTimeout: string;

  /**
   * @schema WorkflowExecutionConfiguration#taskList
   */
  readonly taskList: TaskList;

  /**
   * @schema WorkflowExecutionConfiguration#taskPriority
   */
  readonly taskPriority?: string;

  /**
   * @schema WorkflowExecutionConfiguration#childPolicy
   */
  readonly childPolicy: string;

  /**
   * @schema WorkflowExecutionConfiguration#lambdaRole
   */
  readonly lambdaRole?: string;

}

/**
 * @schema WorkflowExecutionOpenCounts
 */
export interface WorkflowExecutionOpenCounts {
  /**
   * @schema WorkflowExecutionOpenCounts#openActivityTasks
   */
  readonly openActivityTasks: number;

  /**
   * @schema WorkflowExecutionOpenCounts#openDecisionTasks
   */
  readonly openDecisionTasks: number;

  /**
   * @schema WorkflowExecutionOpenCounts#openTimers
   */
  readonly openTimers: number;

  /**
   * @schema WorkflowExecutionOpenCounts#openChildWorkflowExecutions
   */
  readonly openChildWorkflowExecutions: number;

  /**
   * @schema WorkflowExecutionOpenCounts#openLambdaFunctions
   */
  readonly openLambdaFunctions?: number;

}

/**
 * @schema WorkflowTypeInfo
 */
export interface WorkflowTypeInfo {
  /**
   * @schema WorkflowTypeInfo#workflowType
   */
  readonly workflowType: WorkflowType;

  /**
   * @schema WorkflowTypeInfo#status
   */
  readonly status: string;

  /**
   * @schema WorkflowTypeInfo#description
   */
  readonly description?: string;

  /**
   * @schema WorkflowTypeInfo#creationDate
   */
  readonly creationDate: string;

  /**
   * @schema WorkflowTypeInfo#deprecationDate
   */
  readonly deprecationDate?: string;

}

/**
 * @schema WorkflowTypeConfiguration
 */
export interface WorkflowTypeConfiguration {
  /**
   * @schema WorkflowTypeConfiguration#defaultTaskStartToCloseTimeout
   */
  readonly defaultTaskStartToCloseTimeout?: string;

  /**
   * @schema WorkflowTypeConfiguration#defaultExecutionStartToCloseTimeout
   */
  readonly defaultExecutionStartToCloseTimeout?: string;

  /**
   * @schema WorkflowTypeConfiguration#defaultTaskList
   */
  readonly defaultTaskList?: TaskList;

  /**
   * @schema WorkflowTypeConfiguration#defaultTaskPriority
   */
  readonly defaultTaskPriority?: string;

  /**
   * @schema WorkflowTypeConfiguration#defaultChildPolicy
   */
  readonly defaultChildPolicy?: string;

  /**
   * @schema WorkflowTypeConfiguration#defaultLambdaRole
   */
  readonly defaultLambdaRole?: string;

}

/**
 * @schema HistoryEvent
 */
export interface HistoryEvent {
  /**
   * @schema HistoryEvent#eventTimestamp
   */
  readonly eventTimestamp: string;

  /**
   * @schema HistoryEvent#eventType
   */
  readonly eventType: string;

  /**
   * @schema HistoryEvent#eventId
   */
  readonly eventId: number;

  /**
   * @schema HistoryEvent#workflowExecutionStartedEventAttributes
   */
  readonly workflowExecutionStartedEventAttributes?: WorkflowExecutionStartedEventAttributes;

  /**
   * @schema HistoryEvent#workflowExecutionCompletedEventAttributes
   */
  readonly workflowExecutionCompletedEventAttributes?: WorkflowExecutionCompletedEventAttributes;

  /**
   * @schema HistoryEvent#completeWorkflowExecutionFailedEventAttributes
   */
  readonly completeWorkflowExecutionFailedEventAttributes?: CompleteWorkflowExecutionFailedEventAttributes;

  /**
   * @schema HistoryEvent#workflowExecutionFailedEventAttributes
   */
  readonly workflowExecutionFailedEventAttributes?: WorkflowExecutionFailedEventAttributes;

  /**
   * @schema HistoryEvent#failWorkflowExecutionFailedEventAttributes
   */
  readonly failWorkflowExecutionFailedEventAttributes?: FailWorkflowExecutionFailedEventAttributes;

  /**
   * @schema HistoryEvent#workflowExecutionTimedOutEventAttributes
   */
  readonly workflowExecutionTimedOutEventAttributes?: WorkflowExecutionTimedOutEventAttributes;

  /**
   * @schema HistoryEvent#workflowExecutionCanceledEventAttributes
   */
  readonly workflowExecutionCanceledEventAttributes?: WorkflowExecutionCanceledEventAttributes;

  /**
   * @schema HistoryEvent#cancelWorkflowExecutionFailedEventAttributes
   */
  readonly cancelWorkflowExecutionFailedEventAttributes?: CancelWorkflowExecutionFailedEventAttributes;

  /**
   * @schema HistoryEvent#workflowExecutionContinuedAsNewEventAttributes
   */
  readonly workflowExecutionContinuedAsNewEventAttributes?: WorkflowExecutionContinuedAsNewEventAttributes;

  /**
   * @schema HistoryEvent#continueAsNewWorkflowExecutionFailedEventAttributes
   */
  readonly continueAsNewWorkflowExecutionFailedEventAttributes?: ContinueAsNewWorkflowExecutionFailedEventAttributes;

  /**
   * @schema HistoryEvent#workflowExecutionTerminatedEventAttributes
   */
  readonly workflowExecutionTerminatedEventAttributes?: WorkflowExecutionTerminatedEventAttributes;

  /**
   * @schema HistoryEvent#workflowExecutionCancelRequestedEventAttributes
   */
  readonly workflowExecutionCancelRequestedEventAttributes?: WorkflowExecutionCancelRequestedEventAttributes;

  /**
   * @schema HistoryEvent#decisionTaskScheduledEventAttributes
   */
  readonly decisionTaskScheduledEventAttributes?: DecisionTaskScheduledEventAttributes;

  /**
   * @schema HistoryEvent#decisionTaskStartedEventAttributes
   */
  readonly decisionTaskStartedEventAttributes?: DecisionTaskStartedEventAttributes;

  /**
   * @schema HistoryEvent#decisionTaskCompletedEventAttributes
   */
  readonly decisionTaskCompletedEventAttributes?: DecisionTaskCompletedEventAttributes;

  /**
   * @schema HistoryEvent#decisionTaskTimedOutEventAttributes
   */
  readonly decisionTaskTimedOutEventAttributes?: DecisionTaskTimedOutEventAttributes;

  /**
   * @schema HistoryEvent#activityTaskScheduledEventAttributes
   */
  readonly activityTaskScheduledEventAttributes?: ActivityTaskScheduledEventAttributes;

  /**
   * @schema HistoryEvent#activityTaskStartedEventAttributes
   */
  readonly activityTaskStartedEventAttributes?: ActivityTaskStartedEventAttributes;

  /**
   * @schema HistoryEvent#activityTaskCompletedEventAttributes
   */
  readonly activityTaskCompletedEventAttributes?: ActivityTaskCompletedEventAttributes;

  /**
   * @schema HistoryEvent#activityTaskFailedEventAttributes
   */
  readonly activityTaskFailedEventAttributes?: ActivityTaskFailedEventAttributes;

  /**
   * @schema HistoryEvent#activityTaskTimedOutEventAttributes
   */
  readonly activityTaskTimedOutEventAttributes?: ActivityTaskTimedOutEventAttributes;

  /**
   * @schema HistoryEvent#activityTaskCanceledEventAttributes
   */
  readonly activityTaskCanceledEventAttributes?: ActivityTaskCanceledEventAttributes;

  /**
   * @schema HistoryEvent#activityTaskCancelRequestedEventAttributes
   */
  readonly activityTaskCancelRequestedEventAttributes?: ActivityTaskCancelRequestedEventAttributes;

  /**
   * @schema HistoryEvent#workflowExecutionSignaledEventAttributes
   */
  readonly workflowExecutionSignaledEventAttributes?: WorkflowExecutionSignaledEventAttributes;

  /**
   * @schema HistoryEvent#markerRecordedEventAttributes
   */
  readonly markerRecordedEventAttributes?: MarkerRecordedEventAttributes;

  /**
   * @schema HistoryEvent#recordMarkerFailedEventAttributes
   */
  readonly recordMarkerFailedEventAttributes?: RecordMarkerFailedEventAttributes;

  /**
   * @schema HistoryEvent#timerStartedEventAttributes
   */
  readonly timerStartedEventAttributes?: TimerStartedEventAttributes;

  /**
   * @schema HistoryEvent#timerFiredEventAttributes
   */
  readonly timerFiredEventAttributes?: TimerFiredEventAttributes;

  /**
   * @schema HistoryEvent#timerCanceledEventAttributes
   */
  readonly timerCanceledEventAttributes?: TimerCanceledEventAttributes;

  /**
   * @schema HistoryEvent#startChildWorkflowExecutionInitiatedEventAttributes
   */
  readonly startChildWorkflowExecutionInitiatedEventAttributes?: StartChildWorkflowExecutionInitiatedEventAttributes;

  /**
   * @schema HistoryEvent#childWorkflowExecutionStartedEventAttributes
   */
  readonly childWorkflowExecutionStartedEventAttributes?: ChildWorkflowExecutionStartedEventAttributes;

  /**
   * @schema HistoryEvent#childWorkflowExecutionCompletedEventAttributes
   */
  readonly childWorkflowExecutionCompletedEventAttributes?: ChildWorkflowExecutionCompletedEventAttributes;

  /**
   * @schema HistoryEvent#childWorkflowExecutionFailedEventAttributes
   */
  readonly childWorkflowExecutionFailedEventAttributes?: ChildWorkflowExecutionFailedEventAttributes;

  /**
   * @schema HistoryEvent#childWorkflowExecutionTimedOutEventAttributes
   */
  readonly childWorkflowExecutionTimedOutEventAttributes?: ChildWorkflowExecutionTimedOutEventAttributes;

  /**
   * @schema HistoryEvent#childWorkflowExecutionCanceledEventAttributes
   */
  readonly childWorkflowExecutionCanceledEventAttributes?: ChildWorkflowExecutionCanceledEventAttributes;

  /**
   * @schema HistoryEvent#childWorkflowExecutionTerminatedEventAttributes
   */
  readonly childWorkflowExecutionTerminatedEventAttributes?: ChildWorkflowExecutionTerminatedEventAttributes;

  /**
   * @schema HistoryEvent#signalExternalWorkflowExecutionInitiatedEventAttributes
   */
  readonly signalExternalWorkflowExecutionInitiatedEventAttributes?: SignalExternalWorkflowExecutionInitiatedEventAttributes;

  /**
   * @schema HistoryEvent#externalWorkflowExecutionSignaledEventAttributes
   */
  readonly externalWorkflowExecutionSignaledEventAttributes?: ExternalWorkflowExecutionSignaledEventAttributes;

  /**
   * @schema HistoryEvent#signalExternalWorkflowExecutionFailedEventAttributes
   */
  readonly signalExternalWorkflowExecutionFailedEventAttributes?: SignalExternalWorkflowExecutionFailedEventAttributes;

  /**
   * @schema HistoryEvent#externalWorkflowExecutionCancelRequestedEventAttributes
   */
  readonly externalWorkflowExecutionCancelRequestedEventAttributes?: ExternalWorkflowExecutionCancelRequestedEventAttributes;

  /**
   * @schema HistoryEvent#requestCancelExternalWorkflowExecutionInitiatedEventAttributes
   */
  readonly requestCancelExternalWorkflowExecutionInitiatedEventAttributes?: RequestCancelExternalWorkflowExecutionInitiatedEventAttributes;

  /**
   * @schema HistoryEvent#requestCancelExternalWorkflowExecutionFailedEventAttributes
   */
  readonly requestCancelExternalWorkflowExecutionFailedEventAttributes?: RequestCancelExternalWorkflowExecutionFailedEventAttributes;

  /**
   * @schema HistoryEvent#scheduleActivityTaskFailedEventAttributes
   */
  readonly scheduleActivityTaskFailedEventAttributes?: ScheduleActivityTaskFailedEventAttributes;

  /**
   * @schema HistoryEvent#requestCancelActivityTaskFailedEventAttributes
   */
  readonly requestCancelActivityTaskFailedEventAttributes?: RequestCancelActivityTaskFailedEventAttributes;

  /**
   * @schema HistoryEvent#startTimerFailedEventAttributes
   */
  readonly startTimerFailedEventAttributes?: StartTimerFailedEventAttributes;

  /**
   * @schema HistoryEvent#cancelTimerFailedEventAttributes
   */
  readonly cancelTimerFailedEventAttributes?: CancelTimerFailedEventAttributes;

  /**
   * @schema HistoryEvent#startChildWorkflowExecutionFailedEventAttributes
   */
  readonly startChildWorkflowExecutionFailedEventAttributes?: StartChildWorkflowExecutionFailedEventAttributes;

  /**
   * @schema HistoryEvent#lambdaFunctionScheduledEventAttributes
   */
  readonly lambdaFunctionScheduledEventAttributes?: LambdaFunctionScheduledEventAttributes;

  /**
   * @schema HistoryEvent#lambdaFunctionStartedEventAttributes
   */
  readonly lambdaFunctionStartedEventAttributes?: LambdaFunctionStartedEventAttributes;

  /**
   * @schema HistoryEvent#lambdaFunctionCompletedEventAttributes
   */
  readonly lambdaFunctionCompletedEventAttributes?: LambdaFunctionCompletedEventAttributes;

  /**
   * @schema HistoryEvent#lambdaFunctionFailedEventAttributes
   */
  readonly lambdaFunctionFailedEventAttributes?: LambdaFunctionFailedEventAttributes;

  /**
   * @schema HistoryEvent#lambdaFunctionTimedOutEventAttributes
   */
  readonly lambdaFunctionTimedOutEventAttributes?: LambdaFunctionTimedOutEventAttributes;

  /**
   * @schema HistoryEvent#scheduleLambdaFunctionFailedEventAttributes
   */
  readonly scheduleLambdaFunctionFailedEventAttributes?: ScheduleLambdaFunctionFailedEventAttributes;

  /**
   * @schema HistoryEvent#startLambdaFunctionFailedEventAttributes
   */
  readonly startLambdaFunctionFailedEventAttributes?: StartLambdaFunctionFailedEventAttributes;

}

/**
 * @schema ResourceTag
 */
export interface ResourceTag {
  /**
   * @schema ResourceTag#key
   */
  readonly key: string;

  /**
   * @schema ResourceTag#value
   */
  readonly value?: string;

}

/**
 * @schema Decision
 */
export interface Decision {
  /**
   * @schema Decision#decisionType
   */
  readonly decisionType: string;

  /**
   * @schema Decision#scheduleActivityTaskDecisionAttributes
   */
  readonly scheduleActivityTaskDecisionAttributes?: ScheduleActivityTaskDecisionAttributes;

  /**
   * @schema Decision#requestCancelActivityTaskDecisionAttributes
   */
  readonly requestCancelActivityTaskDecisionAttributes?: RequestCancelActivityTaskDecisionAttributes;

  /**
   * @schema Decision#completeWorkflowExecutionDecisionAttributes
   */
  readonly completeWorkflowExecutionDecisionAttributes?: CompleteWorkflowExecutionDecisionAttributes;

  /**
   * @schema Decision#failWorkflowExecutionDecisionAttributes
   */
  readonly failWorkflowExecutionDecisionAttributes?: FailWorkflowExecutionDecisionAttributes;

  /**
   * @schema Decision#cancelWorkflowExecutionDecisionAttributes
   */
  readonly cancelWorkflowExecutionDecisionAttributes?: CancelWorkflowExecutionDecisionAttributes;

  /**
   * @schema Decision#continueAsNewWorkflowExecutionDecisionAttributes
   */
  readonly continueAsNewWorkflowExecutionDecisionAttributes?: ContinueAsNewWorkflowExecutionDecisionAttributes;

  /**
   * @schema Decision#recordMarkerDecisionAttributes
   */
  readonly recordMarkerDecisionAttributes?: RecordMarkerDecisionAttributes;

  /**
   * @schema Decision#startTimerDecisionAttributes
   */
  readonly startTimerDecisionAttributes?: StartTimerDecisionAttributes;

  /**
   * @schema Decision#cancelTimerDecisionAttributes
   */
  readonly cancelTimerDecisionAttributes?: CancelTimerDecisionAttributes;

  /**
   * @schema Decision#signalExternalWorkflowExecutionDecisionAttributes
   */
  readonly signalExternalWorkflowExecutionDecisionAttributes?: SignalExternalWorkflowExecutionDecisionAttributes;

  /**
   * @schema Decision#requestCancelExternalWorkflowExecutionDecisionAttributes
   */
  readonly requestCancelExternalWorkflowExecutionDecisionAttributes?: RequestCancelExternalWorkflowExecutionDecisionAttributes;

  /**
   * @schema Decision#startChildWorkflowExecutionDecisionAttributes
   */
  readonly startChildWorkflowExecutionDecisionAttributes?: StartChildWorkflowExecutionDecisionAttributes;

  /**
   * @schema Decision#scheduleLambdaFunctionDecisionAttributes
   */
  readonly scheduleLambdaFunctionDecisionAttributes?: ScheduleLambdaFunctionDecisionAttributes;

}

/**
 * @schema WorkflowExecutionStartedEventAttributes
 */
export interface WorkflowExecutionStartedEventAttributes {
  /**
   * @schema WorkflowExecutionStartedEventAttributes#input
   */
  readonly input?: string;

  /**
   * @schema WorkflowExecutionStartedEventAttributes#executionStartToCloseTimeout
   */
  readonly executionStartToCloseTimeout?: string;

  /**
   * @schema WorkflowExecutionStartedEventAttributes#taskStartToCloseTimeout
   */
  readonly taskStartToCloseTimeout?: string;

  /**
   * @schema WorkflowExecutionStartedEventAttributes#childPolicy
   */
  readonly childPolicy: string;

  /**
   * @schema WorkflowExecutionStartedEventAttributes#taskList
   */
  readonly taskList: TaskList;

  /**
   * @schema WorkflowExecutionStartedEventAttributes#taskPriority
   */
  readonly taskPriority?: string;

  /**
   * @schema WorkflowExecutionStartedEventAttributes#workflowType
   */
  readonly workflowType: WorkflowType;

  /**
   * @schema WorkflowExecutionStartedEventAttributes#tagList
   */
  readonly tagList?: string[];

  /**
   * @schema WorkflowExecutionStartedEventAttributes#continuedExecutionRunId
   */
  readonly continuedExecutionRunId?: string;

  /**
   * @schema WorkflowExecutionStartedEventAttributes#parentWorkflowExecution
   */
  readonly parentWorkflowExecution?: WorkflowExecution;

  /**
   * @schema WorkflowExecutionStartedEventAttributes#parentInitiatedEventId
   */
  readonly parentInitiatedEventId?: number;

  /**
   * @schema WorkflowExecutionStartedEventAttributes#lambdaRole
   */
  readonly lambdaRole?: string;

}

/**
 * @schema WorkflowExecutionCompletedEventAttributes
 */
export interface WorkflowExecutionCompletedEventAttributes {
  /**
   * @schema WorkflowExecutionCompletedEventAttributes#result
   */
  readonly result?: string;

  /**
   * @schema WorkflowExecutionCompletedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema CompleteWorkflowExecutionFailedEventAttributes
 */
export interface CompleteWorkflowExecutionFailedEventAttributes {
  /**
   * @schema CompleteWorkflowExecutionFailedEventAttributes#cause
   */
  readonly cause: string;

  /**
   * @schema CompleteWorkflowExecutionFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema WorkflowExecutionFailedEventAttributes
 */
export interface WorkflowExecutionFailedEventAttributes {
  /**
   * @schema WorkflowExecutionFailedEventAttributes#reason
   */
  readonly reason?: string;

  /**
   * @schema WorkflowExecutionFailedEventAttributes#details
   */
  readonly details?: string;

  /**
   * @schema WorkflowExecutionFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema FailWorkflowExecutionFailedEventAttributes
 */
export interface FailWorkflowExecutionFailedEventAttributes {
  /**
   * @schema FailWorkflowExecutionFailedEventAttributes#cause
   */
  readonly cause: string;

  /**
   * @schema FailWorkflowExecutionFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema WorkflowExecutionTimedOutEventAttributes
 */
export interface WorkflowExecutionTimedOutEventAttributes {
  /**
   * @schema WorkflowExecutionTimedOutEventAttributes#timeoutType
   */
  readonly timeoutType: string;

  /**
   * @schema WorkflowExecutionTimedOutEventAttributes#childPolicy
   */
  readonly childPolicy: string;

}

/**
 * @schema WorkflowExecutionCanceledEventAttributes
 */
export interface WorkflowExecutionCanceledEventAttributes {
  /**
   * @schema WorkflowExecutionCanceledEventAttributes#details
   */
  readonly details?: string;

  /**
   * @schema WorkflowExecutionCanceledEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema CancelWorkflowExecutionFailedEventAttributes
 */
export interface CancelWorkflowExecutionFailedEventAttributes {
  /**
   * @schema CancelWorkflowExecutionFailedEventAttributes#cause
   */
  readonly cause: string;

  /**
   * @schema CancelWorkflowExecutionFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema WorkflowExecutionContinuedAsNewEventAttributes
 */
export interface WorkflowExecutionContinuedAsNewEventAttributes {
  /**
   * @schema WorkflowExecutionContinuedAsNewEventAttributes#input
   */
  readonly input?: string;

  /**
   * @schema WorkflowExecutionContinuedAsNewEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

  /**
   * @schema WorkflowExecutionContinuedAsNewEventAttributes#newExecutionRunId
   */
  readonly newExecutionRunId: string;

  /**
   * @schema WorkflowExecutionContinuedAsNewEventAttributes#executionStartToCloseTimeout
   */
  readonly executionStartToCloseTimeout?: string;

  /**
   * @schema WorkflowExecutionContinuedAsNewEventAttributes#taskList
   */
  readonly taskList: TaskList;

  /**
   * @schema WorkflowExecutionContinuedAsNewEventAttributes#taskPriority
   */
  readonly taskPriority?: string;

  /**
   * @schema WorkflowExecutionContinuedAsNewEventAttributes#taskStartToCloseTimeout
   */
  readonly taskStartToCloseTimeout?: string;

  /**
   * @schema WorkflowExecutionContinuedAsNewEventAttributes#childPolicy
   */
  readonly childPolicy: string;

  /**
   * @schema WorkflowExecutionContinuedAsNewEventAttributes#tagList
   */
  readonly tagList?: string[];

  /**
   * @schema WorkflowExecutionContinuedAsNewEventAttributes#workflowType
   */
  readonly workflowType: WorkflowType;

  /**
   * @schema WorkflowExecutionContinuedAsNewEventAttributes#lambdaRole
   */
  readonly lambdaRole?: string;

}

/**
 * @schema ContinueAsNewWorkflowExecutionFailedEventAttributes
 */
export interface ContinueAsNewWorkflowExecutionFailedEventAttributes {
  /**
   * @schema ContinueAsNewWorkflowExecutionFailedEventAttributes#cause
   */
  readonly cause: string;

  /**
   * @schema ContinueAsNewWorkflowExecutionFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema WorkflowExecutionTerminatedEventAttributes
 */
export interface WorkflowExecutionTerminatedEventAttributes {
  /**
   * @schema WorkflowExecutionTerminatedEventAttributes#reason
   */
  readonly reason?: string;

  /**
   * @schema WorkflowExecutionTerminatedEventAttributes#details
   */
  readonly details?: string;

  /**
   * @schema WorkflowExecutionTerminatedEventAttributes#childPolicy
   */
  readonly childPolicy: string;

  /**
   * @schema WorkflowExecutionTerminatedEventAttributes#cause
   */
  readonly cause?: string;

}

/**
 * @schema WorkflowExecutionCancelRequestedEventAttributes
 */
export interface WorkflowExecutionCancelRequestedEventAttributes {
  /**
   * @schema WorkflowExecutionCancelRequestedEventAttributes#externalWorkflowExecution
   */
  readonly externalWorkflowExecution?: WorkflowExecution;

  /**
   * @schema WorkflowExecutionCancelRequestedEventAttributes#externalInitiatedEventId
   */
  readonly externalInitiatedEventId?: number;

  /**
   * @schema WorkflowExecutionCancelRequestedEventAttributes#cause
   */
  readonly cause?: string;

}

/**
 * @schema DecisionTaskScheduledEventAttributes
 */
export interface DecisionTaskScheduledEventAttributes {
  /**
   * @schema DecisionTaskScheduledEventAttributes#taskList
   */
  readonly taskList: TaskList;

  /**
   * @schema DecisionTaskScheduledEventAttributes#taskPriority
   */
  readonly taskPriority?: string;

  /**
   * @schema DecisionTaskScheduledEventAttributes#startToCloseTimeout
   */
  readonly startToCloseTimeout?: string;

}

/**
 * @schema DecisionTaskStartedEventAttributes
 */
export interface DecisionTaskStartedEventAttributes {
  /**
   * @schema DecisionTaskStartedEventAttributes#identity
   */
  readonly identity?: string;

  /**
   * @schema DecisionTaskStartedEventAttributes#scheduledEventId
   */
  readonly scheduledEventId: number;

}

/**
 * @schema DecisionTaskCompletedEventAttributes
 */
export interface DecisionTaskCompletedEventAttributes {
  /**
   * @schema DecisionTaskCompletedEventAttributes#executionContext
   */
  readonly executionContext?: string;

  /**
   * @schema DecisionTaskCompletedEventAttributes#scheduledEventId
   */
  readonly scheduledEventId: number;

  /**
   * @schema DecisionTaskCompletedEventAttributes#startedEventId
   */
  readonly startedEventId: number;

}

/**
 * @schema DecisionTaskTimedOutEventAttributes
 */
export interface DecisionTaskTimedOutEventAttributes {
  /**
   * @schema DecisionTaskTimedOutEventAttributes#timeoutType
   */
  readonly timeoutType: string;

  /**
   * @schema DecisionTaskTimedOutEventAttributes#scheduledEventId
   */
  readonly scheduledEventId: number;

  /**
   * @schema DecisionTaskTimedOutEventAttributes#startedEventId
   */
  readonly startedEventId: number;

}

/**
 * @schema ActivityTaskScheduledEventAttributes
 */
export interface ActivityTaskScheduledEventAttributes {
  /**
   * @schema ActivityTaskScheduledEventAttributes#activityType
   */
  readonly activityType: ActivityType;

  /**
   * @schema ActivityTaskScheduledEventAttributes#activityId
   */
  readonly activityId: string;

  /**
   * @schema ActivityTaskScheduledEventAttributes#input
   */
  readonly input?: string;

  /**
   * @schema ActivityTaskScheduledEventAttributes#control
   */
  readonly control?: string;

  /**
   * @schema ActivityTaskScheduledEventAttributes#scheduleToStartTimeout
   */
  readonly scheduleToStartTimeout?: string;

  /**
   * @schema ActivityTaskScheduledEventAttributes#scheduleToCloseTimeout
   */
  readonly scheduleToCloseTimeout?: string;

  /**
   * @schema ActivityTaskScheduledEventAttributes#startToCloseTimeout
   */
  readonly startToCloseTimeout?: string;

  /**
   * @schema ActivityTaskScheduledEventAttributes#taskList
   */
  readonly taskList: TaskList;

  /**
   * @schema ActivityTaskScheduledEventAttributes#taskPriority
   */
  readonly taskPriority?: string;

  /**
   * @schema ActivityTaskScheduledEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

  /**
   * @schema ActivityTaskScheduledEventAttributes#heartbeatTimeout
   */
  readonly heartbeatTimeout?: string;

}

/**
 * @schema ActivityTaskStartedEventAttributes
 */
export interface ActivityTaskStartedEventAttributes {
  /**
   * @schema ActivityTaskStartedEventAttributes#identity
   */
  readonly identity?: string;

  /**
   * @schema ActivityTaskStartedEventAttributes#scheduledEventId
   */
  readonly scheduledEventId: number;

}

/**
 * @schema ActivityTaskCompletedEventAttributes
 */
export interface ActivityTaskCompletedEventAttributes {
  /**
   * @schema ActivityTaskCompletedEventAttributes#result
   */
  readonly result?: string;

  /**
   * @schema ActivityTaskCompletedEventAttributes#scheduledEventId
   */
  readonly scheduledEventId: number;

  /**
   * @schema ActivityTaskCompletedEventAttributes#startedEventId
   */
  readonly startedEventId: number;

}

/**
 * @schema ActivityTaskFailedEventAttributes
 */
export interface ActivityTaskFailedEventAttributes {
  /**
   * @schema ActivityTaskFailedEventAttributes#reason
   */
  readonly reason?: string;

  /**
   * @schema ActivityTaskFailedEventAttributes#details
   */
  readonly details?: string;

  /**
   * @schema ActivityTaskFailedEventAttributes#scheduledEventId
   */
  readonly scheduledEventId: number;

  /**
   * @schema ActivityTaskFailedEventAttributes#startedEventId
   */
  readonly startedEventId: number;

}

/**
 * @schema ActivityTaskTimedOutEventAttributes
 */
export interface ActivityTaskTimedOutEventAttributes {
  /**
   * @schema ActivityTaskTimedOutEventAttributes#timeoutType
   */
  readonly timeoutType: string;

  /**
   * @schema ActivityTaskTimedOutEventAttributes#scheduledEventId
   */
  readonly scheduledEventId: number;

  /**
   * @schema ActivityTaskTimedOutEventAttributes#startedEventId
   */
  readonly startedEventId: number;

  /**
   * @schema ActivityTaskTimedOutEventAttributes#details
   */
  readonly details?: string;

}

/**
 * @schema ActivityTaskCanceledEventAttributes
 */
export interface ActivityTaskCanceledEventAttributes {
  /**
   * @schema ActivityTaskCanceledEventAttributes#details
   */
  readonly details?: string;

  /**
   * @schema ActivityTaskCanceledEventAttributes#scheduledEventId
   */
  readonly scheduledEventId: number;

  /**
   * @schema ActivityTaskCanceledEventAttributes#startedEventId
   */
  readonly startedEventId: number;

  /**
   * @schema ActivityTaskCanceledEventAttributes#latestCancelRequestedEventId
   */
  readonly latestCancelRequestedEventId?: number;

}

/**
 * @schema ActivityTaskCancelRequestedEventAttributes
 */
export interface ActivityTaskCancelRequestedEventAttributes {
  /**
   * @schema ActivityTaskCancelRequestedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

  /**
   * @schema ActivityTaskCancelRequestedEventAttributes#activityId
   */
  readonly activityId: string;

}

/**
 * @schema WorkflowExecutionSignaledEventAttributes
 */
export interface WorkflowExecutionSignaledEventAttributes {
  /**
   * @schema WorkflowExecutionSignaledEventAttributes#signalName
   */
  readonly signalName: string;

  /**
   * @schema WorkflowExecutionSignaledEventAttributes#input
   */
  readonly input?: string;

  /**
   * @schema WorkflowExecutionSignaledEventAttributes#externalWorkflowExecution
   */
  readonly externalWorkflowExecution?: WorkflowExecution;

  /**
   * @schema WorkflowExecutionSignaledEventAttributes#externalInitiatedEventId
   */
  readonly externalInitiatedEventId?: number;

}

/**
 * @schema MarkerRecordedEventAttributes
 */
export interface MarkerRecordedEventAttributes {
  /**
   * @schema MarkerRecordedEventAttributes#markerName
   */
  readonly markerName: string;

  /**
   * @schema MarkerRecordedEventAttributes#details
   */
  readonly details?: string;

  /**
   * @schema MarkerRecordedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema RecordMarkerFailedEventAttributes
 */
export interface RecordMarkerFailedEventAttributes {
  /**
   * @schema RecordMarkerFailedEventAttributes#markerName
   */
  readonly markerName: string;

  /**
   * @schema RecordMarkerFailedEventAttributes#cause
   */
  readonly cause: string;

  /**
   * @schema RecordMarkerFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema TimerStartedEventAttributes
 */
export interface TimerStartedEventAttributes {
  /**
   * @schema TimerStartedEventAttributes#timerId
   */
  readonly timerId: string;

  /**
   * @schema TimerStartedEventAttributes#control
   */
  readonly control?: string;

  /**
   * @schema TimerStartedEventAttributes#startToFireTimeout
   */
  readonly startToFireTimeout: string;

  /**
   * @schema TimerStartedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema TimerFiredEventAttributes
 */
export interface TimerFiredEventAttributes {
  /**
   * @schema TimerFiredEventAttributes#timerId
   */
  readonly timerId: string;

  /**
   * @schema TimerFiredEventAttributes#startedEventId
   */
  readonly startedEventId: number;

}

/**
 * @schema TimerCanceledEventAttributes
 */
export interface TimerCanceledEventAttributes {
  /**
   * @schema TimerCanceledEventAttributes#timerId
   */
  readonly timerId: string;

  /**
   * @schema TimerCanceledEventAttributes#startedEventId
   */
  readonly startedEventId: number;

  /**
   * @schema TimerCanceledEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema StartChildWorkflowExecutionInitiatedEventAttributes
 */
export interface StartChildWorkflowExecutionInitiatedEventAttributes {
  /**
   * @schema StartChildWorkflowExecutionInitiatedEventAttributes#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema StartChildWorkflowExecutionInitiatedEventAttributes#workflowType
   */
  readonly workflowType: WorkflowType;

  /**
   * @schema StartChildWorkflowExecutionInitiatedEventAttributes#control
   */
  readonly control?: string;

  /**
   * @schema StartChildWorkflowExecutionInitiatedEventAttributes#input
   */
  readonly input?: string;

  /**
   * @schema StartChildWorkflowExecutionInitiatedEventAttributes#executionStartToCloseTimeout
   */
  readonly executionStartToCloseTimeout?: string;

  /**
   * @schema StartChildWorkflowExecutionInitiatedEventAttributes#taskList
   */
  readonly taskList: TaskList;

  /**
   * @schema StartChildWorkflowExecutionInitiatedEventAttributes#taskPriority
   */
  readonly taskPriority?: string;

  /**
   * @schema StartChildWorkflowExecutionInitiatedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

  /**
   * @schema StartChildWorkflowExecutionInitiatedEventAttributes#childPolicy
   */
  readonly childPolicy: string;

  /**
   * @schema StartChildWorkflowExecutionInitiatedEventAttributes#taskStartToCloseTimeout
   */
  readonly taskStartToCloseTimeout?: string;

  /**
   * @schema StartChildWorkflowExecutionInitiatedEventAttributes#tagList
   */
  readonly tagList?: string[];

  /**
   * @schema StartChildWorkflowExecutionInitiatedEventAttributes#lambdaRole
   */
  readonly lambdaRole?: string;

}

/**
 * @schema ChildWorkflowExecutionStartedEventAttributes
 */
export interface ChildWorkflowExecutionStartedEventAttributes {
  /**
   * @schema ChildWorkflowExecutionStartedEventAttributes#workflowExecution
   */
  readonly workflowExecution: WorkflowExecution;

  /**
   * @schema ChildWorkflowExecutionStartedEventAttributes#workflowType
   */
  readonly workflowType: WorkflowType;

  /**
   * @schema ChildWorkflowExecutionStartedEventAttributes#initiatedEventId
   */
  readonly initiatedEventId: number;

}

/**
 * @schema ChildWorkflowExecutionCompletedEventAttributes
 */
export interface ChildWorkflowExecutionCompletedEventAttributes {
  /**
   * @schema ChildWorkflowExecutionCompletedEventAttributes#workflowExecution
   */
  readonly workflowExecution: WorkflowExecution;

  /**
   * @schema ChildWorkflowExecutionCompletedEventAttributes#workflowType
   */
  readonly workflowType: WorkflowType;

  /**
   * @schema ChildWorkflowExecutionCompletedEventAttributes#result
   */
  readonly result?: string;

  /**
   * @schema ChildWorkflowExecutionCompletedEventAttributes#initiatedEventId
   */
  readonly initiatedEventId: number;

  /**
   * @schema ChildWorkflowExecutionCompletedEventAttributes#startedEventId
   */
  readonly startedEventId: number;

}

/**
 * @schema ChildWorkflowExecutionFailedEventAttributes
 */
export interface ChildWorkflowExecutionFailedEventAttributes {
  /**
   * @schema ChildWorkflowExecutionFailedEventAttributes#workflowExecution
   */
  readonly workflowExecution: WorkflowExecution;

  /**
   * @schema ChildWorkflowExecutionFailedEventAttributes#workflowType
   */
  readonly workflowType: WorkflowType;

  /**
   * @schema ChildWorkflowExecutionFailedEventAttributes#reason
   */
  readonly reason?: string;

  /**
   * @schema ChildWorkflowExecutionFailedEventAttributes#details
   */
  readonly details?: string;

  /**
   * @schema ChildWorkflowExecutionFailedEventAttributes#initiatedEventId
   */
  readonly initiatedEventId: number;

  /**
   * @schema ChildWorkflowExecutionFailedEventAttributes#startedEventId
   */
  readonly startedEventId: number;

}

/**
 * @schema ChildWorkflowExecutionTimedOutEventAttributes
 */
export interface ChildWorkflowExecutionTimedOutEventAttributes {
  /**
   * @schema ChildWorkflowExecutionTimedOutEventAttributes#workflowExecution
   */
  readonly workflowExecution: WorkflowExecution;

  /**
   * @schema ChildWorkflowExecutionTimedOutEventAttributes#workflowType
   */
  readonly workflowType: WorkflowType;

  /**
   * @schema ChildWorkflowExecutionTimedOutEventAttributes#timeoutType
   */
  readonly timeoutType: string;

  /**
   * @schema ChildWorkflowExecutionTimedOutEventAttributes#initiatedEventId
   */
  readonly initiatedEventId: number;

  /**
   * @schema ChildWorkflowExecutionTimedOutEventAttributes#startedEventId
   */
  readonly startedEventId: number;

}

/**
 * @schema ChildWorkflowExecutionCanceledEventAttributes
 */
export interface ChildWorkflowExecutionCanceledEventAttributes {
  /**
   * @schema ChildWorkflowExecutionCanceledEventAttributes#workflowExecution
   */
  readonly workflowExecution: WorkflowExecution;

  /**
   * @schema ChildWorkflowExecutionCanceledEventAttributes#workflowType
   */
  readonly workflowType: WorkflowType;

  /**
   * @schema ChildWorkflowExecutionCanceledEventAttributes#details
   */
  readonly details?: string;

  /**
   * @schema ChildWorkflowExecutionCanceledEventAttributes#initiatedEventId
   */
  readonly initiatedEventId: number;

  /**
   * @schema ChildWorkflowExecutionCanceledEventAttributes#startedEventId
   */
  readonly startedEventId: number;

}

/**
 * @schema ChildWorkflowExecutionTerminatedEventAttributes
 */
export interface ChildWorkflowExecutionTerminatedEventAttributes {
  /**
   * @schema ChildWorkflowExecutionTerminatedEventAttributes#workflowExecution
   */
  readonly workflowExecution: WorkflowExecution;

  /**
   * @schema ChildWorkflowExecutionTerminatedEventAttributes#workflowType
   */
  readonly workflowType: WorkflowType;

  /**
   * @schema ChildWorkflowExecutionTerminatedEventAttributes#initiatedEventId
   */
  readonly initiatedEventId: number;

  /**
   * @schema ChildWorkflowExecutionTerminatedEventAttributes#startedEventId
   */
  readonly startedEventId: number;

}

/**
 * @schema SignalExternalWorkflowExecutionInitiatedEventAttributes
 */
export interface SignalExternalWorkflowExecutionInitiatedEventAttributes {
  /**
   * @schema SignalExternalWorkflowExecutionInitiatedEventAttributes#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema SignalExternalWorkflowExecutionInitiatedEventAttributes#runId
   */
  readonly runId?: string;

  /**
   * @schema SignalExternalWorkflowExecutionInitiatedEventAttributes#signalName
   */
  readonly signalName: string;

  /**
   * @schema SignalExternalWorkflowExecutionInitiatedEventAttributes#input
   */
  readonly input?: string;

  /**
   * @schema SignalExternalWorkflowExecutionInitiatedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

  /**
   * @schema SignalExternalWorkflowExecutionInitiatedEventAttributes#control
   */
  readonly control?: string;

}

/**
 * @schema ExternalWorkflowExecutionSignaledEventAttributes
 */
export interface ExternalWorkflowExecutionSignaledEventAttributes {
  /**
   * @schema ExternalWorkflowExecutionSignaledEventAttributes#workflowExecution
   */
  readonly workflowExecution: WorkflowExecution;

  /**
   * @schema ExternalWorkflowExecutionSignaledEventAttributes#initiatedEventId
   */
  readonly initiatedEventId: number;

}

/**
 * @schema SignalExternalWorkflowExecutionFailedEventAttributes
 */
export interface SignalExternalWorkflowExecutionFailedEventAttributes {
  /**
   * @schema SignalExternalWorkflowExecutionFailedEventAttributes#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema SignalExternalWorkflowExecutionFailedEventAttributes#runId
   */
  readonly runId?: string;

  /**
   * @schema SignalExternalWorkflowExecutionFailedEventAttributes#cause
   */
  readonly cause: string;

  /**
   * @schema SignalExternalWorkflowExecutionFailedEventAttributes#initiatedEventId
   */
  readonly initiatedEventId: number;

  /**
   * @schema SignalExternalWorkflowExecutionFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

  /**
   * @schema SignalExternalWorkflowExecutionFailedEventAttributes#control
   */
  readonly control?: string;

}

/**
 * @schema ExternalWorkflowExecutionCancelRequestedEventAttributes
 */
export interface ExternalWorkflowExecutionCancelRequestedEventAttributes {
  /**
   * @schema ExternalWorkflowExecutionCancelRequestedEventAttributes#workflowExecution
   */
  readonly workflowExecution: WorkflowExecution;

  /**
   * @schema ExternalWorkflowExecutionCancelRequestedEventAttributes#initiatedEventId
   */
  readonly initiatedEventId: number;

}

/**
 * @schema RequestCancelExternalWorkflowExecutionInitiatedEventAttributes
 */
export interface RequestCancelExternalWorkflowExecutionInitiatedEventAttributes {
  /**
   * @schema RequestCancelExternalWorkflowExecutionInitiatedEventAttributes#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema RequestCancelExternalWorkflowExecutionInitiatedEventAttributes#runId
   */
  readonly runId?: string;

  /**
   * @schema RequestCancelExternalWorkflowExecutionInitiatedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

  /**
   * @schema RequestCancelExternalWorkflowExecutionInitiatedEventAttributes#control
   */
  readonly control?: string;

}

/**
 * @schema RequestCancelExternalWorkflowExecutionFailedEventAttributes
 */
export interface RequestCancelExternalWorkflowExecutionFailedEventAttributes {
  /**
   * @schema RequestCancelExternalWorkflowExecutionFailedEventAttributes#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema RequestCancelExternalWorkflowExecutionFailedEventAttributes#runId
   */
  readonly runId?: string;

  /**
   * @schema RequestCancelExternalWorkflowExecutionFailedEventAttributes#cause
   */
  readonly cause: string;

  /**
   * @schema RequestCancelExternalWorkflowExecutionFailedEventAttributes#initiatedEventId
   */
  readonly initiatedEventId: number;

  /**
   * @schema RequestCancelExternalWorkflowExecutionFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

  /**
   * @schema RequestCancelExternalWorkflowExecutionFailedEventAttributes#control
   */
  readonly control?: string;

}

/**
 * @schema ScheduleActivityTaskFailedEventAttributes
 */
export interface ScheduleActivityTaskFailedEventAttributes {
  /**
   * @schema ScheduleActivityTaskFailedEventAttributes#activityType
   */
  readonly activityType: ActivityType;

  /**
   * @schema ScheduleActivityTaskFailedEventAttributes#activityId
   */
  readonly activityId: string;

  /**
   * @schema ScheduleActivityTaskFailedEventAttributes#cause
   */
  readonly cause: string;

  /**
   * @schema ScheduleActivityTaskFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema RequestCancelActivityTaskFailedEventAttributes
 */
export interface RequestCancelActivityTaskFailedEventAttributes {
  /**
   * @schema RequestCancelActivityTaskFailedEventAttributes#activityId
   */
  readonly activityId: string;

  /**
   * @schema RequestCancelActivityTaskFailedEventAttributes#cause
   */
  readonly cause: string;

  /**
   * @schema RequestCancelActivityTaskFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema StartTimerFailedEventAttributes
 */
export interface StartTimerFailedEventAttributes {
  /**
   * @schema StartTimerFailedEventAttributes#timerId
   */
  readonly timerId: string;

  /**
   * @schema StartTimerFailedEventAttributes#cause
   */
  readonly cause: string;

  /**
   * @schema StartTimerFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema CancelTimerFailedEventAttributes
 */
export interface CancelTimerFailedEventAttributes {
  /**
   * @schema CancelTimerFailedEventAttributes#timerId
   */
  readonly timerId: string;

  /**
   * @schema CancelTimerFailedEventAttributes#cause
   */
  readonly cause: string;

  /**
   * @schema CancelTimerFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema StartChildWorkflowExecutionFailedEventAttributes
 */
export interface StartChildWorkflowExecutionFailedEventAttributes {
  /**
   * @schema StartChildWorkflowExecutionFailedEventAttributes#workflowType
   */
  readonly workflowType: WorkflowType;

  /**
   * @schema StartChildWorkflowExecutionFailedEventAttributes#cause
   */
  readonly cause: string;

  /**
   * @schema StartChildWorkflowExecutionFailedEventAttributes#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema StartChildWorkflowExecutionFailedEventAttributes#initiatedEventId
   */
  readonly initiatedEventId: number;

  /**
   * @schema StartChildWorkflowExecutionFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

  /**
   * @schema StartChildWorkflowExecutionFailedEventAttributes#control
   */
  readonly control?: string;

}

/**
 * @schema LambdaFunctionScheduledEventAttributes
 */
export interface LambdaFunctionScheduledEventAttributes {
  /**
   * @schema LambdaFunctionScheduledEventAttributes#id
   */
  readonly id: string;

  /**
   * @schema LambdaFunctionScheduledEventAttributes#name
   */
  readonly name: string;

  /**
   * @schema LambdaFunctionScheduledEventAttributes#control
   */
  readonly control?: string;

  /**
   * @schema LambdaFunctionScheduledEventAttributes#input
   */
  readonly input?: string;

  /**
   * @schema LambdaFunctionScheduledEventAttributes#startToCloseTimeout
   */
  readonly startToCloseTimeout?: string;

  /**
   * @schema LambdaFunctionScheduledEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema LambdaFunctionStartedEventAttributes
 */
export interface LambdaFunctionStartedEventAttributes {
  /**
   * @schema LambdaFunctionStartedEventAttributes#scheduledEventId
   */
  readonly scheduledEventId: number;

}

/**
 * @schema LambdaFunctionCompletedEventAttributes
 */
export interface LambdaFunctionCompletedEventAttributes {
  /**
   * @schema LambdaFunctionCompletedEventAttributes#scheduledEventId
   */
  readonly scheduledEventId: number;

  /**
   * @schema LambdaFunctionCompletedEventAttributes#startedEventId
   */
  readonly startedEventId: number;

  /**
   * @schema LambdaFunctionCompletedEventAttributes#result
   */
  readonly result?: string;

}

/**
 * @schema LambdaFunctionFailedEventAttributes
 */
export interface LambdaFunctionFailedEventAttributes {
  /**
   * @schema LambdaFunctionFailedEventAttributes#scheduledEventId
   */
  readonly scheduledEventId: number;

  /**
   * @schema LambdaFunctionFailedEventAttributes#startedEventId
   */
  readonly startedEventId: number;

  /**
   * @schema LambdaFunctionFailedEventAttributes#reason
   */
  readonly reason?: string;

  /**
   * @schema LambdaFunctionFailedEventAttributes#details
   */
  readonly details?: string;

}

/**
 * @schema LambdaFunctionTimedOutEventAttributes
 */
export interface LambdaFunctionTimedOutEventAttributes {
  /**
   * @schema LambdaFunctionTimedOutEventAttributes#scheduledEventId
   */
  readonly scheduledEventId: number;

  /**
   * @schema LambdaFunctionTimedOutEventAttributes#startedEventId
   */
  readonly startedEventId: number;

  /**
   * @schema LambdaFunctionTimedOutEventAttributes#timeoutType
   */
  readonly timeoutType?: string;

}

/**
 * @schema ScheduleLambdaFunctionFailedEventAttributes
 */
export interface ScheduleLambdaFunctionFailedEventAttributes {
  /**
   * @schema ScheduleLambdaFunctionFailedEventAttributes#id
   */
  readonly id: string;

  /**
   * @schema ScheduleLambdaFunctionFailedEventAttributes#name
   */
  readonly name: string;

  /**
   * @schema ScheduleLambdaFunctionFailedEventAttributes#cause
   */
  readonly cause: string;

  /**
   * @schema ScheduleLambdaFunctionFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema StartLambdaFunctionFailedEventAttributes
 */
export interface StartLambdaFunctionFailedEventAttributes {
  /**
   * @schema StartLambdaFunctionFailedEventAttributes#scheduledEventId
   */
  readonly scheduledEventId?: number;

  /**
   * @schema StartLambdaFunctionFailedEventAttributes#cause
   */
  readonly cause?: string;

  /**
   * @schema StartLambdaFunctionFailedEventAttributes#message
   */
  readonly message?: string;

}

/**
 * @schema ScheduleActivityTaskDecisionAttributes
 */
export interface ScheduleActivityTaskDecisionAttributes {
  /**
   * @schema ScheduleActivityTaskDecisionAttributes#activityType
   */
  readonly activityType: ActivityType;

  /**
   * @schema ScheduleActivityTaskDecisionAttributes#activityId
   */
  readonly activityId: string;

  /**
   * @schema ScheduleActivityTaskDecisionAttributes#control
   */
  readonly control?: string;

  /**
   * @schema ScheduleActivityTaskDecisionAttributes#input
   */
  readonly input?: string;

  /**
   * @schema ScheduleActivityTaskDecisionAttributes#scheduleToCloseTimeout
   */
  readonly scheduleToCloseTimeout?: string;

  /**
   * @schema ScheduleActivityTaskDecisionAttributes#taskList
   */
  readonly taskList?: TaskList;

  /**
   * @schema ScheduleActivityTaskDecisionAttributes#taskPriority
   */
  readonly taskPriority?: string;

  /**
   * @schema ScheduleActivityTaskDecisionAttributes#scheduleToStartTimeout
   */
  readonly scheduleToStartTimeout?: string;

  /**
   * @schema ScheduleActivityTaskDecisionAttributes#startToCloseTimeout
   */
  readonly startToCloseTimeout?: string;

  /**
   * @schema ScheduleActivityTaskDecisionAttributes#heartbeatTimeout
   */
  readonly heartbeatTimeout?: string;

}

/**
 * @schema RequestCancelActivityTaskDecisionAttributes
 */
export interface RequestCancelActivityTaskDecisionAttributes {
  /**
   * @schema RequestCancelActivityTaskDecisionAttributes#activityId
   */
  readonly activityId: string;

}

/**
 * @schema CompleteWorkflowExecutionDecisionAttributes
 */
export interface CompleteWorkflowExecutionDecisionAttributes {
  /**
   * @schema CompleteWorkflowExecutionDecisionAttributes#result
   */
  readonly result?: string;

}

/**
 * @schema FailWorkflowExecutionDecisionAttributes
 */
export interface FailWorkflowExecutionDecisionAttributes {
  /**
   * @schema FailWorkflowExecutionDecisionAttributes#reason
   */
  readonly reason?: string;

  /**
   * @schema FailWorkflowExecutionDecisionAttributes#details
   */
  readonly details?: string;

}

/**
 * @schema CancelWorkflowExecutionDecisionAttributes
 */
export interface CancelWorkflowExecutionDecisionAttributes {
  /**
   * @schema CancelWorkflowExecutionDecisionAttributes#details
   */
  readonly details?: string;

}

/**
 * @schema ContinueAsNewWorkflowExecutionDecisionAttributes
 */
export interface ContinueAsNewWorkflowExecutionDecisionAttributes {
  /**
   * @schema ContinueAsNewWorkflowExecutionDecisionAttributes#input
   */
  readonly input?: string;

  /**
   * @schema ContinueAsNewWorkflowExecutionDecisionAttributes#executionStartToCloseTimeout
   */
  readonly executionStartToCloseTimeout?: string;

  /**
   * @schema ContinueAsNewWorkflowExecutionDecisionAttributes#taskList
   */
  readonly taskList?: TaskList;

  /**
   * @schema ContinueAsNewWorkflowExecutionDecisionAttributes#taskPriority
   */
  readonly taskPriority?: string;

  /**
   * @schema ContinueAsNewWorkflowExecutionDecisionAttributes#taskStartToCloseTimeout
   */
  readonly taskStartToCloseTimeout?: string;

  /**
   * @schema ContinueAsNewWorkflowExecutionDecisionAttributes#childPolicy
   */
  readonly childPolicy?: string;

  /**
   * @schema ContinueAsNewWorkflowExecutionDecisionAttributes#tagList
   */
  readonly tagList?: string[];

  /**
   * @schema ContinueAsNewWorkflowExecutionDecisionAttributes#workflowTypeVersion
   */
  readonly workflowTypeVersion?: string;

  /**
   * @schema ContinueAsNewWorkflowExecutionDecisionAttributes#lambdaRole
   */
  readonly lambdaRole?: string;

}

/**
 * @schema RecordMarkerDecisionAttributes
 */
export interface RecordMarkerDecisionAttributes {
  /**
   * @schema RecordMarkerDecisionAttributes#markerName
   */
  readonly markerName: string;

  /**
   * @schema RecordMarkerDecisionAttributes#details
   */
  readonly details?: string;

}

/**
 * @schema StartTimerDecisionAttributes
 */
export interface StartTimerDecisionAttributes {
  /**
   * @schema StartTimerDecisionAttributes#timerId
   */
  readonly timerId: string;

  /**
   * @schema StartTimerDecisionAttributes#control
   */
  readonly control?: string;

  /**
   * @schema StartTimerDecisionAttributes#startToFireTimeout
   */
  readonly startToFireTimeout: string;

}

/**
 * @schema CancelTimerDecisionAttributes
 */
export interface CancelTimerDecisionAttributes {
  /**
   * @schema CancelTimerDecisionAttributes#timerId
   */
  readonly timerId: string;

}

/**
 * @schema SignalExternalWorkflowExecutionDecisionAttributes
 */
export interface SignalExternalWorkflowExecutionDecisionAttributes {
  /**
   * @schema SignalExternalWorkflowExecutionDecisionAttributes#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema SignalExternalWorkflowExecutionDecisionAttributes#runId
   */
  readonly runId?: string;

  /**
   * @schema SignalExternalWorkflowExecutionDecisionAttributes#signalName
   */
  readonly signalName: string;

  /**
   * @schema SignalExternalWorkflowExecutionDecisionAttributes#input
   */
  readonly input?: string;

  /**
   * @schema SignalExternalWorkflowExecutionDecisionAttributes#control
   */
  readonly control?: string;

}

/**
 * @schema RequestCancelExternalWorkflowExecutionDecisionAttributes
 */
export interface RequestCancelExternalWorkflowExecutionDecisionAttributes {
  /**
   * @schema RequestCancelExternalWorkflowExecutionDecisionAttributes#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema RequestCancelExternalWorkflowExecutionDecisionAttributes#runId
   */
  readonly runId?: string;

  /**
   * @schema RequestCancelExternalWorkflowExecutionDecisionAttributes#control
   */
  readonly control?: string;

}

/**
 * @schema StartChildWorkflowExecutionDecisionAttributes
 */
export interface StartChildWorkflowExecutionDecisionAttributes {
  /**
   * @schema StartChildWorkflowExecutionDecisionAttributes#workflowType
   */
  readonly workflowType: WorkflowType;

  /**
   * @schema StartChildWorkflowExecutionDecisionAttributes#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema StartChildWorkflowExecutionDecisionAttributes#control
   */
  readonly control?: string;

  /**
   * @schema StartChildWorkflowExecutionDecisionAttributes#input
   */
  readonly input?: string;

  /**
   * @schema StartChildWorkflowExecutionDecisionAttributes#executionStartToCloseTimeout
   */
  readonly executionStartToCloseTimeout?: string;

  /**
   * @schema StartChildWorkflowExecutionDecisionAttributes#taskList
   */
  readonly taskList?: TaskList;

  /**
   * @schema StartChildWorkflowExecutionDecisionAttributes#taskPriority
   */
  readonly taskPriority?: string;

  /**
   * @schema StartChildWorkflowExecutionDecisionAttributes#taskStartToCloseTimeout
   */
  readonly taskStartToCloseTimeout?: string;

  /**
   * @schema StartChildWorkflowExecutionDecisionAttributes#childPolicy
   */
  readonly childPolicy?: string;

  /**
   * @schema StartChildWorkflowExecutionDecisionAttributes#tagList
   */
  readonly tagList?: string[];

  /**
   * @schema StartChildWorkflowExecutionDecisionAttributes#lambdaRole
   */
  readonly lambdaRole?: string;

}

/**
 * @schema ScheduleLambdaFunctionDecisionAttributes
 */
export interface ScheduleLambdaFunctionDecisionAttributes {
  /**
   * @schema ScheduleLambdaFunctionDecisionAttributes#id
   */
  readonly id: string;

  /**
   * @schema ScheduleLambdaFunctionDecisionAttributes#name
   */
  readonly name: string;

  /**
   * @schema ScheduleLambdaFunctionDecisionAttributes#control
   */
  readonly control?: string;

  /**
   * @schema ScheduleLambdaFunctionDecisionAttributes#input
   */
  readonly input?: string;

  /**
   * @schema ScheduleLambdaFunctionDecisionAttributes#startToCloseTimeout
   */
  readonly startToCloseTimeout?: string;

}
