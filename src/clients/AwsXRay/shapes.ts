/**
 * @schema BatchGetTracesRequest
 */
export interface BatchGetTracesRequest {
  /**
   * @schema BatchGetTracesRequest#TraceIds
   */
  readonly traceIds: string[];

  /**
   * @schema BatchGetTracesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BatchGetTracesResult
 */
export interface BatchGetTracesResult {
  /**
   * @schema BatchGetTracesResult#Traces
   */
  readonly traces?: Trace[];

  /**
   * @schema BatchGetTracesResult#UnprocessedTraceIds
   */
  readonly unprocessedTraceIds?: string[];

  /**
   * @schema BatchGetTracesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CreateGroupRequest
 */
export interface CreateGroupRequest {
  /**
   * @schema CreateGroupRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema CreateGroupRequest#FilterExpression
   */
  readonly filterExpression?: string;

  /**
   * @schema CreateGroupRequest#InsightsConfiguration
   */
  readonly insightsConfiguration?: InsightsConfiguration;

  /**
   * @schema CreateGroupRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateGroupResult
 */
export interface CreateGroupResult {
  /**
   * @schema CreateGroupResult#Group
   */
  readonly group?: Group;

}

/**
 * @schema CreateSamplingRuleRequest
 */
export interface CreateSamplingRuleRequest {
  /**
   * @schema CreateSamplingRuleRequest#SamplingRule
   */
  readonly samplingRule: SamplingRule;

  /**
   * @schema CreateSamplingRuleRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateSamplingRuleResult
 */
export interface CreateSamplingRuleResult {
  /**
   * @schema CreateSamplingRuleResult#SamplingRuleRecord
   */
  readonly samplingRuleRecord?: SamplingRuleRecord;

}

/**
 * @schema DeleteGroupRequest
 */
export interface DeleteGroupRequest {
  /**
   * @schema DeleteGroupRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema DeleteGroupRequest#GroupARN
   */
  readonly groupArn?: string;

}

/**
 * @schema DeleteGroupResult
 */
export interface DeleteGroupResult {
}

/**
 * @schema DeleteSamplingRuleRequest
 */
export interface DeleteSamplingRuleRequest {
  /**
   * @schema DeleteSamplingRuleRequest#RuleName
   */
  readonly ruleName?: string;

  /**
   * @schema DeleteSamplingRuleRequest#RuleARN
   */
  readonly ruleArn?: string;

}

/**
 * @schema DeleteSamplingRuleResult
 */
export interface DeleteSamplingRuleResult {
  /**
   * @schema DeleteSamplingRuleResult#SamplingRuleRecord
   */
  readonly samplingRuleRecord?: SamplingRuleRecord;

}

/**
 * @schema GetEncryptionConfigRequest
 */
export interface GetEncryptionConfigRequest {
}

/**
 * @schema GetEncryptionConfigResult
 */
export interface GetEncryptionConfigResult {
  /**
   * @schema GetEncryptionConfigResult#EncryptionConfig
   */
  readonly encryptionConfig?: EncryptionConfig;

}

/**
 * @schema GetGroupRequest
 */
export interface GetGroupRequest {
  /**
   * @schema GetGroupRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema GetGroupRequest#GroupARN
   */
  readonly groupArn?: string;

}

/**
 * @schema GetGroupResult
 */
export interface GetGroupResult {
  /**
   * @schema GetGroupResult#Group
   */
  readonly group?: Group;

}

/**
 * @schema GetGroupsRequest
 */
export interface GetGroupsRequest {
  /**
   * @schema GetGroupsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetGroupsResult
 */
export interface GetGroupsResult {
  /**
   * @schema GetGroupsResult#Groups
   */
  readonly groups?: GroupSummary[];

  /**
   * @schema GetGroupsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetInsightRequest
 */
export interface GetInsightRequest {
  /**
   * @schema GetInsightRequest#InsightId
   */
  readonly insightId: string;

}

/**
 * @schema GetInsightResult
 */
export interface GetInsightResult {
  /**
   * @schema GetInsightResult#Insight
   */
  readonly insight?: Insight;

}

/**
 * @schema GetInsightEventsRequest
 */
export interface GetInsightEventsRequest {
  /**
   * @schema GetInsightEventsRequest#InsightId
   */
  readonly insightId: string;

  /**
   * @schema GetInsightEventsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetInsightEventsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetInsightEventsResult
 */
export interface GetInsightEventsResult {
  /**
   * @schema GetInsightEventsResult#InsightEvents
   */
  readonly insightEvents?: InsightEvent[];

  /**
   * @schema GetInsightEventsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetInsightImpactGraphRequest
 */
export interface GetInsightImpactGraphRequest {
  /**
   * @schema GetInsightImpactGraphRequest#InsightId
   */
  readonly insightId: string;

  /**
   * @schema GetInsightImpactGraphRequest#StartTime
   */
  readonly startTime: string;

  /**
   * @schema GetInsightImpactGraphRequest#EndTime
   */
  readonly endTime: string;

  /**
   * @schema GetInsightImpactGraphRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetInsightImpactGraphResult
 */
export interface GetInsightImpactGraphResult {
  /**
   * @schema GetInsightImpactGraphResult#InsightId
   */
  readonly insightId?: string;

  /**
   * @schema GetInsightImpactGraphResult#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema GetInsightImpactGraphResult#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema GetInsightImpactGraphResult#ServiceGraphStartTime
   */
  readonly serviceGraphStartTime?: string;

