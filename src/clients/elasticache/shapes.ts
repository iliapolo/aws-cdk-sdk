/**
 * @schema ElastiCacheAddTagsToResourceMessage
 */
export interface ElastiCacheAddTagsToResourceMessage {
  /**
   * @schema ElastiCacheAddTagsToResourceMessage#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema ElastiCacheAddTagsToResourceMessage#Tags
   */
  readonly tags: ElastiCacheTag[];

}

/**
 * @schema ElastiCacheTagListMessage
 */
export interface ElastiCacheTagListMessage {
  /**
   * @schema ElastiCacheTagListMessage#TagList
   */
  readonly tagList?: ElastiCacheTag[];

}

/**
 * @schema ElastiCacheAuthorizeCacheSecurityGroupIngressMessage
 */
export interface ElastiCacheAuthorizeCacheSecurityGroupIngressMessage {
  /**
   * @schema ElastiCacheAuthorizeCacheSecurityGroupIngressMessage#CacheSecurityGroupName
   */
  readonly cacheSecurityGroupName: string;

  /**
   * @schema ElastiCacheAuthorizeCacheSecurityGroupIngressMessage#EC2SecurityGroupName
   */
  readonly ec2SecurityGroupName: string;

  /**
   * @schema ElastiCacheAuthorizeCacheSecurityGroupIngressMessage#EC2SecurityGroupOwnerId
   */
  readonly ec2SecurityGroupOwnerId: string;

}

/**
 * @schema ElastiCacheAuthorizeCacheSecurityGroupIngressResult
 */
export interface ElastiCacheAuthorizeCacheSecurityGroupIngressResult {
  /**
   * @schema ElastiCacheAuthorizeCacheSecurityGroupIngressResult#CacheSecurityGroup
   */
  readonly cacheSecurityGroup?: ElastiCacheCacheSecurityGroup;

}

/**
 * @schema ElastiCacheBatchApplyUpdateActionMessage
 */
export interface ElastiCacheBatchApplyUpdateActionMessage {
  /**
   * @schema ElastiCacheBatchApplyUpdateActionMessage#ReplicationGroupIds
   */
  readonly replicationGroupIds?: string[];

  /**
   * @schema ElastiCacheBatchApplyUpdateActionMessage#CacheClusterIds
   */
  readonly cacheClusterIds?: string[];

  /**
   * @schema ElastiCacheBatchApplyUpdateActionMessage#ServiceUpdateName
   */
  readonly serviceUpdateName: string;

}

/**
 * @schema ElastiCacheUpdateActionResultsMessage
 */
export interface ElastiCacheUpdateActionResultsMessage {
  /**
   * @schema ElastiCacheUpdateActionResultsMessage#ProcessedUpdateActions
   */
  readonly processedUpdateActions?: ElastiCacheProcessedUpdateAction[];

  /**
   * @schema ElastiCacheUpdateActionResultsMessage#UnprocessedUpdateActions
   */
  readonly unprocessedUpdateActions?: ElastiCacheUnprocessedUpdateAction[];

}

/**
 * @schema ElastiCacheBatchStopUpdateActionMessage
 */
export interface ElastiCacheBatchStopUpdateActionMessage {
  /**
   * @schema ElastiCacheBatchStopUpdateActionMessage#ReplicationGroupIds
   */
  readonly replicationGroupIds?: string[];

  /**
   * @schema ElastiCacheBatchStopUpdateActionMessage#CacheClusterIds
   */
  readonly cacheClusterIds?: string[];

  /**
   * @schema ElastiCacheBatchStopUpdateActionMessage#ServiceUpdateName
   */
  readonly serviceUpdateName: string;

}

/**
 * @schema ElastiCacheCompleteMigrationMessage
 */
export interface ElastiCacheCompleteMigrationMessage {
  /**
   * @schema ElastiCacheCompleteMigrationMessage#ReplicationGroupId
   */
  readonly replicationGroupId: string;

  /**
   * @schema ElastiCacheCompleteMigrationMessage#Force
   */
  readonly force?: boolean;

}

/**
 * @schema ElastiCacheCompleteMigrationResponse
 */
export interface ElastiCacheCompleteMigrationResponse {
  /**
   * @schema ElastiCacheCompleteMigrationResponse#ReplicationGroup
   */
  readonly replicationGroup?: ElastiCacheReplicationGroup;

}

/**
 * @schema ElastiCacheCopySnapshotMessage
 */
export interface ElastiCacheCopySnapshotMessage {
  /**
   * @schema ElastiCacheCopySnapshotMessage#SourceSnapshotName
   */
  readonly sourceSnapshotName: string;

  /**
   * @schema ElastiCacheCopySnapshotMessage#TargetSnapshotName
   */
  readonly targetSnapshotName: string;

  /**
   * @schema ElastiCacheCopySnapshotMessage#TargetBucket
   */
  readonly targetBucket?: string;

  /**
   * @schema ElastiCacheCopySnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema ElastiCacheCopySnapshotResult
 */
export interface ElastiCacheCopySnapshotResult {
  /**
   * @schema ElastiCacheCopySnapshotResult#Snapshot
   */
  readonly snapshot?: ElastiCacheSnapshot;

}

/**
 * @schema ElastiCacheCreateCacheClusterMessage
 */
export interface ElastiCacheCreateCacheClusterMessage {
  /**
   * @schema ElastiCacheCreateCacheClusterMessage#CacheClusterId
   */
  readonly cacheClusterId: string;

  /**
   * @schema ElastiCacheCreateCacheClusterMessage#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema ElastiCacheCreateCacheClusterMessage#AZMode
   */
  readonly azMode?: string;

  /**
   * @schema ElastiCacheCreateCacheClusterMessage#PreferredAvailabilityZone
   */
  readonly preferredAvailabilityZone?: string;

  /**
   * @schema ElastiCacheCreateCacheClusterMessage#PreferredAvailabilityZones
   */
  readonly preferredAvailabilityZones?: string[];

  /**
   * @schema ElastiCacheCreateCacheClusterMessage#NumCacheNodes
   */
  readonly numCacheNodes?: number;

  /**
   * @schema ElastiCacheCreateCacheClusterMessage#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema ElastiCacheCreateCacheClusterMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema ElastiCacheCreateCacheClusterMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema ElastiCacheCreateCacheClusterMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName?: string;

  /**
   * @schema ElastiCacheCreateCacheClusterMessage#CacheSubnetGroupName
   */
  readonly cacheSubnetGroupName?: string;

  /**
   * @schema ElastiCacheCreateCacheClusterMessage#CacheSecurityGroupNames
   */
  readonly cacheSecurityGroupNames?: string[];

  /**
   * @schema ElastiCacheCreateCacheClusterMessage#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema ElastiCacheCreateCacheClusterMessage#Tags
   */
  readonly tags?: ElastiCacheTag[];

  /**
   * @schema ElastiCacheCreateCacheClusterMessage#SnapshotArns
   */
  readonly snapshotArns?: string[];

  /**
   * @schema ElastiCacheCreateCacheClusterMessage#SnapshotName
   */
  readonly snapshotName?: string;

  /**
   * @schema ElastiCacheCreateCacheClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema ElastiCacheCreateCacheClusterMessage#Port
   */
  readonly port?: number;

  /**
   * @schema ElastiCacheCreateCacheClusterMessage#NotificationTopicArn
   */
  readonly notificationTopicArn?: string;

  /**
   * @schema ElastiCacheCreateCacheClusterMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema ElastiCacheCreateCacheClusterMessage#SnapshotRetentionLimit
   */
  readonly snapshotRetentionLimit?: number;

  /**
   * @schema ElastiCacheCreateCacheClusterMessage#SnapshotWindow
   */
  readonly snapshotWindow?: string;

  /**
   * @schema ElastiCacheCreateCacheClusterMessage#AuthToken
   */
  readonly authToken?: string;

  /**
   * @schema ElastiCacheCreateCacheClusterMessage#OutpostMode
   */
  readonly outpostMode?: string;

  /**
   * @schema ElastiCacheCreateCacheClusterMessage#PreferredOutpostArn
   */
  readonly preferredOutpostArn?: string;

  /**
   * @schema ElastiCacheCreateCacheClusterMessage#PreferredOutpostArns
   */
  readonly preferredOutpostArns?: string[];

}

/**
 * @schema ElastiCacheCreateCacheClusterResult
 */
export interface ElastiCacheCreateCacheClusterResult {
  /**
   * @schema ElastiCacheCreateCacheClusterResult#CacheCluster
   */
  readonly cacheCluster?: ElastiCacheCacheCluster;

}

/**
 * @schema ElastiCacheCreateCacheParameterGroupMessage
 */
export interface ElastiCacheCreateCacheParameterGroupMessage {
  /**
   * @schema ElastiCacheCreateCacheParameterGroupMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName: string;

  /**
   * @schema ElastiCacheCreateCacheParameterGroupMessage#CacheParameterGroupFamily
   */
  readonly cacheParameterGroupFamily: string;

  /**
   * @schema ElastiCacheCreateCacheParameterGroupMessage#Description
   */
  readonly description: string;

}

/**
 * @schema ElastiCacheCreateCacheParameterGroupResult
 */
export interface ElastiCacheCreateCacheParameterGroupResult {
  /**
   * @schema ElastiCacheCreateCacheParameterGroupResult#CacheParameterGroup
   */
  readonly cacheParameterGroup?: ElastiCacheCacheParameterGroup;

}

/**
 * @schema ElastiCacheCreateCacheSecurityGroupMessage
 */
export interface ElastiCacheCreateCacheSecurityGroupMessage {
  /**
   * @schema ElastiCacheCreateCacheSecurityGroupMessage#CacheSecurityGroupName
   */
  readonly cacheSecurityGroupName: string;

  /**
   * @schema ElastiCacheCreateCacheSecurityGroupMessage#Description
   */
  readonly description: string;

}

/**
 * @schema ElastiCacheCreateCacheSecurityGroupResult
 */
export interface ElastiCacheCreateCacheSecurityGroupResult {
  /**
   * @schema ElastiCacheCreateCacheSecurityGroupResult#CacheSecurityGroup
   */
  readonly cacheSecurityGroup?: ElastiCacheCacheSecurityGroup;

}

/**
 * @schema ElastiCacheCreateCacheSubnetGroupMessage
 */
export interface ElastiCacheCreateCacheSubnetGroupMessage {
  /**
   * @schema ElastiCacheCreateCacheSubnetGroupMessage#CacheSubnetGroupName
   */
  readonly cacheSubnetGroupName: string;

  /**
   * @schema ElastiCacheCreateCacheSubnetGroupMessage#CacheSubnetGroupDescription
   */
  readonly cacheSubnetGroupDescription: string;

  /**
   * @schema ElastiCacheCreateCacheSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds: string[];

}

/**
 * @schema ElastiCacheCreateCacheSubnetGroupResult
 */
export interface ElastiCacheCreateCacheSubnetGroupResult {
  /**
   * @schema ElastiCacheCreateCacheSubnetGroupResult#CacheSubnetGroup
   */
  readonly cacheSubnetGroup?: ElastiCacheCacheSubnetGroup;

}

/**
 * @schema ElastiCacheCreateGlobalReplicationGroupMessage
 */
export interface ElastiCacheCreateGlobalReplicationGroupMessage {
  /**
   * @schema ElastiCacheCreateGlobalReplicationGroupMessage#GlobalReplicationGroupIdSuffix
   */
  readonly globalReplicationGroupIdSuffix: string;

  /**
   * @schema ElastiCacheCreateGlobalReplicationGroupMessage#GlobalReplicationGroupDescription
   */
  readonly globalReplicationGroupDescription?: string;

  /**
   * @schema ElastiCacheCreateGlobalReplicationGroupMessage#PrimaryReplicationGroupId
   */
  readonly primaryReplicationGroupId: string;

}

/**
 * @schema ElastiCacheCreateGlobalReplicationGroupResult
 */
export interface ElastiCacheCreateGlobalReplicationGroupResult {
  /**
   * @schema ElastiCacheCreateGlobalReplicationGroupResult#GlobalReplicationGroup
   */
  readonly globalReplicationGroup?: ElastiCacheGlobalReplicationGroup;

}

/**
 * @schema ElastiCacheCreateReplicationGroupMessage
 */
export interface ElastiCacheCreateReplicationGroupMessage {
  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#ReplicationGroupId
   */
  readonly replicationGroupId: string;

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#ReplicationGroupDescription
   */
  readonly replicationGroupDescription: string;

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId?: string;

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#PrimaryClusterId
   */
  readonly primaryClusterId?: string;

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#AutomaticFailoverEnabled
   */
  readonly automaticFailoverEnabled?: boolean;

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#MultiAZEnabled
   */
  readonly multiAzEnabled?: boolean;

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#NumCacheClusters
   */
  readonly numCacheClusters?: number;

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#PreferredCacheClusterAZs
   */
  readonly preferredCacheClusterAZs?: string[];

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#NumNodeGroups
   */
  readonly numNodeGroups?: number;

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#ReplicasPerNodeGroup
   */
  readonly replicasPerNodeGroup?: number;

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#NodeGroupConfiguration
   */
  readonly nodeGroupConfiguration?: ElastiCacheNodeGroupConfiguration[];

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName?: string;

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#CacheSubnetGroupName
   */
  readonly cacheSubnetGroupName?: string;

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#CacheSecurityGroupNames
   */
  readonly cacheSecurityGroupNames?: string[];

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#Tags
   */
  readonly tags?: ElastiCacheTag[];

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#SnapshotArns
   */
  readonly snapshotArns?: string[];

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#SnapshotName
   */
  readonly snapshotName?: string;

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#Port
   */
  readonly port?: number;

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#NotificationTopicArn
   */
  readonly notificationTopicArn?: string;

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#SnapshotRetentionLimit
   */
  readonly snapshotRetentionLimit?: number;

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#SnapshotWindow
   */
  readonly snapshotWindow?: string;

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#AuthToken
   */
  readonly authToken?: string;

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#TransitEncryptionEnabled
   */
  readonly transitEncryptionEnabled?: boolean;

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#AtRestEncryptionEnabled
   */
  readonly atRestEncryptionEnabled?: boolean;

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#UserGroupIds
   */
  readonly userGroupIds?: string[];

}

/**
 * @schema ElastiCacheCreateReplicationGroupResult
 */
export interface ElastiCacheCreateReplicationGroupResult {
  /**
   * @schema ElastiCacheCreateReplicationGroupResult#ReplicationGroup
   */
  readonly replicationGroup?: ElastiCacheReplicationGroup;

}

/**
 * @schema ElastiCacheCreateSnapshotMessage
 */
export interface ElastiCacheCreateSnapshotMessage {
  /**
   * @schema ElastiCacheCreateSnapshotMessage#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema ElastiCacheCreateSnapshotMessage#CacheClusterId
   */
  readonly cacheClusterId?: string;

