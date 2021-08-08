/**
 * @schema DocDbAddSourceIdentifierToSubscriptionMessage
 */
export interface DocDbAddSourceIdentifierToSubscriptionMessage {
  /**
   * @schema DocDbAddSourceIdentifierToSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

  /**
   * @schema DocDbAddSourceIdentifierToSubscriptionMessage#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

}

/**
 * Converts an object of type 'DocDbAddSourceIdentifierToSubscriptionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbAddSourceIdentifierToSubscriptionMessage(obj: DocDbAddSourceIdentifierToSubscriptionMessage | undefined): Record<string, any> | undefined {
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
 * @schema DocDbAddSourceIdentifierToSubscriptionResult
 */
export interface DocDbAddSourceIdentifierToSubscriptionResult {
  /**
   * @schema DocDbAddSourceIdentifierToSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: DocDbEventSubscription;

}

/**
 * Converts an object of type 'DocDbAddSourceIdentifierToSubscriptionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbAddSourceIdentifierToSubscriptionResult(obj: DocDbAddSourceIdentifierToSubscriptionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventSubscription': toJson_DocDbEventSubscription(obj.eventSubscription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbAddTagsToResourceMessage
 */
export interface DocDbAddTagsToResourceMessage {
  /**
   * @schema DocDbAddTagsToResourceMessage#ResourceName
   */
  readonly resourceName?: string;

  /**
   * @schema DocDbAddTagsToResourceMessage#Tags
   */
  readonly tags?: DocDbTag[];

}

/**
 * Converts an object of type 'DocDbAddTagsToResourceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbAddTagsToResourceMessage(obj: DocDbAddTagsToResourceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceName': obj.resourceName,
    'Tags': obj.tags?.map(y => toJson_DocDbTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbApplyPendingMaintenanceActionMessage
 */
export interface DocDbApplyPendingMaintenanceActionMessage {
  /**
   * @schema DocDbApplyPendingMaintenanceActionMessage#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema DocDbApplyPendingMaintenanceActionMessage#ApplyAction
   */
  readonly applyAction?: string;

  /**
   * @schema DocDbApplyPendingMaintenanceActionMessage#OptInType
   */
  readonly optInType?: string;

}

/**
 * Converts an object of type 'DocDbApplyPendingMaintenanceActionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbApplyPendingMaintenanceActionMessage(obj: DocDbApplyPendingMaintenanceActionMessage | undefined): Record<string, any> | undefined {
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
 * @schema DocDbApplyPendingMaintenanceActionResult
 */
export interface DocDbApplyPendingMaintenanceActionResult {
  /**
   * @schema DocDbApplyPendingMaintenanceActionResult#ResourcePendingMaintenanceActions
   */
  readonly resourcePendingMaintenanceActions?: DocDbResourcePendingMaintenanceActions;

}

/**
 * Converts an object of type 'DocDbApplyPendingMaintenanceActionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbApplyPendingMaintenanceActionResult(obj: DocDbApplyPendingMaintenanceActionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourcePendingMaintenanceActions': toJson_DocDbResourcePendingMaintenanceActions(obj.resourcePendingMaintenanceActions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbCopyDbClusterParameterGroupMessage
 */
export interface DocDbCopyDbClusterParameterGroupMessage {
  /**
   * @schema DocDbCopyDbClusterParameterGroupMessage#SourceDBClusterParameterGroupIdentifier
   */
  readonly sourceDbClusterParameterGroupIdentifier?: string;

  /**
   * @schema DocDbCopyDbClusterParameterGroupMessage#TargetDBClusterParameterGroupIdentifier
   */
  readonly targetDbClusterParameterGroupIdentifier?: string;

  /**
   * @schema DocDbCopyDbClusterParameterGroupMessage#TargetDBClusterParameterGroupDescription
   */
  readonly targetDbClusterParameterGroupDescription?: string;

  /**
   * @schema DocDbCopyDbClusterParameterGroupMessage#Tags
   */
  readonly tags?: DocDbTag[];

}

/**
 * Converts an object of type 'DocDbCopyDbClusterParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbCopyDbClusterParameterGroupMessage(obj: DocDbCopyDbClusterParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceDBClusterParameterGroupIdentifier': obj.sourceDbClusterParameterGroupIdentifier,
    'TargetDBClusterParameterGroupIdentifier': obj.targetDbClusterParameterGroupIdentifier,
    'TargetDBClusterParameterGroupDescription': obj.targetDbClusterParameterGroupDescription,
    'Tags': obj.tags?.map(y => toJson_DocDbTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbCopyDbClusterParameterGroupResult
 */
export interface DocDbCopyDbClusterParameterGroupResult {
  /**
   * @schema DocDbCopyDbClusterParameterGroupResult#DBClusterParameterGroup
   */
  readonly dbClusterParameterGroup?: DocDbdbClusterParameterGroup;

}

/**
 * Converts an object of type 'DocDbCopyDbClusterParameterGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbCopyDbClusterParameterGroupResult(obj: DocDbCopyDbClusterParameterGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroup': toJson_DocDbdbClusterParameterGroup(obj.dbClusterParameterGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbCopyDbClusterSnapshotMessage
 */
export interface DocDbCopyDbClusterSnapshotMessage {
  /**
   * @schema DocDbCopyDbClusterSnapshotMessage#SourceDBClusterSnapshotIdentifier
   */
  readonly sourceDbClusterSnapshotIdentifier?: string;

  /**
   * @schema DocDbCopyDbClusterSnapshotMessage#TargetDBClusterSnapshotIdentifier
   */
  readonly targetDbClusterSnapshotIdentifier?: string;

  /**
   * @schema DocDbCopyDbClusterSnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DocDbCopyDbClusterSnapshotMessage#PreSignedUrl
   */
  readonly preSignedUrl?: string;

  /**
   * @schema DocDbCopyDbClusterSnapshotMessage#CopyTags
   */
  readonly copyTags?: boolean;

  /**
   * @schema DocDbCopyDbClusterSnapshotMessage#Tags
   */
  readonly tags?: DocDbTag[];

}

/**
 * Converts an object of type 'DocDbCopyDbClusterSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbCopyDbClusterSnapshotMessage(obj: DocDbCopyDbClusterSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceDBClusterSnapshotIdentifier': obj.sourceDbClusterSnapshotIdentifier,
    'TargetDBClusterSnapshotIdentifier': obj.targetDbClusterSnapshotIdentifier,
    'KmsKeyId': obj.kmsKeyId,
    'PreSignedUrl': obj.preSignedUrl,
    'CopyTags': obj.copyTags,
    'Tags': obj.tags?.map(y => toJson_DocDbTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbCopyDbClusterSnapshotResult
 */
export interface DocDbCopyDbClusterSnapshotResult {
  /**
   * @schema DocDbCopyDbClusterSnapshotResult#DBClusterSnapshot
   */
  readonly dbClusterSnapshot?: DocDbdbClusterSnapshot;

}

/**
 * Converts an object of type 'DocDbCopyDbClusterSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbCopyDbClusterSnapshotResult(obj: DocDbCopyDbClusterSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshot': toJson_DocDbdbClusterSnapshot(obj.dbClusterSnapshot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbCreateDbClusterMessage
 */
export interface DocDbCreateDbClusterMessage {
  /**
   * @schema DocDbCreateDbClusterMessage#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema DocDbCreateDbClusterMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema DocDbCreateDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DocDbCreateDbClusterMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema DocDbCreateDbClusterMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema DocDbCreateDbClusterMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema DocDbCreateDbClusterMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema DocDbCreateDbClusterMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DocDbCreateDbClusterMessage#Port
   */
  readonly port?: number;

  /**
   * @schema DocDbCreateDbClusterMessage#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema DocDbCreateDbClusterMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema DocDbCreateDbClusterMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema DocDbCreateDbClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema DocDbCreateDbClusterMessage#Tags
   */
  readonly tags?: DocDbTag[];

  /**
   * @schema DocDbCreateDbClusterMessage#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema DocDbCreateDbClusterMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DocDbCreateDbClusterMessage#PreSignedUrl
   */
  readonly preSignedUrl?: string;

  /**
   * @schema DocDbCreateDbClusterMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema DocDbCreateDbClusterMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema DocDbCreateDbClusterMessage#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier?: string;

}

/**
 * Converts an object of type 'DocDbCreateDbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbCreateDbClusterMessage(obj: DocDbCreateDbClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'BackupRetentionPeriod': obj.backupRetentionPeriod,
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
    'VpcSecurityGroupIds': obj.vpcSecurityGroupIds?.map(y => y),
    'DBSubnetGroupName': obj.dbSubnetGroupName,
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'Port': obj.port,
    'MasterUsername': obj.masterUsername,
    'MasterUserPassword': obj.masterUserPassword,
    'PreferredBackupWindow': obj.preferredBackupWindow,
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'Tags': obj.tags?.map(y => toJson_DocDbTag(y)),
    'StorageEncrypted': obj.storageEncrypted,
    'KmsKeyId': obj.kmsKeyId,
    'PreSignedUrl': obj.preSignedUrl,
    'EnableCloudwatchLogsExports': obj.enableCloudwatchLogsExports?.map(y => y),
    'DeletionProtection': obj.deletionProtection,
    'GlobalClusterIdentifier': obj.globalClusterIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbCreateDbClusterResult
 */
export interface DocDbCreateDbClusterResult {
  /**
   * @schema DocDbCreateDbClusterResult#DBCluster
   */
  readonly dbCluster?: DocDbdbCluster;

}

/**
 * Converts an object of type 'DocDbCreateDbClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbCreateDbClusterResult(obj: DocDbCreateDbClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBCluster': toJson_DocDbdbCluster(obj.dbCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbCreateDbClusterParameterGroupMessage
 */
export interface DocDbCreateDbClusterParameterGroupMessage {
  /**
   * @schema DocDbCreateDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema DocDbCreateDbClusterParameterGroupMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema DocDbCreateDbClusterParameterGroupMessage#Description
   */
  readonly description?: string;

  /**
   * @schema DocDbCreateDbClusterParameterGroupMessage#Tags
   */
  readonly tags?: DocDbTag[];

}

/**
 * Converts an object of type 'DocDbCreateDbClusterParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbCreateDbClusterParameterGroupMessage(obj: DocDbCreateDbClusterParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
    'DBParameterGroupFamily': obj.dbParameterGroupFamily,
    'Description': obj.description,
    'Tags': obj.tags?.map(y => toJson_DocDbTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbCreateDbClusterParameterGroupResult
 */
export interface DocDbCreateDbClusterParameterGroupResult {
  /**
   * @schema DocDbCreateDbClusterParameterGroupResult#DBClusterParameterGroup
   */
  readonly dbClusterParameterGroup?: DocDbdbClusterParameterGroup;

}

/**
 * Converts an object of type 'DocDbCreateDbClusterParameterGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbCreateDbClusterParameterGroupResult(obj: DocDbCreateDbClusterParameterGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroup': toJson_DocDbdbClusterParameterGroup(obj.dbClusterParameterGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbCreateDbClusterSnapshotMessage
 */
export interface DocDbCreateDbClusterSnapshotMessage {
  /**
   * @schema DocDbCreateDbClusterSnapshotMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema DocDbCreateDbClusterSnapshotMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DocDbCreateDbClusterSnapshotMessage#Tags
   */
  readonly tags?: DocDbTag[];

}

/**
 * Converts an object of type 'DocDbCreateDbClusterSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbCreateDbClusterSnapshotMessage(obj: DocDbCreateDbClusterSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshotIdentifier': obj.dbClusterSnapshotIdentifier,
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'Tags': obj.tags?.map(y => toJson_DocDbTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbCreateDbClusterSnapshotResult
 */
export interface DocDbCreateDbClusterSnapshotResult {
  /**
   * @schema DocDbCreateDbClusterSnapshotResult#DBClusterSnapshot
   */
  readonly dbClusterSnapshot?: DocDbdbClusterSnapshot;

}

/**
 * Converts an object of type 'DocDbCreateDbClusterSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbCreateDbClusterSnapshotResult(obj: DocDbCreateDbClusterSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshot': toJson_DocDbdbClusterSnapshot(obj.dbClusterSnapshot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbCreateDbInstanceMessage
 */
export interface DocDbCreateDbInstanceMessage {
  /**
   * @schema DocDbCreateDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema DocDbCreateDbInstanceMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema DocDbCreateDbInstanceMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema DocDbCreateDbInstanceMessage#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema DocDbCreateDbInstanceMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema DocDbCreateDbInstanceMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema DocDbCreateDbInstanceMessage#Tags
   */
  readonly tags?: DocDbTag[];

