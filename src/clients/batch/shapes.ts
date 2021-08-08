/**
 * @schema BatchCancelJobRequest
 */
export interface BatchCancelJobRequest {
  /**
   * @schema BatchCancelJobRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema BatchCancelJobRequest#reason
   */
  readonly reason: string;

}

/**
 * Converts an object of type 'BatchCancelJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchCancelJobRequest(obj: BatchCancelJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'reason': obj.reason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchCancelJobResponse
 */
export interface BatchCancelJobResponse {
}

/**
 * Converts an object of type 'BatchCancelJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchCancelJobResponse(obj: BatchCancelJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchCreateComputeEnvironmentRequest
 */
export interface BatchCreateComputeEnvironmentRequest {
  /**
   * @schema BatchCreateComputeEnvironmentRequest#computeEnvironmentName
   */
  readonly computeEnvironmentName: string;

  /**
   * @schema BatchCreateComputeEnvironmentRequest#type
   */
  readonly type: string;

  /**
   * @schema BatchCreateComputeEnvironmentRequest#state
   */
  readonly state?: string;

  /**
   * @schema BatchCreateComputeEnvironmentRequest#computeResources
   */
  readonly computeResources?: BatchComputeResource;

  /**
   * @schema BatchCreateComputeEnvironmentRequest#serviceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema BatchCreateComputeEnvironmentRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'BatchCreateComputeEnvironmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchCreateComputeEnvironmentRequest(obj: BatchCreateComputeEnvironmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'computeEnvironmentName': obj.computeEnvironmentName,
    'type': obj.type,
    'state': obj.state,
    'computeResources': toJson_BatchComputeResource(obj.computeResources),
    'serviceRole': obj.serviceRole,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchCreateComputeEnvironmentResponse
 */
export interface BatchCreateComputeEnvironmentResponse {
  /**
   * @schema BatchCreateComputeEnvironmentResponse#computeEnvironmentName
   */
  readonly computeEnvironmentName?: string;

  /**
   * @schema BatchCreateComputeEnvironmentResponse#computeEnvironmentArn
   */
  readonly computeEnvironmentArn?: string;

}

/**
 * Converts an object of type 'BatchCreateComputeEnvironmentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchCreateComputeEnvironmentResponse(obj: BatchCreateComputeEnvironmentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'computeEnvironmentName': obj.computeEnvironmentName,
    'computeEnvironmentArn': obj.computeEnvironmentArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchCreateJobQueueRequest
 */
export interface BatchCreateJobQueueRequest {
  /**
   * @schema BatchCreateJobQueueRequest#jobQueueName
   */
  readonly jobQueueName: string;

  /**
   * @schema BatchCreateJobQueueRequest#state
   */
  readonly state?: string;

  /**
   * @schema BatchCreateJobQueueRequest#priority
   */
  readonly priority: number;

  /**
   * @schema BatchCreateJobQueueRequest#computeEnvironmentOrder
   */
  readonly computeEnvironmentOrder: BatchComputeEnvironmentOrder[];

  /**
   * @schema BatchCreateJobQueueRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'BatchCreateJobQueueRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchCreateJobQueueRequest(obj: BatchCreateJobQueueRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobQueueName': obj.jobQueueName,
    'state': obj.state,
    'priority': obj.priority,
    'computeEnvironmentOrder': obj.computeEnvironmentOrder?.map(y => toJson_BatchComputeEnvironmentOrder(y)),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchCreateJobQueueResponse
 */
export interface BatchCreateJobQueueResponse {
  /**
   * @schema BatchCreateJobQueueResponse#jobQueueName
   */
  readonly jobQueueName: string;

  /**
   * @schema BatchCreateJobQueueResponse#jobQueueArn
   */
  readonly jobQueueArn: string;

}

/**
 * Converts an object of type 'BatchCreateJobQueueResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchCreateJobQueueResponse(obj: BatchCreateJobQueueResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobQueueName': obj.jobQueueName,
    'jobQueueArn': obj.jobQueueArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchDeleteComputeEnvironmentRequest
 */
export interface BatchDeleteComputeEnvironmentRequest {
  /**
   * @schema BatchDeleteComputeEnvironmentRequest#computeEnvironment
   */
  readonly computeEnvironment: string;

}

/**
 * Converts an object of type 'BatchDeleteComputeEnvironmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchDeleteComputeEnvironmentRequest(obj: BatchDeleteComputeEnvironmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'computeEnvironment': obj.computeEnvironment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchDeleteComputeEnvironmentResponse
 */
export interface BatchDeleteComputeEnvironmentResponse {
}

/**
 * Converts an object of type 'BatchDeleteComputeEnvironmentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchDeleteComputeEnvironmentResponse(obj: BatchDeleteComputeEnvironmentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchDeleteJobQueueRequest
 */
export interface BatchDeleteJobQueueRequest {
  /**
   * @schema BatchDeleteJobQueueRequest#jobQueue
   */
  readonly jobQueue: string;

}

/**
 * Converts an object of type 'BatchDeleteJobQueueRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchDeleteJobQueueRequest(obj: BatchDeleteJobQueueRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobQueue': obj.jobQueue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchDeleteJobQueueResponse
 */
export interface BatchDeleteJobQueueResponse {
}

/**
 * Converts an object of type 'BatchDeleteJobQueueResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchDeleteJobQueueResponse(obj: BatchDeleteJobQueueResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchDeregisterJobDefinitionRequest
 */
export interface BatchDeregisterJobDefinitionRequest {
  /**
   * @schema BatchDeregisterJobDefinitionRequest#jobDefinition
   */
  readonly jobDefinition: string;

}

/**
 * Converts an object of type 'BatchDeregisterJobDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchDeregisterJobDefinitionRequest(obj: BatchDeregisterJobDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobDefinition': obj.jobDefinition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchDeregisterJobDefinitionResponse
 */
export interface BatchDeregisterJobDefinitionResponse {
}

/**
 * Converts an object of type 'BatchDeregisterJobDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchDeregisterJobDefinitionResponse(obj: BatchDeregisterJobDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchDescribeComputeEnvironmentsRequest
 */
export interface BatchDescribeComputeEnvironmentsRequest {
  /**
   * @schema BatchDescribeComputeEnvironmentsRequest#computeEnvironments
   */
  readonly computeEnvironments?: string[];

  /**
   * @schema BatchDescribeComputeEnvironmentsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema BatchDescribeComputeEnvironmentsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'BatchDescribeComputeEnvironmentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchDescribeComputeEnvironmentsRequest(obj: BatchDescribeComputeEnvironmentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'computeEnvironments': obj.computeEnvironments?.map(y => y),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchDescribeComputeEnvironmentsResponse
 */
export interface BatchDescribeComputeEnvironmentsResponse {
  /**
   * @schema BatchDescribeComputeEnvironmentsResponse#computeEnvironments
   */
  readonly computeEnvironments?: BatchComputeEnvironmentDetail[];

  /**
   * @schema BatchDescribeComputeEnvironmentsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'BatchDescribeComputeEnvironmentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchDescribeComputeEnvironmentsResponse(obj: BatchDescribeComputeEnvironmentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'computeEnvironments': obj.computeEnvironments?.map(y => toJson_BatchComputeEnvironmentDetail(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchDescribeJobDefinitionsRequest
 */
export interface BatchDescribeJobDefinitionsRequest {
  /**
   * @schema BatchDescribeJobDefinitionsRequest#jobDefinitions
   */
  readonly jobDefinitions?: string[];

  /**
   * @schema BatchDescribeJobDefinitionsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema BatchDescribeJobDefinitionsRequest#jobDefinitionName
   */
  readonly jobDefinitionName?: string;

  /**
   * @schema BatchDescribeJobDefinitionsRequest#status
   */
  readonly status?: string;

  /**
   * @schema BatchDescribeJobDefinitionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'BatchDescribeJobDefinitionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchDescribeJobDefinitionsRequest(obj: BatchDescribeJobDefinitionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobDefinitions': obj.jobDefinitions?.map(y => y),
    'maxResults': obj.maxResults,
    'jobDefinitionName': obj.jobDefinitionName,
    'status': obj.status,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchDescribeJobDefinitionsResponse
 */
export interface BatchDescribeJobDefinitionsResponse {
  /**
   * @schema BatchDescribeJobDefinitionsResponse#jobDefinitions
   */
  readonly jobDefinitions?: BatchJobDefinition[];