  /**
   * @schema ElastiCacheCreateSnapshotMessage#SnapshotName
   */
  readonly snapshotName: string;

  /**
   * @schema ElastiCacheCreateSnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema ElastiCacheCreateSnapshotResult
 */
export interface ElastiCacheCreateSnapshotResult {
  /**
   * @schema ElastiCacheCreateSnapshotResult#Snapshot
   */
  readonly snapshot?: ElastiCacheSnapshot;

}

/**
 * @schema ElastiCacheCreateUserMessage
 */
export interface ElastiCacheCreateUserMessage {
  /**
   * @schema ElastiCacheCreateUserMessage#UserId
   */
  readonly userId: string;

  /**
   * @schema ElastiCacheCreateUserMessage#UserName
   */
  readonly userName: string;

  /**
   * @schema ElastiCacheCreateUserMessage#Engine
   */
  readonly engine: string;

  /**
   * @schema ElastiCacheCreateUserMessage#Passwords
   */
  readonly passwords?: string[];

  /**
   * @schema ElastiCacheCreateUserMessage#AccessString
   */
  readonly accessString: string;

  /**
   * @schema ElastiCacheCreateUserMessage#NoPasswordRequired
   */
  readonly noPasswordRequired?: boolean;

}

/**
 * @schema ElastiCacheUser
 */
export interface ElastiCacheUser {
  /**
   * @schema ElastiCacheUser#UserId
   */
  readonly userId?: string;

  /**
   * @schema ElastiCacheUser#UserName
   */
  readonly userName?: string;

  /**
   * @schema ElastiCacheUser#Status
   */
  readonly status?: string;

  /**
   * @schema ElastiCacheUser#Engine
   */
  readonly engine?: string;

  /**
   * @schema ElastiCacheUser#AccessString
   */
  readonly accessString?: string;

  /**
   * @schema ElastiCacheUser#UserGroupIds
   */
  readonly userGroupIds?: string[];

  /**
   * @schema ElastiCacheUser#Authentication
   */
  readonly authentication?: ElastiCacheAuthentication;

  /**
   * @schema ElastiCacheUser#ARN
   */
  readonly arn?: string;

}

/**
 * @schema ElastiCacheCreateUserGroupMessage
 */
export interface ElastiCacheCreateUserGroupMessage {
  /**
   * @schema ElastiCacheCreateUserGroupMessage#UserGroupId
   */
  readonly userGroupId: string;

  /**
   * @schema ElastiCacheCreateUserGroupMessage#Engine
   */
  readonly engine: string;

  /**
   * @schema ElastiCacheCreateUserGroupMessage#UserIds
   */
  readonly userIds?: string[];

}

/**
 * @schema ElastiCacheUserGroup
 */
export interface ElastiCacheUserGroup {
  /**
   * @schema ElastiCacheUserGroup#UserGroupId
   */
  readonly userGroupId?: string;

  /**
   * @schema ElastiCacheUserGroup#Status
   */
  readonly status?: string;

  /**
   * @schema ElastiCacheUserGroup#Engine
   */
  readonly engine?: string;

  /**
   * @schema ElastiCacheUserGroup#UserIds
   */
  readonly userIds?: string[];

  /**
   * @schema ElastiCacheUserGroup#PendingChanges
   */
  readonly pendingChanges?: ElastiCacheUserGroupPendingChanges;

  /**
   * @schema ElastiCacheUserGroup#ReplicationGroups
   */
  readonly replicationGroups?: string[];

  /**
   * @schema ElastiCacheUserGroup#ARN
   */
  readonly arn?: string;

}

/**
 * @schema ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage
 */
export interface ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage {
  /**
   * @schema ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId: string;

  /**
   * @schema ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage#NodeGroupCount
   */
  readonly nodeGroupCount: number;

  /**
   * @schema ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage#GlobalNodeGroupsToRemove
   */
  readonly globalNodeGroupsToRemove?: string[];

  /**
   * @schema ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage#GlobalNodeGroupsToRetain
   */
  readonly globalNodeGroupsToRetain?: string[];

  /**
   * @schema ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage#ApplyImmediately
   */
  readonly applyImmediately: boolean;

}

/**
 * @schema ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupResult
 */
export interface ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupResult {
  /**
   * @schema ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupResult#GlobalReplicationGroup
   */
  readonly globalReplicationGroup?: ElastiCacheGlobalReplicationGroup;

}

/**
 * @schema ElastiCacheDecreaseReplicaCountMessage
 */
export interface ElastiCacheDecreaseReplicaCountMessage {
  /**
   * @schema ElastiCacheDecreaseReplicaCountMessage#ReplicationGroupId
   */
  readonly replicationGroupId: string;

  /**
   * @schema ElastiCacheDecreaseReplicaCountMessage#NewReplicaCount
   */
  readonly newReplicaCount?: number;

  /**
   * @schema ElastiCacheDecreaseReplicaCountMessage#ReplicaConfiguration
   */
  readonly replicaConfiguration?: ElastiCacheConfigureShard[];

  /**
   * @schema ElastiCacheDecreaseReplicaCountMessage#ReplicasToRemove
   */
  readonly replicasToRemove?: string[];

  /**
   * @schema ElastiCacheDecreaseReplicaCountMessage#ApplyImmediately
   */
  readonly applyImmediately: boolean;

}

/**
 * @schema ElastiCacheDecreaseReplicaCountResult
 */
export interface ElastiCacheDecreaseReplicaCountResult {
  /**
   * @schema ElastiCacheDecreaseReplicaCountResult#ReplicationGroup
   */
  readonly replicationGroup?: ElastiCacheReplicationGroup;

}

/**
 * @schema ElastiCacheDeleteCacheClusterMessage
 */
export interface ElastiCacheDeleteCacheClusterMessage {
  /**
   * @schema ElastiCacheDeleteCacheClusterMessage#CacheClusterId
   */
  readonly cacheClusterId: string;

  /**
   * @schema ElastiCacheDeleteCacheClusterMessage#FinalSnapshotIdentifier
   */
  readonly finalSnapshotIdentifier?: string;

}

/**
 * @schema ElastiCacheDeleteCacheClusterResult
 */
export interface ElastiCacheDeleteCacheClusterResult {
  /**
   * @schema ElastiCacheDeleteCacheClusterResult#CacheCluster
   */
  readonly cacheCluster?: ElastiCacheCacheCluster;

}

/**
 * @schema ElastiCacheDeleteCacheParameterGroupMessage
 */
export interface ElastiCacheDeleteCacheParameterGroupMessage {
  /**
   * @schema ElastiCacheDeleteCacheParameterGroupMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName: string;

}

/**
 * @schema ElastiCacheDeleteCacheSecurityGroupMessage
 */
export interface ElastiCacheDeleteCacheSecurityGroupMessage {
  /**
   * @schema ElastiCacheDeleteCacheSecurityGroupMessage#CacheSecurityGroupName
   */
  readonly cacheSecurityGroupName: string;

}

/**
 * @schema ElastiCacheDeleteCacheSubnetGroupMessage
 */
export interface ElastiCacheDeleteCacheSubnetGroupMessage {
  /**
   * @schema ElastiCacheDeleteCacheSubnetGroupMessage#CacheSubnetGroupName
   */
  readonly cacheSubnetGroupName: string;

}

/**
 * @schema ElastiCacheDeleteGlobalReplicationGroupMessage
 */
export interface ElastiCacheDeleteGlobalReplicationGroupMessage {
  /**
   * @schema ElastiCacheDeleteGlobalReplicationGroupMessage#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId: string;

  /**
   * @schema ElastiCacheDeleteGlobalReplicationGroupMessage#RetainPrimaryReplicationGroup
   */
  readonly retainPrimaryReplicationGroup: boolean;

}

/**
 * @schema ElastiCacheDeleteGlobalReplicationGroupResult
 */
export interface ElastiCacheDeleteGlobalReplicationGroupResult {
  /**
   * @schema ElastiCacheDeleteGlobalReplicationGroupResult#GlobalReplicationGroup
   */
  readonly globalReplicationGroup?: ElastiCacheGlobalReplicationGroup;

}

/**
 * @schema ElastiCacheDeleteReplicationGroupMessage
 */
export interface ElastiCacheDeleteReplicationGroupMessage {
  /**
   * @schema ElastiCacheDeleteReplicationGroupMessage#ReplicationGroupId
   */
  readonly replicationGroupId: string;

  /**
   * @schema ElastiCacheDeleteReplicationGroupMessage#RetainPrimaryCluster
   */
  readonly retainPrimaryCluster?: boolean;

  /**
   * @schema ElastiCacheDeleteReplicationGroupMessage#FinalSnapshotIdentifier
   */
  readonly finalSnapshotIdentifier?: string;

}

/**
 * @schema ElastiCacheDeleteReplicationGroupResult
 */
export interface ElastiCacheDeleteReplicationGroupResult {
  /**
   * @schema ElastiCacheDeleteReplicationGroupResult#ReplicationGroup
   */
  readonly replicationGroup?: ElastiCacheReplicationGroup;

}

/**
 * @schema ElastiCacheDeleteSnapshotMessage
 */
export interface ElastiCacheDeleteSnapshotMessage {
  /**
   * @schema ElastiCacheDeleteSnapshotMessage#SnapshotName
   */
  readonly snapshotName: string;

}

/**
 * @schema ElastiCacheDeleteSnapshotResult
 */
export interface ElastiCacheDeleteSnapshotResult {
  /**
   * @schema ElastiCacheDeleteSnapshotResult#Snapshot
   */
  readonly snapshot?: ElastiCacheSnapshot;

}

/**
 * @schema ElastiCacheDeleteUserMessage
 */
export interface ElastiCacheDeleteUserMessage {
  /**
   * @schema ElastiCacheDeleteUserMessage#UserId
   */
  readonly userId: string;

}

/**
 * @schema ElastiCacheDeleteUserGroupMessage
 */
export interface ElastiCacheDeleteUserGroupMessage {
  /**
   * @schema ElastiCacheDeleteUserGroupMessage#UserGroupId
   */
  readonly userGroupId: string;

}

/**
 * @schema ElastiCacheDescribeCacheClustersMessage
 */
export interface ElastiCacheDescribeCacheClustersMessage {
  /**
   * @schema ElastiCacheDescribeCacheClustersMessage#CacheClusterId
   */
  readonly cacheClusterId?: string;

  /**
   * @schema ElastiCacheDescribeCacheClustersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema ElastiCacheDescribeCacheClustersMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ElastiCacheDescribeCacheClustersMessage#ShowCacheNodeInfo
   */
  readonly showCacheNodeInfo?: boolean;

  /**
   * @schema ElastiCacheDescribeCacheClustersMessage#ShowCacheClustersNotInReplicationGroups
   */
  readonly showCacheClustersNotInReplicationGroups?: boolean;

}

/**
 * @schema ElastiCacheCacheClusterMessage
 */
export interface ElastiCacheCacheClusterMessage {
  /**
   * @schema ElastiCacheCacheClusterMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ElastiCacheCacheClusterMessage#CacheClusters
   */
  readonly cacheClusters?: ElastiCacheCacheCluster[];

}

/**
 * @schema ElastiCacheDescribeCacheEngineVersionsMessage
 */
export interface ElastiCacheDescribeCacheEngineVersionsMessage {
  /**
   * @schema ElastiCacheDescribeCacheEngineVersionsMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema ElastiCacheDescribeCacheEngineVersionsMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema ElastiCacheDescribeCacheEngineVersionsMessage#CacheParameterGroupFamily
   */
  readonly cacheParameterGroupFamily?: string;

  /**
   * @schema ElastiCacheDescribeCacheEngineVersionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema ElastiCacheDescribeCacheEngineVersionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ElastiCacheDescribeCacheEngineVersionsMessage#DefaultOnly
   */
  readonly defaultOnly?: boolean;

}

/**
 * @schema ElastiCacheCacheEngineVersionMessage
 */
export interface ElastiCacheCacheEngineVersionMessage {
  /**
   * @schema ElastiCacheCacheEngineVersionMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ElastiCacheCacheEngineVersionMessage#CacheEngineVersions
   */
  readonly cacheEngineVersions?: ElastiCacheCacheEngineVersion[];

}

/**
 * @schema ElastiCacheDescribeCacheParameterGroupsMessage
 */
export interface ElastiCacheDescribeCacheParameterGroupsMessage {
  /**
   * @schema ElastiCacheDescribeCacheParameterGroupsMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName?: string;

  /**
   * @schema ElastiCacheDescribeCacheParameterGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema ElastiCacheDescribeCacheParameterGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ElastiCacheCacheParameterGroupsMessage
 */
export interface ElastiCacheCacheParameterGroupsMessage {
  /**
   * @schema ElastiCacheCacheParameterGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ElastiCacheCacheParameterGroupsMessage#CacheParameterGroups
   */
  readonly cacheParameterGroups?: ElastiCacheCacheParameterGroup[];

}

/**
 * @schema ElastiCacheDescribeCacheParametersMessage
 */
export interface ElastiCacheDescribeCacheParametersMessage {
  /**
   * @schema ElastiCacheDescribeCacheParametersMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName: string;

  /**
   * @schema ElastiCacheDescribeCacheParametersMessage#Source
   */
  readonly source?: string;

