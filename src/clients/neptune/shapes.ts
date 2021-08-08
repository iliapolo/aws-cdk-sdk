/**
 * @schema NeptuneAddRoleToDbClusterMessage
 */
export interface NeptuneAddRoleToDbClusterMessage {
  /**
   * @schema NeptuneAddRoleToDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneAddRoleToDbClusterMessage#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema NeptuneAddRoleToDbClusterMessage#FeatureName
   */
  readonly featureName?: string;

}

/**
 * Converts an object of type 'NeptuneAddRoleToDbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneAddRoleToDbClusterMessage(obj: NeptuneAddRoleToDbClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'RoleArn': obj.roleArn,
    'FeatureName': obj.featureName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneAddSourceIdentifierToSubscriptionMessage
 */
export interface NeptuneAddSourceIdentifierToSubscriptionMessage {
  /**
   * @schema NeptuneAddSourceIdentifierToSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

  /**
   * @schema NeptuneAddSourceIdentifierToSubscriptionMessage#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

}

/**
 * Converts an object of type 'NeptuneAddSourceIdentifierToSubscriptionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneAddSourceIdentifierToSubscriptionMessage(obj: NeptuneAddSourceIdentifierToSubscriptionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionName': obj.subscriptionName,
    'SourceIdentifier': obj.sourceIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneAddSourceIdentifierToSubscriptionResult
 */
export interface NeptuneAddSourceIdentifierToSubscriptionResult {
  /**
   * @schema NeptuneAddSourceIdentifierToSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: NeptuneEventSubscription;

}

/**
 * Converts an object of type 'NeptuneAddSourceIdentifierToSubscriptionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneAddSourceIdentifierToSubscriptionResult(obj: NeptuneAddSourceIdentifierToSubscriptionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventSubscription': toJson_NeptuneEventSubscription(obj.eventSubscription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneAddTagsToResourceMessage
 */
export interface NeptuneAddTagsToResourceMessage {
  /**
   * @schema NeptuneAddTagsToResourceMessage#ResourceName
   */
  readonly resourceName?: string;

  /**
   * @schema NeptuneAddTagsToResourceMessage#Tags
   */
  readonly tags?: NeptuneTag[];

}

/**
 * Converts an object of type 'NeptuneAddTagsToResourceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneAddTagsToResourceMessage(obj: NeptuneAddTagsToResourceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceName': obj.resourceName,
    'Tags': obj.tags?.map(y => toJson_NeptuneTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneApplyPendingMaintenanceActionMessage
 */
export interface NeptuneApplyPendingMaintenanceActionMessage {
  /**
   * @schema NeptuneApplyPendingMaintenanceActionMessage#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema NeptuneApplyPendingMaintenanceActionMessage#ApplyAction
   */
  readonly applyAction?: string;

  /**
   * @schema NeptuneApplyPendingMaintenanceActionMessage#OptInType
   */
  readonly optInType?: string;

}

/**
 * Converts an object of type 'NeptuneApplyPendingMaintenanceActionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneApplyPendingMaintenanceActionMessage(obj: NeptuneApplyPendingMaintenanceActionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceIdentifier': obj.resourceIdentifier,
    'ApplyAction': obj.applyAction,
    'OptInType': obj.optInType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneApplyPendingMaintenanceActionResult
 */
export interface NeptuneApplyPendingMaintenanceActionResult {
  /**
   * @schema NeptuneApplyPendingMaintenanceActionResult#ResourcePendingMaintenanceActions
   */
  readonly resourcePendingMaintenanceActions?: NeptuneResourcePendingMaintenanceActions;

}

/**
 * Converts an object of type 'NeptuneApplyPendingMaintenanceActionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneApplyPendingMaintenanceActionResult(obj: NeptuneApplyPendingMaintenanceActionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourcePendingMaintenanceActions': toJson_NeptuneResourcePendingMaintenanceActions(obj.resourcePendingMaintenanceActions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneCopyDbClusterParameterGroupMessage
 */
export interface NeptuneCopyDbClusterParameterGroupMessage {
  /**
   * @schema NeptuneCopyDbClusterParameterGroupMessage#SourceDBClusterParameterGroupIdentifier
   */
  readonly sourceDbClusterParameterGroupIdentifier?: string;

  /**
   * @schema NeptuneCopyDbClusterParameterGroupMessage#TargetDBClusterParameterGroupIdentifier
   */
  readonly targetDbClusterParameterGroupIdentifier?: string;

  /**
   * @schema NeptuneCopyDbClusterParameterGroupMessage#TargetDBClusterParameterGroupDescription
   */
  readonly targetDbClusterParameterGroupDescription?: string;

  /**
   * @schema NeptuneCopyDbClusterParameterGroupMessage#Tags
   */
  readonly tags?: NeptuneTag[];

}

/**
 * Converts an object of type 'NeptuneCopyDbClusterParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneCopyDbClusterParameterGroupMessage(obj: NeptuneCopyDbClusterParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceDBClusterParameterGroupIdentifier': obj.sourceDbClusterParameterGroupIdentifier,
    'TargetDBClusterParameterGroupIdentifier': obj.targetDbClusterParameterGroupIdentifier,
    'TargetDBClusterParameterGroupDescription': obj.targetDbClusterParameterGroupDescription,
    'Tags': obj.tags?.map(y => toJson_NeptuneTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneCopyDbClusterParameterGroupResult
 */
export interface NeptuneCopyDbClusterParameterGroupResult {
  /**
   * @schema NeptuneCopyDbClusterParameterGroupResult#DBClusterParameterGroup
   */
  readonly dbClusterParameterGroup?: NeptuneDbClusterParameterGroup;

}

/**
 * Converts an object of type 'NeptuneCopyDbClusterParameterGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneCopyDbClusterParameterGroupResult(obj: NeptuneCopyDbClusterParameterGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroup': toJson_NeptuneDbClusterParameterGroup(obj.dbClusterParameterGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneCopyDbClusterSnapshotMessage
 */
export interface NeptuneCopyDbClusterSnapshotMessage {
  /**
   * @schema NeptuneCopyDbClusterSnapshotMessage#SourceDBClusterSnapshotIdentifier
   */
  readonly sourceDbClusterSnapshotIdentifier?: string;

  /**
   * @schema NeptuneCopyDbClusterSnapshotMessage#TargetDBClusterSnapshotIdentifier
   */
  readonly targetDbClusterSnapshotIdentifier?: string;

  /**
   * @schema NeptuneCopyDbClusterSnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema NeptuneCopyDbClusterSnapshotMessage#PreSignedUrl
   */
  readonly preSignedUrl?: string;

  /**
   * @schema NeptuneCopyDbClusterSnapshotMessage#CopyTags
   */
  readonly copyTags?: boolean;

  /**
   * @schema NeptuneCopyDbClusterSnapshotMessage#Tags
   */
  readonly tags?: NeptuneTag[];

}

/**
 * Converts an object of type 'NeptuneCopyDbClusterSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneCopyDbClusterSnapshotMessage(obj: NeptuneCopyDbClusterSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceDBClusterSnapshotIdentifier': obj.sourceDbClusterSnapshotIdentifier,
    'TargetDBClusterSnapshotIdentifier': obj.targetDbClusterSnapshotIdentifier,
    'KmsKeyId': obj.kmsKeyId,
    'PreSignedUrl': obj.preSignedUrl,
    'CopyTags': obj.copyTags,
    'Tags': obj.tags?.map(y => toJson_NeptuneTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneCopyDbClusterSnapshotResult
 */
export interface NeptuneCopyDbClusterSnapshotResult {
  /**
   * @schema NeptuneCopyDbClusterSnapshotResult#DBClusterSnapshot
   */
  readonly dbClusterSnapshot?: NeptuneDbClusterSnapshot;

}

/**
 * Converts an object of type 'NeptuneCopyDbClusterSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneCopyDbClusterSnapshotResult(obj: NeptuneCopyDbClusterSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshot': toJson_NeptuneDbClusterSnapshot(obj.dbClusterSnapshot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneCopyDbParameterGroupMessage
 */
export interface NeptuneCopyDbParameterGroupMessage {
  /**
   * @schema NeptuneCopyDbParameterGroupMessage#SourceDBParameterGroupIdentifier
   */
  readonly sourceDbParameterGroupIdentifier?: string;

  /**
   * @schema NeptuneCopyDbParameterGroupMessage#TargetDBParameterGroupIdentifier
   */
  readonly targetDbParameterGroupIdentifier?: string;

  /**
   * @schema NeptuneCopyDbParameterGroupMessage#TargetDBParameterGroupDescription
   */
  readonly targetDbParameterGroupDescription?: string;

  /**
   * @schema NeptuneCopyDbParameterGroupMessage#Tags
   */
  readonly tags?: NeptuneTag[];

}

/**
 * Converts an object of type 'NeptuneCopyDbParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneCopyDbParameterGroupMessage(obj: NeptuneCopyDbParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceDBParameterGroupIdentifier': obj.sourceDbParameterGroupIdentifier,
    'TargetDBParameterGroupIdentifier': obj.targetDbParameterGroupIdentifier,
    'TargetDBParameterGroupDescription': obj.targetDbParameterGroupDescription,
    'Tags': obj.tags?.map(y => toJson_NeptuneTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneCopyDbParameterGroupResult
 */
export interface NeptuneCopyDbParameterGroupResult {
  /**
   * @schema NeptuneCopyDbParameterGroupResult#DBParameterGroup
   */
  readonly dbParameterGroup?: NeptuneDbParameterGroup;

}

/**
 * Converts an object of type 'NeptuneCopyDbParameterGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneCopyDbParameterGroupResult(obj: NeptuneCopyDbParameterGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroup': toJson_NeptuneDbParameterGroup(obj.dbParameterGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneCreateDbClusterMessage
 */
export interface NeptuneCreateDbClusterMessage {
  /**
   * @schema NeptuneCreateDbClusterMessage#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema NeptuneCreateDbClusterMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema NeptuneCreateDbClusterMessage#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema NeptuneCreateDbClusterMessage#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema NeptuneCreateDbClusterMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#Port
   */
  readonly port?: number;

  /**
   * @schema NeptuneCreateDbClusterMessage#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#ReplicationSourceIdentifier
   */
  readonly replicationSourceIdentifier?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#Tags
   */
  readonly tags?: NeptuneTag[];

  /**
   * @schema NeptuneCreateDbClusterMessage#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema NeptuneCreateDbClusterMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#PreSignedUrl
   */
  readonly preSignedUrl?: string;

  /**
   * @schema NeptuneCreateDbClusterMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema NeptuneCreateDbClusterMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema NeptuneCreateDbClusterMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * Converts an object of type 'NeptuneCreateDbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneCreateDbClusterMessage(obj: NeptuneCreateDbClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'BackupRetentionPeriod': obj.backupRetentionPeriod,
    'CharacterSetName': obj.characterSetName,
    'CopyTagsToSnapshot': obj.copyTagsToSnapshot,
    'DatabaseName': obj.databaseName,
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
    'VpcSecurityGroupIds': obj.vpcSecurityGroupIds?.map(y => y),
    'DBSubnetGroupName': obj.dbSubnetGroupName,
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'Port': obj.port,
    'MasterUsername': obj.masterUsername,
    'MasterUserPassword': obj.masterUserPassword,
    'OptionGroupName': obj.optionGroupName,
    'PreferredBackupWindow': obj.preferredBackupWindow,
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'ReplicationSourceIdentifier': obj.replicationSourceIdentifier,
    'Tags': obj.tags?.map(y => toJson_NeptuneTag(y)),
    'StorageEncrypted': obj.storageEncrypted,
    'KmsKeyId': obj.kmsKeyId,
    'PreSignedUrl': obj.preSignedUrl,
    'EnableIAMDatabaseAuthentication': obj.enableIamDatabaseAuthentication,
    'EnableCloudwatchLogsExports': obj.enableCloudwatchLogsExports?.map(y => y),
    'DeletionProtection': obj.deletionProtection,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneCreateDbClusterResult
 */
export interface NeptuneCreateDbClusterResult {
  /**
   * @schema NeptuneCreateDbClusterResult#DBCluster
   */
  readonly dbCluster?: NeptuneDbCluster;

}

/**
 * Converts an object of type 'NeptuneCreateDbClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneCreateDbClusterResult(obj: NeptuneCreateDbClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBCluster': toJson_NeptuneDbCluster(obj.dbCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneCreateDbClusterEndpointMessage
 */
export interface NeptuneCreateDbClusterEndpointMessage {
  /**
   * @schema NeptuneCreateDbClusterEndpointMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneCreateDbClusterEndpointMessage#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier?: string;

  /**
   * @schema NeptuneCreateDbClusterEndpointMessage#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema NeptuneCreateDbClusterEndpointMessage#StaticMembers
   */
  readonly staticMembers?: string[];

  /**
   * @schema NeptuneCreateDbClusterEndpointMessage#ExcludedMembers
   */
  readonly excludedMembers?: string[];

  /**
   * @schema NeptuneCreateDbClusterEndpointMessage#Tags
   */
  readonly tags?: NeptuneTag[];

}

/**
 * Converts an object of type 'NeptuneCreateDbClusterEndpointMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneCreateDbClusterEndpointMessage(obj: NeptuneCreateDbClusterEndpointMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'DBClusterEndpointIdentifier': obj.dbClusterEndpointIdentifier,
    'EndpointType': obj.endpointType,
    'StaticMembers': obj.staticMembers?.map(y => y),
    'ExcludedMembers': obj.excludedMembers?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_NeptuneTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneCreateDbClusterEndpointOutput
 */
export interface NeptuneCreateDbClusterEndpointOutput {
  /**
   * @schema NeptuneCreateDbClusterEndpointOutput#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier?: string;

  /**
   * @schema NeptuneCreateDbClusterEndpointOutput#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneCreateDbClusterEndpointOutput#DBClusterEndpointResourceIdentifier
   */
  readonly dbClusterEndpointResourceIdentifier?: string;

  /**
   * @schema NeptuneCreateDbClusterEndpointOutput#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema NeptuneCreateDbClusterEndpointOutput#Status
   */
  readonly status?: string;

  /**
   * @schema NeptuneCreateDbClusterEndpointOutput#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema NeptuneCreateDbClusterEndpointOutput#CustomEndpointType
   */
  readonly customEndpointType?: string;

  /**
   * @schema NeptuneCreateDbClusterEndpointOutput#StaticMembers
   */
  readonly staticMembers?: string[];

  /**
   * @schema NeptuneCreateDbClusterEndpointOutput#ExcludedMembers
   */
  readonly excludedMembers?: string[];

  /**
   * @schema NeptuneCreateDbClusterEndpointOutput#DBClusterEndpointArn
   */
  readonly dbClusterEndpointArn?: string;

}

/**
 * Converts an object of type 'NeptuneCreateDbClusterEndpointOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneCreateDbClusterEndpointOutput(obj: NeptuneCreateDbClusterEndpointOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterEndpointIdentifier': obj.dbClusterEndpointIdentifier,
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'DBClusterEndpointResourceIdentifier': obj.dbClusterEndpointResourceIdentifier,
    'Endpoint': obj.endpoint,
    'Status': obj.status,
    'EndpointType': obj.endpointType,
    'CustomEndpointType': obj.customEndpointType,
    'StaticMembers': obj.staticMembers?.map(y => y),
    'ExcludedMembers': obj.excludedMembers?.map(y => y),
    'DBClusterEndpointArn': obj.dbClusterEndpointArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneCreateDbClusterParameterGroupMessage
 */
export interface NeptuneCreateDbClusterParameterGroupMessage {
  /**
   * @schema NeptuneCreateDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema NeptuneCreateDbClusterParameterGroupMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema NeptuneCreateDbClusterParameterGroupMessage#Description
   */
  readonly description?: string;

  /**
   * @schema NeptuneCreateDbClusterParameterGroupMessage#Tags
   */
  readonly tags?: NeptuneTag[];

}

/**
 * Converts an object of type 'NeptuneCreateDbClusterParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneCreateDbClusterParameterGroupMessage(obj: NeptuneCreateDbClusterParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
    'DBParameterGroupFamily': obj.dbParameterGroupFamily,
    'Description': obj.description,
    'Tags': obj.tags?.map(y => toJson_NeptuneTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneCreateDbClusterParameterGroupResult
 */
export interface NeptuneCreateDbClusterParameterGroupResult {
  /**
   * @schema NeptuneCreateDbClusterParameterGroupResult#DBClusterParameterGroup
   */
  readonly dbClusterParameterGroup?: NeptuneDbClusterParameterGroup;

}

/**
 * Converts an object of type 'NeptuneCreateDbClusterParameterGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneCreateDbClusterParameterGroupResult(obj: NeptuneCreateDbClusterParameterGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroup': toJson_NeptuneDbClusterParameterGroup(obj.dbClusterParameterGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneCreateDbClusterSnapshotMessage
 */
export interface NeptuneCreateDbClusterSnapshotMessage {
  /**
   * @schema NeptuneCreateDbClusterSnapshotMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema NeptuneCreateDbClusterSnapshotMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneCreateDbClusterSnapshotMessage#Tags
   */
  readonly tags?: NeptuneTag[];

}

/**
 * Converts an object of type 'NeptuneCreateDbClusterSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneCreateDbClusterSnapshotMessage(obj: NeptuneCreateDbClusterSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshotIdentifier': obj.dbClusterSnapshotIdentifier,
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'Tags': obj.tags?.map(y => toJson_NeptuneTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneCreateDbClusterSnapshotResult
 */
export interface NeptuneCreateDbClusterSnapshotResult {
  /**
   * @schema NeptuneCreateDbClusterSnapshotResult#DBClusterSnapshot
   */
  readonly dbClusterSnapshot?: NeptuneDbClusterSnapshot;

}

/**
 * Converts an object of type 'NeptuneCreateDbClusterSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneCreateDbClusterSnapshotResult(obj: NeptuneCreateDbClusterSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshot': toJson_NeptuneDbClusterSnapshot(obj.dbClusterSnapshot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneCreateDbInstanceMessage
 */
export interface NeptuneCreateDbInstanceMessage {
  /**
   * @schema NeptuneCreateDbInstanceMessage#DBName
   */
  readonly dbName?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema NeptuneCreateDbInstanceMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#DBSecurityGroups
   */
  readonly dbSecurityGroups?: string[];