  /**
   * @schema BatchDescribeJobDefinitionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'BatchDescribeJobDefinitionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchDescribeJobDefinitionsResponse(obj: BatchDescribeJobDefinitionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobDefinitions': obj.jobDefinitions?.map(y => toJson_BatchJobDefinition(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchDescribeJobQueuesRequest
 */
export interface BatchDescribeJobQueuesRequest {
  /**
   * @schema BatchDescribeJobQueuesRequest#jobQueues
   */
  readonly jobQueues?: string[];

  /**
   * @schema BatchDescribeJobQueuesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema BatchDescribeJobQueuesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'BatchDescribeJobQueuesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchDescribeJobQueuesRequest(obj: BatchDescribeJobQueuesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobQueues': obj.jobQueues?.map(y => y),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchDescribeJobQueuesResponse
 */
export interface BatchDescribeJobQueuesResponse {
  /**
   * @schema BatchDescribeJobQueuesResponse#jobQueues
   */
  readonly jobQueues?: BatchJobQueueDetail[];

  /**
   * @schema BatchDescribeJobQueuesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'BatchDescribeJobQueuesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchDescribeJobQueuesResponse(obj: BatchDescribeJobQueuesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobQueues': obj.jobQueues?.map(y => toJson_BatchJobQueueDetail(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchDescribeJobsRequest
 */
export interface BatchDescribeJobsRequest {
  /**
   * @schema BatchDescribeJobsRequest#jobs
   */
  readonly jobs: string[];

}

/**
 * Converts an object of type 'BatchDescribeJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchDescribeJobsRequest(obj: BatchDescribeJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobs': obj.jobs?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchDescribeJobsResponse
 */
export interface BatchDescribeJobsResponse {
  /**
   * @schema BatchDescribeJobsResponse#jobs
   */
  readonly jobs?: BatchJobDetail[];

}

/**
 * Converts an object of type 'BatchDescribeJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchDescribeJobsResponse(obj: BatchDescribeJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobs': obj.jobs?.map(y => toJson_BatchJobDetail(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchListJobsRequest
 */
export interface BatchListJobsRequest {
  /**
   * @schema BatchListJobsRequest#jobQueue
   */
  readonly jobQueue?: string;

  /**
   * @schema BatchListJobsRequest#arrayJobId
   */
  readonly arrayJobId?: string;

  /**
   * @schema BatchListJobsRequest#multiNodeJobId
   */
  readonly multiNodeJobId?: string;

  /**
   * @schema BatchListJobsRequest#jobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema BatchListJobsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema BatchListJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BatchListJobsRequest#filters
   */
  readonly filters?: BatchKeyValuesPair[];

}

/**
 * Converts an object of type 'BatchListJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchListJobsRequest(obj: BatchListJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobQueue': obj.jobQueue,
    'arrayJobId': obj.arrayJobId,
    'multiNodeJobId': obj.multiNodeJobId,
    'jobStatus': obj.jobStatus,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'filters': obj.filters?.map(y => toJson_BatchKeyValuesPair(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchListJobsResponse
 */
export interface BatchListJobsResponse {
  /**
   * @schema BatchListJobsResponse#jobSummaryList
   */
  readonly jobSummaryList: BatchJobSummary[];

  /**
   * @schema BatchListJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'BatchListJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchListJobsResponse(obj: BatchListJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobSummaryList': obj.jobSummaryList?.map(y => toJson_BatchJobSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchListTagsForResourceRequest
 */
export interface BatchListTagsForResourceRequest {
  /**
   * @schema BatchListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'BatchListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchListTagsForResourceRequest(obj: BatchListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchListTagsForResourceResponse
 */
export interface BatchListTagsForResourceResponse {
  /**
   * @schema BatchListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'BatchListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchListTagsForResourceResponse(obj: BatchListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchRegisterJobDefinitionRequest
 */
export interface BatchRegisterJobDefinitionRequest {
  /**
   * @schema BatchRegisterJobDefinitionRequest#jobDefinitionName
   */
  readonly jobDefinitionName: string;

  /**
   * @schema BatchRegisterJobDefinitionRequest#type
   */
  readonly type: string;

  /**
   * @schema BatchRegisterJobDefinitionRequest#parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema BatchRegisterJobDefinitionRequest#containerProperties
   */
  readonly containerProperties?: BatchContainerProperties;

  /**
   * @schema BatchRegisterJobDefinitionRequest#nodeProperties
   */
  readonly nodeProperties?: BatchNodeProperties;

  /**
   * @schema BatchRegisterJobDefinitionRequest#retryStrategy
   */
  readonly retryStrategy?: BatchRetryStrategy;

  /**
   * @schema BatchRegisterJobDefinitionRequest#propagateTags
   */
  readonly propagateTags?: boolean;

  /**
   * @schema BatchRegisterJobDefinitionRequest#timeout
   */
  readonly timeout?: BatchJobTimeout;

  /**
   * @schema BatchRegisterJobDefinitionRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema BatchRegisterJobDefinitionRequest#platformCapabilities
   */
  readonly platformCapabilities?: string[];

}

/**
 * Converts an object of type 'BatchRegisterJobDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchRegisterJobDefinitionRequest(obj: BatchRegisterJobDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobDefinitionName': obj.jobDefinitionName,
    'type': obj.type,
    'parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'containerProperties': toJson_BatchContainerProperties(obj.containerProperties),
    'nodeProperties': toJson_BatchNodeProperties(obj.nodeProperties),
    'retryStrategy': toJson_BatchRetryStrategy(obj.retryStrategy),
    'propagateTags': obj.propagateTags,
    'timeout': toJson_BatchJobTimeout(obj.timeout),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'platformCapabilities': obj.platformCapabilities?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchRegisterJobDefinitionResponse
 */
export interface BatchRegisterJobDefinitionResponse {
  /**
   * @schema BatchRegisterJobDefinitionResponse#jobDefinitionName
   */
  readonly jobDefinitionName: string;

  /**
   * @schema BatchRegisterJobDefinitionResponse#jobDefinitionArn
   */
  readonly jobDefinitionArn: string;

  /**
   * @schema BatchRegisterJobDefinitionResponse#revision
   */
  readonly revision: number;

}

/**
 * Converts an object of type 'BatchRegisterJobDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchRegisterJobDefinitionResponse(obj: BatchRegisterJobDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobDefinitionName': obj.jobDefinitionName,
    'jobDefinitionArn': obj.jobDefinitionArn,
    'revision': obj.revision,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchSubmitJobRequest
 */
export interface BatchSubmitJobRequest {
  /**
   * @schema BatchSubmitJobRequest#jobName
   */
  readonly jobName: string;

  /**
   * @schema BatchSubmitJobRequest#jobQueue
   */
  readonly jobQueue: string;

  /**
   * @schema BatchSubmitJobRequest#arrayProperties
   */
  readonly arrayProperties?: BatchArrayProperties;

  /**
   * @schema BatchSubmitJobRequest#dependsOn
   */
  readonly dependsOn?: BatchJobDependency[];

  /**
   * @schema BatchSubmitJobRequest#jobDefinition
   */
  readonly jobDefinition: string;

  /**
   * @schema BatchSubmitJobRequest#parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema BatchSubmitJobRequest#containerOverrides
   */
  readonly containerOverrides?: BatchContainerOverrides;

  /**
   * @schema BatchSubmitJobRequest#nodeOverrides
   */
  readonly nodeOverrides?: BatchNodeOverrides;

  /**
   * @schema BatchSubmitJobRequest#retryStrategy
   */
  readonly retryStrategy?: BatchRetryStrategy;

  /**
   * @schema BatchSubmitJobRequest#propagateTags
   */
  readonly propagateTags?: boolean;

  /**
   * @schema BatchSubmitJobRequest#timeout
   */
  readonly timeout?: BatchJobTimeout;