  /**
   * @schema DocDbCreateDbInstanceMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DocDbCreateDbInstanceMessage#PromotionTier
   */
  readonly promotionTier?: number;

}

/**
 * Converts an object of type 'DocDbCreateDbInstanceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbCreateDbInstanceMessage(obj: DocDbCreateDbInstanceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'DBInstanceClass': obj.dbInstanceClass,
    'Engine': obj.engine,
    'AvailabilityZone': obj.availabilityZone,
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'AutoMinorVersionUpgrade': obj.autoMinorVersionUpgrade,
    'Tags': obj.tags?.map(y => toJson_DocDbTag(y)),
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'PromotionTier': obj.promotionTier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbCreateDbInstanceResult
 */
export interface DocDbCreateDbInstanceResult {
  /**
   * @schema DocDbCreateDbInstanceResult#DBInstance
   */
  readonly dbInstance?: DocDbdbInstance;

}

/**
 * Converts an object of type 'DocDbCreateDbInstanceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbCreateDbInstanceResult(obj: DocDbCreateDbInstanceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstance': toJson_DocDbdbInstance(obj.dbInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbCreateDbSubnetGroupMessage
 */
export interface DocDbCreateDbSubnetGroupMessage {
  /**
   * @schema DocDbCreateDbSubnetGroupMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema DocDbCreateDbSubnetGroupMessage#DBSubnetGroupDescription
   */
  readonly dbSubnetGroupDescription?: string;

  /**
   * @schema DocDbCreateDbSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema DocDbCreateDbSubnetGroupMessage#Tags
   */
  readonly tags?: DocDbTag[];

}

/**
 * Converts an object of type 'DocDbCreateDbSubnetGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbCreateDbSubnetGroupMessage(obj: DocDbCreateDbSubnetGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSubnetGroupName': obj.dbSubnetGroupName,
    'DBSubnetGroupDescription': obj.dbSubnetGroupDescription,
    'SubnetIds': obj.subnetIds?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_DocDbTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbCreateDbSubnetGroupResult
 */
export interface DocDbCreateDbSubnetGroupResult {
  /**
   * @schema DocDbCreateDbSubnetGroupResult#DBSubnetGroup
   */
  readonly dbSubnetGroup?: DocDbdbSubnetGroup;

}

/**
 * Converts an object of type 'DocDbCreateDbSubnetGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbCreateDbSubnetGroupResult(obj: DocDbCreateDbSubnetGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSubnetGroup': toJson_DocDbdbSubnetGroup(obj.dbSubnetGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbCreateEventSubscriptionMessage
 */
export interface DocDbCreateEventSubscriptionMessage {
  /**
   * @schema DocDbCreateEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

  /**
   * @schema DocDbCreateEventSubscriptionMessage#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema DocDbCreateEventSubscriptionMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema DocDbCreateEventSubscriptionMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema DocDbCreateEventSubscriptionMessage#SourceIds
   */
  readonly sourceIds?: string[];

  /**
   * @schema DocDbCreateEventSubscriptionMessage#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema DocDbCreateEventSubscriptionMessage#Tags
   */
  readonly tags?: DocDbTag[];

}

/**
 * Converts an object of type 'DocDbCreateEventSubscriptionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbCreateEventSubscriptionMessage(obj: DocDbCreateEventSubscriptionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionName': obj.subscriptionName,
    'SnsTopicArn': obj.snsTopicArn,
    'SourceType': obj.sourceType,
    'EventCategories': obj.eventCategories?.map(y => y),
    'SourceIds': obj.sourceIds?.map(y => y),
    'Enabled': obj.enabled,
    'Tags': obj.tags?.map(y => toJson_DocDbTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbCreateEventSubscriptionResult
 */
export interface DocDbCreateEventSubscriptionResult {
  /**
   * @schema DocDbCreateEventSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: DocDbEventSubscription;

}

/**
 * Converts an object of type 'DocDbCreateEventSubscriptionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbCreateEventSubscriptionResult(obj: DocDbCreateEventSubscriptionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventSubscription': toJson_DocDbEventSubscription(obj.eventSubscription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbCreateGlobalClusterMessage
 */
export interface DocDbCreateGlobalClusterMessage {
  /**
   * @schema DocDbCreateGlobalClusterMessage#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier?: string;

  /**
   * @schema DocDbCreateGlobalClusterMessage#SourceDBClusterIdentifier
   */
  readonly sourceDbClusterIdentifier?: string;

  /**
   * @schema DocDbCreateGlobalClusterMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema DocDbCreateGlobalClusterMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DocDbCreateGlobalClusterMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema DocDbCreateGlobalClusterMessage#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema DocDbCreateGlobalClusterMessage#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

}

/**
 * Converts an object of type 'DocDbCreateGlobalClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbCreateGlobalClusterMessage(obj: DocDbCreateGlobalClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalClusterIdentifier': obj.globalClusterIdentifier,
    'SourceDBClusterIdentifier': obj.sourceDbClusterIdentifier,
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'DeletionProtection': obj.deletionProtection,
    'DatabaseName': obj.databaseName,
    'StorageEncrypted': obj.storageEncrypted,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbCreateGlobalClusterResult
 */
export interface DocDbCreateGlobalClusterResult {
  /**
   * @schema DocDbCreateGlobalClusterResult#GlobalCluster
   */
  readonly globalCluster?: DocDbGlobalCluster;

}

/**
 * Converts an object of type 'DocDbCreateGlobalClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbCreateGlobalClusterResult(obj: DocDbCreateGlobalClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalCluster': toJson_DocDbGlobalCluster(obj.globalCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDeleteDbClusterMessage
 */
export interface DocDbDeleteDbClusterMessage {
  /**
   * @schema DocDbDeleteDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DocDbDeleteDbClusterMessage#SkipFinalSnapshot
   */
  readonly skipFinalSnapshot?: boolean;

  /**
   * @schema DocDbDeleteDbClusterMessage#FinalDBSnapshotIdentifier
   */
  readonly finalDbSnapshotIdentifier?: string;

}

/**
 * Converts an object of type 'DocDbDeleteDbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDeleteDbClusterMessage(obj: DocDbDeleteDbClusterMessage | undefined): Record<string, any> | undefined {
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
 * @schema DocDbDeleteDbClusterResult
 */
export interface DocDbDeleteDbClusterResult {
  /**
   * @schema DocDbDeleteDbClusterResult#DBCluster
   */
  readonly dbCluster?: DocDbdbCluster;

}

/**
 * Converts an object of type 'DocDbDeleteDbClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDeleteDbClusterResult(obj: DocDbDeleteDbClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBCluster': toJson_DocDbdbCluster(obj.dbCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDeleteDbClusterParameterGroupMessage
 */
export interface DocDbDeleteDbClusterParameterGroupMessage {
  /**
   * @schema DocDbDeleteDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

}

/**
 * Converts an object of type 'DocDbDeleteDbClusterParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDeleteDbClusterParameterGroupMessage(obj: DocDbDeleteDbClusterParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDeleteDbClusterSnapshotMessage
 */
export interface DocDbDeleteDbClusterSnapshotMessage {
  /**
   * @schema DocDbDeleteDbClusterSnapshotMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

}

/**
 * Converts an object of type 'DocDbDeleteDbClusterSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDeleteDbClusterSnapshotMessage(obj: DocDbDeleteDbClusterSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshotIdentifier': obj.dbClusterSnapshotIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDeleteDbClusterSnapshotResult
 */
export interface DocDbDeleteDbClusterSnapshotResult {
  /**
   * @schema DocDbDeleteDbClusterSnapshotResult#DBClusterSnapshot
   */
  readonly dbClusterSnapshot?: DocDbdbClusterSnapshot;

}

/**
 * Converts an object of type 'DocDbDeleteDbClusterSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDeleteDbClusterSnapshotResult(obj: DocDbDeleteDbClusterSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshot': toJson_DocDbdbClusterSnapshot(obj.dbClusterSnapshot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDeleteDbInstanceMessage
 */
export interface DocDbDeleteDbInstanceMessage {
  /**
   * @schema DocDbDeleteDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

}

/**
 * Converts an object of type 'DocDbDeleteDbInstanceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDeleteDbInstanceMessage(obj: DocDbDeleteDbInstanceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDeleteDbInstanceResult
 */
export interface DocDbDeleteDbInstanceResult {
  /**
   * @schema DocDbDeleteDbInstanceResult#DBInstance
   */
  readonly dbInstance?: DocDbdbInstance;

}

/**
 * Converts an object of type 'DocDbDeleteDbInstanceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDeleteDbInstanceResult(obj: DocDbDeleteDbInstanceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstance': toJson_DocDbdbInstance(obj.dbInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDeleteDbSubnetGroupMessage
 */
export interface DocDbDeleteDbSubnetGroupMessage {
  /**
   * @schema DocDbDeleteDbSubnetGroupMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

}

/**
 * Converts an object of type 'DocDbDeleteDbSubnetGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDeleteDbSubnetGroupMessage(obj: DocDbDeleteDbSubnetGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSubnetGroupName': obj.dbSubnetGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDeleteEventSubscriptionMessage
 */
export interface DocDbDeleteEventSubscriptionMessage {
  /**
   * @schema DocDbDeleteEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

}

/**
 * Converts an object of type 'DocDbDeleteEventSubscriptionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDeleteEventSubscriptionMessage(obj: DocDbDeleteEventSubscriptionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionName': obj.subscriptionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDeleteEventSubscriptionResult
 */
export interface DocDbDeleteEventSubscriptionResult {
  /**
   * @schema DocDbDeleteEventSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: DocDbEventSubscription;

}

/**
 * Converts an object of type 'DocDbDeleteEventSubscriptionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDeleteEventSubscriptionResult(obj: DocDbDeleteEventSubscriptionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventSubscription': toJson_DocDbEventSubscription(obj.eventSubscription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDeleteGlobalClusterMessage
 */
export interface DocDbDeleteGlobalClusterMessage {
  /**
   * @schema DocDbDeleteGlobalClusterMessage#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier?: string;

}

/**
 * Converts an object of type 'DocDbDeleteGlobalClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDeleteGlobalClusterMessage(obj: DocDbDeleteGlobalClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalClusterIdentifier': obj.globalClusterIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDeleteGlobalClusterResult
 */
export interface DocDbDeleteGlobalClusterResult {
  /**
   * @schema DocDbDeleteGlobalClusterResult#GlobalCluster
   */
  readonly globalCluster?: DocDbGlobalCluster;

}

/**
 * Converts an object of type 'DocDbDeleteGlobalClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDeleteGlobalClusterResult(obj: DocDbDeleteGlobalClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalCluster': toJson_DocDbGlobalCluster(obj.globalCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDescribeCertificatesMessage
 */
export interface DocDbDescribeCertificatesMessage {
  /**
   * @schema DocDbDescribeCertificatesMessage#CertificateIdentifier
   */
  readonly certificateIdentifier?: string;

  /**
   * @schema DocDbDescribeCertificatesMessage#Filters
   */
  readonly filters?: DocDbFilter[];

  /**
   * @schema DocDbDescribeCertificatesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DocDbDescribeCertificatesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'DocDbDescribeCertificatesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDescribeCertificatesMessage(obj: DocDbDescribeCertificatesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateIdentifier': obj.certificateIdentifier,
    'Filters': obj.filters?.map(y => toJson_DocDbFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbCertificateMessage
 */
export interface DocDbCertificateMessage {
  /**
   * @schema DocDbCertificateMessage#Certificates
   */
  readonly certificates?: DocDbCertificate[];

  /**
   * @schema DocDbCertificateMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'DocDbCertificateMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbCertificateMessage(obj: DocDbCertificateMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Certificates': obj.certificates?.map(y => toJson_DocDbCertificate(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDescribeDbClusterParameterGroupsMessage
 */
export interface DocDbDescribeDbClusterParameterGroupsMessage {
  /**
   * @schema DocDbDescribeDbClusterParameterGroupsMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema DocDbDescribeDbClusterParameterGroupsMessage#Filters
   */
  readonly filters?: DocDbFilter[];

  /**
   * @schema DocDbDescribeDbClusterParameterGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DocDbDescribeDbClusterParameterGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'DocDbDescribeDbClusterParameterGroupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDescribeDbClusterParameterGroupsMessage(obj: DocDbDescribeDbClusterParameterGroupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
    'Filters': obj.filters?.map(y => toJson_DocDbFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbdbClusterParameterGroupsMessage
 */
export interface DocDbdbClusterParameterGroupsMessage {
  /**
   * @schema DocDbdbClusterParameterGroupsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DocDbdbClusterParameterGroupsMessage#DBClusterParameterGroups
   */
  readonly dbClusterParameterGroups?: DocDbdbClusterParameterGroup[];

}

/**
 * Converts an object of type 'DocDbdbClusterParameterGroupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbdbClusterParameterGroupsMessage(obj: DocDbdbClusterParameterGroupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'DBClusterParameterGroups': obj.dbClusterParameterGroups?.map(y => toJson_DocDbdbClusterParameterGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDescribeDbClusterParametersMessage
 */
export interface DocDbDescribeDbClusterParametersMessage {
  /**
   * @schema DocDbDescribeDbClusterParametersMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema DocDbDescribeDbClusterParametersMessage#Source
   */
  readonly source?: string;

