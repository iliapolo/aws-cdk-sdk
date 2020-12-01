/**
 * @schema CreateApplicationRequest
 */
export interface CreateApplicationRequest {
  /**
   * @schema CreateApplicationRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema CreateApplicationRequest#OpsCenterEnabled
   */
  readonly opsCenterEnabled?: boolean;

  /**
   * @schema CreateApplicationRequest#CWEMonitorEnabled
   */
  readonly cweMonitorEnabled?: boolean;

  /**
   * @schema CreateApplicationRequest#OpsItemSNSTopicArn
   */
  readonly opsItemSnsTopicArn?: string;

  /**
   * @schema CreateApplicationRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateApplicationResponse
 */
export interface CreateApplicationResponse {
  /**
   * @schema CreateApplicationResponse#ApplicationInfo
   */
  readonly applicationInfo?: ApplicationInfo;

}

/**
 * @schema CreateComponentRequest
 */
export interface CreateComponentRequest {
  /**
   * @schema CreateComponentRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema CreateComponentRequest#ComponentName
   */
  readonly componentName: string;

  /**
   * @schema CreateComponentRequest#ResourceList
   */
  readonly resourceList: string[];

}

/**
 * @schema CreateComponentResponse
 */
export interface CreateComponentResponse {
}

/**
 * @schema CreateLogPatternRequest
 */
export interface CreateLogPatternRequest {
  /**
   * @schema CreateLogPatternRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema CreateLogPatternRequest#PatternSetName
   */
  readonly patternSetName: string;

  /**
   * @schema CreateLogPatternRequest#PatternName
   */
  readonly patternName: string;

  /**
   * @schema CreateLogPatternRequest#Pattern
   */
  readonly pattern: string;

  /**
   * @schema CreateLogPatternRequest#Rank
   */
  readonly rank: number;

}

/**
 * @schema CreateLogPatternResponse
 */
export interface CreateLogPatternResponse {
  /**
   * @schema CreateLogPatternResponse#LogPattern
   */
  readonly logPattern?: LogPattern;

  /**
   * @schema CreateLogPatternResponse#ResourceGroupName
   */
  readonly resourceGroupName?: string;

}

/**
 * @schema DeleteApplicationRequest
 */
export interface DeleteApplicationRequest {
  /**
   * @schema DeleteApplicationRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

}

/**
 * @schema DeleteApplicationResponse
 */
export interface DeleteApplicationResponse {
}

/**
 * @schema DeleteComponentRequest
 */
export interface DeleteComponentRequest {
  /**
   * @schema DeleteComponentRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema DeleteComponentRequest#ComponentName
   */
  readonly componentName: string;

}

/**
 * @schema DeleteComponentResponse
 */
export interface DeleteComponentResponse {
}

/**
 * @schema DeleteLogPatternRequest
 */
export interface DeleteLogPatternRequest {
  /**
   * @schema DeleteLogPatternRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema DeleteLogPatternRequest#PatternSetName
   */
  readonly patternSetName: string;

  /**
   * @schema DeleteLogPatternRequest#PatternName
   */
  readonly patternName: string;

}

/**
 * @schema DeleteLogPatternResponse
 */
export interface DeleteLogPatternResponse {
}

/**
 * @schema DescribeApplicationRequest
 */
export interface DescribeApplicationRequest {
  /**
   * @schema DescribeApplicationRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

}

/**
 * @schema DescribeApplicationResponse
 */
export interface DescribeApplicationResponse {
  /**
   * @schema DescribeApplicationResponse#ApplicationInfo
   */
  readonly applicationInfo?: ApplicationInfo;

}

/**
 * @schema DescribeComponentRequest
 */
export interface DescribeComponentRequest {
  /**
   * @schema DescribeComponentRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema DescribeComponentRequest#ComponentName
   */
  readonly componentName: string;

}

/**
 * @schema DescribeComponentResponse
 */
export interface DescribeComponentResponse {
  /**
   * @schema DescribeComponentResponse#ApplicationComponent
   */
  readonly applicationComponent?: ApplicationComponent;

