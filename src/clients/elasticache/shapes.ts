/**
 * @schema AddTagsToResourceMessage
 */
export interface AddTagsToResourceMessage {
  /**
   * @schema AddTagsToResourceMessage#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema AddTagsToResourceMessage#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TagListMessage
 */
export interface TagListMessage {
  /**
   * @schema TagListMessage#TagList
   */
  readonly tagList?: Tag[];

}

/**
 * @schema AuthorizeCacheSecurityGroupIngressMessage
 */
export interface AuthorizeCacheSecurityGroupIngressMessage {
  /**
   * @schema AuthorizeCacheSecurityGroupIngressMessage#CacheSecurityGroupName
   */
  readonly cacheSecurityGroupName: string;

  /**
   * @schema AuthorizeCacheSecurityGroupIngressMessage#EC2SecurityGroupName
   */
  readonly ec2SecurityGroupName: string;

  /**
   * @schema AuthorizeCacheSecurityGroupIngressMessage#EC2SecurityGroupOwnerId
   */
  readonly ec2SecurityGroupOwnerId: string;

}

/**
 * @schema AuthorizeCacheSecurityGroupIngressResult
 */
export interface AuthorizeCacheSecurityGroupIngressResult {
  /**
   * @schema AuthorizeCacheSecurityGroupIngressResult#CacheSecurityGroup
   */
  readonly cacheSecurityGroup?: CacheSecurityGroup;

}

/**
 * @schema BatchApplyUpdateActionMessage
 */
export interface BatchApplyUpdateActionMessage {
  /**
   * @schema BatchApplyUpdateActionMessage#ReplicationGroupIds
   */
  readonly replicationGroupIds?: string[];

  /**
   * @schema BatchApplyUpdateActionMessage#CacheClusterIds
   */
  readonly cacheClusterIds?: string[];

  /**
   * @schema BatchApplyUpdateActionMessage#ServiceUpdateName
   */
  readonly serviceUpdateName: string;

}

/**
 * @schema UpdateActionResultsMessage
 */
export interface UpdateActionResultsMessage {
  /**
   * @schema UpdateActionResultsMessage#ProcessedUpdateActions
   */
  readonly processedUpdateActions?: ProcessedUpdateAction[];

  /**
   * @schema UpdateActionResultsMessage#UnprocessedUpdateActions
   */
  readonly unprocessedUpdateActions?: UnprocessedUpdateAction[];

}

/**
 * @schema BatchStopUpdateActionMessage
 */
export interface BatchStopUpdateActionMessage {
  /**
   * @schema BatchStopUpdateActionMessage#ReplicationGroupIds
   */
  readonly replicationGroupIds?: string[];

  /**
   * @schema BatchStopUpdateActionMessage#CacheClusterIds
   */
  readonly cacheClusterIds?: string[];

  /**
   * @schema BatchStopUpdateActionMessage#ServiceUpdateName
   */
  readonly serviceUpdateName: string;

}

/**
 * @schema CompleteMigrationMessage
 */
export interface CompleteMigrationMessage {
  /**
   * @schema CompleteMigrationMessage#ReplicationGroupId
   */
  readonly replicationGroupId: string;

  /**
   * @schema CompleteMigrationMessage#Force
   */
  readonly force?: boolean;

}

/**
 * @schema CompleteMigrationResponse
 */
export interface CompleteMigrationResponse {
  /**
   * @schema CompleteMigrationResponse#ReplicationGroup
   */
  readonly replicationGroup?: ReplicationGroup;

}

/**
 * @schema CopySnapshotMessage
 */
export interface CopySnapshotMessage {
  /**
   * @schema CopySnapshotMessage#SourceSnapshotName
   */
  readonly sourceSnapshotName: string;

  /**
   * @schema CopySnapshotMessage#TargetSnapshotName
   */
  readonly targetSnapshotName: string;

  /**
   * @schema CopySnapshotMessage#TargetBucket
   */
  readonly targetBucket?: string;

  /**
   * @schema CopySnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema CopySnapshotResult
 */
export interface CopySnapshotResult {
  /**
   * @schema CopySnapshotResult#Snapshot
   */
  readonly snapshot?: Snapshot;

}

/**
 * @schema CreateCacheClusterMessage
 */
export interface CreateCacheClusterMessage {
  /**
   * @schema CreateCacheClusterMessage#CacheClusterId
   */
  readonly cacheClusterId: string;

  /**
   * @schema CreateCacheClusterMessage#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema CreateCacheClusterMessage#AZMode
   */
  readonly azMode?: string;

  /**
   * @schema CreateCacheClusterMessage#PreferredAvailabilityZone
   */
  readonly preferredAvailabilityZone?: string;

  /**
   * @schema CreateCacheClusterMessage#PreferredAvailabilityZones
   */
  readonly preferredAvailabilityZones?: string[];

  /**
   * @schema CreateCacheClusterMessage#NumCacheNodes
   */
  readonly numCacheNodes?: number;

  /**
   * @schema CreateCacheClusterMessage#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema CreateCacheClusterMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema CreateCacheClusterMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema CreateCacheClusterMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName?: string;

  /**
   * @schema CreateCacheClusterMessage#CacheSubnetGroupName
   */
  readonly cacheSubnetGroupName?: string;

  /**
   * @schema CreateCacheClusterMessage#CacheSecurityGroupNames
   */
  readonly cacheSecurityGroupNames?: string[];

  /**
   * @schema CreateCacheClusterMessage#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema CreateCacheClusterMessage#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateCacheClusterMessage#SnapshotArns
   */
  readonly snapshotArns?: string[];

  /**
   * @schema CreateCacheClusterMessage#SnapshotName
   */
  readonly snapshotName?: string;

  /**
   * @schema CreateCacheClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema CreateCacheClusterMessage#Port
   */
  readonly port?: number;

  /**
   * @schema CreateCacheClusterMessage#NotificationTopicArn
   */
  readonly notificationTopicArn?: string;

  /**
   * @schema CreateCacheClusterMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema CreateCacheClusterMessage#SnapshotRetentionLimit
   */
  readonly snapshotRetentionLimit?: number;

  /**
   * @schema CreateCacheClusterMessage#SnapshotWindow
   */
  readonly snapshotWindow?: string;

  /**
   * @schema CreateCacheClusterMessage#AuthToken
   */
  readonly authToken?: string;

  /**
   * @schema CreateCacheClusterMessage#OutpostMode
   */
  readonly outpostMode?: string;

  /**
   * @schema CreateCacheClusterMessage#PreferredOutpostArn
   */
  readonly preferredOutpostArn?: string;

  /**
   * @schema CreateCacheClusterMessage#PreferredOutpostArns
   */
  readonly preferredOutpostArns?: string[];

}

/**
 * @schema CreateCacheClusterResult
 */
export interface CreateCacheClusterResult {
  /**
   * @schema CreateCacheClusterResult#CacheCluster
   */
  readonly cacheCluster?: CacheCluster;

}

/**
 * @schema CreateCacheParameterGroupMessage
 */
export interface CreateCacheParameterGroupMessage {
  /**
   * @schema CreateCacheParameterGroupMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName: string;

  /**
   * @schema CreateCacheParameterGroupMessage#CacheParameterGroupFamily
   */
  readonly cacheParameterGroupFamily: string;

  /**
   * @schema CreateCacheParameterGroupMessage#Description
   */
  readonly description: string;

}

/**
 * @schema CreateCacheParameterGroupResult
 */
export interface CreateCacheParameterGroupResult {
  /**
   * @schema CreateCacheParameterGroupResult#CacheParameterGroup
   */
  readonly cacheParameterGroup?: CacheParameterGroup;

}

/**
 * @schema CreateCacheSecurityGroupMessage
 */
export interface CreateCacheSecurityGroupMessage {
  /**
   * @schema CreateCacheSecurityGroupMessage#CacheSecurityGroupName
   */
  readonly cacheSecurityGroupName: string;

  /**
   * @schema CreateCacheSecurityGroupMessage#Description
   */
  readonly description: string;

}

/**
 * @schema CreateCacheSecurityGroupResult
 */
export interface CreateCacheSecurityGroupResult {
  /**
   * @schema CreateCacheSecurityGroupResult#CacheSecurityGroup
   */
  readonly cacheSecurityGroup?: CacheSecurityGroup;

}

/**
 * @schema CreateCacheSubnetGroupMessage
 */
export interface CreateCacheSubnetGroupMessage {
  /**
   * @schema CreateCacheSubnetGroupMessage#CacheSubnetGroupName
   */
  readonly cacheSubnetGroupName: string;

  /**
   * @schema CreateCacheSubnetGroupMessage#CacheSubnetGroupDescription
   */
  readonly cacheSubnetGroupDescription: string;

  /**
   * @schema CreateCacheSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds: string[];

}

/**
 * @schema CreateCacheSubnetGroupResult
 */
export interface CreateCacheSubnetGroupResult {
  /**
   * @schema CreateCacheSubnetGroupResult#CacheSubnetGroup
   */
  readonly cacheSubnetGroup?: CacheSubnetGroup;

}

/**
 * @schema CreateGlobalReplicationGroupMessage
 */
export interface CreateGlobalReplicationGroupMessage {
  /**
   * @schema CreateGlobalReplicationGroupMessage#GlobalReplicationGroupIdSuffix
   */
  readonly globalReplicationGroupIdSuffix: string;

  /**
   * @schema CreateGlobalReplicationGroupMessage#GlobalReplicationGroupDescription
   */
  readonly globalReplicationGroupDescription?: string;

  /**
   * @schema CreateGlobalReplicationGroupMessage#PrimaryReplicationGroupId
   */
  readonly primaryReplicationGroupId: string;

}

/**
 * @schema CreateGlobalReplicationGroupResult
 */
export interface CreateGlobalReplicationGroupResult {
  /**
   * @schema CreateGlobalReplicationGroupResult#GlobalReplicationGroup
   */
  readonly globalReplicationGroup?: GlobalReplicationGroup;

}

/**
 * @schema CreateReplicationGroupMessage
 */
export interface CreateReplicationGroupMessage {
  /**
   * @schema CreateReplicationGroupMessage#ReplicationGroupId
   */
  readonly replicationGroupId: string;

  /**
   * @schema CreateReplicationGroupMessage#ReplicationGroupDescription
   */
  readonly replicationGroupDescription: string;

  /**
   * @schema CreateReplicationGroupMessage#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId?: string;

  /**
   * @schema CreateReplicationGroupMessage#PrimaryClusterId
   */
  readonly primaryClusterId?: string;

  /**
   * @schema CreateReplicationGroupMessage#AutomaticFailoverEnabled
   */
  readonly automaticFailoverEnabled?: boolean;

  /**
   * @schema CreateReplicationGroupMessage#MultiAZEnabled
   */
  readonly multiAzEnabled?: boolean;

  /**
   * @schema CreateReplicationGroupMessage#NumCacheClusters
   */
  readonly numCacheClusters?: number;

  /**
   * @schema CreateReplicationGroupMessage#PreferredCacheClusterAZs
   */
  readonly preferredCacheClusterAZs?: string[];

  /**
   * @schema CreateReplicationGroupMessage#NumNodeGroups
   */
  readonly numNodeGroups?: number;

  /**
   * @schema CreateReplicationGroupMessage#ReplicasPerNodeGroup
   */
  readonly replicasPerNodeGroup?: number;

  /**
   * @schema CreateReplicationGroupMessage#NodeGroupConfiguration
   */
  readonly nodeGroupConfiguration?: NodeGroupConfiguration[];