  /**
   * @schema NeptuneCreateDbInstanceMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema NeptuneCreateDbInstanceMessage#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema NeptuneCreateDbInstanceMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#Port
   */
  readonly port?: number;

  /**
   * @schema NeptuneCreateDbInstanceMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema NeptuneCreateDbInstanceMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema NeptuneCreateDbInstanceMessage#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#Iops
   */
  readonly iops?: number;

  /**
   * @schema NeptuneCreateDbInstanceMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema NeptuneCreateDbInstanceMessage#Tags
   */
  readonly tags?: NeptuneTag[];

  /**
   * @schema NeptuneCreateDbInstanceMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#TdeCredentialPassword
   */
  readonly tdeCredentialPassword?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema NeptuneCreateDbInstanceMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema NeptuneCreateDbInstanceMessage#MonitoringInterval
   */
  readonly monitoringInterval?: number;

  /**
   * @schema NeptuneCreateDbInstanceMessage#MonitoringRoleArn
   */
  readonly monitoringRoleArn?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#PromotionTier
   */
  readonly promotionTier?: number;

  /**
   * @schema NeptuneCreateDbInstanceMessage#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema NeptuneCreateDbInstanceMessage#EnablePerformanceInsights
   */
  readonly enablePerformanceInsights?: boolean;

  /**
   * @schema NeptuneCreateDbInstanceMessage#PerformanceInsightsKMSKeyId
   */
  readonly performanceInsightsKmsKeyId?: string;

  /**
   * @schema NeptuneCreateDbInstanceMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema NeptuneCreateDbInstanceMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * Converts an object of type 'NeptuneCreateDbInstanceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneCreateDbInstanceMessage(obj: NeptuneCreateDbInstanceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBName': obj.dbName,
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'AllocatedStorage': obj.allocatedStorage,
    'DBInstanceClass': obj.dbInstanceClass,
    'Engine': obj.engine,
    'MasterUsername': obj.masterUsername,
    'MasterUserPassword': obj.masterUserPassword,
    'DBSecurityGroups': obj.dbSecurityGroups?.map(y => y),
    'VpcSecurityGroupIds': obj.vpcSecurityGroupIds?.map(y => y),
    'AvailabilityZone': obj.availabilityZone,
    'DBSubnetGroupName': obj.dbSubnetGroupName,
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'DBParameterGroupName': obj.dbParameterGroupName,
    'BackupRetentionPeriod': obj.backupRetentionPeriod,
    'PreferredBackupWindow': obj.preferredBackupWindow,
    'Port': obj.port,
    'MultiAZ': obj.multiAz,
    'EngineVersion': obj.engineVersion,
    'AutoMinorVersionUpgrade': obj.autoMinorVersionUpgrade,
    'LicenseModel': obj.licenseModel,
    'Iops': obj.iops,
    'OptionGroupName': obj.optionGroupName,
    'CharacterSetName': obj.characterSetName,
    'PubliclyAccessible': obj.publiclyAccessible,
    'Tags': obj.tags?.map(y => toJson_NeptuneTag(y)),
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'StorageType': obj.storageType,
    'TdeCredentialArn': obj.tdeCredentialArn,
    'TdeCredentialPassword': obj.tdeCredentialPassword,
    'StorageEncrypted': obj.storageEncrypted,
    'KmsKeyId': obj.kmsKeyId,
    'Domain': obj.domain,
    'CopyTagsToSnapshot': obj.copyTagsToSnapshot,
    'MonitoringInterval': obj.monitoringInterval,
    'MonitoringRoleArn': obj.monitoringRoleArn,
    'DomainIAMRoleName': obj.domainIamRoleName,
    'PromotionTier': obj.promotionTier,
    'Timezone': obj.timezone,
    'EnableIAMDatabaseAuthentication': obj.enableIamDatabaseAuthentication,
    'EnablePerformanceInsights': obj.enablePerformanceInsights,
    'PerformanceInsightsKMSKeyId': obj.performanceInsightsKmsKeyId,
    'EnableCloudwatchLogsExports': obj.enableCloudwatchLogsExports?.map(y => y),
    'DeletionProtection': obj.deletionProtection,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneCreateDbInstanceResult
 */
export interface NeptuneCreateDbInstanceResult {
  /**
   * @schema NeptuneCreateDbInstanceResult#DBInstance
   */
  readonly dbInstance?: NeptuneDbInstance;

}

/**
 * Converts an object of type 'NeptuneCreateDbInstanceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneCreateDbInstanceResult(obj: NeptuneCreateDbInstanceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstance': toJson_NeptuneDbInstance(obj.dbInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneCreateDbParameterGroupMessage
 */
export interface NeptuneCreateDbParameterGroupMessage {
  /**
   * @schema NeptuneCreateDbParameterGroupMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema NeptuneCreateDbParameterGroupMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema NeptuneCreateDbParameterGroupMessage#Description
   */
  readonly description?: string;

  /**
   * @schema NeptuneCreateDbParameterGroupMessage#Tags
   */
  readonly tags?: NeptuneTag[];

}

/**
 * Converts an object of type 'NeptuneCreateDbParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneCreateDbParameterGroupMessage(obj: NeptuneCreateDbParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroupName': obj.dbParameterGroupName,
    'DBParameterGroupFamily': obj.dbParameterGroupFamily,
    'Description': obj.description,
    'Tags': obj.tags?.map(y => toJson_NeptuneTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneCreateDbParameterGroupResult
 */
export interface NeptuneCreateDbParameterGroupResult {
  /**
   * @schema NeptuneCreateDbParameterGroupResult#DBParameterGroup
   */
  readonly dbParameterGroup?: NeptuneDbParameterGroup;

}

/**
 * Converts an object of type 'NeptuneCreateDbParameterGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneCreateDbParameterGroupResult(obj: NeptuneCreateDbParameterGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroup': toJson_NeptuneDbParameterGroup(obj.dbParameterGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneCreateDbSubnetGroupMessage
 */
export interface NeptuneCreateDbSubnetGroupMessage {
  /**
   * @schema NeptuneCreateDbSubnetGroupMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema NeptuneCreateDbSubnetGroupMessage#DBSubnetGroupDescription
   */
  readonly dbSubnetGroupDescription?: string;

  /**
   * @schema NeptuneCreateDbSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema NeptuneCreateDbSubnetGroupMessage#Tags
   */
  readonly tags?: NeptuneTag[];

}

/**
 * Converts an object of type 'NeptuneCreateDbSubnetGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneCreateDbSubnetGroupMessage(obj: NeptuneCreateDbSubnetGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSubnetGroupName': obj.dbSubnetGroupName,
    'DBSubnetGroupDescription': obj.dbSubnetGroupDescription,
    'SubnetIds': obj.subnetIds?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_NeptuneTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneCreateDbSubnetGroupResult
 */
export interface NeptuneCreateDbSubnetGroupResult {
  /**
   * @schema NeptuneCreateDbSubnetGroupResult#DBSubnetGroup
   */
  readonly dbSubnetGroup?: NeptuneDbSubnetGroup;

}

/**
 * Converts an object of type 'NeptuneCreateDbSubnetGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneCreateDbSubnetGroupResult(obj: NeptuneCreateDbSubnetGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSubnetGroup': toJson_NeptuneDbSubnetGroup(obj.dbSubnetGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneCreateEventSubscriptionMessage
 */
export interface NeptuneCreateEventSubscriptionMessage {
  /**
   * @schema NeptuneCreateEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

  /**
   * @schema NeptuneCreateEventSubscriptionMessage#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema NeptuneCreateEventSubscriptionMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema NeptuneCreateEventSubscriptionMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema NeptuneCreateEventSubscriptionMessage#SourceIds
   */
  readonly sourceIds?: string[];

  /**
   * @schema NeptuneCreateEventSubscriptionMessage#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema NeptuneCreateEventSubscriptionMessage#Tags
   */
  readonly tags?: NeptuneTag[];

}

/**
 * Converts an object of type 'NeptuneCreateEventSubscriptionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneCreateEventSubscriptionMessage(obj: NeptuneCreateEventSubscriptionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionName': obj.subscriptionName,
    'SnsTopicArn': obj.snsTopicArn,
    'SourceType': obj.sourceType,
    'EventCategories': obj.eventCategories?.map(y => y),
    'SourceIds': obj.sourceIds?.map(y => y),
    'Enabled': obj.enabled,
    'Tags': obj.tags?.map(y => toJson_NeptuneTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneCreateEventSubscriptionResult
 */
export interface NeptuneCreateEventSubscriptionResult {
  /**
   * @schema NeptuneCreateEventSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: NeptuneEventSubscription;

}

/**
 * Converts an object of type 'NeptuneCreateEventSubscriptionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneCreateEventSubscriptionResult(obj: NeptuneCreateEventSubscriptionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventSubscription': toJson_NeptuneEventSubscription(obj.eventSubscription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDeleteDbClusterMessage
 */
export interface NeptuneDeleteDbClusterMessage {
  /**
   * @schema NeptuneDeleteDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneDeleteDbClusterMessage#SkipFinalSnapshot
   */
  readonly skipFinalSnapshot?: boolean;

  /**
   * @schema NeptuneDeleteDbClusterMessage#FinalDBSnapshotIdentifier
   */
  readonly finalDbSnapshotIdentifier?: string;

}

/**
 * Converts an object of type 'NeptuneDeleteDbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDeleteDbClusterMessage(obj: NeptuneDeleteDbClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'SkipFinalSnapshot': obj.skipFinalSnapshot,
    'FinalDBSnapshotIdentifier': obj.finalDbSnapshotIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDeleteDbClusterResult
 */
export interface NeptuneDeleteDbClusterResult {
  /**
   * @schema NeptuneDeleteDbClusterResult#DBCluster
   */
  readonly dbCluster?: NeptuneDbCluster;

}

/**
 * Converts an object of type 'NeptuneDeleteDbClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDeleteDbClusterResult(obj: NeptuneDeleteDbClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBCluster': toJson_NeptuneDbCluster(obj.dbCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDeleteDbClusterEndpointMessage
 */
export interface NeptuneDeleteDbClusterEndpointMessage {
  /**
   * @schema NeptuneDeleteDbClusterEndpointMessage#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier?: string;

}

/**
 * Converts an object of type 'NeptuneDeleteDbClusterEndpointMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDeleteDbClusterEndpointMessage(obj: NeptuneDeleteDbClusterEndpointMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterEndpointIdentifier': obj.dbClusterEndpointIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDeleteDbClusterEndpointOutput
 */
export interface NeptuneDeleteDbClusterEndpointOutput {
  /**
   * @schema NeptuneDeleteDbClusterEndpointOutput#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier?: string;

  /**
   * @schema NeptuneDeleteDbClusterEndpointOutput#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneDeleteDbClusterEndpointOutput#DBClusterEndpointResourceIdentifier
   */
  readonly dbClusterEndpointResourceIdentifier?: string;

  /**
   * @schema NeptuneDeleteDbClusterEndpointOutput#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema NeptuneDeleteDbClusterEndpointOutput#Status
   */
  readonly status?: string;

  /**
   * @schema NeptuneDeleteDbClusterEndpointOutput#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema NeptuneDeleteDbClusterEndpointOutput#CustomEndpointType
   */
  readonly customEndpointType?: string;

  /**
   * @schema NeptuneDeleteDbClusterEndpointOutput#StaticMembers
   */
  readonly staticMembers?: string[];

  /**
   * @schema NeptuneDeleteDbClusterEndpointOutput#ExcludedMembers
   */
  readonly excludedMembers?: string[];

  /**
   * @schema NeptuneDeleteDbClusterEndpointOutput#DBClusterEndpointArn
   */
  readonly dbClusterEndpointArn?: string;

}

/**
 * Converts an object of type 'NeptuneDeleteDbClusterEndpointOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDeleteDbClusterEndpointOutput(obj: NeptuneDeleteDbClusterEndpointOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterEndpointIdentifier': obj.dbClusterEndpointIdentifier,
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'DBClusterEndpointResourceIdentifier': obj.dbClusterEndpointResourceIdentifier,
    'Endpoint': obj.endpoint,
    'Status': obj.status,
    'EndpointType': obj.endpointType,
    'CustomEndpointType': obj.customEndpointType,
    'StaticMembers': obj.staticMembers?.map(y => y),
    'ExcludedMembers': obj.excludedMembers?.map(y => y),
    'DBClusterEndpointArn': obj.dbClusterEndpointArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDeleteDbClusterParameterGroupMessage
 */
export interface NeptuneDeleteDbClusterParameterGroupMessage {
  /**
   * @schema NeptuneDeleteDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

}

/**
 * Converts an object of type 'NeptuneDeleteDbClusterParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDeleteDbClusterParameterGroupMessage(obj: NeptuneDeleteDbClusterParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDeleteDbClusterSnapshotMessage
 */
export interface NeptuneDeleteDbClusterSnapshotMessage {
  /**
   * @schema NeptuneDeleteDbClusterSnapshotMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

}

/**
 * Converts an object of type 'NeptuneDeleteDbClusterSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDeleteDbClusterSnapshotMessage(obj: NeptuneDeleteDbClusterSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshotIdentifier': obj.dbClusterSnapshotIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDeleteDbClusterSnapshotResult
 */
export interface NeptuneDeleteDbClusterSnapshotResult {
  /**
   * @schema NeptuneDeleteDbClusterSnapshotResult#DBClusterSnapshot
   */
  readonly dbClusterSnapshot?: NeptuneDbClusterSnapshot;

}

/**
 * Converts an object of type 'NeptuneDeleteDbClusterSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDeleteDbClusterSnapshotResult(obj: NeptuneDeleteDbClusterSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshot': toJson_NeptuneDbClusterSnapshot(obj.dbClusterSnapshot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDeleteDbInstanceMessage
 */
export interface NeptuneDeleteDbInstanceMessage {
  /**
   * @schema NeptuneDeleteDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema NeptuneDeleteDbInstanceMessage#SkipFinalSnapshot
   */
  readonly skipFinalSnapshot?: boolean;

