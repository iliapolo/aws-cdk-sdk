/**
 * @schema CreateClusterRequest
 */
export interface CreateClusterRequest {
  /**
   * @schema CreateClusterRequest#ClusterName
   */
  readonly clusterName: string;

  /**
   * @schema CreateClusterRequest#NodeType
   */
  readonly nodeType: string;

  /**
   * @schema CreateClusterRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateClusterRequest#ReplicationFactor
   */
  readonly replicationFactor: number;

  /**
   * @schema CreateClusterRequest#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema CreateClusterRequest#SubnetGroupName
   */
  readonly subnetGroupName?: string;

  /**
   * @schema CreateClusterRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema CreateClusterRequest#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema CreateClusterRequest#NotificationTopicArn
   */
  readonly notificationTopicArn?: string;

  /**
   * @schema CreateClusterRequest#IamRoleArn
   */
  readonly iamRoleArn: string;

  /**
   * @schema CreateClusterRequest#ParameterGroupName
   */
  readonly parameterGroupName?: string;

  /**
   * @schema CreateClusterRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateClusterRequest#SSESpecification
   */
  readonly sseSpecification?: SseSpecification;

}

/**
 * @schema CreateClusterResponse
 */
export interface CreateClusterResponse {
  /**
   * @schema CreateClusterResponse#Cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema CreateParameterGroupRequest
 */
export interface CreateParameterGroupRequest {
  /**
   * @schema CreateParameterGroupRequest#ParameterGroupName
   */
  readonly parameterGroupName: string;

  /**
   * @schema CreateParameterGroupRequest#Description
   */
  readonly description?: string;

}

/**
 * @schema CreateParameterGroupResponse
 */
export interface CreateParameterGroupResponse {
  /**
   * @schema CreateParameterGroupResponse#ParameterGroup
   */
  readonly parameterGroup?: ParameterGroup;

}

/**
 * @schema CreateSubnetGroupRequest
 */
export interface CreateSubnetGroupRequest {
  /**
   * @schema CreateSubnetGroupRequest#SubnetGroupName
   */
  readonly subnetGroupName: string;

  /**
   * @schema CreateSubnetGroupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateSubnetGroupRequest#SubnetIds
   */
  readonly subnetIds: string[];

}

/**
 * @schema CreateSubnetGroupResponse
 */
export interface CreateSubnetGroupResponse {
  /**
   * @schema CreateSubnetGroupResponse#SubnetGroup
   */
  readonly subnetGroup?: SubnetGroup;

}

/**
 * @schema DecreaseReplicationFactorRequest
 */
export interface DecreaseReplicationFactorRequest {
  /**
   * @schema DecreaseReplicationFactorRequest#ClusterName
   */
  readonly clusterName: string;

  /**
   * @schema DecreaseReplicationFactorRequest#NewReplicationFactor
   */
  readonly newReplicationFactor: number;

  /**
   * @schema DecreaseReplicationFactorRequest#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema DecreaseReplicationFactorRequest#NodeIdsToRemove
   */
  readonly nodeIdsToRemove?: string[];

}

/**
 * @schema DecreaseReplicationFactorResponse
 */
export interface DecreaseReplicationFactorResponse {
  /**
   * @schema DecreaseReplicationFactorResponse#Cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema DeleteClusterRequest
 */
export interface DeleteClusterRequest {
  /**
   * @schema DeleteClusterRequest#ClusterName
   */
  readonly clusterName: string;

}

/**
 * @schema DeleteClusterResponse
 */
export interface DeleteClusterResponse {
  /**
   * @schema DeleteClusterResponse#Cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema DeleteParameterGroupRequest
 */
export interface DeleteParameterGroupRequest {
  /**
   * @schema DeleteParameterGroupRequest#ParameterGroupName
   */
  readonly parameterGroupName: string;

}

/**
 * @schema DeleteParameterGroupResponse
 */
export interface DeleteParameterGroupResponse {
  /**
   * @schema DeleteParameterGroupResponse#DeletionMessage
   */
  readonly deletionMessage?: string;

}

/**
 * @schema DeleteSubnetGroupRequest
 */
export interface DeleteSubnetGroupRequest {
  /**
   * @schema DeleteSubnetGroupRequest#SubnetGroupName
   */
  readonly subnetGroupName: string;

}

/**
 * @schema DeleteSubnetGroupResponse
 */
export interface DeleteSubnetGroupResponse {
  /**
   * @schema DeleteSubnetGroupResponse#DeletionMessage
   */
  readonly deletionMessage?: string;

}

/**
 * @schema DescribeClustersRequest
 */
export interface DescribeClustersRequest {
  /**
   * @schema DescribeClustersRequest#ClusterNames
   */
  readonly clusterNames?: string[];