  /**
   * @schema CreateReplicationGroupMessage#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema CreateReplicationGroupMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema CreateReplicationGroupMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema CreateReplicationGroupMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName?: string;

  /**
   * @schema CreateReplicationGroupMessage#CacheSubnetGroupName
   */
  readonly cacheSubnetGroupName?: string;

  /**
   * @schema CreateReplicationGroupMessage#CacheSecurityGroupNames
   */
  readonly cacheSecurityGroupNames?: string[];

  /**
   * @schema CreateReplicationGroupMessage#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema CreateReplicationGroupMessage#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateReplicationGroupMessage#SnapshotArns
   */
  readonly snapshotArns?: string[];

  /**
   * @schema CreateReplicationGroupMessage#SnapshotName
   */
  readonly snapshotName?: string;

  /**
   * @schema CreateReplicationGroupMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema CreateReplicationGroupMessage#Port
   */
  readonly port?: number;

  /**
   * @schema CreateReplicationGroupMessage#NotificationTopicArn
   */
  readonly notificationTopicArn?: string;

  /**
   * @schema CreateReplicationGroupMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema CreateReplicationGroupMessage#SnapshotRetentionLimit
   */
  readonly snapshotRetentionLimit?: number;

  /**
   * @schema CreateReplicationGroupMessage#SnapshotWindow
   */
  readonly snapshotWindow?: string;

  /**
   * @schema CreateReplicationGroupMessage#AuthToken
   */
  readonly authToken?: string;

  /**
   * @schema CreateReplicationGroupMessage#TransitEncryptionEnabled
   */
  readonly transitEncryptionEnabled?: boolean;

  /**
   * @schema CreateReplicationGroupMessage#AtRestEncryptionEnabled
   */
  readonly atRestEncryptionEnabled?: boolean;

  /**
   * @schema CreateReplicationGroupMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CreateReplicationGroupMessage#UserGroupIds
   */
  readonly userGroupIds?: string[];

}

/**
 * @schema CreateReplicationGroupResult
 */
export interface CreateReplicationGroupResult {
  /**
   * @schema CreateReplicationGroupResult#ReplicationGroup
   */
  readonly replicationGroup?: ReplicationGroup;

}

/**
 * @schema CreateSnapshotMessage
 */
export interface CreateSnapshotMessage {
  /**
   * @schema CreateSnapshotMessage#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema CreateSnapshotMessage#CacheClusterId
   */
  readonly cacheClusterId?: string;

  /**
   * @schema CreateSnapshotMessage#SnapshotName
   */
  readonly snapshotName: string;

  /**
   * @schema CreateSnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema CreateSnapshotResult
 */
export interface CreateSnapshotResult {
  /**
   * @schema CreateSnapshotResult#Snapshot
   */
  readonly snapshot?: Snapshot;

}

/**
 * @schema CreateUserMessage
 */
export interface CreateUserMessage {
  /**
   * @schema CreateUserMessage#UserId
   */
  readonly userId: string;

  /**
   * @schema CreateUserMessage#UserName
   */
  readonly userName: string;

  /**
   * @schema CreateUserMessage#Engine
   */
  readonly engine: string;

  /**
   * @schema CreateUserMessage#Passwords
   */
  readonly passwords?: string[];

  /**
   * @schema CreateUserMessage#AccessString
   */
  readonly accessString: string;

  /**
   * @schema CreateUserMessage#NoPasswordRequired
   */
  readonly noPasswordRequired?: boolean;

}

/**
 * @schema User
 */
export interface User {
  /**
   * @schema User#UserId
   */
  readonly userId?: string;

  /**
   * @schema User#UserName
   */
  readonly userName?: string;

  /**
   * @schema User#Status
   */
  readonly status?: string;

  /**
   * @schema User#Engine
   */
  readonly engine?: string;

  /**
   * @schema User#AccessString
   */
  readonly accessString?: string;

  /**
   * @schema User#UserGroupIds
   */
  readonly userGroupIds?: string[];

  /**
   * @schema User#Authentication
   */
  readonly authentication?: Authentication;

  /**
   * @schema User#ARN
   */
  readonly arn?: string;

}

/**
 * @schema CreateUserGroupMessage
 */
export interface CreateUserGroupMessage {
  /**
   * @schema CreateUserGroupMessage#UserGroupId
   */
  readonly userGroupId: string;

  /**
   * @schema CreateUserGroupMessage#Engine
   */
  readonly engine: string;

  /**
   * @schema CreateUserGroupMessage#UserIds
   */
  readonly userIds?: string[];

}

/**
 * @schema UserGroup
 */
export interface UserGroup {
  /**
   * @schema UserGroup#UserGroupId
   */
  readonly userGroupId?: string;

  /**
   * @schema UserGroup#Status
   */
  readonly status?: string;

  /**
   * @schema UserGroup#Engine
   */
  readonly engine?: string;

  /**
   * @schema UserGroup#UserIds
   */
  readonly userIds?: string[];

  /**
   * @schema UserGroup#PendingChanges
   */
  readonly pendingChanges?: UserGroupPendingChanges;

  /**
   * @schema UserGroup#ReplicationGroups
   */
  readonly replicationGroups?: string[];

  /**
   * @schema UserGroup#ARN
   */
  readonly arn?: string;

}

/**
 * @schema DecreaseNodeGroupsInGlobalReplicationGroupMessage
 */
export interface DecreaseNodeGroupsInGlobalReplicationGroupMessage {
  /**
   * @schema DecreaseNodeGroupsInGlobalReplicationGroupMessage#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId: string;

  /**
   * @schema DecreaseNodeGroupsInGlobalReplicationGroupMessage#NodeGroupCount
   */
  readonly nodeGroupCount: number;

  /**
   * @schema DecreaseNodeGroupsInGlobalReplicationGroupMessage#GlobalNodeGroupsToRemove
   */
  readonly globalNodeGroupsToRemove?: string[];

  /**
   * @schema DecreaseNodeGroupsInGlobalReplicationGroupMessage#GlobalNodeGroupsToRetain
   */
  readonly globalNodeGroupsToRetain?: string[];

  /**
   * @schema DecreaseNodeGroupsInGlobalReplicationGroupMessage#ApplyImmediately
   */
  readonly applyImmediately: boolean;

}

/**
 * @schema DecreaseNodeGroupsInGlobalReplicationGroupResult
 */
export interface DecreaseNodeGroupsInGlobalReplicationGroupResult {
  /**
   * @schema DecreaseNodeGroupsInGlobalReplicationGroupResult#GlobalReplicationGroup
   */
  readonly globalReplicationGroup?: GlobalReplicationGroup;

}

/**
 * @schema DecreaseReplicaCountMessage
 */
export interface DecreaseReplicaCountMessage {
  /**
   * @schema DecreaseReplicaCountMessage#ReplicationGroupId
   */
  readonly replicationGroupId: string;

  /**
   * @schema DecreaseReplicaCountMessage#NewReplicaCount
   */
  readonly newReplicaCount?: number;

  /**
   * @schema DecreaseReplicaCountMessage#ReplicaConfiguration
   */
  readonly replicaConfiguration?: ConfigureShard[];

  /**
   * @schema DecreaseReplicaCountMessage#ReplicasToRemove
   */
  readonly replicasToRemove?: string[];

  /**
   * @schema DecreaseReplicaCountMessage#ApplyImmediately
   */
  readonly applyImmediately: boolean;

}

/**
 * @schema DecreaseReplicaCountResult
 */
export interface DecreaseReplicaCountResult {
  /**
   * @schema DecreaseReplicaCountResult#ReplicationGroup
   */
  readonly replicationGroup?: ReplicationGroup;

}

/**
 * @schema DeleteCacheClusterMessage
 */
export interface DeleteCacheClusterMessage {
  /**
   * @schema DeleteCacheClusterMessage#CacheClusterId
   */
  readonly cacheClusterId: string;

  /**
   * @schema DeleteCacheClusterMessage#FinalSnapshotIdentifier
   */
  readonly finalSnapshotIdentifier?: string;

}

/**
 * @schema DeleteCacheClusterResult
 */
export interface DeleteCacheClusterResult {
  /**
   * @schema DeleteCacheClusterResult#CacheCluster
   */
  readonly cacheCluster?: CacheCluster;

}

/**
 * @schema DeleteCacheParameterGroupMessage
 */
export interface DeleteCacheParameterGroupMessage {
  /**
   * @schema DeleteCacheParameterGroupMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName: string;

}

/**
 * @schema DeleteCacheSecurityGroupMessage
 */
export interface DeleteCacheSecurityGroupMessage {
  /**
   * @schema DeleteCacheSecurityGroupMessage#CacheSecurityGroupName
   */
  readonly cacheSecurityGroupName: string;

}

/**
 * @schema DeleteCacheSubnetGroupMessage
 */
export interface DeleteCacheSubnetGroupMessage {
  /**
   * @schema DeleteCacheSubnetGroupMessage#CacheSubnetGroupName
   */
  readonly cacheSubnetGroupName: string;

}

/**
 * @schema DeleteGlobalReplicationGroupMessage
 */
export interface DeleteGlobalReplicationGroupMessage {
  /**
   * @schema DeleteGlobalReplicationGroupMessage#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId: string;

  /**
   * @schema DeleteGlobalReplicationGroupMessage#RetainPrimaryReplicationGroup
   */
  readonly retainPrimaryReplicationGroup: boolean;

}

/**
 * @schema DeleteGlobalReplicationGroupResult
 */
export interface DeleteGlobalReplicationGroupResult {
  /**
   * @schema DeleteGlobalReplicationGroupResult#GlobalReplicationGroup
   */
  readonly globalReplicationGroup?: GlobalReplicationGroup;

}

/**
 * @schema DeleteReplicationGroupMessage
 */
export interface DeleteReplicationGroupMessage {
  /**
   * @schema DeleteReplicationGroupMessage#ReplicationGroupId
   */
  readonly replicationGroupId: string;

  /**
   * @schema DeleteReplicationGroupMessage#RetainPrimaryCluster
   */
  readonly retainPrimaryCluster?: boolean;

  /**
   * @schema DeleteReplicationGroupMessage#FinalSnapshotIdentifier
   */
  readonly finalSnapshotIdentifier?: string;

}

/**
 * @schema DeleteReplicationGroupResult
 */
export interface DeleteReplicationGroupResult {
  /**
   * @schema DeleteReplicationGroupResult#ReplicationGroup
   */
  readonly replicationGroup?: ReplicationGroup;

}

/**
 * @schema DeleteSnapshotMessage
 */
export interface DeleteSnapshotMessage {
  /**
   * @schema DeleteSnapshotMessage#SnapshotName
   */
  readonly snapshotName: string;

}

/**
 * @schema DeleteSnapshotResult
 */
export interface DeleteSnapshotResult {
  /**
   * @schema DeleteSnapshotResult#Snapshot
   */
  readonly snapshot?: Snapshot;

}

/**
 * @schema DeleteUserMessage
 */
export interface DeleteUserMessage {
  /**
   * @schema DeleteUserMessage#UserId
   */
  readonly userId: string;

}

/**
 * @schema DeleteUserGroupMessage
 */
export interface DeleteUserGroupMessage {
  /**
   * @schema DeleteUserGroupMessage#UserGroupId
   */
  readonly userGroupId: string;

}

/**
 * @schema DescribeCacheClustersMessage
 */
export interface DescribeCacheClustersMessage {
  /**
   * @schema DescribeCacheClustersMessage#CacheClusterId
   */
  readonly cacheClusterId?: string;

  /**
   * @schema DescribeCacheClustersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeCacheClustersMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeCacheClustersMessage#ShowCacheNodeInfo
   */
  readonly showCacheNodeInfo?: boolean;