  /**
   * @schema BatchSubmitJobRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'BatchSubmitJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchSubmitJobRequest(obj: BatchSubmitJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobName': obj.jobName,
    'jobQueue': obj.jobQueue,
    'arrayProperties': toJson_BatchArrayProperties(obj.arrayProperties),
    'dependsOn': obj.dependsOn?.map(y => toJson_BatchJobDependency(y)),
    'jobDefinition': obj.jobDefinition,
    'parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'containerOverrides': toJson_BatchContainerOverrides(obj.containerOverrides),
    'nodeOverrides': toJson_BatchNodeOverrides(obj.nodeOverrides),
    'retryStrategy': toJson_BatchRetryStrategy(obj.retryStrategy),
    'propagateTags': obj.propagateTags,
    'timeout': toJson_BatchJobTimeout(obj.timeout),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchSubmitJobResponse
 */
export interface BatchSubmitJobResponse {
  /**
   * @schema BatchSubmitJobResponse#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema BatchSubmitJobResponse#jobName
   */
  readonly jobName: string;

  /**
   * @schema BatchSubmitJobResponse#jobId
   */
  readonly jobId: string;

}

/**
 * Converts an object of type 'BatchSubmitJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchSubmitJobResponse(obj: BatchSubmitJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobArn': obj.jobArn,
    'jobName': obj.jobName,
    'jobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchTagResourceRequest
 */
export interface BatchTagResourceRequest {
  /**
   * @schema BatchTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema BatchTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'BatchTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchTagResourceRequest(obj: BatchTagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema BatchTagResourceResponse
 */
export interface BatchTagResourceResponse {
}

/**
 * Converts an object of type 'BatchTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchTagResourceResponse(obj: BatchTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchTerminateJobRequest
 */
export interface BatchTerminateJobRequest {
  /**
   * @schema BatchTerminateJobRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema BatchTerminateJobRequest#reason
   */
  readonly reason: string;

}

/**
 * Converts an object of type 'BatchTerminateJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchTerminateJobRequest(obj: BatchTerminateJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'reason': obj.reason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchTerminateJobResponse
 */
export interface BatchTerminateJobResponse {
}

/**
 * Converts an object of type 'BatchTerminateJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchTerminateJobResponse(obj: BatchTerminateJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchUntagResourceRequest
 */
export interface BatchUntagResourceRequest {
  /**
   * @schema BatchUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema BatchUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'BatchUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchUntagResourceRequest(obj: BatchUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema BatchUntagResourceResponse
 */
export interface BatchUntagResourceResponse {
}

/**
 * Converts an object of type 'BatchUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchUntagResourceResponse(obj: BatchUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchUpdateComputeEnvironmentRequest
 */
export interface BatchUpdateComputeEnvironmentRequest {
  /**
   * @schema BatchUpdateComputeEnvironmentRequest#computeEnvironment
   */
  readonly computeEnvironment: string;

  /**
   * @schema BatchUpdateComputeEnvironmentRequest#state
   */
  readonly state?: string;

  /**
   * @schema BatchUpdateComputeEnvironmentRequest#computeResources
   */
  readonly computeResources?: BatchComputeResourceUpdate;

  /**
   * @schema BatchUpdateComputeEnvironmentRequest#serviceRole
   */
  readonly serviceRole?: string;

}

/**
 * Converts an object of type 'BatchUpdateComputeEnvironmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchUpdateComputeEnvironmentRequest(obj: BatchUpdateComputeEnvironmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'computeEnvironment': obj.computeEnvironment,
    'state': obj.state,
    'computeResources': toJson_BatchComputeResourceUpdate(obj.computeResources),
    'serviceRole': obj.serviceRole,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchUpdateComputeEnvironmentResponse
 */
export interface BatchUpdateComputeEnvironmentResponse {
  /**
   * @schema BatchUpdateComputeEnvironmentResponse#computeEnvironmentName
   */
  readonly computeEnvironmentName?: string;

  /**
   * @schema BatchUpdateComputeEnvironmentResponse#computeEnvironmentArn
   */
  readonly computeEnvironmentArn?: string;

}

/**
 * Converts an object of type 'BatchUpdateComputeEnvironmentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchUpdateComputeEnvironmentResponse(obj: BatchUpdateComputeEnvironmentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'computeEnvironmentName': obj.computeEnvironmentName,
    'computeEnvironmentArn': obj.computeEnvironmentArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchUpdateJobQueueRequest
 */
export interface BatchUpdateJobQueueRequest {
  /**
   * @schema BatchUpdateJobQueueRequest#jobQueue
   */
  readonly jobQueue: string;

  /**
   * @schema BatchUpdateJobQueueRequest#state
   */
  readonly state?: string;

  /**
   * @schema BatchUpdateJobQueueRequest#priority
   */
  readonly priority?: number;

  /**
   * @schema BatchUpdateJobQueueRequest#computeEnvironmentOrder
   */
  readonly computeEnvironmentOrder?: BatchComputeEnvironmentOrder[];

}

/**
 * Converts an object of type 'BatchUpdateJobQueueRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchUpdateJobQueueRequest(obj: BatchUpdateJobQueueRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobQueue': obj.jobQueue,
    'state': obj.state,
    'priority': obj.priority,
    'computeEnvironmentOrder': obj.computeEnvironmentOrder?.map(y => toJson_BatchComputeEnvironmentOrder(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchUpdateJobQueueResponse
 */
export interface BatchUpdateJobQueueResponse {
  /**
   * @schema BatchUpdateJobQueueResponse#jobQueueName
   */
  readonly jobQueueName?: string;

  /**
   * @schema BatchUpdateJobQueueResponse#jobQueueArn
   */
  readonly jobQueueArn?: string;

}

/**
 * Converts an object of type 'BatchUpdateJobQueueResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchUpdateJobQueueResponse(obj: BatchUpdateJobQueueResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobQueueName': obj.jobQueueName,
    'jobQueueArn': obj.jobQueueArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchComputeResource
 */
export interface BatchComputeResource {
  /**
   * @schema BatchComputeResource#type
   */
  readonly type: string;

  /**
   * @schema BatchComputeResource#allocationStrategy
   */
  readonly allocationStrategy?: string;

  /**
   * @schema BatchComputeResource#minvCpus
   */
  readonly minvCpus?: number;

  /**
   * @schema BatchComputeResource#maxvCpus
   */
  readonly maxvCpus: number;

  /**
   * @schema BatchComputeResource#desiredvCpus
   */
  readonly desiredvCpus?: number;

  /**
   * @schema BatchComputeResource#instanceTypes
   */
  readonly instanceTypes?: string[];

  /**
   * @schema BatchComputeResource#imageId
   */
  readonly imageId?: string;

  /**
   * @schema BatchComputeResource#subnets
   */
  readonly subnets: string[];

  /**
   * @schema BatchComputeResource#securityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema BatchComputeResource#ec2KeyPair
   */
  readonly ec2KeyPair?: string;

  /**
   * @schema BatchComputeResource#instanceRole
   */
  readonly instanceRole?: string;

  /**
   * @schema BatchComputeResource#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema BatchComputeResource#placementGroup
   */
  readonly placementGroup?: string;

  /**
   * @schema BatchComputeResource#bidPercentage
   */
  readonly bidPercentage?: number;

  /**
   * @schema BatchComputeResource#spotIamFleetRole
   */
  readonly spotIamFleetRole?: string;

  /**
   * @schema BatchComputeResource#launchTemplate
   */
  readonly launchTemplate?: BatchLaunchTemplateSpecification;

  /**
   * @schema BatchComputeResource#ec2Configuration
   */
  readonly ec2Configuration?: BatchEc2Configuration[];

}

/**
 * Converts an object of type 'BatchComputeResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchComputeResource(obj: BatchComputeResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'allocationStrategy': obj.allocationStrategy,
    'minvCpus': obj.minvCpus,
    'maxvCpus': obj.maxvCpus,
    'desiredvCpus': obj.desiredvCpus,
    'instanceTypes': obj.instanceTypes?.map(y => y),
    'imageId': obj.imageId,
    'subnets': obj.subnets?.map(y => y),
    'securityGroupIds': obj.securityGroupIds?.map(y => y),
    'ec2KeyPair': obj.ec2KeyPair,
    'instanceRole': obj.instanceRole,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'placementGroup': obj.placementGroup,
    'bidPercentage': obj.bidPercentage,
    'spotIamFleetRole': obj.spotIamFleetRole,
    'launchTemplate': toJson_BatchLaunchTemplateSpecification(obj.launchTemplate),
    'ec2Configuration': obj.ec2Configuration?.map(y => toJson_BatchEc2Configuration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchComputeEnvironmentOrder
 */
export interface BatchComputeEnvironmentOrder {
  /**
   * @schema BatchComputeEnvironmentOrder#order
   */
  readonly order: number;

