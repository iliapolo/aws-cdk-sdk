/**
 * @schema DaxCreateClusterRequest
 */
export interface DaxCreateClusterRequest {
  /**
   * @schema DaxCreateClusterRequest#ClusterName
   */
  readonly clusterName?: string;

  /**
   * @schema DaxCreateClusterRequest#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema DaxCreateClusterRequest#Description
   */
  readonly description?: string;

  /**
   * @schema DaxCreateClusterRequest#ReplicationFactor
   */
  readonly replicationFactor?: number;

  /**
   * @schema DaxCreateClusterRequest#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema DaxCreateClusterRequest#SubnetGroupName
   */
  readonly subnetGroupName?: string;

  /**
   * @schema DaxCreateClusterRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema DaxCreateClusterRequest#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema DaxCreateClusterRequest#NotificationTopicArn
   */
  readonly notificationTopicArn?: string;

  /**
   * @schema DaxCreateClusterRequest#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema DaxCreateClusterRequest#ParameterGroupName
   */
  readonly parameterGroupName?: string;

  /**
   * @schema DaxCreateClusterRequest#Tags
   */
  readonly tags?: DaxTag[];

  /**
   * @schema DaxCreateClusterRequest#SSESpecification
   */
  readonly sseSpecification?: DaxsseSpecification;

  /**
   * @schema DaxCreateClusterRequest#ClusterEndpointEncryptionType
   */
  readonly clusterEndpointEncryptionType?: string;

}

/**
 * Converts an object of type 'DaxCreateClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxCreateClusterRequest(obj: DaxCreateClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterName': obj.clusterName,
    'NodeType': obj.nodeType,
    'Description': obj.description,
    'ReplicationFactor': obj.replicationFactor,
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'SubnetGroupName': obj.subnetGroupName,
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'NotificationTopicArn': obj.notificationTopicArn,
    'IamRoleArn': obj.iamRoleArn,
    'ParameterGroupName': obj.parameterGroupName,
    'Tags': obj.tags?.map(y => toJson_DaxTag(y)),
    'SSESpecification': toJson_DaxsseSpecification(obj.sseSpecification),
    'ClusterEndpointEncryptionType': obj.clusterEndpointEncryptionType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxCreateClusterResponse
 */
export interface DaxCreateClusterResponse {
  /**
   * @schema DaxCreateClusterResponse#Cluster
   */
  readonly cluster?: DaxCluster;

}

/**
 * Converts an object of type 'DaxCreateClusterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxCreateClusterResponse(obj: DaxCreateClusterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cluster': toJson_DaxCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxCreateParameterGroupRequest
 */
export interface DaxCreateParameterGroupRequest {
  /**
   * @schema DaxCreateParameterGroupRequest#ParameterGroupName
   */
  readonly parameterGroupName?: string;

  /**
   * @schema DaxCreateParameterGroupRequest#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'DaxCreateParameterGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxCreateParameterGroupRequest(obj: DaxCreateParameterGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterGroupName': obj.parameterGroupName,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxCreateParameterGroupResponse
 */
export interface DaxCreateParameterGroupResponse {
  /**
   * @schema DaxCreateParameterGroupResponse#ParameterGroup
   */
  readonly parameterGroup?: DaxParameterGroup;

}

/**
 * Converts an object of type 'DaxCreateParameterGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxCreateParameterGroupResponse(obj: DaxCreateParameterGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterGroup': toJson_DaxParameterGroup(obj.parameterGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxCreateSubnetGroupRequest
 */
export interface DaxCreateSubnetGroupRequest {
  /**
   * @schema DaxCreateSubnetGroupRequest#SubnetGroupName
   */
  readonly subnetGroupName?: string;

