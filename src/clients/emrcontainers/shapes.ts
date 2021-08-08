/**
 * @schema EmRcontainersCancelJobRunRequest
 */
export interface EmRcontainersCancelJobRunRequest {
  /**
   * @schema EmRcontainersCancelJobRunRequest#id
   */
  readonly id: string;

  /**
   * @schema EmRcontainersCancelJobRunRequest#virtualClusterId
   */
  readonly virtualClusterId: string;

}

/**
 * Converts an object of type 'EmRcontainersCancelJobRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersCancelJobRunRequest(obj: EmRcontainersCancelJobRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'virtualClusterId': obj.virtualClusterId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersCancelJobRunResponse
 */
export interface EmRcontainersCancelJobRunResponse {
  /**
   * @schema EmRcontainersCancelJobRunResponse#id
   */
  readonly id?: string;

  /**
   * @schema EmRcontainersCancelJobRunResponse#virtualClusterId
   */
  readonly virtualClusterId?: string;

}

/**
 * Converts an object of type 'EmRcontainersCancelJobRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersCancelJobRunResponse(obj: EmRcontainersCancelJobRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'virtualClusterId': obj.virtualClusterId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersCreateManagedEndpointRequest
 */
export interface EmRcontainersCreateManagedEndpointRequest {
  /**
   * @schema EmRcontainersCreateManagedEndpointRequest#name
   */
  readonly name: string;

  /**
   * @schema EmRcontainersCreateManagedEndpointRequest#virtualClusterId
   */
  readonly virtualClusterId: string;

  /**
   * @schema EmRcontainersCreateManagedEndpointRequest#type
   */
  readonly type: string;

  /**
   * @schema EmRcontainersCreateManagedEndpointRequest#releaseLabel
   */
  readonly releaseLabel: string;

  /**
   * @schema EmRcontainersCreateManagedEndpointRequest#executionRoleArn
   */
  readonly executionRoleArn: string;

  /**
   * @schema EmRcontainersCreateManagedEndpointRequest#certificateArn
   */
  readonly certificateArn: string;

  /**
   * @schema EmRcontainersCreateManagedEndpointRequest#configurationOverrides
   */
  readonly configurationOverrides?: EmRcontainersConfigurationOverrides;

  /**
   * @schema EmRcontainersCreateManagedEndpointRequest#clientToken
   */
  readonly clientToken: string;

  /**
   * @schema EmRcontainersCreateManagedEndpointRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'EmRcontainersCreateManagedEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersCreateManagedEndpointRequest(obj: EmRcontainersCreateManagedEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'virtualClusterId': obj.virtualClusterId,
    'type': obj.type,
    'releaseLabel': obj.releaseLabel,
    'executionRoleArn': obj.executionRoleArn,
    'certificateArn': obj.certificateArn,
    'configurationOverrides': toJson_EmRcontainersConfigurationOverrides(obj.configurationOverrides),
    'clientToken': obj.clientToken,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersCreateManagedEndpointResponse
 */
export interface EmRcontainersCreateManagedEndpointResponse {
  /**
   * @schema EmRcontainersCreateManagedEndpointResponse#id
   */
  readonly id?: string;

  /**
   * @schema EmRcontainersCreateManagedEndpointResponse#name
   */
  readonly name?: string;

  /**
   * @schema EmRcontainersCreateManagedEndpointResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema EmRcontainersCreateManagedEndpointResponse#virtualClusterId
   */
  readonly virtualClusterId?: string;

}

/**
 * Converts an object of type 'EmRcontainersCreateManagedEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersCreateManagedEndpointResponse(obj: EmRcontainersCreateManagedEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'arn': obj.arn,
    'virtualClusterId': obj.virtualClusterId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersCreateVirtualClusterRequest
 */
export interface EmRcontainersCreateVirtualClusterRequest {
  /**
   * @schema EmRcontainersCreateVirtualClusterRequest#name
   */
  readonly name: string;

  /**
   * @schema EmRcontainersCreateVirtualClusterRequest#containerProvider
   */
  readonly containerProvider: EmRcontainersContainerProvider;

  /**
   * @schema EmRcontainersCreateVirtualClusterRequest#clientToken
   */
  readonly clientToken: string;

