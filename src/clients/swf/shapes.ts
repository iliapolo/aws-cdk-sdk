/**
 * @schema SwfCountClosedWorkflowExecutionsInput
 */
export interface SwfCountClosedWorkflowExecutionsInput {
  /**
   * @schema SwfCountClosedWorkflowExecutionsInput#domain
   */
  readonly domain: string;

  /**
   * @schema SwfCountClosedWorkflowExecutionsInput#startTimeFilter
   */
  readonly startTimeFilter?: SwfExecutionTimeFilter;

  /**
   * @schema SwfCountClosedWorkflowExecutionsInput#closeTimeFilter
   */
  readonly closeTimeFilter?: SwfExecutionTimeFilter;

  /**
   * @schema SwfCountClosedWorkflowExecutionsInput#executionFilter
   */
  readonly executionFilter?: SwfWorkflowExecutionFilter;

  /**
   * @schema SwfCountClosedWorkflowExecutionsInput#typeFilter
   */
  readonly typeFilter?: SwfWorkflowTypeFilter;

  /**
   * @schema SwfCountClosedWorkflowExecutionsInput#tagFilter
   */
  readonly tagFilter?: SwfTagFilter;

  /**
   * @schema SwfCountClosedWorkflowExecutionsInput#closeStatusFilter
   */
  readonly closeStatusFilter?: SwfCloseStatusFilter;

}

/**
 * @schema SwfWorkflowExecutionCount
 */
export interface SwfWorkflowExecutionCount {
  /**
   * @schema SwfWorkflowExecutionCount#count
   */
  readonly count: number;

  /**
   * @schema SwfWorkflowExecutionCount#truncated
   */
  readonly truncated?: boolean;

}

/**
 * @schema SwfCountOpenWorkflowExecutionsInput
 */
export interface SwfCountOpenWorkflowExecutionsInput {
  /**
   * @schema SwfCountOpenWorkflowExecutionsInput#domain
   */
  readonly domain: string;

  /**
   * @schema SwfCountOpenWorkflowExecutionsInput#startTimeFilter
   */
  readonly startTimeFilter: SwfExecutionTimeFilter;

  /**
   * @schema SwfCountOpenWorkflowExecutionsInput#typeFilter
   */
  readonly typeFilter?: SwfWorkflowTypeFilter;

  /**
   * @schema SwfCountOpenWorkflowExecutionsInput#tagFilter
   */
  readonly tagFilter?: SwfTagFilter;

  /**
   * @schema SwfCountOpenWorkflowExecutionsInput#executionFilter
   */
  readonly executionFilter?: SwfWorkflowExecutionFilter;

}

/**
 * @schema SwfCountPendingActivityTasksInput
 */
export interface SwfCountPendingActivityTasksInput {
  /**
   * @schema SwfCountPendingActivityTasksInput#domain
   */
  readonly domain: string;

  /**
   * @schema SwfCountPendingActivityTasksInput#taskList
   */
  readonly taskList: SwfTaskList;

}

/**
 * @schema SwfPendingTaskCount
 */
export interface SwfPendingTaskCount {
  /**
   * @schema SwfPendingTaskCount#count
   */
  readonly count: number;

  /**
   * @schema SwfPendingTaskCount#truncated
   */
  readonly truncated?: boolean;

}

/**
 * @schema SwfCountPendingDecisionTasksInput
 */
export interface SwfCountPendingDecisionTasksInput {
  /**
   * @schema SwfCountPendingDecisionTasksInput#domain
   */
  readonly domain: string;

  /**
   * @schema SwfCountPendingDecisionTasksInput#taskList
   */
  readonly taskList: SwfTaskList;

}

/**
 * @schema SwfDeprecateActivityTypeInput
 */
export interface SwfDeprecateActivityTypeInput {
  /**
   * @schema SwfDeprecateActivityTypeInput#domain
   */
  readonly domain: string;

  /**
   * @schema SwfDeprecateActivityTypeInput#activityType
   */
  readonly activityType: SwfActivityType;

}

/**
 * @schema SwfDeprecateDomainInput
 */
export interface SwfDeprecateDomainInput {
  /**
   * @schema SwfDeprecateDomainInput#name
   */
  readonly name: string;

}

/**
 * @schema SwfDeprecateWorkflowTypeInput
 */
export interface SwfDeprecateWorkflowTypeInput {
  /**
   * @schema SwfDeprecateWorkflowTypeInput#domain
   */
  readonly domain: string;

  /**
   * @schema SwfDeprecateWorkflowTypeInput#workflowType
   */
  readonly workflowType: SwfWorkflowType;

}

/**
 * @schema SwfDescribeActivityTypeInput
 */
export interface SwfDescribeActivityTypeInput {
  /**
   * @schema SwfDescribeActivityTypeInput#domain
   */
  readonly domain: string;

  /**
   * @schema SwfDescribeActivityTypeInput#activityType
   */
  readonly activityType: SwfActivityType;

}

/**
 * @schema SwfActivityTypeDetail
 */
export interface SwfActivityTypeDetail {
  /**
   * @schema SwfActivityTypeDetail#typeInfo
   */
  readonly typeInfo: SwfActivityTypeInfo;

  /**
   * @schema SwfActivityTypeDetail#configuration
   */
  readonly configuration: SwfActivityTypeConfiguration;

}

/**
 * @schema SwfDescribeDomainInput
 */
export interface SwfDescribeDomainInput {
  /**
   * @schema SwfDescribeDomainInput#name
   */
  readonly name: string;

}

/**
 * @schema SwfDomainDetail
 */
export interface SwfDomainDetail {
  /**
   * @schema SwfDomainDetail#domainInfo
   */
  readonly domainInfo: SwfDomainInfo;

  /**
   * @schema SwfDomainDetail#configuration
   */
  readonly configuration: SwfDomainConfiguration;

}

/**
 * @schema SwfDescribeWorkflowExecutionInput
 */
export interface SwfDescribeWorkflowExecutionInput {
  /**
   * @schema SwfDescribeWorkflowExecutionInput#domain
   */
  readonly domain: string;

  /**
   * @schema SwfDescribeWorkflowExecutionInput#execution
   */
  readonly execution: SwfWorkflowExecution;

}

/**
 * @schema SwfWorkflowExecutionDetail
 */
export interface SwfWorkflowExecutionDetail {
  /**
   * @schema SwfWorkflowExecutionDetail#executionInfo
   */
  readonly executionInfo: SwfWorkflowExecutionInfo;

  /**
   * @schema SwfWorkflowExecutionDetail#executionConfiguration
   */
  readonly executionConfiguration: SwfWorkflowExecutionConfiguration;

  /**
   * @schema SwfWorkflowExecutionDetail#openCounts
   */
  readonly openCounts: SwfWorkflowExecutionOpenCounts;

  /**
   * @schema SwfWorkflowExecutionDetail#latestActivityTaskTimestamp
   */
  readonly latestActivityTaskTimestamp?: string;

  /**
   * @schema SwfWorkflowExecutionDetail#latestExecutionContext
   */
  readonly latestExecutionContext?: string;

}

/**
 * @schema SwfDescribeWorkflowTypeInput
 */
export interface SwfDescribeWorkflowTypeInput {
  /**
   * @schema SwfDescribeWorkflowTypeInput#domain
   */
  readonly domain: string;

  /**
   * @schema SwfDescribeWorkflowTypeInput#workflowType
   */
  readonly workflowType: SwfWorkflowType;

}

/**
 * @schema SwfWorkflowTypeDetail
 */
export interface SwfWorkflowTypeDetail {
  /**
   * @schema SwfWorkflowTypeDetail#typeInfo
   */
  readonly typeInfo: SwfWorkflowTypeInfo;

  /**
   * @schema SwfWorkflowTypeDetail#configuration
   */
  readonly configuration: SwfWorkflowTypeConfiguration;

}

/**
 * @schema SwfGetWorkflowExecutionHistoryInput
 */
export interface SwfGetWorkflowExecutionHistoryInput {
  /**
   * @schema SwfGetWorkflowExecutionHistoryInput#domain
   */
  readonly domain: string;

  /**
   * @schema SwfGetWorkflowExecutionHistoryInput#execution
   */
  readonly execution: SwfWorkflowExecution;

  /**
   * @schema SwfGetWorkflowExecutionHistoryInput#nextPageToken
   */
  readonly nextPageToken?: string;

  /**
   * @schema SwfGetWorkflowExecutionHistoryInput#maximumPageSize
   */
  readonly maximumPageSize?: number;

  /**
   * @schema SwfGetWorkflowExecutionHistoryInput#reverseOrder
   */
  readonly reverseOrder?: boolean;

}

/**
 * @schema SwfHistory
 */
export interface SwfHistory {
  /**
   * @schema SwfHistory#events
   */
  readonly events: SwfHistoryEvent[];

  /**
   * @schema SwfHistory#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema SwfListActivityTypesInput
 */
export interface SwfListActivityTypesInput {
  /**
   * @schema SwfListActivityTypesInput#domain
   */
  readonly domain: string;

  /**
   * @schema SwfListActivityTypesInput#name
   */
  readonly name?: string;

  /**
   * @schema SwfListActivityTypesInput#registrationStatus
   */
  readonly registrationStatus: string;

  /**
   * @schema SwfListActivityTypesInput#nextPageToken
   */
  readonly nextPageToken?: string;

  /**
   * @schema SwfListActivityTypesInput#maximumPageSize
   */
  readonly maximumPageSize?: number;

  /**
   * @schema SwfListActivityTypesInput#reverseOrder
   */
  readonly reverseOrder?: boolean;

}

/**
 * @schema SwfActivityTypeInfos
 */
export interface SwfActivityTypeInfos {
  /**
   * @schema SwfActivityTypeInfos#typeInfos
   */
  readonly typeInfos: SwfActivityTypeInfo[];

  /**
   * @schema SwfActivityTypeInfos#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema SwfListClosedWorkflowExecutionsInput
 */
export interface SwfListClosedWorkflowExecutionsInput {
  /**
   * @schema SwfListClosedWorkflowExecutionsInput#domain
   */
  readonly domain: string;

  /**
   * @schema SwfListClosedWorkflowExecutionsInput#startTimeFilter
   */
  readonly startTimeFilter?: SwfExecutionTimeFilter;

  /**
   * @schema SwfListClosedWorkflowExecutionsInput#closeTimeFilter
   */
  readonly closeTimeFilter?: SwfExecutionTimeFilter;

  /**
   * @schema SwfListClosedWorkflowExecutionsInput#executionFilter
   */
  readonly executionFilter?: SwfWorkflowExecutionFilter;

  /**
   * @schema SwfListClosedWorkflowExecutionsInput#closeStatusFilter
   */
  readonly closeStatusFilter?: SwfCloseStatusFilter;

  /**
   * @schema SwfListClosedWorkflowExecutionsInput#typeFilter
   */
  readonly typeFilter?: SwfWorkflowTypeFilter;

  /**
   * @schema SwfListClosedWorkflowExecutionsInput#tagFilter
   */
  readonly tagFilter?: SwfTagFilter;

  /**
   * @schema SwfListClosedWorkflowExecutionsInput#nextPageToken
   */
  readonly nextPageToken?: string;

  /**
   * @schema SwfListClosedWorkflowExecutionsInput#maximumPageSize
   */
  readonly maximumPageSize?: number;

  /**
   * @schema SwfListClosedWorkflowExecutionsInput#reverseOrder
   */
  readonly reverseOrder?: boolean;

}

/**
 * @schema SwfWorkflowExecutionInfos
 */
export interface SwfWorkflowExecutionInfos {
  /**
   * @schema SwfWorkflowExecutionInfos#executionInfos
   */
  readonly executionInfos: SwfWorkflowExecutionInfo[];

  /**
   * @schema SwfWorkflowExecutionInfos#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema SwfListDomainsInput
 */
export interface SwfListDomainsInput {
  /**
   * @schema SwfListDomainsInput#nextPageToken
   */
  readonly nextPageToken?: string;

  /**
   * @schema SwfListDomainsInput#registrationStatus
   */
  readonly registrationStatus: string;

  /**
   * @schema SwfListDomainsInput#maximumPageSize
   */
  readonly maximumPageSize?: number;