  /**
   * @schema DaxCreateSubnetGroupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema DaxCreateSubnetGroupRequest#SubnetIds
   */
  readonly subnetIds?: string[];

}

/**
 * Converts an object of type 'DaxCreateSubnetGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxCreateSubnetGroupRequest(obj: DaxCreateSubnetGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetGroupName': obj.subnetGroupName,
    'Description': obj.description,
    'SubnetIds': obj.subnetIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxCreateSubnetGroupResponse
 */
export interface DaxCreateSubnetGroupResponse {
  /**
   * @schema DaxCreateSubnetGroupResponse#SubnetGroup
   */
  readonly subnetGroup?: DaxSubnetGroup;

}

/**
 * Converts an object of type 'DaxCreateSubnetGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxCreateSubnetGroupResponse(obj: DaxCreateSubnetGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetGroup': toJson_DaxSubnetGroup(obj.subnetGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxDecreaseReplicationFactorRequest
 */
export interface DaxDecreaseReplicationFactorRequest {
  /**
   * @schema DaxDecreaseReplicationFactorRequest#ClusterName
   */
  readonly clusterName?: string;

  /**
   * @schema DaxDecreaseReplicationFactorRequest#NewReplicationFactor
   */
  readonly newReplicationFactor?: number;

  /**
   * @schema DaxDecreaseReplicationFactorRequest#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema DaxDecreaseReplicationFactorRequest#NodeIdsToRemove
   */
  readonly nodeIdsToRemove?: string[];

}

/**
 * Converts an object of type 'DaxDecreaseReplicationFactorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxDecreaseReplicationFactorRequest(obj: DaxDecreaseReplicationFactorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterName': obj.clusterName,
    'NewReplicationFactor': obj.newReplicationFactor,
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'NodeIdsToRemove': obj.nodeIdsToRemove?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxDecreaseReplicationFactorResponse
 */
export interface DaxDecreaseReplicationFactorResponse {
  /**
   * @schema DaxDecreaseReplicationFactorResponse#Cluster
   */
  readonly cluster?: DaxCluster;

}

/**
 * Converts an object of type 'DaxDecreaseReplicationFactorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxDecreaseReplicationFactorResponse(obj: DaxDecreaseReplicationFactorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cluster': toJson_DaxCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxDeleteClusterRequest
 */
export interface DaxDeleteClusterRequest {
  /**
   * @schema DaxDeleteClusterRequest#ClusterName
   */
  readonly clusterName?: string;

}

/**
 * Converts an object of type 'DaxDeleteClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxDeleteClusterRequest(obj: DaxDeleteClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterName': obj.clusterName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxDeleteClusterResponse
 */
export interface DaxDeleteClusterResponse {
  /**
   * @schema DaxDeleteClusterResponse#Cluster
   */
  readonly cluster?: DaxCluster;

}

/**
 * Converts an object of type 'DaxDeleteClusterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxDeleteClusterResponse(obj: DaxDeleteClusterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cluster': toJson_DaxCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxDeleteParameterGroupRequest
 */
export interface DaxDeleteParameterGroupRequest {
  /**
   * @schema DaxDeleteParameterGroupRequest#ParameterGroupName
   */
  readonly parameterGroupName?: string;

}

/**
 * Converts an object of type 'DaxDeleteParameterGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxDeleteParameterGroupRequest(obj: DaxDeleteParameterGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterGroupName': obj.parameterGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxDeleteParameterGroupResponse
 */
export interface DaxDeleteParameterGroupResponse {
  /**
   * @schema DaxDeleteParameterGroupResponse#DeletionMessage
   */
  readonly deletionMessage?: string;

}

/**
 * Converts an object of type 'DaxDeleteParameterGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxDeleteParameterGroupResponse(obj: DaxDeleteParameterGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeletionMessage': obj.deletionMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxDeleteSubnetGroupRequest
 */
export interface DaxDeleteSubnetGroupRequest {
  /**
   * @schema DaxDeleteSubnetGroupRequest#SubnetGroupName
   */
  readonly subnetGroupName?: string;

}

/**
 * Converts an object of type 'DaxDeleteSubnetGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxDeleteSubnetGroupRequest(obj: DaxDeleteSubnetGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetGroupName': obj.subnetGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxDeleteSubnetGroupResponse
 */
export interface DaxDeleteSubnetGroupResponse {
  /**
   * @schema DaxDeleteSubnetGroupResponse#DeletionMessage
   */
  readonly deletionMessage?: string;

}

/**
 * Converts an object of type 'DaxDeleteSubnetGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxDeleteSubnetGroupResponse(obj: DaxDeleteSubnetGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeletionMessage': obj.deletionMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxDescribeClustersRequest
 */
export interface DaxDescribeClustersRequest {
  /**
   * @schema DaxDescribeClustersRequest#ClusterNames
   */
  readonly clusterNames?: string[];

