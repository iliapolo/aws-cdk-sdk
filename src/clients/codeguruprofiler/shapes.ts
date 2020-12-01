/**
 * @schema AddNotificationChannelsRequest
 */
export interface AddNotificationChannelsRequest {
  /**
   * @schema AddNotificationChannelsRequest#channels
   */
  readonly channels: Channel[];

  /**
   * @schema AddNotificationChannelsRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

}

/**
 * @schema AddNotificationChannelsResponse
 */
export interface AddNotificationChannelsResponse {
  /**
   * @schema AddNotificationChannelsResponse#notificationConfiguration
   */
  readonly notificationConfiguration?: NotificationConfiguration;

}

/**
 * @schema BatchGetFrameMetricDataRequest
 */
export interface BatchGetFrameMetricDataRequest {
  /**
   * @schema BatchGetFrameMetricDataRequest#endTime
   */
  readonly endTime?: string;

  /**
   * @schema BatchGetFrameMetricDataRequest#frameMetrics
   */
  readonly frameMetrics?: FrameMetric[];

  /**
   * @schema BatchGetFrameMetricDataRequest#period
   */
  readonly period?: string;

  /**
   * @schema BatchGetFrameMetricDataRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

  /**
   * @schema BatchGetFrameMetricDataRequest#startTime
   */
  readonly startTime?: string;

  /**
   * @schema BatchGetFrameMetricDataRequest#targetResolution
   */
  readonly targetResolution?: string;

}

/**
 * @schema BatchGetFrameMetricDataResponse
 */
export interface BatchGetFrameMetricDataResponse {
  /**
   * @schema BatchGetFrameMetricDataResponse#endTime
   */
  readonly endTime: string;

  /**
   * @schema BatchGetFrameMetricDataResponse#endTimes
   */
  readonly endTimes: TimestampStructure[];

  /**
   * @schema BatchGetFrameMetricDataResponse#frameMetricData
   */
  readonly frameMetricData: FrameMetricDatum[];

  /**
   * @schema BatchGetFrameMetricDataResponse#resolution
   */
  readonly resolution: string;

  /**
   * @schema BatchGetFrameMetricDataResponse#startTime
   */
  readonly startTime: string;

  /**
   * @schema BatchGetFrameMetricDataResponse#unprocessedEndTimes
   */
  readonly unprocessedEndTimes: { [key: string]: TimestampStructure[] };

}

/**
 * @schema ConfigureAgentRequest
 */
export interface ConfigureAgentRequest {
  /**
   * @schema ConfigureAgentRequest#fleetInstanceId
   */
  readonly fleetInstanceId?: string;

  /**
   * @schema ConfigureAgentRequest#metadata
   */
  readonly metadata?: { [key: string]: string };

  /**
   * @schema ConfigureAgentRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

}

/**
 * @schema ConfigureAgentResponse
 */
export interface ConfigureAgentResponse {
  /**
   * @schema ConfigureAgentResponse#configuration
   */
  readonly configuration: AgentConfiguration;

}

/**
 * @schema CreateProfilingGroupRequest
 */
export interface CreateProfilingGroupRequest {
  /**
   * @schema CreateProfilingGroupRequest#agentOrchestrationConfig
   */
  readonly agentOrchestrationConfig?: AgentOrchestrationConfig;

  /**
   * @schema CreateProfilingGroupRequest#clientToken
   */
  readonly clientToken: string;

  /**
   * @schema CreateProfilingGroupRequest#computePlatform
   */
  readonly computePlatform?: string;

  /**
   * @schema CreateProfilingGroupRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

  /**
   * @schema CreateProfilingGroupRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateProfilingGroupResponse
 */
export interface CreateProfilingGroupResponse {
  /**
   * @schema CreateProfilingGroupResponse#profilingGroup
   */
  readonly profilingGroup: ProfilingGroupDescription;

}

/**
 * @schema DeleteProfilingGroupRequest
 */
export interface DeleteProfilingGroupRequest {
  /**
   * @schema DeleteProfilingGroupRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

}

/**
 * @schema DeleteProfilingGroupResponse
 */
export interface DeleteProfilingGroupResponse {
}

/**
 * @schema DescribeProfilingGroupRequest
 */
export interface DescribeProfilingGroupRequest {
  /**
   * @schema DescribeProfilingGroupRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

}

/**
 * @schema DescribeProfilingGroupResponse
 */
export interface DescribeProfilingGroupResponse {
  /**
   * @schema DescribeProfilingGroupResponse#profilingGroup
   */
  readonly profilingGroup: ProfilingGroupDescription;

}

/**
 * @schema GetFindingsReportAccountSummaryRequest
 */
export interface GetFindingsReportAccountSummaryRequest {
  /**
   * @schema GetFindingsReportAccountSummaryRequest#dailyReportsOnly
   */
  readonly dailyReportsOnly?: boolean;

