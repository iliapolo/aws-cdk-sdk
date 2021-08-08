/**
 * @schema CodeGuruProfilerAddNotificationChannelsRequest
 */
export interface CodeGuruProfilerAddNotificationChannelsRequest {
  /**
   * @schema CodeGuruProfilerAddNotificationChannelsRequest#channels
   */
  readonly channels: CodeGuruProfilerChannel[];

  /**
   * @schema CodeGuruProfilerAddNotificationChannelsRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerAddNotificationChannelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerAddNotificationChannelsRequest(obj: CodeGuruProfilerAddNotificationChannelsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'channels': obj.channels?.map(y => toJson_CodeGuruProfilerChannel(y)),
    'profilingGroupName': obj.profilingGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerAddNotificationChannelsResponse
 */
export interface CodeGuruProfilerAddNotificationChannelsResponse {
  /**
   * @schema CodeGuruProfilerAddNotificationChannelsResponse#notificationConfiguration
   */
  readonly notificationConfiguration?: CodeGuruProfilerNotificationConfiguration;

}

/**
 * Converts an object of type 'CodeGuruProfilerAddNotificationChannelsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerAddNotificationChannelsResponse(obj: CodeGuruProfilerAddNotificationChannelsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'notificationConfiguration': toJson_CodeGuruProfilerNotificationConfiguration(obj.notificationConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerBatchGetFrameMetricDataRequest
 */
export interface CodeGuruProfilerBatchGetFrameMetricDataRequest {
  /**
   * @schema CodeGuruProfilerBatchGetFrameMetricDataRequest#endTime
   */
  readonly endTime?: string;

  /**
   * @schema CodeGuruProfilerBatchGetFrameMetricDataRequest#frameMetrics
   */
  readonly frameMetrics?: CodeGuruProfilerFrameMetric[];

  /**
   * @schema CodeGuruProfilerBatchGetFrameMetricDataRequest#period
   */
  readonly period?: string;

  /**
   * @schema CodeGuruProfilerBatchGetFrameMetricDataRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

  /**
   * @schema CodeGuruProfilerBatchGetFrameMetricDataRequest#startTime
   */
  readonly startTime?: string;