  /**
   * @schema DescribeCacheClustersMessage#ShowCacheClustersNotInReplicationGroups
   */
  readonly showCacheClustersNotInReplicationGroups?: boolean;

}

/**
 * @schema CacheClusterMessage
 */
export interface CacheClusterMessage {
  /**
   * @schema CacheClusterMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema CacheClusterMessage#CacheClusters
   */
  readonly cacheClusters?: CacheCluster[];

}

/**
 * @schema DescribeCacheEngineVersionsMessage
 */
export interface DescribeCacheEngineVersionsMessage {
  /**
   * @schema DescribeCacheEngineVersionsMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema DescribeCacheEngineVersionsMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DescribeCacheEngineVersionsMessage#CacheParameterGroupFamily
   */
  readonly cacheParameterGroupFamily?: string;

  /**
   * @schema DescribeCacheEngineVersionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeCacheEngineVersionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeCacheEngineVersionsMessage#DefaultOnly
   */
  readonly defaultOnly?: boolean;

}

/**
 * @schema CacheEngineVersionMessage
 */
export interface CacheEngineVersionMessage {
  /**
   * @schema CacheEngineVersionMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema CacheEngineVersionMessage#CacheEngineVersions
   */
  readonly cacheEngineVersions?: CacheEngineVersion[];

}

/**
 * @schema DescribeCacheParameterGroupsMessage
 */
export interface DescribeCacheParameterGroupsMessage {
  /**
   * @schema DescribeCacheParameterGroupsMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName?: string;

  /**
   * @schema DescribeCacheParameterGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeCacheParameterGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema CacheParameterGroupsMessage
 */
export interface CacheParameterGroupsMessage {
  /**
   * @schema CacheParameterGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema CacheParameterGroupsMessage#CacheParameterGroups
   */
  readonly cacheParameterGroups?: CacheParameterGroup[];

}

/**
 * @schema DescribeCacheParametersMessage
 */
export interface DescribeCacheParametersMessage {
  /**
   * @schema DescribeCacheParametersMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName: string;

  /**
   * @schema DescribeCacheParametersMessage#Source
   */
  readonly source?: string;

  /**
   * @schema DescribeCacheParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeCacheParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema CacheParameterGroupDetails
 */
export interface CacheParameterGroupDetails {
  /**
   * @schema CacheParameterGroupDetails#Marker
   */
  readonly marker?: string;

  /**
   * @schema CacheParameterGroupDetails#Parameters
   */
  readonly parameters?: Parameter[];

  /**
   * @schema CacheParameterGroupDetails#CacheNodeTypeSpecificParameters
   */
  readonly cacheNodeTypeSpecificParameters?: CacheNodeTypeSpecificParameter[];

}

/**
 * @schema DescribeCacheSecurityGroupsMessage
 */
export interface DescribeCacheSecurityGroupsMessage {
  /**
   * @schema DescribeCacheSecurityGroupsMessage#CacheSecurityGroupName
   */
  readonly cacheSecurityGroupName?: string;

  /**
   * @schema DescribeCacheSecurityGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeCacheSecurityGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema CacheSecurityGroupMessage
 */
export interface CacheSecurityGroupMessage {
  /**
   * @schema CacheSecurityGroupMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema CacheSecurityGroupMessage#CacheSecurityGroups
   */
  readonly cacheSecurityGroups?: CacheSecurityGroup[];

}

/**
 * @schema DescribeCacheSubnetGroupsMessage
 */
export interface DescribeCacheSubnetGroupsMessage {
  /**
   * @schema DescribeCacheSubnetGroupsMessage#CacheSubnetGroupName
   */
  readonly cacheSubnetGroupName?: string;

  /**
   * @schema DescribeCacheSubnetGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeCacheSubnetGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema CacheSubnetGroupMessage
 */
export interface CacheSubnetGroupMessage {
  /**
   * @schema CacheSubnetGroupMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema CacheSubnetGroupMessage#CacheSubnetGroups
   */
  readonly cacheSubnetGroups?: CacheSubnetGroup[];

}

/**
 * @schema DescribeEngineDefaultParametersMessage
 */
export interface DescribeEngineDefaultParametersMessage {
  /**
   * @schema DescribeEngineDefaultParametersMessage#CacheParameterGroupFamily
   */
  readonly cacheParameterGroupFamily: string;

  /**
   * @schema DescribeEngineDefaultParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeEngineDefaultParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeEngineDefaultParametersResult
 */
export interface DescribeEngineDefaultParametersResult {
  /**
   * @schema DescribeEngineDefaultParametersResult#EngineDefaults
   */
  readonly engineDefaults?: EngineDefaults;

}

/**
 * @schema DescribeEventsMessage
 */
export interface DescribeEventsMessage {
  /**
   * @schema DescribeEventsMessage#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

  /**
   * @schema DescribeEventsMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema DescribeEventsMessage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema DescribeEventsMessage#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema DescribeEventsMessage#Duration
   */
  readonly duration?: number;

  /**
   * @schema DescribeEventsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeEventsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema EventsMessage
 */
export interface EventsMessage {
  /**
   * @schema EventsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema EventsMessage#Events
   */
  readonly events?: Event[];

}

/**
 * @schema DescribeGlobalReplicationGroupsMessage
 */
export interface DescribeGlobalReplicationGroupsMessage {
  /**
   * @schema DescribeGlobalReplicationGroupsMessage#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId?: string;

  /**
   * @schema DescribeGlobalReplicationGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeGlobalReplicationGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeGlobalReplicationGroupsMessage#ShowMemberInfo
   */
  readonly showMemberInfo?: boolean;

}

/**
 * @schema DescribeGlobalReplicationGroupsResult
 */
export interface DescribeGlobalReplicationGroupsResult {
  /**
   * @schema DescribeGlobalReplicationGroupsResult#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeGlobalReplicationGroupsResult#GlobalReplicationGroups
   */
  readonly globalReplicationGroups?: GlobalReplicationGroup[];

}

/**
 * @schema DescribeReplicationGroupsMessage
 */
export interface DescribeReplicationGroupsMessage {
  /**
   * @schema DescribeReplicationGroupsMessage#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema DescribeReplicationGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeReplicationGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ReplicationGroupMessage
 */
export interface ReplicationGroupMessage {
  /**
   * @schema ReplicationGroupMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ReplicationGroupMessage#ReplicationGroups
   */
  readonly replicationGroups?: ReplicationGroup[];

}

/**
 * @schema DescribeReservedCacheNodesMessage
 */
export interface DescribeReservedCacheNodesMessage {
  /**
   * @schema DescribeReservedCacheNodesMessage#ReservedCacheNodeId
   */
  readonly reservedCacheNodeId?: string;

  /**
   * @schema DescribeReservedCacheNodesMessage#ReservedCacheNodesOfferingId
   */
  readonly reservedCacheNodesOfferingId?: string;

  /**
   * @schema DescribeReservedCacheNodesMessage#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema DescribeReservedCacheNodesMessage#Duration
   */
  readonly duration?: string;

  /**
   * @schema DescribeReservedCacheNodesMessage#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema DescribeReservedCacheNodesMessage#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema DescribeReservedCacheNodesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeReservedCacheNodesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ReservedCacheNodeMessage
 */
export interface ReservedCacheNodeMessage {
  /**
   * @schema ReservedCacheNodeMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ReservedCacheNodeMessage#ReservedCacheNodes
   */
  readonly reservedCacheNodes?: ReservedCacheNode[];

}

/**
 * @schema DescribeReservedCacheNodesOfferingsMessage
 */
export interface DescribeReservedCacheNodesOfferingsMessage {
  /**
   * @schema DescribeReservedCacheNodesOfferingsMessage#ReservedCacheNodesOfferingId
   */
  readonly reservedCacheNodesOfferingId?: string;

  /**
   * @schema DescribeReservedCacheNodesOfferingsMessage#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema DescribeReservedCacheNodesOfferingsMessage#Duration
   */
  readonly duration?: string;

  /**
   * @schema DescribeReservedCacheNodesOfferingsMessage#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema DescribeReservedCacheNodesOfferingsMessage#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema DescribeReservedCacheNodesOfferingsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeReservedCacheNodesOfferingsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ReservedCacheNodesOfferingMessage
 */
export interface ReservedCacheNodesOfferingMessage {
  /**
   * @schema ReservedCacheNodesOfferingMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ReservedCacheNodesOfferingMessage#ReservedCacheNodesOfferings
   */
  readonly reservedCacheNodesOfferings?: ReservedCacheNodesOffering[];

}

/**
 * @schema DescribeServiceUpdatesMessage
 */
export interface DescribeServiceUpdatesMessage {
  /**
   * @schema DescribeServiceUpdatesMessage#ServiceUpdateName
   */
  readonly serviceUpdateName?: string;

  /**
   * @schema DescribeServiceUpdatesMessage#ServiceUpdateStatus
   */
  readonly serviceUpdateStatus?: string[];

  /**
   * @schema DescribeServiceUpdatesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeServiceUpdatesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ServiceUpdatesMessage
 */
export interface ServiceUpdatesMessage {
  /**
   * @schema ServiceUpdatesMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ServiceUpdatesMessage#ServiceUpdates
   */
  readonly serviceUpdates?: ServiceUpdate[];

}

/**
 * @schema DescribeSnapshotsMessage
 */
export interface DescribeSnapshotsMessage {
  /**
   * @schema DescribeSnapshotsMessage#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema DescribeSnapshotsMessage#CacheClusterId
   */
  readonly cacheClusterId?: string;

  /**
   * @schema DescribeSnapshotsMessage#SnapshotName
   */
  readonly snapshotName?: string;

  /**
   * @schema DescribeSnapshotsMessage#SnapshotSource
   */
  readonly snapshotSource?: string;

  /**
   * @schema DescribeSnapshotsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeSnapshotsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeSnapshotsMessage#ShowNodeGroupConfig
   */
  readonly showNodeGroupConfig?: boolean;

}

/**
 * @schema DescribeSnapshotsListMessage
 */
export interface DescribeSnapshotsListMessage {
  /**
   * @schema DescribeSnapshotsListMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeSnapshotsListMessage#Snapshots
   */
  readonly snapshots?: Snapshot[];

}

/**
 * @schema DescribeUpdateActionsMessage
 */
export interface DescribeUpdateActionsMessage {
  /**
   * @schema DescribeUpdateActionsMessage#ServiceUpdateName
   */
  readonly serviceUpdateName?: string;

  /**
   * @schema DescribeUpdateActionsMessage#ReplicationGroupIds
   */
  readonly replicationGroupIds?: string[];

  /**
   * @schema DescribeUpdateActionsMessage#CacheClusterIds
   */
  readonly cacheClusterIds?: string[];

  /**
   * @schema DescribeUpdateActionsMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema DescribeUpdateActionsMessage#ServiceUpdateStatus
   */
  readonly serviceUpdateStatus?: string[];

  /**
   * @schema DescribeUpdateActionsMessage#ServiceUpdateTimeRange
   */
  readonly serviceUpdateTimeRange?: TimeRangeFilter;

  /**
   * @schema DescribeUpdateActionsMessage#UpdateActionStatus
   */
  readonly updateActionStatus?: string[];

  /**
   * @schema DescribeUpdateActionsMessage#ShowNodeLevelUpdateStatus
   */
  readonly showNodeLevelUpdateStatus?: boolean;

  /**
   * @schema DescribeUpdateActionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeUpdateActionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema UpdateActionsMessage
 */
export interface UpdateActionsMessage {
  /**
   * @schema UpdateActionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema UpdateActionsMessage#UpdateActions
   */
  readonly updateActions?: UpdateAction[];

}

/**
 * @schema DescribeUserGroupsMessage
 */
export interface DescribeUserGroupsMessage {
  /**
   * @schema DescribeUserGroupsMessage#UserGroupId
   */
  readonly userGroupId?: string;

