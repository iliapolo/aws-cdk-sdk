/**
 * @schema ComputeOptimizerDescribeRecommendationExportJobsRequest
 */
export interface ComputeOptimizerDescribeRecommendationExportJobsRequest {
  /**
   * @schema ComputeOptimizerDescribeRecommendationExportJobsRequest#jobIds
   */
  readonly jobIds?: string[];

  /**
   * @schema ComputeOptimizerDescribeRecommendationExportJobsRequest#filters
   */
  readonly filters?: ComputeOptimizerJobFilter[];

  /**
   * @schema ComputeOptimizerDescribeRecommendationExportJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComputeOptimizerDescribeRecommendationExportJobsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ComputeOptimizerDescribeRecommendationExportJobsResponse
 */
export interface ComputeOptimizerDescribeRecommendationExportJobsResponse {
  /**
   * @schema ComputeOptimizerDescribeRecommendationExportJobsResponse#recommendationExportJobs
   */
  readonly recommendationExportJobs?: ComputeOptimizerRecommendationExportJob[];

  /**
   * @schema ComputeOptimizerDescribeRecommendationExportJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ComputeOptimizerExportAutoScalingGroupRecommendationsRequest
 */
export interface ComputeOptimizerExportAutoScalingGroupRecommendationsRequest {
  /**
   * @schema ComputeOptimizerExportAutoScalingGroupRecommendationsRequest#accountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema ComputeOptimizerExportAutoScalingGroupRecommendationsRequest#filters
   */
  readonly filters?: ComputeOptimizerFilter[];

  /**
   * @schema ComputeOptimizerExportAutoScalingGroupRecommendationsRequest#fieldsToExport
   */
  readonly fieldsToExport?: string[];

  /**
   * @schema ComputeOptimizerExportAutoScalingGroupRecommendationsRequest#s3DestinationConfig
   */
  readonly s3DestinationConfig: ComputeOptimizerS3DestinationConfig;

  /**
   * @schema ComputeOptimizerExportAutoScalingGroupRecommendationsRequest#fileFormat
   */
  readonly fileFormat?: string;

  /**
   * @schema ComputeOptimizerExportAutoScalingGroupRecommendationsRequest#includeMemberAccounts
   */
  readonly includeMemberAccounts?: boolean;

}

/**
 * @schema ComputeOptimizerExportAutoScalingGroupRecommendationsResponse
 */
export interface ComputeOptimizerExportAutoScalingGroupRecommendationsResponse {
  /**
   * @schema ComputeOptimizerExportAutoScalingGroupRecommendationsResponse#jobId
   */
  readonly jobId?: string;

  /**
   * @schema ComputeOptimizerExportAutoScalingGroupRecommendationsResponse#s3Destination
   */
  readonly s3Destination?: ComputeOptimizerS3Destination;

}

/**
 * @schema ComputeOptimizerExportEc2InstanceRecommendationsRequest
 */
export interface ComputeOptimizerExportEc2InstanceRecommendationsRequest {
  /**
   * @schema ComputeOptimizerExportEc2InstanceRecommendationsRequest#accountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema ComputeOptimizerExportEc2InstanceRecommendationsRequest#filters
   */
  readonly filters?: ComputeOptimizerFilter[];

  /**
   * @schema ComputeOptimizerExportEc2InstanceRecommendationsRequest#fieldsToExport
   */
  readonly fieldsToExport?: string[];

  /**
   * @schema ComputeOptimizerExportEc2InstanceRecommendationsRequest#s3DestinationConfig
   */
  readonly s3DestinationConfig: ComputeOptimizerS3DestinationConfig;

  /**
   * @schema ComputeOptimizerExportEc2InstanceRecommendationsRequest#fileFormat
   */
  readonly fileFormat?: string;

  /**
   * @schema ComputeOptimizerExportEc2InstanceRecommendationsRequest#includeMemberAccounts
   */
  readonly includeMemberAccounts?: boolean;

}

/**
 * @schema ComputeOptimizerExportEc2InstanceRecommendationsResponse
 */
export interface ComputeOptimizerExportEc2InstanceRecommendationsResponse {
  /**
   * @schema ComputeOptimizerExportEc2InstanceRecommendationsResponse#jobId
   */
  readonly jobId?: string;

