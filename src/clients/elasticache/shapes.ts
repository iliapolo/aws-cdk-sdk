/**
 * @schema ElastiCacheAddTagsToResourceMessage
 */
export interface ElastiCacheAddTagsToResourceMessage {
  /**
   * @schema ElastiCacheAddTagsToResourceMessage#ResourceName
   */
  readonly resourceName?: string;

  /**
   * @schema ElastiCacheAddTagsToResourceMessage#Tags
   */
  readonly tags?: ElastiCacheTag[];

}

/**
 * Converts an object of type 'ElastiCacheAddTagsToResourceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheAddTagsToResourceMessage(obj: ElastiCacheAddTagsToResourceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceName': obj.resourceName,
    'Tags': obj.tags?.map(y => toJson_ElastiCacheTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheTagListMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheTagListMessage(obj: ElastiCacheTagListMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TagList': obj.tagList?.map(y => toJson_ElastiCacheTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheAuthorizeCacheSecurityGroupIngressMessage
 */
export interface ElastiCacheAuthorizeCacheSecurityGroupIngressMessage {
  /**
   * @schema ElastiCacheAuthorizeCacheSecurityGroupIngressMessage#CacheSecurityGroupName
   */
  readonly cacheSecurityGroupName?: string;

  /**
   * @schema ElastiCacheAuthorizeCacheSecurityGroupIngressMessage#EC2SecurityGroupName
   */
  readonly ec2SecurityGroupName?: string;

  /**
   * @schema ElastiCacheAuthorizeCacheSecurityGroupIngressMessage#EC2SecurityGroupOwnerId
   */
  readonly ec2SecurityGroupOwnerId?: string;

}

/**
 * Converts an object of type 'ElastiCacheAuthorizeCacheSecurityGroupIngressMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheAuthorizeCacheSecurityGroupIngressMessage(obj: ElastiCacheAuthorizeCacheSecurityGroupIngressMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheSecurityGroupName': obj.cacheSecurityGroupName,
    'EC2SecurityGroupName': obj.ec2SecurityGroupName,
    'EC2SecurityGroupOwnerId': obj.ec2SecurityGroupOwnerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheAuthorizeCacheSecurityGroupIngressResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheAuthorizeCacheSecurityGroupIngressResult(obj: ElastiCacheAuthorizeCacheSecurityGroupIngressResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheSecurityGroup': toJson_ElastiCacheCacheSecurityGroup(obj.cacheSecurityGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly serviceUpdateName?: string;

}

/**
 * Converts an object of type 'ElastiCacheBatchApplyUpdateActionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheBatchApplyUpdateActionMessage(obj: ElastiCacheBatchApplyUpdateActionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroupIds': obj.replicationGroupIds?.map(y => y),
    'CacheClusterIds': obj.cacheClusterIds?.map(y => y),
    'ServiceUpdateName': obj.serviceUpdateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheUpdateActionResultsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheUpdateActionResultsMessage(obj: ElastiCacheUpdateActionResultsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProcessedUpdateActions': obj.processedUpdateActions?.map(y => toJson_ElastiCacheProcessedUpdateAction(y)),
    'UnprocessedUpdateActions': obj.unprocessedUpdateActions?.map(y => toJson_ElastiCacheUnprocessedUpdateAction(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly serviceUpdateName?: string;

}

/**
 * Converts an object of type 'ElastiCacheBatchStopUpdateActionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheBatchStopUpdateActionMessage(obj: ElastiCacheBatchStopUpdateActionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroupIds': obj.replicationGroupIds?.map(y => y),
    'CacheClusterIds': obj.cacheClusterIds?.map(y => y),
    'ServiceUpdateName': obj.serviceUpdateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheCompleteMigrationMessage
 */
export interface ElastiCacheCompleteMigrationMessage {
  /**
   * @schema ElastiCacheCompleteMigrationMessage#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema ElastiCacheCompleteMigrationMessage#Force
   */
  readonly force?: boolean;

}

/**
 * Converts an object of type 'ElastiCacheCompleteMigrationMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCompleteMigrationMessage(obj: ElastiCacheCompleteMigrationMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroupId': obj.replicationGroupId,
    'Force': obj.force,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheCompleteMigrationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCompleteMigrationResponse(obj: ElastiCacheCompleteMigrationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroup': toJson_ElastiCacheReplicationGroup(obj.replicationGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheCopySnapshotMessage
 */
export interface ElastiCacheCopySnapshotMessage {
  /**
   * @schema ElastiCacheCopySnapshotMessage#SourceSnapshotName
   */
  readonly sourceSnapshotName?: string;

  /**
   * @schema ElastiCacheCopySnapshotMessage#TargetSnapshotName
   */
  readonly targetSnapshotName?: string;

  /**
   * @schema ElastiCacheCopySnapshotMessage#TargetBucket
   */
  readonly targetBucket?: string;

  /**
   * @schema ElastiCacheCopySnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema ElastiCacheCopySnapshotMessage#Tags
   */
  readonly tags?: ElastiCacheTag[];

}

/**
 * Converts an object of type 'ElastiCacheCopySnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCopySnapshotMessage(obj: ElastiCacheCopySnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceSnapshotName': obj.sourceSnapshotName,
    'TargetSnapshotName': obj.targetSnapshotName,
    'TargetBucket': obj.targetBucket,
    'KmsKeyId': obj.kmsKeyId,
    'Tags': obj.tags?.map(y => toJson_ElastiCacheTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheCopySnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCopySnapshotResult(obj: ElastiCacheCopySnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Snapshot': toJson_ElastiCacheSnapshot(obj.snapshot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheCreateCacheClusterMessage
 */
export interface ElastiCacheCreateCacheClusterMessage {
  /**
   * @schema ElastiCacheCreateCacheClusterMessage#CacheClusterId
   */
  readonly cacheClusterId?: string;

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

  /**
   * @schema ElastiCacheCreateCacheClusterMessage#LogDeliveryConfigurations
   */
  readonly logDeliveryConfigurations?: ElastiCacheLogDeliveryConfigurationRequest[];

}

/**
 * Converts an object of type 'ElastiCacheCreateCacheClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCreateCacheClusterMessage(obj: ElastiCacheCreateCacheClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheClusterId': obj.cacheClusterId,
    'ReplicationGroupId': obj.replicationGroupId,
    'AZMode': obj.azMode,
    'PreferredAvailabilityZone': obj.preferredAvailabilityZone,
    'PreferredAvailabilityZones': obj.preferredAvailabilityZones?.map(y => y),
    'NumCacheNodes': obj.numCacheNodes,
    'CacheNodeType': obj.cacheNodeType,
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'CacheParameterGroupName': obj.cacheParameterGroupName,
    'CacheSubnetGroupName': obj.cacheSubnetGroupName,
    'CacheSecurityGroupNames': obj.cacheSecurityGroupNames?.map(y => y),
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_ElastiCacheTag(y)),
    'SnapshotArns': obj.snapshotArns?.map(y => y),
    'SnapshotName': obj.snapshotName,
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'Port': obj.port,
    'NotificationTopicArn': obj.notificationTopicArn,
    'AutoMinorVersionUpgrade': obj.autoMinorVersionUpgrade,
    'SnapshotRetentionLimit': obj.snapshotRetentionLimit,
    'SnapshotWindow': obj.snapshotWindow,
    'AuthToken': obj.authToken,
    'OutpostMode': obj.outpostMode,
    'PreferredOutpostArn': obj.preferredOutpostArn,
    'PreferredOutpostArns': obj.preferredOutpostArns?.map(y => y),
    'LogDeliveryConfigurations': obj.logDeliveryConfigurations?.map(y => toJson_ElastiCacheLogDeliveryConfigurationRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheCreateCacheClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCreateCacheClusterResult(obj: ElastiCacheCreateCacheClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheCluster': toJson_ElastiCacheCacheCluster(obj.cacheCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheCreateCacheParameterGroupMessage
 */
export interface ElastiCacheCreateCacheParameterGroupMessage {
  /**
   * @schema ElastiCacheCreateCacheParameterGroupMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName?: string;

  /**
   * @schema ElastiCacheCreateCacheParameterGroupMessage#CacheParameterGroupFamily
   */
  readonly cacheParameterGroupFamily?: string;

  /**
   * @schema ElastiCacheCreateCacheParameterGroupMessage#Description
   */
  readonly description?: string;

  /**
   * @schema ElastiCacheCreateCacheParameterGroupMessage#Tags
   */
  readonly tags?: ElastiCacheTag[];

}

/**
 * Converts an object of type 'ElastiCacheCreateCacheParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCreateCacheParameterGroupMessage(obj: ElastiCacheCreateCacheParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheParameterGroupName': obj.cacheParameterGroupName,
    'CacheParameterGroupFamily': obj.cacheParameterGroupFamily,
    'Description': obj.description,
    'Tags': obj.tags?.map(y => toJson_ElastiCacheTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheCreateCacheParameterGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCreateCacheParameterGroupResult(obj: ElastiCacheCreateCacheParameterGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheParameterGroup': toJson_ElastiCacheCacheParameterGroup(obj.cacheParameterGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheCreateCacheSecurityGroupMessage
 */
export interface ElastiCacheCreateCacheSecurityGroupMessage {
  /**
   * @schema ElastiCacheCreateCacheSecurityGroupMessage#CacheSecurityGroupName
   */
  readonly cacheSecurityGroupName?: string;

  /**
   * @schema ElastiCacheCreateCacheSecurityGroupMessage#Description
   */
  readonly description?: string;

  /**
   * @schema ElastiCacheCreateCacheSecurityGroupMessage#Tags
   */
  readonly tags?: ElastiCacheTag[];

}

/**
 * Converts an object of type 'ElastiCacheCreateCacheSecurityGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCreateCacheSecurityGroupMessage(obj: ElastiCacheCreateCacheSecurityGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheSecurityGroupName': obj.cacheSecurityGroupName,
    'Description': obj.description,
    'Tags': obj.tags?.map(y => toJson_ElastiCacheTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheCreateCacheSecurityGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCreateCacheSecurityGroupResult(obj: ElastiCacheCreateCacheSecurityGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheSecurityGroup': toJson_ElastiCacheCacheSecurityGroup(obj.cacheSecurityGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheCreateCacheSubnetGroupMessage
 */
export interface ElastiCacheCreateCacheSubnetGroupMessage {
  /**
   * @schema ElastiCacheCreateCacheSubnetGroupMessage#CacheSubnetGroupName
   */
  readonly cacheSubnetGroupName?: string;

  /**
   * @schema ElastiCacheCreateCacheSubnetGroupMessage#CacheSubnetGroupDescription
   */
  readonly cacheSubnetGroupDescription?: string;

  /**
   * @schema ElastiCacheCreateCacheSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema ElastiCacheCreateCacheSubnetGroupMessage#Tags
   */
  readonly tags?: ElastiCacheTag[];

}

/**
 * Converts an object of type 'ElastiCacheCreateCacheSubnetGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCreateCacheSubnetGroupMessage(obj: ElastiCacheCreateCacheSubnetGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheSubnetGroupName': obj.cacheSubnetGroupName,
    'CacheSubnetGroupDescription': obj.cacheSubnetGroupDescription,
    'SubnetIds': obj.subnetIds?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_ElastiCacheTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheCreateCacheSubnetGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCreateCacheSubnetGroupResult(obj: ElastiCacheCreateCacheSubnetGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheSubnetGroup': toJson_ElastiCacheCacheSubnetGroup(obj.cacheSubnetGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheCreateGlobalReplicationGroupMessage
 */
