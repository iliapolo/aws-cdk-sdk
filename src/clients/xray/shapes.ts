/**
 * @schema XRayBatchGetTracesRequest
 */
export interface XRayBatchGetTracesRequest {
  /**
   * @schema XRayBatchGetTracesRequest#TraceIds
   */
  readonly traceIds: string[];

  /**
   * @schema XRayBatchGetTracesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema XRayBatchGetTracesResult
 */
export interface XRayBatchGetTracesResult {
  /**
   * @schema XRayBatchGetTracesResult#Traces
   */
  readonly traces?: XRayTrace[];

  /**
   * @schema XRayBatchGetTracesResult#UnprocessedTraceIds
   */
  readonly unprocessedTraceIds?: string[];

  /**
   * @schema XRayBatchGetTracesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema XRayCreateGroupRequest
 */
export interface XRayCreateGroupRequest {
  /**
   * @schema XRayCreateGroupRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema XRayCreateGroupRequest#FilterExpression
   */
  readonly filterExpression?: string;

  /**
   * @schema XRayCreateGroupRequest#InsightsConfiguration
   */
  readonly insightsConfiguration?: XRayInsightsConfiguration;

  /**
   * @schema XRayCreateGroupRequest#Tags
   */
  readonly tags?: XRayTag[];

}

/**
 * @schema XRayCreateGroupResult
 */
export interface XRayCreateGroupResult {
  /**
   * @schema XRayCreateGroupResult#Group
   */
  readonly group?: XRayGroup;

}

/**
 * @schema XRayCreateSamplingRuleRequest
 */
export interface XRayCreateSamplingRuleRequest {
  /**
   * @schema XRayCreateSamplingRuleRequest#SamplingRule
   */
  readonly samplingRule: XRaySamplingRule;

  /**
   * @schema XRayCreateSamplingRuleRequest#Tags
   */
  readonly tags?: XRayTag[];

}

/**
 * @schema XRayCreateSamplingRuleResult
 */
export interface XRayCreateSamplingRuleResult {
  /**
   * @schema XRayCreateSamplingRuleResult#SamplingRuleRecord
   */
  readonly samplingRuleRecord?: XRaySamplingRuleRecord;

}

/**
 * @schema XRayDeleteGroupRequest
 */
export interface XRayDeleteGroupRequest {
  /**
   * @schema XRayDeleteGroupRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema XRayDeleteGroupRequest#GroupARN
   */
  readonly groupArn?: string;

}

/**
 * @schema XRayDeleteGroupResult
 */
export interface XRayDeleteGroupResult {
}

/**
 * @schema XRayDeleteSamplingRuleRequest
 */
export interface XRayDeleteSamplingRuleRequest {
  /**
   * @schema XRayDeleteSamplingRuleRequest#RuleName
   */
  readonly ruleName?: string;

  /**
   * @schema XRayDeleteSamplingRuleRequest#RuleARN
   */
  readonly ruleArn?: string;

}

/**
 * @schema XRayDeleteSamplingRuleResult
 */
export interface XRayDeleteSamplingRuleResult {
  /**
   * @schema XRayDeleteSamplingRuleResult#SamplingRuleRecord
   */
  readonly samplingRuleRecord?: XRaySamplingRuleRecord;

}

/**
 * @schema XRayGetEncryptionConfigRequest
 */
export interface XRayGetEncryptionConfigRequest {
}

/**
 * @schema XRayGetEncryptionConfigResult
 */
export interface XRayGetEncryptionConfigResult {
  /**
   * @schema XRayGetEncryptionConfigResult#EncryptionConfig
   */
  readonly encryptionConfig?: XRayEncryptionConfig;

}

/**
 * @schema XRayGetGroupRequest
 */
export interface XRayGetGroupRequest {
  /**
   * @schema XRayGetGroupRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema XRayGetGroupRequest#GroupARN
   */
  readonly groupArn?: string;

}

/**
 * @schema XRayGetGroupResult
 */
export interface XRayGetGroupResult {
  /**
   * @schema XRayGetGroupResult#Group
   */
  readonly group?: XRayGroup;

}

/**
 * @schema XRayGetGroupsRequest
 */
export interface XRayGetGroupsRequest {
  /**
   * @schema XRayGetGroupsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema XRayGetGroupsResult
 */
export interface XRayGetGroupsResult {
  /**
   * @schema XRayGetGroupsResult#Groups
   */
  readonly groups?: XRayGroupSummary[];

  /**
   * @schema XRayGetGroupsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema XRayGetInsightRequest
 */
export interface XRayGetInsightRequest {
  /**
   * @schema XRayGetInsightRequest#InsightId
   */
  readonly insightId: string;

}

/**
 * @schema XRayGetInsightResult
 */
export interface XRayGetInsightResult {
  /**
   * @schema XRayGetInsightResult#Insight
   */
  readonly insight?: XRayInsight;

}

/**
 * @schema XRayGetInsightEventsRequest
 */
export interface XRayGetInsightEventsRequest {
  /**
   * @schema XRayGetInsightEventsRequest#InsightId
   */
  readonly insightId: string;

  /**
   * @schema XRayGetInsightEventsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema XRayGetInsightEventsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema XRayGetInsightEventsResult
 */
export interface XRayGetInsightEventsResult {
  /**
   * @schema XRayGetInsightEventsResult#InsightEvents
   */
  readonly insightEvents?: XRayInsightEvent[];

  /**
   * @schema XRayGetInsightEventsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema XRayGetInsightImpactGraphRequest
 */
export interface XRayGetInsightImpactGraphRequest {
  /**
   * @schema XRayGetInsightImpactGraphRequest#InsightId
   */
  readonly insightId: string;

  /**
   * @schema XRayGetInsightImpactGraphRequest#StartTime
   */
  readonly startTime: string;

  /**
   * @schema XRayGetInsightImpactGraphRequest#EndTime
   */
  readonly endTime: string;

  /**
   * @schema XRayGetInsightImpactGraphRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema XRayGetInsightImpactGraphResult
 */
export interface XRayGetInsightImpactGraphResult {
  /**
   * @schema XRayGetInsightImpactGraphResult#InsightId
   */
  readonly insightId?: string;