  /**
   * @schema ElastiCacheDescribeCacheParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema ElastiCacheDescribeCacheParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ElastiCacheCacheParameterGroupDetails
 */
export interface ElastiCacheCacheParameterGroupDetails {
  /**
   * @schema ElastiCacheCacheParameterGroupDetails#Marker
   */
  readonly marker?: string;

  /**
   * @schema ElastiCacheCacheParameterGroupDetails#Parameters
   */
  readonly parameters?: ElastiCacheParameter[];

  /**
   * @schema ElastiCacheCacheParameterGroupDetails#CacheNodeTypeSpecificParameters
   */
  readonly cacheNodeTypeSpecificParameters?: ElastiCacheCacheNodeTypeSpecificParameter[];

}

/**
 * @schema ElastiCacheDescribeCacheSecurityGroupsMessage
 */
export interface ElastiCacheDescribeCacheSecurityGroupsMessage {
  /**
   * @schema ElastiCacheDescribeCacheSecurityGroupsMessage#CacheSecurityGroupName
   */
  readonly cacheSecurityGroupName?: string;

  /**
   * @schema ElastiCacheDescribeCacheSecurityGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema ElastiCacheDescribeCacheSecurityGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ElastiCacheCacheSecurityGroupMessage
 */
export interface ElastiCacheCacheSecurityGroupMessage {
  /**
   * @schema ElastiCacheCacheSecurityGroupMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ElastiCacheCacheSecurityGroupMessage#CacheSecurityGroups
   */
  readonly cacheSecurityGroups?: ElastiCacheCacheSecurityGroup[];

}

/**
 * @schema ElastiCacheDescribeCacheSubnetGroupsMessage
 */
export interface ElastiCacheDescribeCacheSubnetGroupsMessage {
  /**
   * @schema ElastiCacheDescribeCacheSubnetGroupsMessage#CacheSubnetGroupName
   */
  readonly cacheSubnetGroupName?: string;

  /**
   * @schema ElastiCacheDescribeCacheSubnetGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema ElastiCacheDescribeCacheSubnetGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ElastiCacheCacheSubnetGroupMessage
 */
export interface ElastiCacheCacheSubnetGroupMessage {
  /**
   * @schema ElastiCacheCacheSubnetGroupMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ElastiCacheCacheSubnetGroupMessage#CacheSubnetGroups
   */
  readonly cacheSubnetGroups?: ElastiCacheCacheSubnetGroup[];

}

/**
 * @schema ElastiCacheDescribeEngineDefaultParametersMessage
 */
export interface ElastiCacheDescribeEngineDefaultParametersMessage {
  /**
   * @schema ElastiCacheDescribeEngineDefaultParametersMessage#CacheParameterGroupFamily
   */
  readonly cacheParameterGroupFamily: string;

  /**
   * @schema ElastiCacheDescribeEngineDefaultParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema ElastiCacheDescribeEngineDefaultParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ElastiCacheDescribeEngineDefaultParametersResult
 */
export interface ElastiCacheDescribeEngineDefaultParametersResult {
  /**
   * @schema ElastiCacheDescribeEngineDefaultParametersResult#EngineDefaults
   */
  readonly engineDefaults?: ElastiCacheEngineDefaults;

}

/**
 * @schema ElastiCacheDescribeEventsMessage
 */
export interface ElastiCacheDescribeEventsMessage {
  /**
   * @schema ElastiCacheDescribeEventsMessage#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

  /**
   * @schema ElastiCacheDescribeEventsMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema ElastiCacheDescribeEventsMessage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ElastiCacheDescribeEventsMessage#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ElastiCacheDescribeEventsMessage#Duration
   */
  readonly duration?: number;

  /**
   * @schema ElastiCacheDescribeEventsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema ElastiCacheDescribeEventsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ElastiCacheEventsMessage
 */
export interface ElastiCacheEventsMessage {
  /**
   * @schema ElastiCacheEventsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ElastiCacheEventsMessage#Events
   */
  readonly events?: ElastiCacheEvent[];

}

/**
 * @schema ElastiCacheDescribeGlobalReplicationGroupsMessage
 */
export interface ElastiCacheDescribeGlobalReplicationGroupsMessage {
  /**
   * @schema ElastiCacheDescribeGlobalReplicationGroupsMessage#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId?: string;

  /**
   * @schema ElastiCacheDescribeGlobalReplicationGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema ElastiCacheDescribeGlobalReplicationGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ElastiCacheDescribeGlobalReplicationGroupsMessage#ShowMemberInfo
   */
  readonly showMemberInfo?: boolean;

}

/**
 * @schema ElastiCacheDescribeGlobalReplicationGroupsResult
 */
export interface ElastiCacheDescribeGlobalReplicationGroupsResult {
  /**
   * @schema ElastiCacheDescribeGlobalReplicationGroupsResult#Marker
   */
  readonly marker?: string;

  /**
   * @schema ElastiCacheDescribeGlobalReplicationGroupsResult#GlobalReplicationGroups
   */
  readonly globalReplicationGroups?: ElastiCacheGlobalReplicationGroup[];

}

/**
 * @schema ElastiCacheDescribeReplicationGroupsMessage
 */
export interface ElastiCacheDescribeReplicationGroupsMessage {
  /**
   * @schema ElastiCacheDescribeReplicationGroupsMessage#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema ElastiCacheDescribeReplicationGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema ElastiCacheDescribeReplicationGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ElastiCacheReplicationGroupMessage
 */
export interface ElastiCacheReplicationGroupMessage {
  /**
   * @schema ElastiCacheReplicationGroupMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ElastiCacheReplicationGroupMessage#ReplicationGroups
   */
  readonly replicationGroups?: ElastiCacheReplicationGroup[];

}

/**
 * @schema ElastiCacheDescribeReservedCacheNodesMessage
 */
export interface ElastiCacheDescribeReservedCacheNodesMessage {
  /**
   * @schema ElastiCacheDescribeReservedCacheNodesMessage#ReservedCacheNodeId
   */
  readonly reservedCacheNodeId?: string;

  /**
   * @schema ElastiCacheDescribeReservedCacheNodesMessage#ReservedCacheNodesOfferingId
   */
  readonly reservedCacheNodesOfferingId?: string;

  /**
   * @schema ElastiCacheDescribeReservedCacheNodesMessage#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema ElastiCacheDescribeReservedCacheNodesMessage#Duration
   */
  readonly duration?: string;

  /**
   * @schema ElastiCacheDescribeReservedCacheNodesMessage#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema ElastiCacheDescribeReservedCacheNodesMessage#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema ElastiCacheDescribeReservedCacheNodesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema ElastiCacheDescribeReservedCacheNodesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ElastiCacheReservedCacheNodeMessage
 */
export interface ElastiCacheReservedCacheNodeMessage {
  /**
   * @schema ElastiCacheReservedCacheNodeMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ElastiCacheReservedCacheNodeMessage#ReservedCacheNodes
   */
  readonly reservedCacheNodes?: ElastiCacheReservedCacheNode[];

}

/**
 * @schema ElastiCacheDescribeReservedCacheNodesOfferingsMessage
 */
export interface ElastiCacheDescribeReservedCacheNodesOfferingsMessage {
  /**
   * @schema ElastiCacheDescribeReservedCacheNodesOfferingsMessage#ReservedCacheNodesOfferingId
   */
  readonly reservedCacheNodesOfferingId?: string;

  /**
   * @schema ElastiCacheDescribeReservedCacheNodesOfferingsMessage#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema ElastiCacheDescribeReservedCacheNodesOfferingsMessage#Duration
   */
  readonly duration?: string;

  /**
   * @schema ElastiCacheDescribeReservedCacheNodesOfferingsMessage#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema ElastiCacheDescribeReservedCacheNodesOfferingsMessage#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema ElastiCacheDescribeReservedCacheNodesOfferingsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema ElastiCacheDescribeReservedCacheNodesOfferingsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ElastiCacheReservedCacheNodesOfferingMessage
 */
export interface ElastiCacheReservedCacheNodesOfferingMessage {
  /**
   * @schema ElastiCacheReservedCacheNodesOfferingMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ElastiCacheReservedCacheNodesOfferingMessage#ReservedCacheNodesOfferings
   */
  readonly reservedCacheNodesOfferings?: ElastiCacheReservedCacheNodesOffering[];

}

/**
 * @schema ElastiCacheDescribeServiceUpdatesMessage
 */
export interface ElastiCacheDescribeServiceUpdatesMessage {
  /**
   * @schema ElastiCacheDescribeServiceUpdatesMessage#ServiceUpdateName
   */
  readonly serviceUpdateName?: string;

  /**
   * @schema ElastiCacheDescribeServiceUpdatesMessage#ServiceUpdateStatus
   */
  readonly serviceUpdateStatus?: string[];

  /**
   * @schema ElastiCacheDescribeServiceUpdatesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema ElastiCacheDescribeServiceUpdatesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ElastiCacheServiceUpdatesMessage
 */
export interface ElastiCacheServiceUpdatesMessage {
  /**
   * @schema ElastiCacheServiceUpdatesMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ElastiCacheServiceUpdatesMessage#ServiceUpdates
   */
  readonly serviceUpdates?: ElastiCacheServiceUpdate[];

}

/**
 * @schema ElastiCacheDescribeSnapshotsMessage
 */
export interface ElastiCacheDescribeSnapshotsMessage {
  /**
   * @schema ElastiCacheDescribeSnapshotsMessage#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema ElastiCacheDescribeSnapshotsMessage#CacheClusterId
   */
  readonly cacheClusterId?: string;

  /**
   * @schema ElastiCacheDescribeSnapshotsMessage#SnapshotName
   */
  readonly snapshotName?: string;

  /**
   * @schema ElastiCacheDescribeSnapshotsMessage#SnapshotSource
   */
  readonly snapshotSource?: string;

  /**
   * @schema ElastiCacheDescribeSnapshotsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ElastiCacheDescribeSnapshotsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema ElastiCacheDescribeSnapshotsMessage#ShowNodeGroupConfig
   */
  readonly showNodeGroupConfig?: boolean;

}

/**
 * @schema ElastiCacheDescribeSnapshotsListMessage
 */
export interface ElastiCacheDescribeSnapshotsListMessage {
  /**
   * @schema ElastiCacheDescribeSnapshotsListMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ElastiCacheDescribeSnapshotsListMessage#Snapshots
   */
  readonly snapshots?: ElastiCacheSnapshot[];

}

/**
 * @schema ElastiCacheDescribeUpdateActionsMessage
 */
export interface ElastiCacheDescribeUpdateActionsMessage {
  /**
   * @schema ElastiCacheDescribeUpdateActionsMessage#ServiceUpdateName
   */
  readonly serviceUpdateName?: string;

  /**
   * @schema ElastiCacheDescribeUpdateActionsMessage#ReplicationGroupIds
   */
  readonly replicationGroupIds?: string[];

  /**
   * @schema ElastiCacheDescribeUpdateActionsMessage#CacheClusterIds
   */
  readonly cacheClusterIds?: string[];

  /**
   * @schema ElastiCacheDescribeUpdateActionsMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema ElastiCacheDescribeUpdateActionsMessage#ServiceUpdateStatus
   */
  readonly serviceUpdateStatus?: string[];

  /**
   * @schema ElastiCacheDescribeUpdateActionsMessage#ServiceUpdateTimeRange
   */
  readonly serviceUpdateTimeRange?: ElastiCacheTimeRangeFilter;

  /**
   * @schema ElastiCacheDescribeUpdateActionsMessage#UpdateActionStatus
   */
  readonly updateActionStatus?: string[];

  /**
   * @schema ElastiCacheDescribeUpdateActionsMessage#ShowNodeLevelUpdateStatus
   */
  readonly showNodeLevelUpdateStatus?: boolean;

  /**
   * @schema ElastiCacheDescribeUpdateActionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema ElastiCacheDescribeUpdateActionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ElastiCacheUpdateActionsMessage
 */
export interface ElastiCacheUpdateActionsMessage {
  /**
   * @schema ElastiCacheUpdateActionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema ElastiCacheUpdateActionsMessage#UpdateActions
   */
  readonly updateActions?: ElastiCacheUpdateAction[];

}

/**
 * @schema ElastiCacheDescribeUserGroupsMessage
 */
export interface ElastiCacheDescribeUserGroupsMessage {
  /**
   * @schema ElastiCacheDescribeUserGroupsMessage#UserGroupId
   */
  readonly userGroupId?: string;

  /**
   * @schema ElastiCacheDescribeUserGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema ElastiCacheDescribeUserGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ElastiCacheDescribeUserGroupsResult
 */
export interface ElastiCacheDescribeUserGroupsResult {
  /**
   * @schema ElastiCacheDescribeUserGroupsResult#UserGroups
   */
  readonly userGroups?: ElastiCacheUserGroup[];

  /**
   * @schema ElastiCacheDescribeUserGroupsResult#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ElastiCacheDescribeUsersMessage
 */
export interface ElastiCacheDescribeUsersMessage {
  /**
   * @schema ElastiCacheDescribeUsersMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema ElastiCacheDescribeUsersMessage#UserId
   */
  readonly userId?: string;

  /**
   * @schema ElastiCacheDescribeUsersMessage#Filters
   */
  readonly filters?: ElastiCacheFilter[];

  /**
   * @schema ElastiCacheDescribeUsersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema ElastiCacheDescribeUsersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ElastiCacheDescribeUsersResult
 */
export interface ElastiCacheDescribeUsersResult {
  /**
   * @schema ElastiCacheDescribeUsersResult#Users
   */
  readonly users?: ElastiCacheUser[];