  /**
   * @schema DaxDescribeClustersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DaxDescribeClustersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DaxDescribeClustersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxDescribeClustersRequest(obj: DaxDescribeClustersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterNames': obj.clusterNames?.map(y => y),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxDescribeClustersResponse
 */
export interface DaxDescribeClustersResponse {
  /**
   * @schema DaxDescribeClustersResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DaxDescribeClustersResponse#Clusters
   */
  readonly clusters?: DaxCluster[];

}

/**
 * Converts an object of type 'DaxDescribeClustersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxDescribeClustersResponse(obj: DaxDescribeClustersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Clusters': obj.clusters?.map(y => toJson_DaxCluster(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxDescribeDefaultParametersRequest
 */
export interface DaxDescribeDefaultParametersRequest {
  /**
   * @schema DaxDescribeDefaultParametersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DaxDescribeDefaultParametersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DaxDescribeDefaultParametersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxDescribeDefaultParametersRequest(obj: DaxDescribeDefaultParametersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxDescribeDefaultParametersResponse
 */
export interface DaxDescribeDefaultParametersResponse {
  /**
   * @schema DaxDescribeDefaultParametersResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DaxDescribeDefaultParametersResponse#Parameters
   */
  readonly parameters?: DaxParameter[];

}

/**
 * Converts an object of type 'DaxDescribeDefaultParametersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxDescribeDefaultParametersResponse(obj: DaxDescribeDefaultParametersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Parameters': obj.parameters?.map(y => toJson_DaxParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxDescribeEventsRequest
 */
export interface DaxDescribeEventsRequest {
  /**
   * @schema DaxDescribeEventsRequest#SourceName
   */
  readonly sourceName?: string;

  /**
   * @schema DaxDescribeEventsRequest#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema DaxDescribeEventsRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema DaxDescribeEventsRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema DaxDescribeEventsRequest#Duration
   */
  readonly duration?: number;

  /**
   * @schema DaxDescribeEventsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DaxDescribeEventsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DaxDescribeEventsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxDescribeEventsRequest(obj: DaxDescribeEventsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceName': obj.sourceName,
    'SourceType': obj.sourceType,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'Duration': obj.duration,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxDescribeEventsResponse
 */
export interface DaxDescribeEventsResponse {
  /**
   * @schema DaxDescribeEventsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DaxDescribeEventsResponse#Events
   */
  readonly events?: DaxEvent[];

}

/**
 * Converts an object of type 'DaxDescribeEventsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxDescribeEventsResponse(obj: DaxDescribeEventsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Events': obj.events?.map(y => toJson_DaxEvent(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxDescribeParameterGroupsRequest
 */
export interface DaxDescribeParameterGroupsRequest {
  /**
   * @schema DaxDescribeParameterGroupsRequest#ParameterGroupNames
   */
  readonly parameterGroupNames?: string[];

  /**
   * @schema DaxDescribeParameterGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DaxDescribeParameterGroupsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DaxDescribeParameterGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxDescribeParameterGroupsRequest(obj: DaxDescribeParameterGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterGroupNames': obj.parameterGroupNames?.map(y => y),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxDescribeParameterGroupsResponse
 */
export interface DaxDescribeParameterGroupsResponse {
  /**
   * @schema DaxDescribeParameterGroupsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DaxDescribeParameterGroupsResponse#ParameterGroups
   */
  readonly parameterGroups?: DaxParameterGroup[];

}

/**
 * Converts an object of type 'DaxDescribeParameterGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxDescribeParameterGroupsResponse(obj: DaxDescribeParameterGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'ParameterGroups': obj.parameterGroups?.map(y => toJson_DaxParameterGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxDescribeParametersRequest
 */
export interface DaxDescribeParametersRequest {
  /**
   * @schema DaxDescribeParametersRequest#ParameterGroupName
   */
  readonly parameterGroupName?: string;

  /**
   * @schema DaxDescribeParametersRequest#Source
   */
  readonly source?: string;