  /**
   * @schema DescribeComponentResponse#ResourceList
   */
  readonly resourceList?: string[];

}

/**
 * @schema DescribeComponentConfigurationRequest
 */
export interface DescribeComponentConfigurationRequest {
  /**
   * @schema DescribeComponentConfigurationRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema DescribeComponentConfigurationRequest#ComponentName
   */
  readonly componentName: string;

}

/**
 * @schema DescribeComponentConfigurationResponse
 */
export interface DescribeComponentConfigurationResponse {
  /**
   * @schema DescribeComponentConfigurationResponse#Monitor
   */
  readonly monitor?: boolean;

  /**
   * @schema DescribeComponentConfigurationResponse#Tier
   */
  readonly tier?: string;

  /**
   * @schema DescribeComponentConfigurationResponse#ComponentConfiguration
   */
  readonly componentConfiguration?: string;

}

/**
 * @schema DescribeComponentConfigurationRecommendationRequest
 */
export interface DescribeComponentConfigurationRecommendationRequest {
  /**
   * @schema DescribeComponentConfigurationRecommendationRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema DescribeComponentConfigurationRecommendationRequest#ComponentName
   */
  readonly componentName: string;

  /**
   * @schema DescribeComponentConfigurationRecommendationRequest#Tier
   */
  readonly tier: string;

}

/**
 * @schema DescribeComponentConfigurationRecommendationResponse
 */
export interface DescribeComponentConfigurationRecommendationResponse {
  /**
   * @schema DescribeComponentConfigurationRecommendationResponse#ComponentConfiguration
   */
  readonly componentConfiguration?: string;

}

/**
 * @schema DescribeLogPatternRequest
 */
export interface DescribeLogPatternRequest {
  /**
   * @schema DescribeLogPatternRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema DescribeLogPatternRequest#PatternSetName
   */
  readonly patternSetName: string;

  /**
   * @schema DescribeLogPatternRequest#PatternName
   */
  readonly patternName: string;

}

/**
 * @schema DescribeLogPatternResponse
 */
export interface DescribeLogPatternResponse {
  /**
   * @schema DescribeLogPatternResponse#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema DescribeLogPatternResponse#LogPattern
   */
  readonly logPattern?: LogPattern;

}

/**
 * @schema DescribeObservationRequest
 */
export interface DescribeObservationRequest {
  /**
   * @schema DescribeObservationRequest#ObservationId
   */
  readonly observationId: string;

}

/**
 * @schema DescribeObservationResponse
 */
export interface DescribeObservationResponse {
  /**
   * @schema DescribeObservationResponse#Observation
   */
  readonly observation?: Observation;

}

/**
 * @schema DescribeProblemRequest
 */
export interface DescribeProblemRequest {
  /**
   * @schema DescribeProblemRequest#ProblemId
   */
  readonly problemId: string;

}

/**
 * @schema DescribeProblemResponse
 */
export interface DescribeProblemResponse {
  /**
   * @schema DescribeProblemResponse#Problem
   */
  readonly problem?: Problem;

}

/**
 * @schema DescribeProblemObservationsRequest
 */
export interface DescribeProblemObservationsRequest {
  /**
   * @schema DescribeProblemObservationsRequest#ProblemId
   */
  readonly problemId: string;

}

/**
 * @schema DescribeProblemObservationsResponse
 */
export interface DescribeProblemObservationsResponse {
  /**
   * @schema DescribeProblemObservationsResponse#RelatedObservations
   */
  readonly relatedObservations?: RelatedObservations;

}

/**
 * @schema ListApplicationsRequest
 */
export interface ListApplicationsRequest {
  /**
   * @schema ListApplicationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListApplicationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListApplicationsResponse
 */
export interface ListApplicationsResponse {
  /**
   * @schema ListApplicationsResponse#ApplicationInfoList
   */
  readonly applicationInfoList?: ApplicationInfo[];

  /**
   * @schema ListApplicationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListComponentsRequest
 */
export interface ListComponentsRequest {
  /**
   * @schema ListComponentsRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema ListComponentsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListComponentsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListComponentsResponse
 */
export interface ListComponentsResponse {
  /**
   * @schema ListComponentsResponse#ApplicationComponentList
   */
  readonly applicationComponentList?: ApplicationComponent[];

  /**
   * @schema ListComponentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListConfigurationHistoryRequest
 */
export interface ListConfigurationHistoryRequest {
  /**
   * @schema ListConfigurationHistoryRequest#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ListConfigurationHistoryRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ListConfigurationHistoryRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ListConfigurationHistoryRequest#EventStatus
   */
  readonly eventStatus?: string;