  /**
   * @schema GetFindingsReportAccountSummaryRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetFindingsReportAccountSummaryRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetFindingsReportAccountSummaryResponse
 */
export interface GetFindingsReportAccountSummaryResponse {
  /**
   * @schema GetFindingsReportAccountSummaryResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetFindingsReportAccountSummaryResponse#reportSummaries
   */
  readonly reportSummaries: FindingsReportSummary[];

}

/**
 * @schema GetNotificationConfigurationRequest
 */
export interface GetNotificationConfigurationRequest {
  /**
   * @schema GetNotificationConfigurationRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

}

/**
 * @schema GetNotificationConfigurationResponse
 */
export interface GetNotificationConfigurationResponse {
  /**
   * @schema GetNotificationConfigurationResponse#notificationConfiguration
   */
  readonly notificationConfiguration: NotificationConfiguration;

}

/**
 * @schema GetPolicyRequest
 */
export interface GetPolicyRequest {
  /**
   * @schema GetPolicyRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

}

/**
 * @schema GetPolicyResponse
 */
export interface GetPolicyResponse {
  /**
   * @schema GetPolicyResponse#policy
   */
  readonly policy: string;

  /**
   * @schema GetPolicyResponse#revisionId
   */
  readonly revisionId: string;

}

/**
 * @schema GetProfileRequest
 */
export interface GetProfileRequest {
  /**
   * @schema GetProfileRequest#accept
   */
  readonly accept?: string;

  /**
   * @schema GetProfileRequest#endTime
   */
  readonly endTime?: string;

  /**
   * @schema GetProfileRequest#maxDepth
   */
  readonly maxDepth?: number;

  /**
   * @schema GetProfileRequest#period
   */
  readonly period?: string;

  /**
   * @schema GetProfileRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

  /**
   * @schema GetProfileRequest#startTime
   */
  readonly startTime?: string;

}

/**
 * @schema GetProfileResponse
 */
export interface GetProfileResponse {
  /**
   * @schema GetProfileResponse#contentEncoding
   */
  readonly contentEncoding?: string;

  /**
   * @schema GetProfileResponse#contentType
   */
  readonly contentType: string;

  /**
   * @schema GetProfileResponse#profile
   */
  readonly profile: any;

}

/**
 * @schema GetRecommendationsRequest
 */
export interface GetRecommendationsRequest {
  /**
   * @schema GetRecommendationsRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema GetRecommendationsRequest#locale
   */
  readonly locale?: string;

  /**
   * @schema GetRecommendationsRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

  /**
   * @schema GetRecommendationsRequest#startTime
   */
  readonly startTime: string;

}

/**
 * @schema GetRecommendationsResponse
 */
export interface GetRecommendationsResponse {
  /**
   * @schema GetRecommendationsResponse#anomalies
   */
  readonly anomalies: Anomaly[];

  /**
   * @schema GetRecommendationsResponse#profileEndTime
   */
  readonly profileEndTime: string;

  /**
   * @schema GetRecommendationsResponse#profileStartTime
   */
  readonly profileStartTime: string;

  /**
   * @schema GetRecommendationsResponse#profilingGroupName
   */
  readonly profilingGroupName: string;

  /**
   * @schema GetRecommendationsResponse#recommendations
   */
  readonly recommendations: Recommendation[];

}

/**
 * @schema ListFindingsReportsRequest
 */
export interface ListFindingsReportsRequest {
  /**
   * @schema ListFindingsReportsRequest#dailyReportsOnly
   */
  readonly dailyReportsOnly?: boolean;

