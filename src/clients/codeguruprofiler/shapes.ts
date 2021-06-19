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
 * @schema CodeGuruProfilerAddNotificationChannelsResponse
 */
export interface CodeGuruProfilerAddNotificationChannelsResponse {
  /**
   * @schema CodeGuruProfilerAddNotificationChannelsResponse#notificationConfiguration
   */
  readonly notificationConfiguration?: CodeGuruProfilerNotificationConfiguration;

}

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
 * @schema CodeGuruProfilerConfigureAgentResponse
 */
export interface CodeGuruProfilerConfigureAgentResponse {
  /**
   * @schema CodeGuruProfilerConfigureAgentResponse#configuration
   */
  readonly configuration: CodeGuruProfilerAgentConfiguration;

}

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
 * @schema CodeGuruProfilerCreateProfilingGroupResponse
 */
export interface CodeGuruProfilerCreateProfilingGroupResponse {
  /**
   * @schema CodeGuruProfilerCreateProfilingGroupResponse#profilingGroup
   */
  readonly profilingGroup: CodeGuruProfilerProfilingGroupDescription;

}

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
 * @schema CodeGuruProfilerDeleteProfilingGroupResponse
 */
export interface CodeGuruProfilerDeleteProfilingGroupResponse {
}

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
 * @schema CodeGuruProfilerDescribeProfilingGroupResponse
 */
export interface CodeGuruProfilerDescribeProfilingGroupResponse {
  /**
   * @schema CodeGuruProfilerDescribeProfilingGroupResponse#profilingGroup
   */
  readonly profilingGroup: CodeGuruProfilerProfilingGroupDescription;

}

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
 * @schema CodeGuruProfilerGetNotificationConfigurationRequest
 */
export interface CodeGuruProfilerGetNotificationConfigurationRequest {
  /**
   * @schema CodeGuruProfilerGetNotificationConfigurationRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

}

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
 * @schema CodeGuruProfilerGetPolicyRequest
 */
export interface CodeGuruProfilerGetPolicyRequest {
  /**
   * @schema CodeGuruProfilerGetPolicyRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

}

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
 * @schema CodeGuruProfilerListTagsForResourceRequest
 */
export interface CodeGuruProfilerListTagsForResourceRequest {
  /**
   * @schema CodeGuruProfilerListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

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
 * @schema CodeGuruProfilerPostAgentProfileResponse
 */
export interface CodeGuruProfilerPostAgentProfileResponse {
}

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
 * @schema CodeGuruProfilerRemoveNotificationChannelResponse
 */
export interface CodeGuruProfilerRemoveNotificationChannelResponse {
  /**
   * @schema CodeGuruProfilerRemoveNotificationChannelResponse#notificationConfiguration
   */
  readonly notificationConfiguration?: CodeGuruProfilerNotificationConfiguration;

}

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
 * @schema CodeGuruProfilerSubmitFeedbackResponse
 */
export interface CodeGuruProfilerSubmitFeedbackResponse {
}

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
 * @schema CodeGuruProfilerTagResourceResponse
 */
export interface CodeGuruProfilerTagResourceResponse {
}

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
 * @schema CodeGuruProfilerUntagResourceResponse
 */
export interface CodeGuruProfilerUntagResourceResponse {
}

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
 * @schema CodeGuruProfilerUpdateProfilingGroupResponse
 */
export interface CodeGuruProfilerUpdateProfilingGroupResponse {
  /**
   * @schema CodeGuruProfilerUpdateProfilingGroupResponse#profilingGroup
   */
  readonly profilingGroup: CodeGuruProfilerProfilingGroupDescription;

}

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
 * @schema CodeGuruProfilerNotificationConfiguration
 */
export interface CodeGuruProfilerNotificationConfiguration {
  /**
   * @schema CodeGuruProfilerNotificationConfiguration#channels
   */
  readonly channels?: CodeGuruProfilerChannel[];

}

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
 * @schema CodeGuruProfilerTimestampStructure
 */
export interface CodeGuruProfilerTimestampStructure {
  /**
   * @schema CodeGuruProfilerTimestampStructure#value
   */
  readonly value: string;

}

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
 * @schema CodeGuruProfilerAgentOrchestrationConfig
 */
export interface CodeGuruProfilerAgentOrchestrationConfig {
  /**
   * @schema CodeGuruProfilerAgentOrchestrationConfig#profilingEnabled
   */
  readonly profilingEnabled: boolean;

}

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
 * @schema CodeGuruProfilerProfileTime
 */
export interface CodeGuruProfilerProfileTime {
  /**
   * @schema CodeGuruProfilerProfileTime#start
   */
  readonly start?: string;

}

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
 * @schema CodeGuruProfilerUserFeedback
 */
export interface CodeGuruProfilerUserFeedback {
  /**
   * @schema CodeGuruProfilerUserFeedback#type
   */
  readonly type: string;

}
