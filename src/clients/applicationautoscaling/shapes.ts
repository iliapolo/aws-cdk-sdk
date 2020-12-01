/**
 * @schema DeleteScalingPolicyRequest
 */
export interface DeleteScalingPolicyRequest {
  /**
   * @schema DeleteScalingPolicyRequest#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema DeleteScalingPolicyRequest#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema DeleteScalingPolicyRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema DeleteScalingPolicyRequest#ScalableDimension
   */
  readonly scalableDimension: string;

}

/**
 * @schema DeleteScalingPolicyResponse
 */
export interface DeleteScalingPolicyResponse {
}

/**
 * @schema DeleteScheduledActionRequest
 */
export interface DeleteScheduledActionRequest {
  /**
   * @schema DeleteScheduledActionRequest#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema DeleteScheduledActionRequest#ScheduledActionName
   */
  readonly scheduledActionName: string;

  /**
   * @schema DeleteScheduledActionRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema DeleteScheduledActionRequest#ScalableDimension
   */
  readonly scalableDimension: string;

}

/**
 * @schema DeleteScheduledActionResponse
 */
export interface DeleteScheduledActionResponse {
}

/**
 * @schema DeregisterScalableTargetRequest
 */
export interface DeregisterScalableTargetRequest {
  /**
   * @schema DeregisterScalableTargetRequest#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema DeregisterScalableTargetRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema DeregisterScalableTargetRequest#ScalableDimension
   */
  readonly scalableDimension: string;

}

/**
 * @schema DeregisterScalableTargetResponse
 */
export interface DeregisterScalableTargetResponse {
}

/**
 * @schema DescribeScalableTargetsRequest
 */
export interface DescribeScalableTargetsRequest {
  /**
   * @schema DescribeScalableTargetsRequest#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema DescribeScalableTargetsRequest#ResourceIds
   */
  readonly resourceIds?: string[];

  /**
   * @schema DescribeScalableTargetsRequest#ScalableDimension
   */
  readonly scalableDimension?: string;

  /**
   * @schema DescribeScalableTargetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeScalableTargetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeScalableTargetsResponse
 */
export interface DescribeScalableTargetsResponse {
  /**
   * @schema DescribeScalableTargetsResponse#ScalableTargets
   */
  readonly scalableTargets?: ScalableTarget[];

  /**
   * @schema DescribeScalableTargetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeScalingActivitiesRequest
 */
export interface DescribeScalingActivitiesRequest {
  /**
   * @schema DescribeScalingActivitiesRequest#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema DescribeScalingActivitiesRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema DescribeScalingActivitiesRequest#ScalableDimension
   */
  readonly scalableDimension?: string;

  /**
   * @schema DescribeScalingActivitiesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeScalingActivitiesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeScalingActivitiesResponse
 */
export interface DescribeScalingActivitiesResponse {
  /**
   * @schema DescribeScalingActivitiesResponse#ScalingActivities
   */
  readonly scalingActivities?: ScalingActivity[];

  /**
   * @schema DescribeScalingActivitiesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeScalingPoliciesRequest
 */
export interface DescribeScalingPoliciesRequest {
  /**
   * @schema DescribeScalingPoliciesRequest#PolicyNames
   */
  readonly policyNames?: string[];

  /**
   * @schema DescribeScalingPoliciesRequest#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema DescribeScalingPoliciesRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema DescribeScalingPoliciesRequest#ScalableDimension
   */
  readonly scalableDimension?: string;

  /**
   * @schema DescribeScalingPoliciesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeScalingPoliciesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeScalingPoliciesResponse
 */
export interface DescribeScalingPoliciesResponse {
  /**
   * @schema DescribeScalingPoliciesResponse#ScalingPolicies
   */
  readonly scalingPolicies?: ScalingPolicy[];

  /**
   * @schema DescribeScalingPoliciesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeScheduledActionsRequest
 */
export interface DescribeScheduledActionsRequest {
  /**
   * @schema DescribeScheduledActionsRequest#ScheduledActionNames
   */
  readonly scheduledActionNames?: string[];

  /**
   * @schema DescribeScheduledActionsRequest#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema DescribeScheduledActionsRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema DescribeScheduledActionsRequest#ScalableDimension
   */
  readonly scalableDimension?: string;

  /**
   * @schema DescribeScheduledActionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeScheduledActionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeScheduledActionsResponse
 */
export interface DescribeScheduledActionsResponse {
  /**
   * @schema DescribeScheduledActionsResponse#ScheduledActions
   */
  readonly scheduledActions?: ScheduledAction[];

  /**
   * @schema DescribeScheduledActionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PutScalingPolicyRequest
 */
export interface PutScalingPolicyRequest {
  /**
   * @schema PutScalingPolicyRequest#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema PutScalingPolicyRequest#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema PutScalingPolicyRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema PutScalingPolicyRequest#ScalableDimension
   */
  readonly scalableDimension: string;