  /**
   * @schema NeptuneDeleteDbInstanceMessage#FinalDBSnapshotIdentifier
   */
  readonly finalDbSnapshotIdentifier?: string;

}

/**
 * Converts an object of type 'NeptuneDeleteDbInstanceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDeleteDbInstanceMessage(obj: NeptuneDeleteDbInstanceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'SkipFinalSnapshot': obj.skipFinalSnapshot,
    'FinalDBSnapshotIdentifier': obj.finalDbSnapshotIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDeleteDbInstanceResult
 */
export interface NeptuneDeleteDbInstanceResult {
  /**
   * @schema NeptuneDeleteDbInstanceResult#DBInstance
   */
  readonly dbInstance?: NeptuneDbInstance;

}

/**
 * Converts an object of type 'NeptuneDeleteDbInstanceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDeleteDbInstanceResult(obj: NeptuneDeleteDbInstanceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstance': toJson_NeptuneDbInstance(obj.dbInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDeleteDbParameterGroupMessage
 */
export interface NeptuneDeleteDbParameterGroupMessage {
  /**
   * @schema NeptuneDeleteDbParameterGroupMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

}

/**
 * Converts an object of type 'NeptuneDeleteDbParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDeleteDbParameterGroupMessage(obj: NeptuneDeleteDbParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroupName': obj.dbParameterGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDeleteDbSubnetGroupMessage
 */
export interface NeptuneDeleteDbSubnetGroupMessage {
  /**
   * @schema NeptuneDeleteDbSubnetGroupMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

}

/**
 * Converts an object of type 'NeptuneDeleteDbSubnetGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDeleteDbSubnetGroupMessage(obj: NeptuneDeleteDbSubnetGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSubnetGroupName': obj.dbSubnetGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDeleteEventSubscriptionMessage
 */
export interface NeptuneDeleteEventSubscriptionMessage {
  /**
   * @schema NeptuneDeleteEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

}

/**
 * Converts an object of type 'NeptuneDeleteEventSubscriptionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDeleteEventSubscriptionMessage(obj: NeptuneDeleteEventSubscriptionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionName': obj.subscriptionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDeleteEventSubscriptionResult
 */
export interface NeptuneDeleteEventSubscriptionResult {
  /**
   * @schema NeptuneDeleteEventSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: NeptuneEventSubscription;

}

/**
 * Converts an object of type 'NeptuneDeleteEventSubscriptionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDeleteEventSubscriptionResult(obj: NeptuneDeleteEventSubscriptionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventSubscription': toJson_NeptuneEventSubscription(obj.eventSubscription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDescribeDbClusterEndpointsMessage
 */
export interface NeptuneDescribeDbClusterEndpointsMessage {
  /**
   * @schema NeptuneDescribeDbClusterEndpointsMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneDescribeDbClusterEndpointsMessage#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier?: string;

  /**
   * @schema NeptuneDescribeDbClusterEndpointsMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeDbClusterEndpointsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeDbClusterEndpointsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'NeptuneDescribeDbClusterEndpointsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDescribeDbClusterEndpointsMessage(obj: NeptuneDescribeDbClusterEndpointsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'DBClusterEndpointIdentifier': obj.dbClusterEndpointIdentifier,
    'Filters': obj.filters?.map(y => toJson_NeptuneFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDbClusterEndpointMessage
 */
export interface NeptuneDbClusterEndpointMessage {
  /**
   * @schema NeptuneDbClusterEndpointMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneDbClusterEndpointMessage#DBClusterEndpoints
   */
  readonly dbClusterEndpoints?: NeptuneDbClusterEndpoint[];

}

/**
 * Converts an object of type 'NeptuneDbClusterEndpointMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbClusterEndpointMessage(obj: NeptuneDbClusterEndpointMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'DBClusterEndpoints': obj.dbClusterEndpoints?.map(y => toJson_NeptuneDbClusterEndpoint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDescribeDbClusterParameterGroupsMessage
 */
export interface NeptuneDescribeDbClusterParameterGroupsMessage {
  /**
   * @schema NeptuneDescribeDbClusterParameterGroupsMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema NeptuneDescribeDbClusterParameterGroupsMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeDbClusterParameterGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeDbClusterParameterGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'NeptuneDescribeDbClusterParameterGroupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDescribeDbClusterParameterGroupsMessage(obj: NeptuneDescribeDbClusterParameterGroupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
    'Filters': obj.filters?.map(y => toJson_NeptuneFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDbClusterParameterGroupsMessage
 */
export interface NeptuneDbClusterParameterGroupsMessage {
  /**
   * @schema NeptuneDbClusterParameterGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneDbClusterParameterGroupsMessage#DBClusterParameterGroups
   */
  readonly dbClusterParameterGroups?: NeptuneDbClusterParameterGroup[];

}

/**
 * Converts an object of type 'NeptuneDbClusterParameterGroupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbClusterParameterGroupsMessage(obj: NeptuneDbClusterParameterGroupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'DBClusterParameterGroups': obj.dbClusterParameterGroups?.map(y => toJson_NeptuneDbClusterParameterGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDescribeDbClusterParametersMessage
 */
export interface NeptuneDescribeDbClusterParametersMessage {
  /**
   * @schema NeptuneDescribeDbClusterParametersMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema NeptuneDescribeDbClusterParametersMessage#Source
   */
  readonly source?: string;

  /**
   * @schema NeptuneDescribeDbClusterParametersMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeDbClusterParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeDbClusterParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'NeptuneDescribeDbClusterParametersMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDescribeDbClusterParametersMessage(obj: NeptuneDescribeDbClusterParametersMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
    'Source': obj.source,
    'Filters': obj.filters?.map(y => toJson_NeptuneFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDbClusterParameterGroupDetails
 */
export interface NeptuneDbClusterParameterGroupDetails {
  /**
   * @schema NeptuneDbClusterParameterGroupDetails#Parameters
   */
  readonly parameters?: NeptuneParameter[];

  /**
   * @schema NeptuneDbClusterParameterGroupDetails#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'NeptuneDbClusterParameterGroupDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbClusterParameterGroupDetails(obj: NeptuneDbClusterParameterGroupDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Parameters': obj.parameters?.map(y => toJson_NeptuneParameter(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDescribeDbClusterSnapshotAttributesMessage
 */
export interface NeptuneDescribeDbClusterSnapshotAttributesMessage {
  /**
   * @schema NeptuneDescribeDbClusterSnapshotAttributesMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

}

/**
 * Converts an object of type 'NeptuneDescribeDbClusterSnapshotAttributesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDescribeDbClusterSnapshotAttributesMessage(obj: NeptuneDescribeDbClusterSnapshotAttributesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshotIdentifier': obj.dbClusterSnapshotIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDescribeDbClusterSnapshotAttributesResult
 */
export interface NeptuneDescribeDbClusterSnapshotAttributesResult {
  /**
   * @schema NeptuneDescribeDbClusterSnapshotAttributesResult#DBClusterSnapshotAttributesResult
   */
  readonly dbClusterSnapshotAttributesResult?: NeptuneDbClusterSnapshotAttributesResult;

}

/**
 * Converts an object of type 'NeptuneDescribeDbClusterSnapshotAttributesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDescribeDbClusterSnapshotAttributesResult(obj: NeptuneDescribeDbClusterSnapshotAttributesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshotAttributesResult': toJson_NeptuneDbClusterSnapshotAttributesResult(obj.dbClusterSnapshotAttributesResult),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDescribeDbClusterSnapshotsMessage
 */
export interface NeptuneDescribeDbClusterSnapshotsMessage {
  /**
   * @schema NeptuneDescribeDbClusterSnapshotsMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneDescribeDbClusterSnapshotsMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema NeptuneDescribeDbClusterSnapshotsMessage#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema NeptuneDescribeDbClusterSnapshotsMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeDbClusterSnapshotsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeDbClusterSnapshotsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneDescribeDbClusterSnapshotsMessage#IncludeShared
   */
  readonly includeShared?: boolean;

  /**
   * @schema NeptuneDescribeDbClusterSnapshotsMessage#IncludePublic
   */
  readonly includePublic?: boolean;

}

/**
 * Converts an object of type 'NeptuneDescribeDbClusterSnapshotsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDescribeDbClusterSnapshotsMessage(obj: NeptuneDescribeDbClusterSnapshotsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'DBClusterSnapshotIdentifier': obj.dbClusterSnapshotIdentifier,
    'SnapshotType': obj.snapshotType,
    'Filters': obj.filters?.map(y => toJson_NeptuneFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
    'IncludeShared': obj.includeShared,
    'IncludePublic': obj.includePublic,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDbClusterSnapshotMessage
 */
export interface NeptuneDbClusterSnapshotMessage {
  /**
   * @schema NeptuneDbClusterSnapshotMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneDbClusterSnapshotMessage#DBClusterSnapshots
   */
  readonly dbClusterSnapshots?: NeptuneDbClusterSnapshot[];

}

/**
 * Converts an object of type 'NeptuneDbClusterSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbClusterSnapshotMessage(obj: NeptuneDbClusterSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'DBClusterSnapshots': obj.dbClusterSnapshots?.map(y => toJson_NeptuneDbClusterSnapshot(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDescribeDbClustersMessage
 */
export interface NeptuneDescribeDbClustersMessage {
  /**
   * @schema NeptuneDescribeDbClustersMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneDescribeDbClustersMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeDbClustersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeDbClustersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'NeptuneDescribeDbClustersMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDescribeDbClustersMessage(obj: NeptuneDescribeDbClustersMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'Filters': obj.filters?.map(y => toJson_NeptuneFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDbClusterMessage
 */
export interface NeptuneDbClusterMessage {
  /**
   * @schema NeptuneDbClusterMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneDbClusterMessage#DBClusters
   */
  readonly dbClusters?: NeptuneDbCluster[];

}

/**
 * Converts an object of type 'NeptuneDbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbClusterMessage(obj: NeptuneDbClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'DBClusters': obj.dbClusters?.map(y => toJson_NeptuneDbCluster(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDescribeDbEngineVersionsMessage
 */
export interface NeptuneDescribeDbEngineVersionsMessage {
  /**
   * @schema NeptuneDescribeDbEngineVersionsMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema NeptuneDescribeDbEngineVersionsMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptuneDescribeDbEngineVersionsMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema NeptuneDescribeDbEngineVersionsMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeDbEngineVersionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeDbEngineVersionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneDescribeDbEngineVersionsMessage#DefaultOnly
   */
  readonly defaultOnly?: boolean;

  /**
   * @schema NeptuneDescribeDbEngineVersionsMessage#ListSupportedCharacterSets
   */
  readonly listSupportedCharacterSets?: boolean;

  /**
   * @schema NeptuneDescribeDbEngineVersionsMessage#ListSupportedTimezones
   */
  readonly listSupportedTimezones?: boolean;

}

/**
 * Converts an object of type 'NeptuneDescribeDbEngineVersionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDescribeDbEngineVersionsMessage(obj: NeptuneDescribeDbEngineVersionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'DBParameterGroupFamily': obj.dbParameterGroupFamily,
    'Filters': obj.filters?.map(y => toJson_NeptuneFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
    'DefaultOnly': obj.defaultOnly,
    'ListSupportedCharacterSets': obj.listSupportedCharacterSets,
    'ListSupportedTimezones': obj.listSupportedTimezones,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDbEngineVersionMessage
 */
export interface NeptuneDbEngineVersionMessage {
  /**
   * @schema NeptuneDbEngineVersionMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneDbEngineVersionMessage#DBEngineVersions
   */
  readonly dbEngineVersions?: NeptuneDbEngineVersion[];

}

/**
 * Converts an object of type 'NeptuneDbEngineVersionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbEngineVersionMessage(obj: NeptuneDbEngineVersionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'DBEngineVersions': obj.dbEngineVersions?.map(y => toJson_NeptuneDbEngineVersion(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDescribeDbInstancesMessage
 */
export interface NeptuneDescribeDbInstancesMessage {
  /**
   * @schema NeptuneDescribeDbInstancesMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema NeptuneDescribeDbInstancesMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeDbInstancesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeDbInstancesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'NeptuneDescribeDbInstancesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDescribeDbInstancesMessage(obj: NeptuneDescribeDbInstancesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'Filters': obj.filters?.map(y => toJson_NeptuneFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDbInstanceMessage
 */
export interface NeptuneDbInstanceMessage {
  /**
   * @schema NeptuneDbInstanceMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneDbInstanceMessage#DBInstances
   */
  readonly dbInstances?: NeptuneDbInstance[];

}

/**
 * Converts an object of type 'NeptuneDbInstanceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbInstanceMessage(obj: NeptuneDbInstanceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'DBInstances': obj.dbInstances?.map(y => toJson_NeptuneDbInstance(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDescribeDbParameterGroupsMessage
 */
export interface NeptuneDescribeDbParameterGroupsMessage {
  /**
   * @schema NeptuneDescribeDbParameterGroupsMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema NeptuneDescribeDbParameterGroupsMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeDbParameterGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeDbParameterGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'NeptuneDescribeDbParameterGroupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDescribeDbParameterGroupsMessage(obj: NeptuneDescribeDbParameterGroupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroupName': obj.dbParameterGroupName,
    'Filters': obj.filters?.map(y => toJson_NeptuneFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDbParameterGroupsMessage
 */
export interface NeptuneDbParameterGroupsMessage {
  /**
   * @schema NeptuneDbParameterGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneDbParameterGroupsMessage#DBParameterGroups
   */
  readonly dbParameterGroups?: NeptuneDbParameterGroup[];

}

/**
 * Converts an object of type 'NeptuneDbParameterGroupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbParameterGroupsMessage(obj: NeptuneDbParameterGroupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'DBParameterGroups': obj.dbParameterGroups?.map(y => toJson_NeptuneDbParameterGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDescribeDbParametersMessage
 */
export interface NeptuneDescribeDbParametersMessage {
  /**
   * @schema NeptuneDescribeDbParametersMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema NeptuneDescribeDbParametersMessage#Source
   */
  readonly source?: string;

  /**
   * @schema NeptuneDescribeDbParametersMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeDbParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeDbParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'NeptuneDescribeDbParametersMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDescribeDbParametersMessage(obj: NeptuneDescribeDbParametersMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroupName': obj.dbParameterGroupName,
    'Source': obj.source,
    'Filters': obj.filters?.map(y => toJson_NeptuneFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDbParameterGroupDetails
 */
export interface NeptuneDbParameterGroupDetails {
  /**
   * @schema NeptuneDbParameterGroupDetails#Parameters
   */
  readonly parameters?: NeptuneParameter[];

  /**
   * @schema NeptuneDbParameterGroupDetails#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'NeptuneDbParameterGroupDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbParameterGroupDetails(obj: NeptuneDbParameterGroupDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Parameters': obj.parameters?.map(y => toJson_NeptuneParameter(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDescribeDbSubnetGroupsMessage
 */
export interface NeptuneDescribeDbSubnetGroupsMessage {
  /**
   * @schema NeptuneDescribeDbSubnetGroupsMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema NeptuneDescribeDbSubnetGroupsMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeDbSubnetGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeDbSubnetGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'NeptuneDescribeDbSubnetGroupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDescribeDbSubnetGroupsMessage(obj: NeptuneDescribeDbSubnetGroupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSubnetGroupName': obj.dbSubnetGroupName,
    'Filters': obj.filters?.map(y => toJson_NeptuneFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDbSubnetGroupMessage
 */
export interface NeptuneDbSubnetGroupMessage {
  /**
   * @schema NeptuneDbSubnetGroupMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneDbSubnetGroupMessage#DBSubnetGroups
   */
  readonly dbSubnetGroups?: NeptuneDbSubnetGroup[];

}

/**
 * Converts an object of type 'NeptuneDbSubnetGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbSubnetGroupMessage(obj: NeptuneDbSubnetGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'DBSubnetGroups': obj.dbSubnetGroups?.map(y => toJson_NeptuneDbSubnetGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDescribeEngineDefaultClusterParametersMessage
 */
export interface NeptuneDescribeEngineDefaultClusterParametersMessage {
  /**
   * @schema NeptuneDescribeEngineDefaultClusterParametersMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema NeptuneDescribeEngineDefaultClusterParametersMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeEngineDefaultClusterParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeEngineDefaultClusterParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'NeptuneDescribeEngineDefaultClusterParametersMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDescribeEngineDefaultClusterParametersMessage(obj: NeptuneDescribeEngineDefaultClusterParametersMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroupFamily': obj.dbParameterGroupFamily,
    'Filters': obj.filters?.map(y => toJson_NeptuneFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDescribeEngineDefaultClusterParametersResult
 */
export interface NeptuneDescribeEngineDefaultClusterParametersResult {
  /**
   * @schema NeptuneDescribeEngineDefaultClusterParametersResult#EngineDefaults
   */
  readonly engineDefaults?: NeptuneEngineDefaults;

}

/**
 * Converts an object of type 'NeptuneDescribeEngineDefaultClusterParametersResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDescribeEngineDefaultClusterParametersResult(obj: NeptuneDescribeEngineDefaultClusterParametersResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EngineDefaults': toJson_NeptuneEngineDefaults(obj.engineDefaults),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDescribeEngineDefaultParametersMessage
 */
export interface NeptuneDescribeEngineDefaultParametersMessage {
  /**
   * @schema NeptuneDescribeEngineDefaultParametersMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema NeptuneDescribeEngineDefaultParametersMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeEngineDefaultParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeEngineDefaultParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'NeptuneDescribeEngineDefaultParametersMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDescribeEngineDefaultParametersMessage(obj: NeptuneDescribeEngineDefaultParametersMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroupFamily': obj.dbParameterGroupFamily,
    'Filters': obj.filters?.map(y => toJson_NeptuneFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDescribeEngineDefaultParametersResult
 */
export interface NeptuneDescribeEngineDefaultParametersResult {
  /**
   * @schema NeptuneDescribeEngineDefaultParametersResult#EngineDefaults
   */
  readonly engineDefaults?: NeptuneEngineDefaults;

}

/**
 * Converts an object of type 'NeptuneDescribeEngineDefaultParametersResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDescribeEngineDefaultParametersResult(obj: NeptuneDescribeEngineDefaultParametersResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EngineDefaults': toJson_NeptuneEngineDefaults(obj.engineDefaults),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDescribeEventCategoriesMessage
 */
export interface NeptuneDescribeEventCategoriesMessage {
  /**
   * @schema NeptuneDescribeEventCategoriesMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema NeptuneDescribeEventCategoriesMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

}

/**
 * Converts an object of type 'NeptuneDescribeEventCategoriesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDescribeEventCategoriesMessage(obj: NeptuneDescribeEventCategoriesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceType': obj.sourceType,
    'Filters': obj.filters?.map(y => toJson_NeptuneFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneEventCategoriesMessage
 */
export interface NeptuneEventCategoriesMessage {
  /**
   * @schema NeptuneEventCategoriesMessage#EventCategoriesMapList
   */
  readonly eventCategoriesMapList?: NeptuneEventCategoriesMap[];

}

/**
 * Converts an object of type 'NeptuneEventCategoriesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneEventCategoriesMessage(obj: NeptuneEventCategoriesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventCategoriesMapList': obj.eventCategoriesMapList?.map(y => toJson_NeptuneEventCategoriesMap(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDescribeEventSubscriptionsMessage
 */
export interface NeptuneDescribeEventSubscriptionsMessage {
  /**
   * @schema NeptuneDescribeEventSubscriptionsMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

  /**
   * @schema NeptuneDescribeEventSubscriptionsMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeEventSubscriptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeEventSubscriptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'NeptuneDescribeEventSubscriptionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDescribeEventSubscriptionsMessage(obj: NeptuneDescribeEventSubscriptionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionName': obj.subscriptionName,
    'Filters': obj.filters?.map(y => toJson_NeptuneFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneEventSubscriptionsMessage
 */
export interface NeptuneEventSubscriptionsMessage {
  /**
   * @schema NeptuneEventSubscriptionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneEventSubscriptionsMessage#EventSubscriptionsList
   */
  readonly eventSubscriptionsList?: NeptuneEventSubscription[];

}

/**
 * Converts an object of type 'NeptuneEventSubscriptionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneEventSubscriptionsMessage(obj: NeptuneEventSubscriptionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'EventSubscriptionsList': obj.eventSubscriptionsList?.map(y => toJson_NeptuneEventSubscription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDescribeEventsMessage
 */
export interface NeptuneDescribeEventsMessage {
  /**
   * @schema NeptuneDescribeEventsMessage#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

  /**
   * @schema NeptuneDescribeEventsMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema NeptuneDescribeEventsMessage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema NeptuneDescribeEventsMessage#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema NeptuneDescribeEventsMessage#Duration
   */
  readonly duration?: number;