  /**
   * @schema GetInsightImpactGraphResult#ServiceGraphEndTime
   */
  readonly serviceGraphEndTime?: string;

  /**
   * @schema GetInsightImpactGraphResult#Services
   */
  readonly services?: InsightImpactGraphService[];

  /**
   * @schema GetInsightImpactGraphResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetInsightSummariesRequest
 */
export interface GetInsightSummariesRequest {
  /**
   * @schema GetInsightSummariesRequest#States
   */
  readonly states?: string[];

  /**
   * @schema GetInsightSummariesRequest#GroupARN
   */
  readonly groupArn?: string;

  /**
   * @schema GetInsightSummariesRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema GetInsightSummariesRequest#StartTime
   */
  readonly startTime: string;

  /**
   * @schema GetInsightSummariesRequest#EndTime
   */
  readonly endTime: string;

  /**
   * @schema GetInsightSummariesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetInsightSummariesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetInsightSummariesResult
 */
export interface GetInsightSummariesResult {
  /**
   * @schema GetInsightSummariesResult#InsightSummaries
   */
  readonly insightSummaries?: InsightSummary[];

  /**
   * @schema GetInsightSummariesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetSamplingRulesRequest
 */
export interface GetSamplingRulesRequest {
  /**
   * @schema GetSamplingRulesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetSamplingRulesResult
 */
export interface GetSamplingRulesResult {
  /**
   * @schema GetSamplingRulesResult#SamplingRuleRecords
   */
  readonly samplingRuleRecords?: SamplingRuleRecord[];

  /**
   * @schema GetSamplingRulesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetSamplingStatisticSummariesRequest
 */
export interface GetSamplingStatisticSummariesRequest {
  /**
   * @schema GetSamplingStatisticSummariesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetSamplingStatisticSummariesResult
 */
export interface GetSamplingStatisticSummariesResult {
  /**
   * @schema GetSamplingStatisticSummariesResult#SamplingStatisticSummaries
   */
  readonly samplingStatisticSummaries?: SamplingStatisticSummary[];

  /**
   * @schema GetSamplingStatisticSummariesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetSamplingTargetsRequest
 */
export interface GetSamplingTargetsRequest {
  /**
   * @schema GetSamplingTargetsRequest#SamplingStatisticsDocuments
   */
  readonly samplingStatisticsDocuments: SamplingStatisticsDocument[];

}

/**
 * @schema GetSamplingTargetsResult
 */
export interface GetSamplingTargetsResult {
  /**
   * @schema GetSamplingTargetsResult#SamplingTargetDocuments
   */
  readonly samplingTargetDocuments?: SamplingTargetDocument[];

  /**
   * @schema GetSamplingTargetsResult#LastRuleModification
   */
  readonly lastRuleModification?: string;

  /**
   * @schema GetSamplingTargetsResult#UnprocessedStatistics
   */
  readonly unprocessedStatistics?: UnprocessedStatistics[];

}

/**
 * @schema GetServiceGraphRequest
 */
export interface GetServiceGraphRequest {
  /**
   * @schema GetServiceGraphRequest#StartTime
   */
  readonly startTime: string;

  /**
   * @schema GetServiceGraphRequest#EndTime
   */
  readonly endTime: string;

  /**
   * @schema GetServiceGraphRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema GetServiceGraphRequest#GroupARN
   */
  readonly groupArn?: string;

  /**
   * @schema GetServiceGraphRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetServiceGraphResult
 */
export interface GetServiceGraphResult {
  /**
   * @schema GetServiceGraphResult#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema GetServiceGraphResult#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema GetServiceGraphResult#Services
   */
  readonly services?: Service[];

  /**
   * @schema GetServiceGraphResult#ContainsOldGroupVersions
   */
  readonly containsOldGroupVersions?: boolean;

  /**
   * @schema GetServiceGraphResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetTimeSeriesServiceStatisticsRequest
 */
export interface GetTimeSeriesServiceStatisticsRequest {
  /**
   * @schema GetTimeSeriesServiceStatisticsRequest#StartTime
   */
  readonly startTime: string;

  /**
   * @schema GetTimeSeriesServiceStatisticsRequest#EndTime
   */
  readonly endTime: string;

  /**
   * @schema GetTimeSeriesServiceStatisticsRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema GetTimeSeriesServiceStatisticsRequest#GroupARN
   */
  readonly groupArn?: string;

  /**
   * @schema GetTimeSeriesServiceStatisticsRequest#EntitySelectorExpression
   */
  readonly entitySelectorExpression?: string;

  /**
   * @schema GetTimeSeriesServiceStatisticsRequest#Period
   */
  readonly period?: number;

  /**
   * @schema GetTimeSeriesServiceStatisticsRequest#ForecastStatistics
   */
  readonly forecastStatistics?: boolean;

  /**
   * @schema GetTimeSeriesServiceStatisticsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetTimeSeriesServiceStatisticsResult
 */
export interface GetTimeSeriesServiceStatisticsResult {
  /**
   * @schema GetTimeSeriesServiceStatisticsResult#TimeSeriesServiceStatistics
   */
  readonly timeSeriesServiceStatistics?: TimeSeriesServiceStatistics[];

  /**
   * @schema GetTimeSeriesServiceStatisticsResult#ContainsOldGroupVersions
   */
  readonly containsOldGroupVersions?: boolean;