  /**
   * @schema ListFindingsReportsRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema ListFindingsReportsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListFindingsReportsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListFindingsReportsRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

  /**
   * @schema ListFindingsReportsRequest#startTime
   */
  readonly startTime: string;

}

/**
 * @schema ListFindingsReportsResponse
 */
export interface ListFindingsReportsResponse {
  /**
   * @schema ListFindingsReportsResponse#findingsReportSummaries
   */
  readonly findingsReportSummaries: FindingsReportSummary[];

  /**
   * @schema ListFindingsReportsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListProfileTimesRequest
 */
export interface ListProfileTimesRequest {
  /**
   * @schema ListProfileTimesRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema ListProfileTimesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListProfileTimesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListProfileTimesRequest#orderBy
   */
  readonly orderBy?: string;

  /**
   * @schema ListProfileTimesRequest#period
   */
  readonly period: string;

  /**
   * @schema ListProfileTimesRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

  /**
   * @schema ListProfileTimesRequest#startTime
   */
  readonly startTime: string;

}

/**
 * @schema ListProfileTimesResponse
 */
export interface ListProfileTimesResponse {
  /**
   * @schema ListProfileTimesResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListProfileTimesResponse#profileTimes
   */
  readonly profileTimes: ProfileTime[];

}

/**
 * @schema ListProfilingGroupsRequest
 */
export interface ListProfilingGroupsRequest {
  /**
   * @schema ListProfilingGroupsRequest#includeDescription
   */
  readonly includeDescription?: boolean;

  /**
   * @schema ListProfilingGroupsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListProfilingGroupsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListProfilingGroupsResponse
 */
export interface ListProfilingGroupsResponse {
  /**
   * @schema ListProfilingGroupsResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListProfilingGroupsResponse#profilingGroupNames
   */
  readonly profilingGroupNames: string[];

  /**
   * @schema ListProfilingGroupsResponse#profilingGroups
   */
  readonly profilingGroups?: ProfilingGroupDescription[];

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema PostAgentProfileRequest
 */
export interface PostAgentProfileRequest {
  /**
   * @schema PostAgentProfileRequest#agentProfile
   */
  readonly agentProfile: any;

  /**
   * @schema PostAgentProfileRequest#contentType
   */
  readonly contentType: string;

  /**
   * @schema PostAgentProfileRequest#profileToken
   */
  readonly profileToken?: string;

  /**
   * @schema PostAgentProfileRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

}

/**
 * @schema PostAgentProfileResponse
 */
export interface PostAgentProfileResponse {
}

/**
 * @schema PutPermissionRequest
 */
export interface PutPermissionRequest {
  /**
   * @schema PutPermissionRequest#actionGroup
   */
  readonly actionGroup: string;

  /**
   * @schema PutPermissionRequest#principals
   */
  readonly principals: string[];

  /**
   * @schema PutPermissionRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

  /**
   * @schema PutPermissionRequest#revisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema PutPermissionResponse
 */
export interface PutPermissionResponse {
  /**
   * @schema PutPermissionResponse#policy
   */
  readonly policy: string;

  /**
   * @schema PutPermissionResponse#revisionId
   */
  readonly revisionId: string;

}

/**
 * @schema RemoveNotificationChannelRequest
 */
export interface RemoveNotificationChannelRequest {
  /**
   * @schema RemoveNotificationChannelRequest#channelId
   */
  readonly channelId: string;

  /**
   * @schema RemoveNotificationChannelRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

}

/**
 * @schema RemoveNotificationChannelResponse
 */
export interface RemoveNotificationChannelResponse {
  /**
   * @schema RemoveNotificationChannelResponse#notificationConfiguration
   */
  readonly notificationConfiguration?: NotificationConfiguration;

}

/**
 * @schema RemovePermissionRequest
 */
export interface RemovePermissionRequest {
  /**
   * @schema RemovePermissionRequest#actionGroup
   */
  readonly actionGroup: string;

  /**
   * @schema RemovePermissionRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

  /**
   * @schema RemovePermissionRequest#revisionId
   */
  readonly revisionId: string;

}

/**
 * @schema RemovePermissionResponse
 */
export interface RemovePermissionResponse {
  /**
   * @schema RemovePermissionResponse#policy
   */
  readonly policy: string;