  /**
   * @schema SwfListDomainsInput#reverseOrder
   */
  readonly reverseOrder?: boolean;

}

/**
 * @schema SwfDomainInfos
 */
export interface SwfDomainInfos {
  /**
   * @schema SwfDomainInfos#domainInfos
   */
  readonly domainInfos: SwfDomainInfo[];

  /**
   * @schema SwfDomainInfos#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema SwfListOpenWorkflowExecutionsInput
 */
export interface SwfListOpenWorkflowExecutionsInput {
  /**
   * @schema SwfListOpenWorkflowExecutionsInput#domain
   */
  readonly domain: string;

  /**
   * @schema SwfListOpenWorkflowExecutionsInput#startTimeFilter
   */
  readonly startTimeFilter: SwfExecutionTimeFilter;

  /**
   * @schema SwfListOpenWorkflowExecutionsInput#typeFilter
   */
  readonly typeFilter?: SwfWorkflowTypeFilter;

  /**
   * @schema SwfListOpenWorkflowExecutionsInput#tagFilter
   */
  readonly tagFilter?: SwfTagFilter;

  /**
   * @schema SwfListOpenWorkflowExecutionsInput#nextPageToken
   */
  readonly nextPageToken?: string;

  /**
   * @schema SwfListOpenWorkflowExecutionsInput#maximumPageSize
   */
  readonly maximumPageSize?: number;

  /**
   * @schema SwfListOpenWorkflowExecutionsInput#reverseOrder
   */
  readonly reverseOrder?: boolean;

  /**
   * @schema SwfListOpenWorkflowExecutionsInput#executionFilter
   */
  readonly executionFilter?: SwfWorkflowExecutionFilter;

}

/**
 * @schema SwfListTagsForResourceInput
 */
export interface SwfListTagsForResourceInput {
  /**
   * @schema SwfListTagsForResourceInput#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema SwfListTagsForResourceOutput
 */
export interface SwfListTagsForResourceOutput {
  /**
   * @schema SwfListTagsForResourceOutput#tags
   */
  readonly tags?: SwfResourceTag[];

}

/**
 * @schema SwfListWorkflowTypesInput
 */
export interface SwfListWorkflowTypesInput {
  /**
   * @schema SwfListWorkflowTypesInput#domain
   */
  readonly domain: string;

  /**
   * @schema SwfListWorkflowTypesInput#name
   */
  readonly name?: string;

  /**
   * @schema SwfListWorkflowTypesInput#registrationStatus
   */
  readonly registrationStatus: string;

  /**
   * @schema SwfListWorkflowTypesInput#nextPageToken
   */
  readonly nextPageToken?: string;

  /**
   * @schema SwfListWorkflowTypesInput#maximumPageSize
   */
  readonly maximumPageSize?: number;

  /**
   * @schema SwfListWorkflowTypesInput#reverseOrder
   */
  readonly reverseOrder?: boolean;

}

/**
 * @schema SwfWorkflowTypeInfos
 */
export interface SwfWorkflowTypeInfos {
  /**
   * @schema SwfWorkflowTypeInfos#typeInfos
   */
  readonly typeInfos: SwfWorkflowTypeInfo[];

  /**
   * @schema SwfWorkflowTypeInfos#nextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema SwfPollForActivityTaskInput
 */
export interface SwfPollForActivityTaskInput {
  /**
   * @schema SwfPollForActivityTaskInput#domain
   */
  readonly domain: string;

  /**
   * @schema SwfPollForActivityTaskInput#taskList
   */
  readonly taskList: SwfTaskList;

  /**
   * @schema SwfPollForActivityTaskInput#identity
   */
  readonly identity?: string;

}

/**
 * @schema SwfActivityTask
 */
export interface SwfActivityTask {
  /**
   * @schema SwfActivityTask#taskToken
   */
  readonly taskToken: string;

  /**
   * @schema SwfActivityTask#activityId
   */
  readonly activityId: string;

  /**
   * @schema SwfActivityTask#startedEventId
   */
  readonly startedEventId: number;

  /**
   * @schema SwfActivityTask#workflowExecution
   */
  readonly workflowExecution: SwfWorkflowExecution;

  /**
   * @schema SwfActivityTask#activityType
   */
  readonly activityType: SwfActivityType;

  /**
   * @schema SwfActivityTask#input
   */
  readonly input?: string;

}

/**
 * @schema SwfPollForDecisionTaskInput
 */
export interface SwfPollForDecisionTaskInput {
  /**
   * @schema SwfPollForDecisionTaskInput#domain
   */
  readonly domain: string;

  /**
   * @schema SwfPollForDecisionTaskInput#taskList
   */
  readonly taskList: SwfTaskList;

  /**
   * @schema SwfPollForDecisionTaskInput#identity
   */
  readonly identity?: string;

  /**
   * @schema SwfPollForDecisionTaskInput#nextPageToken
   */
  readonly nextPageToken?: string;

  /**
   * @schema SwfPollForDecisionTaskInput#maximumPageSize
   */
  readonly maximumPageSize?: number;

  /**
   * @schema SwfPollForDecisionTaskInput#reverseOrder
   */
  readonly reverseOrder?: boolean;

}

/**
 * @schema SwfDecisionTask
 */
export interface SwfDecisionTask {
  /**
   * @schema SwfDecisionTask#taskToken
   */
  readonly taskToken: string;

  /**
   * @schema SwfDecisionTask#startedEventId
   */
  readonly startedEventId: number;

  /**
   * @schema SwfDecisionTask#workflowExecution
   */
  readonly workflowExecution: SwfWorkflowExecution;

  /**
   * @schema SwfDecisionTask#workflowType
   */
  readonly workflowType: SwfWorkflowType;

  /**
   * @schema SwfDecisionTask#events
   */
  readonly events: SwfHistoryEvent[];

  /**
   * @schema SwfDecisionTask#nextPageToken
   */
  readonly nextPageToken?: string;

  /**
   * @schema SwfDecisionTask#previousStartedEventId
   */
  readonly previousStartedEventId?: number;

}

/**
 * @schema SwfRecordActivityTaskHeartbeatInput
 */
export interface SwfRecordActivityTaskHeartbeatInput {
  /**
   * @schema SwfRecordActivityTaskHeartbeatInput#taskToken
   */
  readonly taskToken: string;

  /**
   * @schema SwfRecordActivityTaskHeartbeatInput#details
   */
  readonly details?: string;

}

/**
 * @schema SwfActivityTaskStatus
 */
export interface SwfActivityTaskStatus {
  /**
   * @schema SwfActivityTaskStatus#cancelRequested
   */
  readonly cancelRequested: boolean;

}

/**
 * @schema SwfRegisterActivityTypeInput
 */
export interface SwfRegisterActivityTypeInput {
  /**
   * @schema SwfRegisterActivityTypeInput#domain
   */
  readonly domain: string;

  /**
   * @schema SwfRegisterActivityTypeInput#name
   */
  readonly name: string;

  /**
   * @schema SwfRegisterActivityTypeInput#version
   */
  readonly version: string;

  /**
   * @schema SwfRegisterActivityTypeInput#description
   */
  readonly description?: string;

  /**
   * @schema SwfRegisterActivityTypeInput#defaultTaskStartToCloseTimeout
   */
  readonly defaultTaskStartToCloseTimeout?: string;

  /**
   * @schema SwfRegisterActivityTypeInput#defaultTaskHeartbeatTimeout
   */
  readonly defaultTaskHeartbeatTimeout?: string;

  /**
   * @schema SwfRegisterActivityTypeInput#defaultTaskList
   */
  readonly defaultTaskList?: SwfTaskList;

  /**
   * @schema SwfRegisterActivityTypeInput#defaultTaskPriority
   */
  readonly defaultTaskPriority?: string;

  /**
   * @schema SwfRegisterActivityTypeInput#defaultTaskScheduleToStartTimeout
   */
  readonly defaultTaskScheduleToStartTimeout?: string;

  /**
   * @schema SwfRegisterActivityTypeInput#defaultTaskScheduleToCloseTimeout
   */
  readonly defaultTaskScheduleToCloseTimeout?: string;

}

/**
 * @schema SwfRegisterDomainInput
 */
export interface SwfRegisterDomainInput {
  /**
   * @schema SwfRegisterDomainInput#name
   */
  readonly name: string;

  /**
   * @schema SwfRegisterDomainInput#description
   */
  readonly description?: string;

  /**
   * @schema SwfRegisterDomainInput#workflowExecutionRetentionPeriodInDays
   */
  readonly workflowExecutionRetentionPeriodInDays: string;

  /**
   * @schema SwfRegisterDomainInput#tags
   */
  readonly tags?: SwfResourceTag[];

}

/**
 * @schema SwfRegisterWorkflowTypeInput
 */
export interface SwfRegisterWorkflowTypeInput {
  /**
   * @schema SwfRegisterWorkflowTypeInput#domain
   */
  readonly domain: string;

  /**
   * @schema SwfRegisterWorkflowTypeInput#name
   */
  readonly name: string;

  /**
   * @schema SwfRegisterWorkflowTypeInput#version
   */
  readonly version: string;

  /**
   * @schema SwfRegisterWorkflowTypeInput#description
   */
  readonly description?: string;

  /**
   * @schema SwfRegisterWorkflowTypeInput#defaultTaskStartToCloseTimeout
   */
  readonly defaultTaskStartToCloseTimeout?: string;

  /**
   * @schema SwfRegisterWorkflowTypeInput#defaultExecutionStartToCloseTimeout
   */
  readonly defaultExecutionStartToCloseTimeout?: string;

  /**
   * @schema SwfRegisterWorkflowTypeInput#defaultTaskList
   */
  readonly defaultTaskList?: SwfTaskList;

  /**
   * @schema SwfRegisterWorkflowTypeInput#defaultTaskPriority
   */
  readonly defaultTaskPriority?: string;

  /**
   * @schema SwfRegisterWorkflowTypeInput#defaultChildPolicy
   */
  readonly defaultChildPolicy?: string;

  /**
   * @schema SwfRegisterWorkflowTypeInput#defaultLambdaRole
   */
  readonly defaultLambdaRole?: string;

}

/**
 * @schema SwfRequestCancelWorkflowExecutionInput
 */
export interface SwfRequestCancelWorkflowExecutionInput {
  /**
   * @schema SwfRequestCancelWorkflowExecutionInput#domain
   */
  readonly domain: string;

  /**
   * @schema SwfRequestCancelWorkflowExecutionInput#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema SwfRequestCancelWorkflowExecutionInput#runId
   */
  readonly runId?: string;

}

/**
 * @schema SwfRespondActivityTaskCanceledInput
 */
export interface SwfRespondActivityTaskCanceledInput {
  /**
   * @schema SwfRespondActivityTaskCanceledInput#taskToken
   */
  readonly taskToken: string;

  /**
   * @schema SwfRespondActivityTaskCanceledInput#details
   */
  readonly details?: string;

}

/**
 * @schema SwfRespondActivityTaskCompletedInput
 */
export interface SwfRespondActivityTaskCompletedInput {
  /**
   * @schema SwfRespondActivityTaskCompletedInput#taskToken
   */
  readonly taskToken: string;

  /**
   * @schema SwfRespondActivityTaskCompletedInput#result
   */
  readonly result?: string;

}

/**
 * @schema SwfRespondActivityTaskFailedInput
 */
export interface SwfRespondActivityTaskFailedInput {
  /**
   * @schema SwfRespondActivityTaskFailedInput#taskToken
   */
  readonly taskToken: string;

  /**
   * @schema SwfRespondActivityTaskFailedInput#reason
   */
  readonly reason?: string;

  /**
   * @schema SwfRespondActivityTaskFailedInput#details
   */
  readonly details?: string;

}

/**
 * @schema SwfRespondDecisionTaskCompletedInput
 */
export interface SwfRespondDecisionTaskCompletedInput {
  /**
   * @schema SwfRespondDecisionTaskCompletedInput#taskToken
   */
  readonly taskToken: string;

  /**
   * @schema SwfRespondDecisionTaskCompletedInput#decisions
   */
  readonly decisions?: SwfDecision[];

  /**
   * @schema SwfRespondDecisionTaskCompletedInput#executionContext
   */
  readonly executionContext?: string;

}

/**
 * @schema SwfSignalWorkflowExecutionInput
 */
export interface SwfSignalWorkflowExecutionInput {
  /**
   * @schema SwfSignalWorkflowExecutionInput#domain
   */
  readonly domain: string;