  /**
   * @schema GetTimeSeriesServiceStatisticsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetTraceGraphRequest
 */
export interface GetTraceGraphRequest {
  /**
   * @schema GetTraceGraphRequest#TraceIds
   */
  readonly traceIds: string[];

  /**
   * @schema GetTraceGraphRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetTraceGraphResult
 */
export interface GetTraceGraphResult {
  /**
   * @schema GetTraceGraphResult#Services
   */
  readonly services?: Service[];

  /**
   * @schema GetTraceGraphResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetTraceSummariesRequest
 */
export interface GetTraceSummariesRequest {
  /**
   * @schema GetTraceSummariesRequest#StartTime
   */
  readonly startTime: string;

  /**
   * @schema GetTraceSummariesRequest#EndTime
   */
  readonly endTime: string;

  /**
   * @schema GetTraceSummariesRequest#TimeRangeType
   */
  readonly timeRangeType?: string;

  /**
   * @schema GetTraceSummariesRequest#Sampling
   */
  readonly sampling?: boolean;

  /**
   * @schema GetTraceSummariesRequest#SamplingStrategy
   */
  readonly samplingStrategy?: SamplingStrategy;

  /**
   * @schema GetTraceSummariesRequest#FilterExpression
   */
  readonly filterExpression?: string;

  /**
   * @schema GetTraceSummariesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetTraceSummariesResult
 */
export interface GetTraceSummariesResult {
  /**
   * @schema GetTraceSummariesResult#TraceSummaries
   */
  readonly traceSummaries?: TraceSummary[];

  /**
   * @schema GetTraceSummariesResult#ApproximateTime
   */
  readonly approximateTime?: string;

  /**
   * @schema GetTraceSummariesResult#TracesProcessedCount
   */
  readonly tracesProcessedCount?: number;

  /**
   * @schema GetTraceSummariesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema ListTagsForResourceRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ListTagsForResourceResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PutEncryptionConfigRequest
 */
export interface PutEncryptionConfigRequest {
  /**
   * @schema PutEncryptionConfigRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema PutEncryptionConfigRequest#Type
   */
  readonly type: string;

}

/**
 * @schema PutEncryptionConfigResult
 */
export interface PutEncryptionConfigResult {
  /**
   * @schema PutEncryptionConfigResult#EncryptionConfig
   */
  readonly encryptionConfig?: EncryptionConfig;

}

/**
 * @schema PutTelemetryRecordsRequest
 */
export interface PutTelemetryRecordsRequest {
  /**
   * @schema PutTelemetryRecordsRequest#TelemetryRecords
   */
  readonly telemetryRecords: TelemetryRecord[];

  /**
   * @schema PutTelemetryRecordsRequest#EC2InstanceId
   */
  readonly ec2InstanceId?: string;

  /**
   * @schema PutTelemetryRecordsRequest#Hostname
   */
  readonly hostname?: string;

  /**
   * @schema PutTelemetryRecordsRequest#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * @schema PutTelemetryRecordsResult
 */
export interface PutTelemetryRecordsResult {
}

/**
 * @schema PutTraceSegmentsRequest
 */
export interface PutTraceSegmentsRequest {
  /**
   * @schema PutTraceSegmentsRequest#TraceSegmentDocuments
   */
  readonly traceSegmentDocuments: string[];

}

/**
 * @schema PutTraceSegmentsResult
 */
export interface PutTraceSegmentsResult {
  /**
   * @schema PutTraceSegmentsResult#UnprocessedTraceSegments
   */
  readonly unprocessedTraceSegments?: UnprocessedTraceSegment[];

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: Tag[];

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
   * @schema UntagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateGroupRequest
 */
export interface UpdateGroupRequest {
  /**
   * @schema UpdateGroupRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema UpdateGroupRequest#GroupARN
   */
  readonly groupArn?: string;

  /**
   * @schema UpdateGroupRequest#FilterExpression
   */
  readonly filterExpression?: string;

  /**
   * @schema UpdateGroupRequest#InsightsConfiguration
   */
  readonly insightsConfiguration?: InsightsConfiguration;

}

/**
 * @schema UpdateGroupResult
 */
export interface UpdateGroupResult {
  /**
   * @schema UpdateGroupResult#Group
   */
  readonly group?: Group;

}

/**
 * @schema UpdateSamplingRuleRequest
 */
export interface UpdateSamplingRuleRequest {
  /**
   * @schema UpdateSamplingRuleRequest#SamplingRuleUpdate
   */
  readonly samplingRuleUpdate: SamplingRuleUpdate;

}

/**
 * @schema UpdateSamplingRuleResult
 */
export interface UpdateSamplingRuleResult {
  /**
   * @schema UpdateSamplingRuleResult#SamplingRuleRecord
   */
  readonly samplingRuleRecord?: SamplingRuleRecord;

}

/**
 * @schema Trace
 */
export interface Trace {
  /**
   * @schema Trace#Id
   */
  readonly id?: string;

  /**
   * @schema Trace#Duration
   */
  readonly duration?: number;

  /**
   * @schema Trace#LimitExceeded
   */
  readonly limitExceeded?: boolean;

  /**
   * @schema Trace#Segments
   */
  readonly segments?: Segment[];

}

/**
 * @schema InsightsConfiguration
 */
export interface InsightsConfiguration {
  /**
   * @schema InsightsConfiguration#InsightsEnabled
   */
  readonly insightsEnabled?: boolean;