  /**
   * @schema ListConfigurationHistoryRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListConfigurationHistoryRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListConfigurationHistoryResponse
 */
export interface ListConfigurationHistoryResponse {
  /**
   * @schema ListConfigurationHistoryResponse#EventList
   */
  readonly eventList?: ConfigurationEvent[];

  /**
   * @schema ListConfigurationHistoryResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListLogPatternSetsRequest
 */
export interface ListLogPatternSetsRequest {
  /**
   * @schema ListLogPatternSetsRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema ListLogPatternSetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListLogPatternSetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListLogPatternSetsResponse
 */
export interface ListLogPatternSetsResponse {
  /**
   * @schema ListLogPatternSetsResponse#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ListLogPatternSetsResponse#LogPatternSets
   */
  readonly logPatternSets?: string[];

  /**
   * @schema ListLogPatternSetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListLogPatternsRequest
 */
export interface ListLogPatternsRequest {
  /**
   * @schema ListLogPatternsRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema ListLogPatternsRequest#PatternSetName
   */
  readonly patternSetName?: string;

  /**
   * @schema ListLogPatternsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListLogPatternsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListLogPatternsResponse
 */
export interface ListLogPatternsResponse {
  /**
   * @schema ListLogPatternsResponse#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ListLogPatternsResponse#LogPatterns
   */
  readonly logPatterns?: LogPattern[];

  /**
   * @schema ListLogPatternsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListProblemsRequest
 */
export interface ListProblemsRequest {
  /**
   * @schema ListProblemsRequest#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ListProblemsRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ListProblemsRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ListProblemsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListProblemsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListProblemsResponse
 */
export interface ListProblemsResponse {
  /**
   * @schema ListProblemsResponse#ProblemList
   */
  readonly problemList?: Problem[];

  /**
   * @schema ListProblemsResponse#NextToken
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

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: Tag[];

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
 * @schema UpdateApplicationRequest
 */
export interface UpdateApplicationRequest {
  /**
   * @schema UpdateApplicationRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema UpdateApplicationRequest#OpsCenterEnabled
   */
  readonly opsCenterEnabled?: boolean;

  /**
   * @schema UpdateApplicationRequest#CWEMonitorEnabled
   */
  readonly cweMonitorEnabled?: boolean;

  /**
   * @schema UpdateApplicationRequest#OpsItemSNSTopicArn
   */
  readonly opsItemSnsTopicArn?: string;

  /**
   * @schema UpdateApplicationRequest#RemoveSNSTopic
   */
  readonly removeSnsTopic?: boolean;

}

/**
 * @schema UpdateApplicationResponse
 */
export interface UpdateApplicationResponse {
  /**
   * @schema UpdateApplicationResponse#ApplicationInfo
   */
  readonly applicationInfo?: ApplicationInfo;

}

/**
 * @schema UpdateComponentRequest
 */
export interface UpdateComponentRequest {
  /**
   * @schema UpdateComponentRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema UpdateComponentRequest#ComponentName
   */
  readonly componentName: string;

  /**
   * @schema UpdateComponentRequest#NewComponentName
   */
  readonly newComponentName?: string;

  /**
   * @schema UpdateComponentRequest#ResourceList
   */
  readonly resourceList?: string[];

}

/**
 * @schema UpdateComponentResponse
 */
export interface UpdateComponentResponse {
}

/**
 * @schema UpdateComponentConfigurationRequest
 */
export interface UpdateComponentConfigurationRequest {
  /**
   * @schema UpdateComponentConfigurationRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema UpdateComponentConfigurationRequest#ComponentName
   */
  readonly componentName: string;

  /**
   * @schema UpdateComponentConfigurationRequest#Monitor
   */
  readonly monitor?: boolean;

  /**
   * @schema UpdateComponentConfigurationRequest#Tier
   */
  readonly tier?: string;

  /**
   * @schema UpdateComponentConfigurationRequest#ComponentConfiguration
   */
  readonly componentConfiguration?: string;

}

/**
 * @schema UpdateComponentConfigurationResponse
 */
export interface UpdateComponentConfigurationResponse {
}

/**
 * @schema UpdateLogPatternRequest
 */
export interface UpdateLogPatternRequest {
  /**
   * @schema UpdateLogPatternRequest#ResourceGroupName
   */
  readonly resourceGroupName: string;