  /**
   * @schema BatchComputeEnvironmentOrder#computeEnvironment
   */
  readonly computeEnvironment: string;

}

/**
 * Converts an object of type 'BatchComputeEnvironmentOrder' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchComputeEnvironmentOrder(obj: BatchComputeEnvironmentOrder | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'order': obj.order,
    'computeEnvironment': obj.computeEnvironment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchComputeEnvironmentDetail
 */
export interface BatchComputeEnvironmentDetail {
  /**
   * @schema BatchComputeEnvironmentDetail#computeEnvironmentName
   */
  readonly computeEnvironmentName: string;

  /**
   * @schema BatchComputeEnvironmentDetail#computeEnvironmentArn
   */
  readonly computeEnvironmentArn: string;

  /**
   * @schema BatchComputeEnvironmentDetail#ecsClusterArn
   */
  readonly ecsClusterArn: string;

  /**
   * @schema BatchComputeEnvironmentDetail#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema BatchComputeEnvironmentDetail#type
   */
  readonly type?: string;

  /**
   * @schema BatchComputeEnvironmentDetail#state
   */
  readonly state?: string;

  /**
   * @schema BatchComputeEnvironmentDetail#status
   */
  readonly status?: string;

  /**
   * @schema BatchComputeEnvironmentDetail#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema BatchComputeEnvironmentDetail#computeResources
   */
  readonly computeResources?: BatchComputeResource;

  /**
   * @schema BatchComputeEnvironmentDetail#serviceRole
   */
  readonly serviceRole?: string;

}

/**
 * Converts an object of type 'BatchComputeEnvironmentDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchComputeEnvironmentDetail(obj: BatchComputeEnvironmentDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'computeEnvironmentName': obj.computeEnvironmentName,
    'computeEnvironmentArn': obj.computeEnvironmentArn,
    'ecsClusterArn': obj.ecsClusterArn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'type': obj.type,
    'state': obj.state,
    'status': obj.status,
    'statusReason': obj.statusReason,
    'computeResources': toJson_BatchComputeResource(obj.computeResources),
    'serviceRole': obj.serviceRole,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchJobDefinition
 */
export interface BatchJobDefinition {
  /**
   * @schema BatchJobDefinition#jobDefinitionName
   */
  readonly jobDefinitionName: string;

  /**
   * @schema BatchJobDefinition#jobDefinitionArn
   */
  readonly jobDefinitionArn: string;

  /**
   * @schema BatchJobDefinition#revision
   */
  readonly revision: number;

  /**
   * @schema BatchJobDefinition#status
   */
  readonly status?: string;

  /**
   * @schema BatchJobDefinition#type
   */
  readonly type: string;

  /**
   * @schema BatchJobDefinition#parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema BatchJobDefinition#retryStrategy
   */
  readonly retryStrategy?: BatchRetryStrategy;

  /**
   * @schema BatchJobDefinition#containerProperties
   */
  readonly containerProperties?: BatchContainerProperties;

  /**
   * @schema BatchJobDefinition#timeout
   */
  readonly timeout?: BatchJobTimeout;

  /**
   * @schema BatchJobDefinition#nodeProperties
   */
  readonly nodeProperties?: BatchNodeProperties;

  /**
   * @schema BatchJobDefinition#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema BatchJobDefinition#propagateTags
   */
  readonly propagateTags?: boolean;

  /**
   * @schema BatchJobDefinition#platformCapabilities
   */
  readonly platformCapabilities?: string[];

}

/**
 * Converts an object of type 'BatchJobDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchJobDefinition(obj: BatchJobDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobDefinitionName': obj.jobDefinitionName,
    'jobDefinitionArn': obj.jobDefinitionArn,
    'revision': obj.revision,
    'status': obj.status,
    'type': obj.type,
    'parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'retryStrategy': toJson_BatchRetryStrategy(obj.retryStrategy),
    'containerProperties': toJson_BatchContainerProperties(obj.containerProperties),
    'timeout': toJson_BatchJobTimeout(obj.timeout),
    'nodeProperties': toJson_BatchNodeProperties(obj.nodeProperties),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'propagateTags': obj.propagateTags,
    'platformCapabilities': obj.platformCapabilities?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchJobQueueDetail
 */
export interface BatchJobQueueDetail {
  /**
   * @schema BatchJobQueueDetail#jobQueueName
   */
  readonly jobQueueName: string;

  /**
   * @schema BatchJobQueueDetail#jobQueueArn
   */
  readonly jobQueueArn: string;

  /**
   * @schema BatchJobQueueDetail#state
   */
  readonly state: string;

  /**
   * @schema BatchJobQueueDetail#status
   */
  readonly status?: string;

  /**
   * @schema BatchJobQueueDetail#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema BatchJobQueueDetail#priority
   */
  readonly priority: number;

  /**
   * @schema BatchJobQueueDetail#computeEnvironmentOrder
   */
  readonly computeEnvironmentOrder: BatchComputeEnvironmentOrder[];

  /**
   * @schema BatchJobQueueDetail#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'BatchJobQueueDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchJobQueueDetail(obj: BatchJobQueueDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobQueueName': obj.jobQueueName,
    'jobQueueArn': obj.jobQueueArn,
    'state': obj.state,
    'status': obj.status,
    'statusReason': obj.statusReason,
    'priority': obj.priority,
    'computeEnvironmentOrder': obj.computeEnvironmentOrder?.map(y => toJson_BatchComputeEnvironmentOrder(y)),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchJobDetail
 */
export interface BatchJobDetail {
  /**
   * @schema BatchJobDetail#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema BatchJobDetail#jobName
   */
  readonly jobName: string;

  /**
   * @schema BatchJobDetail#jobId
   */
  readonly jobId: string;

  /**
   * @schema BatchJobDetail#jobQueue
   */
  readonly jobQueue: string;

  /**
   * @schema BatchJobDetail#status
   */
  readonly status: string;

  /**
   * @schema BatchJobDetail#attempts
   */
  readonly attempts?: BatchAttemptDetail[];

  /**
   * @schema BatchJobDetail#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema BatchJobDetail#createdAt
   */
  readonly createdAt?: number;

  /**
   * @schema BatchJobDetail#retryStrategy
   */
  readonly retryStrategy?: BatchRetryStrategy;

  /**
   * @schema BatchJobDetail#startedAt
   */
  readonly startedAt: number;

  /**
   * @schema BatchJobDetail#stoppedAt
   */
  readonly stoppedAt?: number;

  /**
   * @schema BatchJobDetail#dependsOn
   */
  readonly dependsOn?: BatchJobDependency[];

  /**
   * @schema BatchJobDetail#jobDefinition
   */
  readonly jobDefinition: string;

  /**
   * @schema BatchJobDetail#parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema BatchJobDetail#container
   */
  readonly container?: BatchContainerDetail;

  /**
   * @schema BatchJobDetail#nodeDetails
   */
  readonly nodeDetails?: BatchNodeDetails;

  /**
   * @schema BatchJobDetail#nodeProperties
   */
  readonly nodeProperties?: BatchNodeProperties;

  /**
   * @schema BatchJobDetail#arrayProperties
   */
  readonly arrayProperties?: BatchArrayPropertiesDetail;

  /**
   * @schema BatchJobDetail#timeout
   */
  readonly timeout?: BatchJobTimeout;

  /**
   * @schema BatchJobDetail#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema BatchJobDetail#propagateTags
   */
  readonly propagateTags?: boolean;

  /**
   * @schema BatchJobDetail#platformCapabilities
   */
  readonly platformCapabilities?: string[];

}

/**
 * Converts an object of type 'BatchJobDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchJobDetail(obj: BatchJobDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobArn': obj.jobArn,
    'jobName': obj.jobName,
    'jobId': obj.jobId,
    'jobQueue': obj.jobQueue,
    'status': obj.status,
    'attempts': obj.attempts?.map(y => toJson_BatchAttemptDetail(y)),
    'statusReason': obj.statusReason,
    'createdAt': obj.createdAt,
    'retryStrategy': toJson_BatchRetryStrategy(obj.retryStrategy),
    'startedAt': obj.startedAt,
    'stoppedAt': obj.stoppedAt,
    'dependsOn': obj.dependsOn?.map(y => toJson_BatchJobDependency(y)),
    'jobDefinition': obj.jobDefinition,
    'parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'container': toJson_BatchContainerDetail(obj.container),
    'nodeDetails': toJson_BatchNodeDetails(obj.nodeDetails),
    'nodeProperties': toJson_BatchNodeProperties(obj.nodeProperties),
    'arrayProperties': toJson_BatchArrayPropertiesDetail(obj.arrayProperties),
    'timeout': toJson_BatchJobTimeout(obj.timeout),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'propagateTags': obj.propagateTags,
    'platformCapabilities': obj.platformCapabilities?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchKeyValuesPair
 */
export interface BatchKeyValuesPair {
  /**
   * @schema BatchKeyValuesPair#name
   */
  readonly name?: string;