  /**
   * @schema InsightsConfiguration#NotificationsEnabled
   */
  readonly notificationsEnabled?: boolean;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key: string;

  /**
   * @schema Tag#Value
   */
  readonly value: string;

}

/**
 * @schema Group
 */
export interface Group {
  /**
   * @schema Group#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema Group#GroupARN
   */
  readonly groupArn?: string;

  /**
   * @schema Group#FilterExpression
   */
  readonly filterExpression?: string;

  /**
   * @schema Group#InsightsConfiguration
   */
  readonly insightsConfiguration?: InsightsConfiguration;

}

/**
 * @schema SamplingRule
 */
export interface SamplingRule {
  /**
   * @schema SamplingRule#RuleName
   */
  readonly ruleName?: string;

  /**
   * @schema SamplingRule#RuleARN
   */
  readonly ruleArn?: string;

  /**
   * @schema SamplingRule#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema SamplingRule#Priority
   */
  readonly priority: number;

  /**
   * @schema SamplingRule#FixedRate
   */
  readonly fixedRate: number;

  /**
   * @schema SamplingRule#ReservoirSize
   */
  readonly reservoirSize: number;

  /**
   * @schema SamplingRule#ServiceName
   */
  readonly serviceName: string;

  /**
   * @schema SamplingRule#ServiceType
   */
  readonly serviceType: string;

  /**
   * @schema SamplingRule#Host
   */
  readonly host: string;

  /**
   * @schema SamplingRule#HTTPMethod
   */
  readonly httpMethod: string;

  /**
   * @schema SamplingRule#URLPath
   */
  readonly urlPath: string;

  /**
   * @schema SamplingRule#Version
   */
  readonly version: number;

  /**
   * @schema SamplingRule#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema SamplingRuleRecord
 */
export interface SamplingRuleRecord {
  /**
   * @schema SamplingRuleRecord#SamplingRule
   */
  readonly samplingRule?: SamplingRule;

  /**
   * @schema SamplingRuleRecord#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema SamplingRuleRecord#ModifiedAt
   */
  readonly modifiedAt?: string;

}

/**
 * @schema EncryptionConfig
 */
export interface EncryptionConfig {
  /**
   * @schema EncryptionConfig#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema EncryptionConfig#Status
   */
  readonly status?: string;

  /**
   * @schema EncryptionConfig#Type
   */
  readonly type?: string;

}

/**
 * @schema GroupSummary
 */
export interface GroupSummary {
  /**
   * @schema GroupSummary#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema GroupSummary#GroupARN
   */
  readonly groupArn?: string;

  /**
   * @schema GroupSummary#FilterExpression
   */
  readonly filterExpression?: string;

  /**
   * @schema GroupSummary#InsightsConfiguration
   */
  readonly insightsConfiguration?: InsightsConfiguration;

}

/**
 * @schema Insight
 */
export interface Insight {
  /**
   * @schema Insight#InsightId
   */
  readonly insightId?: string;

  /**
   * @schema Insight#GroupARN
   */
  readonly groupArn?: string;

  /**
   * @schema Insight#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema Insight#RootCauseServiceId
   */
  readonly rootCauseServiceId?: ServiceId;

  /**
   * @schema Insight#Categories
   */
  readonly categories?: string[];

  /**
   * @schema Insight#State
   */
  readonly state?: string;

  /**
   * @schema Insight#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema Insight#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema Insight#Summary
   */
  readonly summary?: string;

  /**
   * @schema Insight#ClientRequestImpactStatistics
   */
  readonly clientRequestImpactStatistics?: RequestImpactStatistics;

  /**
   * @schema Insight#RootCauseServiceRequestImpactStatistics
   */
  readonly rootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;

  /**
   * @schema Insight#TopAnomalousServices
   */
  readonly topAnomalousServices?: AnomalousService[];

}

/**
 * @schema InsightEvent
 */
export interface InsightEvent {
  /**
   * @schema InsightEvent#Summary
   */
  readonly summary?: string;

  /**
   * @schema InsightEvent#EventTime
   */
  readonly eventTime?: string;

  /**
   * @schema InsightEvent#ClientRequestImpactStatistics
   */
  readonly clientRequestImpactStatistics?: RequestImpactStatistics;

  /**
   * @schema InsightEvent#RootCauseServiceRequestImpactStatistics
   */
  readonly rootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;

  /**
   * @schema InsightEvent#TopAnomalousServices
   */
  readonly topAnomalousServices?: AnomalousService[];

}

/**
 * @schema InsightImpactGraphService
 */
export interface InsightImpactGraphService {
  /**
   * @schema InsightImpactGraphService#ReferenceId
   */
  readonly referenceId?: number;

  /**
   * @schema InsightImpactGraphService#Type
   */
  readonly type?: string;

  /**
   * @schema InsightImpactGraphService#Name
   */
  readonly name?: string;

  /**
   * @schema InsightImpactGraphService#Names
   */
  readonly names?: string[];

  /**
   * @schema InsightImpactGraphService#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema InsightImpactGraphService#Edges
   */
  readonly edges?: InsightImpactGraphEdge[];

}

/**
 * @schema InsightSummary
 */
export interface InsightSummary {
  /**
   * @schema InsightSummary#InsightId
   */
  readonly insightId?: string;

  /**
   * @schema InsightSummary#GroupARN
   */
  readonly groupArn?: string;

  /**
   * @schema InsightSummary#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema InsightSummary#RootCauseServiceId
   */
  readonly rootCauseServiceId?: ServiceId;

