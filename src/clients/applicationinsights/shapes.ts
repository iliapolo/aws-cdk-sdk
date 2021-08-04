/**
 * @schema ApplicationInsightsCreateApplicationRequest
 */
export interface ApplicationInsightsCreateApplicationRequest {
  /**
   * @schema ApplicationInsightsCreateApplicationRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema ApplicationInsightsCreateApplicationRequest#OpsCenterEnabled
   */
  readonly opsCenterEnabled?: boolean;

  /**
   * @schema ApplicationInsightsCreateApplicationRequest#CWEMonitorEnabled
   */
  readonly cweMonitorEnabled?: boolean;

  /**
   * @schema ApplicationInsightsCreateApplicationRequest#OpsItemSNSTopicArn
   */
  readonly opsItemSnsTopicArn?: string;

  /**
   * @schema ApplicationInsightsCreateApplicationRequest#Tags
   */
  readonly tags?: ApplicationInsightsTag[];

}

/**
 * @schema ApplicationInsightsCreateApplicationResponse
 */
export interface ApplicationInsightsCreateApplicationResponse {
  /**
   * @schema ApplicationInsightsCreateApplicationResponse#ApplicationInfo
   */
  readonly applicationInfo?: ApplicationInsightsApplicationInfo;

}

/**
 * @schema ApplicationInsightsCreateComponentRequest
 */
export interface ApplicationInsightsCreateComponentRequest {
  /**
   * @schema ApplicationInsightsCreateComponentRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema ApplicationInsightsCreateComponentRequest#ComponentName
   */
  readonly componentName: string;

  /**
   * @schema ApplicationInsightsCreateComponentRequest#ResourceList
   */
  readonly resourceList: string[];

}

/**
 * @schema ApplicationInsightsCreateComponentResponse
 */
export interface ApplicationInsightsCreateComponentResponse {
}

/**
 * @schema ApplicationInsightsCreateLogPatternRequest
 */
export interface ApplicationInsightsCreateLogPatternRequest {
  /**
   * @schema ApplicationInsightsCreateLogPatternRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema ApplicationInsightsCreateLogPatternRequest#PatternSetName
   */
  readonly patternSetName: string;

  /**
   * @schema ApplicationInsightsCreateLogPatternRequest#PatternName
   */
  readonly patternName: string;

  /**
   * @schema ApplicationInsightsCreateLogPatternRequest#Pattern
   */
  readonly pattern: string;

  /**
   * @schema ApplicationInsightsCreateLogPatternRequest#Rank
   */
  readonly rank: number;

}

/**
 * @schema ApplicationInsightsCreateLogPatternResponse
 */
export interface ApplicationInsightsCreateLogPatternResponse {
  /**
   * @schema ApplicationInsightsCreateLogPatternResponse#LogPattern
   */
  readonly logPattern?: ApplicationInsightsLogPattern;

  /**
   * @schema ApplicationInsightsCreateLogPatternResponse#ResourceGroupName
   */
  readonly resourceGroupName?: string;

}

/**
 * @schema ApplicationInsightsDeleteApplicationRequest
 */
export interface ApplicationInsightsDeleteApplicationRequest {
  /**
   * @schema ApplicationInsightsDeleteApplicationRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

}

/**
 * @schema ApplicationInsightsDeleteApplicationResponse
 */
export interface ApplicationInsightsDeleteApplicationResponse {
}

/**
 * @schema ApplicationInsightsDeleteComponentRequest
 */
export interface ApplicationInsightsDeleteComponentRequest {
  /**
   * @schema ApplicationInsightsDeleteComponentRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema ApplicationInsightsDeleteComponentRequest#ComponentName
   */
  readonly componentName: string;

}

/**
 * @schema ApplicationInsightsDeleteComponentResponse
 */
export interface ApplicationInsightsDeleteComponentResponse {
}

/**
 * @schema ApplicationInsightsDeleteLogPatternRequest
 */
export interface ApplicationInsightsDeleteLogPatternRequest {
  /**
   * @schema ApplicationInsightsDeleteLogPatternRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema ApplicationInsightsDeleteLogPatternRequest#PatternSetName
   */
  readonly patternSetName: string;