  /**
   * @schema DocDbDescribeDbClusterParametersMessage#Filters
   */
  readonly filters?: DocDbFilter[];

  /**
   * @schema DocDbDescribeDbClusterParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DocDbDescribeDbClusterParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'DocDbDescribeDbClusterParametersMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDescribeDbClusterParametersMessage(obj: DocDbDescribeDbClusterParametersMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
    'Source': obj.source,
    'Filters': obj.filters?.map(y => toJson_DocDbFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbdbClusterParameterGroupDetails
 */
export interface DocDbdbClusterParameterGroupDetails {
  /**
   * @schema DocDbdbClusterParameterGroupDetails#Parameters
   */
  readonly parameters?: DocDbParameter[];

  /**
   * @schema DocDbdbClusterParameterGroupDetails#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'DocDbdbClusterParameterGroupDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbdbClusterParameterGroupDetails(obj: DocDbdbClusterParameterGroupDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Parameters': obj.parameters?.map(y => toJson_DocDbParameter(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDescribeDbClusterSnapshotAttributesMessage
 */
export interface DocDbDescribeDbClusterSnapshotAttributesMessage {
  /**
   * @schema DocDbDescribeDbClusterSnapshotAttributesMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

}

/**
 * Converts an object of type 'DocDbDescribeDbClusterSnapshotAttributesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDescribeDbClusterSnapshotAttributesMessage(obj: DocDbDescribeDbClusterSnapshotAttributesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshotIdentifier': obj.dbClusterSnapshotIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDescribeDbClusterSnapshotAttributesResult
 */
export interface DocDbDescribeDbClusterSnapshotAttributesResult {
  /**
   * @schema DocDbDescribeDbClusterSnapshotAttributesResult#DBClusterSnapshotAttributesResult
   */
  readonly dbClusterSnapshotAttributesResult?: DocDbdbClusterSnapshotAttributesResult;

}

/**
 * Converts an object of type 'DocDbDescribeDbClusterSnapshotAttributesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDescribeDbClusterSnapshotAttributesResult(obj: DocDbDescribeDbClusterSnapshotAttributesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshotAttributesResult': toJson_DocDbdbClusterSnapshotAttributesResult(obj.dbClusterSnapshotAttributesResult),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDescribeDbClusterSnapshotsMessage
 */
export interface DocDbDescribeDbClusterSnapshotsMessage {
  /**
   * @schema DocDbDescribeDbClusterSnapshotsMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DocDbDescribeDbClusterSnapshotsMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema DocDbDescribeDbClusterSnapshotsMessage#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema DocDbDescribeDbClusterSnapshotsMessage#Filters
   */
  readonly filters?: DocDbFilter[];

  /**
   * @schema DocDbDescribeDbClusterSnapshotsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DocDbDescribeDbClusterSnapshotsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DocDbDescribeDbClusterSnapshotsMessage#IncludeShared
   */
  readonly includeShared?: boolean;

  /**
   * @schema DocDbDescribeDbClusterSnapshotsMessage#IncludePublic
   */
  readonly includePublic?: boolean;

}

/**
 * Converts an object of type 'DocDbDescribeDbClusterSnapshotsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDescribeDbClusterSnapshotsMessage(obj: DocDbDescribeDbClusterSnapshotsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'DBClusterSnapshotIdentifier': obj.dbClusterSnapshotIdentifier,
    'SnapshotType': obj.snapshotType,
    'Filters': obj.filters?.map(y => toJson_DocDbFilter(y)),
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
 * @schema DocDbdbClusterSnapshotMessage
 */
export interface DocDbdbClusterSnapshotMessage {
  /**
   * @schema DocDbdbClusterSnapshotMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DocDbdbClusterSnapshotMessage#DBClusterSnapshots
   */
  readonly dbClusterSnapshots?: DocDbdbClusterSnapshot[];

}

/**
 * Converts an object of type 'DocDbdbClusterSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbdbClusterSnapshotMessage(obj: DocDbdbClusterSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'DBClusterSnapshots': obj.dbClusterSnapshots?.map(y => toJson_DocDbdbClusterSnapshot(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDescribeDbClustersMessage
 */
export interface DocDbDescribeDbClustersMessage {
  /**
   * @schema DocDbDescribeDbClustersMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DocDbDescribeDbClustersMessage#Filters
   */
  readonly filters?: DocDbFilter[];

  /**
   * @schema DocDbDescribeDbClustersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DocDbDescribeDbClustersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'DocDbDescribeDbClustersMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDescribeDbClustersMessage(obj: DocDbDescribeDbClustersMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'Filters': obj.filters?.map(y => toJson_DocDbFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbdbClusterMessage
 */
export interface DocDbdbClusterMessage {
  /**
   * @schema DocDbdbClusterMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DocDbdbClusterMessage#DBClusters
   */
  readonly dbClusters?: DocDbdbCluster[];

}

/**
 * Converts an object of type 'DocDbdbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbdbClusterMessage(obj: DocDbdbClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'DBClusters': obj.dbClusters?.map(y => toJson_DocDbdbCluster(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDescribeDbEngineVersionsMessage
 */
export interface DocDbDescribeDbEngineVersionsMessage {
  /**
   * @schema DocDbDescribeDbEngineVersionsMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema DocDbDescribeDbEngineVersionsMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DocDbDescribeDbEngineVersionsMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema DocDbDescribeDbEngineVersionsMessage#Filters
   */
  readonly filters?: DocDbFilter[];

  /**
   * @schema DocDbDescribeDbEngineVersionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DocDbDescribeDbEngineVersionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DocDbDescribeDbEngineVersionsMessage#DefaultOnly
   */
  readonly defaultOnly?: boolean;

  /**
   * @schema DocDbDescribeDbEngineVersionsMessage#ListSupportedCharacterSets
   */
  readonly listSupportedCharacterSets?: boolean;

  /**
   * @schema DocDbDescribeDbEngineVersionsMessage#ListSupportedTimezones
   */
  readonly listSupportedTimezones?: boolean;

}

/**
 * Converts an object of type 'DocDbDescribeDbEngineVersionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDescribeDbEngineVersionsMessage(obj: DocDbDescribeDbEngineVersionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'DBParameterGroupFamily': obj.dbParameterGroupFamily,
    'Filters': obj.filters?.map(y => toJson_DocDbFilter(y)),
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
 * @schema DocDbdbEngineVersionMessage
 */
export interface DocDbdbEngineVersionMessage {
  /**
   * @schema DocDbdbEngineVersionMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DocDbdbEngineVersionMessage#DBEngineVersions
   */
  readonly dbEngineVersions?: DocDbdbEngineVersion[];

}

/**
 * Converts an object of type 'DocDbdbEngineVersionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbdbEngineVersionMessage(obj: DocDbdbEngineVersionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'DBEngineVersions': obj.dbEngineVersions?.map(y => toJson_DocDbdbEngineVersion(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDescribeDbInstancesMessage
 */
export interface DocDbDescribeDbInstancesMessage {
  /**
   * @schema DocDbDescribeDbInstancesMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema DocDbDescribeDbInstancesMessage#Filters
   */
  readonly filters?: DocDbFilter[];

  /**
   * @schema DocDbDescribeDbInstancesMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DocDbDescribeDbInstancesMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'DocDbDescribeDbInstancesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDescribeDbInstancesMessage(obj: DocDbDescribeDbInstancesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'Filters': obj.filters?.map(y => toJson_DocDbFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbdbInstanceMessage
 */
export interface DocDbdbInstanceMessage {
  /**
   * @schema DocDbdbInstanceMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DocDbdbInstanceMessage#DBInstances
   */
  readonly dbInstances?: DocDbdbInstance[];

}

/**
 * Converts an object of type 'DocDbdbInstanceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbdbInstanceMessage(obj: DocDbdbInstanceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'DBInstances': obj.dbInstances?.map(y => toJson_DocDbdbInstance(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDescribeDbSubnetGroupsMessage
 */
export interface DocDbDescribeDbSubnetGroupsMessage {
  /**
   * @schema DocDbDescribeDbSubnetGroupsMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema DocDbDescribeDbSubnetGroupsMessage#Filters
   */
  readonly filters?: DocDbFilter[];

  /**
   * @schema DocDbDescribeDbSubnetGroupsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DocDbDescribeDbSubnetGroupsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'DocDbDescribeDbSubnetGroupsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDescribeDbSubnetGroupsMessage(obj: DocDbDescribeDbSubnetGroupsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSubnetGroupName': obj.dbSubnetGroupName,
    'Filters': obj.filters?.map(y => toJson_DocDbFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbdbSubnetGroupMessage
 */
export interface DocDbdbSubnetGroupMessage {
  /**
   * @schema DocDbdbSubnetGroupMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DocDbdbSubnetGroupMessage#DBSubnetGroups
   */
  readonly dbSubnetGroups?: DocDbdbSubnetGroup[];

}

/**
 * Converts an object of type 'DocDbdbSubnetGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbdbSubnetGroupMessage(obj: DocDbdbSubnetGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'DBSubnetGroups': obj.dbSubnetGroups?.map(y => toJson_DocDbdbSubnetGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDescribeEngineDefaultClusterParametersMessage
 */
export interface DocDbDescribeEngineDefaultClusterParametersMessage {
  /**
   * @schema DocDbDescribeEngineDefaultClusterParametersMessage#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema DocDbDescribeEngineDefaultClusterParametersMessage#Filters
   */
  readonly filters?: DocDbFilter[];

  /**
   * @schema DocDbDescribeEngineDefaultClusterParametersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DocDbDescribeEngineDefaultClusterParametersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'DocDbDescribeEngineDefaultClusterParametersMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDescribeEngineDefaultClusterParametersMessage(obj: DocDbDescribeEngineDefaultClusterParametersMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroupFamily': obj.dbParameterGroupFamily,
    'Filters': obj.filters?.map(y => toJson_DocDbFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDescribeEngineDefaultClusterParametersResult
 */
export interface DocDbDescribeEngineDefaultClusterParametersResult {
  /**
   * @schema DocDbDescribeEngineDefaultClusterParametersResult#EngineDefaults
   */
  readonly engineDefaults?: DocDbEngineDefaults;

}

/**
 * Converts an object of type 'DocDbDescribeEngineDefaultClusterParametersResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDescribeEngineDefaultClusterParametersResult(obj: DocDbDescribeEngineDefaultClusterParametersResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EngineDefaults': toJson_DocDbEngineDefaults(obj.engineDefaults),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDescribeEventCategoriesMessage
 */
export interface DocDbDescribeEventCategoriesMessage {
  /**
   * @schema DocDbDescribeEventCategoriesMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema DocDbDescribeEventCategoriesMessage#Filters
   */
  readonly filters?: DocDbFilter[];

}

/**
 * Converts an object of type 'DocDbDescribeEventCategoriesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDescribeEventCategoriesMessage(obj: DocDbDescribeEventCategoriesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceType': obj.sourceType,
    'Filters': obj.filters?.map(y => toJson_DocDbFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbEventCategoriesMessage
 */
export interface DocDbEventCategoriesMessage {
  /**
   * @schema DocDbEventCategoriesMessage#EventCategoriesMapList
   */
  readonly eventCategoriesMapList?: DocDbEventCategoriesMap[];

}

/**
 * Converts an object of type 'DocDbEventCategoriesMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbEventCategoriesMessage(obj: DocDbEventCategoriesMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventCategoriesMapList': obj.eventCategoriesMapList?.map(y => toJson_DocDbEventCategoriesMap(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDescribeEventSubscriptionsMessage
 */
export interface DocDbDescribeEventSubscriptionsMessage {
  /**
   * @schema DocDbDescribeEventSubscriptionsMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

  /**
   * @schema DocDbDescribeEventSubscriptionsMessage#Filters
   */
  readonly filters?: DocDbFilter[];

  /**
   * @schema DocDbDescribeEventSubscriptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DocDbDescribeEventSubscriptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'DocDbDescribeEventSubscriptionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDescribeEventSubscriptionsMessage(obj: DocDbDescribeEventSubscriptionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionName': obj.subscriptionName,
    'Filters': obj.filters?.map(y => toJson_DocDbFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbEventSubscriptionsMessage
 */
export interface DocDbEventSubscriptionsMessage {
  /**
   * @schema DocDbEventSubscriptionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DocDbEventSubscriptionsMessage#EventSubscriptionsList
   */
  readonly eventSubscriptionsList?: DocDbEventSubscription[];

}

/**
 * Converts an object of type 'DocDbEventSubscriptionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbEventSubscriptionsMessage(obj: DocDbEventSubscriptionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'EventSubscriptionsList': obj.eventSubscriptionsList?.map(y => toJson_DocDbEventSubscription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDescribeEventsMessage
 */
export interface DocDbDescribeEventsMessage {
  /**
   * @schema DocDbDescribeEventsMessage#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

  /**
   * @schema DocDbDescribeEventsMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema DocDbDescribeEventsMessage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema DocDbDescribeEventsMessage#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema DocDbDescribeEventsMessage#Duration
   */
  readonly duration?: number;