  /**
   * @schema NeptuneDescribeEventsMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema NeptuneDescribeEventsMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeEventsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeEventsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'NeptuneDescribeEventsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDescribeEventsMessage(obj: NeptuneDescribeEventsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceIdentifier': obj.sourceIdentifier,
    'SourceType': obj.sourceType,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'Duration': obj.duration,
    'EventCategories': obj.eventCategories?.map(y => y),
    'Filters': obj.filters?.map(y => toJson_NeptuneFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneEventsMessage
 */
export interface NeptuneEventsMessage {
  /**
   * @schema NeptuneEventsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneEventsMessage#Events
   */
  readonly events?: NeptuneEvent[];

}

/**
 * Converts an object of type 'NeptuneEventsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneEventsMessage(obj: NeptuneEventsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'Events': obj.events?.map(y => toJson_NeptuneEvent(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDescribeOrderableDbInstanceOptionsMessage
 */
export interface NeptuneDescribeOrderableDbInstanceOptionsMessage {
  /**
   * @schema NeptuneDescribeOrderableDbInstanceOptionsMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema NeptuneDescribeOrderableDbInstanceOptionsMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptuneDescribeOrderableDbInstanceOptionsMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema NeptuneDescribeOrderableDbInstanceOptionsMessage#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema NeptuneDescribeOrderableDbInstanceOptionsMessage#Vpc
   */
  readonly vpc?: boolean;

  /**
   * @schema NeptuneDescribeOrderableDbInstanceOptionsMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribeOrderableDbInstanceOptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema NeptuneDescribeOrderableDbInstanceOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'NeptuneDescribeOrderableDbInstanceOptionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDescribeOrderableDbInstanceOptionsMessage(obj: NeptuneDescribeOrderableDbInstanceOptionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'DBInstanceClass': obj.dbInstanceClass,
    'LicenseModel': obj.licenseModel,
    'Vpc': obj.vpc,
    'Filters': obj.filters?.map(y => toJson_NeptuneFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneOrderableDbInstanceOptionsMessage
 */
export interface NeptuneOrderableDbInstanceOptionsMessage {
  /**
   * @schema NeptuneOrderableDbInstanceOptionsMessage#OrderableDBInstanceOptions
   */
  readonly orderableDbInstanceOptions?: NeptuneOrderableDbInstanceOption[];

  /**
   * @schema NeptuneOrderableDbInstanceOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'NeptuneOrderableDbInstanceOptionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneOrderableDbInstanceOptionsMessage(obj: NeptuneOrderableDbInstanceOptionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrderableDBInstanceOptions': obj.orderableDbInstanceOptions?.map(y => toJson_NeptuneOrderableDbInstanceOption(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDescribePendingMaintenanceActionsMessage
 */
export interface NeptuneDescribePendingMaintenanceActionsMessage {
  /**
   * @schema NeptuneDescribePendingMaintenanceActionsMessage#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema NeptuneDescribePendingMaintenanceActionsMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

  /**
   * @schema NeptuneDescribePendingMaintenanceActionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneDescribePendingMaintenanceActionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * Converts an object of type 'NeptuneDescribePendingMaintenanceActionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDescribePendingMaintenanceActionsMessage(obj: NeptuneDescribePendingMaintenanceActionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceIdentifier': obj.resourceIdentifier,
    'Filters': obj.filters?.map(y => toJson_NeptuneFilter(y)),
    'Marker': obj.marker,
    'MaxRecords': obj.maxRecords,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptunePendingMaintenanceActionsMessage
 */
export interface NeptunePendingMaintenanceActionsMessage {
  /**
   * @schema NeptunePendingMaintenanceActionsMessage#PendingMaintenanceActions
   */
  readonly pendingMaintenanceActions?: NeptuneResourcePendingMaintenanceActions[];

  /**
   * @schema NeptunePendingMaintenanceActionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'NeptunePendingMaintenanceActionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptunePendingMaintenanceActionsMessage(obj: NeptunePendingMaintenanceActionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PendingMaintenanceActions': obj.pendingMaintenanceActions?.map(y => toJson_NeptuneResourcePendingMaintenanceActions(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDescribeValidDbInstanceModificationsMessage
 */
export interface NeptuneDescribeValidDbInstanceModificationsMessage {
  /**
   * @schema NeptuneDescribeValidDbInstanceModificationsMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

}

/**
 * Converts an object of type 'NeptuneDescribeValidDbInstanceModificationsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDescribeValidDbInstanceModificationsMessage(obj: NeptuneDescribeValidDbInstanceModificationsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDescribeValidDbInstanceModificationsResult
 */
export interface NeptuneDescribeValidDbInstanceModificationsResult {
  /**
   * @schema NeptuneDescribeValidDbInstanceModificationsResult#ValidDBInstanceModificationsMessage
   */
  readonly validDbInstanceModificationsMessage?: NeptuneValidDbInstanceModificationsMessage;

}

/**
 * Converts an object of type 'NeptuneDescribeValidDbInstanceModificationsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDescribeValidDbInstanceModificationsResult(obj: NeptuneDescribeValidDbInstanceModificationsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ValidDBInstanceModificationsMessage': toJson_NeptuneValidDbInstanceModificationsMessage(obj.validDbInstanceModificationsMessage),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneFailoverDbClusterMessage
 */
export interface NeptuneFailoverDbClusterMessage {
  /**
   * @schema NeptuneFailoverDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneFailoverDbClusterMessage#TargetDBInstanceIdentifier
   */
  readonly targetDbInstanceIdentifier?: string;

}

/**
 * Converts an object of type 'NeptuneFailoverDbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneFailoverDbClusterMessage(obj: NeptuneFailoverDbClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'TargetDBInstanceIdentifier': obj.targetDbInstanceIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneFailoverDbClusterResult
 */
export interface NeptuneFailoverDbClusterResult {
  /**
   * @schema NeptuneFailoverDbClusterResult#DBCluster
   */
  readonly dbCluster?: NeptuneDbCluster;

}

/**
 * Converts an object of type 'NeptuneFailoverDbClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneFailoverDbClusterResult(obj: NeptuneFailoverDbClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBCluster': toJson_NeptuneDbCluster(obj.dbCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneListTagsForResourceMessage
 */
export interface NeptuneListTagsForResourceMessage {
  /**
   * @schema NeptuneListTagsForResourceMessage#ResourceName
   */
  readonly resourceName?: string;

  /**
   * @schema NeptuneListTagsForResourceMessage#Filters
   */
  readonly filters?: NeptuneFilter[];

}

/**
 * Converts an object of type 'NeptuneListTagsForResourceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneListTagsForResourceMessage(obj: NeptuneListTagsForResourceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceName': obj.resourceName,
    'Filters': obj.filters?.map(y => toJson_NeptuneFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneTagListMessage
 */
export interface NeptuneTagListMessage {
  /**
   * @schema NeptuneTagListMessage#TagList
   */
  readonly tagList?: NeptuneTag[];

}

/**
 * Converts an object of type 'NeptuneTagListMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneTagListMessage(obj: NeptuneTagListMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TagList': obj.tagList?.map(y => toJson_NeptuneTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneModifyDbClusterMessage
 */
export interface NeptuneModifyDbClusterMessage {
  /**
   * @schema NeptuneModifyDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneModifyDbClusterMessage#NewDBClusterIdentifier
   */
  readonly newDbClusterIdentifier?: string;

  /**
   * @schema NeptuneModifyDbClusterMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema NeptuneModifyDbClusterMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema NeptuneModifyDbClusterMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema NeptuneModifyDbClusterMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema NeptuneModifyDbClusterMessage#Port
   */
  readonly port?: number;

  /**
   * @schema NeptuneModifyDbClusterMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema NeptuneModifyDbClusterMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema NeptuneModifyDbClusterMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema NeptuneModifyDbClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema NeptuneModifyDbClusterMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema NeptuneModifyDbClusterMessage#CloudwatchLogsExportConfiguration
   */
  readonly cloudwatchLogsExportConfiguration?: NeptuneCloudwatchLogsExportConfiguration;

  /**
   * @schema NeptuneModifyDbClusterMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptuneModifyDbClusterMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema NeptuneModifyDbClusterMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

}

/**
 * Converts an object of type 'NeptuneModifyDbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneModifyDbClusterMessage(obj: NeptuneModifyDbClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'NewDBClusterIdentifier': obj.newDbClusterIdentifier,
    'ApplyImmediately': obj.applyImmediately,
    'BackupRetentionPeriod': obj.backupRetentionPeriod,
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
    'VpcSecurityGroupIds': obj.vpcSecurityGroupIds?.map(y => y),
    'Port': obj.port,
    'MasterUserPassword': obj.masterUserPassword,
    'OptionGroupName': obj.optionGroupName,
    'PreferredBackupWindow': obj.preferredBackupWindow,
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'EnableIAMDatabaseAuthentication': obj.enableIamDatabaseAuthentication,
    'CloudwatchLogsExportConfiguration': toJson_NeptuneCloudwatchLogsExportConfiguration(obj.cloudwatchLogsExportConfiguration),
    'EngineVersion': obj.engineVersion,
    'DeletionProtection': obj.deletionProtection,
    'CopyTagsToSnapshot': obj.copyTagsToSnapshot,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneModifyDbClusterResult
 */
export interface NeptuneModifyDbClusterResult {
  /**
   * @schema NeptuneModifyDbClusterResult#DBCluster
   */
  readonly dbCluster?: NeptuneDbCluster;

}

/**
 * Converts an object of type 'NeptuneModifyDbClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneModifyDbClusterResult(obj: NeptuneModifyDbClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBCluster': toJson_NeptuneDbCluster(obj.dbCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneModifyDbClusterEndpointMessage
 */
export interface NeptuneModifyDbClusterEndpointMessage {
  /**
   * @schema NeptuneModifyDbClusterEndpointMessage#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier?: string;

  /**
   * @schema NeptuneModifyDbClusterEndpointMessage#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema NeptuneModifyDbClusterEndpointMessage#StaticMembers
   */
  readonly staticMembers?: string[];

  /**
   * @schema NeptuneModifyDbClusterEndpointMessage#ExcludedMembers
   */
  readonly excludedMembers?: string[];

}

/**
 * Converts an object of type 'NeptuneModifyDbClusterEndpointMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneModifyDbClusterEndpointMessage(obj: NeptuneModifyDbClusterEndpointMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterEndpointIdentifier': obj.dbClusterEndpointIdentifier,
    'EndpointType': obj.endpointType,
    'StaticMembers': obj.staticMembers?.map(y => y),
    'ExcludedMembers': obj.excludedMembers?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneModifyDbClusterEndpointOutput
 */
export interface NeptuneModifyDbClusterEndpointOutput {
  /**
   * @schema NeptuneModifyDbClusterEndpointOutput#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier?: string;

  /**
   * @schema NeptuneModifyDbClusterEndpointOutput#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneModifyDbClusterEndpointOutput#DBClusterEndpointResourceIdentifier
   */
  readonly dbClusterEndpointResourceIdentifier?: string;

  /**
   * @schema NeptuneModifyDbClusterEndpointOutput#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema NeptuneModifyDbClusterEndpointOutput#Status
   */
  readonly status?: string;

  /**
   * @schema NeptuneModifyDbClusterEndpointOutput#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema NeptuneModifyDbClusterEndpointOutput#CustomEndpointType
   */
  readonly customEndpointType?: string;

  /**
   * @schema NeptuneModifyDbClusterEndpointOutput#StaticMembers
   */
  readonly staticMembers?: string[];

  /**
   * @schema NeptuneModifyDbClusterEndpointOutput#ExcludedMembers
   */
  readonly excludedMembers?: string[];

  /**
   * @schema NeptuneModifyDbClusterEndpointOutput#DBClusterEndpointArn
   */
  readonly dbClusterEndpointArn?: string;

}

/**
 * Converts an object of type 'NeptuneModifyDbClusterEndpointOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneModifyDbClusterEndpointOutput(obj: NeptuneModifyDbClusterEndpointOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterEndpointIdentifier': obj.dbClusterEndpointIdentifier,
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'DBClusterEndpointResourceIdentifier': obj.dbClusterEndpointResourceIdentifier,
    'Endpoint': obj.endpoint,
    'Status': obj.status,
    'EndpointType': obj.endpointType,
    'CustomEndpointType': obj.customEndpointType,
    'StaticMembers': obj.staticMembers?.map(y => y),
    'ExcludedMembers': obj.excludedMembers?.map(y => y),
    'DBClusterEndpointArn': obj.dbClusterEndpointArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneModifyDbClusterParameterGroupMessage
 */
export interface NeptuneModifyDbClusterParameterGroupMessage {
  /**
   * @schema NeptuneModifyDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema NeptuneModifyDbClusterParameterGroupMessage#Parameters
   */
  readonly parameters?: NeptuneParameter[];

}

/**
 * Converts an object of type 'NeptuneModifyDbClusterParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneModifyDbClusterParameterGroupMessage(obj: NeptuneModifyDbClusterParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
    'Parameters': obj.parameters?.map(y => toJson_NeptuneParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDbClusterParameterGroupNameMessage
 */
export interface NeptuneDbClusterParameterGroupNameMessage {
  /**
   * @schema NeptuneDbClusterParameterGroupNameMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

}

/**
 * Converts an object of type 'NeptuneDbClusterParameterGroupNameMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbClusterParameterGroupNameMessage(obj: NeptuneDbClusterParameterGroupNameMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneModifyDbClusterSnapshotAttributeMessage
 */
export interface NeptuneModifyDbClusterSnapshotAttributeMessage {
  /**
   * @schema NeptuneModifyDbClusterSnapshotAttributeMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema NeptuneModifyDbClusterSnapshotAttributeMessage#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema NeptuneModifyDbClusterSnapshotAttributeMessage#ValuesToAdd
   */
  readonly valuesToAdd?: string[];

  /**
   * @schema NeptuneModifyDbClusterSnapshotAttributeMessage#ValuesToRemove
   */
  readonly valuesToRemove?: string[];

}

/**
 * Converts an object of type 'NeptuneModifyDbClusterSnapshotAttributeMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneModifyDbClusterSnapshotAttributeMessage(obj: NeptuneModifyDbClusterSnapshotAttributeMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshotIdentifier': obj.dbClusterSnapshotIdentifier,
    'AttributeName': obj.attributeName,
    'ValuesToAdd': obj.valuesToAdd?.map(y => y),
    'ValuesToRemove': obj.valuesToRemove?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneModifyDbClusterSnapshotAttributeResult
 */
export interface NeptuneModifyDbClusterSnapshotAttributeResult {
  /**
   * @schema NeptuneModifyDbClusterSnapshotAttributeResult#DBClusterSnapshotAttributesResult
   */
  readonly dbClusterSnapshotAttributesResult?: NeptuneDbClusterSnapshotAttributesResult;

}

/**
 * Converts an object of type 'NeptuneModifyDbClusterSnapshotAttributeResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneModifyDbClusterSnapshotAttributeResult(obj: NeptuneModifyDbClusterSnapshotAttributeResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshotAttributesResult': toJson_NeptuneDbClusterSnapshotAttributesResult(obj.dbClusterSnapshotAttributesResult),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneModifyDbInstanceMessage
 */
export interface NeptuneModifyDbInstanceMessage {
  /**
   * @schema NeptuneModifyDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema NeptuneModifyDbInstanceMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#DBSecurityGroups
   */
  readonly dbSecurityGroups?: string[];

  /**
   * @schema NeptuneModifyDbInstanceMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema NeptuneModifyDbInstanceMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema NeptuneModifyDbInstanceMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema NeptuneModifyDbInstanceMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema NeptuneModifyDbInstanceMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#AllowMajorVersionUpgrade
   */
  readonly allowMajorVersionUpgrade?: boolean;

  /**
   * @schema NeptuneModifyDbInstanceMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema NeptuneModifyDbInstanceMessage#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#Iops
   */
  readonly iops?: number;

  /**
   * @schema NeptuneModifyDbInstanceMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#NewDBInstanceIdentifier
   */
  readonly newDbInstanceIdentifier?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#TdeCredentialPassword
   */
  readonly tdeCredentialPassword?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#Domain
   */
  readonly domain?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema NeptuneModifyDbInstanceMessage#MonitoringInterval
   */
  readonly monitoringInterval?: number;

  /**
   * @schema NeptuneModifyDbInstanceMessage#DBPortNumber
   */
  readonly dbPortNumber?: number;