  /**
   * @schema XRayGetInsightImpactGraphResult#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema XRayGetInsightImpactGraphResult#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema XRayGetInsightImpactGraphResult#ServiceGraphStartTime
   */
  readonly serviceGraphStartTime?: string;

  /**
   * @schema XRayGetInsightImpactGraphResult#ServiceGraphEndTime
   */
  readonly serviceGraphEndTime?: string;

  /**
   * @schema XRayGetInsightImpactGraphResult#Services
   */
  readonly services?: XRayInsightImpactGraphService[];

  /**
   * @schema XRayGetInsightImpactGraphResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema XRayGetInsightSummariesRequest
 */
export interface XRayGetInsightSummariesRequest {
  /**
   * @schema XRayGetInsightSummariesRequest#States
   */
  readonly states?: string[];

  /**
   * @schema XRayGetInsightSummariesRequest#GroupARN
   */
  readonly groupArn?: string;

  /**
   * @schema XRayGetInsightSummariesRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema XRayGetInsightSummariesRequest#StartTime
   */
  readonly startTime: string;

  /**
   * @schema XRayGetInsightSummariesRequest#EndTime
   */
  readonly endTime: string;

  /**
   * @schema XRayGetInsightSummariesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema XRayGetInsightSummariesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema XRayGetInsightSummariesResult
 */
export interface XRayGetInsightSummariesResult {
  /**
   * @schema XRayGetInsightSummariesResult#InsightSummaries
   */
  readonly insightSummaries?: XRayInsightSummary[];

  /**
   * @schema XRayGetInsightSummariesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema XRayGetSamplingRulesRequest
 */
export interface XRayGetSamplingRulesRequest {
  /**
   * @schema XRayGetSamplingRulesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema XRayGetSamplingRulesResult
 */
export interface XRayGetSamplingRulesResult {
  /**
   * @schema XRayGetSamplingRulesResult#SamplingRuleRecords
   */
  readonly samplingRuleRecords?: XRaySamplingRuleRecord[];

  /**
   * @schema XRayGetSamplingRulesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema XRayGetSamplingStatisticSummariesRequest
 */
export interface XRayGetSamplingStatisticSummariesRequest {
  /**
   * @schema XRayGetSamplingStatisticSummariesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema XRayGetSamplingStatisticSummariesResult
 */
export interface XRayGetSamplingStatisticSummariesResult {
  /**
   * @schema XRayGetSamplingStatisticSummariesResult#SamplingStatisticSummaries
   */
  readonly samplingStatisticSummaries?: XRaySamplingStatisticSummary[];

  /**
   * @schema XRayGetSamplingStatisticSummariesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema XRayGetSamplingTargetsRequest
 */
export interface XRayGetSamplingTargetsRequest {
  /**
   * @schema XRayGetSamplingTargetsRequest#SamplingStatisticsDocuments
   */
  readonly samplingStatisticsDocuments: XRaySamplingStatisticsDocument[];

}

/**
 * @schema XRayGetSamplingTargetsResult
 */
export interface XRayGetSamplingTargetsResult {
  /**
   * @schema XRayGetSamplingTargetsResult#SamplingTargetDocuments
   */
  readonly samplingTargetDocuments?: XRaySamplingTargetDocument[];

  /**
   * @schema XRayGetSamplingTargetsResult#LastRuleModification
   */
  readonly lastRuleModification?: string;

  /**
   * @schema XRayGetSamplingTargetsResult#UnprocessedStatistics
   */
  readonly unprocessedStatistics?: XRayUnprocessedStatistics[];

}

/**
 * @schema XRayGetServiceGraphRequest
 */
export interface XRayGetServiceGraphRequest {
  /**
   * @schema XRayGetServiceGraphRequest#StartTime
   */
  readonly startTime: string;

  /**
   * @schema XRayGetServiceGraphRequest#EndTime
   */
  readonly endTime: string;

  /**
   * @schema XRayGetServiceGraphRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema XRayGetServiceGraphRequest#GroupARN
   */
  readonly groupArn?: string;

  /**
   * @schema XRayGetServiceGraphRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema XRayGetServiceGraphResult
 */
export interface XRayGetServiceGraphResult {
  /**
   * @schema XRayGetServiceGraphResult#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema XRayGetServiceGraphResult#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema XRayGetServiceGraphResult#Services
   */
  readonly services?: XRayService[];

  /**
   * @schema XRayGetServiceGraphResult#ContainsOldGroupVersions
   */
  readonly containsOldGroupVersions?: boolean;

  /**
   * @schema XRayGetServiceGraphResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema XRayGetTimeSeriesServiceStatisticsRequest
 */
export interface XRayGetTimeSeriesServiceStatisticsRequest {
  /**
   * @schema XRayGetTimeSeriesServiceStatisticsRequest#StartTime
   */
  readonly startTime: string;

  /**
   * @schema XRayGetTimeSeriesServiceStatisticsRequest#EndTime
   */
  readonly endTime: string;

  /**
   * @schema XRayGetTimeSeriesServiceStatisticsRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema XRayGetTimeSeriesServiceStatisticsRequest#GroupARN
   */
  readonly groupArn?: string;

  /**
   * @schema XRayGetTimeSeriesServiceStatisticsRequest#EntitySelectorExpression
   */
  readonly entitySelectorExpression?: string;

  /**
   * @schema XRayGetTimeSeriesServiceStatisticsRequest#Period
   */
  readonly period?: number;

  /**
   * @schema XRayGetTimeSeriesServiceStatisticsRequest#ForecastStatistics
   */
  readonly forecastStatistics?: boolean;

  /**
   * @schema XRayGetTimeSeriesServiceStatisticsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema XRayGetTimeSeriesServiceStatisticsResult
 */
export interface XRayGetTimeSeriesServiceStatisticsResult {
  /**
   * @schema XRayGetTimeSeriesServiceStatisticsResult#TimeSeriesServiceStatistics
   */
  readonly timeSeriesServiceStatistics?: XRayTimeSeriesServiceStatistics[];

  /**
   * @schema XRayGetTimeSeriesServiceStatisticsResult#ContainsOldGroupVersions
   */
  readonly containsOldGroupVersions?: boolean;