  /**
   * @schema ElastiCacheDescribeUsersResult#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ElastiCacheDisassociateGlobalReplicationGroupMessage
 */
export interface ElastiCacheDisassociateGlobalReplicationGroupMessage {
  /**
   * @schema ElastiCacheDisassociateGlobalReplicationGroupMessage#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId: string;

  /**
   * @schema ElastiCacheDisassociateGlobalReplicationGroupMessage#ReplicationGroupId
   */
  readonly replicationGroupId: string;

  /**
   * @schema ElastiCacheDisassociateGlobalReplicationGroupMessage#ReplicationGroupRegion
   */
  readonly replicationGroupRegion: string;

}

/**
 * @schema ElastiCacheDisassociateGlobalReplicationGroupResult
 */
export interface ElastiCacheDisassociateGlobalReplicationGroupResult {
  /**
   * @schema ElastiCacheDisassociateGlobalReplicationGroupResult#GlobalReplicationGroup
   */
  readonly globalReplicationGroup?: ElastiCacheGlobalReplicationGroup;

}

/**
 * @schema ElastiCacheFailoverGlobalReplicationGroupMessage
 */
export interface ElastiCacheFailoverGlobalReplicationGroupMessage {
  /**
   * @schema ElastiCacheFailoverGlobalReplicationGroupMessage#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId: string;

  /**
   * @schema ElastiCacheFailoverGlobalReplicationGroupMessage#PrimaryRegion
   */
  readonly primaryRegion: string;

  /**
   * @schema ElastiCacheFailoverGlobalReplicationGroupMessage#PrimaryReplicationGroupId
   */
  readonly primaryReplicationGroupId: string;

}

/**
 * @schema ElastiCacheFailoverGlobalReplicationGroupResult
 */
export interface ElastiCacheFailoverGlobalReplicationGroupResult {
  /**
   * @schema ElastiCacheFailoverGlobalReplicationGroupResult#GlobalReplicationGroup
   */
  readonly globalReplicationGroup?: ElastiCacheGlobalReplicationGroup;

}

/**
 * @schema ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage
 */
export interface ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage {
  /**
   * @schema ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId: string;

  /**
   * @schema ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage#NodeGroupCount
   */
  readonly nodeGroupCount: number;

  /**
   * @schema ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage#RegionalConfigurations
   */
  readonly regionalConfigurations?: ElastiCacheRegionalConfiguration[];

  /**
   * @schema ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage#ApplyImmediately
   */
  readonly applyImmediately: boolean;

}

/**
 * @schema ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupResult
 */
export interface ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupResult {
  /**
   * @schema ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupResult#GlobalReplicationGroup
   */
  readonly globalReplicationGroup?: ElastiCacheGlobalReplicationGroup;

}

/**
 * @schema ElastiCacheIncreaseReplicaCountMessage
 */
export interface ElastiCacheIncreaseReplicaCountMessage {
  /**
   * @schema ElastiCacheIncreaseReplicaCountMessage#ReplicationGroupId
   */
  readonly replicationGroupId: string;

  /**
   * @schema ElastiCacheIncreaseReplicaCountMessage#NewReplicaCount
   */
  readonly newReplicaCount?: number;

  /**
   * @schema ElastiCacheIncreaseReplicaCountMessage#ReplicaConfiguration
   */
  readonly replicaConfiguration?: ElastiCacheConfigureShard[];

  /**
   * @schema ElastiCacheIncreaseReplicaCountMessage#ApplyImmediately
   */
  readonly applyImmediately: boolean;

}

/**
 * @schema ElastiCacheIncreaseReplicaCountResult
 */
export interface ElastiCacheIncreaseReplicaCountResult {
  /**
   * @schema ElastiCacheIncreaseReplicaCountResult#ReplicationGroup
   */
  readonly replicationGroup?: ElastiCacheReplicationGroup;

}

/**
 * @schema ElastiCacheListAllowedNodeTypeModificationsMessage
 */
export interface ElastiCacheListAllowedNodeTypeModificationsMessage {
  /**
   * @schema ElastiCacheListAllowedNodeTypeModificationsMessage#CacheClusterId
   */
  readonly cacheClusterId?: string;

  /**
   * @schema ElastiCacheListAllowedNodeTypeModificationsMessage#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

}

/**
 * @schema ElastiCacheAllowedNodeTypeModificationsMessage
 */
export interface ElastiCacheAllowedNodeTypeModificationsMessage {
  /**
   * @schema ElastiCacheAllowedNodeTypeModificationsMessage#ScaleUpModifications
   */
  readonly scaleUpModifications?: string[];

  /**
   * @schema ElastiCacheAllowedNodeTypeModificationsMessage#ScaleDownModifications
   */
  readonly scaleDownModifications?: string[];

}

/**
 * @schema ElastiCacheListTagsForResourceMessage
 */
export interface ElastiCacheListTagsForResourceMessage {
  /**
   * @schema ElastiCacheListTagsForResourceMessage#ResourceName
   */
  readonly resourceName: string;

}

/**
 * @schema ElastiCacheModifyCacheClusterMessage
 */
export interface ElastiCacheModifyCacheClusterMessage {
  /**
   * @schema ElastiCacheModifyCacheClusterMessage#CacheClusterId
   */
  readonly cacheClusterId: string;

  /**
   * @schema ElastiCacheModifyCacheClusterMessage#NumCacheNodes
   */
  readonly numCacheNodes?: number;

  /**
   * @schema ElastiCacheModifyCacheClusterMessage#CacheNodeIdsToRemove
   */
  readonly cacheNodeIdsToRemove?: string[];

  /**
   * @schema ElastiCacheModifyCacheClusterMessage#AZMode
   */
  readonly azMode?: string;

  /**
   * @schema ElastiCacheModifyCacheClusterMessage#NewAvailabilityZones
   */
  readonly newAvailabilityZones?: string[];

  /**
   * @schema ElastiCacheModifyCacheClusterMessage#CacheSecurityGroupNames
   */
  readonly cacheSecurityGroupNames?: string[];

  /**
   * @schema ElastiCacheModifyCacheClusterMessage#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema ElastiCacheModifyCacheClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema ElastiCacheModifyCacheClusterMessage#NotificationTopicArn
   */
  readonly notificationTopicArn?: string;

  /**
   * @schema ElastiCacheModifyCacheClusterMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName?: string;

  /**
   * @schema ElastiCacheModifyCacheClusterMessage#NotificationTopicStatus
   */
  readonly notificationTopicStatus?: string;

  /**
   * @schema ElastiCacheModifyCacheClusterMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema ElastiCacheModifyCacheClusterMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema ElastiCacheModifyCacheClusterMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema ElastiCacheModifyCacheClusterMessage#SnapshotRetentionLimit
   */
  readonly snapshotRetentionLimit?: number;

  /**
   * @schema ElastiCacheModifyCacheClusterMessage#SnapshotWindow
   */
  readonly snapshotWindow?: string;

  /**
   * @schema ElastiCacheModifyCacheClusterMessage#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema ElastiCacheModifyCacheClusterMessage#AuthToken
   */
  readonly authToken?: string;

  /**
   * @schema ElastiCacheModifyCacheClusterMessage#AuthTokenUpdateStrategy
   */
  readonly authTokenUpdateStrategy?: string;

}

/**
 * @schema ElastiCacheModifyCacheClusterResult
 */
export interface ElastiCacheModifyCacheClusterResult {
  /**
   * @schema ElastiCacheModifyCacheClusterResult#CacheCluster
   */
  readonly cacheCluster?: ElastiCacheCacheCluster;

}

/**
 * @schema ElastiCacheModifyCacheParameterGroupMessage
 */
export interface ElastiCacheModifyCacheParameterGroupMessage {
  /**
   * @schema ElastiCacheModifyCacheParameterGroupMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName: string;

  /**
   * @schema ElastiCacheModifyCacheParameterGroupMessage#ParameterNameValues
   */
  readonly parameterNameValues: ElastiCacheParameterNameValue[];

}

/**
 * @schema ElastiCacheCacheParameterGroupNameMessage
 */
export interface ElastiCacheCacheParameterGroupNameMessage {
  /**
   * @schema ElastiCacheCacheParameterGroupNameMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName?: string;

}

/**
 * @schema ElastiCacheModifyCacheSubnetGroupMessage
 */
export interface ElastiCacheModifyCacheSubnetGroupMessage {
  /**
   * @schema ElastiCacheModifyCacheSubnetGroupMessage#CacheSubnetGroupName
   */
  readonly cacheSubnetGroupName: string;

  /**
   * @schema ElastiCacheModifyCacheSubnetGroupMessage#CacheSubnetGroupDescription
   */
  readonly cacheSubnetGroupDescription?: string;

  /**
   * @schema ElastiCacheModifyCacheSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds?: string[];

}

/**
 * @schema ElastiCacheModifyCacheSubnetGroupResult
 */
export interface ElastiCacheModifyCacheSubnetGroupResult {
  /**
   * @schema ElastiCacheModifyCacheSubnetGroupResult#CacheSubnetGroup
   */
  readonly cacheSubnetGroup?: ElastiCacheCacheSubnetGroup;

}

/**
 * @schema ElastiCacheModifyGlobalReplicationGroupMessage
 */
export interface ElastiCacheModifyGlobalReplicationGroupMessage {
  /**
   * @schema ElastiCacheModifyGlobalReplicationGroupMessage#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId: string;

  /**
   * @schema ElastiCacheModifyGlobalReplicationGroupMessage#ApplyImmediately
   */
  readonly applyImmediately: boolean;

  /**
   * @schema ElastiCacheModifyGlobalReplicationGroupMessage#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema ElastiCacheModifyGlobalReplicationGroupMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema ElastiCacheModifyGlobalReplicationGroupMessage#GlobalReplicationGroupDescription
   */
  readonly globalReplicationGroupDescription?: string;

  /**
   * @schema ElastiCacheModifyGlobalReplicationGroupMessage#AutomaticFailoverEnabled
   */
  readonly automaticFailoverEnabled?: boolean;

}

/**
 * @schema ElastiCacheModifyGlobalReplicationGroupResult
 */
export interface ElastiCacheModifyGlobalReplicationGroupResult {
  /**
   * @schema ElastiCacheModifyGlobalReplicationGroupResult#GlobalReplicationGroup
   */
  readonly globalReplicationGroup?: ElastiCacheGlobalReplicationGroup;

}

/**
 * @schema ElastiCacheModifyReplicationGroupMessage
 */
export interface ElastiCacheModifyReplicationGroupMessage {
  /**
   * @schema ElastiCacheModifyReplicationGroupMessage#ReplicationGroupId
   */
  readonly replicationGroupId: string;

  /**
   * @schema ElastiCacheModifyReplicationGroupMessage#ReplicationGroupDescription
   */
  readonly replicationGroupDescription?: string;

  /**
   * @schema ElastiCacheModifyReplicationGroupMessage#PrimaryClusterId
   */
  readonly primaryClusterId?: string;

  /**
   * @schema ElastiCacheModifyReplicationGroupMessage#SnapshottingClusterId
   */
  readonly snapshottingClusterId?: string;

  /**
   * @schema ElastiCacheModifyReplicationGroupMessage#AutomaticFailoverEnabled
   */
  readonly automaticFailoverEnabled?: boolean;

  /**
   * @schema ElastiCacheModifyReplicationGroupMessage#MultiAZEnabled
   */
  readonly multiAzEnabled?: boolean;

  /**
   * @schema ElastiCacheModifyReplicationGroupMessage#NodeGroupId
   */
  readonly nodeGroupId?: string;

  /**
   * @schema ElastiCacheModifyReplicationGroupMessage#CacheSecurityGroupNames
   */
  readonly cacheSecurityGroupNames?: string[];

  /**
   * @schema ElastiCacheModifyReplicationGroupMessage#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema ElastiCacheModifyReplicationGroupMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema ElastiCacheModifyReplicationGroupMessage#NotificationTopicArn
   */
  readonly notificationTopicArn?: string;

  /**
   * @schema ElastiCacheModifyReplicationGroupMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName?: string;

  /**
   * @schema ElastiCacheModifyReplicationGroupMessage#NotificationTopicStatus
   */
  readonly notificationTopicStatus?: string;

  /**
   * @schema ElastiCacheModifyReplicationGroupMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema ElastiCacheModifyReplicationGroupMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema ElastiCacheModifyReplicationGroupMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema ElastiCacheModifyReplicationGroupMessage#SnapshotRetentionLimit
   */
  readonly snapshotRetentionLimit?: number;

  /**
   * @schema ElastiCacheModifyReplicationGroupMessage#SnapshotWindow
   */
  readonly snapshotWindow?: string;

  /**
   * @schema ElastiCacheModifyReplicationGroupMessage#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema ElastiCacheModifyReplicationGroupMessage#AuthToken
   */
  readonly authToken?: string;

  /**
   * @schema ElastiCacheModifyReplicationGroupMessage#AuthTokenUpdateStrategy
   */
  readonly authTokenUpdateStrategy?: string;

  /**
   * @schema ElastiCacheModifyReplicationGroupMessage#UserGroupIdsToAdd
   */
  readonly userGroupIdsToAdd?: string[];

  /**
   * @schema ElastiCacheModifyReplicationGroupMessage#UserGroupIdsToRemove
   */
  readonly userGroupIdsToRemove?: string[];

  /**
   * @schema ElastiCacheModifyReplicationGroupMessage#RemoveUserGroups
   */
  readonly removeUserGroups?: boolean;

}

/**
 * @schema ElastiCacheModifyReplicationGroupResult
 */
export interface ElastiCacheModifyReplicationGroupResult {
  /**
   * @schema ElastiCacheModifyReplicationGroupResult#ReplicationGroup
   */
  readonly replicationGroup?: ElastiCacheReplicationGroup;

}

/**
 * @schema ElastiCacheModifyReplicationGroupShardConfigurationMessage
 */
export interface ElastiCacheModifyReplicationGroupShardConfigurationMessage {
  /**
   * @schema ElastiCacheModifyReplicationGroupShardConfigurationMessage#ReplicationGroupId
   */
  readonly replicationGroupId: string;