  /**
   * @schema DescribeUserGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeUserGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeUserGroupsResult
 */
export interface DescribeUserGroupsResult {
  /**
   * @schema DescribeUserGroupsResult#UserGroups
   */
  readonly userGroups?: UserGroup[];

  /**
   * @schema DescribeUserGroupsResult#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeUsersMessage
 */
export interface DescribeUsersMessage {
  /**
   * @schema DescribeUsersMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema DescribeUsersMessage#UserId
   */
  readonly userId?: string;

  /**
   * @schema DescribeUsersMessage#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeUsersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DescribeUsersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeUsersResult
 */
export interface DescribeUsersResult {
  /**
   * @schema DescribeUsersResult#Users
   */
  readonly users?: User[];

  /**
   * @schema DescribeUsersResult#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DisassociateGlobalReplicationGroupMessage
 */
export interface DisassociateGlobalReplicationGroupMessage {
  /**
   * @schema DisassociateGlobalReplicationGroupMessage#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId: string;

  /**
   * @schema DisassociateGlobalReplicationGroupMessage#ReplicationGroupId
   */
  readonly replicationGroupId: string;

  /**
   * @schema DisassociateGlobalReplicationGroupMessage#ReplicationGroupRegion
   */
  readonly replicationGroupRegion: string;

}

/**
 * @schema DisassociateGlobalReplicationGroupResult
 */
export interface DisassociateGlobalReplicationGroupResult {
  /**
   * @schema DisassociateGlobalReplicationGroupResult#GlobalReplicationGroup
   */
  readonly globalReplicationGroup?: GlobalReplicationGroup;

}

/**
 * @schema FailoverGlobalReplicationGroupMessage
 */
export interface FailoverGlobalReplicationGroupMessage {
  /**
   * @schema FailoverGlobalReplicationGroupMessage#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId: string;

  /**
   * @schema FailoverGlobalReplicationGroupMessage#PrimaryRegion
   */
  readonly primaryRegion: string;

  /**
   * @schema FailoverGlobalReplicationGroupMessage#PrimaryReplicationGroupId
   */
  readonly primaryReplicationGroupId: string;

}

/**
 * @schema FailoverGlobalReplicationGroupResult
 */
export interface FailoverGlobalReplicationGroupResult {
  /**
   * @schema FailoverGlobalReplicationGroupResult#GlobalReplicationGroup
   */
  readonly globalReplicationGroup?: GlobalReplicationGroup;

}

/**
 * @schema IncreaseNodeGroupsInGlobalReplicationGroupMessage
 */
export interface IncreaseNodeGroupsInGlobalReplicationGroupMessage {
  /**
   * @schema IncreaseNodeGroupsInGlobalReplicationGroupMessage#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId: string;

  /**
   * @schema IncreaseNodeGroupsInGlobalReplicationGroupMessage#NodeGroupCount
   */
  readonly nodeGroupCount: number;

  /**
   * @schema IncreaseNodeGroupsInGlobalReplicationGroupMessage#RegionalConfigurations
   */
  readonly regionalConfigurations?: RegionalConfiguration[];

  /**
   * @schema IncreaseNodeGroupsInGlobalReplicationGroupMessage#ApplyImmediately
   */
  readonly applyImmediately: boolean;

}

/**
 * @schema IncreaseNodeGroupsInGlobalReplicationGroupResult
 */
export interface IncreaseNodeGroupsInGlobalReplicationGroupResult {
  /**
   * @schema IncreaseNodeGroupsInGlobalReplicationGroupResult#GlobalReplicationGroup
   */
  readonly globalReplicationGroup?: GlobalReplicationGroup;

}

/**
 * @schema IncreaseReplicaCountMessage
 */
export interface IncreaseReplicaCountMessage {
  /**
   * @schema IncreaseReplicaCountMessage#ReplicationGroupId
   */
  readonly replicationGroupId: string;

  /**
   * @schema IncreaseReplicaCountMessage#NewReplicaCount
   */
  readonly newReplicaCount?: number;

  /**
   * @schema IncreaseReplicaCountMessage#ReplicaConfiguration
   */
  readonly replicaConfiguration?: ConfigureShard[];

  /**
   * @schema IncreaseReplicaCountMessage#ApplyImmediately
   */
  readonly applyImmediately: boolean;

}

/**
 * @schema IncreaseReplicaCountResult
 */
export interface IncreaseReplicaCountResult {
  /**
   * @schema IncreaseReplicaCountResult#ReplicationGroup
   */
  readonly replicationGroup?: ReplicationGroup;

}

/**
 * @schema ListAllowedNodeTypeModificationsMessage
 */
export interface ListAllowedNodeTypeModificationsMessage {
  /**
   * @schema ListAllowedNodeTypeModificationsMessage#CacheClusterId
   */
  readonly cacheClusterId?: string;

  /**
   * @schema ListAllowedNodeTypeModificationsMessage#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

}

/**
 * @schema AllowedNodeTypeModificationsMessage
 */
export interface AllowedNodeTypeModificationsMessage {
  /**
   * @schema AllowedNodeTypeModificationsMessage#ScaleUpModifications
   */
  readonly scaleUpModifications?: string[];

  /**
   * @schema AllowedNodeTypeModificationsMessage#ScaleDownModifications
   */
  readonly scaleDownModifications?: string[];

}

/**
 * @schema ListTagsForResourceMessage
 */
export interface ListTagsForResourceMessage {
  /**
   * @schema ListTagsForResourceMessage#ResourceName
   */
  readonly resourceName: string;

}

/**
 * @schema ModifyCacheClusterMessage
 */
export interface ModifyCacheClusterMessage {
  /**
   * @schema ModifyCacheClusterMessage#CacheClusterId
   */
  readonly cacheClusterId: string;

  /**
   * @schema ModifyCacheClusterMessage#NumCacheNodes
   */
  readonly numCacheNodes?: number;

  /**
   * @schema ModifyCacheClusterMessage#CacheNodeIdsToRemove
   */
  readonly cacheNodeIdsToRemove?: string[];

  /**
   * @schema ModifyCacheClusterMessage#AZMode
   */
  readonly azMode?: string;

  /**
   * @schema ModifyCacheClusterMessage#NewAvailabilityZones
   */
  readonly newAvailabilityZones?: string[];

  /**
   * @schema ModifyCacheClusterMessage#CacheSecurityGroupNames
   */
  readonly cacheSecurityGroupNames?: string[];

  /**
   * @schema ModifyCacheClusterMessage#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema ModifyCacheClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema ModifyCacheClusterMessage#NotificationTopicArn
   */
  readonly notificationTopicArn?: string;

  /**
   * @schema ModifyCacheClusterMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName?: string;

  /**
   * @schema ModifyCacheClusterMessage#NotificationTopicStatus
   */
  readonly notificationTopicStatus?: string;

  /**
   * @schema ModifyCacheClusterMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema ModifyCacheClusterMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema ModifyCacheClusterMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema ModifyCacheClusterMessage#SnapshotRetentionLimit
   */
  readonly snapshotRetentionLimit?: number;

  /**
   * @schema ModifyCacheClusterMessage#SnapshotWindow
   */
  readonly snapshotWindow?: string;

  /**
   * @schema ModifyCacheClusterMessage#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema ModifyCacheClusterMessage#AuthToken
   */
  readonly authToken?: string;

  /**
   * @schema ModifyCacheClusterMessage#AuthTokenUpdateStrategy
   */
  readonly authTokenUpdateStrategy?: string;

}

/**
 * @schema ModifyCacheClusterResult
 */
export interface ModifyCacheClusterResult {
  /**
   * @schema ModifyCacheClusterResult#CacheCluster
   */
  readonly cacheCluster?: CacheCluster;

}

/**
 * @schema ModifyCacheParameterGroupMessage
 */
export interface ModifyCacheParameterGroupMessage {
  /**
   * @schema ModifyCacheParameterGroupMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName: string;

  /**
   * @schema ModifyCacheParameterGroupMessage#ParameterNameValues
   */
  readonly parameterNameValues: ParameterNameValue[];

}

/**
 * @schema CacheParameterGroupNameMessage
 */
export interface CacheParameterGroupNameMessage {
  /**
   * @schema CacheParameterGroupNameMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName?: string;

}

/**
 * @schema ModifyCacheSubnetGroupMessage
 */
export interface ModifyCacheSubnetGroupMessage {
  /**
   * @schema ModifyCacheSubnetGroupMessage#CacheSubnetGroupName
   */
  readonly cacheSubnetGroupName: string;

  /**
   * @schema ModifyCacheSubnetGroupMessage#CacheSubnetGroupDescription
   */
  readonly cacheSubnetGroupDescription?: string;

  /**
   * @schema ModifyCacheSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds?: string[];

}

/**
 * @schema ModifyCacheSubnetGroupResult
 */
export interface ModifyCacheSubnetGroupResult {
  /**
   * @schema ModifyCacheSubnetGroupResult#CacheSubnetGroup
   */
  readonly cacheSubnetGroup?: CacheSubnetGroup;

}

/**
 * @schema ModifyGlobalReplicationGroupMessage
 */
export interface ModifyGlobalReplicationGroupMessage {
  /**
   * @schema ModifyGlobalReplicationGroupMessage#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId: string;

  /**
   * @schema ModifyGlobalReplicationGroupMessage#ApplyImmediately
   */
  readonly applyImmediately: boolean;

  /**
   * @schema ModifyGlobalReplicationGroupMessage#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema ModifyGlobalReplicationGroupMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema ModifyGlobalReplicationGroupMessage#GlobalReplicationGroupDescription
   */
  readonly globalReplicationGroupDescription?: string;

  /**
   * @schema ModifyGlobalReplicationGroupMessage#AutomaticFailoverEnabled
   */
  readonly automaticFailoverEnabled?: boolean;

}

/**
 * @schema ModifyGlobalReplicationGroupResult
 */
export interface ModifyGlobalReplicationGroupResult {
  /**
   * @schema ModifyGlobalReplicationGroupResult#GlobalReplicationGroup
   */
  readonly globalReplicationGroup?: GlobalReplicationGroup;

}

/**
 * @schema ModifyReplicationGroupMessage
 */
export interface ModifyReplicationGroupMessage {
  /**
   * @schema ModifyReplicationGroupMessage#ReplicationGroupId
   */
  readonly replicationGroupId: string;

  /**
   * @schema ModifyReplicationGroupMessage#ReplicationGroupDescription
   */
  readonly replicationGroupDescription?: string;

  /**
   * @schema ModifyReplicationGroupMessage#PrimaryClusterId
   */
  readonly primaryClusterId?: string;

  /**
   * @schema ModifyReplicationGroupMessage#SnapshottingClusterId
   */
  readonly snapshottingClusterId?: string;

  /**
   * @schema ModifyReplicationGroupMessage#AutomaticFailoverEnabled
   */
  readonly automaticFailoverEnabled?: boolean;

  /**
   * @schema ModifyReplicationGroupMessage#MultiAZEnabled
   */
  readonly multiAzEnabled?: boolean;

  /**
   * @schema ModifyReplicationGroupMessage#NodeGroupId
   */
  readonly nodeGroupId?: string;

  /**
   * @schema ModifyReplicationGroupMessage#CacheSecurityGroupNames
   */
  readonly cacheSecurityGroupNames?: string[];