  /**
   * @schema XRayGetTimeSeriesServiceStatisticsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema XRayGetTraceGraphRequest
 */
export interface XRayGetTraceGraphRequest {
  /**
   * @schema XRayGetTraceGraphRequest#TraceIds
   */
  readonly traceIds: string[];

  /**
   * @schema XRayGetTraceGraphRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema XRayGetTraceGraphResult
 */
export interface XRayGetTraceGraphResult {
  /**
   * @schema XRayGetTraceGraphResult#Services
   */
  readonly services?: XRayService[];

  /**
   * @schema XRayGetTraceGraphResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema XRayGetTraceSummariesRequest
 */
export interface XRayGetTraceSummariesRequest {
  /**
   * @schema XRayGetTraceSummariesRequest#StartTime
   */
  readonly startTime: string;

  /**
   * @schema XRayGetTraceSummariesRequest#EndTime
   */
  readonly endTime: string;

  /**
   * @schema XRayGetTraceSummariesRequest#TimeRangeType
   */
  readonly timeRangeType?: string;

  /**
   * @schema XRayGetTraceSummariesRequest#Sampling
   */
  readonly sampling?: boolean;

  /**
   * @schema XRayGetTraceSummariesRequest#SamplingStrategy
   */
  readonly samplingStrategy?: XRaySamplingStrategy;

  /**
   * @schema XRayGetTraceSummariesRequest#FilterExpression
   */
  readonly filterExpression?: string;

  /**
   * @schema XRayGetTraceSummariesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema XRayGetTraceSummariesResult
 */
export interface XRayGetTraceSummariesResult {
  /**
   * @schema XRayGetTraceSummariesResult#TraceSummaries
   */
  readonly traceSummaries?: XRayTraceSummary[];

  /**
   * @schema XRayGetTraceSummariesResult#ApproximateTime
   */
  readonly approximateTime?: string;

  /**
   * @schema XRayGetTraceSummariesResult#TracesProcessedCount
   */
  readonly tracesProcessedCount?: number;

  /**
   * @schema XRayGetTraceSummariesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema XRayListTagsForResourceRequest
 */
export interface XRayListTagsForResourceRequest {
  /**
   * @schema XRayListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema XRayListTagsForResourceRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema XRayListTagsForResourceResponse
 */
export interface XRayListTagsForResourceResponse {
  /**
   * @schema XRayListTagsForResourceResponse#Tags
   */
  readonly tags?: XRayTag[];

  /**
   * @schema XRayListTagsForResourceResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema XRayPutEncryptionConfigRequest
 */
export interface XRayPutEncryptionConfigRequest {
  /**
   * @schema XRayPutEncryptionConfigRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema XRayPutEncryptionConfigRequest#Type
   */
  readonly type: string;

}

/**
 * @schema XRayPutEncryptionConfigResult
 */
export interface XRayPutEncryptionConfigResult {
  /**
   * @schema XRayPutEncryptionConfigResult#EncryptionConfig
   */
  readonly encryptionConfig?: XRayEncryptionConfig;

}

/**
 * @schema XRayPutTelemetryRecordsRequest
 */
export interface XRayPutTelemetryRecordsRequest {
  /**
   * @schema XRayPutTelemetryRecordsRequest#TelemetryRecords
   */
  readonly telemetryRecords: XRayTelemetryRecord[];

  /**
   * @schema XRayPutTelemetryRecordsRequest#EC2InstanceId
   */
  readonly ec2InstanceId?: string;

  /**
   * @schema XRayPutTelemetryRecordsRequest#Hostname
   */
  readonly hostname?: string;

  /**
   * @schema XRayPutTelemetryRecordsRequest#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * @schema XRayPutTelemetryRecordsResult
 */
export interface XRayPutTelemetryRecordsResult {
}

/**
 * @schema XRayPutTraceSegmentsRequest
 */
export interface XRayPutTraceSegmentsRequest {
  /**
   * @schema XRayPutTraceSegmentsRequest#TraceSegmentDocuments
   */
  readonly traceSegmentDocuments: string[];

}

/**
 * @schema XRayPutTraceSegmentsResult
 */
export interface XRayPutTraceSegmentsResult {
  /**
   * @schema XRayPutTraceSegmentsResult#UnprocessedTraceSegments
   */
  readonly unprocessedTraceSegments?: XRayUnprocessedTraceSegment[];

}

/**
 * @schema XRayTagResourceRequest
 */
export interface XRayTagResourceRequest {
  /**
   * @schema XRayTagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema XRayTagResourceRequest#Tags
   */
  readonly tags: XRayTag[];

}

/**
 * @schema XRayTagResourceResponse
 */
export interface XRayTagResourceResponse {
}

/**
 * @schema XRayUntagResourceRequest
 */
export interface XRayUntagResourceRequest {
  /**
   * @schema XRayUntagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema XRayUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema XRayUntagResourceResponse
 */
export interface XRayUntagResourceResponse {
}

/**
 * @schema XRayUpdateGroupRequest
 */
export interface XRayUpdateGroupRequest {
  /**
   * @schema XRayUpdateGroupRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema XRayUpdateGroupRequest#GroupARN
   */
  readonly groupArn?: string;

  /**
   * @schema XRayUpdateGroupRequest#FilterExpression
   */
  readonly filterExpression?: string;

  /**
   * @schema XRayUpdateGroupRequest#InsightsConfiguration
   */
  readonly insightsConfiguration?: XRayInsightsConfiguration;

}

/**
 * @schema XRayUpdateGroupResult
 */
export interface XRayUpdateGroupResult {
  /**
   * @schema XRayUpdateGroupResult#Group
   */
  readonly group?: XRayGroup;

}

/**
 * @schema XRayUpdateSamplingRuleRequest
 */
export interface XRayUpdateSamplingRuleRequest {
  /**
   * @schema XRayUpdateSamplingRuleRequest#SamplingRuleUpdate
   */
  readonly samplingRuleUpdate: XRaySamplingRuleUpdate;

}

/**
 * @schema XRayUpdateSamplingRuleResult
 */
export interface XRayUpdateSamplingRuleResult {
  /**
   * @schema XRayUpdateSamplingRuleResult#SamplingRuleRecord
   */
  readonly samplingRuleRecord?: XRaySamplingRuleRecord;

}

/**
 * @schema XRayTrace
 */
export interface XRayTrace {
  /**
   * @schema XRayTrace#Id
   */
  readonly id?: string;