  /**
   * @schema ComputeOptimizerExportEc2InstanceRecommendationsResponse#s3Destination
   */
  readonly s3Destination?: ComputeOptimizerS3Destination;

}

/**
 * @schema ComputeOptimizerGetAutoScalingGroupRecommendationsRequest
 */
export interface ComputeOptimizerGetAutoScalingGroupRecommendationsRequest {
  /**
   * @schema ComputeOptimizerGetAutoScalingGroupRecommendationsRequest#accountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema ComputeOptimizerGetAutoScalingGroupRecommendationsRequest#autoScalingGroupArns
   */
  readonly autoScalingGroupArns?: string[];

  /**
   * @schema ComputeOptimizerGetAutoScalingGroupRecommendationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComputeOptimizerGetAutoScalingGroupRecommendationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ComputeOptimizerGetAutoScalingGroupRecommendationsRequest#filters
   */
  readonly filters?: ComputeOptimizerFilter[];

}

/**
 * @schema ComputeOptimizerGetAutoScalingGroupRecommendationsResponse
 */
export interface ComputeOptimizerGetAutoScalingGroupRecommendationsResponse {
  /**
   * @schema ComputeOptimizerGetAutoScalingGroupRecommendationsResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComputeOptimizerGetAutoScalingGroupRecommendationsResponse#autoScalingGroupRecommendations
   */
  readonly autoScalingGroupRecommendations?: ComputeOptimizerAutoScalingGroupRecommendation[];

  /**
   * @schema ComputeOptimizerGetAutoScalingGroupRecommendationsResponse#errors
   */
  readonly errors?: ComputeOptimizerGetRecommendationError[];

}

/**
 * @schema ComputeOptimizerGetEc2InstanceRecommendationsRequest
 */
export interface ComputeOptimizerGetEc2InstanceRecommendationsRequest {
  /**
   * @schema ComputeOptimizerGetEc2InstanceRecommendationsRequest#instanceArns
   */
  readonly instanceArns?: string[];

  /**
   * @schema ComputeOptimizerGetEc2InstanceRecommendationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComputeOptimizerGetEc2InstanceRecommendationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ComputeOptimizerGetEc2InstanceRecommendationsRequest#filters
   */
  readonly filters?: ComputeOptimizerFilter[];

  /**
   * @schema ComputeOptimizerGetEc2InstanceRecommendationsRequest#accountIds
   */
  readonly accountIds?: string[];

}

/**
 * @schema ComputeOptimizerGetEc2InstanceRecommendationsResponse
 */
export interface ComputeOptimizerGetEc2InstanceRecommendationsResponse {
  /**
   * @schema ComputeOptimizerGetEc2InstanceRecommendationsResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComputeOptimizerGetEc2InstanceRecommendationsResponse#instanceRecommendations
   */
  readonly instanceRecommendations?: ComputeOptimizerInstanceRecommendation[];

  /**
   * @schema ComputeOptimizerGetEc2InstanceRecommendationsResponse#errors
   */
  readonly errors?: ComputeOptimizerGetRecommendationError[];

}

/**
 * @schema ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest
 */
export interface ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest {
  /**
   * @schema ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest#instanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest#stat
   */
  readonly stat: string;

  /**
   * @schema ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest#period
   */
  readonly period: number;

  /**
   * @schema ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest#endTime
   */
  readonly endTime: string;

}

/**
 * @schema ComputeOptimizerGetEc2RecommendationProjectedMetricsResponse
 */
export interface ComputeOptimizerGetEc2RecommendationProjectedMetricsResponse {
  /**
   * @schema ComputeOptimizerGetEc2RecommendationProjectedMetricsResponse#recommendedOptionProjectedMetrics
   */
  readonly recommendedOptionProjectedMetrics?: ComputeOptimizerRecommendedOptionProjectedMetric[];

}

/**
 * @schema ComputeOptimizerGetEnrollmentStatusRequest
 */
export interface ComputeOptimizerGetEnrollmentStatusRequest {
}

/**
 * @schema ComputeOptimizerGetEnrollmentStatusResponse
 */
export interface ComputeOptimizerGetEnrollmentStatusResponse {
  /**
   * @schema ComputeOptimizerGetEnrollmentStatusResponse#status
   */
  readonly status?: string;

