/**
 * @schema ApplicationAutoScalingDeleteScalingPolicyRequest
 */
export interface ApplicationAutoScalingDeleteScalingPolicyRequest {
  /**
   * @schema ApplicationAutoScalingDeleteScalingPolicyRequest#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema ApplicationAutoScalingDeleteScalingPolicyRequest#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema ApplicationAutoScalingDeleteScalingPolicyRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApplicationAutoScalingDeleteScalingPolicyRequest#ScalableDimension
   */
  readonly scalableDimension: string;

}

/**
 * @schema ApplicationAutoScalingDeleteScalingPolicyResponse
 */
export interface ApplicationAutoScalingDeleteScalingPolicyResponse {
}

/**
 * @schema ApplicationAutoScalingDeleteScheduledActionRequest
 */
export interface ApplicationAutoScalingDeleteScheduledActionRequest {
  /**
   * @schema ApplicationAutoScalingDeleteScheduledActionRequest#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema ApplicationAutoScalingDeleteScheduledActionRequest#ScheduledActionName
   */
  readonly scheduledActionName: string;

  /**
   * @schema ApplicationAutoScalingDeleteScheduledActionRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApplicationAutoScalingDeleteScheduledActionRequest#ScalableDimension
   */
  readonly scalableDimension: string;

}

/**
 * @schema ApplicationAutoScalingDeleteScheduledActionResponse
 */
export interface ApplicationAutoScalingDeleteScheduledActionResponse {
}

/**
 * @schema ApplicationAutoScalingDeregisterScalableTargetRequest
 */
export interface ApplicationAutoScalingDeregisterScalableTargetRequest {
  /**
   * @schema ApplicationAutoScalingDeregisterScalableTargetRequest#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema ApplicationAutoScalingDeregisterScalableTargetRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApplicationAutoScalingDeregisterScalableTargetRequest#ScalableDimension
   */
  readonly scalableDimension: string;

}

/**
 * @schema ApplicationAutoScalingDeregisterScalableTargetResponse
 */
export interface ApplicationAutoScalingDeregisterScalableTargetResponse {
}

/**
 * @schema ApplicationAutoScalingDescribeScalableTargetsRequest
 */
export interface ApplicationAutoScalingDescribeScalableTargetsRequest {
  /**
   * @schema ApplicationAutoScalingDescribeScalableTargetsRequest#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema ApplicationAutoScalingDescribeScalableTargetsRequest#ResourceIds
   */
  readonly resourceIds?: string[];

  /**
   * @schema ApplicationAutoScalingDescribeScalableTargetsRequest#ScalableDimension
   */
  readonly scalableDimension?: string;

  /**
   * @schema ApplicationAutoScalingDescribeScalableTargetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ApplicationAutoScalingDescribeScalableTargetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ApplicationAutoScalingDescribeScalableTargetsResponse
 */
export interface ApplicationAutoScalingDescribeScalableTargetsResponse {
  /**
   * @schema ApplicationAutoScalingDescribeScalableTargetsResponse#ScalableTargets
   */
  readonly scalableTargets?: ApplicationAutoScalingScalableTarget[];

  /**
   * @schema ApplicationAutoScalingDescribeScalableTargetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ApplicationAutoScalingDescribeScalingActivitiesRequest
 */
export interface ApplicationAutoScalingDescribeScalingActivitiesRequest {
  /**
   * @schema ApplicationAutoScalingDescribeScalingActivitiesRequest#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema ApplicationAutoScalingDescribeScalingActivitiesRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema ApplicationAutoScalingDescribeScalingActivitiesRequest#ScalableDimension
   */
  readonly scalableDimension?: string;

  /**
   * @schema ApplicationAutoScalingDescribeScalingActivitiesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ApplicationAutoScalingDescribeScalingActivitiesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ApplicationAutoScalingDescribeScalingActivitiesResponse
 */
export interface ApplicationAutoScalingDescribeScalingActivitiesResponse {
  /**
   * @schema ApplicationAutoScalingDescribeScalingActivitiesResponse#ScalingActivities
   */
  readonly scalingActivities?: ApplicationAutoScalingScalingActivity[];

