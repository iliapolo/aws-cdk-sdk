/**
 * @schema CreateScalingPlanRequest
 */
export interface CreateScalingPlanRequest {
  /**
   * @schema CreateScalingPlanRequest#ScalingPlanName
   */
  readonly scalingPlanName: string;

  /**
   * @schema CreateScalingPlanRequest#ApplicationSource
   */
  readonly applicationSource: ApplicationSource;

  /**
   * @schema CreateScalingPlanRequest#ScalingInstructions
   */
  readonly scalingInstructions: ScalingInstruction[];

}

/**
 * @schema CreateScalingPlanResponse
 */
export interface CreateScalingPlanResponse {
  /**
   * @schema CreateScalingPlanResponse#ScalingPlanVersion
   */
  readonly scalingPlanVersion: number;

}

/**
 * @schema DeleteScalingPlanRequest
 */
export interface DeleteScalingPlanRequest {
  /**
   * @schema DeleteScalingPlanRequest#ScalingPlanName
   */
  readonly scalingPlanName: string;

  /**
   * @schema DeleteScalingPlanRequest#ScalingPlanVersion
   */
  readonly scalingPlanVersion: number;

}

/**
 * @schema DeleteScalingPlanResponse
 */
export interface DeleteScalingPlanResponse {
}

/**
 * @schema DescribeScalingPlanResourcesRequest
 */
export interface DescribeScalingPlanResourcesRequest {
  /**
   * @schema DescribeScalingPlanResourcesRequest#ScalingPlanName
   */
  readonly scalingPlanName: string;

  /**
   * @schema DescribeScalingPlanResourcesRequest#ScalingPlanVersion
   */
  readonly scalingPlanVersion: number;

  /**
   * @schema DescribeScalingPlanResourcesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeScalingPlanResourcesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeScalingPlanResourcesResponse
 */
export interface DescribeScalingPlanResourcesResponse {
  /**
   * @schema DescribeScalingPlanResourcesResponse#ScalingPlanResources
   */
  readonly scalingPlanResources?: ScalingPlanResource[];

  /**
   * @schema DescribeScalingPlanResourcesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeScalingPlansRequest
 */
export interface DescribeScalingPlansRequest {
  /**
   * @schema DescribeScalingPlansRequest#ScalingPlanNames
   */
  readonly scalingPlanNames?: string[];

  /**
   * @schema DescribeScalingPlansRequest#ScalingPlanVersion
   */
  readonly scalingPlanVersion?: number;

  /**
   * @schema DescribeScalingPlansRequest#ApplicationSources
   */
  readonly applicationSources?: ApplicationSource[];

  /**
   * @schema DescribeScalingPlansRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeScalingPlansRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeScalingPlansResponse
 */
export interface DescribeScalingPlansResponse {
  /**
   * @schema DescribeScalingPlansResponse#ScalingPlans
   */
  readonly scalingPlans?: ScalingPlan[];

  /**
   * @schema DescribeScalingPlansResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetScalingPlanResourceForecastDataRequest
 */
export interface GetScalingPlanResourceForecastDataRequest {
  /**
   * @schema GetScalingPlanResourceForecastDataRequest#ScalingPlanName
   */
  readonly scalingPlanName: string;

  /**
   * @schema GetScalingPlanResourceForecastDataRequest#ScalingPlanVersion
   */
  readonly scalingPlanVersion: number;

  /**
   * @schema GetScalingPlanResourceForecastDataRequest#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema GetScalingPlanResourceForecastDataRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema GetScalingPlanResourceForecastDataRequest#ScalableDimension
   */
  readonly scalableDimension: string;

  /**
   * @schema GetScalingPlanResourceForecastDataRequest#ForecastDataType
   */
  readonly forecastDataType: string;

  /**
   * @schema GetScalingPlanResourceForecastDataRequest#StartTime
   */
  readonly startTime: string;

  /**
   * @schema GetScalingPlanResourceForecastDataRequest#EndTime
   */
  readonly endTime: string;

}

/**
 * @schema GetScalingPlanResourceForecastDataResponse
 */
export interface GetScalingPlanResourceForecastDataResponse {
  /**
   * @schema GetScalingPlanResourceForecastDataResponse#Datapoints
   */
  readonly datapoints: Datapoint[];

}

/**
 * @schema UpdateScalingPlanRequest
 */
export interface UpdateScalingPlanRequest {
  /**
   * @schema UpdateScalingPlanRequest#ScalingPlanName
   */
  readonly scalingPlanName: string;