  /**
   * @schema InsightSummary#Categories
   */
  readonly categories?: string[];

  /**
   * @schema InsightSummary#State
   */
  readonly state?: string;

  /**
   * @schema InsightSummary#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema InsightSummary#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema InsightSummary#Summary
   */
  readonly summary?: string;

  /**
   * @schema InsightSummary#ClientRequestImpactStatistics
   */
  readonly clientRequestImpactStatistics?: RequestImpactStatistics;

  /**
   * @schema InsightSummary#RootCauseServiceRequestImpactStatistics
   */
  readonly rootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;

  /**
   * @schema InsightSummary#TopAnomalousServices
   */
  readonly topAnomalousServices?: AnomalousService[];

  /**
   * @schema InsightSummary#LastUpdateTime
   */
  readonly lastUpdateTime?: string;

}

/**
 * @schema SamplingStatisticSummary
 */
export interface SamplingStatisticSummary {
  /**
   * @schema SamplingStatisticSummary#RuleName
   */
  readonly ruleName?: string;

  /**
   * @schema SamplingStatisticSummary#Timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema SamplingStatisticSummary#RequestCount
   */
  readonly requestCount?: number;

  /**
   * @schema SamplingStatisticSummary#BorrowCount
   */
  readonly borrowCount?: number;

  /**
   * @schema SamplingStatisticSummary#SampledCount
   */
  readonly sampledCount?: number;

}

/**
 * @schema SamplingStatisticsDocument
 */
export interface SamplingStatisticsDocument {
  /**
   * @schema SamplingStatisticsDocument#RuleName
   */
  readonly ruleName: string;

  /**
   * @schema SamplingStatisticsDocument#ClientID
   */
  readonly clientId: string;

  /**
   * @schema SamplingStatisticsDocument#Timestamp
   */
  readonly timestamp: string;

  /**
   * @schema SamplingStatisticsDocument#RequestCount
   */
  readonly requestCount: number;

  /**
   * @schema SamplingStatisticsDocument#SampledCount
   */
  readonly sampledCount: number;

  /**
   * @schema SamplingStatisticsDocument#BorrowCount
   */
  readonly borrowCount?: number;

}

/**
 * @schema SamplingTargetDocument
 */
export interface SamplingTargetDocument {
  /**
   * @schema SamplingTargetDocument#RuleName
   */
  readonly ruleName?: string;

  /**
   * @schema SamplingTargetDocument#FixedRate
   */
  readonly fixedRate?: number;

  /**
   * @schema SamplingTargetDocument#ReservoirQuota
   */
  readonly reservoirQuota?: number;

  /**
   * @schema SamplingTargetDocument#ReservoirQuotaTTL
   */
  readonly reservoirQuotaTtl?: string;

  /**
   * @schema SamplingTargetDocument#Interval
   */
  readonly interval?: number;

}

/**
 * @schema UnprocessedStatistics
 */
export interface UnprocessedStatistics {
  /**
   * @schema UnprocessedStatistics#RuleName
   */
  readonly ruleName?: string;

  /**
   * @schema UnprocessedStatistics#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema UnprocessedStatistics#Message
   */
  readonly message?: string;

}

/**
 * @schema Service
 */
export interface Service {
  /**
   * @schema Service#ReferenceId
   */
  readonly referenceId?: number;

  /**
   * @schema Service#Name
   */
  readonly name?: string;

  /**
   * @schema Service#Names
   */
  readonly names?: string[];

  /**
   * @schema Service#Root
   */
  readonly root?: boolean;

  /**
   * @schema Service#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema Service#Type
   */
  readonly type?: string;

  /**
   * @schema Service#State
   */
  readonly state?: string;

  /**
   * @schema Service#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema Service#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema Service#Edges
   */
  readonly edges?: Edge[];

  /**
   * @schema Service#SummaryStatistics
   */
  readonly summaryStatistics?: ServiceStatistics;

  /**
   * @schema Service#DurationHistogram
   */
  readonly durationHistogram?: HistogramEntry[];

  /**
   * @schema Service#ResponseTimeHistogram
   */
  readonly responseTimeHistogram?: HistogramEntry[];

}

/**
 * @schema TimeSeriesServiceStatistics
 */
export interface TimeSeriesServiceStatistics {
  /**
   * @schema TimeSeriesServiceStatistics#Timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema TimeSeriesServiceStatistics#EdgeSummaryStatistics
   */
  readonly edgeSummaryStatistics?: EdgeStatistics;

  /**
   * @schema TimeSeriesServiceStatistics#ServiceSummaryStatistics
   */
  readonly serviceSummaryStatistics?: ServiceStatistics;

  /**
   * @schema TimeSeriesServiceStatistics#ServiceForecastStatistics
   */
  readonly serviceForecastStatistics?: ForecastStatistics;

  /**
   * @schema TimeSeriesServiceStatistics#ResponseTimeHistogram
   */
  readonly responseTimeHistogram?: HistogramEntry[];

}

/**
 * @schema SamplingStrategy
 */
export interface SamplingStrategy {
  /**
   * @schema SamplingStrategy#Name
   */
  readonly name?: string;

  /**
   * @schema SamplingStrategy#Value
   */
  readonly value?: number;

}

/**
 * @schema TraceSummary
 */
export interface TraceSummary {
  /**
   * @schema TraceSummary#Id
   */
  readonly id?: string;