  /**
   * @schema DaxDescribeParametersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DaxDescribeParametersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DaxDescribeParametersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxDescribeParametersRequest(obj: DaxDescribeParametersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterGroupName': obj.parameterGroupName,
    'Source': obj.source,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxDescribeParametersResponse
 */
export interface DaxDescribeParametersResponse {
  /**
   * @schema DaxDescribeParametersResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DaxDescribeParametersResponse#Parameters
   */
  readonly parameters?: DaxParameter[];

}

/**
 * Converts an object of type 'DaxDescribeParametersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxDescribeParametersResponse(obj: DaxDescribeParametersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Parameters': obj.parameters?.map(y => toJson_DaxParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxDescribeSubnetGroupsRequest
 */
export interface DaxDescribeSubnetGroupsRequest {
  /**
   * @schema DaxDescribeSubnetGroupsRequest#SubnetGroupNames
   */
  readonly subnetGroupNames?: string[];

  /**
   * @schema DaxDescribeSubnetGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DaxDescribeSubnetGroupsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DaxDescribeSubnetGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxDescribeSubnetGroupsRequest(obj: DaxDescribeSubnetGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetGroupNames': obj.subnetGroupNames?.map(y => y),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxDescribeSubnetGroupsResponse
 */
export interface DaxDescribeSubnetGroupsResponse {
  /**
   * @schema DaxDescribeSubnetGroupsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DaxDescribeSubnetGroupsResponse#SubnetGroups
   */
  readonly subnetGroups?: DaxSubnetGroup[];

}

/**
 * Converts an object of type 'DaxDescribeSubnetGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxDescribeSubnetGroupsResponse(obj: DaxDescribeSubnetGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'SubnetGroups': obj.subnetGroups?.map(y => toJson_DaxSubnetGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxIncreaseReplicationFactorRequest
 */
export interface DaxIncreaseReplicationFactorRequest {
  /**
   * @schema DaxIncreaseReplicationFactorRequest#ClusterName
   */
  readonly clusterName?: string;

  /**
   * @schema DaxIncreaseReplicationFactorRequest#NewReplicationFactor
   */
  readonly newReplicationFactor?: number;

  /**
   * @schema DaxIncreaseReplicationFactorRequest#AvailabilityZones
   */
  readonly availabilityZones?: string[];

}

/**
 * Converts an object of type 'DaxIncreaseReplicationFactorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxIncreaseReplicationFactorRequest(obj: DaxIncreaseReplicationFactorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterName': obj.clusterName,
    'NewReplicationFactor': obj.newReplicationFactor,
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxIncreaseReplicationFactorResponse
 */
export interface DaxIncreaseReplicationFactorResponse {
  /**
   * @schema DaxIncreaseReplicationFactorResponse#Cluster
   */
  readonly cluster?: DaxCluster;

}

/**
 * Converts an object of type 'DaxIncreaseReplicationFactorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxIncreaseReplicationFactorResponse(obj: DaxIncreaseReplicationFactorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cluster': toJson_DaxCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxListTagsRequest
 */
export interface DaxListTagsRequest {
  /**
   * @schema DaxListTagsRequest#ResourceName
   */
  readonly resourceName?: string;

  /**
   * @schema DaxListTagsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DaxListTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxListTagsRequest(obj: DaxListTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceName': obj.resourceName,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxListTagsResponse
 */
export interface DaxListTagsResponse {
  /**
   * @schema DaxListTagsResponse#Tags
   */
  readonly tags?: DaxTag[];

  /**
   * @schema DaxListTagsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DaxListTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxListTagsResponse(obj: DaxListTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_DaxTag(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxRebootNodeRequest
 */
export interface DaxRebootNodeRequest {
  /**
   * @schema DaxRebootNodeRequest#ClusterName
   */
  readonly clusterName?: string;

  /**
   * @schema DaxRebootNodeRequest#NodeId
   */
  readonly nodeId?: string;

}

/**
 * Converts an object of type 'DaxRebootNodeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxRebootNodeRequest(obj: DaxRebootNodeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterName': obj.clusterName,
    'NodeId': obj.nodeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxRebootNodeResponse
 */
export interface DaxRebootNodeResponse {
  /**
   * @schema DaxRebootNodeResponse#Cluster
   */
  readonly cluster?: DaxCluster;

}

/**
 * Converts an object of type 'DaxRebootNodeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxRebootNodeResponse(obj: DaxRebootNodeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cluster': toJson_DaxCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxTagResourceRequest
 */
export interface DaxTagResourceRequest {
  /**
   * @schema DaxTagResourceRequest#ResourceName
   */
  readonly resourceName?: string;