  /**
   * @schema ComputeOptimizerGetEnrollmentStatusResponse#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema ComputeOptimizerGetEnrollmentStatusResponse#memberAccountsEnrolled
   */
  readonly memberAccountsEnrolled?: boolean;

}

/**
 * @schema ComputeOptimizerGetRecommendationSummariesRequest
 */
export interface ComputeOptimizerGetRecommendationSummariesRequest {
  /**
   * @schema ComputeOptimizerGetRecommendationSummariesRequest#accountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema ComputeOptimizerGetRecommendationSummariesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComputeOptimizerGetRecommendationSummariesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ComputeOptimizerGetRecommendationSummariesResponse
 */
export interface ComputeOptimizerGetRecommendationSummariesResponse {
  /**
   * @schema ComputeOptimizerGetRecommendationSummariesResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComputeOptimizerGetRecommendationSummariesResponse#recommendationSummaries
   */
  readonly recommendationSummaries?: ComputeOptimizerRecommendationSummary[];

}

/**
 * @schema ComputeOptimizerUpdateEnrollmentStatusRequest
 */
export interface ComputeOptimizerUpdateEnrollmentStatusRequest {
  /**
   * @schema ComputeOptimizerUpdateEnrollmentStatusRequest#status
   */
  readonly status: string;

  /**
   * @schema ComputeOptimizerUpdateEnrollmentStatusRequest#includeMemberAccounts
   */
  readonly includeMemberAccounts?: boolean;

}

/**
 * @schema ComputeOptimizerUpdateEnrollmentStatusResponse
 */
export interface ComputeOptimizerUpdateEnrollmentStatusResponse {
  /**
   * @schema ComputeOptimizerUpdateEnrollmentStatusResponse#status
   */
  readonly status?: string;

  /**
   * @schema ComputeOptimizerUpdateEnrollmentStatusResponse#statusReason
   */
  readonly statusReason?: string;

}

/**
 * @schema ComputeOptimizerJobFilter
 */
export interface ComputeOptimizerJobFilter {
  /**
   * @schema ComputeOptimizerJobFilter#name
   */
  readonly name?: string;

  /**
   * @schema ComputeOptimizerJobFilter#values
   */
  readonly values?: string[];

}

/**
 * @schema ComputeOptimizerRecommendationExportJob
 */
export interface ComputeOptimizerRecommendationExportJob {
  /**
   * @schema ComputeOptimizerRecommendationExportJob#jobId
   */
  readonly jobId?: string;

  /**
   * @schema ComputeOptimizerRecommendationExportJob#destination
   */
  readonly destination?: ComputeOptimizerExportDestination;

  /**
   * @schema ComputeOptimizerRecommendationExportJob#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ComputeOptimizerRecommendationExportJob#status
   */
  readonly status?: string;

  /**
   * @schema ComputeOptimizerRecommendationExportJob#creationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema ComputeOptimizerRecommendationExportJob#lastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema ComputeOptimizerRecommendationExportJob#failureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema ComputeOptimizerFilter
 */
export interface ComputeOptimizerFilter {
  /**
   * @schema ComputeOptimizerFilter#name
   */
  readonly name?: string;

  /**
   * @schema ComputeOptimizerFilter#values
   */
  readonly values?: string[];

}

/**
 * @schema ComputeOptimizerS3DestinationConfig
 */
export interface ComputeOptimizerS3DestinationConfig {
  /**
   * @schema ComputeOptimizerS3DestinationConfig#bucket
   */
  readonly bucket?: string;

  /**
   * @schema ComputeOptimizerS3DestinationConfig#keyPrefix
   */
  readonly keyPrefix?: string;

}

/**
 * @schema ComputeOptimizerS3Destination
 */
export interface ComputeOptimizerS3Destination {
  /**
   * @schema ComputeOptimizerS3Destination#bucket
   */
  readonly bucket?: string;

  /**
   * @schema ComputeOptimizerS3Destination#key
   */
  readonly key?: string;

  /**
   * @schema ComputeOptimizerS3Destination#metadataKey
   */
  readonly metadataKey?: string;

}

/**
 * @schema ComputeOptimizerAutoScalingGroupRecommendation
 */
export interface ComputeOptimizerAutoScalingGroupRecommendation {
  /**
   * @schema ComputeOptimizerAutoScalingGroupRecommendation#accountId
   */
  readonly accountId?: string;

