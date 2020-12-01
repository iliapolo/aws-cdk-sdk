/**
 * @schema CancelQuantumTaskRequest
 */
export interface CancelQuantumTaskRequest {
  /**
   * @schema CancelQuantumTaskRequest#clientToken
   */
  readonly clientToken: string;

  /**
   * @schema CancelQuantumTaskRequest#quantumTaskArn
   */
  readonly quantumTaskArn: string;

}

/**
 * @schema CancelQuantumTaskResponse
 */
export interface CancelQuantumTaskResponse {
  /**
   * @schema CancelQuantumTaskResponse#cancellationStatus
   */
  readonly cancellationStatus: string;

  /**
   * @schema CancelQuantumTaskResponse#quantumTaskArn
   */
  readonly quantumTaskArn: string;

}

/**
 * @schema CreateQuantumTaskRequest
 */
export interface CreateQuantumTaskRequest {
  /**
   * @schema CreateQuantumTaskRequest#action
   */
  readonly action: string;

  /**
   * @schema CreateQuantumTaskRequest#clientToken
   */
  readonly clientToken: string;

  /**
   * @schema CreateQuantumTaskRequest#deviceArn
   */
  readonly deviceArn: string;

  /**
   * @schema CreateQuantumTaskRequest#deviceParameters
   */
  readonly deviceParameters?: string;

  /**
   * @schema CreateQuantumTaskRequest#outputS3Bucket
   */
  readonly outputS3Bucket: string;

  /**
   * @schema CreateQuantumTaskRequest#outputS3KeyPrefix
   */
  readonly outputS3KeyPrefix: string;

  /**
   * @schema CreateQuantumTaskRequest#shots
   */
  readonly shots: number;

  /**
   * @schema CreateQuantumTaskRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateQuantumTaskResponse
 */
export interface CreateQuantumTaskResponse {
  /**
   * @schema CreateQuantumTaskResponse#quantumTaskArn
   */
  readonly quantumTaskArn: string;

}

/**
 * @schema GetDeviceRequest
 */
export interface GetDeviceRequest {
  /**
   * @schema GetDeviceRequest#deviceArn
   */
  readonly deviceArn: string;

}

/**
 * @schema GetDeviceResponse
 */
export interface GetDeviceResponse {
  /**
   * @schema GetDeviceResponse#deviceArn
   */
  readonly deviceArn: string;

  /**
   * @schema GetDeviceResponse#deviceCapabilities
   */
  readonly deviceCapabilities: string;

  /**
   * @schema GetDeviceResponse#deviceName
   */
  readonly deviceName: string;

  /**
   * @schema GetDeviceResponse#deviceStatus
   */
  readonly deviceStatus: string;

  /**
   * @schema GetDeviceResponse#deviceType
   */
  readonly deviceType: string;

  /**
   * @schema GetDeviceResponse#providerName
   */
  readonly providerName: string;

}

/**
 * @schema GetQuantumTaskRequest
 */
export interface GetQuantumTaskRequest {
  /**
   * @schema GetQuantumTaskRequest#quantumTaskArn
   */
  readonly quantumTaskArn: string;

}

/**
 * @schema GetQuantumTaskResponse
 */
export interface GetQuantumTaskResponse {
  /**
   * @schema GetQuantumTaskResponse#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema GetQuantumTaskResponse#deviceArn
   */
  readonly deviceArn: string;

  /**
   * @schema GetQuantumTaskResponse#deviceParameters
   */
  readonly deviceParameters: string;

  /**
   * @schema GetQuantumTaskResponse#endedAt
   */
  readonly endedAt?: string;

  /**
   * @schema GetQuantumTaskResponse#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema GetQuantumTaskResponse#outputS3Bucket
   */
  readonly outputS3Bucket: string;

  /**
   * @schema GetQuantumTaskResponse#outputS3Directory
   */
  readonly outputS3Directory: string;

  /**
   * @schema GetQuantumTaskResponse#quantumTaskArn
   */
  readonly quantumTaskArn: string;

  /**
   * @schema GetQuantumTaskResponse#shots
   */
  readonly shots: number;

  /**
   * @schema GetQuantumTaskResponse#status
   */
  readonly status: string;

  /**
   * @schema GetQuantumTaskResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SearchDevicesRequest
 */
export interface SearchDevicesRequest {
  /**
   * @schema SearchDevicesRequest#filters
   */
  readonly filters: SearchDevicesFilter[];

  /**
   * @schema SearchDevicesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SearchDevicesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SearchDevicesResponse
 */
export interface SearchDevicesResponse {
  /**
   * @schema SearchDevicesResponse#devices
   */
  readonly devices: DeviceSummary[];

  /**
   * @schema SearchDevicesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SearchQuantumTasksRequest
 */
export interface SearchQuantumTasksRequest {
  /**
   * @schema SearchQuantumTasksRequest#filters
   */
  readonly filters: SearchQuantumTasksFilter[];

  /**
   * @schema SearchQuantumTasksRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SearchQuantumTasksRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SearchQuantumTasksResponse
 */
export interface SearchQuantumTasksResponse {
  /**
   * @schema SearchQuantumTasksResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchQuantumTasksResponse#quantumTasks
   */
  readonly quantumTasks: QuantumTaskSummary[];

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema SearchDevicesFilter
 */
export interface SearchDevicesFilter {
  /**
   * @schema SearchDevicesFilter#name
   */
  readonly name: string;

  /**
   * @schema SearchDevicesFilter#values
   */
  readonly values: string[];

}

/**
 * @schema DeviceSummary
 */
export interface DeviceSummary {
  /**
   * @schema DeviceSummary#deviceArn
   */
  readonly deviceArn: string;

  /**
   * @schema DeviceSummary#deviceName
   */
  readonly deviceName: string;

  /**
   * @schema DeviceSummary#deviceStatus
   */
  readonly deviceStatus: string;

  /**
   * @schema DeviceSummary#deviceType
   */
  readonly deviceType: string;

  /**
   * @schema DeviceSummary#providerName
   */
  readonly providerName: string;

}

/**
 * @schema SearchQuantumTasksFilter
 */
export interface SearchQuantumTasksFilter {
  /**
   * @schema SearchQuantumTasksFilter#name
   */
  readonly name: string;

  /**
   * @schema SearchQuantumTasksFilter#operator
   */
  readonly operator: string;

  /**
   * @schema SearchQuantumTasksFilter#values
   */
  readonly values: string[];

}

/**
 * @schema QuantumTaskSummary
 */
export interface QuantumTaskSummary {
  /**
   * @schema QuantumTaskSummary#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema QuantumTaskSummary#deviceArn
   */
  readonly deviceArn: string;

  /**
   * @schema QuantumTaskSummary#endedAt
   */
  readonly endedAt?: string;

  /**
   * @schema QuantumTaskSummary#outputS3Bucket
   */
  readonly outputS3Bucket: string;

  /**
   * @schema QuantumTaskSummary#outputS3Directory
   */
  readonly outputS3Directory: string;

  /**
   * @schema QuantumTaskSummary#quantumTaskArn
   */
  readonly quantumTaskArn: string;

  /**
   * @schema QuantumTaskSummary#shots
   */
  readonly shots: number;

  /**
   * @schema QuantumTaskSummary#status
   */
  readonly status: string;

  /**
   * @schema QuantumTaskSummary#tags
   */
  readonly tags?: { [key: string]: string };

}