  /**
   * @schema XRayTrace#Duration
   */
  readonly duration?: number;

  /**
   * @schema XRayTrace#LimitExceeded
   */
  readonly limitExceeded?: boolean;

  /**
   * @schema XRayTrace#Segments
   */
  readonly segments?: XRaySegment[];

}

/**
 * @schema XRayInsightsConfiguration
 */
export interface XRayInsightsConfiguration {
  /**
   * @schema XRayInsightsConfiguration#InsightsEnabled
   */
  readonly insightsEnabled?: boolean;

  /**
   * @schema XRayInsightsConfiguration#NotificationsEnabled
   */
  readonly notificationsEnabled?: boolean;

}

/**
 * @schema XRayTag
 */
export interface XRayTag {
  /**
   * @schema XRayTag#Key
   */
  readonly key: string;

  /**
   * @schema XRayTag#Value
   */
  readonly value: string;

}

/**
 * @schema XRayGroup
 */
export interface XRayGroup {
  /**
   * @schema XRayGroup#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema XRayGroup#GroupARN
   */
  readonly groupArn?: string;

  /**
   * @schema XRayGroup#FilterExpression
   */
  readonly filterExpression?: string;

  /**
   * @schema XRayGroup#InsightsConfiguration
   */
  readonly insightsConfiguration?: XRayInsightsConfiguration;

}

/**
 * @schema XRaySamplingRule
 */
export interface XRaySamplingRule {
  /**
   * @schema XRaySamplingRule#RuleName
   */
  readonly ruleName?: string;

  /**
   * @schema XRaySamplingRule#RuleARN
   */
  readonly ruleArn?: string;

  /**
   * @schema XRaySamplingRule#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema XRaySamplingRule#Priority
   */
  readonly priority: number;

  /**
   * @schema XRaySamplingRule#FixedRate
   */
  readonly fixedRate: number;

  /**
   * @schema XRaySamplingRule#ReservoirSize
   */
  readonly reservoirSize: number;

  /**
   * @schema XRaySamplingRule#ServiceName
   */
  readonly serviceName: string;

  /**
   * @schema XRaySamplingRule#ServiceType
   */
  readonly serviceType: string;

  /**
   * @schema XRaySamplingRule#Host
   */
  readonly host: string;

  /**
   * @schema XRaySamplingRule#HTTPMethod
   */
  readonly httpMethod: string;

  /**
   * @schema XRaySamplingRule#URLPath
   */
  readonly urlPath: string;

  /**
   * @schema XRaySamplingRule#Version
   */
  readonly version: number;

  /**
   * @schema XRaySamplingRule#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema XRaySamplingRuleRecord
 */
export interface XRaySamplingRuleRecord {
  /**
   * @schema XRaySamplingRuleRecord#SamplingRule
   */
  readonly samplingRule?: XRaySamplingRule;

  /**
   * @schema XRaySamplingRuleRecord#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema XRaySamplingRuleRecord#ModifiedAt
   */
  readonly modifiedAt?: string;

}

/**
 * @schema XRayEncryptionConfig
 */
export interface XRayEncryptionConfig {
  /**
   * @schema XRayEncryptionConfig#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema XRayEncryptionConfig#Status
   */
  readonly status?: string;

  /**
   * @schema XRayEncryptionConfig#Type
   */
  readonly type?: string;

}

/**
 * @schema XRayGroupSummary
 */
export interface XRayGroupSummary {
  /**
   * @schema XRayGroupSummary#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema XRayGroupSummary#GroupARN
   */
  readonly groupArn?: string;

  /**
   * @schema XRayGroupSummary#FilterExpression
   */
  readonly filterExpression?: string;

  /**
   * @schema XRayGroupSummary#InsightsConfiguration
   */
  readonly insightsConfiguration?: XRayInsightsConfiguration;

}

/**
 * @schema XRayInsight
 */
export interface XRayInsight {
  /**
   * @schema XRayInsight#InsightId
   */
  readonly insightId?: string;

  /**
   * @schema XRayInsight#GroupARN
   */
  readonly groupArn?: string;

  /**
   * @schema XRayInsight#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema XRayInsight#RootCauseServiceId
   */
  readonly rootCauseServiceId?: XRayServiceId;

  /**
   * @schema XRayInsight#Categories
   */
  readonly categories?: string[];

  /**
   * @schema XRayInsight#State
   */
  readonly state?: string;

  /**
   * @schema XRayInsight#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema XRayInsight#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema XRayInsight#Summary
   */
  readonly summary?: string;

  /**
   * @schema XRayInsight#ClientRequestImpactStatistics
   */
  readonly clientRequestImpactStatistics?: XRayRequestImpactStatistics;

  /**
   * @schema XRayInsight#RootCauseServiceRequestImpactStatistics
   */
  readonly rootCauseServiceRequestImpactStatistics?: XRayRequestImpactStatistics;

  /**
   * @schema XRayInsight#TopAnomalousServices
   */
  readonly topAnomalousServices?: XRayAnomalousService[];

}

/**
 * @schema XRayInsightEvent
 */
export interface XRayInsightEvent {
  /**
   * @schema XRayInsightEvent#Summary
   */
  readonly summary?: string;

  /**
   * @schema XRayInsightEvent#EventTime
   */
  readonly eventTime?: string;

  /**
   * @schema XRayInsightEvent#ClientRequestImpactStatistics
   */
  readonly clientRequestImpactStatistics?: XRayRequestImpactStatistics;

  /**
   * @schema XRayInsightEvent#RootCauseServiceRequestImpactStatistics
   */
  readonly rootCauseServiceRequestImpactStatistics?: XRayRequestImpactStatistics;

  /**
   * @schema XRayInsightEvent#TopAnomalousServices
   */
  readonly topAnomalousServices?: XRayAnomalousService[];

}

/**
 * @schema XRayInsightImpactGraphService
 */
export interface XRayInsightImpactGraphService {
  /**
   * @schema XRayInsightImpactGraphService#ReferenceId
   */
  readonly referenceId?: number;