  /**
   * @schema EmRcontainersCreateVirtualClusterRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'EmRcontainersCreateVirtualClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersCreateVirtualClusterRequest(obj: EmRcontainersCreateVirtualClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'containerProvider': toJson_EmRcontainersContainerProvider(obj.containerProvider),
    'clientToken': obj.clientToken,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersCreateVirtualClusterResponse
 */
export interface EmRcontainersCreateVirtualClusterResponse {
  /**
   * @schema EmRcontainersCreateVirtualClusterResponse#id
   */
  readonly id?: string;

  /**
   * @schema EmRcontainersCreateVirtualClusterResponse#name
   */
  readonly name?: string;

  /**
   * @schema EmRcontainersCreateVirtualClusterResponse#arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'EmRcontainersCreateVirtualClusterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersCreateVirtualClusterResponse(obj: EmRcontainersCreateVirtualClusterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersDeleteManagedEndpointRequest
 */
export interface EmRcontainersDeleteManagedEndpointRequest {
  /**
   * @schema EmRcontainersDeleteManagedEndpointRequest#id
   */
  readonly id: string;

  /**
   * @schema EmRcontainersDeleteManagedEndpointRequest#virtualClusterId
   */
  readonly virtualClusterId: string;

}

/**
 * Converts an object of type 'EmRcontainersDeleteManagedEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersDeleteManagedEndpointRequest(obj: EmRcontainersDeleteManagedEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'virtualClusterId': obj.virtualClusterId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersDeleteManagedEndpointResponse
 */
export interface EmRcontainersDeleteManagedEndpointResponse {
  /**
   * @schema EmRcontainersDeleteManagedEndpointResponse#id
   */
  readonly id?: string;

  /**
   * @schema EmRcontainersDeleteManagedEndpointResponse#virtualClusterId
   */
  readonly virtualClusterId?: string;

}

/**
 * Converts an object of type 'EmRcontainersDeleteManagedEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersDeleteManagedEndpointResponse(obj: EmRcontainersDeleteManagedEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'virtualClusterId': obj.virtualClusterId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersDeleteVirtualClusterRequest
 */
export interface EmRcontainersDeleteVirtualClusterRequest {
  /**
   * @schema EmRcontainersDeleteVirtualClusterRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'EmRcontainersDeleteVirtualClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersDeleteVirtualClusterRequest(obj: EmRcontainersDeleteVirtualClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersDeleteVirtualClusterResponse
 */
export interface EmRcontainersDeleteVirtualClusterResponse {
  /**
   * @schema EmRcontainersDeleteVirtualClusterResponse#id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'EmRcontainersDeleteVirtualClusterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersDeleteVirtualClusterResponse(obj: EmRcontainersDeleteVirtualClusterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersDescribeJobRunRequest
 */
export interface EmRcontainersDescribeJobRunRequest {
  /**
   * @schema EmRcontainersDescribeJobRunRequest#id
   */
  readonly id: string;

  /**
   * @schema EmRcontainersDescribeJobRunRequest#virtualClusterId
   */
  readonly virtualClusterId: string;

}

/**
 * Converts an object of type 'EmRcontainersDescribeJobRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersDescribeJobRunRequest(obj: EmRcontainersDescribeJobRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'virtualClusterId': obj.virtualClusterId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersDescribeJobRunResponse
 */
export interface EmRcontainersDescribeJobRunResponse {
  /**
   * @schema EmRcontainersDescribeJobRunResponse#jobRun
   */
  readonly jobRun?: EmRcontainersJobRun;

}

/**
 * Converts an object of type 'EmRcontainersDescribeJobRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersDescribeJobRunResponse(obj: EmRcontainersDescribeJobRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobRun': toJson_EmRcontainersJobRun(obj.jobRun),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersDescribeManagedEndpointRequest
 */
export interface EmRcontainersDescribeManagedEndpointRequest {
  /**
   * @schema EmRcontainersDescribeManagedEndpointRequest#id
   */
  readonly id: string;