  /**
   * @schema PutScalingPolicyRequest#PolicyType
   */
  readonly policyType?: string;

  /**
   * @schema PutScalingPolicyRequest#StepScalingPolicyConfiguration
   */
  readonly stepScalingPolicyConfiguration?: StepScalingPolicyConfiguration;

  /**
   * @schema PutScalingPolicyRequest#TargetTrackingScalingPolicyConfiguration
   */
  readonly targetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration;

}

/**
 * @schema PutScalingPolicyResponse
 */
export interface PutScalingPolicyResponse {
  /**
   * @schema PutScalingPolicyResponse#PolicyARN
   */
  readonly policyArn: string;

  /**
   * @schema PutScalingPolicyResponse#Alarms
   */
  readonly alarms?: Alarm[];

}

/**
 * @schema PutScheduledActionRequest
 */
export interface PutScheduledActionRequest {
  /**
   * @schema PutScheduledActionRequest#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema PutScheduledActionRequest#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema PutScheduledActionRequest#ScheduledActionName
   */
  readonly scheduledActionName: string;

  /**
   * @schema PutScheduledActionRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema PutScheduledActionRequest#ScalableDimension
   */
  readonly scalableDimension: string;

  /**
   * @schema PutScheduledActionRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema PutScheduledActionRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema PutScheduledActionRequest#ScalableTargetAction
   */
  readonly scalableTargetAction?: ScalableTargetAction;

}

/**
 * @schema PutScheduledActionResponse
 */
export interface PutScheduledActionResponse {
}

/**
 * @schema RegisterScalableTargetRequest
 */
export interface RegisterScalableTargetRequest {
  /**
   * @schema RegisterScalableTargetRequest#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema RegisterScalableTargetRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema RegisterScalableTargetRequest#ScalableDimension
   */
  readonly scalableDimension: string;

  /**
   * @schema RegisterScalableTargetRequest#MinCapacity
   */
  readonly minCapacity?: number;

  /**
   * @schema RegisterScalableTargetRequest#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema RegisterScalableTargetRequest#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema RegisterScalableTargetRequest#SuspendedState
   */
  readonly suspendedState?: SuspendedState;

}

/**
 * @schema RegisterScalableTargetResponse
 */
export interface RegisterScalableTargetResponse {
}

/**
 * @schema ScalableTarget
 */
export interface ScalableTarget {
  /**
   * @schema ScalableTarget#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema ScalableTarget#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ScalableTarget#ScalableDimension
   */
  readonly scalableDimension: string;

  /**
   * @schema ScalableTarget#MinCapacity
   */
  readonly minCapacity: number;

  /**
   * @schema ScalableTarget#MaxCapacity
   */
  readonly maxCapacity: number;

  /**
   * @schema ScalableTarget#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema ScalableTarget#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema ScalableTarget#SuspendedState
   */
  readonly suspendedState?: SuspendedState;

}

/**
 * @schema ScalingActivity
 */
export interface ScalingActivity {
  /**
   * @schema ScalingActivity#ActivityId
   */
  readonly activityId: string;

  /**
   * @schema ScalingActivity#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema ScalingActivity#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ScalingActivity#ScalableDimension
   */
  readonly scalableDimension: string;

  /**
   * @schema ScalingActivity#Description
   */
  readonly description: string;

  /**
   * @schema ScalingActivity#Cause
   */
  readonly cause: string;

  /**
   * @schema ScalingActivity#StartTime
   */
  readonly startTime: string;

  /**
   * @schema ScalingActivity#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ScalingActivity#StatusCode
   */
  readonly statusCode: string;

  /**
   * @schema ScalingActivity#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ScalingActivity#Details
   */
  readonly details?: string;

}

/**
 * @schema ScalingPolicy
 */
export interface ScalingPolicy {
  /**
   * @schema ScalingPolicy#PolicyARN
   */
  readonly policyArn: string;

  /**
   * @schema ScalingPolicy#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema ScalingPolicy#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema ScalingPolicy#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ScalingPolicy#ScalableDimension
   */
  readonly scalableDimension: string;

  /**
   * @schema ScalingPolicy#PolicyType
   */
  readonly policyType: string;

  /**
   * @schema ScalingPolicy#StepScalingPolicyConfiguration
   */
  readonly stepScalingPolicyConfiguration?: StepScalingPolicyConfiguration;

  /**
   * @schema ScalingPolicy#TargetTrackingScalingPolicyConfiguration
   */
  readonly targetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration;

  /**
   * @schema ScalingPolicy#Alarms
   */
  readonly alarms?: Alarm[];

  /**
   * @schema ScalingPolicy#CreationTime
   */
  readonly creationTime: string;

}

/**
 * @schema ScheduledAction
 */
export interface ScheduledAction {
  /**
   * @schema ScheduledAction#ScheduledActionName
   */
  readonly scheduledActionName: string;

  /**
   * @schema ScheduledAction#ScheduledActionARN
   */
  readonly scheduledActionArn: string;