  /**
   * @schema DocDbDescribeEventsMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema DocDbDescribeEventsMessage#Filters
   */
  readonly filters?: DocDbFilter[];

  /**
   * @schema DocDbDescribeEventsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DocDbDescribeEventsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'DocDbDescribeEventsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDescribeEventsMessage(obj: DocDbDescribeEventsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceIdentifier': obj.sourceIdentifier,
    'SourceType': obj.sourceType,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'Duration': obj.duration,
    'EventCategories': obj.eventCategories?.map(y => y),
    'Filters': obj.filters?.map(y => toJson_DocDbFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbEventsMessage
 */
export interface DocDbEventsMessage {
  /**
   * @schema DocDbEventsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DocDbEventsMessage#Events
   */
  readonly events?: DocDbEvent[];

}

/**
 * Converts an object of type 'DocDbEventsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbEventsMessage(obj: DocDbEventsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'Events': obj.events?.map(y => toJson_DocDbEvent(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDescribeGlobalClustersMessage
 */
export interface DocDbDescribeGlobalClustersMessage {
  /**
   * @schema DocDbDescribeGlobalClustersMessage#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier?: string;

  /**
   * @schema DocDbDescribeGlobalClustersMessage#Filters
   */
  readonly filters?: DocDbFilter[];

  /**
   * @schema DocDbDescribeGlobalClustersMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DocDbDescribeGlobalClustersMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'DocDbDescribeGlobalClustersMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDescribeGlobalClustersMessage(obj: DocDbDescribeGlobalClustersMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalClusterIdentifier': obj.globalClusterIdentifier,
    'Filters': obj.filters?.map(y => toJson_DocDbFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbGlobalClustersMessage
 */
export interface DocDbGlobalClustersMessage {
  /**
   * @schema DocDbGlobalClustersMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DocDbGlobalClustersMessage#GlobalClusters
   */
  readonly globalClusters?: DocDbGlobalCluster[];

}

/**
 * Converts an object of type 'DocDbGlobalClustersMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbGlobalClustersMessage(obj: DocDbGlobalClustersMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'GlobalClusters': obj.globalClusters?.map(y => toJson_DocDbGlobalCluster(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDescribeOrderableDbInstanceOptionsMessage
 */
export interface DocDbDescribeOrderableDbInstanceOptionsMessage {
  /**
   * @schema DocDbDescribeOrderableDbInstanceOptionsMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema DocDbDescribeOrderableDbInstanceOptionsMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DocDbDescribeOrderableDbInstanceOptionsMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema DocDbDescribeOrderableDbInstanceOptionsMessage#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema DocDbDescribeOrderableDbInstanceOptionsMessage#Vpc
   */
  readonly vpc?: boolean;

  /**
   * @schema DocDbDescribeOrderableDbInstanceOptionsMessage#Filters
   */
  readonly filters?: DocDbFilter[];

  /**
   * @schema DocDbDescribeOrderableDbInstanceOptionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

  /**
   * @schema DocDbDescribeOrderableDbInstanceOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'DocDbDescribeOrderableDbInstanceOptionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDescribeOrderableDbInstanceOptionsMessage(obj: DocDbDescribeOrderableDbInstanceOptionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'DBInstanceClass': obj.dbInstanceClass,
    'LicenseModel': obj.licenseModel,
    'Vpc': obj.vpc,
    'Filters': obj.filters?.map(y => toJson_DocDbFilter(y)),
    'MaxRecords': obj.maxRecords,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbOrderableDbInstanceOptionsMessage
 */
export interface DocDbOrderableDbInstanceOptionsMessage {
  /**
   * @schema DocDbOrderableDbInstanceOptionsMessage#OrderableDBInstanceOptions
   */
  readonly orderableDbInstanceOptions?: DocDbOrderableDbInstanceOption[];

  /**
   * @schema DocDbOrderableDbInstanceOptionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'DocDbOrderableDbInstanceOptionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbOrderableDbInstanceOptionsMessage(obj: DocDbOrderableDbInstanceOptionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrderableDBInstanceOptions': obj.orderableDbInstanceOptions?.map(y => toJson_DocDbOrderableDbInstanceOption(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbDescribePendingMaintenanceActionsMessage
 */
export interface DocDbDescribePendingMaintenanceActionsMessage {
  /**
   * @schema DocDbDescribePendingMaintenanceActionsMessage#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema DocDbDescribePendingMaintenanceActionsMessage#Filters
   */
  readonly filters?: DocDbFilter[];

  /**
   * @schema DocDbDescribePendingMaintenanceActionsMessage#Marker
   */
  readonly marker?: string;

  /**
   * @schema DocDbDescribePendingMaintenanceActionsMessage#MaxRecords
   */
  readonly maxRecords?: number;

}

/**
 * Converts an object of type 'DocDbDescribePendingMaintenanceActionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbDescribePendingMaintenanceActionsMessage(obj: DocDbDescribePendingMaintenanceActionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceIdentifier': obj.resourceIdentifier,
    'Filters': obj.filters?.map(y => toJson_DocDbFilter(y)),
    'Marker': obj.marker,
    'MaxRecords': obj.maxRecords,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbPendingMaintenanceActionsMessage
 */
export interface DocDbPendingMaintenanceActionsMessage {
  /**
   * @schema DocDbPendingMaintenanceActionsMessage#PendingMaintenanceActions
   */
  readonly pendingMaintenanceActions?: DocDbResourcePendingMaintenanceActions[];

  /**
   * @schema DocDbPendingMaintenanceActionsMessage#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'DocDbPendingMaintenanceActionsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbPendingMaintenanceActionsMessage(obj: DocDbPendingMaintenanceActionsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PendingMaintenanceActions': obj.pendingMaintenanceActions?.map(y => toJson_DocDbResourcePendingMaintenanceActions(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbFailoverDbClusterMessage
 */
export interface DocDbFailoverDbClusterMessage {
  /**
   * @schema DocDbFailoverDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DocDbFailoverDbClusterMessage#TargetDBInstanceIdentifier
   */
  readonly targetDbInstanceIdentifier?: string;

}

/**
 * Converts an object of type 'DocDbFailoverDbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbFailoverDbClusterMessage(obj: DocDbFailoverDbClusterMessage | undefined): Record<string, any> | undefined {
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
 * @schema DocDbFailoverDbClusterResult
 */
export interface DocDbFailoverDbClusterResult {
  /**
   * @schema DocDbFailoverDbClusterResult#DBCluster
   */
  readonly dbCluster?: DocDbdbCluster;

}

/**
 * Converts an object of type 'DocDbFailoverDbClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbFailoverDbClusterResult(obj: DocDbFailoverDbClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBCluster': toJson_DocDbdbCluster(obj.dbCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbListTagsForResourceMessage
 */
export interface DocDbListTagsForResourceMessage {
  /**
   * @schema DocDbListTagsForResourceMessage#ResourceName
   */
  readonly resourceName?: string;

  /**
   * @schema DocDbListTagsForResourceMessage#Filters
   */
  readonly filters?: DocDbFilter[];

}

/**
 * Converts an object of type 'DocDbListTagsForResourceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbListTagsForResourceMessage(obj: DocDbListTagsForResourceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceName': obj.resourceName,
    'Filters': obj.filters?.map(y => toJson_DocDbFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbTagListMessage
 */
export interface DocDbTagListMessage {
  /**
   * @schema DocDbTagListMessage#TagList
   */
  readonly tagList?: DocDbTag[];

}

/**
 * Converts an object of type 'DocDbTagListMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbTagListMessage(obj: DocDbTagListMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TagList': obj.tagList?.map(y => toJson_DocDbTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbModifyDbClusterMessage
 */
export interface DocDbModifyDbClusterMessage {
  /**
   * @schema DocDbModifyDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DocDbModifyDbClusterMessage#NewDBClusterIdentifier
   */
  readonly newDbClusterIdentifier?: string;

  /**
   * @schema DocDbModifyDbClusterMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema DocDbModifyDbClusterMessage#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema DocDbModifyDbClusterMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema DocDbModifyDbClusterMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema DocDbModifyDbClusterMessage#Port
   */
  readonly port?: number;

  /**
   * @schema DocDbModifyDbClusterMessage#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema DocDbModifyDbClusterMessage#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema DocDbModifyDbClusterMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema DocDbModifyDbClusterMessage#CloudwatchLogsExportConfiguration
   */
  readonly cloudwatchLogsExportConfiguration?: DocDbCloudwatchLogsExportConfiguration;

  /**
   * @schema DocDbModifyDbClusterMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DocDbModifyDbClusterMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * Converts an object of type 'DocDbModifyDbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbModifyDbClusterMessage(obj: DocDbModifyDbClusterMessage | undefined): Record<string, any> | undefined {
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
    'PreferredBackupWindow': obj.preferredBackupWindow,
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'CloudwatchLogsExportConfiguration': toJson_DocDbCloudwatchLogsExportConfiguration(obj.cloudwatchLogsExportConfiguration),
    'EngineVersion': obj.engineVersion,
    'DeletionProtection': obj.deletionProtection,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbModifyDbClusterResult
 */
export interface DocDbModifyDbClusterResult {
  /**
   * @schema DocDbModifyDbClusterResult#DBCluster
   */
  readonly dbCluster?: DocDbdbCluster;

}

/**
 * Converts an object of type 'DocDbModifyDbClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbModifyDbClusterResult(obj: DocDbModifyDbClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBCluster': toJson_DocDbdbCluster(obj.dbCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbModifyDbClusterParameterGroupMessage
 */
export interface DocDbModifyDbClusterParameterGroupMessage {
  /**
   * @schema DocDbModifyDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema DocDbModifyDbClusterParameterGroupMessage#Parameters
   */
  readonly parameters?: DocDbParameter[];

}

/**
 * Converts an object of type 'DocDbModifyDbClusterParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbModifyDbClusterParameterGroupMessage(obj: DocDbModifyDbClusterParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
    'Parameters': obj.parameters?.map(y => toJson_DocDbParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbdbClusterParameterGroupNameMessage
 */
export interface DocDbdbClusterParameterGroupNameMessage {
  /**
   * @schema DocDbdbClusterParameterGroupNameMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

}

/**
 * Converts an object of type 'DocDbdbClusterParameterGroupNameMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbdbClusterParameterGroupNameMessage(obj: DocDbdbClusterParameterGroupNameMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbModifyDbClusterSnapshotAttributeMessage
 */
export interface DocDbModifyDbClusterSnapshotAttributeMessage {
  /**
   * @schema DocDbModifyDbClusterSnapshotAttributeMessage#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema DocDbModifyDbClusterSnapshotAttributeMessage#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema DocDbModifyDbClusterSnapshotAttributeMessage#ValuesToAdd
   */
  readonly valuesToAdd?: string[];

  /**
   * @schema DocDbModifyDbClusterSnapshotAttributeMessage#ValuesToRemove
   */
  readonly valuesToRemove?: string[];

}

/**
 * Converts an object of type 'DocDbModifyDbClusterSnapshotAttributeMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbModifyDbClusterSnapshotAttributeMessage(obj: DocDbModifyDbClusterSnapshotAttributeMessage | undefined): Record<string, any> | undefined {
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
 * @schema DocDbModifyDbClusterSnapshotAttributeResult
 */
export interface DocDbModifyDbClusterSnapshotAttributeResult {
  /**
   * @schema DocDbModifyDbClusterSnapshotAttributeResult#DBClusterSnapshotAttributesResult
   */
  readonly dbClusterSnapshotAttributesResult?: DocDbdbClusterSnapshotAttributesResult;

}

/**
 * Converts an object of type 'DocDbModifyDbClusterSnapshotAttributeResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbModifyDbClusterSnapshotAttributeResult(obj: DocDbModifyDbClusterSnapshotAttributeResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshotAttributesResult': toJson_DocDbdbClusterSnapshotAttributesResult(obj.dbClusterSnapshotAttributesResult),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbModifyDbInstanceMessage
 */
export interface DocDbModifyDbInstanceMessage {
  /**
   * @schema DocDbModifyDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema DocDbModifyDbInstanceMessage#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema DocDbModifyDbInstanceMessage#ApplyImmediately
   */
  readonly applyImmediately?: boolean;