  /**
   * @schema ApplicationInsightsDeleteLogPatternRequest#PatternName
   */
  readonly patternName: string;

}

/**
 * @schema ApplicationInsightsDeleteLogPatternResponse
 */
export interface ApplicationInsightsDeleteLogPatternResponse {
}

/**
 * @schema ApplicationInsightsDescribeApplicationRequest
 */
export interface ApplicationInsightsDescribeApplicationRequest {
  /**
   * @schema ApplicationInsightsDescribeApplicationRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

}

/**
 * @schema ApplicationInsightsDescribeApplicationResponse
 */
export interface ApplicationInsightsDescribeApplicationResponse {
  /**
   * @schema ApplicationInsightsDescribeApplicationResponse#ApplicationInfo
   */
  readonly applicationInfo?: ApplicationInsightsApplicationInfo;

}

/**
 * @schema ApplicationInsightsDescribeComponentRequest
 */
export interface ApplicationInsightsDescribeComponentRequest {
  /**
   * @schema ApplicationInsightsDescribeComponentRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema ApplicationInsightsDescribeComponentRequest#ComponentName
   */
  readonly componentName: string;

}

/**
 * @schema ApplicationInsightsDescribeComponentResponse
 */
export interface ApplicationInsightsDescribeComponentResponse {
  /**
   * @schema ApplicationInsightsDescribeComponentResponse#ApplicationComponent
   */
  readonly applicationComponent?: ApplicationInsightsApplicationComponent;

  /**
   * @schema ApplicationInsightsDescribeComponentResponse#ResourceList
   */
  readonly resourceList?: string[];

}

/**
 * @schema ApplicationInsightsDescribeComponentConfigurationRequest
 */
export interface ApplicationInsightsDescribeComponentConfigurationRequest {
  /**
   * @schema ApplicationInsightsDescribeComponentConfigurationRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema ApplicationInsightsDescribeComponentConfigurationRequest#ComponentName
   */
  readonly componentName: string;

}

/**
 * @schema ApplicationInsightsDescribeComponentConfigurationResponse
 */
export interface ApplicationInsightsDescribeComponentConfigurationResponse {
  /**
   * @schema ApplicationInsightsDescribeComponentConfigurationResponse#Monitor
   */
  readonly monitor?: boolean;

  /**
   * @schema ApplicationInsightsDescribeComponentConfigurationResponse#Tier
   */
  readonly tier?: string;

  /**
   * @schema ApplicationInsightsDescribeComponentConfigurationResponse#ComponentConfiguration
   */
  readonly componentConfiguration?: string;

}

/**
 * @schema ApplicationInsightsDescribeComponentConfigurationRecommendationRequest
 */
export interface ApplicationInsightsDescribeComponentConfigurationRecommendationRequest {
  /**
   * @schema ApplicationInsightsDescribeComponentConfigurationRecommendationRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema ApplicationInsightsDescribeComponentConfigurationRecommendationRequest#ComponentName
   */
  readonly componentName: string;

  /**
   * @schema ApplicationInsightsDescribeComponentConfigurationRecommendationRequest#Tier
   */
  readonly tier: string;

}

/**
 * @schema ApplicationInsightsDescribeComponentConfigurationRecommendationResponse
 */
export interface ApplicationInsightsDescribeComponentConfigurationRecommendationResponse {
  /**
   * @schema ApplicationInsightsDescribeComponentConfigurationRecommendationResponse#ComponentConfiguration
   */
  readonly componentConfiguration?: string;

}

/**
 * @schema ApplicationInsightsDescribeLogPatternRequest
 */
export interface ApplicationInsightsDescribeLogPatternRequest {
  /**
   * @schema ApplicationInsightsDescribeLogPatternRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema ApplicationInsightsDescribeLogPatternRequest#PatternSetName
   */
  readonly patternSetName: string;