  /**
   * @schema ScheduledAction#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema ScheduledAction#Schedule
   */
  readonly schedule: string;

  /**
   * @schema ScheduledAction#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ScheduledAction#ScalableDimension
   */
  readonly scalableDimension?: string;

  /**
   * @schema ScheduledAction#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ScheduledAction#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ScheduledAction#ScalableTargetAction
   */
  readonly scalableTargetAction?: ScalableTargetAction;

  /**
   * @schema ScheduledAction#CreationTime
   */
  readonly creationTime: string;

}

/**
 * @schema StepScalingPolicyConfiguration
 */
export interface StepScalingPolicyConfiguration {
  /**
   * @schema StepScalingPolicyConfiguration#AdjustmentType
   */
  readonly adjustmentType?: string;

  /**
   * @schema StepScalingPolicyConfiguration#StepAdjustments
   */
  readonly stepAdjustments?: StepAdjustment[];

  /**
   * @schema StepScalingPolicyConfiguration#MinAdjustmentMagnitude
   */
  readonly minAdjustmentMagnitude?: number;

  /**
   * @schema StepScalingPolicyConfiguration#Cooldown
   */
  readonly cooldown?: number;

  /**
   * @schema StepScalingPolicyConfiguration#MetricAggregationType
   */
  readonly metricAggregationType?: string;

}

/**
 * @schema TargetTrackingScalingPolicyConfiguration
 */
export interface TargetTrackingScalingPolicyConfiguration {
  /**
   * @schema TargetTrackingScalingPolicyConfiguration#TargetValue
   */
  readonly targetValue: number;

  /**
   * @schema TargetTrackingScalingPolicyConfiguration#PredefinedMetricSpecification
   */
  readonly predefinedMetricSpecification?: PredefinedMetricSpecification;

  /**
   * @schema TargetTrackingScalingPolicyConfiguration#CustomizedMetricSpecification
   */
  readonly customizedMetricSpecification?: CustomizedMetricSpecification;

  /**
   * @schema TargetTrackingScalingPolicyConfiguration#ScaleOutCooldown
   */
  readonly scaleOutCooldown?: number;

  /**
   * @schema TargetTrackingScalingPolicyConfiguration#ScaleInCooldown
   */
  readonly scaleInCooldown?: number;

  /**
   * @schema TargetTrackingScalingPolicyConfiguration#DisableScaleIn
   */
  readonly disableScaleIn?: boolean;

}

/**
 * @schema Alarm
 */
export interface Alarm {
  /**
   * @schema Alarm#AlarmName
   */
  readonly alarmName: string;

  /**
   * @schema Alarm#AlarmARN
   */
  readonly alarmArn: string;

}

/**
 * @schema ScalableTargetAction
 */
export interface ScalableTargetAction {
  /**
   * @schema ScalableTargetAction#MinCapacity
   */
  readonly minCapacity?: number;

  /**
   * @schema ScalableTargetAction#MaxCapacity
   */
  readonly maxCapacity?: number;

}

/**
 * @schema SuspendedState
 */
export interface SuspendedState {
  /**
   * @schema SuspendedState#DynamicScalingInSuspended
   */
  readonly dynamicScalingInSuspended?: boolean;

  /**
   * @schema SuspendedState#DynamicScalingOutSuspended
   */
  readonly dynamicScalingOutSuspended?: boolean;

  /**
   * @schema SuspendedState#ScheduledScalingSuspended
   */
  readonly scheduledScalingSuspended?: boolean;

}

/**
 * @schema StepAdjustment
 */
export interface StepAdjustment {
  /**
   * @schema StepAdjustment#MetricIntervalLowerBound
   */
  readonly metricIntervalLowerBound?: number;

  /**
   * @schema StepAdjustment#MetricIntervalUpperBound
   */
  readonly metricIntervalUpperBound?: number;

  /**
   * @schema StepAdjustment#ScalingAdjustment
   */
  readonly scalingAdjustment: number;

}

/**
 * @schema PredefinedMetricSpecification
 */
export interface PredefinedMetricSpecification {
  /**
   * @schema PredefinedMetricSpecification#PredefinedMetricType
   */
  readonly predefinedMetricType: string;

  /**
   * @schema PredefinedMetricSpecification#ResourceLabel
   */
  readonly resourceLabel?: string;

}

/**
 * @schema CustomizedMetricSpecification
 */
export interface CustomizedMetricSpecification {
  /**
   * @schema CustomizedMetricSpecification#MetricName
   */
  readonly metricName: string;

  /**
   * @schema CustomizedMetricSpecification#Namespace
   */
  readonly namespace: string;

  /**
   * @schema CustomizedMetricSpecification#Dimensions
   */
  readonly dimensions?: MetricDimension[];

  /**
   * @schema CustomizedMetricSpecification#Statistic
   */
  readonly statistic: string;

  /**
   * @schema CustomizedMetricSpecification#Unit
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