  /**
   * @schema ModifyReplicationGroupMessage#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema ModifyReplicationGroupMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema ModifyReplicationGroupMessage#NotificationTopicArn
   */
  readonly notificationTopicArn?: string;

  /**
   * @schema ModifyReplicationGroupMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName?: string;

  /**
   * @schema ModifyReplicationGroupMessage#NotificationTopicStatus
   */
  readonly notificationTopicStatus?: string;

  /**
   * @schema ModifyReplicationGroupMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema ModifyReplicationGroupMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema ModifyReplicationGroupMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema ModifyReplicationGroupMessage#SnapshotRetentionLimit
   */
  readonly snapshotRetentionLimit?: number;

  /**
   * @schema ModifyReplicationGroupMessage#SnapshotWindow
   */
  readonly snapshotWindow?: string;

  /**
   * @schema ModifyReplicationGroupMessage#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema ModifyReplicationGroupMessage#AuthToken
   */
  readonly authToken?: string;

  /**
   * @schema ModifyReplicationGroupMessage#AuthTokenUpdateStrategy
   */
  readonly authTokenUpdateStrategy?: string;

  /**
   * @schema ModifyReplicationGroupMessage#UserGroupIdsToAdd
   */
  readonly userGroupIdsToAdd?: string[];

  /**
   * @schema ModifyReplicationGroupMessage#UserGroupIdsToRemove
   */
  readonly userGroupIdsToRemove?: string[];

  /**
   * @schema ModifyReplicationGroupMessage#RemoveUserGroups
   */
  readonly removeUserGroups?: boolean;

}

/**
 * @schema ModifyReplicationGroupResult
 */
export interface ModifyReplicationGroupResult {
  /**
   * @schema ModifyReplicationGroupResult#ReplicationGroup
   */
  readonly replicationGroup?: ReplicationGroup;

}

/**
 * @schema ModifyReplicationGroupShardConfigurationMessage
 */
export interface ModifyReplicationGroupShardConfigurationMessage {
  /**
   * @schema ModifyReplicationGroupShardConfigurationMessage#ReplicationGroupId
   */
  readonly replicationGroupId: string;

  /**
   * @schema ModifyReplicationGroupShardConfigurationMessage#NodeGroupCount
   */
  readonly nodeGroupCount: number;

  /**
   * @schema ModifyReplicationGroupShardConfigurationMessage#ApplyImmediately
   */
  readonly applyImmediately: boolean;

  /**
   * @schema ModifyReplicationGroupShardConfigurationMessage#ReshardingConfiguration
   */
  readonly reshardingConfiguration?: ReshardingConfiguration[];

  /**
   * @schema ModifyReplicationGroupShardConfigurationMessage#NodeGroupsToRemove
   */
  readonly nodeGroupsToRemove?: string[];

  /**
   * @schema ModifyReplicationGroupShardConfigurationMessage#NodeGroupsToRetain
   */
  readonly nodeGroupsToRetain?: string[];

}

/**
 * @schema ModifyReplicationGroupShardConfigurationResult
 */
export interface ModifyReplicationGroupShardConfigurationResult {
  /**
   * @schema ModifyReplicationGroupShardConfigurationResult#ReplicationGroup
   */
  readonly replicationGroup?: ReplicationGroup;

}

/**
 * @schema ModifyUserMessage
 */
export interface ModifyUserMessage {
  /**
   * @schema ModifyUserMessage#UserId
   */
  readonly userId: string;

  /**
   * @schema ModifyUserMessage#AccessString
   */
  readonly accessString?: string;

  /**
   * @schema ModifyUserMessage#AppendAccessString
   */
  readonly appendAccessString?: string;

  /**
   * @schema ModifyUserMessage#Passwords
   */
  readonly passwords?: string[];

  /**
   * @schema ModifyUserMessage#NoPasswordRequired
   */
  readonly noPasswordRequired?: boolean;

}

/**
 * @schema ModifyUserGroupMessage
 */
export interface ModifyUserGroupMessage {
  /**
   * @schema ModifyUserGroupMessage#UserGroupId
   */
  readonly userGroupId: string;

  /**
   * @schema ModifyUserGroupMessage#UserIdsToAdd
   */
  readonly userIdsToAdd?: string[];

  /**
   * @schema ModifyUserGroupMessage#UserIdsToRemove
   */
  readonly userIdsToRemove?: string[];

}

/**
 * @schema PurchaseReservedCacheNodesOfferingMessage
 */
export interface PurchaseReservedCacheNodesOfferingMessage {
  /**
   * @schema PurchaseReservedCacheNodesOfferingMessage#ReservedCacheNodesOfferingId
   */
  readonly reservedCacheNodesOfferingId: string;

  /**
   * @schema PurchaseReservedCacheNodesOfferingMessage#ReservedCacheNodeId
   */
  readonly reservedCacheNodeId?: string;

  /**
   * @schema PurchaseReservedCacheNodesOfferingMessage#CacheNodeCount
   */
  readonly cacheNodeCount?: number;

}

/**
 * @schema PurchaseReservedCacheNodesOfferingResult
 */
export interface PurchaseReservedCacheNodesOfferingResult {
  /**
   * @schema PurchaseReservedCacheNodesOfferingResult#ReservedCacheNode
   */
  readonly reservedCacheNode?: ReservedCacheNode;

}

/**
 * @schema RebalanceSlotsInGlobalReplicationGroupMessage
 */
export interface RebalanceSlotsInGlobalReplicationGroupMessage {
  /**
   * @schema RebalanceSlotsInGlobalReplicationGroupMessage#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId: string;

  /**
   * @schema RebalanceSlotsInGlobalReplicationGroupMessage#ApplyImmediately
   */
  readonly applyImmediately: boolean;

}

/**
 * @schema RebalanceSlotsInGlobalReplicationGroupResult
 */
export interface RebalanceSlotsInGlobalReplicationGroupResult {
  /**
   * @schema RebalanceSlotsInGlobalReplicationGroupResult#GlobalReplicationGroup
   */
  readonly globalReplicationGroup?: GlobalReplicationGroup;

}

/**
 * @schema RebootCacheClusterMessage
 */
export interface RebootCacheClusterMessage {
  /**
   * @schema RebootCacheClusterMessage#CacheClusterId
   */
  readonly cacheClusterId: string;

  /**
   * @schema RebootCacheClusterMessage#CacheNodeIdsToReboot
   */
  readonly cacheNodeIdsToReboot: string[];

}

/**
 * @schema RebootCacheClusterResult
 */
export interface RebootCacheClusterResult {
  /**
   * @schema RebootCacheClusterResult#CacheCluster
   */
  readonly cacheCluster?: CacheCluster;

}

/**
 * @schema RemoveTagsFromResourceMessage
 */
export interface RemoveTagsFromResourceMessage {
  /**
   * @schema RemoveTagsFromResourceMessage#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema RemoveTagsFromResourceMessage#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema ResetCacheParameterGroupMessage
 */
export interface ResetCacheParameterGroupMessage {
  /**
   * @schema ResetCacheParameterGroupMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName: string;

  /**
   * @schema ResetCacheParameterGroupMessage#ResetAllParameters
   */
  readonly resetAllParameters?: boolean;

  /**
   * @schema ResetCacheParameterGroupMessage#ParameterNameValues
   */
  readonly parameterNameValues?: ParameterNameValue[];

}

/**
 * @schema RevokeCacheSecurityGroupIngressMessage
 */
export interface RevokeCacheSecurityGroupIngressMessage {
  /**
   * @schema RevokeCacheSecurityGroupIngressMessage#CacheSecurityGroupName
   */
  readonly cacheSecurityGroupName: string;

  /**
   * @schema RevokeCacheSecurityGroupIngressMessage#EC2SecurityGroupName
   */
  readonly ec2SecurityGroupName: string;

  /**
   * @schema RevokeCacheSecurityGroupIngressMessage#EC2SecurityGroupOwnerId
   */
  readonly ec2SecurityGroupOwnerId: string;

}

/**
 * @schema RevokeCacheSecurityGroupIngressResult
 */
export interface RevokeCacheSecurityGroupIngressResult {
  /**
   * @schema RevokeCacheSecurityGroupIngressResult#CacheSecurityGroup
   */
  readonly cacheSecurityGroup?: CacheSecurityGroup;

}

/**
 * @schema StartMigrationMessage
 */
export interface StartMigrationMessage {
  /**
   * @schema StartMigrationMessage#ReplicationGroupId
   */
  readonly replicationGroupId: string;

  /**
   * @schema StartMigrationMessage#CustomerNodeEndpointList
   */
  readonly customerNodeEndpointList: CustomerNodeEndpoint[];

}

/**
 * @schema StartMigrationResponse
 */
export interface StartMigrationResponse {
  /**
   * @schema StartMigrationResponse#ReplicationGroup
   */
  readonly replicationGroup?: ReplicationGroup;

}

/**
 * @schema TestFailoverMessage
 */
export interface TestFailoverMessage {
  /**
   * @schema TestFailoverMessage#ReplicationGroupId
   */
  readonly replicationGroupId: string;

  /**
   * @schema TestFailoverMessage#NodeGroupId
   */
  readonly nodeGroupId: string;

}

/**
 * @schema TestFailoverResult
 */
export interface TestFailoverResult {
  /**
   * @schema TestFailoverResult#ReplicationGroup
   */
  readonly replicationGroup?: ReplicationGroup;

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
 * @schema CacheSecurityGroup
 */
export interface CacheSecurityGroup {
  /**
   * @schema CacheSecurityGroup#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema CacheSecurityGroup#CacheSecurityGroupName
   */
  readonly cacheSecurityGroupName?: string;

  /**
   * @schema CacheSecurityGroup#Description
   */
  readonly description?: string;

  /**
   * @schema CacheSecurityGroup#EC2SecurityGroups
   */
  readonly ec2SecurityGroups?: Ec2SecurityGroup[];

  /**
   * @schema CacheSecurityGroup#ARN
   */
  readonly arn?: string;

}

/**
 * @schema ProcessedUpdateAction
 */
export interface ProcessedUpdateAction {
  /**
   * @schema ProcessedUpdateAction#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema ProcessedUpdateAction#CacheClusterId
   */
  readonly cacheClusterId?: string;

  /**
   * @schema ProcessedUpdateAction#ServiceUpdateName
   */
  readonly serviceUpdateName?: string;

  /**
   * @schema ProcessedUpdateAction#UpdateActionStatus
   */
  readonly updateActionStatus?: string;

}

/**
 * @schema UnprocessedUpdateAction
 */
export interface UnprocessedUpdateAction {
  /**
   * @schema UnprocessedUpdateAction#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema UnprocessedUpdateAction#CacheClusterId
   */
  readonly cacheClusterId?: string;

  /**
   * @schema UnprocessedUpdateAction#ServiceUpdateName
   */
  readonly serviceUpdateName?: string;

  /**
   * @schema UnprocessedUpdateAction#ErrorType
   */
  readonly errorType?: string;

  /**
   * @schema UnprocessedUpdateAction#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema ReplicationGroup
 */
export interface ReplicationGroup {
  /**
   * @schema ReplicationGroup#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema ReplicationGroup#Description
   */
  readonly description?: string;

  /**
   * @schema ReplicationGroup#GlobalReplicationGroupInfo
   */
  readonly globalReplicationGroupInfo?: GlobalReplicationGroupInfo;

  /**
   * @schema ReplicationGroup#Status
   */
  readonly status?: string;

  /**
   * @schema ReplicationGroup#PendingModifiedValues
   */
  readonly pendingModifiedValues?: ReplicationGroupPendingModifiedValues;

  /**
   * @schema ReplicationGroup#MemberClusters
   */
  readonly memberClusters?: string[];