  /**
   * @schema ApplicationInsightsDescribeLogPatternRequest#PatternName
   */
  readonly patternName: string;

}

/**
 * @schema ApplicationInsightsDescribeLogPatternResponse
 */
export interface ApplicationInsightsDescribeLogPatternResponse {
  /**
   * @schema ApplicationInsightsDescribeLogPatternResponse#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsDescribeLogPatternResponse#LogPattern
   */
  readonly logPattern?: ApplicationInsightsLogPattern;

}

/**
 * @schema ApplicationInsightsDescribeObservationRequest
 */
export interface ApplicationInsightsDescribeObservationRequest {
  /**
   * @schema ApplicationInsightsDescribeObservationRequest#ObservationId
   */
  readonly observationId: string;

}

/**
 * @schema ApplicationInsightsDescribeObservationResponse
 */
export interface ApplicationInsightsDescribeObservationResponse {
  /**
   * @schema ApplicationInsightsDescribeObservationResponse#Observation
   */
  readonly observation?: ApplicationInsightsObservation;

}

/**
 * @schema ApplicationInsightsDescribeProblemRequest
 */
export interface ApplicationInsightsDescribeProblemRequest {
  /**
   * @schema ApplicationInsightsDescribeProblemRequest#ProblemId
   */
  readonly problemId: string;

}

/**
 * @schema ApplicationInsightsDescribeProblemResponse
 */
export interface ApplicationInsightsDescribeProblemResponse {
  /**
   * @schema ApplicationInsightsDescribeProblemResponse#Problem
   */
  readonly problem?: ApplicationInsightsProblem;

}

/**
 * @schema ApplicationInsightsDescribeProblemObservationsRequest
 */
export interface ApplicationInsightsDescribeProblemObservationsRequest {
  /**
   * @schema ApplicationInsightsDescribeProblemObservationsRequest#ProblemId
   */
  readonly problemId: string;

}

/**
 * @schema ApplicationInsightsDescribeProblemObservationsResponse
 */
export interface ApplicationInsightsDescribeProblemObservationsResponse {
  /**
   * @schema ApplicationInsightsDescribeProblemObservationsResponse#RelatedObservations
   */
  readonly relatedObservations?: ApplicationInsightsRelatedObservations;

}

/**
 * @schema ApplicationInsightsListApplicationsRequest
 */
export interface ApplicationInsightsListApplicationsRequest {
  /**
   * @schema ApplicationInsightsListApplicationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ApplicationInsightsListApplicationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ApplicationInsightsListApplicationsResponse
 */
export interface ApplicationInsightsListApplicationsResponse {
  /**
   * @schema ApplicationInsightsListApplicationsResponse#ApplicationInfoList
   */
  readonly applicationInfoList?: ApplicationInsightsApplicationInfo[];

  /**
   * @schema ApplicationInsightsListApplicationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ApplicationInsightsListComponentsRequest
 */
export interface ApplicationInsightsListComponentsRequest {
  /**
   * @schema ApplicationInsightsListComponentsRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema ApplicationInsightsListComponentsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ApplicationInsightsListComponentsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ApplicationInsightsListComponentsResponse
 */
export interface ApplicationInsightsListComponentsResponse {
  /**
   * @schema ApplicationInsightsListComponentsResponse#ApplicationComponentList
   */
  readonly applicationComponentList?: ApplicationInsightsApplicationComponent[];

  /**
   * @schema ApplicationInsightsListComponentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ApplicationInsightsListConfigurationHistoryRequest
 */
export interface ApplicationInsightsListConfigurationHistoryRequest {
  /**
   * @schema ApplicationInsightsListConfigurationHistoryRequest#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsListConfigurationHistoryRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ApplicationInsightsListConfigurationHistoryRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ApplicationInsightsListConfigurationHistoryRequest#EventStatus
   */
  readonly eventStatus?: string;

  /**
   * @schema ApplicationInsightsListConfigurationHistoryRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ApplicationInsightsListConfigurationHistoryRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ApplicationInsightsListConfigurationHistoryResponse
 */
export interface ApplicationInsightsListConfigurationHistoryResponse {
  /**
   * @schema ApplicationInsightsListConfigurationHistoryResponse#EventList
   */
  readonly eventList?: ApplicationInsightsConfigurationEvent[];

  /**
   * @schema ApplicationInsightsListConfigurationHistoryResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ApplicationInsightsListLogPatternSetsRequest
 */
export interface ApplicationInsightsListLogPatternSetsRequest {
  /**
   * @schema ApplicationInsightsListLogPatternSetsRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema ApplicationInsightsListLogPatternSetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ApplicationInsightsListLogPatternSetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ApplicationInsightsListLogPatternSetsResponse
 */
export interface ApplicationInsightsListLogPatternSetsResponse {
  /**
   * @schema ApplicationInsightsListLogPatternSetsResponse#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsListLogPatternSetsResponse#LogPatternSets
   */
  readonly logPatternSets?: string[];