  /**
   * @schema EmRcontainersDescribeManagedEndpointRequest#virtualClusterId
   */
  readonly virtualClusterId: string;

}

/**
 * Converts an object of type 'EmRcontainersDescribeManagedEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersDescribeManagedEndpointRequest(obj: EmRcontainersDescribeManagedEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'virtualClusterId': obj.virtualClusterId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersDescribeManagedEndpointResponse
 */
export interface EmRcontainersDescribeManagedEndpointResponse {
  /**
   * @schema EmRcontainersDescribeManagedEndpointResponse#endpoint
   */
  readonly endpoint?: EmRcontainersEndpoint;

}

/**
 * Converts an object of type 'EmRcontainersDescribeManagedEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersDescribeManagedEndpointResponse(obj: EmRcontainersDescribeManagedEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'endpoint': toJson_EmRcontainersEndpoint(obj.endpoint),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersDescribeVirtualClusterRequest
 */
export interface EmRcontainersDescribeVirtualClusterRequest {
  /**
   * @schema EmRcontainersDescribeVirtualClusterRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'EmRcontainersDescribeVirtualClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersDescribeVirtualClusterRequest(obj: EmRcontainersDescribeVirtualClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersDescribeVirtualClusterResponse
 */
export interface EmRcontainersDescribeVirtualClusterResponse {
  /**
   * @schema EmRcontainersDescribeVirtualClusterResponse#virtualCluster
   */
  readonly virtualCluster?: EmRcontainersVirtualCluster;

}

/**
 * Converts an object of type 'EmRcontainersDescribeVirtualClusterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersDescribeVirtualClusterResponse(obj: EmRcontainersDescribeVirtualClusterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualCluster': toJson_EmRcontainersVirtualCluster(obj.virtualCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersListJobRunsRequest
 */
export interface EmRcontainersListJobRunsRequest {
  /**
   * @schema EmRcontainersListJobRunsRequest#virtualClusterId
   */
  readonly virtualClusterId: string;

  /**
   * @schema EmRcontainersListJobRunsRequest#createdBefore
   */
  readonly createdBefore?: string;

  /**
   * @schema EmRcontainersListJobRunsRequest#createdAfter
   */
  readonly createdAfter?: string;

  /**
   * @schema EmRcontainersListJobRunsRequest#name
   */
  readonly name?: string;

  /**
   * @schema EmRcontainersListJobRunsRequest#states
   */
  readonly states?: string[];

  /**
   * @schema EmRcontainersListJobRunsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EmRcontainersListJobRunsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EmRcontainersListJobRunsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersListJobRunsRequest(obj: EmRcontainersListJobRunsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualClusterId': obj.virtualClusterId,
    'createdBefore': obj.createdBefore,
    'createdAfter': obj.createdAfter,
    'name': obj.name,
    'states': obj.states?.map(y => y),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersListJobRunsResponse
 */
export interface EmRcontainersListJobRunsResponse {
  /**
   * @schema EmRcontainersListJobRunsResponse#jobRuns
   */
  readonly jobRuns?: EmRcontainersJobRun[];

  /**
   * @schema EmRcontainersListJobRunsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EmRcontainersListJobRunsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersListJobRunsResponse(obj: EmRcontainersListJobRunsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobRuns': obj.jobRuns?.map(y => toJson_EmRcontainersJobRun(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersListManagedEndpointsRequest
 */
export interface EmRcontainersListManagedEndpointsRequest {
  /**
   * @schema EmRcontainersListManagedEndpointsRequest#virtualClusterId
   */
  readonly virtualClusterId: string;

  /**
   * @schema EmRcontainersListManagedEndpointsRequest#createdBefore
   */
  readonly createdBefore?: string;

  /**
   * @schema EmRcontainersListManagedEndpointsRequest#createdAfter
   */
  readonly createdAfter?: string;

  /**
   * @schema EmRcontainersListManagedEndpointsRequest#types
   */
  readonly types?: string[];

  /**
   * @schema EmRcontainersListManagedEndpointsRequest#states
   */
  readonly states?: string[];

  /**
   * @schema EmRcontainersListManagedEndpointsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EmRcontainersListManagedEndpointsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EmRcontainersListManagedEndpointsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersListManagedEndpointsRequest(obj: EmRcontainersListManagedEndpointsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualClusterId': obj.virtualClusterId,
    'createdBefore': obj.createdBefore,
    'createdAfter': obj.createdAfter,
    'types': obj.types?.map(y => y),
    'states': obj.states?.map(y => y),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersListManagedEndpointsResponse
 */
export interface EmRcontainersListManagedEndpointsResponse {
  /**
   * @schema EmRcontainersListManagedEndpointsResponse#endpoints
   */
  readonly endpoints?: EmRcontainersEndpoint[];