  /**
   * @schema BatchKeyValuesPair#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'BatchKeyValuesPair' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchKeyValuesPair(obj: BatchKeyValuesPair | undefined): Record<string, any> | undefined {
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
 * @schema BatchJobSummary
 */
export interface BatchJobSummary {
  /**
   * @schema BatchJobSummary#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema BatchJobSummary#jobId
   */
  readonly jobId: string;

  /**
   * @schema BatchJobSummary#jobName
   */
  readonly jobName: string;

  /**
   * @schema BatchJobSummary#createdAt
   */
  readonly createdAt?: number;

  /**
   * @schema BatchJobSummary#status
   */
  readonly status?: string;

  /**
   * @schema BatchJobSummary#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema BatchJobSummary#startedAt
   */
  readonly startedAt?: number;

  /**
   * @schema BatchJobSummary#stoppedAt
   */
  readonly stoppedAt?: number;

  /**
   * @schema BatchJobSummary#container
   */
  readonly container?: BatchContainerSummary;

  /**
   * @schema BatchJobSummary#arrayProperties
   */
  readonly arrayProperties?: BatchArrayPropertiesSummary;

  /**
   * @schema BatchJobSummary#nodeProperties
   */
  readonly nodeProperties?: BatchNodePropertiesSummary;

  /**
   * @schema BatchJobSummary#jobDefinition
   */
  readonly jobDefinition?: string;

}

/**
 * Converts an object of type 'BatchJobSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchJobSummary(obj: BatchJobSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobArn': obj.jobArn,
    'jobId': obj.jobId,
    'jobName': obj.jobName,
    'createdAt': obj.createdAt,
    'status': obj.status,
    'statusReason': obj.statusReason,
    'startedAt': obj.startedAt,
    'stoppedAt': obj.stoppedAt,
    'container': toJson_BatchContainerSummary(obj.container),
    'arrayProperties': toJson_BatchArrayPropertiesSummary(obj.arrayProperties),
    'nodeProperties': toJson_BatchNodePropertiesSummary(obj.nodeProperties),
    'jobDefinition': obj.jobDefinition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchContainerProperties
 */
export interface BatchContainerProperties {
  /**
   * @schema BatchContainerProperties#image
   */
  readonly image?: string;

  /**
   * @schema BatchContainerProperties#vcpus
   */
  readonly vcpus?: number;

  /**
   * @schema BatchContainerProperties#memory
   */
  readonly memory?: number;

  /**
   * @schema BatchContainerProperties#command
   */
  readonly command?: string[];

  /**
   * @schema BatchContainerProperties#jobRoleArn
   */
  readonly jobRoleArn?: string;

  /**
   * @schema BatchContainerProperties#executionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema BatchContainerProperties#volumes
   */
  readonly volumes?: BatchVolume[];

  /**
   * @schema BatchContainerProperties#environment
   */
  readonly environment?: BatchKeyValuePair[];

  /**
   * @schema BatchContainerProperties#mountPoints
   */
  readonly mountPoints?: BatchMountPoint[];

  /**
   * @schema BatchContainerProperties#readonlyRootFilesystem
   */
  readonly readonlyRootFilesystem?: boolean;

  /**
   * @schema BatchContainerProperties#privileged
   */
  readonly privileged?: boolean;

  /**
   * @schema BatchContainerProperties#ulimits
   */
  readonly ulimits?: BatchUlimit[];

  /**
   * @schema BatchContainerProperties#user
   */
  readonly user?: string;

  /**
   * @schema BatchContainerProperties#instanceType
   */
  readonly instanceType?: string;

  /**
   * @schema BatchContainerProperties#resourceRequirements
   */
  readonly resourceRequirements?: BatchResourceRequirement[];

  /**
   * @schema BatchContainerProperties#linuxParameters
   */
  readonly linuxParameters?: BatchLinuxParameters;

  /**
   * @schema BatchContainerProperties#logConfiguration
   */
  readonly logConfiguration?: BatchLogConfiguration;

  /**
   * @schema BatchContainerProperties#secrets
   */
  readonly secrets?: BatchSecret[];

  /**
   * @schema BatchContainerProperties#networkConfiguration
   */
  readonly networkConfiguration?: BatchNetworkConfiguration;

  /**
   * @schema BatchContainerProperties#fargatePlatformConfiguration
   */
  readonly fargatePlatformConfiguration?: BatchFargatePlatformConfiguration;

}

/**
 * Converts an object of type 'BatchContainerProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchContainerProperties(obj: BatchContainerProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'image': obj.image,
    'vcpus': obj.vcpus,
    'memory': obj.memory,
    'command': obj.command?.map(y => y),
    'jobRoleArn': obj.jobRoleArn,
    'executionRoleArn': obj.executionRoleArn,
    'volumes': obj.volumes?.map(y => toJson_BatchVolume(y)),
    'environment': obj.environment?.map(y => toJson_BatchKeyValuePair(y)),
    'mountPoints': obj.mountPoints?.map(y => toJson_BatchMountPoint(y)),
    'readonlyRootFilesystem': obj.readonlyRootFilesystem,
    'privileged': obj.privileged,
    'ulimits': obj.ulimits?.map(y => toJson_BatchUlimit(y)),
    'user': obj.user,
    'instanceType': obj.instanceType,
    'resourceRequirements': obj.resourceRequirements?.map(y => toJson_BatchResourceRequirement(y)),
    'linuxParameters': toJson_BatchLinuxParameters(obj.linuxParameters),
    'logConfiguration': toJson_BatchLogConfiguration(obj.logConfiguration),
    'secrets': obj.secrets?.map(y => toJson_BatchSecret(y)),
    'networkConfiguration': toJson_BatchNetworkConfiguration(obj.networkConfiguration),
    'fargatePlatformConfiguration': toJson_BatchFargatePlatformConfiguration(obj.fargatePlatformConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchNodeProperties
 */
export interface BatchNodeProperties {
  /**
   * @schema BatchNodeProperties#numNodes
   */
  readonly numNodes: number;

  /**
   * @schema BatchNodeProperties#mainNode
   */
  readonly mainNode: number;

  /**
   * @schema BatchNodeProperties#nodeRangeProperties
   */
  readonly nodeRangeProperties: BatchNodeRangeProperty[];

}

/**
 * Converts an object of type 'BatchNodeProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchNodeProperties(obj: BatchNodeProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'numNodes': obj.numNodes,
    'mainNode': obj.mainNode,
    'nodeRangeProperties': obj.nodeRangeProperties?.map(y => toJson_BatchNodeRangeProperty(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchRetryStrategy
 */
export interface BatchRetryStrategy {
  /**
   * @schema BatchRetryStrategy#attempts
   */
  readonly attempts?: number;

  /**
   * @schema BatchRetryStrategy#evaluateOnExit
   */
  readonly evaluateOnExit?: BatchEvaluateOnExit[];

}

/**
 * Converts an object of type 'BatchRetryStrategy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchRetryStrategy(obj: BatchRetryStrategy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attempts': obj.attempts,
    'evaluateOnExit': obj.evaluateOnExit?.map(y => toJson_BatchEvaluateOnExit(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchJobTimeout
 */
export interface BatchJobTimeout {
  /**
   * @schema BatchJobTimeout#attemptDurationSeconds
   */
  readonly attemptDurationSeconds?: number;

}

/**
 * Converts an object of type 'BatchJobTimeout' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchJobTimeout(obj: BatchJobTimeout | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attemptDurationSeconds': obj.attemptDurationSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchArrayProperties
 */
export interface BatchArrayProperties {
  /**
   * @schema BatchArrayProperties#size
   */
  readonly size?: number;

}

/**
 * Converts an object of type 'BatchArrayProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchArrayProperties(obj: BatchArrayProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'size': obj.size,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchJobDependency
 */
export interface BatchJobDependency {
  /**
   * @schema BatchJobDependency#jobId
   */
  readonly jobId?: string;