  /**
   * @schema ApplicationInsightsListLogPatternSetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ApplicationInsightsListLogPatternsRequest
 */
export interface ApplicationInsightsListLogPatternsRequest {
  /**
   * @schema ApplicationInsightsListLogPatternsRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema ApplicationInsightsListLogPatternsRequest#PatternSetName
   */
  readonly patternSetName?: string;

  /**
   * @schema ApplicationInsightsListLogPatternsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ApplicationInsightsListLogPatternsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ApplicationInsightsListLogPatternsResponse
 */
export interface ApplicationInsightsListLogPatternsResponse {
  /**
   * @schema ApplicationInsightsListLogPatternsResponse#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsListLogPatternsResponse#LogPatterns
   */
  readonly logPatterns?: ApplicationInsightsLogPattern[];

  /**
   * @schema ApplicationInsightsListLogPatternsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ApplicationInsightsListProblemsRequest
 */
export interface ApplicationInsightsListProblemsRequest {
  /**
   * @schema ApplicationInsightsListProblemsRequest#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsListProblemsRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ApplicationInsightsListProblemsRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ApplicationInsightsListProblemsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ApplicationInsightsListProblemsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ApplicationInsightsListProblemsResponse
 */
export interface ApplicationInsightsListProblemsResponse {
  /**
   * @schema ApplicationInsightsListProblemsResponse#ProblemList
   */
  readonly problemList?: ApplicationInsightsProblem[];

  /**
   * @schema ApplicationInsightsListProblemsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ApplicationInsightsListTagsForResourceRequest
 */
export interface ApplicationInsightsListTagsForResourceRequest {
  /**
   * @schema ApplicationInsightsListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

}

/**
 * @schema ApplicationInsightsListTagsForResourceResponse
 */
export interface ApplicationInsightsListTagsForResourceResponse {
  /**
   * @schema ApplicationInsightsListTagsForResourceResponse#Tags
   */
  readonly tags?: ApplicationInsightsTag[];

}

/**
 * @schema ApplicationInsightsTagResourceRequest
 */
export interface ApplicationInsightsTagResourceRequest {
  /**
   * @schema ApplicationInsightsTagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema ApplicationInsightsTagResourceRequest#Tags
   */
  readonly tags: ApplicationInsightsTag[];

}

/**
 * @schema ApplicationInsightsTagResourceResponse
 */
export interface ApplicationInsightsTagResourceResponse {
}

/**
 * @schema ApplicationInsightsUntagResourceRequest
 */
export interface ApplicationInsightsUntagResourceRequest {
  /**
   * @schema ApplicationInsightsUntagResourceRequest#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema ApplicationInsightsUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema ApplicationInsightsUntagResourceResponse
 */
export interface ApplicationInsightsUntagResourceResponse {
}

/**
 * @schema ApplicationInsightsUpdateApplicationRequest
 */
export interface ApplicationInsightsUpdateApplicationRequest {
  /**
   * @schema ApplicationInsightsUpdateApplicationRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema ApplicationInsightsUpdateApplicationRequest#OpsCenterEnabled
   */
  readonly opsCenterEnabled?: boolean;

  /**
   * @schema ApplicationInsightsUpdateApplicationRequest#CWEMonitorEnabled
   */
  readonly cweMonitorEnabled?: boolean;

  /**
   * @schema ApplicationInsightsUpdateApplicationRequest#OpsItemSNSTopicArn
   */
  readonly opsItemSnsTopicArn?: string;

  /**
   * @schema ApplicationInsightsUpdateApplicationRequest#RemoveSNSTopic
   */
  readonly removeSnsTopic?: boolean;

}

/**
 * @schema ApplicationInsightsUpdateApplicationResponse
 */
export interface ApplicationInsightsUpdateApplicationResponse {
  /**
   * @schema ApplicationInsightsUpdateApplicationResponse#ApplicationInfo
   */
  readonly applicationInfo?: ApplicationInsightsApplicationInfo;

}

/**
 * @schema ApplicationInsightsUpdateComponentRequest
 */
export interface ApplicationInsightsUpdateComponentRequest {
  /**
   * @schema ApplicationInsightsUpdateComponentRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema ApplicationInsightsUpdateComponentRequest#ComponentName
   */
  readonly componentName: string;

