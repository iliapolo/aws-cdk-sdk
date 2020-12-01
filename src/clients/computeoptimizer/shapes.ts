/**
 * @schema DescribeRecommendationExportJobsRequest
 */
export interface DescribeRecommendationExportJobsRequest {
  /**
   * @schema DescribeRecommendationExportJobsRequest#jobIds
   */
  readonly jobIds?: string[];

  /**
   * @schema DescribeRecommendationExportJobsRequest#filters
   */
  readonly filters?: JobFilter[];

  /**
   * @schema DescribeRecommendationExportJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeRecommendationExportJobsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeRecommendationExportJobsResponse
 */
export interface DescribeRecommendationExportJobsResponse {
  /**
   * @schema DescribeRecommendationExportJobsResponse#recommendationExportJobs
   */
  readonly recommendationExportJobs?: RecommendationExportJob[];

  /**
   * @schema DescribeRecommendationExportJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ExportAutoScalingGroupRecommendationsRequest
 */
export interface ExportAutoScalingGroupRecommendationsRequest {
  /**
   * @schema ExportAutoScalingGroupRecommendationsRequest#accountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema ExportAutoScalingGroupRecommendationsRequest#filters
   */
  readonly filters?: Filter[];

  /**
   * @schema ExportAutoScalingGroupRecommendationsRequest#fieldsToExport
   */
  readonly fieldsToExport?: string[];

  /**
   * @schema ExportAutoScalingGroupRecommendationsRequest#s3DestinationConfig
   */
  readonly s3DestinationConfig: S3DestinationConfig;

  /**
   * @schema ExportAutoScalingGroupRecommendationsRequest#fileFormat
   */
  readonly fileFormat?: string;

  /**
   * @schema ExportAutoScalingGroupRecommendationsRequest#includeMemberAccounts
   */
  readonly includeMemberAccounts?: boolean;

}

/**
 * @schema ExportAutoScalingGroupRecommendationsResponse
 */
export interface ExportAutoScalingGroupRecommendationsResponse {
  /**
   * @schema ExportAutoScalingGroupRecommendationsResponse#jobId
   */
  readonly jobId?: string;

  /**
   * @schema ExportAutoScalingGroupRecommendationsResponse#s3Destination
   */
  readonly s3Destination?: S3Destination;

}

/**
 * @schema ExportEc2InstanceRecommendationsRequest
 */
export interface ExportEc2InstanceRecommendationsRequest {
  /**
   * @schema ExportEc2InstanceRecommendationsRequest#accountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema ExportEc2InstanceRecommendationsRequest#filters
   */
  readonly filters?: Filter[];

  /**
   * @schema ExportEc2InstanceRecommendationsRequest#fieldsToExport
   */
  readonly fieldsToExport?: string[];

  /**
   * @schema ExportEc2InstanceRecommendationsRequest#s3DestinationConfig
   */
  readonly s3DestinationConfig: S3DestinationConfig;

  /**
   * @schema ExportEc2InstanceRecommendationsRequest#fileFormat
   */
  readonly fileFormat?: string;

  /**
   * @schema ExportEc2InstanceRecommendationsRequest#includeMemberAccounts
   */
  readonly includeMemberAccounts?: boolean;

}

/**
 * @schema ExportEc2InstanceRecommendationsResponse
 */
export interface ExportEc2InstanceRecommendationsResponse {
  /**
   * @schema ExportEc2InstanceRecommendationsResponse#jobId
   */
  readonly jobId?: string;

  /**
   * @schema ExportEc2InstanceRecommendationsResponse#s3Destination
   */
  readonly s3Destination?: S3Destination;

}

/**
 * @schema GetAutoScalingGroupRecommendationsRequest
 */
export interface GetAutoScalingGroupRecommendationsRequest {
  /**
   * @schema GetAutoScalingGroupRecommendationsRequest#accountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema GetAutoScalingGroupRecommendationsRequest#autoScalingGroupArns
   */
  readonly autoScalingGroupArns?: string[];

  /**
   * @schema GetAutoScalingGroupRecommendationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetAutoScalingGroupRecommendationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetAutoScalingGroupRecommendationsRequest#filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema GetAutoScalingGroupRecommendationsResponse
 */
export interface GetAutoScalingGroupRecommendationsResponse {
  /**
   * @schema GetAutoScalingGroupRecommendationsResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetAutoScalingGroupRecommendationsResponse#autoScalingGroupRecommendations
   */
  readonly autoScalingGroupRecommendations?: AutoScalingGroupRecommendation[];