  /**
   * @schema ReplicationGroup#NodeGroups
   */
  readonly nodeGroups?: NodeGroup[];

  /**
   * @schema ReplicationGroup#SnapshottingClusterId
   */
  readonly snapshottingClusterId?: string;

  /**
   * @schema ReplicationGroup#AutomaticFailover
   */
  readonly automaticFailover?: string;

  /**
   * @schema ReplicationGroup#MultiAZ
   */
  readonly multiAz?: string;

  /**
   * @schema ReplicationGroup#ConfigurationEndpoint
   */
  readonly configurationEndpoint?: Endpoint;

  /**
   * @schema ReplicationGroup#SnapshotRetentionLimit
   */
  readonly snapshotRetentionLimit?: number;

  /**
   * @schema ReplicationGroup#SnapshotWindow
   */
  readonly snapshotWindow?: string;

  /**
   * @schema ReplicationGroup#ClusterEnabled
   */
  readonly clusterEnabled?: boolean;

  /**
   * @schema ReplicationGroup#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema ReplicationGroup#AuthTokenEnabled
   */
  readonly authTokenEnabled?: boolean;

  /**
   * @schema ReplicationGroup#AuthTokenLastModifiedDate
   */
  readonly authTokenLastModifiedDate?: string;

  /**
   * @schema ReplicationGroup#TransitEncryptionEnabled
   */
  readonly transitEncryptionEnabled?: boolean;

  /**
   * @schema ReplicationGroup#AtRestEncryptionEnabled
   */
  readonly atRestEncryptionEnabled?: boolean;

  /**
   * @schema ReplicationGroup#MemberClustersOutpostArns
   */
  readonly memberClustersOutpostArns?: string[];

  /**
   * @schema ReplicationGroup#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema ReplicationGroup#ARN
   */
  readonly arn?: string;

  /**
   * @schema ReplicationGroup#UserGroupIds
   */
  readonly userGroupIds?: string[];

}

/**
 * @schema Snapshot
 */
export interface Snapshot {
  /**
   * @schema Snapshot#SnapshotName
   */
  readonly snapshotName?: string;

  /**
   * @schema Snapshot#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema Snapshot#ReplicationGroupDescription
   */
  readonly replicationGroupDescription?: string;

  /**
   * @schema Snapshot#CacheClusterId
   */
  readonly cacheClusterId?: string;

  /**
   * @schema Snapshot#SnapshotStatus
   */
  readonly snapshotStatus?: string;

  /**
   * @schema Snapshot#SnapshotSource
   */
  readonly snapshotSource?: string;

  /**
   * @schema Snapshot#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema Snapshot#Engine
   */
  readonly engine?: string;

  /**
   * @schema Snapshot#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema Snapshot#NumCacheNodes
   */
  readonly numCacheNodes?: number;

  /**
   * @schema Snapshot#PreferredAvailabilityZone
   */
  readonly preferredAvailabilityZone?: string;

  /**
   * @schema Snapshot#PreferredOutpostArn
   */
  readonly preferredOutpostArn?: string;

  /**
   * @schema Snapshot#CacheClusterCreateTime
   */
  readonly cacheClusterCreateTime?: string;

  /**
   * @schema Snapshot#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema Snapshot#TopicArn
   */
  readonly topicArn?: string;

  /**
   * @schema Snapshot#Port
   */
  readonly port?: number;

  /**
   * @schema Snapshot#CacheParameterGroupName
   */
  readonly cacheParameterGroupName?: string;

  /**
   * @schema Snapshot#CacheSubnetGroupName
   */
  readonly cacheSubnetGroupName?: string;

  /**
   * @schema Snapshot#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Snapshot#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema Snapshot#SnapshotRetentionLimit
   */
  readonly snapshotRetentionLimit?: number;

  /**
   * @schema Snapshot#SnapshotWindow
   */
  readonly snapshotWindow?: string;

  /**
   * @schema Snapshot#NumNodeGroups
   */
  readonly numNodeGroups?: number;

  /**
   * @schema Snapshot#AutomaticFailover
   */
  readonly automaticFailover?: string;

  /**
   * @schema Snapshot#NodeSnapshots
   */
  readonly nodeSnapshots?: NodeSnapshot[];

  /**
   * @schema Snapshot#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema Snapshot#ARN
   */
  readonly arn?: string;

}

/**
 * @schema CacheCluster
 */
export interface CacheCluster {
  /**
   * @schema CacheCluster#CacheClusterId
   */
  readonly cacheClusterId?: string;

  /**
   * @schema CacheCluster#ConfigurationEndpoint
   */
  readonly configurationEndpoint?: Endpoint;

  /**
   * @schema CacheCluster#ClientDownloadLandingPage
   */
  readonly clientDownloadLandingPage?: string;

  /**
   * @schema CacheCluster#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema CacheCluster#Engine
   */
  readonly engine?: string;

  /**
   * @schema CacheCluster#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema CacheCluster#CacheClusterStatus
   */
  readonly cacheClusterStatus?: string;

  /**
   * @schema CacheCluster#NumCacheNodes
   */
  readonly numCacheNodes?: number;

  /**
   * @schema CacheCluster#PreferredAvailabilityZone
   */
  readonly preferredAvailabilityZone?: string;

  /**
   * @schema CacheCluster#PreferredOutpostArn
   */
  readonly preferredOutpostArn?: string;

  /**
   * @schema CacheCluster#CacheClusterCreateTime
   */
  readonly cacheClusterCreateTime?: string;

  /**
   * @schema CacheCluster#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema CacheCluster#PendingModifiedValues
   */
  readonly pendingModifiedValues?: PendingModifiedValues;

  /**
   * @schema CacheCluster#NotificationConfiguration
   */
  readonly notificationConfiguration?: NotificationConfiguration;

  /**
   * @schema CacheCluster#CacheSecurityGroups
   */
  readonly cacheSecurityGroups?: CacheSecurityGroupMembership[];

  /**
   * @schema CacheCluster#CacheParameterGroup
   */
  readonly cacheParameterGroup?: CacheParameterGroupStatus;

  /**
   * @schema CacheCluster#CacheSubnetGroupName
   */
  readonly cacheSubnetGroupName?: string;

  /**
   * @schema CacheCluster#CacheNodes
   */
  readonly cacheNodes?: CacheNode[];

  /**
   * @schema CacheCluster#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema CacheCluster#SecurityGroups
   */
  readonly securityGroups?: SecurityGroupMembership[];

  /**
   * @schema CacheCluster#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema CacheCluster#SnapshotRetentionLimit
   */
  readonly snapshotRetentionLimit?: number;

  /**
   * @schema CacheCluster#SnapshotWindow
   */
  readonly snapshotWindow?: string;

  /**
   * @schema CacheCluster#AuthTokenEnabled
   */
  readonly authTokenEnabled?: boolean;

  /**
   * @schema CacheCluster#AuthTokenLastModifiedDate
   */
  readonly authTokenLastModifiedDate?: string;

  /**
   * @schema CacheCluster#TransitEncryptionEnabled
   */
  readonly transitEncryptionEnabled?: boolean;

  /**
   * @schema CacheCluster#AtRestEncryptionEnabled
   */
  readonly atRestEncryptionEnabled?: boolean;

  /**
   * @schema CacheCluster#ARN
   */
  readonly arn?: string;

}

/**
 * @schema CacheParameterGroup
 */
export interface CacheParameterGroup {
  /**
   * @schema CacheParameterGroup#CacheParameterGroupName
   */
  readonly cacheParameterGroupName?: string;

  /**
   * @schema CacheParameterGroup#CacheParameterGroupFamily
   */
  readonly cacheParameterGroupFamily?: string;

  /**
   * @schema CacheParameterGroup#Description
   */
  readonly description?: string;

  /**
   * @schema CacheParameterGroup#IsGlobal
   */
  readonly isGlobal?: boolean;

  /**
   * @schema CacheParameterGroup#ARN
   */
  readonly arn?: string;

}

/**
 * @schema CacheSubnetGroup
 */
export interface CacheSubnetGroup {
  /**
   * @schema CacheSubnetGroup#CacheSubnetGroupName
   */
  readonly cacheSubnetGroupName?: string;

  /**
   * @schema CacheSubnetGroup#CacheSubnetGroupDescription
   */
  readonly cacheSubnetGroupDescription?: string;

  /**
   * @schema CacheSubnetGroup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema CacheSubnetGroup#Subnets
   */
  readonly subnets?: Subnet[];

  /**
   * @schema CacheSubnetGroup#ARN
   */
  readonly arn?: string;

}

/**
 * @schema GlobalReplicationGroup
 */
export interface GlobalReplicationGroup {
  /**
   * @schema GlobalReplicationGroup#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId?: string;

  /**
   * @schema GlobalReplicationGroup#GlobalReplicationGroupDescription
   */
  readonly globalReplicationGroupDescription?: string;

  /**
   * @schema GlobalReplicationGroup#Status
   */
  readonly status?: string;

  /**
   * @schema GlobalReplicationGroup#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema GlobalReplicationGroup#Engine
   */
  readonly engine?: string;

  /**
   * @schema GlobalReplicationGroup#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema GlobalReplicationGroup#Members
   */
  readonly members?: GlobalReplicationGroupMember[];

  /**
   * @schema GlobalReplicationGroup#ClusterEnabled
   */
  readonly clusterEnabled?: boolean;

  /**
   * @schema GlobalReplicationGroup#GlobalNodeGroups
   */
  readonly globalNodeGroups?: GlobalNodeGroup[];

  /**
   * @schema GlobalReplicationGroup#AuthTokenEnabled
   */
  readonly authTokenEnabled?: boolean;

  /**
   * @schema GlobalReplicationGroup#TransitEncryptionEnabled
   */
  readonly transitEncryptionEnabled?: boolean;

  /**
   * @schema GlobalReplicationGroup#AtRestEncryptionEnabled
   */
  readonly atRestEncryptionEnabled?: boolean;

  /**
   * @schema GlobalReplicationGroup#ARN
   */
  readonly arn?: string;

}

/**
 * @schema NodeGroupConfiguration
 */
export interface NodeGroupConfiguration {
  /**
   * @schema NodeGroupConfiguration#NodeGroupId
   */
  readonly nodeGroupId?: string;

  /**
   * @schema NodeGroupConfiguration#Slots
   */
  readonly slots?: string;

  /**
   * @schema NodeGroupConfiguration#ReplicaCount
   */
  readonly replicaCount?: number;

  /**
   * @schema NodeGroupConfiguration#PrimaryAvailabilityZone
   */
  readonly primaryAvailabilityZone?: string;

  /**
   * @schema NodeGroupConfiguration#ReplicaAvailabilityZones
   */
  readonly replicaAvailabilityZones?: string[];

  /**
   * @schema NodeGroupConfiguration#PrimaryOutpostArn
   */
  readonly primaryOutpostArn?: string;

  /**
   * @schema NodeGroupConfiguration#ReplicaOutpostArns
   */
  readonly replicaOutpostArns?: string[];

}

/**
 * @schema Authentication
 */
export interface Authentication {
  /**
   * @schema Authentication#Type
   */
  readonly type?: string;

  /**
   * @schema Authentication#PasswordCount
   */
  readonly passwordCount?: number;

}

/**
 * @schema UserGroupPendingChanges
 */
export interface UserGroupPendingChanges {
  /**
   * @schema UserGroupPendingChanges#UserIdsToRemove
   */
  readonly userIdsToRemove?: string[];

  /**
   * @schema UserGroupPendingChanges#UserIdsToAdd
   */
  readonly userIdsToAdd?: string[];

}

/**
 * @schema ConfigureShard
 */
export interface ConfigureShard {
  /**
   * @schema ConfigureShard#NodeGroupId
   */
  readonly nodeGroupId: string;