  /**
   * @schema ApplicationAutoScalingDescribeScalingActivitiesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ApplicationAutoScalingDescribeScalingPoliciesRequest
 */
export interface ApplicationAutoScalingDescribeScalingPoliciesRequest {
  /**
   * @schema ApplicationAutoScalingDescribeScalingPoliciesRequest#PolicyNames
   */
  readonly policyNames?: string[];

  /**
   * @schema ApplicationAutoScalingDescribeScalingPoliciesRequest#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema ApplicationAutoScalingDescribeScalingPoliciesRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema ApplicationAutoScalingDescribeScalingPoliciesRequest#ScalableDimension
   */
  readonly scalableDimension?: string;

  /**
   * @schema ApplicationAutoScalingDescribeScalingPoliciesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ApplicationAutoScalingDescribeScalingPoliciesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ApplicationAutoScalingDescribeScalingPoliciesResponse
 */
export interface ApplicationAutoScalingDescribeScalingPoliciesResponse {
  /**
   * @schema ApplicationAutoScalingDescribeScalingPoliciesResponse#ScalingPolicies
   */
  readonly scalingPolicies?: ApplicationAutoScalingScalingPolicy[];

  /**
   * @schema ApplicationAutoScalingDescribeScalingPoliciesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ApplicationAutoScalingDescribeScheduledActionsRequest
 */
export interface ApplicationAutoScalingDescribeScheduledActionsRequest {
  /**
   * @schema ApplicationAutoScalingDescribeScheduledActionsRequest#ScheduledActionNames
   */
  readonly scheduledActionNames?: string[];

  /**
   * @schema ApplicationAutoScalingDescribeScheduledActionsRequest#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema ApplicationAutoScalingDescribeScheduledActionsRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema ApplicationAutoScalingDescribeScheduledActionsRequest#ScalableDimension
   */
  readonly scalableDimension?: string;

  /**
   * @schema ApplicationAutoScalingDescribeScheduledActionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ApplicationAutoScalingDescribeScheduledActionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ApplicationAutoScalingDescribeScheduledActionsResponse
 */
export interface ApplicationAutoScalingDescribeScheduledActionsResponse {
  /**
   * @schema ApplicationAutoScalingDescribeScheduledActionsResponse#ScheduledActions
   */
  readonly scheduledActions?: ApplicationAutoScalingScheduledAction[];

  /**
   * @schema ApplicationAutoScalingDescribeScheduledActionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ApplicationAutoScalingPutScalingPolicyRequest
 */
export interface ApplicationAutoScalingPutScalingPolicyRequest {
  /**
   * @schema ApplicationAutoScalingPutScalingPolicyRequest#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema ApplicationAutoScalingPutScalingPolicyRequest#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema ApplicationAutoScalingPutScalingPolicyRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApplicationAutoScalingPutScalingPolicyRequest#ScalableDimension
   */
  readonly scalableDimension: string;

  /**
   * @schema ApplicationAutoScalingPutScalingPolicyRequest#PolicyType
   */
  readonly policyType?: string;

  /**
   * @schema ApplicationAutoScalingPutScalingPolicyRequest#StepScalingPolicyConfiguration
   */
  readonly stepScalingPolicyConfiguration?: ApplicationAutoScalingStepScalingPolicyConfiguration;

  /**
   * @schema ApplicationAutoScalingPutScalingPolicyRequest#TargetTrackingScalingPolicyConfiguration
   */
  readonly targetTrackingScalingPolicyConfiguration?: ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration;

}

/**
 * @schema ApplicationAutoScalingPutScalingPolicyResponse
 */
export interface ApplicationAutoScalingPutScalingPolicyResponse {
  /**
   * @schema ApplicationAutoScalingPutScalingPolicyResponse#PolicyARN
   */
  readonly policyArn: string;