  /**
   * @schema ApplicationInsightsUpdateComponentRequest#NewComponentName
   */
  readonly newComponentName?: string;

  /**
   * @schema ApplicationInsightsUpdateComponentRequest#ResourceList
   */
  readonly resourceList?: string[];

}

/**
 * @schema ApplicationInsightsUpdateComponentResponse
 */
export interface ApplicationInsightsUpdateComponentResponse {
}

/**
 * @schema ApplicationInsightsUpdateComponentConfigurationRequest
 */
export interface ApplicationInsightsUpdateComponentConfigurationRequest {
  /**
   * @schema ApplicationInsightsUpdateComponentConfigurationRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema ApplicationInsightsUpdateComponentConfigurationRequest#ComponentName
   */
  readonly componentName: string;

  /**
   * @schema ApplicationInsightsUpdateComponentConfigurationRequest#Monitor
   */
  readonly monitor?: boolean;

  /**
   * @schema ApplicationInsightsUpdateComponentConfigurationRequest#Tier
   */
  readonly tier?: string;

  /**
   * @schema ApplicationInsightsUpdateComponentConfigurationRequest#ComponentConfiguration
   */
  readonly componentConfiguration?: string;

}

/**
 * @schema ApplicationInsightsUpdateComponentConfigurationResponse
 */
export interface ApplicationInsightsUpdateComponentConfigurationResponse {
}

/**
 * @schema ApplicationInsightsUpdateLogPatternRequest
 */
export interface ApplicationInsightsUpdateLogPatternRequest {
  /**
   * @schema ApplicationInsightsUpdateLogPatternRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema ApplicationInsightsUpdateLogPatternRequest#PatternSetName
   */
  readonly patternSetName: string;

  /**
   * @schema ApplicationInsightsUpdateLogPatternRequest#PatternName
   */
  readonly patternName: string;

  /**
   * @schema ApplicationInsightsUpdateLogPatternRequest#Pattern
   */
  readonly pattern?: string;

  /**
   * @schema ApplicationInsightsUpdateLogPatternRequest#Rank
   */
  readonly rank?: number;

}

/**
 * @schema ApplicationInsightsUpdateLogPatternResponse
 */
export interface ApplicationInsightsUpdateLogPatternResponse {
  /**
   * @schema ApplicationInsightsUpdateLogPatternResponse#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsUpdateLogPatternResponse#LogPattern
   */
  readonly logPattern?: ApplicationInsightsLogPattern;

}

/**
 * @schema ApplicationInsightsTag
 */
export interface ApplicationInsightsTag {
  /**
   * @schema ApplicationInsightsTag#Key
   */
  readonly key: string;

  /**
   * @schema ApplicationInsightsTag#Value
   */
  readonly value: string;

}

/**
 * @schema ApplicationInsightsApplicationInfo
 */
export interface ApplicationInsightsApplicationInfo {
  /**
   * @schema ApplicationInsightsApplicationInfo#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsApplicationInfo#LifeCycle
   */
  readonly lifeCycle?: string;

  /**
   * @schema ApplicationInsightsApplicationInfo#OpsItemSNSTopicArn
   */
  readonly opsItemSnsTopicArn?: string;

  /**
   * @schema ApplicationInsightsApplicationInfo#OpsCenterEnabled
   */
  readonly opsCenterEnabled?: boolean;

  /**
   * @schema ApplicationInsightsApplicationInfo#CWEMonitorEnabled
   */
  readonly cweMonitorEnabled?: boolean;

  /**
   * @schema ApplicationInsightsApplicationInfo#Remarks
   */
  readonly remarks?: string;

}

/**
 * @schema ApplicationInsightsLogPattern
 */
export interface ApplicationInsightsLogPattern {
  /**
   * @schema ApplicationInsightsLogPattern#PatternSetName
   */
  readonly patternSetName?: string;

  /**
   * @schema ApplicationInsightsLogPattern#PatternName
   */
  readonly patternName?: string;

  /**
   * @schema ApplicationInsightsLogPattern#Pattern
   */
  readonly pattern?: string;