  /**
   * @schema BatchJobDependency#type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'BatchJobDependency' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchJobDependency(obj: BatchJobDependency | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchContainerOverrides
 */
export interface BatchContainerOverrides {
  /**
   * @schema BatchContainerOverrides#vcpus
   */
  readonly vcpus?: number;

  /**
   * @schema BatchContainerOverrides#memory
   */
  readonly memory?: number;

  /**
   * @schema BatchContainerOverrides#command
   */
  readonly command?: string[];

  /**
   * @schema BatchContainerOverrides#instanceType
   */
  readonly instanceType?: string;

  /**
   * @schema BatchContainerOverrides#environment
   */
  readonly environment?: BatchKeyValuePair[];

  /**
   * @schema BatchContainerOverrides#resourceRequirements
   */
  readonly resourceRequirements?: BatchResourceRequirement[];

}

/**
 * Converts an object of type 'BatchContainerOverrides' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchContainerOverrides(obj: BatchContainerOverrides | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'vcpus': obj.vcpus,
    'memory': obj.memory,
    'command': obj.command?.map(y => y),
    'instanceType': obj.instanceType,
    'environment': obj.environment?.map(y => toJson_BatchKeyValuePair(y)),
    'resourceRequirements': obj.resourceRequirements?.map(y => toJson_BatchResourceRequirement(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchNodeOverrides
 */
export interface BatchNodeOverrides {
  /**
   * @schema BatchNodeOverrides#numNodes
   */
  readonly numNodes?: number;

  /**
   * @schema BatchNodeOverrides#nodePropertyOverrides
   */
  readonly nodePropertyOverrides?: BatchNodePropertyOverride[];

}

/**
 * Converts an object of type 'BatchNodeOverrides' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchNodeOverrides(obj: BatchNodeOverrides | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'numNodes': obj.numNodes,
    'nodePropertyOverrides': obj.nodePropertyOverrides?.map(y => toJson_BatchNodePropertyOverride(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchComputeResourceUpdate
 */
export interface BatchComputeResourceUpdate {
  /**
   * @schema BatchComputeResourceUpdate#minvCpus
   */
  readonly minvCpus?: number;

  /**
   * @schema BatchComputeResourceUpdate#maxvCpus
   */
  readonly maxvCpus?: number;

  /**
   * @schema BatchComputeResourceUpdate#desiredvCpus
   */
  readonly desiredvCpus?: number;

  /**
   * @schema BatchComputeResourceUpdate#subnets
   */
  readonly subnets?: string[];

  /**
   * @schema BatchComputeResourceUpdate#securityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * Converts an object of type 'BatchComputeResourceUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchComputeResourceUpdate(obj: BatchComputeResourceUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'minvCpus': obj.minvCpus,
    'maxvCpus': obj.maxvCpus,
    'desiredvCpus': obj.desiredvCpus,
    'subnets': obj.subnets?.map(y => y),
    'securityGroupIds': obj.securityGroupIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchLaunchTemplateSpecification
 */
export interface BatchLaunchTemplateSpecification {
  /**
   * @schema BatchLaunchTemplateSpecification#launchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema BatchLaunchTemplateSpecification#launchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema BatchLaunchTemplateSpecification#version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'BatchLaunchTemplateSpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchLaunchTemplateSpecification(obj: BatchLaunchTemplateSpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'launchTemplateId': obj.launchTemplateId,
    'launchTemplateName': obj.launchTemplateName,
    'version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchEc2Configuration
 */
export interface BatchEc2Configuration {
  /**
   * @schema BatchEc2Configuration#imageType
   */
  readonly imageType: string;

  /**
   * @schema BatchEc2Configuration#imageIdOverride
   */
  readonly imageIdOverride?: string;

}

/**
 * Converts an object of type 'BatchEc2Configuration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchEc2Configuration(obj: BatchEc2Configuration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'imageType': obj.imageType,
    'imageIdOverride': obj.imageIdOverride,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchAttemptDetail
 */
export interface BatchAttemptDetail {
  /**
   * @schema BatchAttemptDetail#container
   */
  readonly container?: BatchAttemptContainerDetail;

  /**
   * @schema BatchAttemptDetail#startedAt
   */
  readonly startedAt?: number;

  /**
   * @schema BatchAttemptDetail#stoppedAt
   */
  readonly stoppedAt?: number;

  /**
   * @schema BatchAttemptDetail#statusReason
   */
  readonly statusReason?: string;

}

/**
 * Converts an object of type 'BatchAttemptDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchAttemptDetail(obj: BatchAttemptDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'container': toJson_BatchAttemptContainerDetail(obj.container),
    'startedAt': obj.startedAt,
    'stoppedAt': obj.stoppedAt,
    'statusReason': obj.statusReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchContainerDetail
 */
export interface BatchContainerDetail {
  /**
   * @schema BatchContainerDetail#image
   */
  readonly image?: string;

  /**
   * @schema BatchContainerDetail#vcpus
   */
  readonly vcpus?: number;

  /**
   * @schema BatchContainerDetail#memory
   */
  readonly memory?: number;

  /**
   * @schema BatchContainerDetail#command
   */
  readonly command?: string[];

  /**
   * @schema BatchContainerDetail#jobRoleArn
   */
  readonly jobRoleArn?: string;

  /**
   * @schema BatchContainerDetail#executionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema BatchContainerDetail#volumes
   */
  readonly volumes?: BatchVolume[];

  /**
   * @schema BatchContainerDetail#environment
   */
  readonly environment?: BatchKeyValuePair[];

  /**
   * @schema BatchContainerDetail#mountPoints
   */
  readonly mountPoints?: BatchMountPoint[];

  /**
   * @schema BatchContainerDetail#readonlyRootFilesystem
   */
  readonly readonlyRootFilesystem?: boolean;

  /**
   * @schema BatchContainerDetail#ulimits
   */
  readonly ulimits?: BatchUlimit[];

  /**
   * @schema BatchContainerDetail#privileged
   */
  readonly privileged?: boolean;

  /**
   * @schema BatchContainerDetail#user
   */
  readonly user?: string;

  /**
   * @schema BatchContainerDetail#exitCode
   */
  readonly exitCode?: number;

  /**
   * @schema BatchContainerDetail#reason
   */
  readonly reason?: string;

  /**
   * @schema BatchContainerDetail#containerInstanceArn
   */
  readonly containerInstanceArn?: string;

  /**
   * @schema BatchContainerDetail#taskArn
   */
  readonly taskArn?: string;

  /**
   * @schema BatchContainerDetail#logStreamName
   */
  readonly logStreamName?: string;

  /**
   * @schema BatchContainerDetail#instanceType
   */
  readonly instanceType?: string;

  /**
   * @schema BatchContainerDetail#networkInterfaces
   */
  readonly networkInterfaces?: BatchNetworkInterface[];

  /**
   * @schema BatchContainerDetail#resourceRequirements
   */
  readonly resourceRequirements?: BatchResourceRequirement[];

  /**
   * @schema BatchContainerDetail#linuxParameters
   */
  readonly linuxParameters?: BatchLinuxParameters;

  /**
   * @schema BatchContainerDetail#logConfiguration
   */
  readonly logConfiguration?: BatchLogConfiguration;

  /**
   * @schema BatchContainerDetail#secrets
   */
  readonly secrets?: BatchSecret[];

  /**
   * @schema BatchContainerDetail#networkConfiguration
   */
  readonly networkConfiguration?: BatchNetworkConfiguration;