  /**
   * @schema GetAutoScalingGroupRecommendationsResponse#errors
   */
  readonly errors?: GetRecommendationError[];

}

/**
 * @schema GetEc2InstanceRecommendationsRequest
 */
export interface GetEc2InstanceRecommendationsRequest {
  /**
   * @schema GetEc2InstanceRecommendationsRequest#instanceArns
   */
  readonly instanceArns?: string[];

  /**
   * @schema GetEc2InstanceRecommendationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetEc2InstanceRecommendationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetEc2InstanceRecommendationsRequest#filters
   */
  readonly filters?: Filter[];

  /**
   * @schema GetEc2InstanceRecommendationsRequest#accountIds
   */
  readonly accountIds?: string[];

}

/**
 * @schema GetEc2InstanceRecommendationsResponse
 */
export interface GetEc2InstanceRecommendationsResponse {
  /**
   * @schema GetEc2InstanceRecommendationsResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetEc2InstanceRecommendationsResponse#instanceRecommendations
   */
  readonly instanceRecommendations?: InstanceRecommendation[];

  /**
   * @schema GetEc2InstanceRecommendationsResponse#errors
   */
  readonly errors?: GetRecommendationError[];

}

/**
 * @schema GetEc2RecommendationProjectedMetricsRequest
 */
export interface GetEc2RecommendationProjectedMetricsRequest {
  /**
   * @schema GetEc2RecommendationProjectedMetricsRequest#instanceArn
   */
  readonly instanceArn: string;

  /**
   * @schema GetEc2RecommendationProjectedMetricsRequest#stat
   */
  readonly stat: string;

  /**
   * @schema GetEc2RecommendationProjectedMetricsRequest#period
   */
  readonly period: number;

  /**
   * @schema GetEc2RecommendationProjectedMetricsRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema GetEc2RecommendationProjectedMetricsRequest#endTime
   */
  readonly endTime: string;

}

/**
 * @schema GetEc2RecommendationProjectedMetricsResponse
 */
export interface GetEc2RecommendationProjectedMetricsResponse {
  /**
   * @schema GetEc2RecommendationProjectedMetricsResponse#recommendedOptionProjectedMetrics
   */
  readonly recommendedOptionProjectedMetrics?: RecommendedOptionProjectedMetric[];

}

/**
 * @schema GetEnrollmentStatusRequest
 */
export interface GetEnrollmentStatusRequest {
}

/**
 * @schema GetEnrollmentStatusResponse
 */
export interface GetEnrollmentStatusResponse {
  /**
   * @schema GetEnrollmentStatusResponse#status
   */
  readonly status?: string;

  /**
   * @schema GetEnrollmentStatusResponse#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema GetEnrollmentStatusResponse#memberAccountsEnrolled
   */
  readonly memberAccountsEnrolled?: boolean;

}

/**
 * @schema GetRecommendationSummariesRequest
 */
export interface GetRecommendationSummariesRequest {
  /**
   * @schema GetRecommendationSummariesRequest#accountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema GetRecommendationSummariesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetRecommendationSummariesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetRecommendationSummariesResponse
 */
export interface GetRecommendationSummariesResponse {
  /**
   * @schema GetRecommendationSummariesResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetRecommendationSummariesResponse#recommendationSummaries
   */
  readonly recommendationSummaries?: RecommendationSummary[];

}

/**
 * @schema UpdateEnrollmentStatusRequest
 */
export interface UpdateEnrollmentStatusRequest {
  /**
   * @schema UpdateEnrollmentStatusRequest#status
   */
  readonly status: string;

  /**
   * @schema UpdateEnrollmentStatusRequest#includeMemberAccounts
   */
  readonly includeMemberAccounts?: boolean;

}

/**
 * @schema UpdateEnrollmentStatusResponse
 */
export interface UpdateEnrollmentStatusResponse {
  /**
   * @schema UpdateEnrollmentStatusResponse#status
   */
  readonly status?: string;