  /**
   * @schema SwfSignalWorkflowExecutionInput#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema SwfSignalWorkflowExecutionInput#runId
   */
  readonly runId?: string;

  /**
   * @schema SwfSignalWorkflowExecutionInput#signalName
   */
  readonly signalName: string;

  /**
   * @schema SwfSignalWorkflowExecutionInput#input
   */
  readonly input?: string;

}

/**
 * @schema SwfStartWorkflowExecutionInput
 */
export interface SwfStartWorkflowExecutionInput {
  /**
   * @schema SwfStartWorkflowExecutionInput#domain
   */
  readonly domain: string;

  /**
   * @schema SwfStartWorkflowExecutionInput#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema SwfStartWorkflowExecutionInput#workflowType
   */
  readonly workflowType: SwfWorkflowType;

  /**
   * @schema SwfStartWorkflowExecutionInput#taskList
   */
  readonly taskList?: SwfTaskList;

  /**
   * @schema SwfStartWorkflowExecutionInput#taskPriority
   */
  readonly taskPriority?: string;

  /**
   * @schema SwfStartWorkflowExecutionInput#input
   */
  readonly input?: string;

  /**
   * @schema SwfStartWorkflowExecutionInput#executionStartToCloseTimeout
   */
  readonly executionStartToCloseTimeout?: string;

  /**
   * @schema SwfStartWorkflowExecutionInput#tagList
   */
  readonly tagList?: string[];

  /**
   * @schema SwfStartWorkflowExecutionInput#taskStartToCloseTimeout
   */
  readonly taskStartToCloseTimeout?: string;

  /**
   * @schema SwfStartWorkflowExecutionInput#childPolicy
   */
  readonly childPolicy?: string;

  /**
   * @schema SwfStartWorkflowExecutionInput#lambdaRole
   */
  readonly lambdaRole?: string;

}

/**
 * @schema SwfRun
 */
export interface SwfRun {
  /**
   * @schema SwfRun#runId
   */
  readonly runId?: string;

}

/**
 * @schema SwfTagResourceInput
 */
export interface SwfTagResourceInput {
  /**
   * @schema SwfTagResourceInput#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema SwfTagResourceInput#tags
   */
  readonly tags: SwfResourceTag[];

}

/**
 * @schema SwfTerminateWorkflowExecutionInput
 */
export interface SwfTerminateWorkflowExecutionInput {
  /**
   * @schema SwfTerminateWorkflowExecutionInput#domain
   */
  readonly domain: string;

  /**
   * @schema SwfTerminateWorkflowExecutionInput#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema SwfTerminateWorkflowExecutionInput#runId
   */
  readonly runId?: string;

  /**
   * @schema SwfTerminateWorkflowExecutionInput#reason
   */
  readonly reason?: string;

  /**
   * @schema SwfTerminateWorkflowExecutionInput#details
   */
  readonly details?: string;

  /**
   * @schema SwfTerminateWorkflowExecutionInput#childPolicy
   */
  readonly childPolicy?: string;

}

/**
 * @schema SwfUndeprecateActivityTypeInput
 */
export interface SwfUndeprecateActivityTypeInput {
  /**
   * @schema SwfUndeprecateActivityTypeInput#domain
   */
  readonly domain: string;

  /**
   * @schema SwfUndeprecateActivityTypeInput#activityType
   */
  readonly activityType: SwfActivityType;

}

/**
 * @schema SwfUndeprecateDomainInput
 */
export interface SwfUndeprecateDomainInput {
  /**
   * @schema SwfUndeprecateDomainInput#name
   */
  readonly name: string;

}

/**
 * @schema SwfUndeprecateWorkflowTypeInput
 */
export interface SwfUndeprecateWorkflowTypeInput {
  /**
   * @schema SwfUndeprecateWorkflowTypeInput#domain
   */
  readonly domain: string;

  /**
   * @schema SwfUndeprecateWorkflowTypeInput#workflowType
   */
  readonly workflowType: SwfWorkflowType;

}

/**
 * @schema SwfUntagResourceInput
 */
export interface SwfUntagResourceInput {
  /**
   * @schema SwfUntagResourceInput#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema SwfUntagResourceInput#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema SwfExecutionTimeFilter
 */
export interface SwfExecutionTimeFilter {
  /**
   * @schema SwfExecutionTimeFilter#oldestDate
   */
  readonly oldestDate: string;

  /**
   * @schema SwfExecutionTimeFilter#latestDate
   */
  readonly latestDate?: string;

}

/**
 * @schema SwfWorkflowExecutionFilter
 */
export interface SwfWorkflowExecutionFilter {
  /**
   * @schema SwfWorkflowExecutionFilter#workflowId
   */
  readonly workflowId: string;

}

/**
 * @schema SwfWorkflowTypeFilter
 */
export interface SwfWorkflowTypeFilter {
  /**
   * @schema SwfWorkflowTypeFilter#name
   */
  readonly name: string;

  /**
   * @schema SwfWorkflowTypeFilter#version
   */
  readonly version?: string;

}

/**
 * @schema SwfTagFilter
 */
export interface SwfTagFilter {
  /**
   * @schema SwfTagFilter#tag
   */
  readonly tag: string;

}

/**
 * @schema SwfCloseStatusFilter
 */
export interface SwfCloseStatusFilter {
  /**
   * @schema SwfCloseStatusFilter#status
   */
  readonly status: string;

}

/**
 * @schema SwfTaskList
 */
export interface SwfTaskList {
  /**
   * @schema SwfTaskList#name
   */
  readonly name: string;

}

/**
 * @schema SwfActivityType
 */
export interface SwfActivityType {
  /**
   * @schema SwfActivityType#name
   */
  readonly name: string;

  /**
   * @schema SwfActivityType#version
   */
  readonly version: string;

}

/**
 * @schema SwfWorkflowType
 */
export interface SwfWorkflowType {
  /**
   * @schema SwfWorkflowType#name
   */
  readonly name: string;

  /**
   * @schema SwfWorkflowType#version
   */
  readonly version: string;

}

/**
 * @schema SwfActivityTypeInfo
 */
export interface SwfActivityTypeInfo {
  /**
   * @schema SwfActivityTypeInfo#activityType
   */
  readonly activityType: SwfActivityType;

  /**
   * @schema SwfActivityTypeInfo#status
   */
  readonly status: string;

  /**
   * @schema SwfActivityTypeInfo#description
   */
  readonly description?: string;

  /**
   * @schema SwfActivityTypeInfo#creationDate
   */
  readonly creationDate: string;

  /**
   * @schema SwfActivityTypeInfo#deprecationDate
   */
  readonly deprecationDate?: string;

}

/**
 * @schema SwfActivityTypeConfiguration
 */
export interface SwfActivityTypeConfiguration {
  /**
   * @schema SwfActivityTypeConfiguration#defaultTaskStartToCloseTimeout
   */
  readonly defaultTaskStartToCloseTimeout?: string;

  /**
   * @schema SwfActivityTypeConfiguration#defaultTaskHeartbeatTimeout
   */
  readonly defaultTaskHeartbeatTimeout?: string;

  /**
   * @schema SwfActivityTypeConfiguration#defaultTaskList
   */
  readonly defaultTaskList?: SwfTaskList;

  /**
   * @schema SwfActivityTypeConfiguration#defaultTaskPriority
   */
  readonly defaultTaskPriority?: string;

  /**
   * @schema SwfActivityTypeConfiguration#defaultTaskScheduleToStartTimeout
   */
  readonly defaultTaskScheduleToStartTimeout?: string;

  /**
   * @schema SwfActivityTypeConfiguration#defaultTaskScheduleToCloseTimeout
   */
  readonly defaultTaskScheduleToCloseTimeout?: string;

}

/**
 * @schema SwfDomainInfo
 */
export interface SwfDomainInfo {
  /**
   * @schema SwfDomainInfo#name
   */
  readonly name: string;

  /**
   * @schema SwfDomainInfo#status
   */
  readonly status: string;

  /**
   * @schema SwfDomainInfo#description
   */
  readonly description?: string;

  /**
   * @schema SwfDomainInfo#arn
   */
  readonly arn?: string;

}

/**
 * @schema SwfDomainConfiguration
 */
export interface SwfDomainConfiguration {
  /**
   * @schema SwfDomainConfiguration#workflowExecutionRetentionPeriodInDays
   */
  readonly workflowExecutionRetentionPeriodInDays: string;

}

/**
 * @schema SwfWorkflowExecution
 */
export interface SwfWorkflowExecution {
  /**
   * @schema SwfWorkflowExecution#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema SwfWorkflowExecution#runId
   */
  readonly runId: string;

}

/**
 * @schema SwfWorkflowExecutionInfo
 */
export interface SwfWorkflowExecutionInfo {
  /**
   * @schema SwfWorkflowExecutionInfo#execution
   */
  readonly execution: SwfWorkflowExecution;

  /**
   * @schema SwfWorkflowExecutionInfo#workflowType
   */
  readonly workflowType: SwfWorkflowType;

  /**
   * @schema SwfWorkflowExecutionInfo#startTimestamp
   */
  readonly startTimestamp: string;

  /**
   * @schema SwfWorkflowExecutionInfo#closeTimestamp
   */
  readonly closeTimestamp?: string;

  /**
   * @schema SwfWorkflowExecutionInfo#executionStatus
   */
  readonly executionStatus: string;

  /**
   * @schema SwfWorkflowExecutionInfo#closeStatus
   */
  readonly closeStatus?: string;

  /**
   * @schema SwfWorkflowExecutionInfo#parent
   */
  readonly parent?: SwfWorkflowExecution;

  /**
   * @schema SwfWorkflowExecutionInfo#tagList
   */
  readonly tagList?: string[];

  /**
   * @schema SwfWorkflowExecutionInfo#cancelRequested
   */
  readonly cancelRequested?: boolean;

}

/**
 * @schema SwfWorkflowExecutionConfiguration
 */
export interface SwfWorkflowExecutionConfiguration {
  /**
   * @schema SwfWorkflowExecutionConfiguration#taskStartToCloseTimeout
   */
  readonly taskStartToCloseTimeout: string;

  /**
   * @schema SwfWorkflowExecutionConfiguration#executionStartToCloseTimeout
   */
  readonly executionStartToCloseTimeout: string;

  /**
   * @schema SwfWorkflowExecutionConfiguration#taskList
   */
  readonly taskList: SwfTaskList;

  /**
   * @schema SwfWorkflowExecutionConfiguration#taskPriority
   */
  readonly taskPriority?: string;

  /**
   * @schema SwfWorkflowExecutionConfiguration#childPolicy
   */
  readonly childPolicy: string;

  /**
   * @schema SwfWorkflowExecutionConfiguration#lambdaRole
   */
  readonly lambdaRole?: string;

}

/**
 * @schema SwfWorkflowExecutionOpenCounts
 */
export interface SwfWorkflowExecutionOpenCounts {
  /**
   * @schema SwfWorkflowExecutionOpenCounts#openActivityTasks
   */
  readonly openActivityTasks: number;

  /**
   * @schema SwfWorkflowExecutionOpenCounts#openDecisionTasks
   */
  readonly openDecisionTasks: number;

  /**
   * @schema SwfWorkflowExecutionOpenCounts#openTimers
   */
  readonly openTimers: number;

  /**
   * @schema SwfWorkflowExecutionOpenCounts#openChildWorkflowExecutions
   */
  readonly openChildWorkflowExecutions: number;

  /**
   * @schema SwfWorkflowExecutionOpenCounts#openLambdaFunctions
   */
  readonly openLambdaFunctions?: number;

}

/**
 * @schema SwfWorkflowTypeInfo
 */
export interface SwfWorkflowTypeInfo {
  /**
   * @schema SwfWorkflowTypeInfo#workflowType
   */
  readonly workflowType: SwfWorkflowType;

  /**
   * @schema SwfWorkflowTypeInfo#status
   */
  readonly status: string;

  /**
   * @schema SwfWorkflowTypeInfo#description
   */
  readonly description?: string;

  /**
   * @schema SwfWorkflowTypeInfo#creationDate
   */
  readonly creationDate: string;