  /**
   * @schema TraceSummary#Duration
   */
  readonly duration?: number;

  /**
   * @schema TraceSummary#ResponseTime
   */
  readonly responseTime?: number;

  /**
   * @schema TraceSummary#HasFault
   */
  readonly hasFault?: boolean;

  /**
   * @schema TraceSummary#HasError
   */
  readonly hasError?: boolean;

  /**
   * @schema TraceSummary#HasThrottle
   */
  readonly hasThrottle?: boolean;

  /**
   * @schema TraceSummary#IsPartial
   */
  readonly isPartial?: boolean;

  /**
   * @schema TraceSummary#Http
   */
  readonly http?: Http;

  /**
   * @schema TraceSummary#Annotations
   */
  readonly annotations?: { [key: string]: ValueWithServiceIds[] };

  /**
   * @schema TraceSummary#Users
   */
  readonly users?: TraceUser[];

  /**
   * @schema TraceSummary#ServiceIds
   */
  readonly serviceIds?: ServiceId[];

  /**
   * @schema TraceSummary#ResourceARNs
   */
  readonly resourceArNs?: ResourceArnDetail[];

  /**
   * @schema TraceSummary#InstanceIds
   */
  readonly instanceIds?: InstanceIdDetail[];

  /**
   * @schema TraceSummary#AvailabilityZones
   */
  readonly availabilityZones?: AvailabilityZoneDetail[];

  /**
   * @schema TraceSummary#EntryPoint
   */
  readonly entryPoint?: ServiceId;

  /**
   * @schema TraceSummary#FaultRootCauses
   */
  readonly faultRootCauses?: FaultRootCause[];

  /**
   * @schema TraceSummary#ErrorRootCauses
   */
  readonly errorRootCauses?: ErrorRootCause[];

  /**
   * @schema TraceSummary#ResponseTimeRootCauses
   */
  readonly responseTimeRootCauses?: ResponseTimeRootCause[];

  /**
   * @schema TraceSummary#Revision
   */
  readonly revision?: number;

  /**
   * @schema TraceSummary#MatchedEventTime
   */
  readonly matchedEventTime?: string;

}

/**
 * @schema TelemetryRecord
 */
export interface TelemetryRecord {
  /**
   * @schema TelemetryRecord#Timestamp
   */
  readonly timestamp: string;

  /**
   * @schema TelemetryRecord#SegmentsReceivedCount
   */
  readonly segmentsReceivedCount?: number;

  /**
   * @schema TelemetryRecord#SegmentsSentCount
   */
  readonly segmentsSentCount?: number;

  /**
   * @schema TelemetryRecord#SegmentsSpilloverCount
   */
  readonly segmentsSpilloverCount?: number;

  /**
   * @schema TelemetryRecord#SegmentsRejectedCount
   */
  readonly segmentsRejectedCount?: number;

  /**
   * @schema TelemetryRecord#BackendConnectionErrors
   */
  readonly backendConnectionErrors?: BackendConnectionErrors;

}

/**
 * @schema UnprocessedTraceSegment
 */
export interface UnprocessedTraceSegment {
  /**
   * @schema UnprocessedTraceSegment#Id
   */
  readonly id?: string;

  /**
   * @schema UnprocessedTraceSegment#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema UnprocessedTraceSegment#Message
   */
  readonly message?: string;

}

/**
 * @schema SamplingRuleUpdate
 */
export interface SamplingRuleUpdate {
  /**
   * @schema SamplingRuleUpdate#RuleName
   */
  readonly ruleName?: string;

  /**
   * @schema SamplingRuleUpdate#RuleARN
   */
  readonly ruleArn?: string;

  /**
   * @schema SamplingRuleUpdate#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema SamplingRuleUpdate#Priority
   */
  readonly priority?: number;

  /**
   * @schema SamplingRuleUpdate#FixedRate
   */
  readonly fixedRate?: number;

  /**
   * @schema SamplingRuleUpdate#ReservoirSize
   */
  readonly reservoirSize?: number;

  /**
   * @schema SamplingRuleUpdate#Host
   */
  readonly host?: string;

  /**
   * @schema SamplingRuleUpdate#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema SamplingRuleUpdate#ServiceType
   */
  readonly serviceType?: string;

  /**
   * @schema SamplingRuleUpdate#HTTPMethod
   */
  readonly httpMethod?: string;

  /**
   * @schema SamplingRuleUpdate#URLPath
   */
  readonly urlPath?: string;

  /**
   * @schema SamplingRuleUpdate#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema Segment
 */
export interface Segment {
  /**
   * @schema Segment#Id
   */
  readonly id?: string;

  /**
   * @schema Segment#Document
   */
  readonly document?: string;

}

/**
 * @schema ServiceId
 */
export interface ServiceId {
  /**
   * @schema ServiceId#Name
   */
  readonly name?: string;

  /**
   * @schema ServiceId#Names
   */
  readonly names?: string[];

  /**
   * @schema ServiceId#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ServiceId#Type
   */
  readonly type?: string;

}

/**
 * @schema RequestImpactStatistics
 */
export interface RequestImpactStatistics {
  /**
   * @schema RequestImpactStatistics#FaultCount
   */
  readonly faultCount?: number;

  /**
   * @schema RequestImpactStatistics#OkCount
   */
  readonly okCount?: number;