  /**
   * @schema UpdateEnrollmentStatusResponse#statusReason
   */
  readonly statusReason?: string;

}

/**
 * @schema JobFilter
 */
export interface JobFilter {
  /**
   * @schema JobFilter#name
   */
  readonly name?: string;

  /**
   * @schema JobFilter#values
   */
  readonly values?: string[];

}

/**
 * @schema RecommendationExportJob
 */
export interface RecommendationExportJob {
  /**
   * @schema RecommendationExportJob#jobId
   */
  readonly jobId?: string;

  /**
   * @schema RecommendationExportJob#destination
   */
  readonly destination?: ExportDestination;

  /**
   * @schema RecommendationExportJob#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema RecommendationExportJob#status
   */
  readonly status?: string;

  /**
   * @schema RecommendationExportJob#creationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema RecommendationExportJob#lastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema RecommendationExportJob#failureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema Filter
 */
export interface Filter {
  /**
   * @schema Filter#name
   */
  readonly name?: string;

  /**
   * @schema Filter#values
   */
  readonly values?: string[];

}

/**
 * @schema S3DestinationConfig
 */
export interface S3DestinationConfig {
  /**
   * @schema S3DestinationConfig#bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3DestinationConfig#keyPrefix
   */
  readonly keyPrefix?: string;

}

/**
 * @schema S3Destination
 */
export interface S3Destination {
  /**
   * @schema S3Destination#bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3Destination#key
   */
  readonly key?: string;

  /**
   * @schema S3Destination#metadataKey
   */
  readonly metadataKey?: string;

}

/**
 * @schema AutoScalingGroupRecommendation
 */
export interface AutoScalingGroupRecommendation {
  /**
   * @schema AutoScalingGroupRecommendation#accountId
   */
  readonly accountId?: string;

  /**
   * @schema AutoScalingGroupRecommendation#autoScalingGroupArn
   */
  readonly autoScalingGroupArn?: string;

  /**
   * @schema AutoScalingGroupRecommendation#autoScalingGroupName
   */
  readonly autoScalingGroupName?: string;

  /**
   * @schema AutoScalingGroupRecommendation#finding
   */
  readonly finding?: string;

  /**
   * @schema AutoScalingGroupRecommendation#utilizationMetrics
   */
  readonly utilizationMetrics?: UtilizationMetric[];

  /**
   * @schema AutoScalingGroupRecommendation#lookBackPeriodInDays
   */
  readonly lookBackPeriodInDays?: number;

  /**
   * @schema AutoScalingGroupRecommendation#currentConfiguration
   */
  readonly currentConfiguration?: AutoScalingGroupConfiguration;

  /**
   * @schema AutoScalingGroupRecommendation#recommendationOptions
   */
  readonly recommendationOptions?: AutoScalingGroupRecommendationOption[];

  /**
   * @schema AutoScalingGroupRecommendation#lastRefreshTimestamp
   */
  readonly lastRefreshTimestamp?: string;

}

/**
 * @schema GetRecommendationError
 */
export interface GetRecommendationError {
  /**
   * @schema GetRecommendationError#identifier
   */
  readonly identifier?: string;

  /**
   * @schema GetRecommendationError#code
   */
  readonly code?: string;

  /**
   * @schema GetRecommendationError#message
   */
  readonly message?: string;

}

/**
 * @schema InstanceRecommendation
 */
export interface InstanceRecommendation {
  /**
   * @schema InstanceRecommendation#instanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema InstanceRecommendation#accountId
   */
  readonly accountId?: string;

  /**
   * @schema InstanceRecommendation#instanceName
   */
  readonly instanceName?: string;

  /**
   * @schema InstanceRecommendation#currentInstanceType
   */
  readonly currentInstanceType?: string;

  /**
   * @schema InstanceRecommendation#finding
   */
  readonly finding?: string;

  /**
   * @schema InstanceRecommendation#utilizationMetrics
   */
  readonly utilizationMetrics?: UtilizationMetric[];

  /**
   * @schema InstanceRecommendation#lookBackPeriodInDays
   */
  readonly lookBackPeriodInDays?: number;

  /**
   * @schema InstanceRecommendation#recommendationOptions
   */
  readonly recommendationOptions?: InstanceRecommendationOption[];

  /**
   * @schema InstanceRecommendation#recommendationSources
   */
  readonly recommendationSources?: RecommendationSource[];