  /**
   * @schema DocDbModifyDbInstanceMessage#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema DocDbModifyDbInstanceMessage#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema DocDbModifyDbInstanceMessage#NewDBInstanceIdentifier
   */
  readonly newDbInstanceIdentifier?: string;

  /**
   * @schema DocDbModifyDbInstanceMessage#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema DocDbModifyDbInstanceMessage#PromotionTier
   */
  readonly promotionTier?: number;

}

/**
 * Converts an object of type 'DocDbModifyDbInstanceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbModifyDbInstanceMessage(obj: DocDbModifyDbInstanceMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'DBInstanceClass': obj.dbInstanceClass,
    'ApplyImmediately': obj.applyImmediately,
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'AutoMinorVersionUpgrade': obj.autoMinorVersionUpgrade,
    'NewDBInstanceIdentifier': obj.newDbInstanceIdentifier,
    'CACertificateIdentifier': obj.caCertificateIdentifier,
    'PromotionTier': obj.promotionTier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbModifyDbInstanceResult
 */
export interface DocDbModifyDbInstanceResult {
  /**
   * @schema DocDbModifyDbInstanceResult#DBInstance
   */
  readonly dbInstance?: DocDbdbInstance;

}

/**
 * Converts an object of type 'DocDbModifyDbInstanceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbModifyDbInstanceResult(obj: DocDbModifyDbInstanceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstance': toJson_DocDbdbInstance(obj.dbInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbModifyDbSubnetGroupMessage
 */
export interface DocDbModifyDbSubnetGroupMessage {
  /**
   * @schema DocDbModifyDbSubnetGroupMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema DocDbModifyDbSubnetGroupMessage#DBSubnetGroupDescription
   */
  readonly dbSubnetGroupDescription?: string;

  /**
   * @schema DocDbModifyDbSubnetGroupMessage#SubnetIds
   */
  readonly subnetIds?: string[];

}

/**
 * Converts an object of type 'DocDbModifyDbSubnetGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbModifyDbSubnetGroupMessage(obj: DocDbModifyDbSubnetGroupMessage | undefined): Record<string, any> | undefined {
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
 * @schema DocDbModifyDbSubnetGroupResult
 */
export interface DocDbModifyDbSubnetGroupResult {
  /**
   * @schema DocDbModifyDbSubnetGroupResult#DBSubnetGroup
   */
  readonly dbSubnetGroup?: DocDbdbSubnetGroup;

}

/**
 * Converts an object of type 'DocDbModifyDbSubnetGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbModifyDbSubnetGroupResult(obj: DocDbModifyDbSubnetGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSubnetGroup': toJson_DocDbdbSubnetGroup(obj.dbSubnetGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbModifyEventSubscriptionMessage
 */
export interface DocDbModifyEventSubscriptionMessage {
  /**
   * @schema DocDbModifyEventSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

  /**
   * @schema DocDbModifyEventSubscriptionMessage#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema DocDbModifyEventSubscriptionMessage#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema DocDbModifyEventSubscriptionMessage#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema DocDbModifyEventSubscriptionMessage#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'DocDbModifyEventSubscriptionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbModifyEventSubscriptionMessage(obj: DocDbModifyEventSubscriptionMessage | undefined): Record<string, any> | undefined {
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
 * @schema DocDbModifyEventSubscriptionResult
 */
export interface DocDbModifyEventSubscriptionResult {
  /**
   * @schema DocDbModifyEventSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: DocDbEventSubscription;

}

/**
 * Converts an object of type 'DocDbModifyEventSubscriptionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbModifyEventSubscriptionResult(obj: DocDbModifyEventSubscriptionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventSubscription': toJson_DocDbEventSubscription(obj.eventSubscription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbModifyGlobalClusterMessage
 */
export interface DocDbModifyGlobalClusterMessage {
  /**
   * @schema DocDbModifyGlobalClusterMessage#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier?: string;

  /**
   * @schema DocDbModifyGlobalClusterMessage#NewGlobalClusterIdentifier
   */
  readonly newGlobalClusterIdentifier?: string;

  /**
   * @schema DocDbModifyGlobalClusterMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * Converts an object of type 'DocDbModifyGlobalClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbModifyGlobalClusterMessage(obj: DocDbModifyGlobalClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalClusterIdentifier': obj.globalClusterIdentifier,
    'NewGlobalClusterIdentifier': obj.newGlobalClusterIdentifier,
    'DeletionProtection': obj.deletionProtection,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbModifyGlobalClusterResult
 */
export interface DocDbModifyGlobalClusterResult {
  /**
   * @schema DocDbModifyGlobalClusterResult#GlobalCluster
   */
  readonly globalCluster?: DocDbGlobalCluster;

}

/**
 * Converts an object of type 'DocDbModifyGlobalClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbModifyGlobalClusterResult(obj: DocDbModifyGlobalClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalCluster': toJson_DocDbGlobalCluster(obj.globalCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbRebootDbInstanceMessage
 */
export interface DocDbRebootDbInstanceMessage {
  /**
   * @schema DocDbRebootDbInstanceMessage#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema DocDbRebootDbInstanceMessage#ForceFailover
   */
  readonly forceFailover?: boolean;

}

/**
 * Converts an object of type 'DocDbRebootDbInstanceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbRebootDbInstanceMessage(obj: DocDbRebootDbInstanceMessage | undefined): Record<string, any> | undefined {
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
 * @schema DocDbRebootDbInstanceResult
 */
export interface DocDbRebootDbInstanceResult {
  /**
   * @schema DocDbRebootDbInstanceResult#DBInstance
   */
  readonly dbInstance?: DocDbdbInstance;

}

/**
 * Converts an object of type 'DocDbRebootDbInstanceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbRebootDbInstanceResult(obj: DocDbRebootDbInstanceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstance': toJson_DocDbdbInstance(obj.dbInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbRemoveFromGlobalClusterMessage
 */
export interface DocDbRemoveFromGlobalClusterMessage {
  /**
   * @schema DocDbRemoveFromGlobalClusterMessage#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier?: string;

  /**
   * @schema DocDbRemoveFromGlobalClusterMessage#DbClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

}

/**
 * Converts an object of type 'DocDbRemoveFromGlobalClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbRemoveFromGlobalClusterMessage(obj: DocDbRemoveFromGlobalClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalClusterIdentifier': obj.globalClusterIdentifier,
    'DbClusterIdentifier': obj.dbClusterIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbRemoveFromGlobalClusterResult
 */
export interface DocDbRemoveFromGlobalClusterResult {
  /**
   * @schema DocDbRemoveFromGlobalClusterResult#GlobalCluster
   */
  readonly globalCluster?: DocDbGlobalCluster;

}

/**
 * Converts an object of type 'DocDbRemoveFromGlobalClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbRemoveFromGlobalClusterResult(obj: DocDbRemoveFromGlobalClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalCluster': toJson_DocDbGlobalCluster(obj.globalCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbRemoveSourceIdentifierFromSubscriptionMessage
 */
export interface DocDbRemoveSourceIdentifierFromSubscriptionMessage {
  /**
   * @schema DocDbRemoveSourceIdentifierFromSubscriptionMessage#SubscriptionName
   */
  readonly subscriptionName?: string;

  /**
   * @schema DocDbRemoveSourceIdentifierFromSubscriptionMessage#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

}

/**
 * Converts an object of type 'DocDbRemoveSourceIdentifierFromSubscriptionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbRemoveSourceIdentifierFromSubscriptionMessage(obj: DocDbRemoveSourceIdentifierFromSubscriptionMessage | undefined): Record<string, any> | undefined {
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
 * @schema DocDbRemoveSourceIdentifierFromSubscriptionResult
 */
export interface DocDbRemoveSourceIdentifierFromSubscriptionResult {
  /**
   * @schema DocDbRemoveSourceIdentifierFromSubscriptionResult#EventSubscription
   */
  readonly eventSubscription?: DocDbEventSubscription;

}

/**
 * Converts an object of type 'DocDbRemoveSourceIdentifierFromSubscriptionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbRemoveSourceIdentifierFromSubscriptionResult(obj: DocDbRemoveSourceIdentifierFromSubscriptionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventSubscription': toJson_DocDbEventSubscription(obj.eventSubscription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbRemoveTagsFromResourceMessage
 */
export interface DocDbRemoveTagsFromResourceMessage {
  /**
   * @schema DocDbRemoveTagsFromResourceMessage#ResourceName
   */
  readonly resourceName?: string;

  /**
   * @schema DocDbRemoveTagsFromResourceMessage#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'DocDbRemoveTagsFromResourceMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbRemoveTagsFromResourceMessage(obj: DocDbRemoveTagsFromResourceMessage | undefined): Record<string, any> | undefined {
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
 * @schema DocDbResetDbClusterParameterGroupMessage
 */
export interface DocDbResetDbClusterParameterGroupMessage {
  /**
   * @schema DocDbResetDbClusterParameterGroupMessage#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema DocDbResetDbClusterParameterGroupMessage#ResetAllParameters
   */
  readonly resetAllParameters?: boolean;

  /**
   * @schema DocDbResetDbClusterParameterGroupMessage#Parameters
   */
  readonly parameters?: DocDbParameter[];

}

/**
 * Converts an object of type 'DocDbResetDbClusterParameterGroupMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbResetDbClusterParameterGroupMessage(obj: DocDbResetDbClusterParameterGroupMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterParameterGroupName': obj.dbClusterParameterGroupName,
    'ResetAllParameters': obj.resetAllParameters,
    'Parameters': obj.parameters?.map(y => toJson_DocDbParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbRestoreDbClusterFromSnapshotMessage
 */
export interface DocDbRestoreDbClusterFromSnapshotMessage {
  /**
   * @schema DocDbRestoreDbClusterFromSnapshotMessage#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema DocDbRestoreDbClusterFromSnapshotMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DocDbRestoreDbClusterFromSnapshotMessage#SnapshotIdentifier
   */
  readonly snapshotIdentifier?: string;

  /**
   * @schema DocDbRestoreDbClusterFromSnapshotMessage#Engine
   */
  readonly engine?: string;

  /**
   * @schema DocDbRestoreDbClusterFromSnapshotMessage#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DocDbRestoreDbClusterFromSnapshotMessage#Port
   */
  readonly port?: number;

  /**
   * @schema DocDbRestoreDbClusterFromSnapshotMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema DocDbRestoreDbClusterFromSnapshotMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema DocDbRestoreDbClusterFromSnapshotMessage#Tags
   */
  readonly tags?: DocDbTag[];

  /**
   * @schema DocDbRestoreDbClusterFromSnapshotMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DocDbRestoreDbClusterFromSnapshotMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema DocDbRestoreDbClusterFromSnapshotMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * Converts an object of type 'DocDbRestoreDbClusterFromSnapshotMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbRestoreDbClusterFromSnapshotMessage(obj: DocDbRestoreDbClusterFromSnapshotMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'SnapshotIdentifier': obj.snapshotIdentifier,
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'Port': obj.port,
    'DBSubnetGroupName': obj.dbSubnetGroupName,
    'VpcSecurityGroupIds': obj.vpcSecurityGroupIds?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_DocDbTag(y)),
    'KmsKeyId': obj.kmsKeyId,
    'EnableCloudwatchLogsExports': obj.enableCloudwatchLogsExports?.map(y => y),
    'DeletionProtection': obj.deletionProtection,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbRestoreDbClusterFromSnapshotResult
 */
export interface DocDbRestoreDbClusterFromSnapshotResult {
  /**
   * @schema DocDbRestoreDbClusterFromSnapshotResult#DBCluster
   */
  readonly dbCluster?: DocDbdbCluster;

}

/**
 * Converts an object of type 'DocDbRestoreDbClusterFromSnapshotResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbRestoreDbClusterFromSnapshotResult(obj: DocDbRestoreDbClusterFromSnapshotResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBCluster': toJson_DocDbdbCluster(obj.dbCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbRestoreDbClusterToPointInTimeMessage
 */
export interface DocDbRestoreDbClusterToPointInTimeMessage {
  /**
   * @schema DocDbRestoreDbClusterToPointInTimeMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DocDbRestoreDbClusterToPointInTimeMessage#SourceDBClusterIdentifier
   */
  readonly sourceDbClusterIdentifier?: string;

  /**
   * @schema DocDbRestoreDbClusterToPointInTimeMessage#RestoreToTime
   */
  readonly restoreToTime?: string;

  /**
   * @schema DocDbRestoreDbClusterToPointInTimeMessage#UseLatestRestorableTime
   */
  readonly useLatestRestorableTime?: boolean;

  /**
   * @schema DocDbRestoreDbClusterToPointInTimeMessage#Port
   */
  readonly port?: number;