  /**
   * @schema SwfWorkflowTypeInfo#deprecationDate
   */
  readonly deprecationDate?: string;

}

/**
 * @schema SwfWorkflowTypeConfiguration
 */
export interface SwfWorkflowTypeConfiguration {
  /**
   * @schema SwfWorkflowTypeConfiguration#defaultTaskStartToCloseTimeout
   */
  readonly defaultTaskStartToCloseTimeout?: string;

  /**
   * @schema SwfWorkflowTypeConfiguration#defaultExecutionStartToCloseTimeout
   */
  readonly defaultExecutionStartToCloseTimeout?: string;

  /**
   * @schema SwfWorkflowTypeConfiguration#defaultTaskList
   */
  readonly defaultTaskList?: SwfTaskList;

  /**
   * @schema SwfWorkflowTypeConfiguration#defaultTaskPriority
   */
  readonly defaultTaskPriority?: string;

  /**
   * @schema SwfWorkflowTypeConfiguration#defaultChildPolicy
   */
  readonly defaultChildPolicy?: string;

  /**
   * @schema SwfWorkflowTypeConfiguration#defaultLambdaRole
   */
  readonly defaultLambdaRole?: string;

}

/**
 * @schema SwfHistoryEvent
 */
export interface SwfHistoryEvent {
  /**
   * @schema SwfHistoryEvent#eventTimestamp
   */
  readonly eventTimestamp: string;

  /**
   * @schema SwfHistoryEvent#eventType
   */
  readonly eventType: string;

  /**
   * @schema SwfHistoryEvent#eventId
   */
  readonly eventId: number;

  /**
   * @schema SwfHistoryEvent#workflowExecutionStartedEventAttributes
   */
  readonly workflowExecutionStartedEventAttributes?: SwfWorkflowExecutionStartedEventAttributes;

  /**
   * @schema SwfHistoryEvent#workflowExecutionCompletedEventAttributes
   */
  readonly workflowExecutionCompletedEventAttributes?: SwfWorkflowExecutionCompletedEventAttributes;

  /**
   * @schema SwfHistoryEvent#completeWorkflowExecutionFailedEventAttributes
   */
  readonly completeWorkflowExecutionFailedEventAttributes?: SwfCompleteWorkflowExecutionFailedEventAttributes;

  /**
   * @schema SwfHistoryEvent#workflowExecutionFailedEventAttributes
   */
  readonly workflowExecutionFailedEventAttributes?: SwfWorkflowExecutionFailedEventAttributes;

  /**
   * @schema SwfHistoryEvent#failWorkflowExecutionFailedEventAttributes
   */
  readonly failWorkflowExecutionFailedEventAttributes?: SwfFailWorkflowExecutionFailedEventAttributes;

  /**
   * @schema SwfHistoryEvent#workflowExecutionTimedOutEventAttributes
   */
  readonly workflowExecutionTimedOutEventAttributes?: SwfWorkflowExecutionTimedOutEventAttributes;

  /**
   * @schema SwfHistoryEvent#workflowExecutionCanceledEventAttributes
   */
  readonly workflowExecutionCanceledEventAttributes?: SwfWorkflowExecutionCanceledEventAttributes;

  /**
   * @schema SwfHistoryEvent#cancelWorkflowExecutionFailedEventAttributes
   */
  readonly cancelWorkflowExecutionFailedEventAttributes?: SwfCancelWorkflowExecutionFailedEventAttributes;

  /**
   * @schema SwfHistoryEvent#workflowExecutionContinuedAsNewEventAttributes
   */
  readonly workflowExecutionContinuedAsNewEventAttributes?: SwfWorkflowExecutionContinuedAsNewEventAttributes;

  /**
   * @schema SwfHistoryEvent#continueAsNewWorkflowExecutionFailedEventAttributes
   */
  readonly continueAsNewWorkflowExecutionFailedEventAttributes?: SwfContinueAsNewWorkflowExecutionFailedEventAttributes;

  /**
   * @schema SwfHistoryEvent#workflowExecutionTerminatedEventAttributes
   */
  readonly workflowExecutionTerminatedEventAttributes?: SwfWorkflowExecutionTerminatedEventAttributes;

  /**
   * @schema SwfHistoryEvent#workflowExecutionCancelRequestedEventAttributes
   */
  readonly workflowExecutionCancelRequestedEventAttributes?: SwfWorkflowExecutionCancelRequestedEventAttributes;

  /**
   * @schema SwfHistoryEvent#decisionTaskScheduledEventAttributes
   */
  readonly decisionTaskScheduledEventAttributes?: SwfDecisionTaskScheduledEventAttributes;

  /**
   * @schema SwfHistoryEvent#decisionTaskStartedEventAttributes
   */
  readonly decisionTaskStartedEventAttributes?: SwfDecisionTaskStartedEventAttributes;

  /**
   * @schema SwfHistoryEvent#decisionTaskCompletedEventAttributes
   */
  readonly decisionTaskCompletedEventAttributes?: SwfDecisionTaskCompletedEventAttributes;

  /**
   * @schema SwfHistoryEvent#decisionTaskTimedOutEventAttributes
   */
  readonly decisionTaskTimedOutEventAttributes?: SwfDecisionTaskTimedOutEventAttributes;

  /**
   * @schema SwfHistoryEvent#activityTaskScheduledEventAttributes
   */
  readonly activityTaskScheduledEventAttributes?: SwfActivityTaskScheduledEventAttributes;

  /**
   * @schema SwfHistoryEvent#activityTaskStartedEventAttributes
   */
  readonly activityTaskStartedEventAttributes?: SwfActivityTaskStartedEventAttributes;

  /**
   * @schema SwfHistoryEvent#activityTaskCompletedEventAttributes
   */
  readonly activityTaskCompletedEventAttributes?: SwfActivityTaskCompletedEventAttributes;

  /**
   * @schema SwfHistoryEvent#activityTaskFailedEventAttributes
   */
  readonly activityTaskFailedEventAttributes?: SwfActivityTaskFailedEventAttributes;

  /**
   * @schema SwfHistoryEvent#activityTaskTimedOutEventAttributes
   */
  readonly activityTaskTimedOutEventAttributes?: SwfActivityTaskTimedOutEventAttributes;

  /**
   * @schema SwfHistoryEvent#activityTaskCanceledEventAttributes
   */
  readonly activityTaskCanceledEventAttributes?: SwfActivityTaskCanceledEventAttributes;

  /**
   * @schema SwfHistoryEvent#activityTaskCancelRequestedEventAttributes
   */
  readonly activityTaskCancelRequestedEventAttributes?: SwfActivityTaskCancelRequestedEventAttributes;

  /**
   * @schema SwfHistoryEvent#workflowExecutionSignaledEventAttributes
   */
  readonly workflowExecutionSignaledEventAttributes?: SwfWorkflowExecutionSignaledEventAttributes;

  /**
   * @schema SwfHistoryEvent#markerRecordedEventAttributes
   */
  readonly markerRecordedEventAttributes?: SwfMarkerRecordedEventAttributes;

  /**
   * @schema SwfHistoryEvent#recordMarkerFailedEventAttributes
   */
  readonly recordMarkerFailedEventAttributes?: SwfRecordMarkerFailedEventAttributes;

  /**
   * @schema SwfHistoryEvent#timerStartedEventAttributes
   */
  readonly timerStartedEventAttributes?: SwfTimerStartedEventAttributes;

  /**
   * @schema SwfHistoryEvent#timerFiredEventAttributes
   */
  readonly timerFiredEventAttributes?: SwfTimerFiredEventAttributes;

  /**
   * @schema SwfHistoryEvent#timerCanceledEventAttributes
   */
  readonly timerCanceledEventAttributes?: SwfTimerCanceledEventAttributes;

  /**
   * @schema SwfHistoryEvent#startChildWorkflowExecutionInitiatedEventAttributes
   */
  readonly startChildWorkflowExecutionInitiatedEventAttributes?: SwfStartChildWorkflowExecutionInitiatedEventAttributes;

  /**
   * @schema SwfHistoryEvent#childWorkflowExecutionStartedEventAttributes
   */
  readonly childWorkflowExecutionStartedEventAttributes?: SwfChildWorkflowExecutionStartedEventAttributes;

  /**
   * @schema SwfHistoryEvent#childWorkflowExecutionCompletedEventAttributes
   */
  readonly childWorkflowExecutionCompletedEventAttributes?: SwfChildWorkflowExecutionCompletedEventAttributes;

  /**
   * @schema SwfHistoryEvent#childWorkflowExecutionFailedEventAttributes
   */
  readonly childWorkflowExecutionFailedEventAttributes?: SwfChildWorkflowExecutionFailedEventAttributes;

  /**
   * @schema SwfHistoryEvent#childWorkflowExecutionTimedOutEventAttributes
   */
  readonly childWorkflowExecutionTimedOutEventAttributes?: SwfChildWorkflowExecutionTimedOutEventAttributes;

  /**
   * @schema SwfHistoryEvent#childWorkflowExecutionCanceledEventAttributes
   */
  readonly childWorkflowExecutionCanceledEventAttributes?: SwfChildWorkflowExecutionCanceledEventAttributes;

  /**
   * @schema SwfHistoryEvent#childWorkflowExecutionTerminatedEventAttributes
   */
  readonly childWorkflowExecutionTerminatedEventAttributes?: SwfChildWorkflowExecutionTerminatedEventAttributes;

  /**
   * @schema SwfHistoryEvent#signalExternalWorkflowExecutionInitiatedEventAttributes
   */
  readonly signalExternalWorkflowExecutionInitiatedEventAttributes?: SwfSignalExternalWorkflowExecutionInitiatedEventAttributes;

  /**
   * @schema SwfHistoryEvent#externalWorkflowExecutionSignaledEventAttributes
   */
  readonly externalWorkflowExecutionSignaledEventAttributes?: SwfExternalWorkflowExecutionSignaledEventAttributes;

  /**
   * @schema SwfHistoryEvent#signalExternalWorkflowExecutionFailedEventAttributes
   */
  readonly signalExternalWorkflowExecutionFailedEventAttributes?: SwfSignalExternalWorkflowExecutionFailedEventAttributes;

  /**
   * @schema SwfHistoryEvent#externalWorkflowExecutionCancelRequestedEventAttributes
   */
  readonly externalWorkflowExecutionCancelRequestedEventAttributes?: SwfExternalWorkflowExecutionCancelRequestedEventAttributes;

  /**
   * @schema SwfHistoryEvent#requestCancelExternalWorkflowExecutionInitiatedEventAttributes
   */
  readonly requestCancelExternalWorkflowExecutionInitiatedEventAttributes?: SwfRequestCancelExternalWorkflowExecutionInitiatedEventAttributes;

  /**
   * @schema SwfHistoryEvent#requestCancelExternalWorkflowExecutionFailedEventAttributes
   */
  readonly requestCancelExternalWorkflowExecutionFailedEventAttributes?: SwfRequestCancelExternalWorkflowExecutionFailedEventAttributes;

  /**
   * @schema SwfHistoryEvent#scheduleActivityTaskFailedEventAttributes
   */
  readonly scheduleActivityTaskFailedEventAttributes?: SwfScheduleActivityTaskFailedEventAttributes;

  /**
   * @schema SwfHistoryEvent#requestCancelActivityTaskFailedEventAttributes
   */
  readonly requestCancelActivityTaskFailedEventAttributes?: SwfRequestCancelActivityTaskFailedEventAttributes;

  /**
   * @schema SwfHistoryEvent#startTimerFailedEventAttributes
   */
  readonly startTimerFailedEventAttributes?: SwfStartTimerFailedEventAttributes;

  /**
   * @schema SwfHistoryEvent#cancelTimerFailedEventAttributes
   */
  readonly cancelTimerFailedEventAttributes?: SwfCancelTimerFailedEventAttributes;

  /**
   * @schema SwfHistoryEvent#startChildWorkflowExecutionFailedEventAttributes
   */
  readonly startChildWorkflowExecutionFailedEventAttributes?: SwfStartChildWorkflowExecutionFailedEventAttributes;

  /**
   * @schema SwfHistoryEvent#lambdaFunctionScheduledEventAttributes
   */
  readonly lambdaFunctionScheduledEventAttributes?: SwfLambdaFunctionScheduledEventAttributes;