  /**
   * @schema EmRcontainersListManagedEndpointsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EmRcontainersListManagedEndpointsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersListManagedEndpointsResponse(obj: EmRcontainersListManagedEndpointsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'endpoints': obj.endpoints?.map(y => toJson_EmRcontainersEndpoint(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersListTagsForResourceRequest
 */
export interface EmRcontainersListTagsForResourceRequest {
  /**
   * @schema EmRcontainersListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'EmRcontainersListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersListTagsForResourceRequest(obj: EmRcontainersListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersListTagsForResourceResponse
 */
export interface EmRcontainersListTagsForResourceResponse {
  /**
   * @schema EmRcontainersListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'EmRcontainersListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersListTagsForResourceResponse(obj: EmRcontainersListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersListVirtualClustersRequest
 */
export interface EmRcontainersListVirtualClustersRequest {
  /**
   * @schema EmRcontainersListVirtualClustersRequest#containerProviderId
   */
  readonly containerProviderId?: string;

  /**
   * @schema EmRcontainersListVirtualClustersRequest#containerProviderType
   */
  readonly containerProviderType?: string;

  /**
   * @schema EmRcontainersListVirtualClustersRequest#createdAfter
   */
  readonly createdAfter?: string;

  /**
   * @schema EmRcontainersListVirtualClustersRequest#createdBefore
   */
  readonly createdBefore?: string;

  /**
   * @schema EmRcontainersListVirtualClustersRequest#states
   */
  readonly states?: string[];

  /**
   * @schema EmRcontainersListVirtualClustersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EmRcontainersListVirtualClustersRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EmRcontainersListVirtualClustersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersListVirtualClustersRequest(obj: EmRcontainersListVirtualClustersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'containerProviderId': obj.containerProviderId,
    'containerProviderType': obj.containerProviderType,
    'createdAfter': obj.createdAfter,
    'createdBefore': obj.createdBefore,
    'states': obj.states?.map(y => y),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersListVirtualClustersResponse
 */
export interface EmRcontainersListVirtualClustersResponse {
  /**
   * @schema EmRcontainersListVirtualClustersResponse#virtualClusters
   */
  readonly virtualClusters?: EmRcontainersVirtualCluster[];

  /**
   * @schema EmRcontainersListVirtualClustersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EmRcontainersListVirtualClustersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersListVirtualClustersResponse(obj: EmRcontainersListVirtualClustersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualClusters': obj.virtualClusters?.map(y => toJson_EmRcontainersVirtualCluster(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersStartJobRunRequest
 */
export interface EmRcontainersStartJobRunRequest {
  /**
   * @schema EmRcontainersStartJobRunRequest#name
   */
  readonly name?: string;

  /**
   * @schema EmRcontainersStartJobRunRequest#virtualClusterId
   */
  readonly virtualClusterId: string;

  /**
   * @schema EmRcontainersStartJobRunRequest#clientToken
   */
  readonly clientToken: string;

  /**
   * @schema EmRcontainersStartJobRunRequest#executionRoleArn
   */
  readonly executionRoleArn: string;

  /**
   * @schema EmRcontainersStartJobRunRequest#releaseLabel
   */
  readonly releaseLabel: string;

  /**
   * @schema EmRcontainersStartJobRunRequest#jobDriver
   */
  readonly jobDriver: EmRcontainersJobDriver;

  /**
   * @schema EmRcontainersStartJobRunRequest#configurationOverrides
   */
  readonly configurationOverrides?: EmRcontainersConfigurationOverrides;

  /**
   * @schema EmRcontainersStartJobRunRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'EmRcontainersStartJobRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersStartJobRunRequest(obj: EmRcontainersStartJobRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'virtualClusterId': obj.virtualClusterId,
    'clientToken': obj.clientToken,
    'executionRoleArn': obj.executionRoleArn,
    'releaseLabel': obj.releaseLabel,
    'jobDriver': toJson_EmRcontainersJobDriver(obj.jobDriver),
    'configurationOverrides': toJson_EmRcontainersConfigurationOverrides(obj.configurationOverrides),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersStartJobRunResponse
 */
export interface EmRcontainersStartJobRunResponse {
  /**
   * @schema EmRcontainersStartJobRunResponse#id
   */
  readonly id?: string;

  /**
   * @schema EmRcontainersStartJobRunResponse#name
   */
  readonly name?: string;