export interface ElastiCacheCreateGlobalReplicationGroupMessage {
  /**
   * @schema ElastiCacheCreateGlobalReplicationGroupMessage#GlobalReplicationGroupIdSuffix
   */
  readonly globalReplicationGroupIdSuffix?: string;

  /**
   * @schema ElastiCacheCreateGlobalReplicationGroupMessage#GlobalReplicationGroupDescription
   */
  readonly globalReplicationGroupDescription?: string;

  /**
   * @schema ElastiCacheCreateGlobalReplicationGroupMessage#PrimaryReplicationGroupId
   */
  readonly primaryReplicationGroupId?: string;

}

/**
 * Converts an object of type 'ElastiCacheCreateGlobalReplicationGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCreateGlobalReplicationGroupMessage(obj: ElastiCacheCreateGlobalReplicationGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalReplicationGroupIdSuffix': obj.globalReplicationGroupIdSuffix,
    'GlobalReplicationGroupDescription': obj.globalReplicationGroupDescription,
    'PrimaryReplicationGroupId': obj.primaryReplicationGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheCreateGlobalReplicationGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCreateGlobalReplicationGroupResult(obj: ElastiCacheCreateGlobalReplicationGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalReplicationGroup': toJson_ElastiCacheGlobalReplicationGroup(obj.globalReplicationGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheCreateReplicationGroupMessage
 */
export interface ElastiCacheCreateReplicationGroupMessage {
  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#ReplicationGroupDescription
   */
  readonly replicationGroupDescription?: string;

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

  /**
   * @schema ElastiCacheCreateReplicationGroupMessage#LogDeliveryConfigurations
   */
  readonly logDeliveryConfigurations?: ElastiCacheLogDeliveryConfigurationRequest[];

}

/**
 * Converts an object of type 'ElastiCacheCreateReplicationGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCreateReplicationGroupMessage(obj: ElastiCacheCreateReplicationGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroupId': obj.replicationGroupId,
    'ReplicationGroupDescription': obj.replicationGroupDescription,
    'GlobalReplicationGroupId': obj.globalReplicationGroupId,
    'PrimaryClusterId': obj.primaryClusterId,
    'AutomaticFailoverEnabled': obj.automaticFailoverEnabled,
    'MultiAZEnabled': obj.multiAzEnabled,
    'NumCacheClusters': obj.numCacheClusters,
    'PreferredCacheClusterAZs': obj.preferredCacheClusterAZs?.map(y => y),
    'NumNodeGroups': obj.numNodeGroups,
    'ReplicasPerNodeGroup': obj.replicasPerNodeGroup,
    'NodeGroupConfiguration': obj.nodeGroupConfiguration?.map(y => toJson_ElastiCacheNodeGroupConfiguration(y)),
    'CacheNodeType': obj.cacheNodeType,
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'CacheParameterGroupName': obj.cacheParameterGroupName,
    'CacheSubnetGroupName': obj.cacheSubnetGroupName,
    'CacheSecurityGroupNames': obj.cacheSecurityGroupNames?.map(y => y),
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_ElastiCacheTag(y)),
    'SnapshotArns': obj.snapshotArns?.map(y => y),
    'SnapshotName': obj.snapshotName,
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'Port': obj.port,
    'NotificationTopicArn': obj.notificationTopicArn,
    'AutoMinorVersionUpgrade': obj.autoMinorVersionUpgrade,
    'SnapshotRetentionLimit': obj.snapshotRetentionLimit,
    'SnapshotWindow': obj.snapshotWindow,
    'AuthToken': obj.authToken,
    'TransitEncryptionEnabled': obj.transitEncryptionEnabled,
    'AtRestEncryptionEnabled': obj.atRestEncryptionEnabled,
    'KmsKeyId': obj.kmsKeyId,
    'UserGroupIds': obj.userGroupIds?.map(y => y),
    'LogDeliveryConfigurations': obj.logDeliveryConfigurations?.map(y => toJson_ElastiCacheLogDeliveryConfigurationRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheCreateReplicationGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCreateReplicationGroupResult(obj: ElastiCacheCreateReplicationGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroup': toJson_ElastiCacheReplicationGroup(obj.replicationGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly snapshotName?: string;

  /**
   * @schema ElastiCacheCreateSnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema ElastiCacheCreateSnapshotMessage#Tags
   */
  readonly tags?: ElastiCacheTag[];

}

/**
 * Converts an object of type 'ElastiCacheCreateSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCreateSnapshotMessage(obj: ElastiCacheCreateSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroupId': obj.replicationGroupId,
    'CacheClusterId': obj.cacheClusterId,
    'SnapshotName': obj.snapshotName,
    'KmsKeyId': obj.kmsKeyId,
    'Tags': obj.tags?.map(y => toJson_ElastiCacheTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheCreateSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCreateSnapshotResult(obj: ElastiCacheCreateSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Snapshot': toJson_ElastiCacheSnapshot(obj.snapshot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheCreateUserMessage
 */
export interface ElastiCacheCreateUserMessage {
  /**
   * @schema ElastiCacheCreateUserMessage#UserId
   */
  readonly userId?: string;

  /**
   * @schema ElastiCacheCreateUserMessage#UserName
   */
  readonly userName?: string;

  /**
   * @schema ElastiCacheCreateUserMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema ElastiCacheCreateUserMessage#Passwords
   */
  readonly passwords?: string[];

  /**
   * @schema ElastiCacheCreateUserMessage#AccessString
   */
  readonly accessString?: string;

  /**
   * @schema ElastiCacheCreateUserMessage#NoPasswordRequired
   */
  readonly noPasswordRequired?: boolean;

  /**
   * @schema ElastiCacheCreateUserMessage#Tags
   */
  readonly tags?: ElastiCacheTag[];

}

/**
 * Converts an object of type 'ElastiCacheCreateUserMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCreateUserMessage(obj: ElastiCacheCreateUserMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserId': obj.userId,
    'UserName': obj.userName,
    'Engine': obj.engine,
    'Passwords': obj.passwords?.map(y => y),
    'AccessString': obj.accessString,
    'NoPasswordRequired': obj.noPasswordRequired,
    'Tags': obj.tags?.map(y => toJson_ElastiCacheTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheUser' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheUser(obj: ElastiCacheUser | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserId': obj.userId,
    'UserName': obj.userName,
    'Status': obj.status,
    'Engine': obj.engine,
    'AccessString': obj.accessString,
    'UserGroupIds': obj.userGroupIds?.map(y => y),
    'Authentication': toJson_ElastiCacheAuthentication(obj.authentication),
    'ARN': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheCreateUserGroupMessage
 */
export interface ElastiCacheCreateUserGroupMessage {
  /**
   * @schema ElastiCacheCreateUserGroupMessage#UserGroupId
   */
  readonly userGroupId?: string;

  /**
   * @schema ElastiCacheCreateUserGroupMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema ElastiCacheCreateUserGroupMessage#UserIds
   */
  readonly userIds?: string[];

  /**
   * @schema ElastiCacheCreateUserGroupMessage#Tags
   */
  readonly tags?: ElastiCacheTag[];

}

/**
 * Converts an object of type 'ElastiCacheCreateUserGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCreateUserGroupMessage(obj: ElastiCacheCreateUserGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserGroupId': obj.userGroupId,
    'Engine': obj.engine,
    'UserIds': obj.userIds?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_ElastiCacheTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheUserGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheUserGroup(obj: ElastiCacheUserGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserGroupId': obj.userGroupId,
    'Status': obj.status,
    'Engine': obj.engine,
    'UserIds': obj.userIds?.map(y => y),
    'PendingChanges': toJson_ElastiCacheUserGroupPendingChanges(obj.pendingChanges),
    'ReplicationGroups': obj.replicationGroups?.map(y => y),
    'ARN': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage
 */
export interface ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage {
  /**
   * @schema ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId?: string;

  /**
   * @schema ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage#NodeGroupCount
   */
  readonly nodeGroupCount?: number;

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
  readonly applyImmediately?: boolean;

}

/**
 * Converts an object of type 'ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage(obj: ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalReplicationGroupId': obj.globalReplicationGroupId,
    'NodeGroupCount': obj.nodeGroupCount,
    'GlobalNodeGroupsToRemove': obj.globalNodeGroupsToRemove?.map(y => y),
    'GlobalNodeGroupsToRetain': obj.globalNodeGroupsToRetain?.map(y => y),
    'ApplyImmediately': obj.applyImmediately,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupResult(obj: ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalReplicationGroup': toJson_ElastiCacheGlobalReplicationGroup(obj.globalReplicationGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheDecreaseReplicaCountMessage
 */
export interface ElastiCacheDecreaseReplicaCountMessage {
  /**
   * @schema ElastiCacheDecreaseReplicaCountMessage#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

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
  readonly applyImmediately?: boolean;

}

/**
 * Converts an object of type 'ElastiCacheDecreaseReplicaCountMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDecreaseReplicaCountMessage(obj: ElastiCacheDecreaseReplicaCountMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroupId': obj.replicationGroupId,
    'NewReplicaCount': obj.newReplicaCount,
    'ReplicaConfiguration': obj.replicaConfiguration?.map(y => toJson_ElastiCacheConfigureShard(y)),
    'ReplicasToRemove': obj.replicasToRemove?.map(y => y),
    'ApplyImmediately': obj.applyImmediately,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheDecreaseReplicaCountResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDecreaseReplicaCountResult(obj: ElastiCacheDecreaseReplicaCountResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroup': toJson_ElastiCacheReplicationGroup(obj.replicationGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheDeleteCacheClusterMessage
 */
export interface ElastiCacheDeleteCacheClusterMessage {
  /**
   * @schema ElastiCacheDeleteCacheClusterMessage#CacheClusterId
   */
  readonly cacheClusterId?: string;