  /**
   * @schema SwfHistoryEvent#lambdaFunctionStartedEventAttributes
   */
  readonly lambdaFunctionStartedEventAttributes?: SwfLambdaFunctionStartedEventAttributes;

  /**
   * @schema SwfHistoryEvent#lambdaFunctionCompletedEventAttributes
   */
  readonly lambdaFunctionCompletedEventAttributes?: SwfLambdaFunctionCompletedEventAttributes;

  /**
   * @schema SwfHistoryEvent#lambdaFunctionFailedEventAttributes
   */
  readonly lambdaFunctionFailedEventAttributes?: SwfLambdaFunctionFailedEventAttributes;

  /**
   * @schema SwfHistoryEvent#lambdaFunctionTimedOutEventAttributes
   */
  readonly lambdaFunctionTimedOutEventAttributes?: SwfLambdaFunctionTimedOutEventAttributes;

  /**
   * @schema SwfHistoryEvent#scheduleLambdaFunctionFailedEventAttributes
   */
  readonly scheduleLambdaFunctionFailedEventAttributes?: SwfScheduleLambdaFunctionFailedEventAttributes;

  /**
   * @schema SwfHistoryEvent#startLambdaFunctionFailedEventAttributes
   */
  readonly startLambdaFunctionFailedEventAttributes?: SwfStartLambdaFunctionFailedEventAttributes;

}

/**
 * @schema SwfResourceTag
 */
export interface SwfResourceTag {
  /**
   * @schema SwfResourceTag#key
   */
  readonly key: string;

  /**
   * @schema SwfResourceTag#value
   */
  readonly value?: string;

}

/**
 * @schema SwfDecision
 */
export interface SwfDecision {
  /**
   * @schema SwfDecision#decisionType
   */
  readonly decisionType: string;

  /**
   * @schema SwfDecision#scheduleActivityTaskDecisionAttributes
   */
  readonly scheduleActivityTaskDecisionAttributes?: SwfScheduleActivityTaskDecisionAttributes;

  /**
   * @schema SwfDecision#requestCancelActivityTaskDecisionAttributes
   */
  readonly requestCancelActivityTaskDecisionAttributes?: SwfRequestCancelActivityTaskDecisionAttributes;

  /**
   * @schema SwfDecision#completeWorkflowExecutionDecisionAttributes
   */
  readonly completeWorkflowExecutionDecisionAttributes?: SwfCompleteWorkflowExecutionDecisionAttributes;

  /**
   * @schema SwfDecision#failWorkflowExecutionDecisionAttributes
   */
  readonly failWorkflowExecutionDecisionAttributes?: SwfFailWorkflowExecutionDecisionAttributes;

  /**
   * @schema SwfDecision#cancelWorkflowExecutionDecisionAttributes
   */
  readonly cancelWorkflowExecutionDecisionAttributes?: SwfCancelWorkflowExecutionDecisionAttributes;

  /**
   * @schema SwfDecision#continueAsNewWorkflowExecutionDecisionAttributes
   */
  readonly continueAsNewWorkflowExecutionDecisionAttributes?: SwfContinueAsNewWorkflowExecutionDecisionAttributes;

  /**
   * @schema SwfDecision#recordMarkerDecisionAttributes
   */
  readonly recordMarkerDecisionAttributes?: SwfRecordMarkerDecisionAttributes;

  /**
   * @schema SwfDecision#startTimerDecisionAttributes
   */
  readonly startTimerDecisionAttributes?: SwfStartTimerDecisionAttributes;

  /**
   * @schema SwfDecision#cancelTimerDecisionAttributes
   */
  readonly cancelTimerDecisionAttributes?: SwfCancelTimerDecisionAttributes;

  /**
   * @schema SwfDecision#signalExternalWorkflowExecutionDecisionAttributes
   */
  readonly signalExternalWorkflowExecutionDecisionAttributes?: SwfSignalExternalWorkflowExecutionDecisionAttributes;

  /**
   * @schema SwfDecision#requestCancelExternalWorkflowExecutionDecisionAttributes
   */
  readonly requestCancelExternalWorkflowExecutionDecisionAttributes?: SwfRequestCancelExternalWorkflowExecutionDecisionAttributes;

  /**
   * @schema SwfDecision#startChildWorkflowExecutionDecisionAttributes
   */
  readonly startChildWorkflowExecutionDecisionAttributes?: SwfStartChildWorkflowExecutionDecisionAttributes;

  /**
   * @schema SwfDecision#scheduleLambdaFunctionDecisionAttributes
   */
  readonly scheduleLambdaFunctionDecisionAttributes?: SwfScheduleLambdaFunctionDecisionAttributes;

}

/**
 * @schema SwfWorkflowExecutionStartedEventAttributes
 */
export interface SwfWorkflowExecutionStartedEventAttributes {
  /**
   * @schema SwfWorkflowExecutionStartedEventAttributes#input
   */
  readonly input?: string;

  /**
   * @schema SwfWorkflowExecutionStartedEventAttributes#executionStartToCloseTimeout
   */
  readonly executionStartToCloseTimeout?: string;

  /**
   * @schema SwfWorkflowExecutionStartedEventAttributes#taskStartToCloseTimeout
   */
  readonly taskStartToCloseTimeout?: string;

  /**
   * @schema SwfWorkflowExecutionStartedEventAttributes#childPolicy
   */
  readonly childPolicy: string;

  /**
   * @schema SwfWorkflowExecutionStartedEventAttributes#taskList
   */
  readonly taskList: SwfTaskList;

  /**
   * @schema SwfWorkflowExecutionStartedEventAttributes#taskPriority
   */
  readonly taskPriority?: string;

  /**
   * @schema SwfWorkflowExecutionStartedEventAttributes#workflowType
   */
  readonly workflowType: SwfWorkflowType;

  /**
   * @schema SwfWorkflowExecutionStartedEventAttributes#tagList
   */
  readonly tagList?: string[];

  /**
   * @schema SwfWorkflowExecutionStartedEventAttributes#continuedExecutionRunId
   */
  readonly continuedExecutionRunId?: string;

  /**
   * @schema SwfWorkflowExecutionStartedEventAttributes#parentWorkflowExecution
   */
  readonly parentWorkflowExecution?: SwfWorkflowExecution;

  /**
   * @schema SwfWorkflowExecutionStartedEventAttributes#parentInitiatedEventId
   */
  readonly parentInitiatedEventId?: number;

  /**
   * @schema SwfWorkflowExecutionStartedEventAttributes#lambdaRole
   */
  readonly lambdaRole?: string;

}

/**
 * @schema SwfWorkflowExecutionCompletedEventAttributes
 */
export interface SwfWorkflowExecutionCompletedEventAttributes {
  /**
   * @schema SwfWorkflowExecutionCompletedEventAttributes#result
   */
  readonly result?: string;

  /**
   * @schema SwfWorkflowExecutionCompletedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema SwfCompleteWorkflowExecutionFailedEventAttributes
 */
export interface SwfCompleteWorkflowExecutionFailedEventAttributes {
  /**
   * @schema SwfCompleteWorkflowExecutionFailedEventAttributes#cause
   */
  readonly cause: string;

  /**
   * @schema SwfCompleteWorkflowExecutionFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema SwfWorkflowExecutionFailedEventAttributes
 */
export interface SwfWorkflowExecutionFailedEventAttributes {
  /**
   * @schema SwfWorkflowExecutionFailedEventAttributes#reason
   */
  readonly reason?: string;

  /**
   * @schema SwfWorkflowExecutionFailedEventAttributes#details
   */
  readonly details?: string;

  /**
   * @schema SwfWorkflowExecutionFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema SwfFailWorkflowExecutionFailedEventAttributes
 */
export interface SwfFailWorkflowExecutionFailedEventAttributes {
  /**
   * @schema SwfFailWorkflowExecutionFailedEventAttributes#cause
   */
  readonly cause: string;

  /**
   * @schema SwfFailWorkflowExecutionFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema SwfWorkflowExecutionTimedOutEventAttributes
 */
export interface SwfWorkflowExecutionTimedOutEventAttributes {
  /**
   * @schema SwfWorkflowExecutionTimedOutEventAttributes#timeoutType
   */
  readonly timeoutType: string;

  /**
   * @schema SwfWorkflowExecutionTimedOutEventAttributes#childPolicy
   */
  readonly childPolicy: string;

}

/**
 * @schema SwfWorkflowExecutionCanceledEventAttributes
 */
export interface SwfWorkflowExecutionCanceledEventAttributes {
  /**
   * @schema SwfWorkflowExecutionCanceledEventAttributes#details
   */
  readonly details?: string;

  /**
   * @schema SwfWorkflowExecutionCanceledEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema SwfCancelWorkflowExecutionFailedEventAttributes
 */
export interface SwfCancelWorkflowExecutionFailedEventAttributes {
  /**
   * @schema SwfCancelWorkflowExecutionFailedEventAttributes#cause
   */
  readonly cause: string;

  /**
   * @schema SwfCancelWorkflowExecutionFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema SwfWorkflowExecutionContinuedAsNewEventAttributes
 */
export interface SwfWorkflowExecutionContinuedAsNewEventAttributes {
  /**
   * @schema SwfWorkflowExecutionContinuedAsNewEventAttributes#input
   */
  readonly input?: string;

  /**
   * @schema SwfWorkflowExecutionContinuedAsNewEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

  /**
   * @schema SwfWorkflowExecutionContinuedAsNewEventAttributes#newExecutionRunId
   */
  readonly newExecutionRunId: string;

  /**
   * @schema SwfWorkflowExecutionContinuedAsNewEventAttributes#executionStartToCloseTimeout
   */
  readonly executionStartToCloseTimeout?: string;

  /**
   * @schema SwfWorkflowExecutionContinuedAsNewEventAttributes#taskList
   */
  readonly taskList: SwfTaskList;

  /**
   * @schema SwfWorkflowExecutionContinuedAsNewEventAttributes#taskPriority
   */
  readonly taskPriority?: string;

  /**
   * @schema SwfWorkflowExecutionContinuedAsNewEventAttributes#taskStartToCloseTimeout
   */
  readonly taskStartToCloseTimeout?: string;

  /**
   * @schema SwfWorkflowExecutionContinuedAsNewEventAttributes#childPolicy
   */
  readonly childPolicy: string;

  /**
   * @schema SwfWorkflowExecutionContinuedAsNewEventAttributes#tagList
   */
  readonly tagList?: string[];

  /**
   * @schema SwfWorkflowExecutionContinuedAsNewEventAttributes#workflowType
   */
  readonly workflowType: SwfWorkflowType;

  /**
   * @schema SwfWorkflowExecutionContinuedAsNewEventAttributes#lambdaRole
   */
  readonly lambdaRole?: string;

}

/**
 * @schema SwfContinueAsNewWorkflowExecutionFailedEventAttributes
 */
export interface SwfContinueAsNewWorkflowExecutionFailedEventAttributes {
  /**
   * @schema SwfContinueAsNewWorkflowExecutionFailedEventAttributes#cause
   */
  readonly cause: string;

  /**
   * @schema SwfContinueAsNewWorkflowExecutionFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema SwfWorkflowExecutionTerminatedEventAttributes
 */
export interface SwfWorkflowExecutionTerminatedEventAttributes {
  /**
   * @schema SwfWorkflowExecutionTerminatedEventAttributes#reason
   */
  readonly reason?: string;

  /**
   * @schema SwfWorkflowExecutionTerminatedEventAttributes#details
   */
  readonly details?: string;

  /**
   * @schema SwfWorkflowExecutionTerminatedEventAttributes#childPolicy
   */
  readonly childPolicy: string;

  /**
   * @schema SwfWorkflowExecutionTerminatedEventAttributes#cause
   */
  readonly cause?: string;

}

/**
 * @schema SwfWorkflowExecutionCancelRequestedEventAttributes
 */
export interface SwfWorkflowExecutionCancelRequestedEventAttributes {
  /**
   * @schema SwfWorkflowExecutionCancelRequestedEventAttributes#externalWorkflowExecution
   */
  readonly externalWorkflowExecution?: SwfWorkflowExecution;

  /**
   * @schema SwfWorkflowExecutionCancelRequestedEventAttributes#externalInitiatedEventId
   */
  readonly externalInitiatedEventId?: number;