  /**
   * @schema UpdateScalingPlanRequest#ScalingPlanVersion
   */
  readonly scalingPlanVersion: number;

  /**
   * @schema UpdateScalingPlanRequest#ApplicationSource
   */
  readonly applicationSource?: ApplicationSource;

  /**
   * @schema UpdateScalingPlanRequest#ScalingInstructions
   */
  readonly scalingInstructions?: ScalingInstruction[];

}

/**
 * @schema UpdateScalingPlanResponse
 */
export interface UpdateScalingPlanResponse {
}

/**
 * @schema ApplicationSource
 */
export interface ApplicationSource {
  /**
   * @schema ApplicationSource#CloudFormationStackARN
   */
  readonly cloudFormationStackArn?: string;

  /**
   * @schema ApplicationSource#TagFilters
   */
  readonly tagFilters?: TagFilter[];

}

/**
 * @schema ScalingInstruction
 */
export interface ScalingInstruction {
  /**
   * @schema ScalingInstruction#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema ScalingInstruction#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ScalingInstruction#ScalableDimension
   */
  readonly scalableDimension: string;

  /**
   * @schema ScalingInstruction#MinCapacity
   */
  readonly minCapacity: number;

  /**
   * @schema ScalingInstruction#MaxCapacity
   */
  readonly maxCapacity: number;

  /**
   * @schema ScalingInstruction#TargetTrackingConfigurations
   */
  readonly targetTrackingConfigurations: TargetTrackingConfiguration[];

  /**
   * @schema ScalingInstruction#PredefinedLoadMetricSpecification
   */
  readonly predefinedLoadMetricSpecification?: PredefinedLoadMetricSpecification;

  /**
   * @schema ScalingInstruction#CustomizedLoadMetricSpecification
   */
  readonly customizedLoadMetricSpecification?: CustomizedLoadMetricSpecification;

  /**
   * @schema ScalingInstruction#ScheduledActionBufferTime
   */
  readonly scheduledActionBufferTime?: number;

  /**
   * @schema ScalingInstruction#PredictiveScalingMaxCapacityBehavior
   */
  readonly predictiveScalingMaxCapacityBehavior?: string;

  /**
   * @schema ScalingInstruction#PredictiveScalingMaxCapacityBuffer
   */
  readonly predictiveScalingMaxCapacityBuffer?: number;

  /**
   * @schema ScalingInstruction#PredictiveScalingMode
   */
  readonly predictiveScalingMode?: string;

  /**
   * @schema ScalingInstruction#ScalingPolicyUpdateBehavior
   */
  readonly scalingPolicyUpdateBehavior?: string;

  /**
   * @schema ScalingInstruction#DisableDynamicScaling
   */
  readonly disableDynamicScaling?: boolean;

}

/**
 * @schema ScalingPlanResource
 */
export interface ScalingPlanResource {
  /**
   * @schema ScalingPlanResource#ScalingPlanName
   */
  readonly scalingPlanName: string;

  /**
   * @schema ScalingPlanResource#ScalingPlanVersion
   */
  readonly scalingPlanVersion: number;

  /**
   * @schema ScalingPlanResource#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema ScalingPlanResource#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ScalingPlanResource#ScalableDimension
   */
  readonly scalableDimension: string;

  /**
   * @schema ScalingPlanResource#ScalingPolicies
   */
  readonly scalingPolicies?: ScalingPolicy[];

  /**
   * @schema ScalingPlanResource#ScalingStatusCode
   */
  readonly scalingStatusCode: string;

  /**
   * @schema ScalingPlanResource#ScalingStatusMessage
   */
  readonly scalingStatusMessage?: string;

}

/**
 * @schema ScalingPlan
 */
export interface ScalingPlan {
  /**
   * @schema ScalingPlan#ScalingPlanName
   */
  readonly scalingPlanName: string;

  /**
   * @schema ScalingPlan#ScalingPlanVersion
   */
  readonly scalingPlanVersion: number;

  /**
   * @schema ScalingPlan#ApplicationSource
   */
  readonly applicationSource: ApplicationSource;

  /**
   * @schema ScalingPlan#ScalingInstructions
   */
  readonly scalingInstructions: ScalingInstruction[];

  /**
   * @schema ScalingPlan#StatusCode
   */
  readonly statusCode: string;

  /**
   * @schema ScalingPlan#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ScalingPlan#StatusStartTime
   */
  readonly statusStartTime?: string;