  /**
   * @schema ElastiCacheModifyReplicationGroupShardConfigurationMessage#NodeGroupCount
   */
  readonly nodeGroupCount: number;

  /**
   * @schema ElastiCacheModifyReplicationGroupShardConfigurationMessage#ApplyImmediately
   */
  readonly applyImmediately: boolean;

  /**
   * @schema ElastiCacheModifyReplicationGroupShardConfigurationMessage#ReshardingConfiguration
   */
  readonly reshardingConfiguration?: ElastiCacheReshardingConfiguration[];

  /**
   * @schema ElastiCacheModifyReplicationGroupShardConfigurationMessage#NodeGroupsToRemove
   */
  readonly nodeGroupsToRemove?: string[];

  /**
   * @schema ElastiCacheModifyReplicationGroupShardConfigurationMessage#NodeGroupsToRetain
   */
  readonly nodeGroupsToRetain?: string[];

}

/**
 * @schema ElastiCacheModifyReplicationGroupShardConfigurationResult
 */
export interface ElastiCacheModifyReplicationGroupShardConfigurationResult {
  /**
   * @schema ElastiCacheModifyReplicationGroupShardConfigurationResult#ReplicationGroup
   */
  readonly replicationGroup?: ElastiCacheReplicationGroup;

}

/**
 * @schema ElastiCacheModifyUserMessage
 */
export interface ElastiCacheModifyUserMessage {
  /**
   * @schema ElastiCacheModifyUserMessage#UserId
   */
  readonly userId: string;

  /**
   * @schema ElastiCacheModifyUserMessage#AccessString
   */
  readonly accessString?: string;

  /**
   * @schema ElastiCacheModifyUserMessage#AppendAccessString
   */
  readonly appendAccessString?: string;

  /**
   * @schema ElastiCacheModifyUserMessage#Passwords
   */
  readonly passwords?: string[];

  /**
   * @schema ElastiCacheModifyUserMessage#NoPasswordRequired
   */
  readonly noPasswordRequired?: boolean;

}

/**
 * @schema ElastiCacheModifyUserGroupMessage
 */
export interface ElastiCacheModifyUserGroupMessage {
  /**
   * @schema ElastiCacheModifyUserGroupMessage#UserGroupId
   */
  readonly userGroupId: string;

  /**
   * @schema ElastiCacheModifyUserGroupMessage#UserIdsToAdd
   */
  readonly userIdsToAdd?: string[];

  /**
   * @schema ElastiCacheModifyUserGroupMessage#UserIdsToRemove
   */
  readonly userIdsToRemove?: string[];

}

/**
 * @schema ElastiCachePurchaseReservedCacheNodesOfferingMessage
 */
export interface ElastiCachePurchaseReservedCacheNodesOfferingMessage {
  /**
   * @schema ElastiCachePurchaseReservedCacheNodesOfferingMessage#ReservedCacheNodesOfferingId
   */
  readonly reservedCacheNodesOfferingId: string;

  /**
   * @schema ElastiCachePurchaseReservedCacheNodesOfferingMessage#ReservedCacheNodeId
   */
  readonly reservedCacheNodeId?: string;

  /**
   * @schema ElastiCachePurchaseReservedCacheNodesOfferingMessage#CacheNodeCount
   */
  readonly cacheNodeCount?: number;

}

/**
 * @schema ElastiCachePurchaseReservedCacheNodesOfferingResult
 */
export interface ElastiCachePurchaseReservedCacheNodesOfferingResult {
  /**
   * @schema ElastiCachePurchaseReservedCacheNodesOfferingResult#ReservedCacheNode
   */
  readonly reservedCacheNode?: ElastiCacheReservedCacheNode;

}

/**
 * @schema ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage
 */
export interface ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage {
  /**
   * @schema ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId: string;

  /**
   * @schema ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage#ApplyImmediately
   */
  readonly applyImmediately: boolean;

}

/**
 * @schema ElastiCacheRebalanceSlotsInGlobalReplicationGroupResult
 */
export interface ElastiCacheRebalanceSlotsInGlobalReplicationGroupResult {
  /**
   * @schema ElastiCacheRebalanceSlotsInGlobalReplicationGroupResult#GlobalReplicationGroup
   */
  readonly globalReplicationGroup?: ElastiCacheGlobalReplicationGroup;

}

/**
 * @schema ElastiCacheRebootCacheClusterMessage
 */
export interface ElastiCacheRebootCacheClusterMessage {
  /**
   * @schema ElastiCacheRebootCacheClusterMessage#CacheClusterId
   */
  readonly cacheClusterId: string;

  /**
   * @schema ElastiCacheRebootCacheClusterMessage#CacheNodeIdsToReboot
   */
  readonly cacheNodeIdsToReboot: string[];

}

/**
 * @schema ElastiCacheRebootCacheClusterResult
 */
export interface ElastiCacheRebootCacheClusterResult {
  /**
   * @schema ElastiCacheRebootCacheClusterResult#CacheCluster
   */
  readonly cacheCluster?: ElastiCacheCacheCluster;

}

/**
 * @schema ElastiCacheRemoveTagsFromResourceMessage
 */
export interface ElastiCacheRemoveTagsFromResourceMessage {
  /**
   * @schema ElastiCacheRemoveTagsFromResourceMessage#ResourceName
   */
  readonly resourceName: string;

  /**
   * @schema ElastiCacheRemoveTagsFromResourceMessage#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema ElastiCacheResetCacheParameterGroupMessage
 */
export interface ElastiCacheResetCacheParameterGroupMessage {
  /**
   * @schema ElastiCacheResetCacheParameterGroupMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName: string;

  /**
   * @schema ElastiCacheResetCacheParameterGroupMessage#ResetAllParameters
   */
  readonly resetAllParameters?: boolean;

  /**
   * @schema ElastiCacheResetCacheParameterGroupMessage#ParameterNameValues
   */
  readonly parameterNameValues?: ElastiCacheParameterNameValue[];

}

/**
 * @schema ElastiCacheRevokeCacheSecurityGroupIngressMessage
 */
export interface ElastiCacheRevokeCacheSecurityGroupIngressMessage {
  /**
   * @schema ElastiCacheRevokeCacheSecurityGroupIngressMessage#CacheSecurityGroupName
   */
  readonly cacheSecurityGroupName: string;

  /**
   * @schema ElastiCacheRevokeCacheSecurityGroupIngressMessage#EC2SecurityGroupName
   */
  readonly ec2SecurityGroupName: string;

  /**
   * @schema ElastiCacheRevokeCacheSecurityGroupIngressMessage#EC2SecurityGroupOwnerId
   */
  readonly ec2SecurityGroupOwnerId: string;

}

/**
 * @schema ElastiCacheRevokeCacheSecurityGroupIngressResult
 */
export interface ElastiCacheRevokeCacheSecurityGroupIngressResult {
  /**
   * @schema ElastiCacheRevokeCacheSecurityGroupIngressResult#CacheSecurityGroup
   */
  readonly cacheSecurityGroup?: ElastiCacheCacheSecurityGroup;

}

/**
 * @schema ElastiCacheStartMigrationMessage
 */
export interface ElastiCacheStartMigrationMessage {
  /**
   * @schema ElastiCacheStartMigrationMessage#ReplicationGroupId
   */
  readonly replicationGroupId: string;

  /**
   * @schema ElastiCacheStartMigrationMessage#CustomerNodeEndpointList
   */
  readonly customerNodeEndpointList: ElastiCacheCustomerNodeEndpoint[];

}

/**
 * @schema ElastiCacheStartMigrationResponse
 */
export interface ElastiCacheStartMigrationResponse {
  /**
   * @schema ElastiCacheStartMigrationResponse#ReplicationGroup
   */
  readonly replicationGroup?: ElastiCacheReplicationGroup;

}

/**
 * @schema ElastiCacheTestFailoverMessage
 */
export interface ElastiCacheTestFailoverMessage {
  /**
   * @schema ElastiCacheTestFailoverMessage#ReplicationGroupId
   */
  readonly replicationGroupId: string;

  /**
   * @schema ElastiCacheTestFailoverMessage#NodeGroupId
   */
  readonly nodeGroupId: string;

}

/**
 * @schema ElastiCacheTestFailoverResult
 */
export interface ElastiCacheTestFailoverResult {
  /**
   * @schema ElastiCacheTestFailoverResult#ReplicationGroup
   */
  readonly replicationGroup?: ElastiCacheReplicationGroup;

}

/**
 * @schema ElastiCacheTag
 */
export interface ElastiCacheTag {
  /**
   * @schema ElastiCacheTag#Key
   */
  readonly key?: string;

  /**
   * @schema ElastiCacheTag#Value
   */
  readonly value?: string;

}

/**
 * @schema ElastiCacheCacheSecurityGroup
 */
export interface ElastiCacheCacheSecurityGroup {
  /**
   * @schema ElastiCacheCacheSecurityGroup#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema ElastiCacheCacheSecurityGroup#CacheSecurityGroupName
   */
  readonly cacheSecurityGroupName?: string;

  /**
   * @schema ElastiCacheCacheSecurityGroup#Description
   */
  readonly description?: string;

  /**
   * @schema ElastiCacheCacheSecurityGroup#EC2SecurityGroups
   */
  readonly ec2SecurityGroups?: ElastiCacheEc2SecurityGroup[];

  /**
   * @schema ElastiCacheCacheSecurityGroup#ARN
   */
  readonly arn?: string;

}

/**
 * @schema ElastiCacheProcessedUpdateAction
 */
export interface ElastiCacheProcessedUpdateAction {
  /**
   * @schema ElastiCacheProcessedUpdateAction#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema ElastiCacheProcessedUpdateAction#CacheClusterId
   */
  readonly cacheClusterId?: string;

  /**
   * @schema ElastiCacheProcessedUpdateAction#ServiceUpdateName
   */
  readonly serviceUpdateName?: string;

  /**
   * @schema ElastiCacheProcessedUpdateAction#UpdateActionStatus
   */
  readonly updateActionStatus?: string;

}

/**
 * @schema ElastiCacheUnprocessedUpdateAction
 */
export interface ElastiCacheUnprocessedUpdateAction {
  /**
   * @schema ElastiCacheUnprocessedUpdateAction#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema ElastiCacheUnprocessedUpdateAction#CacheClusterId
   */
  readonly cacheClusterId?: string;

  /**
   * @schema ElastiCacheUnprocessedUpdateAction#ServiceUpdateName
   */
  readonly serviceUpdateName?: string;

  /**
   * @schema ElastiCacheUnprocessedUpdateAction#ErrorType
   */
  readonly errorType?: string;

  /**
   * @schema ElastiCacheUnprocessedUpdateAction#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema ElastiCacheReplicationGroup
 */
export interface ElastiCacheReplicationGroup {
  /**
   * @schema ElastiCacheReplicationGroup#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema ElastiCacheReplicationGroup#Description
   */
  readonly description?: string;

  /**
   * @schema ElastiCacheReplicationGroup#GlobalReplicationGroupInfo
   */
  readonly globalReplicationGroupInfo?: ElastiCacheGlobalReplicationGroupInfo;

  /**
   * @schema ElastiCacheReplicationGroup#Status
   */
  readonly status?: string;

  /**
   * @schema ElastiCacheReplicationGroup#PendingModifiedValues
   */
  readonly pendingModifiedValues?: ElastiCacheReplicationGroupPendingModifiedValues;

  /**
   * @schema ElastiCacheReplicationGroup#MemberClusters
   */
  readonly memberClusters?: string[];

  /**
   * @schema ElastiCacheReplicationGroup#NodeGroups
   */
  readonly nodeGroups?: ElastiCacheNodeGroup[];

  /**
   * @schema ElastiCacheReplicationGroup#SnapshottingClusterId
   */
  readonly snapshottingClusterId?: string;

  /**
   * @schema ElastiCacheReplicationGroup#AutomaticFailover
   */
  readonly automaticFailover?: string;

  /**
   * @schema ElastiCacheReplicationGroup#MultiAZ
   */
  readonly multiAz?: string;

  /**
   * @schema ElastiCacheReplicationGroup#ConfigurationEndpoint
   */
  readonly configurationEndpoint?: ElastiCacheEndpoint;

  /**
   * @schema ElastiCacheReplicationGroup#SnapshotRetentionLimit
   */
  readonly snapshotRetentionLimit?: number;

  /**
   * @schema ElastiCacheReplicationGroup#SnapshotWindow
   */
  readonly snapshotWindow?: string;

  /**
   * @schema ElastiCacheReplicationGroup#ClusterEnabled
   */
  readonly clusterEnabled?: boolean;

  /**
   * @schema ElastiCacheReplicationGroup#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema ElastiCacheReplicationGroup#AuthTokenEnabled
   */
  readonly authTokenEnabled?: boolean;

  /**
   * @schema ElastiCacheReplicationGroup#AuthTokenLastModifiedDate
   */
  readonly authTokenLastModifiedDate?: string;

  /**
   * @schema ElastiCacheReplicationGroup#TransitEncryptionEnabled
   */
  readonly transitEncryptionEnabled?: boolean;

  /**
   * @schema ElastiCacheReplicationGroup#AtRestEncryptionEnabled
   */
  readonly atRestEncryptionEnabled?: boolean;

  /**
   * @schema ElastiCacheReplicationGroup#MemberClustersOutpostArns
   */
  readonly memberClustersOutpostArns?: string[];

  /**
   * @schema ElastiCacheReplicationGroup#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema ElastiCacheReplicationGroup#ARN
   */
  readonly arn?: string;