  /**
   * @schema DocDbRestoreDbClusterToPointInTimeMessage#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema DocDbRestoreDbClusterToPointInTimeMessage#VpcSecurityGroupIds
   */
  readonly vpcSecurityGroupIds?: string[];

  /**
   * @schema DocDbRestoreDbClusterToPointInTimeMessage#Tags
   */
  readonly tags?: DocDbTag[];

  /**
   * @schema DocDbRestoreDbClusterToPointInTimeMessage#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DocDbRestoreDbClusterToPointInTimeMessage#EnableCloudwatchLogsExports
   */
  readonly enableCloudwatchLogsExports?: string[];

  /**
   * @schema DocDbRestoreDbClusterToPointInTimeMessage#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * Converts an object of type 'DocDbRestoreDbClusterToPointInTimeMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbRestoreDbClusterToPointInTimeMessage(obj: DocDbRestoreDbClusterToPointInTimeMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'SourceDBClusterIdentifier': obj.sourceDbClusterIdentifier,
    'RestoreToTime': obj.restoreToTime,
    'UseLatestRestorableTime': obj.useLatestRestorableTime,
    'Port': obj.port,
    'DBSubnetGroupName': obj.dbSubnetGroupName,
    'VpcSecurityGroupIds': obj.vpcSecurityGroupIds?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_DocDbTag(y)),
    'KmsKeyId': obj.kmsKeyId,
    'EnableCloudwatchLogsExports': obj.enableCloudwatchLogsExports?.map(y => y),
    'DeletionProtection': obj.deletionProtection,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbRestoreDbClusterToPointInTimeResult
 */
export interface DocDbRestoreDbClusterToPointInTimeResult {
  /**
   * @schema DocDbRestoreDbClusterToPointInTimeResult#DBCluster
   */
  readonly dbCluster?: DocDbdbCluster;

}

/**
 * Converts an object of type 'DocDbRestoreDbClusterToPointInTimeResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbRestoreDbClusterToPointInTimeResult(obj: DocDbRestoreDbClusterToPointInTimeResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBCluster': toJson_DocDbdbCluster(obj.dbCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbStartDbClusterMessage
 */
export interface DocDbStartDbClusterMessage {
  /**
   * @schema DocDbStartDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

}

/**
 * Converts an object of type 'DocDbStartDbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbStartDbClusterMessage(obj: DocDbStartDbClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbStartDbClusterResult
 */
export interface DocDbStartDbClusterResult {
  /**
   * @schema DocDbStartDbClusterResult#DBCluster
   */
  readonly dbCluster?: DocDbdbCluster;

}

/**
 * Converts an object of type 'DocDbStartDbClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbStartDbClusterResult(obj: DocDbStartDbClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBCluster': toJson_DocDbdbCluster(obj.dbCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbStopDbClusterMessage
 */
export interface DocDbStopDbClusterMessage {
  /**
   * @schema DocDbStopDbClusterMessage#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

}

/**
 * Converts an object of type 'DocDbStopDbClusterMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbStopDbClusterMessage(obj: DocDbStopDbClusterMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterIdentifier': obj.dbClusterIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbStopDbClusterResult
 */
export interface DocDbStopDbClusterResult {
  /**
   * @schema DocDbStopDbClusterResult#DBCluster
   */
  readonly dbCluster?: DocDbdbCluster;

}

/**
 * Converts an object of type 'DocDbStopDbClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbStopDbClusterResult(obj: DocDbStopDbClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBCluster': toJson_DocDbdbCluster(obj.dbCluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbEventSubscription
 */
export interface DocDbEventSubscription {
  /**
   * @schema DocDbEventSubscription#CustomerAwsId
   */
  readonly customerAwsId?: string;

  /**
   * @schema DocDbEventSubscription#CustSubscriptionId
   */
  readonly custSubscriptionId?: string;

  /**
   * @schema DocDbEventSubscription#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema DocDbEventSubscription#Status
   */
  readonly status?: string;

  /**
   * @schema DocDbEventSubscription#SubscriptionCreationTime
   */
  readonly subscriptionCreationTime?: string;

  /**
   * @schema DocDbEventSubscription#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema DocDbEventSubscription#SourceIdsList
   */
  readonly sourceIdsList?: string[];

  /**
   * @schema DocDbEventSubscription#EventCategoriesList
   */
  readonly eventCategoriesList?: string[];

  /**
   * @schema DocDbEventSubscription#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema DocDbEventSubscription#EventSubscriptionArn
   */
  readonly eventSubscriptionArn?: string;

}

/**
 * Converts an object of type 'DocDbEventSubscription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbEventSubscription(obj: DocDbEventSubscription | undefined): Record<string, any> | undefined {
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
 * @schema DocDbTag
 */
export interface DocDbTag {
  /**
   * @schema DocDbTag#Key
   */
  readonly key?: string;

  /**
   * @schema DocDbTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'DocDbTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbTag(obj: DocDbTag | undefined): Record<string, any> | undefined {
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
 * @schema DocDbResourcePendingMaintenanceActions
 */
export interface DocDbResourcePendingMaintenanceActions {
  /**
   * @schema DocDbResourcePendingMaintenanceActions#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema DocDbResourcePendingMaintenanceActions#PendingMaintenanceActionDetails
   */
  readonly pendingMaintenanceActionDetails?: DocDbPendingMaintenanceAction[];

}

/**
 * Converts an object of type 'DocDbResourcePendingMaintenanceActions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbResourcePendingMaintenanceActions(obj: DocDbResourcePendingMaintenanceActions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceIdentifier': obj.resourceIdentifier,
    'PendingMaintenanceActionDetails': obj.pendingMaintenanceActionDetails?.map(y => toJson_DocDbPendingMaintenanceAction(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbdbClusterParameterGroup
 */
export interface DocDbdbClusterParameterGroup {
  /**
   * @schema DocDbdbClusterParameterGroup#DBClusterParameterGroupName
   */
  readonly dbClusterParameterGroupName?: string;

  /**
   * @schema DocDbdbClusterParameterGroup#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema DocDbdbClusterParameterGroup#Description
   */
  readonly description?: string;

  /**
   * @schema DocDbdbClusterParameterGroup#DBClusterParameterGroupArn
   */
  readonly dbClusterParameterGroupArn?: string;

}

/**
 * Converts an object of type 'DocDbdbClusterParameterGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbdbClusterParameterGroup(obj: DocDbdbClusterParameterGroup | undefined): Record<string, any> | undefined {
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
 * @schema DocDbdbClusterSnapshot
 */
export interface DocDbdbClusterSnapshot {
  /**
   * @schema DocDbdbClusterSnapshot#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema DocDbdbClusterSnapshot#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema DocDbdbClusterSnapshot#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DocDbdbClusterSnapshot#SnapshotCreateTime
   */
  readonly snapshotCreateTime?: string;

  /**
   * @schema DocDbdbClusterSnapshot#Engine
   */
  readonly engine?: string;

  /**
   * @schema DocDbdbClusterSnapshot#Status
   */
  readonly status?: string;

  /**
   * @schema DocDbdbClusterSnapshot#Port
   */
  readonly port?: number;

  /**
   * @schema DocDbdbClusterSnapshot#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema DocDbdbClusterSnapshot#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema DocDbdbClusterSnapshot#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema DocDbdbClusterSnapshot#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DocDbdbClusterSnapshot#SnapshotType
   */
  readonly snapshotType?: string;

  /**
   * @schema DocDbdbClusterSnapshot#PercentProgress
   */
  readonly percentProgress?: number;

  /**
   * @schema DocDbdbClusterSnapshot#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema DocDbdbClusterSnapshot#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DocDbdbClusterSnapshot#DBClusterSnapshotArn
   */
  readonly dbClusterSnapshotArn?: string;

  /**
   * @schema DocDbdbClusterSnapshot#SourceDBClusterSnapshotArn
   */
  readonly sourceDbClusterSnapshotArn?: string;

}

/**
 * Converts an object of type 'DocDbdbClusterSnapshot' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbdbClusterSnapshot(obj: DocDbdbClusterSnapshot | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'DBClusterSnapshotIdentifier': obj.dbClusterSnapshotIdentifier,
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'SnapshotCreateTime': obj.snapshotCreateTime,
    'Engine': obj.engine,
    'Status': obj.status,
    'Port': obj.port,
    'VpcId': obj.vpcId,
    'ClusterCreateTime': obj.clusterCreateTime,
    'MasterUsername': obj.masterUsername,
    'EngineVersion': obj.engineVersion,
    'SnapshotType': obj.snapshotType,
    'PercentProgress': obj.percentProgress,
    'StorageEncrypted': obj.storageEncrypted,
    'KmsKeyId': obj.kmsKeyId,
    'DBClusterSnapshotArn': obj.dbClusterSnapshotArn,
    'SourceDBClusterSnapshotArn': obj.sourceDbClusterSnapshotArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbdbCluster
 */
export interface DocDbdbCluster {
  /**
   * @schema DocDbdbCluster#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema DocDbdbCluster#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema DocDbdbCluster#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DocDbdbCluster#DBClusterParameterGroup
   */
  readonly dbClusterParameterGroup?: string;

  /**
   * @schema DocDbdbCluster#DBSubnetGroup
   */
  readonly dbSubnetGroup?: string;

  /**
   * @schema DocDbdbCluster#Status
   */
  readonly status?: string;

  /**
   * @schema DocDbdbCluster#PercentProgress
   */
  readonly percentProgress?: string;

  /**
   * @schema DocDbdbCluster#EarliestRestorableTime
   */
  readonly earliestRestorableTime?: string;

  /**
   * @schema DocDbdbCluster#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema DocDbdbCluster#ReaderEndpoint
   */
  readonly readerEndpoint?: string;

  /**
   * @schema DocDbdbCluster#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema DocDbdbCluster#Engine
   */
  readonly engine?: string;

  /**
   * @schema DocDbdbCluster#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DocDbdbCluster#LatestRestorableTime
   */
  readonly latestRestorableTime?: string;

  /**
   * @schema DocDbdbCluster#Port
   */
  readonly port?: number;

  /**
   * @schema DocDbdbCluster#MasterUsername
   */
  readonly masterUsername?: string;

  /**
   * @schema DocDbdbCluster#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema DocDbdbCluster#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema DocDbdbCluster#ReplicationSourceIdentifier
   */
  readonly replicationSourceIdentifier?: string;

  /**
   * @schema DocDbdbCluster#ReadReplicaIdentifiers
   */
  readonly readReplicaIdentifiers?: string[];

  /**
   * @schema DocDbdbCluster#DBClusterMembers
   */
  readonly dbClusterMembers?: DocDbdbClusterMember[];

  /**
   * @schema DocDbdbCluster#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: DocDbVpcSecurityGroupMembership[];

  /**
   * @schema DocDbdbCluster#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema DocDbdbCluster#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema DocDbdbCluster#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DocDbdbCluster#DbClusterResourceId
   */
  readonly dbClusterResourceId?: string;

  /**
   * @schema DocDbdbCluster#DBClusterArn
   */
  readonly dbClusterArn?: string;

  /**
   * @schema DocDbdbCluster#AssociatedRoles
   */
  readonly associatedRoles?: DocDbdbClusterRole[];

  /**
   * @schema DocDbdbCluster#ClusterCreateTime
   */
  readonly clusterCreateTime?: string;

  /**
   * @schema DocDbdbCluster#EnabledCloudwatchLogsExports
   */
  readonly enabledCloudwatchLogsExports?: string[];

  /**
   * @schema DocDbdbCluster#DeletionProtection
   */
  readonly deletionProtection?: boolean;

}

/**
 * Converts an object of type 'DocDbdbCluster' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbdbCluster(obj: DocDbdbCluster | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'BackupRetentionPeriod': obj.backupRetentionPeriod,
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
    'PreferredBackupWindow': obj.preferredBackupWindow,
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'ReplicationSourceIdentifier': obj.replicationSourceIdentifier,
    'ReadReplicaIdentifiers': obj.readReplicaIdentifiers?.map(y => y),
    'DBClusterMembers': obj.dbClusterMembers?.map(y => toJson_DocDbdbClusterMember(y)),
    'VpcSecurityGroups': obj.vpcSecurityGroups?.map(y => toJson_DocDbVpcSecurityGroupMembership(y)),
    'HostedZoneId': obj.hostedZoneId,
    'StorageEncrypted': obj.storageEncrypted,
    'KmsKeyId': obj.kmsKeyId,
    'DbClusterResourceId': obj.dbClusterResourceId,
    'DBClusterArn': obj.dbClusterArn,
    'AssociatedRoles': obj.associatedRoles?.map(y => toJson_DocDbdbClusterRole(y)),
    'ClusterCreateTime': obj.clusterCreateTime,
    'EnabledCloudwatchLogsExports': obj.enabledCloudwatchLogsExports?.map(y => y),
    'DeletionProtection': obj.deletionProtection,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbdbInstance
 */
export interface DocDbdbInstance {
  /**
   * @schema DocDbdbInstance#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema DocDbdbInstance#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema DocDbdbInstance#Engine
   */
  readonly engine?: string;

