/**
 * @schema AutoScalingPlansCreateScalingPlanRequest
 */
export interface AutoScalingPlansCreateScalingPlanRequest {
  /**
   * @schema AutoScalingPlansCreateScalingPlanRequest#ScalingPlanName
   */
  readonly scalingPlanName: string;

  /**
   * @schema AutoScalingPlansCreateScalingPlanRequest#ApplicationSource
   */
  readonly applicationSource: AutoScalingPlansApplicationSource;

  /**
   * @schema AutoScalingPlansCreateScalingPlanRequest#ScalingInstructions
   */
  readonly scalingInstructions: AutoScalingPlansScalingInstruction[];

}

/**
 * @schema AutoScalingPlansCreateScalingPlanResponse
 */
export interface AutoScalingPlansCreateScalingPlanResponse {
  /**
   * @schema AutoScalingPlansCreateScalingPlanResponse#ScalingPlanVersion
   */
  readonly scalingPlanVersion: number;

}

/**
 * @schema AutoScalingPlansDeleteScalingPlanRequest
 */
export interface AutoScalingPlansDeleteScalingPlanRequest {
  /**
   * @schema AutoScalingPlansDeleteScalingPlanRequest#ScalingPlanName
   */
  readonly scalingPlanName: string;

  /**
   * @schema AutoScalingPlansDeleteScalingPlanRequest#ScalingPlanVersion
   */
  readonly scalingPlanVersion: number;

}

/**
 * @schema AutoScalingPlansDeleteScalingPlanResponse
 */
export interface AutoScalingPlansDeleteScalingPlanResponse {
}

/**
 * @schema AutoScalingPlansDescribeScalingPlanResourcesRequest
 */
export interface AutoScalingPlansDescribeScalingPlanResourcesRequest {
  /**
   * @schema AutoScalingPlansDescribeScalingPlanResourcesRequest#ScalingPlanName
   */
  readonly scalingPlanName: string;

  /**
   * @schema AutoScalingPlansDescribeScalingPlanResourcesRequest#ScalingPlanVersion
   */
  readonly scalingPlanVersion: number;

  /**
   * @schema AutoScalingPlansDescribeScalingPlanResourcesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AutoScalingPlansDescribeScalingPlanResourcesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AutoScalingPlansDescribeScalingPlanResourcesResponse
 */
export interface AutoScalingPlansDescribeScalingPlanResourcesResponse {
  /**
   * @schema AutoScalingPlansDescribeScalingPlanResourcesResponse#ScalingPlanResources
   */
  readonly scalingPlanResources?: AutoScalingPlansScalingPlanResource[];

  /**
   * @schema AutoScalingPlansDescribeScalingPlanResourcesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AutoScalingPlansDescribeScalingPlansRequest
 */
export interface AutoScalingPlansDescribeScalingPlansRequest {
  /**
   * @schema AutoScalingPlansDescribeScalingPlansRequest#ScalingPlanNames
   */
  readonly scalingPlanNames?: string[];

  /**
   * @schema AutoScalingPlansDescribeScalingPlansRequest#ScalingPlanVersion
   */
  readonly scalingPlanVersion?: number;

  /**
   * @schema AutoScalingPlansDescribeScalingPlansRequest#ApplicationSources
   */
  readonly applicationSources?: AutoScalingPlansApplicationSource[];

  /**
   * @schema AutoScalingPlansDescribeScalingPlansRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AutoScalingPlansDescribeScalingPlansRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AutoScalingPlansDescribeScalingPlansResponse
 */
export interface AutoScalingPlansDescribeScalingPlansResponse {
  /**
   * @schema AutoScalingPlansDescribeScalingPlansResponse#ScalingPlans
   */
  readonly scalingPlans?: AutoScalingPlansScalingPlan[];

  /**
   * @schema AutoScalingPlansDescribeScalingPlansResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema AutoScalingPlansGetScalingPlanResourceForecastDataRequest
 */
export interface AutoScalingPlansGetScalingPlanResourceForecastDataRequest {
  /**
   * @schema AutoScalingPlansGetScalingPlanResourceForecastDataRequest#ScalingPlanName
   */
  readonly scalingPlanName: string;