  /**
   * @schema ApplicationAutoScalingPutScalingPolicyResponse#Alarms
   */
  readonly alarms?: ApplicationAutoScalingAlarm[];

}

/**
 * @schema ApplicationAutoScalingPutScheduledActionRequest
 */
export interface ApplicationAutoScalingPutScheduledActionRequest {
  /**
   * @schema ApplicationAutoScalingPutScheduledActionRequest#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema ApplicationAutoScalingPutScheduledActionRequest#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema ApplicationAutoScalingPutScheduledActionRequest#ScheduledActionName
   */
  readonly scheduledActionName: string;

  /**
   * @schema ApplicationAutoScalingPutScheduledActionRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApplicationAutoScalingPutScheduledActionRequest#ScalableDimension
   */
  readonly scalableDimension: string;

  /**
   * @schema ApplicationAutoScalingPutScheduledActionRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ApplicationAutoScalingPutScheduledActionRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ApplicationAutoScalingPutScheduledActionRequest#ScalableTargetAction
   */
  readonly scalableTargetAction?: ApplicationAutoScalingScalableTargetAction;

}

/**
 * @schema ApplicationAutoScalingPutScheduledActionResponse
 */
export interface ApplicationAutoScalingPutScheduledActionResponse {
}

/**
 * @schema ApplicationAutoScalingRegisterScalableTargetRequest
 */
export interface ApplicationAutoScalingRegisterScalableTargetRequest {
  /**
   * @schema ApplicationAutoScalingRegisterScalableTargetRequest#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema ApplicationAutoScalingRegisterScalableTargetRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApplicationAutoScalingRegisterScalableTargetRequest#ScalableDimension
   */
  readonly scalableDimension: string;

  /**
   * @schema ApplicationAutoScalingRegisterScalableTargetRequest#MinCapacity
   */
  readonly minCapacity?: number;

  /**
   * @schema ApplicationAutoScalingRegisterScalableTargetRequest#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema ApplicationAutoScalingRegisterScalableTargetRequest#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema ApplicationAutoScalingRegisterScalableTargetRequest#SuspendedState
   */
  readonly suspendedState?: ApplicationAutoScalingSuspendedState;

}

/**
 * @schema ApplicationAutoScalingRegisterScalableTargetResponse
 */
export interface ApplicationAutoScalingRegisterScalableTargetResponse {
}

/**
 * @schema ApplicationAutoScalingScalableTarget
 */
export interface ApplicationAutoScalingScalableTarget {
  /**
   * @schema ApplicationAutoScalingScalableTarget#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema ApplicationAutoScalingScalableTarget#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApplicationAutoScalingScalableTarget#ScalableDimension
   */
  readonly scalableDimension: string;

  /**
   * @schema ApplicationAutoScalingScalableTarget#MinCapacity
   */
  readonly minCapacity: number;

  /**
   * @schema ApplicationAutoScalingScalableTarget#MaxCapacity
   */
  readonly maxCapacity: number;

  /**
   * @schema ApplicationAutoScalingScalableTarget#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema ApplicationAutoScalingScalableTarget#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema ApplicationAutoScalingScalableTarget#SuspendedState
   */
  readonly suspendedState?: ApplicationAutoScalingSuspendedState;

}

/**
 * @schema ApplicationAutoScalingScalingActivity
 */
export interface ApplicationAutoScalingScalingActivity {
  /**
   * @schema ApplicationAutoScalingScalingActivity#ActivityId
   */
  readonly activityId: string;

  /**
   * @schema ApplicationAutoScalingScalingActivity#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema ApplicationAutoScalingScalingActivity#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApplicationAutoScalingScalingActivity#ScalableDimension
   */
  readonly scalableDimension: string;

  /**
   * @schema ApplicationAutoScalingScalingActivity#Description
   */
  readonly description: string;

  /**
   * @schema ApplicationAutoScalingScalingActivity#Cause
   */
  readonly cause: string;

  /**
   * @schema ApplicationAutoScalingScalingActivity#StartTime
   */
  readonly startTime: string;

  /**
   * @schema ApplicationAutoScalingScalingActivity#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ApplicationAutoScalingScalingActivity#StatusCode
   */
  readonly statusCode: string;