  /**
   * @schema InstanceRecommendation#lastRefreshTimestamp
   */
  readonly lastRefreshTimestamp?: string;

}

/**
 * @schema RecommendedOptionProjectedMetric
 */
export interface RecommendedOptionProjectedMetric {
  /**
   * @schema RecommendedOptionProjectedMetric#recommendedInstanceType
   */
  readonly recommendedInstanceType?: string;

  /**
   * @schema RecommendedOptionProjectedMetric#rank
   */
  readonly rank?: number;

  /**
   * @schema RecommendedOptionProjectedMetric#projectedMetrics
   */
  readonly projectedMetrics?: ProjectedMetric[];

}

/**
 * @schema RecommendationSummary
 */
export interface RecommendationSummary {
  /**
   * @schema RecommendationSummary#summaries
   */
  readonly summaries?: Summary[];

  /**
   * @schema RecommendationSummary#recommendationResourceType
   */
  readonly recommendationResourceType?: string;

  /**
   * @schema RecommendationSummary#accountId
   */
  readonly accountId?: string;

}

/**
 * @schema ExportDestination
 */
export interface ExportDestination {
  /**
   * @schema ExportDestination#s3
   */
  readonly s3?: S3Destination;

}

/**
 * @schema UtilizationMetric
 */
export interface UtilizationMetric {
  /**
   * @schema UtilizationMetric#name
   */
  readonly name?: string;

  /**
   * @schema UtilizationMetric#statistic
   */
  readonly statistic?: string;

  /**
   * @schema UtilizationMetric#value
   */
  readonly value?: number;

}

/**
 * @schema AutoScalingGroupConfiguration
 */
export interface AutoScalingGroupConfiguration {
  /**
   * @schema AutoScalingGroupConfiguration#desiredCapacity
   */
  readonly desiredCapacity?: number;

  /**
   * @schema AutoScalingGroupConfiguration#minSize
   */
  readonly minSize?: number;

  /**
   * @schema AutoScalingGroupConfiguration#maxSize
   */
  readonly maxSize?: number;

  /**
   * @schema AutoScalingGroupConfiguration#instanceType
   */
  readonly instanceType?: string;

}

/**
 * @schema AutoScalingGroupRecommendationOption
 */
export interface AutoScalingGroupRecommendationOption {
  /**
   * @schema AutoScalingGroupRecommendationOption#configuration
   */
  readonly configuration?: AutoScalingGroupConfiguration;

  /**
   * @schema AutoScalingGroupRecommendationOption#projectedUtilizationMetrics
   */
  readonly projectedUtilizationMetrics?: UtilizationMetric[];

  /**
   * @schema AutoScalingGroupRecommendationOption#performanceRisk
   */
  readonly performanceRisk?: number;

  /**
   * @schema AutoScalingGroupRecommendationOption#rank
   */
  readonly rank?: number;

}

/**
 * @schema InstanceRecommendationOption
 */
export interface InstanceRecommendationOption {
  /**
   * @schema InstanceRecommendationOption#instanceType
   */
  readonly instanceType?: string;

  /**
   * @schema InstanceRecommendationOption#projectedUtilizationMetrics
   */
  readonly projectedUtilizationMetrics?: UtilizationMetric[];

  /**
   * @schema InstanceRecommendationOption#performanceRisk
   */
  readonly performanceRisk?: number;

  /**
   * @schema InstanceRecommendationOption#rank
   */
  readonly rank?: number;

}

/**
 * @schema RecommendationSource
 */
export interface RecommendationSource {
  /**
   * @schema RecommendationSource#recommendationSourceArn
   */
  readonly recommendationSourceArn?: string;

  /**
   * @schema RecommendationSource#recommendationSourceType
   */
  readonly recommendationSourceType?: string;

}

/**
 * @schema ProjectedMetric
 */
export interface ProjectedMetric {
  /**
   * @schema ProjectedMetric#name
   */
  readonly name?: string;

  /**
   * @schema ProjectedMetric#timestamps
   */
  readonly timestamps?: string[];

  /**
   * @schema ProjectedMetric#values
   */
  readonly values?: number[];

}

/**
 * @schema Summary
 */
export interface Summary {
  /**
   * @schema Summary#name
   */
  readonly name?: string;

  /**
   * @schema Summary#value
   */
  readonly value?: number;

}