  /**
   * @schema AutoScalingPlansGetScalingPlanResourceForecastDataRequest#ScalingPlanVersion
   */
  readonly scalingPlanVersion: number;

  /**
   * @schema AutoScalingPlansGetScalingPlanResourceForecastDataRequest#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema AutoScalingPlansGetScalingPlanResourceForecastDataRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema AutoScalingPlansGetScalingPlanResourceForecastDataRequest#ScalableDimension
   */
  readonly scalableDimension: string;

  /**
   * @schema AutoScalingPlansGetScalingPlanResourceForecastDataRequest#ForecastDataType
   */
  readonly forecastDataType: string;

  /**
   * @schema AutoScalingPlansGetScalingPlanResourceForecastDataRequest#StartTime
   */
  readonly startTime: string;

  /**
   * @schema AutoScalingPlansGetScalingPlanResourceForecastDataRequest#EndTime
   */
  readonly endTime: string;

}

/**
 * @schema AutoScalingPlansGetScalingPlanResourceForecastDataResponse
 */
export interface AutoScalingPlansGetScalingPlanResourceForecastDataResponse {
  /**
   * @schema AutoScalingPlansGetScalingPlanResourceForecastDataResponse#Datapoints
   */
  readonly datapoints: AutoScalingPlansDatapoint[];

}

/**
 * @schema AutoScalingPlansUpdateScalingPlanRequest
 */
export interface AutoScalingPlansUpdateScalingPlanRequest {
  /**
   * @schema AutoScalingPlansUpdateScalingPlanRequest#ScalingPlanName
   */
  readonly scalingPlanName: string;

  /**
   * @schema AutoScalingPlansUpdateScalingPlanRequest#ScalingPlanVersion
   */
  readonly scalingPlanVersion: number;

  /**
   * @schema AutoScalingPlansUpdateScalingPlanRequest#ApplicationSource
   */
  readonly applicationSource?: AutoScalingPlansApplicationSource;

  /**
   * @schema AutoScalingPlansUpdateScalingPlanRequest#ScalingInstructions
   */
  readonly scalingInstructions?: AutoScalingPlansScalingInstruction[];

}

/**
 * @schema AutoScalingPlansUpdateScalingPlanResponse
 */
export interface AutoScalingPlansUpdateScalingPlanResponse {
}

/**
 * @schema AutoScalingPlansApplicationSource
 */
export interface AutoScalingPlansApplicationSource {
  /**
   * @schema AutoScalingPlansApplicationSource#CloudFormationStackARN
   */
  readonly cloudFormationStackArn?: string;

  /**
   * @schema AutoScalingPlansApplicationSource#TagFilters
   */
  readonly tagFilters?: AutoScalingPlansTagFilter[];

}

/**
 * @schema AutoScalingPlansScalingInstruction
 */
export interface AutoScalingPlansScalingInstruction {
  /**
   * @schema AutoScalingPlansScalingInstruction#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema AutoScalingPlansScalingInstruction#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema AutoScalingPlansScalingInstruction#ScalableDimension
   */
  readonly scalableDimension: string;

  /**
   * @schema AutoScalingPlansScalingInstruction#MinCapacity
   */
  readonly minCapacity: number;

  /**
   * @schema AutoScalingPlansScalingInstruction#MaxCapacity
   */
  readonly maxCapacity: number;

  /**
   * @schema AutoScalingPlansScalingInstruction#TargetTrackingConfigurations
   */
  readonly targetTrackingConfigurations: AutoScalingPlansTargetTrackingConfiguration[];

  /**
   * @schema AutoScalingPlansScalingInstruction#PredefinedLoadMetricSpecification
   */
  readonly predefinedLoadMetricSpecification?: AutoScalingPlansPredefinedLoadMetricSpecification;

  /**
   * @schema AutoScalingPlansScalingInstruction#CustomizedLoadMetricSpecification
   */
  readonly customizedLoadMetricSpecification?: AutoScalingPlansCustomizedLoadMetricSpecification;

  /**
   * @schema AutoScalingPlansScalingInstruction#ScheduledActionBufferTime
   */
  readonly scheduledActionBufferTime?: number;

  /**
   * @schema AutoScalingPlansScalingInstruction#PredictiveScalingMaxCapacityBehavior
   */
  readonly predictiveScalingMaxCapacityBehavior?: string;

