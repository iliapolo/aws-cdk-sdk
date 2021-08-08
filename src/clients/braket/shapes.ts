/**
 * @schema BraketCancelQuantumTaskRequest
 */
export interface BraketCancelQuantumTaskRequest {
  /**
   * @schema BraketCancelQuantumTaskRequest#clientToken
   */
  readonly clientToken: string;

  /**
   * @schema BraketCancelQuantumTaskRequest#quantumTaskArn
   */
  readonly quantumTaskArn: string;

}

/**
 * Converts an object of type 'BraketCancelQuantumTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BraketCancelQuantumTaskRequest(obj: BraketCancelQuantumTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'quantumTaskArn': obj.quantumTaskArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BraketCancelQuantumTaskResponse
 */
export interface BraketCancelQuantumTaskResponse {
  /**
   * @schema BraketCancelQuantumTaskResponse#cancellationStatus
   */
  readonly cancellationStatus: string;

  /**
   * @schema BraketCancelQuantumTaskResponse#quantumTaskArn
   */
  readonly quantumTaskArn: string;

}

/**
 * Converts an object of type 'BraketCancelQuantumTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BraketCancelQuantumTaskResponse(obj: BraketCancelQuantumTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cancellationStatus': obj.cancellationStatus,
    'quantumTaskArn': obj.quantumTaskArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BraketCreateQuantumTaskRequest
 */
export interface BraketCreateQuantumTaskRequest {
  /**
   * @schema BraketCreateQuantumTaskRequest#action
   */
  readonly action: string;

  /**
   * @schema BraketCreateQuantumTaskRequest#clientToken
   */
  readonly clientToken: string;

  /**
   * @schema BraketCreateQuantumTaskRequest#deviceArn
   */
  readonly deviceArn: string;

  /**
   * @schema BraketCreateQuantumTaskRequest#deviceParameters
   */
  readonly deviceParameters?: string;

  /**
   * @schema BraketCreateQuantumTaskRequest#outputS3Bucket
   */
  readonly outputS3Bucket: string;

  /**
   * @schema BraketCreateQuantumTaskRequest#outputS3KeyPrefix
   */
  readonly outputS3KeyPrefix: string;

  /**
   * @schema BraketCreateQuantumTaskRequest#shots
   */
  readonly shots: number;

  /**
   * @schema BraketCreateQuantumTaskRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'BraketCreateQuantumTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BraketCreateQuantumTaskRequest(obj: BraketCreateQuantumTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': obj.action,
    'clientToken': obj.clientToken,
    'deviceArn': obj.deviceArn,
    'deviceParameters': obj.deviceParameters,
    'outputS3Bucket': obj.outputS3Bucket,
    'outputS3KeyPrefix': obj.outputS3KeyPrefix,
    'shots': obj.shots,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BraketCreateQuantumTaskResponse
 */
export interface BraketCreateQuantumTaskResponse {
  /**
   * @schema BraketCreateQuantumTaskResponse#quantumTaskArn
   */
  readonly quantumTaskArn: string;

}

/**
 * Converts an object of type 'BraketCreateQuantumTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BraketCreateQuantumTaskResponse(obj: BraketCreateQuantumTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'quantumTaskArn': obj.quantumTaskArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BraketGetDeviceRequest
 */
export interface BraketGetDeviceRequest {
  /**
   * @schema BraketGetDeviceRequest#deviceArn
   */
  readonly deviceArn: string;

}

/**
 * Converts an object of type 'BraketGetDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BraketGetDeviceRequest(obj: BraketGetDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deviceArn': obj.deviceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BraketGetDeviceResponse
 */
export interface BraketGetDeviceResponse {
  /**
   * @schema BraketGetDeviceResponse#deviceArn
   */
  readonly deviceArn: string;

  /**
   * @schema BraketGetDeviceResponse#deviceCapabilities
   */
  readonly deviceCapabilities: string;

  /**
   * @schema BraketGetDeviceResponse#deviceName
   */
  readonly deviceName: string;

  /**
   * @schema BraketGetDeviceResponse#deviceStatus
   */
  readonly deviceStatus: string;

  /**
   * @schema BraketGetDeviceResponse#deviceType
   */
  readonly deviceType: string;