  /**
   * @schema UpdateLogPatternRequest#PatternSetName
   */
  readonly patternSetName: string;

  /**
   * @schema UpdateLogPatternRequest#PatternName
   */
  readonly patternName: string;

  /**
   * @schema UpdateLogPatternRequest#Pattern
   */
  readonly pattern?: string;

  /**
   * @schema UpdateLogPatternRequest#Rank
   */
  readonly rank?: number;

}

/**
 * @schema UpdateLogPatternResponse
 */
export interface UpdateLogPatternResponse {
  /**
   * @schema UpdateLogPatternResponse#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema UpdateLogPatternResponse#LogPattern
   */
  readonly logPattern?: LogPattern;

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
 * @schema ApplicationInfo
 */
export interface ApplicationInfo {
  /**
   * @schema ApplicationInfo#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema ApplicationInfo#LifeCycle
   */
  readonly lifeCycle?: string;

  /**
   * @schema ApplicationInfo#OpsItemSNSTopicArn
   */
  readonly opsItemSnsTopicArn?: string;

  /**
   * @schema ApplicationInfo#OpsCenterEnabled
   */
  readonly opsCenterEnabled?: boolean;

  /**
   * @schema ApplicationInfo#CWEMonitorEnabled
   */
  readonly cweMonitorEnabled?: boolean;

  /**
   * @schema ApplicationInfo#Remarks
   */
  readonly remarks?: string;

}

/**
 * @schema LogPattern
 */
export interface LogPattern {
  /**
   * @schema LogPattern#PatternSetName
   */
  readonly patternSetName?: string;

  /**
   * @schema LogPattern#PatternName
   */
  readonly patternName?: string;

  /**
   * @schema LogPattern#Pattern
   */
  readonly pattern?: string;

  /**
   * @schema LogPattern#Rank
   */
  readonly rank?: number;

}

/**
 * @schema ApplicationComponent
 */
export interface ApplicationComponent {
  /**
   * @schema ApplicationComponent#ComponentName
   */
  readonly componentName?: string;

  /**
   * @schema ApplicationComponent#ComponentRemarks
   */
  readonly componentRemarks?: string;

  /**
   * @schema ApplicationComponent#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ApplicationComponent#OsType
   */
  readonly osType?: string;

  /**
   * @schema ApplicationComponent#Tier
   */
  readonly tier?: string;

  /**
   * @schema ApplicationComponent#Monitor
   */
  readonly monitor?: boolean;

  /**
   * @schema ApplicationComponent#DetectedWorkload
   */
  readonly detectedWorkload?: { [key: string]: { [key: string]: string } };

}

/**
 * @schema Observation
 */
export interface Observation {
  /**
   * @schema Observation#Id
   */
  readonly id?: string;

  /**
   * @schema Observation#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema Observation#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema Observation#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema Observation#SourceARN
   */
  readonly sourceArn?: string;

  /**
   * @schema Observation#LogGroup
   */
  readonly logGroup?: string;

  /**
   * @schema Observation#LineTime
   */
  readonly lineTime?: string;

  /**
   * @schema Observation#LogText
   */
  readonly logText?: string;

  /**
   * @schema Observation#LogFilter
   */
  readonly logFilter?: string;

  /**
   * @schema Observation#MetricNamespace
   */
  readonly metricNamespace?: string;

  /**
   * @schema Observation#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema Observation#Unit
   */
  readonly unit?: string;

  /**
   * @schema Observation#Value
   */
  readonly value?: number;

  /**
   * @schema Observation#CloudWatchEventId
   */
  readonly cloudWatchEventId?: string;

  /**
   * @schema Observation#CloudWatchEventSource
   */
  readonly cloudWatchEventSource?: string;

  /**
   * @schema Observation#CloudWatchEventDetailType
   */
  readonly cloudWatchEventDetailType?: string;

  /**
   * @schema Observation#HealthEventArn
   */
  readonly healthEventArn?: string;

  /**
   * @schema Observation#HealthService
   */
  readonly healthService?: string;

  /**
   * @schema Observation#HealthEventTypeCode
   */
  readonly healthEventTypeCode?: string;

  /**
   * @schema Observation#HealthEventTypeCategory
   */
  readonly healthEventTypeCategory?: string;

