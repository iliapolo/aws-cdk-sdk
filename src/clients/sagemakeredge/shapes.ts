/**
 * @schema SagemakerEdgeGetDeviceRegistrationRequest
 */
export interface SagemakerEdgeGetDeviceRegistrationRequest {
  /**
   * @schema SagemakerEdgeGetDeviceRegistrationRequest#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema SagemakerEdgeGetDeviceRegistrationRequest#DeviceFleetName
   */
  readonly deviceFleetName?: string;

}

/**
 * Converts an object of type 'SagemakerEdgeGetDeviceRegistrationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SagemakerEdgeGetDeviceRegistrationRequest(obj: SagemakerEdgeGetDeviceRegistrationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceName': obj.deviceName,
    'DeviceFleetName': obj.deviceFleetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SagemakerEdgeGetDeviceRegistrationResult
 */
export interface SagemakerEdgeGetDeviceRegistrationResult {
  /**
   * @schema SagemakerEdgeGetDeviceRegistrationResult#DeviceRegistration
   */
  readonly deviceRegistration?: string;

  /**
   * @schema SagemakerEdgeGetDeviceRegistrationResult#CacheTTL
   */
  readonly cacheTtl?: string;

}

/**
 * Converts an object of type 'SagemakerEdgeGetDeviceRegistrationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SagemakerEdgeGetDeviceRegistrationResult(obj: SagemakerEdgeGetDeviceRegistrationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceRegistration': obj.deviceRegistration,
    'CacheTTL': obj.cacheTtl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SagemakerEdgeSendHeartbeatRequest
 */
export interface SagemakerEdgeSendHeartbeatRequest {
  /**
   * @schema SagemakerEdgeSendHeartbeatRequest#AgentMetrics
   */
  readonly agentMetrics?: SagemakerEdgeEdgeMetric[];

  /**
   * @schema SagemakerEdgeSendHeartbeatRequest#Models
   */
  readonly models?: SagemakerEdgeModel[];

  /**
   * @schema SagemakerEdgeSendHeartbeatRequest#AgentVersion
   */
  readonly agentVersion?: string;

  /**
   * @schema SagemakerEdgeSendHeartbeatRequest#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema SagemakerEdgeSendHeartbeatRequest#DeviceFleetName
   */
  readonly deviceFleetName?: string;

}

/**
 * Converts an object of type 'SagemakerEdgeSendHeartbeatRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SagemakerEdgeSendHeartbeatRequest(obj: SagemakerEdgeSendHeartbeatRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AgentMetrics': obj.agentMetrics?.map(y => toJson_SagemakerEdgeEdgeMetric(y)),
    'Models': obj.models?.map(y => toJson_SagemakerEdgeModel(y)),
    'AgentVersion': obj.agentVersion,
    'DeviceName': obj.deviceName,
    'DeviceFleetName': obj.deviceFleetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SagemakerEdgeEdgeMetric
 */
export interface SagemakerEdgeEdgeMetric {
  /**
   * @schema SagemakerEdgeEdgeMetric#Dimension
   */
  readonly dimension?: string;

  /**
   * @schema SagemakerEdgeEdgeMetric#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema SagemakerEdgeEdgeMetric#Value
   */
  readonly value?: number;

  /**
   * @schema SagemakerEdgeEdgeMetric#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * Converts an object of type 'SagemakerEdgeEdgeMetric' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SagemakerEdgeEdgeMetric(obj: SagemakerEdgeEdgeMetric | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Dimension': obj.dimension,
    'MetricName': obj.metricName,
    'Value': obj.value,
    'Timestamp': obj.timestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SagemakerEdgeModel
 */
export interface SagemakerEdgeModel {
  /**
   * @schema SagemakerEdgeModel#ModelName
   */
  readonly modelName?: string;

  /**
   * @schema SagemakerEdgeModel#ModelVersion
   */
  readonly modelVersion?: string;

  /**
   * @schema SagemakerEdgeModel#LatestSampleTime
   */
  readonly latestSampleTime?: string;

  /**
   * @schema SagemakerEdgeModel#LatestInference
   */
  readonly latestInference?: string;

  /**
   * @schema SagemakerEdgeModel#ModelMetrics
   */
  readonly modelMetrics?: SagemakerEdgeEdgeMetric[];

}

/**
 * Converts an object of type 'SagemakerEdgeModel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SagemakerEdgeModel(obj: SagemakerEdgeModel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ModelName': obj.modelName,
    'ModelVersion': obj.modelVersion,
    'LatestSampleTime': obj.latestSampleTime,
    'LatestInference': obj.latestInference,
    'ModelMetrics': obj.modelMetrics?.map(y => toJson_SagemakerEdgeEdgeMetric(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