  /**
   * @schema ConfigureShard#NewReplicaCount
   */
  readonly newReplicaCount: number;

  /**
   * @schema ConfigureShard#PreferredAvailabilityZones
   */
  readonly preferredAvailabilityZones?: string[];

  /**
   * @schema ConfigureShard#PreferredOutpostArns
   */
  readonly preferredOutpostArns?: string[];

}

/**
 * @schema CacheEngineVersion
 */
export interface CacheEngineVersion {
  /**
   * @schema CacheEngineVersion#Engine
   */
  readonly engine?: string;

  /**
   * @schema CacheEngineVersion#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema CacheEngineVersion#CacheParameterGroupFamily
   */
  readonly cacheParameterGroupFamily?: string;

  /**
   * @schema CacheEngineVersion#CacheEngineDescription
   */
  readonly cacheEngineDescription?: string;

  /**
   * @schema CacheEngineVersion#CacheEngineVersionDescription
   */
  readonly cacheEngineVersionDescription?: string;

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
   * @schema Parameter#ParameterValue
   */
  readonly parameterValue?: string;

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
  readonly isModifiable?: boolean;

  /**
   * @schema Parameter#MinimumEngineVersion
   */
  readonly minimumEngineVersion?: string;

  /**
   * @schema Parameter#ChangeType
   */
  readonly changeType?: string;

}

/**
 * @schema CacheNodeTypeSpecificParameter
 */
export interface CacheNodeTypeSpecificParameter {
  /**
   * @schema CacheNodeTypeSpecificParameter#ParameterName
   */
  readonly parameterName?: string;

  /**
   * @schema CacheNodeTypeSpecificParameter#Description
   */
  readonly description?: string;

  /**
   * @schema CacheNodeTypeSpecificParameter#Source
   */
  readonly source?: string;

  /**
   * @schema CacheNodeTypeSpecificParameter#DataType
   */
  readonly dataType?: string;

  /**
   * @schema CacheNodeTypeSpecificParameter#AllowedValues
   */
  readonly allowedValues?: string;

  /**
   * @schema CacheNodeTypeSpecificParameter#IsModifiable
   */
  readonly isModifiable?: boolean;

  /**
   * @schema CacheNodeTypeSpecificParameter#MinimumEngineVersion
   */
  readonly minimumEngineVersion?: string;

  /**
   * @schema CacheNodeTypeSpecificParameter#CacheNodeTypeSpecificValues
   */
  readonly cacheNodeTypeSpecificValues?: CacheNodeTypeSpecificValue[];

  /**
   * @schema CacheNodeTypeSpecificParameter#ChangeType
   */
  readonly changeType?: string;

}

/**
 * @schema EngineDefaults
 */
export interface EngineDefaults {
  /**
   * @schema EngineDefaults#CacheParameterGroupFamily
   */
  readonly cacheParameterGroupFamily?: string;

  /**
   * @schema EngineDefaults#Marker
   */
  readonly marker?: string;

  /**
   * @schema EngineDefaults#Parameters
   */
  readonly parameters?: Parameter[];

  /**
   * @schema EngineDefaults#CacheNodeTypeSpecificParameters
   */
  readonly cacheNodeTypeSpecificParameters?: CacheNodeTypeSpecificParameter[];

}

/**
 * @schema Event
 */
export interface Event {
  /**
   * @schema Event#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

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
 * @schema ReservedCacheNode
 */
export interface ReservedCacheNode {
  /**
   * @schema ReservedCacheNode#ReservedCacheNodeId
   */
  readonly reservedCacheNodeId?: string;

  /**
   * @schema ReservedCacheNode#ReservedCacheNodesOfferingId
   */
  readonly reservedCacheNodesOfferingId?: string;

  /**
   * @schema ReservedCacheNode#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema ReservedCacheNode#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ReservedCacheNode#Duration
   */
  readonly duration?: number;

  /**
   * @schema ReservedCacheNode#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema ReservedCacheNode#UsagePrice
   */
  readonly usagePrice?: number;

  /**
   * @schema ReservedCacheNode#CacheNodeCount
   */
  readonly cacheNodeCount?: number;

  /**
   * @schema ReservedCacheNode#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema ReservedCacheNode#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema ReservedCacheNode#State
   */
  readonly state?: string;

  /**
   * @schema ReservedCacheNode#RecurringCharges
   */
  readonly recurringCharges?: RecurringCharge[];

  /**
   * @schema ReservedCacheNode#ReservationARN
   */
  readonly reservationArn?: string;

}

/**
 * @schema ReservedCacheNodesOffering
 */
export interface ReservedCacheNodesOffering {
  /**
   * @schema ReservedCacheNodesOffering#ReservedCacheNodesOfferingId
   */
  readonly reservedCacheNodesOfferingId?: string;

  /**
   * @schema ReservedCacheNodesOffering#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema ReservedCacheNodesOffering#Duration
   */
  readonly duration?: number;

  /**
   * @schema ReservedCacheNodesOffering#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema ReservedCacheNodesOffering#UsagePrice
   */
  readonly usagePrice?: number;

  /**
   * @schema ReservedCacheNodesOffering#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema ReservedCacheNodesOffering#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema ReservedCacheNodesOffering#RecurringCharges
   */
  readonly recurringCharges?: RecurringCharge[];

}

/**
 * @schema ServiceUpdate
 */
export interface ServiceUpdate {
  /**
   * @schema ServiceUpdate#ServiceUpdateName
   */
  readonly serviceUpdateName?: string;

  /**
   * @schema ServiceUpdate#ServiceUpdateReleaseDate
   */
  readonly serviceUpdateReleaseDate?: string;

  /**
   * @schema ServiceUpdate#ServiceUpdateEndDate
   */
  readonly serviceUpdateEndDate?: string;

  /**
   * @schema ServiceUpdate#ServiceUpdateSeverity
   */
  readonly serviceUpdateSeverity?: string;

  /**
   * @schema ServiceUpdate#ServiceUpdateRecommendedApplyByDate
   */
  readonly serviceUpdateRecommendedApplyByDate?: string;

  /**
   * @schema ServiceUpdate#ServiceUpdateStatus
   */
  readonly serviceUpdateStatus?: string;

  /**
   * @schema ServiceUpdate#ServiceUpdateDescription
   */
  readonly serviceUpdateDescription?: string;

  /**
   * @schema ServiceUpdate#ServiceUpdateType
   */
  readonly serviceUpdateType?: string;

  /**
   * @schema ServiceUpdate#Engine
   */
  readonly engine?: string;

  /**
   * @schema ServiceUpdate#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema ServiceUpdate#AutoUpdateAfterRecommendedApplyByDate
   */
  readonly autoUpdateAfterRecommendedApplyByDate?: boolean;

  /**
   * @schema ServiceUpdate#EstimatedUpdateTime
   */
  readonly estimatedUpdateTime?: string;

}

/**
 * @schema TimeRangeFilter
 */
export interface TimeRangeFilter {
  /**
   * @schema TimeRangeFilter#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema TimeRangeFilter#EndTime
   */
  readonly endTime?: string;

}

/**
 * @schema UpdateAction
 */
export interface UpdateAction {
  /**
   * @schema UpdateAction#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema UpdateAction#CacheClusterId
   */
  readonly cacheClusterId?: string;

  /**
   * @schema UpdateAction#ServiceUpdateName
   */
  readonly serviceUpdateName?: string;

  /**
   * @schema UpdateAction#ServiceUpdateReleaseDate
   */
  readonly serviceUpdateReleaseDate?: string;

  /**
   * @schema UpdateAction#ServiceUpdateSeverity
   */
  readonly serviceUpdateSeverity?: string;

  /**
   * @schema UpdateAction#ServiceUpdateStatus
   */
  readonly serviceUpdateStatus?: string;

  /**
   * @schema UpdateAction#ServiceUpdateRecommendedApplyByDate
   */
  readonly serviceUpdateRecommendedApplyByDate?: string;

  /**
   * @schema UpdateAction#ServiceUpdateType
   */
  readonly serviceUpdateType?: string;

  /**
   * @schema UpdateAction#UpdateActionAvailableDate
   */
  readonly updateActionAvailableDate?: string;

  /**
   * @schema UpdateAction#UpdateActionStatus
   */
  readonly updateActionStatus?: string;

  /**
   * @schema UpdateAction#NodesUpdated
   */
  readonly nodesUpdated?: string;

  /**
   * @schema UpdateAction#UpdateActionStatusModifiedDate
   */
  readonly updateActionStatusModifiedDate?: string;

  /**
   * @schema UpdateAction#SlaMet
   */
  readonly slaMet?: string;

  /**
   * @schema UpdateAction#NodeGroupUpdateStatus
   */
  readonly nodeGroupUpdateStatus?: NodeGroupUpdateStatus[];

  /**
   * @schema UpdateAction#CacheNodeUpdateStatus
   */
  readonly cacheNodeUpdateStatus?: CacheNodeUpdateStatus[];

  /**
   * @schema UpdateAction#EstimatedUpdateTime
   */
  readonly estimatedUpdateTime?: string;

  /**
   * @schema UpdateAction#Engine
   */
  readonly engine?: string;

}

/**
 * @schema Filter
 */
export interface Filter {
  /**
   * @schema Filter#Name
   */
  readonly name: string;

  /**
   * @schema Filter#Values
   */
  readonly values: string[];

}

/**
 * @schema RegionalConfiguration
 */
export interface RegionalConfiguration {
  /**
   * @schema RegionalConfiguration#ReplicationGroupId
   */
  readonly replicationGroupId: string;

  /**
   * @schema RegionalConfiguration#ReplicationGroupRegion
   */
  readonly replicationGroupRegion: string;

  /**
   * @schema RegionalConfiguration#ReshardingConfiguration
   */
  readonly reshardingConfiguration: ReshardingConfiguration[];

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
 * @schema ReshardingConfiguration
 */
export interface ReshardingConfiguration {
  /**
   * @schema ReshardingConfiguration#NodeGroupId
   */
  readonly nodeGroupId?: string;

  /**
   * @schema ReshardingConfiguration#PreferredAvailabilityZones
   */
  readonly preferredAvailabilityZones?: string[];

}

/**
 * @schema CustomerNodeEndpoint
 */
export interface CustomerNodeEndpoint {
  /**
   * @schema CustomerNodeEndpoint#Address
   */
  readonly address?: string;

  /**
   * @schema CustomerNodeEndpoint#Port
   */
  readonly port?: number;

}

/**
 * @schema Ec2SecurityGroup
 */
export interface Ec2SecurityGroup {
  /**
   * @schema Ec2SecurityGroup#Status
   */
  readonly status?: string;

  /**
   * @schema Ec2SecurityGroup#EC2SecurityGroupName
   */
  readonly ec2SecurityGroupName?: string;

  /**
   * @schema Ec2SecurityGroup#EC2SecurityGroupOwnerId
   */
  readonly ec2SecurityGroupOwnerId?: string;

}

/**
 * @schema GlobalReplicationGroupInfo
 */
export interface GlobalReplicationGroupInfo {
  /**
   * @schema GlobalReplicationGroupInfo#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId?: string;

  /**
   * @schema GlobalReplicationGroupInfo#GlobalReplicationGroupMemberRole
   */
  readonly globalReplicationGroupMemberRole?: string;

}

/**
 * @schema ReplicationGroupPendingModifiedValues
 */
export interface ReplicationGroupPendingModifiedValues {
  /**
   * @schema ReplicationGroupPendingModifiedValues#PrimaryClusterId
   */
  readonly primaryClusterId?: string;