  /**
   * @schema EmRcontainersStartJobRunResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema EmRcontainersStartJobRunResponse#virtualClusterId
   */
  readonly virtualClusterId?: string;

}

/**
 * Converts an object of type 'EmRcontainersStartJobRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersStartJobRunResponse(obj: EmRcontainersStartJobRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'arn': obj.arn,
    'virtualClusterId': obj.virtualClusterId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersTagResourceRequest
 */
export interface EmRcontainersTagResourceRequest {
  /**
   * @schema EmRcontainersTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema EmRcontainersTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'EmRcontainersTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersTagResourceRequest(obj: EmRcontainersTagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema EmRcontainersTagResourceResponse
 */
export interface EmRcontainersTagResourceResponse {
}

/**
 * Converts an object of type 'EmRcontainersTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersTagResourceResponse(obj: EmRcontainersTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersUntagResourceRequest
 */
export interface EmRcontainersUntagResourceRequest {
  /**
   * @schema EmRcontainersUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema EmRcontainersUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'EmRcontainersUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersUntagResourceRequest(obj: EmRcontainersUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema EmRcontainersUntagResourceResponse
 */
export interface EmRcontainersUntagResourceResponse {
}

/**
 * Converts an object of type 'EmRcontainersUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersUntagResourceResponse(obj: EmRcontainersUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersConfigurationOverrides
 */
export interface EmRcontainersConfigurationOverrides {
  /**
   * @schema EmRcontainersConfigurationOverrides#applicationConfiguration
   */
  readonly applicationConfiguration?: EmRcontainersConfiguration[];

  /**
   * @schema EmRcontainersConfigurationOverrides#monitoringConfiguration
   */
  readonly monitoringConfiguration?: EmRcontainersMonitoringConfiguration;

}

/**
 * Converts an object of type 'EmRcontainersConfigurationOverrides' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersConfigurationOverrides(obj: EmRcontainersConfigurationOverrides | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationConfiguration': obj.applicationConfiguration?.map(y => toJson_EmRcontainersConfiguration(y)),
    'monitoringConfiguration': toJson_EmRcontainersMonitoringConfiguration(obj.monitoringConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersContainerProvider
 */
export interface EmRcontainersContainerProvider {
  /**
   * @schema EmRcontainersContainerProvider#type
   */
  readonly type: string;

  /**
   * @schema EmRcontainersContainerProvider#id
   */
  readonly id: string;

  /**
   * @schema EmRcontainersContainerProvider#info
   */
  readonly info?: EmRcontainersContainerInfo;

}

/**
 * Converts an object of type 'EmRcontainersContainerProvider' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersContainerProvider(obj: EmRcontainersContainerProvider | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'id': obj.id,
    'info': toJson_EmRcontainersContainerInfo(obj.info),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersJobRun
 */
export interface EmRcontainersJobRun {
  /**
   * @schema EmRcontainersJobRun#id
   */
  readonly id?: string;

  /**
   * @schema EmRcontainersJobRun#name
   */
  readonly name?: string;

  /**
   * @schema EmRcontainersJobRun#virtualClusterId
   */
  readonly virtualClusterId?: string;

  /**
   * @schema EmRcontainersJobRun#arn
   */
  readonly arn?: string;

  /**
   * @schema EmRcontainersJobRun#state
   */
  readonly state?: string;

  /**
   * @schema EmRcontainersJobRun#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema EmRcontainersJobRun#executionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema EmRcontainersJobRun#releaseLabel
   */
  readonly releaseLabel?: string;

  /**
   * @schema EmRcontainersJobRun#configurationOverrides
   */
  readonly configurationOverrides?: EmRcontainersConfigurationOverrides;

  /**
   * @schema EmRcontainersJobRun#jobDriver
   */
  readonly jobDriver?: EmRcontainersJobDriver;

  /**
   * @schema EmRcontainersJobRun#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema EmRcontainersJobRun#createdBy
   */
  readonly createdBy?: string;

  /**
   * @schema EmRcontainersJobRun#finishedAt
   */
  readonly finishedAt?: string;

  /**
   * @schema EmRcontainersJobRun#stateDetails
   */
  readonly stateDetails?: string;

  /**
   * @schema EmRcontainersJobRun#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema EmRcontainersJobRun#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'EmRcontainersJobRun' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersJobRun(obj: EmRcontainersJobRun | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'virtualClusterId': obj.virtualClusterId,
    'arn': obj.arn,
    'state': obj.state,
    'clientToken': obj.clientToken,
    'executionRoleArn': obj.executionRoleArn,
    'releaseLabel': obj.releaseLabel,
    'configurationOverrides': toJson_EmRcontainersConfigurationOverrides(obj.configurationOverrides),
    'jobDriver': toJson_EmRcontainersJobDriver(obj.jobDriver),
    'createdAt': obj.createdAt,
    'createdBy': obj.createdBy,
    'finishedAt': obj.finishedAt,
    'stateDetails': obj.stateDetails,
    'failureReason': obj.failureReason,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersEndpoint
 */
export interface EmRcontainersEndpoint {
  /**
   * @schema EmRcontainersEndpoint#id
   */
  readonly id?: string;