  /**
   * @schema ApplicationAutoScalingScalingActivity#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ApplicationAutoScalingScalingActivity#Details
   */
  readonly details?: string;

}

/**
 * @schema ApplicationAutoScalingScalingPolicy
 */
export interface ApplicationAutoScalingScalingPolicy {
  /**
   * @schema ApplicationAutoScalingScalingPolicy#PolicyARN
   */
  readonly policyArn: string;

  /**
   * @schema ApplicationAutoScalingScalingPolicy#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema ApplicationAutoScalingScalingPolicy#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema ApplicationAutoScalingScalingPolicy#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApplicationAutoScalingScalingPolicy#ScalableDimension
   */
  readonly scalableDimension: string;

  /**
   * @schema ApplicationAutoScalingScalingPolicy#PolicyType
   */
  readonly policyType: string;

  /**
   * @schema ApplicationAutoScalingScalingPolicy#StepScalingPolicyConfiguration
   */
  readonly stepScalingPolicyConfiguration?: ApplicationAutoScalingStepScalingPolicyConfiguration;

  /**
   * @schema ApplicationAutoScalingScalingPolicy#TargetTrackingScalingPolicyConfiguration
   */
  readonly targetTrackingScalingPolicyConfiguration?: ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration;

  /**
   * @schema ApplicationAutoScalingScalingPolicy#Alarms
   */
  readonly alarms?: ApplicationAutoScalingAlarm[];

  /**
   * @schema ApplicationAutoScalingScalingPolicy#CreationTime
   */
  readonly creationTime: string;

}

/**
 * @schema ApplicationAutoScalingScheduledAction
 */
export interface ApplicationAutoScalingScheduledAction {
  /**
   * @schema ApplicationAutoScalingScheduledAction#ScheduledActionName
   */
  readonly scheduledActionName: string;

  /**
   * @schema ApplicationAutoScalingScheduledAction#ScheduledActionARN
   */
  readonly scheduledActionArn: string;

  /**
   * @schema ApplicationAutoScalingScheduledAction#ServiceNamespace
   */
  readonly serviceNamespace: string;

  /**
   * @schema ApplicationAutoScalingScheduledAction#Schedule
   */
  readonly schedule: string;

  /**
   * @schema ApplicationAutoScalingScheduledAction#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ApplicationAutoScalingScheduledAction#ScalableDimension
   */
  readonly scalableDimension?: string;

  /**
   * @schema ApplicationAutoScalingScheduledAction#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ApplicationAutoScalingScheduledAction#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ApplicationAutoScalingScheduledAction#ScalableTargetAction
   */
  readonly scalableTargetAction?: ApplicationAutoScalingScalableTargetAction;

  /**
   * @schema ApplicationAutoScalingScheduledAction#CreationTime
   */
  readonly creationTime: string;

}

/**
 * @schema ApplicationAutoScalingStepScalingPolicyConfiguration
 */
export interface ApplicationAutoScalingStepScalingPolicyConfiguration {
  /**
   * @schema ApplicationAutoScalingStepScalingPolicyConfiguration#AdjustmentType
   */
  readonly adjustmentType?: string;

  /**
   * @schema ApplicationAutoScalingStepScalingPolicyConfiguration#StepAdjustments
   */
  readonly stepAdjustments?: ApplicationAutoScalingStepAdjustment[];

  /**
   * @schema ApplicationAutoScalingStepScalingPolicyConfiguration#MinAdjustmentMagnitude
   */
  readonly minAdjustmentMagnitude?: number;

  /**
   * @schema ApplicationAutoScalingStepScalingPolicyConfiguration#Cooldown
   */
  readonly cooldown?: number;

  /**
   * @schema ApplicationAutoScalingStepScalingPolicyConfiguration#MetricAggregationType
   */
  readonly metricAggregationType?: string;

}

/**
 * @schema ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration
 */
export interface ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration {
  /**
   * @schema ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration#TargetValue
   */
  readonly targetValue: number;

  /**
   * @schema ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration#PredefinedMetricSpecification
   */
  readonly predefinedMetricSpecification?: ApplicationAutoScalingPredefinedMetricSpecification;

  /**
   * @schema ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration#CustomizedMetricSpecification
   */
  readonly customizedMetricSpecification?: ApplicationAutoScalingCustomizedMetricSpecification;