  /**
   * @schema ReplicationGroupPendingModifiedValues#AutomaticFailoverStatus
   */
  readonly automaticFailoverStatus?: string;

  /**
   * @schema ReplicationGroupPendingModifiedValues#Resharding
   */
  readonly resharding?: ReshardingStatus;

  /**
   * @schema ReplicationGroupPendingModifiedValues#AuthTokenStatus
   */
  readonly authTokenStatus?: string;

  /**
   * @schema ReplicationGroupPendingModifiedValues#UserGroups
   */
  readonly userGroups?: UserGroupsUpdateStatus;

}

/**
 * @schema NodeGroup
 */
export interface NodeGroup {
  /**
   * @schema NodeGroup#NodeGroupId
   */
  readonly nodeGroupId?: string;

  /**
   * @schema NodeGroup#Status
   */
  readonly status?: string;

  /**
   * @schema NodeGroup#PrimaryEndpoint
   */
  readonly primaryEndpoint?: Endpoint;

  /**
   * @schema NodeGroup#ReaderEndpoint
   */
  readonly readerEndpoint?: Endpoint;

  /**
   * @schema NodeGroup#Slots
   */
  readonly slots?: string;

  /**
   * @schema NodeGroup#NodeGroupMembers
   */
  readonly nodeGroupMembers?: NodeGroupMember[];

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
 * @schema NodeSnapshot
 */
export interface NodeSnapshot {
  /**
   * @schema NodeSnapshot#CacheClusterId
   */
  readonly cacheClusterId?: string;

  /**
   * @schema NodeSnapshot#NodeGroupId
   */
  readonly nodeGroupId?: string;

  /**
   * @schema NodeSnapshot#CacheNodeId
   */
  readonly cacheNodeId?: string;

  /**
   * @schema NodeSnapshot#NodeGroupConfiguration
   */
  readonly nodeGroupConfiguration?: NodeGroupConfiguration;

  /**
   * @schema NodeSnapshot#CacheSize
   */
  readonly cacheSize?: string;

  /**
   * @schema NodeSnapshot#CacheNodeCreateTime
   */
  readonly cacheNodeCreateTime?: string;

  /**
   * @schema NodeSnapshot#SnapshotCreateTime
   */
  readonly snapshotCreateTime?: string;

}

/**
 * @schema PendingModifiedValues
 */
export interface PendingModifiedValues {
  /**
   * @schema PendingModifiedValues#NumCacheNodes
   */
  readonly numCacheNodes?: number;

  /**
   * @schema PendingModifiedValues#CacheNodeIdsToRemove
   */
  readonly cacheNodeIdsToRemove?: string[];

  /**
   * @schema PendingModifiedValues#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema PendingModifiedValues#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema PendingModifiedValues#AuthTokenStatus
   */
  readonly authTokenStatus?: string;

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
 * @schema CacheSecurityGroupMembership
 */
export interface CacheSecurityGroupMembership {
  /**
   * @schema CacheSecurityGroupMembership#CacheSecurityGroupName
   */
  readonly cacheSecurityGroupName?: string;

  /**
   * @schema CacheSecurityGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * @schema CacheParameterGroupStatus
 */
export interface CacheParameterGroupStatus {
  /**
   * @schema CacheParameterGroupStatus#CacheParameterGroupName
   */
  readonly cacheParameterGroupName?: string;

  /**
   * @schema CacheParameterGroupStatus#ParameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

  /**
   * @schema CacheParameterGroupStatus#CacheNodeIdsToReboot
   */
  readonly cacheNodeIdsToReboot?: string[];

}

/**
 * @schema CacheNode
 */
export interface CacheNode {
  /**
   * @schema CacheNode#CacheNodeId
   */
  readonly cacheNodeId?: string;

  /**
   * @schema CacheNode#CacheNodeStatus
   */
  readonly cacheNodeStatus?: string;

  /**
   * @schema CacheNode#CacheNodeCreateTime
   */
  readonly cacheNodeCreateTime?: string;

  /**
   * @schema CacheNode#Endpoint
   */
  readonly endpoint?: Endpoint;

  /**
   * @schema CacheNode#ParameterGroupStatus
   */
  readonly parameterGroupStatus?: string;

  /**
   * @schema CacheNode#SourceCacheNodeId
   */
  readonly sourceCacheNodeId?: string;

  /**
   * @schema CacheNode#CustomerAvailabilityZone
   */
  readonly customerAvailabilityZone?: string;

  /**
   * @schema CacheNode#CustomerOutpostArn
   */
  readonly customerOutpostArn?: string;

}

/**
 * @schema SecurityGroupMembership
 */
export interface SecurityGroupMembership {
  /**
   * @schema SecurityGroupMembership#SecurityGroupId
   */
  readonly securityGroupId?: string;

  /**
   * @schema SecurityGroupMembership#Status
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
  readonly subnetAvailabilityZone?: AvailabilityZone;

  /**
   * @schema Subnet#SubnetOutpost
   */
  readonly subnetOutpost?: SubnetOutpost;

}

/**
 * @schema GlobalReplicationGroupMember
 */
export interface GlobalReplicationGroupMember {
  /**
   * @schema GlobalReplicationGroupMember#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema GlobalReplicationGroupMember#ReplicationGroupRegion
   */
  readonly replicationGroupRegion?: string;

  /**
   * @schema GlobalReplicationGroupMember#Role
   */
  readonly role?: string;

  /**
   * @schema GlobalReplicationGroupMember#AutomaticFailover
   */
  readonly automaticFailover?: string;

  /**
   * @schema GlobalReplicationGroupMember#Status
   */
  readonly status?: string;

}

/**
 * @schema GlobalNodeGroup
 */
export interface GlobalNodeGroup {
  /**
   * @schema GlobalNodeGroup#GlobalNodeGroupId
   */
  readonly globalNodeGroupId?: string;

  /**
   * @schema GlobalNodeGroup#Slots
   */
  readonly slots?: string;

}

/**
 * @schema CacheNodeTypeSpecificValue
 */
export interface CacheNodeTypeSpecificValue {
  /**
   * @schema CacheNodeTypeSpecificValue#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema CacheNodeTypeSpecificValue#Value
   */
  readonly value?: string;

}

/**
 * @schema RecurringCharge
 */
export interface RecurringCharge {
  /**
   * @schema RecurringCharge#RecurringChargeAmount
   */
  readonly recurringChargeAmount?: number;

  /**
   * @schema RecurringCharge#RecurringChargeFrequency
   */
  readonly recurringChargeFrequency?: string;

}

/**
 * @schema NodeGroupUpdateStatus
 */
export interface NodeGroupUpdateStatus {
  /**
   * @schema NodeGroupUpdateStatus#NodeGroupId
   */
  readonly nodeGroupId?: string;

  /**
   * @schema NodeGroupUpdateStatus#NodeGroupMemberUpdateStatus
   */
  readonly nodeGroupMemberUpdateStatus?: NodeGroupMemberUpdateStatus[];

}

/**
 * @schema CacheNodeUpdateStatus
 */
export interface CacheNodeUpdateStatus {
  /**
   * @schema CacheNodeUpdateStatus#CacheNodeId
   */
  readonly cacheNodeId?: string;

  /**
   * @schema CacheNodeUpdateStatus#NodeUpdateStatus
   */
  readonly nodeUpdateStatus?: string;

  /**
   * @schema CacheNodeUpdateStatus#NodeDeletionDate
   */
  readonly nodeDeletionDate?: string;

  /**
   * @schema CacheNodeUpdateStatus#NodeUpdateStartDate
   */
  readonly nodeUpdateStartDate?: string;

  /**
   * @schema CacheNodeUpdateStatus#NodeUpdateEndDate
   */
  readonly nodeUpdateEndDate?: string;

  /**
   * @schema CacheNodeUpdateStatus#NodeUpdateInitiatedBy
   */
  readonly nodeUpdateInitiatedBy?: string;

  /**
   * @schema CacheNodeUpdateStatus#NodeUpdateInitiatedDate
   */
  readonly nodeUpdateInitiatedDate?: string;

  /**
   * @schema CacheNodeUpdateStatus#NodeUpdateStatusModifiedDate
   */
  readonly nodeUpdateStatusModifiedDate?: string;

}

/**
 * @schema ReshardingStatus
 */
export interface ReshardingStatus {
  /**
   * @schema ReshardingStatus#SlotMigration
   */
  readonly slotMigration?: SlotMigration;

}

/**
 * @schema UserGroupsUpdateStatus
 */
export interface UserGroupsUpdateStatus {
  /**
   * @schema UserGroupsUpdateStatus#UserGroupIdsToAdd
   */
  readonly userGroupIdsToAdd?: string[];

  /**
   * @schema UserGroupsUpdateStatus#UserGroupIdsToRemove
   */
  readonly userGroupIdsToRemove?: string[];

}

/**
 * @schema NodeGroupMember
 */
export interface NodeGroupMember {
  /**
   * @schema NodeGroupMember#CacheClusterId
   */
  readonly cacheClusterId?: string;

  /**
   * @schema NodeGroupMember#CacheNodeId
   */
  readonly cacheNodeId?: string;

  /**
   * @schema NodeGroupMember#ReadEndpoint
   */
  readonly readEndpoint?: Endpoint;

  /**
   * @schema NodeGroupMember#PreferredAvailabilityZone
   */
  readonly preferredAvailabilityZone?: string;

  /**
   * @schema NodeGroupMember#PreferredOutpostArn
   */
  readonly preferredOutpostArn?: string;

  /**
   * @schema NodeGroupMember#CurrentRole
   */
  readonly currentRole?: string;

}

/**
 * @schema AvailabilityZone
 */
export interface AvailabilityZone {
  /**
   * @schema AvailabilityZone#Name
   */
  readonly name?: string;

}

/**
 * @schema SubnetOutpost
 */
export interface SubnetOutpost {
  /**
   * @schema SubnetOutpost#SubnetOutpostArn
   */
  readonly subnetOutpostArn?: string;

}

/**
 * @schema NodeGroupMemberUpdateStatus
 */
export interface NodeGroupMemberUpdateStatus {
  /**
   * @schema NodeGroupMemberUpdateStatus#CacheClusterId
   */
  readonly cacheClusterId?: string;

  /**
   * @schema NodeGroupMemberUpdateStatus#CacheNodeId
   */
  readonly cacheNodeId?: string;

  /**
   * @schema NodeGroupMemberUpdateStatus#NodeUpdateStatus
   */
  readonly nodeUpdateStatus?: string;

  /**
   * @schema NodeGroupMemberUpdateStatus#NodeDeletionDate
   */
  readonly nodeDeletionDate?: string;

  /**
   * @schema NodeGroupMemberUpdateStatus#NodeUpdateStartDate
   */
  readonly nodeUpdateStartDate?: string;

  /**
   * @schema NodeGroupMemberUpdateStatus#NodeUpdateEndDate
   */
  readonly nodeUpdateEndDate?: string;

  /**
   * @schema NodeGroupMemberUpdateStatus#NodeUpdateInitiatedBy
   */
  readonly nodeUpdateInitiatedBy?: string;

  /**
   * @schema NodeGroupMemberUpdateStatus#NodeUpdateInitiatedDate
   */
  readonly nodeUpdateInitiatedDate?: string;

  /**
   * @schema NodeGroupMemberUpdateStatus#NodeUpdateStatusModifiedDate
   */
  readonly nodeUpdateStatusModifiedDate?: string;

}

/**
 * @schema SlotMigration
 */
export interface SlotMigration {
  /**
   * @schema SlotMigration#ProgressPercentage
   */
  readonly progressPercentage?: number;

}