  /**
   * @schema SwfWorkflowExecutionCancelRequestedEventAttributes#cause
   */
  readonly cause?: string;

}

/**
 * @schema SwfDecisionTaskScheduledEventAttributes
 */
export interface SwfDecisionTaskScheduledEventAttributes {
  /**
   * @schema SwfDecisionTaskScheduledEventAttributes#taskList
   */
  readonly taskList: SwfTaskList;

  /**
   * @schema SwfDecisionTaskScheduledEventAttributes#taskPriority
   */
  readonly taskPriority?: string;

  /**
   * @schema SwfDecisionTaskScheduledEventAttributes#startToCloseTimeout
   */
  readonly startToCloseTimeout?: string;

}

/**
 * @schema SwfDecisionTaskStartedEventAttributes
 */
export interface SwfDecisionTaskStartedEventAttributes {
  /**
   * @schema SwfDecisionTaskStartedEventAttributes#identity
   */
  readonly identity?: string;

  /**
   * @schema SwfDecisionTaskStartedEventAttributes#scheduledEventId
   */
  readonly scheduledEventId: number;

}

/**
 * @schema SwfDecisionTaskCompletedEventAttributes
 */
export interface SwfDecisionTaskCompletedEventAttributes {
  /**
   * @schema SwfDecisionTaskCompletedEventAttributes#executionContext
   */
  readonly executionContext?: string;

  /**
   * @schema SwfDecisionTaskCompletedEventAttributes#scheduledEventId
   */
  readonly scheduledEventId: number;

  /**
   * @schema SwfDecisionTaskCompletedEventAttributes#startedEventId
   */
  readonly startedEventId: number;

}

/**
 * @schema SwfDecisionTaskTimedOutEventAttributes
 */
export interface SwfDecisionTaskTimedOutEventAttributes {
  /**
   * @schema SwfDecisionTaskTimedOutEventAttributes#timeoutType
   */
  readonly timeoutType: string;

  /**
   * @schema SwfDecisionTaskTimedOutEventAttributes#scheduledEventId
   */
  readonly scheduledEventId: number;

  /**
   * @schema SwfDecisionTaskTimedOutEventAttributes#startedEventId
   */
  readonly startedEventId: number;

}

/**
 * @schema SwfActivityTaskScheduledEventAttributes
 */
export interface SwfActivityTaskScheduledEventAttributes {
  /**
   * @schema SwfActivityTaskScheduledEventAttributes#activityType
   */
  readonly activityType: SwfActivityType;

  /**
   * @schema SwfActivityTaskScheduledEventAttributes#activityId
   */
  readonly activityId: string;

  /**
   * @schema SwfActivityTaskScheduledEventAttributes#input
   */
  readonly input?: string;

  /**
   * @schema SwfActivityTaskScheduledEventAttributes#control
   */
  readonly control?: string;

  /**
   * @schema SwfActivityTaskScheduledEventAttributes#scheduleToStartTimeout
   */
  readonly scheduleToStartTimeout?: string;

  /**
   * @schema SwfActivityTaskScheduledEventAttributes#scheduleToCloseTimeout
   */
  readonly scheduleToCloseTimeout?: string;

  /**
   * @schema SwfActivityTaskScheduledEventAttributes#startToCloseTimeout
   */
  readonly startToCloseTimeout?: string;

  /**
   * @schema SwfActivityTaskScheduledEventAttributes#taskList
   */
  readonly taskList: SwfTaskList;

  /**
   * @schema SwfActivityTaskScheduledEventAttributes#taskPriority
   */
  readonly taskPriority?: string;

  /**
   * @schema SwfActivityTaskScheduledEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

  /**
   * @schema SwfActivityTaskScheduledEventAttributes#heartbeatTimeout
   */
  readonly heartbeatTimeout?: string;

}

/**
 * @schema SwfActivityTaskStartedEventAttributes
 */
export interface SwfActivityTaskStartedEventAttributes {
  /**
   * @schema SwfActivityTaskStartedEventAttributes#identity
   */
  readonly identity?: string;

  /**
   * @schema SwfActivityTaskStartedEventAttributes#scheduledEventId
   */
  readonly scheduledEventId: number;

}

/**
 * @schema SwfActivityTaskCompletedEventAttributes
 */
export interface SwfActivityTaskCompletedEventAttributes {
  /**
   * @schema SwfActivityTaskCompletedEventAttributes#result
   */
  readonly result?: string;

  /**
   * @schema SwfActivityTaskCompletedEventAttributes#scheduledEventId
   */
  readonly scheduledEventId: number;

  /**
   * @schema SwfActivityTaskCompletedEventAttributes#startedEventId
   */
  readonly startedEventId: number;

}

/**
 * @schema SwfActivityTaskFailedEventAttributes
 */
export interface SwfActivityTaskFailedEventAttributes {
  /**
   * @schema SwfActivityTaskFailedEventAttributes#reason
   */
  readonly reason?: string;

  /**
   * @schema SwfActivityTaskFailedEventAttributes#details
   */
  readonly details?: string;

  /**
   * @schema SwfActivityTaskFailedEventAttributes#scheduledEventId
   */
  readonly scheduledEventId: number;

  /**
   * @schema SwfActivityTaskFailedEventAttributes#startedEventId
   */
  readonly startedEventId: number;

}

/**
 * @schema SwfActivityTaskTimedOutEventAttributes
 */
export interface SwfActivityTaskTimedOutEventAttributes {
  /**
   * @schema SwfActivityTaskTimedOutEventAttributes#timeoutType
   */
  readonly timeoutType: string;

  /**
   * @schema SwfActivityTaskTimedOutEventAttributes#scheduledEventId
   */
  readonly scheduledEventId: number;

  /**
   * @schema SwfActivityTaskTimedOutEventAttributes#startedEventId
   */
  readonly startedEventId: number;

  /**
   * @schema SwfActivityTaskTimedOutEventAttributes#details
   */
  readonly details?: string;

}

/**
 * @schema SwfActivityTaskCanceledEventAttributes
 */
export interface SwfActivityTaskCanceledEventAttributes {
  /**
   * @schema SwfActivityTaskCanceledEventAttributes#details
   */
  readonly details?: string;

  /**
   * @schema SwfActivityTaskCanceledEventAttributes#scheduledEventId
   */
  readonly scheduledEventId: number;

  /**
   * @schema SwfActivityTaskCanceledEventAttributes#startedEventId
   */
  readonly startedEventId: number;

  /**
   * @schema SwfActivityTaskCanceledEventAttributes#latestCancelRequestedEventId
   */
  readonly latestCancelRequestedEventId?: number;

}

/**
 * @schema SwfActivityTaskCancelRequestedEventAttributes
 */
export interface SwfActivityTaskCancelRequestedEventAttributes {
  /**
   * @schema SwfActivityTaskCancelRequestedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

  /**
   * @schema SwfActivityTaskCancelRequestedEventAttributes#activityId
   */
  readonly activityId: string;

}

/**
 * @schema SwfWorkflowExecutionSignaledEventAttributes
 */
export interface SwfWorkflowExecutionSignaledEventAttributes {
  /**
   * @schema SwfWorkflowExecutionSignaledEventAttributes#signalName
   */
  readonly signalName: string;

  /**
   * @schema SwfWorkflowExecutionSignaledEventAttributes#input
   */
  readonly input?: string;

  /**
   * @schema SwfWorkflowExecutionSignaledEventAttributes#externalWorkflowExecution
   */
  readonly externalWorkflowExecution?: SwfWorkflowExecution;

  /**
   * @schema SwfWorkflowExecutionSignaledEventAttributes#externalInitiatedEventId
   */
  readonly externalInitiatedEventId?: number;

}

/**
 * @schema SwfMarkerRecordedEventAttributes
 */
export interface SwfMarkerRecordedEventAttributes {
  /**
   * @schema SwfMarkerRecordedEventAttributes#markerName
   */
  readonly markerName: string;

  /**
   * @schema SwfMarkerRecordedEventAttributes#details
   */
  readonly details?: string;

  /**
   * @schema SwfMarkerRecordedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema SwfRecordMarkerFailedEventAttributes
 */
export interface SwfRecordMarkerFailedEventAttributes {
  /**
   * @schema SwfRecordMarkerFailedEventAttributes#markerName
   */
  readonly markerName: string;

  /**
   * @schema SwfRecordMarkerFailedEventAttributes#cause
   */
  readonly cause: string;

  /**
   * @schema SwfRecordMarkerFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema SwfTimerStartedEventAttributes
 */
export interface SwfTimerStartedEventAttributes {
  /**
   * @schema SwfTimerStartedEventAttributes#timerId
   */
  readonly timerId: string;

  /**
   * @schema SwfTimerStartedEventAttributes#control
   */
  readonly control?: string;

  /**
   * @schema SwfTimerStartedEventAttributes#startToFireTimeout
   */
  readonly startToFireTimeout: string;

  /**
   * @schema SwfTimerStartedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema SwfTimerFiredEventAttributes
 */
export interface SwfTimerFiredEventAttributes {
  /**
   * @schema SwfTimerFiredEventAttributes#timerId
   */
  readonly timerId: string;

  /**
   * @schema SwfTimerFiredEventAttributes#startedEventId
   */
  readonly startedEventId: number;

}

/**
 * @schema SwfTimerCanceledEventAttributes
 */
export interface SwfTimerCanceledEventAttributes {
  /**
   * @schema SwfTimerCanceledEventAttributes#timerId
   */
  readonly timerId: string;

  /**
   * @schema SwfTimerCanceledEventAttributes#startedEventId
   */
  readonly startedEventId: number;

  /**
   * @schema SwfTimerCanceledEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema SwfStartChildWorkflowExecutionInitiatedEventAttributes
 */
export interface SwfStartChildWorkflowExecutionInitiatedEventAttributes {
  /**
   * @schema SwfStartChildWorkflowExecutionInitiatedEventAttributes#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema SwfStartChildWorkflowExecutionInitiatedEventAttributes#workflowType
   */
  readonly workflowType: SwfWorkflowType;

  /**
   * @schema SwfStartChildWorkflowExecutionInitiatedEventAttributes#control
   */
  readonly control?: string;

  /**
   * @schema SwfStartChildWorkflowExecutionInitiatedEventAttributes#input
   */
  readonly input?: string;

  /**
   * @schema SwfStartChildWorkflowExecutionInitiatedEventAttributes#executionStartToCloseTimeout
   */
  readonly executionStartToCloseTimeout?: string;

  /**
   * @schema SwfStartChildWorkflowExecutionInitiatedEventAttributes#taskList
   */
  readonly taskList: SwfTaskList;

  /**
   * @schema SwfStartChildWorkflowExecutionInitiatedEventAttributes#taskPriority
   */
  readonly taskPriority?: string;

  /**
   * @schema SwfStartChildWorkflowExecutionInitiatedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

  /**
   * @schema SwfStartChildWorkflowExecutionInitiatedEventAttributes#childPolicy
   */
  readonly childPolicy: string;

  /**
   * @schema SwfStartChildWorkflowExecutionInitiatedEventAttributes#taskStartToCloseTimeout
   */
  readonly taskStartToCloseTimeout?: string;

  /**
   * @schema SwfStartChildWorkflowExecutionInitiatedEventAttributes#tagList
   */
  readonly tagList?: string[];

  /**
   * @schema SwfStartChildWorkflowExecutionInitiatedEventAttributes#lambdaRole
   */
  readonly lambdaRole?: string;

}

/**
 * @schema SwfChildWorkflowExecutionStartedEventAttributes
 */
export interface SwfChildWorkflowExecutionStartedEventAttributes {
  /**
   * @schema SwfChildWorkflowExecutionStartedEventAttributes#workflowExecution
   */
  readonly workflowExecution: SwfWorkflowExecution;

  /**
   * @schema SwfChildWorkflowExecutionStartedEventAttributes#workflowType
   */
  readonly workflowType: SwfWorkflowType;

  /**
   * @schema SwfChildWorkflowExecutionStartedEventAttributes#initiatedEventId
   */
  readonly initiatedEventId: number;

}

/**
 * @schema SwfChildWorkflowExecutionCompletedEventAttributes
 */
export interface SwfChildWorkflowExecutionCompletedEventAttributes {
  /**
   * @schema SwfChildWorkflowExecutionCompletedEventAttributes#workflowExecution
   */
  readonly workflowExecution: SwfWorkflowExecution;