  /**
   * @schema XRayInsightImpactGraphService#Type
   */
  readonly type?: string;

  /**
   * @schema XRayInsightImpactGraphService#Name
   */
  readonly name?: string;

  /**
   * @schema XRayInsightImpactGraphService#Names
   */
  readonly names?: string[];

  /**
   * @schema XRayInsightImpactGraphService#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema XRayInsightImpactGraphService#Edges
   */
  readonly edges?: XRayInsightImpactGraphEdge[];

}

/**
 * @schema XRayInsightSummary
 */
export interface XRayInsightSummary {
  /**
   * @schema XRayInsightSummary#InsightId
   */
  readonly insightId?: string;

  /**
   * @schema XRayInsightSummary#GroupARN
   */
  readonly groupArn?: string;

  /**
   * @schema XRayInsightSummary#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema XRayInsightSummary#RootCauseServiceId
   */
  readonly rootCauseServiceId?: XRayServiceId;

  /**
   * @schema XRayInsightSummary#Categories
   */
  readonly categories?: string[];

  /**
   * @schema XRayInsightSummary#State
   */
  readonly state?: string;

  /**
   * @schema XRayInsightSummary#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema XRayInsightSummary#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema XRayInsightSummary#Summary
   */
  readonly summary?: string;

  /**
   * @schema XRayInsightSummary#ClientRequestImpactStatistics
   */
  readonly clientRequestImpactStatistics?: XRayRequestImpactStatistics;

  /**
   * @schema XRayInsightSummary#RootCauseServiceRequestImpactStatistics
   */
  readonly rootCauseServiceRequestImpactStatistics?: XRayRequestImpactStatistics;

  /**
   * @schema XRayInsightSummary#TopAnomalousServices
   */
  readonly topAnomalousServices?: XRayAnomalousService[];

  /**
   * @schema XRayInsightSummary#LastUpdateTime
   */
  readonly lastUpdateTime?: string;

}

/**
 * @schema XRaySamplingStatisticSummary
 */
export interface XRaySamplingStatisticSummary {
  /**
   * @schema XRaySamplingStatisticSummary#RuleName
   */
  readonly ruleName?: string;

  /**
   * @schema XRaySamplingStatisticSummary#Timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema XRaySamplingStatisticSummary#RequestCount
   */
  readonly requestCount?: number;

  /**
   * @schema XRaySamplingStatisticSummary#BorrowCount
   */
  readonly borrowCount?: number;

  /**
   * @schema XRaySamplingStatisticSummary#SampledCount
   */
  readonly sampledCount?: number;

}

/**
 * @schema XRaySamplingStatisticsDocument
 */
export interface XRaySamplingStatisticsDocument {
  /**
   * @schema XRaySamplingStatisticsDocument#RuleName
   */
  readonly ruleName: string;

  /**
   * @schema XRaySamplingStatisticsDocument#ClientID
   */
  readonly clientId: string;

  /**
   * @schema XRaySamplingStatisticsDocument#Timestamp
   */
  readonly timestamp: string;

  /**
   * @schema XRaySamplingStatisticsDocument#RequestCount
   */
  readonly requestCount: number;

  /**
   * @schema XRaySamplingStatisticsDocument#SampledCount
   */
  readonly sampledCount: number;

  /**
   * @schema XRaySamplingStatisticsDocument#BorrowCount
   */
  readonly borrowCount?: number;

}

/**
 * @schema XRaySamplingTargetDocument
 */
export interface XRaySamplingTargetDocument {
  /**
   * @schema XRaySamplingTargetDocument#RuleName
   */
  readonly ruleName?: string;

  /**
   * @schema XRaySamplingTargetDocument#FixedRate
   */
  readonly fixedRate?: number;

  /**
   * @schema XRaySamplingTargetDocument#ReservoirQuota
   */
  readonly reservoirQuota?: number;

  /**
   * @schema XRaySamplingTargetDocument#ReservoirQuotaTTL
   */
  readonly reservoirQuotaTtl?: string;

  /**
   * @schema XRaySamplingTargetDocument#Interval
   */
  readonly interval?: number;

}

/**
 * @schema XRayUnprocessedStatistics
 */
export interface XRayUnprocessedStatistics {
  /**
   * @schema XRayUnprocessedStatistics#RuleName
   */
  readonly ruleName?: string;

  /**
   * @schema XRayUnprocessedStatistics#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema XRayUnprocessedStatistics#Message
   */
  readonly message?: string;

}

/**
 * @schema XRayService
 */
export interface XRayService {
  /**
   * @schema XRayService#ReferenceId
   */
  readonly referenceId?: number;

  /**
   * @schema XRayService#Name
   */
  readonly name?: string;

  /**
   * @schema XRayService#Names
   */
  readonly names?: string[];

  /**
   * @schema XRayService#Root
   */
  readonly root?: boolean;

  /**
   * @schema XRayService#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema XRayService#Type
   */
  readonly type?: string;

  /**
   * @schema XRayService#State
   */
  readonly state?: string;

  /**
   * @schema XRayService#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema XRayService#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema XRayService#Edges
   */
  readonly edges?: XRayEdge[];

  /**
   * @schema XRayService#SummaryStatistics
   */
  readonly summaryStatistics?: XRayServiceStatistics;

  /**
   * @schema XRayService#DurationHistogram
   */
  readonly durationHistogram?: XRayHistogramEntry[];

  /**
   * @schema XRayService#ResponseTimeHistogram
   */
  readonly responseTimeHistogram?: XRayHistogramEntry[];

}

/**
 * @schema XRayTimeSeriesServiceStatistics
 */
export interface XRayTimeSeriesServiceStatistics {
  /**
   * @schema XRayTimeSeriesServiceStatistics#Timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema XRayTimeSeriesServiceStatistics#EdgeSummaryStatistics
   */
  readonly edgeSummaryStatistics?: XRayEdgeStatistics;

  /**
   * @schema XRayTimeSeriesServiceStatistics#ServiceSummaryStatistics
   */
  readonly serviceSummaryStatistics?: XRayServiceStatistics;