  /**
   * @schema ElastiCacheDeleteCacheClusterMessage#FinalSnapshotIdentifier
   */
  readonly finalSnapshotIdentifier?: string;

}

/**
 * Converts an object of type 'ElastiCacheDeleteCacheClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDeleteCacheClusterMessage(obj: ElastiCacheDeleteCacheClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheClusterId': obj.cacheClusterId,
    'FinalSnapshotIdentifier': obj.finalSnapshotIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheDeleteCacheClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDeleteCacheClusterResult(obj: ElastiCacheDeleteCacheClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheCluster': toJson_ElastiCacheCacheCluster(obj.cacheCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheDeleteCacheParameterGroupMessage
 */
export interface ElastiCacheDeleteCacheParameterGroupMessage {
  /**
   * @schema ElastiCacheDeleteCacheParameterGroupMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName?: string;

}

/**
 * Converts an object of type 'ElastiCacheDeleteCacheParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDeleteCacheParameterGroupMessage(obj: ElastiCacheDeleteCacheParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheParameterGroupName': obj.cacheParameterGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheDeleteCacheSecurityGroupMessage
 */
export interface ElastiCacheDeleteCacheSecurityGroupMessage {
  /**
   * @schema ElastiCacheDeleteCacheSecurityGroupMessage#CacheSecurityGroupName
   */
  readonly cacheSecurityGroupName?: string;

}

/**
 * Converts an object of type 'ElastiCacheDeleteCacheSecurityGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDeleteCacheSecurityGroupMessage(obj: ElastiCacheDeleteCacheSecurityGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheSecurityGroupName': obj.cacheSecurityGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheDeleteCacheSubnetGroupMessage
 */
export interface ElastiCacheDeleteCacheSubnetGroupMessage {
  /**
   * @schema ElastiCacheDeleteCacheSubnetGroupMessage#CacheSubnetGroupName
   */
  readonly cacheSubnetGroupName?: string;

}

/**
 * Converts an object of type 'ElastiCacheDeleteCacheSubnetGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDeleteCacheSubnetGroupMessage(obj: ElastiCacheDeleteCacheSubnetGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheSubnetGroupName': obj.cacheSubnetGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheDeleteGlobalReplicationGroupMessage
 */
export interface ElastiCacheDeleteGlobalReplicationGroupMessage {
  /**
   * @schema ElastiCacheDeleteGlobalReplicationGroupMessage#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId?: string;

  /**
   * @schema ElastiCacheDeleteGlobalReplicationGroupMessage#RetainPrimaryReplicationGroup
   */
  readonly retainPrimaryReplicationGroup?: boolean;

}

/**
 * Converts an object of type 'ElastiCacheDeleteGlobalReplicationGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDeleteGlobalReplicationGroupMessage(obj: ElastiCacheDeleteGlobalReplicationGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalReplicationGroupId': obj.globalReplicationGroupId,
    'RetainPrimaryReplicationGroup': obj.retainPrimaryReplicationGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheDeleteGlobalReplicationGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDeleteGlobalReplicationGroupResult(obj: ElastiCacheDeleteGlobalReplicationGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalReplicationGroup': toJson_ElastiCacheGlobalReplicationGroup(obj.globalReplicationGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheDeleteReplicationGroupMessage
 */
export interface ElastiCacheDeleteReplicationGroupMessage {
  /**
   * @schema ElastiCacheDeleteReplicationGroupMessage#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

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
 * Converts an object of type 'ElastiCacheDeleteReplicationGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDeleteReplicationGroupMessage(obj: ElastiCacheDeleteReplicationGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroupId': obj.replicationGroupId,
    'RetainPrimaryCluster': obj.retainPrimaryCluster,
    'FinalSnapshotIdentifier': obj.finalSnapshotIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheDeleteReplicationGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDeleteReplicationGroupResult(obj: ElastiCacheDeleteReplicationGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroup': toJson_ElastiCacheReplicationGroup(obj.replicationGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheDeleteSnapshotMessage
 */
export interface ElastiCacheDeleteSnapshotMessage {
  /**
   * @schema ElastiCacheDeleteSnapshotMessage#SnapshotName
   */
  readonly snapshotName?: string;

}

/**
 * Converts an object of type 'ElastiCacheDeleteSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDeleteSnapshotMessage(obj: ElastiCacheDeleteSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotName': obj.snapshotName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheDeleteSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDeleteSnapshotResult(obj: ElastiCacheDeleteSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Snapshot': toJson_ElastiCacheSnapshot(obj.snapshot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheDeleteUserMessage
 */
export interface ElastiCacheDeleteUserMessage {
  /**
   * @schema ElastiCacheDeleteUserMessage#UserId
   */
  readonly userId?: string;

}

/**
 * Converts an object of type 'ElastiCacheDeleteUserMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDeleteUserMessage(obj: ElastiCacheDeleteUserMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserId': obj.userId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheDeleteUserGroupMessage
 */
export interface ElastiCacheDeleteUserGroupMessage {
  /**
   * @schema ElastiCacheDeleteUserGroupMessage#UserGroupId
   */
  readonly userGroupId?: string;

}

/**
 * Converts an object of type 'ElastiCacheDeleteUserGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDeleteUserGroupMessage(obj: ElastiCacheDeleteUserGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserGroupId': obj.userGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheDescribeCacheClustersMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDescribeCacheClustersMessage(obj: ElastiCacheDescribeCacheClustersMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheClusterId': obj.cacheClusterId,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
    'ShowCacheNodeInfo': obj.showCacheNodeInfo,
    'ShowCacheClustersNotInReplicationGroups': obj.showCacheClustersNotInReplicationGroups,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheCacheClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCacheClusterMessage(obj: ElastiCacheCacheClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'CacheClusters': obj.cacheClusters?.map(y => toJson_ElastiCacheCacheCluster(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheDescribeCacheEngineVersionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDescribeCacheEngineVersionsMessage(obj: ElastiCacheDescribeCacheEngineVersionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'CacheParameterGroupFamily': obj.cacheParameterGroupFamily,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
    'DefaultOnly': obj.defaultOnly,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheCacheEngineVersionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCacheEngineVersionMessage(obj: ElastiCacheCacheEngineVersionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'CacheEngineVersions': obj.cacheEngineVersions?.map(y => toJson_ElastiCacheCacheEngineVersion(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheDescribeCacheParameterGroupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDescribeCacheParameterGroupsMessage(obj: ElastiCacheDescribeCacheParameterGroupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheParameterGroupName': obj.cacheParameterGroupName,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheCacheParameterGroupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCacheParameterGroupsMessage(obj: ElastiCacheCacheParameterGroupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'CacheParameterGroups': obj.cacheParameterGroups?.map(y => toJson_ElastiCacheCacheParameterGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheDescribeCacheParametersMessage
 */
export interface ElastiCacheDescribeCacheParametersMessage {
  /**
   * @schema ElastiCacheDescribeCacheParametersMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName?: string;

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
 * Converts an object of type 'ElastiCacheDescribeCacheParametersMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDescribeCacheParametersMessage(obj: ElastiCacheDescribeCacheParametersMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheParameterGroupName': obj.cacheParameterGroupName,
    'Source': obj.source,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheCacheParameterGroupDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCacheParameterGroupDetails(obj: ElastiCacheCacheParameterGroupDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'Parameters': obj.parameters?.map(y => toJson_ElastiCacheParameter(y)),
    'CacheNodeTypeSpecificParameters': obj.cacheNodeTypeSpecificParameters?.map(y => toJson_ElastiCacheCacheNodeTypeSpecificParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheDescribeCacheSecurityGroupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDescribeCacheSecurityGroupsMessage(obj: ElastiCacheDescribeCacheSecurityGroupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheSecurityGroupName': obj.cacheSecurityGroupName,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheCacheSecurityGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCacheSecurityGroupMessage(obj: ElastiCacheCacheSecurityGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'CacheSecurityGroups': obj.cacheSecurityGroups?.map(y => toJson_ElastiCacheCacheSecurityGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheDescribeCacheSubnetGroupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDescribeCacheSubnetGroupsMessage(obj: ElastiCacheDescribeCacheSubnetGroupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheSubnetGroupName': obj.cacheSubnetGroupName,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheCacheSubnetGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCacheSubnetGroupMessage(obj: ElastiCacheCacheSubnetGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'CacheSubnetGroups': obj.cacheSubnetGroups?.map(y => toJson_ElastiCacheCacheSubnetGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheDescribeEngineDefaultParametersMessage
 */
export interface ElastiCacheDescribeEngineDefaultParametersMessage {
  /**
   * @schema ElastiCacheDescribeEngineDefaultParametersMessage#CacheParameterGroupFamily
   */
  readonly cacheParameterGroupFamily?: string;

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
 * Converts an object of type 'ElastiCacheDescribeEngineDefaultParametersMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDescribeEngineDefaultParametersMessage(obj: ElastiCacheDescribeEngineDefaultParametersMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheParameterGroupFamily': obj.cacheParameterGroupFamily,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheDescribeEngineDefaultParametersResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDescribeEngineDefaultParametersResult(obj: ElastiCacheDescribeEngineDefaultParametersResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EngineDefaults': toJson_ElastiCacheEngineDefaults(obj.engineDefaults),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheDescribeEventsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDescribeEventsMessage(obj: ElastiCacheDescribeEventsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceIdentifier': obj.sourceIdentifier,
    'SourceType': obj.sourceType,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'Duration': obj.duration,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheEventsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheEventsMessage(obj: ElastiCacheEventsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'Events': obj.events?.map(y => toJson_ElastiCacheEvent(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheDescribeGlobalReplicationGroupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDescribeGlobalReplicationGroupsMessage(obj: ElastiCacheDescribeGlobalReplicationGroupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalReplicationGroupId': obj.globalReplicationGroupId,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
    'ShowMemberInfo': obj.showMemberInfo,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheDescribeGlobalReplicationGroupsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDescribeGlobalReplicationGroupsResult(obj: ElastiCacheDescribeGlobalReplicationGroupsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'GlobalReplicationGroups': obj.globalReplicationGroups?.map(y => toJson_ElastiCacheGlobalReplicationGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheDescribeReplicationGroupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDescribeReplicationGroupsMessage(obj: ElastiCacheDescribeReplicationGroupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroupId': obj.replicationGroupId,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheReplicationGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheReplicationGroupMessage(obj: ElastiCacheReplicationGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'ReplicationGroups': obj.replicationGroups?.map(y => toJson_ElastiCacheReplicationGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheDescribeReservedCacheNodesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDescribeReservedCacheNodesMessage(obj: ElastiCacheDescribeReservedCacheNodesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedCacheNodeId': obj.reservedCacheNodeId,
    'ReservedCacheNodesOfferingId': obj.reservedCacheNodesOfferingId,
    'CacheNodeType': obj.cacheNodeType,
    'Duration': obj.duration,
    'ProductDescription': obj.productDescription,
    'OfferingType': obj.offeringType,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheReservedCacheNodeMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheReservedCacheNodeMessage(obj: ElastiCacheReservedCacheNodeMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'ReservedCacheNodes': obj.reservedCacheNodes?.map(y => toJson_ElastiCacheReservedCacheNode(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheDescribeReservedCacheNodesOfferingsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDescribeReservedCacheNodesOfferingsMessage(obj: ElastiCacheDescribeReservedCacheNodesOfferingsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedCacheNodesOfferingId': obj.reservedCacheNodesOfferingId,
    'CacheNodeType': obj.cacheNodeType,
    'Duration': obj.duration,
    'ProductDescription': obj.productDescription,
    'OfferingType': obj.offeringType,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheReservedCacheNodesOfferingMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheReservedCacheNodesOfferingMessage(obj: ElastiCacheReservedCacheNodesOfferingMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'ReservedCacheNodesOfferings': obj.reservedCacheNodesOfferings?.map(y => toJson_ElastiCacheReservedCacheNodesOffering(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheDescribeServiceUpdatesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDescribeServiceUpdatesMessage(obj: ElastiCacheDescribeServiceUpdatesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceUpdateName': obj.serviceUpdateName,
    'ServiceUpdateStatus': obj.serviceUpdateStatus?.map(y => y),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheServiceUpdatesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheServiceUpdatesMessage(obj: ElastiCacheServiceUpdatesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'ServiceUpdates': obj.serviceUpdates?.map(y => toJson_ElastiCacheServiceUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheDescribeSnapshotsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDescribeSnapshotsMessage(obj: ElastiCacheDescribeSnapshotsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroupId': obj.replicationGroupId,
    'CacheClusterId': obj.cacheClusterId,
    'SnapshotName': obj.snapshotName,
    'SnapshotSource': obj.snapshotSource,
    'Marker': obj.marker,
    'MaxRecords': obj.maxRecords,
    'ShowNodeGroupConfig': obj.showNodeGroupConfig,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheDescribeSnapshotsListMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDescribeSnapshotsListMessage(obj: ElastiCacheDescribeSnapshotsListMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'Snapshots': obj.snapshots?.map(y => toJson_ElastiCacheSnapshot(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheDescribeUpdateActionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDescribeUpdateActionsMessage(obj: ElastiCacheDescribeUpdateActionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceUpdateName': obj.serviceUpdateName,
    'ReplicationGroupIds': obj.replicationGroupIds?.map(y => y),
    'CacheClusterIds': obj.cacheClusterIds?.map(y => y),
    'Engine': obj.engine,
    'ServiceUpdateStatus': obj.serviceUpdateStatus?.map(y => y),
    'ServiceUpdateTimeRange': toJson_ElastiCacheTimeRangeFilter(obj.serviceUpdateTimeRange),
    'UpdateActionStatus': obj.updateActionStatus?.map(y => y),
    'ShowNodeLevelUpdateStatus': obj.showNodeLevelUpdateStatus,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheUpdateActionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheUpdateActionsMessage(obj: ElastiCacheUpdateActionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'UpdateActions': obj.updateActions?.map(y => toJson_ElastiCacheUpdateAction(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheDescribeUserGroupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDescribeUserGroupsMessage(obj: ElastiCacheDescribeUserGroupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserGroupId': obj.userGroupId,
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheDescribeUserGroupsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDescribeUserGroupsResult(obj: ElastiCacheDescribeUserGroupsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserGroups': obj.userGroups?.map(y => toJson_ElastiCacheUserGroup(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheDescribeUsersMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDescribeUsersMessage(obj: ElastiCacheDescribeUsersMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Engine': obj.engine,
    'UserId': obj.userId,
    'Filters': obj.filters?.map(y => toJson_ElastiCacheFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheDescribeUsersResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDescribeUsersResult(obj: ElastiCacheDescribeUsersResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Users': obj.users?.map(y => toJson_ElastiCacheUser(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheDisassociateGlobalReplicationGroupMessage
 */
export interface ElastiCacheDisassociateGlobalReplicationGroupMessage {
  /**
   * @schema ElastiCacheDisassociateGlobalReplicationGroupMessage#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId?: string;

  /**
   * @schema ElastiCacheDisassociateGlobalReplicationGroupMessage#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema ElastiCacheDisassociateGlobalReplicationGroupMessage#ReplicationGroupRegion
   */
  readonly replicationGroupRegion?: string;

}

/**
 * Converts an object of type 'ElastiCacheDisassociateGlobalReplicationGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDisassociateGlobalReplicationGroupMessage(obj: ElastiCacheDisassociateGlobalReplicationGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalReplicationGroupId': obj.globalReplicationGroupId,
    'ReplicationGroupId': obj.replicationGroupId,
    'ReplicationGroupRegion': obj.replicationGroupRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheDisassociateGlobalReplicationGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDisassociateGlobalReplicationGroupResult(obj: ElastiCacheDisassociateGlobalReplicationGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalReplicationGroup': toJson_ElastiCacheGlobalReplicationGroup(obj.globalReplicationGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheFailoverGlobalReplicationGroupMessage
 */
export interface ElastiCacheFailoverGlobalReplicationGroupMessage {
  /**
   * @schema ElastiCacheFailoverGlobalReplicationGroupMessage#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId?: string;

  /**
   * @schema ElastiCacheFailoverGlobalReplicationGroupMessage#PrimaryRegion
   */
  readonly primaryRegion?: string;

  /**
   * @schema ElastiCacheFailoverGlobalReplicationGroupMessage#PrimaryReplicationGroupId
   */
  readonly primaryReplicationGroupId?: string;

}

/**
 * Converts an object of type 'ElastiCacheFailoverGlobalReplicationGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheFailoverGlobalReplicationGroupMessage(obj: ElastiCacheFailoverGlobalReplicationGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalReplicationGroupId': obj.globalReplicationGroupId,
    'PrimaryRegion': obj.primaryRegion,
    'PrimaryReplicationGroupId': obj.primaryReplicationGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheFailoverGlobalReplicationGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheFailoverGlobalReplicationGroupResult(obj: ElastiCacheFailoverGlobalReplicationGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalReplicationGroup': toJson_ElastiCacheGlobalReplicationGroup(obj.globalReplicationGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage
 */
export interface ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage {
  /**
   * @schema ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId?: string;

  /**
   * @schema ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage#NodeGroupCount
   */
  readonly nodeGroupCount?: number;

  /**
   * @schema ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage#RegionalConfigurations
   */
  readonly regionalConfigurations?: ElastiCacheRegionalConfiguration[];

  /**
   * @schema ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

}

/**
 * Converts an object of type 'ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage(obj: ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalReplicationGroupId': obj.globalReplicationGroupId,
    'NodeGroupCount': obj.nodeGroupCount,
    'RegionalConfigurations': obj.regionalConfigurations?.map(y => toJson_ElastiCacheRegionalConfiguration(y)),
    'ApplyImmediately': obj.applyImmediately,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupResult(obj: ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalReplicationGroup': toJson_ElastiCacheGlobalReplicationGroup(obj.globalReplicationGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheIncreaseReplicaCountMessage
 */
export interface ElastiCacheIncreaseReplicaCountMessage {
  /**
   * @schema ElastiCacheIncreaseReplicaCountMessage#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

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
  readonly applyImmediately?: boolean;

}

/**
 * Converts an object of type 'ElastiCacheIncreaseReplicaCountMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheIncreaseReplicaCountMessage(obj: ElastiCacheIncreaseReplicaCountMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroupId': obj.replicationGroupId,
    'NewReplicaCount': obj.newReplicaCount,
    'ReplicaConfiguration': obj.replicaConfiguration?.map(y => toJson_ElastiCacheConfigureShard(y)),
    'ApplyImmediately': obj.applyImmediately,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheIncreaseReplicaCountResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheIncreaseReplicaCountResult(obj: ElastiCacheIncreaseReplicaCountResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroup': toJson_ElastiCacheReplicationGroup(obj.replicationGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheListAllowedNodeTypeModificationsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheListAllowedNodeTypeModificationsMessage(obj: ElastiCacheListAllowedNodeTypeModificationsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheClusterId': obj.cacheClusterId,
    'ReplicationGroupId': obj.replicationGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheAllowedNodeTypeModificationsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheAllowedNodeTypeModificationsMessage(obj: ElastiCacheAllowedNodeTypeModificationsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScaleUpModifications': obj.scaleUpModifications?.map(y => y),
    'ScaleDownModifications': obj.scaleDownModifications?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheListTagsForResourceMessage
 */
export interface ElastiCacheListTagsForResourceMessage {
  /**
   * @schema ElastiCacheListTagsForResourceMessage#ResourceName
   */
  readonly resourceName?: string;

}

/**
 * Converts an object of type 'ElastiCacheListTagsForResourceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheListTagsForResourceMessage(obj: ElastiCacheListTagsForResourceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceName': obj.resourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheModifyCacheClusterMessage
 */
export interface ElastiCacheModifyCacheClusterMessage {
  /**
   * @schema ElastiCacheModifyCacheClusterMessage#CacheClusterId
   */
  readonly cacheClusterId?: string;

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

  /**
   * @schema ElastiCacheModifyCacheClusterMessage#LogDeliveryConfigurations
   */
  readonly logDeliveryConfigurations?: ElastiCacheLogDeliveryConfigurationRequest[];

}

/**
 * Converts an object of type 'ElastiCacheModifyCacheClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheModifyCacheClusterMessage(obj: ElastiCacheModifyCacheClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheClusterId': obj.cacheClusterId,
    'NumCacheNodes': obj.numCacheNodes,
    'CacheNodeIdsToRemove': obj.cacheNodeIdsToRemove?.map(y => y),
    'AZMode': obj.azMode,
    'NewAvailabilityZones': obj.newAvailabilityZones?.map(y => y),
    'CacheSecurityGroupNames': obj.cacheSecurityGroupNames?.map(y => y),
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'NotificationTopicArn': obj.notificationTopicArn,
    'CacheParameterGroupName': obj.cacheParameterGroupName,
    'NotificationTopicStatus': obj.notificationTopicStatus,
    'ApplyImmediately': obj.applyImmediately,
    'EngineVersion': obj.engineVersion,
    'AutoMinorVersionUpgrade': obj.autoMinorVersionUpgrade,
    'SnapshotRetentionLimit': obj.snapshotRetentionLimit,
    'SnapshotWindow': obj.snapshotWindow,
    'CacheNodeType': obj.cacheNodeType,
    'AuthToken': obj.authToken,
    'AuthTokenUpdateStrategy': obj.authTokenUpdateStrategy,
    'LogDeliveryConfigurations': obj.logDeliveryConfigurations?.map(y => toJson_ElastiCacheLogDeliveryConfigurationRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheModifyCacheClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheModifyCacheClusterResult(obj: ElastiCacheModifyCacheClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheCluster': toJson_ElastiCacheCacheCluster(obj.cacheCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheModifyCacheParameterGroupMessage
 */
export interface ElastiCacheModifyCacheParameterGroupMessage {
  /**
   * @schema ElastiCacheModifyCacheParameterGroupMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName?: string;

  /**
   * @schema ElastiCacheModifyCacheParameterGroupMessage#ParameterNameValues
   */
  readonly parameterNameValues?: ElastiCacheParameterNameValue[];

}

/**
 * Converts an object of type 'ElastiCacheModifyCacheParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheModifyCacheParameterGroupMessage(obj: ElastiCacheModifyCacheParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheParameterGroupName': obj.cacheParameterGroupName,
    'ParameterNameValues': obj.parameterNameValues?.map(y => toJson_ElastiCacheParameterNameValue(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheCacheParameterGroupNameMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCacheParameterGroupNameMessage(obj: ElastiCacheCacheParameterGroupNameMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheParameterGroupName': obj.cacheParameterGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheModifyCacheSubnetGroupMessage
 */
export interface ElastiCacheModifyCacheSubnetGroupMessage {
  /**
   * @schema ElastiCacheModifyCacheSubnetGroupMessage#CacheSubnetGroupName
   */
  readonly cacheSubnetGroupName?: string;

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
 * Converts an object of type 'ElastiCacheModifyCacheSubnetGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheModifyCacheSubnetGroupMessage(obj: ElastiCacheModifyCacheSubnetGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheSubnetGroupName': obj.cacheSubnetGroupName,
    'CacheSubnetGroupDescription': obj.cacheSubnetGroupDescription,
    'SubnetIds': obj.subnetIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheModifyCacheSubnetGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheModifyCacheSubnetGroupResult(obj: ElastiCacheModifyCacheSubnetGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheSubnetGroup': toJson_ElastiCacheCacheSubnetGroup(obj.cacheSubnetGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheModifyGlobalReplicationGroupMessage
 */
export interface ElastiCacheModifyGlobalReplicationGroupMessage {
  /**
   * @schema ElastiCacheModifyGlobalReplicationGroupMessage#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId?: string;

  /**
   * @schema ElastiCacheModifyGlobalReplicationGroupMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema ElastiCacheModifyGlobalReplicationGroupMessage#CacheNodeType
   */
  readonly cacheNodeType?: string;

  /**
   * @schema ElastiCacheModifyGlobalReplicationGroupMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema ElastiCacheModifyGlobalReplicationGroupMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName?: string;

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
 * Converts an object of type 'ElastiCacheModifyGlobalReplicationGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheModifyGlobalReplicationGroupMessage(obj: ElastiCacheModifyGlobalReplicationGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalReplicationGroupId': obj.globalReplicationGroupId,
    'ApplyImmediately': obj.applyImmediately,
    'CacheNodeType': obj.cacheNodeType,
    'EngineVersion': obj.engineVersion,
    'CacheParameterGroupName': obj.cacheParameterGroupName,
    'GlobalReplicationGroupDescription': obj.globalReplicationGroupDescription,
    'AutomaticFailoverEnabled': obj.automaticFailoverEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheModifyGlobalReplicationGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheModifyGlobalReplicationGroupResult(obj: ElastiCacheModifyGlobalReplicationGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalReplicationGroup': toJson_ElastiCacheGlobalReplicationGroup(obj.globalReplicationGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheModifyReplicationGroupMessage
 */
export interface ElastiCacheModifyReplicationGroupMessage {
  /**
   * @schema ElastiCacheModifyReplicationGroupMessage#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

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

  /**
   * @schema ElastiCacheModifyReplicationGroupMessage#LogDeliveryConfigurations
   */
  readonly logDeliveryConfigurations?: ElastiCacheLogDeliveryConfigurationRequest[];

}

/**
 * Converts an object of type 'ElastiCacheModifyReplicationGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheModifyReplicationGroupMessage(obj: ElastiCacheModifyReplicationGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroupId': obj.replicationGroupId,
    'ReplicationGroupDescription': obj.replicationGroupDescription,
    'PrimaryClusterId': obj.primaryClusterId,
    'SnapshottingClusterId': obj.snapshottingClusterId,
    'AutomaticFailoverEnabled': obj.automaticFailoverEnabled,
    'MultiAZEnabled': obj.multiAzEnabled,
    'NodeGroupId': obj.nodeGroupId,
    'CacheSecurityGroupNames': obj.cacheSecurityGroupNames?.map(y => y),
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'NotificationTopicArn': obj.notificationTopicArn,
    'CacheParameterGroupName': obj.cacheParameterGroupName,
    'NotificationTopicStatus': obj.notificationTopicStatus,
    'ApplyImmediately': obj.applyImmediately,
    'EngineVersion': obj.engineVersion,
    'AutoMinorVersionUpgrade': obj.autoMinorVersionUpgrade,
    'SnapshotRetentionLimit': obj.snapshotRetentionLimit,
    'SnapshotWindow': obj.snapshotWindow,
    'CacheNodeType': obj.cacheNodeType,
    'AuthToken': obj.authToken,
    'AuthTokenUpdateStrategy': obj.authTokenUpdateStrategy,
    'UserGroupIdsToAdd': obj.userGroupIdsToAdd?.map(y => y),
    'UserGroupIdsToRemove': obj.userGroupIdsToRemove?.map(y => y),
    'RemoveUserGroups': obj.removeUserGroups,
    'LogDeliveryConfigurations': obj.logDeliveryConfigurations?.map(y => toJson_ElastiCacheLogDeliveryConfigurationRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheModifyReplicationGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheModifyReplicationGroupResult(obj: ElastiCacheModifyReplicationGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroup': toJson_ElastiCacheReplicationGroup(obj.replicationGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheModifyReplicationGroupShardConfigurationMessage
 */
export interface ElastiCacheModifyReplicationGroupShardConfigurationMessage {
  /**
   * @schema ElastiCacheModifyReplicationGroupShardConfigurationMessage#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema ElastiCacheModifyReplicationGroupShardConfigurationMessage#NodeGroupCount
   */
  readonly nodeGroupCount?: number;

  /**
   * @schema ElastiCacheModifyReplicationGroupShardConfigurationMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

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
 * Converts an object of type 'ElastiCacheModifyReplicationGroupShardConfigurationMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheModifyReplicationGroupShardConfigurationMessage(obj: ElastiCacheModifyReplicationGroupShardConfigurationMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroupId': obj.replicationGroupId,
    'NodeGroupCount': obj.nodeGroupCount,
    'ApplyImmediately': obj.applyImmediately,
    'ReshardingConfiguration': obj.reshardingConfiguration?.map(y => toJson_ElastiCacheReshardingConfiguration(y)),
    'NodeGroupsToRemove': obj.nodeGroupsToRemove?.map(y => y),
    'NodeGroupsToRetain': obj.nodeGroupsToRetain?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheModifyReplicationGroupShardConfigurationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheModifyReplicationGroupShardConfigurationResult(obj: ElastiCacheModifyReplicationGroupShardConfigurationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroup': toJson_ElastiCacheReplicationGroup(obj.replicationGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheModifyUserMessage
 */
export interface ElastiCacheModifyUserMessage {
  /**
   * @schema ElastiCacheModifyUserMessage#UserId
   */
  readonly userId?: string;

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
 * Converts an object of type 'ElastiCacheModifyUserMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheModifyUserMessage(obj: ElastiCacheModifyUserMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserId': obj.userId,
    'AccessString': obj.accessString,
    'AppendAccessString': obj.appendAccessString,
    'Passwords': obj.passwords?.map(y => y),
    'NoPasswordRequired': obj.noPasswordRequired,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheModifyUserGroupMessage
 */
export interface ElastiCacheModifyUserGroupMessage {
  /**
   * @schema ElastiCacheModifyUserGroupMessage#UserGroupId
   */
  readonly userGroupId?: string;

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
 * Converts an object of type 'ElastiCacheModifyUserGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheModifyUserGroupMessage(obj: ElastiCacheModifyUserGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserGroupId': obj.userGroupId,
    'UserIdsToAdd': obj.userIdsToAdd?.map(y => y),
    'UserIdsToRemove': obj.userIdsToRemove?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCachePurchaseReservedCacheNodesOfferingMessage
 */
export interface ElastiCachePurchaseReservedCacheNodesOfferingMessage {
  /**
   * @schema ElastiCachePurchaseReservedCacheNodesOfferingMessage#ReservedCacheNodesOfferingId
   */
  readonly reservedCacheNodesOfferingId?: string;

  /**
   * @schema ElastiCachePurchaseReservedCacheNodesOfferingMessage#ReservedCacheNodeId
   */
  readonly reservedCacheNodeId?: string;

  /**
   * @schema ElastiCachePurchaseReservedCacheNodesOfferingMessage#CacheNodeCount
   */
  readonly cacheNodeCount?: number;

  /**
   * @schema ElastiCachePurchaseReservedCacheNodesOfferingMessage#Tags
   */
  readonly tags?: ElastiCacheTag[];

}

/**
 * Converts an object of type 'ElastiCachePurchaseReservedCacheNodesOfferingMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCachePurchaseReservedCacheNodesOfferingMessage(obj: ElastiCachePurchaseReservedCacheNodesOfferingMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedCacheNodesOfferingId': obj.reservedCacheNodesOfferingId,
    'ReservedCacheNodeId': obj.reservedCacheNodeId,
    'CacheNodeCount': obj.cacheNodeCount,
    'Tags': obj.tags?.map(y => toJson_ElastiCacheTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCachePurchaseReservedCacheNodesOfferingResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCachePurchaseReservedCacheNodesOfferingResult(obj: ElastiCachePurchaseReservedCacheNodesOfferingResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedCacheNode': toJson_ElastiCacheReservedCacheNode(obj.reservedCacheNode),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage
 */
export interface ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage {
  /**
   * @schema ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage#GlobalReplicationGroupId
   */
  readonly globalReplicationGroupId?: string;

  /**
   * @schema ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

}

/**
 * Converts an object of type 'ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage(obj: ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalReplicationGroupId': obj.globalReplicationGroupId,
    'ApplyImmediately': obj.applyImmediately,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheRebalanceSlotsInGlobalReplicationGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheRebalanceSlotsInGlobalReplicationGroupResult(obj: ElastiCacheRebalanceSlotsInGlobalReplicationGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalReplicationGroup': toJson_ElastiCacheGlobalReplicationGroup(obj.globalReplicationGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheRebootCacheClusterMessage
 */
export interface ElastiCacheRebootCacheClusterMessage {
  /**
   * @schema ElastiCacheRebootCacheClusterMessage#CacheClusterId
   */
  readonly cacheClusterId?: string;

  /**
   * @schema ElastiCacheRebootCacheClusterMessage#CacheNodeIdsToReboot
   */
  readonly cacheNodeIdsToReboot?: string[];

}

/**
 * Converts an object of type 'ElastiCacheRebootCacheClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheRebootCacheClusterMessage(obj: ElastiCacheRebootCacheClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheClusterId': obj.cacheClusterId,
    'CacheNodeIdsToReboot': obj.cacheNodeIdsToReboot?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheRebootCacheClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheRebootCacheClusterResult(obj: ElastiCacheRebootCacheClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheCluster': toJson_ElastiCacheCacheCluster(obj.cacheCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheRemoveTagsFromResourceMessage
 */
export interface ElastiCacheRemoveTagsFromResourceMessage {
  /**
   * @schema ElastiCacheRemoveTagsFromResourceMessage#ResourceName
   */
  readonly resourceName?: string;

  /**
   * @schema ElastiCacheRemoveTagsFromResourceMessage#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'ElastiCacheRemoveTagsFromResourceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheRemoveTagsFromResourceMessage(obj: ElastiCacheRemoveTagsFromResourceMessage | undefined): Record<string, any> | undefined {
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
 * @schema ElastiCacheResetCacheParameterGroupMessage
 */
export interface ElastiCacheResetCacheParameterGroupMessage {
  /**
   * @schema ElastiCacheResetCacheParameterGroupMessage#CacheParameterGroupName
   */
  readonly cacheParameterGroupName?: string;

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
 * Converts an object of type 'ElastiCacheResetCacheParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheResetCacheParameterGroupMessage(obj: ElastiCacheResetCacheParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheParameterGroupName': obj.cacheParameterGroupName,
    'ResetAllParameters': obj.resetAllParameters,
    'ParameterNameValues': obj.parameterNameValues?.map(y => toJson_ElastiCacheParameterNameValue(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheRevokeCacheSecurityGroupIngressMessage
 */
export interface ElastiCacheRevokeCacheSecurityGroupIngressMessage {
  /**
   * @schema ElastiCacheRevokeCacheSecurityGroupIngressMessage#CacheSecurityGroupName
   */
  readonly cacheSecurityGroupName?: string;

  /**
   * @schema ElastiCacheRevokeCacheSecurityGroupIngressMessage#EC2SecurityGroupName
   */
  readonly ec2SecurityGroupName?: string;

  /**
   * @schema ElastiCacheRevokeCacheSecurityGroupIngressMessage#EC2SecurityGroupOwnerId
   */
  readonly ec2SecurityGroupOwnerId?: string;

}

/**
 * Converts an object of type 'ElastiCacheRevokeCacheSecurityGroupIngressMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheRevokeCacheSecurityGroupIngressMessage(obj: ElastiCacheRevokeCacheSecurityGroupIngressMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheSecurityGroupName': obj.cacheSecurityGroupName,
    'EC2SecurityGroupName': obj.ec2SecurityGroupName,
    'EC2SecurityGroupOwnerId': obj.ec2SecurityGroupOwnerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheRevokeCacheSecurityGroupIngressResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheRevokeCacheSecurityGroupIngressResult(obj: ElastiCacheRevokeCacheSecurityGroupIngressResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheSecurityGroup': toJson_ElastiCacheCacheSecurityGroup(obj.cacheSecurityGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheStartMigrationMessage
 */
export interface ElastiCacheStartMigrationMessage {
  /**
   * @schema ElastiCacheStartMigrationMessage#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema ElastiCacheStartMigrationMessage#CustomerNodeEndpointList
   */
  readonly customerNodeEndpointList?: ElastiCacheCustomerNodeEndpoint[];

}

/**
 * Converts an object of type 'ElastiCacheStartMigrationMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheStartMigrationMessage(obj: ElastiCacheStartMigrationMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroupId': obj.replicationGroupId,
    'CustomerNodeEndpointList': obj.customerNodeEndpointList?.map(y => toJson_ElastiCacheCustomerNodeEndpoint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheStartMigrationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheStartMigrationResponse(obj: ElastiCacheStartMigrationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroup': toJson_ElastiCacheReplicationGroup(obj.replicationGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheTestFailoverMessage
 */
export interface ElastiCacheTestFailoverMessage {
  /**
   * @schema ElastiCacheTestFailoverMessage#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema ElastiCacheTestFailoverMessage#NodeGroupId
   */
  readonly nodeGroupId?: string;

}

/**
 * Converts an object of type 'ElastiCacheTestFailoverMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheTestFailoverMessage(obj: ElastiCacheTestFailoverMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroupId': obj.replicationGroupId,
    'NodeGroupId': obj.nodeGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheTestFailoverResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheTestFailoverResult(obj: ElastiCacheTestFailoverResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroup': toJson_ElastiCacheReplicationGroup(obj.replicationGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheTag(obj: ElastiCacheTag | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'ElastiCacheCacheSecurityGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCacheSecurityGroup(obj: ElastiCacheCacheSecurityGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OwnerId': obj.ownerId,
    'CacheSecurityGroupName': obj.cacheSecurityGroupName,
    'Description': obj.description,
    'EC2SecurityGroups': obj.ec2SecurityGroups?.map(y => toJson_ElastiCacheEc2SecurityGroup(y)),
    'ARN': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheProcessedUpdateAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheProcessedUpdateAction(obj: ElastiCacheProcessedUpdateAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroupId': obj.replicationGroupId,
    'CacheClusterId': obj.cacheClusterId,
    'ServiceUpdateName': obj.serviceUpdateName,
    'UpdateActionStatus': obj.updateActionStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheUnprocessedUpdateAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheUnprocessedUpdateAction(obj: ElastiCacheUnprocessedUpdateAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroupId': obj.replicationGroupId,
    'CacheClusterId': obj.cacheClusterId,
    'ServiceUpdateName': obj.serviceUpdateName,
    'ErrorType': obj.errorType,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema ElastiCacheReplicationGroup#LogDeliveryConfigurations
   */
  readonly logDeliveryConfigurations?: ElastiCacheLogDeliveryConfiguration[];

}

/**
 * Converts an object of type 'ElastiCacheReplicationGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheReplicationGroup(obj: ElastiCacheReplicationGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroupId': obj.replicationGroupId,
    'Description': obj.description,
    'GlobalReplicationGroupInfo': toJson_ElastiCacheGlobalReplicationGroupInfo(obj.globalReplicationGroupInfo),
    'Status': obj.status,
    'PendingModifiedValues': toJson_ElastiCacheReplicationGroupPendingModifiedValues(obj.pendingModifiedValues),
    'MemberClusters': obj.memberClusters?.map(y => y),
    'NodeGroups': obj.nodeGroups?.map(y => toJson_ElastiCacheNodeGroup(y)),
    'SnapshottingClusterId': obj.snapshottingClusterId,
    'AutomaticFailover': obj.automaticFailover,
    'MultiAZ': obj.multiAz,
    'ConfigurationEndpoint': toJson_ElastiCacheEndpoint(obj.configurationEndpoint),
    'SnapshotRetentionLimit': obj.snapshotRetentionLimit,
    'SnapshotWindow': obj.snapshotWindow,
    'ClusterEnabled': obj.clusterEnabled,
    'CacheNodeType': obj.cacheNodeType,
    'AuthTokenEnabled': obj.authTokenEnabled,
    'AuthTokenLastModifiedDate': obj.authTokenLastModifiedDate,
    'TransitEncryptionEnabled': obj.transitEncryptionEnabled,
    'AtRestEncryptionEnabled': obj.atRestEncryptionEnabled,
    'MemberClustersOutpostArns': obj.memberClustersOutpostArns?.map(y => y),
    'KmsKeyId': obj.kmsKeyId,
    'ARN': obj.arn,
    'UserGroupIds': obj.userGroupIds?.map(y => y),
    'LogDeliveryConfigurations': obj.logDeliveryConfigurations?.map(y => toJson_ElastiCacheLogDeliveryConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheSnapshot' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheSnapshot(obj: ElastiCacheSnapshot | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotName': obj.snapshotName,
    'ReplicationGroupId': obj.replicationGroupId,
    'ReplicationGroupDescription': obj.replicationGroupDescription,
    'CacheClusterId': obj.cacheClusterId,
    'SnapshotStatus': obj.snapshotStatus,
    'SnapshotSource': obj.snapshotSource,
    'CacheNodeType': obj.cacheNodeType,
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'NumCacheNodes': obj.numCacheNodes,
    'PreferredAvailabilityZone': obj.preferredAvailabilityZone,
    'PreferredOutpostArn': obj.preferredOutpostArn,
    'CacheClusterCreateTime': obj.cacheClusterCreateTime,
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'TopicArn': obj.topicArn,
    'Port': obj.port,
    'CacheParameterGroupName': obj.cacheParameterGroupName,
    'CacheSubnetGroupName': obj.cacheSubnetGroupName,
    'VpcId': obj.vpcId,
    'AutoMinorVersionUpgrade': obj.autoMinorVersionUpgrade,
    'SnapshotRetentionLimit': obj.snapshotRetentionLimit,
    'SnapshotWindow': obj.snapshotWindow,
    'NumNodeGroups': obj.numNodeGroups,
    'AutomaticFailover': obj.automaticFailover,
    'NodeSnapshots': obj.nodeSnapshots?.map(y => toJson_ElastiCacheNodeSnapshot(y)),
    'KmsKeyId': obj.kmsKeyId,
    'ARN': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheLogDeliveryConfigurationRequest
 */
export interface ElastiCacheLogDeliveryConfigurationRequest {
  /**
   * @schema ElastiCacheLogDeliveryConfigurationRequest#LogType
   */
  readonly logType?: string;

  /**
   * @schema ElastiCacheLogDeliveryConfigurationRequest#DestinationType
   */
  readonly destinationType?: string;

  /**
   * @schema ElastiCacheLogDeliveryConfigurationRequest#DestinationDetails
   */
  readonly destinationDetails?: ElastiCacheDestinationDetails;

  /**
   * @schema ElastiCacheLogDeliveryConfigurationRequest#LogFormat
   */
  readonly logFormat?: string;

  /**
   * @schema ElastiCacheLogDeliveryConfigurationRequest#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'ElastiCacheLogDeliveryConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheLogDeliveryConfigurationRequest(obj: ElastiCacheLogDeliveryConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogType': obj.logType,
    'DestinationType': obj.destinationType,
    'DestinationDetails': toJson_ElastiCacheDestinationDetails(obj.destinationDetails),
    'LogFormat': obj.logFormat,
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema ElastiCacheCacheCluster#ReplicationGroupLogDeliveryEnabled
   */
  readonly replicationGroupLogDeliveryEnabled?: boolean;

  /**
   * @schema ElastiCacheCacheCluster#LogDeliveryConfigurations
   */
  readonly logDeliveryConfigurations?: ElastiCacheLogDeliveryConfiguration[];

}

/**
 * Converts an object of type 'ElastiCacheCacheCluster' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCacheCluster(obj: ElastiCacheCacheCluster | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheClusterId': obj.cacheClusterId,
    'ConfigurationEndpoint': toJson_ElastiCacheEndpoint(obj.configurationEndpoint),
    'ClientDownloadLandingPage': obj.clientDownloadLandingPage,
    'CacheNodeType': obj.cacheNodeType,
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'CacheClusterStatus': obj.cacheClusterStatus,
    'NumCacheNodes': obj.numCacheNodes,
    'PreferredAvailabilityZone': obj.preferredAvailabilityZone,
    'PreferredOutpostArn': obj.preferredOutpostArn,
    'CacheClusterCreateTime': obj.cacheClusterCreateTime,
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'PendingModifiedValues': toJson_ElastiCachePendingModifiedValues(obj.pendingModifiedValues),
    'NotificationConfiguration': toJson_ElastiCacheNotificationConfiguration(obj.notificationConfiguration),
    'CacheSecurityGroups': obj.cacheSecurityGroups?.map(y => toJson_ElastiCacheCacheSecurityGroupMembership(y)),
    'CacheParameterGroup': toJson_ElastiCacheCacheParameterGroupStatus(obj.cacheParameterGroup),
    'CacheSubnetGroupName': obj.cacheSubnetGroupName,
    'CacheNodes': obj.cacheNodes?.map(y => toJson_ElastiCacheCacheNode(y)),
    'AutoMinorVersionUpgrade': obj.autoMinorVersionUpgrade,
    'SecurityGroups': obj.securityGroups?.map(y => toJson_ElastiCacheSecurityGroupMembership(y)),
    'ReplicationGroupId': obj.replicationGroupId,
    'SnapshotRetentionLimit': obj.snapshotRetentionLimit,
    'SnapshotWindow': obj.snapshotWindow,
    'AuthTokenEnabled': obj.authTokenEnabled,
    'AuthTokenLastModifiedDate': obj.authTokenLastModifiedDate,
    'TransitEncryptionEnabled': obj.transitEncryptionEnabled,
    'AtRestEncryptionEnabled': obj.atRestEncryptionEnabled,
    'ARN': obj.arn,
    'ReplicationGroupLogDeliveryEnabled': obj.replicationGroupLogDeliveryEnabled,
    'LogDeliveryConfigurations': obj.logDeliveryConfigurations?.map(y => toJson_ElastiCacheLogDeliveryConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheCacheParameterGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCacheParameterGroup(obj: ElastiCacheCacheParameterGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheParameterGroupName': obj.cacheParameterGroupName,
    'CacheParameterGroupFamily': obj.cacheParameterGroupFamily,
    'Description': obj.description,
    'IsGlobal': obj.isGlobal,
    'ARN': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheCacheSubnetGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCacheSubnetGroup(obj: ElastiCacheCacheSubnetGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheSubnetGroupName': obj.cacheSubnetGroupName,
    'CacheSubnetGroupDescription': obj.cacheSubnetGroupDescription,
    'VpcId': obj.vpcId,
    'Subnets': obj.subnets?.map(y => toJson_ElastiCacheSubnet(y)),
    'ARN': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheGlobalReplicationGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheGlobalReplicationGroup(obj: ElastiCacheGlobalReplicationGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalReplicationGroupId': obj.globalReplicationGroupId,
    'GlobalReplicationGroupDescription': obj.globalReplicationGroupDescription,
    'Status': obj.status,
    'CacheNodeType': obj.cacheNodeType,
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'Members': obj.members?.map(y => toJson_ElastiCacheGlobalReplicationGroupMember(y)),
    'ClusterEnabled': obj.clusterEnabled,
    'GlobalNodeGroups': obj.globalNodeGroups?.map(y => toJson_ElastiCacheGlobalNodeGroup(y)),
    'AuthTokenEnabled': obj.authTokenEnabled,
    'TransitEncryptionEnabled': obj.transitEncryptionEnabled,
    'AtRestEncryptionEnabled': obj.atRestEncryptionEnabled,
    'ARN': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheNodeGroupConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheNodeGroupConfiguration(obj: ElastiCacheNodeGroupConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NodeGroupId': obj.nodeGroupId,
    'Slots': obj.slots,
    'ReplicaCount': obj.replicaCount,
    'PrimaryAvailabilityZone': obj.primaryAvailabilityZone,
    'ReplicaAvailabilityZones': obj.replicaAvailabilityZones?.map(y => y),
    'PrimaryOutpostArn': obj.primaryOutpostArn,
    'ReplicaOutpostArns': obj.replicaOutpostArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheAuthentication' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheAuthentication(obj: ElastiCacheAuthentication | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'PasswordCount': obj.passwordCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheUserGroupPendingChanges' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheUserGroupPendingChanges(obj: ElastiCacheUserGroupPendingChanges | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserIdsToRemove': obj.userIdsToRemove?.map(y => y),
    'UserIdsToAdd': obj.userIdsToAdd?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheConfigureShard
 */
export interface ElastiCacheConfigureShard {
  /**
   * @schema ElastiCacheConfigureShard#NodeGroupId
   */
  readonly nodeGroupId?: string;

  /**
   * @schema ElastiCacheConfigureShard#NewReplicaCount
   */
  readonly newReplicaCount?: number;

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
 * Converts an object of type 'ElastiCacheConfigureShard' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheConfigureShard(obj: ElastiCacheConfigureShard | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NodeGroupId': obj.nodeGroupId,
    'NewReplicaCount': obj.newReplicaCount,
    'PreferredAvailabilityZones': obj.preferredAvailabilityZones?.map(y => y),
    'PreferredOutpostArns': obj.preferredOutpostArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheCacheEngineVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCacheEngineVersion(obj: ElastiCacheCacheEngineVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'CacheParameterGroupFamily': obj.cacheParameterGroupFamily,
    'CacheEngineDescription': obj.cacheEngineDescription,
    'CacheEngineVersionDescription': obj.cacheEngineVersionDescription,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheParameter(obj: ElastiCacheParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterName': obj.parameterName,
    'ParameterValue': obj.parameterValue,
    'Description': obj.description,
    'Source': obj.source,
    'DataType': obj.dataType,
    'AllowedValues': obj.allowedValues,
    'IsModifiable': obj.isModifiable,
    'MinimumEngineVersion': obj.minimumEngineVersion,
    'ChangeType': obj.changeType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheCacheNodeTypeSpecificParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCacheNodeTypeSpecificParameter(obj: ElastiCacheCacheNodeTypeSpecificParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterName': obj.parameterName,
    'Description': obj.description,
    'Source': obj.source,
    'DataType': obj.dataType,
    'AllowedValues': obj.allowedValues,
    'IsModifiable': obj.isModifiable,
    'MinimumEngineVersion': obj.minimumEngineVersion,
    'CacheNodeTypeSpecificValues': obj.cacheNodeTypeSpecificValues?.map(y => toJson_ElastiCacheCacheNodeTypeSpecificValue(y)),
    'ChangeType': obj.changeType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheEngineDefaults' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheEngineDefaults(obj: ElastiCacheEngineDefaults | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheParameterGroupFamily': obj.cacheParameterGroupFamily,
    'Marker': obj.marker,
    'Parameters': obj.parameters?.map(y => toJson_ElastiCacheParameter(y)),
    'CacheNodeTypeSpecificParameters': obj.cacheNodeTypeSpecificParameters?.map(y => toJson_ElastiCacheCacheNodeTypeSpecificParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheEvent(obj: ElastiCacheEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceIdentifier': obj.sourceIdentifier,
    'SourceType': obj.sourceType,
    'Message': obj.message,
    'Date': obj.date,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheReservedCacheNode' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheReservedCacheNode(obj: ElastiCacheReservedCacheNode | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedCacheNodeId': obj.reservedCacheNodeId,
    'ReservedCacheNodesOfferingId': obj.reservedCacheNodesOfferingId,
    'CacheNodeType': obj.cacheNodeType,
    'StartTime': obj.startTime,
    'Duration': obj.duration,
    'FixedPrice': obj.fixedPrice,
    'UsagePrice': obj.usagePrice,
    'CacheNodeCount': obj.cacheNodeCount,
    'ProductDescription': obj.productDescription,
    'OfferingType': obj.offeringType,
    'State': obj.state,
    'RecurringCharges': obj.recurringCharges?.map(y => toJson_ElastiCacheRecurringCharge(y)),
    'ReservationARN': obj.reservationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheReservedCacheNodesOffering' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheReservedCacheNodesOffering(obj: ElastiCacheReservedCacheNodesOffering | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedCacheNodesOfferingId': obj.reservedCacheNodesOfferingId,
    'CacheNodeType': obj.cacheNodeType,
    'Duration': obj.duration,
    'FixedPrice': obj.fixedPrice,
    'UsagePrice': obj.usagePrice,
    'ProductDescription': obj.productDescription,
    'OfferingType': obj.offeringType,
    'RecurringCharges': obj.recurringCharges?.map(y => toJson_ElastiCacheRecurringCharge(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheServiceUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheServiceUpdate(obj: ElastiCacheServiceUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceUpdateName': obj.serviceUpdateName,
    'ServiceUpdateReleaseDate': obj.serviceUpdateReleaseDate,
    'ServiceUpdateEndDate': obj.serviceUpdateEndDate,
    'ServiceUpdateSeverity': obj.serviceUpdateSeverity,
    'ServiceUpdateRecommendedApplyByDate': obj.serviceUpdateRecommendedApplyByDate,
    'ServiceUpdateStatus': obj.serviceUpdateStatus,
    'ServiceUpdateDescription': obj.serviceUpdateDescription,
    'ServiceUpdateType': obj.serviceUpdateType,
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'AutoUpdateAfterRecommendedApplyByDate': obj.autoUpdateAfterRecommendedApplyByDate,
    'EstimatedUpdateTime': obj.estimatedUpdateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheTimeRangeFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheTimeRangeFilter(obj: ElastiCacheTimeRangeFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheUpdateAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheUpdateAction(obj: ElastiCacheUpdateAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroupId': obj.replicationGroupId,
    'CacheClusterId': obj.cacheClusterId,
    'ServiceUpdateName': obj.serviceUpdateName,
    'ServiceUpdateReleaseDate': obj.serviceUpdateReleaseDate,
    'ServiceUpdateSeverity': obj.serviceUpdateSeverity,
    'ServiceUpdateStatus': obj.serviceUpdateStatus,
    'ServiceUpdateRecommendedApplyByDate': obj.serviceUpdateRecommendedApplyByDate,
    'ServiceUpdateType': obj.serviceUpdateType,
    'UpdateActionAvailableDate': obj.updateActionAvailableDate,
    'UpdateActionStatus': obj.updateActionStatus,
    'NodesUpdated': obj.nodesUpdated,
    'UpdateActionStatusModifiedDate': obj.updateActionStatusModifiedDate,
    'SlaMet': obj.slaMet,
    'NodeGroupUpdateStatus': obj.nodeGroupUpdateStatus?.map(y => toJson_ElastiCacheNodeGroupUpdateStatus(y)),
    'CacheNodeUpdateStatus': obj.cacheNodeUpdateStatus?.map(y => toJson_ElastiCacheCacheNodeUpdateStatus(y)),
    'EstimatedUpdateTime': obj.estimatedUpdateTime,
    'Engine': obj.engine,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheFilter
 */
export interface ElastiCacheFilter {
  /**
   * @schema ElastiCacheFilter#Name
   */
  readonly name?: string;

  /**
   * @schema ElastiCacheFilter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'ElastiCacheFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheFilter(obj: ElastiCacheFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheRegionalConfiguration
 */
export interface ElastiCacheRegionalConfiguration {
  /**
   * @schema ElastiCacheRegionalConfiguration#ReplicationGroupId
   */
  readonly replicationGroupId?: string;

  /**
   * @schema ElastiCacheRegionalConfiguration#ReplicationGroupRegion
   */
  readonly replicationGroupRegion?: string;

  /**
   * @schema ElastiCacheRegionalConfiguration#ReshardingConfiguration
   */
  readonly reshardingConfiguration?: ElastiCacheReshardingConfiguration[];

}

/**
 * Converts an object of type 'ElastiCacheRegionalConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheRegionalConfiguration(obj: ElastiCacheRegionalConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroupId': obj.replicationGroupId,
    'ReplicationGroupRegion': obj.replicationGroupRegion,
    'ReshardingConfiguration': obj.reshardingConfiguration?.map(y => toJson_ElastiCacheReshardingConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheParameterNameValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheParameterNameValue(obj: ElastiCacheParameterNameValue | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'ElastiCacheReshardingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheReshardingConfiguration(obj: ElastiCacheReshardingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NodeGroupId': obj.nodeGroupId,
    'PreferredAvailabilityZones': obj.preferredAvailabilityZones?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheCustomerNodeEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCustomerNodeEndpoint(obj: ElastiCacheCustomerNodeEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Address': obj.address,
    'Port': obj.port,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheEc2SecurityGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheEc2SecurityGroup(obj: ElastiCacheEc2SecurityGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'EC2SecurityGroupName': obj.ec2SecurityGroupName,
    'EC2SecurityGroupOwnerId': obj.ec2SecurityGroupOwnerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheGlobalReplicationGroupInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheGlobalReplicationGroupInfo(obj: ElastiCacheGlobalReplicationGroupInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalReplicationGroupId': obj.globalReplicationGroupId,
    'GlobalReplicationGroupMemberRole': obj.globalReplicationGroupMemberRole,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema ElastiCacheReplicationGroupPendingModifiedValues#LogDeliveryConfigurations
   */
  readonly logDeliveryConfigurations?: ElastiCachePendingLogDeliveryConfiguration[];

}

/**
 * Converts an object of type 'ElastiCacheReplicationGroupPendingModifiedValues' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheReplicationGroupPendingModifiedValues(obj: ElastiCacheReplicationGroupPendingModifiedValues | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PrimaryClusterId': obj.primaryClusterId,
    'AutomaticFailoverStatus': obj.automaticFailoverStatus,
    'Resharding': toJson_ElastiCacheReshardingStatus(obj.resharding),
    'AuthTokenStatus': obj.authTokenStatus,
    'UserGroups': toJson_ElastiCacheUserGroupsUpdateStatus(obj.userGroups),
    'LogDeliveryConfigurations': obj.logDeliveryConfigurations?.map(y => toJson_ElastiCachePendingLogDeliveryConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheNodeGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheNodeGroup(obj: ElastiCacheNodeGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NodeGroupId': obj.nodeGroupId,
    'Status': obj.status,
    'PrimaryEndpoint': toJson_ElastiCacheEndpoint(obj.primaryEndpoint),
    'ReaderEndpoint': toJson_ElastiCacheEndpoint(obj.readerEndpoint),
    'Slots': obj.slots,
    'NodeGroupMembers': obj.nodeGroupMembers?.map(y => toJson_ElastiCacheNodeGroupMember(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheEndpoint(obj: ElastiCacheEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Address': obj.address,
    'Port': obj.port,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheLogDeliveryConfiguration
 */
export interface ElastiCacheLogDeliveryConfiguration {
  /**
   * @schema ElastiCacheLogDeliveryConfiguration#LogType
   */
  readonly logType?: string;

  /**
   * @schema ElastiCacheLogDeliveryConfiguration#DestinationType
   */
  readonly destinationType?: string;

  /**
   * @schema ElastiCacheLogDeliveryConfiguration#DestinationDetails
   */
  readonly destinationDetails?: ElastiCacheDestinationDetails;

  /**
   * @schema ElastiCacheLogDeliveryConfiguration#LogFormat
   */
  readonly logFormat?: string;

  /**
   * @schema ElastiCacheLogDeliveryConfiguration#Status
   */
  readonly status?: string;

  /**
   * @schema ElastiCacheLogDeliveryConfiguration#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'ElastiCacheLogDeliveryConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheLogDeliveryConfiguration(obj: ElastiCacheLogDeliveryConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogType': obj.logType,
    'DestinationType': obj.destinationType,
    'DestinationDetails': toJson_ElastiCacheDestinationDetails(obj.destinationDetails),
    'LogFormat': obj.logFormat,
    'Status': obj.status,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheNodeSnapshot' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheNodeSnapshot(obj: ElastiCacheNodeSnapshot | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheClusterId': obj.cacheClusterId,
    'NodeGroupId': obj.nodeGroupId,
    'CacheNodeId': obj.cacheNodeId,
    'NodeGroupConfiguration': toJson_ElastiCacheNodeGroupConfiguration(obj.nodeGroupConfiguration),
    'CacheSize': obj.cacheSize,
    'CacheNodeCreateTime': obj.cacheNodeCreateTime,
    'SnapshotCreateTime': obj.snapshotCreateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheDestinationDetails
 */
export interface ElastiCacheDestinationDetails {
  /**
   * @schema ElastiCacheDestinationDetails#CloudWatchLogsDetails
   */
  readonly cloudWatchLogsDetails?: ElastiCacheCloudWatchLogsDestinationDetails;

  /**
   * @schema ElastiCacheDestinationDetails#KinesisFirehoseDetails
   */
  readonly kinesisFirehoseDetails?: ElastiCacheKinesisFirehoseDestinationDetails;

}

/**
 * Converts an object of type 'ElastiCacheDestinationDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheDestinationDetails(obj: ElastiCacheDestinationDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudWatchLogsDetails': toJson_ElastiCacheCloudWatchLogsDestinationDetails(obj.cloudWatchLogsDetails),
    'KinesisFirehoseDetails': toJson_ElastiCacheKinesisFirehoseDestinationDetails(obj.kinesisFirehoseDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema ElastiCachePendingModifiedValues#LogDeliveryConfigurations
   */
  readonly logDeliveryConfigurations?: ElastiCachePendingLogDeliveryConfiguration[];

}

/**
 * Converts an object of type 'ElastiCachePendingModifiedValues' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCachePendingModifiedValues(obj: ElastiCachePendingModifiedValues | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NumCacheNodes': obj.numCacheNodes,
    'CacheNodeIdsToRemove': obj.cacheNodeIdsToRemove?.map(y => y),
    'EngineVersion': obj.engineVersion,
    'CacheNodeType': obj.cacheNodeType,
    'AuthTokenStatus': obj.authTokenStatus,
    'LogDeliveryConfigurations': obj.logDeliveryConfigurations?.map(y => toJson_ElastiCachePendingLogDeliveryConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheNotificationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheNotificationConfiguration(obj: ElastiCacheNotificationConfiguration | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'ElastiCacheCacheSecurityGroupMembership' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCacheSecurityGroupMembership(obj: ElastiCacheCacheSecurityGroupMembership | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheSecurityGroupName': obj.cacheSecurityGroupName,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheCacheParameterGroupStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCacheParameterGroupStatus(obj: ElastiCacheCacheParameterGroupStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheParameterGroupName': obj.cacheParameterGroupName,
    'ParameterApplyStatus': obj.parameterApplyStatus,
    'CacheNodeIdsToReboot': obj.cacheNodeIdsToReboot?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheCacheNode' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCacheNode(obj: ElastiCacheCacheNode | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheNodeId': obj.cacheNodeId,
    'CacheNodeStatus': obj.cacheNodeStatus,
    'CacheNodeCreateTime': obj.cacheNodeCreateTime,
    'Endpoint': toJson_ElastiCacheEndpoint(obj.endpoint),
    'ParameterGroupStatus': obj.parameterGroupStatus,
    'SourceCacheNodeId': obj.sourceCacheNodeId,
    'CustomerAvailabilityZone': obj.customerAvailabilityZone,
    'CustomerOutpostArn': obj.customerOutpostArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheSecurityGroupMembership' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheSecurityGroupMembership(obj: ElastiCacheSecurityGroupMembership | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecurityGroupId': obj.securityGroupId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheSubnet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheSubnet(obj: ElastiCacheSubnet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetIdentifier': obj.subnetIdentifier,
    'SubnetAvailabilityZone': toJson_ElastiCacheAvailabilityZone(obj.subnetAvailabilityZone),
    'SubnetOutpost': toJson_ElastiCacheSubnetOutpost(obj.subnetOutpost),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheGlobalReplicationGroupMember' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheGlobalReplicationGroupMember(obj: ElastiCacheGlobalReplicationGroupMember | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationGroupId': obj.replicationGroupId,
    'ReplicationGroupRegion': obj.replicationGroupRegion,
    'Role': obj.role,
    'AutomaticFailover': obj.automaticFailover,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheGlobalNodeGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheGlobalNodeGroup(obj: ElastiCacheGlobalNodeGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalNodeGroupId': obj.globalNodeGroupId,
    'Slots': obj.slots,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheCacheNodeTypeSpecificValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCacheNodeTypeSpecificValue(obj: ElastiCacheCacheNodeTypeSpecificValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheNodeType': obj.cacheNodeType,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheRecurringCharge' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheRecurringCharge(obj: ElastiCacheRecurringCharge | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecurringChargeAmount': obj.recurringChargeAmount,
    'RecurringChargeFrequency': obj.recurringChargeFrequency,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheNodeGroupUpdateStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheNodeGroupUpdateStatus(obj: ElastiCacheNodeGroupUpdateStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NodeGroupId': obj.nodeGroupId,
    'NodeGroupMemberUpdateStatus': obj.nodeGroupMemberUpdateStatus?.map(y => toJson_ElastiCacheNodeGroupMemberUpdateStatus(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheCacheNodeUpdateStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCacheNodeUpdateStatus(obj: ElastiCacheCacheNodeUpdateStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheNodeId': obj.cacheNodeId,
    'NodeUpdateStatus': obj.nodeUpdateStatus,
    'NodeDeletionDate': obj.nodeDeletionDate,
    'NodeUpdateStartDate': obj.nodeUpdateStartDate,
    'NodeUpdateEndDate': obj.nodeUpdateEndDate,
    'NodeUpdateInitiatedBy': obj.nodeUpdateInitiatedBy,
    'NodeUpdateInitiatedDate': obj.nodeUpdateInitiatedDate,
    'NodeUpdateStatusModifiedDate': obj.nodeUpdateStatusModifiedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheReshardingStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheReshardingStatus(obj: ElastiCacheReshardingStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SlotMigration': toJson_ElastiCacheSlotMigration(obj.slotMigration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheUserGroupsUpdateStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheUserGroupsUpdateStatus(obj: ElastiCacheUserGroupsUpdateStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserGroupIdsToAdd': obj.userGroupIdsToAdd?.map(y => y),
    'UserGroupIdsToRemove': obj.userGroupIdsToRemove?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCachePendingLogDeliveryConfiguration
 */
export interface ElastiCachePendingLogDeliveryConfiguration {
  /**
   * @schema ElastiCachePendingLogDeliveryConfiguration#LogType
   */
  readonly logType?: string;

  /**
   * @schema ElastiCachePendingLogDeliveryConfiguration#DestinationType
   */
  readonly destinationType?: string;

  /**
   * @schema ElastiCachePendingLogDeliveryConfiguration#DestinationDetails
   */
  readonly destinationDetails?: ElastiCacheDestinationDetails;

  /**
   * @schema ElastiCachePendingLogDeliveryConfiguration#LogFormat
   */
  readonly logFormat?: string;

}

/**
 * Converts an object of type 'ElastiCachePendingLogDeliveryConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCachePendingLogDeliveryConfiguration(obj: ElastiCachePendingLogDeliveryConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogType': obj.logType,
    'DestinationType': obj.destinationType,
    'DestinationDetails': toJson_ElastiCacheDestinationDetails(obj.destinationDetails),
    'LogFormat': obj.logFormat,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheNodeGroupMember' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheNodeGroupMember(obj: ElastiCacheNodeGroupMember | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheClusterId': obj.cacheClusterId,
    'CacheNodeId': obj.cacheNodeId,
    'ReadEndpoint': toJson_ElastiCacheEndpoint(obj.readEndpoint),
    'PreferredAvailabilityZone': obj.preferredAvailabilityZone,
    'PreferredOutpostArn': obj.preferredOutpostArn,
    'CurrentRole': obj.currentRole,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheCloudWatchLogsDestinationDetails
 */
export interface ElastiCacheCloudWatchLogsDestinationDetails {
  /**
   * @schema ElastiCacheCloudWatchLogsDestinationDetails#LogGroup
   */
  readonly logGroup?: string;

}

/**
 * Converts an object of type 'ElastiCacheCloudWatchLogsDestinationDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheCloudWatchLogsDestinationDetails(obj: ElastiCacheCloudWatchLogsDestinationDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogGroup': obj.logGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheKinesisFirehoseDestinationDetails
 */
export interface ElastiCacheKinesisFirehoseDestinationDetails {
  /**
   * @schema ElastiCacheKinesisFirehoseDestinationDetails#DeliveryStream
   */
  readonly deliveryStream?: string;

}

/**
 * Converts an object of type 'ElastiCacheKinesisFirehoseDestinationDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheKinesisFirehoseDestinationDetails(obj: ElastiCacheKinesisFirehoseDestinationDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeliveryStream': obj.deliveryStream,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheAvailabilityZone' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheAvailabilityZone(obj: ElastiCacheAvailabilityZone | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheSubnetOutpost' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheSubnetOutpost(obj: ElastiCacheSubnetOutpost | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetOutpostArn': obj.subnetOutpostArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ElastiCacheNodeGroupMemberUpdateStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheNodeGroupMemberUpdateStatus(obj: ElastiCacheNodeGroupMemberUpdateStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheClusterId': obj.cacheClusterId,
    'CacheNodeId': obj.cacheNodeId,
    'NodeUpdateStatus': obj.nodeUpdateStatus,
    'NodeDeletionDate': obj.nodeDeletionDate,
    'NodeUpdateStartDate': obj.nodeUpdateStartDate,
    'NodeUpdateEndDate': obj.nodeUpdateEndDate,
    'NodeUpdateInitiatedBy': obj.nodeUpdateInitiatedBy,
    'NodeUpdateInitiatedDate': obj.nodeUpdateInitiatedDate,
    'NodeUpdateStatusModifiedDate': obj.nodeUpdateStatusModifiedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElastiCacheSlotMigration
 */
export interface ElastiCacheSlotMigration {
  /**
   * @schema ElastiCacheSlotMigration#ProgressPercentage
   */
  readonly progressPercentage?: number;

}

/**
 * Converts an object of type 'ElastiCacheSlotMigration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElastiCacheSlotMigration(obj: ElastiCacheSlotMigration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProgressPercentage': obj.progressPercentage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
