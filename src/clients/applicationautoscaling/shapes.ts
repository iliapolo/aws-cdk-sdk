/**
 * @schema ApplicationAutoScalingDeleteScalingPolicyRequest
 */
export interface ApplicationAutoScalingDeleteScalingPolicyRequest {
  /**
   * @schema ApplicationAutoScalingDeleteScalingPolicyRequest#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema ApplicationAutoScalingDeleteScalingPolicyRequest#ServiceNamespace
   */
  readonly serviceNamespace?: string;

  /**
   * @schema ApplicationAutoScalingDeleteScalingPolicyRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema ApplicationAutoScalingDeleteScalingPolicyRequest#ScalableDimension
   */
  readonly scalableDimension?: string;

}

/**
 * Converts an object of type 'ApplicationAutoScalingDeleteScalingPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingDeleteScalingPolicyRequest(obj: ApplicationAutoScalingDeleteScalingPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyName': obj.policyName,
    'ServiceNamespace': obj.serviceNamespace,
    'ResourceId': obj.resourceId,
    'ScalableDimension': obj.scalableDimension,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationAutoScalingDeleteScalingPolicyResponse
 */
export interface ApplicationAutoScalingDeleteScalingPolicyResponse {
}

/**
 * Converts an object of type 'ApplicationAutoScalingDeleteScalingPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingDeleteScalingPolicyResponse(obj: ApplicationAutoScalingDeleteScalingPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationAutoScalingDeleteScheduledActionRequest
 */
export interface ApplicationAutoScalingDeleteScheduledActionRequest {
  /**
   * @schema ApplicationAutoScalingDeleteScheduledActionRequest#ServiceNamespace
   */
  readonly serviceNamespace?: string;

  /**
   * @schema ApplicationAutoScalingDeleteScheduledActionRequest#ScheduledActionName
   */
  readonly scheduledActionName?: string;

  /**
   * @schema ApplicationAutoScalingDeleteScheduledActionRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema ApplicationAutoScalingDeleteScheduledActionRequest#ScalableDimension
   */
  readonly scalableDimension?: string;

}

/**
 * Converts an object of type 'ApplicationAutoScalingDeleteScheduledActionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingDeleteScheduledActionRequest(obj: ApplicationAutoScalingDeleteScheduledActionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceNamespace': obj.serviceNamespace,
    'ScheduledActionName': obj.scheduledActionName,
    'ResourceId': obj.resourceId,
    'ScalableDimension': obj.scalableDimension,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationAutoScalingDeleteScheduledActionResponse
 */
export interface ApplicationAutoScalingDeleteScheduledActionResponse {
}

/**
 * Converts an object of type 'ApplicationAutoScalingDeleteScheduledActionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingDeleteScheduledActionResponse(obj: ApplicationAutoScalingDeleteScheduledActionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationAutoScalingDeregisterScalableTargetRequest
 */
export interface ApplicationAutoScalingDeregisterScalableTargetRequest {
  /**
   * @schema ApplicationAutoScalingDeregisterScalableTargetRequest#ServiceNamespace
   */
  readonly serviceNamespace?: string;

  /**
   * @schema ApplicationAutoScalingDeregisterScalableTargetRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema ApplicationAutoScalingDeregisterScalableTargetRequest#ScalableDimension
   */
  readonly scalableDimension?: string;

}

/**
 * Converts an object of type 'ApplicationAutoScalingDeregisterScalableTargetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingDeregisterScalableTargetRequest(obj: ApplicationAutoScalingDeregisterScalableTargetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceNamespace': obj.serviceNamespace,
    'ResourceId': obj.resourceId,
    'ScalableDimension': obj.scalableDimension,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationAutoScalingDeregisterScalableTargetResponse
 */
export interface ApplicationAutoScalingDeregisterScalableTargetResponse {
}