  /**
   * @schema AutoScalingPlansScalingInstruction#PredictiveScalingMaxCapacityBuffer
   */
  readonly predictiveScalingMaxCapacityBuffer?: number;

  /**
   * @schema AutoScalingPlansScalingInstruction#PredictiveScalingMode
   */
  readonly predictiveScalingMode?: string;

  /**
   * @schema AutoScalingPlansScalingInstruction#ScalingPolicyUpdateBehavior
   */
  readonly scalingPolicyUpdateBehavior?: string;

  /**
   * @schema AutoScalingPlansScalingInstruction#DisableDynamicScaling
   */
  readonly disableDynamicScaling?: boolean;

}

/**
 * @schema AutoScalingPlansScalingPlanResource
 */
export interface AutoScalingPlansScalingPlanResource {
  /**
   * @schema AutoScalingPlansScalingPlanResource#ScalingPlanName
   */
  readonly scalingPlanName: string;

  /**
   * @schema AutoScalingPlansScalingPlanResource#ScalingPlanVersion
   */
  readonly scalingPlanVersion: number;

  /**
   * @schema AutoScalingPlansScalingPlanResource#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema AutoScalingPlansScalingPlanResource#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema AutoScalingPlansScalingPlanResource#ScalableDimension
   */
  readonly scalableDimension: string;

  /**
   * @schema AutoScalingPlansScalingPlanResource#ScalingPolicies
   */
  readonly scalingPolicies?: AutoScalingPlansScalingPolicy[];

  /**
   * @schema AutoScalingPlansScalingPlanResource#ScalingStatusCode
   */
  readonly scalingStatusCode: string;

  /**
   * @schema AutoScalingPlansScalingPlanResource#ScalingStatusMessage
   */
  readonly scalingStatusMessage?: string;

}

/**
 * @schema AutoScalingPlansScalingPlan
 */
export interface AutoScalingPlansScalingPlan {
  /**
   * @schema AutoScalingPlansScalingPlan#ScalingPlanName
   */
  readonly scalingPlanName: string;

  /**
   * @schema AutoScalingPlansScalingPlan#ScalingPlanVersion
   */
  readonly scalingPlanVersion: number;

  /**
   * @schema AutoScalingPlansScalingPlan#ApplicationSource
   */
  readonly applicationSource: AutoScalingPlansApplicationSource;

  /**
   * @schema AutoScalingPlansScalingPlan#ScalingInstructions
   */
  readonly scalingInstructions: AutoScalingPlansScalingInstruction[];

  /**
   * @schema AutoScalingPlansScalingPlan#StatusCode
   */
  readonly statusCode: string;

  /**
   * @schema AutoScalingPlansScalingPlan#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema AutoScalingPlansScalingPlan#StatusStartTime
   */
  readonly statusStartTime?: string;

  /**
   * @schema AutoScalingPlansScalingPlan#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema AutoScalingPlansDatapoint
 */
export interface AutoScalingPlansDatapoint {
  /**
   * @schema AutoScalingPlansDatapoint#Timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema AutoScalingPlansDatapoint#Value
   */
  readonly value?: number;

}

/**
 * @schema AutoScalingPlansTagFilter
 */
export interface AutoScalingPlansTagFilter {
  /**
   * @schema AutoScalingPlansTagFilter#Key
   */
  readonly key?: string;

  /**
   * @schema AutoScalingPlansTagFilter#Values
   */
  readonly values?: string[];

}

/**
 * @schema AutoScalingPlansTargetTrackingConfiguration
 */
export interface AutoScalingPlansTargetTrackingConfiguration {
  /**
   * @schema AutoScalingPlansTargetTrackingConfiguration#PredefinedScalingMetricSpecification
   */
  readonly predefinedScalingMetricSpecification?: AutoScalingPlansPredefinedScalingMetricSpecification;

  /**
   * @schema AutoScalingPlansTargetTrackingConfiguration#CustomizedScalingMetricSpecification
   */
  readonly customizedScalingMetricSpecification?: AutoScalingPlansCustomizedScalingMetricSpecification;

  /**
   * @schema AutoScalingPlansTargetTrackingConfiguration#TargetValue
   */
  readonly targetValue: number;