  /**
   * @schema DescribeClustersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeClustersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeClustersResponse
 */
export interface DescribeClustersResponse {
  /**
   * @schema DescribeClustersResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeClustersResponse#Clusters
   */
  readonly clusters?: Cluster[];

}

/**
 * @schema DescribeDefaultParametersRequest
 */
export interface DescribeDefaultParametersRequest {
  /**
   * @schema DescribeDefaultParametersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeDefaultParametersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeDefaultParametersResponse
 */
export interface DescribeDefaultParametersResponse {
  /**
   * @schema DescribeDefaultParametersResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeDefaultParametersResponse#Parameters
   */
  readonly parameters?: Parameter[];

}

/**
 * @schema DescribeEventsRequest
 */
export interface DescribeEventsRequest {
  /**
   * @schema DescribeEventsRequest#SourceName
   */
  readonly sourceName?: string;

  /**
   * @schema DescribeEventsRequest#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema DescribeEventsRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema DescribeEventsRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema DescribeEventsRequest#Duration
   */
  readonly duration?: number;

  /**
   * @schema DescribeEventsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeEventsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeEventsResponse
 */
export interface DescribeEventsResponse {
  /**
   * @schema DescribeEventsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeEventsResponse#Events
   */
  readonly events?: Event[];

}

/**
 * @schema DescribeParameterGroupsRequest
 */
export interface DescribeParameterGroupsRequest {
  /**
   * @schema DescribeParameterGroupsRequest#ParameterGroupNames
   */
  readonly parameterGroupNames?: string[];

  /**
   * @schema DescribeParameterGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeParameterGroupsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeParameterGroupsResponse
 */
export interface DescribeParameterGroupsResponse {
  /**
   * @schema DescribeParameterGroupsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeParameterGroupsResponse#ParameterGroups
   */
  readonly parameterGroups?: ParameterGroup[];

}

/**
 * @schema DescribeParametersRequest
 */
export interface DescribeParametersRequest {
  /**
   * @schema DescribeParametersRequest#ParameterGroupName
   */
  readonly parameterGroupName: string;

  /**
   * @schema DescribeParametersRequest#Source
   */
  readonly source?: string;

  /**
   * @schema DescribeParametersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeParametersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeParametersResponse
 */
export interface DescribeParametersResponse {
  /**
   * @schema DescribeParametersResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeParametersResponse#Parameters
   */
  readonly parameters?: Parameter[];

}

/**
 * @schema DescribeSubnetGroupsRequest
 */
export interface DescribeSubnetGroupsRequest {
  /**
   * @schema DescribeSubnetGroupsRequest#SubnetGroupNames
   */
  readonly subnetGroupNames?: string[];

  /**
   * @schema DescribeSubnetGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeSubnetGroupsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeSubnetGroupsResponse
 */
export interface DescribeSubnetGroupsResponse {
  /**
   * @schema DescribeSubnetGroupsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeSubnetGroupsResponse#SubnetGroups
   */
  readonly subnetGroups?: SubnetGroup[];

}

/**
 * @schema IncreaseReplicationFactorRequest
 */
export interface IncreaseReplicationFactorRequest {
  /**
   * @schema IncreaseReplicationFactorRequest#ClusterName
   */
  readonly clusterName: string;

  /**
   * @schema IncreaseReplicationFactorRequest#NewReplicationFactor
   */
  readonly newReplicationFactor: number;

  /**
   * @schema IncreaseReplicationFactorRequest#AvailabilityZones
   */
  readonly availabilityZones?: string[];

}

/**
 * @schema IncreaseReplicationFactorResponse
 */
export interface IncreaseReplicationFactorResponse {
  /**
   * @schema IncreaseReplicationFactorResponse#Cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema ListTagsRequest
 */
export interface ListTagsRequest {
  /**
   * @schema ListTagsRequest#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema ListTagsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsResponse
 */
export interface ListTagsResponse {
  /**
   * @schema ListTagsResponse#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ListTagsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RebootNodeRequest
 */
export interface RebootNodeRequest {
  /**
   * @schema RebootNodeRequest#ClusterName
   */
  readonly clusterName: string;