  /**
   * @schema DocDbdbInstance#DBInstanceStatus
   */
  readonly dbInstanceStatus?: string;

  /**
   * @schema DocDbdbInstance#Endpoint
   */
  readonly endpoint?: DocDbEndpoint;

  /**
   * @schema DocDbdbInstance#InstanceCreateTime
   */
  readonly instanceCreateTime?: string;

  /**
   * @schema DocDbdbInstance#PreferredBackupWindow
   */
  readonly preferredBackupWindow?: string;

  /**
   * @schema DocDbdbInstance#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema DocDbdbInstance#VpcSecurityGroups
   */
  readonly vpcSecurityGroups?: DocDbVpcSecurityGroupMembership[];

  /**
   * @schema DocDbdbInstance#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema DocDbdbInstance#DBSubnetGroup
   */
  readonly dbSubnetGroup?: DocDbdbSubnetGroup;

  /**
   * @schema DocDbdbInstance#PreferredMaintenanceWindow
   */
  readonly preferredMaintenanceWindow?: string;

  /**
   * @schema DocDbdbInstance#PendingModifiedValues
   */
  readonly pendingModifiedValues?: DocDbPendingModifiedValues;

  /**
   * @schema DocDbdbInstance#LatestRestorableTime
   */
  readonly latestRestorableTime?: string;

  /**
   * @schema DocDbdbInstance#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DocDbdbInstance#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema DocDbdbInstance#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema DocDbdbInstance#StatusInfos
   */
  readonly statusInfos?: DocDbdbInstanceStatusInfo[];

  /**
   * @schema DocDbdbInstance#DBClusterIdentifier
   */
  readonly dbClusterIdentifier?: string;

  /**
   * @schema DocDbdbInstance#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema DocDbdbInstance#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DocDbdbInstance#DbiResourceId
   */
  readonly dbiResourceId?: string;

  /**
   * @schema DocDbdbInstance#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema DocDbdbInstance#PromotionTier
   */
  readonly promotionTier?: number;

  /**
   * @schema DocDbdbInstance#DBInstanceArn
   */
  readonly dbInstanceArn?: string;

  /**
   * @schema DocDbdbInstance#EnabledCloudwatchLogsExports
   */
  readonly enabledCloudwatchLogsExports?: string[];

}

/**
 * Converts an object of type 'DocDbdbInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbdbInstance(obj: DocDbdbInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBInstanceIdentifier': obj.dbInstanceIdentifier,
    'DBInstanceClass': obj.dbInstanceClass,
    'Engine': obj.engine,
    'DBInstanceStatus': obj.dbInstanceStatus,
    'Endpoint': toJson_DocDbEndpoint(obj.endpoint),
    'InstanceCreateTime': obj.instanceCreateTime,
    'PreferredBackupWindow': obj.preferredBackupWindow,
    'BackupRetentionPeriod': obj.backupRetentionPeriod,
    'VpcSecurityGroups': obj.vpcSecurityGroups?.map(y => toJson_DocDbVpcSecurityGroupMembership(y)),
    'AvailabilityZone': obj.availabilityZone,
    'DBSubnetGroup': toJson_DocDbdbSubnetGroup(obj.dbSubnetGroup),
    'PreferredMaintenanceWindow': obj.preferredMaintenanceWindow,
    'PendingModifiedValues': toJson_DocDbPendingModifiedValues(obj.pendingModifiedValues),
    'LatestRestorableTime': obj.latestRestorableTime,
    'EngineVersion': obj.engineVersion,
    'AutoMinorVersionUpgrade': obj.autoMinorVersionUpgrade,
    'PubliclyAccessible': obj.publiclyAccessible,
    'StatusInfos': obj.statusInfos?.map(y => toJson_DocDbdbInstanceStatusInfo(y)),
    'DBClusterIdentifier': obj.dbClusterIdentifier,
    'StorageEncrypted': obj.storageEncrypted,
    'KmsKeyId': obj.kmsKeyId,
    'DbiResourceId': obj.dbiResourceId,
    'CACertificateIdentifier': obj.caCertificateIdentifier,
    'PromotionTier': obj.promotionTier,
    'DBInstanceArn': obj.dbInstanceArn,
    'EnabledCloudwatchLogsExports': obj.enabledCloudwatchLogsExports?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbdbSubnetGroup
 */
export interface DocDbdbSubnetGroup {
  /**
   * @schema DocDbdbSubnetGroup#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema DocDbdbSubnetGroup#DBSubnetGroupDescription
   */
  readonly dbSubnetGroupDescription?: string;

  /**
   * @schema DocDbdbSubnetGroup#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema DocDbdbSubnetGroup#SubnetGroupStatus
   */
  readonly subnetGroupStatus?: string;

  /**
   * @schema DocDbdbSubnetGroup#Subnets
   */
  readonly subnets?: DocDbSubnet[];

  /**
   * @schema DocDbdbSubnetGroup#DBSubnetGroupArn
   */
  readonly dbSubnetGroupArn?: string;

}

/**
 * Converts an object of type 'DocDbdbSubnetGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbdbSubnetGroup(obj: DocDbdbSubnetGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBSubnetGroupName': obj.dbSubnetGroupName,
    'DBSubnetGroupDescription': obj.dbSubnetGroupDescription,
    'VpcId': obj.vpcId,
    'SubnetGroupStatus': obj.subnetGroupStatus,
    'Subnets': obj.subnets?.map(y => toJson_DocDbSubnet(y)),
    'DBSubnetGroupArn': obj.dbSubnetGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbGlobalCluster
 */
export interface DocDbGlobalCluster {
  /**
   * @schema DocDbGlobalCluster#GlobalClusterIdentifier
   */
  readonly globalClusterIdentifier?: string;

  /**
   * @schema DocDbGlobalCluster#GlobalClusterResourceId
   */
  readonly globalClusterResourceId?: string;

  /**
   * @schema DocDbGlobalCluster#GlobalClusterArn
   */
  readonly globalClusterArn?: string;

  /**
   * @schema DocDbGlobalCluster#Status
   */
  readonly status?: string;

  /**
   * @schema DocDbGlobalCluster#Engine
   */
  readonly engine?: string;

  /**
   * @schema DocDbGlobalCluster#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DocDbGlobalCluster#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema DocDbGlobalCluster#StorageEncrypted
   */
  readonly storageEncrypted?: boolean;

  /**
   * @schema DocDbGlobalCluster#DeletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * @schema DocDbGlobalCluster#GlobalClusterMembers
   */
  readonly globalClusterMembers?: DocDbGlobalClusterMember[];

}

/**
 * Converts an object of type 'DocDbGlobalCluster' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbGlobalCluster(obj: DocDbGlobalCluster | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalClusterIdentifier': obj.globalClusterIdentifier,
    'GlobalClusterResourceId': obj.globalClusterResourceId,
    'GlobalClusterArn': obj.globalClusterArn,
    'Status': obj.status,
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'DatabaseName': obj.databaseName,
    'StorageEncrypted': obj.storageEncrypted,
    'DeletionProtection': obj.deletionProtection,
    'GlobalClusterMembers': obj.globalClusterMembers?.map(y => toJson_DocDbGlobalClusterMember(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbFilter
 */
export interface DocDbFilter {
  /**
   * @schema DocDbFilter#Name
   */
  readonly name?: string;

  /**
   * @schema DocDbFilter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'DocDbFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbFilter(obj: DocDbFilter | undefined): Record<string, any> | undefined {
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
 * @schema DocDbCertificate
 */
export interface DocDbCertificate {
  /**
   * @schema DocDbCertificate#CertificateIdentifier
   */
  readonly certificateIdentifier?: string;

  /**
   * @schema DocDbCertificate#CertificateType
   */
  readonly certificateType?: string;

  /**
   * @schema DocDbCertificate#Thumbprint
   */
  readonly thumbprint?: string;

  /**
   * @schema DocDbCertificate#ValidFrom
   */
  readonly validFrom?: string;

  /**
   * @schema DocDbCertificate#ValidTill
   */
  readonly validTill?: string;

  /**
   * @schema DocDbCertificate#CertificateArn
   */
  readonly certificateArn?: string;

}

/**
 * Converts an object of type 'DocDbCertificate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbCertificate(obj: DocDbCertificate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateIdentifier': obj.certificateIdentifier,
    'CertificateType': obj.certificateType,
    'Thumbprint': obj.thumbprint,
    'ValidFrom': obj.validFrom,
    'ValidTill': obj.validTill,
    'CertificateArn': obj.certificateArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbParameter
 */
export interface DocDbParameter {
  /**
   * @schema DocDbParameter#ParameterName
   */
  readonly parameterName?: string;

  /**
   * @schema DocDbParameter#ParameterValue
   */
  readonly parameterValue?: string;

  /**
   * @schema DocDbParameter#Description
   */
  readonly description?: string;

  /**
   * @schema DocDbParameter#Source
   */
  readonly source?: string;

  /**
   * @schema DocDbParameter#ApplyType
   */
  readonly applyType?: string;

  /**
   * @schema DocDbParameter#DataType
   */
  readonly dataType?: string;

  /**
   * @schema DocDbParameter#AllowedValues
   */
  readonly allowedValues?: string;

  /**
   * @schema DocDbParameter#IsModifiable
   */
  readonly isModifiable?: boolean;

  /**
   * @schema DocDbParameter#MinimumEngineVersion
   */
  readonly minimumEngineVersion?: string;

  /**
   * @schema DocDbParameter#ApplyMethod
   */
  readonly applyMethod?: string;

}

/**
 * Converts an object of type 'DocDbParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbParameter(obj: DocDbParameter | undefined): Record<string, any> | undefined {
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
 * @schema DocDbdbClusterSnapshotAttributesResult
 */
export interface DocDbdbClusterSnapshotAttributesResult {
  /**
   * @schema DocDbdbClusterSnapshotAttributesResult#DBClusterSnapshotIdentifier
   */
  readonly dbClusterSnapshotIdentifier?: string;

  /**
   * @schema DocDbdbClusterSnapshotAttributesResult#DBClusterSnapshotAttributes
   */
  readonly dbClusterSnapshotAttributes?: DocDbdbClusterSnapshotAttribute[];

}

/**
 * Converts an object of type 'DocDbdbClusterSnapshotAttributesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbdbClusterSnapshotAttributesResult(obj: DocDbdbClusterSnapshotAttributesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterSnapshotIdentifier': obj.dbClusterSnapshotIdentifier,
    'DBClusterSnapshotAttributes': obj.dbClusterSnapshotAttributes?.map(y => toJson_DocDbdbClusterSnapshotAttribute(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbdbEngineVersion
 */
export interface DocDbdbEngineVersion {
  /**
   * @schema DocDbdbEngineVersion#Engine
   */
  readonly engine?: string;

  /**
   * @schema DocDbdbEngineVersion#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DocDbdbEngineVersion#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema DocDbdbEngineVersion#DBEngineDescription
   */
  readonly dbEngineDescription?: string;

  /**
   * @schema DocDbdbEngineVersion#DBEngineVersionDescription
   */
  readonly dbEngineVersionDescription?: string;

  /**
   * @schema DocDbdbEngineVersion#ValidUpgradeTarget
   */
  readonly validUpgradeTarget?: DocDbUpgradeTarget[];

  /**
   * @schema DocDbdbEngineVersion#ExportableLogTypes
   */
  readonly exportableLogTypes?: string[];

  /**
   * @schema DocDbdbEngineVersion#SupportsLogExportsToCloudwatchLogs
   */
  readonly supportsLogExportsToCloudwatchLogs?: boolean;

}

/**
 * Converts an object of type 'DocDbdbEngineVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbdbEngineVersion(obj: DocDbdbEngineVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'DBParameterGroupFamily': obj.dbParameterGroupFamily,
    'DBEngineDescription': obj.dbEngineDescription,
    'DBEngineVersionDescription': obj.dbEngineVersionDescription,
    'ValidUpgradeTarget': obj.validUpgradeTarget?.map(y => toJson_DocDbUpgradeTarget(y)),
    'ExportableLogTypes': obj.exportableLogTypes?.map(y => y),
    'SupportsLogExportsToCloudwatchLogs': obj.supportsLogExportsToCloudwatchLogs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbEngineDefaults
 */
export interface DocDbEngineDefaults {
  /**
   * @schema DocDbEngineDefaults#DBParameterGroupFamily
   */
  readonly dbParameterGroupFamily?: string;