  /**
   * @schema DaxTagResourceRequest#Tags
   */
  readonly tags?: DaxTag[];

}

/**
 * Converts an object of type 'DaxTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxTagResourceRequest(obj: DaxTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceName': obj.resourceName,
    'Tags': obj.tags?.map(y => toJson_DaxTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxTagResourceResponse
 */
export interface DaxTagResourceResponse {
  /**
   * @schema DaxTagResourceResponse#Tags
   */
  readonly tags?: DaxTag[];

}

/**
 * Converts an object of type 'DaxTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxTagResourceResponse(obj: DaxTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_DaxTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxUntagResourceRequest
 */
export interface DaxUntagResourceRequest {
  /**
   * @schema DaxUntagResourceRequest#ResourceName
   */
  readonly resourceName?: string;

  /**
   * @schema DaxUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'DaxUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxUntagResourceRequest(obj: DaxUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceName': obj.resourceName,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxUntagResourceResponse
 */
export interface DaxUntagResourceResponse {
  /**
   * @schema DaxUntagResourceResponse#Tags
   */
  readonly tags?: DaxTag[];

}

/**
 * Converts an object of type 'DaxUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxUntagResourceResponse(obj: DaxUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_DaxTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxUpdateClusterRequest
 */
export interface DaxUpdateClusterRequest {
  /**
   * @schema DaxUpdateClusterRequest#ClusterName
   */
  readonly clusterName?: string;

  /**
   * @schema DaxUpdateClusterRequest#Description
   */
  readonly description?: string;

  /**
   * @schema DaxUpdateClusterRequest#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema DaxUpdateClusterRequest#NotificationTopicArn
   */
  readonly notificationTopicArn?: string;

  /**
   * @schema DaxUpdateClusterRequest#NotificationTopicStatus
   */
  readonly notificationTopicStatus?: string;

  /**
   * @schema DaxUpdateClusterRequest#ParameterGroupName
   */
  readonly parameterGroupName?: string;

  /**
   * @schema DaxUpdateClusterRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * Converts an object of type 'DaxUpdateClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxUpdateClusterRequest(obj: DaxUpdateClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterName': obj.clusterName,
    'Description': obj.description,
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'NotificationTopicArn': obj.notificationTopicArn,
    'NotificationTopicStatus': obj.notificationTopicStatus,
    'ParameterGroupName': obj.parameterGroupName,
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxUpdateClusterResponse
 */
export interface DaxUpdateClusterResponse {
  /**
   * @schema DaxUpdateClusterResponse#Cluster
   */
  readonly cluster?: DaxCluster;

}

/**
 * Converts an object of type 'DaxUpdateClusterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxUpdateClusterResponse(obj: DaxUpdateClusterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cluster': toJson_DaxCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxUpdateParameterGroupRequest
 */
export interface DaxUpdateParameterGroupRequest {
  /**
   * @schema DaxUpdateParameterGroupRequest#ParameterGroupName
   */
  readonly parameterGroupName?: string;

  /**
   * @schema DaxUpdateParameterGroupRequest#ParameterNameValues
   */
  readonly parameterNameValues?: DaxParameterNameValue[];

}

/**
 * Converts an object of type 'DaxUpdateParameterGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxUpdateParameterGroupRequest(obj: DaxUpdateParameterGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterGroupName': obj.parameterGroupName,
    'ParameterNameValues': obj.parameterNameValues?.map(y => toJson_DaxParameterNameValue(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxUpdateParameterGroupResponse
 */
export interface DaxUpdateParameterGroupResponse {
  /**
   * @schema DaxUpdateParameterGroupResponse#ParameterGroup
   */
  readonly parameterGroup?: DaxParameterGroup;

}

/**
 * Converts an object of type 'DaxUpdateParameterGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxUpdateParameterGroupResponse(obj: DaxUpdateParameterGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterGroup': toJson_DaxParameterGroup(obj.parameterGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxUpdateSubnetGroupRequest
 */
export interface DaxUpdateSubnetGroupRequest {
  /**
   * @schema DaxUpdateSubnetGroupRequest#SubnetGroupName
   */
  readonly subnetGroupName?: string;