  /**
   * @schema SwfChildWorkflowExecutionCompletedEventAttributes#workflowType
   */
  readonly workflowType: SwfWorkflowType;

  /**
   * @schema SwfChildWorkflowExecutionCompletedEventAttributes#result
   */
  readonly result?: string;

  /**
   * @schema SwfChildWorkflowExecutionCompletedEventAttributes#initiatedEventId
   */
  readonly initiatedEventId: number;

  /**
   * @schema SwfChildWorkflowExecutionCompletedEventAttributes#startedEventId
   */
  readonly startedEventId: number;

}

/**
 * @schema SwfChildWorkflowExecutionFailedEventAttributes
 */
export interface SwfChildWorkflowExecutionFailedEventAttributes {
  /**
   * @schema SwfChildWorkflowExecutionFailedEventAttributes#workflowExecution
   */
  readonly workflowExecution: SwfWorkflowExecution;

  /**
   * @schema SwfChildWorkflowExecutionFailedEventAttributes#workflowType
   */
  readonly workflowType: SwfWorkflowType;

  /**
   * @schema SwfChildWorkflowExecutionFailedEventAttributes#reason
   */
  readonly reason?: string;

  /**
   * @schema SwfChildWorkflowExecutionFailedEventAttributes#details
   */
  readonly details?: string;

  /**
   * @schema SwfChildWorkflowExecutionFailedEventAttributes#initiatedEventId
   */
  readonly initiatedEventId: number;

  /**
   * @schema SwfChildWorkflowExecutionFailedEventAttributes#startedEventId
   */
  readonly startedEventId: number;

}

/**
 * @schema SwfChildWorkflowExecutionTimedOutEventAttributes
 */
export interface SwfChildWorkflowExecutionTimedOutEventAttributes {
  /**
   * @schema SwfChildWorkflowExecutionTimedOutEventAttributes#workflowExecution
   */
  readonly workflowExecution: SwfWorkflowExecution;

  /**
   * @schema SwfChildWorkflowExecutionTimedOutEventAttributes#workflowType
   */
  readonly workflowType: SwfWorkflowType;

  /**
   * @schema SwfChildWorkflowExecutionTimedOutEventAttributes#timeoutType
   */
  readonly timeoutType: string;

  /**
   * @schema SwfChildWorkflowExecutionTimedOutEventAttributes#initiatedEventId
   */
  readonly initiatedEventId: number;

  /**
   * @schema SwfChildWorkflowExecutionTimedOutEventAttributes#startedEventId
   */
  readonly startedEventId: number;

}

/**
 * @schema SwfChildWorkflowExecutionCanceledEventAttributes
 */
export interface SwfChildWorkflowExecutionCanceledEventAttributes {
  /**
   * @schema SwfChildWorkflowExecutionCanceledEventAttributes#workflowExecution
   */
  readonly workflowExecution: SwfWorkflowExecution;

  /**
   * @schema SwfChildWorkflowExecutionCanceledEventAttributes#workflowType
   */
  readonly workflowType: SwfWorkflowType;

  /**
   * @schema SwfChildWorkflowExecutionCanceledEventAttributes#details
   */
  readonly details?: string;

  /**
   * @schema SwfChildWorkflowExecutionCanceledEventAttributes#initiatedEventId
   */
  readonly initiatedEventId: number;

  /**
   * @schema SwfChildWorkflowExecutionCanceledEventAttributes#startedEventId
   */
  readonly startedEventId: number;

}

/**
 * @schema SwfChildWorkflowExecutionTerminatedEventAttributes
 */
export interface SwfChildWorkflowExecutionTerminatedEventAttributes {
  /**
   * @schema SwfChildWorkflowExecutionTerminatedEventAttributes#workflowExecution
   */
  readonly workflowExecution: SwfWorkflowExecution;

  /**
   * @schema SwfChildWorkflowExecutionTerminatedEventAttributes#workflowType
   */
  readonly workflowType: SwfWorkflowType;

  /**
   * @schema SwfChildWorkflowExecutionTerminatedEventAttributes#initiatedEventId
   */
  readonly initiatedEventId: number;

  /**
   * @schema SwfChildWorkflowExecutionTerminatedEventAttributes#startedEventId
   */
  readonly startedEventId: number;

}

/**
 * @schema SwfSignalExternalWorkflowExecutionInitiatedEventAttributes
 */
export interface SwfSignalExternalWorkflowExecutionInitiatedEventAttributes {
  /**
   * @schema SwfSignalExternalWorkflowExecutionInitiatedEventAttributes#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema SwfSignalExternalWorkflowExecutionInitiatedEventAttributes#runId
   */
  readonly runId?: string;

  /**
   * @schema SwfSignalExternalWorkflowExecutionInitiatedEventAttributes#signalName
   */
  readonly signalName: string;

  /**
   * @schema SwfSignalExternalWorkflowExecutionInitiatedEventAttributes#input
   */
  readonly input?: string;

  /**
   * @schema SwfSignalExternalWorkflowExecutionInitiatedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

  /**
   * @schema SwfSignalExternalWorkflowExecutionInitiatedEventAttributes#control
   */
  readonly control?: string;

}

/**
 * @schema SwfExternalWorkflowExecutionSignaledEventAttributes
 */
export interface SwfExternalWorkflowExecutionSignaledEventAttributes {
  /**
   * @schema SwfExternalWorkflowExecutionSignaledEventAttributes#workflowExecution
   */
  readonly workflowExecution: SwfWorkflowExecution;

  /**
   * @schema SwfExternalWorkflowExecutionSignaledEventAttributes#initiatedEventId
   */
  readonly initiatedEventId: number;

}

/**
 * @schema SwfSignalExternalWorkflowExecutionFailedEventAttributes
 */
export interface SwfSignalExternalWorkflowExecutionFailedEventAttributes {
  /**
   * @schema SwfSignalExternalWorkflowExecutionFailedEventAttributes#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema SwfSignalExternalWorkflowExecutionFailedEventAttributes#runId
   */
  readonly runId?: string;

  /**
   * @schema SwfSignalExternalWorkflowExecutionFailedEventAttributes#cause
   */
  readonly cause: string;

  /**
   * @schema SwfSignalExternalWorkflowExecutionFailedEventAttributes#initiatedEventId
   */
  readonly initiatedEventId: number;

  /**
   * @schema SwfSignalExternalWorkflowExecutionFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

  /**
   * @schema SwfSignalExternalWorkflowExecutionFailedEventAttributes#control
   */
  readonly control?: string;

}

/**
 * @schema SwfExternalWorkflowExecutionCancelRequestedEventAttributes
 */
export interface SwfExternalWorkflowExecutionCancelRequestedEventAttributes {
  /**
   * @schema SwfExternalWorkflowExecutionCancelRequestedEventAttributes#workflowExecution
   */
  readonly workflowExecution: SwfWorkflowExecution;

  /**
   * @schema SwfExternalWorkflowExecutionCancelRequestedEventAttributes#initiatedEventId
   */
  readonly initiatedEventId: number;

}

/**
 * @schema SwfRequestCancelExternalWorkflowExecutionInitiatedEventAttributes
 */
export interface SwfRequestCancelExternalWorkflowExecutionInitiatedEventAttributes {
  /**
   * @schema SwfRequestCancelExternalWorkflowExecutionInitiatedEventAttributes#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema SwfRequestCancelExternalWorkflowExecutionInitiatedEventAttributes#runId
   */
  readonly runId?: string;

  /**
   * @schema SwfRequestCancelExternalWorkflowExecutionInitiatedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

  /**
   * @schema SwfRequestCancelExternalWorkflowExecutionInitiatedEventAttributes#control
   */
  readonly control?: string;

}

/**
 * @schema SwfRequestCancelExternalWorkflowExecutionFailedEventAttributes
 */
export interface SwfRequestCancelExternalWorkflowExecutionFailedEventAttributes {
  /**
   * @schema SwfRequestCancelExternalWorkflowExecutionFailedEventAttributes#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema SwfRequestCancelExternalWorkflowExecutionFailedEventAttributes#runId
   */
  readonly runId?: string;

  /**
   * @schema SwfRequestCancelExternalWorkflowExecutionFailedEventAttributes#cause
   */
  readonly cause: string;

  /**
   * @schema SwfRequestCancelExternalWorkflowExecutionFailedEventAttributes#initiatedEventId
   */
  readonly initiatedEventId: number;

  /**
   * @schema SwfRequestCancelExternalWorkflowExecutionFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

  /**
   * @schema SwfRequestCancelExternalWorkflowExecutionFailedEventAttributes#control
   */
  readonly control?: string;

}

/**
 * @schema SwfScheduleActivityTaskFailedEventAttributes
 */
export interface SwfScheduleActivityTaskFailedEventAttributes {
  /**
   * @schema SwfScheduleActivityTaskFailedEventAttributes#activityType
   */
  readonly activityType: SwfActivityType;

  /**
   * @schema SwfScheduleActivityTaskFailedEventAttributes#activityId
   */
  readonly activityId: string;

  /**
   * @schema SwfScheduleActivityTaskFailedEventAttributes#cause
   */
  readonly cause: string;

  /**
   * @schema SwfScheduleActivityTaskFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema SwfRequestCancelActivityTaskFailedEventAttributes
 */
export interface SwfRequestCancelActivityTaskFailedEventAttributes {
  /**
   * @schema SwfRequestCancelActivityTaskFailedEventAttributes#activityId
   */
  readonly activityId: string;

  /**
   * @schema SwfRequestCancelActivityTaskFailedEventAttributes#cause
   */
  readonly cause: string;

  /**
   * @schema SwfRequestCancelActivityTaskFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema SwfStartTimerFailedEventAttributes
 */
export interface SwfStartTimerFailedEventAttributes {
  /**
   * @schema SwfStartTimerFailedEventAttributes#timerId
   */
  readonly timerId: string;

  /**
   * @schema SwfStartTimerFailedEventAttributes#cause
   */
  readonly cause: string;

  /**
   * @schema SwfStartTimerFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema SwfCancelTimerFailedEventAttributes
 */
export interface SwfCancelTimerFailedEventAttributes {
  /**
   * @schema SwfCancelTimerFailedEventAttributes#timerId
   */
  readonly timerId: string;

  /**
   * @schema SwfCancelTimerFailedEventAttributes#cause
   */
  readonly cause: string;

  /**
   * @schema SwfCancelTimerFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema SwfStartChildWorkflowExecutionFailedEventAttributes
 */
export interface SwfStartChildWorkflowExecutionFailedEventAttributes {
  /**
   * @schema SwfStartChildWorkflowExecutionFailedEventAttributes#workflowType
   */
  readonly workflowType: SwfWorkflowType;

  /**
   * @schema SwfStartChildWorkflowExecutionFailedEventAttributes#cause
   */
  readonly cause: string;

  /**
   * @schema SwfStartChildWorkflowExecutionFailedEventAttributes#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema SwfStartChildWorkflowExecutionFailedEventAttributes#initiatedEventId
   */
  readonly initiatedEventId: number;

  /**
   * @schema SwfStartChildWorkflowExecutionFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

  /**
   * @schema SwfStartChildWorkflowExecutionFailedEventAttributes#control
   */
  readonly control?: string;

}

/**
 * @schema SwfLambdaFunctionScheduledEventAttributes
 */
export interface SwfLambdaFunctionScheduledEventAttributes {
  /**
   * @schema SwfLambdaFunctionScheduledEventAttributes#id
   */
  readonly id: string;

  /**
   * @schema SwfLambdaFunctionScheduledEventAttributes#name
   */
  readonly name: string;

  /**
   * @schema SwfLambdaFunctionScheduledEventAttributes#control
   */
  readonly control?: string;

  /**
   * @schema SwfLambdaFunctionScheduledEventAttributes#input
   */
  readonly input?: string;

  /**
   * @schema SwfLambdaFunctionScheduledEventAttributes#startToCloseTimeout
   */
  readonly startToCloseTimeout?: string;