  /**
   * @schema NeptuneModifyDbInstanceMessage#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema NeptuneModifyDbInstanceMessage#MonitoringRoleArn
   */
  readonly monitoringRoleArn?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#DomainIAMRoleName
   */
  readonly domainIamRoleName?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#PromotionTier
   */
  readonly promotionTier?: number;

  /**
   * @schema NeptuneModifyDbInstanceMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema NeptuneModifyDbInstanceMessage#EnablePerformanceInsights
   */
  readonly enablePerformanceInsights?: boolean;

  /**
   * @schema NeptuneModifyDbInstanceMessage#PerformanceInsightsKMSKeyId
   */
  readonly performanceInsightsKmsKeyId?: string;

  /**
   * @schema NeptuneModifyDbInstanceMessage#CloudwatchLogsExportConfiguration
   */
  readonly cloudwatchLogsExportConfiguration?: NeptuneCloudwatchLogsExportConfiguration;

  /**
   * @schema NeptuneModifyDbInstanceMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * Converts an object of type 'NeptuneModifyDbInstanceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneModifyDbInstanceMessage(obj: NeptuneModifyDbInstanceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'AllocatedStorage': obj.allocatedStorage,
    'DBInstanceClass': obj.dbInstanceClass,
    'DBSubnetGroupName': obj.dbSubnetGroupName,
    'DBSecurityGroups': obj.dbSecurityGroups?.map(y => y),
    'VpcSecurityGroupIds': obj.vpcSecurityGroupIds?.map(y => y),
    'ApplyImmediately': obj.applyImmediately,
    'MasterUserPassword': obj.masterUserPassword,
    'DBParameterGroupName': obj.dbParameterGroupName,
    'BackupRetentionPeriod': obj.backupRetentionPeriod,
    'PreferredBackupWindow': obj.preferredBackupWindow,
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'MultiAZ': obj.multiAz,
    'EngineVersion': obj.engineVersion,
    'AllowMajorVersionUpgrade': obj.allowMajorVersionUpgrade,
    'AutoMinorVersionUpgrade': obj.autoMinorVersionUpgrade,
    'LicenseModel': obj.licenseModel,
    'Iops': obj.iops,
    'OptionGroupName': obj.optionGroupName,
    'NewDBInstanceIdentifier': obj.newDbInstanceIdentifier,
    'StorageType': obj.storageType,
    'TdeCredentialArn': obj.tdeCredentialArn,
    'TdeCredentialPassword': obj.tdeCredentialPassword,
    'CACertificateIdentifier': obj.caCertificateIdentifier,
    'Domain': obj.domain,
    'CopyTagsToSnapshot': obj.copyTagsToSnapshot,
    'MonitoringInterval': obj.monitoringInterval,
    'DBPortNumber': obj.dbPortNumber,
    'PubliclyAccessible': obj.publiclyAccessible,
    'MonitoringRoleArn': obj.monitoringRoleArn,
    'DomainIAMRoleName': obj.domainIamRoleName,
    'PromotionTier': obj.promotionTier,
    'EnableIAMDatabaseAuthentication': obj.enableIamDatabaseAuthentication,
    'EnablePerformanceInsights': obj.enablePerformanceInsights,
    'PerformanceInsightsKMSKeyId': obj.performanceInsightsKmsKeyId,
    'CloudwatchLogsExportConfiguration': toJson_NeptuneCloudwatchLogsExportConfiguration(obj.cloudwatchLogsExportConfiguration),
    'DeletionProtection': obj.deletionProtection,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneModifyDbInstanceResult
 */
export interface NeptuneModifyDbInstanceResult {
  /**
   * @schema NeptuneModifyDbInstanceResult#DBInstance
   */
  readonly dbInstance?: NeptuneDbInstance;

}

/**
 * Converts an object of type 'NeptuneModifyDbInstanceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneModifyDbInstanceResult(obj: NeptuneModifyDbInstanceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstance': toJson_NeptuneDbInstance(obj.dbInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneModifyDbParameterGroupMessage
 */
export interface NeptuneModifyDbParameterGroupMessage {
  /**
   * @schema NeptuneModifyDbParameterGroupMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema NeptuneModifyDbParameterGroupMessage#Parameters
   */
  readonly parameters?: NeptuneParameter[];

}

/**
 * Converts an object of type 'NeptuneModifyDbParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneModifyDbParameterGroupMessage(obj: NeptuneModifyDbParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroupName': obj.dbParameterGroupName,
    'Parameters': obj.parameters?.map(y => toJson_NeptuneParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDbParameterGroupNameMessage
 */
export interface NeptuneDbParameterGroupNameMessage {
  /**
   * @schema NeptuneDbParameterGroupNameMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

}

/**
 * Converts an object of type 'NeptuneDbParameterGroupNameMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbParameterGroupNameMessage(obj: NeptuneDbParameterGroupNameMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroupName': obj.dbParameterGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneModifyDbSubnetGroupMessage
 */
export interface NeptuneModifyDbSubnetGroupMessage {
  /**
   * @schema NeptuneModifyDbSubnetGroupMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema NeptuneModifyDbSubnetGroupMessage#DBSubnetGroupDescription
   */
  readonly dbSubnetGroupDescription?: string;

  /**
   * @schema NeptuneModifyDbSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds?: string[];

}

/**
 * Converts an object of type 'NeptuneModifyDbSubnetGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneModifyDbSubnetGroupMessage(obj: NeptuneModifyDbSubnetGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSubnetGroupName': obj.dbSubnetGroupName,
    'DBSubnetGroupDescription': obj.dbSubnetGroupDescription,
    'SubnetIds': obj.subnetIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneModifyDbSubnetGroupResult
 */
export interface NeptuneModifyDbSubnetGroupResult {
  /**
   * @schema NeptuneModifyDbSubnetGroupResult#DBSubnetGroup
   */
  readonly dbSubnetGroup?: NeptuneDbSubnetGroup;

}

/**
 * Converts an object of type 'NeptuneModifyDbSubnetGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneModifyDbSubnetGroupResult(obj: NeptuneModifyDbSubnetGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSubnetGroup': toJson_NeptuneDbSubnetGroup(obj.dbSubnetGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneModifyEventSubscriptionMessage
 */
export interface NeptuneModifyEventSubscriptionMessage {
  /**
   * @schema NeptuneModifyEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

  /**
   * @schema NeptuneModifyEventSubscriptionMessage#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema NeptuneModifyEventSubscriptionMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema NeptuneModifyEventSubscriptionMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema NeptuneModifyEventSubscriptionMessage#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'NeptuneModifyEventSubscriptionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneModifyEventSubscriptionMessage(obj: NeptuneModifyEventSubscriptionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionName': obj.subscriptionName,
    'SnsTopicArn': obj.snsTopicArn,
    'SourceType': obj.sourceType,
    'EventCategories': obj.eventCategories?.map(y => y),
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneModifyEventSubscriptionResult
 */
export interface NeptuneModifyEventSubscriptionResult {
  /**
   * @schema NeptuneModifyEventSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: NeptuneEventSubscription;

}

/**
 * Converts an object of type 'NeptuneModifyEventSubscriptionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneModifyEventSubscriptionResult(obj: NeptuneModifyEventSubscriptionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventSubscription': toJson_NeptuneEventSubscription(obj.eventSubscription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptunePromoteReadReplicaDbClusterMessage
 */
export interface NeptunePromoteReadReplicaDbClusterMessage {
  /**
   * @schema NeptunePromoteReadReplicaDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

}

/**
 * Converts an object of type 'NeptunePromoteReadReplicaDbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptunePromoteReadReplicaDbClusterMessage(obj: NeptunePromoteReadReplicaDbClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptunePromoteReadReplicaDbClusterResult
 */
export interface NeptunePromoteReadReplicaDbClusterResult {
  /**
   * @schema NeptunePromoteReadReplicaDbClusterResult#DBCluster
   */
  readonly dbCluster?: NeptuneDbCluster;

}

/**
 * Converts an object of type 'NeptunePromoteReadReplicaDbClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptunePromoteReadReplicaDbClusterResult(obj: NeptunePromoteReadReplicaDbClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBCluster': toJson_NeptuneDbCluster(obj.dbCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneRebootDbInstanceMessage
 */
export interface NeptuneRebootDbInstanceMessage {
  /**
   * @schema NeptuneRebootDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema NeptuneRebootDbInstanceMessage#ForceFailover
   */
  readonly forceFailover?: boolean;

}

/**
 * Converts an object of type 'NeptuneRebootDbInstanceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneRebootDbInstanceMessage(obj: NeptuneRebootDbInstanceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'ForceFailover': obj.forceFailover,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneRebootDbInstanceResult
 */
export interface NeptuneRebootDbInstanceResult {
  /**
   * @schema NeptuneRebootDbInstanceResult#DBInstance
   */
  readonly dbInstance?: NeptuneDbInstance;

}

/**
 * Converts an object of type 'NeptuneRebootDbInstanceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneRebootDbInstanceResult(obj: NeptuneRebootDbInstanceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstance': toJson_NeptuneDbInstance(obj.dbInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneRemoveRoleFromDbClusterMessage
 */
export interface NeptuneRemoveRoleFromDbClusterMessage {
  /**
   * @schema NeptuneRemoveRoleFromDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneRemoveRoleFromDbClusterMessage#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema NeptuneRemoveRoleFromDbClusterMessage#FeatureName
   */
  readonly featureName?: string;

}

/**
 * Converts an object of type 'NeptuneRemoveRoleFromDbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneRemoveRoleFromDbClusterMessage(obj: NeptuneRemoveRoleFromDbClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'RoleArn': obj.roleArn,
    'FeatureName': obj.featureName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneRemoveSourceIdentifierFromSubscriptionMessage
 */
export interface NeptuneRemoveSourceIdentifierFromSubscriptionMessage {
  /**
   * @schema NeptuneRemoveSourceIdentifierFromSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

  /**
   * @schema NeptuneRemoveSourceIdentifierFromSubscriptionMessage#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

}

/**
 * Converts an object of type 'NeptuneRemoveSourceIdentifierFromSubscriptionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneRemoveSourceIdentifierFromSubscriptionMessage(obj: NeptuneRemoveSourceIdentifierFromSubscriptionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionName': obj.subscriptionName,
    'SourceIdentifier': obj.sourceIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneRemoveSourceIdentifierFromSubscriptionResult
 */
export interface NeptuneRemoveSourceIdentifierFromSubscriptionResult {
  /**
   * @schema NeptuneRemoveSourceIdentifierFromSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: NeptuneEventSubscription;

}

/**
 * Converts an object of type 'NeptuneRemoveSourceIdentifierFromSubscriptionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneRemoveSourceIdentifierFromSubscriptionResult(obj: NeptuneRemoveSourceIdentifierFromSubscriptionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventSubscription': toJson_NeptuneEventSubscription(obj.eventSubscription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneRemoveTagsFromResourceMessage
 */
export interface NeptuneRemoveTagsFromResourceMessage {
  /**
   * @schema NeptuneRemoveTagsFromResourceMessage#ResourceName
   */
  readonly resourceName?: string;

  /**
   * @schema NeptuneRemoveTagsFromResourceMessage#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'NeptuneRemoveTagsFromResourceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneRemoveTagsFromResourceMessage(obj: NeptuneRemoveTagsFromResourceMessage | undefined): Record<string, any> | undefined {
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
 * @schema NeptuneResetDbClusterParameterGroupMessage
 */
export interface NeptuneResetDbClusterParameterGroupMessage {
  /**
   * @schema NeptuneResetDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema NeptuneResetDbClusterParameterGroupMessage#ResetAllParameters
   */
  readonly resetAllParameters?: boolean;

  /**
   * @schema NeptuneResetDbClusterParameterGroupMessage#Parameters
   */
  readonly parameters?: NeptuneParameter[];

}

/**
 * Converts an object of type 'NeptuneResetDbClusterParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneResetDbClusterParameterGroupMessage(obj: NeptuneResetDbClusterParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
    'ResetAllParameters': obj.resetAllParameters,
    'Parameters': obj.parameters?.map(y => toJson_NeptuneParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneResetDbParameterGroupMessage
 */
export interface NeptuneResetDbParameterGroupMessage {
  /**
   * @schema NeptuneResetDbParameterGroupMessage#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema NeptuneResetDbParameterGroupMessage#ResetAllParameters
   */
  readonly resetAllParameters?: boolean;

  /**
   * @schema NeptuneResetDbParameterGroupMessage#Parameters
   */
  readonly parameters?: NeptuneParameter[];

}

/**
 * Converts an object of type 'NeptuneResetDbParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneResetDbParameterGroupMessage(obj: NeptuneResetDbParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroupName': obj.dbParameterGroupName,
    'ResetAllParameters': obj.resetAllParameters,
    'Parameters': obj.parameters?.map(y => toJson_NeptuneParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneRestoreDbClusterFromSnapshotMessage
 */
export interface NeptuneRestoreDbClusterFromSnapshotMessage {
  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier?: string;

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#Port
   */
  readonly port?: number;

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#Tags
   */
  readonly tags?: NeptuneTag[];

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotMessage#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

}

/**
 * Converts an object of type 'NeptuneRestoreDbClusterFromSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneRestoreDbClusterFromSnapshotMessage(obj: NeptuneRestoreDbClusterFromSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'SnapshotIdentifier': obj.snapshotIdentifier,
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'Port': obj.port,
    'DBSubnetGroupName': obj.dbSubnetGroupName,
    'DatabaseName': obj.databaseName,
    'OptionGroupName': obj.optionGroupName,
    'VpcSecurityGroupIds': obj.vpcSecurityGroupIds?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_NeptuneTag(y)),
    'KmsKeyId': obj.kmsKeyId,
    'EnableIAMDatabaseAuthentication': obj.enableIamDatabaseAuthentication,
    'EnableCloudwatchLogsExports': obj.enableCloudwatchLogsExports?.map(y => y),
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
    'DeletionProtection': obj.deletionProtection,
    'CopyTagsToSnapshot': obj.copyTagsToSnapshot,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneRestoreDbClusterFromSnapshotResult
 */
export interface NeptuneRestoreDbClusterFromSnapshotResult {
  /**
   * @schema NeptuneRestoreDbClusterFromSnapshotResult#DBCluster
   */
  readonly dbCluster?: NeptuneDbCluster;

}

/**
 * Converts an object of type 'NeptuneRestoreDbClusterFromSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneRestoreDbClusterFromSnapshotResult(obj: NeptuneRestoreDbClusterFromSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBCluster': toJson_NeptuneDbCluster(obj.dbCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneRestoreDbClusterToPointInTimeMessage
 */
export interface NeptuneRestoreDbClusterToPointInTimeMessage {
  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#RestoreType
   */
  readonly restoreType?: string;

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#SourceDBClusterIdentifier
   */
  readonly sourceDbClusterIdentifier?: string;

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#RestoreToTime
   */
  readonly restoreToTime?: string;

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#UseLatestRestorableTime
   */
  readonly useLatestRestorableTime?: boolean;

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#Port
   */
  readonly port?: number;

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#Tags
   */
  readonly tags?: NeptuneTag[];

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#EnableIAMDatabaseAuthentication
   */
  readonly enableIamDatabaseAuthentication?: boolean;

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * Converts an object of type 'NeptuneRestoreDbClusterToPointInTimeMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneRestoreDbClusterToPointInTimeMessage(obj: NeptuneRestoreDbClusterToPointInTimeMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'RestoreType': obj.restoreType,
    'SourceDBClusterIdentifier': obj.sourceDbClusterIdentifier,
    'RestoreToTime': obj.restoreToTime,
    'UseLatestRestorableTime': obj.useLatestRestorableTime,
    'Port': obj.port,
    'DBSubnetGroupName': obj.dbSubnetGroupName,
    'OptionGroupName': obj.optionGroupName,
    'VpcSecurityGroupIds': obj.vpcSecurityGroupIds?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_NeptuneTag(y)),
    'KmsKeyId': obj.kmsKeyId,
    'EnableIAMDatabaseAuthentication': obj.enableIamDatabaseAuthentication,
    'EnableCloudwatchLogsExports': obj.enableCloudwatchLogsExports?.map(y => y),
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
    'DeletionProtection': obj.deletionProtection,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneRestoreDbClusterToPointInTimeResult
 */
export interface NeptuneRestoreDbClusterToPointInTimeResult {
  /**
   * @schema NeptuneRestoreDbClusterToPointInTimeResult#DBCluster
   */
  readonly dbCluster?: NeptuneDbCluster;

}

/**
 * Converts an object of type 'NeptuneRestoreDbClusterToPointInTimeResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneRestoreDbClusterToPointInTimeResult(obj: NeptuneRestoreDbClusterToPointInTimeResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBCluster': toJson_NeptuneDbCluster(obj.dbCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneStartDbClusterMessage
 */
export interface NeptuneStartDbClusterMessage {
  /**
   * @schema NeptuneStartDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

}

/**
 * Converts an object of type 'NeptuneStartDbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneStartDbClusterMessage(obj: NeptuneStartDbClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneStartDbClusterResult
 */
export interface NeptuneStartDbClusterResult {
  /**
   * @schema NeptuneStartDbClusterResult#DBCluster
   */
  readonly dbCluster?: NeptuneDbCluster;

}

/**
 * Converts an object of type 'NeptuneStartDbClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneStartDbClusterResult(obj: NeptuneStartDbClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBCluster': toJson_NeptuneDbCluster(obj.dbCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneStopDbClusterMessage
 */
export interface NeptuneStopDbClusterMessage {
  /**
   * @schema NeptuneStopDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

}

/**
 * Converts an object of type 'NeptuneStopDbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneStopDbClusterMessage(obj: NeptuneStopDbClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneStopDbClusterResult
 */
export interface NeptuneStopDbClusterResult {
  /**
   * @schema NeptuneStopDbClusterResult#DBCluster
   */
  readonly dbCluster?: NeptuneDbCluster;

}

/**
 * Converts an object of type 'NeptuneStopDbClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneStopDbClusterResult(obj: NeptuneStopDbClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBCluster': toJson_NeptuneDbCluster(obj.dbCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneEventSubscription
 */
export interface NeptuneEventSubscription {
  /**
   * @schema NeptuneEventSubscription#CustomerAwsId
   */
  readonly customerAwsId?: string;