  /**
   * @schema AutoScalingPlansTargetTrackingConfiguration#DisableScaleIn
   */
  readonly disableScaleIn?: boolean;

  /**
   * @schema AutoScalingPlansTargetTrackingConfiguration#ScaleOutCooldown
   */
  readonly scaleOutCooldown?: number;

  /**
   * @schema AutoScalingPlansTargetTrackingConfiguration#ScaleInCooldown
   */
  readonly scaleInCooldown?: number;

  /**
   * @schema AutoScalingPlansTargetTrackingConfiguration#EstimatedInstanceWarmup
   */
  readonly estimatedInstanceWarmup?: number;

}

/**
 * @schema AutoScalingPlansPredefinedLoadMetricSpecification
 */
export interface AutoScalingPlansPredefinedLoadMetricSpecification {
  /**
   * @schema AutoScalingPlansPredefinedLoadMetricSpecification#PredefinedLoadMetricType
   */
  readonly predefinedLoadMetricType: string;

  /**
   * @schema AutoScalingPlansPredefinedLoadMetricSpecification#ResourceLabel
   */
  readonly resourceLabel?: string;

}

/**
 * @schema AutoScalingPlansCustomizedLoadMetricSpecification
 */
export interface AutoScalingPlansCustomizedLoadMetricSpecification {
  /**
   * @schema AutoScalingPlansCustomizedLoadMetricSpecification#MetricName
   */
  readonly metricName: string;

  /**
   * @schema AutoScalingPlansCustomizedLoadMetricSpecification#Namespace
   */
  readonly namespace: string;

  /**
   * @schema AutoScalingPlansCustomizedLoadMetricSpecification#Dimensions
   */
  readonly dimensions?: AutoScalingPlansMetricDimension[];

  /**
   * @schema AutoScalingPlansCustomizedLoadMetricSpecification#Statistic
   */
  readonly statistic: string;

  /**
   * @schema AutoScalingPlansCustomizedLoadMetricSpecification#Unit
   */
  readonly unit?: string;

}

/**
 * @schema AutoScalingPlansScalingPolicy
 */
export interface AutoScalingPlansScalingPolicy {
  /**
   * @schema AutoScalingPlansScalingPolicy#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema AutoScalingPlansScalingPolicy#PolicyType
   */
  readonly policyType: string;

  /**
   * @schema AutoScalingPlansScalingPolicy#TargetTrackingConfiguration
   */
  readonly targetTrackingConfiguration?: AutoScalingPlansTargetTrackingConfiguration;

}

/**
 * @schema AutoScalingPlansPredefinedScalingMetricSpecification
 */
export interface AutoScalingPlansPredefinedScalingMetricSpecification {
  /**
   * @schema AutoScalingPlansPredefinedScalingMetricSpecification#PredefinedScalingMetricType
   */
  readonly predefinedScalingMetricType: string;

  /**
   * @schema AutoScalingPlansPredefinedScalingMetricSpecification#ResourceLabel
   */
  readonly resourceLabel?: string;

}

/**
 * @schema AutoScalingPlansCustomizedScalingMetricSpecification
 */
export interface AutoScalingPlansCustomizedScalingMetricSpecification {
  /**
   * @schema AutoScalingPlansCustomizedScalingMetricSpecification#MetricName
   */
  readonly metricName: string;

  /**
   * @schema AutoScalingPlansCustomizedScalingMetricSpecification#Namespace
   */
  readonly namespace: string;

  /**
   * @schema AutoScalingPlansCustomizedScalingMetricSpecification#Dimensions
   */
  readonly dimensions?: AutoScalingPlansMetricDimension[];

  /**
   * @schema AutoScalingPlansCustomizedScalingMetricSpecification#Statistic
   */
  readonly statistic: string;

  /**
   * @schema AutoScalingPlansCustomizedScalingMetricSpecification#Unit
   */
  readonly unit?: string;

}

/**
 * @schema AutoScalingPlansMetricDimension
 */
export interface AutoScalingPlansMetricDimension {
  /**
   * @schema AutoScalingPlansMetricDimension#Name
   */
  readonly name: string;

  /**
   * @schema AutoScalingPlansMetricDimension#Value
   */
  readonly value: string;

}