  /**
   * @schema BraketGetDeviceResponse#providerName
   */
  readonly providerName: string;

}

/**
 * Converts an object of type 'BraketGetDeviceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BraketGetDeviceResponse(obj: BraketGetDeviceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deviceArn': obj.deviceArn,
    'deviceCapabilities': obj.deviceCapabilities,
    'deviceName': obj.deviceName,
    'deviceStatus': obj.deviceStatus,
    'deviceType': obj.deviceType,
    'providerName': obj.providerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BraketGetQuantumTaskRequest
 */
export interface BraketGetQuantumTaskRequest {
  /**
   * @schema BraketGetQuantumTaskRequest#quantumTaskArn
   */
  readonly quantumTaskArn: string;

}

/**
 * Converts an object of type 'BraketGetQuantumTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BraketGetQuantumTaskRequest(obj: BraketGetQuantumTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'quantumTaskArn': obj.quantumTaskArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BraketGetQuantumTaskResponse
 */
export interface BraketGetQuantumTaskResponse {
  /**
   * @schema BraketGetQuantumTaskResponse#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema BraketGetQuantumTaskResponse#deviceArn
   */
  readonly deviceArn: string;

  /**
   * @schema BraketGetQuantumTaskResponse#deviceParameters
   */
  readonly deviceParameters: string;

  /**
   * @schema BraketGetQuantumTaskResponse#endedAt
   */
  readonly endedAt?: string;

  /**
   * @schema BraketGetQuantumTaskResponse#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema BraketGetQuantumTaskResponse#outputS3Bucket
   */
  readonly outputS3Bucket: string;

  /**
   * @schema BraketGetQuantumTaskResponse#outputS3Directory
   */
  readonly outputS3Directory: string;

  /**
   * @schema BraketGetQuantumTaskResponse#quantumTaskArn
   */
  readonly quantumTaskArn: string;

  /**
   * @schema BraketGetQuantumTaskResponse#shots
   */
  readonly shots: number;

  /**
   * @schema BraketGetQuantumTaskResponse#status
   */
  readonly status: string;

  /**
   * @schema BraketGetQuantumTaskResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'BraketGetQuantumTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BraketGetQuantumTaskResponse(obj: BraketGetQuantumTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'createdAt': obj.createdAt,
    'deviceArn': obj.deviceArn,
    'deviceParameters': obj.deviceParameters,
    'endedAt': obj.endedAt,
    'failureReason': obj.failureReason,
    'outputS3Bucket': obj.outputS3Bucket,
    'outputS3Directory': obj.outputS3Directory,
    'quantumTaskArn': obj.quantumTaskArn,
    'shots': obj.shots,
    'status': obj.status,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BraketListTagsForResourceRequest
 */
export interface BraketListTagsForResourceRequest {
  /**
   * @schema BraketListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'BraketListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BraketListTagsForResourceRequest(obj: BraketListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BraketListTagsForResourceResponse
 */
export interface BraketListTagsForResourceResponse {
  /**
   * @schema BraketListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'BraketListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BraketListTagsForResourceResponse(obj: BraketListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BraketSearchDevicesRequest
 */
export interface BraketSearchDevicesRequest {
  /**
   * @schema BraketSearchDevicesRequest#filters
   */
  readonly filters: BraketSearchDevicesFilter[];

  /**
   * @schema BraketSearchDevicesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema BraketSearchDevicesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'BraketSearchDevicesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BraketSearchDevicesRequest(obj: BraketSearchDevicesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filters': obj.filters?.map(y => toJson_BraketSearchDevicesFilter(y)),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BraketSearchDevicesResponse
 */
export interface BraketSearchDevicesResponse {
  /**
   * @schema BraketSearchDevicesResponse#devices
   */
  readonly devices: BraketDeviceSummary[];

  /**
   * @schema BraketSearchDevicesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'BraketSearchDevicesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BraketSearchDevicesResponse(obj: BraketSearchDevicesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'devices': obj.devices?.map(y => toJson_BraketDeviceSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BraketSearchQuantumTasksRequest
 */
export interface BraketSearchQuantumTasksRequest {
  /**
   * @schema BraketSearchQuantumTasksRequest#filters
   */
  readonly filters: BraketSearchQuantumTasksFilter[];