  /**
   * @schema ComputeOptimizerAutoScalingGroupRecommendation#autoScalingGroupArn
   */
  readonly autoScalingGroupArn?: string;

  /**
   * @schema ComputeOptimizerAutoScalingGroupRecommendation#autoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema ComputeOptimizerAutoScalingGroupRecommendation#finding
   */
  readonly finding?: string;

  /**
   * @schema ComputeOptimizerAutoScalingGroupRecommendation#utilizationMetrics
   */
  readonly utilizationMetrics?: ComputeOptimizerUtilizationMetric[];

  /**
   * @schema ComputeOptimizerAutoScalingGroupRecommendation#lookBackPeriodInDays
   */
  readonly lookBackPeriodInDays?: number;

  /**
   * @schema ComputeOptimizerAutoScalingGroupRecommendation#currentConfiguration
   */
  readonly currentConfiguration?: ComputeOptimizerAutoScalingGroupConfiguration;

  /**
   * @schema ComputeOptimizerAutoScalingGroupRecommendation#recommendationOptions
   */
  readonly recommendationOptions?: ComputeOptimizerAutoScalingGroupRecommendationOption[];

  /**
   * @schema ComputeOptimizerAutoScalingGroupRecommendation#lastRefreshTimestamp
   */
  readonly lastRefreshTimestamp?: string;

}

/**
 * @schema ComputeOptimizerGetRecommendationError
 */
export interface ComputeOptimizerGetRecommendationError {
  /**
   * @schema ComputeOptimizerGetRecommendationError#identifier
   */
  readonly identifier?: string;

  /**
   * @schema ComputeOptimizerGetRecommendationError#code
   */
  readonly code?: string;

  /**
   * @schema ComputeOptimizerGetRecommendationError#message
   */
  readonly message?: string;

}

/**
 * @schema ComputeOptimizerInstanceRecommendation
 */
export interface ComputeOptimizerInstanceRecommendation {
  /**
   * @schema ComputeOptimizerInstanceRecommendation#instanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema ComputeOptimizerInstanceRecommendation#accountId
   */
  readonly accountId?: string;

  /**
   * @schema ComputeOptimizerInstanceRecommendation#instanceName
   */
  readonly instanceName?: string;

  /**
   * @schema ComputeOptimizerInstanceRecommendation#currentInstanceType
   */
  readonly currentInstanceType?: string;

  /**
   * @schema ComputeOptimizerInstanceRecommendation#finding
   */
  readonly finding?: string;

  /**
   * @schema ComputeOptimizerInstanceRecommendation#utilizationMetrics
   */
  readonly utilizationMetrics?: ComputeOptimizerUtilizationMetric[];

  /**
   * @schema ComputeOptimizerInstanceRecommendation#lookBackPeriodInDays
   */
  readonly lookBackPeriodInDays?: number;

  /**
   * @schema ComputeOptimizerInstanceRecommendation#recommendationOptions
   */
  readonly recommendationOptions?: ComputeOptimizerInstanceRecommendationOption[];

  /**
   * @schema ComputeOptimizerInstanceRecommendation#recommendationSources
   */
  readonly recommendationSources?: ComputeOptimizerRecommendationSource[];

  /**
   * @schema ComputeOptimizerInstanceRecommendation#lastRefreshTimestamp
   */
  readonly lastRefreshTimestamp?: string;

}

/**
 * @schema ComputeOptimizerRecommendedOptionProjectedMetric
 */
export interface ComputeOptimizerRecommendedOptionProjectedMetric {
  /**
   * @schema ComputeOptimizerRecommendedOptionProjectedMetric#recommendedInstanceType
   */
  readonly recommendedInstanceType?: string;

  /**
   * @schema ComputeOptimizerRecommendedOptionProjectedMetric#rank
   */
  readonly rank?: number;

  /**
   * @schema ComputeOptimizerRecommendedOptionProjectedMetric#projectedMetrics
   */
  readonly projectedMetrics?: ComputeOptimizerProjectedMetric[];

}

/**
 * @schema ComputeOptimizerRecommendationSummary
 */
export interface ComputeOptimizerRecommendationSummary {
  /**
   * @schema ComputeOptimizerRecommendationSummary#summaries
   */
  readonly summaries?: ComputeOptimizerSummary[];

  /**
   * @schema ComputeOptimizerRecommendationSummary#recommendationResourceType
   */
  readonly recommendationResourceType?: string;