  /**
   * @schema DocDbEngineDefaults#Marker
   */
  readonly marker?: string;

  /**
   * @schema DocDbEngineDefaults#Parameters
   */
  readonly parameters?: DocDbParameter[];

}

/**
 * Converts an object of type 'DocDbEngineDefaults' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbEngineDefaults(obj: DocDbEngineDefaults | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBParameterGroupFamily': obj.dbParameterGroupFamily,
    'Marker': obj.marker,
    'Parameters': obj.parameters?.map(y => toJson_DocDbParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbEventCategoriesMap
 */
export interface DocDbEventCategoriesMap {
  /**
   * @schema DocDbEventCategoriesMap#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema DocDbEventCategoriesMap#EventCategories
   */
  readonly eventCategories?: string[];

}

/**
 * Converts an object of type 'DocDbEventCategoriesMap' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbEventCategoriesMap(obj: DocDbEventCategoriesMap | undefined): Record<string, any> | undefined {
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
 * @schema DocDbEvent
 */
export interface DocDbEvent {
  /**
   * @schema DocDbEvent#SourceIdentifier
   */
  readonly sourceIdentifier?: string;

  /**
   * @schema DocDbEvent#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema DocDbEvent#Message
   */
  readonly message?: string;

  /**
   * @schema DocDbEvent#EventCategories
   */
  readonly eventCategories?: string[];

  /**
   * @schema DocDbEvent#Date
   */
  readonly date?: string;

  /**
   * @schema DocDbEvent#SourceArn
   */
  readonly sourceArn?: string;

}

/**
 * Converts an object of type 'DocDbEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbEvent(obj: DocDbEvent | undefined): Record<string, any> | undefined {
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
 * @schema DocDbOrderableDbInstanceOption
 */
export interface DocDbOrderableDbInstanceOption {
  /**
   * @schema DocDbOrderableDbInstanceOption#Engine
   */
  readonly engine?: string;

  /**
   * @schema DocDbOrderableDbInstanceOption#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DocDbOrderableDbInstanceOption#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema DocDbOrderableDbInstanceOption#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema DocDbOrderableDbInstanceOption#AvailabilityZones
   */
  readonly availabilityZones?: DocDbAvailabilityZone[];

  /**
   * @schema DocDbOrderableDbInstanceOption#Vpc
   */
  readonly vpc?: boolean;

}

/**
 * Converts an object of type 'DocDbOrderableDbInstanceOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbOrderableDbInstanceOption(obj: DocDbOrderableDbInstanceOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Engine': obj.engine,
    'EngineVersion': obj.engineVersion,
    'DBInstanceClass': obj.dbInstanceClass,
    'LicenseModel': obj.licenseModel,
    'AvailabilityZones': obj.availabilityZones?.map(y => toJson_DocDbAvailabilityZone(y)),
    'Vpc': obj.vpc,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbCloudwatchLogsExportConfiguration
 */
export interface DocDbCloudwatchLogsExportConfiguration {
  /**
   * @schema DocDbCloudwatchLogsExportConfiguration#EnableLogTypes
   */
  readonly enableLogTypes?: string[];

  /**
   * @schema DocDbCloudwatchLogsExportConfiguration#DisableLogTypes
   */
  readonly disableLogTypes?: string[];

}

/**
 * Converts an object of type 'DocDbCloudwatchLogsExportConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbCloudwatchLogsExportConfiguration(obj: DocDbCloudwatchLogsExportConfiguration | undefined): Record<string, any> | undefined {
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
 * @schema DocDbPendingMaintenanceAction
 */
export interface DocDbPendingMaintenanceAction {
  /**
   * @schema DocDbPendingMaintenanceAction#Action
   */
  readonly action?: string;

  /**
   * @schema DocDbPendingMaintenanceAction#AutoAppliedAfterDate
   */
  readonly autoAppliedAfterDate?: string;

  /**
   * @schema DocDbPendingMaintenanceAction#ForcedApplyDate
   */
  readonly forcedApplyDate?: string;

  /**
   * @schema DocDbPendingMaintenanceAction#OptInStatus
   */
  readonly optInStatus?: string;

  /**
   * @schema DocDbPendingMaintenanceAction#CurrentApplyDate
   */
  readonly currentApplyDate?: string;

  /**
   * @schema DocDbPendingMaintenanceAction#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'DocDbPendingMaintenanceAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbPendingMaintenanceAction(obj: DocDbPendingMaintenanceAction | undefined): Record<string, any> | undefined {
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
 * @schema DocDbdbClusterMember
 */
export interface DocDbdbClusterMember {
  /**
   * @schema DocDbdbClusterMember#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema DocDbdbClusterMember#IsClusterWriter
   */
  readonly isClusterWriter?: boolean;

  /**
   * @schema DocDbdbClusterMember#DBClusterParameterGroupStatus
   */
  readonly dbClusterParameterGroupStatus?: string;

  /**
   * @schema DocDbdbClusterMember#PromotionTier
   */
  readonly promotionTier?: number;

}

/**
 * Converts an object of type 'DocDbdbClusterMember' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbdbClusterMember(obj: DocDbdbClusterMember | undefined): Record<string, any> | undefined {
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
 * @schema DocDbVpcSecurityGroupMembership
 */
export interface DocDbVpcSecurityGroupMembership {
  /**
   * @schema DocDbVpcSecurityGroupMembership#VpcSecurityGroupId
   */
  readonly vpcSecurityGroupId?: string;

  /**
   * @schema DocDbVpcSecurityGroupMembership#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'DocDbVpcSecurityGroupMembership' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbVpcSecurityGroupMembership(obj: DocDbVpcSecurityGroupMembership | undefined): Record<string, any> | undefined {
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
 * @schema DocDbdbClusterRole
 */
export interface DocDbdbClusterRole {
  /**
   * @schema DocDbdbClusterRole#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DocDbdbClusterRole#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'DocDbdbClusterRole' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbdbClusterRole(obj: DocDbdbClusterRole | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleArn': obj.roleArn,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbEndpoint
 */
export interface DocDbEndpoint {
  /**
   * @schema DocDbEndpoint#Address
   */
  readonly address?: string;

  /**
   * @schema DocDbEndpoint#Port
   */
  readonly port?: number;

  /**
   * @schema DocDbEndpoint#HostedZoneId
   */
  readonly hostedZoneId?: string;

}

/**
 * Converts an object of type 'DocDbEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbEndpoint(obj: DocDbEndpoint | undefined): Record<string, any> | undefined {
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
 * @schema DocDbPendingModifiedValues
 */
export interface DocDbPendingModifiedValues {
  /**
   * @schema DocDbPendingModifiedValues#DBInstanceClass
   */
  readonly dbInstanceClass?: string;

  /**
   * @schema DocDbPendingModifiedValues#AllocatedStorage
   */
  readonly allocatedStorage?: number;

  /**
   * @schema DocDbPendingModifiedValues#MasterUserPassword
   */
  readonly masterUserPassword?: string;

  /**
   * @schema DocDbPendingModifiedValues#Port
   */
  readonly port?: number;

  /**
   * @schema DocDbPendingModifiedValues#BackupRetentionPeriod
   */
  readonly backupRetentionPeriod?: number;

  /**
   * @schema DocDbPendingModifiedValues#MultiAZ
   */
  readonly multiAz?: boolean;

  /**
   * @schema DocDbPendingModifiedValues#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DocDbPendingModifiedValues#LicenseModel
   */
  readonly licenseModel?: string;

  /**
   * @schema DocDbPendingModifiedValues#Iops
   */
  readonly iops?: number;

  /**
   * @schema DocDbPendingModifiedValues#DBInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema DocDbPendingModifiedValues#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema DocDbPendingModifiedValues#CACertificateIdentifier
   */
  readonly caCertificateIdentifier?: string;

  /**
   * @schema DocDbPendingModifiedValues#DBSubnetGroupName
   */
  readonly dbSubnetGroupName?: string;

  /**
   * @schema DocDbPendingModifiedValues#PendingCloudwatchLogsExports
   */
  readonly pendingCloudwatchLogsExports?: DocDbPendingCloudwatchLogsExports;

}

/**
 * Converts an object of type 'DocDbPendingModifiedValues' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbPendingModifiedValues(obj: DocDbPendingModifiedValues | undefined): Record<string, any> | undefined {
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
    'PendingCloudwatchLogsExports': toJson_DocDbPendingCloudwatchLogsExports(obj.pendingCloudwatchLogsExports),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbdbInstanceStatusInfo
 */
export interface DocDbdbInstanceStatusInfo {
  /**
   * @schema DocDbdbInstanceStatusInfo#StatusType
   */
  readonly statusType?: string;

  /**
   * @schema DocDbdbInstanceStatusInfo#Normal
   */
  readonly normal?: boolean;

  /**
   * @schema DocDbdbInstanceStatusInfo#Status
   */
  readonly status?: string;

  /**
   * @schema DocDbdbInstanceStatusInfo#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'DocDbdbInstanceStatusInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbdbInstanceStatusInfo(obj: DocDbdbInstanceStatusInfo | undefined): Record<string, any> | undefined {
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
 * @schema DocDbSubnet
 */
export interface DocDbSubnet {
  /**
   * @schema DocDbSubnet#SubnetIdentifier
   */
  readonly subnetIdentifier?: string;

  /**
   * @schema DocDbSubnet#SubnetAvailabilityZone
   */
  readonly subnetAvailabilityZone?: DocDbAvailabilityZone;

  /**
   * @schema DocDbSubnet#SubnetStatus
   */
  readonly subnetStatus?: string;

}

/**
 * Converts an object of type 'DocDbSubnet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbSubnet(obj: DocDbSubnet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetIdentifier': obj.subnetIdentifier,
    'SubnetAvailabilityZone': toJson_DocDbAvailabilityZone(obj.subnetAvailabilityZone),
    'SubnetStatus': obj.subnetStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbGlobalClusterMember
 */
export interface DocDbGlobalClusterMember {
  /**
   * @schema DocDbGlobalClusterMember#DBClusterArn
   */
  readonly dbClusterArn?: string;

  /**
   * @schema DocDbGlobalClusterMember#Readers
   */
  readonly readers?: string[];

  /**
   * @schema DocDbGlobalClusterMember#IsWriter
   */
  readonly isWriter?: boolean;

}

/**
 * Converts an object of type 'DocDbGlobalClusterMember' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbGlobalClusterMember(obj: DocDbGlobalClusterMember | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DBClusterArn': obj.dbClusterArn,
    'Readers': obj.readers?.map(y => y),
    'IsWriter': obj.isWriter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbdbClusterSnapshotAttribute
 */
export interface DocDbdbClusterSnapshotAttribute {
  /**
   * @schema DocDbdbClusterSnapshotAttribute#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema DocDbdbClusterSnapshotAttribute#AttributeValues
   */
  readonly attributeValues?: string[];

}

/**
 * Converts an object of type 'DocDbdbClusterSnapshotAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbdbClusterSnapshotAttribute(obj: DocDbdbClusterSnapshotAttribute | undefined): Record<string, any> | undefined {
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
 * @schema DocDbUpgradeTarget
 */
export interface DocDbUpgradeTarget {
  /**
   * @schema DocDbUpgradeTarget#Engine
   */
  readonly engine?: string;

  /**
   * @schema DocDbUpgradeTarget#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema DocDbUpgradeTarget#Description
   */
  readonly description?: string;

  /**
   * @schema DocDbUpgradeTarget#AutoUpgrade
   */
  readonly autoUpgrade?: boolean;

  /**
   * @schema DocDbUpgradeTarget#IsMajorVersionUpgrade
   */
  readonly isMajorVersionUpgrade?: boolean;

}

/**
 * Converts an object of type 'DocDbUpgradeTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbUpgradeTarget(obj: DocDbUpgradeTarget | undefined): Record<string, any> | undefined {
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
 * @schema DocDbAvailabilityZone
 */
export interface DocDbAvailabilityZone {
  /**
   * @schema DocDbAvailabilityZone#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DocDbAvailabilityZone' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbAvailabilityZone(obj: DocDbAvailabilityZone | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DocDbPendingCloudwatchLogsExports
 */
export interface DocDbPendingCloudwatchLogsExports {
  /**
   * @schema DocDbPendingCloudwatchLogsExports#LogTypesToEnable
   */
  readonly logTypesToEnable?: string[];

  /**
   * @schema DocDbPendingCloudwatchLogsExports#LogTypesToDisable
   */
  readonly logTypesToDisable?: string[];

}

/**
 * Converts an object of type 'DocDbPendingCloudwatchLogsExports' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DocDbPendingCloudwatchLogsExports(obj: DocDbPendingCloudwatchLogsExports | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogTypesToEnable': obj.logTypesToEnable?.map(y => y),
    'LogTypesToDisable': obj.logTypesToDisable?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