  /**
   * @schema ScalingPlan#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema Datapoint
 */
export interface Datapoint {
  /**
   * @schema Datapoint#Timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema Datapoint#Value
   */
  readonly value?: number;

}

/**
 * @schema TagFilter
 */
export interface TagFilter {
  /**
   * @schema TagFilter#Key
   */
  readonly key?: string;

  /**
   * @schema TagFilter#Values
   */
  readonly values?: string[];

}

/**
 * @schema TargetTrackingConfiguration
 */
export interface TargetTrackingConfiguration {
  /**
   * @schema TargetTrackingConfiguration#PredefinedScalingMetricSpecification
   */
  readonly predefinedScalingMetricSpecification?: PredefinedScalingMetricSpecification;

  /**
   * @schema TargetTrackingConfiguration#CustomizedScalingMetricSpecification
   */
  readonly customizedScalingMetricSpecification?: CustomizedScalingMetricSpecification;

  /**
   * @schema TargetTrackingConfiguration#TargetValue
   */
  readonly targetValue: number;

  /**
   * @schema TargetTrackingConfiguration#DisableScaleIn
   */
  readonly disableScaleIn?: boolean;

  /**
   * @schema TargetTrackingConfiguration#ScaleOutCooldown
   */
  readonly scaleOutCooldown?: number;

  /**
   * @schema TargetTrackingConfiguration#ScaleInCooldown
   */
  readonly scaleInCooldown?: number;

  /**
   * @schema TargetTrackingConfiguration#EstimatedInstanceWarmup
   */
  readonly estimatedInstanceWarmup?: number;

}

/**
 * @schema PredefinedLoadMetricSpecification
 */
export interface PredefinedLoadMetricSpecification {
  /**
   * @schema PredefinedLoadMetricSpecification#PredefinedLoadMetricType
   */
  readonly predefinedLoadMetricType: string;

  /**
   * @schema PredefinedLoadMetricSpecification#ResourceLabel
   */
  readonly resourceLabel?: string;

}

/**
 * @schema CustomizedLoadMetricSpecification
 */
export interface CustomizedLoadMetricSpecification {
  /**
   * @schema CustomizedLoadMetricSpecification#MetricName
   */
  readonly metricName: string;

  /**
   * @schema CustomizedLoadMetricSpecification#Namespace
   */
  readonly namespace: string;

  /**
   * @schema CustomizedLoadMetricSpecification#Dimensions
   */
  readonly dimensions?: MetricDimension[];

  /**
   * @schema CustomizedLoadMetricSpecification#Statistic
   */
  readonly statistic: string;

  /**
   * @schema CustomizedLoadMetricSpecification#Unit
   */
  readonly unit?: string;

}

/**
 * @schema ScalingPolicy
 */
export interface ScalingPolicy {
  /**
   * @schema ScalingPolicy#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema ScalingPolicy#PolicyType
   */
  readonly policyType: string;

  /**
   * @schema ScalingPolicy#TargetTrackingConfiguration
   */
  readonly targetTrackingConfiguration?: TargetTrackingConfiguration;

}

/**
 * @schema PredefinedScalingMetricSpecification
 */
export interface PredefinedScalingMetricSpecification {
  /**
   * @schema PredefinedScalingMetricSpecification#PredefinedScalingMetricType
   */
  readonly predefinedScalingMetricType: string;

  /**
   * @schema PredefinedScalingMetricSpecification#ResourceLabel
   */
  readonly resourceLabel?: string;

}

/**
 * @schema CustomizedScalingMetricSpecification
 */
export interface CustomizedScalingMetricSpecification {
  /**
   * @schema CustomizedScalingMetricSpecification#MetricName
   */
  readonly metricName: string;

  /**
   * @schema CustomizedScalingMetricSpecification#Namespace
   */
  readonly namespace: string;

  /**
   * @schema CustomizedScalingMetricSpecification#Dimensions
   */
  readonly dimensions?: MetricDimension[];

  /**
   * @schema CustomizedScalingMetricSpecification#Statistic
   */
  readonly statistic: string;

  /**
   * @schema CustomizedScalingMetricSpecification#Unit
   */
  readonly unit?: string;

}

/**
 * @schema MetricDimension
 */
export interface MetricDimension {
  /**
   * @schema MetricDimension#Name
   */
  readonly name: string;

  /**
   * @schema MetricDimension#Value
   */
  readonly value: string;

}