  /**
   * @schema BatchContainerDetail#fargatePlatformConfiguration
   */
  readonly fargatePlatformConfiguration?: BatchFargatePlatformConfiguration;

}

/**
 * Converts an object of type 'BatchContainerDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchContainerDetail(obj: BatchContainerDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'image': obj.image,
    'vcpus': obj.vcpus,
    'memory': obj.memory,
    'command': obj.command?.map(y => y),
    'jobRoleArn': obj.jobRoleArn,
    'executionRoleArn': obj.executionRoleArn,
    'volumes': obj.volumes?.map(y => toJson_BatchVolume(y)),
    'environment': obj.environment?.map(y => toJson_BatchKeyValuePair(y)),
    'mountPoints': obj.mountPoints?.map(y => toJson_BatchMountPoint(y)),
    'readonlyRootFilesystem': obj.readonlyRootFilesystem,
    'ulimits': obj.ulimits?.map(y => toJson_BatchUlimit(y)),
    'privileged': obj.privileged,
    'user': obj.user,
    'exitCode': obj.exitCode,
    'reason': obj.reason,
    'containerInstanceArn': obj.containerInstanceArn,
    'taskArn': obj.taskArn,
    'logStreamName': obj.logStreamName,
    'instanceType': obj.instanceType,
    'networkInterfaces': obj.networkInterfaces?.map(y => toJson_BatchNetworkInterface(y)),
    'resourceRequirements': obj.resourceRequirements?.map(y => toJson_BatchResourceRequirement(y)),
    'linuxParameters': toJson_BatchLinuxParameters(obj.linuxParameters),
    'logConfiguration': toJson_BatchLogConfiguration(obj.logConfiguration),
    'secrets': obj.secrets?.map(y => toJson_BatchSecret(y)),
    'networkConfiguration': toJson_BatchNetworkConfiguration(obj.networkConfiguration),
    'fargatePlatformConfiguration': toJson_BatchFargatePlatformConfiguration(obj.fargatePlatformConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchNodeDetails
 */
export interface BatchNodeDetails {
  /**
   * @schema BatchNodeDetails#nodeIndex
   */
  readonly nodeIndex?: number;

  /**
   * @schema BatchNodeDetails#isMainNode
   */
  readonly isMainNode?: boolean;

}

/**
 * Converts an object of type 'BatchNodeDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchNodeDetails(obj: BatchNodeDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nodeIndex': obj.nodeIndex,
    'isMainNode': obj.isMainNode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchArrayPropertiesDetail
 */
export interface BatchArrayPropertiesDetail {
  /**
   * @schema BatchArrayPropertiesDetail#statusSummary
   */
  readonly statusSummary?: { [key: string]: number };

  /**
   * @schema BatchArrayPropertiesDetail#size
   */
  readonly size?: number;

  /**
   * @schema BatchArrayPropertiesDetail#index
   */
  readonly index?: number;

}

/**
 * Converts an object of type 'BatchArrayPropertiesDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchArrayPropertiesDetail(obj: BatchArrayPropertiesDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'statusSummary': ((obj.statusSummary) === undefined) ? undefined : (Object.entries(obj.statusSummary).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'size': obj.size,
    'index': obj.index,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchContainerSummary
 */
export interface BatchContainerSummary {
  /**
   * @schema BatchContainerSummary#exitCode
   */
  readonly exitCode?: number;

  /**
   * @schema BatchContainerSummary#reason
   */
  readonly reason?: string;

}

/**
 * Converts an object of type 'BatchContainerSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchContainerSummary(obj: BatchContainerSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'exitCode': obj.exitCode,
    'reason': obj.reason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchArrayPropertiesSummary
 */
export interface BatchArrayPropertiesSummary {
  /**
   * @schema BatchArrayPropertiesSummary#size
   */
  readonly size?: number;

  /**
   * @schema BatchArrayPropertiesSummary#index
   */
  readonly index?: number;

}

/**
 * Converts an object of type 'BatchArrayPropertiesSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchArrayPropertiesSummary(obj: BatchArrayPropertiesSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'size': obj.size,
    'index': obj.index,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchNodePropertiesSummary
 */
export interface BatchNodePropertiesSummary {
  /**
   * @schema BatchNodePropertiesSummary#isMainNode
   */
  readonly isMainNode?: boolean;

  /**
   * @schema BatchNodePropertiesSummary#numNodes
   */
  readonly numNodes?: number;

  /**
   * @schema BatchNodePropertiesSummary#nodeIndex
   */
  readonly nodeIndex?: number;

}

/**
 * Converts an object of type 'BatchNodePropertiesSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchNodePropertiesSummary(obj: BatchNodePropertiesSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'isMainNode': obj.isMainNode,
    'numNodes': obj.numNodes,
    'nodeIndex': obj.nodeIndex,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchVolume
 */
export interface BatchVolume {
  /**
   * @schema BatchVolume#host
   */
  readonly host?: BatchHost;

  /**
   * @schema BatchVolume#name
   */
  readonly name?: string;

  /**
   * @schema BatchVolume#efsVolumeConfiguration
   */
  readonly efsVolumeConfiguration?: BatchEfsVolumeConfiguration;

}

/**
 * Converts an object of type 'BatchVolume' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchVolume(obj: BatchVolume | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'host': toJson_BatchHost(obj.host),
    'name': obj.name,
    'efsVolumeConfiguration': toJson_BatchEfsVolumeConfiguration(obj.efsVolumeConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchKeyValuePair
 */
export interface BatchKeyValuePair {
  /**
   * @schema BatchKeyValuePair#name
   */
  readonly name?: string;

  /**
   * @schema BatchKeyValuePair#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'BatchKeyValuePair' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchKeyValuePair(obj: BatchKeyValuePair | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchMountPoint
 */
export interface BatchMountPoint {
  /**
   * @schema BatchMountPoint#containerPath
   */
  readonly containerPath?: string;

  /**
   * @schema BatchMountPoint#readOnly
   */
  readonly readOnly?: boolean;

  /**
   * @schema BatchMountPoint#sourceVolume
   */
  readonly sourceVolume?: string;

}

/**
 * Converts an object of type 'BatchMountPoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchMountPoint(obj: BatchMountPoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerPath': obj.containerPath,
    'readOnly': obj.readOnly,
    'sourceVolume': obj.sourceVolume,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchUlimit
 */
export interface BatchUlimit {
  /**
   * @schema BatchUlimit#hardLimit
   */
  readonly hardLimit: number;

  /**
   * @schema BatchUlimit#name
   */
  readonly name: string;

  /**
   * @schema BatchUlimit#softLimit
   */
  readonly softLimit: number;

}

/**
 * Converts an object of type 'BatchUlimit' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchUlimit(obj: BatchUlimit | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'hardLimit': obj.hardLimit,
    'name': obj.name,
    'softLimit': obj.softLimit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchResourceRequirement
 */
export interface BatchResourceRequirement {
  /**
   * @schema BatchResourceRequirement#value
   */
  readonly value: string;

  /**
   * @schema BatchResourceRequirement#type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'BatchResourceRequirement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchResourceRequirement(obj: BatchResourceRequirement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'value': obj.value,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchLinuxParameters
 */
export interface BatchLinuxParameters {
  /**
   * @schema BatchLinuxParameters#devices
   */
  readonly devices?: BatchDevice[];

  /**
   * @schema BatchLinuxParameters#initProcessEnabled
   */
  readonly initProcessEnabled?: boolean;

  /**
   * @schema BatchLinuxParameters#sharedMemorySize
   */
  readonly sharedMemorySize?: number;

  /**
   * @schema BatchLinuxParameters#tmpfs
   */
  readonly tmpfs?: BatchTmpfs[];

  /**
   * @schema BatchLinuxParameters#maxSwap
   */
  readonly maxSwap?: number;

  /**
   * @schema BatchLinuxParameters#swappiness
   */
  readonly swappiness?: number;

}

/**
 * Converts an object of type 'BatchLinuxParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchLinuxParameters(obj: BatchLinuxParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'devices': obj.devices?.map(y => toJson_BatchDevice(y)),
    'initProcessEnabled': obj.initProcessEnabled,
    'sharedMemorySize': obj.sharedMemorySize,
    'tmpfs': obj.tmpfs?.map(y => toJson_BatchTmpfs(y)),
    'maxSwap': obj.maxSwap,
    'swappiness': obj.swappiness,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchLogConfiguration
 */
export interface BatchLogConfiguration {
  /**
   * @schema BatchLogConfiguration#logDriver
   */
  readonly logDriver: string;

  /**
   * @schema BatchLogConfiguration#options
   */
  readonly options?: { [key: string]: string };