  /**
   * @schema DaxUpdateSubnetGroupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema DaxUpdateSubnetGroupRequest#SubnetIds
   */
  readonly subnetIds?: string[];

}

/**
 * Converts an object of type 'DaxUpdateSubnetGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxUpdateSubnetGroupRequest(obj: DaxUpdateSubnetGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetGroupName': obj.subnetGroupName,
    'Description': obj.description,
    'SubnetIds': obj.subnetIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxUpdateSubnetGroupResponse
 */
export interface DaxUpdateSubnetGroupResponse {
  /**
   * @schema DaxUpdateSubnetGroupResponse#SubnetGroup
   */
  readonly subnetGroup?: DaxSubnetGroup;

}

/**
 * Converts an object of type 'DaxUpdateSubnetGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxUpdateSubnetGroupResponse(obj: DaxUpdateSubnetGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetGroup': toJson_DaxSubnetGroup(obj.subnetGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxTag
 */
export interface DaxTag {
  /**
   * @schema DaxTag#Key
   */
  readonly key?: string;

  /**
   * @schema DaxTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'DaxTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxTag(obj: DaxTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxsseSpecification
 */
export interface DaxsseSpecification {
  /**
   * @schema DaxsseSpecification#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'DaxsseSpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxsseSpecification(obj: DaxsseSpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxCluster
 */
export interface DaxCluster {
  /**
   * @schema DaxCluster#ClusterName
   */
  readonly clusterName?: string;

  /**
   * @schema DaxCluster#Description
   */
  readonly description?: string;

  /**
   * @schema DaxCluster#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema DaxCluster#TotalNodes
   */
  readonly totalNodes?: number;

  /**
   * @schema DaxCluster#ActiveNodes
   */
  readonly activeNodes?: number;

  /**
   * @schema DaxCluster#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema DaxCluster#Status
   */
  readonly status?: string;

  /**
   * @schema DaxCluster#ClusterDiscoveryEndpoint
   */
  readonly clusterDiscoveryEndpoint?: DaxEndpoint;

  /**
   * @schema DaxCluster#NodeIdsToRemove
   */
  readonly nodeIdsToRemove?: string[];

  /**
   * @schema DaxCluster#Nodes
   */
  readonly nodes?: DaxNode[];

  /**
   * @schema DaxCluster#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema DaxCluster#NotificationConfiguration
   */
  readonly notificationConfiguration?: DaxNotificationConfiguration;

  /**
   * @schema DaxCluster#SubnetGroup
   */
  readonly subnetGroup?: string;

  /**
   * @schema DaxCluster#SecurityGroups
   */
  readonly securityGroups?: DaxSecurityGroupMembership[];

  /**
   * @schema DaxCluster#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema DaxCluster#ParameterGroup
   */
  readonly parameterGroup?: DaxParameterGroupStatus;

  /**
   * @schema DaxCluster#SSEDescription
   */
  readonly sseDescription?: DaxsseDescription;

  /**
   * @schema DaxCluster#ClusterEndpointEncryptionType
   */
  readonly clusterEndpointEncryptionType?: string;

}

/**
 * Converts an object of type 'DaxCluster' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxCluster(obj: DaxCluster | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterName': obj.clusterName,
    'Description': obj.description,
    'ClusterArn': obj.clusterArn,
    'TotalNodes': obj.totalNodes,
    'ActiveNodes': obj.activeNodes,
    'NodeType': obj.nodeType,
    'Status': obj.status,
    'ClusterDiscoveryEndpoint': toJson_DaxEndpoint(obj.clusterDiscoveryEndpoint),
    'NodeIdsToRemove': obj.nodeIdsToRemove?.map(y => y),
    'Nodes': obj.nodes?.map(y => toJson_DaxNode(y)),
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'NotificationConfiguration': toJson_DaxNotificationConfiguration(obj.notificationConfiguration),
    'SubnetGroup': obj.subnetGroup,
    'SecurityGroups': obj.securityGroups?.map(y => toJson_DaxSecurityGroupMembership(y)),
    'IamRoleArn': obj.iamRoleArn,
    'ParameterGroup': toJson_DaxParameterGroupStatus(obj.parameterGroup),
    'SSEDescription': toJson_DaxsseDescription(obj.sseDescription),
    'ClusterEndpointEncryptionType': obj.clusterEndpointEncryptionType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxParameterGroup
 */
export interface DaxParameterGroup {
  /**
   * @schema DaxParameterGroup#ParameterGroupName
   */
  readonly parameterGroupName?: string;