  /**
   * @schema ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration#ScaleOutCooldown
   */
  readonly scaleOutCooldown?: number;

  /**
   * @schema ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration#ScaleInCooldown
   */
  readonly scaleInCooldown?: number;

  /**
   * @schema ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration#DisableScaleIn
   */
  readonly disableScaleIn?: boolean;

}

/**
 * @schema ApplicationAutoScalingAlarm
 */
export interface ApplicationAutoScalingAlarm {
  /**
   * @schema ApplicationAutoScalingAlarm#AlarmName
   */
  readonly alarmName: string;

  /**
   * @schema ApplicationAutoScalingAlarm#AlarmARN
   */
  readonly alarmArn: string;

}

/**
 * @schema ApplicationAutoScalingScalableTargetAction
 */
export interface ApplicationAutoScalingScalableTargetAction {
  /**
   * @schema ApplicationAutoScalingScalableTargetAction#MinCapacity
   */
  readonly minCapacity?: number;

  /**
   * @schema ApplicationAutoScalingScalableTargetAction#MaxCapacity
   */
  readonly maxCapacity?: number;

}

/**
 * @schema ApplicationAutoScalingSuspendedState
 */
export interface ApplicationAutoScalingSuspendedState {
  /**
   * @schema ApplicationAutoScalingSuspendedState#DynamicScalingInSuspended
   */
  readonly dynamicScalingInSuspended?: boolean;

  /**
   * @schema ApplicationAutoScalingSuspendedState#DynamicScalingOutSuspended
   */
  readonly dynamicScalingOutSuspended?: boolean;

  /**
   * @schema ApplicationAutoScalingSuspendedState#ScheduledScalingSuspended
   */
  readonly scheduledScalingSuspended?: boolean;

}

/**
 * @schema ApplicationAutoScalingStepAdjustment
 */
export interface ApplicationAutoScalingStepAdjustment {
  /**
   * @schema ApplicationAutoScalingStepAdjustment#MetricIntervalLowerBound
   */
  readonly metricIntervalLowerBound?: number;

  /**
   * @schema ApplicationAutoScalingStepAdjustment#MetricIntervalUpperBound
   */
  readonly metricIntervalUpperBound?: number;

  /**
   * @schema ApplicationAutoScalingStepAdjustment#ScalingAdjustment
   */
  readonly scalingAdjustment: number;

}

/**
 * @schema ApplicationAutoScalingPredefinedMetricSpecification
 */
export interface ApplicationAutoScalingPredefinedMetricSpecification {
  /**
   * @schema ApplicationAutoScalingPredefinedMetricSpecification#PredefinedMetricType
   */
  readonly predefinedMetricType: string;

  /**
   * @schema ApplicationAutoScalingPredefinedMetricSpecification#ResourceLabel
   */
  readonly resourceLabel?: string;

}

/**
 * @schema ApplicationAutoScalingCustomizedMetricSpecification
 */
export interface ApplicationAutoScalingCustomizedMetricSpecification {
  /**
   * @schema ApplicationAutoScalingCustomizedMetricSpecification#MetricName
   */
  readonly metricName: string;

  /**
   * @schema ApplicationAutoScalingCustomizedMetricSpecification#Namespace
   */
  readonly namespace: string;

  /**
   * @schema ApplicationAutoScalingCustomizedMetricSpecification#Dimensions
   */
  readonly dimensions?: ApplicationAutoScalingMetricDimension[];

  /**
   * @schema ApplicationAutoScalingCustomizedMetricSpecification#Statistic
   */
  readonly statistic: string;

  /**
   * @schema ApplicationAutoScalingCustomizedMetricSpecification#Unit
   */
  readonly unit?: string;

}

/**
 * @schema ApplicationAutoScalingMetricDimension
 */
export interface ApplicationAutoScalingMetricDimension {
  /**
   * @schema ApplicationAutoScalingMetricDimension#Name
   */
  readonly name: string;

  /**
   * @schema ApplicationAutoScalingMetricDimension#Value
   */
  readonly value: string;

}