  /**
   * @schema ApplicationInsightsLogPattern#Rank
   */
  readonly rank?: number;

}

/**
 * @schema ApplicationInsightsApplicationComponent
 */
export interface ApplicationInsightsApplicationComponent {
  /**
   * @schema ApplicationInsightsApplicationComponent#ComponentName
   */
  readonly componentName?: string;

  /**
   * @schema ApplicationInsightsApplicationComponent#ComponentRemarks
   */
  readonly componentRemarks?: string;

  /**
   * @schema ApplicationInsightsApplicationComponent#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ApplicationInsightsApplicationComponent#OsType
   */
  readonly osType?: string;

  /**
   * @schema ApplicationInsightsApplicationComponent#Tier
   */
  readonly tier?: string;

  /**
   * @schema ApplicationInsightsApplicationComponent#Monitor
   */
  readonly monitor?: boolean;

  /**
   * @schema ApplicationInsightsApplicationComponent#DetectedWorkload
   */
  readonly detectedWorkload?: { [key: string]: { [key: string]: string } };

}

/**
 * @schema ApplicationInsightsObservation
 */
export interface ApplicationInsightsObservation {
  /**
   * @schema ApplicationInsightsObservation#Id
   */
  readonly id?: string;

  /**
   * @schema ApplicationInsightsObservation#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ApplicationInsightsObservation#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ApplicationInsightsObservation#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema ApplicationInsightsObservation#SourceARN
   */
  readonly sourceArn?: string;

  /**
   * @schema ApplicationInsightsObservation#LogGroup
   */
  readonly logGroup?: string;

  /**
   * @schema ApplicationInsightsObservation#LineTime
   */
  readonly lineTime?: string;

  /**
   * @schema ApplicationInsightsObservation#LogText
   */
  readonly logText?: string;

  /**
   * @schema ApplicationInsightsObservation#LogFilter
   */
  readonly logFilter?: string;

  /**
   * @schema ApplicationInsightsObservation#MetricNamespace
   */
  readonly metricNamespace?: string;

  /**
   * @schema ApplicationInsightsObservation#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema ApplicationInsightsObservation#Unit
   */
  readonly unit?: string;

  /**
   * @schema ApplicationInsightsObservation#Value
   */
  readonly value?: number;

  /**
   * @schema ApplicationInsightsObservation#CloudWatchEventId
   */
  readonly cloudWatchEventId?: string;

  /**
   * @schema ApplicationInsightsObservation#CloudWatchEventSource
   */
  readonly cloudWatchEventSource?: string;

  /**
   * @schema ApplicationInsightsObservation#CloudWatchEventDetailType
   */
  readonly cloudWatchEventDetailType?: string;

  /**
   * @schema ApplicationInsightsObservation#HealthEventArn
   */
  readonly healthEventArn?: string;

  /**
   * @schema ApplicationInsightsObservation#HealthService
   */
  readonly healthService?: string;

  /**
   * @schema ApplicationInsightsObservation#HealthEventTypeCode
   */
  readonly healthEventTypeCode?: string;

  /**
   * @schema ApplicationInsightsObservation#HealthEventTypeCategory
   */
  readonly healthEventTypeCategory?: string;

  /**
   * @schema ApplicationInsightsObservation#HealthEventDescription
   */
  readonly healthEventDescription?: string;

  /**
   * @schema ApplicationInsightsObservation#CodeDeployDeploymentId
   */
  readonly codeDeployDeploymentId?: string;

  /**
   * @schema ApplicationInsightsObservation#CodeDeployDeploymentGroup
   */
  readonly codeDeployDeploymentGroup?: string;

  /**
   * @schema ApplicationInsightsObservation#CodeDeployState
   */
  readonly codeDeployState?: string;

  /**
   * @schema ApplicationInsightsObservation#CodeDeployApplication
   */
  readonly codeDeployApplication?: string;

  /**
   * @schema ApplicationInsightsObservation#CodeDeployInstanceGroupId
   */
  readonly codeDeployInstanceGroupId?: string;

  /**
   * @schema ApplicationInsightsObservation#Ec2State
   */
  readonly ec2State?: string;

  /**
   * @schema ApplicationInsightsObservation#RdsEventCategories
   */
  readonly rdsEventCategories?: string;