  /**
   * @schema XRayTimeSeriesServiceStatistics#ServiceForecastStatistics
   */
  readonly serviceForecastStatistics?: XRayForecastStatistics;

  /**
   * @schema XRayTimeSeriesServiceStatistics#ResponseTimeHistogram
   */
  readonly responseTimeHistogram?: XRayHistogramEntry[];

}

/**
 * @schema XRaySamplingStrategy
 */
export interface XRaySamplingStrategy {
  /**
   * @schema XRaySamplingStrategy#Name
   */
  readonly name?: string;

  /**
   * @schema XRaySamplingStrategy#Value
   */
  readonly value?: number;

}

/**
 * @schema XRayTraceSummary
 */
export interface XRayTraceSummary {
  /**
   * @schema XRayTraceSummary#Id
   */
  readonly id?: string;

  /**
   * @schema XRayTraceSummary#Duration
   */
  readonly duration?: number;

  /**
   * @schema XRayTraceSummary#ResponseTime
   */
  readonly responseTime?: number;

  /**
   * @schema XRayTraceSummary#HasFault
   */
  readonly hasFault?: boolean;

  /**
   * @schema XRayTraceSummary#HasError
   */
  readonly hasError?: boolean;

  /**
   * @schema XRayTraceSummary#HasThrottle
   */
  readonly hasThrottle?: boolean;

  /**
   * @schema XRayTraceSummary#IsPartial
   */
  readonly isPartial?: boolean;

  /**
   * @schema XRayTraceSummary#Http
   */
  readonly http?: XRayHttp;

  /**
   * @schema XRayTraceSummary#Annotations
   */
  readonly annotations?: { [key: string]: XRayValueWithServiceIds[] };

  /**
   * @schema XRayTraceSummary#Users
   */
  readonly users?: XRayTraceUser[];

  /**
   * @schema XRayTraceSummary#ServiceIds
   */
  readonly serviceIds?: XRayServiceId[];

  /**
   * @schema XRayTraceSummary#ResourceARNs
   */
  readonly resourceArNs?: XRayResourceArnDetail[];

  /**
   * @schema XRayTraceSummary#InstanceIds
   */
  readonly instanceIds?: XRayInstanceIdDetail[];

  /**
   * @schema XRayTraceSummary#AvailabilityZones
   */
  readonly availabilityZones?: XRayAvailabilityZoneDetail[];

  /**
   * @schema XRayTraceSummary#EntryPoint
   */
  readonly entryPoint?: XRayServiceId;

  /**
   * @schema XRayTraceSummary#FaultRootCauses
   */
  readonly faultRootCauses?: XRayFaultRootCause[];

  /**
   * @schema XRayTraceSummary#ErrorRootCauses
   */
  readonly errorRootCauses?: XRayErrorRootCause[];

  /**
   * @schema XRayTraceSummary#ResponseTimeRootCauses
   */
  readonly responseTimeRootCauses?: XRayResponseTimeRootCause[];

  /**
   * @schema XRayTraceSummary#Revision
   */
  readonly revision?: number;

  /**
   * @schema XRayTraceSummary#MatchedEventTime
   */
  readonly matchedEventTime?: string;

}

/**
 * @schema XRayTelemetryRecord
 */
export interface XRayTelemetryRecord {
  /**
   * @schema XRayTelemetryRecord#Timestamp
   */
  readonly timestamp: string;

  /**
   * @schema XRayTelemetryRecord#SegmentsReceivedCount
   */
  readonly segmentsReceivedCount?: number;

  /**
   * @schema XRayTelemetryRecord#SegmentsSentCount
   */
  readonly segmentsSentCount?: number;

  /**
   * @schema XRayTelemetryRecord#SegmentsSpilloverCount
   */
  readonly segmentsSpilloverCount?: number;

  /**
   * @schema XRayTelemetryRecord#SegmentsRejectedCount
   */
  readonly segmentsRejectedCount?: number;

  /**
   * @schema XRayTelemetryRecord#BackendConnectionErrors
   */
  readonly backendConnectionErrors?: XRayBackendConnectionErrors;

}

/**
 * @schema XRayUnprocessedTraceSegment
 */
export interface XRayUnprocessedTraceSegment {
  /**
   * @schema XRayUnprocessedTraceSegment#Id
   */
  readonly id?: string;

  /**
   * @schema XRayUnprocessedTraceSegment#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema XRayUnprocessedTraceSegment#Message
   */
  readonly message?: string;

}

/**
 * @schema XRaySamplingRuleUpdate
 */
export interface XRaySamplingRuleUpdate {
  /**
   * @schema XRaySamplingRuleUpdate#RuleName
   */
  readonly ruleName?: string;

  /**
   * @schema XRaySamplingRuleUpdate#RuleARN
   */
  readonly ruleArn?: string;

  /**
   * @schema XRaySamplingRuleUpdate#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema XRaySamplingRuleUpdate#Priority
   */
  readonly priority?: number;

  /**
   * @schema XRaySamplingRuleUpdate#FixedRate
   */
  readonly fixedRate?: number;

  /**
   * @schema XRaySamplingRuleUpdate#ReservoirSize
   */
  readonly reservoirSize?: number;

  /**
   * @schema XRaySamplingRuleUpdate#Host
   */
  readonly host?: string;

  /**
   * @schema XRaySamplingRuleUpdate#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema XRaySamplingRuleUpdate#ServiceType
   */
  readonly serviceType?: string;

  /**
   * @schema XRaySamplingRuleUpdate#HTTPMethod
   */
  readonly httpMethod?: string;

  /**
   * @schema XRaySamplingRuleUpdate#URLPath
   */
  readonly urlPath?: string;

  /**
   * @schema XRaySamplingRuleUpdate#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema XRaySegment
 */
export interface XRaySegment {
  /**
   * @schema XRaySegment#Id
   */
  readonly id?: string;

  /**
   * @schema XRaySegment#Document
   */
  readonly document?: string;

}

/**
 * @schema XRayServiceId
 */
export interface XRayServiceId {
  /**
   * @schema XRayServiceId#Name
   */
  readonly name?: string;

  /**
   * @schema XRayServiceId#Names
   */
  readonly names?: string[];