  /**
   * @schema BatchLogConfiguration#secretOptions
   */
  readonly secretOptions?: BatchSecret[];

}

/**
 * Converts an object of type 'BatchLogConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchLogConfiguration(obj: BatchLogConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'logDriver': obj.logDriver,
    'options': ((obj.options) === undefined) ? undefined : (Object.entries(obj.options).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'secretOptions': obj.secretOptions?.map(y => toJson_BatchSecret(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchSecret
 */
export interface BatchSecret {
  /**
   * @schema BatchSecret#name
   */
  readonly name: string;

  /**
   * @schema BatchSecret#valueFrom
   */
  readonly valueFrom: string;

}

/**
 * Converts an object of type 'BatchSecret' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchSecret(obj: BatchSecret | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'valueFrom': obj.valueFrom,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchNetworkConfiguration
 */
export interface BatchNetworkConfiguration {
  /**
   * @schema BatchNetworkConfiguration#assignPublicIp
   */
  readonly assignPublicIp?: string;

}

/**
 * Converts an object of type 'BatchNetworkConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchNetworkConfiguration(obj: BatchNetworkConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assignPublicIp': obj.assignPublicIp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchFargatePlatformConfiguration
 */
export interface BatchFargatePlatformConfiguration {
  /**
   * @schema BatchFargatePlatformConfiguration#platformVersion
   */
  readonly platformVersion?: string;

}

/**
 * Converts an object of type 'BatchFargatePlatformConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchFargatePlatformConfiguration(obj: BatchFargatePlatformConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'platformVersion': obj.platformVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchNodeRangeProperty
 */
export interface BatchNodeRangeProperty {
  /**
   * @schema BatchNodeRangeProperty#targetNodes
   */
  readonly targetNodes: string;

  /**
   * @schema BatchNodeRangeProperty#container
   */
  readonly container?: BatchContainerProperties;

}

/**
 * Converts an object of type 'BatchNodeRangeProperty' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchNodeRangeProperty(obj: BatchNodeRangeProperty | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'targetNodes': obj.targetNodes,
    'container': toJson_BatchContainerProperties(obj.container),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchEvaluateOnExit
 */
export interface BatchEvaluateOnExit {
  /**
   * @schema BatchEvaluateOnExit#onStatusReason
   */
  readonly onStatusReason?: string;

  /**
   * @schema BatchEvaluateOnExit#onReason
   */
  readonly onReason?: string;

  /**
   * @schema BatchEvaluateOnExit#onExitCode
   */
  readonly onExitCode?: string;

  /**
   * @schema BatchEvaluateOnExit#action
   */
  readonly action: string;

}

/**
 * Converts an object of type 'BatchEvaluateOnExit' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchEvaluateOnExit(obj: BatchEvaluateOnExit | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'onStatusReason': obj.onStatusReason,
    'onReason': obj.onReason,
    'onExitCode': obj.onExitCode,
    'action': obj.action,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchNodePropertyOverride
 */
export interface BatchNodePropertyOverride {
  /**
   * @schema BatchNodePropertyOverride#targetNodes
   */
  readonly targetNodes: string;

  /**
   * @schema BatchNodePropertyOverride#containerOverrides
   */
  readonly containerOverrides?: BatchContainerOverrides;

}

/**
 * Converts an object of type 'BatchNodePropertyOverride' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchNodePropertyOverride(obj: BatchNodePropertyOverride | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'targetNodes': obj.targetNodes,
    'containerOverrides': toJson_BatchContainerOverrides(obj.containerOverrides),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchAttemptContainerDetail
 */
export interface BatchAttemptContainerDetail {
  /**
   * @schema BatchAttemptContainerDetail#containerInstanceArn
   */
  readonly containerInstanceArn?: string;

  /**
   * @schema BatchAttemptContainerDetail#taskArn
   */
  readonly taskArn?: string;

  /**
   * @schema BatchAttemptContainerDetail#exitCode
   */
  readonly exitCode?: number;

  /**
   * @schema BatchAttemptContainerDetail#reason
   */
  readonly reason?: string;

  /**
   * @schema BatchAttemptContainerDetail#logStreamName
   */
  readonly logStreamName?: string;

  /**
   * @schema BatchAttemptContainerDetail#networkInterfaces
   */
  readonly networkInterfaces?: BatchNetworkInterface[];

}

/**
 * Converts an object of type 'BatchAttemptContainerDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchAttemptContainerDetail(obj: BatchAttemptContainerDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerInstanceArn': obj.containerInstanceArn,
    'taskArn': obj.taskArn,
    'exitCode': obj.exitCode,
    'reason': obj.reason,
    'logStreamName': obj.logStreamName,
    'networkInterfaces': obj.networkInterfaces?.map(y => toJson_BatchNetworkInterface(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchNetworkInterface
 */
export interface BatchNetworkInterface {
  /**
   * @schema BatchNetworkInterface#attachmentId
   */
  readonly attachmentId?: string;

  /**
   * @schema BatchNetworkInterface#ipv6Address
   */
  readonly ipv6Address?: string;

  /**
   * @schema BatchNetworkInterface#privateIpv4Address
   */
  readonly privateIpv4Address?: string;

}

/**
 * Converts an object of type 'BatchNetworkInterface' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchNetworkInterface(obj: BatchNetworkInterface | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attachmentId': obj.attachmentId,
    'ipv6Address': obj.ipv6Address,
    'privateIpv4Address': obj.privateIpv4Address,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchHost
 */
export interface BatchHost {
  /**
   * @schema BatchHost#sourcePath
   */
  readonly sourcePath?: string;

}

/**
 * Converts an object of type 'BatchHost' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchHost(obj: BatchHost | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sourcePath': obj.sourcePath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchEfsVolumeConfiguration
 */
export interface BatchEfsVolumeConfiguration {
  /**
   * @schema BatchEfsVolumeConfiguration#fileSystemId
   */
  readonly fileSystemId: string;

  /**
   * @schema BatchEfsVolumeConfiguration#rootDirectory
   */
  readonly rootDirectory?: string;

  /**
   * @schema BatchEfsVolumeConfiguration#transitEncryption
   */
  readonly transitEncryption?: string;

  /**
   * @schema BatchEfsVolumeConfiguration#transitEncryptionPort
   */
  readonly transitEncryptionPort?: number;

  /**
   * @schema BatchEfsVolumeConfiguration#authorizationConfig
   */
  readonly authorizationConfig?: BatchEfsAuthorizationConfig;

}

/**
 * Converts an object of type 'BatchEfsVolumeConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchEfsVolumeConfiguration(obj: BatchEfsVolumeConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fileSystemId': obj.fileSystemId,
    'rootDirectory': obj.rootDirectory,
    'transitEncryption': obj.transitEncryption,
    'transitEncryptionPort': obj.transitEncryptionPort,
    'authorizationConfig': toJson_BatchEfsAuthorizationConfig(obj.authorizationConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchDevice
 */
export interface BatchDevice {
  /**
   * @schema BatchDevice#hostPath
   */
  readonly hostPath: string;

  /**
   * @schema BatchDevice#containerPath
   */
  readonly containerPath?: string;

  /**
   * @schema BatchDevice#permissions
   */
  readonly permissions?: string[];

}

/**
 * Converts an object of type 'BatchDevice' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchDevice(obj: BatchDevice | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'hostPath': obj.hostPath,
    'containerPath': obj.containerPath,
    'permissions': obj.permissions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchTmpfs
 */
export interface BatchTmpfs {
  /**
   * @schema BatchTmpfs#containerPath
   */
  readonly containerPath: string;

  /**
   * @schema BatchTmpfs#size
   */
  readonly size: number;

  /**
   * @schema BatchTmpfs#mountOptions
   */
  readonly mountOptions?: string[];

}

/**
 * Converts an object of type 'BatchTmpfs' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchTmpfs(obj: BatchTmpfs | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerPath': obj.containerPath,
    'size': obj.size,
    'mountOptions': obj.mountOptions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BatchEfsAuthorizationConfig
 */
export interface BatchEfsAuthorizationConfig {
  /**
   * @schema BatchEfsAuthorizationConfig#accessPointId
   */
  readonly accessPointId?: string;

  /**
   * @schema BatchEfsAuthorizationConfig#iam
   */
  readonly iam?: string;

}

/**
 * Converts an object of type 'BatchEfsAuthorizationConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BatchEfsAuthorizationConfig(obj: BatchEfsAuthorizationConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessPointId': obj.accessPointId,
    'iam': obj.iam,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