  /**
   * @schema NeptuneEventSubscription#CustSubscriptionId
   */
  readonly custSubscriptionId?: string;

  /**
   * @schema NeptuneEventSubscription#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema NeptuneEventSubscription#Status
   */
  readonly status?: string;

  /**
   * @schema NeptuneEventSubscription#SubscriptionCreationTime
   */
  readonly subscriptionCreationTime?: string;

  /**
   * @schema NeptuneEventSubscription#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema NeptuneEventSubscription#SourceIdsList
   */
  readonly sourceIdsList?: string[];

  /**
   * @schema NeptuneEventSubscription#EventCategoriesList
   */
  readonly eventCategoriesList?: string[];

  /**
   * @schema NeptuneEventSubscription#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema NeptuneEventSubscription#EventSubscriptionArn
   */
  readonly eventSubscriptionArn?: string;

}

/**
 * Converts an object of type 'NeptuneEventSubscription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneEventSubscription(obj: NeptuneEventSubscription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomerAwsId': obj.customerAwsId,
    'CustSubscriptionId': obj.custSubscriptionId,
    'SnsTopicArn': obj.snsTopicArn,
    'Status': obj.status,
    'SubscriptionCreationTime': obj.subscriptionCreationTime,
    'SourceType': obj.sourceType,
    'SourceIdsList': obj.sourceIdsList?.map(y => y),
    'EventCategoriesList': obj.eventCategoriesList?.map(y => y),
    'Enabled': obj.enabled,
    'EventSubscriptionArn': obj.eventSubscriptionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneTag
 */
export interface NeptuneTag {
  /**
   * @schema NeptuneTag#Key
   */
  readonly key?: string;

  /**
   * @schema NeptuneTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'NeptuneTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneTag(obj: NeptuneTag | undefined): Record<string, any> | undefined {
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
 * @schema NeptuneResourcePendingMaintenanceActions
 */
export interface NeptuneResourcePendingMaintenanceActions {
  /**
   * @schema NeptuneResourcePendingMaintenanceActions#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema NeptuneResourcePendingMaintenanceActions#PendingMaintenanceActionDetails
   */
  readonly pendingMaintenanceActionDetails?: NeptunePendingMaintenanceAction[];

}

/**
 * Converts an object of type 'NeptuneResourcePendingMaintenanceActions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneResourcePendingMaintenanceActions(obj: NeptuneResourcePendingMaintenanceActions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceIdentifier': obj.resourceIdentifier,
    'PendingMaintenanceActionDetails': obj.pendingMaintenanceActionDetails?.map(y => toJson_NeptunePendingMaintenanceAction(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDbClusterParameterGroup
 */
export interface NeptuneDbClusterParameterGroup {
  /**
   * @schema NeptuneDbClusterParameterGroup#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema NeptuneDbClusterParameterGroup#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema NeptuneDbClusterParameterGroup#Description
   */
  readonly description?: string;

  /**
   * @schema NeptuneDbClusterParameterGroup#DBClusterParameterGroupArn
   */
  readonly dbClusterParameterGroupArn?: string;

}

/**
 * Converts an object of type 'NeptuneDbClusterParameterGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbClusterParameterGroup(obj: NeptuneDbClusterParameterGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
    'DBParameterGroupFamily': obj.dbParameterGroupFamily,
    'Description': obj.description,
    'DBClusterParameterGroupArn': obj.dbClusterParameterGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDbClusterSnapshot
 */
export interface NeptuneDbClusterSnapshot {
  /**
   * @schema NeptuneDbClusterSnapshot#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema NeptuneDbClusterSnapshot#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#SnapshotCreateTime
   */
  readonly snapshotCreateTime?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#Engine
   */
  readonly engine?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema NeptuneDbClusterSnapshot#Status
   */
  readonly status?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#Port
   */
  readonly port?: number;

  /**
   * @schema NeptuneDbClusterSnapshot#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#PercentProgress
   */
  readonly percentProgress?: number;

  /**
   * @schema NeptuneDbClusterSnapshot#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema NeptuneDbClusterSnapshot#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#DBClusterSnapshotArn
   */
  readonly dbClusterSnapshotArn?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#SourceDBClusterSnapshotArn
   */
  readonly sourceDbClusterSnapshotArn?: string;

  /**
   * @schema NeptuneDbClusterSnapshot#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

}

/**
 * Converts an object of type 'NeptuneDbClusterSnapshot' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbClusterSnapshot(obj: NeptuneDbClusterSnapshot | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'DBClusterSnapshotIdentifier': obj.dbClusterSnapshotIdentifier,
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'SnapshotCreateTime': obj.snapshotCreateTime,
    'Engine': obj.engine,
    'AllocatedStorage': obj.allocatedStorage,
    'Status': obj.status,
    'Port': obj.port,
    'VpcId': obj.vpcId,
    'ClusterCreateTime': obj.clusterCreateTime,
    'MasterUsername': obj.masterUsername,
    'EngineVersion': obj.engineVersion,
    'LicenseModel': obj.licenseModel,
    'SnapshotType': obj.snapshotType,
    'PercentProgress': obj.percentProgress,
    'StorageEncrypted': obj.storageEncrypted,
    'KmsKeyId': obj.kmsKeyId,
    'DBClusterSnapshotArn': obj.dbClusterSnapshotArn,
    'SourceDBClusterSnapshotArn': obj.sourceDbClusterSnapshotArn,
    'IAMDatabaseAuthenticationEnabled': obj.iamDatabaseAuthenticationEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDbParameterGroup
 */
export interface NeptuneDbParameterGroup {
  /**
   * @schema NeptuneDbParameterGroup#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema NeptuneDbParameterGroup#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema NeptuneDbParameterGroup#Description
   */
  readonly description?: string;

  /**
   * @schema NeptuneDbParameterGroup#DBParameterGroupArn
   */
  readonly dbParameterGroupArn?: string;

}

/**
 * Converts an object of type 'NeptuneDbParameterGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbParameterGroup(obj: NeptuneDbParameterGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroupName': obj.dbParameterGroupName,
    'DBParameterGroupFamily': obj.dbParameterGroupFamily,
    'Description': obj.description,
    'DBParameterGroupArn': obj.dbParameterGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDbCluster
 */
export interface NeptuneDbCluster {
  /**
   * @schema NeptuneDbCluster#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema NeptuneDbCluster#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema NeptuneDbCluster#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema NeptuneDbCluster#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema NeptuneDbCluster#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema NeptuneDbCluster#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneDbCluster#DBClusterParameterGroup
   */
  readonly dbClusterParameterGroup?: string;

  /**
   * @schema NeptuneDbCluster#DBSubnetGroup
   */
  readonly dbSubnetGroup?: string;

  /**
   * @schema NeptuneDbCluster#Status
   */
  readonly status?: string;

  /**
   * @schema NeptuneDbCluster#PercentProgress
   */
  readonly percentProgress?: string;

  /**
   * @schema NeptuneDbCluster#EarliestRestorableTime
   */
  readonly earliestRestorableTime?: string;

  /**
   * @schema NeptuneDbCluster#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema NeptuneDbCluster#ReaderEndpoint
   */
  readonly readerEndpoint?: string;

  /**
   * @schema NeptuneDbCluster#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema NeptuneDbCluster#Engine
   */
  readonly engine?: string;

  /**
   * @schema NeptuneDbCluster#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptuneDbCluster#LatestRestorableTime
   */
  readonly latestRestorableTime?: string;

  /**
   * @schema NeptuneDbCluster#Port
   */
  readonly port?: number;

  /**
   * @schema NeptuneDbCluster#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema NeptuneDbCluster#DBClusterOptionGroupMemberships
   */
  readonly dbClusterOptionGroupMemberships?: NeptuneDbClusterOptionGroupStatus[];

  /**
   * @schema NeptuneDbCluster#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema NeptuneDbCluster#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema NeptuneDbCluster#ReplicationSourceIdentifier
   */
  readonly replicationSourceIdentifier?: string;

  /**
   * @schema NeptuneDbCluster#ReadReplicaIdentifiers
   */
  readonly readReplicaIdentifiers?: string[];

  /**
   * @schema NeptuneDbCluster#DBClusterMembers
   */
  readonly dbClusterMembers?: NeptuneDbClusterMember[];

  /**
   * @schema NeptuneDbCluster#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: NeptuneVpcSecurityGroupMembership[];

  /**
   * @schema NeptuneDbCluster#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema NeptuneDbCluster#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema NeptuneDbCluster#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema NeptuneDbCluster#DbClusterResourceId
   */
  readonly dbClusterResourceId?: string;

  /**
   * @schema NeptuneDbCluster#DBClusterArn
   */
  readonly dbClusterArn?: string;

  /**
   * @schema NeptuneDbCluster#AssociatedRoles
   */
  readonly associatedRoles?: NeptuneDbClusterRole[];

  /**
   * @schema NeptuneDbCluster#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @schema NeptuneDbCluster#CloneGroupId
   */
  readonly cloneGroupId?: string;

  /**
   * @schema NeptuneDbCluster#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema NeptuneDbCluster#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema NeptuneDbCluster#EnabledCloudwatchLogsExports
   */
  readonly enabledCloudwatchLogsExports?: string[];

  /**
   * @schema NeptuneDbCluster#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema NeptuneDbCluster#CrossAccountClone
   */
  readonly crossAccountClone?: boolean;

  /**
   * @schema NeptuneDbCluster#AutomaticRestartTime
   */
  readonly automaticRestartTime?: string;

}

/**
 * Converts an object of type 'NeptuneDbCluster' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbCluster(obj: NeptuneDbCluster | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AllocatedStorage': obj.allocatedStorage,
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'BackupRetentionPeriod': obj.backupRetentionPeriod,
    'CharacterSetName': obj.characterSetName,
    'DatabaseName': obj.databaseName,
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'DBClusterParameterGroup': obj.dbClusterParameterGroup,
    'DBSubnetGroup': obj.dbSubnetGroup,
    'Status': obj.status,
    'PercentProgress': obj.percentProgress,
    'EarliestRestorableTime': obj.earliestRestorableTime,
    'Endpoint': obj.endpoint,
    'ReaderEndpoint': obj.readerEndpoint,
    'MultiAZ': obj.multiAz,
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'LatestRestorableTime': obj.latestRestorableTime,
    'Port': obj.port,
    'MasterUsername': obj.masterUsername,
    'DBClusterOptionGroupMemberships': obj.dbClusterOptionGroupMemberships?.map(y => toJson_NeptuneDbClusterOptionGroupStatus(y)),
    'PreferredBackupWindow': obj.preferredBackupWindow,
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'ReplicationSourceIdentifier': obj.replicationSourceIdentifier,
    'ReadReplicaIdentifiers': obj.readReplicaIdentifiers?.map(y => y),
    'DBClusterMembers': obj.dbClusterMembers?.map(y => toJson_NeptuneDbClusterMember(y)),
    'VpcSecurityGroups': obj.vpcSecurityGroups?.map(y => toJson_NeptuneVpcSecurityGroupMembership(y)),
    'HostedZoneId': obj.hostedZoneId,
    'StorageEncrypted': obj.storageEncrypted,
    'KmsKeyId': obj.kmsKeyId,
    'DbClusterResourceId': obj.dbClusterResourceId,
    'DBClusterArn': obj.dbClusterArn,
    'AssociatedRoles': obj.associatedRoles?.map(y => toJson_NeptuneDbClusterRole(y)),
    'IAMDatabaseAuthenticationEnabled': obj.iamDatabaseAuthenticationEnabled,
    'CloneGroupId': obj.cloneGroupId,
    'ClusterCreateTime': obj.clusterCreateTime,
    'CopyTagsToSnapshot': obj.copyTagsToSnapshot,
    'EnabledCloudwatchLogsExports': obj.enabledCloudwatchLogsExports?.map(y => y),
    'DeletionProtection': obj.deletionProtection,
    'CrossAccountClone': obj.crossAccountClone,
    'AutomaticRestartTime': obj.automaticRestartTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDbInstance
 */
export interface NeptuneDbInstance {
  /**
   * @schema NeptuneDbInstance#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema NeptuneDbInstance#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema NeptuneDbInstance#Engine
   */
  readonly engine?: string;

  /**
   * @schema NeptuneDbInstance#DBInstanceStatus
   */
  readonly dbInstanceStatus?: string;

  /**
   * @schema NeptuneDbInstance#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema NeptuneDbInstance#DBName
   */
  readonly dbName?: string;

  /**
   * @schema NeptuneDbInstance#Endpoint
   */
  readonly endpoint?: NeptuneEndpoint;

  /**
   * @schema NeptuneDbInstance#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema NeptuneDbInstance#InstanceCreateTime
   */
  readonly instanceCreateTime?: string;

  /**
   * @schema NeptuneDbInstance#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema NeptuneDbInstance#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema NeptuneDbInstance#DBSecurityGroups
   */
  readonly dbSecurityGroups?: NeptuneDbSecurityGroupMembership[];

  /**
   * @schema NeptuneDbInstance#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: NeptuneVpcSecurityGroupMembership[];

  /**
   * @schema NeptuneDbInstance#DBParameterGroups
   */
  readonly dbParameterGroups?: NeptuneDbParameterGroupStatus[];

  /**
   * @schema NeptuneDbInstance#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema NeptuneDbInstance#DBSubnetGroup
   */
  readonly dbSubnetGroup?: NeptuneDbSubnetGroup;

  /**
   * @schema NeptuneDbInstance#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema NeptuneDbInstance#PendingModifiedValues
   */
  readonly pendingModifiedValues?: NeptunePendingModifiedValues;

  /**
   * @schema NeptuneDbInstance#LatestRestorableTime
   */
  readonly latestRestorableTime?: string;

  /**
   * @schema NeptuneDbInstance#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema NeptuneDbInstance#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptuneDbInstance#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema NeptuneDbInstance#ReadReplicaSourceDBInstanceIdentifier
   */
  readonly readReplicaSourceDbInstanceIdentifier?: string;

  /**
   * @schema NeptuneDbInstance#ReadReplicaDBInstanceIdentifiers
   */
  readonly readReplicaDbInstanceIdentifiers?: string[];

  /**
   * @schema NeptuneDbInstance#ReadReplicaDBClusterIdentifiers
   */
  readonly readReplicaDbClusterIdentifiers?: string[];

  /**
   * @schema NeptuneDbInstance#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema NeptuneDbInstance#Iops
   */
  readonly iops?: number;

  /**
   * @schema NeptuneDbInstance#OptionGroupMemberships
   */
  readonly optionGroupMemberships?: NeptuneOptionGroupMembership[];

  /**
   * @schema NeptuneDbInstance#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema NeptuneDbInstance#SecondaryAvailabilityZone
   */
  readonly secondaryAvailabilityZone?: string;

  /**
   * @schema NeptuneDbInstance#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema NeptuneDbInstance#StatusInfos
   */
  readonly statusInfos?: NeptuneDbInstanceStatusInfo[];

  /**
   * @schema NeptuneDbInstance#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema NeptuneDbInstance#TdeCredentialArn
   */
  readonly tdeCredentialArn?: string;

  /**
   * @schema NeptuneDbInstance#DbInstancePort
   */
  readonly dbInstancePort?: number;

  /**
   * @schema NeptuneDbInstance#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneDbInstance#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema NeptuneDbInstance#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema NeptuneDbInstance#DbiResourceId
   */
  readonly dbiResourceId?: string;

  /**
   * @schema NeptuneDbInstance#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema NeptuneDbInstance#DomainMemberships
   */
  readonly domainMemberships?: NeptuneDomainMembership[];

  /**
   * @schema NeptuneDbInstance#CopyTagsToSnapshot
   */
  readonly copyTagsToSnapshot?: boolean;

  /**
   * @schema NeptuneDbInstance#MonitoringInterval
   */
  readonly monitoringInterval?: number;

  /**
   * @schema NeptuneDbInstance#EnhancedMonitoringResourceArn
   */
  readonly enhancedMonitoringResourceArn?: string;

  /**
   * @schema NeptuneDbInstance#MonitoringRoleArn
   */
  readonly monitoringRoleArn?: string;

  /**
   * @schema NeptuneDbInstance#PromotionTier
   */
  readonly promotionTier?: number;

  /**
   * @schema NeptuneDbInstance#DBInstanceArn
   */
  readonly dbInstanceArn?: string;