  /**
   * @schema CodeGuruProfilerBatchGetFrameMetricDataRequest#targetResolution
   */
  readonly targetResolution?: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerBatchGetFrameMetricDataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerBatchGetFrameMetricDataRequest(obj: CodeGuruProfilerBatchGetFrameMetricDataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'endTime': obj.endTime,
    'frameMetrics': obj.frameMetrics?.map(y => toJson_CodeGuruProfilerFrameMetric(y)),
    'period': obj.period,
    'profilingGroupName': obj.profilingGroupName,
    'startTime': obj.startTime,
    'targetResolution': obj.targetResolution,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerBatchGetFrameMetricDataResponse
 */
export interface CodeGuruProfilerBatchGetFrameMetricDataResponse {
  /**
   * @schema CodeGuruProfilerBatchGetFrameMetricDataResponse#endTime
   */
  readonly endTime: string;

  /**
   * @schema CodeGuruProfilerBatchGetFrameMetricDataResponse#endTimes
   */
  readonly endTimes: CodeGuruProfilerTimestampStructure[];

  /**
   * @schema CodeGuruProfilerBatchGetFrameMetricDataResponse#frameMetricData
   */
  readonly frameMetricData: CodeGuruProfilerFrameMetricDatum[];

  /**
   * @schema CodeGuruProfilerBatchGetFrameMetricDataResponse#resolution
   */
  readonly resolution: string;

  /**
   * @schema CodeGuruProfilerBatchGetFrameMetricDataResponse#startTime
   */
  readonly startTime: string;

  /**
   * @schema CodeGuruProfilerBatchGetFrameMetricDataResponse#unprocessedEndTimes
   */
  readonly unprocessedEndTimes: { [key: string]: CodeGuruProfilerTimestampStructure[] };

}

/**
 * Converts an object of type 'CodeGuruProfilerBatchGetFrameMetricDataResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerBatchGetFrameMetricDataResponse(obj: CodeGuruProfilerBatchGetFrameMetricDataResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'endTime': obj.endTime,
    'endTimes': obj.endTimes?.map(y => toJson_CodeGuruProfilerTimestampStructure(y)),
    'frameMetricData': obj.frameMetricData?.map(y => toJson_CodeGuruProfilerFrameMetricDatum(y)),
    'resolution': obj.resolution,
    'startTime': obj.startTime,
    'unprocessedEndTimes': ((obj.unprocessedEndTimes) === undefined) ? undefined : (Object.entries(obj.unprocessedEndTimes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => toJson_CodeGuruProfilerTimestampStructure(y)) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerConfigureAgentRequest
 */
export interface CodeGuruProfilerConfigureAgentRequest {
  /**
   * @schema CodeGuruProfilerConfigureAgentRequest#fleetInstanceId
   */
  readonly fleetInstanceId?: string;

  /**
   * @schema CodeGuruProfilerConfigureAgentRequest#metadata
   */
  readonly metadata?: { [key: string]: string };

  /**
   * @schema CodeGuruProfilerConfigureAgentRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerConfigureAgentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerConfigureAgentRequest(obj: CodeGuruProfilerConfigureAgentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fleetInstanceId': obj.fleetInstanceId,
    'metadata': ((obj.metadata) === undefined) ? undefined : (Object.entries(obj.metadata).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'profilingGroupName': obj.profilingGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerConfigureAgentResponse
 */
export interface CodeGuruProfilerConfigureAgentResponse {
  /**
   * @schema CodeGuruProfilerConfigureAgentResponse#configuration
   */
  readonly configuration: CodeGuruProfilerAgentConfiguration;

}

/**
 * Converts an object of type 'CodeGuruProfilerConfigureAgentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerConfigureAgentResponse(obj: CodeGuruProfilerConfigureAgentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configuration': toJson_CodeGuruProfilerAgentConfiguration(obj.configuration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerCreateProfilingGroupRequest
 */
export interface CodeGuruProfilerCreateProfilingGroupRequest {
  /**
   * @schema CodeGuruProfilerCreateProfilingGroupRequest#agentOrchestrationConfig
   */
  readonly agentOrchestrationConfig?: CodeGuruProfilerAgentOrchestrationConfig;

  /**
   * @schema CodeGuruProfilerCreateProfilingGroupRequest#clientToken
   */
  readonly clientToken: string;

  /**
   * @schema CodeGuruProfilerCreateProfilingGroupRequest#computePlatform
   */
  readonly computePlatform?: string;

  /**
   * @schema CodeGuruProfilerCreateProfilingGroupRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

  /**
   * @schema CodeGuruProfilerCreateProfilingGroupRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CodeGuruProfilerCreateProfilingGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerCreateProfilingGroupRequest(obj: CodeGuruProfilerCreateProfilingGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'agentOrchestrationConfig': toJson_CodeGuruProfilerAgentOrchestrationConfig(obj.agentOrchestrationConfig),
    'clientToken': obj.clientToken,
    'computePlatform': obj.computePlatform,
    'profilingGroupName': obj.profilingGroupName,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerCreateProfilingGroupResponse
 */
export interface CodeGuruProfilerCreateProfilingGroupResponse {
  /**
   * @schema CodeGuruProfilerCreateProfilingGroupResponse#profilingGroup
   */
  readonly profilingGroup: CodeGuruProfilerProfilingGroupDescription;

}

/**
 * Converts an object of type 'CodeGuruProfilerCreateProfilingGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerCreateProfilingGroupResponse(obj: CodeGuruProfilerCreateProfilingGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'profilingGroup': toJson_CodeGuruProfilerProfilingGroupDescription(obj.profilingGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerDeleteProfilingGroupRequest
 */
export interface CodeGuruProfilerDeleteProfilingGroupRequest {
  /**
   * @schema CodeGuruProfilerDeleteProfilingGroupRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerDeleteProfilingGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerDeleteProfilingGroupRequest(obj: CodeGuruProfilerDeleteProfilingGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'profilingGroupName': obj.profilingGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerDeleteProfilingGroupResponse
 */
export interface CodeGuruProfilerDeleteProfilingGroupResponse {
}

/**
 * Converts an object of type 'CodeGuruProfilerDeleteProfilingGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerDeleteProfilingGroupResponse(obj: CodeGuruProfilerDeleteProfilingGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerDescribeProfilingGroupRequest
 */
export interface CodeGuruProfilerDescribeProfilingGroupRequest {
  /**
   * @schema CodeGuruProfilerDescribeProfilingGroupRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerDescribeProfilingGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerDescribeProfilingGroupRequest(obj: CodeGuruProfilerDescribeProfilingGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'profilingGroupName': obj.profilingGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerDescribeProfilingGroupResponse
 */
export interface CodeGuruProfilerDescribeProfilingGroupResponse {
  /**
   * @schema CodeGuruProfilerDescribeProfilingGroupResponse#profilingGroup
   */
  readonly profilingGroup: CodeGuruProfilerProfilingGroupDescription;

}

/**
 * Converts an object of type 'CodeGuruProfilerDescribeProfilingGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerDescribeProfilingGroupResponse(obj: CodeGuruProfilerDescribeProfilingGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'profilingGroup': toJson_CodeGuruProfilerProfilingGroupDescription(obj.profilingGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerGetFindingsReportAccountSummaryRequest
 */
export interface CodeGuruProfilerGetFindingsReportAccountSummaryRequest {
  /**
   * @schema CodeGuruProfilerGetFindingsReportAccountSummaryRequest#dailyReportsOnly
   */
  readonly dailyReportsOnly?: boolean;

  /**
   * @schema CodeGuruProfilerGetFindingsReportAccountSummaryRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeGuruProfilerGetFindingsReportAccountSummaryRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerGetFindingsReportAccountSummaryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerGetFindingsReportAccountSummaryRequest(obj: CodeGuruProfilerGetFindingsReportAccountSummaryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dailyReportsOnly': obj.dailyReportsOnly,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerGetFindingsReportAccountSummaryResponse
 */
export interface CodeGuruProfilerGetFindingsReportAccountSummaryResponse {
  /**
   * @schema CodeGuruProfilerGetFindingsReportAccountSummaryResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeGuruProfilerGetFindingsReportAccountSummaryResponse#reportSummaries
   */
  readonly reportSummaries: CodeGuruProfilerFindingsReportSummary[];

}

/**
 * Converts an object of type 'CodeGuruProfilerGetFindingsReportAccountSummaryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerGetFindingsReportAccountSummaryResponse(obj: CodeGuruProfilerGetFindingsReportAccountSummaryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'reportSummaries': obj.reportSummaries?.map(y => toJson_CodeGuruProfilerFindingsReportSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerGetNotificationConfigurationRequest
 */
export interface CodeGuruProfilerGetNotificationConfigurationRequest {
  /**
   * @schema CodeGuruProfilerGetNotificationConfigurationRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerGetNotificationConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerGetNotificationConfigurationRequest(obj: CodeGuruProfilerGetNotificationConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'profilingGroupName': obj.profilingGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerGetNotificationConfigurationResponse
 */
export interface CodeGuruProfilerGetNotificationConfigurationResponse {
  /**
   * @schema CodeGuruProfilerGetNotificationConfigurationResponse#notificationConfiguration
   */
  readonly notificationConfiguration: CodeGuruProfilerNotificationConfiguration;

}

/**
 * Converts an object of type 'CodeGuruProfilerGetNotificationConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerGetNotificationConfigurationResponse(obj: CodeGuruProfilerGetNotificationConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'notificationConfiguration': toJson_CodeGuruProfilerNotificationConfiguration(obj.notificationConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerGetPolicyRequest
 */
export interface CodeGuruProfilerGetPolicyRequest {
  /**
   * @schema CodeGuruProfilerGetPolicyRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerGetPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerGetPolicyRequest(obj: CodeGuruProfilerGetPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'profilingGroupName': obj.profilingGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerGetPolicyResponse
 */
export interface CodeGuruProfilerGetPolicyResponse {
  /**
   * @schema CodeGuruProfilerGetPolicyResponse#policy
   */
  readonly policy: string;

  /**
   * @schema CodeGuruProfilerGetPolicyResponse#revisionId
   */
  readonly revisionId: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerGetPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerGetPolicyResponse(obj: CodeGuruProfilerGetPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policy': obj.policy,
    'revisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerGetProfileRequest
 */
export interface CodeGuruProfilerGetProfileRequest {
  /**
   * @schema CodeGuruProfilerGetProfileRequest#accept
   */
  readonly accept?: string;

  /**
   * @schema CodeGuruProfilerGetProfileRequest#endTime
   */
  readonly endTime?: string;

  /**
   * @schema CodeGuruProfilerGetProfileRequest#maxDepth
   */
  readonly maxDepth?: number;

  /**
   * @schema CodeGuruProfilerGetProfileRequest#period
   */
  readonly period?: string;

  /**
   * @schema CodeGuruProfilerGetProfileRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

  /**
   * @schema CodeGuruProfilerGetProfileRequest#startTime
   */
  readonly startTime?: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerGetProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerGetProfileRequest(obj: CodeGuruProfilerGetProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accept': obj.accept,
    'endTime': obj.endTime,
    'maxDepth': obj.maxDepth,
    'period': obj.period,
    'profilingGroupName': obj.profilingGroupName,
    'startTime': obj.startTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerGetProfileResponse
 */
export interface CodeGuruProfilerGetProfileResponse {
  /**
   * @schema CodeGuruProfilerGetProfileResponse#contentEncoding
   */
  readonly contentEncoding?: string;

  /**
   * @schema CodeGuruProfilerGetProfileResponse#contentType
   */
  readonly contentType: string;

  /**
   * @schema CodeGuruProfilerGetProfileResponse#profile
   */
  readonly profile: any;

}

/**
 * Converts an object of type 'CodeGuruProfilerGetProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerGetProfileResponse(obj: CodeGuruProfilerGetProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'contentEncoding': obj.contentEncoding,
    'contentType': obj.contentType,
    'profile': obj.profile,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerGetRecommendationsRequest
 */
export interface CodeGuruProfilerGetRecommendationsRequest {
  /**
   * @schema CodeGuruProfilerGetRecommendationsRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema CodeGuruProfilerGetRecommendationsRequest#locale
   */
  readonly locale?: string;

  /**
   * @schema CodeGuruProfilerGetRecommendationsRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

  /**
   * @schema CodeGuruProfilerGetRecommendationsRequest#startTime
   */
  readonly startTime: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerGetRecommendationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerGetRecommendationsRequest(obj: CodeGuruProfilerGetRecommendationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'endTime': obj.endTime,
    'locale': obj.locale,
    'profilingGroupName': obj.profilingGroupName,
    'startTime': obj.startTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerGetRecommendationsResponse
 */
export interface CodeGuruProfilerGetRecommendationsResponse {
  /**
   * @schema CodeGuruProfilerGetRecommendationsResponse#anomalies
   */
  readonly anomalies: CodeGuruProfilerAnomaly[];

  /**
   * @schema CodeGuruProfilerGetRecommendationsResponse#profileEndTime
   */
  readonly profileEndTime: string;

  /**
   * @schema CodeGuruProfilerGetRecommendationsResponse#profileStartTime
   */
  readonly profileStartTime: string;

  /**
   * @schema CodeGuruProfilerGetRecommendationsResponse#profilingGroupName
   */
  readonly profilingGroupName: string;

  /**
   * @schema CodeGuruProfilerGetRecommendationsResponse#recommendations
   */
  readonly recommendations: CodeGuruProfilerRecommendation[];

}

/**
 * Converts an object of type 'CodeGuruProfilerGetRecommendationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerGetRecommendationsResponse(obj: CodeGuruProfilerGetRecommendationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'anomalies': obj.anomalies?.map(y => toJson_CodeGuruProfilerAnomaly(y)),
    'profileEndTime': obj.profileEndTime,
    'profileStartTime': obj.profileStartTime,
    'profilingGroupName': obj.profilingGroupName,
    'recommendations': obj.recommendations?.map(y => toJson_CodeGuruProfilerRecommendation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerListFindingsReportsRequest
 */
export interface CodeGuruProfilerListFindingsReportsRequest {
  /**
   * @schema CodeGuruProfilerListFindingsReportsRequest#dailyReportsOnly
   */
  readonly dailyReportsOnly?: boolean;

  /**
   * @schema CodeGuruProfilerListFindingsReportsRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema CodeGuruProfilerListFindingsReportsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeGuruProfilerListFindingsReportsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeGuruProfilerListFindingsReportsRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

  /**
   * @schema CodeGuruProfilerListFindingsReportsRequest#startTime
   */
  readonly startTime: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerListFindingsReportsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerListFindingsReportsRequest(obj: CodeGuruProfilerListFindingsReportsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dailyReportsOnly': obj.dailyReportsOnly,
    'endTime': obj.endTime,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'profilingGroupName': obj.profilingGroupName,
    'startTime': obj.startTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerListFindingsReportsResponse
 */
export interface CodeGuruProfilerListFindingsReportsResponse {
  /**
   * @schema CodeGuruProfilerListFindingsReportsResponse#findingsReportSummaries
   */
  readonly findingsReportSummaries: CodeGuruProfilerFindingsReportSummary[];

  /**
   * @schema CodeGuruProfilerListFindingsReportsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerListFindingsReportsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerListFindingsReportsResponse(obj: CodeGuruProfilerListFindingsReportsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'findingsReportSummaries': obj.findingsReportSummaries?.map(y => toJson_CodeGuruProfilerFindingsReportSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerListProfileTimesRequest
 */
export interface CodeGuruProfilerListProfileTimesRequest {
  /**
   * @schema CodeGuruProfilerListProfileTimesRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema CodeGuruProfilerListProfileTimesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeGuruProfilerListProfileTimesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeGuruProfilerListProfileTimesRequest#orderBy
   */
  readonly orderBy?: string;

  /**
   * @schema CodeGuruProfilerListProfileTimesRequest#period
   */
  readonly period: string;

  /**
   * @schema CodeGuruProfilerListProfileTimesRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

  /**
   * @schema CodeGuruProfilerListProfileTimesRequest#startTime
   */
  readonly startTime: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerListProfileTimesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerListProfileTimesRequest(obj: CodeGuruProfilerListProfileTimesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'endTime': obj.endTime,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'orderBy': obj.orderBy,
    'period': obj.period,
    'profilingGroupName': obj.profilingGroupName,
    'startTime': obj.startTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerListProfileTimesResponse
 */
export interface CodeGuruProfilerListProfileTimesResponse {
  /**
   * @schema CodeGuruProfilerListProfileTimesResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeGuruProfilerListProfileTimesResponse#profileTimes
   */
  readonly profileTimes: CodeGuruProfilerProfileTime[];

}

/**
 * Converts an object of type 'CodeGuruProfilerListProfileTimesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerListProfileTimesResponse(obj: CodeGuruProfilerListProfileTimesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'profileTimes': obj.profileTimes?.map(y => toJson_CodeGuruProfilerProfileTime(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerListProfilingGroupsRequest
 */
export interface CodeGuruProfilerListProfilingGroupsRequest {
  /**
   * @schema CodeGuruProfilerListProfilingGroupsRequest#includeDescription
   */
  readonly includeDescription?: boolean;

  /**
   * @schema CodeGuruProfilerListProfilingGroupsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeGuruProfilerListProfilingGroupsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerListProfilingGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerListProfilingGroupsRequest(obj: CodeGuruProfilerListProfilingGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'includeDescription': obj.includeDescription,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerListProfilingGroupsResponse
 */
export interface CodeGuruProfilerListProfilingGroupsResponse {
  /**
   * @schema CodeGuruProfilerListProfilingGroupsResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeGuruProfilerListProfilingGroupsResponse#profilingGroupNames
   */
  readonly profilingGroupNames: string[];

  /**
   * @schema CodeGuruProfilerListProfilingGroupsResponse#profilingGroups
   */
  readonly profilingGroups?: CodeGuruProfilerProfilingGroupDescription[];

}

/**
 * Converts an object of type 'CodeGuruProfilerListProfilingGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerListProfilingGroupsResponse(obj: CodeGuruProfilerListProfilingGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'profilingGroupNames': obj.profilingGroupNames?.map(y => y),
    'profilingGroups': obj.profilingGroups?.map(y => toJson_CodeGuruProfilerProfilingGroupDescription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerListTagsForResourceRequest
 */
export interface CodeGuruProfilerListTagsForResourceRequest {
  /**
   * @schema CodeGuruProfilerListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerListTagsForResourceRequest(obj: CodeGuruProfilerListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerListTagsForResourceResponse
 */
export interface CodeGuruProfilerListTagsForResourceResponse {
  /**
   * @schema CodeGuruProfilerListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CodeGuruProfilerListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerListTagsForResourceResponse(obj: CodeGuruProfilerListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerPostAgentProfileRequest
 */
export interface CodeGuruProfilerPostAgentProfileRequest {
  /**
   * @schema CodeGuruProfilerPostAgentProfileRequest#agentProfile
   */
  readonly agentProfile: any;

  /**
   * @schema CodeGuruProfilerPostAgentProfileRequest#contentType
   */
  readonly contentType: string;

  /**
   * @schema CodeGuruProfilerPostAgentProfileRequest#profileToken
   */
  readonly profileToken?: string;

  /**
   * @schema CodeGuruProfilerPostAgentProfileRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerPostAgentProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerPostAgentProfileRequest(obj: CodeGuruProfilerPostAgentProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'agentProfile': obj.agentProfile,
    'contentType': obj.contentType,
    'profileToken': obj.profileToken,
    'profilingGroupName': obj.profilingGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerPostAgentProfileResponse
 */
export interface CodeGuruProfilerPostAgentProfileResponse {
}

/**
 * Converts an object of type 'CodeGuruProfilerPostAgentProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerPostAgentProfileResponse(obj: CodeGuruProfilerPostAgentProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerPutPermissionRequest
 */
export interface CodeGuruProfilerPutPermissionRequest {
  /**
   * @schema CodeGuruProfilerPutPermissionRequest#actionGroup
   */
  readonly actionGroup: string;

  /**
   * @schema CodeGuruProfilerPutPermissionRequest#principals
   */
  readonly principals: string[];

  /**
   * @schema CodeGuruProfilerPutPermissionRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

  /**
   * @schema CodeGuruProfilerPutPermissionRequest#revisionId
   */
  readonly revisionId?: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerPutPermissionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerPutPermissionRequest(obj: CodeGuruProfilerPutPermissionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionGroup': obj.actionGroup,
    'principals': obj.principals?.map(y => y),
    'profilingGroupName': obj.profilingGroupName,
    'revisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerPutPermissionResponse
 */
export interface CodeGuruProfilerPutPermissionResponse {
  /**
   * @schema CodeGuruProfilerPutPermissionResponse#policy
   */
  readonly policy: string;

  /**
   * @schema CodeGuruProfilerPutPermissionResponse#revisionId
   */
  readonly revisionId: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerPutPermissionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerPutPermissionResponse(obj: CodeGuruProfilerPutPermissionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policy': obj.policy,
    'revisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerRemoveNotificationChannelRequest
 */
export interface CodeGuruProfilerRemoveNotificationChannelRequest {
  /**
   * @schema CodeGuruProfilerRemoveNotificationChannelRequest#channelId
   */
  readonly channelId: string;

  /**
   * @schema CodeGuruProfilerRemoveNotificationChannelRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerRemoveNotificationChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerRemoveNotificationChannelRequest(obj: CodeGuruProfilerRemoveNotificationChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'channelId': obj.channelId,
    'profilingGroupName': obj.profilingGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerRemoveNotificationChannelResponse
 */
export interface CodeGuruProfilerRemoveNotificationChannelResponse {
  /**
   * @schema CodeGuruProfilerRemoveNotificationChannelResponse#notificationConfiguration
   */
  readonly notificationConfiguration?: CodeGuruProfilerNotificationConfiguration;

}

/**
 * Converts an object of type 'CodeGuruProfilerRemoveNotificationChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerRemoveNotificationChannelResponse(obj: CodeGuruProfilerRemoveNotificationChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'notificationConfiguration': toJson_CodeGuruProfilerNotificationConfiguration(obj.notificationConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerRemovePermissionRequest
 */
export interface CodeGuruProfilerRemovePermissionRequest {
  /**
   * @schema CodeGuruProfilerRemovePermissionRequest#actionGroup
   */
  readonly actionGroup: string;

  /**
   * @schema CodeGuruProfilerRemovePermissionRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

  /**
   * @schema CodeGuruProfilerRemovePermissionRequest#revisionId
   */
  readonly revisionId: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerRemovePermissionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerRemovePermissionRequest(obj: CodeGuruProfilerRemovePermissionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionGroup': obj.actionGroup,
    'profilingGroupName': obj.profilingGroupName,
    'revisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerRemovePermissionResponse
 */
export interface CodeGuruProfilerRemovePermissionResponse {
  /**
   * @schema CodeGuruProfilerRemovePermissionResponse#policy
   */
  readonly policy: string;

  /**
   * @schema CodeGuruProfilerRemovePermissionResponse#revisionId
   */
  readonly revisionId: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerRemovePermissionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerRemovePermissionResponse(obj: CodeGuruProfilerRemovePermissionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policy': obj.policy,
    'revisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerSubmitFeedbackRequest
 */
export interface CodeGuruProfilerSubmitFeedbackRequest {
  /**
   * @schema CodeGuruProfilerSubmitFeedbackRequest#anomalyInstanceId
   */
  readonly anomalyInstanceId: string;

  /**
   * @schema CodeGuruProfilerSubmitFeedbackRequest#comment
   */
  readonly comment?: string;

  /**
   * @schema CodeGuruProfilerSubmitFeedbackRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

  /**
   * @schema CodeGuruProfilerSubmitFeedbackRequest#type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerSubmitFeedbackRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerSubmitFeedbackRequest(obj: CodeGuruProfilerSubmitFeedbackRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'anomalyInstanceId': obj.anomalyInstanceId,
    'comment': obj.comment,
    'profilingGroupName': obj.profilingGroupName,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerSubmitFeedbackResponse
 */
export interface CodeGuruProfilerSubmitFeedbackResponse {
}

/**
 * Converts an object of type 'CodeGuruProfilerSubmitFeedbackResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerSubmitFeedbackResponse(obj: CodeGuruProfilerSubmitFeedbackResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerTagResourceRequest
 */
export interface CodeGuruProfilerTagResourceRequest {
  /**
   * @schema CodeGuruProfilerTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CodeGuruProfilerTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'CodeGuruProfilerTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerTagResourceRequest(obj: CodeGuruProfilerTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerTagResourceResponse
 */
export interface CodeGuruProfilerTagResourceResponse {
}

/**
 * Converts an object of type 'CodeGuruProfilerTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerTagResourceResponse(obj: CodeGuruProfilerTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerUntagResourceRequest
 */
export interface CodeGuruProfilerUntagResourceRequest {
  /**
   * @schema CodeGuruProfilerUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CodeGuruProfilerUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'CodeGuruProfilerUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerUntagResourceRequest(obj: CodeGuruProfilerUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema CodeGuruProfilerUntagResourceResponse
 */
export interface CodeGuruProfilerUntagResourceResponse {
}

/**
 * Converts an object of type 'CodeGuruProfilerUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerUntagResourceResponse(obj: CodeGuruProfilerUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerUpdateProfilingGroupRequest
 */
export interface CodeGuruProfilerUpdateProfilingGroupRequest {
  /**
   * @schema CodeGuruProfilerUpdateProfilingGroupRequest#agentOrchestrationConfig
   */
  readonly agentOrchestrationConfig: CodeGuruProfilerAgentOrchestrationConfig;

  /**
   * @schema CodeGuruProfilerUpdateProfilingGroupRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerUpdateProfilingGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerUpdateProfilingGroupRequest(obj: CodeGuruProfilerUpdateProfilingGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'agentOrchestrationConfig': toJson_CodeGuruProfilerAgentOrchestrationConfig(obj.agentOrchestrationConfig),
    'profilingGroupName': obj.profilingGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerUpdateProfilingGroupResponse
 */
export interface CodeGuruProfilerUpdateProfilingGroupResponse {
  /**
   * @schema CodeGuruProfilerUpdateProfilingGroupResponse#profilingGroup
   */
  readonly profilingGroup: CodeGuruProfilerProfilingGroupDescription;

}

/**
 * Converts an object of type 'CodeGuruProfilerUpdateProfilingGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerUpdateProfilingGroupResponse(obj: CodeGuruProfilerUpdateProfilingGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'profilingGroup': toJson_CodeGuruProfilerProfilingGroupDescription(obj.profilingGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerChannel
 */
export interface CodeGuruProfilerChannel {
  /**
   * @schema CodeGuruProfilerChannel#eventPublishers
   */
  readonly eventPublishers: string[];

  /**
   * @schema CodeGuruProfilerChannel#id
   */
  readonly id?: string;

  /**
   * @schema CodeGuruProfilerChannel#uri
   */
  readonly uri: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerChannel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerChannel(obj: CodeGuruProfilerChannel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventPublishers': obj.eventPublishers?.map(y => y),
    'id': obj.id,
    'uri': obj.uri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerNotificationConfiguration
 */
export interface CodeGuruProfilerNotificationConfiguration {
  /**
   * @schema CodeGuruProfilerNotificationConfiguration#channels
   */
  readonly channels?: CodeGuruProfilerChannel[];

}

/**
 * Converts an object of type 'CodeGuruProfilerNotificationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerNotificationConfiguration(obj: CodeGuruProfilerNotificationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'channels': obj.channels?.map(y => toJson_CodeGuruProfilerChannel(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerFrameMetric
 */
export interface CodeGuruProfilerFrameMetric {
  /**
   * @schema CodeGuruProfilerFrameMetric#frameName
   */
  readonly frameName: string;

  /**
   * @schema CodeGuruProfilerFrameMetric#threadStates
   */
  readonly threadStates: string[];

  /**
   * @schema CodeGuruProfilerFrameMetric#type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerFrameMetric' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerFrameMetric(obj: CodeGuruProfilerFrameMetric | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'frameName': obj.frameName,
    'threadStates': obj.threadStates?.map(y => y),
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerTimestampStructure
 */
export interface CodeGuruProfilerTimestampStructure {
  /**
   * @schema CodeGuruProfilerTimestampStructure#value
   */
  readonly value: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerTimestampStructure' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerTimestampStructure(obj: CodeGuruProfilerTimestampStructure | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerFrameMetricDatum
 */
export interface CodeGuruProfilerFrameMetricDatum {
  /**
   * @schema CodeGuruProfilerFrameMetricDatum#frameMetric
   */
  readonly frameMetric: CodeGuruProfilerFrameMetric;

  /**
   * @schema CodeGuruProfilerFrameMetricDatum#values
   */
  readonly values: number[];

}

/**
 * Converts an object of type 'CodeGuruProfilerFrameMetricDatum' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerFrameMetricDatum(obj: CodeGuruProfilerFrameMetricDatum | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'frameMetric': toJson_CodeGuruProfilerFrameMetric(obj.frameMetric),
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerAgentConfiguration
 */
export interface CodeGuruProfilerAgentConfiguration {
  /**
   * @schema CodeGuruProfilerAgentConfiguration#agentParameters
   */
  readonly agentParameters?: { [key: string]: string };

  /**
   * @schema CodeGuruProfilerAgentConfiguration#periodInSeconds
   */
  readonly periodInSeconds: number;

  /**
   * @schema CodeGuruProfilerAgentConfiguration#shouldProfile
   */
  readonly shouldProfile: boolean;

}

/**
 * Converts an object of type 'CodeGuruProfilerAgentConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerAgentConfiguration(obj: CodeGuruProfilerAgentConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'agentParameters': ((obj.agentParameters) === undefined) ? undefined : (Object.entries(obj.agentParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'periodInSeconds': obj.periodInSeconds,
    'shouldProfile': obj.shouldProfile,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerAgentOrchestrationConfig
 */
export interface CodeGuruProfilerAgentOrchestrationConfig {
  /**
   * @schema CodeGuruProfilerAgentOrchestrationConfig#profilingEnabled
   */
  readonly profilingEnabled: boolean;

}

/**
 * Converts an object of type 'CodeGuruProfilerAgentOrchestrationConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerAgentOrchestrationConfig(obj: CodeGuruProfilerAgentOrchestrationConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'profilingEnabled': obj.profilingEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerProfilingGroupDescription
 */
export interface CodeGuruProfilerProfilingGroupDescription {
  /**
   * @schema CodeGuruProfilerProfilingGroupDescription#agentOrchestrationConfig
   */
  readonly agentOrchestrationConfig?: CodeGuruProfilerAgentOrchestrationConfig;

  /**
   * @schema CodeGuruProfilerProfilingGroupDescription#arn
   */
  readonly arn?: string;

  /**
   * @schema CodeGuruProfilerProfilingGroupDescription#computePlatform
   */
  readonly computePlatform?: string;

  /**
   * @schema CodeGuruProfilerProfilingGroupDescription#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema CodeGuruProfilerProfilingGroupDescription#name
   */
  readonly name?: string;

  /**
   * @schema CodeGuruProfilerProfilingGroupDescription#profilingStatus
   */
  readonly profilingStatus?: CodeGuruProfilerProfilingStatus;

  /**
   * @schema CodeGuruProfilerProfilingGroupDescription#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CodeGuruProfilerProfilingGroupDescription#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerProfilingGroupDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerProfilingGroupDescription(obj: CodeGuruProfilerProfilingGroupDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'agentOrchestrationConfig': toJson_CodeGuruProfilerAgentOrchestrationConfig(obj.agentOrchestrationConfig),
    'arn': obj.arn,
    'computePlatform': obj.computePlatform,
    'createdAt': obj.createdAt,
    'name': obj.name,
    'profilingStatus': toJson_CodeGuruProfilerProfilingStatus(obj.profilingStatus),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'updatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerFindingsReportSummary
 */
export interface CodeGuruProfilerFindingsReportSummary {
  /**
   * @schema CodeGuruProfilerFindingsReportSummary#id
   */
  readonly id?: string;

  /**
   * @schema CodeGuruProfilerFindingsReportSummary#profileEndTime
   */
  readonly profileEndTime?: string;

  /**
   * @schema CodeGuruProfilerFindingsReportSummary#profileStartTime
   */
  readonly profileStartTime?: string;

  /**
   * @schema CodeGuruProfilerFindingsReportSummary#profilingGroupName
   */
  readonly profilingGroupName?: string;

  /**
   * @schema CodeGuruProfilerFindingsReportSummary#totalNumberOfFindings
   */
  readonly totalNumberOfFindings?: number;

}

/**
 * Converts an object of type 'CodeGuruProfilerFindingsReportSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerFindingsReportSummary(obj: CodeGuruProfilerFindingsReportSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'profileEndTime': obj.profileEndTime,
    'profileStartTime': obj.profileStartTime,
    'profilingGroupName': obj.profilingGroupName,
    'totalNumberOfFindings': obj.totalNumberOfFindings,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerAnomaly
 */
export interface CodeGuruProfilerAnomaly {
  /**
   * @schema CodeGuruProfilerAnomaly#instances
   */
  readonly instances: CodeGuruProfilerAnomalyInstance[];

  /**
   * @schema CodeGuruProfilerAnomaly#metric
   */
  readonly metric: CodeGuruProfilerMetric;

  /**
   * @schema CodeGuruProfilerAnomaly#reason
   */
  readonly reason: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerAnomaly' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerAnomaly(obj: CodeGuruProfilerAnomaly | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instances': obj.instances?.map(y => toJson_CodeGuruProfilerAnomalyInstance(y)),
    'metric': toJson_CodeGuruProfilerMetric(obj.metric),
    'reason': obj.reason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerRecommendation
 */
export interface CodeGuruProfilerRecommendation {
  /**
   * @schema CodeGuruProfilerRecommendation#allMatchesCount
   */
  readonly allMatchesCount: number;

  /**
   * @schema CodeGuruProfilerRecommendation#allMatchesSum
   */
  readonly allMatchesSum: number;

  /**
   * @schema CodeGuruProfilerRecommendation#endTime
   */
  readonly endTime: string;

  /**
   * @schema CodeGuruProfilerRecommendation#pattern
   */
  readonly pattern: CodeGuruProfilerPattern;

  /**
   * @schema CodeGuruProfilerRecommendation#startTime
   */
  readonly startTime: string;

  /**
   * @schema CodeGuruProfilerRecommendation#topMatches
   */
  readonly topMatches: CodeGuruProfilerMatch[];

}

/**
 * Converts an object of type 'CodeGuruProfilerRecommendation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerRecommendation(obj: CodeGuruProfilerRecommendation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'allMatchesCount': obj.allMatchesCount,
    'allMatchesSum': obj.allMatchesSum,
    'endTime': obj.endTime,
    'pattern': toJson_CodeGuruProfilerPattern(obj.pattern),
    'startTime': obj.startTime,
    'topMatches': obj.topMatches?.map(y => toJson_CodeGuruProfilerMatch(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerProfileTime
 */
export interface CodeGuruProfilerProfileTime {
  /**
   * @schema CodeGuruProfilerProfileTime#start
   */
  readonly start?: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerProfileTime' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerProfileTime(obj: CodeGuruProfilerProfileTime | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'start': obj.start,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerProfilingStatus
 */
export interface CodeGuruProfilerProfilingStatus {
  /**
   * @schema CodeGuruProfilerProfilingStatus#latestAgentOrchestratedAt
   */
  readonly latestAgentOrchestratedAt?: string;

  /**
   * @schema CodeGuruProfilerProfilingStatus#latestAgentProfileReportedAt
   */
  readonly latestAgentProfileReportedAt?: string;

  /**
   * @schema CodeGuruProfilerProfilingStatus#latestAggregatedProfile
   */
  readonly latestAggregatedProfile?: CodeGuruProfilerAggregatedProfileTime;

}

/**
 * Converts an object of type 'CodeGuruProfilerProfilingStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerProfilingStatus(obj: CodeGuruProfilerProfilingStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'latestAgentOrchestratedAt': obj.latestAgentOrchestratedAt,
    'latestAgentProfileReportedAt': obj.latestAgentProfileReportedAt,
    'latestAggregatedProfile': toJson_CodeGuruProfilerAggregatedProfileTime(obj.latestAggregatedProfile),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerAnomalyInstance
 */
export interface CodeGuruProfilerAnomalyInstance {
  /**
   * @schema CodeGuruProfilerAnomalyInstance#endTime
   */
  readonly endTime?: string;

  /**
   * @schema CodeGuruProfilerAnomalyInstance#id
   */
  readonly id: string;

  /**
   * @schema CodeGuruProfilerAnomalyInstance#startTime
   */
  readonly startTime: string;

  /**
   * @schema CodeGuruProfilerAnomalyInstance#userFeedback
   */
  readonly userFeedback?: CodeGuruProfilerUserFeedback;

}

/**
 * Converts an object of type 'CodeGuruProfilerAnomalyInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerAnomalyInstance(obj: CodeGuruProfilerAnomalyInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'endTime': obj.endTime,
    'id': obj.id,
    'startTime': obj.startTime,
    'userFeedback': toJson_CodeGuruProfilerUserFeedback(obj.userFeedback),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerMetric
 */
export interface CodeGuruProfilerMetric {
  /**
   * @schema CodeGuruProfilerMetric#frameName
   */
  readonly frameName: string;

  /**
   * @schema CodeGuruProfilerMetric#threadStates
   */
  readonly threadStates: string[];

  /**
   * @schema CodeGuruProfilerMetric#type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerMetric' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerMetric(obj: CodeGuruProfilerMetric | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'frameName': obj.frameName,
    'threadStates': obj.threadStates?.map(y => y),
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerPattern
 */
export interface CodeGuruProfilerPattern {
  /**
   * @schema CodeGuruProfilerPattern#countersToAggregate
   */
  readonly countersToAggregate?: string[];

  /**
   * @schema CodeGuruProfilerPattern#description
   */
  readonly description?: string;

  /**
   * @schema CodeGuruProfilerPattern#id
   */
  readonly id?: string;

  /**
   * @schema CodeGuruProfilerPattern#name
   */
  readonly name?: string;

  /**
   * @schema CodeGuruProfilerPattern#resolutionSteps
   */
  readonly resolutionSteps?: string;

  /**
   * @schema CodeGuruProfilerPattern#targetFrames
   */
  readonly targetFrames?: string[][];

  /**
   * @schema CodeGuruProfilerPattern#thresholdPercent
   */
  readonly thresholdPercent?: number;

}

/**
 * Converts an object of type 'CodeGuruProfilerPattern' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerPattern(obj: CodeGuruProfilerPattern | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'countersToAggregate': obj.countersToAggregate?.map(y => y),
    'description': obj.description,
    'id': obj.id,
    'name': obj.name,
    'resolutionSteps': obj.resolutionSteps,
    'targetFrames': obj.targetFrames?.map(y => y?.map(y => y)),
    'thresholdPercent': obj.thresholdPercent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerMatch
 */
export interface CodeGuruProfilerMatch {
  /**
   * @schema CodeGuruProfilerMatch#frameAddress
   */
  readonly frameAddress?: string;

  /**
   * @schema CodeGuruProfilerMatch#targetFramesIndex
   */
  readonly targetFramesIndex?: number;

  /**
   * @schema CodeGuruProfilerMatch#thresholdBreachValue
   */
  readonly thresholdBreachValue?: number;

}

/**
 * Converts an object of type 'CodeGuruProfilerMatch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerMatch(obj: CodeGuruProfilerMatch | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'frameAddress': obj.frameAddress,
    'targetFramesIndex': obj.targetFramesIndex,
    'thresholdBreachValue': obj.thresholdBreachValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerAggregatedProfileTime
 */
export interface CodeGuruProfilerAggregatedProfileTime {
  /**
   * @schema CodeGuruProfilerAggregatedProfileTime#period
   */
  readonly period?: string;

  /**
   * @schema CodeGuruProfilerAggregatedProfileTime#start
   */
  readonly start?: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerAggregatedProfileTime' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerAggregatedProfileTime(obj: CodeGuruProfilerAggregatedProfileTime | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'period': obj.period,
    'start': obj.start,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruProfilerUserFeedback
 */
export interface CodeGuruProfilerUserFeedback {
  /**
   * @schema CodeGuruProfilerUserFeedback#type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CodeGuruProfilerUserFeedback' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruProfilerUserFeedback(obj: CodeGuruProfilerUserFeedback | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