  /**
   * @schema BraketSearchQuantumTasksRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema BraketSearchQuantumTasksRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'BraketSearchQuantumTasksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BraketSearchQuantumTasksRequest(obj: BraketSearchQuantumTasksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filters': obj.filters?.map(y => toJson_BraketSearchQuantumTasksFilter(y)),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BraketSearchQuantumTasksResponse
 */
export interface BraketSearchQuantumTasksResponse {
  /**
   * @schema BraketSearchQuantumTasksResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BraketSearchQuantumTasksResponse#quantumTasks
   */
  readonly quantumTasks: BraketQuantumTaskSummary[];

}

/**
 * Converts an object of type 'BraketSearchQuantumTasksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BraketSearchQuantumTasksResponse(obj: BraketSearchQuantumTasksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'quantumTasks': obj.quantumTasks?.map(y => toJson_BraketQuantumTaskSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BraketTagResourceRequest
 */
export interface BraketTagResourceRequest {
  /**
   * @schema BraketTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema BraketTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'BraketTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BraketTagResourceRequest(obj: BraketTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BraketTagResourceResponse
 */
export interface BraketTagResourceResponse {
}

/**
 * Converts an object of type 'BraketTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BraketTagResourceResponse(obj: BraketTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BraketUntagResourceRequest
 */
export interface BraketUntagResourceRequest {
  /**
   * @schema BraketUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema BraketUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'BraketUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BraketUntagResourceRequest(obj: BraketUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BraketUntagResourceResponse
 */
export interface BraketUntagResourceResponse {
}

/**
 * Converts an object of type 'BraketUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BraketUntagResourceResponse(obj: BraketUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BraketSearchDevicesFilter
 */
export interface BraketSearchDevicesFilter {
  /**
   * @schema BraketSearchDevicesFilter#name
   */
  readonly name: string;

  /**
   * @schema BraketSearchDevicesFilter#values
   */
  readonly values: string[];

}

/**
 * Converts an object of type 'BraketSearchDevicesFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BraketSearchDevicesFilter(obj: BraketSearchDevicesFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BraketDeviceSummary
 */
export interface BraketDeviceSummary {
  /**
   * @schema BraketDeviceSummary#deviceArn
   */
  readonly deviceArn: string;

  /**
   * @schema BraketDeviceSummary#deviceName
   */
  readonly deviceName: string;

  /**
   * @schema BraketDeviceSummary#deviceStatus
   */
  readonly deviceStatus: string;

  /**
   * @schema BraketDeviceSummary#deviceType
   */
  readonly deviceType: string;

  /**
   * @schema BraketDeviceSummary#providerName
   */
  readonly providerName: string;

}

/**
 * Converts an object of type 'BraketDeviceSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BraketDeviceSummary(obj: BraketDeviceSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deviceArn': obj.deviceArn,
    'deviceName': obj.deviceName,
    'deviceStatus': obj.deviceStatus,
    'deviceType': obj.deviceType,
    'providerName': obj.providerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BraketSearchQuantumTasksFilter
 */
export interface BraketSearchQuantumTasksFilter {
  /**
   * @schema BraketSearchQuantumTasksFilter#name
   */
  readonly name: string;

  /**
   * @schema BraketSearchQuantumTasksFilter#operator
   */
  readonly operator: string;

  /**
   * @schema BraketSearchQuantumTasksFilter#values
   */
  readonly values: string[];

}

/**
 * Converts an object of type 'BraketSearchQuantumTasksFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BraketSearchQuantumTasksFilter(obj: BraketSearchQuantumTasksFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'operator': obj.operator,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BraketQuantumTaskSummary
 */
export interface BraketQuantumTaskSummary {
  /**
   * @schema BraketQuantumTaskSummary#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema BraketQuantumTaskSummary#deviceArn
   */
  readonly deviceArn: string;

  /**
   * @schema BraketQuantumTaskSummary#endedAt
   */
  readonly endedAt?: string;

  /**
   * @schema BraketQuantumTaskSummary#outputS3Bucket
   */
  readonly outputS3Bucket: string;

  /**
   * @schema BraketQuantumTaskSummary#outputS3Directory
   */
  readonly outputS3Directory: string;

  /**
   * @schema BraketQuantumTaskSummary#quantumTaskArn
   */
  readonly quantumTaskArn: string;

  /**
   * @schema BraketQuantumTaskSummary#shots
   */
  readonly shots: number;

  /**
   * @schema BraketQuantumTaskSummary#status
   */
  readonly status: string;

  /**
   * @schema BraketQuantumTaskSummary#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'BraketQuantumTaskSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BraketQuantumTaskSummary(obj: BraketQuantumTaskSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'createdAt': obj.createdAt,
    'deviceArn': obj.deviceArn,
    'endedAt': obj.endedAt,
    'outputS3Bucket': obj.outputS3Bucket,
    'outputS3Directory': obj.outputS3Directory,
    'quantumTaskArn': obj.quantumTaskArn,
    'shots': obj.shots,
    'status': obj.status,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