  /**
   * @schema ApplicationInsightsObservation#RdsEventMessage
   */
  readonly rdsEventMessage?: string;

  /**
   * @schema ApplicationInsightsObservation#S3EventName
   */
  readonly s3EventName?: string;

  /**
   * @schema ApplicationInsightsObservation#StatesExecutionArn
   */
  readonly statesExecutionArn?: string;

  /**
   * @schema ApplicationInsightsObservation#StatesArn
   */
  readonly statesArn?: string;

  /**
   * @schema ApplicationInsightsObservation#StatesStatus
   */
  readonly statesStatus?: string;

  /**
   * @schema ApplicationInsightsObservation#StatesInput
   */
  readonly statesInput?: string;

  /**
   * @schema ApplicationInsightsObservation#EbsEvent
   */
  readonly ebsEvent?: string;

  /**
   * @schema ApplicationInsightsObservation#EbsResult
   */
  readonly ebsResult?: string;

  /**
   * @schema ApplicationInsightsObservation#EbsCause
   */
  readonly ebsCause?: string;

  /**
   * @schema ApplicationInsightsObservation#EbsRequestId
   */
  readonly ebsRequestId?: string;

  /**
   * @schema ApplicationInsightsObservation#XRayFaultPercent
   */
  readonly xRayFaultPercent?: number;

  /**
   * @schema ApplicationInsightsObservation#XRayThrottlePercent
   */
  readonly xRayThrottlePercent?: number;

  /**
   * @schema ApplicationInsightsObservation#XRayErrorPercent
   */
  readonly xRayErrorPercent?: number;

  /**
   * @schema ApplicationInsightsObservation#XRayRequestCount
   */
  readonly xRayRequestCount?: number;

  /**
   * @schema ApplicationInsightsObservation#XRayRequestAverageLatency
   */
  readonly xRayRequestAverageLatency?: number;

  /**
   * @schema ApplicationInsightsObservation#XRayNodeName
   */
  readonly xRayNodeName?: string;

  /**
   * @schema ApplicationInsightsObservation#XRayNodeType
   */
  readonly xRayNodeType?: string;

}

/**
 * @schema ApplicationInsightsProblem
 */
export interface ApplicationInsightsProblem {
  /**
   * @schema ApplicationInsightsProblem#Id
   */
  readonly id?: string;

  /**
   * @schema ApplicationInsightsProblem#Title
   */
  readonly title?: string;

  /**
   * @schema ApplicationInsightsProblem#Insights
   */
  readonly insights?: string;

  /**
   * @schema ApplicationInsightsProblem#Status
   */
  readonly status?: string;

  /**
   * @schema ApplicationInsightsProblem#AffectedResource
   */
  readonly affectedResource?: string;

  /**
   * @schema ApplicationInsightsProblem#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ApplicationInsightsProblem#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ApplicationInsightsProblem#SeverityLevel
   */
  readonly severityLevel?: string;

  /**
   * @schema ApplicationInsightsProblem#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInsightsProblem#Feedback
   */
  readonly feedback?: { [key: string]: string };

}

/**
 * @schema ApplicationInsightsRelatedObservations
 */
export interface ApplicationInsightsRelatedObservations {
  /**
   * @schema ApplicationInsightsRelatedObservations#ObservationList
   */
  readonly observationList?: ApplicationInsightsObservation[];

}

/**
 * @schema ApplicationInsightsConfigurationEvent
 */
export interface ApplicationInsightsConfigurationEvent {
  /**
   * @schema ApplicationInsightsConfigurationEvent#MonitoredResourceARN
   */
  readonly monitoredResourceArn?: string;

  /**
   * @schema ApplicationInsightsConfigurationEvent#EventStatus
   */
  readonly eventStatus?: string;

  /**
   * @schema ApplicationInsightsConfigurationEvent#EventResourceType
   */
  readonly eventResourceType?: string;

  /**
   * @schema ApplicationInsightsConfigurationEvent#EventTime
   */
  readonly eventTime?: string;

  /**
   * @schema ApplicationInsightsConfigurationEvent#EventDetail
   */
  readonly eventDetail?: string;

  /**
   * @schema ApplicationInsightsConfigurationEvent#EventResourceName
   */
  readonly eventResourceName?: string;

}