  /**
   * @schema NeptuneDbInstance#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema NeptuneDbInstance#IAMDatabaseAuthenticationEnabled
   */
  readonly iamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @schema NeptuneDbInstance#PerformanceInsightsEnabled
   */
  readonly performanceInsightsEnabled?: boolean;

  /**
   * @schema NeptuneDbInstance#PerformanceInsightsKMSKeyId
   */
  readonly performanceInsightsKmsKeyId?: string;

  /**
   * @schema NeptuneDbInstance#EnabledCloudwatchLogsExports
   */
  readonly enabledCloudwatchLogsExports?: string[];

  /**
   * @schema NeptuneDbInstance#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * Converts an object of type 'NeptuneDbInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbInstance(obj: NeptuneDbInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'DBInstanceClass': obj.dbInstanceClass,
    'Engine': obj.engine,
    'DBInstanceStatus': obj.dbInstanceStatus,
    'MasterUsername': obj.masterUsername,
    'DBName': obj.dbName,
    'Endpoint': toJson_NeptuneEndpoint(obj.endpoint),
    'AllocatedStorage': obj.allocatedStorage,
    'InstanceCreateTime': obj.instanceCreateTime,
    'PreferredBackupWindow': obj.preferredBackupWindow,
    'BackupRetentionPeriod': obj.backupRetentionPeriod,
    'DBSecurityGroups': obj.dbSecurityGroups?.map(y => toJson_NeptuneDbSecurityGroupMembership(y)),
    'VpcSecurityGroups': obj.vpcSecurityGroups?.map(y => toJson_NeptuneVpcSecurityGroupMembership(y)),
    'DBParameterGroups': obj.dbParameterGroups?.map(y => toJson_NeptuneDbParameterGroupStatus(y)),
    'AvailabilityZone': obj.availabilityZone,
    'DBSubnetGroup': toJson_NeptuneDbSubnetGroup(obj.dbSubnetGroup),
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'PendingModifiedValues': toJson_NeptunePendingModifiedValues(obj.pendingModifiedValues),
    'LatestRestorableTime': obj.latestRestorableTime,
    'MultiAZ': obj.multiAz,
    'EngineVersion': obj.engineVersion,
    'AutoMinorVersionUpgrade': obj.autoMinorVersionUpgrade,
    'ReadReplicaSourceDBInstanceIdentifier': obj.readReplicaSourceDbInstanceIdentifier,
    'ReadReplicaDBInstanceIdentifiers': obj.readReplicaDbInstanceIdentifiers?.map(y => y),
    'ReadReplicaDBClusterIdentifiers': obj.readReplicaDbClusterIdentifiers?.map(y => y),
    'LicenseModel': obj.licenseModel,
    'Iops': obj.iops,
    'OptionGroupMemberships': obj.optionGroupMemberships?.map(y => toJson_NeptuneOptionGroupMembership(y)),
    'CharacterSetName': obj.characterSetName,
    'SecondaryAvailabilityZone': obj.secondaryAvailabilityZone,
    'PubliclyAccessible': obj.publiclyAccessible,
    'StatusInfos': obj.statusInfos?.map(y => toJson_NeptuneDbInstanceStatusInfo(y)),
    'StorageType': obj.storageType,
    'TdeCredentialArn': obj.tdeCredentialArn,
    'DbInstancePort': obj.dbInstancePort,
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'StorageEncrypted': obj.storageEncrypted,
    'KmsKeyId': obj.kmsKeyId,
    'DbiResourceId': obj.dbiResourceId,
    'CACertificateIdentifier': obj.caCertificateIdentifier,
    'DomainMemberships': obj.domainMemberships?.map(y => toJson_NeptuneDomainMembership(y)),
    'CopyTagsToSnapshot': obj.copyTagsToSnapshot,
    'MonitoringInterval': obj.monitoringInterval,
    'EnhancedMonitoringResourceArn': obj.enhancedMonitoringResourceArn,
    'MonitoringRoleArn': obj.monitoringRoleArn,
    'PromotionTier': obj.promotionTier,
    'DBInstanceArn': obj.dbInstanceArn,
    'Timezone': obj.timezone,
    'IAMDatabaseAuthenticationEnabled': obj.iamDatabaseAuthenticationEnabled,
    'PerformanceInsightsEnabled': obj.performanceInsightsEnabled,
    'PerformanceInsightsKMSKeyId': obj.performanceInsightsKmsKeyId,
    'EnabledCloudwatchLogsExports': obj.enabledCloudwatchLogsExports?.map(y => y),
    'DeletionProtection': obj.deletionProtection,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDbSubnetGroup
 */
export interface NeptuneDbSubnetGroup {
  /**
   * @schema NeptuneDbSubnetGroup#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema NeptuneDbSubnetGroup#DBSubnetGroupDescription
   */
  readonly dbSubnetGroupDescription?: string;

  /**
   * @schema NeptuneDbSubnetGroup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema NeptuneDbSubnetGroup#SubnetGroupStatus
   */
  readonly subnetGroupStatus?: string;

  /**
   * @schema NeptuneDbSubnetGroup#Subnets
   */
  readonly subnets?: NeptuneSubnet[];

  /**
   * @schema NeptuneDbSubnetGroup#DBSubnetGroupArn
   */
  readonly dbSubnetGroupArn?: string;

}

/**
 * Converts an object of type 'NeptuneDbSubnetGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbSubnetGroup(obj: NeptuneDbSubnetGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSubnetGroupName': obj.dbSubnetGroupName,
    'DBSubnetGroupDescription': obj.dbSubnetGroupDescription,
    'VpcId': obj.vpcId,
    'SubnetGroupStatus': obj.subnetGroupStatus,
    'Subnets': obj.subnets?.map(y => toJson_NeptuneSubnet(y)),
    'DBSubnetGroupArn': obj.dbSubnetGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneFilter
 */
export interface NeptuneFilter {
  /**
   * @schema NeptuneFilter#Name
   */
  readonly name?: string;

  /**
   * @schema NeptuneFilter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'NeptuneFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneFilter(obj: NeptuneFilter | undefined): Record<string, any> | undefined {
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
 * @schema NeptuneDbClusterEndpoint
 */
export interface NeptuneDbClusterEndpoint {
  /**
   * @schema NeptuneDbClusterEndpoint#DBClusterEndpointIdentifier
   */
  readonly dbClusterEndpointIdentifier?: string;

  /**
   * @schema NeptuneDbClusterEndpoint#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema NeptuneDbClusterEndpoint#DBClusterEndpointResourceIdentifier
   */
  readonly dbClusterEndpointResourceIdentifier?: string;

  /**
   * @schema NeptuneDbClusterEndpoint#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema NeptuneDbClusterEndpoint#Status
   */
  readonly status?: string;

  /**
   * @schema NeptuneDbClusterEndpoint#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema NeptuneDbClusterEndpoint#CustomEndpointType
   */
  readonly customEndpointType?: string;

  /**
   * @schema NeptuneDbClusterEndpoint#StaticMembers
   */
  readonly staticMembers?: string[];

  /**
   * @schema NeptuneDbClusterEndpoint#ExcludedMembers
   */
  readonly excludedMembers?: string[];

  /**
   * @schema NeptuneDbClusterEndpoint#DBClusterEndpointArn
   */
  readonly dbClusterEndpointArn?: string;

}

/**
 * Converts an object of type 'NeptuneDbClusterEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbClusterEndpoint(obj: NeptuneDbClusterEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterEndpointIdentifier': obj.dbClusterEndpointIdentifier,
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'DBClusterEndpointResourceIdentifier': obj.dbClusterEndpointResourceIdentifier,
    'Endpoint': obj.endpoint,
    'Status': obj.status,
    'EndpointType': obj.endpointType,
    'CustomEndpointType': obj.customEndpointType,
    'StaticMembers': obj.staticMembers?.map(y => y),
    'ExcludedMembers': obj.excludedMembers?.map(y => y),
    'DBClusterEndpointArn': obj.dbClusterEndpointArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneParameter
 */
export interface NeptuneParameter {
  /**
   * @schema NeptuneParameter#ParameterName
   */
  readonly parameterName?: string;

  /**
   * @schema NeptuneParameter#ParameterValue
   */
  readonly parameterValue?: string;

  /**
   * @schema NeptuneParameter#Description
   */
  readonly description?: string;

  /**
   * @schema NeptuneParameter#Source
   */
  readonly source?: string;

  /**
   * @schema NeptuneParameter#ApplyType
   */
  readonly applyType?: string;

  /**
   * @schema NeptuneParameter#DataType
   */
  readonly dataType?: string;

  /**
   * @schema NeptuneParameter#AllowedValues
   */
  readonly allowedValues?: string;

  /**
   * @schema NeptuneParameter#IsModifiable
   */
  readonly isModifiable?: boolean;

  /**
   * @schema NeptuneParameter#MinimumEngineVersion
   */
  readonly minimumEngineVersion?: string;

  /**
   * @schema NeptuneParameter#ApplyMethod
   */
  readonly applyMethod?: string;

}

/**
 * Converts an object of type 'NeptuneParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneParameter(obj: NeptuneParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterName': obj.parameterName,
    'ParameterValue': obj.parameterValue,
    'Description': obj.description,
    'Source': obj.source,
    'ApplyType': obj.applyType,
    'DataType': obj.dataType,
    'AllowedValues': obj.allowedValues,
    'IsModifiable': obj.isModifiable,
    'MinimumEngineVersion': obj.minimumEngineVersion,
    'ApplyMethod': obj.applyMethod,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDbClusterSnapshotAttributesResult
 */
export interface NeptuneDbClusterSnapshotAttributesResult {
  /**
   * @schema NeptuneDbClusterSnapshotAttributesResult#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema NeptuneDbClusterSnapshotAttributesResult#DBClusterSnapshotAttributes
   */
  readonly dbClusterSnapshotAttributes?: NeptuneDbClusterSnapshotAttribute[];

}

/**
 * Converts an object of type 'NeptuneDbClusterSnapshotAttributesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbClusterSnapshotAttributesResult(obj: NeptuneDbClusterSnapshotAttributesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshotIdentifier': obj.dbClusterSnapshotIdentifier,
    'DBClusterSnapshotAttributes': obj.dbClusterSnapshotAttributes?.map(y => toJson_NeptuneDbClusterSnapshotAttribute(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDbEngineVersion
 */
export interface NeptuneDbEngineVersion {
  /**
   * @schema NeptuneDbEngineVersion#Engine
   */
  readonly engine?: string;

  /**
   * @schema NeptuneDbEngineVersion#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptuneDbEngineVersion#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema NeptuneDbEngineVersion#DBEngineDescription
   */
  readonly dbEngineDescription?: string;

  /**
   * @schema NeptuneDbEngineVersion#DBEngineVersionDescription
   */
  readonly dbEngineVersionDescription?: string;

  /**
   * @schema NeptuneDbEngineVersion#DefaultCharacterSet
   */
  readonly defaultCharacterSet?: NeptuneCharacterSet;

  /**
   * @schema NeptuneDbEngineVersion#SupportedCharacterSets
   */
  readonly supportedCharacterSets?: NeptuneCharacterSet[];

  /**
   * @schema NeptuneDbEngineVersion#ValidUpgradeTarget
   */
  readonly validUpgradeTarget?: NeptuneUpgradeTarget[];

  /**
   * @schema NeptuneDbEngineVersion#SupportedTimezones
   */
  readonly supportedTimezones?: NeptuneTimezone[];

  /**
   * @schema NeptuneDbEngineVersion#ExportableLogTypes
   */
  readonly exportableLogTypes?: string[];

  /**
   * @schema NeptuneDbEngineVersion#SupportsLogExportsToCloudwatchLogs
   */
  readonly supportsLogExportsToCloudwatchLogs?: boolean;

  /**
   * @schema NeptuneDbEngineVersion#SupportsReadReplica
   */
  readonly supportsReadReplica?: boolean;

}

/**
 * Converts an object of type 'NeptuneDbEngineVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbEngineVersion(obj: NeptuneDbEngineVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'DBParameterGroupFamily': obj.dbParameterGroupFamily,
    'DBEngineDescription': obj.dbEngineDescription,
    'DBEngineVersionDescription': obj.dbEngineVersionDescription,
    'DefaultCharacterSet': toJson_NeptuneCharacterSet(obj.defaultCharacterSet),
    'SupportedCharacterSets': obj.supportedCharacterSets?.map(y => toJson_NeptuneCharacterSet(y)),
    'ValidUpgradeTarget': obj.validUpgradeTarget?.map(y => toJson_NeptuneUpgradeTarget(y)),
    'SupportedTimezones': obj.supportedTimezones?.map(y => toJson_NeptuneTimezone(y)),
    'ExportableLogTypes': obj.exportableLogTypes?.map(y => y),
    'SupportsLogExportsToCloudwatchLogs': obj.supportsLogExportsToCloudwatchLogs,
    'SupportsReadReplica': obj.supportsReadReplica,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneEngineDefaults
 */
export interface NeptuneEngineDefaults {
  /**
   * @schema NeptuneEngineDefaults#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema NeptuneEngineDefaults#Marker
   */
  readonly marker?: string;

  /**
   * @schema NeptuneEngineDefaults#Parameters
   */
  readonly parameters?: NeptuneParameter[];

}

/**
 * Converts an object of type 'NeptuneEngineDefaults' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneEngineDefaults(obj: NeptuneEngineDefaults | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroupFamily': obj.dbParameterGroupFamily,
    'Marker': obj.marker,
    'Parameters': obj.parameters?.map(y => toJson_NeptuneParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneEventCategoriesMap
 */
export interface NeptuneEventCategoriesMap {
  /**
   * @schema NeptuneEventCategoriesMap#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema NeptuneEventCategoriesMap#EventCategories
   */
  readonly eventCategories?: string[];

}

/**
 * Converts an object of type 'NeptuneEventCategoriesMap' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneEventCategoriesMap(obj: NeptuneEventCategoriesMap | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceType': obj.sourceType,
    'EventCategories': obj.eventCategories?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneEvent
 */
export interface NeptuneEvent {
  /**
   * @schema NeptuneEvent#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

  /**
   * @schema NeptuneEvent#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema NeptuneEvent#Message
   */
  readonly message?: string;

  /**
   * @schema NeptuneEvent#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema NeptuneEvent#Date
   */
  readonly date?: string;

  /**
   * @schema NeptuneEvent#SourceArn
   */
  readonly sourceArn?: string;

}

/**
 * Converts an object of type 'NeptuneEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneEvent(obj: NeptuneEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceIdentifier': obj.sourceIdentifier,
    'SourceType': obj.sourceType,
    'Message': obj.message,
    'EventCategories': obj.eventCategories?.map(y => y),
    'Date': obj.date,
    'SourceArn': obj.sourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneOrderableDbInstanceOption
 */
export interface NeptuneOrderableDbInstanceOption {
  /**
   * @schema NeptuneOrderableDbInstanceOption#Engine
   */
  readonly engine?: string;

  /**
   * @schema NeptuneOrderableDbInstanceOption#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptuneOrderableDbInstanceOption#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema NeptuneOrderableDbInstanceOption#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema NeptuneOrderableDbInstanceOption#AvailabilityZones
   */
  readonly availabilityZones?: NeptuneAvailabilityZone[];

  /**
   * @schema NeptuneOrderableDbInstanceOption#MultiAZCapable
   */
  readonly multiAzCapable?: boolean;

  /**
   * @schema NeptuneOrderableDbInstanceOption#ReadReplicaCapable
   */
  readonly readReplicaCapable?: boolean;

  /**
   * @schema NeptuneOrderableDbInstanceOption#Vpc
   */
  readonly vpc?: boolean;

  /**
   * @schema NeptuneOrderableDbInstanceOption#SupportsStorageEncryption
   */
  readonly supportsStorageEncryption?: boolean;

  /**
   * @schema NeptuneOrderableDbInstanceOption#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema NeptuneOrderableDbInstanceOption#SupportsIops
   */
  readonly supportsIops?: boolean;

  /**
   * @schema NeptuneOrderableDbInstanceOption#SupportsEnhancedMonitoring
   */
  readonly supportsEnhancedMonitoring?: boolean;

  /**
   * @schema NeptuneOrderableDbInstanceOption#SupportsIAMDatabaseAuthentication
   */
  readonly supportsIamDatabaseAuthentication?: boolean;

  /**
   * @schema NeptuneOrderableDbInstanceOption#SupportsPerformanceInsights
   */
  readonly supportsPerformanceInsights?: boolean;

  /**
   * @schema NeptuneOrderableDbInstanceOption#MinStorageSize
   */
  readonly minStorageSize?: number;

  /**
   * @schema NeptuneOrderableDbInstanceOption#MaxStorageSize
   */
  readonly maxStorageSize?: number;

  /**
   * @schema NeptuneOrderableDbInstanceOption#MinIopsPerDbInstance
   */
  readonly minIopsPerDbInstance?: number;

  /**
   * @schema NeptuneOrderableDbInstanceOption#MaxIopsPerDbInstance
   */
  readonly maxIopsPerDbInstance?: number;

  /**
   * @schema NeptuneOrderableDbInstanceOption#MinIopsPerGib
   */
  readonly minIopsPerGib?: number;