  /**
   * @schema ElastiCacheReplicationGroup#UserGroupIds
   */
  readonly userGroupIds?: string[];

}

/**
 * @schema ElastiCacheSnapshot
 */
export interface ElastiCacheSnapshot {
  /**
   * @schema ElastiCacheSnapshot#SnapshotName
   */
  readonly snapshotName?: string;

  /**
   * @schema ElastiCacheSnapshot#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema ElastiCacheSnapshot#ReplicationGroupDescription
   */
  readonly replicationGroupDescription?: string;

  /**
   * @schema ElastiCacheSnapshot#CacheClusterId
   */
  readonly cacheClusterId?: string;

  /**
   * @schema ElastiCacheSnapshot#SnapshotStatus
   */
  readonly snapshotStatus?: string;

  /**
   * @schema ElastiCacheSnapshot#SnapshotSource
   */
  readonly snapshotSource?: string;

  /**
   * @schema ElastiCacheSnapshot#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema ElastiCacheSnapshot#Engine
   */
  readonly engine?: string;

  /**
   * @schema ElastiCacheSnapshot#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema ElastiCacheSnapshot#NumCacheNodes
   */
  readonly numCacheNodes?: number;

  /**
   * @schema ElastiCacheSnapshot#PreferredAvailabilityZone
   */
  readonly preferredAvailabilityZone?: string;

  /**
   * @schema ElastiCacheSnapshot#PreferredOutpostArn
   */
  readonly preferredOutpostArn?: string;

  /**
   * @schema ElastiCacheSnapshot#CacheClusterCreateTime
   */
  readonly cacheClusterCreateTime?: string;

  /**
   * @schema ElastiCacheSnapshot#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema ElastiCacheSnapshot#TopicArn
   */
  readonly topicArn?: string;

  /**
   * @schema ElastiCacheSnapshot#Port
   */
  readonly port?: number;

  /**
   * @schema ElastiCacheSnapshot#CacheParameterGroupName
   */
  readonly cacheParameterGroupName?: string;

  /**
   * @schema ElastiCacheSnapshot#CacheSubnetGroupName
   */
  readonly cacheSubnetGroupName?: string;

  /**
   * @schema ElastiCacheSnapshot#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema ElastiCacheSnapshot#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema ElastiCacheSnapshot#SnapshotRetentionLimit
   */
  readonly snapshotRetentionLimit?: number;

  /**
   * @schema ElastiCacheSnapshot#SnapshotWindow
   */
  readonly snapshotWindow?: string;

  /**
   * @schema ElastiCacheSnapshot#NumNodeGroups
   */
  readonly numNodeGroups?: number;

  /**
   * @schema ElastiCacheSnapshot#AutomaticFailover
   */
  readonly automaticFailover?: string;

  /**
   * @schema ElastiCacheSnapshot#NodeSnapshots
   */
  readonly nodeSnapshots?: ElastiCacheNodeSnapshot[];

  /**
   * @schema ElastiCacheSnapshot#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema ElastiCacheSnapshot#ARN
   */
  readonly arn?: string;

}

/**
 * @schema ElastiCacheCacheCluster
 */
export interface ElastiCacheCacheCluster {
  /**
   * @schema ElastiCacheCacheCluster#CacheClusterId
   */
  readonly cacheClusterId?: string;

  /**
   * @schema ElastiCacheCacheCluster#ConfigurationEndpoint
   */
  readonly configurationEndpoint?: ElastiCacheEndpoint;

  /**
   * @schema ElastiCacheCacheCluster#ClientDownloadLandingPage
   */
  readonly clientDownloadLandingPage?: string;

  /**
   * @schema ElastiCacheCacheCluster#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema ElastiCacheCacheCluster#Engine
   */
  readonly engine?: string;

  /**
   * @schema ElastiCacheCacheCluster#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema ElastiCacheCacheCluster#CacheClusterStatus
   */
  readonly cacheClusterStatus?: string;

  /**
   * @schema ElastiCacheCacheCluster#NumCacheNodes
   */
  readonly numCacheNodes?: number;

  /**
   * @schema ElastiCacheCacheCluster#PreferredAvailabilityZone
   */
  readonly preferredAvailabilityZone?: string;

  /**
   * @schema ElastiCacheCacheCluster#PreferredOutpostArn
   */
  readonly preferredOutpostArn?: string;

  /**
   * @schema ElastiCacheCacheCluster#CacheClusterCreateTime
   */
  readonly cacheClusterCreateTime?: string;

  /**
   * @schema ElastiCacheCacheCluster#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema ElastiCacheCacheCluster#PendingModifiedValues
   */
  readonly pendingModifiedValues?: ElastiCachePendingModifiedValues;

  /**
   * @schema ElastiCacheCacheCluster#NotificationConfiguration
   */
  readonly notificationConfiguration?: ElastiCacheNotificationConfiguration;

  /**
   * @schema ElastiCacheCacheCluster#CacheSecurityGroups
   */
  readonly cacheSecurityGroups?: ElastiCacheCacheSecurityGroupMembership[];

  /**
   * @schema ElastiCacheCacheCluster#CacheParameterGroup
   */
  readonly cacheParameterGroup?: ElastiCacheCacheParameterGroupStatus;

  /**
   * @schema ElastiCacheCacheCluster#CacheSubnetGroupName
   */
  readonly cacheSubnetGroupName?: string;

  /**
   * @schema ElastiCacheCacheCluster#CacheNodes
   */
  readonly cacheNodes?: ElastiCacheCacheNode[];

  /**
   * @schema ElastiCacheCacheCluster#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema ElastiCacheCacheCluster#SecurityGroups
   */
  readonly securityGroups?: ElastiCacheSecurityGroupMembership[];

  /**
   * @schema ElastiCacheCacheCluster#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema ElastiCacheCacheCluster#SnapshotRetentionLimit
   */
  readonly snapshotRetentionLimit?: number;

  /**
   * @schema ElastiCacheCacheCluster#SnapshotWindow
   */
  readonly snapshotWindow?: string;

  /**
   * @schema ElastiCacheCacheCluster#AuthTokenEnabled
   */
  readonly authTokenEnabled?: boolean;

  /**
   * @schema ElastiCacheCacheCluster#AuthTokenLastModifiedDate
   */
  readonly authTokenLastModifiedDate?: string;

  /**
   * @schema ElastiCacheCacheCluster#TransitEncryptionEnabled
   */
  readonly transitEncryptionEnabled?: boolean;

  /**
   * @schema ElastiCacheCacheCluster#AtRestEncryptionEnabled
   */
  readonly atRestEncryptionEnabled?: boolean;

  /**
   * @schema ElastiCacheCacheCluster#ARN
   */
  readonly arn?: string;

}

/**
 * @schema ElastiCacheCacheParameterGroup
 */
export interface ElastiCacheCacheParameterGroup {
  /**
   * @schema ElastiCacheCacheParameterGroup#CacheParameterGroupName
   */
  readonly cacheParameterGroupName?: string;

  /**
   * @schema ElastiCacheCacheParameterGroup#CacheParameterGroupFamily
   */
  readonly cacheParameterGroupFamily?: string;

  /**
   * @schema ElastiCacheCacheParameterGroup#Description
   */
  readonly description?: string;

  /**
   * @schema ElastiCacheCacheParameterGroup#IsGlobal
   */
  readonly isGlobal?: boolean;

  /**
   * @schema ElastiCacheCacheParameterGroup#ARN
   */
  readonly arn?: string;

}

/**
 * @schema ElastiCacheCacheSubnetGroup
 */
export interface ElastiCacheCacheSubnetGroup {
  /**
   * @schema ElastiCacheCacheSubnetGroup#CacheSubnetGroupName
   */
  readonly cacheSubnetGroupName?: string;

  /**
   * @schema ElastiCacheCacheSubnetGroup#CacheSubnetGroupDescription
   */
  readonly cacheSubnetGroupDescription?: string;

  /**
   * @schema ElastiCacheCacheSubnetGroup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema ElastiCacheCacheSubnetGroup#Subnets
   */
  readonly subnets?: ElastiCacheSubnet[];

  /**
   * @schema ElastiCacheCacheSubnetGroup#ARN
   */
  readonly arn?: string;

}

/**
 * @schema ElastiCacheGlobalReplicationGroup
 */
export interface ElastiCacheGlobalReplicationGroup {
  /**
   * @schema ElastiCacheGlobalReplicationGroup#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId?: string;

  /**
   * @schema ElastiCacheGlobalReplicationGroup#GlobalReplicationGroupDescription
   */
  readonly globalReplicationGroupDescription?: string;

  /**
   * @schema ElastiCacheGlobalReplicationGroup#Status
   */
  readonly status?: string;

  /**
   * @schema ElastiCacheGlobalReplicationGroup#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema ElastiCacheGlobalReplicationGroup#Engine
   */
  readonly engine?: string;

  /**
   * @schema ElastiCacheGlobalReplicationGroup#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema ElastiCacheGlobalReplicationGroup#Members
   */
  readonly members?: ElastiCacheGlobalReplicationGroupMember[];

  /**
   * @schema ElastiCacheGlobalReplicationGroup#ClusterEnabled
   */
  readonly clusterEnabled?: boolean;

  /**
   * @schema ElastiCacheGlobalReplicationGroup#GlobalNodeGroups
   */
  readonly globalNodeGroups?: ElastiCacheGlobalNodeGroup[];

  /**
   * @schema ElastiCacheGlobalReplicationGroup#AuthTokenEnabled
   */
  readonly authTokenEnabled?: boolean;

  /**
   * @schema ElastiCacheGlobalReplicationGroup#TransitEncryptionEnabled
   */
  readonly transitEncryptionEnabled?: boolean;

  /**
   * @schema ElastiCacheGlobalReplicationGroup#AtRestEncryptionEnabled
   */
  readonly atRestEncryptionEnabled?: boolean;

  /**
   * @schema ElastiCacheGlobalReplicationGroup#ARN
   */
  readonly arn?: string;

}

/**
 * @schema ElastiCacheNodeGroupConfiguration
 */
export interface ElastiCacheNodeGroupConfiguration {
  /**
   * @schema ElastiCacheNodeGroupConfiguration#NodeGroupId
   */
  readonly nodeGroupId?: string;

  /**
   * @schema ElastiCacheNodeGroupConfiguration#Slots
   */
  readonly slots?: string;

  /**
   * @schema ElastiCacheNodeGroupConfiguration#ReplicaCount
   */
  readonly replicaCount?: number;

  /**
   * @schema ElastiCacheNodeGroupConfiguration#PrimaryAvailabilityZone
   */
  readonly primaryAvailabilityZone?: string;

  /**
   * @schema ElastiCacheNodeGroupConfiguration#ReplicaAvailabilityZones
   */
  readonly replicaAvailabilityZones?: string[];

  /**
   * @schema ElastiCacheNodeGroupConfiguration#PrimaryOutpostArn
   */
  readonly primaryOutpostArn?: string;

  /**
   * @schema ElastiCacheNodeGroupConfiguration#ReplicaOutpostArns
   */
  readonly replicaOutpostArns?: string[];

}

/**
 * @schema ElastiCacheAuthentication
 */
export interface ElastiCacheAuthentication {
  /**
   * @schema ElastiCacheAuthentication#Type
   */
  readonly type?: string;

  /**
   * @schema ElastiCacheAuthentication#PasswordCount
   */
  readonly passwordCount?: number;

}

/**
 * @schema ElastiCacheUserGroupPendingChanges
 */
export interface ElastiCacheUserGroupPendingChanges {
  /**
   * @schema ElastiCacheUserGroupPendingChanges#UserIdsToRemove
   */
  readonly userIdsToRemove?: string[];

  /**
   * @schema ElastiCacheUserGroupPendingChanges#UserIdsToAdd
   */
  readonly userIdsToAdd?: string[];

}

/**
 * @schema ElastiCacheConfigureShard
 */
export interface ElastiCacheConfigureShard {
  /**
   * @schema ElastiCacheConfigureShard#NodeGroupId
   */
  readonly nodeGroupId: string;

  /**
   * @schema ElastiCacheConfigureShard#NewReplicaCount
   */
  readonly newReplicaCount: number;

  /**
   * @schema ElastiCacheConfigureShard#PreferredAvailabilityZones
   */
  readonly preferredAvailabilityZones?: string[];

  /**
   * @schema ElastiCacheConfigureShard#PreferredOutpostArns
   */
  readonly preferredOutpostArns?: string[];

}

/**
 * @schema ElastiCacheCacheEngineVersion
 */
export interface ElastiCacheCacheEngineVersion {
  /**
   * @schema ElastiCacheCacheEngineVersion#Engine
   */
  readonly engine?: string;

  /**
   * @schema ElastiCacheCacheEngineVersion#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema ElastiCacheCacheEngineVersion#CacheParameterGroupFamily
   */
  readonly cacheParameterGroupFamily?: string;

  /**
   * @schema ElastiCacheCacheEngineVersion#CacheEngineDescription
   */
  readonly cacheEngineDescription?: string;

  /**
   * @schema ElastiCacheCacheEngineVersion#CacheEngineVersionDescription
   */
  readonly cacheEngineVersionDescription?: string;

}

/**
 * @schema ElastiCacheParameter
 */
export interface ElastiCacheParameter {
  /**
   * @schema ElastiCacheParameter#ParameterName
   */
  readonly parameterName?: string;

  /**
   * @schema ElastiCacheParameter#ParameterValue
   */
  readonly parameterValue?: string;

  /**
   * @schema ElastiCacheParameter#Description
   */
  readonly description?: string;

  /**
   * @schema ElastiCacheParameter#Source
   */
  readonly source?: string;

  /**
   * @schema ElastiCacheParameter#DataType
   */
  readonly dataType?: string;

  /**
   * @schema ElastiCacheParameter#AllowedValues
   */
  readonly allowedValues?: string;