  /**
   * @schema Observation#HealthEventDescription
   */
  readonly healthEventDescription?: string;

  /**
   * @schema Observation#CodeDeployDeploymentId
   */
  readonly codeDeployDeploymentId?: string;

  /**
   * @schema Observation#CodeDeployDeploymentGroup
   */
  readonly codeDeployDeploymentGroup?: string;

  /**
   * @schema Observation#CodeDeployState
   */
  readonly codeDeployState?: string;

  /**
   * @schema Observation#CodeDeployApplication
   */
  readonly codeDeployApplication?: string;

  /**
   * @schema Observation#CodeDeployInstanceGroupId
   */
  readonly codeDeployInstanceGroupId?: string;

  /**
   * @schema Observation#Ec2State
   */
  readonly ec2State?: string;

  /**
   * @schema Observation#RdsEventCategories
   */
  readonly rdsEventCategories?: string;

  /**
   * @schema Observation#RdsEventMessage
   */
  readonly rdsEventMessage?: string;

  /**
   * @schema Observation#S3EventName
   */
  readonly s3EventName?: string;

  /**
   * @schema Observation#StatesExecutionArn
   */
  readonly statesExecutionArn?: string;

  /**
   * @schema Observation#StatesArn
   */
  readonly statesArn?: string;

  /**
   * @schema Observation#StatesStatus
   */
  readonly statesStatus?: string;

  /**
   * @schema Observation#StatesInput
   */
  readonly statesInput?: string;

  /**
   * @schema Observation#EbsEvent
   */
  readonly ebsEvent?: string;

  /**
   * @schema Observation#EbsResult
   */
  readonly ebsResult?: string;

  /**
   * @schema Observation#EbsCause
   */
  readonly ebsCause?: string;

  /**
   * @schema Observation#EbsRequestId
   */
  readonly ebsRequestId?: string;

  /**
   * @schema Observation#XRayFaultPercent
   */
  readonly xRayFaultPercent?: number;

  /**
   * @schema Observation#XRayThrottlePercent
   */
  readonly xRayThrottlePercent?: number;

  /**
   * @schema Observation#XRayErrorPercent
   */
  readonly xRayErrorPercent?: number;

  /**
   * @schema Observation#XRayRequestCount
   */
  readonly xRayRequestCount?: number;

  /**
   * @schema Observation#XRayRequestAverageLatency
   */
  readonly xRayRequestAverageLatency?: number;

  /**
   * @schema Observation#XRayNodeName
   */
  readonly xRayNodeName?: string;

  /**
   * @schema Observation#XRayNodeType
   */
  readonly xRayNodeType?: string;

}

/**
 * @schema Problem
 */
export interface Problem {
  /**
   * @schema Problem#Id
   */
  readonly id?: string;

  /**
   * @schema Problem#Title
   */
  readonly title?: string;

  /**
   * @schema Problem#Insights
   */
  readonly insights?: string;

  /**
   * @schema Problem#Status
   */
  readonly status?: string;

  /**
   * @schema Problem#AffectedResource
   */
  readonly affectedResource?: string;

  /**
   * @schema Problem#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema Problem#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema Problem#SeverityLevel
   */
  readonly severityLevel?: string;

  /**
   * @schema Problem#ResourceGroupName
   */
  readonly resourceGroupName?: string;

  /**
   * @schema Problem#Feedback
   */
  readonly feedback?: { [key: string]: string };

}

/**
 * @schema RelatedObservations
 */
export interface RelatedObservations {
  /**
   * @schema RelatedObservations#ObservationList
   */
  readonly observationList?: Observation[];

}

/**
 * @schema ConfigurationEvent
 */
export interface ConfigurationEvent {
  /**
   * @schema ConfigurationEvent#MonitoredResourceARN
   */
  readonly monitoredResourceArn?: string;

  /**
   * @schema ConfigurationEvent#EventStatus
   */
  readonly eventStatus?: string;

  /**
   * @schema ConfigurationEvent#EventResourceType
   */
  readonly eventResourceType?: string;

  /**
   * @schema ConfigurationEvent#EventTime
   */
  readonly eventTime?: string;

  /**
   * @schema ConfigurationEvent#EventDetail
   */
  readonly eventDetail?: string;

  /**
   * @schema ConfigurationEvent#EventResourceName
   */
  readonly eventResourceName?: string;

}