  /**
   * @schema DaxParameterGroup#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'DaxParameterGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxParameterGroup(obj: DaxParameterGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterGroupName': obj.parameterGroupName,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxSubnetGroup
 */
export interface DaxSubnetGroup {
  /**
   * @schema DaxSubnetGroup#SubnetGroupName
   */
  readonly subnetGroupName?: string;

  /**
   * @schema DaxSubnetGroup#Description
   */
  readonly description?: string;

  /**
   * @schema DaxSubnetGroup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema DaxSubnetGroup#Subnets
   */
  readonly subnets?: DaxSubnet[];

}

/**
 * Converts an object of type 'DaxSubnetGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxSubnetGroup(obj: DaxSubnetGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetGroupName': obj.subnetGroupName,
    'Description': obj.description,
    'VpcId': obj.vpcId,
    'Subnets': obj.subnets?.map(y => toJson_DaxSubnet(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxParameter
 */
export interface DaxParameter {
  /**
   * @schema DaxParameter#ParameterName
   */
  readonly parameterName?: string;

  /**
   * @schema DaxParameter#ParameterType
   */
  readonly parameterType?: string;

  /**
   * @schema DaxParameter#ParameterValue
   */
  readonly parameterValue?: string;

  /**
   * @schema DaxParameter#NodeTypeSpecificValues
   */
  readonly nodeTypeSpecificValues?: DaxNodeTypeSpecificValue[];

  /**
   * @schema DaxParameter#Description
   */
  readonly description?: string;

  /**
   * @schema DaxParameter#Source
   */
  readonly source?: string;

  /**
   * @schema DaxParameter#DataType
   */
  readonly dataType?: string;

  /**
   * @schema DaxParameter#AllowedValues
   */
  readonly allowedValues?: string;

  /**
   * @schema DaxParameter#IsModifiable
   */
  readonly isModifiable?: string;

  /**
   * @schema DaxParameter#ChangeType
   */
  readonly changeType?: string;

}

/**
 * Converts an object of type 'DaxParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxParameter(obj: DaxParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterName': obj.parameterName,
    'ParameterType': obj.parameterType,
    'ParameterValue': obj.parameterValue,
    'NodeTypeSpecificValues': obj.nodeTypeSpecificValues?.map(y => toJson_DaxNodeTypeSpecificValue(y)),
    'Description': obj.description,
    'Source': obj.source,
    'DataType': obj.dataType,
    'AllowedValues': obj.allowedValues,
    'IsModifiable': obj.isModifiable,
    'ChangeType': obj.changeType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxEvent
 */
export interface DaxEvent {
  /**
   * @schema DaxEvent#SourceName
   */
  readonly sourceName?: string;

  /**
   * @schema DaxEvent#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema DaxEvent#Message
   */
  readonly message?: string;

  /**
   * @schema DaxEvent#Date
   */
  readonly date?: string;

}

/**
 * Converts an object of type 'DaxEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxEvent(obj: DaxEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceName': obj.sourceName,
    'SourceType': obj.sourceType,
    'Message': obj.message,
    'Date': obj.date,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxParameterNameValue
 */
export interface DaxParameterNameValue {
  /**
   * @schema DaxParameterNameValue#ParameterName
   */
  readonly parameterName?: string;

  /**
   * @schema DaxParameterNameValue#ParameterValue
   */
  readonly parameterValue?: string;

}

/**
 * Converts an object of type 'DaxParameterNameValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxParameterNameValue(obj: DaxParameterNameValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterName': obj.parameterName,
    'ParameterValue': obj.parameterValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxEndpoint
 */
export interface DaxEndpoint {
  /**
   * @schema DaxEndpoint#Address
   */
  readonly address?: string;