  /**
   * @schema ElastiCacheParameter#IsModifiable
   */
  readonly isModifiable?: boolean;

  /**
   * @schema ElastiCacheParameter#MinimumEngineVersion
   */
  readonly minimumEngineVersion?: string;

  /**
   * @schema ElastiCacheParameter#ChangeType
   */
  readonly changeType?: string;

}

/**
 * @schema ElastiCacheCacheNodeTypeSpecificParameter
 */
export interface ElastiCacheCacheNodeTypeSpecificParameter {
  /**
   * @schema ElastiCacheCacheNodeTypeSpecificParameter#ParameterName
   */
  readonly parameterName?: string;

  /**
   * @schema ElastiCacheCacheNodeTypeSpecificParameter#Description
   */
  readonly description?: string;

  /**
   * @schema ElastiCacheCacheNodeTypeSpecificParameter#Source
   */
  readonly source?: string;

  /**
   * @schema ElastiCacheCacheNodeTypeSpecificParameter#DataType
   */
  readonly dataType?: string;

  /**
   * @schema ElastiCacheCacheNodeTypeSpecificParameter#AllowedValues
   */
  readonly allowedValues?: string;

  /**
   * @schema ElastiCacheCacheNodeTypeSpecificParameter#IsModifiable
   */
  readonly isModifiable?: boolean;

  /**
   * @schema ElastiCacheCacheNodeTypeSpecificParameter#MinimumEngineVersion
   */
  readonly minimumEngineVersion?: string;

  /**
   * @schema ElastiCacheCacheNodeTypeSpecificParameter#CacheNodeTypeSpecificValues
   */
  readonly cacheNodeTypeSpecificValues?: ElastiCacheCacheNodeTypeSpecificValue[];

  /**
   * @schema ElastiCacheCacheNodeTypeSpecificParameter#ChangeType
   */
  readonly changeType?: string;

}

/**
 * @schema ElastiCacheEngineDefaults
 */
export interface ElastiCacheEngineDefaults {
  /**
   * @schema ElastiCacheEngineDefaults#CacheParameterGroupFamily
   */
  readonly cacheParameterGroupFamily?: string;

  /**
   * @schema ElastiCacheEngineDefaults#Marker
   */
  readonly marker?: string;

  /**
   * @schema ElastiCacheEngineDefaults#Parameters
   */
  readonly parameters?: ElastiCacheParameter[];

  /**
   * @schema ElastiCacheEngineDefaults#CacheNodeTypeSpecificParameters
   */
  readonly cacheNodeTypeSpecificParameters?: ElastiCacheCacheNodeTypeSpecificParameter[];

}

/**
 * @schema ElastiCacheEvent
 */
export interface ElastiCacheEvent {
  /**
   * @schema ElastiCacheEvent#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

  /**
   * @schema ElastiCacheEvent#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema ElastiCacheEvent#Message
   */
  readonly message?: string;

  /**
   * @schema ElastiCacheEvent#Date
   */
  readonly date?: string;

}

/**
 * @schema ElastiCacheReservedCacheNode
 */
export interface ElastiCacheReservedCacheNode {
  /**
   * @schema ElastiCacheReservedCacheNode#ReservedCacheNodeId
   */
  readonly reservedCacheNodeId?: string;

  /**
   * @schema ElastiCacheReservedCacheNode#ReservedCacheNodesOfferingId
   */
  readonly reservedCacheNodesOfferingId?: string;

  /**
   * @schema ElastiCacheReservedCacheNode#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema ElastiCacheReservedCacheNode#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ElastiCacheReservedCacheNode#Duration
   */
  readonly duration?: number;

  /**
   * @schema ElastiCacheReservedCacheNode#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema ElastiCacheReservedCacheNode#UsagePrice
   */
  readonly usagePrice?: number;

  /**
   * @schema ElastiCacheReservedCacheNode#CacheNodeCount
   */
  readonly cacheNodeCount?: number;

  /**
   * @schema ElastiCacheReservedCacheNode#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema ElastiCacheReservedCacheNode#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema ElastiCacheReservedCacheNode#State
   */
  readonly state?: string;

  /**
   * @schema ElastiCacheReservedCacheNode#RecurringCharges
   */
  readonly recurringCharges?: ElastiCacheRecurringCharge[];

  /**
   * @schema ElastiCacheReservedCacheNode#ReservationARN
   */
  readonly reservationArn?: string;

}

/**
 * @schema ElastiCacheReservedCacheNodesOffering
 */
export interface ElastiCacheReservedCacheNodesOffering {
  /**
   * @schema ElastiCacheReservedCacheNodesOffering#ReservedCacheNodesOfferingId
   */
  readonly reservedCacheNodesOfferingId?: string;

  /**
   * @schema ElastiCacheReservedCacheNodesOffering#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema ElastiCacheReservedCacheNodesOffering#Duration
   */
  readonly duration?: number;

  /**
   * @schema ElastiCacheReservedCacheNodesOffering#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema ElastiCacheReservedCacheNodesOffering#UsagePrice
   */
  readonly usagePrice?: number;

  /**
   * @schema ElastiCacheReservedCacheNodesOffering#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema ElastiCacheReservedCacheNodesOffering#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema ElastiCacheReservedCacheNodesOffering#RecurringCharges
   */
  readonly recurringCharges?: ElastiCacheRecurringCharge[];

}

/**
 * @schema ElastiCacheServiceUpdate
 */
export interface ElastiCacheServiceUpdate {
  /**
   * @schema ElastiCacheServiceUpdate#ServiceUpdateName
   */
  readonly serviceUpdateName?: string;

  /**
   * @schema ElastiCacheServiceUpdate#ServiceUpdateReleaseDate
   */
  readonly serviceUpdateReleaseDate?: string;

  /**
   * @schema ElastiCacheServiceUpdate#ServiceUpdateEndDate
   */
  readonly serviceUpdateEndDate?: string;

  /**
   * @schema ElastiCacheServiceUpdate#ServiceUpdateSeverity
   */
  readonly serviceUpdateSeverity?: string;

  /**
   * @schema ElastiCacheServiceUpdate#ServiceUpdateRecommendedApplyByDate
   */
  readonly serviceUpdateRecommendedApplyByDate?: string;

  /**
   * @schema ElastiCacheServiceUpdate#ServiceUpdateStatus
   */
  readonly serviceUpdateStatus?: string;

  /**
   * @schema ElastiCacheServiceUpdate#ServiceUpdateDescription
   */
  readonly serviceUpdateDescription?: string;

  /**
   * @schema ElastiCacheServiceUpdate#ServiceUpdateType
   */
  readonly serviceUpdateType?: string;

  /**
   * @schema ElastiCacheServiceUpdate#Engine
   */
  readonly engine?: string;

  /**
   * @schema ElastiCacheServiceUpdate#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema ElastiCacheServiceUpdate#AutoUpdateAfterRecommendedApplyByDate
   */
  readonly autoUpdateAfterRecommendedApplyByDate?: boolean;

  /**
   * @schema ElastiCacheServiceUpdate#EstimatedUpdateTime
   */
  readonly estimatedUpdateTime?: string;

}

/**
 * @schema ElastiCacheTimeRangeFilter
 */
export interface ElastiCacheTimeRangeFilter {
  /**
   * @schema ElastiCacheTimeRangeFilter#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ElastiCacheTimeRangeFilter#EndTime
   */
  readonly endTime?: string;

}

/**
 * @schema ElastiCacheUpdateAction
 */
export interface ElastiCacheUpdateAction {
  /**
   * @schema ElastiCacheUpdateAction#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema ElastiCacheUpdateAction#CacheClusterId
   */
  readonly cacheClusterId?: string;

  /**
   * @schema ElastiCacheUpdateAction#ServiceUpdateName
   */
  readonly serviceUpdateName?: string;

  /**
   * @schema ElastiCacheUpdateAction#ServiceUpdateReleaseDate
   */
  readonly serviceUpdateReleaseDate?: string;

  /**
   * @schema ElastiCacheUpdateAction#ServiceUpdateSeverity
   */
  readonly serviceUpdateSeverity?: string;

  /**
   * @schema ElastiCacheUpdateAction#ServiceUpdateStatus
   */
  readonly serviceUpdateStatus?: string;

  /**
   * @schema ElastiCacheUpdateAction#ServiceUpdateRecommendedApplyByDate
   */
  readonly serviceUpdateRecommendedApplyByDate?: string;

  /**
   * @schema ElastiCacheUpdateAction#ServiceUpdateType
   */
  readonly serviceUpdateType?: string;

  /**
   * @schema ElastiCacheUpdateAction#UpdateActionAvailableDate
   */
  readonly updateActionAvailableDate?: string;

  /**
   * @schema ElastiCacheUpdateAction#UpdateActionStatus
   */
  readonly updateActionStatus?: string;

  /**
   * @schema ElastiCacheUpdateAction#NodesUpdated
   */
  readonly nodesUpdated?: string;

  /**
   * @schema ElastiCacheUpdateAction#UpdateActionStatusModifiedDate
   */
  readonly updateActionStatusModifiedDate?: string;

  /**
   * @schema ElastiCacheUpdateAction#SlaMet
   */
  readonly slaMet?: string;

  /**
   * @schema ElastiCacheUpdateAction#NodeGroupUpdateStatus
   */
  readonly nodeGroupUpdateStatus?: ElastiCacheNodeGroupUpdateStatus[];

  /**
   * @schema ElastiCacheUpdateAction#CacheNodeUpdateStatus
   */
  readonly cacheNodeUpdateStatus?: ElastiCacheCacheNodeUpdateStatus[];

  /**
   * @schema ElastiCacheUpdateAction#EstimatedUpdateTime
   */
  readonly estimatedUpdateTime?: string;

  /**
   * @schema ElastiCacheUpdateAction#Engine
   */
  readonly engine?: string;

}

/**
 * @schema ElastiCacheFilter
 */
export interface ElastiCacheFilter {
  /**
   * @schema ElastiCacheFilter#Name
   */
  readonly name: string;

  /**
   * @schema ElastiCacheFilter#Values
   */
  readonly values: string[];

}

/**
 * @schema ElastiCacheRegionalConfiguration
 */
export interface ElastiCacheRegionalConfiguration {
  /**
   * @schema ElastiCacheRegionalConfiguration#ReplicationGroupId
   */
  readonly replicationGroupId: string;

  /**
   * @schema ElastiCacheRegionalConfiguration#ReplicationGroupRegion
   */
  readonly replicationGroupRegion: string;

  /**
   * @schema ElastiCacheRegionalConfiguration#ReshardingConfiguration
   */
  readonly reshardingConfiguration: ElastiCacheReshardingConfiguration[];

}

/**
 * @schema ElastiCacheParameterNameValue
 */
export interface ElastiCacheParameterNameValue {
  /**
   * @schema ElastiCacheParameterNameValue#ParameterName
   */
  readonly parameterName?: string;

  /**
   * @schema ElastiCacheParameterNameValue#ParameterValue
   */
  readonly parameterValue?: string;

}

/**
 * @schema ElastiCacheReshardingConfiguration
 */
export interface ElastiCacheReshardingConfiguration {
  /**
   * @schema ElastiCacheReshardingConfiguration#NodeGroupId
   */
  readonly nodeGroupId?: string;

  /**
   * @schema ElastiCacheReshardingConfiguration#PreferredAvailabilityZones
   */
  readonly preferredAvailabilityZones?: string[];

}

/**
 * @schema ElastiCacheCustomerNodeEndpoint
 */
export interface ElastiCacheCustomerNodeEndpoint {
  /**
   * @schema ElastiCacheCustomerNodeEndpoint#Address
   */
  readonly address?: string;

  /**
   * @schema ElastiCacheCustomerNodeEndpoint#Port
   */
  readonly port?: number;

}

/**
 * @schema ElastiCacheEc2SecurityGroup
 */
export interface ElastiCacheEc2SecurityGroup {
  /**
   * @schema ElastiCacheEc2SecurityGroup#Status
   */
  readonly status?: string;

  /**
   * @schema ElastiCacheEc2SecurityGroup#EC2SecurityGroupName
   */
  readonly ec2SecurityGroupName?: string;

  /**
   * @schema ElastiCacheEc2SecurityGroup#EC2SecurityGroupOwnerId
   */
  readonly ec2SecurityGroupOwnerId?: string;

}

/**
 * @schema ElastiCacheGlobalReplicationGroupInfo
 */
export interface ElastiCacheGlobalReplicationGroupInfo {
  /**
   * @schema ElastiCacheGlobalReplicationGroupInfo#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId?: string;

  /**
   * @schema ElastiCacheGlobalReplicationGroupInfo#GlobalReplicationGroupMemberRole
   */
  readonly globalReplicationGroupMemberRole?: string;

}

/**
 * @schema ElastiCacheReplicationGroupPendingModifiedValues
 */
export interface ElastiCacheReplicationGroupPendingModifiedValues {
  /**
   * @schema ElastiCacheReplicationGroupPendingModifiedValues#PrimaryClusterId
   */
  readonly primaryClusterId?: string;

  /**
   * @schema ElastiCacheReplicationGroupPendingModifiedValues#AutomaticFailoverStatus
   */
  readonly automaticFailoverStatus?: string;

  /**
   * @schema ElastiCacheReplicationGroupPendingModifiedValues#Resharding
   */
  readonly resharding?: ElastiCacheReshardingStatus;

  /**
   * @schema ElastiCacheReplicationGroupPendingModifiedValues#AuthTokenStatus
   */
  readonly authTokenStatus?: string;

  /**
   * @schema ElastiCacheReplicationGroupPendingModifiedValues#UserGroups
   */
  readonly userGroups?: ElastiCacheUserGroupsUpdateStatus;

}

/**
 * @schema ElastiCacheNodeGroup
 */
export interface ElastiCacheNodeGroup {
  /**
   * @schema ElastiCacheNodeGroup#NodeGroupId
   */
  readonly nodeGroupId?: string;

