/**
 * @schema AutoScalingPlansCreateScalingPlanRequest
 */
export interface AutoScalingPlansCreateScalingPlanRequest {
  /**
   * @schema AutoScalingPlansCreateScalingPlanRequest#ScalingPlanName
   */
  readonly scalingPlanName?: string;

  /**
   * @schema AutoScalingPlansCreateScalingPlanRequest#ApplicationSource
   */
  readonly applicationSource?: AutoScalingPlansApplicationSource;

  /**
   * @schema AutoScalingPlansCreateScalingPlanRequest#ScalingInstructions
   */
  readonly scalingInstructions?: AutoScalingPlansScalingInstruction[];

}

/**
 * Converts an object of type 'AutoScalingPlansCreateScalingPlanRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPlansCreateScalingPlanRequest(obj: AutoScalingPlansCreateScalingPlanRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScalingPlanName': obj.scalingPlanName,
    'ApplicationSource': toJson_AutoScalingPlansApplicationSource(obj.applicationSource),
    'ScalingInstructions': obj.scalingInstructions?.map(y => toJson_AutoScalingPlansScalingInstruction(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPlansCreateScalingPlanResponse
 */
export interface AutoScalingPlansCreateScalingPlanResponse {
  /**
   * @schema AutoScalingPlansCreateScalingPlanResponse#ScalingPlanVersion
   */
  readonly scalingPlanVersion?: number;

}

/**
 * Converts an object of type 'AutoScalingPlansCreateScalingPlanResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPlansCreateScalingPlanResponse(obj: AutoScalingPlansCreateScalingPlanResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScalingPlanVersion': obj.scalingPlanVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPlansDeleteScalingPlanRequest
 */
export interface AutoScalingPlansDeleteScalingPlanRequest {
  /**
   * @schema AutoScalingPlansDeleteScalingPlanRequest#ScalingPlanName
   */
  readonly scalingPlanName?: string;

  /**
   * @schema AutoScalingPlansDeleteScalingPlanRequest#ScalingPlanVersion
   */
  readonly scalingPlanVersion?: number;

}

/**
 * Converts an object of type 'AutoScalingPlansDeleteScalingPlanRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPlansDeleteScalingPlanRequest(obj: AutoScalingPlansDeleteScalingPlanRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScalingPlanName': obj.scalingPlanName,
    'ScalingPlanVersion': obj.scalingPlanVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPlansDeleteScalingPlanResponse
 */
export interface AutoScalingPlansDeleteScalingPlanResponse {
}

/**
 * Converts an object of type 'AutoScalingPlansDeleteScalingPlanResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPlansDeleteScalingPlanResponse(obj: AutoScalingPlansDeleteScalingPlanResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPlansDescribeScalingPlanResourcesRequest
 */
export interface AutoScalingPlansDescribeScalingPlanResourcesRequest {
  /**
   * @schema AutoScalingPlansDescribeScalingPlanResourcesRequest#ScalingPlanName
   */
  readonly scalingPlanName?: string;