  /**
   * @schema EmRcontainersEndpoint#name
   */
  readonly name?: string;

  /**
   * @schema EmRcontainersEndpoint#arn
   */
  readonly arn?: string;

  /**
   * @schema EmRcontainersEndpoint#virtualClusterId
   */
  readonly virtualClusterId?: string;

  /**
   * @schema EmRcontainersEndpoint#type
   */
  readonly type?: string;

  /**
   * @schema EmRcontainersEndpoint#state
   */
  readonly state?: string;

  /**
   * @schema EmRcontainersEndpoint#releaseLabel
   */
  readonly releaseLabel?: string;

  /**
   * @schema EmRcontainersEndpoint#executionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema EmRcontainersEndpoint#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema EmRcontainersEndpoint#configurationOverrides
   */
  readonly configurationOverrides?: EmRcontainersConfigurationOverrides;

  /**
   * @schema EmRcontainersEndpoint#serverUrl
   */
  readonly serverUrl?: string;

  /**
   * @schema EmRcontainersEndpoint#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema EmRcontainersEndpoint#securityGroup
   */
  readonly securityGroup?: string;

  /**
   * @schema EmRcontainersEndpoint#subnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema EmRcontainersEndpoint#stateDetails
   */
  readonly stateDetails?: string;

  /**
   * @schema EmRcontainersEndpoint#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema EmRcontainersEndpoint#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'EmRcontainersEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersEndpoint(obj: EmRcontainersEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'arn': obj.arn,
    'virtualClusterId': obj.virtualClusterId,
    'type': obj.type,
    'state': obj.state,
    'releaseLabel': obj.releaseLabel,
    'executionRoleArn': obj.executionRoleArn,
    'certificateArn': obj.certificateArn,
    'configurationOverrides': toJson_EmRcontainersConfigurationOverrides(obj.configurationOverrides),
    'serverUrl': obj.serverUrl,
    'createdAt': obj.createdAt,
    'securityGroup': obj.securityGroup,
    'subnetIds': obj.subnetIds?.map(y => y),
    'stateDetails': obj.stateDetails,
    'failureReason': obj.failureReason,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersVirtualCluster
 */
export interface EmRcontainersVirtualCluster {
  /**
   * @schema EmRcontainersVirtualCluster#id
   */
  readonly id?: string;

  /**
   * @schema EmRcontainersVirtualCluster#name
   */
  readonly name?: string;

  /**
   * @schema EmRcontainersVirtualCluster#arn
   */
  readonly arn?: string;

  /**
   * @schema EmRcontainersVirtualCluster#state
   */
  readonly state?: string;

  /**
   * @schema EmRcontainersVirtualCluster#containerProvider
   */
  readonly containerProvider?: EmRcontainersContainerProvider;

  /**
   * @schema EmRcontainersVirtualCluster#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema EmRcontainersVirtualCluster#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'EmRcontainersVirtualCluster' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersVirtualCluster(obj: EmRcontainersVirtualCluster | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'arn': obj.arn,
    'state': obj.state,
    'containerProvider': toJson_EmRcontainersContainerProvider(obj.containerProvider),
    'createdAt': obj.createdAt,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersJobDriver
 */
export interface EmRcontainersJobDriver {
  /**
   * @schema EmRcontainersJobDriver#sparkSubmitJobDriver
   */
  readonly sparkSubmitJobDriver?: EmRcontainersSparkSubmitJobDriver;

}

/**
 * Converts an object of type 'EmRcontainersJobDriver' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersJobDriver(obj: EmRcontainersJobDriver | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sparkSubmitJobDriver': toJson_EmRcontainersSparkSubmitJobDriver(obj.sparkSubmitJobDriver),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersConfiguration
 */
export interface EmRcontainersConfiguration {
  /**
   * @schema EmRcontainersConfiguration#classification
   */
  readonly classification: string;

  /**
   * @schema EmRcontainersConfiguration#properties
   */
  readonly properties?: { [key: string]: string };