  /**
   * @schema RequestImpactStatistics#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema AnomalousService
 */
export interface AnomalousService {
  /**
   * @schema AnomalousService#ServiceId
   */
  readonly serviceId?: ServiceId;

}

/**
 * @schema InsightImpactGraphEdge
 */
export interface InsightImpactGraphEdge {
  /**
   * @schema InsightImpactGraphEdge#ReferenceId
   */
  readonly referenceId?: number;

}

/**
 * @schema Edge
 */
export interface Edge {
  /**
   * @schema Edge#ReferenceId
   */
  readonly referenceId?: number;

  /**
   * @schema Edge#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema Edge#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema Edge#SummaryStatistics
   */
  readonly summaryStatistics?: EdgeStatistics;

  /**
   * @schema Edge#ResponseTimeHistogram
   */
  readonly responseTimeHistogram?: HistogramEntry[];

  /**
   * @schema Edge#Aliases
   */
  readonly aliases?: Alias[];

}

/**
 * @schema ServiceStatistics
 */
export interface ServiceStatistics {
  /**
   * @schema ServiceStatistics#OkCount
   */
  readonly okCount?: number;

  /**
   * @schema ServiceStatistics#ErrorStatistics
   */
  readonly errorStatistics?: ErrorStatistics;

  /**
   * @schema ServiceStatistics#FaultStatistics
   */
  readonly faultStatistics?: FaultStatistics;

  /**
   * @schema ServiceStatistics#TotalCount
   */
  readonly totalCount?: number;

  /**
   * @schema ServiceStatistics#TotalResponseTime
   */
  readonly totalResponseTime?: number;

}

/**
 * @schema HistogramEntry
 */
export interface HistogramEntry {
  /**
   * @schema HistogramEntry#Value
   */
  readonly value?: number;

  /**
   * @schema HistogramEntry#Count
   */
  readonly count?: number;

}

/**
 * @schema EdgeStatistics
 */
export interface EdgeStatistics {
  /**
   * @schema EdgeStatistics#OkCount
   */
  readonly okCount?: number;

  /**
   * @schema EdgeStatistics#ErrorStatistics
   */
  readonly errorStatistics?: ErrorStatistics;

  /**
   * @schema EdgeStatistics#FaultStatistics
   */
  readonly faultStatistics?: FaultStatistics;

  /**
   * @schema EdgeStatistics#TotalCount
   */
  readonly totalCount?: number;

  /**
   * @schema EdgeStatistics#TotalResponseTime
   */
  readonly totalResponseTime?: number;

}

/**
 * @schema ForecastStatistics
 */
export interface ForecastStatistics {
  /**
   * @schema ForecastStatistics#FaultCountHigh
   */
  readonly faultCountHigh?: number;

  /**
   * @schema ForecastStatistics#FaultCountLow
   */
  readonly faultCountLow?: number;

}

/**
 * @schema Http
 */
export interface Http {
  /**
   * @schema Http#HttpURL
   */
  readonly httpUrl?: string;

  /**
   * @schema Http#HttpStatus
   */
  readonly httpStatus?: number;

  /**
   * @schema Http#HttpMethod
   */
  readonly httpMethod?: string;

  /**
   * @schema Http#UserAgent
   */
  readonly userAgent?: string;

  /**
   * @schema Http#ClientIp
   */
  readonly clientIp?: string;

}

/**
 * @schema ValueWithServiceIds
 */
export interface ValueWithServiceIds {
  /**
   * @schema ValueWithServiceIds#AnnotationValue
   */
  readonly annotationValue?: AnnotationValue;

  /**
   * @schema ValueWithServiceIds#ServiceIds
   */
  readonly serviceIds?: ServiceId[];

}

/**
 * @schema TraceUser
 */
export interface TraceUser {
  /**
   * @schema TraceUser#UserName
   */
  readonly userName?: string;

  /**
   * @schema TraceUser#ServiceIds
   */
  readonly serviceIds?: ServiceId[];

}

/**
 * @schema ResourceArnDetail
 */
export interface ResourceArnDetail {
  /**
   * @schema ResourceArnDetail#ARN
   */
  readonly arn?: string;

}

/**
 * @schema InstanceIdDetail
 */
export interface InstanceIdDetail {
  /**
   * @schema InstanceIdDetail#Id
   */
  readonly id?: string;

}

/**
 * @schema AvailabilityZoneDetail
 */
export interface AvailabilityZoneDetail {
  /**
   * @schema AvailabilityZoneDetail#Name
   */
  readonly name?: string;

}

/**
 * @schema FaultRootCause
 */
export interface FaultRootCause {
  /**
   * @schema FaultRootCause#Services
   */
  readonly services?: FaultRootCauseService[];

  /**
   * @schema FaultRootCause#ClientImpacting
   */
  readonly clientImpacting?: boolean;

}

/**
 * @schema ErrorRootCause
 */
export interface ErrorRootCause {
  /**
   * @schema ErrorRootCause#Services
   */
  readonly services?: ErrorRootCauseService[];

  /**
   * @schema ErrorRootCause#ClientImpacting
   */
  readonly clientImpacting?: boolean;

}

/**
 * @schema ResponseTimeRootCause
 */
export interface ResponseTimeRootCause {
  /**
   * @schema ResponseTimeRootCause#Services
   */
  readonly services?: ResponseTimeRootCauseService[];

  /**
   * @schema ResponseTimeRootCause#ClientImpacting
   */
  readonly clientImpacting?: boolean;

}

/**
 * @schema BackendConnectionErrors
 */
export interface BackendConnectionErrors {
  /**
   * @schema BackendConnectionErrors#TimeoutCount
   */
  readonly timeoutCount?: number;

