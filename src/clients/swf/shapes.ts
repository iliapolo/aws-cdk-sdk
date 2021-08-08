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
 * Converts an object of type 'SwfCountClosedWorkflowExecutionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfCountClosedWorkflowExecutionsInput(obj: SwfCountClosedWorkflowExecutionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'startTimeFilter': toJson_SwfExecutionTimeFilter(obj.startTimeFilter),
    'closeTimeFilter': toJson_SwfExecutionTimeFilter(obj.closeTimeFilter),
    'executionFilter': toJson_SwfWorkflowExecutionFilter(obj.executionFilter),
    'typeFilter': toJson_SwfWorkflowTypeFilter(obj.typeFilter),
    'tagFilter': toJson_SwfTagFilter(obj.tagFilter),
    'closeStatusFilter': toJson_SwfCloseStatusFilter(obj.closeStatusFilter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfWorkflowExecutionCount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfWorkflowExecutionCount(obj: SwfWorkflowExecutionCount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'count': obj.count,
    'truncated': obj.truncated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfCountOpenWorkflowExecutionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfCountOpenWorkflowExecutionsInput(obj: SwfCountOpenWorkflowExecutionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'startTimeFilter': toJson_SwfExecutionTimeFilter(obj.startTimeFilter),
    'typeFilter': toJson_SwfWorkflowTypeFilter(obj.typeFilter),
    'tagFilter': toJson_SwfTagFilter(obj.tagFilter),
    'executionFilter': toJson_SwfWorkflowExecutionFilter(obj.executionFilter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfCountPendingActivityTasksInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfCountPendingActivityTasksInput(obj: SwfCountPendingActivityTasksInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'taskList': toJson_SwfTaskList(obj.taskList),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfPendingTaskCount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfPendingTaskCount(obj: SwfPendingTaskCount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'count': obj.count,
    'truncated': obj.truncated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfCountPendingDecisionTasksInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfCountPendingDecisionTasksInput(obj: SwfCountPendingDecisionTasksInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'taskList': toJson_SwfTaskList(obj.taskList),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfDeprecateActivityTypeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfDeprecateActivityTypeInput(obj: SwfDeprecateActivityTypeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'activityType': toJson_SwfActivityType(obj.activityType),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfDeprecateDomainInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfDeprecateDomainInput(obj: SwfDeprecateDomainInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfDeprecateWorkflowTypeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfDeprecateWorkflowTypeInput(obj: SwfDeprecateWorkflowTypeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'workflowType': toJson_SwfWorkflowType(obj.workflowType),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfDescribeActivityTypeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfDescribeActivityTypeInput(obj: SwfDescribeActivityTypeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'activityType': toJson_SwfActivityType(obj.activityType),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfActivityTypeDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfActivityTypeDetail(obj: SwfActivityTypeDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'typeInfo': toJson_SwfActivityTypeInfo(obj.typeInfo),
    'configuration': toJson_SwfActivityTypeConfiguration(obj.configuration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfDescribeDomainInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfDescribeDomainInput(obj: SwfDescribeDomainInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfDomainDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfDomainDetail(obj: SwfDomainDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainInfo': toJson_SwfDomainInfo(obj.domainInfo),
    'configuration': toJson_SwfDomainConfiguration(obj.configuration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfDescribeWorkflowExecutionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfDescribeWorkflowExecutionInput(obj: SwfDescribeWorkflowExecutionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'execution': toJson_SwfWorkflowExecution(obj.execution),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfWorkflowExecutionDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfWorkflowExecutionDetail(obj: SwfWorkflowExecutionDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'executionInfo': toJson_SwfWorkflowExecutionInfo(obj.executionInfo),
    'executionConfiguration': toJson_SwfWorkflowExecutionConfiguration(obj.executionConfiguration),
    'openCounts': toJson_SwfWorkflowExecutionOpenCounts(obj.openCounts),
    'latestActivityTaskTimestamp': obj.latestActivityTaskTimestamp,
    'latestExecutionContext': obj.latestExecutionContext,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfDescribeWorkflowTypeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfDescribeWorkflowTypeInput(obj: SwfDescribeWorkflowTypeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'workflowType': toJson_SwfWorkflowType(obj.workflowType),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfWorkflowTypeDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfWorkflowTypeDetail(obj: SwfWorkflowTypeDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'typeInfo': toJson_SwfWorkflowTypeInfo(obj.typeInfo),
    'configuration': toJson_SwfWorkflowTypeConfiguration(obj.configuration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfGetWorkflowExecutionHistoryInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfGetWorkflowExecutionHistoryInput(obj: SwfGetWorkflowExecutionHistoryInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'execution': toJson_SwfWorkflowExecution(obj.execution),
    'nextPageToken': obj.nextPageToken,
    'maximumPageSize': obj.maximumPageSize,
    'reverseOrder': obj.reverseOrder,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfHistory' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfHistory(obj: SwfHistory | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'events': obj.events?.map(y => toJson_SwfHistoryEvent(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfListActivityTypesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfListActivityTypesInput(obj: SwfListActivityTypesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'name': obj.name,
    'registrationStatus': obj.registrationStatus,
    'nextPageToken': obj.nextPageToken,
    'maximumPageSize': obj.maximumPageSize,
    'reverseOrder': obj.reverseOrder,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfActivityTypeInfos' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfActivityTypeInfos(obj: SwfActivityTypeInfos | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'typeInfos': obj.typeInfos?.map(y => toJson_SwfActivityTypeInfo(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfListClosedWorkflowExecutionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfListClosedWorkflowExecutionsInput(obj: SwfListClosedWorkflowExecutionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'startTimeFilter': toJson_SwfExecutionTimeFilter(obj.startTimeFilter),
    'closeTimeFilter': toJson_SwfExecutionTimeFilter(obj.closeTimeFilter),
    'executionFilter': toJson_SwfWorkflowExecutionFilter(obj.executionFilter),
    'closeStatusFilter': toJson_SwfCloseStatusFilter(obj.closeStatusFilter),
    'typeFilter': toJson_SwfWorkflowTypeFilter(obj.typeFilter),
    'tagFilter': toJson_SwfTagFilter(obj.tagFilter),
    'nextPageToken': obj.nextPageToken,
    'maximumPageSize': obj.maximumPageSize,
    'reverseOrder': obj.reverseOrder,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfWorkflowExecutionInfos' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfWorkflowExecutionInfos(obj: SwfWorkflowExecutionInfos | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'executionInfos': obj.executionInfos?.map(y => toJson_SwfWorkflowExecutionInfo(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfListDomainsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfListDomainsInput(obj: SwfListDomainsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextPageToken': obj.nextPageToken,
    'registrationStatus': obj.registrationStatus,
    'maximumPageSize': obj.maximumPageSize,
    'reverseOrder': obj.reverseOrder,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfDomainInfos' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfDomainInfos(obj: SwfDomainInfos | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainInfos': obj.domainInfos?.map(y => toJson_SwfDomainInfo(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfListOpenWorkflowExecutionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfListOpenWorkflowExecutionsInput(obj: SwfListOpenWorkflowExecutionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'startTimeFilter': toJson_SwfExecutionTimeFilter(obj.startTimeFilter),
    'typeFilter': toJson_SwfWorkflowTypeFilter(obj.typeFilter),
    'tagFilter': toJson_SwfTagFilter(obj.tagFilter),
    'nextPageToken': obj.nextPageToken,
    'maximumPageSize': obj.maximumPageSize,
    'reverseOrder': obj.reverseOrder,
    'executionFilter': toJson_SwfWorkflowExecutionFilter(obj.executionFilter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfListTagsForResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfListTagsForResourceInput(obj: SwfListTagsForResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfListTagsForResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfListTagsForResourceOutput(obj: SwfListTagsForResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': obj.tags?.map(y => toJson_SwfResourceTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfListWorkflowTypesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfListWorkflowTypesInput(obj: SwfListWorkflowTypesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'name': obj.name,
    'registrationStatus': obj.registrationStatus,
    'nextPageToken': obj.nextPageToken,
    'maximumPageSize': obj.maximumPageSize,
    'reverseOrder': obj.reverseOrder,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfWorkflowTypeInfos' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfWorkflowTypeInfos(obj: SwfWorkflowTypeInfos | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'typeInfos': obj.typeInfos?.map(y => toJson_SwfWorkflowTypeInfo(y)),
    'nextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfPollForActivityTaskInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfPollForActivityTaskInput(obj: SwfPollForActivityTaskInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'taskList': toJson_SwfTaskList(obj.taskList),
    'identity': obj.identity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfActivityTask' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfActivityTask(obj: SwfActivityTask | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskToken': obj.taskToken,
    'activityId': obj.activityId,
    'startedEventId': obj.startedEventId,
    'workflowExecution': toJson_SwfWorkflowExecution(obj.workflowExecution),
    'activityType': toJson_SwfActivityType(obj.activityType),
    'input': obj.input,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfPollForDecisionTaskInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfPollForDecisionTaskInput(obj: SwfPollForDecisionTaskInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'taskList': toJson_SwfTaskList(obj.taskList),
    'identity': obj.identity,
    'nextPageToken': obj.nextPageToken,
    'maximumPageSize': obj.maximumPageSize,
    'reverseOrder': obj.reverseOrder,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfDecisionTask' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfDecisionTask(obj: SwfDecisionTask | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskToken': obj.taskToken,
    'startedEventId': obj.startedEventId,
    'workflowExecution': toJson_SwfWorkflowExecution(obj.workflowExecution),
    'workflowType': toJson_SwfWorkflowType(obj.workflowType),
    'events': obj.events?.map(y => toJson_SwfHistoryEvent(y)),
    'nextPageToken': obj.nextPageToken,
    'previousStartedEventId': obj.previousStartedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfRecordActivityTaskHeartbeatInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfRecordActivityTaskHeartbeatInput(obj: SwfRecordActivityTaskHeartbeatInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskToken': obj.taskToken,
    'details': obj.details,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfActivityTaskStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfActivityTaskStatus(obj: SwfActivityTaskStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cancelRequested': obj.cancelRequested,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfRegisterActivityTypeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfRegisterActivityTypeInput(obj: SwfRegisterActivityTypeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'name': obj.name,
    'version': obj.version,
    'description': obj.description,
    'defaultTaskStartToCloseTimeout': obj.defaultTaskStartToCloseTimeout,
    'defaultTaskHeartbeatTimeout': obj.defaultTaskHeartbeatTimeout,
    'defaultTaskList': toJson_SwfTaskList(obj.defaultTaskList),
    'defaultTaskPriority': obj.defaultTaskPriority,
    'defaultTaskScheduleToStartTimeout': obj.defaultTaskScheduleToStartTimeout,
    'defaultTaskScheduleToCloseTimeout': obj.defaultTaskScheduleToCloseTimeout,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfRegisterDomainInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfRegisterDomainInput(obj: SwfRegisterDomainInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'workflowExecutionRetentionPeriodInDays': obj.workflowExecutionRetentionPeriodInDays,
    'tags': obj.tags?.map(y => toJson_SwfResourceTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfRegisterWorkflowTypeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfRegisterWorkflowTypeInput(obj: SwfRegisterWorkflowTypeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'name': obj.name,
    'version': obj.version,
    'description': obj.description,
    'defaultTaskStartToCloseTimeout': obj.defaultTaskStartToCloseTimeout,
    'defaultExecutionStartToCloseTimeout': obj.defaultExecutionStartToCloseTimeout,
    'defaultTaskList': toJson_SwfTaskList(obj.defaultTaskList),
    'defaultTaskPriority': obj.defaultTaskPriority,
    'defaultChildPolicy': obj.defaultChildPolicy,
    'defaultLambdaRole': obj.defaultLambdaRole,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfRequestCancelWorkflowExecutionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfRequestCancelWorkflowExecutionInput(obj: SwfRequestCancelWorkflowExecutionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'workflowId': obj.workflowId,
    'runId': obj.runId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfRespondActivityTaskCanceledInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfRespondActivityTaskCanceledInput(obj: SwfRespondActivityTaskCanceledInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskToken': obj.taskToken,
    'details': obj.details,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfRespondActivityTaskCompletedInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfRespondActivityTaskCompletedInput(obj: SwfRespondActivityTaskCompletedInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskToken': obj.taskToken,
    'result': obj.result,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfRespondActivityTaskFailedInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfRespondActivityTaskFailedInput(obj: SwfRespondActivityTaskFailedInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskToken': obj.taskToken,
    'reason': obj.reason,
    'details': obj.details,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfRespondDecisionTaskCompletedInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfRespondDecisionTaskCompletedInput(obj: SwfRespondDecisionTaskCompletedInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskToken': obj.taskToken,
    'decisions': obj.decisions?.map(y => toJson_SwfDecision(y)),
    'executionContext': obj.executionContext,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfSignalWorkflowExecutionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfSignalWorkflowExecutionInput(obj: SwfSignalWorkflowExecutionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'workflowId': obj.workflowId,
    'runId': obj.runId,
    'signalName': obj.signalName,
    'input': obj.input,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfStartWorkflowExecutionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfStartWorkflowExecutionInput(obj: SwfStartWorkflowExecutionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'workflowId': obj.workflowId,
    'workflowType': toJson_SwfWorkflowType(obj.workflowType),
    'taskList': toJson_SwfTaskList(obj.taskList),
    'taskPriority': obj.taskPriority,
    'input': obj.input,
    'executionStartToCloseTimeout': obj.executionStartToCloseTimeout,
    'tagList': obj.tagList?.map(y => y),
    'taskStartToCloseTimeout': obj.taskStartToCloseTimeout,
    'childPolicy': obj.childPolicy,
    'lambdaRole': obj.lambdaRole,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfRun' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfRun(obj: SwfRun | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'runId': obj.runId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfTagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfTagResourceInput(obj: SwfTagResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': obj.tags?.map(y => toJson_SwfResourceTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfTerminateWorkflowExecutionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfTerminateWorkflowExecutionInput(obj: SwfTerminateWorkflowExecutionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'workflowId': obj.workflowId,
    'runId': obj.runId,
    'reason': obj.reason,
    'details': obj.details,
    'childPolicy': obj.childPolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfUndeprecateActivityTypeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfUndeprecateActivityTypeInput(obj: SwfUndeprecateActivityTypeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'activityType': toJson_SwfActivityType(obj.activityType),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfUndeprecateDomainInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfUndeprecateDomainInput(obj: SwfUndeprecateDomainInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfUndeprecateWorkflowTypeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfUndeprecateWorkflowTypeInput(obj: SwfUndeprecateWorkflowTypeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domain': obj.domain,
    'workflowType': toJson_SwfWorkflowType(obj.workflowType),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfUntagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfUntagResourceInput(obj: SwfUntagResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfExecutionTimeFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfExecutionTimeFilter(obj: SwfExecutionTimeFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'oldestDate': obj.oldestDate,
    'latestDate': obj.latestDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfWorkflowExecutionFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfWorkflowExecutionFilter(obj: SwfWorkflowExecutionFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workflowId': obj.workflowId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfWorkflowTypeFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfWorkflowTypeFilter(obj: SwfWorkflowTypeFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfTagFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfTagFilter(obj: SwfTagFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tag': obj.tag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfCloseStatusFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfCloseStatusFilter(obj: SwfCloseStatusFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfTaskList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfTaskList(obj: SwfTaskList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfActivityType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfActivityType(obj: SwfActivityType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfWorkflowType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfWorkflowType(obj: SwfWorkflowType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfActivityTypeInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfActivityTypeInfo(obj: SwfActivityTypeInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'activityType': toJson_SwfActivityType(obj.activityType),
    'status': obj.status,
    'description': obj.description,
    'creationDate': obj.creationDate,
    'deprecationDate': obj.deprecationDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfActivityTypeConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfActivityTypeConfiguration(obj: SwfActivityTypeConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'defaultTaskStartToCloseTimeout': obj.defaultTaskStartToCloseTimeout,
    'defaultTaskHeartbeatTimeout': obj.defaultTaskHeartbeatTimeout,
    'defaultTaskList': toJson_SwfTaskList(obj.defaultTaskList),
    'defaultTaskPriority': obj.defaultTaskPriority,
    'defaultTaskScheduleToStartTimeout': obj.defaultTaskScheduleToStartTimeout,
    'defaultTaskScheduleToCloseTimeout': obj.defaultTaskScheduleToCloseTimeout,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfDomainInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfDomainInfo(obj: SwfDomainInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'status': obj.status,
    'description': obj.description,
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfDomainConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfDomainConfiguration(obj: SwfDomainConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workflowExecutionRetentionPeriodInDays': obj.workflowExecutionRetentionPeriodInDays,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfWorkflowExecution' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfWorkflowExecution(obj: SwfWorkflowExecution | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workflowId': obj.workflowId,
    'runId': obj.runId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfWorkflowExecutionInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfWorkflowExecutionInfo(obj: SwfWorkflowExecutionInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'execution': toJson_SwfWorkflowExecution(obj.execution),
    'workflowType': toJson_SwfWorkflowType(obj.workflowType),
    'startTimestamp': obj.startTimestamp,
    'closeTimestamp': obj.closeTimestamp,
    'executionStatus': obj.executionStatus,
    'closeStatus': obj.closeStatus,
    'parent': toJson_SwfWorkflowExecution(obj.parent),
    'tagList': obj.tagList?.map(y => y),
    'cancelRequested': obj.cancelRequested,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfWorkflowExecutionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfWorkflowExecutionConfiguration(obj: SwfWorkflowExecutionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskStartToCloseTimeout': obj.taskStartToCloseTimeout,
    'executionStartToCloseTimeout': obj.executionStartToCloseTimeout,
    'taskList': toJson_SwfTaskList(obj.taskList),
    'taskPriority': obj.taskPriority,
    'childPolicy': obj.childPolicy,
    'lambdaRole': obj.lambdaRole,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfWorkflowExecutionOpenCounts' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfWorkflowExecutionOpenCounts(obj: SwfWorkflowExecutionOpenCounts | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'openActivityTasks': obj.openActivityTasks,
    'openDecisionTasks': obj.openDecisionTasks,
    'openTimers': obj.openTimers,
    'openChildWorkflowExecutions': obj.openChildWorkflowExecutions,
    'openLambdaFunctions': obj.openLambdaFunctions,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfWorkflowTypeInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfWorkflowTypeInfo(obj: SwfWorkflowTypeInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workflowType': toJson_SwfWorkflowType(obj.workflowType),
    'status': obj.status,
    'description': obj.description,
    'creationDate': obj.creationDate,
    'deprecationDate': obj.deprecationDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfWorkflowTypeConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfWorkflowTypeConfiguration(obj: SwfWorkflowTypeConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'defaultTaskStartToCloseTimeout': obj.defaultTaskStartToCloseTimeout,
    'defaultExecutionStartToCloseTimeout': obj.defaultExecutionStartToCloseTimeout,
    'defaultTaskList': toJson_SwfTaskList(obj.defaultTaskList),
    'defaultTaskPriority': obj.defaultTaskPriority,
    'defaultChildPolicy': obj.defaultChildPolicy,
    'defaultLambdaRole': obj.defaultLambdaRole,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfHistoryEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfHistoryEvent(obj: SwfHistoryEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventTimestamp': obj.eventTimestamp,
    'eventType': obj.eventType,
    'eventId': obj.eventId,
    'workflowExecutionStartedEventAttributes': toJson_SwfWorkflowExecutionStartedEventAttributes(obj.workflowExecutionStartedEventAttributes),
    'workflowExecutionCompletedEventAttributes': toJson_SwfWorkflowExecutionCompletedEventAttributes(obj.workflowExecutionCompletedEventAttributes),
    'completeWorkflowExecutionFailedEventAttributes': toJson_SwfCompleteWorkflowExecutionFailedEventAttributes(obj.completeWorkflowExecutionFailedEventAttributes),
    'workflowExecutionFailedEventAttributes': toJson_SwfWorkflowExecutionFailedEventAttributes(obj.workflowExecutionFailedEventAttributes),
    'failWorkflowExecutionFailedEventAttributes': toJson_SwfFailWorkflowExecutionFailedEventAttributes(obj.failWorkflowExecutionFailedEventAttributes),
    'workflowExecutionTimedOutEventAttributes': toJson_SwfWorkflowExecutionTimedOutEventAttributes(obj.workflowExecutionTimedOutEventAttributes),
    'workflowExecutionCanceledEventAttributes': toJson_SwfWorkflowExecutionCanceledEventAttributes(obj.workflowExecutionCanceledEventAttributes),
    'cancelWorkflowExecutionFailedEventAttributes': toJson_SwfCancelWorkflowExecutionFailedEventAttributes(obj.cancelWorkflowExecutionFailedEventAttributes),
    'workflowExecutionContinuedAsNewEventAttributes': toJson_SwfWorkflowExecutionContinuedAsNewEventAttributes(obj.workflowExecutionContinuedAsNewEventAttributes),
    'continueAsNewWorkflowExecutionFailedEventAttributes': toJson_SwfContinueAsNewWorkflowExecutionFailedEventAttributes(obj.continueAsNewWorkflowExecutionFailedEventAttributes),
    'workflowExecutionTerminatedEventAttributes': toJson_SwfWorkflowExecutionTerminatedEventAttributes(obj.workflowExecutionTerminatedEventAttributes),
    'workflowExecutionCancelRequestedEventAttributes': toJson_SwfWorkflowExecutionCancelRequestedEventAttributes(obj.workflowExecutionCancelRequestedEventAttributes),
    'decisionTaskScheduledEventAttributes': toJson_SwfDecisionTaskScheduledEventAttributes(obj.decisionTaskScheduledEventAttributes),
    'decisionTaskStartedEventAttributes': toJson_SwfDecisionTaskStartedEventAttributes(obj.decisionTaskStartedEventAttributes),
    'decisionTaskCompletedEventAttributes': toJson_SwfDecisionTaskCompletedEventAttributes(obj.decisionTaskCompletedEventAttributes),
    'decisionTaskTimedOutEventAttributes': toJson_SwfDecisionTaskTimedOutEventAttributes(obj.decisionTaskTimedOutEventAttributes),
    'activityTaskScheduledEventAttributes': toJson_SwfActivityTaskScheduledEventAttributes(obj.activityTaskScheduledEventAttributes),
    'activityTaskStartedEventAttributes': toJson_SwfActivityTaskStartedEventAttributes(obj.activityTaskStartedEventAttributes),
    'activityTaskCompletedEventAttributes': toJson_SwfActivityTaskCompletedEventAttributes(obj.activityTaskCompletedEventAttributes),
    'activityTaskFailedEventAttributes': toJson_SwfActivityTaskFailedEventAttributes(obj.activityTaskFailedEventAttributes),
    'activityTaskTimedOutEventAttributes': toJson_SwfActivityTaskTimedOutEventAttributes(obj.activityTaskTimedOutEventAttributes),
    'activityTaskCanceledEventAttributes': toJson_SwfActivityTaskCanceledEventAttributes(obj.activityTaskCanceledEventAttributes),
    'activityTaskCancelRequestedEventAttributes': toJson_SwfActivityTaskCancelRequestedEventAttributes(obj.activityTaskCancelRequestedEventAttributes),
    'workflowExecutionSignaledEventAttributes': toJson_SwfWorkflowExecutionSignaledEventAttributes(obj.workflowExecutionSignaledEventAttributes),
    'markerRecordedEventAttributes': toJson_SwfMarkerRecordedEventAttributes(obj.markerRecordedEventAttributes),
    'recordMarkerFailedEventAttributes': toJson_SwfRecordMarkerFailedEventAttributes(obj.recordMarkerFailedEventAttributes),
    'timerStartedEventAttributes': toJson_SwfTimerStartedEventAttributes(obj.timerStartedEventAttributes),
    'timerFiredEventAttributes': toJson_SwfTimerFiredEventAttributes(obj.timerFiredEventAttributes),
    'timerCanceledEventAttributes': toJson_SwfTimerCanceledEventAttributes(obj.timerCanceledEventAttributes),
    'startChildWorkflowExecutionInitiatedEventAttributes': toJson_SwfStartChildWorkflowExecutionInitiatedEventAttributes(obj.startChildWorkflowExecutionInitiatedEventAttributes),
    'childWorkflowExecutionStartedEventAttributes': toJson_SwfChildWorkflowExecutionStartedEventAttributes(obj.childWorkflowExecutionStartedEventAttributes),
    'childWorkflowExecutionCompletedEventAttributes': toJson_SwfChildWorkflowExecutionCompletedEventAttributes(obj.childWorkflowExecutionCompletedEventAttributes),
    'childWorkflowExecutionFailedEventAttributes': toJson_SwfChildWorkflowExecutionFailedEventAttributes(obj.childWorkflowExecutionFailedEventAttributes),
    'childWorkflowExecutionTimedOutEventAttributes': toJson_SwfChildWorkflowExecutionTimedOutEventAttributes(obj.childWorkflowExecutionTimedOutEventAttributes),
    'childWorkflowExecutionCanceledEventAttributes': toJson_SwfChildWorkflowExecutionCanceledEventAttributes(obj.childWorkflowExecutionCanceledEventAttributes),
    'childWorkflowExecutionTerminatedEventAttributes': toJson_SwfChildWorkflowExecutionTerminatedEventAttributes(obj.childWorkflowExecutionTerminatedEventAttributes),
    'signalExternalWorkflowExecutionInitiatedEventAttributes': toJson_SwfSignalExternalWorkflowExecutionInitiatedEventAttributes(obj.signalExternalWorkflowExecutionInitiatedEventAttributes),
    'externalWorkflowExecutionSignaledEventAttributes': toJson_SwfExternalWorkflowExecutionSignaledEventAttributes(obj.externalWorkflowExecutionSignaledEventAttributes),
    'signalExternalWorkflowExecutionFailedEventAttributes': toJson_SwfSignalExternalWorkflowExecutionFailedEventAttributes(obj.signalExternalWorkflowExecutionFailedEventAttributes),
    'externalWorkflowExecutionCancelRequestedEventAttributes': toJson_SwfExternalWorkflowExecutionCancelRequestedEventAttributes(obj.externalWorkflowExecutionCancelRequestedEventAttributes),
    'requestCancelExternalWorkflowExecutionInitiatedEventAttributes': toJson_SwfRequestCancelExternalWorkflowExecutionInitiatedEventAttributes(obj.requestCancelExternalWorkflowExecutionInitiatedEventAttributes),
    'requestCancelExternalWorkflowExecutionFailedEventAttributes': toJson_SwfRequestCancelExternalWorkflowExecutionFailedEventAttributes(obj.requestCancelExternalWorkflowExecutionFailedEventAttributes),
    'scheduleActivityTaskFailedEventAttributes': toJson_SwfScheduleActivityTaskFailedEventAttributes(obj.scheduleActivityTaskFailedEventAttributes),
    'requestCancelActivityTaskFailedEventAttributes': toJson_SwfRequestCancelActivityTaskFailedEventAttributes(obj.requestCancelActivityTaskFailedEventAttributes),
    'startTimerFailedEventAttributes': toJson_SwfStartTimerFailedEventAttributes(obj.startTimerFailedEventAttributes),
    'cancelTimerFailedEventAttributes': toJson_SwfCancelTimerFailedEventAttributes(obj.cancelTimerFailedEventAttributes),
    'startChildWorkflowExecutionFailedEventAttributes': toJson_SwfStartChildWorkflowExecutionFailedEventAttributes(obj.startChildWorkflowExecutionFailedEventAttributes),
    'lambdaFunctionScheduledEventAttributes': toJson_SwfLambdaFunctionScheduledEventAttributes(obj.lambdaFunctionScheduledEventAttributes),
    'lambdaFunctionStartedEventAttributes': toJson_SwfLambdaFunctionStartedEventAttributes(obj.lambdaFunctionStartedEventAttributes),
    'lambdaFunctionCompletedEventAttributes': toJson_SwfLambdaFunctionCompletedEventAttributes(obj.lambdaFunctionCompletedEventAttributes),
    'lambdaFunctionFailedEventAttributes': toJson_SwfLambdaFunctionFailedEventAttributes(obj.lambdaFunctionFailedEventAttributes),
    'lambdaFunctionTimedOutEventAttributes': toJson_SwfLambdaFunctionTimedOutEventAttributes(obj.lambdaFunctionTimedOutEventAttributes),
    'scheduleLambdaFunctionFailedEventAttributes': toJson_SwfScheduleLambdaFunctionFailedEventAttributes(obj.scheduleLambdaFunctionFailedEventAttributes),
    'startLambdaFunctionFailedEventAttributes': toJson_SwfStartLambdaFunctionFailedEventAttributes(obj.startLambdaFunctionFailedEventAttributes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfResourceTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfResourceTag(obj: SwfResourceTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'key': obj.key,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfDecision' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfDecision(obj: SwfDecision | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'decisionType': obj.decisionType,
    'scheduleActivityTaskDecisionAttributes': toJson_SwfScheduleActivityTaskDecisionAttributes(obj.scheduleActivityTaskDecisionAttributes),
    'requestCancelActivityTaskDecisionAttributes': toJson_SwfRequestCancelActivityTaskDecisionAttributes(obj.requestCancelActivityTaskDecisionAttributes),
    'completeWorkflowExecutionDecisionAttributes': toJson_SwfCompleteWorkflowExecutionDecisionAttributes(obj.completeWorkflowExecutionDecisionAttributes),
    'failWorkflowExecutionDecisionAttributes': toJson_SwfFailWorkflowExecutionDecisionAttributes(obj.failWorkflowExecutionDecisionAttributes),
    'cancelWorkflowExecutionDecisionAttributes': toJson_SwfCancelWorkflowExecutionDecisionAttributes(obj.cancelWorkflowExecutionDecisionAttributes),
    'continueAsNewWorkflowExecutionDecisionAttributes': toJson_SwfContinueAsNewWorkflowExecutionDecisionAttributes(obj.continueAsNewWorkflowExecutionDecisionAttributes),
    'recordMarkerDecisionAttributes': toJson_SwfRecordMarkerDecisionAttributes(obj.recordMarkerDecisionAttributes),
    'startTimerDecisionAttributes': toJson_SwfStartTimerDecisionAttributes(obj.startTimerDecisionAttributes),
    'cancelTimerDecisionAttributes': toJson_SwfCancelTimerDecisionAttributes(obj.cancelTimerDecisionAttributes),
    'signalExternalWorkflowExecutionDecisionAttributes': toJson_SwfSignalExternalWorkflowExecutionDecisionAttributes(obj.signalExternalWorkflowExecutionDecisionAttributes),
    'requestCancelExternalWorkflowExecutionDecisionAttributes': toJson_SwfRequestCancelExternalWorkflowExecutionDecisionAttributes(obj.requestCancelExternalWorkflowExecutionDecisionAttributes),
    'startChildWorkflowExecutionDecisionAttributes': toJson_SwfStartChildWorkflowExecutionDecisionAttributes(obj.startChildWorkflowExecutionDecisionAttributes),
    'scheduleLambdaFunctionDecisionAttributes': toJson_SwfScheduleLambdaFunctionDecisionAttributes(obj.scheduleLambdaFunctionDecisionAttributes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfWorkflowExecutionStartedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfWorkflowExecutionStartedEventAttributes(obj: SwfWorkflowExecutionStartedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'input': obj.input,
    'executionStartToCloseTimeout': obj.executionStartToCloseTimeout,
    'taskStartToCloseTimeout': obj.taskStartToCloseTimeout,
    'childPolicy': obj.childPolicy,
    'taskList': toJson_SwfTaskList(obj.taskList),
    'taskPriority': obj.taskPriority,
    'workflowType': toJson_SwfWorkflowType(obj.workflowType),
    'tagList': obj.tagList?.map(y => y),
    'continuedExecutionRunId': obj.continuedExecutionRunId,
    'parentWorkflowExecution': toJson_SwfWorkflowExecution(obj.parentWorkflowExecution),
    'parentInitiatedEventId': obj.parentInitiatedEventId,
    'lambdaRole': obj.lambdaRole,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfWorkflowExecutionCompletedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfWorkflowExecutionCompletedEventAttributes(obj: SwfWorkflowExecutionCompletedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'result': obj.result,
    'decisionTaskCompletedEventId': obj.decisionTaskCompletedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfCompleteWorkflowExecutionFailedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfCompleteWorkflowExecutionFailedEventAttributes(obj: SwfCompleteWorkflowExecutionFailedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cause': obj.cause,
    'decisionTaskCompletedEventId': obj.decisionTaskCompletedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfWorkflowExecutionFailedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfWorkflowExecutionFailedEventAttributes(obj: SwfWorkflowExecutionFailedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reason': obj.reason,
    'details': obj.details,
    'decisionTaskCompletedEventId': obj.decisionTaskCompletedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfFailWorkflowExecutionFailedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfFailWorkflowExecutionFailedEventAttributes(obj: SwfFailWorkflowExecutionFailedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cause': obj.cause,
    'decisionTaskCompletedEventId': obj.decisionTaskCompletedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfWorkflowExecutionTimedOutEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfWorkflowExecutionTimedOutEventAttributes(obj: SwfWorkflowExecutionTimedOutEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timeoutType': obj.timeoutType,
    'childPolicy': obj.childPolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfWorkflowExecutionCanceledEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfWorkflowExecutionCanceledEventAttributes(obj: SwfWorkflowExecutionCanceledEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'details': obj.details,
    'decisionTaskCompletedEventId': obj.decisionTaskCompletedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfCancelWorkflowExecutionFailedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfCancelWorkflowExecutionFailedEventAttributes(obj: SwfCancelWorkflowExecutionFailedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cause': obj.cause,
    'decisionTaskCompletedEventId': obj.decisionTaskCompletedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfWorkflowExecutionContinuedAsNewEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfWorkflowExecutionContinuedAsNewEventAttributes(obj: SwfWorkflowExecutionContinuedAsNewEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'input': obj.input,
    'decisionTaskCompletedEventId': obj.decisionTaskCompletedEventId,
    'newExecutionRunId': obj.newExecutionRunId,
    'executionStartToCloseTimeout': obj.executionStartToCloseTimeout,
    'taskList': toJson_SwfTaskList(obj.taskList),
    'taskPriority': obj.taskPriority,
    'taskStartToCloseTimeout': obj.taskStartToCloseTimeout,
    'childPolicy': obj.childPolicy,
    'tagList': obj.tagList?.map(y => y),
    'workflowType': toJson_SwfWorkflowType(obj.workflowType),
    'lambdaRole': obj.lambdaRole,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfContinueAsNewWorkflowExecutionFailedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfContinueAsNewWorkflowExecutionFailedEventAttributes(obj: SwfContinueAsNewWorkflowExecutionFailedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cause': obj.cause,
    'decisionTaskCompletedEventId': obj.decisionTaskCompletedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfWorkflowExecutionTerminatedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfWorkflowExecutionTerminatedEventAttributes(obj: SwfWorkflowExecutionTerminatedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reason': obj.reason,
    'details': obj.details,
    'childPolicy': obj.childPolicy,
    'cause': obj.cause,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfWorkflowExecutionCancelRequestedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfWorkflowExecutionCancelRequestedEventAttributes(obj: SwfWorkflowExecutionCancelRequestedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'externalWorkflowExecution': toJson_SwfWorkflowExecution(obj.externalWorkflowExecution),
    'externalInitiatedEventId': obj.externalInitiatedEventId,
    'cause': obj.cause,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfDecisionTaskScheduledEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfDecisionTaskScheduledEventAttributes(obj: SwfDecisionTaskScheduledEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskList': toJson_SwfTaskList(obj.taskList),
    'taskPriority': obj.taskPriority,
    'startToCloseTimeout': obj.startToCloseTimeout,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfDecisionTaskStartedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfDecisionTaskStartedEventAttributes(obj: SwfDecisionTaskStartedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'identity': obj.identity,
    'scheduledEventId': obj.scheduledEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfDecisionTaskCompletedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfDecisionTaskCompletedEventAttributes(obj: SwfDecisionTaskCompletedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'executionContext': obj.executionContext,
    'scheduledEventId': obj.scheduledEventId,
    'startedEventId': obj.startedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfDecisionTaskTimedOutEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfDecisionTaskTimedOutEventAttributes(obj: SwfDecisionTaskTimedOutEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timeoutType': obj.timeoutType,
    'scheduledEventId': obj.scheduledEventId,
    'startedEventId': obj.startedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfActivityTaskScheduledEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfActivityTaskScheduledEventAttributes(obj: SwfActivityTaskScheduledEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'activityType': toJson_SwfActivityType(obj.activityType),
    'activityId': obj.activityId,
    'input': obj.input,
    'control': obj.control,
    'scheduleToStartTimeout': obj.scheduleToStartTimeout,
    'scheduleToCloseTimeout': obj.scheduleToCloseTimeout,
    'startToCloseTimeout': obj.startToCloseTimeout,
    'taskList': toJson_SwfTaskList(obj.taskList),
    'taskPriority': obj.taskPriority,
    'decisionTaskCompletedEventId': obj.decisionTaskCompletedEventId,
    'heartbeatTimeout': obj.heartbeatTimeout,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfActivityTaskStartedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfActivityTaskStartedEventAttributes(obj: SwfActivityTaskStartedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'identity': obj.identity,
    'scheduledEventId': obj.scheduledEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfActivityTaskCompletedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfActivityTaskCompletedEventAttributes(obj: SwfActivityTaskCompletedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'result': obj.result,
    'scheduledEventId': obj.scheduledEventId,
    'startedEventId': obj.startedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfActivityTaskFailedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfActivityTaskFailedEventAttributes(obj: SwfActivityTaskFailedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reason': obj.reason,
    'details': obj.details,
    'scheduledEventId': obj.scheduledEventId,
    'startedEventId': obj.startedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfActivityTaskTimedOutEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfActivityTaskTimedOutEventAttributes(obj: SwfActivityTaskTimedOutEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timeoutType': obj.timeoutType,
    'scheduledEventId': obj.scheduledEventId,
    'startedEventId': obj.startedEventId,
    'details': obj.details,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfActivityTaskCanceledEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfActivityTaskCanceledEventAttributes(obj: SwfActivityTaskCanceledEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'details': obj.details,
    'scheduledEventId': obj.scheduledEventId,
    'startedEventId': obj.startedEventId,
    'latestCancelRequestedEventId': obj.latestCancelRequestedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfActivityTaskCancelRequestedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfActivityTaskCancelRequestedEventAttributes(obj: SwfActivityTaskCancelRequestedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'decisionTaskCompletedEventId': obj.decisionTaskCompletedEventId,
    'activityId': obj.activityId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfWorkflowExecutionSignaledEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfWorkflowExecutionSignaledEventAttributes(obj: SwfWorkflowExecutionSignaledEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'signalName': obj.signalName,
    'input': obj.input,
    'externalWorkflowExecution': toJson_SwfWorkflowExecution(obj.externalWorkflowExecution),
    'externalInitiatedEventId': obj.externalInitiatedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfMarkerRecordedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfMarkerRecordedEventAttributes(obj: SwfMarkerRecordedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'markerName': obj.markerName,
    'details': obj.details,
    'decisionTaskCompletedEventId': obj.decisionTaskCompletedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfRecordMarkerFailedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfRecordMarkerFailedEventAttributes(obj: SwfRecordMarkerFailedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'markerName': obj.markerName,
    'cause': obj.cause,
    'decisionTaskCompletedEventId': obj.decisionTaskCompletedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfTimerStartedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfTimerStartedEventAttributes(obj: SwfTimerStartedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timerId': obj.timerId,
    'control': obj.control,
    'startToFireTimeout': obj.startToFireTimeout,
    'decisionTaskCompletedEventId': obj.decisionTaskCompletedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfTimerFiredEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfTimerFiredEventAttributes(obj: SwfTimerFiredEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timerId': obj.timerId,
    'startedEventId': obj.startedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfTimerCanceledEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfTimerCanceledEventAttributes(obj: SwfTimerCanceledEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timerId': obj.timerId,
    'startedEventId': obj.startedEventId,
    'decisionTaskCompletedEventId': obj.decisionTaskCompletedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfStartChildWorkflowExecutionInitiatedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfStartChildWorkflowExecutionInitiatedEventAttributes(obj: SwfStartChildWorkflowExecutionInitiatedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workflowId': obj.workflowId,
    'workflowType': toJson_SwfWorkflowType(obj.workflowType),
    'control': obj.control,
    'input': obj.input,
    'executionStartToCloseTimeout': obj.executionStartToCloseTimeout,
    'taskList': toJson_SwfTaskList(obj.taskList),
    'taskPriority': obj.taskPriority,
    'decisionTaskCompletedEventId': obj.decisionTaskCompletedEventId,
    'childPolicy': obj.childPolicy,
    'taskStartToCloseTimeout': obj.taskStartToCloseTimeout,
    'tagList': obj.tagList?.map(y => y),
    'lambdaRole': obj.lambdaRole,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfChildWorkflowExecutionStartedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfChildWorkflowExecutionStartedEventAttributes(obj: SwfChildWorkflowExecutionStartedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workflowExecution': toJson_SwfWorkflowExecution(obj.workflowExecution),
    'workflowType': toJson_SwfWorkflowType(obj.workflowType),
    'initiatedEventId': obj.initiatedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfChildWorkflowExecutionCompletedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfChildWorkflowExecutionCompletedEventAttributes(obj: SwfChildWorkflowExecutionCompletedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workflowExecution': toJson_SwfWorkflowExecution(obj.workflowExecution),
    'workflowType': toJson_SwfWorkflowType(obj.workflowType),
    'result': obj.result,
    'initiatedEventId': obj.initiatedEventId,
    'startedEventId': obj.startedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfChildWorkflowExecutionFailedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfChildWorkflowExecutionFailedEventAttributes(obj: SwfChildWorkflowExecutionFailedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workflowExecution': toJson_SwfWorkflowExecution(obj.workflowExecution),
    'workflowType': toJson_SwfWorkflowType(obj.workflowType),
    'reason': obj.reason,
    'details': obj.details,
    'initiatedEventId': obj.initiatedEventId,
    'startedEventId': obj.startedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfChildWorkflowExecutionTimedOutEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfChildWorkflowExecutionTimedOutEventAttributes(obj: SwfChildWorkflowExecutionTimedOutEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workflowExecution': toJson_SwfWorkflowExecution(obj.workflowExecution),
    'workflowType': toJson_SwfWorkflowType(obj.workflowType),
    'timeoutType': obj.timeoutType,
    'initiatedEventId': obj.initiatedEventId,
    'startedEventId': obj.startedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfChildWorkflowExecutionCanceledEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfChildWorkflowExecutionCanceledEventAttributes(obj: SwfChildWorkflowExecutionCanceledEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workflowExecution': toJson_SwfWorkflowExecution(obj.workflowExecution),
    'workflowType': toJson_SwfWorkflowType(obj.workflowType),
    'details': obj.details,
    'initiatedEventId': obj.initiatedEventId,
    'startedEventId': obj.startedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfChildWorkflowExecutionTerminatedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfChildWorkflowExecutionTerminatedEventAttributes(obj: SwfChildWorkflowExecutionTerminatedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workflowExecution': toJson_SwfWorkflowExecution(obj.workflowExecution),
    'workflowType': toJson_SwfWorkflowType(obj.workflowType),
    'initiatedEventId': obj.initiatedEventId,
    'startedEventId': obj.startedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfSignalExternalWorkflowExecutionInitiatedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfSignalExternalWorkflowExecutionInitiatedEventAttributes(obj: SwfSignalExternalWorkflowExecutionInitiatedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workflowId': obj.workflowId,
    'runId': obj.runId,
    'signalName': obj.signalName,
    'input': obj.input,
    'decisionTaskCompletedEventId': obj.decisionTaskCompletedEventId,
    'control': obj.control,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfExternalWorkflowExecutionSignaledEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfExternalWorkflowExecutionSignaledEventAttributes(obj: SwfExternalWorkflowExecutionSignaledEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workflowExecution': toJson_SwfWorkflowExecution(obj.workflowExecution),
    'initiatedEventId': obj.initiatedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfSignalExternalWorkflowExecutionFailedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfSignalExternalWorkflowExecutionFailedEventAttributes(obj: SwfSignalExternalWorkflowExecutionFailedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workflowId': obj.workflowId,
    'runId': obj.runId,
    'cause': obj.cause,
    'initiatedEventId': obj.initiatedEventId,
    'decisionTaskCompletedEventId': obj.decisionTaskCompletedEventId,
    'control': obj.control,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfExternalWorkflowExecutionCancelRequestedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfExternalWorkflowExecutionCancelRequestedEventAttributes(obj: SwfExternalWorkflowExecutionCancelRequestedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workflowExecution': toJson_SwfWorkflowExecution(obj.workflowExecution),
    'initiatedEventId': obj.initiatedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfRequestCancelExternalWorkflowExecutionInitiatedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfRequestCancelExternalWorkflowExecutionInitiatedEventAttributes(obj: SwfRequestCancelExternalWorkflowExecutionInitiatedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workflowId': obj.workflowId,
    'runId': obj.runId,
    'decisionTaskCompletedEventId': obj.decisionTaskCompletedEventId,
    'control': obj.control,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfRequestCancelExternalWorkflowExecutionFailedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfRequestCancelExternalWorkflowExecutionFailedEventAttributes(obj: SwfRequestCancelExternalWorkflowExecutionFailedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workflowId': obj.workflowId,
    'runId': obj.runId,
    'cause': obj.cause,
    'initiatedEventId': obj.initiatedEventId,
    'decisionTaskCompletedEventId': obj.decisionTaskCompletedEventId,
    'control': obj.control,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfScheduleActivityTaskFailedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfScheduleActivityTaskFailedEventAttributes(obj: SwfScheduleActivityTaskFailedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'activityType': toJson_SwfActivityType(obj.activityType),
    'activityId': obj.activityId,
    'cause': obj.cause,
    'decisionTaskCompletedEventId': obj.decisionTaskCompletedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfRequestCancelActivityTaskFailedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfRequestCancelActivityTaskFailedEventAttributes(obj: SwfRequestCancelActivityTaskFailedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'activityId': obj.activityId,
    'cause': obj.cause,
    'decisionTaskCompletedEventId': obj.decisionTaskCompletedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfStartTimerFailedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfStartTimerFailedEventAttributes(obj: SwfStartTimerFailedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timerId': obj.timerId,
    'cause': obj.cause,
    'decisionTaskCompletedEventId': obj.decisionTaskCompletedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfCancelTimerFailedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfCancelTimerFailedEventAttributes(obj: SwfCancelTimerFailedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timerId': obj.timerId,
    'cause': obj.cause,
    'decisionTaskCompletedEventId': obj.decisionTaskCompletedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfStartChildWorkflowExecutionFailedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfStartChildWorkflowExecutionFailedEventAttributes(obj: SwfStartChildWorkflowExecutionFailedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workflowType': toJson_SwfWorkflowType(obj.workflowType),
    'cause': obj.cause,
    'workflowId': obj.workflowId,
    'initiatedEventId': obj.initiatedEventId,
    'decisionTaskCompletedEventId': obj.decisionTaskCompletedEventId,
    'control': obj.control,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfLambdaFunctionScheduledEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfLambdaFunctionScheduledEventAttributes(obj: SwfLambdaFunctionScheduledEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'control': obj.control,
    'input': obj.input,
    'startToCloseTimeout': obj.startToCloseTimeout,
    'decisionTaskCompletedEventId': obj.decisionTaskCompletedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfLambdaFunctionStartedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfLambdaFunctionStartedEventAttributes(obj: SwfLambdaFunctionStartedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'scheduledEventId': obj.scheduledEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfLambdaFunctionCompletedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfLambdaFunctionCompletedEventAttributes(obj: SwfLambdaFunctionCompletedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'scheduledEventId': obj.scheduledEventId,
    'startedEventId': obj.startedEventId,
    'result': obj.result,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfLambdaFunctionFailedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfLambdaFunctionFailedEventAttributes(obj: SwfLambdaFunctionFailedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'scheduledEventId': obj.scheduledEventId,
    'startedEventId': obj.startedEventId,
    'reason': obj.reason,
    'details': obj.details,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfLambdaFunctionTimedOutEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfLambdaFunctionTimedOutEventAttributes(obj: SwfLambdaFunctionTimedOutEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'scheduledEventId': obj.scheduledEventId,
    'startedEventId': obj.startedEventId,
    'timeoutType': obj.timeoutType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfScheduleLambdaFunctionFailedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfScheduleLambdaFunctionFailedEventAttributes(obj: SwfScheduleLambdaFunctionFailedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'cause': obj.cause,
    'decisionTaskCompletedEventId': obj.decisionTaskCompletedEventId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfStartLambdaFunctionFailedEventAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfStartLambdaFunctionFailedEventAttributes(obj: SwfStartLambdaFunctionFailedEventAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'scheduledEventId': obj.scheduledEventId,
    'cause': obj.cause,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfScheduleActivityTaskDecisionAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfScheduleActivityTaskDecisionAttributes(obj: SwfScheduleActivityTaskDecisionAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'activityType': toJson_SwfActivityType(obj.activityType),
    'activityId': obj.activityId,
    'control': obj.control,
    'input': obj.input,
    'scheduleToCloseTimeout': obj.scheduleToCloseTimeout,
    'taskList': toJson_SwfTaskList(obj.taskList),
    'taskPriority': obj.taskPriority,
    'scheduleToStartTimeout': obj.scheduleToStartTimeout,
    'startToCloseTimeout': obj.startToCloseTimeout,
    'heartbeatTimeout': obj.heartbeatTimeout,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfRequestCancelActivityTaskDecisionAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfRequestCancelActivityTaskDecisionAttributes(obj: SwfRequestCancelActivityTaskDecisionAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'activityId': obj.activityId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfCompleteWorkflowExecutionDecisionAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfCompleteWorkflowExecutionDecisionAttributes(obj: SwfCompleteWorkflowExecutionDecisionAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'result': obj.result,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfFailWorkflowExecutionDecisionAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfFailWorkflowExecutionDecisionAttributes(obj: SwfFailWorkflowExecutionDecisionAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reason': obj.reason,
    'details': obj.details,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfCancelWorkflowExecutionDecisionAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfCancelWorkflowExecutionDecisionAttributes(obj: SwfCancelWorkflowExecutionDecisionAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'details': obj.details,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfContinueAsNewWorkflowExecutionDecisionAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfContinueAsNewWorkflowExecutionDecisionAttributes(obj: SwfContinueAsNewWorkflowExecutionDecisionAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'input': obj.input,
    'executionStartToCloseTimeout': obj.executionStartToCloseTimeout,
    'taskList': toJson_SwfTaskList(obj.taskList),
    'taskPriority': obj.taskPriority,
    'taskStartToCloseTimeout': obj.taskStartToCloseTimeout,
    'childPolicy': obj.childPolicy,
    'tagList': obj.tagList?.map(y => y),
    'workflowTypeVersion': obj.workflowTypeVersion,
    'lambdaRole': obj.lambdaRole,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfRecordMarkerDecisionAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfRecordMarkerDecisionAttributes(obj: SwfRecordMarkerDecisionAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'markerName': obj.markerName,
    'details': obj.details,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfStartTimerDecisionAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfStartTimerDecisionAttributes(obj: SwfStartTimerDecisionAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timerId': obj.timerId,
    'control': obj.control,
    'startToFireTimeout': obj.startToFireTimeout,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfCancelTimerDecisionAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfCancelTimerDecisionAttributes(obj: SwfCancelTimerDecisionAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timerId': obj.timerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfSignalExternalWorkflowExecutionDecisionAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfSignalExternalWorkflowExecutionDecisionAttributes(obj: SwfSignalExternalWorkflowExecutionDecisionAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workflowId': obj.workflowId,
    'runId': obj.runId,
    'signalName': obj.signalName,
    'input': obj.input,
    'control': obj.control,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfRequestCancelExternalWorkflowExecutionDecisionAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfRequestCancelExternalWorkflowExecutionDecisionAttributes(obj: SwfRequestCancelExternalWorkflowExecutionDecisionAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workflowId': obj.workflowId,
    'runId': obj.runId,
    'control': obj.control,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'SwfStartChildWorkflowExecutionDecisionAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfStartChildWorkflowExecutionDecisionAttributes(obj: SwfStartChildWorkflowExecutionDecisionAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workflowType': toJson_SwfWorkflowType(obj.workflowType),
    'workflowId': obj.workflowId,
    'control': obj.control,
    'input': obj.input,
    'executionStartToCloseTimeout': obj.executionStartToCloseTimeout,
    'taskList': toJson_SwfTaskList(obj.taskList),
    'taskPriority': obj.taskPriority,
    'taskStartToCloseTimeout': obj.taskStartToCloseTimeout,
    'childPolicy': obj.childPolicy,
    'tagList': obj.tagList?.map(y => y),
    'lambdaRole': obj.lambdaRole,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'SwfScheduleLambdaFunctionDecisionAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SwfScheduleLambdaFunctionDecisionAttributes(obj: SwfScheduleLambdaFunctionDecisionAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'control': obj.control,
    'input': obj.input,
    'startToCloseTimeout': obj.startToCloseTimeout,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