  /**
   * @schema AutoScalingPlansDescribeScalingPlanResourcesRequest#ScalingPlanVersion
   */
  readonly scalingPlanVersion?: number;

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
 * Converts an object of type 'AutoScalingPlansDescribeScalingPlanResourcesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPlansDescribeScalingPlanResourcesRequest(obj: AutoScalingPlansDescribeScalingPlanResourcesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScalingPlanName': obj.scalingPlanName,
    'ScalingPlanVersion': obj.scalingPlanVersion,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingPlansDescribeScalingPlanResourcesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPlansDescribeScalingPlanResourcesResponse(obj: AutoScalingPlansDescribeScalingPlanResourcesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScalingPlanResources': obj.scalingPlanResources?.map(y => toJson_AutoScalingPlansScalingPlanResource(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingPlansDescribeScalingPlansRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPlansDescribeScalingPlansRequest(obj: AutoScalingPlansDescribeScalingPlansRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScalingPlanNames': obj.scalingPlanNames?.map(y => y),
    'ScalingPlanVersion': obj.scalingPlanVersion,
    'ApplicationSources': obj.applicationSources?.map(y => toJson_AutoScalingPlansApplicationSource(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingPlansDescribeScalingPlansResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPlansDescribeScalingPlansResponse(obj: AutoScalingPlansDescribeScalingPlansResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScalingPlans': obj.scalingPlans?.map(y => toJson_AutoScalingPlansScalingPlan(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPlansGetScalingPlanResourceForecastDataRequest
 */
export interface AutoScalingPlansGetScalingPlanResourceForecastDataRequest {
  /**
   * @schema AutoScalingPlansGetScalingPlanResourceForecastDataRequest#ScalingPlanName
   */
  readonly scalingPlanName?: string;

  /**
   * @schema AutoScalingPlansGetScalingPlanResourceForecastDataRequest#ScalingPlanVersion
   */
  readonly scalingPlanVersion?: number;

  /**
   * @schema AutoScalingPlansGetScalingPlanResourceForecastDataRequest#ServiceNamespace
   */
  readonly serviceNamespace?: string;

  /**
   * @schema AutoScalingPlansGetScalingPlanResourceForecastDataRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema AutoScalingPlansGetScalingPlanResourceForecastDataRequest#ScalableDimension
   */
  readonly scalableDimension?: string;

  /**
   * @schema AutoScalingPlansGetScalingPlanResourceForecastDataRequest#ForecastDataType
   */
  readonly forecastDataType?: string;

  /**
   * @schema AutoScalingPlansGetScalingPlanResourceForecastDataRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema AutoScalingPlansGetScalingPlanResourceForecastDataRequest#EndTime
   */
  readonly endTime?: string;

}

/**
 * Converts an object of type 'AutoScalingPlansGetScalingPlanResourceForecastDataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPlansGetScalingPlanResourceForecastDataRequest(obj: AutoScalingPlansGetScalingPlanResourceForecastDataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScalingPlanName': obj.scalingPlanName,
    'ScalingPlanVersion': obj.scalingPlanVersion,
    'ServiceNamespace': obj.serviceNamespace,
    'ResourceId': obj.resourceId,
    'ScalableDimension': obj.scalableDimension,
    'ForecastDataType': obj.forecastDataType,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPlansGetScalingPlanResourceForecastDataResponse
 */
export interface AutoScalingPlansGetScalingPlanResourceForecastDataResponse {
  /**
   * @schema AutoScalingPlansGetScalingPlanResourceForecastDataResponse#Datapoints
   */
  readonly datapoints?: AutoScalingPlansDatapoint[];

}

/**
 * Converts an object of type 'AutoScalingPlansGetScalingPlanResourceForecastDataResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPlansGetScalingPlanResourceForecastDataResponse(obj: AutoScalingPlansGetScalingPlanResourceForecastDataResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Datapoints': obj.datapoints?.map(y => toJson_AutoScalingPlansDatapoint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPlansUpdateScalingPlanRequest
 */
export interface AutoScalingPlansUpdateScalingPlanRequest {
  /**
   * @schema AutoScalingPlansUpdateScalingPlanRequest#ScalingPlanName
   */
  readonly scalingPlanName?: string;

  /**
   * @schema AutoScalingPlansUpdateScalingPlanRequest#ScalingPlanVersion
   */
  readonly scalingPlanVersion?: number;

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
 * Converts an object of type 'AutoScalingPlansUpdateScalingPlanRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPlansUpdateScalingPlanRequest(obj: AutoScalingPlansUpdateScalingPlanRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScalingPlanName': obj.scalingPlanName,
    'ScalingPlanVersion': obj.scalingPlanVersion,
    'ApplicationSource': toJson_AutoScalingPlansApplicationSource(obj.applicationSource),
    'ScalingInstructions': obj.scalingInstructions?.map(y => toJson_AutoScalingPlansScalingInstruction(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPlansUpdateScalingPlanResponse
 */
export interface AutoScalingPlansUpdateScalingPlanResponse {
}

/**
 * Converts an object of type 'AutoScalingPlansUpdateScalingPlanResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPlansUpdateScalingPlanResponse(obj: AutoScalingPlansUpdateScalingPlanResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingPlansApplicationSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPlansApplicationSource(obj: AutoScalingPlansApplicationSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudFormationStackARN': obj.cloudFormationStackArn,
    'TagFilters': obj.tagFilters?.map(y => toJson_AutoScalingPlansTagFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPlansScalingInstruction
 */
export interface AutoScalingPlansScalingInstruction {
  /**
   * @schema AutoScalingPlansScalingInstruction#ServiceNamespace
   */
  readonly serviceNamespace?: string;

  /**
   * @schema AutoScalingPlansScalingInstruction#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema AutoScalingPlansScalingInstruction#ScalableDimension
   */
  readonly scalableDimension?: string;

  /**
   * @schema AutoScalingPlansScalingInstruction#MinCapacity
   */
  readonly minCapacity?: number;

  /**
   * @schema AutoScalingPlansScalingInstruction#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema AutoScalingPlansScalingInstruction#TargetTrackingConfigurations
   */
  readonly targetTrackingConfigurations?: AutoScalingPlansTargetTrackingConfiguration[];

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
 * Converts an object of type 'AutoScalingPlansScalingInstruction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPlansScalingInstruction(obj: AutoScalingPlansScalingInstruction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceNamespace': obj.serviceNamespace,
    'ResourceId': obj.resourceId,
    'ScalableDimension': obj.scalableDimension,
    'MinCapacity': obj.minCapacity,
    'MaxCapacity': obj.maxCapacity,
    'TargetTrackingConfigurations': obj.targetTrackingConfigurations?.map(y => toJson_AutoScalingPlansTargetTrackingConfiguration(y)),
    'PredefinedLoadMetricSpecification': toJson_AutoScalingPlansPredefinedLoadMetricSpecification(obj.predefinedLoadMetricSpecification),
    'CustomizedLoadMetricSpecification': toJson_AutoScalingPlansCustomizedLoadMetricSpecification(obj.customizedLoadMetricSpecification),
    'ScheduledActionBufferTime': obj.scheduledActionBufferTime,
    'PredictiveScalingMaxCapacityBehavior': obj.predictiveScalingMaxCapacityBehavior,
    'PredictiveScalingMaxCapacityBuffer': obj.predictiveScalingMaxCapacityBuffer,
    'PredictiveScalingMode': obj.predictiveScalingMode,
    'ScalingPolicyUpdateBehavior': obj.scalingPolicyUpdateBehavior,
    'DisableDynamicScaling': obj.disableDynamicScaling,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPlansScalingPlanResource
 */
export interface AutoScalingPlansScalingPlanResource {
  /**
   * @schema AutoScalingPlansScalingPlanResource#ScalingPlanName
   */
  readonly scalingPlanName?: string;

  /**
   * @schema AutoScalingPlansScalingPlanResource#ScalingPlanVersion
   */
  readonly scalingPlanVersion?: number;

  /**
   * @schema AutoScalingPlansScalingPlanResource#ServiceNamespace
   */
  readonly serviceNamespace?: string;

  /**
   * @schema AutoScalingPlansScalingPlanResource#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema AutoScalingPlansScalingPlanResource#ScalableDimension
   */
  readonly scalableDimension?: string;

  /**
   * @schema AutoScalingPlansScalingPlanResource#ScalingPolicies
   */
  readonly scalingPolicies?: AutoScalingPlansScalingPolicy[];

  /**
   * @schema AutoScalingPlansScalingPlanResource#ScalingStatusCode
   */
  readonly scalingStatusCode?: string;

  /**
   * @schema AutoScalingPlansScalingPlanResource#ScalingStatusMessage
   */
  readonly scalingStatusMessage?: string;

}

/**
 * Converts an object of type 'AutoScalingPlansScalingPlanResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPlansScalingPlanResource(obj: AutoScalingPlansScalingPlanResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScalingPlanName': obj.scalingPlanName,
    'ScalingPlanVersion': obj.scalingPlanVersion,
    'ServiceNamespace': obj.serviceNamespace,
    'ResourceId': obj.resourceId,
    'ScalableDimension': obj.scalableDimension,
    'ScalingPolicies': obj.scalingPolicies?.map(y => toJson_AutoScalingPlansScalingPolicy(y)),
    'ScalingStatusCode': obj.scalingStatusCode,
    'ScalingStatusMessage': obj.scalingStatusMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPlansScalingPlan
 */
export interface AutoScalingPlansScalingPlan {
  /**
   * @schema AutoScalingPlansScalingPlan#ScalingPlanName
   */
  readonly scalingPlanName?: string;

  /**
   * @schema AutoScalingPlansScalingPlan#ScalingPlanVersion
   */
  readonly scalingPlanVersion?: number;

  /**
   * @schema AutoScalingPlansScalingPlan#ApplicationSource
   */
  readonly applicationSource?: AutoScalingPlansApplicationSource;

  /**
   * @schema AutoScalingPlansScalingPlan#ScalingInstructions
   */
  readonly scalingInstructions?: AutoScalingPlansScalingInstruction[];

  /**
   * @schema AutoScalingPlansScalingPlan#StatusCode
   */
  readonly statusCode?: string;

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
 * Converts an object of type 'AutoScalingPlansScalingPlan' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPlansScalingPlan(obj: AutoScalingPlansScalingPlan | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScalingPlanName': obj.scalingPlanName,
    'ScalingPlanVersion': obj.scalingPlanVersion,
    'ApplicationSource': toJson_AutoScalingPlansApplicationSource(obj.applicationSource),
    'ScalingInstructions': obj.scalingInstructions?.map(y => toJson_AutoScalingPlansScalingInstruction(y)),
    'StatusCode': obj.statusCode,
    'StatusMessage': obj.statusMessage,
    'StatusStartTime': obj.statusStartTime,
    'CreationTime': obj.creationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingPlansDatapoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPlansDatapoint(obj: AutoScalingPlansDatapoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Timestamp': obj.timestamp,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'AutoScalingPlansTagFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPlansTagFilter(obj: AutoScalingPlansTagFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly targetValue?: number;

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
 * Converts an object of type 'AutoScalingPlansTargetTrackingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPlansTargetTrackingConfiguration(obj: AutoScalingPlansTargetTrackingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PredefinedScalingMetricSpecification': toJson_AutoScalingPlansPredefinedScalingMetricSpecification(obj.predefinedScalingMetricSpecification),
    'CustomizedScalingMetricSpecification': toJson_AutoScalingPlansCustomizedScalingMetricSpecification(obj.customizedScalingMetricSpecification),
    'TargetValue': obj.targetValue,
    'DisableScaleIn': obj.disableScaleIn,
    'ScaleOutCooldown': obj.scaleOutCooldown,
    'ScaleInCooldown': obj.scaleInCooldown,
    'EstimatedInstanceWarmup': obj.estimatedInstanceWarmup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPlansPredefinedLoadMetricSpecification
 */
export interface AutoScalingPlansPredefinedLoadMetricSpecification {
  /**
   * @schema AutoScalingPlansPredefinedLoadMetricSpecification#PredefinedLoadMetricType
   */
  readonly predefinedLoadMetricType?: string;

  /**
   * @schema AutoScalingPlansPredefinedLoadMetricSpecification#ResourceLabel
   */
  readonly resourceLabel?: string;

}

/**
 * Converts an object of type 'AutoScalingPlansPredefinedLoadMetricSpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPlansPredefinedLoadMetricSpecification(obj: AutoScalingPlansPredefinedLoadMetricSpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PredefinedLoadMetricType': obj.predefinedLoadMetricType,
    'ResourceLabel': obj.resourceLabel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPlansCustomizedLoadMetricSpecification
 */
export interface AutoScalingPlansCustomizedLoadMetricSpecification {
  /**
   * @schema AutoScalingPlansCustomizedLoadMetricSpecification#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema AutoScalingPlansCustomizedLoadMetricSpecification#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema AutoScalingPlansCustomizedLoadMetricSpecification#Dimensions
   */
  readonly dimensions?: AutoScalingPlansMetricDimension[];

  /**
   * @schema AutoScalingPlansCustomizedLoadMetricSpecification#Statistic
   */
  readonly statistic?: string;

  /**
   * @schema AutoScalingPlansCustomizedLoadMetricSpecification#Unit
   */
  readonly unit?: string;

}

/**
 * Converts an object of type 'AutoScalingPlansCustomizedLoadMetricSpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPlansCustomizedLoadMetricSpecification(obj: AutoScalingPlansCustomizedLoadMetricSpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetricName': obj.metricName,
    'Namespace': obj.namespace,
    'Dimensions': obj.dimensions?.map(y => toJson_AutoScalingPlansMetricDimension(y)),
    'Statistic': obj.statistic,
    'Unit': obj.unit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPlansScalingPolicy
 */
export interface AutoScalingPlansScalingPolicy {
  /**
   * @schema AutoScalingPlansScalingPolicy#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema AutoScalingPlansScalingPolicy#PolicyType
   */
  readonly policyType?: string;

  /**
   * @schema AutoScalingPlansScalingPolicy#TargetTrackingConfiguration
   */
  readonly targetTrackingConfiguration?: AutoScalingPlansTargetTrackingConfiguration;

}

/**
 * Converts an object of type 'AutoScalingPlansScalingPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPlansScalingPolicy(obj: AutoScalingPlansScalingPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyName': obj.policyName,
    'PolicyType': obj.policyType,
    'TargetTrackingConfiguration': toJson_AutoScalingPlansTargetTrackingConfiguration(obj.targetTrackingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPlansPredefinedScalingMetricSpecification
 */
export interface AutoScalingPlansPredefinedScalingMetricSpecification {
  /**
   * @schema AutoScalingPlansPredefinedScalingMetricSpecification#PredefinedScalingMetricType
   */
  readonly predefinedScalingMetricType?: string;

  /**
   * @schema AutoScalingPlansPredefinedScalingMetricSpecification#ResourceLabel
   */
  readonly resourceLabel?: string;

}

/**
 * Converts an object of type 'AutoScalingPlansPredefinedScalingMetricSpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPlansPredefinedScalingMetricSpecification(obj: AutoScalingPlansPredefinedScalingMetricSpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PredefinedScalingMetricType': obj.predefinedScalingMetricType,
    'ResourceLabel': obj.resourceLabel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPlansCustomizedScalingMetricSpecification
 */
export interface AutoScalingPlansCustomizedScalingMetricSpecification {
  /**
   * @schema AutoScalingPlansCustomizedScalingMetricSpecification#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema AutoScalingPlansCustomizedScalingMetricSpecification#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema AutoScalingPlansCustomizedScalingMetricSpecification#Dimensions
   */
  readonly dimensions?: AutoScalingPlansMetricDimension[];

  /**
   * @schema AutoScalingPlansCustomizedScalingMetricSpecification#Statistic
   */
  readonly statistic?: string;

  /**
   * @schema AutoScalingPlansCustomizedScalingMetricSpecification#Unit
   */
  readonly unit?: string;

}

/**
 * Converts an object of type 'AutoScalingPlansCustomizedScalingMetricSpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPlansCustomizedScalingMetricSpecification(obj: AutoScalingPlansCustomizedScalingMetricSpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetricName': obj.metricName,
    'Namespace': obj.namespace,
    'Dimensions': obj.dimensions?.map(y => toJson_AutoScalingPlansMetricDimension(y)),
    'Statistic': obj.statistic,
    'Unit': obj.unit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AutoScalingPlansMetricDimension
 */
export interface AutoScalingPlansMetricDimension {
  /**
   * @schema AutoScalingPlansMetricDimension#Name
   */
  readonly name?: string;

  /**
   * @schema AutoScalingPlansMetricDimension#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'AutoScalingPlansMetricDimension' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AutoScalingPlansMetricDimension(obj: AutoScalingPlansMetricDimension | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