  /**
   * @schema SwfLambdaFunctionScheduledEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema SwfLambdaFunctionStartedEventAttributes
 */
export interface SwfLambdaFunctionStartedEventAttributes {
  /**
   * @schema SwfLambdaFunctionStartedEventAttributes#scheduledEventId
   */
  readonly scheduledEventId: number;

}

/**
 * @schema SwfLambdaFunctionCompletedEventAttributes
 */
export interface SwfLambdaFunctionCompletedEventAttributes {
  /**
   * @schema SwfLambdaFunctionCompletedEventAttributes#scheduledEventId
   */
  readonly scheduledEventId: number;

  /**
   * @schema SwfLambdaFunctionCompletedEventAttributes#startedEventId
   */
  readonly startedEventId: number;

  /**
   * @schema SwfLambdaFunctionCompletedEventAttributes#result
   */
  readonly result?: string;

}

/**
 * @schema SwfLambdaFunctionFailedEventAttributes
 */
export interface SwfLambdaFunctionFailedEventAttributes {
  /**
   * @schema SwfLambdaFunctionFailedEventAttributes#scheduledEventId
   */
  readonly scheduledEventId: number;

  /**
   * @schema SwfLambdaFunctionFailedEventAttributes#startedEventId
   */
  readonly startedEventId: number;

  /**
   * @schema SwfLambdaFunctionFailedEventAttributes#reason
   */
  readonly reason?: string;

  /**
   * @schema SwfLambdaFunctionFailedEventAttributes#details
   */
  readonly details?: string;

}

/**
 * @schema SwfLambdaFunctionTimedOutEventAttributes
 */
export interface SwfLambdaFunctionTimedOutEventAttributes {
  /**
   * @schema SwfLambdaFunctionTimedOutEventAttributes#scheduledEventId
   */
  readonly scheduledEventId: number;

  /**
   * @schema SwfLambdaFunctionTimedOutEventAttributes#startedEventId
   */
  readonly startedEventId: number;

  /**
   * @schema SwfLambdaFunctionTimedOutEventAttributes#timeoutType
   */
  readonly timeoutType?: string;

}

/**
 * @schema SwfScheduleLambdaFunctionFailedEventAttributes
 */
export interface SwfScheduleLambdaFunctionFailedEventAttributes {
  /**
   * @schema SwfScheduleLambdaFunctionFailedEventAttributes#id
   */
  readonly id: string;

  /**
   * @schema SwfScheduleLambdaFunctionFailedEventAttributes#name
   */
  readonly name: string;

  /**
   * @schema SwfScheduleLambdaFunctionFailedEventAttributes#cause
   */
  readonly cause: string;

  /**
   * @schema SwfScheduleLambdaFunctionFailedEventAttributes#decisionTaskCompletedEventId
   */
  readonly decisionTaskCompletedEventId: number;

}

/**
 * @schema SwfStartLambdaFunctionFailedEventAttributes
 */
export interface SwfStartLambdaFunctionFailedEventAttributes {
  /**
   * @schema SwfStartLambdaFunctionFailedEventAttributes#scheduledEventId
   */
  readonly scheduledEventId?: number;

  /**
   * @schema SwfStartLambdaFunctionFailedEventAttributes#cause
   */
  readonly cause?: string;

  /**
   * @schema SwfStartLambdaFunctionFailedEventAttributes#message
   */
  readonly message?: string;

}

/**
 * @schema SwfScheduleActivityTaskDecisionAttributes
 */
export interface SwfScheduleActivityTaskDecisionAttributes {
  /**
   * @schema SwfScheduleActivityTaskDecisionAttributes#activityType
   */
  readonly activityType: SwfActivityType;

  /**
   * @schema SwfScheduleActivityTaskDecisionAttributes#activityId
   */
  readonly activityId: string;

  /**
   * @schema SwfScheduleActivityTaskDecisionAttributes#control
   */
  readonly control?: string;

  /**
   * @schema SwfScheduleActivityTaskDecisionAttributes#input
   */
  readonly input?: string;

  /**
   * @schema SwfScheduleActivityTaskDecisionAttributes#scheduleToCloseTimeout
   */
  readonly scheduleToCloseTimeout?: string;

  /**
   * @schema SwfScheduleActivityTaskDecisionAttributes#taskList
   */
  readonly taskList?: SwfTaskList;

  /**
   * @schema SwfScheduleActivityTaskDecisionAttributes#taskPriority
   */
  readonly taskPriority?: string;

  /**
   * @schema SwfScheduleActivityTaskDecisionAttributes#scheduleToStartTimeout
   */
  readonly scheduleToStartTimeout?: string;

  /**
   * @schema SwfScheduleActivityTaskDecisionAttributes#startToCloseTimeout
   */
  readonly startToCloseTimeout?: string;

  /**
   * @schema SwfScheduleActivityTaskDecisionAttributes#heartbeatTimeout
   */
  readonly heartbeatTimeout?: string;

}

/**
 * @schema SwfRequestCancelActivityTaskDecisionAttributes
 */
export interface SwfRequestCancelActivityTaskDecisionAttributes {
  /**
   * @schema SwfRequestCancelActivityTaskDecisionAttributes#activityId
   */
  readonly activityId: string;

}

/**
 * @schema SwfCompleteWorkflowExecutionDecisionAttributes
 */
export interface SwfCompleteWorkflowExecutionDecisionAttributes {
  /**
   * @schema SwfCompleteWorkflowExecutionDecisionAttributes#result
   */
  readonly result?: string;

}

/**
 * @schema SwfFailWorkflowExecutionDecisionAttributes
 */
export interface SwfFailWorkflowExecutionDecisionAttributes {
  /**
   * @schema SwfFailWorkflowExecutionDecisionAttributes#reason
   */
  readonly reason?: string;

  /**
   * @schema SwfFailWorkflowExecutionDecisionAttributes#details
   */
  readonly details?: string;

}

/**
 * @schema SwfCancelWorkflowExecutionDecisionAttributes
 */
export interface SwfCancelWorkflowExecutionDecisionAttributes {
  /**
   * @schema SwfCancelWorkflowExecutionDecisionAttributes#details
   */
  readonly details?: string;

}

/**
 * @schema SwfContinueAsNewWorkflowExecutionDecisionAttributes
 */
export interface SwfContinueAsNewWorkflowExecutionDecisionAttributes {
  /**
   * @schema SwfContinueAsNewWorkflowExecutionDecisionAttributes#input
   */
  readonly input?: string;

  /**
   * @schema SwfContinueAsNewWorkflowExecutionDecisionAttributes#executionStartToCloseTimeout
   */
  readonly executionStartToCloseTimeout?: string;

  /**
   * @schema SwfContinueAsNewWorkflowExecutionDecisionAttributes#taskList
   */
  readonly taskList?: SwfTaskList;

  /**
   * @schema SwfContinueAsNewWorkflowExecutionDecisionAttributes#taskPriority
   */
  readonly taskPriority?: string;

  /**
   * @schema SwfContinueAsNewWorkflowExecutionDecisionAttributes#taskStartToCloseTimeout
   */
  readonly taskStartToCloseTimeout?: string;

  /**
   * @schema SwfContinueAsNewWorkflowExecutionDecisionAttributes#childPolicy
   */
  readonly childPolicy?: string;

  /**
   * @schema SwfContinueAsNewWorkflowExecutionDecisionAttributes#tagList
   */
  readonly tagList?: string[];

  /**
   * @schema SwfContinueAsNewWorkflowExecutionDecisionAttributes#workflowTypeVersion
   */
  readonly workflowTypeVersion?: string;

  /**
   * @schema SwfContinueAsNewWorkflowExecutionDecisionAttributes#lambdaRole
   */
  readonly lambdaRole?: string;

}

/**
 * @schema SwfRecordMarkerDecisionAttributes
 */
export interface SwfRecordMarkerDecisionAttributes {
  /**
   * @schema SwfRecordMarkerDecisionAttributes#markerName
   */
  readonly markerName: string;

  /**
   * @schema SwfRecordMarkerDecisionAttributes#details
   */
  readonly details?: string;

}

/**
 * @schema SwfStartTimerDecisionAttributes
 */
export interface SwfStartTimerDecisionAttributes {
  /**
   * @schema SwfStartTimerDecisionAttributes#timerId
   */
  readonly timerId: string;

  /**
   * @schema SwfStartTimerDecisionAttributes#control
   */
  readonly control?: string;

  /**
   * @schema SwfStartTimerDecisionAttributes#startToFireTimeout
   */
  readonly startToFireTimeout: string;

}

/**
 * @schema SwfCancelTimerDecisionAttributes
 */
export interface SwfCancelTimerDecisionAttributes {
  /**
   * @schema SwfCancelTimerDecisionAttributes#timerId
   */
  readonly timerId: string;

}

/**
 * @schema SwfSignalExternalWorkflowExecutionDecisionAttributes
 */
export interface SwfSignalExternalWorkflowExecutionDecisionAttributes {
  /**
   * @schema SwfSignalExternalWorkflowExecutionDecisionAttributes#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema SwfSignalExternalWorkflowExecutionDecisionAttributes#runId
   */
  readonly runId?: string;

  /**
   * @schema SwfSignalExternalWorkflowExecutionDecisionAttributes#signalName
   */
  readonly signalName: string;

  /**
   * @schema SwfSignalExternalWorkflowExecutionDecisionAttributes#input
   */
  readonly input?: string;

  /**
   * @schema SwfSignalExternalWorkflowExecutionDecisionAttributes#control
   */
  readonly control?: string;

}

/**
 * @schema SwfRequestCancelExternalWorkflowExecutionDecisionAttributes
 */
export interface SwfRequestCancelExternalWorkflowExecutionDecisionAttributes {
  /**
   * @schema SwfRequestCancelExternalWorkflowExecutionDecisionAttributes#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema SwfRequestCancelExternalWorkflowExecutionDecisionAttributes#runId
   */
  readonly runId?: string;

  /**
   * @schema SwfRequestCancelExternalWorkflowExecutionDecisionAttributes#control
   */
  readonly control?: string;

}

/**
 * @schema SwfStartChildWorkflowExecutionDecisionAttributes
 */
export interface SwfStartChildWorkflowExecutionDecisionAttributes {
  /**
   * @schema SwfStartChildWorkflowExecutionDecisionAttributes#workflowType
   */
  readonly workflowType: SwfWorkflowType;

  /**
   * @schema SwfStartChildWorkflowExecutionDecisionAttributes#workflowId
   */
  readonly workflowId: string;

  /**
   * @schema SwfStartChildWorkflowExecutionDecisionAttributes#control
   */
  readonly control?: string;

  /**
   * @schema SwfStartChildWorkflowExecutionDecisionAttributes#input
   */
  readonly input?: string;

  /**
   * @schema SwfStartChildWorkflowExecutionDecisionAttributes#executionStartToCloseTimeout
   */
  readonly executionStartToCloseTimeout?: string;

  /**
   * @schema SwfStartChildWorkflowExecutionDecisionAttributes#taskList
   */
  readonly taskList?: SwfTaskList;

  /**
   * @schema SwfStartChildWorkflowExecutionDecisionAttributes#taskPriority
   */
  readonly taskPriority?: string;

  /**
   * @schema SwfStartChildWorkflowExecutionDecisionAttributes#taskStartToCloseTimeout
   */
  readonly taskStartToCloseTimeout?: string;

  /**
   * @schema SwfStartChildWorkflowExecutionDecisionAttributes#childPolicy
   */
  readonly childPolicy?: string;

  /**
   * @schema SwfStartChildWorkflowExecutionDecisionAttributes#tagList
   */
  readonly tagList?: string[];

  /**
   * @schema SwfStartChildWorkflowExecutionDecisionAttributes#lambdaRole
   */
  readonly lambdaRole?: string;

}

/**
 * @schema SwfScheduleLambdaFunctionDecisionAttributes
 */
export interface SwfScheduleLambdaFunctionDecisionAttributes {
  /**
   * @schema SwfScheduleLambdaFunctionDecisionAttributes#id
   */
  readonly id: string;

  /**
   * @schema SwfScheduleLambdaFunctionDecisionAttributes#name
   */
  readonly name: string;

  /**
   * @schema SwfScheduleLambdaFunctionDecisionAttributes#control
   */
  readonly control?: string;

  /**
   * @schema SwfScheduleLambdaFunctionDecisionAttributes#input
   */
  readonly input?: string;

  /**
   * @schema SwfScheduleLambdaFunctionDecisionAttributes#startToCloseTimeout
   */
  readonly startToCloseTimeout?: string;

}