  /**
   * @schema DaxEndpoint#Port
   */
  readonly port?: number;

  /**
   * @schema DaxEndpoint#URL
   */
  readonly url?: string;

}

/**
 * Converts an object of type 'DaxEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxEndpoint(obj: DaxEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Address': obj.address,
    'Port': obj.port,
    'URL': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxNode
 */
export interface DaxNode {
  /**
   * @schema DaxNode#NodeId
   */
  readonly nodeId?: string;

  /**
   * @schema DaxNode#Endpoint
   */
  readonly endpoint?: DaxEndpoint;

  /**
   * @schema DaxNode#NodeCreateTime
   */
  readonly nodeCreateTime?: string;

  /**
   * @schema DaxNode#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema DaxNode#NodeStatus
   */
  readonly nodeStatus?: string;

  /**
   * @schema DaxNode#ParameterGroupStatus
   */
  readonly parameterGroupStatus?: string;

}

/**
 * Converts an object of type 'DaxNode' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxNode(obj: DaxNode | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NodeId': obj.nodeId,
    'Endpoint': toJson_DaxEndpoint(obj.endpoint),
    'NodeCreateTime': obj.nodeCreateTime,
    'AvailabilityZone': obj.availabilityZone,
    'NodeStatus': obj.nodeStatus,
    'ParameterGroupStatus': obj.parameterGroupStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxNotificationConfiguration
 */
export interface DaxNotificationConfiguration {
  /**
   * @schema DaxNotificationConfiguration#TopicArn
   */
  readonly topicArn?: string;

  /**
   * @schema DaxNotificationConfiguration#TopicStatus
   */
  readonly topicStatus?: string;

}

/**
 * Converts an object of type 'DaxNotificationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxNotificationConfiguration(obj: DaxNotificationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TopicArn': obj.topicArn,
    'TopicStatus': obj.topicStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxSecurityGroupMembership
 */
export interface DaxSecurityGroupMembership {
  /**
   * @schema DaxSecurityGroupMembership#SecurityGroupIdentifier
   */
  readonly securityGroupIdentifier?: string;

  /**
   * @schema DaxSecurityGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'DaxSecurityGroupMembership' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxSecurityGroupMembership(obj: DaxSecurityGroupMembership | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecurityGroupIdentifier': obj.securityGroupIdentifier,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxParameterGroupStatus
 */
export interface DaxParameterGroupStatus {
  /**
   * @schema DaxParameterGroupStatus#ParameterGroupName
   */
  readonly parameterGroupName?: string;

  /**
   * @schema DaxParameterGroupStatus#ParameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

  /**
   * @schema DaxParameterGroupStatus#NodeIdsToReboot
   */
  readonly nodeIdsToReboot?: string[];

}

/**
 * Converts an object of type 'DaxParameterGroupStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxParameterGroupStatus(obj: DaxParameterGroupStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterGroupName': obj.parameterGroupName,
    'ParameterApplyStatus': obj.parameterApplyStatus,
    'NodeIdsToReboot': obj.nodeIdsToReboot?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxsseDescription
 */
export interface DaxsseDescription {
  /**
   * @schema DaxsseDescription#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'DaxsseDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxsseDescription(obj: DaxsseDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxSubnet
 */
export interface DaxSubnet {
  /**
   * @schema DaxSubnet#SubnetIdentifier
   */
  readonly subnetIdentifier?: string;

  /**
   * @schema DaxSubnet#SubnetAvailabilityZone
   */
  readonly subnetAvailabilityZone?: string;

}

/**
 * Converts an object of type 'DaxSubnet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxSubnet(obj: DaxSubnet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetIdentifier': obj.subnetIdentifier,
    'SubnetAvailabilityZone': obj.subnetAvailabilityZone,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DaxNodeTypeSpecificValue
 */
export interface DaxNodeTypeSpecificValue {
  /**
   * @schema DaxNodeTypeSpecificValue#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema DaxNodeTypeSpecificValue#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'DaxNodeTypeSpecificValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DaxNodeTypeSpecificValue(obj: DaxNodeTypeSpecificValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NodeType': obj.nodeType,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