  /**
   * @schema ElastiCacheNodeGroup#Status
   */
  readonly status?: string;

  /**
   * @schema ElastiCacheNodeGroup#PrimaryEndpoint
   */
  readonly primaryEndpoint?: ElastiCacheEndpoint;

  /**
   * @schema ElastiCacheNodeGroup#ReaderEndpoint
   */
  readonly readerEndpoint?: ElastiCacheEndpoint;

  /**
   * @schema ElastiCacheNodeGroup#Slots
   */
  readonly slots?: string;

  /**
   * @schema ElastiCacheNodeGroup#NodeGroupMembers
   */
  readonly nodeGroupMembers?: ElastiCacheNodeGroupMember[];

}

/**
 * @schema ElastiCacheEndpoint
 */
export interface ElastiCacheEndpoint {
  /**
   * @schema ElastiCacheEndpoint#Address
   */
  readonly address?: string;

  /**
   * @schema ElastiCacheEndpoint#Port
   */
  readonly port?: number;

}

/**
 * @schema ElastiCacheNodeSnapshot
 */
export interface ElastiCacheNodeSnapshot {
  /**
   * @schema ElastiCacheNodeSnapshot#CacheClusterId
   */
  readonly cacheClusterId?: string;

  /**
   * @schema ElastiCacheNodeSnapshot#NodeGroupId
   */
  readonly nodeGroupId?: string;

  /**
   * @schema ElastiCacheNodeSnapshot#CacheNodeId
   */
  readonly cacheNodeId?: string;

  /**
   * @schema ElastiCacheNodeSnapshot#NodeGroupConfiguration
   */
  readonly nodeGroupConfiguration?: ElastiCacheNodeGroupConfiguration;

  /**
   * @schema ElastiCacheNodeSnapshot#CacheSize
   */
  readonly cacheSize?: string;

  /**
   * @schema ElastiCacheNodeSnapshot#CacheNodeCreateTime
   */
  readonly cacheNodeCreateTime?: string;

  /**
   * @schema ElastiCacheNodeSnapshot#SnapshotCreateTime
   */
  readonly snapshotCreateTime?: string;

}

/**
 * @schema ElastiCachePendingModifiedValues
 */
export interface ElastiCachePendingModifiedValues {
  /**
   * @schema ElastiCachePendingModifiedValues#NumCacheNodes
   */
  readonly numCacheNodes?: number;

  /**
   * @schema ElastiCachePendingModifiedValues#CacheNodeIdsToRemove
   */
  readonly cacheNodeIdsToRemove?: string[];

  /**
   * @schema ElastiCachePendingModifiedValues#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema ElastiCachePendingModifiedValues#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema ElastiCachePendingModifiedValues#AuthTokenStatus
   */
  readonly authTokenStatus?: string;

}

/**
 * @schema ElastiCacheNotificationConfiguration
 */
export interface ElastiCacheNotificationConfiguration {
  /**
   * @schema ElastiCacheNotificationConfiguration#TopicArn
   */
  readonly topicArn?: string;

  /**
   * @schema ElastiCacheNotificationConfiguration#TopicStatus
   */
  readonly topicStatus?: string;

}

/**
 * @schema ElastiCacheCacheSecurityGroupMembership
 */
export interface ElastiCacheCacheSecurityGroupMembership {
  /**
   * @schema ElastiCacheCacheSecurityGroupMembership#CacheSecurityGroupName
   */
  readonly cacheSecurityGroupName?: string;

  /**
   * @schema ElastiCacheCacheSecurityGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * @schema ElastiCacheCacheParameterGroupStatus
 */
export interface ElastiCacheCacheParameterGroupStatus {
  /**
   * @schema ElastiCacheCacheParameterGroupStatus#CacheParameterGroupName
   */
  readonly cacheParameterGroupName?: string;

  /**
   * @schema ElastiCacheCacheParameterGroupStatus#ParameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

  /**
   * @schema ElastiCacheCacheParameterGroupStatus#CacheNodeIdsToReboot
   */
  readonly cacheNodeIdsToReboot?: string[];

}

/**
 * @schema ElastiCacheCacheNode
 */
export interface ElastiCacheCacheNode {
  /**
   * @schema ElastiCacheCacheNode#CacheNodeId
   */
  readonly cacheNodeId?: string;

  /**
   * @schema ElastiCacheCacheNode#CacheNodeStatus
   */
  readonly cacheNodeStatus?: string;

  /**
   * @schema ElastiCacheCacheNode#CacheNodeCreateTime
   */
  readonly cacheNodeCreateTime?: string;

  /**
   * @schema ElastiCacheCacheNode#Endpoint
   */
  readonly endpoint?: ElastiCacheEndpoint;

  /**
   * @schema ElastiCacheCacheNode#ParameterGroupStatus
   */
  readonly parameterGroupStatus?: string;

  /**
   * @schema ElastiCacheCacheNode#SourceCacheNodeId
   */
  readonly sourceCacheNodeId?: string;

  /**
   * @schema ElastiCacheCacheNode#CustomerAvailabilityZone
   */
  readonly customerAvailabilityZone?: string;

  /**
   * @schema ElastiCacheCacheNode#CustomerOutpostArn
   */
  readonly customerOutpostArn?: string;

}

/**
 * @schema ElastiCacheSecurityGroupMembership
 */
export interface ElastiCacheSecurityGroupMembership {
  /**
   * @schema ElastiCacheSecurityGroupMembership#SecurityGroupId
   */
  readonly securityGroupId?: string;

  /**
   * @schema ElastiCacheSecurityGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * @schema ElastiCacheSubnet
 */
export interface ElastiCacheSubnet {
  /**
   * @schema ElastiCacheSubnet#SubnetIdentifier
   */
  readonly subnetIdentifier?: string;

  /**
   * @schema ElastiCacheSubnet#SubnetAvailabilityZone
   */
  readonly subnetAvailabilityZone?: ElastiCacheAvailabilityZone;

  /**
   * @schema ElastiCacheSubnet#SubnetOutpost
   */
  readonly subnetOutpost?: ElastiCacheSubnetOutpost;

}

/**
 * @schema ElastiCacheGlobalReplicationGroupMember
 */
export interface ElastiCacheGlobalReplicationGroupMember {
  /**
   * @schema ElastiCacheGlobalReplicationGroupMember#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema ElastiCacheGlobalReplicationGroupMember#ReplicationGroupRegion
   */
  readonly replicationGroupRegion?: string;

  /**
   * @schema ElastiCacheGlobalReplicationGroupMember#Role
   */
  readonly role?: string;

  /**
   * @schema ElastiCacheGlobalReplicationGroupMember#AutomaticFailover
   */
  readonly automaticFailover?: string;

  /**
   * @schema ElastiCacheGlobalReplicationGroupMember#Status
   */
  readonly status?: string;

}

/**
 * @schema ElastiCacheGlobalNodeGroup
 */
export interface ElastiCacheGlobalNodeGroup {
  /**
   * @schema ElastiCacheGlobalNodeGroup#GlobalNodeGroupId
   */
  readonly globalNodeGroupId?: string;

  /**
   * @schema ElastiCacheGlobalNodeGroup#Slots
   */
  readonly slots?: string;

}

/**
 * @schema ElastiCacheCacheNodeTypeSpecificValue
 */
export interface ElastiCacheCacheNodeTypeSpecificValue {
  /**
   * @schema ElastiCacheCacheNodeTypeSpecificValue#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema ElastiCacheCacheNodeTypeSpecificValue#Value
   */
  readonly value?: string;

}

/**
 * @schema ElastiCacheRecurringCharge
 */
export interface ElastiCacheRecurringCharge {
  /**
   * @schema ElastiCacheRecurringCharge#RecurringChargeAmount
   */
  readonly recurringChargeAmount?: number;

  /**
   * @schema ElastiCacheRecurringCharge#RecurringChargeFrequency
   */
  readonly recurringChargeFrequency?: string;

}

/**
 * @schema ElastiCacheNodeGroupUpdateStatus
 */
export interface ElastiCacheNodeGroupUpdateStatus {
  /**
   * @schema ElastiCacheNodeGroupUpdateStatus#NodeGroupId
   */
  readonly nodeGroupId?: string;

  /**
   * @schema ElastiCacheNodeGroupUpdateStatus#NodeGroupMemberUpdateStatus
   */
  readonly nodeGroupMemberUpdateStatus?: ElastiCacheNodeGroupMemberUpdateStatus[];

}

/**
 * @schema ElastiCacheCacheNodeUpdateStatus
 */
export interface ElastiCacheCacheNodeUpdateStatus {
  /**
   * @schema ElastiCacheCacheNodeUpdateStatus#CacheNodeId
   */
  readonly cacheNodeId?: string;

  /**
   * @schema ElastiCacheCacheNodeUpdateStatus#NodeUpdateStatus
   */
  readonly nodeUpdateStatus?: string;

  /**
   * @schema ElastiCacheCacheNodeUpdateStatus#NodeDeletionDate
   */
  readonly nodeDeletionDate?: string;

  /**
   * @schema ElastiCacheCacheNodeUpdateStatus#NodeUpdateStartDate
   */
  readonly nodeUpdateStartDate?: string;

  /**
   * @schema ElastiCacheCacheNodeUpdateStatus#NodeUpdateEndDate
   */
  readonly nodeUpdateEndDate?: string;

  /**
   * @schema ElastiCacheCacheNodeUpdateStatus#NodeUpdateInitiatedBy
   */
  readonly nodeUpdateInitiatedBy?: string;

  /**
   * @schema ElastiCacheCacheNodeUpdateStatus#NodeUpdateInitiatedDate
   */
  readonly nodeUpdateInitiatedDate?: string;

  /**
   * @schema ElastiCacheCacheNodeUpdateStatus#NodeUpdateStatusModifiedDate
   */
  readonly nodeUpdateStatusModifiedDate?: string;

}

/**
 * @schema ElastiCacheReshardingStatus
 */
export interface ElastiCacheReshardingStatus {
  /**
   * @schema ElastiCacheReshardingStatus#SlotMigration
   */
  readonly slotMigration?: ElastiCacheSlotMigration;

}

/**
 * @schema ElastiCacheUserGroupsUpdateStatus
 */
export interface ElastiCacheUserGroupsUpdateStatus {
  /**
   * @schema ElastiCacheUserGroupsUpdateStatus#UserGroupIdsToAdd
   */
  readonly userGroupIdsToAdd?: string[];

  /**
   * @schema ElastiCacheUserGroupsUpdateStatus#UserGroupIdsToRemove
   */
  readonly userGroupIdsToRemove?: string[];

}

/**
 * @schema ElastiCacheNodeGroupMember
 */
export interface ElastiCacheNodeGroupMember {
  /**
   * @schema ElastiCacheNodeGroupMember#CacheClusterId
   */
  readonly cacheClusterId?: string;

  /**
   * @schema ElastiCacheNodeGroupMember#CacheNodeId
   */
  readonly cacheNodeId?: string;

  /**
   * @schema ElastiCacheNodeGroupMember#ReadEndpoint
   */
  readonly readEndpoint?: ElastiCacheEndpoint;

  /**
   * @schema ElastiCacheNodeGroupMember#PreferredAvailabilityZone
   */
  readonly preferredAvailabilityZone?: string;

  /**
   * @schema ElastiCacheNodeGroupMember#PreferredOutpostArn
   */
  readonly preferredOutpostArn?: string;

  /**
   * @schema ElastiCacheNodeGroupMember#CurrentRole
   */
  readonly currentRole?: string;

}

/**
 * @schema ElastiCacheAvailabilityZone
 */
export interface ElastiCacheAvailabilityZone {
  /**
   * @schema ElastiCacheAvailabilityZone#Name
   */
  readonly name?: string;

}

/**
 * @schema ElastiCacheSubnetOutpost
 */
export interface ElastiCacheSubnetOutpost {
  /**
   * @schema ElastiCacheSubnetOutpost#SubnetOutpostArn
   */
  readonly subnetOutpostArn?: string;

}

/**
 * @schema ElastiCacheNodeGroupMemberUpdateStatus
 */
export interface ElastiCacheNodeGroupMemberUpdateStatus {
  /**
   * @schema ElastiCacheNodeGroupMemberUpdateStatus#CacheClusterId
   */
  readonly cacheClusterId?: string;

  /**
   * @schema ElastiCacheNodeGroupMemberUpdateStatus#CacheNodeId
   */
  readonly cacheNodeId?: string;

  /**
   * @schema ElastiCacheNodeGroupMemberUpdateStatus#NodeUpdateStatus
   */
  readonly nodeUpdateStatus?: string;

  /**
   * @schema ElastiCacheNodeGroupMemberUpdateStatus#NodeDeletionDate
   */
  readonly nodeDeletionDate?: string;

  /**
   * @schema ElastiCacheNodeGroupMemberUpdateStatus#NodeUpdateStartDate
   */
  readonly nodeUpdateStartDate?: string;

  /**
   * @schema ElastiCacheNodeGroupMemberUpdateStatus#NodeUpdateEndDate
   */
  readonly nodeUpdateEndDate?: string;

  /**
   * @schema ElastiCacheNodeGroupMemberUpdateStatus#NodeUpdateInitiatedBy
   */
  readonly nodeUpdateInitiatedBy?: string;

  /**
   * @schema ElastiCacheNodeGroupMemberUpdateStatus#NodeUpdateInitiatedDate
   */
  readonly nodeUpdateInitiatedDate?: string;

  /**
   * @schema ElastiCacheNodeGroupMemberUpdateStatus#NodeUpdateStatusModifiedDate
   */
  readonly nodeUpdateStatusModifiedDate?: string;

}

/**
 * @schema ElastiCacheSlotMigration
 */
export interface ElastiCacheSlotMigration {
  /**
   * @schema ElastiCacheSlotMigration#ProgressPercentage
   */
  readonly progressPercentage?: number;

}