  /**
   * @schema ComputeOptimizerRecommendationSummary#accountId
   */
  readonly accountId?: string;

}

/**
 * @schema ComputeOptimizerExportDestination
 */
export interface ComputeOptimizerExportDestination {
  /**
   * @schema ComputeOptimizerExportDestination#s3
   */
  readonly s3?: ComputeOptimizerS3Destination;

}

/**
 * @schema ComputeOptimizerUtilizationMetric
 */
export interface ComputeOptimizerUtilizationMetric {
  /**
   * @schema ComputeOptimizerUtilizationMetric#name
   */
  readonly name?: string;

  /**
   * @schema ComputeOptimizerUtilizationMetric#statistic
   */
  readonly statistic?: string;

  /**
   * @schema ComputeOptimizerUtilizationMetric#value
   */
  readonly value?: number;

}

/**
 * @schema ComputeOptimizerAutoScalingGroupConfiguration
 */
export interface ComputeOptimizerAutoScalingGroupConfiguration {
  /**
   * @schema ComputeOptimizerAutoScalingGroupConfiguration#desiredCapacity
   */
  readonly desiredCapacity?: number;

  /**
   * @schema ComputeOptimizerAutoScalingGroupConfiguration#minSize
   */
  readonly minSize?: number;

  /**
   * @schema ComputeOptimizerAutoScalingGroupConfiguration#maxSize
   */
  readonly maxSize?: number;

  /**
   * @schema ComputeOptimizerAutoScalingGroupConfiguration#instanceType
   */
  readonly instanceType?: string;

}

/**
 * @schema ComputeOptimizerAutoScalingGroupRecommendationOption
 */
export interface ComputeOptimizerAutoScalingGroupRecommendationOption {
  /**
   * @schema ComputeOptimizerAutoScalingGroupRecommendationOption#configuration
   */
  readonly configuration?: ComputeOptimizerAutoScalingGroupConfiguration;

  /**
   * @schema ComputeOptimizerAutoScalingGroupRecommendationOption#projectedUtilizationMetrics
   */
  readonly projectedUtilizationMetrics?: ComputeOptimizerUtilizationMetric[];

  /**
   * @schema ComputeOptimizerAutoScalingGroupRecommendationOption#performanceRisk
   */
  readonly performanceRisk?: number;

  /**
   * @schema ComputeOptimizerAutoScalingGroupRecommendationOption#rank
   */
  readonly rank?: number;

}

/**
 * @schema ComputeOptimizerInstanceRecommendationOption
 */
export interface ComputeOptimizerInstanceRecommendationOption {
  /**
   * @schema ComputeOptimizerInstanceRecommendationOption#instanceType
   */
  readonly instanceType?: string;

  /**
   * @schema ComputeOptimizerInstanceRecommendationOption#projectedUtilizationMetrics
   */
  readonly projectedUtilizationMetrics?: ComputeOptimizerUtilizationMetric[];

  /**
   * @schema ComputeOptimizerInstanceRecommendationOption#performanceRisk
   */
  readonly performanceRisk?: number;

  /**
   * @schema ComputeOptimizerInstanceRecommendationOption#rank
   */
  readonly rank?: number;

}

/**
 * @schema ComputeOptimizerRecommendationSource
 */
export interface ComputeOptimizerRecommendationSource {
  /**
   * @schema ComputeOptimizerRecommendationSource#recommendationSourceArn
   */
  readonly recommendationSourceArn?: string;

  /**
   * @schema ComputeOptimizerRecommendationSource#recommendationSourceType
   */
  readonly recommendationSourceType?: string;

}

/**
 * @schema ComputeOptimizerProjectedMetric
 */
export interface ComputeOptimizerProjectedMetric {
  /**
   * @schema ComputeOptimizerProjectedMetric#name
   */
  readonly name?: string;

  /**
   * @schema ComputeOptimizerProjectedMetric#timestamps
   */
  readonly timestamps?: string[];

  /**
   * @schema ComputeOptimizerProjectedMetric#values
   */
  readonly values?: number[];

}

/**
 * @schema ComputeOptimizerSummary
 */
export interface ComputeOptimizerSummary {
  /**
   * @schema ComputeOptimizerSummary#name
   */
  readonly name?: string;

  /**
   * @schema ComputeOptimizerSummary#value
   */
  readonly value?: number;

}
