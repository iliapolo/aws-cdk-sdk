/**
 * @schema DaxCreateClusterRequest
 */
export interface DaxCreateClusterRequest {
  /**
   * @schema DaxCreateClusterRequest#ClusterName
   */
  readonly clusterName: string;

  /**
   * @schema DaxCreateClusterRequest#NodeType
   */
  readonly nodeType: string;

  /**
   * @schema DaxCreateClusterRequest#Description
   */
  readonly description?: string;

  /**
   * @schema DaxCreateClusterRequest#ReplicationFactor
   */
  readonly replicationFactor: number;

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
  readonly iamRoleArn: string;

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

}

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
 * @schema DaxCreateParameterGroupRequest
 */
export interface DaxCreateParameterGroupRequest {
  /**
   * @schema DaxCreateParameterGroupRequest#ParameterGroupName
   */
  readonly parameterGroupName: string;

  /**
   * @schema DaxCreateParameterGroupRequest#Description
   */
  readonly description?: string;

}

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
 * @schema DaxCreateSubnetGroupRequest
 */
export interface DaxCreateSubnetGroupRequest {
  /**
   * @schema DaxCreateSubnetGroupRequest#SubnetGroupName
   */
  readonly subnetGroupName: string;

  /**
   * @schema DaxCreateSubnetGroupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema DaxCreateSubnetGroupRequest#SubnetIds
   */
  readonly subnetIds: string[];

}

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
 * @schema DaxDecreaseReplicationFactorRequest
 */
export interface DaxDecreaseReplicationFactorRequest {
  /**
   * @schema DaxDecreaseReplicationFactorRequest#ClusterName
   */
  readonly clusterName: string;

  /**
   * @schema DaxDecreaseReplicationFactorRequest#NewReplicationFactor
   */
  readonly newReplicationFactor: number;

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
 * @schema DaxDecreaseReplicationFactorResponse
 */
export interface DaxDecreaseReplicationFactorResponse {
  /**
   * @schema DaxDecreaseReplicationFactorResponse#Cluster
   */
  readonly cluster?: DaxCluster;

}

/**
 * @schema DaxDeleteClusterRequest
 */
export interface DaxDeleteClusterRequest {
  /**
   * @schema DaxDeleteClusterRequest#ClusterName
   */
  readonly clusterName: string;

}

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
 * @schema DaxDeleteParameterGroupRequest
 */
export interface DaxDeleteParameterGroupRequest {
  /**
   * @schema DaxDeleteParameterGroupRequest#ParameterGroupName
   */
  readonly parameterGroupName: string;

}

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
 * @schema DaxDeleteSubnetGroupRequest
 */
export interface DaxDeleteSubnetGroupRequest {
  /**
   * @schema DaxDeleteSubnetGroupRequest#SubnetGroupName
   */
  readonly subnetGroupName: string;

}

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
 * @schema DaxDescribeParametersRequest
 */
export interface DaxDescribeParametersRequest {
  /**
   * @schema DaxDescribeParametersRequest#ParameterGroupName
   */
  readonly parameterGroupName: string;

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
 * @schema DaxIncreaseReplicationFactorRequest
 */
export interface DaxIncreaseReplicationFactorRequest {
  /**
   * @schema DaxIncreaseReplicationFactorRequest#ClusterName
   */
  readonly clusterName: string;

  /**
   * @schema DaxIncreaseReplicationFactorRequest#NewReplicationFactor
   */
  readonly newReplicationFactor: number;

  /**
   * @schema DaxIncreaseReplicationFactorRequest#AvailabilityZones
   */
  readonly availabilityZones?: string[];

}

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
 * @schema DaxListTagsRequest
 */
export interface DaxListTagsRequest {
  /**
   * @schema DaxListTagsRequest#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema DaxListTagsRequest#NextToken
   */
  readonly nextToken?: string;

}

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
 * @schema DaxRebootNodeRequest
 */
export interface DaxRebootNodeRequest {
  /**
   * @schema DaxRebootNodeRequest#ClusterName
   */
  readonly clusterName: string;

  /**
   * @schema DaxRebootNodeRequest#NodeId
   */
  readonly nodeId: string;

}

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
 * @schema DaxTagResourceRequest
 */
export interface DaxTagResourceRequest {
  /**
   * @schema DaxTagResourceRequest#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema DaxTagResourceRequest#Tags
   */
  readonly tags: DaxTag[];

}

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
 * @schema DaxUntagResourceRequest
 */
export interface DaxUntagResourceRequest {
  /**
   * @schema DaxUntagResourceRequest#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema DaxUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

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
 * @schema DaxUpdateClusterRequest
 */
export interface DaxUpdateClusterRequest {
  /**
   * @schema DaxUpdateClusterRequest#ClusterName
   */
  readonly clusterName: string;

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
 * @schema DaxUpdateClusterResponse
 */
export interface DaxUpdateClusterResponse {
  /**
   * @schema DaxUpdateClusterResponse#Cluster
   */
  readonly cluster?: DaxCluster;

}

/**
 * @schema DaxUpdateParameterGroupRequest
 */
export interface DaxUpdateParameterGroupRequest {
  /**
   * @schema DaxUpdateParameterGroupRequest#ParameterGroupName
   */
  readonly parameterGroupName: string;

  /**
   * @schema DaxUpdateParameterGroupRequest#ParameterNameValues
   */
  readonly parameterNameValues: DaxParameterNameValue[];

}

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
 * @schema DaxUpdateSubnetGroupRequest
 */
export interface DaxUpdateSubnetGroupRequest {
  /**
   * @schema DaxUpdateSubnetGroupRequest#SubnetGroupName
   */
  readonly subnetGroupName: string;

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
 * @schema DaxUpdateSubnetGroupResponse
 */
export interface DaxUpdateSubnetGroupResponse {
  /**
   * @schema DaxUpdateSubnetGroupResponse#SubnetGroup
   */
  readonly subnetGroup?: DaxSubnetGroup;

}

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
 * @schema DaxsseSpecification
 */
export interface DaxsseSpecification {
  /**
   * @schema DaxsseSpecification#Enabled
   */
  readonly enabled: boolean;

}

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

}

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

}

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
 * @schema DaxsseDescription
 */
export interface DaxsseDescription {
  /**
   * @schema DaxsseDescription#Status
   */
  readonly status?: string;

}

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