  /**
   * @schema RemovePermissionResponse#revisionId
   */
  readonly revisionId: string;

}

/**
 * @schema SubmitFeedbackRequest
 */
export interface SubmitFeedbackRequest {
  /**
   * @schema SubmitFeedbackRequest#anomalyInstanceId
   */
  readonly anomalyInstanceId: string;

  /**
   * @schema SubmitFeedbackRequest#comment
   */
  readonly comment?: string;

  /**
   * @schema SubmitFeedbackRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

  /**
   * @schema SubmitFeedbackRequest#type
   */
  readonly type: string;

}

/**
 * @schema SubmitFeedbackResponse
 */
export interface SubmitFeedbackResponse {
}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateProfilingGroupRequest
 */
export interface UpdateProfilingGroupRequest {
  /**
   * @schema UpdateProfilingGroupRequest#agentOrchestrationConfig
   */
  readonly agentOrchestrationConfig: AgentOrchestrationConfig;

  /**
   * @schema UpdateProfilingGroupRequest#profilingGroupName
   */
  readonly profilingGroupName: string;

}

/**
 * @schema UpdateProfilingGroupResponse
 */
export interface UpdateProfilingGroupResponse {
  /**
   * @schema UpdateProfilingGroupResponse#profilingGroup
   */
  readonly profilingGroup: ProfilingGroupDescription;

}

/**
 * @schema Channel
 */
export interface Channel {
  /**
   * @schema Channel#eventPublishers
   */
  readonly eventPublishers: string[];

  /**
   * @schema Channel#id
   */
  readonly id?: string;

  /**
   * @schema Channel#uri
   */
  readonly uri: string;

}

/**
 * @schema NotificationConfiguration
 */
export interface NotificationConfiguration {
  /**
   * @schema NotificationConfiguration#channels
   */
  readonly channels?: Channel[];

}

/**
 * @schema FrameMetric
 */
export interface FrameMetric {
  /**
   * @schema FrameMetric#frameName
   */
  readonly frameName: string;

  /**
   * @schema FrameMetric#threadStates
   */
  readonly threadStates: string[];

  /**
   * @schema FrameMetric#type
   */
  readonly type: string;

}

/**
 * @schema TimestampStructure
 */
export interface TimestampStructure {
  /**
   * @schema TimestampStructure#value
   */
  readonly value: string;

}

/**
 * @schema FrameMetricDatum
 */
export interface FrameMetricDatum {
  /**
   * @schema FrameMetricDatum#frameMetric
   */
  readonly frameMetric: FrameMetric;

  /**
   * @schema FrameMetricDatum#values
   */
  readonly values: number[];

}

/**
 * @schema AgentConfiguration
 */
export interface AgentConfiguration {
  /**
   * @schema AgentConfiguration#agentParameters
   */
  readonly agentParameters?: { [key: string]: string };

  /**
   * @schema AgentConfiguration#periodInSeconds
   */
  readonly periodInSeconds: number;

  /**
   * @schema AgentConfiguration#shouldProfile
   */
  readonly shouldProfile: boolean;

}

/**
 * @schema AgentOrchestrationConfig
 */
export interface AgentOrchestrationConfig {
  /**
   * @schema AgentOrchestrationConfig#profilingEnabled
   */
  readonly profilingEnabled: boolean;

}

/**
 * @schema ProfilingGroupDescription
 */
export interface ProfilingGroupDescription {
  /**
   * @schema ProfilingGroupDescription#agentOrchestrationConfig
   */
  readonly agentOrchestrationConfig?: AgentOrchestrationConfig;

  /**
   * @schema ProfilingGroupDescription#arn
   */
  readonly arn?: string;

  /**
   * @schema ProfilingGroupDescription#computePlatform
   */
  readonly computePlatform?: string;

  /**
   * @schema ProfilingGroupDescription#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema ProfilingGroupDescription#name
   */
  readonly name?: string;

  /**
   * @schema ProfilingGroupDescription#profilingStatus
   */
  readonly profilingStatus?: ProfilingStatus;

  /**
   * @schema ProfilingGroupDescription#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ProfilingGroupDescription#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema FindingsReportSummary
 */
export interface FindingsReportSummary {
  /**
   * @schema FindingsReportSummary#id
   */
  readonly id?: string;

  /**
   * @schema FindingsReportSummary#profileEndTime
   */
  readonly profileEndTime?: string;