  /**
   * @schema XRayServiceId#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema XRayServiceId#Type
   */
  readonly type?: string;

}

/**
 * @schema XRayRequestImpactStatistics
 */
export interface XRayRequestImpactStatistics {
  /**
   * @schema XRayRequestImpactStatistics#FaultCount
   */
  readonly faultCount?: number;

  /**
   * @schema XRayRequestImpactStatistics#OkCount
   */
  readonly okCount?: number;

  /**
   * @schema XRayRequestImpactStatistics#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema XRayAnomalousService
 */
export interface XRayAnomalousService {
  /**
   * @schema XRayAnomalousService#ServiceId
   */
  readonly serviceId?: XRayServiceId;

}

/**
 * @schema XRayInsightImpactGraphEdge
 */
export interface XRayInsightImpactGraphEdge {
  /**
   * @schema XRayInsightImpactGraphEdge#ReferenceId
   */
  readonly referenceId?: number;

}

/**
 * @schema XRayEdge
 */
export interface XRayEdge {
  /**
   * @schema XRayEdge#ReferenceId
   */
  readonly referenceId?: number;

  /**
   * @schema XRayEdge#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema XRayEdge#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema XRayEdge#SummaryStatistics
   */
  readonly summaryStatistics?: XRayEdgeStatistics;

  /**
   * @schema XRayEdge#ResponseTimeHistogram
   */
  readonly responseTimeHistogram?: XRayHistogramEntry[];

  /**
   * @schema XRayEdge#Aliases
   */
  readonly aliases?: XRayAlias[];

}

/**
 * @schema XRayServiceStatistics
 */
export interface XRayServiceStatistics {
  /**
   * @schema XRayServiceStatistics#OkCount
   */
  readonly okCount?: number;

  /**
   * @schema XRayServiceStatistics#ErrorStatistics
   */
  readonly errorStatistics?: XRayErrorStatistics;

  /**
   * @schema XRayServiceStatistics#FaultStatistics
   */
  readonly faultStatistics?: XRayFaultStatistics;

  /**
   * @schema XRayServiceStatistics#TotalCount
   */
  readonly totalCount?: number;

  /**
   * @schema XRayServiceStatistics#TotalResponseTime
   */
  readonly totalResponseTime?: number;

}

/**
 * @schema XRayHistogramEntry
 */
export interface XRayHistogramEntry {
  /**
   * @schema XRayHistogramEntry#Value
   */
  readonly value?: number;

  /**
   * @schema XRayHistogramEntry#Count
   */
  readonly count?: number;

}

/**
 * @schema XRayEdgeStatistics
 */
export interface XRayEdgeStatistics {
  /**
   * @schema XRayEdgeStatistics#OkCount
   */
  readonly okCount?: number;

  /**
   * @schema XRayEdgeStatistics#ErrorStatistics
   */
  readonly errorStatistics?: XRayErrorStatistics;

  /**
   * @schema XRayEdgeStatistics#FaultStatistics
   */
  readonly faultStatistics?: XRayFaultStatistics;

  /**
   * @schema XRayEdgeStatistics#TotalCount
   */
  readonly totalCount?: number;

  /**
   * @schema XRayEdgeStatistics#TotalResponseTime
   */
  readonly totalResponseTime?: number;

}

/**
 * @schema XRayForecastStatistics
 */
export interface XRayForecastStatistics {
  /**
   * @schema XRayForecastStatistics#FaultCountHigh
   */
  readonly faultCountHigh?: number;

  /**
   * @schema XRayForecastStatistics#FaultCountLow
   */
  readonly faultCountLow?: number;

}

/**
 * @schema XRayHttp
 */
export interface XRayHttp {
  /**
   * @schema XRayHttp#HttpURL
   */
  readonly httpUrl?: string;

  /**
   * @schema XRayHttp#HttpStatus
   */
  readonly httpStatus?: number;

  /**
   * @schema XRayHttp#HttpMethod
   */
  readonly httpMethod?: string;

  /**
   * @schema XRayHttp#UserAgent
   */
  readonly userAgent?: string;

  /**
   * @schema XRayHttp#ClientIp
   */
  readonly clientIp?: string;

}

/**
 * @schema XRayValueWithServiceIds
 */
export interface XRayValueWithServiceIds {
  /**
   * @schema XRayValueWithServiceIds#AnnotationValue
   */
  readonly annotationValue?: XRayAnnotationValue;

  /**
   * @schema XRayValueWithServiceIds#ServiceIds
   */
  readonly serviceIds?: XRayServiceId[];

}

/**
 * @schema XRayTraceUser
 */
export interface XRayTraceUser {
  /**
   * @schema XRayTraceUser#UserName
   */
  readonly userName?: string;

  /**
   * @schema XRayTraceUser#ServiceIds
   */
  readonly serviceIds?: XRayServiceId[];

}

/**
 * @schema XRayResourceArnDetail
 */
export interface XRayResourceArnDetail {
  /**
   * @schema XRayResourceArnDetail#ARN
   */
  readonly arn?: string;

}

/**
 * @schema XRayInstanceIdDetail
 */
export interface XRayInstanceIdDetail {
  /**
   * @schema XRayInstanceIdDetail#Id
   */
  readonly id?: string;

}

/**
 * @schema XRayAvailabilityZoneDetail
 */
export interface XRayAvailabilityZoneDetail {
  /**
   * @schema XRayAvailabilityZoneDetail#Name
   */
  readonly name?: string;

}

/**
 * @schema XRayFaultRootCause
 */
export interface XRayFaultRootCause {
  /**
   * @schema XRayFaultRootCause#Services
   */
  readonly services?: XRayFaultRootCauseService[];

  /**
   * @schema XRayFaultRootCause#ClientImpacting
   */
  readonly clientImpacting?: boolean;

}

/**
 * @schema XRayErrorRootCause
 */
export interface XRayErrorRootCause {
  /**
   * @schema XRayErrorRootCause#Services
   */
  readonly services?: XRayErrorRootCauseService[];

  /**
   * @schema XRayErrorRootCause#ClientImpacting
   */
  readonly clientImpacting?: boolean;

}

/**
 * @schema XRayResponseTimeRootCause
 */
export interface XRayResponseTimeRootCause {
  /**
   * @schema XRayResponseTimeRootCause#Services
   */
  readonly services?: XRayResponseTimeRootCauseService[];