  /**
   * @schema RebootNodeRequest#NodeId
   */
  readonly nodeId: string;

}

/**
 * @schema RebootNodeResponse
 */
export interface RebootNodeResponse {
  /**
   * @schema RebootNodeResponse#Cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
  /**
   * @schema TagResourceResponse#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
  /**
   * @schema UntagResourceResponse#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema UpdateClusterRequest
 */
export interface UpdateClusterRequest {
  /**
   * @schema UpdateClusterRequest#ClusterName
   */
  readonly clusterName: string;

  /**
   * @schema UpdateClusterRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateClusterRequest#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema UpdateClusterRequest#NotificationTopicArn
   */
  readonly notificationTopicArn?: string;

  /**
   * @schema UpdateClusterRequest#NotificationTopicStatus
   */
  readonly notificationTopicStatus?: string;

  /**
   * @schema UpdateClusterRequest#ParameterGroupName
   */
  readonly parameterGroupName?: string;

  /**
   * @schema UpdateClusterRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * @schema UpdateClusterResponse
 */
export interface UpdateClusterResponse {
  /**
   * @schema UpdateClusterResponse#Cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema UpdateParameterGroupRequest
 */
export interface UpdateParameterGroupRequest {
  /**
   * @schema UpdateParameterGroupRequest#ParameterGroupName
   */
  readonly parameterGroupName: string;

  /**
   * @schema UpdateParameterGroupRequest#ParameterNameValues
   */
  readonly parameterNameValues: ParameterNameValue[];

}

/**
 * @schema UpdateParameterGroupResponse
 */
export interface UpdateParameterGroupResponse {
  /**
   * @schema UpdateParameterGroupResponse#ParameterGroup
   */
  readonly parameterGroup?: ParameterGroup;

}

/**
 * @schema UpdateSubnetGroupRequest
 */
export interface UpdateSubnetGroupRequest {
  /**
   * @schema UpdateSubnetGroupRequest#SubnetGroupName
   */
  readonly subnetGroupName: string;

  /**
   * @schema UpdateSubnetGroupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateSubnetGroupRequest#SubnetIds
   */
  readonly subnetIds?: string[];

}

/**
 * @schema UpdateSubnetGroupResponse
 */
export interface UpdateSubnetGroupResponse {
  /**
   * @schema UpdateSubnetGroupResponse#SubnetGroup
   */
  readonly subnetGroup?: SubnetGroup;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key?: string;

  /**
   * @schema Tag#Value
   */
  readonly value?: string;

}

/**
 * @schema SseSpecification
 */
export interface SseSpecification {
  /**
   * @schema SseSpecification#Enabled
   */
  readonly enabled: boolean;

}

/**
 * @schema Cluster
 */
export interface Cluster {
  /**
   * @schema Cluster#ClusterName
   */
  readonly clusterName?: string;

  /**
   * @schema Cluster#Description
   */
  readonly description?: string;

  /**
   * @schema Cluster#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema Cluster#TotalNodes
   */
  readonly totalNodes?: number;

  /**
   * @schema Cluster#ActiveNodes
   */
  readonly activeNodes?: number;

  /**
   * @schema Cluster#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema Cluster#Status
   */
  readonly status?: string;

  /**
   * @schema Cluster#ClusterDiscoveryEndpoint
   */
  readonly clusterDiscoveryEndpoint?: Endpoint;

  /**
   * @schema Cluster#NodeIdsToRemove
   */
  readonly nodeIdsToRemove?: string[];

  /**
   * @schema Cluster#Nodes
   */
  readonly nodes?: Node[];

  /**
   * @schema Cluster#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema Cluster#NotificationConfiguration
   */
  readonly notificationConfiguration?: NotificationConfiguration;

  /**
   * @schema Cluster#SubnetGroup
   */
  readonly subnetGroup?: string;

  /**
   * @schema Cluster#SecurityGroups
   */
  readonly securityGroups?: SecurityGroupMembership[];

  /**
   * @schema Cluster#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema Cluster#ParameterGroup
   */
  readonly parameterGroup?: ParameterGroupStatus;

  /**
   * @schema Cluster#SSEDescription
   */
  readonly sseDescription?: SseDescription;

}

/**
 * @schema ParameterGroup
 */
export interface ParameterGroup {
  /**
   * @schema ParameterGroup#ParameterGroupName
   */
  readonly parameterGroupName?: string;