  /**
   * @schema FindingsReportSummary#profileStartTime
   */
  readonly profileStartTime?: string;

  /**
   * @schema FindingsReportSummary#profilingGroupName
   */
  readonly profilingGroupName?: string;

  /**
   * @schema FindingsReportSummary#totalNumberOfFindings
   */
  readonly totalNumberOfFindings?: number;

}

/**
 * @schema Anomaly
 */
export interface Anomaly {
  /**
   * @schema Anomaly#instances
   */
  readonly instances: AnomalyInstance[];

  /**
   * @schema Anomaly#metric
   */
  readonly metric: Metric;

  /**
   * @schema Anomaly#reason
   */
  readonly reason: string;

}

/**
 * @schema Recommendation
 */
export interface Recommendation {
  /**
   * @schema Recommendation#allMatchesCount
   */
  readonly allMatchesCount: number;

  /**
   * @schema Recommendation#allMatchesSum
   */
  readonly allMatchesSum: number;

  /**
   * @schema Recommendation#endTime
   */
  readonly endTime: string;

  /**
   * @schema Recommendation#pattern
   */
  readonly pattern: Pattern;

  /**
   * @schema Recommendation#startTime
   */
  readonly startTime: string;

  /**
   * @schema Recommendation#topMatches
   */
  readonly topMatches: Match[];

}

/**
 * @schema ProfileTime
 */
export interface ProfileTime {
  /**
   * @schema ProfileTime#start
   */
  readonly start?: string;

}

/**
 * @schema ProfilingStatus
 */
export interface ProfilingStatus {
  /**
   * @schema ProfilingStatus#latestAgentOrchestratedAt
   */
  readonly latestAgentOrchestratedAt?: string;

  /**
   * @schema ProfilingStatus#latestAgentProfileReportedAt
   */
  readonly latestAgentProfileReportedAt?: string;

  /**
   * @schema ProfilingStatus#latestAggregatedProfile
   */
  readonly latestAggregatedProfile?: AggregatedProfileTime;

}

/**
 * @schema AnomalyInstance
 */
export interface AnomalyInstance {
  /**
   * @schema AnomalyInstance#endTime
   */
  readonly endTime?: string;

  /**
   * @schema AnomalyInstance#id
   */
  readonly id: string;

  /**
   * @schema AnomalyInstance#startTime
   */
  readonly startTime: string;

  /**
   * @schema AnomalyInstance#userFeedback
   */
  readonly userFeedback?: UserFeedback;

}

/**
 * @schema Metric
 */
export interface Metric {
  /**
   * @schema Metric#frameName
   */
  readonly frameName: string;

  /**
   * @schema Metric#threadStates
   */
  readonly threadStates: string[];

  /**
   * @schema Metric#type
   */
  readonly type: string;

}

/**
 * @schema Pattern
 */
export interface Pattern {
  /**
   * @schema Pattern#countersToAggregate
   */
  readonly countersToAggregate?: string[];

  /**
   * @schema Pattern#description
   */
  readonly description?: string;

  /**
   * @schema Pattern#id
   */
  readonly id?: string;

  /**
   * @schema Pattern#name
   */
  readonly name?: string;

  /**
   * @schema Pattern#resolutionSteps
   */
  readonly resolutionSteps?: string;

  /**
   * @schema Pattern#targetFrames
   */
  readonly targetFrames?: string[][];

  /**
   * @schema Pattern#thresholdPercent
   */
  readonly thresholdPercent?: number;

}

/**
 * @schema Match
 */
export interface Match {
  /**
   * @schema Match#frameAddress
   */
  readonly frameAddress?: string;

  /**
   * @schema Match#targetFramesIndex
   */
  readonly targetFramesIndex?: number;

  /**
   * @schema Match#thresholdBreachValue
   */
  readonly thresholdBreachValue?: number;

}

/**
 * @schema AggregatedProfileTime
 */
export interface AggregatedProfileTime {
  /**
   * @schema AggregatedProfileTime#period
   */
  readonly period?: string;

  /**
   * @schema AggregatedProfileTime#start
   */
  readonly start?: string;

}

/**
 * @schema UserFeedback
 */
export interface UserFeedback {
  /**
   * @schema UserFeedback#type
   */
  readonly type: string;

}