  /**
   * @schema XRayResponseTimeRootCause#ClientImpacting
   */
  readonly clientImpacting?: boolean;

}

/**
 * @schema XRayBackendConnectionErrors
 */
export interface XRayBackendConnectionErrors {
  /**
   * @schema XRayBackendConnectionErrors#TimeoutCount
   */
  readonly timeoutCount?: number;

  /**
   * @schema XRayBackendConnectionErrors#ConnectionRefusedCount
   */
  readonly connectionRefusedCount?: number;

  /**
   * @schema XRayBackendConnectionErrors#HTTPCode4XXCount
   */
  readonly httpCode4XxCount?: number;

  /**
   * @schema XRayBackendConnectionErrors#HTTPCode5XXCount
   */
  readonly httpCode5XxCount?: number;

  /**
   * @schema XRayBackendConnectionErrors#UnknownHostCount
   */
  readonly unknownHostCount?: number;

  /**
   * @schema XRayBackendConnectionErrors#OtherCount
   */
  readonly otherCount?: number;

}

/**
 * @schema XRayAlias
 */
export interface XRayAlias {
  /**
   * @schema XRayAlias#Name
   */
  readonly name?: string;

  /**
   * @schema XRayAlias#Names
   */
  readonly names?: string[];

  /**
   * @schema XRayAlias#Type
   */
  readonly type?: string;

}

/**
 * @schema XRayErrorStatistics
 */
export interface XRayErrorStatistics {
  /**
   * @schema XRayErrorStatistics#ThrottleCount
   */
  readonly throttleCount?: number;

  /**
   * @schema XRayErrorStatistics#OtherCount
   */
  readonly otherCount?: number;

  /**
   * @schema XRayErrorStatistics#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema XRayFaultStatistics
 */
export interface XRayFaultStatistics {
  /**
   * @schema XRayFaultStatistics#OtherCount
   */
  readonly otherCount?: number;

  /**
   * @schema XRayFaultStatistics#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * @schema XRayAnnotationValue
 */
export interface XRayAnnotationValue {
  /**
   * @schema XRayAnnotationValue#NumberValue
   */
  readonly numberValue?: number;

  /**
   * @schema XRayAnnotationValue#BooleanValue
   */
  readonly booleanValue?: boolean;

  /**
   * @schema XRayAnnotationValue#StringValue
   */
  readonly stringValue?: string;

}

/**
 * @schema XRayFaultRootCauseService
 */
export interface XRayFaultRootCauseService {
  /**
   * @schema XRayFaultRootCauseService#Name
   */
  readonly name?: string;

  /**
   * @schema XRayFaultRootCauseService#Names
   */
  readonly names?: string[];

  /**
   * @schema XRayFaultRootCauseService#Type
   */
  readonly type?: string;

  /**
   * @schema XRayFaultRootCauseService#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema XRayFaultRootCauseService#EntityPath
   */
  readonly entityPath?: XRayFaultRootCauseEntity[];

  /**
   * @schema XRayFaultRootCauseService#Inferred
   */
  readonly inferred?: boolean;

}

/**
 * @schema XRayErrorRootCauseService
 */
export interface XRayErrorRootCauseService {
  /**
   * @schema XRayErrorRootCauseService#Name
   */
  readonly name?: string;

  /**
   * @schema XRayErrorRootCauseService#Names
   */
  readonly names?: string[];

  /**
   * @schema XRayErrorRootCauseService#Type
   */
  readonly type?: string;

  /**
   * @schema XRayErrorRootCauseService#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema XRayErrorRootCauseService#EntityPath
   */
  readonly entityPath?: XRayErrorRootCauseEntity[];

  /**
   * @schema XRayErrorRootCauseService#Inferred
   */
  readonly inferred?: boolean;

}

/**
 * @schema XRayResponseTimeRootCauseService
 */
export interface XRayResponseTimeRootCauseService {
  /**
   * @schema XRayResponseTimeRootCauseService#Name
   */
  readonly name?: string;

  /**
   * @schema XRayResponseTimeRootCauseService#Names
   */
  readonly names?: string[];

  /**
   * @schema XRayResponseTimeRootCauseService#Type
   */
  readonly type?: string;

  /**
   * @schema XRayResponseTimeRootCauseService#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema XRayResponseTimeRootCauseService#EntityPath
   */
  readonly entityPath?: XRayResponseTimeRootCauseEntity[];

  /**
   * @schema XRayResponseTimeRootCauseService#Inferred
   */
  readonly inferred?: boolean;

}

/**
 * @schema XRayFaultRootCauseEntity
 */
export interface XRayFaultRootCauseEntity {
  /**
   * @schema XRayFaultRootCauseEntity#Name
   */
  readonly name?: string;

  /**
   * @schema XRayFaultRootCauseEntity#Exceptions
   */
  readonly exceptions?: XRayRootCauseException[];

  /**
   * @schema XRayFaultRootCauseEntity#Remote
   */
  readonly remote?: boolean;

}

/**
 * @schema XRayErrorRootCauseEntity
 */
export interface XRayErrorRootCauseEntity {
  /**
   * @schema XRayErrorRootCauseEntity#Name
   */
  readonly name?: string;

  /**
   * @schema XRayErrorRootCauseEntity#Exceptions
   */
  readonly exceptions?: XRayRootCauseException[];

  /**
   * @schema XRayErrorRootCauseEntity#Remote
   */
  readonly remote?: boolean;

}

/**
 * @schema XRayResponseTimeRootCauseEntity
 */
export interface XRayResponseTimeRootCauseEntity {
  /**
   * @schema XRayResponseTimeRootCauseEntity#Name
   */
  readonly name?: string;

  /**
   * @schema XRayResponseTimeRootCauseEntity#Coverage
   */
  readonly coverage?: number;

  /**
   * @schema XRayResponseTimeRootCauseEntity#Remote
   */
  readonly remote?: boolean;

}

/**
 * @schema XRayRootCauseException
 */
export interface XRayRootCauseException {
  /**
   * @schema XRayRootCauseException#Name
   */
  readonly name?: string;

  /**
   * @schema XRayRootCauseException#Message
   */
  readonly message?: string;

}