  /**
   * @schema EmRcontainersConfiguration#configurations
   */
  readonly configurations?: EmRcontainersConfiguration[];

}

/**
 * Converts an object of type 'EmRcontainersConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersConfiguration(obj: EmRcontainersConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'classification': obj.classification,
    'properties': ((obj.properties) === undefined) ? undefined : (Object.entries(obj.properties).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'configurations': obj.configurations?.map(y => toJson_EmRcontainersConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersMonitoringConfiguration
 */
export interface EmRcontainersMonitoringConfiguration {
  /**
   * @schema EmRcontainersMonitoringConfiguration#persistentAppUI
   */
  readonly persistentAppUi?: string;

  /**
   * @schema EmRcontainersMonitoringConfiguration#cloudWatchMonitoringConfiguration
   */
  readonly cloudWatchMonitoringConfiguration?: EmRcontainersCloudWatchMonitoringConfiguration;

  /**
   * @schema EmRcontainersMonitoringConfiguration#s3MonitoringConfiguration
   */
  readonly s3MonitoringConfiguration?: EmRcontainersS3MonitoringConfiguration;

}

/**
 * Converts an object of type 'EmRcontainersMonitoringConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersMonitoringConfiguration(obj: EmRcontainersMonitoringConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'persistentAppUI': obj.persistentAppUi,
    'cloudWatchMonitoringConfiguration': toJson_EmRcontainersCloudWatchMonitoringConfiguration(obj.cloudWatchMonitoringConfiguration),
    's3MonitoringConfiguration': toJson_EmRcontainersS3MonitoringConfiguration(obj.s3MonitoringConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersContainerInfo
 */
export interface EmRcontainersContainerInfo {
  /**
   * @schema EmRcontainersContainerInfo#eksInfo
   */
  readonly eksInfo?: EmRcontainersEksInfo;

}

/**
 * Converts an object of type 'EmRcontainersContainerInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersContainerInfo(obj: EmRcontainersContainerInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eksInfo': toJson_EmRcontainersEksInfo(obj.eksInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersSparkSubmitJobDriver
 */
export interface EmRcontainersSparkSubmitJobDriver {
  /**
   * @schema EmRcontainersSparkSubmitJobDriver#entryPoint
   */
  readonly entryPoint: string;

  /**
   * @schema EmRcontainersSparkSubmitJobDriver#entryPointArguments
   */
  readonly entryPointArguments?: string[];

  /**
   * @schema EmRcontainersSparkSubmitJobDriver#sparkSubmitParameters
   */
  readonly sparkSubmitParameters?: string;

}

/**
 * Converts an object of type 'EmRcontainersSparkSubmitJobDriver' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersSparkSubmitJobDriver(obj: EmRcontainersSparkSubmitJobDriver | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'entryPoint': obj.entryPoint,
    'entryPointArguments': obj.entryPointArguments?.map(y => y),
    'sparkSubmitParameters': obj.sparkSubmitParameters,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersCloudWatchMonitoringConfiguration
 */
export interface EmRcontainersCloudWatchMonitoringConfiguration {
  /**
   * @schema EmRcontainersCloudWatchMonitoringConfiguration#logGroupName
   */
  readonly logGroupName: string;

  /**
   * @schema EmRcontainersCloudWatchMonitoringConfiguration#logStreamNamePrefix
   */
  readonly logStreamNamePrefix?: string;

}

/**
 * Converts an object of type 'EmRcontainersCloudWatchMonitoringConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersCloudWatchMonitoringConfiguration(obj: EmRcontainersCloudWatchMonitoringConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'logGroupName': obj.logGroupName,
    'logStreamNamePrefix': obj.logStreamNamePrefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersS3MonitoringConfiguration
 */
export interface EmRcontainersS3MonitoringConfiguration {
  /**
   * @schema EmRcontainersS3MonitoringConfiguration#logUri
   */
  readonly logUri: string;

}

/**
 * Converts an object of type 'EmRcontainersS3MonitoringConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersS3MonitoringConfiguration(obj: EmRcontainersS3MonitoringConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'logUri': obj.logUri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EmRcontainersEksInfo
 */
export interface EmRcontainersEksInfo {
  /**
   * @schema EmRcontainersEksInfo#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'EmRcontainersEksInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EmRcontainersEksInfo(obj: EmRcontainersEksInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