  /**
   * @schema NeptuneOrderableDbInstanceOption#MaxIopsPerGib
   */
  readonly maxIopsPerGib?: number;

}

/**
 * Converts an object of type 'NeptuneOrderableDbInstanceOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneOrderableDbInstanceOption(obj: NeptuneOrderableDbInstanceOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'DBInstanceClass': obj.dbInstanceClass,
    'LicenseModel': obj.licenseModel,
    'AvailabilityZones': obj.availabilityZones?.map(y => toJson_NeptuneAvailabilityZone(y)),
    'MultiAZCapable': obj.multiAzCapable,
    'ReadReplicaCapable': obj.readReplicaCapable,
    'Vpc': obj.vpc,
    'SupportsStorageEncryption': obj.supportsStorageEncryption,
    'StorageType': obj.storageType,
    'SupportsIops': obj.supportsIops,
    'SupportsEnhancedMonitoring': obj.supportsEnhancedMonitoring,
    'SupportsIAMDatabaseAuthentication': obj.supportsIamDatabaseAuthentication,
    'SupportsPerformanceInsights': obj.supportsPerformanceInsights,
    'MinStorageSize': obj.minStorageSize,
    'MaxStorageSize': obj.maxStorageSize,
    'MinIopsPerDbInstance': obj.minIopsPerDbInstance,
    'MaxIopsPerDbInstance': obj.maxIopsPerDbInstance,
    'MinIopsPerGib': obj.minIopsPerGib,
    'MaxIopsPerGib': obj.maxIopsPerGib,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneValidDbInstanceModificationsMessage
 */
export interface NeptuneValidDbInstanceModificationsMessage {
  /**
   * @schema NeptuneValidDbInstanceModificationsMessage#Storage
   */
  readonly storage?: NeptuneValidStorageOptions[];

}

/**
 * Converts an object of type 'NeptuneValidDbInstanceModificationsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneValidDbInstanceModificationsMessage(obj: NeptuneValidDbInstanceModificationsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Storage': obj.storage?.map(y => toJson_NeptuneValidStorageOptions(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneCloudwatchLogsExportConfiguration
 */
export interface NeptuneCloudwatchLogsExportConfiguration {
  /**
   * @schema NeptuneCloudwatchLogsExportConfiguration#EnableLogTypes
   */
  readonly enableLogTypes?: string[];

  /**
   * @schema NeptuneCloudwatchLogsExportConfiguration#DisableLogTypes
   */
  readonly disableLogTypes?: string[];

}

/**
 * Converts an object of type 'NeptuneCloudwatchLogsExportConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneCloudwatchLogsExportConfiguration(obj: NeptuneCloudwatchLogsExportConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnableLogTypes': obj.enableLogTypes?.map(y => y),
    'DisableLogTypes': obj.disableLogTypes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptunePendingMaintenanceAction
 */
export interface NeptunePendingMaintenanceAction {
  /**
   * @schema NeptunePendingMaintenanceAction#Action
   */
  readonly action?: string;

  /**
   * @schema NeptunePendingMaintenanceAction#AutoAppliedAfterDate
   */
  readonly autoAppliedAfterDate?: string;

  /**
   * @schema NeptunePendingMaintenanceAction#ForcedApplyDate
   */
  readonly forcedApplyDate?: string;

  /**
   * @schema NeptunePendingMaintenanceAction#OptInStatus
   */
  readonly optInStatus?: string;

  /**
   * @schema NeptunePendingMaintenanceAction#CurrentApplyDate
   */
  readonly currentApplyDate?: string;

  /**
   * @schema NeptunePendingMaintenanceAction#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'NeptunePendingMaintenanceAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptunePendingMaintenanceAction(obj: NeptunePendingMaintenanceAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'AutoAppliedAfterDate': obj.autoAppliedAfterDate,
    'ForcedApplyDate': obj.forcedApplyDate,
    'OptInStatus': obj.optInStatus,
    'CurrentApplyDate': obj.currentApplyDate,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDbClusterOptionGroupStatus
 */
export interface NeptuneDbClusterOptionGroupStatus {
  /**
   * @schema NeptuneDbClusterOptionGroupStatus#DBClusterOptionGroupName
   */
  readonly dbClusterOptionGroupName?: string;

  /**
   * @schema NeptuneDbClusterOptionGroupStatus#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'NeptuneDbClusterOptionGroupStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbClusterOptionGroupStatus(obj: NeptuneDbClusterOptionGroupStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterOptionGroupName': obj.dbClusterOptionGroupName,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDbClusterMember
 */
export interface NeptuneDbClusterMember {
  /**
   * @schema NeptuneDbClusterMember#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema NeptuneDbClusterMember#IsClusterWriter
   */
  readonly isClusterWriter?: boolean;

  /**
   * @schema NeptuneDbClusterMember#DBClusterParameterGroupStatus
   */
  readonly dbClusterParameterGroupStatus?: string;

  /**
   * @schema NeptuneDbClusterMember#PromotionTier
   */
  readonly promotionTier?: number;

}

/**
 * Converts an object of type 'NeptuneDbClusterMember' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbClusterMember(obj: NeptuneDbClusterMember | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'IsClusterWriter': obj.isClusterWriter,
    'DBClusterParameterGroupStatus': obj.dbClusterParameterGroupStatus,
    'PromotionTier': obj.promotionTier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneVpcSecurityGroupMembership
 */
export interface NeptuneVpcSecurityGroupMembership {
  /**
   * @schema NeptuneVpcSecurityGroupMembership#VpcSecurityGroupId
   */
  readonly vpcSecurityGroupId?: string;

  /**
   * @schema NeptuneVpcSecurityGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'NeptuneVpcSecurityGroupMembership' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneVpcSecurityGroupMembership(obj: NeptuneVpcSecurityGroupMembership | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VpcSecurityGroupId': obj.vpcSecurityGroupId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDbClusterRole
 */
export interface NeptuneDbClusterRole {
  /**
   * @schema NeptuneDbClusterRole#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema NeptuneDbClusterRole#Status
   */
  readonly status?: string;

  /**
   * @schema NeptuneDbClusterRole#FeatureName
   */
  readonly featureName?: string;

}

/**
 * Converts an object of type 'NeptuneDbClusterRole' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbClusterRole(obj: NeptuneDbClusterRole | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleArn': obj.roleArn,
    'Status': obj.status,
    'FeatureName': obj.featureName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneEndpoint
 */
export interface NeptuneEndpoint {
  /**
   * @schema NeptuneEndpoint#Address
   */
  readonly address?: string;

  /**
   * @schema NeptuneEndpoint#Port
   */
  readonly port?: number;

  /**
   * @schema NeptuneEndpoint#HostedZoneId
   */
  readonly hostedZoneId?: string;

}

/**
 * Converts an object of type 'NeptuneEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneEndpoint(obj: NeptuneEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Address': obj.address,
    'Port': obj.port,
    'HostedZoneId': obj.hostedZoneId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDbSecurityGroupMembership
 */
export interface NeptuneDbSecurityGroupMembership {
  /**
   * @schema NeptuneDbSecurityGroupMembership#DBSecurityGroupName
   */
  readonly dbSecurityGroupName?: string;

  /**
   * @schema NeptuneDbSecurityGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'NeptuneDbSecurityGroupMembership' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbSecurityGroupMembership(obj: NeptuneDbSecurityGroupMembership | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSecurityGroupName': obj.dbSecurityGroupName,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDbParameterGroupStatus
 */
export interface NeptuneDbParameterGroupStatus {
  /**
   * @schema NeptuneDbParameterGroupStatus#DBParameterGroupName
   */
  readonly dbParameterGroupName?: string;

  /**
   * @schema NeptuneDbParameterGroupStatus#ParameterApplyStatus
   */
  readonly parameterApplyStatus?: string;

}

/**
 * Converts an object of type 'NeptuneDbParameterGroupStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbParameterGroupStatus(obj: NeptuneDbParameterGroupStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroupName': obj.dbParameterGroupName,
    'ParameterApplyStatus': obj.parameterApplyStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptunePendingModifiedValues
 */
export interface NeptunePendingModifiedValues {
  /**
   * @schema NeptunePendingModifiedValues#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema NeptunePendingModifiedValues#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema NeptunePendingModifiedValues#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema NeptunePendingModifiedValues#Port
   */
  readonly port?: number;

  /**
   * @schema NeptunePendingModifiedValues#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema NeptunePendingModifiedValues#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema NeptunePendingModifiedValues#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptunePendingModifiedValues#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema NeptunePendingModifiedValues#Iops
   */
  readonly iops?: number;

  /**
   * @schema NeptunePendingModifiedValues#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema NeptunePendingModifiedValues#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema NeptunePendingModifiedValues#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema NeptunePendingModifiedValues#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema NeptunePendingModifiedValues#PendingCloudwatchLogsExports
   */
  readonly pendingCloudwatchLogsExports?: NeptunePendingCloudwatchLogsExports;

}

/**
 * Converts an object of type 'NeptunePendingModifiedValues' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptunePendingModifiedValues(obj: NeptunePendingModifiedValues | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceClass': obj.dbInstanceClass,
    'AllocatedStorage': obj.allocatedStorage,
    'MasterUserPassword': obj.masterUserPassword,
    'Port': obj.port,
    'BackupRetentionPeriod': obj.backupRetentionPeriod,
    'MultiAZ': obj.multiAz,
    'EngineVersion': obj.engineVersion,
    'LicenseModel': obj.licenseModel,
    'Iops': obj.iops,
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'StorageType': obj.storageType,
    'CACertificateIdentifier': obj.caCertificateIdentifier,
    'DBSubnetGroupName': obj.dbSubnetGroupName,
    'PendingCloudwatchLogsExports': toJson_NeptunePendingCloudwatchLogsExports(obj.pendingCloudwatchLogsExports),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneOptionGroupMembership
 */
export interface NeptuneOptionGroupMembership {
  /**
   * @schema NeptuneOptionGroupMembership#OptionGroupName
   */
  readonly optionGroupName?: string;

  /**
   * @schema NeptuneOptionGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'NeptuneOptionGroupMembership' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneOptionGroupMembership(obj: NeptuneOptionGroupMembership | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OptionGroupName': obj.optionGroupName,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDbInstanceStatusInfo
 */
export interface NeptuneDbInstanceStatusInfo {
  /**
   * @schema NeptuneDbInstanceStatusInfo#StatusType
   */
  readonly statusType?: string;

  /**
   * @schema NeptuneDbInstanceStatusInfo#Normal
   */
  readonly normal?: boolean;

  /**
   * @schema NeptuneDbInstanceStatusInfo#Status
   */
  readonly status?: string;

  /**
   * @schema NeptuneDbInstanceStatusInfo#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'NeptuneDbInstanceStatusInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbInstanceStatusInfo(obj: NeptuneDbInstanceStatusInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StatusType': obj.statusType,
    'Normal': obj.normal,
    'Status': obj.status,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDomainMembership
 */
export interface NeptuneDomainMembership {
  /**
   * @schema NeptuneDomainMembership#Domain
   */
  readonly domain?: string;

  /**
   * @schema NeptuneDomainMembership#Status
   */
  readonly status?: string;

  /**
   * @schema NeptuneDomainMembership#FQDN
   */
  readonly fqdn?: string;

  /**
   * @schema NeptuneDomainMembership#IAMRoleName
   */
  readonly iamRoleName?: string;

}

/**
 * Converts an object of type 'NeptuneDomainMembership' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDomainMembership(obj: NeptuneDomainMembership | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Domain': obj.domain,
    'Status': obj.status,
    'FQDN': obj.fqdn,
    'IAMRoleName': obj.iamRoleName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneSubnet
 */
export interface NeptuneSubnet {
  /**
   * @schema NeptuneSubnet#SubnetIdentifier
   */
  readonly subnetIdentifier?: string;

  /**
   * @schema NeptuneSubnet#SubnetAvailabilityZone
   */
  readonly subnetAvailabilityZone?: NeptuneAvailabilityZone;

  /**
   * @schema NeptuneSubnet#SubnetStatus
   */
  readonly subnetStatus?: string;

}

/**
 * Converts an object of type 'NeptuneSubnet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneSubnet(obj: NeptuneSubnet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetIdentifier': obj.subnetIdentifier,
    'SubnetAvailabilityZone': toJson_NeptuneAvailabilityZone(obj.subnetAvailabilityZone),
    'SubnetStatus': obj.subnetStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDbClusterSnapshotAttribute
 */
export interface NeptuneDbClusterSnapshotAttribute {
  /**
   * @schema NeptuneDbClusterSnapshotAttribute#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema NeptuneDbClusterSnapshotAttribute#AttributeValues
   */
  readonly attributeValues?: string[];

}

/**
 * Converts an object of type 'NeptuneDbClusterSnapshotAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDbClusterSnapshotAttribute(obj: NeptuneDbClusterSnapshotAttribute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttributeName': obj.attributeName,
    'AttributeValues': obj.attributeValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneCharacterSet
 */
export interface NeptuneCharacterSet {
  /**
   * @schema NeptuneCharacterSet#CharacterSetName
   */
  readonly characterSetName?: string;

  /**
   * @schema NeptuneCharacterSet#CharacterSetDescription
   */
  readonly characterSetDescription?: string;

}

/**
 * Converts an object of type 'NeptuneCharacterSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneCharacterSet(obj: NeptuneCharacterSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CharacterSetName': obj.characterSetName,
    'CharacterSetDescription': obj.characterSetDescription,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneUpgradeTarget
 */
export interface NeptuneUpgradeTarget {
  /**
   * @schema NeptuneUpgradeTarget#Engine
   */
  readonly engine?: string;

  /**
   * @schema NeptuneUpgradeTarget#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema NeptuneUpgradeTarget#Description
   */
  readonly description?: string;

  /**
   * @schema NeptuneUpgradeTarget#AutoUpgrade
   */
  readonly autoUpgrade?: boolean;

  /**
   * @schema NeptuneUpgradeTarget#IsMajorVersionUpgrade
   */
  readonly isMajorVersionUpgrade?: boolean;

}

/**
 * Converts an object of type 'NeptuneUpgradeTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneUpgradeTarget(obj: NeptuneUpgradeTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'Description': obj.description,
    'AutoUpgrade': obj.autoUpgrade,
    'IsMajorVersionUpgrade': obj.isMajorVersionUpgrade,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneTimezone
 */
export interface NeptuneTimezone {
  /**
   * @schema NeptuneTimezone#TimezoneName
   */
  readonly timezoneName?: string;

}

/**
 * Converts an object of type 'NeptuneTimezone' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneTimezone(obj: NeptuneTimezone | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TimezoneName': obj.timezoneName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneAvailabilityZone
 */
export interface NeptuneAvailabilityZone {
  /**
   * @schema NeptuneAvailabilityZone#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'NeptuneAvailabilityZone' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneAvailabilityZone(obj: NeptuneAvailabilityZone | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneValidStorageOptions
 */
export interface NeptuneValidStorageOptions {
  /**
   * @schema NeptuneValidStorageOptions#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema NeptuneValidStorageOptions#StorageSize
   */
  readonly storageSize?: NeptuneRange[];

  /**
   * @schema NeptuneValidStorageOptions#ProvisionedIops
   */
  readonly provisionedIops?: NeptuneRange[];

  /**
   * @schema NeptuneValidStorageOptions#IopsToStorageRatio
   */
  readonly iopsToStorageRatio?: NeptuneDoubleRange[];

}

/**
 * Converts an object of type 'NeptuneValidStorageOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneValidStorageOptions(obj: NeptuneValidStorageOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StorageType': obj.storageType,
    'StorageSize': obj.storageSize?.map(y => toJson_NeptuneRange(y)),
    'ProvisionedIops': obj.provisionedIops?.map(y => toJson_NeptuneRange(y)),
    'IopsToStorageRatio': obj.iopsToStorageRatio?.map(y => toJson_NeptuneDoubleRange(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptunePendingCloudwatchLogsExports
 */
export interface NeptunePendingCloudwatchLogsExports {
  /**
   * @schema NeptunePendingCloudwatchLogsExports#LogTypesToEnable
   */
  readonly logTypesToEnable?: string[];

  /**
   * @schema NeptunePendingCloudwatchLogsExports#LogTypesToDisable
   */
  readonly logTypesToDisable?: string[];

}

/**
 * Converts an object of type 'NeptunePendingCloudwatchLogsExports' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptunePendingCloudwatchLogsExports(obj: NeptunePendingCloudwatchLogsExports | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogTypesToEnable': obj.logTypesToEnable?.map(y => y),
    'LogTypesToDisable': obj.logTypesToDisable?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneRange
 */
export interface NeptuneRange {
  /**
   * @schema NeptuneRange#From
   */
  readonly from?: number;

  /**
   * @schema NeptuneRange#To
   */
  readonly to?: number;

  /**
   * @schema NeptuneRange#Step
   */
  readonly step?: number;

}

/**
 * Converts an object of type 'NeptuneRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneRange(obj: NeptuneRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'From': obj.from,
    'To': obj.to,
    'Step': obj.step,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NeptuneDoubleRange
 */
export interface NeptuneDoubleRange {
  /**
   * @schema NeptuneDoubleRange#From
   */
  readonly from?: number;

  /**
   * @schema NeptuneDoubleRange#To
   */
  readonly to?: number;

}

/**
 * Converts an object of type 'NeptuneDoubleRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NeptuneDoubleRange(obj: NeptuneDoubleRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'From': obj.from,
    'To': obj.to,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