  /**
   * @schema ParameterGroup#Description
   */
  readonly description?: string;

}

/**
 * @schema SubnetGroup
 */
export interface SubnetGroup {
  /**
   * @schema SubnetGroup#SubnetGroupName
   */
  readonly subnetGroupName?: string;

  /**
   * @schema SubnetGroup#Description
   */
  readonly description?: string;

  /**
   * @schema SubnetGroup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema SubnetGroup#Subnets
   */
  readonly subnets?: Subnet[];

}

/**
 * @schema Parameter
 */
export interface Parameter {
  /**
   * @schema Parameter#ParameterName
   */
  readonly parameterName?: string;

  /**
   * @schema Parameter#ParameterType
   */
  readonly parameterType?: string;

  /**
   * @schema Parameter#ParameterValue
   */
  readonly parameterValue?: string;

  /**
   * @schema Parameter#NodeTypeSpecificValues
   */
  readonly nodeTypeSpecificValues?: NodeTypeSpecificValue[];

  /**
   * @schema Parameter#Description
   */
  readonly description?: string;

  /**
   * @schema Parameter#Source
   */
  readonly source?: string;

  /**
   * @schema Parameter#DataType
   */
  readonly dataType?: string;

  /**
   * @schema Parameter#AllowedValues
   */
  readonly allowedValues?: string;

  /**
   * @schema Parameter#IsModifiable
   */
  readonly isModifiable?: string;

  /**
   * @schema Parameter#ChangeType
   */
  readonly changeType?: string;

}

/**
 * @schema Event
 */
export interface Event {
  /**
   * @schema Event#SourceName
   */
  readonly sourceName?: string;

  /**
   * @schema Event#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema Event#Message
   */
  readonly message?: string;

  /**
   * @schema Event#Date
   */
  readonly date?: string;

}

/**
 * @schema ParameterNameValue
 */
export interface ParameterNameValue {
  /**
   * @schema ParameterNameValue#ParameterName
   */
  readonly parameterName?: string;

  /**
   * @schema ParameterNameValue#ParameterValue
   */
  readonly parameterValue?: string;

}

/**
 * @schema Endpoint
 */
export interface Endpoint {
  /**
   * @schema Endpoint#Address
   */
  readonly address?: string;

  /**
   * @schema Endpoint#Port
   */
  readonly port?: number;

}

/**
 * @schema Node
 */
export interface Node {
  /**
   * @schema Node#NodeId
   */
  readonly nodeId?: string;

  /**
   * @schema Node#Endpoint
   */
  readonly endpoint?: Endpoint;

  /**
   * @schema Node#NodeCreateTime
   */
  readonly nodeCreateTime?: string;

  /**
   * @schema Node#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Node#NodeStatus
   */
  readonly nodeStatus?: string;

  /**
   * @schema Node#ParameterGroupStatus
   */
  readonly parameterGroupStatus?: string;

}

/**
 * @schema NotificationConfiguration
 */
export interface NotificationConfiguration {
  /**
   * @schema NotificationConfiguration#TopicArn
   */
  readonly topicArn?: string;

  /**
   * @schema NotificationConfiguration#TopicStatus
   */
  readonly topicStatus?: string;

}

/**
 * @schema SecurityGroupMembership
 */
export interface SecurityGroupMembership {
  /**
   * @schema SecurityGroupMembership#SecurityGroupIdentifier
   */
  readonly securityGroupIdentifier?: string;

  /**
   * @schema SecurityGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * @schema ParameterGroupStatus
 */
export interface ParameterGroupStatus {
  /**
   * @schema ParameterGroupStatus#ParameterGroupName
   */
  readonly parameterGroupName?: string;

  /**
   * @schema ParameterGroupStatus#ParameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

  /**
   * @schema ParameterGroupStatus#NodeIdsToReboot
   */
  readonly nodeIdsToReboot?: string[];

}

/**
 * @schema SseDescription
 */
export interface SseDescription {
  /**
   * @schema SseDescription#Status
   */
  readonly status?: string;

}

/**
 * @schema Subnet
 */
export interface Subnet {
  /**
   * @schema Subnet#SubnetIdentifier
   */
  readonly subnetIdentifier?: string;

  /**
   * @schema Subnet#SubnetAvailabilityZone
   */
  readonly subnetAvailabilityZone?: string;

}

/**
 * @schema NodeTypeSpecificValue
 */
export interface NodeTypeSpecificValue {
  /**
   * @schema NodeTypeSpecificValue#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema NodeTypeSpecificValue#Value
   */
  readonly value?: string;

}
