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
 * @schema BraketCreateQuantumTaskResponse
 */
export interface BraketCreateQuantumTaskResponse {
  /**
   * @schema BraketCreateQuantumTaskResponse#quantumTaskArn
   */
  readonly quantumTaskArn: string;

}

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
 * @schema BraketGetQuantumTaskRequest
 */
export interface BraketGetQuantumTaskRequest {
  /**
   * @schema BraketGetQuantumTaskRequest#quantumTaskArn
   */
  readonly quantumTaskArn: string;

}

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
 * @schema BraketListTagsForResourceRequest
 */
export interface BraketListTagsForResourceRequest {
  /**
   * @schema BraketListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

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
 * @schema BraketTagResourceResponse
 */
export interface BraketTagResourceResponse {
}

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
 * @schema BraketUntagResourceResponse
 */
export interface BraketUntagResourceResponse {
}

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