/**
 * Converts an object of type 'ApplicationAutoScalingDeregisterScalableTargetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingDeregisterScalableTargetResponse(obj: ApplicationAutoScalingDeregisterScalableTargetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationAutoScalingDescribeScalableTargetsRequest
 */
export interface ApplicationAutoScalingDescribeScalableTargetsRequest {
  /**
   * @schema ApplicationAutoScalingDescribeScalableTargetsRequest#ServiceNamespace
   */
  readonly serviceNamespace?: string;

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
 * Converts an object of type 'ApplicationAutoScalingDescribeScalableTargetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingDescribeScalableTargetsRequest(obj: ApplicationAutoScalingDescribeScalableTargetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceNamespace': obj.serviceNamespace,
    'ResourceIds': obj.resourceIds?.map(y => y),
    'ScalableDimension': obj.scalableDimension,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ApplicationAutoScalingDescribeScalableTargetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingDescribeScalableTargetsResponse(obj: ApplicationAutoScalingDescribeScalableTargetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScalableTargets': obj.scalableTargets?.map(y => toJson_ApplicationAutoScalingScalableTarget(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationAutoScalingDescribeScalingActivitiesRequest
 */
export interface ApplicationAutoScalingDescribeScalingActivitiesRequest {
  /**
   * @schema ApplicationAutoScalingDescribeScalingActivitiesRequest#ServiceNamespace
   */
  readonly serviceNamespace?: string;

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
 * Converts an object of type 'ApplicationAutoScalingDescribeScalingActivitiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingDescribeScalingActivitiesRequest(obj: ApplicationAutoScalingDescribeScalingActivitiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceNamespace': obj.serviceNamespace,
    'ResourceId': obj.resourceId,
    'ScalableDimension': obj.scalableDimension,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ApplicationAutoScalingDescribeScalingActivitiesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingDescribeScalingActivitiesResponse(obj: ApplicationAutoScalingDescribeScalingActivitiesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScalingActivities': obj.scalingActivities?.map(y => toJson_ApplicationAutoScalingScalingActivity(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly serviceNamespace?: string;

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
 * Converts an object of type 'ApplicationAutoScalingDescribeScalingPoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingDescribeScalingPoliciesRequest(obj: ApplicationAutoScalingDescribeScalingPoliciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyNames': obj.policyNames?.map(y => y),
    'ServiceNamespace': obj.serviceNamespace,
    'ResourceId': obj.resourceId,
    'ScalableDimension': obj.scalableDimension,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ApplicationAutoScalingDescribeScalingPoliciesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingDescribeScalingPoliciesResponse(obj: ApplicationAutoScalingDescribeScalingPoliciesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScalingPolicies': obj.scalingPolicies?.map(y => toJson_ApplicationAutoScalingScalingPolicy(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly serviceNamespace?: string;

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
 * Converts an object of type 'ApplicationAutoScalingDescribeScheduledActionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingDescribeScheduledActionsRequest(obj: ApplicationAutoScalingDescribeScheduledActionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduledActionNames': obj.scheduledActionNames?.map(y => y),
    'ServiceNamespace': obj.serviceNamespace,
    'ResourceId': obj.resourceId,
    'ScalableDimension': obj.scalableDimension,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ApplicationAutoScalingDescribeScheduledActionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingDescribeScheduledActionsResponse(obj: ApplicationAutoScalingDescribeScheduledActionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduledActions': obj.scheduledActions?.map(y => toJson_ApplicationAutoScalingScheduledAction(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationAutoScalingPutScalingPolicyRequest
 */
export interface ApplicationAutoScalingPutScalingPolicyRequest {
  /**
   * @schema ApplicationAutoScalingPutScalingPolicyRequest#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema ApplicationAutoScalingPutScalingPolicyRequest#ServiceNamespace
   */
  readonly serviceNamespace?: string;

  /**
   * @schema ApplicationAutoScalingPutScalingPolicyRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema ApplicationAutoScalingPutScalingPolicyRequest#ScalableDimension
   */
  readonly scalableDimension?: string;

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
 * Converts an object of type 'ApplicationAutoScalingPutScalingPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingPutScalingPolicyRequest(obj: ApplicationAutoScalingPutScalingPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyName': obj.policyName,
    'ServiceNamespace': obj.serviceNamespace,
    'ResourceId': obj.resourceId,
    'ScalableDimension': obj.scalableDimension,
    'PolicyType': obj.policyType,
    'StepScalingPolicyConfiguration': toJson_ApplicationAutoScalingStepScalingPolicyConfiguration(obj.stepScalingPolicyConfiguration),
    'TargetTrackingScalingPolicyConfiguration': toJson_ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration(obj.targetTrackingScalingPolicyConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationAutoScalingPutScalingPolicyResponse
 */
export interface ApplicationAutoScalingPutScalingPolicyResponse {
  /**
   * @schema ApplicationAutoScalingPutScalingPolicyResponse#PolicyARN
   */
  readonly policyArn?: string;

  /**
   * @schema ApplicationAutoScalingPutScalingPolicyResponse#Alarms
   */
  readonly alarms?: ApplicationAutoScalingAlarm[];

}

/**
 * Converts an object of type 'ApplicationAutoScalingPutScalingPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingPutScalingPolicyResponse(obj: ApplicationAutoScalingPutScalingPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyARN': obj.policyArn,
    'Alarms': obj.alarms?.map(y => toJson_ApplicationAutoScalingAlarm(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationAutoScalingPutScheduledActionRequest
 */
export interface ApplicationAutoScalingPutScheduledActionRequest {
  /**
   * @schema ApplicationAutoScalingPutScheduledActionRequest#ServiceNamespace
   */
  readonly serviceNamespace?: string;

  /**
   * @schema ApplicationAutoScalingPutScheduledActionRequest#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema ApplicationAutoScalingPutScheduledActionRequest#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema ApplicationAutoScalingPutScheduledActionRequest#ScheduledActionName
   */
  readonly scheduledActionName?: string;

  /**
   * @schema ApplicationAutoScalingPutScheduledActionRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema ApplicationAutoScalingPutScheduledActionRequest#ScalableDimension
   */
  readonly scalableDimension?: string;

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
 * Converts an object of type 'ApplicationAutoScalingPutScheduledActionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingPutScheduledActionRequest(obj: ApplicationAutoScalingPutScheduledActionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceNamespace': obj.serviceNamespace,
    'Schedule': obj.schedule,
    'Timezone': obj.timezone,
    'ScheduledActionName': obj.scheduledActionName,
    'ResourceId': obj.resourceId,
    'ScalableDimension': obj.scalableDimension,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'ScalableTargetAction': toJson_ApplicationAutoScalingScalableTargetAction(obj.scalableTargetAction),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationAutoScalingPutScheduledActionResponse
 */
export interface ApplicationAutoScalingPutScheduledActionResponse {
}

/**
 * Converts an object of type 'ApplicationAutoScalingPutScheduledActionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingPutScheduledActionResponse(obj: ApplicationAutoScalingPutScheduledActionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationAutoScalingRegisterScalableTargetRequest
 */
export interface ApplicationAutoScalingRegisterScalableTargetRequest {
  /**
   * @schema ApplicationAutoScalingRegisterScalableTargetRequest#ServiceNamespace
   */
  readonly serviceNamespace?: string;

  /**
   * @schema ApplicationAutoScalingRegisterScalableTargetRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema ApplicationAutoScalingRegisterScalableTargetRequest#ScalableDimension
   */
  readonly scalableDimension?: string;

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
 * Converts an object of type 'ApplicationAutoScalingRegisterScalableTargetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingRegisterScalableTargetRequest(obj: ApplicationAutoScalingRegisterScalableTargetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceNamespace': obj.serviceNamespace,
    'ResourceId': obj.resourceId,
    'ScalableDimension': obj.scalableDimension,
    'MinCapacity': obj.minCapacity,
    'MaxCapacity': obj.maxCapacity,
    'RoleARN': obj.roleArn,
    'SuspendedState': toJson_ApplicationAutoScalingSuspendedState(obj.suspendedState),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationAutoScalingRegisterScalableTargetResponse
 */
export interface ApplicationAutoScalingRegisterScalableTargetResponse {
}

/**
 * Converts an object of type 'ApplicationAutoScalingRegisterScalableTargetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingRegisterScalableTargetResponse(obj: ApplicationAutoScalingRegisterScalableTargetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationAutoScalingScalableTarget
 */
export interface ApplicationAutoScalingScalableTarget {
  /**
   * @schema ApplicationAutoScalingScalableTarget#ServiceNamespace
   */
  readonly serviceNamespace?: string;

  /**
   * @schema ApplicationAutoScalingScalableTarget#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema ApplicationAutoScalingScalableTarget#ScalableDimension
   */
  readonly scalableDimension?: string;

  /**
   * @schema ApplicationAutoScalingScalableTarget#MinCapacity
   */
  readonly minCapacity?: number;

  /**
   * @schema ApplicationAutoScalingScalableTarget#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema ApplicationAutoScalingScalableTarget#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema ApplicationAutoScalingScalableTarget#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ApplicationAutoScalingScalableTarget#SuspendedState
   */
  readonly suspendedState?: ApplicationAutoScalingSuspendedState;

}

/**
 * Converts an object of type 'ApplicationAutoScalingScalableTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingScalableTarget(obj: ApplicationAutoScalingScalableTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceNamespace': obj.serviceNamespace,
    'ResourceId': obj.resourceId,
    'ScalableDimension': obj.scalableDimension,
    'MinCapacity': obj.minCapacity,
    'MaxCapacity': obj.maxCapacity,
    'RoleARN': obj.roleArn,
    'CreationTime': obj.creationTime,
    'SuspendedState': toJson_ApplicationAutoScalingSuspendedState(obj.suspendedState),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationAutoScalingScalingActivity
 */
export interface ApplicationAutoScalingScalingActivity {
  /**
   * @schema ApplicationAutoScalingScalingActivity#ActivityId
   */
  readonly activityId?: string;

  /**
   * @schema ApplicationAutoScalingScalingActivity#ServiceNamespace
   */
  readonly serviceNamespace?: string;

  /**
   * @schema ApplicationAutoScalingScalingActivity#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema ApplicationAutoScalingScalingActivity#ScalableDimension
   */
  readonly scalableDimension?: string;

  /**
   * @schema ApplicationAutoScalingScalingActivity#Description
   */
  readonly description?: string;

  /**
   * @schema ApplicationAutoScalingScalingActivity#Cause
   */
  readonly cause?: string;

  /**
   * @schema ApplicationAutoScalingScalingActivity#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ApplicationAutoScalingScalingActivity#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ApplicationAutoScalingScalingActivity#StatusCode
   */
  readonly statusCode?: string;

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
 * Converts an object of type 'ApplicationAutoScalingScalingActivity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingScalingActivity(obj: ApplicationAutoScalingScalingActivity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActivityId': obj.activityId,
    'ServiceNamespace': obj.serviceNamespace,
    'ResourceId': obj.resourceId,
    'ScalableDimension': obj.scalableDimension,
    'Description': obj.description,
    'Cause': obj.cause,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'StatusCode': obj.statusCode,
    'StatusMessage': obj.statusMessage,
    'Details': obj.details,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationAutoScalingScalingPolicy
 */
export interface ApplicationAutoScalingScalingPolicy {
  /**
   * @schema ApplicationAutoScalingScalingPolicy#PolicyARN
   */
  readonly policyArn?: string;

  /**
   * @schema ApplicationAutoScalingScalingPolicy#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema ApplicationAutoScalingScalingPolicy#ServiceNamespace
   */
  readonly serviceNamespace?: string;

  /**
   * @schema ApplicationAutoScalingScalingPolicy#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema ApplicationAutoScalingScalingPolicy#ScalableDimension
   */
  readonly scalableDimension?: string;

  /**
   * @schema ApplicationAutoScalingScalingPolicy#PolicyType
   */
  readonly policyType?: string;

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
  readonly creationTime?: string;

}

/**
 * Converts an object of type 'ApplicationAutoScalingScalingPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingScalingPolicy(obj: ApplicationAutoScalingScalingPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyARN': obj.policyArn,
    'PolicyName': obj.policyName,
    'ServiceNamespace': obj.serviceNamespace,
    'ResourceId': obj.resourceId,
    'ScalableDimension': obj.scalableDimension,
    'PolicyType': obj.policyType,
    'StepScalingPolicyConfiguration': toJson_ApplicationAutoScalingStepScalingPolicyConfiguration(obj.stepScalingPolicyConfiguration),
    'TargetTrackingScalingPolicyConfiguration': toJson_ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration(obj.targetTrackingScalingPolicyConfiguration),
    'Alarms': obj.alarms?.map(y => toJson_ApplicationAutoScalingAlarm(y)),
    'CreationTime': obj.creationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationAutoScalingScheduledAction
 */
export interface ApplicationAutoScalingScheduledAction {
  /**
   * @schema ApplicationAutoScalingScheduledAction#ScheduledActionName
   */
  readonly scheduledActionName?: string;

  /**
   * @schema ApplicationAutoScalingScheduledAction#ScheduledActionARN
   */
  readonly scheduledActionArn?: string;

  /**
   * @schema ApplicationAutoScalingScheduledAction#ServiceNamespace
   */
  readonly serviceNamespace?: string;

  /**
   * @schema ApplicationAutoScalingScheduledAction#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema ApplicationAutoScalingScheduledAction#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema ApplicationAutoScalingScheduledAction#ResourceId
   */
  readonly resourceId?: string;

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
  readonly creationTime?: string;

}

/**
 * Converts an object of type 'ApplicationAutoScalingScheduledAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingScheduledAction(obj: ApplicationAutoScalingScheduledAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduledActionName': obj.scheduledActionName,
    'ScheduledActionARN': obj.scheduledActionArn,
    'ServiceNamespace': obj.serviceNamespace,
    'Schedule': obj.schedule,
    'Timezone': obj.timezone,
    'ResourceId': obj.resourceId,
    'ScalableDimension': obj.scalableDimension,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'ScalableTargetAction': toJson_ApplicationAutoScalingScalableTargetAction(obj.scalableTargetAction),
    'CreationTime': obj.creationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ApplicationAutoScalingStepScalingPolicyConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingStepScalingPolicyConfiguration(obj: ApplicationAutoScalingStepScalingPolicyConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdjustmentType': obj.adjustmentType,
    'StepAdjustments': obj.stepAdjustments?.map(y => toJson_ApplicationAutoScalingStepAdjustment(y)),
    'MinAdjustmentMagnitude': obj.minAdjustmentMagnitude,
    'Cooldown': obj.cooldown,
    'MetricAggregationType': obj.metricAggregationType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration
 */
export interface ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration {
  /**
   * @schema ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration#TargetValue
   */
  readonly targetValue?: number;

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
 * Converts an object of type 'ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration(obj: ApplicationAutoScalingTargetTrackingScalingPolicyConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetValue': obj.targetValue,
    'PredefinedMetricSpecification': toJson_ApplicationAutoScalingPredefinedMetricSpecification(obj.predefinedMetricSpecification),
    'CustomizedMetricSpecification': toJson_ApplicationAutoScalingCustomizedMetricSpecification(obj.customizedMetricSpecification),
    'ScaleOutCooldown': obj.scaleOutCooldown,
    'ScaleInCooldown': obj.scaleInCooldown,
    'DisableScaleIn': obj.disableScaleIn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationAutoScalingAlarm
 */
export interface ApplicationAutoScalingAlarm {
  /**
   * @schema ApplicationAutoScalingAlarm#AlarmName
   */
  readonly alarmName?: string;

  /**
   * @schema ApplicationAutoScalingAlarm#AlarmARN
   */
  readonly alarmArn?: string;

}

/**
 * Converts an object of type 'ApplicationAutoScalingAlarm' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingAlarm(obj: ApplicationAutoScalingAlarm | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AlarmName': obj.alarmName,
    'AlarmARN': obj.alarmArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ApplicationAutoScalingScalableTargetAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingScalableTargetAction(obj: ApplicationAutoScalingScalableTargetAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MinCapacity': obj.minCapacity,
    'MaxCapacity': obj.maxCapacity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ApplicationAutoScalingSuspendedState' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingSuspendedState(obj: ApplicationAutoScalingSuspendedState | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DynamicScalingInSuspended': obj.dynamicScalingInSuspended,
    'DynamicScalingOutSuspended': obj.dynamicScalingOutSuspended,
    'ScheduledScalingSuspended': obj.scheduledScalingSuspended,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly scalingAdjustment?: number;

}

/**
 * Converts an object of type 'ApplicationAutoScalingStepAdjustment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingStepAdjustment(obj: ApplicationAutoScalingStepAdjustment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetricIntervalLowerBound': obj.metricIntervalLowerBound,
    'MetricIntervalUpperBound': obj.metricIntervalUpperBound,
    'ScalingAdjustment': obj.scalingAdjustment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationAutoScalingPredefinedMetricSpecification
 */
export interface ApplicationAutoScalingPredefinedMetricSpecification {
  /**
   * @schema ApplicationAutoScalingPredefinedMetricSpecification#PredefinedMetricType
   */
  readonly predefinedMetricType?: string;

  /**
   * @schema ApplicationAutoScalingPredefinedMetricSpecification#ResourceLabel
   */
  readonly resourceLabel?: string;

}

/**
 * Converts an object of type 'ApplicationAutoScalingPredefinedMetricSpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingPredefinedMetricSpecification(obj: ApplicationAutoScalingPredefinedMetricSpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PredefinedMetricType': obj.predefinedMetricType,
    'ResourceLabel': obj.resourceLabel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationAutoScalingCustomizedMetricSpecification
 */
export interface ApplicationAutoScalingCustomizedMetricSpecification {
  /**
   * @schema ApplicationAutoScalingCustomizedMetricSpecification#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema ApplicationAutoScalingCustomizedMetricSpecification#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema ApplicationAutoScalingCustomizedMetricSpecification#Dimensions
   */
  readonly dimensions?: ApplicationAutoScalingMetricDimension[];

  /**
   * @schema ApplicationAutoScalingCustomizedMetricSpecification#Statistic
   */
  readonly statistic?: string;

  /**
   * @schema ApplicationAutoScalingCustomizedMetricSpecification#Unit
   */
  readonly unit?: string;

}

/**
 * Converts an object of type 'ApplicationAutoScalingCustomizedMetricSpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingCustomizedMetricSpecification(obj: ApplicationAutoScalingCustomizedMetricSpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetricName': obj.metricName,
    'Namespace': obj.namespace,
    'Dimensions': obj.dimensions?.map(y => toJson_ApplicationAutoScalingMetricDimension(y)),
    'Statistic': obj.statistic,
    'Unit': obj.unit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApplicationAutoScalingMetricDimension
 */
export interface ApplicationAutoScalingMetricDimension {
  /**
   * @schema ApplicationAutoScalingMetricDimension#Name
   */
  readonly name?: string;

  /**
   * @schema ApplicationAutoScalingMetricDimension#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'ApplicationAutoScalingMetricDimension' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApplicationAutoScalingMetricDimension(obj: ApplicationAutoScalingMetricDimension | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