  /**
   * @schema BackendConnectionErrors#ConnectionRefusedCount
   */
  readonly connectionRefusedCount?: number;

  /**
   * @schema BackendConnectionErrors#HTTPCode4XXCount
   */
  readonly httpCode4XxCount?: number;

  /**
   * @schema BackendConnectionErrors#HTTPCode5XXCount
   */
  readonly httpCode5XxCount?: number;

  /**
   * @schema BackendConnectionErrors#UnknownHostCount
   */
  readonly unknownHostCount?: number;

  /**
   * @schema BackendConnectionErrors#OtherCount
   */
  readonly otherCount?: number;

}

/**
 * @schema Alias
 */
export interface Alias {
  /**
   * @schema Alias#Name
   */
  readonly name?: string;

  /**
   * @schema Alias#Names
   */
  readonly names?: string[];

  /**
   * @schema Alias#Type
   */
  readonly type?: string;

}

/**
 * @schema ErrorStatistics
 */
export interface ErrorStatistics {
  /**
   * @schema ErrorStatistics#ThrottleCount
   */
  readonly throttleCount?: number;

  /**
   * @schema ErrorStatistics#OtherCount
   */
  readonly otherCount?: number;

  /**
   * @schema ErrorStatistics#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema FaultStatistics
 */
export interface FaultStatistics {
  /**
   * @schema FaultStatistics#OtherCount
   */
  readonly otherCount?: number;

  /**
   * @schema FaultStatistics#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema AnnotationValue
 */
export interface AnnotationValue {
  /**
   * @schema AnnotationValue#NumberValue
   */
  readonly numberValue?: number;

  /**
   * @schema AnnotationValue#BooleanValue
   */
  readonly booleanValue?: boolean;

  /**
   * @schema AnnotationValue#StringValue
   */
  readonly stringValue?: string;

}

/**
 * @schema FaultRootCauseService
 */
export interface FaultRootCauseService {
  /**
   * @schema FaultRootCauseService#Name
   */
  readonly name?: string;

  /**
   * @schema FaultRootCauseService#Names
   */
  readonly names?: string[];

  /**
   * @schema FaultRootCauseService#Type
   */
  readonly type?: string;

  /**
   * @schema FaultRootCauseService#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema FaultRootCauseService#EntityPath
   */
  readonly entityPath?: FaultRootCauseEntity[];

  /**
   * @schema FaultRootCauseService#Inferred
   */
  readonly inferred?: boolean;

}

/**
 * @schema ErrorRootCauseService
 */
export interface ErrorRootCauseService {
  /**
   * @schema ErrorRootCauseService#Name
   */
  readonly name?: string;

  /**
   * @schema ErrorRootCauseService#Names
   */
  readonly names?: string[];

  /**
   * @schema ErrorRootCauseService#Type
   */
  readonly type?: string;

  /**
   * @schema ErrorRootCauseService#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ErrorRootCauseService#EntityPath
   */
  readonly entityPath?: ErrorRootCauseEntity[];

  /**
   * @schema ErrorRootCauseService#Inferred
   */
  readonly inferred?: boolean;

}

/**
 * @schema ResponseTimeRootCauseService
 */
export interface ResponseTimeRootCauseService {
  /**
   * @schema ResponseTimeRootCauseService#Name
   */
  readonly name?: string;

  /**
   * @schema ResponseTimeRootCauseService#Names
   */
  readonly names?: string[];

  /**
   * @schema ResponseTimeRootCauseService#Type
   */
  readonly type?: string;

  /**
   * @schema ResponseTimeRootCauseService#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ResponseTimeRootCauseService#EntityPath
   */
  readonly entityPath?: ResponseTimeRootCauseEntity[];

  /**
   * @schema ResponseTimeRootCauseService#Inferred
   */
  readonly inferred?: boolean;

}

/**
 * @schema FaultRootCauseEntity
 */
export interface FaultRootCauseEntity {
  /**
   * @schema FaultRootCauseEntity#Name
   */
  readonly name?: string;

  /**
   * @schema FaultRootCauseEntity#Exceptions
   */
  readonly exceptions?: RootCauseException[];

  /**
   * @schema FaultRootCauseEntity#Remote
   */
  readonly remote?: boolean;

}

/**
 * @schema ErrorRootCauseEntity
 */
export interface ErrorRootCauseEntity {
  /**
   * @schema ErrorRootCauseEntity#Name
   */
  readonly name?: string;

  /**
   * @schema ErrorRootCauseEntity#Exceptions
   */
  readonly exceptions?: RootCauseException[];

  /**
   * @schema ErrorRootCauseEntity#Remote
   */
  readonly remote?: boolean;

}

/**
 * @schema ResponseTimeRootCauseEntity
 */
export interface ResponseTimeRootCauseEntity {
  /**
   * @schema ResponseTimeRootCauseEntity#Name
   */
  readonly name?: string;

  /**
   * @schema ResponseTimeRootCauseEntity#Coverage
   */
  readonly coverage?: number;

  /**
   * @schema ResponseTimeRootCauseEntity#Remote
   */
  readonly remote?: boolean;

}

/**
 * @schema RootCauseException
 */
export interface RootCauseException {
  /**
   * @schema RootCauseException#Name
   */
  readonly name?: string;

  /**
   * @schema RootCauseException#Message
   */
  readonly message?: string;

}
